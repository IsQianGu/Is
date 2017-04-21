(function (w) {
    var is = function (e) {
        this.container = Object();
        this.el = w.document;
        this.iDom = this.Select(e);
    };
    is.prototype = {
        Select: function (id) {
            var _this = this;
            _this.container.Select = Object();
            _this.container.Select.regAll = /[\=\"\'\*.\#\>\:\(\)\[\]]/;
            _this.container.Select.regBute = /[\&\.\#\:]/;
            _this.container.Select.attr = /[\:\#\.\?]/;
            _this.container.Select.iDom = "String";
            _this.container.Select.sDom = [];
            _this.container.Select.sysid = {
                subject: [],
                Method: []
            };
            for (var i = 0, str = "", ql = true, al = true; i < id.length; i++) {
                if (_this.container.Select.regAll.test(id[i])) {
                    if (ql && al) {
                        if (str !== "" && _this.container.Select.sysid.Method.length > 0) {

                            if (!_this.container.Select.regBute.test(_this.container.Select.sysid.Method[_this.container.Select.sysid.Method.length - 1])) {
                                _this.container.Select.sysid.Method.push("&");
                            }
                            _this.container.Select.sysid.subject.push(str);
                            _this.container.Select.sysid.Method.push(id[i]);
                            str = "";
                        } else {
                            if (str !== "" && !_this.container.Select.sysid.Method.length > 0) {
                                _this.container.Select.sysid.subject.push(str);
                                _this.container.Select.sysid.Method.push("&");
                                _this.container.Select.sysid.Method.push(id[i])
                                str = "";
                            } else {
                                if (str === "" && _this.container.Select.sysid.Method.length > 0) {
                                    _this.container.Select.sysid.Method.push(id[i]);
                                } else {
                                    if (str === "" && !_this.container.Select.sysid.Method.length > 0) {
                                        _this.container.Select.sysid.Method.push(id[i]);
                                    }
                                }
                            }
                        }
                    }
                    if (id[i] === "(") {
                        _this.container.Select.sysid.Method.pop();
                        _this.container.Select.sysid.Method.push(_this.container.Select.sysid.Method.pop() + _this.container.Select.sysid.subject.pop());
                        ql = false;
                    } else {
                        if (id[i] === ")") {
                            _this.container.Select.sysid.subject.push(str);
                            str = "";
                            ql = true;
                        }
                    }
                    if (id[i] === "[") {
                        _this.container.Select.sysid.Method.pop();
                        _this.container.Select.sysid.Method.push("attr");
                        _this.container.Select.sysid.Method.push("value");
                        al = false;
                    } else {
                        if (id[i] === "]") {
                            _this.container.Select.sysid.subject.push(str);
                            str = "";
                            al = true;
                        }
                    }
                    if (!al) {
                        if (_this.container.Select.attr.test(id[i])) {
                            str += id[i];
                        }
                        if (id[i] === "=") {
                            _this.container.Select.sysid.subject.push(str);
                            str = "";
                        }
                    }
                } else {
                    str += id[i];
                }
            }
            if (str !== "") {
                if (!_this.container.Select.regAll.test(_this.container.Select.sysid.Method[_this.container.Select.sysid.Method.length - 1]) || _this.container.Select.sysid.Method[_this.container.Select.sysid.Method.length - 1] !== ".") {
                    _this.container.Select.sysid.Method.push("&")
                }
                _this.container.Select.sysid.subject.push(str);
                str = "";
            }
            // console.log(_this.container.Select.sysid);
            // 打印获取到的值
            _this.container.Select.tools = function (id, val) {
                _this.container.Select.atarr = [];
                if ((typeof _this.container.Select.iDom) === "object") {
                    _this.container.Select.lengiht = _this.container.Select.sDom.length;
                    for (var ta = 0; ta < _this.container.Select.lengiht; ta++) {
                        if (id === "type") {

                                for (var di = 0; di < _this.container.Select.sDom[ta].children.length; di++) {
                                    if (_this.container.Select.sDom[ta].children[di].tagName === val.toUpperCase()) {
                                        _this.container.Select.atarr.push(_this.container.Select.sDom[ta].children[di])
                                    }
                                }

                        } else {
                            if (id === "eq" || id === "lt" || id === "gt") {
                                switch (id) {
                                    case "eq":
                                        _this.container.Select.atarr.push(_this.container.Select.sDom[val]);
                                        break;
                                    case "lt":
                                        for (var ki = val; ki > -1; ki--) {
                                            _this.container.Select.atarr.push(_this.container.Select.sDom[ki]);
                                        }
                                        break;
                                    case "gt":
                                        for (var ki = val; ki < _this.container.Select.sDom.length; ki++) {
                                            _this.container.Select.atarr.push(_this.container.Select.sDom[ki]);
                                        }
                                        break;
                                }
                                break;
                            } else {
                                if (id === "attr") {
                                    for (var gi = 0; gi < _this.container.Select.sDom[ta].attributes.length; gi++) {
                                        if (_this.container.Select.sDom[ta].attributes[gi].nodeName === val[0]) {
                                            if (_this.container.Select.sDom[ta].attributes[gi].nodeValue === val[1]) {
                                                _this.container.Select.atarr.push(_this.container.Select.sDom[ta]);
                                            }
                                        }
                                    }
                                } else {
                                    // for (var ai = 0; ai < _this.container.Select.sDom.length; ai++) {
                                        for (var bi = 0; bi < _this.container.Select.sDom[ta].children.length; bi++) {
                                            if (id === "class") {
                                                if (_this.container.Select.sDom[ta].children[bi].className === val) {
                                                    _this.container.Select.atarr.push(_this.container.Select.sDom[ta].children[bi]);
                                                }
                                            } else {
                                                if (_this.container.Select.sDom[ta].children[bi].id === val) {
                                                    _this.container.Select.atarr.push(_this.container.Select.sDom[ta].children[bi]);
                                                }
                                            }
                                        }
                                    // }
                                }
                            }
                        }
                    }
                    _this.container.Select.sDom = _this.container.Select.atarr;
                } else {
                    _this.container.Select.iDom = _this.el;
                    if (id === "type") {
                        _this.container.Select.iDom = _this.container.Select.iDom.querySelectorAll(val);
                    } else {
                        _this.container.Select.iDom = _this.container.Select.iDom.querySelectorAll("[" + id + '=' + val + "]");
                    }
                    _this.container.Select.atarr = [];
                    for (var ml = 0; ml < _this.container.Select.iDom.length; ml++) {
                        _this.container.Select.atarr.push(_this.container.Select.iDom[ml]);
                    }
                    _this.container.Select.sDom = _this.container.Select.atarr;
                }
            };
            for (var j = 0, sss = 0; j < _this.container.Select.sysid.Method.length + 10; j++) {
                if (_this.container.Select.sysid.subject[sss] !== undefined) {

                    switch (_this.container.Select.sysid.Method[j]) {
                        case "#":
                            this.container.Select.tools("id", _this.container.Select.sysid.subject[sss]);
                            break;
                        case ".":
                            this.container.Select.tools("class", _this.container.Select.sysid.subject[sss]);
                            break;
                        case "&":
                            this.container.Select.tools("type", _this.container.Select.sysid.subject[sss]);
                            break;
                        case ">":
                            this.container.Select.tools(function () {
                                var sa;
                                switch (_this.container.Select.sysid.Method[++j]) {
                                    case "#":
                                        sa = "id";
                                        break;
                                    case ".":
                                        sa = "class";
                                        break;
                                    case "&":
                                        sa = "type";
                                        break;
                                }
                                return sa
                            }(), _this.container.Select.sysid.subject[sss]);
                            break;
                        case ":eq":
                            this.container.Select.tools("eq", _this.container.Select.sysid.subject[sss]);
                            break;
                        case ":lt":
                            this.container.Select.tools("lt", _this.container.Select.sysid.subject[sss]);
                            break;
                        case ":gt":
                            this.container.Select.tools("gt", _this.container.Select.sysid.subject[sss]);
                            break;
                        case "attr":
                            this.container.Select.attrdata = [];
                            this.container.Select.attrdata.push(_this.container.Select.sysid.subject[sss]);
                            break;
                        case "value":
                            this.container.Select.attrdata.push(_this.container.Select.sysid.subject[sss]);
                            this.container.Select.tools("attr", this.container.Select.attrdata);
                            break;
                    }
                }
                sss += 1;
            }
            return _this.container.Select.sDom;
        }
    };
    return w.$ = function (e) {
        return new is(e);
    }
})(window);
