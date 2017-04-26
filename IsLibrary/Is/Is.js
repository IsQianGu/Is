(function (w) {
    var is = function (e) {
        this.container = Object();
        this.container.isys={
            w:w,
            d:w.document,
            b:w.document.body
        };
        this.is_data = this.Select(e);
    };
    is.prototype = {
        is_log: function (e) {
            console.log(e);
            console.log(this.is_data);
            return this
        },
        itools: {
            strdivision: function (v, s) {
                var index = false, arr = [];
                for (var i = 0; i < s.length; i++) {
                    if (s[i] === v[0]) {
                        for (var j = 0; j < v.length; j++) {
                            if (s[i + j] === v[j]) {
                                index = true
                            } else {
                                index = false;
                                break;
                            }
                        }
                    }
                    if (index) {
                        arr.push(i);
                        index = false;
                    }
                }
                return arr
            }
        },
        ifor: function (v, i, s, k, f) {
            var sf = String(f).substring(0, String(f).indexOf("{")), reg = /[i][n][d][e][x]/g,
                regAbs = /[i][n][d][e][x][A][b][s]/g, ix = this.itools.strdivision("$index", sf),
                ixa = this.itools.strdivision("$indexAbs", sf);
            if (ix.length === 2) {
                forGo("All");
            } else if (regAbs.test(sf)) {
                forGo("Abs");
            } else if (reg.test(sf)) {
                forGo(true);
            } else {
                forGo(false);
            }
            function forGo(e) {
                var abs = -1;
                if (v) {
                    for (var j = i; j > s; j += k) {
                        abs++;
                        if (!e) {
                            f()
                        } else if (e === "All") {
                            if (ixa[0] === ix[0]) {
                                f(abs, j)
                            } else {
                                f(j, abs)
                            }
                        } else if (e === "Abs") {
                            f(abs)
                        } else {
                            f(j)
                        }
                    }
                } else {
                    for (var j = i; j < s; j += k) {
                        abs++;
                        if (!e) {
                            f()
                        } else if (e === "All") {
                            if (ixa[0] === ix[0]) {
                                f(abs, j)
                            } else {
                                f(j, abs)
                            }
                        } else if (e === "Abs") {
                            f(abs)
                        } else {
                            f(j)
                        }
                    }
                }
            }

            return this
        },
        css: function (s) {

        },
        Model:function (m, s) {
            var model=document.createElement(m);
            this.style(s,model);
            return model
        },
        style: function (s, d) {
            if (!d) {
                d = this.is_data
            }
            var arrkey = [], arrname = [], reg = /[A-Z]/;
            for (var x in s) {
                arrkey.push(s[x]);
                arrname.push(x);
            }
            for (var i = 0; i < arrname.length; i++) {
                for (var j = 0; j < arrname[i].length; j++) {
                    if (reg.test(arrname[i][j])) {
                        arrname[i] = arrname[i].replace(arrname[i][j], "-" + arrname[i][j].toLowerCase());
                    }
                }
            }
            for (var k = 0; k < arrname.length; k++) {
                d.style.cssText += arrname[k] + ":" + arrkey[k];
            }
            return this
        },
        animate: function (f, i, c) {
            this.is_data.style.cssText += "transition" + ":" + "all " + (i / 1000) + "s";
            this.style(f);
            var t = setTimeout(c,i);
        },
        getDefaultStyle:function (obj,attribute) {
            return obj.currentStyle?obj.currentStyle[attribute]:document.defaultView.getComputedStyle(obj,false)[attribute];
        },
        stretching: function () {
            var _this = this;
            _this.container.stretching = Object();
            _this.container.stretching.clise=function () {
                var _this=this;
                console.log(_this.style.cursor);

            };
            _this.is_data.onmousemove=function (ev) {
                _this.container.stretching.Evone = window.event || ev;
                _this.container.stretching.X = _this.container.stretching.Evone.clientX - _this.is_data.offsetLeft;
                _this.container.stretching.Y = _this.container.stretching.Evone.clientY - _this.is_data.offsetTop;
                _this.container.stretching.H=Number((String(_this.getDefaultStyle(_this.is_data,"height")).substring(0, _this.getDefaultStyle(_this.is_data,"height").length-2)));
                _this.container.stretching.W=Number((String(_this.getDefaultStyle(_this.is_data,"width")).substring(0, _this.getDefaultStyle(_this.is_data,"width").length-2)));
                if(_this.container.stretching.X>=_this.container.stretching.W-10&&_this.container.stretching.Y>=_this.container.stretching.H-10){
                    _this.is_data.style.cursor="se-resize";
                    _this.is_data.onmousedown=_this.container.stretching.clise
                }else{
                    if(_this.container.stretching.X>=_this.container.stretching.W-10){
                        _this.is_data.style.cursor="e-resize";
                        _this.is_data.onmousedown=_this.container.stretching.clise
                    }else{
                        if(_this.container.stretching.Y>=_this.container.stretching.H-10){
                            _this.is_data.style.cursor="s-resize";
                            _this.is_data.onmousedown=_this.container.stretching.clise
                        }else{
                            _this.is_data.style.cursor="default";
                        }
                    }
                }
            };
            _this.is_data.onmouseover=function () {

            }

        },
        Drag: function (n) {
            var _this = this;
            n = _this.Select(n);
            _this.style({position: "fixed"}, n).container.Drag = Object();
                _this.is_data.onmousedown = function (ev) {
                    _this.container.Drag.Evone = window.event || ev;
                    _this.container.Drag.X = _this.container.Drag.Evone.clientX - n.offsetLeft;
                    _this.container.Drag.Y = _this.container.Drag.Evone.clientY - n.offsetTop;
                    document.onmousemove = function (ev) {
                        _this.container.Drag.Evtwo = window.event || ev;
                        n.style.left = _this.container.Drag.Evtwo.clientX - _this.container.Drag.X + 'px';
                        n.style.top = _this.container.Drag.Evtwo.clientY - _this.container.Drag.Y + 'px';
                    }
                };
            _this.is_data.onmouseup= function () {
                document.onmousemove=undefined;
            };
            document.onmouseup= function () {
                document.onmousemove=undefined;
            }
        },
        mousemove:function (fn) {

        },
        Select: function (n) {
            var _this=this;
            _this.container.Select=Object();
            _this.container.Select.regAll=/[\*\:\>\<\.\#\[\]\(\)]/g;
            _this.container.Select.msg="";
            _this.container.Select.Record="";
            for(_this.container.Select.i=0;_this.container.Select.i<n.length;_this.container.Select.i++){
                // console.log(_this.container.Select.msg);
                if(_this.container.Select.regAll.test(n[_this.container.Select.i])){
                    if(_this.container.Select.msg.length>0){
                        switch (_this.container.Select.Record) {
                            case "#" :
                                if(_this.container.Select.idata.length){
                                    for(_this.container.Select.idata.i=0,_this.container.Select.idata.arr=[];i<_this.container.Select.idata.length;i++){
                                        arr.push(_this.container.isys.d.getElementById(_this.container.Select.msg));
                                    }
                                }

                                break;
                            case ".":
                                n=_this.container.isys.d.getElementsByClassName(_this.container.Select.msg);
                                break;
                            case "*":
                                n=_this.container.isys.d.getElementsByTagName("*");
                                break;
                            default :

                                break;
                        }
                        _this.container.Select.Record=n[_this.container.Select.i];
                    }else{
                        _this.container.Select.Record=n[_this.container.Select.i];
                    }
                }else{
                    _this.container.Select.msg+=n[_this.container.Select.i];
                }
            }
            if(_this.container.Select.Record===""&&_this.container.Select.Record!==""){
                _this.container.Select.idata=_this.container.isys.d.getElementsByTagName(_this.container.Select.msg);
            }else{

            }
            return _this.container.Select.idata;
        }
    };
    return w.$ = function (e) {
        return new is(e);
    }
})(window);