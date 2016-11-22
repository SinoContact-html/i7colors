(function ($) {
    var head = $.Base.Event.extend({
        init: function (pOpts) {
            $.extend(true, this, {
                $headContainer: $('#mall_header'),
                topClass: ".topbar",
                headerBoxClass: ".header_box",
                $loginContainer: $('#topbar_login_btn'),
                $quitContainer: $('#topbar_quit'),
                $mymenuContainer: $('#topbar_my_top'),
                $registerContainer: $('#topbar_register'),
                $greetContainer: $('#topbar_greet'),
                $msnContainer: $('.msn'),
                $msnInfoContainer: $('#msn_box_info'),
                $msn_boxContainer: $('.msn_box'),
                $emptyCarContainer: $('#mallNavCartEmptyIcon'),
                $goodsCarContainer: $('#mallNavCartHasGoods'),
                $shopCarContainer: $('.shopCar'),
                $shopCountContainer: $('#icon_shopCount'),
                $CartTotalTxt: $('#mallNavCartCounTxt'),
                hoverClass: "hover",
                goodListClass: ".shop_list",
                msnBoxClass: '.msn_box'
            }, pOpts);
            this.setOption();
            this.onlineService();
            this.bindEvent();
            this.setMenuActive();
            this.loginInfo();
        },
        setOption: function () {
            var self = this;
            self.headerBox = self.$headContainer.find(self.headerBoxClass);
        },
        bindEvent: function () {
            var self = this;

            if (self.$shopCarContainer) {
                self.$shopCarContainer.mouseenter(function () {
                    //我的菜单
                    $(this).addClass(self.hoverClass).find(self.goodListClass).show();
                }).mouseleave(function () {
                    $(this).removeClass(self.hoverClass).find(self.goodListClass).hide();
                });
            }

            if (self.$msnContainer) {
                self.$msnContainer.mouseenter(function () {
                    //我的菜单
                    if (self.$msn_boxContainer.find('p').length > 0) {
                        $(this).addClass(self.hoverClass).find(self.msnBoxClass).show();
                    }
                }).mouseleave(function () {
                    $(this).removeClass(self.hoverClass).find(self.msnBoxClass).hide();
                });
            }
        },
        setMenuActive: function () {
            //一级导航跳转规则
            var urlsubstring = function (url) {
                if (url.indexOf("?") > -1) {
                    url = url.substring(0, url.indexOf("?"));
                }
                if (url.substring(url.lastIndexOf("/") + 1).length < 1) {
                    return url.substring(0, url.lastIndexOf("/"));
                }
                return url;
            }
            var self = this,
             nowUrl = urlsubstring(location.href);

            self.headerBox.find("ul.nav li").each(function () {
                var $li = $(this),
                    menuUrl = urlsubstring($li.find("a").attr("href")),
                    domainName = location.protocol + "//" + location.host;

                if (menuUrl == nowUrl) {
                    self.headerBox.find("ul.nav li").removeClass("on");
                    $li.addClass("on");
                    return false;
                }
                self.headerBox.find("ul.nav li").removeClass("on");

                if (nowUrl.indexOf("/v") > -1) {
                    //找刚首页
                    if (nowUrl.substring(nowUrl.indexOf("/v")).length <= 2) {
                        self.headerBox.find("ul.nav").find("#head_home").addClass("on"); //首页
                        return false;
                    }
                    return;
                }

                if (domainName == urlPath.mallUrl) {
                    //商城其它页面
                    self.headerBox.find("ul.nav").find("#head_mall").addClass("on");
                    return false;
                }
                if (domainName == urlPath.ziyuanUrl) {
                    if (nowUrl == self.headerBox.find("ul.nav").find("#head_spot a").attr("href")) {
                        //搜现货
                        self.headerBox.find("ul.nav").find("#head_spot").addClass("on");
                        return false;
                    }
                    //资源单
                    self.headerBox.find("ul.nav").find("#head_zyd").addClass("on");
                    return false;
                }
                if (domainName.indexOf("index") > -1) {
                    //搜现货
                    self.headerBox.find("ul.nav").find("#head_hangqing").addClass("on");
                }
            });
        },
        GetTopInfo: function (rt, fun) {
            var param = new paramAjax({
                url: urlPath.memberUrl + "/UserMessage/" + rt,
                dataType: "jsonp",
                type: "get",
                data: { "rd": Math.random() }
            });
            http.ajax(param, function (data) {
                if (typeof (fun) == "function") {
                    fun(data || []);
                }
            });
        },
        SetMessage: function (data, totalQuantity) {
            var self = this;
            var paymentY = 0,
                paymentN = 0,
                compayStatus = false,
                hasAuthCompany = false;

            if (data != null)
                paymentY = data.paymentY, paymentN = data.paymentN, compayStatus = data.compayStatus, hasAuthCompany = data.hasAuthCompany;


            if (hasAuthCompany) {
                $('#topbar_accountconvert').show();
                if ($('#head_accountconvert') != null && $('#head_accountconvert') !== undefined) {
                    $('#head_accountconvert').show();
                }
            }

            //插入字符串拼接 
            var Gethtm = function () {
                var htm = "";
                htm += totalQuantity > 0 ? "<p id=\"cartquantity\"><label>" + totalQuantity + "</label>款购物车产品待下单<a href=\"" + urlPath.mallUrl + "/order/cart.aspx\">去查看</a></p>" : "";
                htm += paymentY > 0 ? "<p>" + paymentY + "笔订单未付款<a href=\"" + urlPath.memberUrl + "/Account/MyOrder\" onclick=\"AddLog(6)\">去查看</a></p>" : "";
                htm += paymentN > 0 ? "<p>" + paymentN + "笔订单未填提货函<a href=\"" + urlPath.memberUrl + "/Account/MyOrder\" onclick=\"AddLog(7)\">去查看</a></p>" : "";
                if (compayStatus) {
                    htm += compayStatus;
                }
                return htm;
            }

            self.$msn_boxContainer.html(Gethtm());

            var infonum = self.$msn_boxContainer.find('a').length;
            if (infonum > 0) {
                self.$msnInfoContainer.html('消息中心<span>' + infonum + '</span>');
            }
            else {
                self.$msnInfoContainer.html('消息中心<span></span>');
            }

            return;
        },
        SetCart: function (data) {
            var self = this,
                cart = data;

            if (cart == null || cart.length === 0) {
                self.$emptyCarContainer.show();
                self.$goodsCarContainer.hide();
                self.$goodsCarContainer.find(self.goodListClass + ' .mall .listBox').html('');
                self.$shopCountContainer.html('');
                return 0;
            }

            self.$emptyCarContainer.hide();
            self.$goodsCarContainer.show();

            var items = [],
                totalWeight = 0,//总重量
                totalPrice = 0,//总价格
                totalQuantity = 0;//总数量

            for (var i = 0; i < cart.length; ++i) {
                var item = cart[i],
                    qty = parseInt(item.qty),
                    weight = parseFloat(item.piece_weight) * qty;

                totalWeight += weight;
                totalPrice += parseFloat(item.price) * weight;
                totalQuantity += qty;

                if (i >= 3)
                    continue;

                items.push(
                    "<li class=\"liCart\">" +
                    "<div class=\"name\">" +
                    "<p class=\"factoryname\">" +
                            item.factory_name + " " +
                            item.category_name + " " +
                            item.material_name +
                        "</p>" +
                        "<p class=\"type\">" +
                            item.specification_name +
                        "</p>" +
                    "</div>" +
                    "<div class=\"r\">" +
                        "<div class=\"price\">" +
                            "￥" + self.parseFloat(item.price, 2) + " X " + qty +
                        "</div>" +
                     "</div>" +
                    "</li>"
                );

            }
            totalWeight = self.parseFloat(totalWeight, 3);
            totalPrice = self.parseFloat(totalPrice, 2);

            self.$goodsCarContainer.find(self.goodListClass + ' .mall .listBox').html(items.join(''));
            self.$shopCountContainer.html('<i class=\"icon_shopCount\">' + totalQuantity + '</i>').show();

            self.$CartTotalTxt.html(
                "<span class=\"sum\">" +
                "<i class=\"num\">¥" +
                totalPrice + "</i></span>" +
                "共<span class=\"num\">" +
                totalQuantity + "</span>件" +
                "<span class=\"num\">" +
                totalWeight + "</span>吨"
                );
            return totalQuantity;
        },
        loginInfo: function () {
            var self = this,
             real_name = $.cookie(window.REALNAME),
            mobile = $.cookie(window.LOGINNAME);

            if (real_name != undefined && mobile != undefined) {
                self.GetTopInfo("GetUserMessage", function (message) {
                    var cart = message.cartList,
                        totalQuantity = 0;

                    totalQuantity = self.SetCart(cart);
                    self.SetMessage(message, totalQuantity);
                });

                self.$registerContainer.hide();
            }
        },
        onlineService: function () {
            var self = this;
            //引用头部，自动带入在线客服
            if ($(self.headerBoxClass).find(".nav").length > 0)
                var gotop = new goTop();
        },
        parseFloat: function (num, dightNum) {
            return Math.round(num * Math.pow(10, dightNum)) / Math.pow(10, dightNum);
        }
    });
    var memberLeftMenu = $.Base.Event.extend({
        init: function (pOpts) {
            $.extend(true, this, {
                $menuContainer: ""
            }, pOpts);
            this.loadMenul();
        },
        loadMenul: function () {
            var self = this;
            if (!$menuContainer || $menuContainer.length <= 0)
                return;

            var param = new paramAjax({
                url: urlPath.memberUrl + "/UserMessage/GetUserMessage",
                dataType: "jsonp",
                type: "get",
                data: { "rd": Math.random() }
            });
            http.ajax(param, function (data) {
                alert(data);
            });
        }
    });

    $(function () {
        //头部文件
        new head({
            $headContainer: $("#mall_header"),
            $loginContainer: $("#topbar_login_btn"),
            $quitContainer: $("#topbar_quit"),
            $shopCarContainer: $(".shopCar"),
            $registerContainer: $("#topbar_register"),
            $greetContainer: $("#topbar_greet")
        });
    });
})(jQuery)//头部
