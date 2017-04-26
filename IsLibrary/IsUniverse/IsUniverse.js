(function () {
    'use strict';
    let isUniverse = window.$ = window.isUniverse = function (selector, context) {
        return new isUniverse.prototype.init(selector, context);
    };
    isUniverse.fn = isUniverse.prototype = {
        init: function (selector, context) {
            this.Select.Supernova=this;
            this.Select.Supernova.length=0;
            selector? (this.Select.init.strEl = selector,this.Select.selectInit(selector)):this.Select.init.strEl = null;
            this.Select.selectInit(selector);
            return this;
        },
        Select:{
            init:{},
            selectInit: function (el) {
                this.init.temparr = [];
                this.init.regAll = /[\=\"\'\*.\#\>\:\(\)\[\]\s]/;
                this.init.method = [];
                this.init.val = [];
                (typeof el) === "string" ? this.Pretreatment(el) : this.copyDom([el]);
            },
            Pretreatment: function (el, boo) {
                for (let i = 0, j = 0, ez = true, l = 0; i < el.length; i++) {
                    if (this.init.regAll.test(el[i])) {
                        this.init.method.push(el[i]);
                        j++;
                        if (el[i] === "=") {
                            for (let t = i + 1, c = true; t < el.length; t++) {
                                el[t] === "]" && c ? (c = false, i = t - 1) : 0;
                                c ? this.init.val[j - 1] === "href" ? this.init.val[j] = this.init.val[j] ? this.init.val[j] + el[t] : el[t] : el[t] !== "'" && el[t] !== '"' ? this.init.val[j] = this.init.val[j] ? this.init.val[j] + el[t] : el[t] : 0 : 0;
                            }
                        } else {
                            if (el[i] === ">" || el[i] === " ") {
                                let str = "", call = true;
                                ez = false;
                                l = 0;
                                for (let t = i + 1; t < el.length; t++) {
                                    this.init.regAll.test(el[t]) ? call = false : call ? (l++, str += el[t]) : 0;

                                }
                                str !== "" ? this.init.method.push(str) : 0;
                            }
                        }
                    } else {
                        ez ? this.init.val[j] = this.init.val[j] ? this.init.val[j] + el[i] : el[i] : 0;
                    }
                    l === 0 ? ez = true : l--;
                }
                this.Arrangement(boo);
            },
            Arrangement: function (boo) {
                let arr = [];
                for (let i = 0; i < this.init.val.length; i++) {
                    if (this.init.val[i]) {
                        arr.push(this.init.val[i])
                    }
                }
                this.init.val = arr;
                this.setEntrance(boo);
            },
            setEntrance: function (boo) {
                switch (this.init.method[0]) {
                    case "#":
                        this.Choice(this.init.val[0], "id").deleteStart(true, 1).deleteStart(false, 1);
                        break;
                    case ".":
                        this.Choice(this.init.val[0], "class").deleteStart(true, 1).deleteStart(false, 1);
                        break;
                    case "[":
                        this.Choice(this.init.val[1], this.init.val[0], boo).deleteStart(true, 3).deleteStart(false, 2);
                        break;
                    default:
                        this.Choice(this.init.val[0]).deleteStart(false, 1);
                        break;
                }
                this.twoTreatment();
            },
            Choice: function (v, c, boo) {
                boo ? this.iGalaxy(c, v) : this.copyDom(document.querySelectorAll(c ? "[" + c + "=" + v + "]" : v));
                return this
            },
            twoTreatment: function () {
                for (let i = 0,
                         max = this.init.method.length >= this.init.val.length ? this.init.method.length : this.init.val.length; i < max; i++) {
                    switch (this.init.method[0]) {
                        case ":":
                            if (this.init.method[1] === "(") {
                                this.blackHole(this.init.val.shift(), this.init.val.shift()).deleteStart(true, 3);
                            } else {
                                this.blackHole(this.init.val.shift()).deleteStart(true, 1);
                            }
                            break;
                        case "[":
                            this.deleteStart(true, 3);
                            this.iGalaxy(this.init.val.shift(), this.init.val.shift());
                            break;
                        case ">":
                            this.iComet(false);
                            break;
                        case " ":
                            this.iComet(true);
                            break;
                    }
                }
            },
            iGalaxy: function (name, val) {
                for (let i = 0; i < this.Supernova.length; i++) {
                    for (let s = 0; s < this.Supernova[i].attributes.length; s++) {
                        if (this.Supernova[i].attributes[s].nodeName === name) {
                            if (this.Supernova[i].attributes[s].nodeValue === val) {
                                this.init.temparr.push(this.Supernova[i]);
                            }
                        }
                    }
                }
                this.copyDom(this.init.temparr).release();
            },
            iStarquake: function (boo, str, sib, s) {
                sib ? this.copyDom(this.imerge(this.iprev(), this.inext(), s)) : boo ? this.copyDom(this.inext()) : this.copyDom(this.iprev());
                this.iLens(str);
                return this
            },
            imerge: function (a, b, s) {
                s ? b.reverse() : a.reverse();
                return a.concat(b)
            },
            iprev: function () {
                let arr = [];
                for (let i = 0; i < this.Supernova.length; i++) {
                    let sibling = this.Supernova[i];
                    for (let s = 0; s < 2;) {
                        if (sibling.previousElementSibling !== null) {
                            sibling = sibling.previousElementSibling;
                            arr.push(sibling);
                        } else {
                            s = 5;
                        }
                    }
                }
                return arr
            },
            inext: function () {
                let arr = [];
                for (let i = 0; i < this.Supernova.length; i++) {
                    let sibling = this.Supernova[i];
                    for (let s = 0; s < 2;) {
                        if (sibling.nextElementSibling !== null) {
                            sibling = sibling.nextElementSibling;
                            arr.push(sibling);
                        } else {
                            s = 5;
                        }
                    }
                }
                return arr
            },
            iLens: function (str) {
                switch (str[0]) {
                    case "[":
                        this.Pretreatment(str, true);
                        break;
                    case ".":
                        this.iGalaxy("class", String(str).substring(1, str.length));
                        break;
                    case "#":
                        this.iGalaxy("id", String(str).substring(1, str.length));
                        break;
                    case "*":

                        break;
                    default:
                        this.iAtom(str);
                        break;
                }
            },
            iAtom: function (str) {
                for (let i = 0; i < this.Supernova.length; i++) {
                    if (this.Supernova[i].nodeName === str.toUpperCase()) {
                        this.init.temparr.push(this.Supernova[i])
                    }
                }
                this.copyDom(this.init.temparr).release();
                return this
            },
            iComet: function (boo) {
                this.deleteStart(true, 1);
                if (this.init.method[0] === "." || this.init.method[0] === "#") {
                    this.iChild(this.init.method[0], this.init.val.shift(), boo).deleteStart(true, 1);
                } else {
                    if (this.init.method[0] === ":") {
                        this.iChild("*", " ", boo);
                    } else {
                        if (this.init.method[0] === "[") {
                            this.iChild("*", " ", boo);
                        } else {
                            this.iChild("&", this.init.method.shift(), boo);
                        }
                    }
                }
            },
            kComet: function (str, boo) {
                switch (str[0]) {
                    case "*":
                        this.iChild("*", " ", boo);
                        break;
                    case ".":
                        this.iChild(".", String(str).substring(1, str.length), boo);
                        break;
                    case "#":
                        this.iChild("#", String(str).substring(1, str.length), boo);
                        break;
                    case "[":
                        this.iChild("*", " ", boo).Pretreatment(str, true);
                        break;
                    default:
                        this.iChild("&", str, boo);
                        break;
                }
            },
            iChild: function (type, val, b) {
                switch (type) {
                    case ".":
                        this.attrChild("class", val, b);
                        break;
                    case "#":
                        this.attrChild("id", val, b);
                        break;
                    case "&":
                        this.typeChild(val, b);
                        break;
                    case "*":
                        this.allChild(b);
                        break;
                }
                return this
            },
            typeChild: function (v, bool) {
                if (bool) {
                    for (let i = 0; i < this.Supernova.length; i++) {
                        for (let s = 0; s < this.Supernova[i].querySelectorAll(v).length; s++) {
                            this.init.temparr.push(this.Supernova[i].querySelectorAll(v)[s])
                        }
                    }
                    this.copyDom(this.init.temparr).release();
                } else {
                    for (let i = 0; i < this.Supernova.length; i++) {
                        for (let s = 0; s < this.Supernova[i].children.length; s++) {
                            if (this.Supernova[i].children[s].nodeName === v.toUpperCase()) {
                                this.init.temparr.push(this.Supernova[i].children[s])
                            }
                        }
                    }
                    this.copyDom(this.init.temparr).release();
                }
            },
            allChild: function (bool) {
                if (bool) {
                    for (let i = 0; i < this.Supernova.length; i++) {
                        for (let s = 0; s < this.Supernova[i].querySelectorAll("*").length; s++) {
                            this.init.temparr.push(this.Supernova[i].querySelectorAll("*")[s])
                        }
                    }
                    this.copyDom(this.init.temparr).release();
                } else {

                    for (let i = 0; i < this.Supernova.length; i++) {
                        for (let s = 0; s < this.Supernova[i].children.length; s++) {
                            this.init.temparr.push(this.Supernova[i].children[s])
                        }
                    }
                    this.copyDom(this.init.temparr).release();
                }
            },
            darkDistinguish:function (b) {
                this.darkSubstance();
                b? this.copyDom(this.init.temparr).release():this.copyDom([this.init.temparr[0]]).release();
            },
            darkSubstance:function () {
                let d=this.Supernova[0];
                for(let i=0;i<2;i++){
                    if(d.parentNode.nodeName!=="BODY"){
                        d=d.parentNode;
                        this.init.temparr.push(d);
                    }else{
                        i=5;
                    }
                }
            },
            attrChild: function (type, val, b) {
                if (b) {
                    for (let i = 0; i < this.Supernova.length; i++) {
                        for (let s = 0; s < this.Supernova[i].querySelectorAll("[" + type + "=" + val + "]").length; s++) {
                            this.init.temparr.push(this.Supernova[i].querySelectorAll("[" + type + "=" + val + "]")[s])
                        }
                    }
                    this.copyDom(this.init.temparr).release();
                } else {
                    for (let i = 0; i < this.Supernova.length; i++) {
                        for (let s = 0; s < this.Supernova[i].children.length; s++) {
                            for (let t = 0; t < this.Supernova[i].children[s].attributes.length; t++) {
                                if (this.Supernova[i].children[s].attributes[t].nodeName === type) {
                                    if (this.Supernova[i].children[s].attributes[t].nodeValue === val) {
                                        this.init.temparr.push(this.Supernova[i].children[s]);
                                    }
                                }
                            }
                        }
                    }
                    this.copyDom(this.init.temparr).release();
                }
            },
            blackHole: function (fire, index) {
                switch (fire) {
                    case "eq":
                        this.isEq(index);
                        break;
                    case "lt":
                        this.isLt(index);
                        break;
                    case "gt":
                        this.isGt(index);
                        break;
                    case "first":
                        this.isEq(this.Supernova.length - 1);
                        break;
                    case "last":
                        this.isEq(0);
                        break;
                    case "even":
                        this.isEven();
                        break;
                    case "odd":
                        this.isOdd();
                        break;
                }
                return this
            },
            isEq: function (index) {
                this.copyDom([this.Supernova[Number(index)]]);
                return this
            },
            isLt: function (index) {
                for (let i = 0; i < index; i++) {
                    this.init.temparr.push(this.Supernova[i])
                }
                this.copyDom(this.init.temparr).release();
            },
            isGt: function (index) {
                for (let i = (Number(index) + 1); i < this.Supernova.length; i++) {
                    this.init.temparr.push(this.Supernova[i])
                }
                this.copyDom(this.init.temparr).release();
            },
            isEven: function () {
                for (let i = 0, s = false; i < this.Supernova.length; i++) {
                    if (s) {
                        this.init.temparr.push(this.Supernova[i])
                    }
                    s = !s;
                }
                this.copyDom(this.init.temparr).release();
            },
            isOdd: function () {
                for (let i = 0, s = true; i < this.Supernova.length; i++) {
                    if (s) {
                        this.init.temparr.push(this.Supernova[i])
                    }
                    s = !s;
                }
                this.copyDom(this.init.temparr).release();
            },
            release: function () {
                for (let i = 0, max = this.init.temparr.length; i < max; i++) {
                    this.init.temparr.shift();
                }
                return this
            },
            copyDom: function (Whitedwarf) {
                for(let s in this.Supernova){
                    delete this.Supernova[s]
                }
                for (let i = 0; i < Whitedwarf.length; i++) {
                    this.Supernova[i]=Whitedwarf[i];
                    this.Supernova.length=(i+1);
                }
                return this
            },
            deleteStart: function (qe, n) {
                for (let i = 0; i < n; i++) {
                    if (qe) {
                        this.init.method.shift();
                    } else {
                        this.init.val.shift();
                    }
                }
                return this
            }
        },
        css:function (s,d) {
            if (!d) {
                d = this
            }
            for(let as=0;as<d.length;as++){
                let arrkey = [], arrname = [], reg = /[A-Z]/
                for (let x in s) {
                    arrkey.push(s[x]);
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
                    d[String(as)].style.cssText += arrname[k] + ":" + arrkey[k];
                }
            }
            return this
        },
        end: function () {
            (typeof this.Select.init.strEl) === "string" ? this.Select.selectInit(this.Select.init.strEl) : this.Select.copyDom([this.Select.init.strEl]);
            return this;
        },
        children: function (str) {
            this.Select.kComet(str ? str : "*", false);
            return this;
        },
        find: function (str) {
            this.Select.kComet(str ? str : "*", true);
            return this;
        },
        next: function (str) {
            this.Select.iStarquake(true, str ? str : "*").isEq(0);
            return this;
        },
        nextAll: function (str) {
            this.Select.iStarquake(true, str ? str : "*");
            return this;
        },
        prev: function (str) {
            this.Select.iStarquake(false, str ? str : "*").isEq(0);
            return this;
        },
        prevAll: function (str) {
            this.Select.iStarquake(false, str ? str : "*");
            return this;
        },
        siblings: function (str) {
            this.Select.iStarquake(" ", str ? str : "*", true);
            return this;
        },
        sibling: function (str) {
            this.Select.iStarquake(" ", str ? str : "*", true, true);
            this.Select.copyDom([this.Select.Supernova[0], this.Select.Supernova[(this.Select.Supernova.length - 1)]]);
            return this;
        },
        parent:function () {
            this.Select.darkDistinguish(false);
            return this;
        },
        parents:function () {
            this.Select.darkDistinguish(true);
            return this;
        },
        eq:function (i) {
            this.Select.isEq(i);
            return this;
        },
        click: function (fn) {
            for (let i = 0; i < this.length; i++) {
                this[i].index=i;
                this[i].onclick = fn.bind(this[i]);
            }
            return this;
        },
        getDefaultStyle:function (obj,attribute) {
            //obj为dom对象,attribute为样式名
            return obj.currentStyle?obj.currentStyle[attribute]:document.defaultView.getComputedStyle(obj,false)[attribute];
        },
        attr:function (name,val) {
            if(val===undefined){
                return this["0"].getAttribute(name)||undefined;
            }else{
                this["0"].setAttribute(name,val)
            }
            return this
        },
        removeAttr:function (val) {
            this['0'].removeAttribute(val);
            return this
        },
        val:function (val) {
            if(val===undefined){
                return this["0"].value
            }else{
                this["0"].value=val
            }
            return this
        },
        text:function (val) {
            if(val===undefined){
                return (typeof this['0'].textContent === "string") ? this['0'].textContent : this['0'].innerText;
            }else{
                typeof this['0'].textContent === "string"? this['0'].textContent = val:this['0'].innerText = val;
            }
            return this
        },
        html:function (html) {
            if(html===undefined){
                return this['0'].innerHTML
            }else{
                this.innerHTML=html
            }
            return this
        },
        remove:function () {
            for(let i=0;i<this.length;i++){
                this[i].parentNode.removeChild(this[i]);
            }
            for(let s in this){
                delete this[s]
            }
            this.length=0;
            return this
        },
        animate:function (styles,speed,easing,callback) {

        },
        index:function () {
            return this[0].index;
        }
    };
    isUniverse.ajax=function () {

    };
    isUniverse.get=function () {

    };
    isUniverse.post=function () {

    };
    isUniverse.prototype.init.prototype=isUniverse.prototype;
})();