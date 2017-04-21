(function (w) {
    function Irouter(win) {
        this.view = w.document.getElementsByTagName("Is-view")[0];
        this.styleDom = document.getElementsByTagName("style")[0] ? document.getElementsByTagName("style")[0] : function () {
            let styDom = document.createElement("style");
            w.document.body.appendChild(styDom);
            return styDom;
        }();
        this.routes = {};
        this.currentUrl = '';
        this.setStyle([
            {
                name: "is-view",
                styles: {
                    display: "block",
                    width: 100 + "%"
                }
            }
        ]);
        this.init(win);
    }

    Irouter.prototype = {
        router: function (config) {
            for(let i=0;i<config.length;i++){
                this.routes[config[i].path] =config[i].component? function () {
                    this._this.ajax.get(this.url,function (msg) {
                        this._this.view.innerHTML=msg.responseText;
                    }.bind(this))
                }.bind({
                    _this:this,
                    url:config[i].component
                }):function () {};
            }
        },
        callback:function () {
            this.currentUrl = location.hash.slice(1) || '/';
            this.routes[this.currentUrl]();
        },
        init: function (win) {
            win.addEventListener('load', this.callback.bind(this), false);
            win.addEventListener('hashchange', this.callback.bind(this), false);
            return this
        },
        ajax:{
            get: function (url,fn) {
                let obj = new XMLHttpRequest();
                obj.open('GET', url, true);
                obj.onreadystatechange = function () {
                    if (obj.readyState === 4 && obj.status === 200 || obj.status === 304) {
                        fn(obj);
                    }
                };
                obj.send(null);
            },
            post: function (url,fn,data) {
                let obj = new XMLHttpRequest();
                obj.open("POST", url, true);
                obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                obj.onreadystatechange = function () {
                    if (obj.readyState === 4 && (obj.status === 200 || obj.status === 304)) {
                        fn(obj);
                    }
                };
                obj.send(data);
            }
        },
        setStyle: function (o) {
            for(let m=0;m<o.length;m++){
                this.styleDom.innerHTML += this.sToc(o[m]);
            }
        },
        sToc: function (o) {
                let arrkey = [], arrname = [], reg = /[A-Z]/, str = "";
                for (let x in o.styles) {
                    arrkey.push(o.styles[x]);
                    arrname.push(x);
                }
                for (let i = 0; i < arrname.length; i++) {
                    for (let j = 0; j < arrname[i].length; j++) {
                        if (reg.test(arrname[i][j])) {
                            arrname[i] = arrname[i].replace(arrname[i][j], "-" + arrname[i][j].toLowerCase());
                        }
                    }
                }
                for (let k = 0; k < arrname.length; k++) {
                    str += arrname[k] + ":" + arrkey[k] + ";";
                }
                return o.name + "{" + str + "}";
        }
    };
    return w.IsRouter = {
        init: function (win) {
            return new Irouter(win)
        }
    };
})(window);