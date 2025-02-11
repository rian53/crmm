const Ry = "modulepreload",
    _y = function(e, n) {
        return e[0] === "." ? new URL(e, n).href : e
    },
    _f = {},
    Re = function(n, t, i) {
        if (!t || t.length === 0) return n();
        const r = document.getElementsByTagName("link");
        return Promise.all(t.map(s => {
            if (s = _y(s, i), s in _f) return;
            _f[s] = !0;
            const o = s.endsWith(".css"),
                a = o ? '[rel="stylesheet"]' : "";
            if (!!i)
                for (let c = r.length - 1; c >= 0; c--) {
                    const f = r[c];
                    if (f.href === s && (!o || f.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${s}"]${a}`)) return;
            const u = document.createElement("link");
            if (u.rel = o ? "stylesheet" : Ry, o || (u.as = "script", u.crossOrigin = ""), u.href = s, document.head.appendChild(u), o) return new Promise((c, f) => {
                u.addEventListener("load", c), u.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${s}`)))
            })
        })).then(() => n()).catch(s => {
            const o = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (o.payload = s, window.dispatchEvent(o), !o.defaultPrevented) throw s
        })
    };
/**
 * @vue/shared v3.4.32
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function Ln(e, n) {
    const t = new Set(e.split(","));
    return n ? i => t.has(i.toLowerCase()) : i => t.has(i)
}
const nt = {},
    Yr = [],
    $t = () => {},
    ia = () => !1,
    Nr = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    ic = e => e.startsWith("onUpdate:"),
    it = Object.assign,
    rc = (e, n) => {
        const t = e.indexOf(n);
        t > -1 && e.splice(t, 1)
    },
    Fy = Object.prototype.hasOwnProperty,
    qe = (e, n) => Fy.call(e, n),
    pe = Array.isArray,
    Kr = e => ls(e) === "[object Map]",
    Rr = e => ls(e) === "[object Set]",
    Ff = e => ls(e) === "[object Date]",
    Ly = e => ls(e) === "[object RegExp]",
    xe = e => typeof e == "function",
    ke = e => typeof e == "string",
    Fn = e => typeof e == "symbol",
    ct = e => e !== null && typeof e == "object",
    sc = e => (ct(e) || xe(e)) && xe(e.then) && xe(e.catch),
    ep = Object.prototype.toString,
    ls = e => ep.call(e),
    ky = e => ls(e).slice(8, -1),
    tp = e => ls(e) === "[object Object]",
    oc = e => ke(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Ki = Ln(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    $y = Ln("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),
    tl = e => {
        const n = Object.create(null);
        return t => n[t] || (n[t] = e(t))
    },
    jy = /-(\w)/g,
    bt = tl(e => e.replace(jy, (n, t) => t ? t.toUpperCase() : "")),
    Vy = /\B([A-Z])/g,
    bn = tl(e => e.replace(Vy, "-$1").toLowerCase()),
    ir = tl(e => e.charAt(0).toUpperCase() + e.slice(1)),
    br = tl(e => e ? `on${ir(e)}` : ""),
    ii = (e, n) => !Object.is(e, n),
    zr = (e, ...n) => {
        for (let t = 0; t < e.length; t++) e[t](...n)
    },
    np = (e, n, t, i = !1) => {
        Object.defineProperty(e, n, {
            configurable: !0,
            enumerable: !1,
            writable: i,
            value: t
        })
    },
    ba = e => {
        const n = parseFloat(e);
        return isNaN(n) ? e : n
    },
    Ea = e => {
        const n = ke(e) ? Number(e) : NaN;
        return isNaN(n) ? e : n
    };
let Lf;
const ip = () => Lf || (Lf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}),
    Hy = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",
    By = Ln(Hy);

function Kt(e) {
    if (pe(e)) {
        const n = {};
        for (let t = 0; t < e.length; t++) {
            const i = e[t],
                r = ke(i) ? rp(i) : Kt(i);
            if (r)
                for (const s in r) n[s] = r[s]
        }
        return n
    } else if (ke(e) || ct(e)) return e
}
const Uy = /;(?![^(]*\))/g,
    Wy = /:([^]+)/,
    Yy = /\/\*[^]*?\*\//g;

function rp(e) {
    const n = {};
    return e.replace(Yy, "").split(Uy).forEach(t => {
        if (t) {
            const i = t.split(Wy);
            i.length > 1 && (n[i[0].trim()] = i[1].trim())
        }
    }), n
}

function Rt(e) {
    let n = "";
    if (ke(e)) n = e;
    else if (pe(e))
        for (let t = 0; t < e.length; t++) {
            const i = Rt(e[t]);
            i && (n += i + " ")
        } else if (ct(e))
            for (const t in e) e[t] && (n += t + " ");
    return n.trim()
}

function Sa(e) {
    if (!e) return null;
    let {
        class: n,
        style: t
    } = e;
    return n && !ke(n) && (e.class = Rt(n)), t && (e.style = Kt(t)), e
}
const Ky = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",
    zy = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",
    Gy = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",
    Zy = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",
    Xy = Ln(Ky),
    Jy = Ln(zy),
    Qy = Ln(Gy),
    qy = Ln(Zy),
    eb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    tb = Ln(eb);

function sp(e) {
    return !!e || e === ""
}

function nb(e, n) {
    if (e.length !== n.length) return !1;
    let t = !0;
    for (let i = 0; t && i < e.length; i++) t = Qi(e[i], n[i]);
    return t
}

function Qi(e, n) {
    if (e === n) return !0;
    let t = Ff(e),
        i = Ff(n);
    if (t || i) return t && i ? e.getTime() === n.getTime() : !1;
    if (t = Fn(e), i = Fn(n), t || i) return e === n;
    if (t = pe(e), i = pe(n), t || i) return t && i ? nb(e, n) : !1;
    if (t = ct(e), i = ct(n), t || i) {
        if (!t || !i) return !1;
        const r = Object.keys(e).length,
            s = Object.keys(n).length;
        if (r !== s) return !1;
        for (const o in e) {
            const a = e.hasOwnProperty(o),
                l = n.hasOwnProperty(o);
            if (a && !l || !a && l || !Qi(e[o], n[o])) return !1
        }
    }
    return String(e) === String(n)
}

function nl(e, n) {
    return e.findIndex(t => Qi(t, n))
}
const op = e => !!(e && e.__v_isRef === !0),
    vt = e => ke(e) ? e : e == null ? "" : pe(e) || ct(e) && (e.toString === ep || !xe(e.toString)) ? op(e) ? vt(e.value) : JSON.stringify(e, ap, 2) : String(e),
    ap = (e, n) => op(n) ? ap(e, n.value) : Kr(n) ? {
        [`Map(${n.size})`]: [...n.entries()].reduce((t, [i, r], s) => (t[Nl(i, s) + " =>"] = r, t), {})
    } : Rr(n) ? {
        [`Set(${n.size})`]: [...n.values()].map(t => Nl(t))
    } : Fn(n) ? Nl(n) : ct(n) && !pe(n) && !tp(n) ? String(n) : n,
    Nl = (e, n = "") => {
        var t;
        return Fn(e) ? `Symbol(${(t=e.description)!=null?t:n})` : e
    };
/**
 * @vue/reactivity v3.4.32
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let In;
class il {
    constructor(n = !1) {
        this.detached = n, this._active = !0, this.effects = [], this.cleanups = [], this.parent = In, !n && In && (this.index = (In.scopes || (In.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(n) {
        if (this._active) {
            const t = In;
            try {
                return In = this, n()
            } finally {
                In = t
            }
        }
    }
    on() {
        In = this
    }
    off() {
        In = this.parent
    }
    stop(n) {
        if (this._active) {
            let t, i;
            for (t = 0, i = this.effects.length; t < i; t++) this.effects[t].stop();
            for (t = 0, i = this.cleanups.length; t < i; t++) this.cleanups[t]();
            if (this.scopes)
                for (t = 0, i = this.scopes.length; t < i; t++) this.scopes[t].stop(!0);
            if (!this.detached && this.parent && !n) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function lp(e) {
    return new il(e)
}

function up(e, n = In) {
    n && n.active && n.effects.push(e)
}

function ac() {
    return In
}

function cp(e) {
    In && In.cleanups.push(e)
}
let Er;
class Cr {
    constructor(n, t, i, r) {
        this.fn = n, this.trigger = t, this.scheduler = i, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, up(this, r)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1, rr();
            for (let n = 0; n < this._depsLength; n++) {
                const t = this.deps[n];
                if (t.computed && (ib(t.computed), this._dirtyLevel >= 4)) break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0), sr()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(n) {
        this._dirtyLevel = n ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0, !this.active) return this.fn();
        let n = zi,
            t = Er;
        try {
            return zi = !0, Er = this, this._runnings++, kf(this), this.fn()
        } finally {
            $f(this), this._runnings--, Er = t, zi = n
        }
    }
    stop() {
        this.active && (kf(this), $f(this), this.onStop && this.onStop(), this.active = !1)
    }
}

function ib(e) {
    return e.value
}

function kf(e) {
    e._trackId++, e._depsLength = 0
}

function $f(e) {
    if (e.deps.length > e._depsLength) {
        for (let n = e._depsLength; n < e.deps.length; n++) fp(e.deps[n], e);
        e.deps.length = e._depsLength
    }
}

function fp(e, n) {
    const t = e.get(n);
    t !== void 0 && n._trackId !== t && (e.delete(n), e.size === 0 && e.cleanup())
}

function dp(e, n) {
    e.effect instanceof Cr && (e = e.effect.fn);
    const t = new Cr(e, $t, () => {
        t.dirty && t.run()
    });
    n && (it(t, n), n.scope && up(t, n.scope)), (!n || !n.lazy) && t.run();
    const i = t.run.bind(t);
    return i.effect = t, i
}

function hp(e) {
    e.effect.stop()
}
let zi = !0,
    du = 0;
const pp = [];

function rr() {
    pp.push(zi), zi = !1
}

function sr() {
    const e = pp.pop();
    zi = e === void 0 ? !0 : e
}

function lc() {
    du++
}

function uc() {
    for (du--; !du && hu.length;) hu.shift()()
}

function mp(e, n, t) {
    if (n.get(e) !== e._trackId) {
        n.set(e, e._trackId);
        const i = e.deps[e._depsLength];
        i !== n ? (i && fp(i, e), e.deps[e._depsLength++] = n) : e._depsLength++
    }
}
const hu = [];

function gp(e, n, t) {
    lc();
    for (const i of e.keys()) {
        let r;
        i._dirtyLevel < n && (r ?? (r = e.get(i) === i._trackId)) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = n), i._shouldSchedule && (r ?? (r = e.get(i) === i._trackId)) && (i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && hu.push(i.scheduler)))
    }
    uc()
}
const vp = (e, n) => {
        const t = new Map;
        return t.cleanup = e, t.computed = n, t
    },
    wa = new WeakMap,
    Sr = Symbol(""),
    pu = Symbol("");

function Dn(e, n, t) {
    if (zi && Er) {
        let i = wa.get(e);
        i || wa.set(e, i = new Map);
        let r = i.get(t);
        r || i.set(t, r = vp(() => i.delete(t))), mp(Er, r)
    }
}

function wi(e, n, t, i, r, s) {
    const o = wa.get(e);
    if (!o) return;
    let a = [];
    if (n === "clear") a = [...o.values()];
    else if (t === "length" && pe(e)) {
        const l = Number(i);
        o.forEach((u, c) => {
            (c === "length" || !Fn(c) && c >= l) && a.push(u)
        })
    } else switch (t !== void 0 && a.push(o.get(t)), n) {
        case "add":
            pe(e) ? oc(t) && a.push(o.get("length")) : (a.push(o.get(Sr)), Kr(e) && a.push(o.get(pu)));
            break;
        case "delete":
            pe(e) || (a.push(o.get(Sr)), Kr(e) && a.push(o.get(pu)));
            break;
        case "set":
            Kr(e) && a.push(o.get(Sr));
            break
    }
    lc();
    for (const l of a) l && gp(l, 4);
    uc()
}

function rb(e, n) {
    const t = wa.get(e);
    return t && t.get(n)
}
const sb = Ln("__proto__,__v_isRef,__isVue"),
    yp = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Fn)),
    jf = ob();

function ob() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(n => {
        e[n] = function(...t) {
            const i = Ge(this);
            for (let s = 0, o = this.length; s < o; s++) Dn(i, "get", s + "");
            const r = i[n](...t);
            return r === -1 || r === !1 ? i[n](...t.map(Ge)) : r
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(n => {
        e[n] = function(...t) {
            rr(), lc();
            const i = Ge(this)[n].apply(this, t);
            return uc(), sr(), i
        }
    }), e
}

function ab(e) {
    Fn(e) || (e = String(e));
    const n = Ge(this);
    return Dn(n, "has", e), n.hasOwnProperty(e)
}
class bp {
    constructor(n = !1, t = !1) {
        this._isReadonly = n, this._isShallow = t
    }
    get(n, t, i) {
        const r = this._isReadonly,
            s = this._isShallow;
        if (t === "__v_isReactive") return !r;
        if (t === "__v_isReadonly") return r;
        if (t === "__v_isShallow") return s;
        if (t === "__v_raw") return i === (r ? s ? Cp : Tp : s ? Dp : wp).get(n) || Object.getPrototypeOf(n) === Object.getPrototypeOf(i) ? n : void 0;
        const o = pe(n);
        if (!r) {
            if (o && qe(jf, t)) return Reflect.get(jf, t, i);
            if (t === "hasOwnProperty") return ab
        }
        const a = Reflect.get(n, t, i);
        return (Fn(t) ? yp.has(t) : sb(t)) || (r || Dn(n, "get", t), s) ? a : _t(a) ? o && oc(t) ? a : a.value : ct(a) ? r ? lo(a) : Oi(a) : a
    }
}
class Ep extends bp {
    constructor(n = !1) {
        super(!1, n)
    }
    set(n, t, i, r) {
        let s = n[t];
        if (!this._isShallow) {
            const l = xi(s);
            if (!qi(i) && !xi(i) && (s = Ge(s), i = Ge(i)), !pe(n) && _t(s) && !_t(i)) return l ? !1 : (s.value = i, !0)
        }
        const o = pe(n) && oc(t) ? Number(t) < n.length : qe(n, t),
            a = Reflect.set(n, t, i, r);
        return n === Ge(r) && (o ? ii(i, s) && wi(n, "set", t, i) : wi(n, "add", t, i)), a
    }
    deleteProperty(n, t) {
        const i = qe(n, t);
        n[t];
        const r = Reflect.deleteProperty(n, t);
        return r && i && wi(n, "delete", t, void 0), r
    }
    has(n, t) {
        const i = Reflect.has(n, t);
        return (!Fn(t) || !yp.has(t)) && Dn(n, "has", t), i
    }
    ownKeys(n) {
        return Dn(n, "iterate", pe(n) ? "length" : Sr), Reflect.ownKeys(n)
    }
}
class Sp extends bp {
    constructor(n = !1) {
        super(!0, n)
    }
    set(n, t) {
        return !0
    }
    deleteProperty(n, t) {
        return !0
    }
}
const lb = new Ep,
    ub = new Sp,
    cb = new Ep(!0),
    fb = new Sp(!0),
    cc = e => e,
    rl = e => Reflect.getPrototypeOf(e);

function xo(e, n, t = !1, i = !1) {
    e = e.__v_raw;
    const r = Ge(e),
        s = Ge(n);
    t || (ii(n, s) && Dn(r, "get", n), Dn(r, "get", s));
    const {
        has: o
    } = rl(r), a = i ? cc : t ? hc : Us;
    if (o.call(r, n)) return a(e.get(n));
    if (o.call(r, s)) return a(e.get(s));
    e !== r && e.get(n)
}

function Ao(e, n = !1) {
    const t = this.__v_raw,
        i = Ge(t),
        r = Ge(e);
    return n || (ii(e, r) && Dn(i, "has", e), Dn(i, "has", r)), e === r ? t.has(e) : t.has(e) || t.has(r)
}

function Mo(e, n = !1) {
    return e = e.__v_raw, !n && Dn(Ge(e), "iterate", Sr), Reflect.get(e, "size", e)
}

function Vf(e, n = !1) {
    !n && !qi(e) && !xi(e) && (e = Ge(e));
    const t = Ge(this);
    return rl(t).has.call(t, e) || (t.add(e), wi(t, "add", e, e)), this
}

function Hf(e, n, t = !1) {
    !t && !qi(n) && !xi(n) && (n = Ge(n));
    const i = Ge(this),
        {
            has: r,
            get: s
        } = rl(i);
    let o = r.call(i, e);
    o || (e = Ge(e), o = r.call(i, e));
    const a = s.call(i, e);
    return i.set(e, n), o ? ii(n, a) && wi(i, "set", e, n) : wi(i, "add", e, n), this
}

function Bf(e) {
    const n = Ge(this),
        {
            has: t,
            get: i
        } = rl(n);
    let r = t.call(n, e);
    r || (e = Ge(e), r = t.call(n, e)), i && i.call(n, e);
    const s = n.delete(e);
    return r && wi(n, "delete", e, void 0), s
}

function Uf() {
    const e = Ge(this),
        n = e.size !== 0,
        t = e.clear();
    return n && wi(e, "clear", void 0, void 0), t
}

function Io(e, n) {
    return function(i, r) {
        const s = this,
            o = s.__v_raw,
            a = Ge(o),
            l = n ? cc : e ? hc : Us;
        return !e && Dn(a, "iterate", Sr), o.forEach((u, c) => i.call(r, l(u), l(c), s))
    }
}

function Po(e, n, t) {
    return function(...i) {
        const r = this.__v_raw,
            s = Ge(r),
            o = Kr(s),
            a = e === "entries" || e === Symbol.iterator && o,
            l = e === "keys" && o,
            u = r[e](...i),
            c = t ? cc : n ? hc : Us;
        return !n && Dn(s, "iterate", l ? pu : Sr), {
            next() {
                const {
                    value: f,
                    done: d
                } = u.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: a ? [c(f[0]), c(f[1])] : c(f),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Ni(e) {
    return function(...n) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function db() {
    const e = {
            get(s) {
                return xo(this, s)
            },
            get size() {
                return Mo(this)
            },
            has: Ao,
            add: Vf,
            set: Hf,
            delete: Bf,
            clear: Uf,
            forEach: Io(!1, !1)
        },
        n = {
            get(s) {
                return xo(this, s, !1, !0)
            },
            get size() {
                return Mo(this)
            },
            has: Ao,
            add(s) {
                return Vf.call(this, s, !0)
            },
            set(s, o) {
                return Hf.call(this, s, o, !0)
            },
            delete: Bf,
            clear: Uf,
            forEach: Io(!1, !0)
        },
        t = {
            get(s) {
                return xo(this, s, !0)
            },
            get size() {
                return Mo(this, !0)
            },
            has(s) {
                return Ao.call(this, s, !0)
            },
            add: Ni("add"),
            set: Ni("set"),
            delete: Ni("delete"),
            clear: Ni("clear"),
            forEach: Io(!0, !1)
        },
        i = {
            get(s) {
                return xo(this, s, !0, !0)
            },
            get size() {
                return Mo(this, !0)
            },
            has(s) {
                return Ao.call(this, s, !0)
            },
            add: Ni("add"),
            set: Ni("set"),
            delete: Ni("delete"),
            clear: Ni("clear"),
            forEach: Io(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(s => {
        e[s] = Po(s, !1, !1), t[s] = Po(s, !0, !1), n[s] = Po(s, !1, !0), i[s] = Po(s, !0, !0)
    }), [e, t, n, i]
}
const [hb, pb, mb, gb] = db();

function sl(e, n) {
    const t = n ? e ? gb : mb : e ? pb : hb;
    return (i, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(qe(t, r) && r in i ? t : i, r, s)
}
const vb = {
        get: sl(!1, !1)
    },
    yb = {
        get: sl(!1, !0)
    },
    bb = {
        get: sl(!0, !1)
    },
    Eb = {
        get: sl(!0, !0)
    },
    wp = new WeakMap,
    Dp = new WeakMap,
    Tp = new WeakMap,
    Cp = new WeakMap;

function Sb(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function wb(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Sb(ky(e))
}

function Oi(e) {
    return xi(e) ? e : ol(e, !1, lb, vb, wp)
}

function fc(e) {
    return ol(e, !1, cb, yb, Dp)
}

function lo(e) {
    return ol(e, !0, ub, bb, Tp)
}

function Op(e) {
    return ol(e, !0, fb, Eb, Cp)
}

function ol(e, n, t, i, r) {
    if (!ct(e) || e.__v_raw && !(n && e.__v_isReactive)) return e;
    const s = r.get(e);
    if (s) return s;
    const o = wb(e);
    if (o === 0) return e;
    const a = new Proxy(e, o === 2 ? i : t);
    return r.set(e, a), a
}

function Gi(e) {
    return xi(e) ? Gi(e.__v_raw) : !!(e && e.__v_isReactive)
}

function xi(e) {
    return !!(e && e.__v_isReadonly)
}

function qi(e) {
    return !!(e && e.__v_isShallow)
}

function al(e) {
    return e ? !!e.__v_raw : !1
}

function Ge(e) {
    const n = e && e.__v_raw;
    return n ? Ge(n) : e
}

function dc(e) {
    return Object.isExtensible(e) && np(e, "__v_skip", !0), e
}
const Us = e => ct(e) ? Oi(e) : e,
    hc = e => ct(e) ? lo(e) : e;
class xp {
    constructor(n, t, i, r) {
        this.getter = n, this._setter = t, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Cr(() => n(this._value), () => Gr(this, this.effect._dirtyLevel === 2 ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = i
    }
    get value() {
        const n = Ge(this);
        return (!n._cacheable || n.effect.dirty) && ii(n._value, n._value = n.effect.run()) && Gr(n, 4), pc(n), n.effect._dirtyLevel >= 2 && Gr(n, 2), n._value
    }
    set value(n) {
        this._setter(n)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(n) {
        this.effect.dirty = n
    }
}

function Db(e, n, t = !1) {
    let i, r;
    const s = xe(e);
    return s ? (i = e, r = $t) : (i = e.get, r = e.set), new xp(i, r, s || !r, t)
}

function pc(e) {
    var n;
    zi && Er && (e = Ge(e), mp(Er, (n = e.dep) != null ? n : e.dep = vp(() => e.dep = void 0, e instanceof xp ? e : void 0)))
}

function Gr(e, n = 4, t, i) {
    e = Ge(e);
    const r = e.dep;
    r && gp(r, n)
}

function _t(e) {
    return !!(e && e.__v_isRef === !0)
}

function Jt(e) {
    return Ap(e, !1)
}

function mc(e) {
    return Ap(e, !0)
}

function Ap(e, n) {
    return _t(e) ? e : new Tb(e, n)
}
class Tb {
    constructor(n, t) {
        this.__v_isShallow = t, this.dep = void 0, this.__v_isRef = !0, this._rawValue = t ? n : Ge(n), this._value = t ? n : Us(n)
    }
    get value() {
        return pc(this), this._value
    }
    set value(n) {
        const t = this.__v_isShallow || qi(n) || xi(n);
        n = t ? n : Ge(n), ii(n, this._rawValue) && (this._rawValue, this._rawValue = n, this._value = t ? n : Us(n), Gr(this, 4))
    }
}

function Mp(e) {
    Gr(e, 4)
}

function ut(e) {
    return _t(e) ? e.value : e
}

function We(e) {
    return xe(e) ? e() : ut(e)
}
const Cb = {
    get: (e, n, t) => ut(Reflect.get(e, n, t)),
    set: (e, n, t, i) => {
        const r = e[n];
        return _t(r) && !_t(t) ? (r.value = t, !0) : Reflect.set(e, n, t, i)
    }
};

function ll(e) {
    return Gi(e) ? e : new Proxy(e, Cb)
}
class Ob {
    constructor(n) {
        this.dep = void 0, this.__v_isRef = !0;
        const {
            get: t,
            set: i
        } = n(() => pc(this), () => Gr(this));
        this._get = t, this._set = i
    }
    get value() {
        return this._get()
    }
    set value(n) {
        this._set(n)
    }
}

function gc(e) {
    return new Ob(e)
}

function Ip(e) {
    const n = pe(e) ? new Array(e.length) : {};
    for (const t in e) n[t] = Pp(e, t);
    return n
}
class xb {
    constructor(n, t, i) {
        this._object = n, this._key = t, this._defaultValue = i, this.__v_isRef = !0
    }
    get value() {
        const n = this._object[this._key];
        return n === void 0 ? this._defaultValue : n
    }
    set value(n) {
        this._object[this._key] = n
    }
    get dep() {
        return rb(Ge(this._object), this._key)
    }
}
class Ab {
    constructor(n) {
        this._getter = n, this.__v_isRef = !0, this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}

function bi(e, n, t) {
    return _t(e) ? e : xe(e) ? new Ab(e) : ct(e) && arguments.length > 1 ? Pp(e, n, t) : Jt(e)
}

function Pp(e, n, t) {
    const i = e[n];
    return _t(i) ? i : new xb(e, n, t)
}
const Np = {
        GET: "get",
        HAS: "has",
        ITERATE: "iterate"
    },
    Rp = {
        SET: "set",
        ADD: "add",
        DELETE: "delete",
        CLEAR: "clear"
    };
/**
 * @vue/runtime-core v3.4.32
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function _p(e, n) {}
const Fp = {
        SETUP_FUNCTION: 0,
        0: "SETUP_FUNCTION",
        RENDER_FUNCTION: 1,
        1: "RENDER_FUNCTION",
        WATCH_GETTER: 2,
        2: "WATCH_GETTER",
        WATCH_CALLBACK: 3,
        3: "WATCH_CALLBACK",
        WATCH_CLEANUP: 4,
        4: "WATCH_CLEANUP",
        NATIVE_EVENT_HANDLER: 5,
        5: "NATIVE_EVENT_HANDLER",
        COMPONENT_EVENT_HANDLER: 6,
        6: "COMPONENT_EVENT_HANDLER",
        VNODE_HOOK: 7,
        7: "VNODE_HOOK",
        DIRECTIVE_HOOK: 8,
        8: "DIRECTIVE_HOOK",
        TRANSITION_HOOK: 9,
        9: "TRANSITION_HOOK",
        APP_ERROR_HANDLER: 10,
        10: "APP_ERROR_HANDLER",
        APP_WARN_HANDLER: 11,
        11: "APP_WARN_HANDLER",
        FUNCTION_REF: 12,
        12: "FUNCTION_REF",
        ASYNC_COMPONENT_LOADER: 13,
        13: "ASYNC_COMPONENT_LOADER",
        SCHEDULER: 14,
        14: "SCHEDULER",
        COMPONENT_UPDATE: 15,
        15: "COMPONENT_UPDATE"
    },
    Mb = {
        sp: "serverPrefetch hook",
        bc: "beforeCreate hook",
        c: "created hook",
        bm: "beforeMount hook",
        m: "mounted hook",
        bu: "beforeUpdate hook",
        u: "updated",
        bum: "beforeUnmount hook",
        um: "unmounted hook",
        a: "activated hook",
        da: "deactivated hook",
        ec: "errorCaptured hook",
        rtc: "renderTracked hook",
        rtg: "renderTriggered hook",
        0: "setup function",
        1: "render function",
        2: "watcher getter",
        3: "watcher callback",
        4: "watcher cleanup function",
        5: "native event handler",
        6: "component event handler",
        7: "vnode hook",
        8: "directive hook",
        9: "transition hook",
        10: "app errorHandler",
        11: "app warnHandler",
        12: "ref function",
        13: "async component loader",
        14: "scheduler flush",
        15: "component update"
    };

function ci(e, n, t, i) {
    try {
        return i ? e(...i) : e()
    } catch (r) {
        or(r, n, t)
    }
}

function wn(e, n, t, i) {
    if (xe(e)) {
        const r = ci(e, n, t, i);
        return r && sc(r) && r.catch(s => {
            or(s, n, t)
        }), r
    }
    if (pe(e)) {
        const r = [];
        for (let s = 0; s < e.length; s++) r.push(wn(e[s], n, t, i));
        return r
    }
}

function or(e, n, t, i = !0) {
    const r = n ? n.vnode : null;
    if (n) {
        let s = n.parent;
        const o = n.proxy,
            a = `https://vuejs.org/error-reference/#runtime-${t}`;
        for (; s;) {
            const u = s.ec;
            if (u) {
                for (let c = 0; c < u.length; c++)
                    if (u[c](e, o, a) === !1) return
            }
            s = s.parent
        }
        const l = n.appContext.config.errorHandler;
        if (l) {
            rr(), ci(l, null, 10, [e, o, a]), sr();
            return
        }
    }
    Ib(e, t, r, i)
}

function Ib(e, n, t, i = !0) {
    console.error(e)
}
let Ws = !1,
    mu = !1;
const nn = [];
let li = 0;
const Zr = [];
let ki = null,
    pr = 0;
const Lp = Promise.resolve();
let vc = null;

function cn(e) {
    const n = vc || Lp;
    return e ? n.then(this ? e.bind(this) : e) : n
}

function Pb(e) {
    let n = li + 1,
        t = nn.length;
    for (; n < t;) {
        const i = n + t >>> 1,
            r = nn[i],
            s = Ks(r);
        s < e || s === e && r.pre ? n = i + 1 : t = i
    }
    return n
}

function ul(e) {
    (!nn.length || !nn.includes(e, Ws && e.allowRecurse ? li + 1 : li)) && (e.id == null ? nn.push(e) : nn.splice(Pb(e.id), 0, e), kp())
}

function kp() {
    !Ws && !mu && (mu = !0, vc = Lp.then($p))
}

function Nb(e) {
    const n = nn.indexOf(e);
    n > li && nn.splice(n, 1)
}

function Ys(e) {
    pe(e) ? Zr.push(...e) : (!ki || !ki.includes(e, e.allowRecurse ? pr + 1 : pr)) && Zr.push(e), kp()
}

function Wf(e, n, t = Ws ? li + 1 : 0) {
    for (; t < nn.length; t++) {
        const i = nn[t];
        if (i && i.pre) {
            if (e && i.id !== e.uid) continue;
            nn.splice(t, 1), t--, i()
        }
    }
}

function Da(e) {
    if (Zr.length) {
        const n = [...new Set(Zr)].sort((t, i) => Ks(t) - Ks(i));
        if (Zr.length = 0, ki) {
            ki.push(...n);
            return
        }
        for (ki = n, pr = 0; pr < ki.length; pr++) {
            const t = ki[pr];
            t.active !== !1 && t()
        }
        ki = null, pr = 0
    }
}
const Ks = e => e.id == null ? 1 / 0 : e.id,
    Rb = (e, n) => {
        const t = Ks(e) - Ks(n);
        if (t === 0) {
            if (e.pre && !n.pre) return -1;
            if (n.pre && !e.pre) return 1
        }
        return t
    };

function $p(e) {
    mu = !1, Ws = !0, nn.sort(Rb);
    const n = $t;
    try {
        for (li = 0; li < nn.length; li++) {
            const t = nn[li];
            t && t.active !== !1 && ci(t, t.i, t.i ? 15 : 14)
        }
    } finally {
        li = 0, nn.length = 0, Da(), Ws = !1, vc = null, (nn.length || Zr.length) && $p()
    }
}
let Br, No = [];

function jp(e, n) {
    var t, i;
    Br = e, Br ? (Br.enabled = !0, No.forEach(({
        event: r,
        args: s
    }) => Br.emit(r, ...s)), No = []) : typeof window < "u" && window.HTMLElement && !((i = (t = window.navigator) == null ? void 0 : t.userAgent) != null && i.includes("jsdom")) ? ((n.__VUE_DEVTOOLS_HOOK_REPLAY__ = n.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push(s => {
        jp(s, n)
    }), setTimeout(() => {
        Br || (n.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, No = [])
    }, 3e3)) : No = []
}
let Wt = null,
    cl = null;

function zs(e) {
    const n = Wt;
    return Wt = e, cl = e && e.type.__scopeId || null, n
}

function Vp(e) {
    cl = e
}

function Hp() {
    cl = null
}
const Bp = e => pt;

function pt(e, n = Wt, t) {
    if (!n || e._n) return e;
    const i = (...r) => {
        i._d && xa(-1);
        const s = zs(n);
        let o;
        try {
            o = e(...r)
        } finally {
            zs(s), i._d && xa(1)
        }
        return o
    };
    return i._n = !0, i._c = !0, i._d = !0, i
}

function Up(e, n) {
    if (Wt === null) return e;
    const t = vo(Wt),
        i = e.dirs || (e.dirs = []);
    for (let r = 0; r < n.length; r++) {
        let [s, o, a, l = nt] = n[r];
        s && (xe(s) && (s = {
            mounted: s,
            updated: s
        }), s.deep && Ui(o), i.push({
            dir: s,
            instance: t,
            value: o,
            oldValue: void 0,
            arg: a,
            modifiers: l
        }))
    }
    return e
}

function ai(e, n, t, i) {
    const r = e.dirs,
        s = n && n.dirs;
    for (let o = 0; o < r.length; o++) {
        const a = r[o];
        s && (a.oldValue = s[o].value);
        let l = a.dir[i];
        l && (rr(), wn(l, t, 8, [e.el, a, e, n]), sr())
    }
}
const $i = Symbol("_leaveCb"),
    Ro = Symbol("_enterCb");

function fl() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return ar(() => {
        e.isMounted = !0
    }), us(() => {
        e.isUnmounting = !0
    }), e
}
const $n = [Function, Array],
    dl = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: $n,
        onEnter: $n,
        onAfterEnter: $n,
        onEnterCancelled: $n,
        onBeforeLeave: $n,
        onLeave: $n,
        onAfterLeave: $n,
        onLeaveCancelled: $n,
        onBeforeAppear: $n,
        onAppear: $n,
        onAfterAppear: $n,
        onAppearCancelled: $n
    },
    Wp = e => {
        const n = e.subTree;
        return n.component ? Wp(n.component) : n
    },
    _b = {
        name: "BaseTransition",
        props: dl,
        setup(e, {
            slots: n
        }) {
            const t = Tn(),
                i = fl();
            return () => {
                const r = n.default && uo(n.default(), !0);
                if (!r || !r.length) return;
                let s = r[0];
                if (r.length > 1) {
                    for (const d of r)
                        if (d.type !== Bt) {
                            s = d;
                            break
                        }
                }
                const o = Ge(e),
                    {
                        mode: a
                    } = o;
                if (i.isLeaving) return Rl(s);
                const l = Yf(s);
                if (!l) return Rl(s);
                let u = Or(l, o, i, t, d => u = d);
                Ai(l, u);
                const c = t.subTree,
                    f = c && Yf(c);
                if (f && f.type !== Bt && !Qn(l, f) && Wp(t).type !== Bt) {
                    const d = Or(f, o, i, t);
                    if (Ai(f, d), a === "out-in" && l.type !== Bt) return i.isLeaving = !0, d.afterLeave = () => {
                        i.isLeaving = !1, t.update.active !== !1 && (t.effect.dirty = !0, t.update())
                    }, Rl(s);
                    a === "in-out" && l.type !== Bt && (d.delayLeave = (h, p, m) => {
                        const y = Yp(i, f);
                        y[String(f.key)] = f, h[$i] = () => {
                            p(), h[$i] = void 0, delete u.delayedLeave
                        }, u.delayedLeave = m
                    })
                }
                return s
            }
        }
    },
    yc = _b;

function Yp(e, n) {
    const {
        leavingVNodes: t
    } = e;
    let i = t.get(n.type);
    return i || (i = Object.create(null), t.set(n.type, i)), i
}

function Or(e, n, t, i, r) {
    const {
        appear: s,
        mode: o,
        persisted: a = !1,
        onBeforeEnter: l,
        onEnter: u,
        onAfterEnter: c,
        onEnterCancelled: f,
        onBeforeLeave: d,
        onLeave: h,
        onAfterLeave: p,
        onLeaveCancelled: m,
        onBeforeAppear: y,
        onAppear: D,
        onAfterAppear: S,
        onAppearCancelled: b
    } = n, w = String(e.key), x = Yp(t, e), O = (C, I) => {
        C && wn(C, i, 9, I)
    }, F = (C, I) => {
        const j = I[1];
        O(C, I), pe(C) ? C.every(R => R.length <= 1) && j() : C.length <= 1 && j()
    }, L = {
        mode: o,
        persisted: a,
        beforeEnter(C) {
            let I = l;
            if (!t.isMounted)
                if (s) I = y || l;
                else return;
            C[$i] && C[$i](!0);
            const j = x[w];
            j && Qn(e, j) && j.el[$i] && j.el[$i](), O(I, [C])
        },
        enter(C) {
            let I = u,
                j = c,
                R = f;
            if (!t.isMounted)
                if (s) I = D || u, j = S || c, R = b || f;
                else return;
            let _ = !1;
            const V = C[Ro] = G => {
                _ || (_ = !0, G ? O(R, [C]) : O(j, [C]), L.delayedLeave && L.delayedLeave(), C[Ro] = void 0)
            };
            I ? F(I, [C, V]) : V()
        },
        leave(C, I) {
            const j = String(e.key);
            if (C[Ro] && C[Ro](!0), t.isUnmounting) return I();
            O(d, [C]);
            let R = !1;
            const _ = C[$i] = V => {
                R || (R = !0, I(), V ? O(m, [C]) : O(p, [C]), C[$i] = void 0, x[j] === e && delete x[j])
            };
            x[j] = e, h ? F(h, [C, _]) : _()
        },
        clone(C) {
            const I = Or(C, n, t, i, r);
            return r && r(I), I
        }
    };
    return L
}

function Rl(e) {
    if (co(e)) return e = ri(e), e.children = null, e
}

function Yf(e) {
    if (!co(e)) return e;
    const {
        shapeFlag: n,
        children: t
    } = e;
    if (t) {
        if (n & 16) return t[0];
        if (n & 32 && xe(t.default)) return t.default()
    }
}

function Ai(e, n) {
    e.shapeFlag & 6 && e.component ? Ai(e.component.subTree, n) : e.shapeFlag & 128 ? (e.ssContent.transition = n.clone(e.ssContent), e.ssFallback.transition = n.clone(e.ssFallback)) : e.transition = n
}

function uo(e, n = !1, t) {
    let i = [],
        r = 0;
    for (let s = 0; s < e.length; s++) {
        let o = e[s];
        const a = t == null ? o.key : String(t) + String(o.key != null ? o.key : s);
        o.type === et ? (o.patchFlag & 128 && r++, i = i.concat(uo(o.children, n, a))) : (n || o.type !== Bt) && i.push(a != null ? ri(o, {
            key: a
        }) : o)
    }
    if (r > 1)
        for (let s = 0; s < i.length; s++) i[s].patchFlag = -2;
    return i
} /*! #__NO_SIDE_EFFECTS__ */
function _r(e, n) {
    return xe(e) ? (() => it({
        name: e.name
    }, n, {
        setup: e
    }))() : e
}
const wr = e => !!e.type.__asyncLoader; /*! #__NO_SIDE_EFFECTS__ */
function Kp(e) {
    xe(e) && (e = {
        loader: e
    });
    const {
        loader: n,
        loadingComponent: t,
        errorComponent: i,
        delay: r = 200,
        timeout: s,
        suspensible: o = !0,
        onError: a
    } = e;
    let l = null,
        u, c = 0;
    const f = () => (c++, l = null, d()),
        d = () => {
            let h;
            return l || (h = l = n().catch(p => {
                if (p = p instanceof Error ? p : new Error(String(p)), a) return new Promise((m, y) => {
                    a(p, () => m(f()), () => y(p), c + 1)
                });
                throw p
            }).then(p => h !== l && l ? l : (p && (p.__esModule || p[Symbol.toStringTag] === "Module") && (p = p.default), u = p, p)))
        };
    return _r({
        name: "AsyncComponentWrapper",
        __asyncLoader: d,
        get __asyncResolved() {
            return u
        },
        setup() {
            const h = Ut;
            if (u) return () => _l(u, h);
            const p = S => {
                l = null, or(S, h, 13, !i)
            };
            if (o && h.suspense || go) return d().then(S => () => _l(S, h)).catch(S => (p(S), () => i ? ot(i, {
                error: S
            }) : null));
            const m = Jt(!1),
                y = Jt(),
                D = Jt(!!r);
            return r && setTimeout(() => {
                D.value = !1
            }, r), s != null && setTimeout(() => {
                if (!m.value && !y.value) {
                    const S = new Error(`Async component timed out after ${s}ms.`);
                    p(S), y.value = S
                }
            }, s), d().then(() => {
                m.value = !0, h.parent && co(h.parent.vnode) && (h.parent.effect.dirty = !0, ul(h.parent.update))
            }).catch(S => {
                p(S), y.value = S
            }), () => {
                if (m.value && u) return _l(u, h);
                if (y.value && i) return ot(i, {
                    error: y.value
                });
                if (t && !D.value) return ot(t)
            }
        }
    })
}

function _l(e, n) {
    const {
        ref: t,
        props: i,
        children: r,
        ce: s
    } = n.vnode, o = ot(e, i, r);
    return o.ref = t, o.ce = s, delete n.vnode.ce, o
}
const co = e => e.type.__isKeepAlive,
    Fb = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, {
            slots: n
        }) {
            const t = Tn(),
                i = t.ctx;
            if (!i.renderer) return () => {
                const S = n.default && n.default();
                return S && S.length === 1 ? S[0] : S
            };
            const r = new Map,
                s = new Set;
            let o = null;
            const a = t.suspense,
                {
                    renderer: {
                        p: l,
                        m: u,
                        um: c,
                        o: {
                            createElement: f
                        }
                    }
                } = i,
                d = f("div");
            i.activate = (S, b, w, x, O) => {
                const F = S.component;
                u(S, b, w, 0, a), l(F.vnode, S, b, w, F, a, x, S.slotScopeIds, O), Yt(() => {
                    F.isDeactivated = !1, F.a && zr(F.a);
                    const L = S.props && S.props.onVnodeMounted;
                    L && gn(L, F.parent, S)
                }, a)
            }, i.deactivate = S => {
                const b = S.component;
                Oa(b.m), Oa(b.a), u(S, d, null, 1, a), Yt(() => {
                    b.da && zr(b.da);
                    const w = S.props && S.props.onVnodeUnmounted;
                    w && gn(w, b.parent, S), b.isDeactivated = !0
                }, a)
            };

            function h(S) {
                Fl(S), c(S, t, a, !0)
            }

            function p(S) {
                r.forEach((b, w) => {
                    const x = Au(b.type);
                    x && (!S || !S(x)) && m(w)
                })
            }

            function m(S) {
                const b = r.get(S);
                !o || !Qn(b, o) ? h(b) : o && Fl(o), r.delete(S), s.delete(S)
            }
            _n(() => [e.include, e.exclude], ([S, b]) => {
                S && p(w => Ds(S, w)), b && p(w => !Ds(b, w))
            }, {
                flush: "post",
                deep: !0
            });
            let y = null;
            const D = () => {
                y != null && (wu(t.subTree.type) ? Yt(() => {
                    r.set(y, _o(t.subTree))
                }, t.subTree.suspense) : r.set(y, _o(t.subTree)))
            };
            return ar(D), fo(D), us(() => {
                r.forEach(S => {
                    const {
                        subTree: b,
                        suspense: w
                    } = t, x = _o(b);
                    if (S.type === x.type && S.key === x.key) {
                        Fl(x);
                        const O = x.component.da;
                        O && Yt(O, w);
                        return
                    }
                    h(S)
                })
            }), () => {
                if (y = null, !n.default) return null;
                const S = n.default(),
                    b = S[0];
                if (S.length > 1) return o = null, S;
                if (!Mi(b) || !(b.shapeFlag & 4) && !(b.shapeFlag & 128)) return o = null, b;
                let w = _o(b);
                const x = w.type,
                    O = Au(wr(w) ? w.type.__asyncResolved || {} : x),
                    {
                        include: F,
                        exclude: L,
                        max: C
                    } = e;
                if (F && (!O || !Ds(F, O)) || L && O && Ds(L, O)) return o = w, b;
                const I = w.key == null ? x : w.key,
                    j = r.get(I);
                return w.el && (w = ri(w), b.shapeFlag & 128 && (b.ssContent = w)), y = I, j ? (w.el = j.el, w.component = j.component, w.transition && Ai(w, w.transition), w.shapeFlag |= 512, s.delete(I), s.add(I)) : (s.add(I), C && s.size > parseInt(C, 10) && m(s.values().next().value)), w.shapeFlag |= 256, o = w, wu(b.type) ? b : w
            }
        }
    },
    zp = Fb;

function Ds(e, n) {
    return pe(e) ? e.some(t => Ds(t, n)) : ke(e) ? e.split(",").includes(n) : Ly(e) ? e.test(n) : !1
}

function bc(e, n) {
    Gp(e, "a", n)
}

function Ec(e, n) {
    Gp(e, "da", n)
}

function Gp(e, n, t = Ut) {
    const i = e.__wdc || (e.__wdc = () => {
        let r = t;
        for (; r;) {
            if (r.isDeactivated) return;
            r = r.parent
        }
        return e()
    });
    if (hl(n, i, t), t) {
        let r = t.parent;
        for (; r && r.parent;) co(r.parent.vnode) && Lb(i, n, t, r), r = r.parent
    }
}

function Lb(e, n, t, i) {
    const r = hl(n, e, i, !0);
    ho(() => {
        rc(i[n], r)
    }, t)
}

function Fl(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513
}

function _o(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}

function hl(e, n, t = Ut, i = !1) {
    if (t) {
        const r = t[e] || (t[e] = []),
            s = n.__weh || (n.__weh = (...o) => {
                rr();
                const a = Ar(t),
                    l = wn(n, t, e, o);
                return a(), sr(), l
            });
        return i ? r.unshift(s) : r.push(s), s
    }
}
const Ii = e => (n, t = Ut) => {
        (!go || e === "sp") && hl(e, (...i) => n(...i), t)
    },
    Sc = Ii("bm"),
    ar = Ii("m"),
    wc = Ii("bu"),
    fo = Ii("u"),
    us = Ii("bum"),
    ho = Ii("um"),
    Dc = Ii("sp"),
    Tc = Ii("rtg"),
    Cc = Ii("rtc");

function Oc(e, n = Ut) {
    hl("ec", e, n)
}
const xc = "components",
    kb = "directives";

function ui(e, n) {
    return Ac(xc, e, !0, n) || e
}
const Zp = Symbol.for("v-ndc");

function cs(e) {
    return ke(e) ? Ac(xc, e, !1) || e : e || Zp
}

function Xp(e) {
    return Ac(kb, e)
}

function Ac(e, n, t = !0, i = !1) {
    const r = Wt || Ut;
    if (r) {
        const s = r.type;
        if (e === xc) {
            const a = Au(s, !1);
            if (a && (a === n || a === bt(n) || a === ir(bt(n)))) return s
        }
        const o = Kf(r[e] || s[e], n) || Kf(r.appContext[e], n);
        return !o && i ? s : o
    }
}

function Kf(e, n) {
    return e && (e[n] || e[bt(n)] || e[ir(bt(n))])
}

function fn(e, n, t, i) {
    let r;
    const s = t && t[i];
    if (pe(e) || ke(e)) {
        r = new Array(e.length);
        for (let o = 0, a = e.length; o < a; o++) r[o] = n(e[o], o, void 0, s && s[o])
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let o = 0; o < e; o++) r[o] = n(o + 1, o, void 0, s && s[o])
    } else if (ct(e))
        if (e[Symbol.iterator]) r = Array.from(e, (o, a) => n(o, a, void 0, s && s[a]));
        else {
            const o = Object.keys(e);
            r = new Array(o.length);
            for (let a = 0, l = o.length; a < l; a++) {
                const u = o[a];
                r[a] = n(e[u], u, a, s && s[a])
            }
        }
    else r = [];
    return t && (t[i] = r), r
}

function Gs(e, n) {
    for (let t = 0; t < n.length; t++) {
        const i = n[t];
        if (pe(i))
            for (let r = 0; r < i.length; r++) e[i[r].name] = i[r].fn;
        else i && (e[i.name] = i.key ? (...r) => {
            const s = i.fn(...r);
            return s && (s.key = i.key), s
        } : i.fn)
    }
    return e
}

function Qe(e, n, t = {}, i, r) {
    if (Wt.isCE || Wt.parent && wr(Wt.parent) && Wt.parent.isCE) return n !== "default" && (t.name = n), ot("slot", t, i && i());
    let s = e[n];
    s && s._c && (s._d = !1), ae();
    const o = s && Jp(s(t)),
        a = Rn(et, {
            key: (t.key || o && o.key || `_${n}`) + (!o && i ? "_fb" : "")
        }, o || (i ? i() : []), o && e._ === 1 ? 64 : -2);
    return !r && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), s && s._c && (s._d = !0), a
}

function Jp(e) {
    return e.some(n => Mi(n) ? !(n.type === Bt || n.type === et && !Jp(n.children)) : !0) ? e : null
}

function Qp(e, n) {
    const t = {};
    for (const i in e) t[n && /[A-Z]/.test(i) ? `on:${i}` : br(i)] = e[i];
    return t
}
const gu = e => e ? Wm(e) ? vo(e) : gu(e.parent) : null,
    Ns = it(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => gu(e.parent),
        $root: e => gu(e.root),
        $emit: e => e.emit,
        $options: e => Mc(e),
        $forceUpdate: e => e.f || (e.f = () => {
            e.effect.dirty = !0, ul(e.update)
        }),
        $nextTick: e => e.n || (e.n = cn.bind(e.proxy)),
        $watch: e => s0.bind(e)
    }),
    Ll = (e, n) => e !== nt && !e.__isScriptSetup && qe(e, n),
    vu = {
        get({
            _: e
        }, n) {
            if (n === "__v_skip") return !0;
            const {
                ctx: t,
                setupState: i,
                data: r,
                props: s,
                accessCache: o,
                type: a,
                appContext: l
            } = e;
            let u;
            if (n[0] !== "$") {
                const h = o[n];
                if (h !== void 0) switch (h) {
                    case 1:
                        return i[n];
                    case 2:
                        return r[n];
                    case 4:
                        return t[n];
                    case 3:
                        return s[n]
                } else {
                    if (Ll(i, n)) return o[n] = 1, i[n];
                    if (r !== nt && qe(r, n)) return o[n] = 2, r[n];
                    if ((u = e.propsOptions[0]) && qe(u, n)) return o[n] = 3, s[n];
                    if (t !== nt && qe(t, n)) return o[n] = 4, t[n];
                    yu && (o[n] = 0)
                }
            }
            const c = Ns[n];
            let f, d;
            if (c) return n === "$attrs" && Dn(e.attrs, "get", ""), c(e);
            if ((f = a.__cssModules) && (f = f[n])) return f;
            if (t !== nt && qe(t, n)) return o[n] = 4, t[n];
            if (d = l.config.globalProperties, qe(d, n)) return d[n]
        },
        set({
            _: e
        }, n, t) {
            const {
                data: i,
                setupState: r,
                ctx: s
            } = e;
            return Ll(r, n) ? (r[n] = t, !0) : i !== nt && qe(i, n) ? (i[n] = t, !0) : qe(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (s[n] = t, !0)
        },
        has({
            _: {
                data: e,
                setupState: n,
                accessCache: t,
                ctx: i,
                appContext: r,
                propsOptions: s
            }
        }, o) {
            let a;
            return !!t[o] || e !== nt && qe(e, o) || Ll(n, o) || (a = s[0]) && qe(a, o) || qe(i, o) || qe(Ns, o) || qe(r.config.globalProperties, o)
        },
        defineProperty(e, n, t) {
            return t.get != null ? e._.accessCache[n] = 0 : qe(t, "value") && this.set(e, n, t.value, null), Reflect.defineProperty(e, n, t)
        }
    },
    $b = it({}, vu, {
        get(e, n) {
            if (n !== Symbol.unscopables) return vu.get(e, n, e)
        },
        has(e, n) {
            return n[0] !== "_" && !By(n)
        }
    });

function qp() {
    return null
}

function em() {
    return null
}

function tm(e) {}

function nm(e) {}

function im() {
    return null
}

function rm() {}

function sm(e, n) {
    return null
}

function om() {
    return lm().slots
}

function am() {
    return lm().attrs
}

function lm() {
    const e = Tn();
    return e.setupContext || (e.setupContext = Gm(e))
}

function Zs(e) {
    return pe(e) ? e.reduce((n, t) => (n[t] = null, n), {}) : e
}

function um(e, n) {
    const t = Zs(e);
    for (const i in n) {
        if (i.startsWith("__skip")) continue;
        let r = t[i];
        r ? pe(r) || xe(r) ? r = t[i] = {
            type: r,
            default: n[i]
        } : r.default = n[i] : r === null && (r = t[i] = {
            default: n[i]
        }), r && n[`__skip_${i}`] && (r.skipFactory = !0)
    }
    return t
}

function cm(e, n) {
    return !e || !n ? e || n : pe(e) && pe(n) ? e.concat(n) : it({}, Zs(e), Zs(n))
}

function fm(e, n) {
    const t = {};
    for (const i in e) n.includes(i) || Object.defineProperty(t, i, {
        enumerable: !0,
        get: () => e[i]
    });
    return t
}

function dm(e) {
    const n = Tn();
    let t = e();
    return Cu(), sc(t) && (t = t.catch(i => {
        throw Ar(n), i
    })), [t, () => Ar(n)]
}
let yu = !0;

function jb(e) {
    const n = Mc(e),
        t = e.proxy,
        i = e.ctx;
    yu = !1, n.beforeCreate && zf(n.beforeCreate, e, "bc");
    const {
        data: r,
        computed: s,
        methods: o,
        watch: a,
        provide: l,
        inject: u,
        created: c,
        beforeMount: f,
        mounted: d,
        beforeUpdate: h,
        updated: p,
        activated: m,
        deactivated: y,
        beforeDestroy: D,
        beforeUnmount: S,
        destroyed: b,
        unmounted: w,
        render: x,
        renderTracked: O,
        renderTriggered: F,
        errorCaptured: L,
        serverPrefetch: C,
        expose: I,
        inheritAttrs: j,
        components: R,
        directives: _,
        filters: V
    } = n;
    if (u && Vb(u, i, null), o)
        for (const W in o) {
            const J = o[W];
            xe(J) && (i[W] = J.bind(t))
        }
    if (r) {
        const W = r.call(t, t);
        ct(W) && (e.data = Oi(W))
    }
    if (yu = !0, s)
        for (const W in s) {
            const J = s[W],
                Ce = xe(J) ? J.bind(t, t) : xe(J.get) ? J.get.bind(t, t) : $t,
                Je = !xe(J) && xe(J.set) ? J.set.bind(t) : $t,
                Pe = Xe({
                    get: Ce,
                    set: Je
                });
            Object.defineProperty(i, W, {
                enumerable: !0,
                configurable: !0,
                get: () => Pe.value,
                set: He => Pe.value = He
            })
        }
    if (a)
        for (const W in a) hm(a[W], i, t, W);
    if (l) {
        const W = xe(l) ? l.call(t) : l;
        Reflect.ownKeys(W).forEach(J => {
            po(J, W[J])
        })
    }
    c && zf(c, e, "c");

    function $(W, J) {
        pe(J) ? J.forEach(Ce => W(Ce.bind(t))) : J && W(J.bind(t))
    }
    if ($(Sc, f), $(ar, d), $(wc, h), $(fo, p), $(bc, m), $(Ec, y), $(Oc, L), $(Cc, O), $(Tc, F), $(us, S), $(ho, w), $(Dc, C), pe(I))
        if (I.length) {
            const W = e.exposed || (e.exposed = {});
            I.forEach(J => {
                Object.defineProperty(W, J, {
                    get: () => t[J],
                    set: Ce => t[J] = Ce
                })
            })
        } else e.exposed || (e.exposed = {});
    x && e.render === $t && (e.render = x), j != null && (e.inheritAttrs = j), R && (e.components = R), _ && (e.directives = _)
}

function Vb(e, n, t = $t) {
    pe(e) && (e = bu(e));
    for (const i in e) {
        const r = e[i];
        let s;
        ct(r) ? "default" in r ? s = Zi(r.from || i, r.default, !0) : s = Zi(r.from || i) : s = Zi(r), _t(s) ? Object.defineProperty(n, i, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: o => s.value = o
        }) : n[i] = s
    }
}

function zf(e, n, t) {
    wn(pe(e) ? e.map(i => i.bind(n.proxy)) : e.bind(n.proxy), n, t)
}

function hm(e, n, t, i) {
    const r = i.includes(".") ? Pm(t, i) : () => t[i];
    if (ke(e)) {
        const s = n[e];
        xe(s) && _n(r, s)
    } else if (xe(e)) _n(r, e.bind(t));
    else if (ct(e))
        if (pe(e)) e.forEach(s => hm(s, n, t, i));
        else {
            const s = xe(e.handler) ? e.handler.bind(t) : n[e.handler];
            xe(s) && _n(r, s, e)
        }
}

function Mc(e) {
    const n = e.type,
        {
            mixins: t,
            extends: i
        } = n,
        {
            mixins: r,
            optionsCache: s,
            config: {
                optionMergeStrategies: o
            }
        } = e.appContext,
        a = s.get(n);
    let l;
    return a ? l = a : !r.length && !t && !i ? l = n : (l = {}, r.length && r.forEach(u => Ta(l, u, o, !0)), Ta(l, n, o)), ct(n) && s.set(n, l), l
}

function Ta(e, n, t, i = !1) {
    const {
        mixins: r,
        extends: s
    } = n;
    s && Ta(e, s, t, !0), r && r.forEach(o => Ta(e, o, t, !0));
    for (const o in n)
        if (!(i && o === "expose")) {
            const a = Hb[o] || t && t[o];
            e[o] = a ? a(e[o], n[o]) : n[o]
        } return e
}
const Hb = {
    data: Gf,
    props: Zf,
    emits: Zf,
    methods: Ts,
    computed: Ts,
    beforeCreate: ln,
    created: ln,
    beforeMount: ln,
    mounted: ln,
    beforeUpdate: ln,
    updated: ln,
    beforeDestroy: ln,
    beforeUnmount: ln,
    destroyed: ln,
    unmounted: ln,
    activated: ln,
    deactivated: ln,
    errorCaptured: ln,
    serverPrefetch: ln,
    components: Ts,
    directives: Ts,
    watch: Ub,
    provide: Gf,
    inject: Bb
};

function Gf(e, n) {
    return n ? e ? function() {
        return it(xe(e) ? e.call(this, this) : e, xe(n) ? n.call(this, this) : n)
    } : n : e
}

function Bb(e, n) {
    return Ts(bu(e), bu(n))
}

function bu(e) {
    if (pe(e)) {
        const n = {};
        for (let t = 0; t < e.length; t++) n[e[t]] = e[t];
        return n
    }
    return e
}

function ln(e, n) {
    return e ? [...new Set([].concat(e, n))] : n
}

function Ts(e, n) {
    return e ? it(Object.create(null), e, n) : n
}

function Zf(e, n) {
    return e ? pe(e) && pe(n) ? [...new Set([...e, ...n])] : it(Object.create(null), Zs(e), Zs(n ?? {})) : n
}

function Ub(e, n) {
    if (!e) return n;
    if (!n) return e;
    const t = it(Object.create(null), e);
    for (const i in n) t[i] = ln(e[i], n[i]);
    return t
}

function pm() {
    return {
        app: null,
        config: {
            isNativeTag: ia,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Wb = 0;

function Yb(e, n) {
    return function(i, r = null) {
        xe(i) || (i = it({}, i)), r != null && !ct(r) && (r = null);
        const s = pm(),
            o = new WeakSet;
        let a = !1;
        const l = s.app = {
            _uid: Wb++,
            _component: i,
            _props: r,
            _container: null,
            _context: s,
            _instance: null,
            version: Wc,
            get config() {
                return s.config
            },
            set config(u) {},
            use(u, ...c) {
                return o.has(u) || (u && xe(u.install) ? (o.add(u), u.install(l, ...c)) : xe(u) && (o.add(u), u(l, ...c))), l
            },
            mixin(u) {
                return s.mixins.includes(u) || s.mixins.push(u), l
            },
            component(u, c) {
                return c ? (s.components[u] = c, l) : s.components[u]
            },
            directive(u, c) {
                return c ? (s.directives[u] = c, l) : s.directives[u]
            },
            mount(u, c, f) {
                if (!a) {
                    const d = ot(i, r);
                    return d.appContext = s, f === !0 ? f = "svg" : f === !1 && (f = void 0), c && n ? n(d, u) : e(d, u, f), a = !0, l._container = u, u.__vue_app__ = l, vo(d.component)
                }
            },
            unmount() {
                a && (e(null, l._container), delete l._container.__vue_app__)
            },
            provide(u, c) {
                return s.provides[u] = c, l
            },
            runWithContext(u) {
                const c = Xr;
                Xr = l;
                try {
                    return u()
                } finally {
                    Xr = c
                }
            }
        };
        return l
    }
}
let Xr = null;

function po(e, n) {
    if (Ut) {
        let t = Ut.provides;
        const i = Ut.parent && Ut.parent.provides;
        i === t && (t = Ut.provides = Object.create(i)), t[e] = n
    }
}

function Zi(e, n, t = !1) {
    const i = Ut || Wt;
    if (i || Xr) {
        const r = i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : Xr._context.provides;
        if (r && e in r) return r[e];
        if (arguments.length > 1) return t && xe(n) ? n.call(i && i.proxy) : n
    }
}

function mm() {
    return !!(Ut || Wt || Xr)
}
const gm = {},
    vm = () => Object.create(gm),
    ym = e => Object.getPrototypeOf(e) === gm;

function Kb(e, n, t, i = !1) {
    const r = {},
        s = vm();
    e.propsDefaults = Object.create(null), bm(e, n, r, s);
    for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
    t ? e.props = i ? r : fc(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s
}

function zb(e, n, t, i) {
    const {
        props: r,
        attrs: s,
        vnode: {
            patchFlag: o
        }
    } = e, a = Ge(r), [l] = e.propsOptions;
    let u = !1;
    if ((i || o > 0) && !(o & 16)) {
        if (o & 8) {
            const c = e.vnode.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                let d = c[f];
                if (pl(e.emitsOptions, d)) continue;
                const h = n[d];
                if (l)
                    if (qe(s, d)) h !== s[d] && (s[d] = h, u = !0);
                    else {
                        const p = bt(d);
                        r[p] = Eu(l, a, p, h, e, !1)
                    }
                else h !== s[d] && (s[d] = h, u = !0)
            }
        }
    } else {
        bm(e, n, r, s) && (u = !0);
        let c;
        for (const f in a)(!n || !qe(n, f) && ((c = bn(f)) === f || !qe(n, c))) && (l ? t && (t[f] !== void 0 || t[c] !== void 0) && (r[f] = Eu(l, a, f, void 0, e, !0)) : delete r[f]);
        if (s !== a)
            for (const f in s)(!n || !qe(n, f)) && (delete s[f], u = !0)
    }
    u && wi(e.attrs, "set", "")
}

function bm(e, n, t, i) {
    const [r, s] = e.propsOptions;
    let o = !1,
        a;
    if (n)
        for (let l in n) {
            if (Ki(l)) continue;
            const u = n[l];
            let c;
            r && qe(r, c = bt(l)) ? !s || !s.includes(c) ? t[c] = u : (a || (a = {}))[c] = u : pl(e.emitsOptions, l) || (!(l in i) || u !== i[l]) && (i[l] = u, o = !0)
        }
    if (s) {
        const l = Ge(t),
            u = a || nt;
        for (let c = 0; c < s.length; c++) {
            const f = s[c];
            t[f] = Eu(r, l, f, u[f], e, !qe(u, f))
        }
    }
    return o
}

function Eu(e, n, t, i, r, s) {
    const o = e[t];
    if (o != null) {
        const a = qe(o, "default");
        if (a && i === void 0) {
            const l = o.default;
            if (o.type !== Function && !o.skipFactory && xe(l)) {
                const {
                    propsDefaults: u
                } = r;
                if (t in u) i = u[t];
                else {
                    const c = Ar(r);
                    i = u[t] = l.call(null, n), c()
                }
            } else i = l
        }
        o[0] && (s && !a ? i = !1 : o[1] && (i === "" || i === bn(t)) && (i = !0))
    }
    return i
}
const Gb = new WeakMap;

function Em(e, n, t = !1) {
    const i = t ? Gb : n.propsCache,
        r = i.get(e);
    if (r) return r;
    const s = e.props,
        o = {},
        a = [];
    let l = !1;
    if (!xe(e)) {
        const c = f => {
            l = !0;
            const [d, h] = Em(f, n, !0);
            it(o, d), h && a.push(...h)
        };
        !t && n.mixins.length && n.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    if (!s && !l) return ct(e) && i.set(e, Yr), Yr;
    if (pe(s))
        for (let c = 0; c < s.length; c++) {
            const f = bt(s[c]);
            Xf(f) && (o[f] = nt)
        } else if (s)
            for (const c in s) {
                const f = bt(c);
                if (Xf(f)) {
                    const d = s[c],
                        h = o[f] = pe(d) || xe(d) ? {
                            type: d
                        } : it({}, d);
                    if (h) {
                        const p = qf(Boolean, h.type),
                            m = qf(String, h.type);
                        h[0] = p > -1, h[1] = m < 0 || p < m, (p > -1 || qe(h, "default")) && a.push(f)
                    }
                }
            }
    const u = [o, a];
    return ct(e) && i.set(e, u), u
}

function Xf(e) {
    return e[0] !== "$" && !Ki(e)
}

function Jf(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}

function Qf(e, n) {
    return Jf(e) === Jf(n)
}

function qf(e, n) {
    return pe(n) ? n.findIndex(t => Qf(t, e)) : xe(n) && Qf(n, e) ? 0 : -1
}
const Sm = e => e[0] === "_" || e === "$stable",
    Ic = e => pe(e) ? e.map(yn) : [yn(e)],
    Zb = (e, n, t) => {
        if (n._n) return n;
        const i = pt((...r) => Ic(n(...r)), t);
        return i._c = !1, i
    },
    wm = (e, n, t) => {
        const i = e._ctx;
        for (const r in e) {
            if (Sm(r)) continue;
            const s = e[r];
            if (xe(s)) n[r] = Zb(r, s, i);
            else if (s != null) {
                const o = Ic(s);
                n[r] = () => o
            }
        }
    },
    Dm = (e, n) => {
        const t = Ic(n);
        e.slots.default = () => t
    },
    Tm = (e, n, t) => {
        for (const i in n)(t || i !== "_") && (e[i] = n[i])
    },
    Xb = (e, n, t) => {
        const i = e.slots = vm();
        if (e.vnode.shapeFlag & 32) {
            const r = n._;
            r ? (Tm(i, n, t), t && np(i, "_", r, !0)) : wm(n, i)
        } else n && Dm(e, n)
    },
    Jb = (e, n, t) => {
        const {
            vnode: i,
            slots: r
        } = e;
        let s = !0,
            o = nt;
        if (i.shapeFlag & 32) {
            const a = n._;
            a ? t && a === 1 ? s = !1 : Tm(r, n, t) : (s = !n.$stable, wm(n, r)), o = n
        } else n && (Dm(e, n), o = {
            default: 1
        });
        if (s)
            for (const a in r) !Sm(a) && o[a] == null && delete r[a]
    };

function Ca(e, n, t, i, r = !1) {
    if (pe(e)) {
        e.forEach((d, h) => Ca(d, n && (pe(n) ? n[h] : n), t, i, r));
        return
    }
    if (wr(i) && !r) return;
    const s = i.shapeFlag & 4 ? vo(i.component) : i.el,
        o = r ? null : s,
        {
            i: a,
            r: l
        } = e,
        u = n && n.r,
        c = a.refs === nt ? a.refs = {} : a.refs,
        f = a.setupState;
    if (u != null && u !== l && (ke(u) ? (c[u] = null, qe(f, u) && (f[u] = null)) : _t(u) && (u.value = null)), xe(l)) ci(l, a, 12, [o, c]);
    else {
        const d = ke(l),
            h = _t(l);
        if (d || h) {
            const p = () => {
                if (e.f) {
                    const m = d ? qe(f, l) ? f[l] : c[l] : l.value;
                    r ? pe(m) && rc(m, s) : pe(m) ? m.includes(s) || m.push(s) : d ? (c[l] = [s], qe(f, l) && (f[l] = c[l])) : (l.value = [s], e.k && (c[e.k] = l.value))
                } else d ? (c[l] = o, qe(f, l) && (f[l] = o)) : h && (l.value = o, e.k && (c[e.k] = o))
            };
            o ? (p.id = -1, Yt(p, t)) : p()
        }
    }
}
const Cm = Symbol("_vte"),
    Qb = e => e.__isTeleport,
    Rs = e => e && (e.disabled || e.disabled === ""),
    ed = e => typeof SVGElement < "u" && e instanceof SVGElement,
    td = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
    Su = (e, n) => {
        const t = e && e.to;
        return ke(t) ? n ? n(t) : null : t
    },
    qb = {
        name: "Teleport",
        __isTeleport: !0,
        process(e, n, t, i, r, s, o, a, l, u) {
            const {
                mc: c,
                pc: f,
                pbc: d,
                o: {
                    insert: h,
                    querySelector: p,
                    createText: m,
                    createComment: y
                }
            } = u, D = Rs(n.props);
            let {
                shapeFlag: S,
                children: b,
                dynamicChildren: w
            } = n;
            if (e == null) {
                const x = n.el = m(""),
                    O = n.anchor = m(""),
                    F = n.target = Su(n.props, p),
                    L = n.targetStart = m(""),
                    C = n.targetAnchor = m("");
                h(x, t, i), h(O, t, i), L[Cm] = C, F && (h(L, F), h(C, F), o === "svg" || ed(F) ? o = "svg" : (o === "mathml" || td(F)) && (o = "mathml"));
                const I = (j, R) => {
                    S & 16 && c(b, j, R, r, s, o, a, l)
                };
                D ? I(t, O) : F && I(F, C)
            } else {
                n.el = e.el, n.targetStart = e.targetStart;
                const x = n.anchor = e.anchor,
                    O = n.target = e.target,
                    F = n.targetAnchor = e.targetAnchor,
                    L = Rs(e.props),
                    C = L ? t : O,
                    I = L ? x : F;
                if (o === "svg" || ed(O) ? o = "svg" : (o === "mathml" || td(O)) && (o = "mathml"), w ? (d(e.dynamicChildren, w, C, r, s, o, a), Rc(e, n, !0)) : l || f(e, n, C, I, r, s, o, a, !1), D) L ? n.props && e.props && n.props.to !== e.props.to && (n.props.to = e.props.to) : Fo(n, t, x, u, 1);
                else if ((n.props && n.props.to) !== (e.props && e.props.to)) {
                    const j = n.target = Su(n.props, p);
                    j && Fo(n, j, null, u, 0)
                } else L && Fo(n, O, F, u, 1)
            }
            xm(n)
        },
        remove(e, n, t, {
            um: i,
            o: {
                remove: r
            }
        }, s) {
            const {
                shapeFlag: o,
                children: a,
                anchor: l,
                targetStart: u,
                targetAnchor: c,
                target: f,
                props: d
            } = e;
            if (f && (r(u), r(c)), s && r(l), o & 16) {
                const h = s || !Rs(d);
                for (let p = 0; p < a.length; p++) {
                    const m = a[p];
                    i(m, n, t, h, !!m.dynamicChildren)
                }
            }
        },
        move: Fo,
        hydrate: e0
    };

function Fo(e, n, t, {
    o: {
        insert: i
    },
    m: r
}, s = 2) {
    s === 0 && i(e.targetAnchor, n, t);
    const {
        el: o,
        anchor: a,
        shapeFlag: l,
        children: u,
        props: c
    } = e, f = s === 2;
    if (f && i(o, n, t), (!f || Rs(c)) && l & 16)
        for (let d = 0; d < u.length; d++) r(u[d], n, t, 2);
    f && i(a, n, t)
}

function e0(e, n, t, i, r, s, {
    o: {
        nextSibling: o,
        parentNode: a,
        querySelector: l
    }
}, u) {
    const c = n.target = Su(n.props, l);
    if (c) {
        const f = c._lpa || c.firstChild;
        if (n.shapeFlag & 16)
            if (Rs(n.props)) n.anchor = u(o(e), n, a(e), t, i, r, s), n.targetAnchor = f;
            else {
                n.anchor = o(e);
                let d = f;
                for (; d;)
                    if (d = o(d), d && d.nodeType === 8 && d.data === "teleport anchor") {
                        n.targetAnchor = d, c._lpa = n.targetAnchor && o(n.targetAnchor);
                        break
                    } u(f, n, c, t, i, r, s)
            } xm(n)
    }
    return n.anchor && o(n.anchor)
}
const Om = qb;

function xm(e) {
    const n = e.ctx;
    if (n && n.ut) {
        let t = e.children[0].el;
        for (; t && t !== e.targetAnchor;) t.nodeType === 1 && t.setAttribute("data-v-owner", n.uid), t = t.nextSibling;
        n.ut()
    }
}
let nd = !1;
const Lr = () => {
        nd || (console.error("Hydration completed but contains mismatches."), nd = !0)
    },
    t0 = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
    n0 = e => e.namespaceURI.includes("MathML"),
    Lo = e => {
        if (t0(e)) return "svg";
        if (n0(e)) return "mathml"
    },
    ko = e => e.nodeType === 8;

function i0(e) {
    const {
        mt: n,
        p: t,
        o: {
            patchProp: i,
            createText: r,
            nextSibling: s,
            parentNode: o,
            remove: a,
            insert: l,
            createComment: u
        }
    } = e, c = (b, w) => {
        if (!w.hasChildNodes()) {
            t(null, b, w), Da(), w._vnode = b;
            return
        }
        f(w.firstChild, b, null, null, null), Da(), w._vnode = b
    }, f = (b, w, x, O, F, L = !1) => {
        L = L || !!w.dynamicChildren;
        const C = ko(b) && b.data === "[",
            I = () => m(b, w, x, O, F, C),
            {
                type: j,
                ref: R,
                shapeFlag: _,
                patchFlag: V
            } = w;
        let G = b.nodeType;
        w.el = b, V === -2 && (L = !1, w.dynamicChildren = null);
        let $ = null;
        switch (j) {
            case Di:
                G !== 3 ? w.children === "" ? (l(w.el = r(""), o(b), b), $ = b) : $ = I() : (b.data !== w.children && (Lr(), b.data = w.children), $ = s(b));
                break;
            case Bt:
                S(b) ? ($ = s(b), D(w.el = b.content.firstChild, b, x)) : G !== 8 || C ? $ = I() : $ = s(b);
                break;
            case Xi:
                if (C && (b = s(b), G = b.nodeType), G === 1 || G === 3) {
                    $ = b;
                    const W = !w.children.length;
                    for (let J = 0; J < w.staticCount; J++) W && (w.children += $.nodeType === 1 ? $.outerHTML : $.data), J === w.staticCount - 1 && (w.anchor = $), $ = s($);
                    return C ? s($) : $
                } else I();
                break;
            case et:
                C ? $ = p(b, w, x, O, F, L) : $ = I();
                break;
            default:
                if (_ & 1)(G !== 1 || w.type.toLowerCase() !== b.tagName.toLowerCase()) && !S(b) ? $ = I() : $ = d(b, w, x, O, F, L);
                else if (_ & 6) {
                    w.slotScopeIds = F;
                    const W = o(b);
                    if (C ? $ = y(b) : ko(b) && b.data === "teleport start" ? $ = y(b, b.data, "teleport end") : $ = s(b), n(w, W, null, x, O, Lo(W), L), wr(w)) {
                        let J;
                        C ? (J = ot(et), J.anchor = $ ? $.previousSibling : W.lastChild) : J = b.nodeType === 3 ? Xt("") : ot("div"), J.el = b, w.component.subTree = J
                    }
                } else _ & 64 ? G !== 8 ? $ = I() : $ = w.type.hydrate(b, w, x, O, F, L, e, h) : _ & 128 && ($ = w.type.hydrate(b, w, x, O, Lo(o(b)), F, L, e, f))
        }
        return R != null && Ca(R, null, O, w), $
    }, d = (b, w, x, O, F, L) => {
        L = L || !!w.dynamicChildren;
        const {
            type: C,
            props: I,
            patchFlag: j,
            shapeFlag: R,
            dirs: _,
            transition: V
        } = w, G = C === "input" || C === "option";
        if (G || j !== -1) {
            _ && ai(w, null, x, "created");
            let $ = !1;
            if (S(b)) {
                $ = Mm(O, V) && x && x.vnode.props && x.vnode.props.appear;
                const J = b.content.firstChild;
                $ && V.beforeEnter(J), D(J, b, x), w.el = b = J
            }
            if (R & 16 && !(I && (I.innerHTML || I.textContent))) {
                let J = h(b.firstChild, w, b, x, O, F, L);
                for (; J;) {
                    Lr();
                    const Ce = J;
                    J = J.nextSibling, a(Ce)
                }
            } else R & 8 && b.textContent !== w.children && (Lr(), b.textContent = w.children);
            if (I) {
                if (G || !L || j & 48)
                    for (const J in I)(G && (J.endsWith("value") || J === "indeterminate") || Nr(J) && !Ki(J) || J[0] === ".") && i(b, J, null, I[J], void 0, x);
                else if (I.onClick) i(b, "onClick", null, I.onClick, void 0, x);
                else if (j & 4 && Gi(I.style))
                    for (const J in I.style) I.style[J]
            }
            let W;
            (W = I && I.onVnodeBeforeMount) && gn(W, x, w), _ && ai(w, null, x, "beforeMount"), ((W = I && I.onVnodeMounted) || _ || $) && km(() => {
                W && gn(W, x, w), $ && V.enter(b), _ && ai(w, null, x, "mounted")
            }, O)
        }
        return b.nextSibling
    }, h = (b, w, x, O, F, L, C) => {
        C = C || !!w.dynamicChildren;
        const I = w.children,
            j = I.length;
        for (let R = 0; R < j; R++) {
            const _ = C ? I[R] : I[R] = yn(I[R]),
                V = _.type === Di;
            if (b) {
                if (V && !C) {
                    let G = I[R + 1];
                    G && (G = yn(G)).type === Di && (l(r(b.data.slice(_.children.length)), x, s(b)), b.data = _.children)
                }
                b = f(b, _, O, F, L, C)
            } else V && !_.children ? l(_.el = r(""), x) : (Lr(), t(null, _, x, null, O, F, Lo(x), L))
        }
        return b
    }, p = (b, w, x, O, F, L) => {
        const {
            slotScopeIds: C
        } = w;
        C && (F = F ? F.concat(C) : C);
        const I = o(b),
            j = h(s(b), w, I, x, O, F, L);
        return j && ko(j) && j.data === "]" ? s(w.anchor = j) : (Lr(), l(w.anchor = u("]"), I, j), j)
    }, m = (b, w, x, O, F, L) => {
        if (Lr(), w.el = null, L) {
            const j = y(b);
            for (;;) {
                const R = s(b);
                if (R && R !== j) a(R);
                else break
            }
        }
        const C = s(b),
            I = o(b);
        return a(b), t(null, w, I, C, x, O, Lo(I), F), C
    }, y = (b, w = "[", x = "]") => {
        let O = 0;
        for (; b;)
            if (b = s(b), b && ko(b) && (b.data === w && O++, b.data === x)) {
                if (O === 0) return s(b);
                O--
            } return b
    }, D = (b, w, x) => {
        const O = w.parentNode;
        O && O.replaceChild(b, w);
        let F = x;
        for (; F;) F.vnode.el === w && (F.vnode.el = F.subTree.el = b), F = F.parent
    }, S = b => b.nodeType === 1 && b.tagName.toLowerCase() === "template";
    return [c, f]
}
const Yt = km;

function Pc(e) {
    return Am(e)
}

function Nc(e) {
    return Am(e, i0)
}

function Am(e, n) {
    const t = ip();
    t.__VUE__ = !0;
    const {
        insert: i,
        remove: r,
        patchProp: s,
        createElement: o,
        createText: a,
        createComment: l,
        setText: u,
        setElementText: c,
        parentNode: f,
        nextSibling: d,
        setScopeId: h = $t,
        insertStaticContent: p
    } = e, m = (M, P, H, Z = null, K = null, Q = null, ne = void 0, te = null, ie = !!P.dynamicChildren) => {
        if (M === P) return;
        M && !Qn(M, P) && (Z = ce(M), He(M, K, Q, !0), M = null), P.patchFlag === -2 && (ie = !1, P.dynamicChildren = null);
        const {
            type: X,
            ref: le,
            shapeFlag: ve
        } = P;
        switch (X) {
            case Di:
                y(M, P, H, Z);
                break;
            case Bt:
                D(M, P, H, Z);
                break;
            case Xi:
                M == null && S(P, H, Z, ne);
                break;
            case et:
                R(M, P, H, Z, K, Q, ne, te, ie);
                break;
            default:
                ve & 1 ? x(M, P, H, Z, K, Q, ne, te, ie) : ve & 6 ? _(M, P, H, Z, K, Q, ne, te, ie) : (ve & 64 || ve & 128) && X.process(M, P, H, Z, K, Q, ne, te, ie, ft)
        }
        le != null && K && Ca(le, M && M.ref, Q, P || M, !P)
    }, y = (M, P, H, Z) => {
        if (M == null) i(P.el = a(P.children), H, Z);
        else {
            const K = P.el = M.el;
            P.children !== M.children && u(K, P.children)
        }
    }, D = (M, P, H, Z) => {
        M == null ? i(P.el = l(P.children || ""), H, Z) : P.el = M.el
    }, S = (M, P, H, Z) => {
        [M.el, M.anchor] = p(M.children, P, H, Z, M.el, M.anchor)
    }, b = ({
        el: M,
        anchor: P
    }, H, Z) => {
        let K;
        for (; M && M !== P;) K = d(M), i(M, H, Z), M = K;
        i(P, H, Z)
    }, w = ({
        el: M,
        anchor: P
    }) => {
        let H;
        for (; M && M !== P;) H = d(M), r(M), M = H;
        r(P)
    }, x = (M, P, H, Z, K, Q, ne, te, ie) => {
        P.type === "svg" ? ne = "svg" : P.type === "math" && (ne = "mathml"), M == null ? O(P, H, Z, K, Q, ne, te, ie) : C(M, P, K, Q, ne, te, ie)
    }, O = (M, P, H, Z, K, Q, ne, te) => {
        let ie, X;
        const {
            props: le,
            shapeFlag: ve,
            transition: fe,
            dirs: Te
        } = M;
        if (ie = M.el = o(M.type, Q, le && le.is, le), ve & 8 ? c(ie, M.children) : ve & 16 && L(M.children, ie, null, Z, K, kl(M, Q), ne, te), Te && ai(M, null, Z, "created"), F(ie, M, M.scopeId, ne, Z), le) {
            for (const ze in le) ze !== "value" && !Ki(ze) && s(ie, ze, null, le[ze], Q, Z);
            "value" in le && s(ie, "value", null, le.value, Q), (X = le.onVnodeBeforeMount) && gn(X, Z, M)
        }
        Te && ai(M, null, Z, "beforeMount");
        const Ae = Mm(K, fe);
        Ae && fe.beforeEnter(ie), i(ie, P, H), ((X = le && le.onVnodeMounted) || Ae || Te) && Yt(() => {
            X && gn(X, Z, M), Ae && fe.enter(ie), Te && ai(M, null, Z, "mounted")
        }, K)
    }, F = (M, P, H, Z, K) => {
        if (H && h(M, H), Z)
            for (let Q = 0; Q < Z.length; Q++) h(M, Z[Q]);
        if (K) {
            let Q = K.subTree;
            if (P === Q) {
                const ne = K.vnode;
                F(M, ne, ne.scopeId, ne.slotScopeIds, K.parent)
            }
        }
    }, L = (M, P, H, Z, K, Q, ne, te, ie = 0) => {
        for (let X = ie; X < M.length; X++) {
            const le = M[X] = te ? ji(M[X]) : yn(M[X]);
            m(null, le, P, H, Z, K, Q, ne, te)
        }
    }, C = (M, P, H, Z, K, Q, ne) => {
        const te = P.el = M.el;
        let {
            patchFlag: ie,
            dynamicChildren: X,
            dirs: le
        } = P;
        ie |= M.patchFlag & 16;
        const ve = M.props || nt,
            fe = P.props || nt;
        let Te;
        if (H && lr(H, !1), (Te = fe.onVnodeBeforeUpdate) && gn(Te, H, P, M), le && ai(P, M, H, "beforeUpdate"), H && lr(H, !0), (ve.innerHTML && fe.innerHTML == null || ve.textContent && fe.textContent == null) && c(te, ""), X ? I(M.dynamicChildren, X, te, H, Z, kl(P, K), Q) : ne || J(M, P, te, null, H, Z, kl(P, K), Q, !1), ie > 0) {
            if (ie & 16) j(te, ve, fe, H, K);
            else if (ie & 2 && ve.class !== fe.class && s(te, "class", null, fe.class, K), ie & 4 && s(te, "style", ve.style, fe.style, K), ie & 8) {
                const Ae = P.dynamicProps;
                for (let ze = 0; ze < Ae.length; ze++) {
                    const g = Ae[ze],
                        v = ve[g],
                        A = fe[g];
                    (A !== v || g === "value") && s(te, g, v, A, K, H)
                }
            }
            ie & 1 && M.children !== P.children && c(te, P.children)
        } else !ne && X == null && j(te, ve, fe, H, K);
        ((Te = fe.onVnodeUpdated) || le) && Yt(() => {
            Te && gn(Te, H, P, M), le && ai(P, M, H, "updated")
        }, Z)
    }, I = (M, P, H, Z, K, Q, ne) => {
        for (let te = 0; te < P.length; te++) {
            const ie = M[te],
                X = P[te],
                le = ie.el && (ie.type === et || !Qn(ie, X) || ie.shapeFlag & 70) ? f(ie.el) : H;
            m(ie, X, le, null, Z, K, Q, ne, !0)
        }
    }, j = (M, P, H, Z, K) => {
        if (P !== H) {
            if (P !== nt)
                for (const Q in P) !Ki(Q) && !(Q in H) && s(M, Q, P[Q], null, K, Z);
            for (const Q in H) {
                if (Ki(Q)) continue;
                const ne = H[Q],
                    te = P[Q];
                ne !== te && Q !== "value" && s(M, Q, te, ne, K, Z)
            }
            "value" in H && s(M, "value", P.value, H.value, K)
        }
    }, R = (M, P, H, Z, K, Q, ne, te, ie) => {
        const X = P.el = M ? M.el : a(""),
            le = P.anchor = M ? M.anchor : a("");
        let {
            patchFlag: ve,
            dynamicChildren: fe,
            slotScopeIds: Te
        } = P;
        Te && (te = te ? te.concat(Te) : Te), M == null ? (i(X, H, Z), i(le, H, Z), L(P.children || [], H, le, K, Q, ne, te, ie)) : ve > 0 && ve & 64 && fe && M.dynamicChildren ? (I(M.dynamicChildren, fe, H, K, Q, ne, te), (P.key != null || K && P === K.subTree) && Rc(M, P, !0)) : J(M, P, H, le, K, Q, ne, te, ie)
    }, _ = (M, P, H, Z, K, Q, ne, te, ie) => {
        P.slotScopeIds = te, M == null ? P.shapeFlag & 512 ? K.ctx.activate(P, H, Z, ne, ie) : V(P, H, Z, K, Q, ne, ie) : G(M, P, ie)
    }, V = (M, P, H, Z, K, Q, ne) => {
        const te = M.component = Um(M, Z, K);
        if (co(M) && (te.ctx.renderer = ft), Ym(te, !1, ne), te.asyncDep) {
            if (K && K.registerDep(te, $, ne), !M.el) {
                const ie = te.subTree = ot(Bt);
                D(null, ie, P, H)
            }
        } else $(te, M, P, H, K, Q, ne)
    }, G = (M, P, H) => {
        const Z = P.component = M.component;
        if (c0(M, P, H))
            if (Z.asyncDep && !Z.asyncResolved) {
                W(Z, P, H);
                return
            } else Z.next = P, Nb(Z.update), Z.effect.dirty = !0, Z.update();
        else P.el = M.el, Z.vnode = P
    }, $ = (M, P, H, Z, K, Q, ne) => {
        const te = () => {
                if (M.isMounted) {
                    let {
                        next: le,
                        bu: ve,
                        u: fe,
                        parent: Te,
                        vnode: Ae
                    } = M;
                    {
                        const k = Im(M);
                        if (k) {
                            le && (le.el = Ae.el, W(M, le, ne)), k.asyncDep.then(() => {
                                M.isUnmounted || te()
                            });
                            return
                        }
                    }
                    let ze = le,
                        g;
                    lr(M, !1), le ? (le.el = Ae.el, W(M, le, ne)) : le = Ae, ve && zr(ve), (g = le.props && le.props.onVnodeBeforeUpdate) && gn(g, Te, le, Ae), lr(M, !0);
                    const v = ra(M),
                        A = M.subTree;
                    M.subTree = v, m(A, v, f(A.el), ce(A), M, K, Q), le.el = v.el, ze === null && jc(M, v.el), fe && Yt(fe, K), (g = le.props && le.props.onVnodeUpdated) && Yt(() => gn(g, Te, le, Ae), K)
                } else {
                    let le;
                    const {
                        el: ve,
                        props: fe
                    } = P, {
                        bm: Te,
                        m: Ae,
                        parent: ze
                    } = M, g = wr(P);
                    if (lr(M, !1), Te && zr(Te), !g && (le = fe && fe.onVnodeBeforeMount) && gn(le, ze, P), lr(M, !0), ve && dt) {
                        const v = () => {
                            M.subTree = ra(M), dt(ve, M.subTree, M, K, null)
                        };
                        g ? P.type.__asyncLoader().then(() => !M.isUnmounted && v()) : v()
                    } else {
                        const v = M.subTree = ra(M);
                        m(null, v, H, Z, M, K, Q), P.el = v.el
                    }
                    if (Ae && Yt(Ae, K), !g && (le = fe && fe.onVnodeMounted)) {
                        const v = P;
                        Yt(() => gn(le, ze, v), K)
                    }(P.shapeFlag & 256 || ze && wr(ze.vnode) && ze.vnode.shapeFlag & 256) && M.a && Yt(M.a, K), M.isMounted = !0, P = H = Z = null
                }
            },
            ie = M.effect = new Cr(te, $t, () => ul(X), M.scope),
            X = M.update = () => {
                ie.dirty && ie.run()
            };
        X.i = M, X.id = M.uid, lr(M, !0), X()
    }, W = (M, P, H) => {
        P.component = M;
        const Z = M.vnode.props;
        M.vnode = P, M.next = null, zb(M, P.props, Z, H), Jb(M, P.children, H), rr(), Wf(M), sr()
    }, J = (M, P, H, Z, K, Q, ne, te, ie = !1) => {
        const X = M && M.children,
            le = M ? M.shapeFlag : 0,
            ve = P.children,
            {
                patchFlag: fe,
                shapeFlag: Te
            } = P;
        if (fe > 0) {
            if (fe & 128) {
                Je(X, ve, H, Z, K, Q, ne, te, ie);
                return
            } else if (fe & 256) {
                Ce(X, ve, H, Z, K, Q, ne, te, ie);
                return
            }
        }
        Te & 8 ? (le & 16 && q(X, K, Q), ve !== X && c(H, ve)) : le & 16 ? Te & 16 ? Je(X, ve, H, Z, K, Q, ne, te, ie) : q(X, K, Q, !0) : (le & 8 && c(H, ""), Te & 16 && L(ve, H, Z, K, Q, ne, te, ie))
    }, Ce = (M, P, H, Z, K, Q, ne, te, ie) => {
        M = M || Yr, P = P || Yr;
        const X = M.length,
            le = P.length,
            ve = Math.min(X, le);
        let fe;
        for (fe = 0; fe < ve; fe++) {
            const Te = P[fe] = ie ? ji(P[fe]) : yn(P[fe]);
            m(M[fe], Te, H, null, K, Q, ne, te, ie)
        }
        X > le ? q(M, K, Q, !0, !1, ve) : L(P, H, Z, K, Q, ne, te, ie, ve)
    }, Je = (M, P, H, Z, K, Q, ne, te, ie) => {
        let X = 0;
        const le = P.length;
        let ve = M.length - 1,
            fe = le - 1;
        for (; X <= ve && X <= fe;) {
            const Te = M[X],
                Ae = P[X] = ie ? ji(P[X]) : yn(P[X]);
            if (Qn(Te, Ae)) m(Te, Ae, H, null, K, Q, ne, te, ie);
            else break;
            X++
        }
        for (; X <= ve && X <= fe;) {
            const Te = M[ve],
                Ae = P[fe] = ie ? ji(P[fe]) : yn(P[fe]);
            if (Qn(Te, Ae)) m(Te, Ae, H, null, K, Q, ne, te, ie);
            else break;
            ve--, fe--
        }
        if (X > ve) {
            if (X <= fe) {
                const Te = fe + 1,
                    Ae = Te < le ? P[Te].el : Z;
                for (; X <= fe;) m(null, P[X] = ie ? ji(P[X]) : yn(P[X]), H, Ae, K, Q, ne, te, ie), X++
            }
        } else if (X > fe)
            for (; X <= ve;) He(M[X], K, Q, !0), X++;
        else {
            const Te = X,
                Ae = X,
                ze = new Map;
            for (X = Ae; X <= fe; X++) {
                const ue = P[X] = ie ? ji(P[X]) : yn(P[X]);
                ue.key != null && ze.set(ue.key, X)
            }
            let g, v = 0;
            const A = fe - Ae + 1;
            let k = !1,
                z = 0;
            const ee = new Array(A);
            for (X = 0; X < A; X++) ee[X] = 0;
            for (X = Te; X <= ve; X++) {
                const ue = M[X];
                if (v >= A) {
                    He(ue, K, Q, !0);
                    continue
                }
                let we;
                if (ue.key != null) we = ze.get(ue.key);
                else
                    for (g = Ae; g <= fe; g++)
                        if (ee[g - Ae] === 0 && Qn(ue, P[g])) {
                            we = g;
                            break
                        } we === void 0 ? He(ue, K, Q, !0) : (ee[we - Ae] = X + 1, we >= z ? z = we : k = !0, m(ue, P[we], H, null, K, Q, ne, te, ie), v++)
            }
            const Y = k ? r0(ee) : Yr;
            for (g = Y.length - 1, X = A - 1; X >= 0; X--) {
                const ue = Ae + X,
                    we = P[ue],
                    me = ue + 1 < le ? P[ue + 1].el : Z;
                ee[X] === 0 ? m(null, we, H, me, K, Q, ne, te, ie) : k && (g < 0 || X !== Y[g] ? Pe(we, H, me, 2) : g--)
            }
        }
    }, Pe = (M, P, H, Z, K = null) => {
        const {
            el: Q,
            type: ne,
            transition: te,
            children: ie,
            shapeFlag: X
        } = M;
        if (X & 6) {
            Pe(M.component.subTree, P, H, Z);
            return
        }
        if (X & 128) {
            M.suspense.move(P, H, Z);
            return
        }
        if (X & 64) {
            ne.move(M, P, H, ft);
            return
        }
        if (ne === et) {
            i(Q, P, H);
            for (let ve = 0; ve < ie.length; ve++) Pe(ie[ve], P, H, Z);
            i(M.anchor, P, H);
            return
        }
        if (ne === Xi) {
            b(M, P, H);
            return
        }
        if (Z !== 2 && X & 1 && te)
            if (Z === 0) te.beforeEnter(Q), i(Q, P, H), Yt(() => te.enter(Q), K);
            else {
                const {
                    leave: ve,
                    delayLeave: fe,
                    afterLeave: Te
                } = te, Ae = () => i(Q, P, H), ze = () => {
                    ve(Q, () => {
                        Ae(), Te && Te()
                    })
                };
                fe ? fe(Q, Ae, ze) : ze()
            }
        else i(Q, P, H)
    }, He = (M, P, H, Z = !1, K = !1) => {
        const {
            type: Q,
            props: ne,
            ref: te,
            children: ie,
            dynamicChildren: X,
            shapeFlag: le,
            patchFlag: ve,
            dirs: fe,
            cacheIndex: Te
        } = M;
        if (ve === -2 && (K = !1), te != null && Ca(te, null, H, M, !0), Te != null && (P.renderCache[Te] = void 0), le & 256) {
            P.ctx.deactivate(M);
            return
        }
        const Ae = le & 1 && fe,
            ze = !wr(M);
        let g;
        if (ze && (g = ne && ne.onVnodeBeforeUnmount) && gn(g, P, M), le & 6) tt(M.component, H, Z);
        else {
            if (le & 128) {
                M.suspense.unmount(H, Z);
                return
            }
            Ae && ai(M, null, P, "beforeUnmount"), le & 64 ? M.type.remove(M, P, H, ft, Z) : X && !X.hasOnce && (Q !== et || ve > 0 && ve & 64) ? q(X, P, H, !1, !0) : (Q === et && ve & 384 || !K && le & 16) && q(ie, P, H), Z && at(M)
        }(ze && (g = ne && ne.onVnodeUnmounted) || Ae) && Yt(() => {
            g && gn(g, P, M), Ae && ai(M, null, P, "unmounted")
        }, H)
    }, at = M => {
        const {
            type: P,
            el: H,
            anchor: Z,
            transition: K
        } = M;
        if (P === et) {
            Ye(H, Z);
            return
        }
        if (P === Xi) {
            w(M);
            return
        }
        const Q = () => {
            r(H), K && !K.persisted && K.afterLeave && K.afterLeave()
        };
        if (M.shapeFlag & 1 && K && !K.persisted) {
            const {
                leave: ne,
                delayLeave: te
            } = K, ie = () => ne(H, Q);
            te ? te(M.el, Q, ie) : ie()
        } else Q()
    }, Ye = (M, P) => {
        let H;
        for (; M !== P;) H = d(M), r(M), M = H;
        r(P)
    }, tt = (M, P, H) => {
        const {
            bum: Z,
            scope: K,
            update: Q,
            subTree: ne,
            um: te,
            m: ie,
            a: X
        } = M;
        Oa(ie), Oa(X), Z && zr(Z), K.stop(), Q && (Q.active = !1, He(ne, M, P, H)), te && Yt(te, P), Yt(() => {
            M.isUnmounted = !0
        }, P), P && P.pendingBranch && !P.isUnmounted && M.asyncDep && !M.asyncResolved && M.suspenseId === P.pendingId && (P.deps--, P.deps === 0 && P.resolve())
    }, q = (M, P, H, Z = !1, K = !1, Q = 0) => {
        for (let ne = Q; ne < M.length; ne++) He(M[ne], P, H, Z, K)
    }, ce = M => {
        if (M.shapeFlag & 6) return ce(M.component.subTree);
        if (M.shapeFlag & 128) return M.suspense.next();
        const P = d(M.anchor || M.el),
            H = P && P[Cm];
        return H ? d(H) : P
    };
    let Ne = !1;
    const De = (M, P, H) => {
            M == null ? P._vnode && He(P._vnode, null, null, !0) : m(P._vnode || null, M, P, null, null, null, H), Ne || (Ne = !0, Wf(), Da(), Ne = !1), P._vnode = M
        },
        ft = {
            p: m,
            um: He,
            m: Pe,
            r: at,
            mt: V,
            mc: L,
            pc: J,
            pbc: I,
            n: ce,
            o: e
        };
    let mt, dt;
    return n && ([mt, dt] = n(ft)), {
        render: De,
        hydrate: mt,
        createApp: Yb(De, mt)
    }
}

function kl({
    type: e,
    props: n
}, t) {
    return t === "svg" && e === "foreignObject" || t === "mathml" && e === "annotation-xml" && n && n.encoding && n.encoding.includes("html") ? void 0 : t
}

function lr({
    effect: e,
    update: n
}, t) {
    e.allowRecurse = n.allowRecurse = t
}

function Mm(e, n) {
    return (!e || e && !e.pendingBranch) && n && !n.persisted
}

function Rc(e, n, t = !1) {
    const i = e.children,
        r = n.children;
    if (pe(i) && pe(r))
        for (let s = 0; s < i.length; s++) {
            const o = i[s];
            let a = r[s];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[s] = ji(r[s]), a.el = o.el), !t && a.patchFlag !== -2 && Rc(o, a)), a.type === Di && (a.el = o.el)
        }
}

function r0(e) {
    const n = e.slice(),
        t = [0];
    let i, r, s, o, a;
    const l = e.length;
    for (i = 0; i < l; i++) {
        const u = e[i];
        if (u !== 0) {
            if (r = t[t.length - 1], e[r] < u) {
                n[i] = r, t.push(i);
                continue
            }
            for (s = 0, o = t.length - 1; s < o;) a = s + o >> 1, e[t[a]] < u ? s = a + 1 : o = a;
            u < e[t[s]] && (s > 0 && (n[i] = t[s - 1]), t[s] = i)
        }
    }
    for (s = t.length, o = t[s - 1]; s-- > 0;) t[s] = o, o = n[o];
    return t
}

function Im(e) {
    const n = e.subTree.component;
    if (n) return n.asyncDep && !n.asyncResolved ? n : Im(n)
}

function Oa(e) {
    if (e)
        for (let n = 0; n < e.length; n++) e[n].active = !1
}
const _c = Symbol.for("v-scx"),
    Fc = () => Zi(_c);

function Lc(e, n) {
    return mo(e, null, n)
}

function kc(e, n) {
    return mo(e, null, {
        flush: "post"
    })
}

function $c(e, n) {
    return mo(e, null, {
        flush: "sync"
    })
}
const $o = {};

function _n(e, n, t) {
    return mo(e, n, t)
}

function mo(e, n, {
    immediate: t,
    deep: i,
    flush: r,
    once: s,
    onTrack: o,
    onTrigger: a
} = nt) {
    if (n && s) {
        const O = n;
        n = (...F) => {
            O(...F), x()
        }
    }
    const l = Ut,
        u = O => i === !0 ? O : Ui(O, i === !1 ? 1 : void 0);
    let c, f = !1,
        d = !1;
    if (_t(e) ? (c = () => e.value, f = qi(e)) : Gi(e) ? (c = () => u(e), f = !0) : pe(e) ? (d = !0, f = e.some(O => Gi(O) || qi(O)), c = () => e.map(O => {
            if (_t(O)) return O.value;
            if (Gi(O)) return u(O);
            if (xe(O)) return ci(O, l, 2)
        })) : xe(e) ? n ? c = () => ci(e, l, 2) : c = () => (h && h(), wn(e, l, 3, [p])) : c = $t, n && i) {
        const O = c;
        c = () => Ui(O())
    }
    let h, p = O => {
            h = b.onStop = () => {
                ci(O, l, 4), h = b.onStop = void 0
            }
        },
        m;
    if (go)
        if (p = $t, n ? t && wn(n, l, 3, [c(), d ? [] : void 0, p]) : c(), r === "sync") {
            const O = Fc();
            m = O.__watcherHandles || (O.__watcherHandles = [])
        } else return $t;
    let y = d ? new Array(e.length).fill($o) : $o;
    const D = () => {
        if (!(!b.active || !b.dirty))
            if (n) {
                const O = b.run();
                (i || f || (d ? O.some((F, L) => ii(F, y[L])) : ii(O, y))) && (h && h(), wn(n, l, 3, [O, y === $o ? void 0 : d && y[0] === $o ? [] : y, p]), y = O)
            } else b.run()
    };
    D.allowRecurse = !!n;
    let S;
    r === "sync" ? S = D : r === "post" ? S = () => Yt(D, l && l.suspense) : (D.pre = !0, l && (D.id = l.uid), S = () => ul(D));
    const b = new Cr(c, $t, S),
        w = ac(),
        x = () => {
            b.stop(), w && rc(w.effects, b)
        };
    return n ? t ? D() : y = b.run() : r === "post" ? Yt(b.run.bind(b), l && l.suspense) : b.run(), m && m.push(x), x
}

function s0(e, n, t) {
    const i = this.proxy,
        r = ke(e) ? e.includes(".") ? Pm(i, e) : () => i[e] : e.bind(i, i);
    let s;
    xe(n) ? s = n : (s = n.handler, t = n);
    const o = Ar(this),
        a = mo(r, s.bind(i), t);
    return o(), a
}

function Pm(e, n) {
    const t = n.split(".");
    return () => {
        let i = e;
        for (let r = 0; r < t.length && i; r++) i = i[t[r]];
        return i
    }
}

function Ui(e, n = 1 / 0, t) {
    if (n <= 0 || !ct(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
    if (t.add(e), n--, _t(e)) Ui(e.value, n, t);
    else if (pe(e))
        for (let i = 0; i < e.length; i++) Ui(e[i], n, t);
    else if (Rr(e) || Kr(e)) e.forEach(i => {
        Ui(i, n, t)
    });
    else if (tp(e)) {
        for (const i in e) Ui(e[i], n, t);
        for (const i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && Ui(e[i], n, t)
    }
    return e
}

function Nm(e, n, t = nt) {
    const i = Tn(),
        r = bt(n),
        s = bn(n),
        o = Rm(e, n),
        a = gc((l, u) => {
            let c, f, d;
            return $c(() => {
                const h = e[n];
                ii(c, h) && (c = h, u())
            }), {
                get() {
                    return l(), t.get ? t.get(c) : c
                },
                set(h) {
                    if (!ii(h, c)) return;
                    const p = i.vnode.props;
                    p && (n in p || r in p || s in p) && (`onUpdate:${n}` in p || `onUpdate:${r}` in p || `onUpdate:${s}` in p) || (c = h, u());
                    const m = t.set ? t.set(h) : h;
                    i.emit(`update:${n}`, m), h !== m && h !== f && m === d && u(), f = h, d = m
                }
            }
        });
    return a[Symbol.iterator] = () => {
        let l = 0;
        return {
            next() {
                return l < 2 ? {
                    value: l++ ? o || nt : a,
                    done: !1
                } : {
                    done: !0
                }
            }
        }
    }, a
}
const Rm = (e, n) => n === "modelValue" || n === "model-value" ? e.modelModifiers : e[`${n}Modifiers`] || e[`${bt(n)}Modifiers`] || e[`${bn(n)}Modifiers`];

function o0(e, n, ...t) {
    if (e.isUnmounted) return;
    const i = e.vnode.props || nt;
    let r = t;
    const s = n.startsWith("update:"),
        o = s && Rm(i, n.slice(7));
    o && (o.trim && (r = t.map(c => ke(c) ? c.trim() : c)), o.number && (r = t.map(ba)));
    let a, l = i[a = br(n)] || i[a = br(bt(n))];
    !l && s && (l = i[a = br(bn(n))]), l && wn(l, e, 6, r);
    const u = i[a + "Once"];
    if (u) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[a]) return;
        e.emitted[a] = !0, wn(u, e, 6, r)
    }
}

function _m(e, n, t = !1) {
    const i = n.emitsCache,
        r = i.get(e);
    if (r !== void 0) return r;
    const s = e.emits;
    let o = {},
        a = !1;
    if (!xe(e)) {
        const l = u => {
            const c = _m(u, n, !0);
            c && (a = !0, it(o, c))
        };
        !t && n.mixins.length && n.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
    }
    return !s && !a ? (ct(e) && i.set(e, null), null) : (pe(s) ? s.forEach(l => o[l] = null) : it(o, s), ct(e) && i.set(e, o), o)
}

function pl(e, n) {
    return !e || !Nr(n) ? !1 : (n = n.slice(2).replace(/Once$/, ""), qe(e, n[0].toLowerCase() + n.slice(1)) || qe(e, bn(n)) || qe(e, n))
}

function ra(e) {
    const {
        type: n,
        vnode: t,
        proxy: i,
        withProxy: r,
        propsOptions: [s],
        slots: o,
        attrs: a,
        emit: l,
        render: u,
        renderCache: c,
        props: f,
        data: d,
        setupState: h,
        ctx: p,
        inheritAttrs: m
    } = e, y = zs(e);
    let D, S;
    try {
        if (t.shapeFlag & 4) {
            const w = r || i,
                x = w;
            D = yn(u.call(x, w, c, f, h, d, p)), S = a
        } else {
            const w = n;
            D = yn(w.length > 1 ? w(f, {
                attrs: a,
                slots: o,
                emit: l
            }) : w(f, null)), S = n.props ? a : l0(a)
        }
    } catch (w) {
        _s.length = 0, or(w, e, 1), D = ot(Bt)
    }
    let b = D;
    if (S && m !== !1) {
        const w = Object.keys(S),
            {
                shapeFlag: x
            } = b;
        w.length && x & 7 && (s && w.some(ic) && (S = u0(S, s)), b = ri(b, S, !1, !0))
    }
    return t.dirs && (b = ri(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(t.dirs) : t.dirs), t.transition && (b.transition = t.transition), D = b, zs(y), D
}

function a0(e, n = !0) {
    let t;
    for (let i = 0; i < e.length; i++) {
        const r = e[i];
        if (Mi(r)) {
            if (r.type !== Bt || r.children === "v-if") {
                if (t) return;
                t = r
            }
        } else return
    }
    return t
}
const l0 = e => {
        let n;
        for (const t in e)(t === "class" || t === "style" || Nr(t)) && ((n || (n = {}))[t] = e[t]);
        return n
    },
    u0 = (e, n) => {
        const t = {};
        for (const i in e)(!ic(i) || !(i.slice(9) in n)) && (t[i] = e[i]);
        return t
    };

function c0(e, n, t) {
    const {
        props: i,
        children: r,
        component: s
    } = e, {
        props: o,
        children: a,
        patchFlag: l
    } = n, u = s.emitsOptions;
    if (n.dirs || n.transition) return !0;
    if (t && l >= 0) {
        if (l & 1024) return !0;
        if (l & 16) return i ? id(i, o, u) : !!o;
        if (l & 8) {
            const c = n.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                const d = c[f];
                if (o[d] !== i[d] && !pl(u, d)) return !0
            }
        }
    } else return (r || a) && (!a || !a.$stable) ? !0 : i === o ? !1 : i ? o ? id(i, o, u) : !0 : !!o;
    return !1
}

function id(e, n, t) {
    const i = Object.keys(n);
    if (i.length !== Object.keys(e).length) return !0;
    for (let r = 0; r < i.length; r++) {
        const s = i[r];
        if (n[s] !== e[s] && !pl(t, s)) return !0
    }
    return !1
}

function jc({
    vnode: e,
    parent: n
}, t) {
    for (; n;) {
        const i = n.subTree;
        if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e)(e = n.vnode).el = t, n = n.parent;
        else break
    }
}
const wu = e => e.__isSuspense;
let Du = 0;
const f0 = {
        name: "Suspense",
        __isSuspense: !0,
        process(e, n, t, i, r, s, o, a, l, u) {
            if (e == null) d0(n, t, i, r, s, o, a, l, u);
            else {
                if (s && s.deps > 0 && !e.suspense.isInFallback) {
                    n.suspense = e.suspense, n.suspense.vnode = n, n.el = e.el;
                    return
                }
                h0(e, n, t, i, r, o, a, l, u)
            }
        },
        hydrate: p0,
        normalize: m0
    },
    Fm = f0;

function Xs(e, n) {
    const t = e.props && e.props[n];
    xe(t) && t()
}

function d0(e, n, t, i, r, s, o, a, l) {
    const {
        p: u,
        o: {
            createElement: c
        }
    } = l, f = c("div"), d = e.suspense = Lm(e, r, i, n, f, t, s, o, a, l);
    u(null, d.pendingBranch = e.ssContent, f, null, i, d, s, o), d.deps > 0 ? (Xs(e, "onPending"), Xs(e, "onFallback"), u(null, e.ssFallback, n, t, i, null, s, o), Jr(d, e.ssFallback)) : d.resolve(!1, !0)
}

function h0(e, n, t, i, r, s, o, a, {
    p: l,
    um: u,
    o: {
        createElement: c
    }
}) {
    const f = n.suspense = e.suspense;
    f.vnode = n, n.el = e.el;
    const d = n.ssContent,
        h = n.ssFallback,
        {
            activeBranch: p,
            pendingBranch: m,
            isInFallback: y,
            isHydrating: D
        } = f;
    if (m) f.pendingBranch = d, Qn(d, m) ? (l(m, d, f.hiddenContainer, null, r, f, s, o, a), f.deps <= 0 ? f.resolve() : y && (D || (l(p, h, t, i, r, null, s, o, a), Jr(f, h)))) : (f.pendingId = Du++, D ? (f.isHydrating = !1, f.activeBranch = m) : u(m, r, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = c("div"), y ? (l(null, d, f.hiddenContainer, null, r, f, s, o, a), f.deps <= 0 ? f.resolve() : (l(p, h, t, i, r, null, s, o, a), Jr(f, h))) : p && Qn(d, p) ? (l(p, d, t, i, r, f, s, o, a), f.resolve(!0)) : (l(null, d, f.hiddenContainer, null, r, f, s, o, a), f.deps <= 0 && f.resolve()));
    else if (p && Qn(d, p)) l(p, d, t, i, r, f, s, o, a), Jr(f, d);
    else if (Xs(n, "onPending"), f.pendingBranch = d, d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = Du++, l(null, d, f.hiddenContainer, null, r, f, s, o, a), f.deps <= 0) f.resolve();
    else {
        const {
            timeout: S,
            pendingId: b
        } = f;
        S > 0 ? setTimeout(() => {
            f.pendingId === b && f.fallback(h)
        }, S) : S === 0 && f.fallback(h)
    }
}

function Lm(e, n, t, i, r, s, o, a, l, u, c = !1) {
    const {
        p: f,
        m: d,
        um: h,
        n: p,
        o: {
            parentNode: m,
            remove: y
        }
    } = u;
    let D;
    const S = g0(e);
    S && n && n.pendingBranch && (D = n.pendingId, n.deps++);
    const b = e.props ? Ea(e.props.timeout) : void 0,
        w = s,
        x = {
            vnode: e,
            parent: n,
            parentComponent: t,
            namespace: o,
            container: i,
            hiddenContainer: r,
            deps: 0,
            pendingId: Du++,
            timeout: typeof b == "number" ? b : -1,
            activeBranch: null,
            pendingBranch: null,
            isInFallback: !c,
            isHydrating: c,
            isUnmounted: !1,
            effects: [],
            resolve(O = !1, F = !1) {
                const {
                    vnode: L,
                    activeBranch: C,
                    pendingBranch: I,
                    pendingId: j,
                    effects: R,
                    parentComponent: _,
                    container: V
                } = x;
                let G = !1;
                x.isHydrating ? x.isHydrating = !1 : O || (G = C && I.transition && I.transition.mode === "out-in", G && (C.transition.afterLeave = () => {
                    j === x.pendingId && (d(I, V, s === w ? p(C) : s, 0), Ys(R))
                }), C && (m(C.el) !== x.hiddenContainer && (s = p(C)), h(C, _, x, !0)), G || d(I, V, s, 0)), Jr(x, I), x.pendingBranch = null, x.isInFallback = !1;
                let $ = x.parent,
                    W = !1;
                for (; $;) {
                    if ($.pendingBranch) {
                        $.effects.push(...R), W = !0;
                        break
                    }
                    $ = $.parent
                }!W && !G && Ys(R), x.effects = [], S && n && n.pendingBranch && D === n.pendingId && (n.deps--, n.deps === 0 && !F && n.resolve()), Xs(L, "onResolve")
            },
            fallback(O) {
                if (!x.pendingBranch) return;
                const {
                    vnode: F,
                    activeBranch: L,
                    parentComponent: C,
                    container: I,
                    namespace: j
                } = x;
                Xs(F, "onFallback");
                const R = p(L),
                    _ = () => {
                        x.isInFallback && (f(null, O, I, R, C, null, j, a, l), Jr(x, O))
                    },
                    V = O.transition && O.transition.mode === "out-in";
                V && (L.transition.afterLeave = _), x.isInFallback = !0, h(L, C, null, !0), V || _()
            },
            move(O, F, L) {
                x.activeBranch && d(x.activeBranch, O, F, L), x.container = O
            },
            next() {
                return x.activeBranch && p(x.activeBranch)
            },
            registerDep(O, F, L) {
                const C = !!x.pendingBranch;
                C && x.deps++;
                const I = O.vnode.el;
                O.asyncDep.catch(j => {
                    or(j, O, 0)
                }).then(j => {
                    if (O.isUnmounted || x.isUnmounted || x.pendingId !== O.suspenseId) return;
                    O.asyncResolved = !0;
                    const {
                        vnode: R
                    } = O;
                    Ou(O, j, !1), I && (R.el = I);
                    const _ = !I && O.subTree.el;
                    F(O, R, m(I || O.subTree.el), I ? null : p(O.subTree), x, o, L), _ && y(_), jc(O, R.el), C && --x.deps === 0 && x.resolve()
                })
            },
            unmount(O, F) {
                x.isUnmounted = !0, x.activeBranch && h(x.activeBranch, t, O, F), x.pendingBranch && h(x.pendingBranch, t, O, F)
            }
        };
    return x
}

function p0(e, n, t, i, r, s, o, a, l) {
    const u = n.suspense = Lm(n, i, t, e.parentNode, document.createElement("div"), null, r, s, o, a, !0),
        c = l(e, u.pendingBranch = n.ssContent, t, u, s, o);
    return u.deps === 0 && u.resolve(!1, !0), c
}

function m0(e) {
    const {
        shapeFlag: n,
        children: t
    } = e, i = n & 32;
    e.ssContent = rd(i ? t.default : t), e.ssFallback = i ? rd(t.fallback) : ot(Bt)
}

function rd(e) {
    let n;
    if (xe(e)) {
        const t = xr && e._c;
        t && (e._d = !1, ae()), e = e(), t && (e._d = !0, n = sn, $m())
    }
    return pe(e) && (e = a0(e)), e = yn(e), n && !e.dynamicChildren && (e.dynamicChildren = n.filter(t => t !== e)), e
}

function km(e, n) {
    n && n.pendingBranch ? pe(e) ? n.effects.push(...e) : n.effects.push(e) : Ys(e)
}

function Jr(e, n) {
    e.activeBranch = n;
    const {
        vnode: t,
        parentComponent: i
    } = e;
    let r = n.el;
    for (; !r && n.component;) n = n.component.subTree, r = n.el;
    t.el = r, i && i.subTree === t && (i.vnode.el = r, jc(i, r))
}

function g0(e) {
    const n = e.props && e.props.suspensible;
    return n != null && n !== !1
}
const et = Symbol.for("v-fgt"),
    Di = Symbol.for("v-txt"),
    Bt = Symbol.for("v-cmt"),
    Xi = Symbol.for("v-stc"),
    _s = [];
let sn = null;

function ae(e = !1) {
    _s.push(sn = e ? null : [])
}

function $m() {
    _s.pop(), sn = _s[_s.length - 1] || null
}
let xr = 1;

function xa(e) {
    xr += e, e < 0 && sn && (sn.hasOnce = !0)
}

function jm(e) {
    return e.dynamicChildren = xr > 0 ? sn || Yr : null, $m(), xr > 0 && sn && sn.push(e), e
}

function ge(e, n, t, i, r, s) {
    return jm(yt(e, n, t, i, r, s, !0))
}

function Rn(e, n, t, i, r) {
    return jm(ot(e, n, t, i, r, !0))
}

function Mi(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function Qn(e, n) {
    return e.type === n.type && e.key === n.key
}

function Vm(e) {}
const Hm = ({
        key: e
    }) => e ?? null,
    sa = ({
        ref: e,
        ref_key: n,
        ref_for: t
    }) => (typeof e == "number" && (e = "" + e), e != null ? ke(e) || _t(e) || xe(e) ? {
        i: Wt,
        r: e,
        k: n,
        f: !!t
    } : e : null);

function yt(e, n = null, t = null, i = 0, r = null, s = e === et ? 0 : 1, o = !1, a = !1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: n,
        key: n && Hm(n),
        ref: n && sa(n),
        scopeId: cl,
        slotScopeIds: null,
        children: t,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: s,
        patchFlag: i,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: Wt
    };
    return a ? (Hc(l, t), s & 128 && e.normalize(l)) : t && (l.shapeFlag |= ke(t) ? 8 : 16), xr > 0 && !o && sn && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && sn.push(l), l
}
const ot = v0;

function v0(e, n = null, t = null, i = 0, r = null, s = !1) {
    if ((!e || e === Zp) && (e = Bt), Mi(e)) {
        const a = ri(e, n, !0);
        return t && Hc(a, t), xr > 0 && !s && sn && (a.shapeFlag & 6 ? sn[sn.indexOf(e)] = a : sn.push(a)), a.patchFlag = -2, a
    }
    if (w0(e) && (e = e.__vccOpts), n) {
        n = Vc(n);
        let {
            class: a,
            style: l
        } = n;
        a && !ke(a) && (n.class = Rt(a)), ct(l) && (al(l) && !pe(l) && (l = it({}, l)), n.style = Kt(l))
    }
    const o = ke(e) ? 1 : wu(e) ? 128 : Qb(e) ? 64 : ct(e) ? 4 : xe(e) ? 2 : 0;
    return yt(e, n, t, i, r, o, s, !0)
}

function Vc(e) {
    return e ? al(e) || ym(e) ? it({}, e) : e : null
}

function ri(e, n, t = !1, i = !1) {
    const {
        props: r,
        ref: s,
        patchFlag: o,
        children: a,
        transition: l
    } = e, u = n ? Js(r || {}, n) : r, c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && Hm(u),
        ref: n && n.ref ? t && s ? pe(s) ? s.concat(sa(n)) : [s, sa(n)] : sa(n) : s,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: n && e.type !== et ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: l,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && ri(e.ssContent),
        ssFallback: e.ssFallback && ri(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return l && i && Ai(c, l.clone(c)), c
}

function Xt(e = " ", n = 0) {
    return ot(Di, null, e, n)
}

function Bm(e, n) {
    const t = ot(Xi, null, e);
    return t.staticCount = n, t
}

function je(e = "", n = !1) {
    return n ? (ae(), Rn(Bt, null, e)) : ot(Bt, null, e)
}

function yn(e) {
    return e == null || typeof e == "boolean" ? ot(Bt) : pe(e) ? ot(et, null, e.slice()) : typeof e == "object" ? ji(e) : ot(Di, null, String(e))
}

function ji(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : ri(e)
}

function Hc(e, n) {
    let t = 0;
    const {
        shapeFlag: i
    } = e;
    if (n == null) n = null;
    else if (pe(n)) t = 16;
    else if (typeof n == "object")
        if (i & 65) {
            const r = n.default;
            r && (r._c && (r._d = !1), Hc(e, r()), r._c && (r._d = !0));
            return
        } else {
            t = 32;
            const r = n._;
            !r && !ym(n) ? n._ctx = Wt : r === 3 && Wt && (Wt.slots._ === 1 ? n._ = 1 : (n._ = 2, e.patchFlag |= 1024))
        }
    else xe(n) ? (n = {
        default: n,
        _ctx: Wt
    }, t = 32) : (n = String(n), i & 64 ? (t = 16, n = [Xt(n)]) : t = 8);
    e.children = n, e.shapeFlag |= t
}

function Js(...e) {
    const n = {};
    for (let t = 0; t < e.length; t++) {
        const i = e[t];
        for (const r in i)
            if (r === "class") n.class !== i.class && (n.class = Rt([n.class, i.class]));
            else if (r === "style") n.style = Kt([n.style, i.style]);
        else if (Nr(r)) {
            const s = n[r],
                o = i[r];
            o && s !== o && !(pe(s) && s.includes(o)) && (n[r] = s ? [].concat(s, o) : o)
        } else r !== "" && (n[r] = i[r])
    }
    return n
}

function gn(e, n, t, i = null) {
    wn(e, n, 7, [t, i])
}
const y0 = pm();
let b0 = 0;

function Um(e, n, t) {
    const i = e.type,
        r = (n ? n.appContext : e.appContext) || y0,
        s = {
            uid: b0++,
            vnode: e,
            type: i,
            parent: n,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new il(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: n ? n.provides : Object.create(r.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Em(i, r),
            emitsOptions: _m(i, r),
            emit: null,
            emitted: null,
            propsDefaults: nt,
            inheritAttrs: i.inheritAttrs,
            ctx: nt,
            data: nt,
            props: nt,
            attrs: nt,
            slots: nt,
            refs: nt,
            setupState: nt,
            setupContext: null,
            attrsProxy: null,
            slotsProxy: null,
            suspense: t,
            suspenseId: t ? t.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return s.ctx = {
        _: s
    }, s.root = n ? n.root : s, s.emit = o0.bind(null, s), e.ce && e.ce(s), s
}
let Ut = null;
const Tn = () => Ut || Wt;
let Aa, Tu;
{
    const e = ip(),
        n = (t, i) => {
            let r;
            return (r = e[t]) || (r = e[t] = []), r.push(i), s => {
                r.length > 1 ? r.forEach(o => o(s)) : r[0](s)
            }
        };
    Aa = n("__VUE_INSTANCE_SETTERS__", t => Ut = t), Tu = n("__VUE_SSR_SETTERS__", t => go = t)
}
const Ar = e => {
        const n = Ut;
        return Aa(e), e.scope.on(), () => {
            e.scope.off(), Aa(n)
        }
    },
    Cu = () => {
        Ut && Ut.scope.off(), Aa(null)
    };

function Wm(e) {
    return e.vnode.shapeFlag & 4
}
let go = !1;

function Ym(e, n = !1, t = !1) {
    n && Tu(n);
    const {
        props: i,
        children: r
    } = e.vnode, s = Wm(e);
    Kb(e, i, s, n), Xb(e, r, t);
    const o = s ? E0(e, n) : void 0;
    return n && Tu(!1), o
}

function E0(e, n) {
    const t = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, vu);
    const {
        setup: i
    } = t;
    if (i) {
        const r = e.setupContext = i.length > 1 ? Gm(e) : null,
            s = Ar(e);
        rr();
        const o = ci(i, e, 0, [e.props, r]);
        if (sr(), s(), sc(o)) {
            if (o.then(Cu, Cu), n) return o.then(a => {
                Ou(e, a, n)
            }).catch(a => {
                or(a, e, 0)
            });
            e.asyncDep = o
        } else Ou(e, o, n)
    } else zm(e, n)
}

function Ou(e, n, t) {
    xe(n) ? e.type.__ssrInlineRender ? e.ssrRender = n : e.render = n : ct(n) && (e.setupState = ll(n)), zm(e, t)
}
let Ma, xu;

function Bc(e) {
    Ma = e, xu = n => {
        n.render._rc && (n.withProxy = new Proxy(n.ctx, $b))
    }
}
const Km = () => !Ma;

function zm(e, n, t) {
    const i = e.type;
    if (!e.render) {
        if (!n && Ma && !i.render) {
            const r = i.template || Mc(e).template;
            if (r) {
                const {
                    isCustomElement: s,
                    compilerOptions: o
                } = e.appContext.config, {
                    delimiters: a,
                    compilerOptions: l
                } = i, u = it(it({
                    isCustomElement: s,
                    delimiters: a
                }, o), l);
                i.render = Ma(r, u)
            }
        }
        e.render = i.render || $t, xu && xu(e)
    } {
        const r = Ar(e);
        rr();
        try {
            jb(e)
        } finally {
            sr(), r()
        }
    }
}
const S0 = {
    get(e, n) {
        return Dn(e, "get", ""), e[n]
    }
};

function Gm(e) {
    const n = t => {
        e.exposed = t || {}
    };
    return {
        attrs: new Proxy(e.attrs, S0),
        slots: e.slots,
        emit: e.emit,
        expose: n
    }
}

function vo(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ll(dc(e.exposed)), {
        get(n, t) {
            if (t in n) return n[t];
            if (t in Ns) return Ns[t](e)
        },
        has(n, t) {
            return t in n || t in Ns
        }
    })) : e.proxy
}

function Au(e, n = !0) {
    return xe(e) ? e.displayName || e.name : e.name || n && e.__name
}

function w0(e) {
    return xe(e) && "__vccOpts" in e
}
const Xe = (e, n) => Db(e, n, go);

function er(e, n, t) {
    const i = arguments.length;
    return i === 2 ? ct(n) && !pe(n) ? Mi(n) ? ot(e, null, [n]) : ot(e, n) : ot(e, null, n) : (i > 3 ? t = Array.prototype.slice.call(arguments, 2) : i === 3 && Mi(t) && (t = [t]), ot(e, n, t))
}

function Zm() {}

function Xm(e, n, t, i) {
    const r = t[i];
    if (r && Uc(r, e)) return r;
    const s = n();
    return s.memo = e.slice(), s.cacheIndex = i, t[i] = s
}

function Uc(e, n) {
    const t = e.memo;
    if (t.length != n.length) return !1;
    for (let i = 0; i < t.length; i++)
        if (ii(t[i], n[i])) return !1;
    return xr > 0 && sn && sn.push(e), !0
}
const Wc = "3.4.32",
    Jm = $t,
    Qm = Mb,
    qm = Br,
    eg = jp,
    D0 = {
        createComponentInstance: Um,
        setupComponent: Ym,
        renderComponentRoot: ra,
        setCurrentRenderingInstance: zs,
        isVNode: Mi,
        normalizeVNode: yn,
        getComponentPublicInstance: vo
    },
    tg = D0,
    ng = null,
    ig = null,
    rg = null;
/**
 * @vue/runtime-dom v3.4.32
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const T0 = "http://www.w3.org/2000/svg",
    C0 = "http://www.w3.org/1998/Math/MathML",
    yi = typeof document < "u" ? document : null,
    sd = yi && yi.createElement("template"),
    O0 = {
        insert: (e, n, t) => {
            n.insertBefore(e, t || null)
        },
        remove: e => {
            const n = e.parentNode;
            n && n.removeChild(e)
        },
        createElement: (e, n, t, i) => {
            const r = n === "svg" ? yi.createElementNS(T0, e) : n === "mathml" ? yi.createElementNS(C0, e) : t ? yi.createElement(e, {
                is: t
            }) : yi.createElement(e);
            return e === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple), r
        },
        createText: e => yi.createTextNode(e),
        createComment: e => yi.createComment(e),
        setText: (e, n) => {
            e.nodeValue = n
        },
        setElementText: (e, n) => {
            e.textContent = n
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => yi.querySelector(e),
        setScopeId(e, n) {
            e.setAttribute(n, "")
        },
        insertStaticContent(e, n, t, i, r, s) {
            const o = t ? t.previousSibling : n.lastChild;
            if (r && (r === s || r.nextSibling))
                for (; n.insertBefore(r.cloneNode(!0), t), !(r === s || !(r = r.nextSibling)););
            else {
                sd.innerHTML = i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e;
                const a = sd.content;
                if (i === "svg" || i === "mathml") {
                    const l = a.firstChild;
                    for (; l.firstChild;) a.appendChild(l.firstChild);
                    a.removeChild(l)
                }
                n.insertBefore(a, t)
            }
            return [o ? o.nextSibling : n.firstChild, t ? t.previousSibling : n.lastChild]
        }
    },
    Ri = "transition",
    ps = "animation",
    es = Symbol("_vtc"),
    tr = (e, {
        slots: n
    }) => er(yc, og(e), n);
tr.displayName = "Transition";
const sg = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    x0 = tr.props = it({}, dl, sg),
    ur = (e, n = []) => {
        pe(e) ? e.forEach(t => t(...n)) : e && e(...n)
    },
    od = e => e ? pe(e) ? e.some(n => n.length > 1) : e.length > 1 : !1;

function og(e) {
    const n = {};
    for (const R in e) R in sg || (n[R] = e[R]);
    if (e.css === !1) return n;
    const {
        name: t = "v",
        type: i,
        duration: r,
        enterFromClass: s = `${t}-enter-from`,
        enterActiveClass: o = `${t}-enter-active`,
        enterToClass: a = `${t}-enter-to`,
        appearFromClass: l = s,
        appearActiveClass: u = o,
        appearToClass: c = a,
        leaveFromClass: f = `${t}-leave-from`,
        leaveActiveClass: d = `${t}-leave-active`,
        leaveToClass: h = `${t}-leave-to`
    } = e, p = A0(r), m = p && p[0], y = p && p[1], {
        onBeforeEnter: D,
        onEnter: S,
        onEnterCancelled: b,
        onLeave: w,
        onLeaveCancelled: x,
        onBeforeAppear: O = D,
        onAppear: F = S,
        onAppearCancelled: L = b
    } = n, C = (R, _, V) => {
        Li(R, _ ? c : a), Li(R, _ ? u : o), V && V()
    }, I = (R, _) => {
        R._isLeaving = !1, Li(R, f), Li(R, h), Li(R, d), _ && _()
    }, j = R => (_, V) => {
        const G = R ? F : S,
            $ = () => C(_, R, V);
        ur(G, [_, $]), ad(() => {
            Li(_, R ? l : s), pi(_, R ? c : a), od(G) || ld(_, i, m, $)
        })
    };
    return it(n, {
        onBeforeEnter(R) {
            ur(D, [R]), pi(R, s), pi(R, o)
        },
        onBeforeAppear(R) {
            ur(O, [R]), pi(R, l), pi(R, u)
        },
        onEnter: j(!1),
        onAppear: j(!0),
        onLeave(R, _) {
            R._isLeaving = !0;
            const V = () => I(R, _);
            pi(R, f), pi(R, d), lg(), ad(() => {
                R._isLeaving && (Li(R, f), pi(R, h), od(w) || ld(R, i, y, V))
            }), ur(w, [R, V])
        },
        onEnterCancelled(R) {
            C(R, !1), ur(b, [R])
        },
        onAppearCancelled(R) {
            C(R, !0), ur(L, [R])
        },
        onLeaveCancelled(R) {
            I(R), ur(x, [R])
        }
    })
}

function A0(e) {
    if (e == null) return null;
    if (ct(e)) return [$l(e.enter), $l(e.leave)];
    {
        const n = $l(e);
        return [n, n]
    }
}

function $l(e) {
    return Ea(e)
}

function pi(e, n) {
    n.split(/\s+/).forEach(t => t && e.classList.add(t)), (e[es] || (e[es] = new Set)).add(n)
}

function Li(e, n) {
    n.split(/\s+/).forEach(i => i && e.classList.remove(i));
    const t = e[es];
    t && (t.delete(n), t.size || (e[es] = void 0))
}

function ad(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let M0 = 0;

function ld(e, n, t, i) {
    const r = e._endId = ++M0,
        s = () => {
            r === e._endId && i()
        };
    if (t) return setTimeout(s, t);
    const {
        type: o,
        timeout: a,
        propCount: l
    } = ag(e, n);
    if (!o) return i();
    const u = o + "end";
    let c = 0;
    const f = () => {
            e.removeEventListener(u, d), s()
        },
        d = h => {
            h.target === e && ++c >= l && f()
        };
    setTimeout(() => {
        c < l && f()
    }, a + 1), e.addEventListener(u, d)
}

function ag(e, n) {
    const t = window.getComputedStyle(e),
        i = p => (t[p] || "").split(", "),
        r = i(`${Ri}Delay`),
        s = i(`${Ri}Duration`),
        o = ud(r, s),
        a = i(`${ps}Delay`),
        l = i(`${ps}Duration`),
        u = ud(a, l);
    let c = null,
        f = 0,
        d = 0;
    n === Ri ? o > 0 && (c = Ri, f = o, d = s.length) : n === ps ? u > 0 && (c = ps, f = u, d = l.length) : (f = Math.max(o, u), c = f > 0 ? o > u ? Ri : ps : null, d = c ? c === Ri ? s.length : l.length : 0);
    const h = c === Ri && /\b(transform|all)(,|$)/.test(i(`${Ri}Property`).toString());
    return {
        type: c,
        timeout: f,
        propCount: d,
        hasTransform: h
    }
}

function ud(e, n) {
    for (; e.length < n.length;) e = e.concat(e);
    return Math.max(...n.map((t, i) => cd(t) + cd(e[i])))
}

function cd(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function lg() {
    return document.body.offsetHeight
}

function I0(e, n, t) {
    const i = e[es];
    i && (n = (n ? [n, ...i] : [...i]).join(" ")), n == null ? e.removeAttribute("class") : t ? e.setAttribute("class", n) : e.className = n
}
const Ia = Symbol("_vod"),
    ug = Symbol("_vsh"),
    Yc = {
        beforeMount(e, {
            value: n
        }, {
            transition: t
        }) {
            e[Ia] = e.style.display === "none" ? "" : e.style.display, t && n ? t.beforeEnter(e) : ms(e, n)
        },
        mounted(e, {
            value: n
        }, {
            transition: t
        }) {
            t && n && t.enter(e)
        },
        updated(e, {
            value: n,
            oldValue: t
        }, {
            transition: i
        }) {
            !n != !t && (i ? n ? (i.beforeEnter(e), ms(e, !0), i.enter(e)) : i.leave(e, () => {
                ms(e, !1)
            }) : ms(e, n))
        },
        beforeUnmount(e, {
            value: n
        }) {
            ms(e, n)
        }
    };

function ms(e, n) {
    e.style.display = n ? e[Ia] : "none", e[ug] = !n
}

function P0() {
    Yc.getSSRProps = ({
        value: e
    }) => {
        if (!e) return {
            style: {
                display: "none"
            }
        }
    }
}
const cg = Symbol("");

function fg(e) {
    const n = Tn();
    if (!n) return;
    const t = n.ut = (r = e(n.proxy)) => {
            Array.from(document.querySelectorAll(`[data-v-owner="${n.uid}"]`)).forEach(s => Iu(s, r))
        },
        i = () => {
            const r = e(n.proxy);
            Mu(n.subTree, r), t(r)
        };
    ar(() => {
        kc(i);
        const r = new MutationObserver(i);
        r.observe(n.subTree.el.parentNode, {
            childList: !0
        }), ho(() => r.disconnect())
    })
}

function Mu(e, n) {
    if (e.shapeFlag & 128) {
        const t = e.suspense;
        e = t.activeBranch, t.pendingBranch && !t.isHydrating && t.effects.push(() => {
            Mu(t.activeBranch, n)
        })
    }
    for (; e.component;) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) Iu(e.el, n);
    else if (e.type === et) e.children.forEach(t => Mu(t, n));
    else if (e.type === Xi) {
        let {
            el: t,
            anchor: i
        } = e;
        for (; t && (Iu(t, n), t !== i);) t = t.nextSibling
    }
}

function Iu(e, n) {
    if (e.nodeType === 1) {
        const t = e.style;
        let i = "";
        for (const r in n) t.setProperty(`--${r}`, n[r]), i += `--${r}: ${n[r]};`;
        t[cg] = i
    }
}
const N0 = /(^|;)\s*display\s*:/;

function R0(e, n, t) {
    const i = e.style,
        r = ke(t);
    let s = !1;
    if (t && !r) {
        if (n)
            if (ke(n))
                for (const o of n.split(";")) {
                    const a = o.slice(0, o.indexOf(":")).trim();
                    t[a] == null && oa(i, a, "")
                } else
                    for (const o in n) t[o] == null && oa(i, o, "");
        for (const o in t) o === "display" && (s = !0), oa(i, o, t[o])
    } else if (r) {
        if (n !== t) {
            const o = i[cg];
            o && (t += ";" + o), i.cssText = t, s = N0.test(t)
        }
    } else n && e.removeAttribute("style");
    Ia in e && (e[Ia] = s ? i.display : "", e[ug] && (i.display = "none"))
}
const fd = /\s*!important$/;

function oa(e, n, t) {
    if (pe(t)) t.forEach(i => oa(e, n, i));
    else if (t == null && (t = ""), n.startsWith("--")) e.setProperty(n, t);
    else {
        const i = _0(e, n);
        fd.test(t) ? e.setProperty(bn(i), t.replace(fd, ""), "important") : e[i] = t
    }
}
const dd = ["Webkit", "Moz", "ms"],
    jl = {};

function _0(e, n) {
    const t = jl[n];
    if (t) return t;
    let i = bt(n);
    if (i !== "filter" && i in e) return jl[n] = i;
    i = ir(i);
    for (let r = 0; r < dd.length; r++) {
        const s = dd[r] + i;
        if (s in e) return jl[n] = s
    }
    return n
}
const hd = "http://www.w3.org/1999/xlink";

function pd(e, n, t, i, r, s = tb(n)) {
    i && n.startsWith("xlink:") ? t == null ? e.removeAttributeNS(hd, n.slice(6, n.length)) : e.setAttributeNS(hd, n, t) : t == null || s && !sp(t) ? e.removeAttribute(n) : e.setAttribute(n, s ? "" : Fn(t) ? String(t) : t)
}

function F0(e, n, t, i) {
    if (n === "innerHTML" || n === "textContent") {
        if (t === null) return;
        e[n] = t;
        return
    }
    const r = e.tagName;
    if (n === "value" && r !== "PROGRESS" && !r.includes("-")) {
        const o = r === "OPTION" ? e.getAttribute("value") || "" : e.value,
            a = t == null ? "" : String(t);
        (o !== a || !("_value" in e)) && (e.value = a), t == null && e.removeAttribute(n), e._value = t;
        return
    }
    let s = !1;
    if (t === "" || t == null) {
        const o = typeof e[n];
        o === "boolean" ? t = sp(t) : t == null && o === "string" ? (t = "", s = !0) : o === "number" && (t = 0, s = !0)
    }
    try {
        e[n] = t
    } catch {}
    s && e.removeAttribute(n)
}

function Ei(e, n, t, i) {
    e.addEventListener(n, t, i)
}

function L0(e, n, t, i) {
    e.removeEventListener(n, t, i)
}
const md = Symbol("_vei");

function k0(e, n, t, i, r = null) {
    const s = e[md] || (e[md] = {}),
        o = s[n];
    if (i && o) o.value = i;
    else {
        const [a, l] = $0(n);
        if (i) {
            const u = s[n] = H0(i, r);
            Ei(e, a, u, l)
        } else o && (L0(e, a, o, l), s[n] = void 0)
    }
}
const gd = /(?:Once|Passive|Capture)$/;

function $0(e) {
    let n;
    if (gd.test(e)) {
        n = {};
        let i;
        for (; i = e.match(gd);) e = e.slice(0, e.length - i[0].length), n[i[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : bn(e.slice(2)), n]
}
let Vl = 0;
const j0 = Promise.resolve(),
    V0 = () => Vl || (j0.then(() => Vl = 0), Vl = Date.now());

function H0(e, n) {
    const t = i => {
        if (!i._vts) i._vts = Date.now();
        else if (i._vts <= t.attached) return;
        wn(B0(i, t.value), n, 5, [i])
    };
    return t.value = e, t.attached = V0(), t
}

function B0(e, n) {
    if (pe(n)) {
        const t = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            t.call(e), e._stopped = !0
        }, n.map(i => r => !r._stopped && i && i(r))
    } else return n
}
const vd = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    U0 = (e, n, t, i, r, s) => {
        const o = r === "svg";
        n === "class" ? I0(e, i, o) : n === "style" ? R0(e, t, i) : Nr(n) ? ic(n) || k0(e, n, t, i, s) : (n[0] === "." ? (n = n.slice(1), !0) : n[0] === "^" ? (n = n.slice(1), !1) : W0(e, n, i, o)) ? (F0(e, n, i), !e.tagName.includes("-") && (n === "value" || n === "checked" || n === "selected") && pd(e, n, i, o, s, n !== "value")) : (n === "true-value" ? e._trueValue = i : n === "false-value" && (e._falseValue = i), pd(e, n, i, o))
    };

function W0(e, n, t, i) {
    if (i) return !!(n === "innerHTML" || n === "textContent" || n in e && vd(n) && xe(t));
    if (n === "spellcheck" || n === "draggable" || n === "translate" || n === "form" || n === "list" && e.tagName === "INPUT" || n === "type" && e.tagName === "TEXTAREA") return !1;
    if (n === "width" || n === "height") {
        const r = e.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return !1
    }
    return vd(n) && ke(t) ? !1 : n in e
} /*! #__NO_SIDE_EFFECTS__ */
function Kc(e, n, t) {
    const i = _r(e, n);
    class r extends yo {
        constructor(o) {
            super(i, o, t)
        }
    }
    return r.def = i, r
} /*! #__NO_SIDE_EFFECTS__ */
const dg = (e, n) => Kc(e, n, Xc),
    Y0 = typeof HTMLElement < "u" ? HTMLElement : class {};
class yo extends Y0 {
    constructor(n, t = {}, i) {
        super(), this._def = n, this._props = t, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && i ? i(this._createVNode(), this.shadowRoot) : (this.attachShadow({
            mode: "open"
        }), this._def.__asyncLoader || this._resolveProps(this._def))
    }
    connectedCallback() {
        this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef())
    }
    disconnectedCallback() {
        this._connected = !1, cn(() => {
            this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), Ra(null, this.shadowRoot), this._instance = null)
        })
    }
    _resolveDef() {
        this._resolved = !0;
        for (let i = 0; i < this.attributes.length; i++) this._setAttr(this.attributes[i].name);
        this._ob = new MutationObserver(i => {
            for (const r of i) this._setAttr(r.attributeName)
        }), this._ob.observe(this, {
            attributes: !0
        });
        const n = (i, r = !1) => {
                const {
                    props: s,
                    styles: o
                } = i;
                let a;
                if (s && !pe(s))
                    for (const l in s) {
                        const u = s[l];
                        (u === Number || u && u.type === Number) && (l in this._props && (this._props[l] = Ea(this._props[l])), (a || (a = Object.create(null)))[bt(l)] = !0)
                    }
                this._numberProps = a, r && this._resolveProps(i), this._applyStyles(o), this._update()
            },
            t = this._def.__asyncLoader;
        t ? t().then(i => n(i, !0)) : n(this._def)
    }
    _resolveProps(n) {
        const {
            props: t
        } = n, i = pe(t) ? t : Object.keys(t || {});
        for (const r of Object.keys(this)) r[0] !== "_" && i.includes(r) && this._setProp(r, this[r], !0, !1);
        for (const r of i.map(bt)) Object.defineProperty(this, r, {
            get() {
                return this._getProp(r)
            },
            set(s) {
                this._setProp(r, s)
            }
        })
    }
    _setAttr(n) {
        let t = this.hasAttribute(n) ? this.getAttribute(n) : void 0;
        const i = bt(n);
        this._numberProps && this._numberProps[i] && (t = Ea(t)), this._setProp(i, t, !1)
    }
    _getProp(n) {
        return this._props[n]
    }
    _setProp(n, t, i = !0, r = !0) {
        t !== this._props[n] && (this._props[n] = t, r && this._instance && this._update(), i && (t === !0 ? this.setAttribute(bn(n), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(bn(n), t + "") : t || this.removeAttribute(bn(n))))
    }
    _update() {
        Ra(this._createVNode(), this.shadowRoot)
    }
    _createVNode() {
        const n = ot(this._def, it({}, this._props));
        return this._instance || (n.ce = t => {
            this._instance = t, t.isCE = !0;
            const i = (s, o) => {
                this.dispatchEvent(new CustomEvent(s, {
                    detail: o
                }))
            };
            t.emit = (s, ...o) => {
                i(s, o), bn(s) !== s && i(bn(s), o)
            };
            let r = this;
            for (; r = r && (r.parentNode || r.host);)
                if (r instanceof yo) {
                    t.parent = r._instance, t.provides = r._instance.provides;
                    break
                }
        }), n
    }
    _applyStyles(n) {
        n && n.forEach(t => {
            const i = document.createElement("style");
            i.textContent = t, this.shadowRoot.appendChild(i)
        })
    }
}

function hg(e = "$style") {
    {
        const n = Tn();
        if (!n) return nt;
        const t = n.type.__cssModules;
        if (!t) return nt;
        const i = t[e];
        return i || nt
    }
}
const pg = new WeakMap,
    mg = new WeakMap,
    Pa = Symbol("_moveCb"),
    yd = Symbol("_enterCb"),
    gg = {
        name: "TransitionGroup",
        props: it({}, x0, {
            tag: String,
            moveClass: String
        }),
        setup(e, {
            slots: n
        }) {
            const t = Tn(),
                i = fl();
            let r, s;
            return fo(() => {
                if (!r.length) return;
                const o = e.moveClass || `${e.name||"v"}-move`;
                if (!X0(r[0].el, t.vnode.el, o)) return;
                r.forEach(z0), r.forEach(G0);
                const a = r.filter(Z0);
                lg(), a.forEach(l => {
                    const u = l.el,
                        c = u.style;
                    pi(u, o), c.transform = c.webkitTransform = c.transitionDuration = "";
                    const f = u[Pa] = d => {
                        d && d.target !== u || (!d || /transform$/.test(d.propertyName)) && (u.removeEventListener("transitionend", f), u[Pa] = null, Li(u, o))
                    };
                    u.addEventListener("transitionend", f)
                })
            }), () => {
                const o = Ge(e),
                    a = og(o);
                let l = o.tag || et;
                if (r = [], s)
                    for (let u = 0; u < s.length; u++) {
                        const c = s[u];
                        c.el && c.el instanceof Element && (r.push(c), Ai(c, Or(c, a, i, t)), pg.set(c, c.el.getBoundingClientRect()))
                    }
                s = n.default ? uo(n.default()) : [];
                for (let u = 0; u < s.length; u++) {
                    const c = s[u];
                    c.key != null && Ai(c, Or(c, a, i, t))
                }
                return ot(l, null, s)
            }
        }
    },
    K0 = e => delete e.mode;
gg.props;
const zc = gg;

function z0(e) {
    const n = e.el;
    n[Pa] && n[Pa](), n[yd] && n[yd]()
}

function G0(e) {
    mg.set(e, e.el.getBoundingClientRect())
}

function Z0(e) {
    const n = pg.get(e),
        t = mg.get(e),
        i = n.left - t.left,
        r = n.top - t.top;
    if (i || r) {
        const s = e.el.style;
        return s.transform = s.webkitTransform = `translate(${i}px,${r}px)`, s.transitionDuration = "0s", e
    }
}

function X0(e, n, t) {
    const i = e.cloneNode(),
        r = e[es];
    r && r.forEach(a => {
        a.split(/\s+/).forEach(l => l && i.classList.remove(l))
    }), t.split(/\s+/).forEach(a => a && i.classList.add(a)), i.style.display = "none";
    const s = n.nodeType === 1 ? n : n.parentNode;
    s.appendChild(i);
    const {
        hasTransform: o
    } = ag(i);
    return s.removeChild(i), o
}
const nr = e => {
    const n = e.props["onUpdate:modelValue"] || !1;
    return pe(n) ? t => zr(n, t) : n
};

function J0(e) {
    e.target.composing = !0
}

function bd(e) {
    const n = e.target;
    n.composing && (n.composing = !1, n.dispatchEvent(new Event("input")))
}
const Wn = Symbol("_assign"),
    Qs = {
        created(e, {
            modifiers: {
                lazy: n,
                trim: t,
                number: i
            }
        }, r) {
            e[Wn] = nr(r);
            const s = i || r.props && r.props.type === "number";
            Ei(e, n ? "change" : "input", o => {
                if (o.target.composing) return;
                let a = e.value;
                t && (a = a.trim()), s && (a = ba(a)), e[Wn](a)
            }), t && Ei(e, "change", () => {
                e.value = e.value.trim()
            }), n || (Ei(e, "compositionstart", J0), Ei(e, "compositionend", bd), Ei(e, "change", bd))
        },
        mounted(e, {
            value: n
        }) {
            e.value = n ?? ""
        },
        beforeUpdate(e, {
            value: n,
            oldValue: t,
            modifiers: {
                lazy: i,
                trim: r,
                number: s
            }
        }, o) {
            if (e[Wn] = nr(o), e.composing) return;
            const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? ba(e.value) : e.value,
                l = n ?? "";
            a !== l && (document.activeElement === e && e.type !== "range" && (i && n === t || r && e.value.trim() === l) || (e.value = l))
        }
    },
    ml = {
        deep: !0,
        created(e, n, t) {
            e[Wn] = nr(t), Ei(e, "change", () => {
                const i = e._modelValue,
                    r = ts(e),
                    s = e.checked,
                    o = e[Wn];
                if (pe(i)) {
                    const a = nl(i, r),
                        l = a !== -1;
                    if (s && !l) o(i.concat(r));
                    else if (!s && l) {
                        const u = [...i];
                        u.splice(a, 1), o(u)
                    }
                } else if (Rr(i)) {
                    const a = new Set(i);
                    s ? a.add(r) : a.delete(r), o(a)
                } else o(vg(e, s))
            })
        },
        mounted: Ed,
        beforeUpdate(e, n, t) {
            e[Wn] = nr(t), Ed(e, n, t)
        }
    };

function Ed(e, {
    value: n,
    oldValue: t
}, i) {
    e._modelValue = n, pe(n) ? e.checked = nl(n, i.props.value) > -1 : Rr(n) ? e.checked = n.has(i.props.value) : n !== t && (e.checked = Qi(n, vg(e, !0)))
}
const gl = {
        created(e, {
            value: n
        }, t) {
            e.checked = Qi(n, t.props.value), e[Wn] = nr(t), Ei(e, "change", () => {
                e[Wn](ts(e))
            })
        },
        beforeUpdate(e, {
            value: n,
            oldValue: t
        }, i) {
            e[Wn] = nr(i), n !== t && (e.checked = Qi(n, i.props.value))
        }
    },
    Gc = {
        deep: !0,
        created(e, {
            value: n,
            modifiers: {
                number: t
            }
        }, i) {
            const r = Rr(n);
            Ei(e, "change", () => {
                const s = Array.prototype.filter.call(e.options, o => o.selected).map(o => t ? ba(ts(o)) : ts(o));
                e[Wn](e.multiple ? r ? new Set(s) : s : s[0]), e._assigning = !0, cn(() => {
                    e._assigning = !1
                })
            }), e[Wn] = nr(i)
        },
        mounted(e, {
            value: n,
            modifiers: {
                number: t
            }
        }) {
            Sd(e, n)
        },
        beforeUpdate(e, n, t) {
            e[Wn] = nr(t)
        },
        updated(e, {
            value: n,
            modifiers: {
                number: t
            }
        }) {
            e._assigning || Sd(e, n)
        }
    };

function Sd(e, n, t) {
    const i = e.multiple,
        r = pe(n);
    if (!(i && !r && !Rr(n))) {
        for (let s = 0, o = e.options.length; s < o; s++) {
            const a = e.options[s],
                l = ts(a);
            if (i)
                if (r) {
                    const u = typeof l;
                    u === "string" || u === "number" ? a.selected = n.some(c => String(c) === String(l)) : a.selected = nl(n, l) > -1
                } else a.selected = n.has(l);
            else if (Qi(ts(a), n)) {
                e.selectedIndex !== s && (e.selectedIndex = s);
                return
            }
        }!i && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}

function ts(e) {
    return "_value" in e ? e._value : e.value
}

function vg(e, n) {
    const t = n ? "_trueValue" : "_falseValue";
    return t in e ? e[t] : n
}
const Zc = {
    created(e, n, t) {
        jo(e, n, t, null, "created")
    },
    mounted(e, n, t) {
        jo(e, n, t, null, "mounted")
    },
    beforeUpdate(e, n, t, i) {
        jo(e, n, t, i, "beforeUpdate")
    },
    updated(e, n, t, i) {
        jo(e, n, t, i, "updated")
    }
};

function yg(e, n) {
    switch (e) {
        case "SELECT":
            return Gc;
        case "TEXTAREA":
            return Qs;
        default:
            switch (n) {
                case "checkbox":
                    return ml;
                case "radio":
                    return gl;
                default:
                    return Qs
            }
    }
}

function jo(e, n, t, i, r) {
    const o = yg(e.tagName, t.props && t.props.type)[r];
    o && o(e, n, t, i)
}

function Q0() {
    Qs.getSSRProps = ({
        value: e
    }) => ({
        value: e
    }), gl.getSSRProps = ({
        value: e
    }, n) => {
        if (n.props && Qi(n.props.value, e)) return {
            checked: !0
        }
    }, ml.getSSRProps = ({
        value: e
    }, n) => {
        if (pe(e)) {
            if (n.props && nl(e, n.props.value) > -1) return {
                checked: !0
            }
        } else if (Rr(e)) {
            if (n.props && e.has(n.props.value)) return {
                checked: !0
            }
        } else if (e) return {
            checked: !0
        }
    }, Zc.getSSRProps = (e, n) => {
        if (typeof n.type != "string") return;
        const t = yg(n.type.toUpperCase(), n.props && n.props.type);
        if (t.getSSRProps) return t.getSSRProps(e, n)
    }
}
const q0 = ["ctrl", "shift", "alt", "meta"],
    eE = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, n) => q0.some(t => e[`${t}Key`] && !n.includes(t))
    },
    Vi = (e, n) => {
        const t = e._withMods || (e._withMods = {}),
            i = n.join(".");
        return t[i] || (t[i] = (r, ...s) => {
            for (let o = 0; o < n.length; o++) {
                const a = eE[n[o]];
                if (a && a(r, n)) return
            }
            return e(r, ...s)
        })
    },
    tE = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    Na = (e, n) => {
        const t = e._withKeys || (e._withKeys = {}),
            i = n.join(".");
        return t[i] || (t[i] = r => {
            if (!("key" in r)) return;
            const s = bn(r.key);
            if (n.some(o => o === s || tE[o] === s)) return e(r)
        })
    },
    bg = it({
        patchProp: U0
    }, O0);
let Fs, wd = !1;

function Eg() {
    return Fs || (Fs = Pc(bg))
}

function Sg() {
    return Fs = wd ? Fs : Nc(bg), wd = !0, Fs
}
const Ra = (...e) => {
        Eg().render(...e)
    },
    Xc = (...e) => {
        Sg().hydrate(...e)
    },
    Jc = (...e) => {
        const n = Eg().createApp(...e),
            {
                mount: t
            } = n;
        return n.mount = i => {
            const r = Tg(i);
            if (!r) return;
            const s = n._component;
            !xe(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
            const o = t(r, !1, Dg(r));
            return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o
        }, n
    },
    wg = (...e) => {
        const n = Sg().createApp(...e),
            {
                mount: t
            } = n;
        return n.mount = i => {
            const r = Tg(i);
            if (r) return t(r, !0, Dg(r))
        }, n
    };

function Dg(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function Tg(e) {
    return ke(e) ? document.querySelector(e) : e
}
let Dd = !1;
const Cg = () => {
        Dd || (Dd = !0, Q0(), P0())
    },
    nE = Object.freeze(Object.defineProperty({
        __proto__: null,
        BaseTransition: yc,
        BaseTransitionPropsValidators: dl,
        Comment: Bt,
        DeprecationTypes: rg,
        EffectScope: il,
        ErrorCodes: Fp,
        ErrorTypeStrings: Qm,
        Fragment: et,
        KeepAlive: zp,
        ReactiveEffect: Cr,
        Static: Xi,
        Suspense: Fm,
        Teleport: Om,
        Text: Di,
        TrackOpTypes: Np,
        Transition: tr,
        TransitionGroup: zc,
        TriggerOpTypes: Rp,
        VueElement: yo,
        assertNumber: _p,
        callWithAsyncErrorHandling: wn,
        callWithErrorHandling: ci,
        camelize: bt,
        capitalize: ir,
        cloneVNode: ri,
        compatUtils: ig,
        computed: Xe,
        createApp: Jc,
        createBlock: Rn,
        createCommentVNode: je,
        createElementBlock: ge,
        createElementVNode: yt,
        createHydrationRenderer: Nc,
        createPropsRestProxy: fm,
        createRenderer: Pc,
        createSSRApp: wg,
        createSlots: Gs,
        createStaticVNode: Bm,
        createTextVNode: Xt,
        createVNode: ot,
        customRef: gc,
        defineAsyncComponent: Kp,
        defineComponent: _r,
        defineCustomElement: Kc,
        defineEmits: em,
        defineExpose: tm,
        defineModel: rm,
        defineOptions: nm,
        defineProps: qp,
        defineSSRCustomElement: dg,
        defineSlots: im,
        devtools: qm,
        effect: dp,
        effectScope: lp,
        getCurrentInstance: Tn,
        getCurrentScope: ac,
        getTransitionRawChildren: uo,
        guardReactiveProps: Vc,
        h: er,
        handleError: or,
        hasInjectionContext: mm,
        hydrate: Xc,
        initCustomFormatter: Zm,
        initDirectivesForSSR: Cg,
        inject: Zi,
        isMemoSame: Uc,
        isProxy: al,
        isReactive: Gi,
        isReadonly: xi,
        isRef: _t,
        isRuntimeOnly: Km,
        isShallow: qi,
        isVNode: Mi,
        markRaw: dc,
        mergeDefaults: um,
        mergeModels: cm,
        mergeProps: Js,
        nextTick: cn,
        normalizeClass: Rt,
        normalizeProps: Sa,
        normalizeStyle: Kt,
        onActivated: bc,
        onBeforeMount: Sc,
        onBeforeUnmount: us,
        onBeforeUpdate: wc,
        onDeactivated: Ec,
        onErrorCaptured: Oc,
        onMounted: ar,
        onRenderTracked: Cc,
        onRenderTriggered: Tc,
        onScopeDispose: cp,
        onServerPrefetch: Dc,
        onUnmounted: ho,
        onUpdated: fo,
        openBlock: ae,
        popScopeId: Hp,
        provide: po,
        proxyRefs: ll,
        pushScopeId: Vp,
        queuePostFlushCb: Ys,
        reactive: Oi,
        readonly: lo,
        ref: Jt,
        registerRuntimeCompiler: Bc,
        render: Ra,
        renderList: fn,
        renderSlot: Qe,
        resolveComponent: ui,
        resolveDirective: Xp,
        resolveDynamicComponent: cs,
        resolveFilter: ng,
        resolveTransitionHooks: Or,
        setBlockTracking: xa,
        setDevtoolsHook: eg,
        setTransitionHooks: Ai,
        shallowReactive: fc,
        shallowReadonly: Op,
        shallowRef: mc,
        ssrContextKey: _c,
        ssrUtils: tg,
        stop: hp,
        toDisplayString: vt,
        toHandlerKey: br,
        toHandlers: Qp,
        toRaw: Ge,
        toRef: bi,
        toRefs: Ip,
        toValue: We,
        transformVNodeArgs: Vm,
        triggerRef: Mp,
        unref: ut,
        useAttrs: am,
        useCssModule: hg,
        useCssVars: fg,
        useModel: Nm,
        useSSRContext: Fc,
        useSlots: om,
        useTransitionState: fl,
        vModelCheckbox: ml,
        vModelDynamic: Zc,
        vModelRadio: gl,
        vModelSelect: Gc,
        vModelText: Qs,
        vShow: Yc,
        version: Wc,
        warn: Jm,
        watch: _n,
        watchEffect: Lc,
        watchPostEffect: kc,
        watchSyncEffect: $c,
        withAsyncContext: dm,
        withCtx: pt,
        withDefaults: sm,
        withDirectives: Up,
        withKeys: Na,
        withMemo: Xm,
        withModifiers: Vi,
        withScopeId: Bp
    }, Symbol.toStringTag, {
        value: "Module"
    }));
/**
 * @vue/compiler-core v3.4.32
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const qs = Symbol(""),
    Ls = Symbol(""),
    Qc = Symbol(""),
    _a = Symbol(""),
    Og = Symbol(""),
    Mr = Symbol(""),
    xg = Symbol(""),
    Ag = Symbol(""),
    qc = Symbol(""),
    ef = Symbol(""),
    bo = Symbol(""),
    tf = Symbol(""),
    Mg = Symbol(""),
    nf = Symbol(""),
    rf = Symbol(""),
    sf = Symbol(""),
    of = Symbol(""),
    af = Symbol(""),
    lf = Symbol(""),
    Ig = Symbol(""),
    Pg = Symbol(""),
    vl = Symbol(""),
    Fa = Symbol(""),
    uf = Symbol(""),
    cf = Symbol(""),
    eo = Symbol(""),
    Eo = Symbol(""),
    ff = Symbol(""),
    Pu = Symbol(""),
    iE = Symbol(""),
    Nu = Symbol(""),
    La = Symbol(""),
    rE = Symbol(""),
    sE = Symbol(""),
    df = Symbol(""),
    oE = Symbol(""),
    aE = Symbol(""),
    hf = Symbol(""),
    Ng = Symbol(""),
    ns = {
        [qs]: "Fragment",
        [Ls]: "Teleport",
        [Qc]: "Suspense",
        [_a]: "KeepAlive",
        [Og]: "BaseTransition",
        [Mr]: "openBlock",
        [xg]: "createBlock",
        [Ag]: "createElementBlock",
        [qc]: "createVNode",
        [ef]: "createElementVNode",
        [bo]: "createCommentVNode",
        [tf]: "createTextVNode",
        [Mg]: "createStaticVNode",
        [nf]: "resolveComponent",
        [rf]: "resolveDynamicComponent",
        [sf]: "resolveDirective",
        [of]: "resolveFilter",
        [af]: "withDirectives",
        [lf]: "renderList",
        [Ig]: "renderSlot",
        [Pg]: "createSlots",
        [vl]: "toDisplayString",
        [Fa]: "mergeProps",
        [uf]: "normalizeClass",
        [cf]: "normalizeStyle",
        [eo]: "normalizeProps",
        [Eo]: "guardReactiveProps",
        [ff]: "toHandlers",
        [Pu]: "camelize",
        [iE]: "capitalize",
        [Nu]: "toHandlerKey",
        [La]: "setBlockTracking",
        [rE]: "pushScopeId",
        [sE]: "popScopeId",
        [df]: "withCtx",
        [oE]: "unref",
        [aE]: "isRef",
        [hf]: "withMemo",
        [Ng]: "isMemoSame"
    };

function lE(e) {
    Object.getOwnPropertySymbols(e).forEach(n => {
        ns[n] = e[n]
    })
}
const kn = {
    start: {
        line: 1,
        column: 1,
        offset: 0
    },
    end: {
        line: 1,
        column: 1,
        offset: 0
    },
    source: ""
};

function uE(e, n = "") {
    return {
        type: 0,
        source: n,
        children: e,
        helpers: new Set,
        components: [],
        directives: [],
        hoists: [],
        imports: [],
        cached: 0,
        temps: 0,
        codegenNode: void 0,
        loc: kn
    }
}

function to(e, n, t, i, r, s, o, a = !1, l = !1, u = !1, c = kn) {
    return e && (a ? (e.helper(Mr), e.helper(ss(e.inSSR, u))) : e.helper(rs(e.inSSR, u)), o && e.helper(af)), {
        type: 13,
        tag: n,
        props: t,
        children: i,
        patchFlag: r,
        dynamicProps: s,
        directives: o,
        isBlock: a,
        disableTracking: l,
        isComponent: u,
        loc: c
    }
}

function So(e, n = kn) {
    return {
        type: 17,
        loc: n,
        elements: e
    }
}

function Bn(e, n = kn) {
    return {
        type: 15,
        loc: n,
        properties: e
    }
}

function Ft(e, n) {
    return {
        type: 16,
        loc: kn,
        key: ke(e) ? Ve(e, !0) : e,
        value: n
    }
}

function Ve(e, n = !1, t = kn, i = 0) {
    return {
        type: 4,
        loc: t,
        content: e,
        isStatic: n,
        constType: n ? 3 : i
    }
}

function ei(e, n = kn) {
    return {
        type: 8,
        loc: n,
        children: e
    }
}

function Ht(e, n = [], t = kn) {
    return {
        type: 14,
        loc: t,
        callee: e,
        arguments: n
    }
}

function is(e, n = void 0, t = !1, i = !1, r = kn) {
    return {
        type: 18,
        params: e,
        returns: n,
        newline: t,
        isSlot: i,
        loc: r
    }
}

function Ru(e, n, t, i = !0) {
    return {
        type: 19,
        test: e,
        consequent: n,
        alternate: t,
        newline: i,
        loc: kn
    }
}

function cE(e, n, t = !1) {
    return {
        type: 20,
        index: e,
        value: n,
        isVOnce: t,
        loc: kn
    }
}

function fE(e) {
    return {
        type: 21,
        body: e,
        loc: kn
    }
}

function rs(e, n) {
    return e || n ? qc : ef
}

function ss(e, n) {
    return e || n ? xg : Ag
}

function pf(e, {
    helper: n,
    removeHelper: t,
    inSSR: i
}) {
    e.isBlock || (e.isBlock = !0, t(rs(i, e.isComponent)), n(Mr), n(ss(i, e.isComponent)))
}
const Td = new Uint8Array([123, 123]),
    Cd = new Uint8Array([125, 125]);

function Od(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90
}

function Nn(e) {
    return e === 32 || e === 10 || e === 9 || e === 12 || e === 13
}

function _i(e) {
    return e === 47 || e === 62 || Nn(e)
}

function ka(e) {
    const n = new Uint8Array(e.length);
    for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
    return n
}
const Qt = {
    Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
    CdataEnd: new Uint8Array([93, 93, 62]),
    CommentEnd: new Uint8Array([45, 45, 62]),
    ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
    StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
    TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
    TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97])
};
class dE {
    constructor(n, t) {
        this.stack = n, this.cbs = t, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = Td, this.delimiterClose = Cd, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0
    }
    get inSFCRoot() {
        return this.mode === 2 && this.stack.length === 0
    }
    reset() {
        this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = Td, this.delimiterClose = Cd
    }
    getPos(n) {
        let t = 1,
            i = n + 1;
        for (let r = this.newlines.length - 1; r >= 0; r--) {
            const s = this.newlines[r];
            if (n > s) {
                t = r + 2, i = n - s;
                break
            }
        }
        return {
            column: i,
            line: t,
            offset: n
        }
    }
    peek() {
        return this.buffer.charCodeAt(this.index + 1)
    }
    stateText(n) {
        n === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : !this.inVPre && n === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(n))
    }
    stateInterpolationOpen(n) {
        if (n === this.delimiterOpen[this.delimiterIndex])
            if (this.delimiterIndex === this.delimiterOpen.length - 1) {
                const t = this.index + 1 - this.delimiterOpen.length;
                t > this.sectionStart && this.cbs.ontext(this.sectionStart, t), this.state = 3, this.sectionStart = t
            } else this.delimiterIndex++;
        else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(n)) : (this.state = 1, this.stateText(n))
    }
    stateInterpolation(n) {
        n === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(n))
    }
    stateInterpolationClose(n) {
        n === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(n))
    }
    stateSpecialStartSequence(n) {
        const t = this.sequenceIndex === this.currentSequence.length;
        if (!(t ? _i(n) : (n | 32) === this.currentSequence[this.sequenceIndex])) this.inRCDATA = !1;
        else if (!t) {
            this.sequenceIndex++;
            return
        }
        this.sequenceIndex = 0, this.state = 6, this.stateInTagName(n)
    }
    stateInRCDATA(n) {
        if (this.sequenceIndex === this.currentSequence.length) {
            if (n === 62 || Nn(n)) {
                const t = this.index - this.currentSequence.length;
                if (this.sectionStart < t) {
                    const i = this.index;
                    this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = i
                }
                this.sectionStart = t + 2, this.stateInClosingTagName(n), this.inRCDATA = !1;
                return
            }
            this.sequenceIndex = 0
        }(n | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Qt.TitleEnd || this.currentSequence === Qt.TextareaEnd && !this.inSFCRoot ? n === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(n)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(n === 60)
    }
    stateCDATASequence(n) {
        n === Qt.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Qt.Cdata.length && (this.state = 28, this.currentSequence = Qt.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(n))
    }
    fastForwardTo(n) {
        for (; ++this.index < this.buffer.length;) {
            const t = this.buffer.charCodeAt(this.index);
            if (t === 10 && this.newlines.push(this.index), t === n) return !0
        }
        return this.index = this.buffer.length - 1, !1
    }
    stateInCommentLike(n) {
        n === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Qt.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : n !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0)
    }
    startSpecial(n, t) {
        this.enterRCDATA(n, t), this.state = 31
    }
    enterRCDATA(n, t) {
        this.inRCDATA = !0, this.currentSequence = n, this.sequenceIndex = t
    }
    stateBeforeTagName(n) {
        n === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : n === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : Od(n) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : n === 116 ? this.state = 30 : this.state = n === 115 ? 29 : 6) : n === 47 ? this.state = 8 : (this.state = 1, this.stateText(n))
    }
    stateInTagName(n) {
        _i(n) && this.handleTagName(n)
    }
    stateInSFCRootTagName(n) {
        if (_i(n)) {
            const t = this.buffer.slice(this.sectionStart, this.index);
            t !== "template" && this.enterRCDATA(ka("</" + t), 0), this.handleTagName(n)
        }
    }
    handleTagName(n) {
        this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(n)
    }
    stateBeforeClosingTagName(n) {
        Nn(n) || (n === 62 ? (this.state = 1, this.sectionStart = this.index + 1) : (this.state = Od(n) ? 9 : 27, this.sectionStart = this.index))
    }
    stateInClosingTagName(n) {
        (n === 62 || Nn(n)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(n))
    }
    stateAfterClosingTagName(n) {
        n === 62 && (this.state = 1, this.sectionStart = this.index + 1)
    }
    stateBeforeAttrName(n) {
        n === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : n === 47 ? this.state = 7 : n === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : Nn(n) || this.handleAttrStart(n)
    }
    handleAttrStart(n) {
        n === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : n === 46 || n === 58 || n === 64 || n === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index)
    }
    stateInSelfClosingTag(n) {
        n === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : Nn(n) || (this.state = 11, this.stateBeforeAttrName(n))
    }
    stateInAttrName(n) {
        (n === 61 || _i(n)) && (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(n))
    }
    stateInDirName(n) {
        n === 61 || _i(n) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(n)) : n === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : n === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1)
    }
    stateInDirArg(n) {
        n === 61 || _i(n) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(n)) : n === 91 ? this.state = 15 : n === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1)
    }
    stateInDynamicDirArg(n) {
        n === 93 ? this.state = 14 : (n === 61 || _i(n)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(n))
    }
    stateInDirModifier(n) {
        n === 61 || _i(n) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(n)) : n === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1)
    }
    handleAttrNameEnd(n) {
        this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(n)
    }
    stateAfterAttrName(n) {
        n === 61 ? this.state = 18 : n === 47 || n === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(n)) : Nn(n) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(n))
    }
    stateBeforeAttrValue(n) {
        n === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : n === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : Nn(n) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(n))
    }
    handleInAttrValue(n, t) {
        (n === t || this.fastForwardTo(t)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === 34 ? 3 : 2, this.index + 1), this.state = 11)
    }
    stateInAttrValueDoubleQuotes(n) {
        this.handleInAttrValue(n, 34)
    }
    stateInAttrValueSingleQuotes(n) {
        this.handleInAttrValue(n, 39)
    }
    stateInAttrValueNoQuotes(n) {
        Nn(n) || n === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(n)) : (n === 39 || n === 60 || n === 61 || n === 96) && this.cbs.onerr(18, this.index)
    }
    stateBeforeDeclaration(n) {
        n === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = n === 45 ? 25 : 23
    }
    stateInDeclaration(n) {
        (n === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1)
    }
    stateInProcessingInstruction(n) {
        (n === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1)
    }
    stateBeforeComment(n) {
        n === 45 ? (this.state = 28, this.currentSequence = Qt.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23
    }
    stateInSpecialComment(n) {
        (n === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1)
    }
    stateBeforeSpecialS(n) {
        n === Qt.ScriptEnd[3] ? this.startSpecial(Qt.ScriptEnd, 4) : n === Qt.StyleEnd[3] ? this.startSpecial(Qt.StyleEnd, 4) : (this.state = 6, this.stateInTagName(n))
    }
    stateBeforeSpecialT(n) {
        n === Qt.TitleEnd[3] ? this.startSpecial(Qt.TitleEnd, 4) : n === Qt.TextareaEnd[3] ? this.startSpecial(Qt.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(n))
    }
    startEntity() {}
    stateInEntity() {}
    parse(n) {
        for (this.buffer = n; this.index < this.buffer.length;) {
            const t = this.buffer.charCodeAt(this.index);
            switch (t === 10 && this.newlines.push(this.index), this.state) {
                case 1: {
                    this.stateText(t);
                    break
                }
                case 2: {
                    this.stateInterpolationOpen(t);
                    break
                }
                case 3: {
                    this.stateInterpolation(t);
                    break
                }
                case 4: {
                    this.stateInterpolationClose(t);
                    break
                }
                case 31: {
                    this.stateSpecialStartSequence(t);
                    break
                }
                case 32: {
                    this.stateInRCDATA(t);
                    break
                }
                case 26: {
                    this.stateCDATASequence(t);
                    break
                }
                case 19: {
                    this.stateInAttrValueDoubleQuotes(t);
                    break
                }
                case 12: {
                    this.stateInAttrName(t);
                    break
                }
                case 13: {
                    this.stateInDirName(t);
                    break
                }
                case 14: {
                    this.stateInDirArg(t);
                    break
                }
                case 15: {
                    this.stateInDynamicDirArg(t);
                    break
                }
                case 16: {
                    this.stateInDirModifier(t);
                    break
                }
                case 28: {
                    this.stateInCommentLike(t);
                    break
                }
                case 27: {
                    this.stateInSpecialComment(t);
                    break
                }
                case 11: {
                    this.stateBeforeAttrName(t);
                    break
                }
                case 6: {
                    this.stateInTagName(t);
                    break
                }
                case 34: {
                    this.stateInSFCRootTagName(t);
                    break
                }
                case 9: {
                    this.stateInClosingTagName(t);
                    break
                }
                case 5: {
                    this.stateBeforeTagName(t);
                    break
                }
                case 17: {
                    this.stateAfterAttrName(t);
                    break
                }
                case 20: {
                    this.stateInAttrValueSingleQuotes(t);
                    break
                }
                case 18: {
                    this.stateBeforeAttrValue(t);
                    break
                }
                case 8: {
                    this.stateBeforeClosingTagName(t);
                    break
                }
                case 10: {
                    this.stateAfterClosingTagName(t);
                    break
                }
                case 29: {
                    this.stateBeforeSpecialS(t);
                    break
                }
                case 30: {
                    this.stateBeforeSpecialT(t);
                    break
                }
                case 21: {
                    this.stateInAttrValueNoQuotes(t);
                    break
                }
                case 7: {
                    this.stateInSelfClosingTag(t);
                    break
                }
                case 23: {
                    this.stateInDeclaration(t);
                    break
                }
                case 22: {
                    this.stateBeforeDeclaration(t);
                    break
                }
                case 25: {
                    this.stateBeforeComment(t);
                    break
                }
                case 24: {
                    this.stateInProcessingInstruction(t);
                    break
                }
                case 33: {
                    this.stateInEntity();
                    break
                }
            }
            this.index++
        }
        this.cleanup(), this.finish()
    }
    cleanup() {
        this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === 19 || this.state === 20 || this.state === 21) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index))
    }
    finish() {
        this.handleTrailingData(), this.cbs.onend()
    }
    handleTrailingData() {
        const n = this.buffer.length;
        this.sectionStart >= n || (this.state === 28 ? this.currentSequence === Qt.CdataEnd ? this.cbs.oncdata(this.sectionStart, n) : this.cbs.oncomment(this.sectionStart, n) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, n))
    }
    emitCodePoint(n, t) {}
}

function xd(e, {
    compatConfig: n
}) {
    const t = n && n[e];
    return e === "MODE" ? t || 3 : t
}

function Dr(e, n) {
    const t = xd("MODE", n),
        i = xd(e, n);
    return t === 3 ? i === !0 : i !== !1
}

function no(e, n, t, ...i) {
    return Dr(e, n)
}

function mf(e) {
    throw e
}

function Rg(e) {}

function Dt(e, n, t, i) {
    const r = `https://vuejs.org/error-reference/#compiler-${e}`,
        s = new SyntaxError(String(r));
    return s.code = e, s.loc = n, s
}
const Sn = e => e.type === 4 && e.isStatic;

function _g(e) {
    switch (e) {
        case "Teleport":
        case "teleport":
            return Ls;
        case "Suspense":
        case "suspense":
            return Qc;
        case "KeepAlive":
        case "keep-alive":
            return _a;
        case "BaseTransition":
        case "base-transition":
            return Og
    }
}
const hE = /^\d|[^\$\w\xA0-\uFFFF]/,
    gf = e => !hE.test(e),
    pE = /[A-Za-z_$\xA0-\uFFFF]/,
    mE = /[\.\?\w$\xA0-\uFFFF]/,
    gE = /\s+[.[]\s*|\s*[.[]\s+/g,
    vE = e => {
        e = e.trim().replace(gE, o => o.trim());
        let n = 0,
            t = [],
            i = 0,
            r = 0,
            s = null;
        for (let o = 0; o < e.length; o++) {
            const a = e.charAt(o);
            switch (n) {
                case 0:
                    if (a === "[") t.push(n), n = 1, i++;
                    else if (a === "(") t.push(n), n = 2, r++;
                    else if (!(o === 0 ? pE : mE).test(a)) return !1;
                    break;
                case 1:
                    a === "'" || a === '"' || a === "`" ? (t.push(n), n = 3, s = a) : a === "[" ? i++ : a === "]" && (--i || (n = t.pop()));
                    break;
                case 2:
                    if (a === "'" || a === '"' || a === "`") t.push(n), n = 3, s = a;
                    else if (a === "(") r++;
                    else if (a === ")") {
                        if (o === e.length - 1) return !1;
                        --r || (n = t.pop())
                    }
                    break;
                case 3:
                    a === s && (n = t.pop(), s = null);
                    break
            }
        }
        return !i && !r
    },
    Fg = vE;

function Jn(e, n, t = !1) {
    for (let i = 0; i < e.props.length; i++) {
        const r = e.props[i];
        if (r.type === 7 && (t || r.exp) && (ke(n) ? r.name === n : n.test(r.name))) return r
    }
}

function yl(e, n, t = !1, i = !1) {
    for (let r = 0; r < e.props.length; r++) {
        const s = e.props[r];
        if (s.type === 6) {
            if (t) continue;
            if (s.name === n && (s.value || i)) return s
        } else if (s.name === "bind" && (s.exp || i) && gr(s.arg, n)) return s
    }
}

function gr(e, n) {
    return !!(e && Sn(e) && e.content === n)
}

function yE(e) {
    return e.props.some(n => n.type === 7 && n.name === "bind" && (!n.arg || n.arg.type !== 4 || !n.arg.isStatic))
}

function Hl(e) {
    return e.type === 5 || e.type === 2
}

function bE(e) {
    return e.type === 7 && e.name === "slot"
}

function $a(e) {
    return e.type === 1 && e.tagType === 3
}

function ja(e) {
    return e.type === 1 && e.tagType === 2
}
const EE = new Set([eo, Eo]);

function Lg(e, n = []) {
    if (e && !ke(e) && e.type === 14) {
        const t = e.callee;
        if (!ke(t) && EE.has(t)) return Lg(e.arguments[0], n.concat(e))
    }
    return [e, n]
}

function Va(e, n, t) {
    let i, r = e.type === 13 ? e.props : e.arguments[2],
        s = [],
        o;
    if (r && !ke(r) && r.type === 14) {
        const a = Lg(r);
        r = a[0], s = a[1], o = s[s.length - 1]
    }
    if (r == null || ke(r)) i = Bn([n]);
    else if (r.type === 14) {
        const a = r.arguments[0];
        !ke(a) && a.type === 15 ? Ad(n, a) || a.properties.unshift(n) : r.callee === ff ? i = Ht(t.helper(Fa), [Bn([n]), r]) : r.arguments.unshift(Bn([n])), !i && (i = r)
    } else r.type === 15 ? (Ad(n, r) || r.properties.unshift(n), i = r) : (i = Ht(t.helper(Fa), [Bn([n]), r]), o && o.callee === Eo && (o = s[s.length - 2]));
    e.type === 13 ? o ? o.arguments[0] = i : e.props = i : o ? o.arguments[0] = i : e.arguments[2] = i
}

function Ad(e, n) {
    let t = !1;
    if (e.key.type === 4) {
        const i = e.key.content;
        t = n.properties.some(r => r.key.type === 4 && r.key.content === i)
    }
    return t
}

function io(e, n) {
    return `_${n}_${e.replace(/[^\w]/g,(t,i)=>t==="-"?"_":e.charCodeAt(i).toString())}`
}

function SE(e) {
    return e.type === 14 && e.callee === hf ? e.arguments[1].returns : e
}
const wE = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/,
    kg = {
        parseMode: "base",
        ns: 0,
        delimiters: ["{{", "}}"],
        getNamespace: () => 0,
        isVoidTag: ia,
        isPreTag: ia,
        isCustomElement: ia,
        onError: mf,
        onWarn: Rg,
        comments: !1,
        prefixIdentifiers: !1
    };
let st = kg,
    ro = null,
    Ti = "",
    en = null,
    Ze = null,
    mn = "",
    mi = -1,
    dr = -1,
    Ha = 0,
    Hi = !1,
    _u = null;
const St = [],
    Nt = new dE(St, {
        onerr: hi,
        ontext(e, n) {
            Vo(Zt(e, n), e, n)
        },
        ontextentity(e, n, t) {
            Vo(e, n, t)
        },
        oninterpolation(e, n) {
            if (Hi) return Vo(Zt(e, n), e, n);
            let t = e + Nt.delimiterOpen.length,
                i = n - Nt.delimiterClose.length;
            for (; Nn(Ti.charCodeAt(t));) t++;
            for (; Nn(Ti.charCodeAt(i - 1));) i--;
            let r = Zt(t, i);
            r.includes("&") && (r = st.decodeEntities(r, !1)), Fu({
                type: 5,
                content: la(r, !1, Vt(t, i)),
                loc: Vt(e, n)
            })
        },
        onopentagname(e, n) {
            const t = Zt(e, n);
            en = {
                type: 1,
                tag: t,
                ns: st.getNamespace(t, St[0], st.ns),
                tagType: 0,
                props: [],
                children: [],
                loc: Vt(e - 1, n),
                codegenNode: void 0
            }
        },
        onopentagend(e) {
            Id(e)
        },
        onclosetag(e, n) {
            const t = Zt(e, n);
            if (!st.isVoidTag(t)) {
                let i = !1;
                for (let r = 0; r < St.length; r++)
                    if (St[r].tag.toLowerCase() === t.toLowerCase()) {
                        i = !0, r > 0 && hi(24, St[0].loc.start.offset);
                        for (let o = 0; o <= r; o++) {
                            const a = St.shift();
                            aa(a, n, o < r)
                        }
                        break
                    } i || hi(23, $g(e, 60))
            }
        },
        onselfclosingtag(e) {
            const n = en.tag;
            en.isSelfClosing = !0, Id(e), St[0] && St[0].tag === n && aa(St.shift(), e)
        },
        onattribname(e, n) {
            Ze = {
                type: 6,
                name: Zt(e, n),
                nameLoc: Vt(e, n),
                value: void 0,
                loc: Vt(e)
            }
        },
        ondirname(e, n) {
            const t = Zt(e, n),
                i = t === "." || t === ":" ? "bind" : t === "@" ? "on" : t === "#" ? "slot" : t.slice(2);
            if (!Hi && i === "" && hi(26, e), Hi || i === "") Ze = {
                type: 6,
                name: t,
                nameLoc: Vt(e, n),
                value: void 0,
                loc: Vt(e)
            };
            else if (Ze = {
                    type: 7,
                    name: i,
                    rawName: t,
                    exp: void 0,
                    arg: void 0,
                    modifiers: t === "." ? ["prop"] : [],
                    loc: Vt(e)
                }, i === "pre") {
                Hi = Nt.inVPre = !0, _u = en;
                const r = en.props;
                for (let s = 0; s < r.length; s++) r[s].type === 7 && (r[s] = NE(r[s]))
            }
        },
        ondirarg(e, n) {
            if (e === n) return;
            const t = Zt(e, n);
            if (Hi) Ze.name += t, vr(Ze.nameLoc, n);
            else {
                const i = t[0] !== "[";
                Ze.arg = la(i ? t : t.slice(1, -1), i, Vt(e, n), i ? 3 : 0)
            }
        },
        ondirmodifier(e, n) {
            const t = Zt(e, n);
            if (Hi) Ze.name += "." + t, vr(Ze.nameLoc, n);
            else if (Ze.name === "slot") {
                const i = Ze.arg;
                i && (i.content += "." + t, vr(i.loc, n))
            } else Ze.modifiers.push(t)
        },
        onattribdata(e, n) {
            mn += Zt(e, n), mi < 0 && (mi = e), dr = n
        },
        onattribentity(e, n, t) {
            mn += e, mi < 0 && (mi = n), dr = t
        },
        onattribnameend(e) {
            const n = Ze.loc.start.offset,
                t = Zt(n, e);
            Ze.type === 7 && (Ze.rawName = t), en.props.some(i => (i.type === 7 ? i.rawName : i.name) === t) && hi(2, n)
        },
        onattribend(e, n) {
            if (en && Ze) {
                if (vr(Ze.loc, n), e !== 0)
                    if (mn.includes("&") && (mn = st.decodeEntities(mn, !0)), Ze.type === 6) Ze.name === "class" && (mn = Vg(mn).trim()), e === 1 && !mn && hi(13, n), Ze.value = {
                        type: 2,
                        content: mn,
                        loc: e === 1 ? Vt(mi, dr) : Vt(mi - 1, dr + 1)
                    }, Nt.inSFCRoot && en.tag === "template" && Ze.name === "lang" && mn && mn !== "html" && Nt.enterRCDATA(ka("</template"), 0);
                    else {
                        let t = 0;
                        Ze.exp = la(mn, !1, Vt(mi, dr), 0, t), Ze.name === "for" && (Ze.forParseResult = TE(Ze.exp));
                        let i = -1;
                        Ze.name === "bind" && (i = Ze.modifiers.indexOf("sync")) > -1 && no("COMPILER_V_BIND_SYNC", st, Ze.loc, Ze.rawName) && (Ze.name = "model", Ze.modifiers.splice(i, 1))
                    }(Ze.type !== 7 || Ze.name !== "pre") && en.props.push(Ze)
            }
            mn = "", mi = dr = -1
        },
        oncomment(e, n) {
            st.comments && Fu({
                type: 3,
                content: Zt(e, n),
                loc: Vt(e - 4, n + 3)
            })
        },
        onend() {
            const e = Ti.length;
            for (let n = 0; n < St.length; n++) aa(St[n], e - 1), hi(24, St[n].loc.start.offset)
        },
        oncdata(e, n) {
            St[0].ns !== 0 ? Vo(Zt(e, n), e, n) : hi(1, e - 9)
        },
        onprocessinginstruction(e) {
            (St[0] ? St[0].ns : st.ns) === 0 && hi(21, e - 1)
        }
    }),
    Md = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
    DE = /^\(|\)$/g;

function TE(e) {
    const n = e.loc,
        t = e.content,
        i = t.match(wE);
    if (!i) return;
    const [, r, s] = i, o = (f, d, h = !1) => {
        const p = n.start.offset + d,
            m = p + f.length;
        return la(f, !1, Vt(p, m), 0, h ? 1 : 0)
    }, a = {
        source: o(s.trim(), t.indexOf(s, r.length)),
        value: void 0,
        key: void 0,
        index: void 0,
        finalized: !1
    };
    let l = r.trim().replace(DE, "").trim();
    const u = r.indexOf(l),
        c = l.match(Md);
    if (c) {
        l = l.replace(Md, "").trim();
        const f = c[1].trim();
        let d;
        if (f && (d = t.indexOf(f, u + l.length), a.key = o(f, d, !0)), c[2]) {
            const h = c[2].trim();
            h && (a.index = o(h, t.indexOf(h, a.key ? d + f.length : u + l.length), !0))
        }
    }
    return l && (a.value = o(l, u, !0)), a
}

function Zt(e, n) {
    return Ti.slice(e, n)
}

function Id(e) {
    Nt.inSFCRoot && (en.innerLoc = Vt(e + 1, e + 1)), Fu(en);
    const {
        tag: n,
        ns: t
    } = en;
    t === 0 && st.isPreTag(n) && Ha++, st.isVoidTag(n) ? aa(en, e) : (St.unshift(en), (t === 1 || t === 2) && (Nt.inXML = !0)), en = null
}

function Vo(e, n, t) {
    {
        const s = St[0] && St[0].tag;
        s !== "script" && s !== "style" && e.includes("&") && (e = st.decodeEntities(e, !1))
    }
    const i = St[0] || ro,
        r = i.children[i.children.length - 1];
    r && r.type === 2 ? (r.content += e, vr(r.loc, t)) : i.children.push({
        type: 2,
        content: e,
        loc: Vt(n, t)
    })
}

function aa(e, n, t = !1) {
    t ? vr(e.loc, $g(n, 60)) : vr(e.loc, CE(n, 62) + 1), Nt.inSFCRoot && (e.children.length ? e.innerLoc.end = it({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = it({}, e.innerLoc.start), e.innerLoc.source = Zt(e.innerLoc.start.offset, e.innerLoc.end.offset));
    const {
        tag: i,
        ns: r
    } = e;
    Hi || (i === "slot" ? e.tagType = 2 : Pd(e) ? e.tagType = 3 : xE(e) && (e.tagType = 1)), Nt.inRCDATA || (e.children = jg(e.children, e.tag)), r === 0 && st.isPreTag(i) && Ha--, _u === e && (Hi = Nt.inVPre = !1, _u = null), Nt.inXML && (St[0] ? St[0].ns : st.ns) === 0 && (Nt.inXML = !1);
    {
        const s = e.props;
        if (!Nt.inSFCRoot && Dr("COMPILER_NATIVE_TEMPLATE", st) && e.tag === "template" && !Pd(e)) {
            const a = St[0] || ro,
                l = a.children.indexOf(e);
            a.children.splice(l, 1, ...e.children)
        }
        const o = s.find(a => a.type === 6 && a.name === "inline-template");
        o && no("COMPILER_INLINE_TEMPLATE", st, o.loc) && e.children.length && (o.value = {
            type: 2,
            content: Zt(e.children[0].loc.start.offset, e.children[e.children.length - 1].loc.end.offset),
            loc: o.loc
        })
    }
}

function CE(e, n) {
    let t = e;
    for (; Ti.charCodeAt(t) !== n && t < Ti.length - 1;) t++;
    return t
}

function $g(e, n) {
    let t = e;
    for (; Ti.charCodeAt(t) !== n && t >= 0;) t--;
    return t
}
const OE = new Set(["if", "else", "else-if", "for", "slot"]);

function Pd({
    tag: e,
    props: n
}) {
    if (e === "template") {
        for (let t = 0; t < n.length; t++)
            if (n[t].type === 7 && OE.has(n[t].name)) return !0
    }
    return !1
}

function xE({
    tag: e,
    props: n
}) {
    if (st.isCustomElement(e)) return !1;
    if (e === "component" || AE(e.charCodeAt(0)) || _g(e) || st.isBuiltInComponent && st.isBuiltInComponent(e) || st.isNativeTag && !st.isNativeTag(e)) return !0;
    for (let t = 0; t < n.length; t++) {
        const i = n[t];
        if (i.type === 6) {
            if (i.name === "is" && i.value) {
                if (i.value.content.startsWith("vue:")) return !0;
                if (no("COMPILER_IS_ON_ELEMENT", st, i.loc)) return !0
            }
        } else if (i.name === "bind" && gr(i.arg, "is") && no("COMPILER_IS_ON_ELEMENT", st, i.loc)) return !0
    }
    return !1
}

function AE(e) {
    return e > 64 && e < 91
}
const ME = /\r\n/g;

function jg(e, n) {
    const t = st.whitespace !== "preserve";
    let i = !1;
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        if (s.type === 2)
            if (Ha) s.content = s.content.replace(ME, `
`);
            else if (IE(s.content)) {
            const o = e[r - 1] && e[r - 1].type,
                a = e[r + 1] && e[r + 1].type;
            !o || !a || t && (o === 3 && (a === 3 || a === 1) || o === 1 && (a === 3 || a === 1 && PE(s.content))) ? (i = !0, e[r] = null) : s.content = " "
        } else t && (s.content = Vg(s.content))
    }
    if (Ha && n && st.isPreTag(n)) {
        const r = e[0];
        r && r.type === 2 && (r.content = r.content.replace(/^\r?\n/, ""))
    }
    return i ? e.filter(Boolean) : e
}

function IE(e) {
    for (let n = 0; n < e.length; n++)
        if (!Nn(e.charCodeAt(n))) return !1;
    return !0
}

function PE(e) {
    for (let n = 0; n < e.length; n++) {
        const t = e.charCodeAt(n);
        if (t === 10 || t === 13) return !0
    }
    return !1
}

function Vg(e) {
    let n = "",
        t = !1;
    for (let i = 0; i < e.length; i++) Nn(e.charCodeAt(i)) ? t || (n += " ", t = !0) : (n += e[i], t = !1);
    return n
}

function Fu(e) {
    (St[0] || ro).children.push(e)
}

function Vt(e, n) {
    return {
        start: Nt.getPos(e),
        end: n == null ? n : Nt.getPos(n),
        source: n == null ? n : Zt(e, n)
    }
}

function vr(e, n) {
    e.end = Nt.getPos(n), e.source = Zt(e.start.offset, n)
}

function NE(e) {
    const n = {
        type: 6,
        name: e.rawName,
        nameLoc: Vt(e.loc.start.offset, e.loc.start.offset + e.rawName.length),
        value: void 0,
        loc: e.loc
    };
    if (e.exp) {
        const t = e.exp.loc;
        t.end.offset < e.loc.end.offset && (t.start.offset--, t.start.column--, t.end.offset++, t.end.column++), n.value = {
            type: 2,
            content: e.exp.content,
            loc: t
        }
    }
    return n
}

function la(e, n = !1, t, i = 0, r = 0) {
    return Ve(e, n, t, i)
}

function hi(e, n, t) {
    st.onError(Dt(e, Vt(n, n)))
}

function RE() {
    Nt.reset(), en = null, Ze = null, mn = "", mi = -1, dr = -1, St.length = 0
}

function _E(e, n) {
    if (RE(), Ti = e, st = it({}, kg), n) {
        let r;
        for (r in n) n[r] != null && (st[r] = n[r])
    }
    Nt.mode = st.parseMode === "html" ? 1 : st.parseMode === "sfc" ? 2 : 0, Nt.inXML = st.ns === 1 || st.ns === 2;
    const t = n && n.delimiters;
    t && (Nt.delimiterOpen = ka(t[0]), Nt.delimiterClose = ka(t[1]));
    const i = ro = uE([], e);
    return Nt.parse(Ti), i.loc = Vt(0, e.length), i.children = jg(i.children), ro = null, i
}

function FE(e, n) {
    ua(e, n, Hg(e, e.children[0]))
}

function Hg(e, n) {
    const {
        children: t
    } = e;
    return t.length === 1 && n.type === 1 && !ja(n)
}

function ua(e, n, t = !1) {
    const {
        children: i
    } = e, r = i.length;
    let s = 0;
    for (let o = 0; o < i.length; o++) {
        const a = i[o];
        if (a.type === 1 && a.tagType === 0) {
            const l = t ? 0 : Un(a, n);
            if (l > 0) {
                if (l >= 2) {
                    a.codegenNode.patchFlag = -1, a.codegenNode = n.hoist(a.codegenNode), s++;
                    continue
                }
            } else {
                const u = a.codegenNode;
                if (u.type === 13) {
                    const c = u.patchFlag;
                    if ((c === void 0 || c === 512 || c === 1) && Ug(a, n) >= 2) {
                        const f = Wg(a);
                        f && (u.props = n.hoist(f))
                    }
                    u.dynamicProps && (u.dynamicProps = n.hoist(u.dynamicProps))
                }
            }
        }
        if (a.type === 1) {
            const l = a.tagType === 1;
            l && n.scopes.vSlot++, ua(a, n), l && n.scopes.vSlot--
        } else if (a.type === 11) ua(a, n, a.children.length === 1);
        else if (a.type === 9)
            for (let l = 0; l < a.branches.length; l++) ua(a.branches[l], n, a.branches[l].children.length === 1)
    }
    if (s && n.transformHoist && n.transformHoist(i, n, e), s && s === r && e.type === 1 && e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && pe(e.codegenNode.children)) {
        const o = n.hoist(So(e.codegenNode.children));
        n.hmr && (o.content = `[...${o.content}]`), e.codegenNode.children = o
    }
}

function Un(e, n) {
    const {
        constantCache: t
    } = n;
    switch (e.type) {
        case 1:
            if (e.tagType !== 0) return 0;
            const i = t.get(e);
            if (i !== void 0) return i;
            const r = e.codegenNode;
            if (r.type !== 13 || r.isBlock && e.tag !== "svg" && e.tag !== "foreignObject" && e.tag !== "math") return 0;
            if (r.patchFlag === void 0) {
                let o = 3;
                const a = Ug(e, n);
                if (a === 0) return t.set(e, 0), 0;
                a < o && (o = a);
                for (let l = 0; l < e.children.length; l++) {
                    const u = Un(e.children[l], n);
                    if (u === 0) return t.set(e, 0), 0;
                    u < o && (o = u)
                }
                if (o > 1)
                    for (let l = 0; l < e.props.length; l++) {
                        const u = e.props[l];
                        if (u.type === 7 && u.name === "bind" && u.exp) {
                            const c = Un(u.exp, n);
                            if (c === 0) return t.set(e, 0), 0;
                            c < o && (o = c)
                        }
                    }
                if (r.isBlock) {
                    for (let l = 0; l < e.props.length; l++)
                        if (e.props[l].type === 7) return t.set(e, 0), 0;
                    n.removeHelper(Mr), n.removeHelper(ss(n.inSSR, r.isComponent)), r.isBlock = !1, n.helper(rs(n.inSSR, r.isComponent))
                }
                return t.set(e, o), o
            } else return t.set(e, 0), 0;
        case 2:
        case 3:
            return 3;
        case 9:
        case 11:
        case 10:
            return 0;
        case 5:
        case 12:
            return Un(e.content, n);
        case 4:
            return e.constType;
        case 8:
            let s = 3;
            for (let o = 0; o < e.children.length; o++) {
                const a = e.children[o];
                if (ke(a) || Fn(a)) continue;
                const l = Un(a, n);
                if (l === 0) return 0;
                l < s && (s = l)
            }
            return s;
        default:
            return 0
    }
}
const LE = new Set([uf, cf, eo, Eo]);

function Bg(e, n) {
    if (e.type === 14 && !ke(e.callee) && LE.has(e.callee)) {
        const t = e.arguments[0];
        if (t.type === 4) return Un(t, n);
        if (t.type === 14) return Bg(t, n)
    }
    return 0
}

function Ug(e, n) {
    let t = 3;
    const i = Wg(e);
    if (i && i.type === 15) {
        const {
            properties: r
        } = i;
        for (let s = 0; s < r.length; s++) {
            const {
                key: o,
                value: a
            } = r[s], l = Un(o, n);
            if (l === 0) return l;
            l < t && (t = l);
            let u;
            if (a.type === 4 ? u = Un(a, n) : a.type === 14 ? u = Bg(a, n) : u = 0, u === 0) return u;
            u < t && (t = u)
        }
    }
    return t
}

function Wg(e) {
    const n = e.codegenNode;
    if (n.type === 13) return n.props
}

function kE(e, {
    filename: n = "",
    prefixIdentifiers: t = !1,
    hoistStatic: i = !1,
    hmr: r = !1,
    cacheHandlers: s = !1,
    nodeTransforms: o = [],
    directiveTransforms: a = {},
    transformHoist: l = null,
    isBuiltInComponent: u = $t,
    isCustomElement: c = $t,
    expressionPlugins: f = [],
    scopeId: d = null,
    slotted: h = !0,
    ssr: p = !1,
    inSSR: m = !1,
    ssrCssVars: y = "",
    bindingMetadata: D = nt,
    inline: S = !1,
    isTS: b = !1,
    onError: w = mf,
    onWarn: x = Rg,
    compatConfig: O
}) {
    const F = n.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/),
        L = {
            filename: n,
            selfName: F && ir(bt(F[1])),
            prefixIdentifiers: t,
            hoistStatic: i,
            hmr: r,
            cacheHandlers: s,
            nodeTransforms: o,
            directiveTransforms: a,
            transformHoist: l,
            isBuiltInComponent: u,
            isCustomElement: c,
            expressionPlugins: f,
            scopeId: d,
            slotted: h,
            ssr: p,
            inSSR: m,
            ssrCssVars: y,
            bindingMetadata: D,
            inline: S,
            isTS: b,
            onError: w,
            onWarn: x,
            compatConfig: O,
            root: e,
            helpers: new Map,
            components: new Set,
            directives: new Set,
            hoists: [],
            imports: [],
            constantCache: new WeakMap,
            temps: 0,
            cached: 0,
            identifiers: Object.create(null),
            scopes: {
                vFor: 0,
                vSlot: 0,
                vPre: 0,
                vOnce: 0
            },
            parent: null,
            grandParent: null,
            currentNode: e,
            childIndex: 0,
            inVOnce: !1,
            helper(C) {
                const I = L.helpers.get(C) || 0;
                return L.helpers.set(C, I + 1), C
            },
            removeHelper(C) {
                const I = L.helpers.get(C);
                if (I) {
                    const j = I - 1;
                    j ? L.helpers.set(C, j) : L.helpers.delete(C)
                }
            },
            helperString(C) {
                return `_${ns[L.helper(C)]}`
            },
            replaceNode(C) {
                L.parent.children[L.childIndex] = L.currentNode = C
            },
            removeNode(C) {
                const I = L.parent.children,
                    j = C ? I.indexOf(C) : L.currentNode ? L.childIndex : -1;
                !C || C === L.currentNode ? (L.currentNode = null, L.onNodeRemoved()) : L.childIndex > j && (L.childIndex--, L.onNodeRemoved()), L.parent.children.splice(j, 1)
            },
            onNodeRemoved: $t,
            addIdentifiers(C) {},
            removeIdentifiers(C) {},
            hoist(C) {
                ke(C) && (C = Ve(C)), L.hoists.push(C);
                const I = Ve(`_hoisted_${L.hoists.length}`, !1, C.loc, 2);
                return I.hoisted = C, I
            },
            cache(C, I = !1) {
                return cE(L.cached++, C, I)
            }
        };
    return L.filters = new Set, L
}

function $E(e, n) {
    const t = kE(e, n);
    bl(e, t), n.hoistStatic && FE(e, t), n.ssr || jE(e, t), e.helpers = new Set([...t.helpers.keys()]), e.components = [...t.components], e.directives = [...t.directives], e.imports = t.imports, e.hoists = t.hoists, e.temps = t.temps, e.cached = t.cached, e.transformed = !0, e.filters = [...t.filters]
}

function jE(e, n) {
    const {
        helper: t
    } = n, {
        children: i
    } = e;
    if (i.length === 1) {
        const r = i[0];
        if (Hg(e, r) && r.codegenNode) {
            const s = r.codegenNode;
            s.type === 13 && pf(s, n), e.codegenNode = s
        } else e.codegenNode = r
    } else if (i.length > 1) {
        let r = 64;
        e.codegenNode = to(n, t(qs), void 0, e.children, r, void 0, void 0, !0, void 0, !1)
    }
}

function VE(e, n) {
    let t = 0;
    const i = () => {
        t--
    };
    for (; t < e.children.length; t++) {
        const r = e.children[t];
        ke(r) || (n.grandParent = n.parent, n.parent = e, n.childIndex = t, n.onNodeRemoved = i, bl(r, n))
    }
}

function bl(e, n) {
    n.currentNode = e;
    const {
        nodeTransforms: t
    } = n, i = [];
    for (let s = 0; s < t.length; s++) {
        const o = t[s](e, n);
        if (o && (pe(o) ? i.push(...o) : i.push(o)), n.currentNode) e = n.currentNode;
        else return
    }
    switch (e.type) {
        case 3:
            n.ssr || n.helper(bo);
            break;
        case 5:
            n.ssr || n.helper(vl);
            break;
        case 9:
            for (let s = 0; s < e.branches.length; s++) bl(e.branches[s], n);
            break;
        case 10:
        case 11:
        case 1:
        case 0:
            VE(e, n);
            break
    }
    n.currentNode = e;
    let r = i.length;
    for (; r--;) i[r]()
}

function Yg(e, n) {
    const t = ke(e) ? i => i === e : i => e.test(i);
    return (i, r) => {
        if (i.type === 1) {
            const {
                props: s
            } = i;
            if (i.tagType === 3 && s.some(bE)) return;
            const o = [];
            for (let a = 0; a < s.length; a++) {
                const l = s[a];
                if (l.type === 7 && t(l.name)) {
                    s.splice(a, 1), a--;
                    const u = n(i, l, r);
                    u && o.push(u)
                }
            }
            return o
        }
    }
}
const El = "/*#__PURE__*/",
    Kg = e => `${ns[e]}: _${ns[e]}`;

function HE(e, {
    mode: n = "function",
    prefixIdentifiers: t = n === "module",
    sourceMap: i = !1,
    filename: r = "template.vue.html",
    scopeId: s = null,
    optimizeImports: o = !1,
    runtimeGlobalName: a = "Vue",
    runtimeModuleName: l = "vue",
    ssrRuntimeModuleName: u = "vue/server-renderer",
    ssr: c = !1,
    isTS: f = !1,
    inSSR: d = !1
}) {
    const h = {
        mode: n,
        prefixIdentifiers: t,
        sourceMap: i,
        filename: r,
        scopeId: s,
        optimizeImports: o,
        runtimeGlobalName: a,
        runtimeModuleName: l,
        ssrRuntimeModuleName: u,
        ssr: c,
        isTS: f,
        inSSR: d,
        source: e.source,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        indentLevel: 0,
        pure: !1,
        map: void 0,
        helper(m) {
            return `_${ns[m]}`
        },
        push(m, y = -2, D) {
            h.code += m
        },
        indent() {
            p(++h.indentLevel)
        },
        deindent(m = !1) {
            m ? --h.indentLevel : p(--h.indentLevel)
        },
        newline() {
            p(h.indentLevel)
        }
    };

    function p(m) {
        h.push(`
` + "  ".repeat(m), 0)
    }
    return h
}

function BE(e, n = {}) {
    const t = HE(e, n);
    n.onContextCreated && n.onContextCreated(t);
    const {
        mode: i,
        push: r,
        prefixIdentifiers: s,
        indent: o,
        deindent: a,
        newline: l,
        scopeId: u,
        ssr: c
    } = t, f = Array.from(e.helpers), d = f.length > 0, h = !s && i !== "module";
    UE(e, t);
    const m = c ? "ssrRender" : "render",
        D = (c ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
    if (r(`function ${m}(${D}) {`), o(), h && (r("with (_ctx) {"), o(), d && (r(`const { ${f.map(Kg).join(", ")} } = _Vue
`, -1), l())), e.components.length && (Bl(e.components, "component", t), (e.directives.length || e.temps > 0) && l()), e.directives.length && (Bl(e.directives, "directive", t), e.temps > 0 && l()), e.filters && e.filters.length && (l(), Bl(e.filters, "filter", t), l()), e.temps > 0) {
        r("let ");
        for (let S = 0; S < e.temps; S++) r(`${S>0?", ":""}_temp${S}`)
    }
    return (e.components.length || e.directives.length || e.temps) && (r(`
`, 0), l()), c || r("return "), e.codegenNode ? on(e.codegenNode, t) : r("null"), h && (a(), r("}")), a(), r("}"), {
        ast: e,
        code: t.code,
        preamble: "",
        map: t.map ? t.map.toJSON() : void 0
    }
}

function UE(e, n) {
    const {
        ssr: t,
        prefixIdentifiers: i,
        push: r,
        newline: s,
        runtimeModuleName: o,
        runtimeGlobalName: a,
        ssrRuntimeModuleName: l
    } = n, u = a, c = Array.from(e.helpers);
    if (c.length > 0 && (r(`const _Vue = ${u}
`, -1), e.hoists.length)) {
        const f = [qc, ef, bo, tf, Mg].filter(d => c.includes(d)).map(Kg).join(", ");
        r(`const { ${f} } = _Vue
`, -1)
    }
    WE(e.hoists, n), s(), r("return ")
}

function Bl(e, n, {
    helper: t,
    push: i,
    newline: r,
    isTS: s
}) {
    const o = t(n === "filter" ? of : n === "component" ? nf : sf);
    for (let a = 0; a < e.length; a++) {
        let l = e[a];
        const u = l.endsWith("__self");
        u && (l = l.slice(0, -6)), i(`const ${io(l,n)} = ${o}(${JSON.stringify(l)}${u?", true":""})${s?"!":""}`), a < e.length - 1 && r()
    }
}

function WE(e, n) {
    if (!e.length) return;
    n.pure = !0;
    const {
        push: t,
        newline: i,
        helper: r,
        scopeId: s,
        mode: o
    } = n;
    i();
    for (let a = 0; a < e.length; a++) {
        const l = e[a];
        l && (t(`const _hoisted_${a+1} = `), on(l, n), i())
    }
    n.pure = !1
}

function vf(e, n) {
    const t = e.length > 3 || !1;
    n.push("["), t && n.indent(), wo(e, n, t), t && n.deindent(), n.push("]")
}

function wo(e, n, t = !1, i = !0) {
    const {
        push: r,
        newline: s
    } = n;
    for (let o = 0; o < e.length; o++) {
        const a = e[o];
        ke(a) ? r(a, -3) : pe(a) ? vf(a, n) : on(a, n), o < e.length - 1 && (t ? (i && r(","), s()) : i && r(", "))
    }
}

function on(e, n) {
    if (ke(e)) {
        n.push(e, -3);
        return
    }
    if (Fn(e)) {
        n.push(n.helper(e));
        return
    }
    switch (e.type) {
        case 1:
        case 9:
        case 11:
            on(e.codegenNode, n);
            break;
        case 2:
            YE(e, n);
            break;
        case 4:
            zg(e, n);
            break;
        case 5:
            KE(e, n);
            break;
        case 12:
            on(e.codegenNode, n);
            break;
        case 8:
            Gg(e, n);
            break;
        case 3:
            GE(e, n);
            break;
        case 13:
            ZE(e, n);
            break;
        case 14:
            JE(e, n);
            break;
        case 15:
            QE(e, n);
            break;
        case 17:
            qE(e, n);
            break;
        case 18:
            eS(e, n);
            break;
        case 19:
            tS(e, n);
            break;
        case 20:
            nS(e, n);
            break;
        case 21:
            wo(e.body, n, !0, !1);
            break
    }
}

function YE(e, n) {
    n.push(JSON.stringify(e.content), -3, e)
}

function zg(e, n) {
    const {
        content: t,
        isStatic: i
    } = e;
    n.push(i ? JSON.stringify(t) : t, -3, e)
}

function KE(e, n) {
    const {
        push: t,
        helper: i,
        pure: r
    } = n;
    r && t(El), t(`${i(vl)}(`), on(e.content, n), t(")")
}

function Gg(e, n) {
    for (let t = 0; t < e.children.length; t++) {
        const i = e.children[t];
        ke(i) ? n.push(i, -3) : on(i, n)
    }
}

function zE(e, n) {
    const {
        push: t
    } = n;
    if (e.type === 8) t("["), Gg(e, n), t("]");
    else if (e.isStatic) {
        const i = gf(e.content) ? e.content : JSON.stringify(e.content);
        t(i, -2, e)
    } else t(`[${e.content}]`, -3, e)
}

function GE(e, n) {
    const {
        push: t,
        helper: i,
        pure: r
    } = n;
    r && t(El), t(`${i(bo)}(${JSON.stringify(e.content)})`, -3, e)
}

function ZE(e, n) {
    const {
        push: t,
        helper: i,
        pure: r
    } = n, {
        tag: s,
        props: o,
        children: a,
        patchFlag: l,
        dynamicProps: u,
        directives: c,
        isBlock: f,
        disableTracking: d,
        isComponent: h
    } = e;
    let p;
    l && (p = String(l)), c && t(i(af) + "("), f && t(`(${i(Mr)}(${d?"true":""}), `), r && t(El);
    const m = f ? ss(n.inSSR, h) : rs(n.inSSR, h);
    t(i(m) + "(", -2, e), wo(XE([s, o, a, p, u]), n), t(")"), f && t(")"), c && (t(", "), on(c, n), t(")"))
}

function XE(e) {
    let n = e.length;
    for (; n-- && e[n] == null;);
    return e.slice(0, n + 1).map(t => t || "null")
}

function JE(e, n) {
    const {
        push: t,
        helper: i,
        pure: r
    } = n, s = ke(e.callee) ? e.callee : i(e.callee);
    r && t(El), t(s + "(", -2, e), wo(e.arguments, n), t(")")
}

function QE(e, n) {
    const {
        push: t,
        indent: i,
        deindent: r,
        newline: s
    } = n, {
        properties: o
    } = e;
    if (!o.length) {
        t("{}", -2, e);
        return
    }
    const a = o.length > 1 || !1;
    t(a ? "{" : "{ "), a && i();
    for (let l = 0; l < o.length; l++) {
        const {
            key: u,
            value: c
        } = o[l];
        zE(u, n), t(": "), on(c, n), l < o.length - 1 && (t(","), s())
    }
    a && r(), t(a ? "}" : " }")
}

function qE(e, n) {
    vf(e.elements, n)
}

function eS(e, n) {
    const {
        push: t,
        indent: i,
        deindent: r
    } = n, {
        params: s,
        returns: o,
        body: a,
        newline: l,
        isSlot: u
    } = e;
    u && t(`_${ns[df]}(`), t("(", -2, e), pe(s) ? wo(s, n) : s && on(s, n), t(") => "), (l || a) && (t("{"), i()), o ? (l && t("return "), pe(o) ? vf(o, n) : on(o, n)) : a && on(a, n), (l || a) && (r(), t("}")), u && (e.isNonScopedSlot && t(", undefined, true"), t(")"))
}

function tS(e, n) {
    const {
        test: t,
        consequent: i,
        alternate: r,
        newline: s
    } = e, {
        push: o,
        indent: a,
        deindent: l,
        newline: u
    } = n;
    if (t.type === 4) {
        const f = !gf(t.content);
        f && o("("), zg(t, n), f && o(")")
    } else o("("), on(t, n), o(")");
    s && a(), n.indentLevel++, s || o(" "), o("? "), on(i, n), n.indentLevel--, s && u(), s || o(" "), o(": ");
    const c = r.type === 19;
    c || n.indentLevel++, on(r, n), c || n.indentLevel--, s && l(!0)
}

function nS(e, n) {
    const {
        push: t,
        helper: i,
        indent: r,
        deindent: s,
        newline: o
    } = n;
    t(`_cache[${e.index}] || (`), e.isVOnce && (r(), t(`${i(La)}(-1),`), o(), t("(")), t(`_cache[${e.index}] = `), on(e.value, n), e.isVOnce && (t(`).cacheIndex = ${e.index},`), o(), t(`${i(La)}(1),`), o(), t(`_cache[${e.index}]`), s()), t(")")
}
new RegExp("\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b");
const iS = Yg(/^(if|else|else-if)$/, (e, n, t) => rS(e, n, t, (i, r, s) => {
    const o = t.parent.children;
    let a = o.indexOf(i),
        l = 0;
    for (; a-- >= 0;) {
        const u = o[a];
        u && u.type === 9 && (l += u.branches.length)
    }
    return () => {
        if (s) i.codegenNode = Rd(r, l, t);
        else {
            const u = sS(i.codegenNode);
            u.alternate = Rd(r, l + i.branches.length - 1, t)
        }
    }
}));

function rS(e, n, t, i) {
    if (n.name !== "else" && (!n.exp || !n.exp.content.trim())) {
        const r = n.exp ? n.exp.loc : e.loc;
        t.onError(Dt(28, n.loc)), n.exp = Ve("true", !1, r)
    }
    if (n.name === "if") {
        const r = Nd(e, n),
            s = {
                type: 9,
                loc: e.loc,
                branches: [r]
            };
        if (t.replaceNode(s), i) return i(s, r, !0)
    } else {
        const r = t.parent.children;
        let s = r.indexOf(e);
        for (; s-- >= -1;) {
            const o = r[s];
            if (o && o.type === 3) {
                t.removeNode(o);
                continue
            }
            if (o && o.type === 2 && !o.content.trim().length) {
                t.removeNode(o);
                continue
            }
            if (o && o.type === 9) {
                n.name === "else-if" && o.branches[o.branches.length - 1].condition === void 0 && t.onError(Dt(30, e.loc)), t.removeNode();
                const a = Nd(e, n);
                o.branches.push(a);
                const l = i && i(o, a, !1);
                bl(a, t), l && l(), t.currentNode = null
            } else t.onError(Dt(30, e.loc));
            break
        }
    }
}

function Nd(e, n) {
    const t = e.tagType === 3;
    return {
        type: 10,
        loc: e.loc,
        condition: n.name === "else" ? void 0 : n.exp,
        children: t && !Jn(e, "for") ? e.children : [e],
        userKey: yl(e, "key"),
        isTemplateIf: t
    }
}

function Rd(e, n, t) {
    return e.condition ? Ru(e.condition, _d(e, n, t), Ht(t.helper(bo), ['""', "true"])) : _d(e, n, t)
}

function _d(e, n, t) {
    const {
        helper: i
    } = t, r = Ft("key", Ve(`${n}`, !1, kn, 2)), {
        children: s
    } = e, o = s[0];
    if (s.length !== 1 || o.type !== 1)
        if (s.length === 1 && o.type === 11) {
            const l = o.codegenNode;
            return Va(l, r, t), l
        } else {
            let l = 64;
            return to(t, i(qs), Bn([r]), s, l, void 0, void 0, !0, !1, !1, e.loc)
        }
    else {
        const l = o.codegenNode,
            u = SE(l);
        return u.type === 13 && pf(u, t), Va(u, r, t), l
    }
}

function sS(e) {
    for (;;)
        if (e.type === 19)
            if (e.alternate.type === 19) e = e.alternate;
            else return e;
    else e.type === 20 && (e = e.value)
}
const oS = (e, n, t) => {
        const {
            modifiers: i,
            loc: r
        } = e, s = e.arg;
        let {
            exp: o
        } = e;
        if (o && o.type === 4 && !o.content.trim() && (o = void 0), !o) {
            if (s.type !== 4 || !s.isStatic) return t.onError(Dt(52, s.loc)), {
                props: [Ft(s, Ve("", !0, r))]
            };
            Zg(e), o = e.exp
        }
        return s.type !== 4 ? (s.children.unshift("("), s.children.push(') || ""')) : s.isStatic || (s.content = `${s.content} || ""`), i.includes("camel") && (s.type === 4 ? s.isStatic ? s.content = bt(s.content) : s.content = `${t.helperString(Pu)}(${s.content})` : (s.children.unshift(`${t.helperString(Pu)}(`), s.children.push(")"))), t.inSSR || (i.includes("prop") && Fd(s, "."), i.includes("attr") && Fd(s, "^")), {
            props: [Ft(s, o)]
        }
    },
    Zg = (e, n) => {
        const t = e.arg,
            i = bt(t.content);
        e.exp = Ve(i, !1, t.loc)
    },
    Fd = (e, n) => {
        e.type === 4 ? e.isStatic ? e.content = n + e.content : e.content = `\`${n}\${${e.content}}\`` : (e.children.unshift(`'${n}' + (`), e.children.push(")"))
    },
    aS = Yg("for", (e, n, t) => {
        const {
            helper: i,
            removeHelper: r
        } = t;
        return lS(e, n, t, s => {
            const o = Ht(i(lf), [s.source]),
                a = $a(e),
                l = Jn(e, "memo"),
                u = yl(e, "key", !1, !0);
            u && u.type === 7 && !u.exp && Zg(u);
            const c = u && (u.type === 6 ? u.value ? Ve(u.value.content, !0) : void 0 : u.exp),
                f = u && c ? Ft("key", c) : null,
                d = s.source.type === 4 && s.source.constType > 0,
                h = d ? 64 : u ? 128 : 256;
            return s.codegenNode = to(t, i(qs), void 0, o, h, void 0, void 0, !0, !d, !1, e.loc), () => {
                let p;
                const {
                    children: m
                } = s, y = m.length !== 1 || m[0].type !== 1, D = ja(e) ? e : a && e.children.length === 1 && ja(e.children[0]) ? e.children[0] : null;
                if (D ? (p = D.codegenNode, a && f && Va(p, f, t)) : y ? p = to(t, i(qs), f ? Bn([f]) : void 0, e.children, 64, void 0, void 0, !0, void 0, !1) : (p = m[0].codegenNode, a && f && Va(p, f, t), p.isBlock !== !d && (p.isBlock ? (r(Mr), r(ss(t.inSSR, p.isComponent))) : r(rs(t.inSSR, p.isComponent))), p.isBlock = !d, p.isBlock ? (i(Mr), i(ss(t.inSSR, p.isComponent))) : i(rs(t.inSSR, p.isComponent))), l) {
                    const S = is(Lu(s.parseResult, [Ve("_cached")]));
                    S.body = fE([ei(["const _memo = (", l.exp, ")"]), ei(["if (_cached", ...c ? [" && _cached.key === ", c] : [], ` && ${t.helperString(Ng)}(_cached, _memo)) return _cached`]), ei(["const _item = ", p]), Ve("_item.memo = _memo"), Ve("return _item")]), o.arguments.push(S, Ve("_cache"), Ve(String(t.cached++)))
                } else o.arguments.push(is(Lu(s.parseResult), p, !0))
            }
        })
    });

function lS(e, n, t, i) {
    if (!n.exp) {
        t.onError(Dt(31, n.loc));
        return
    }
    const r = n.forParseResult;
    if (!r) {
        t.onError(Dt(32, n.loc));
        return
    }
    Xg(r);
    const {
        addIdentifiers: s,
        removeIdentifiers: o,
        scopes: a
    } = t, {
        source: l,
        value: u,
        key: c,
        index: f
    } = r, d = {
        type: 11,
        loc: n.loc,
        source: l,
        valueAlias: u,
        keyAlias: c,
        objectIndexAlias: f,
        parseResult: r,
        children: $a(e) ? e.children : [e]
    };
    t.replaceNode(d), a.vFor++;
    const h = i && i(d);
    return () => {
        a.vFor--, h && h()
    }
}

function Xg(e, n) {
    e.finalized || (e.finalized = !0)
}

function Lu({
    value: e,
    key: n,
    index: t
}, i = []) {
    return uS([e, n, t, ...i])
}

function uS(e) {
    let n = e.length;
    for (; n-- && !e[n];);
    return e.slice(0, n + 1).map((t, i) => t || Ve("_".repeat(i + 1), !1))
}
const Ld = Ve("undefined", !1),
    cS = (e, n) => {
        if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
            const t = Jn(e, "slot");
            if (t) return t.exp, n.scopes.vSlot++, () => {
                n.scopes.vSlot--
            }
        }
    },
    fS = (e, n, t, i) => is(e, t, !1, !0, t.length ? t[0].loc : i);

function dS(e, n, t = fS) {
    n.helper(df);
    const {
        children: i,
        loc: r
    } = e, s = [], o = [];
    let a = n.scopes.vSlot > 0 || n.scopes.vFor > 0;
    const l = Jn(e, "slot", !0);
    if (l) {
        const {
            arg: y,
            exp: D
        } = l;
        y && !Sn(y) && (a = !0), s.push(Ft(y || Ve("default", !0), t(D, void 0, i, r)))
    }
    let u = !1,
        c = !1;
    const f = [],
        d = new Set;
    let h = 0;
    for (let y = 0; y < i.length; y++) {
        const D = i[y];
        let S;
        if (!$a(D) || !(S = Jn(D, "slot", !0))) {
            D.type !== 3 && f.push(D);
            continue
        }
        if (l) {
            n.onError(Dt(37, S.loc));
            break
        }
        u = !0;
        const {
            children: b,
            loc: w
        } = D, {
            arg: x = Ve("default", !0),
            exp: O,
            loc: F
        } = S;
        let L;
        Sn(x) ? L = x ? x.content : "default" : a = !0;
        const C = Jn(D, "for"),
            I = t(O, C, b, w);
        let j, R;
        if (j = Jn(D, "if")) a = !0, o.push(Ru(j.exp, Ho(x, I, h++), Ld));
        else if (R = Jn(D, /^else(-if)?$/, !0)) {
            let _ = y,
                V;
            for (; _-- && (V = i[_], V.type === 3););
            if (V && $a(V) && Jn(V, /^(else-)?if$/)) {
                let G = o[o.length - 1];
                for (; G.alternate.type === 19;) G = G.alternate;
                G.alternate = R.exp ? Ru(R.exp, Ho(x, I, h++), Ld) : Ho(x, I, h++)
            } else n.onError(Dt(30, R.loc))
        } else if (C) {
            a = !0;
            const _ = C.forParseResult;
            _ ? (Xg(_), o.push(Ht(n.helper(lf), [_.source, is(Lu(_), Ho(x, I), !0)]))) : n.onError(Dt(32, C.loc))
        } else {
            if (L) {
                if (d.has(L)) {
                    n.onError(Dt(38, F));
                    continue
                }
                d.add(L), L === "default" && (c = !0)
            }
            s.push(Ft(x, I))
        }
    }
    if (!l) {
        const y = (D, S) => {
            const b = t(D, void 0, S, r);
            return n.compatConfig && (b.isNonScopedSlot = !0), Ft("default", b)
        };
        u ? f.length && f.some(D => Jg(D)) && (c ? n.onError(Dt(39, f[0].loc)) : s.push(y(void 0, f))) : s.push(y(void 0, i))
    }
    const p = a ? 2 : ca(e.children) ? 3 : 1;
    let m = Bn(s.concat(Ft("_", Ve(p + "", !1))), r);
    return o.length && (m = Ht(n.helper(Pg), [m, So(o)])), {
        slots: m,
        hasDynamicSlots: a
    }
}

function Ho(e, n, t) {
    const i = [Ft("name", e), Ft("fn", n)];
    return t != null && i.push(Ft("key", Ve(String(t), !0))), Bn(i)
}

function ca(e) {
    for (let n = 0; n < e.length; n++) {
        const t = e[n];
        switch (t.type) {
            case 1:
                if (t.tagType === 2 || ca(t.children)) return !0;
                break;
            case 9:
                if (ca(t.branches)) return !0;
                break;
            case 10:
            case 11:
                if (ca(t.children)) return !0;
                break
        }
    }
    return !1
}

function Jg(e) {
    return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : Jg(e.content)
}
const Qg = new WeakMap,
    hS = (e, n) => function() {
        if (e = n.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1))) return;
        const {
            tag: i,
            props: r
        } = e, s = e.tagType === 1;
        let o = s ? pS(e, n) : `"${i}"`;
        const a = ct(o) && o.callee === rf;
        let l, u, c = 0,
            f, d, h, p = a || o === Ls || o === Qc || !s && (i === "svg" || i === "foreignObject" || i === "math");
        if (r.length > 0) {
            const m = qg(e, n, void 0, s, a);
            l = m.props, c = m.patchFlag, d = m.dynamicPropNames;
            const y = m.directives;
            h = y && y.length ? So(y.map(D => gS(D, n))) : void 0, m.shouldUseBlock && (p = !0)
        }
        if (e.children.length > 0)
            if (o === _a && (p = !0, c |= 1024), s && o !== Ls && o !== _a) {
                const {
                    slots: y,
                    hasDynamicSlots: D
                } = dS(e, n);
                u = y, D && (c |= 1024)
            } else if (e.children.length === 1 && o !== Ls) {
            const y = e.children[0],
                D = y.type,
                S = D === 5 || D === 8;
            S && Un(y, n) === 0 && (c |= 1), S || D === 2 ? u = y : u = e.children
        } else u = e.children;
        d && d.length && (f = vS(d)), e.codegenNode = to(n, o, l, u, c === 0 ? void 0 : c, f, h, !!p, !1, s, e.loc)
    };

function pS(e, n, t = !1) {
    let {
        tag: i
    } = e;
    const r = ku(i),
        s = yl(e, "is", !1, !0);
    if (s)
        if (r || Dr("COMPILER_IS_ON_ELEMENT", n)) {
            let a;
            if (s.type === 6 ? a = s.value && Ve(s.value.content, !0) : (a = s.exp, a || (a = Ve("is", !1, s.loc))), a) return Ht(n.helper(rf), [a])
        } else s.type === 6 && s.value.content.startsWith("vue:") && (i = s.value.content.slice(4));
    const o = _g(i) || n.isBuiltInComponent(i);
    return o ? (t || n.helper(o), o) : (n.helper(nf), n.components.add(i), io(i, "component"))
}

function qg(e, n, t = e.props, i, r, s = !1) {
    const {
        tag: o,
        loc: a,
        children: l
    } = e;
    let u = [];
    const c = [],
        f = [],
        d = l.length > 0;
    let h = !1,
        p = 0,
        m = !1,
        y = !1,
        D = !1,
        S = !1,
        b = !1,
        w = !1;
    const x = [],
        O = I => {
            u.length && (c.push(Bn(kd(u), a)), u = []), I && c.push(I)
        },
        F = () => {
            n.scopes.vFor > 0 && u.push(Ft(Ve("ref_for", !0), Ve("true")))
        },
        L = ({
            key: I,
            value: j
        }) => {
            if (Sn(I)) {
                const R = I.content,
                    _ = Nr(R);
                if (_ && (!i || r) && R.toLowerCase() !== "onclick" && R !== "onUpdate:modelValue" && !Ki(R) && (S = !0), _ && Ki(R) && (w = !0), _ && j.type === 14 && (j = j.arguments[0]), j.type === 20 || (j.type === 4 || j.type === 8) && Un(j, n) > 0) return;
                R === "ref" ? m = !0 : R === "class" ? y = !0 : R === "style" ? D = !0 : R !== "key" && !x.includes(R) && x.push(R), i && (R === "class" || R === "style") && !x.includes(R) && x.push(R)
            } else b = !0
        };
    for (let I = 0; I < t.length; I++) {
        const j = t[I];
        if (j.type === 6) {
            const {
                loc: R,
                name: _,
                nameLoc: V,
                value: G
            } = j;
            let $ = !0;
            if (_ === "ref" && (m = !0, F()), _ === "is" && (ku(o) || G && G.content.startsWith("vue:") || Dr("COMPILER_IS_ON_ELEMENT", n))) continue;
            u.push(Ft(Ve(_, !0, V), Ve(G ? G.content : "", $, G ? G.loc : R)))
        } else {
            const {
                name: R,
                arg: _,
                exp: V,
                loc: G,
                modifiers: $
            } = j, W = R === "bind", J = R === "on";
            if (R === "slot") {
                i || n.onError(Dt(40, G));
                continue
            }
            if (R === "once" || R === "memo" || R === "is" || W && gr(_, "is") && (ku(o) || Dr("COMPILER_IS_ON_ELEMENT", n)) || J && s) continue;
            if ((W && gr(_, "key") || J && d && gr(_, "vue:before-update")) && (h = !0), W && gr(_, "ref") && F(), !_ && (W || J)) {
                if (b = !0, V)
                    if (W) {
                        if (F(), O(), Dr("COMPILER_V_BIND_OBJECT_ORDER", n)) {
                            c.unshift(V);
                            continue
                        }
                        c.push(V)
                    } else O({
                        type: 14,
                        loc: G,
                        callee: n.helper(ff),
                        arguments: i ? [V] : [V, "true"]
                    });
                else n.onError(Dt(W ? 34 : 35, G));
                continue
            }
            W && $.includes("prop") && (p |= 32);
            const Ce = n.directiveTransforms[R];
            if (Ce) {
                const {
                    props: Je,
                    needRuntime: Pe
                } = Ce(j, e, n);
                !s && Je.forEach(L), J && _ && !Sn(_) ? O(Bn(Je, a)) : u.push(...Je), Pe && (f.push(j), Fn(Pe) && Qg.set(j, Pe))
            } else $y(R) || (f.push(j), d && (h = !0))
        }
    }
    let C;
    if (c.length ? (O(), c.length > 1 ? C = Ht(n.helper(Fa), c, a) : C = c[0]) : u.length && (C = Bn(kd(u), a)), b ? p |= 16 : (y && !i && (p |= 2), D && !i && (p |= 4), x.length && (p |= 8), S && (p |= 32)), !h && (p === 0 || p === 32) && (m || w || f.length > 0) && (p |= 512), !n.inSSR && C) switch (C.type) {
        case 15:
            let I = -1,
                j = -1,
                R = !1;
            for (let G = 0; G < C.properties.length; G++) {
                const $ = C.properties[G].key;
                Sn($) ? $.content === "class" ? I = G : $.content === "style" && (j = G) : $.isHandlerKey || (R = !0)
            }
            const _ = C.properties[I],
                V = C.properties[j];
            R ? C = Ht(n.helper(eo), [C]) : (_ && !Sn(_.value) && (_.value = Ht(n.helper(uf), [_.value])), V && (D || V.value.type === 4 && V.value.content.trim()[0] === "[" || V.value.type === 17) && (V.value = Ht(n.helper(cf), [V.value])));
            break;
        case 14:
            break;
        default:
            C = Ht(n.helper(eo), [Ht(n.helper(Eo), [C])]);
            break
    }
    return {
        props: C,
        directives: f,
        patchFlag: p,
        dynamicPropNames: x,
        shouldUseBlock: h
    }
}

function kd(e) {
    const n = new Map,
        t = [];
    for (let i = 0; i < e.length; i++) {
        const r = e[i];
        if (r.key.type === 8 || !r.key.isStatic) {
            t.push(r);
            continue
        }
        const s = r.key.content,
            o = n.get(s);
        o ? (s === "style" || s === "class" || Nr(s)) && mS(o, r) : (n.set(s, r), t.push(r))
    }
    return t
}

function mS(e, n) {
    e.value.type === 17 ? e.value.elements.push(n.value) : e.value = So([e.value, n.value], e.loc)
}

function gS(e, n) {
    const t = [],
        i = Qg.get(e);
    i ? t.push(n.helperString(i)) : (n.helper(sf), n.directives.add(e.name), t.push(io(e.name, "directive")));
    const {
        loc: r
    } = e;
    if (e.exp && t.push(e.exp), e.arg && (e.exp || t.push("void 0"), t.push(e.arg)), Object.keys(e.modifiers).length) {
        e.arg || (e.exp || t.push("void 0"), t.push("void 0"));
        const s = Ve("true", !1, r);
        t.push(Bn(e.modifiers.map(o => Ft(o, s)), r))
    }
    return So(t, e.loc)
}

function vS(e) {
    let n = "[";
    for (let t = 0, i = e.length; t < i; t++) n += JSON.stringify(e[t]), t < i - 1 && (n += ", ");
    return n + "]"
}

function ku(e) {
    return e === "component" || e === "Component"
}
const yS = (e, n) => {
    if (ja(e)) {
        const {
            children: t,
            loc: i
        } = e, {
            slotName: r,
            slotProps: s
        } = bS(e, n), o = [n.prefixIdentifiers ? "_ctx.$slots" : "$slots", r, "{}", "undefined", "true"];
        let a = 2;
        s && (o[2] = s, a = 3), t.length && (o[3] = is([], t, !1, !1, i), a = 4), n.scopeId && !n.slotted && (a = 5), o.splice(a), e.codegenNode = Ht(n.helper(Ig), o, i)
    }
};

function bS(e, n) {
    let t = '"default"',
        i;
    const r = [];
    for (let s = 0; s < e.props.length; s++) {
        const o = e.props[s];
        if (o.type === 6) o.value && (o.name === "name" ? t = JSON.stringify(o.value.content) : (o.name = bt(o.name), r.push(o)));
        else if (o.name === "bind" && gr(o.arg, "name")) {
            if (o.exp) t = o.exp;
            else if (o.arg && o.arg.type === 4) {
                const a = bt(o.arg.content);
                t = o.exp = Ve(a, !1, o.arg.loc)
            }
        } else o.name === "bind" && o.arg && Sn(o.arg) && (o.arg.content = bt(o.arg.content)), r.push(o)
    }
    if (r.length > 0) {
        const {
            props: s,
            directives: o
        } = qg(e, n, r, !1, !1);
        i = s, o.length && n.onError(Dt(36, o[0].loc))
    }
    return {
        slotName: t,
        slotProps: i
    }
}
const ES = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,
    ev = (e, n, t, i) => {
        const {
            loc: r,
            modifiers: s,
            arg: o
        } = e;
        !e.exp && !s.length && t.onError(Dt(35, r));
        let a;
        if (o.type === 4)
            if (o.isStatic) {
                let f = o.content;
                f.startsWith("vue:") && (f = `vnode-${f.slice(4)}`);
                const d = n.tagType !== 0 || f.startsWith("vnode") || !/[A-Z]/.test(f) ? br(bt(f)) : `on:${f}`;
                a = Ve(d, !0, o.loc)
            } else a = ei([`${t.helperString(Nu)}(`, o, ")"]);
        else a = o, a.children.unshift(`${t.helperString(Nu)}(`), a.children.push(")");
        let l = e.exp;
        l && !l.content.trim() && (l = void 0);
        let u = t.cacheHandlers && !l && !t.inVOnce;
        if (l) {
            const f = Fg(l.content),
                d = !(f || ES.test(l.content)),
                h = l.content.includes(";");
            (d || u && f) && (l = ei([`${d?"$event":"(...args)"} => ${h?"{":"("}`, l, h ? "}" : ")"]))
        }
        let c = {
            props: [Ft(a, l || Ve("() => {}", !1, r))]
        };
        return i && (c = i(c)), u && (c.props[0].value = t.cache(c.props[0].value)), c.props.forEach(f => f.key.isHandlerKey = !0), c
    },
    SS = (e, n) => {
        if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10) return () => {
            const t = e.children;
            let i, r = !1;
            for (let s = 0; s < t.length; s++) {
                const o = t[s];
                if (Hl(o)) {
                    r = !0;
                    for (let a = s + 1; a < t.length; a++) {
                        const l = t[a];
                        if (Hl(l)) i || (i = t[s] = ei([o], o.loc)), i.children.push(" + ", l), t.splice(a, 1), a--;
                        else {
                            i = void 0;
                            break
                        }
                    }
                }
            }
            if (!(!r || t.length === 1 && (e.type === 0 || e.type === 1 && e.tagType === 0 && !e.props.find(s => s.type === 7 && !n.directiveTransforms[s.name]) && e.tag !== "template")))
                for (let s = 0; s < t.length; s++) {
                    const o = t[s];
                    if (Hl(o) || o.type === 8) {
                        const a = [];
                        (o.type !== 2 || o.content !== " ") && a.push(o), !n.ssr && Un(o, n) === 0 && a.push("1"), t[s] = {
                            type: 12,
                            content: o,
                            loc: o.loc,
                            codegenNode: Ht(n.helper(tf), a)
                        }
                    }
                }
        }
    },
    $d = new WeakSet,
    wS = (e, n) => {
        if (e.type === 1 && Jn(e, "once", !0)) return $d.has(e) || n.inVOnce || n.inSSR ? void 0 : ($d.add(e), n.inVOnce = !0, n.helper(La), () => {
            n.inVOnce = !1;
            const t = n.currentNode;
            t.codegenNode && (t.codegenNode = n.cache(t.codegenNode, !0))
        })
    },
    tv = (e, n, t) => {
        const {
            exp: i,
            arg: r
        } = e;
        if (!i) return t.onError(Dt(41, e.loc)), Bo();
        const s = i.loc.source,
            o = i.type === 4 ? i.content : s,
            a = t.bindingMetadata[s];
        if (a === "props" || a === "props-aliased") return t.onError(Dt(44, i.loc)), Bo();
        const l = !1;
        if (!o.trim() || !Fg(o) && !l) return t.onError(Dt(42, i.loc)), Bo();
        const u = r || Ve("modelValue", !0),
            c = r ? Sn(r) ? `onUpdate:${bt(r.content)}` : ei(['"onUpdate:" + ', r]) : "onUpdate:modelValue";
        let f;
        const d = t.isTS ? "($event: any)" : "$event";
        f = ei([`${d} => ((`, i, ") = $event)"]);
        const h = [Ft(u, e.exp), Ft(c, f)];
        if (e.modifiers.length && n.tagType === 1) {
            const p = e.modifiers.map(y => (gf(y) ? y : JSON.stringify(y)) + ": true").join(", "),
                m = r ? Sn(r) ? `${r.content}Modifiers` : ei([r, ' + "Modifiers"']) : "modelModifiers";
            h.push(Ft(m, Ve(`{ ${p} }`, !1, e.loc, 2)))
        }
        return Bo(h)
    };

function Bo(e = []) {
    return {
        props: e
    }
}
const DS = /[\w).+\-_$\]]/,
    TS = (e, n) => {
        Dr("COMPILER_FILTERS", n) && (e.type === 5 ? Ba(e.content, n) : e.type === 1 && e.props.forEach(t => {
            t.type === 7 && t.name !== "for" && t.exp && Ba(t.exp, n)
        }))
    };

function Ba(e, n) {
    if (e.type === 4) jd(e, n);
    else
        for (let t = 0; t < e.children.length; t++) {
            const i = e.children[t];
            typeof i == "object" && (i.type === 4 ? jd(i, n) : i.type === 8 ? Ba(e, n) : i.type === 5 && Ba(i.content, n))
        }
}

function jd(e, n) {
    const t = e.content;
    let i = !1,
        r = !1,
        s = !1,
        o = !1,
        a = 0,
        l = 0,
        u = 0,
        c = 0,
        f, d, h, p, m = [];
    for (h = 0; h < t.length; h++)
        if (d = f, f = t.charCodeAt(h), i) f === 39 && d !== 92 && (i = !1);
        else if (r) f === 34 && d !== 92 && (r = !1);
    else if (s) f === 96 && d !== 92 && (s = !1);
    else if (o) f === 47 && d !== 92 && (o = !1);
    else if (f === 124 && t.charCodeAt(h + 1) !== 124 && t.charCodeAt(h - 1) !== 124 && !a && !l && !u) p === void 0 ? (c = h + 1, p = t.slice(0, h).trim()) : y();
    else {
        switch (f) {
            case 34:
                r = !0;
                break;
            case 39:
                i = !0;
                break;
            case 96:
                s = !0;
                break;
            case 40:
                u++;
                break;
            case 41:
                u--;
                break;
            case 91:
                l++;
                break;
            case 93:
                l--;
                break;
            case 123:
                a++;
                break;
            case 125:
                a--;
                break
        }
        if (f === 47) {
            let D = h - 1,
                S;
            for (; D >= 0 && (S = t.charAt(D), S === " "); D--);
            (!S || !DS.test(S)) && (o = !0)
        }
    }
    p === void 0 ? p = t.slice(0, h).trim() : c !== 0 && y();

    function y() {
        m.push(t.slice(c, h).trim()), c = h + 1
    }
    if (m.length) {
        for (h = 0; h < m.length; h++) p = CS(p, m[h], n);
        e.content = p, e.ast = void 0
    }
}

function CS(e, n, t) {
    t.helper(of);
    const i = n.indexOf("(");
    if (i < 0) return t.filters.add(n), `${io(n,"filter")}(${e})`;
    {
        const r = n.slice(0, i),
            s = n.slice(i + 1);
        return t.filters.add(r), `${io(r,"filter")}(${e}${s!==")"?","+s:s}`
    }
}
const Vd = new WeakSet,
    OS = (e, n) => {
        if (e.type === 1) {
            const t = Jn(e, "memo");
            return !t || Vd.has(e) ? void 0 : (Vd.add(e), () => {
                const i = e.codegenNode || n.currentNode.codegenNode;
                i && i.type === 13 && (e.tagType !== 1 && pf(i, n), e.codegenNode = Ht(n.helper(hf), [t.exp, is(void 0, i), "_cache", String(n.cached++)]))
            })
        }
    };

function xS(e) {
    return [
        [wS, iS, OS, aS, TS, yS, hS, cS, SS], {
            on: ev,
            bind: oS,
            model: tv
        }
    ]
}

function AS(e, n = {}) {
    const t = n.onError || mf,
        i = n.mode === "module";
    n.prefixIdentifiers === !0 ? t(Dt(47)) : i && t(Dt(48));
    const r = !1;
    n.cacheHandlers && t(Dt(49)), n.scopeId && !i && t(Dt(50));
    const s = it({}, n, {
            prefixIdentifiers: r
        }),
        o = ke(e) ? _E(e, s) : e,
        [a, l] = xS();
    return $E(o, it({}, s, {
        nodeTransforms: [...a, ...n.nodeTransforms || []],
        directiveTransforms: it({}, l, n.directiveTransforms || {})
    })), BE(o, s)
}
const MS = () => ({
    props: []
});
/**
 * @vue/compiler-dom v3.4.32
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const nv = Symbol(""),
    iv = Symbol(""),
    rv = Symbol(""),
    sv = Symbol(""),
    $u = Symbol(""),
    ov = Symbol(""),
    av = Symbol(""),
    lv = Symbol(""),
    uv = Symbol(""),
    cv = Symbol("");
lE({
    [nv]: "vModelRadio",
    [iv]: "vModelCheckbox",
    [rv]: "vModelText",
    [sv]: "vModelSelect",
    [$u]: "vModelDynamic",
    [ov]: "withModifiers",
    [av]: "withKeys",
    [lv]: "vShow",
    [uv]: "Transition",
    [cv]: "TransitionGroup"
});
let kr;

function IS(e, n = !1) {
    return kr || (kr = document.createElement("div")), n ? (kr.innerHTML = `<div foo="${e.replace(/"/g,"&quot;")}">`, kr.children[0].getAttribute("foo")) : (kr.innerHTML = e, kr.textContent)
}
const PS = {
        parseMode: "html",
        isVoidTag: qy,
        isNativeTag: e => Xy(e) || Jy(e) || Qy(e),
        isPreTag: e => e === "pre",
        decodeEntities: IS,
        isBuiltInComponent: e => {
            if (e === "Transition" || e === "transition") return uv;
            if (e === "TransitionGroup" || e === "transition-group") return cv
        },
        getNamespace(e, n, t) {
            let i = n ? n.ns : t;
            if (n && i === 2)
                if (n.tag === "annotation-xml") {
                    if (e === "svg") return 1;
                    n.props.some(r => r.type === 6 && r.name === "encoding" && r.value != null && (r.value.content === "text/html" || r.value.content === "application/xhtml+xml")) && (i = 0)
                } else /^m(?:[ions]|text)$/.test(n.tag) && e !== "mglyph" && e !== "malignmark" && (i = 0);
            else n && i === 1 && (n.tag === "foreignObject" || n.tag === "desc" || n.tag === "title") && (i = 0);
            if (i === 0) {
                if (e === "svg") return 1;
                if (e === "math") return 2
            }
            return i
        }
    },
    NS = e => {
        e.type === 1 && e.props.forEach((n, t) => {
            n.type === 6 && n.name === "style" && n.value && (e.props[t] = {
                type: 7,
                name: "bind",
                arg: Ve("style", !0, n.loc),
                exp: RS(n.value.content, n.loc),
                modifiers: [],
                loc: n.loc
            })
        })
    },
    RS = (e, n) => {
        const t = rp(e);
        return Ve(JSON.stringify(t), !1, n, 3)
    };

function Ji(e, n) {
    return Dt(e, n)
}
const _S = (e, n, t) => {
        const {
            exp: i,
            loc: r
        } = e;
        return i || t.onError(Ji(53, r)), n.children.length && (t.onError(Ji(54, r)), n.children.length = 0), {
            props: [Ft(Ve("innerHTML", !0, r), i || Ve("", !0))]
        }
    },
    FS = (e, n, t) => {
        const {
            exp: i,
            loc: r
        } = e;
        return i || t.onError(Ji(55, r)), n.children.length && (t.onError(Ji(56, r)), n.children.length = 0), {
            props: [Ft(Ve("textContent", !0), i ? Un(i, t) > 0 ? i : Ht(t.helperString(vl), [i], r) : Ve("", !0))]
        }
    },
    LS = (e, n, t) => {
        const i = tv(e, n, t);
        if (!i.props.length || n.tagType === 1) return i;
        e.arg && t.onError(Ji(58, e.arg.loc));
        const {
            tag: r
        } = n, s = t.isCustomElement(r);
        if (r === "input" || r === "textarea" || r === "select" || s) {
            let o = rv,
                a = !1;
            if (r === "input" || s) {
                const l = yl(n, "type");
                if (l) {
                    if (l.type === 7) o = $u;
                    else if (l.value) switch (l.value.content) {
                        case "radio":
                            o = nv;
                            break;
                        case "checkbox":
                            o = iv;
                            break;
                        case "file":
                            a = !0, t.onError(Ji(59, e.loc));
                            break
                    }
                } else yE(n) && (o = $u)
            } else r === "select" && (o = sv);
            a || (i.needRuntime = t.helper(o))
        } else t.onError(Ji(57, e.loc));
        return i.props = i.props.filter(o => !(o.key.type === 4 && o.key.content === "modelValue")), i
    },
    kS = Ln("passive,once,capture"),
    $S = Ln("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),
    jS = Ln("left,right"),
    fv = Ln("onkeyup,onkeydown,onkeypress", !0),
    VS = (e, n, t, i) => {
        const r = [],
            s = [],
            o = [];
        for (let a = 0; a < n.length; a++) {
            const l = n[a];
            l === "native" && no("COMPILER_V_ON_NATIVE", t) || kS(l) ? o.push(l) : jS(l) ? Sn(e) ? fv(e.content) ? r.push(l) : s.push(l) : (r.push(l), s.push(l)) : $S(l) ? s.push(l) : r.push(l)
        }
        return {
            keyModifiers: r,
            nonKeyModifiers: s,
            eventOptionModifiers: o
        }
    },
    Hd = (e, n) => Sn(e) && e.content.toLowerCase() === "onclick" ? Ve(n, !0) : e.type !== 4 ? ei(["(", e, `) === "onClick" ? "${n}" : (`, e, ")"]) : e,
    HS = (e, n, t) => ev(e, n, t, i => {
        const {
            modifiers: r
        } = e;
        if (!r.length) return i;
        let {
            key: s,
            value: o
        } = i.props[0];
        const {
            keyModifiers: a,
            nonKeyModifiers: l,
            eventOptionModifiers: u
        } = VS(s, r, t, e.loc);
        if (l.includes("right") && (s = Hd(s, "onContextmenu")), l.includes("middle") && (s = Hd(s, "onMouseup")), l.length && (o = Ht(t.helper(ov), [o, JSON.stringify(l)])), a.length && (!Sn(s) || fv(s.content)) && (o = Ht(t.helper(av), [o, JSON.stringify(a)])), u.length) {
            const c = u.map(ir).join("");
            s = Sn(s) ? Ve(`${s.content}${c}`, !0) : ei(["(", s, `) + "${c}"`])
        }
        return {
            props: [Ft(s, o)]
        }
    }),
    BS = (e, n, t) => {
        const {
            exp: i,
            loc: r
        } = e;
        return i || t.onError(Ji(61, r)), {
            props: [],
            needRuntime: t.helper(lv)
        }
    },
    US = (e, n) => {
        e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && n.removeNode()
    },
    WS = [NS],
    YS = {
        cloak: MS,
        html: _S,
        text: FS,
        model: LS,
        on: HS,
        show: BS
    };

function KS(e, n = {}) {
    return AS(e, it({}, PS, n, {
        nodeTransforms: [US, ...WS, ...n.nodeTransforms || []],
        directiveTransforms: it({}, YS, n.directiveTransforms || {}),
        transformHoist: null
    }))
}
/**
 * vue v3.4.32
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const Bd = new WeakMap;

function zS(e) {
    let n = Bd.get(e ?? nt);
    return n || (n = Object.create(null), Bd.set(e ?? nt, n)), n
}

function GS(e, n) {
    if (!ke(e))
        if (e.nodeType) e = e.innerHTML;
        else return $t;
    const t = e,
        i = zS(n),
        r = i[t];
    if (r) return r;
    if (e[0] === "#") {
        const l = document.querySelector(e);
        e = l ? l.innerHTML : ""
    }
    const s = it({
        hoistStatic: !0,
        onError: void 0,
        onWarn: $t
    }, n);
    !s.isCustomElement && typeof customElements < "u" && (s.isCustomElement = l => !!customElements.get(l));
    const {
        code: o
    } = KS(e, s), a = new Function("Vue", o)(nE);
    return a._rc = !0, i[t] = a
}
Bc(GS);
const ZS = {
    install(e) {
        e.config.globalProperties.$admin = {
            formatPrice: n => {
                let t = document.querySelector('meta[http-equiv="content-language"]').content;
                t = t.replace(/([a-z]{2})_([A-Z]{2})/g, "$1-$2");
                const i = JSON.parse(document.querySelector('meta[name="currency"]').content),
                    r = i.symbol !== "" ? i.symbol : i.code;
                if (!i.currency_position) return new Intl.NumberFormat(t, {
                    style: "currency",
                    currency: i.code
                }).format(n);
                const o = new Intl.NumberFormat(t, {
                    style: "currency",
                    currency: i.code,
                    minimumFractionDigits: i.decimal ?? 2
                }).formatToParts(n).map(a => {
                    switch (a.type) {
                        case "currency":
                            return "";
                        case "group":
                            return i.group_separator === "" ? a.value : i.group_separator;
                        case "decimal":
                            return i.decimal_separator === "" ? a.value : i.decimal_separator;
                        default:
                            return a.value
                    }
                }).join("");
                switch (i.currency_position) {
                    case "left":
                        return r + o;
                    case "left_with_space":
                        return r + " " + o;
                    case "right":
                        return o + r;
                    case "right_with_space":
                        return o + " " + r;
                    default:
                        return o
                }
            },
            formatDate: (n, t) => {
                const i = new Date(n),
                    r = {
                        d: i.getUTCDate(),
                        DD: i.getUTCDate().toString().padStart(2, "0"),
                        M: i.getUTCMonth() + 1,
                        MM: (i.getUTCMonth() + 1).toString().padStart(2, "0"),
                        MMM: i.toLocaleString("en-US", {
                            month: "short"
                        }),
                        MMMM: i.toLocaleString("en-US", {
                            month: "long"
                        }),
                        yy: i.getUTCFullYear().toString().slice(-2),
                        yyyy: i.getUTCFullYear(),
                        H: i.getUTCHours(),
                        HH: i.getUTCHours().toString().padStart(2, "0"),
                        h: i.getUTCHours() % 12 || 12,
                        hh: (i.getUTCHours() % 12 || 12).toString().padStart(2, "0"),
                        m: i.getUTCMinutes(),
                        mm: i.getUTCMinutes().toString().padStart(2, "0"),
                        A: i.getUTCHours() < 12 ? "AM" : "PM"
                    };
                return t.replace(/\b(?:d|DD|M|MM|MMM|MMMM|yy|yyyy|H|HH|h|hh|m|mm|A)\b/g, s => r[s])
            }
        }
    }
};

function dv(e, n) {
    return function() {
        return e.apply(n, arguments)
    }
}
const {
    toString: XS
} = Object.prototype, {
    getPrototypeOf: yf
} = Object, Sl = (e => n => {
    const t = XS.call(n);
    return e[t] || (e[t] = t.slice(8, -1).toLowerCase())
})(Object.create(null)), si = e => (e = e.toLowerCase(), n => Sl(n) === e), wl = e => n => typeof n === e, {
    isArray: fs
} = Array, so = wl("undefined");

function JS(e) {
    return e !== null && !so(e) && e.constructor !== null && !so(e.constructor) && Yn(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const hv = si("ArrayBuffer");

function QS(e) {
    let n;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && hv(e.buffer), n
}
const qS = wl("string"),
    Yn = wl("function"),
    pv = wl("number"),
    Dl = e => e !== null && typeof e == "object",
    ew = e => e === !0 || e === !1,
    fa = e => {
        if (Sl(e) !== "object") return !1;
        const n = yf(e);
        return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    },
    tw = si("Date"),
    nw = si("File"),
    iw = si("Blob"),
    rw = si("FileList"),
    sw = e => Dl(e) && Yn(e.pipe),
    ow = e => {
        let n;
        return e && (typeof FormData == "function" && e instanceof FormData || Yn(e.append) && ((n = Sl(e)) === "formdata" || n === "object" && Yn(e.toString) && e.toString() === "[object FormData]"))
    },
    aw = si("URLSearchParams"),
    [lw, uw, cw, fw] = ["ReadableStream", "Request", "Response", "Headers"].map(si),
    dw = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Do(e, n, {
    allOwnKeys: t = !1
} = {}) {
    if (e === null || typeof e > "u") return;
    let i, r;
    if (typeof e != "object" && (e = [e]), fs(e))
        for (i = 0, r = e.length; i < r; i++) n.call(null, e[i], i, e);
    else {
        const s = t ? Object.getOwnPropertyNames(e) : Object.keys(e),
            o = s.length;
        let a;
        for (i = 0; i < o; i++) a = s[i], n.call(null, e[a], a, e)
    }
}

function mv(e, n) {
    n = n.toLowerCase();
    const t = Object.keys(e);
    let i = t.length,
        r;
    for (; i-- > 0;)
        if (r = t[i], n === r.toLowerCase()) return r;
    return null
}
const gv = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
    vv = e => !so(e) && e !== gv;

function ju() {
    const {
        caseless: e
    } = vv(this) && this || {}, n = {}, t = (i, r) => {
        const s = e && mv(n, r) || r;
        fa(n[s]) && fa(i) ? n[s] = ju(n[s], i) : fa(i) ? n[s] = ju({}, i) : fs(i) ? n[s] = i.slice() : n[s] = i
    };
    for (let i = 0, r = arguments.length; i < r; i++) arguments[i] && Do(arguments[i], t);
    return n
}
const hw = (e, n, t, {
        allOwnKeys: i
    } = {}) => (Do(n, (r, s) => {
        t && Yn(r) ? e[s] = dv(r, t) : e[s] = r
    }, {
        allOwnKeys: i
    }), e),
    pw = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    mw = (e, n, t, i) => {
        e.prototype = Object.create(n.prototype, i), e.prototype.constructor = e, Object.defineProperty(e, "super", {
            value: n.prototype
        }), t && Object.assign(e.prototype, t)
    },
    gw = (e, n, t, i) => {
        let r, s, o;
        const a = {};
        if (n = n || {}, e == null) return n;
        do {
            for (r = Object.getOwnPropertyNames(e), s = r.length; s-- > 0;) o = r[s], (!i || i(o, e, n)) && !a[o] && (n[o] = e[o], a[o] = !0);
            e = t !== !1 && yf(e)
        } while (e && (!t || t(e, n)) && e !== Object.prototype);
        return n
    },
    vw = (e, n, t) => {
        e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= n.length;
        const i = e.indexOf(n, t);
        return i !== -1 && i === t
    },
    yw = e => {
        if (!e) return null;
        if (fs(e)) return e;
        let n = e.length;
        if (!pv(n)) return null;
        const t = new Array(n);
        for (; n-- > 0;) t[n] = e[n];
        return t
    },
    bw = (e => n => e && n instanceof e)(typeof Uint8Array < "u" && yf(Uint8Array)),
    Ew = (e, n) => {
        const i = (e && e[Symbol.iterator]).call(e);
        let r;
        for (;
            (r = i.next()) && !r.done;) {
            const s = r.value;
            n.call(e, s[0], s[1])
        }
    },
    Sw = (e, n) => {
        let t;
        const i = [];
        for (;
            (t = e.exec(n)) !== null;) i.push(t);
        return i
    },
    ww = si("HTMLFormElement"),
    Dw = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, i, r) {
        return i.toUpperCase() + r
    }),
    Ud = (({
        hasOwnProperty: e
    }) => (n, t) => e.call(n, t))(Object.prototype),
    Tw = si("RegExp"),
    yv = (e, n) => {
        const t = Object.getOwnPropertyDescriptors(e),
            i = {};
        Do(t, (r, s) => {
            let o;
            (o = n(r, s, e)) !== !1 && (i[s] = o || r)
        }), Object.defineProperties(e, i)
    },
    Cw = e => {
        yv(e, (n, t) => {
            if (Yn(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1) return !1;
            const i = e[t];
            if (Yn(i)) {
                if (n.enumerable = !1, "writable" in n) {
                    n.writable = !1;
                    return
                }
                n.set || (n.set = () => {
                    throw Error("Can not rewrite read-only method '" + t + "'")
                })
            }
        })
    },
    Ow = (e, n) => {
        const t = {},
            i = r => {
                r.forEach(s => {
                    t[s] = !0
                })
            };
        return fs(e) ? i(e) : i(String(e).split(n)), t
    },
    xw = () => {},
    Aw = (e, n) => e != null && Number.isFinite(e = +e) ? e : n,
    Ul = "abcdefghijklmnopqrstuvwxyz",
    Wd = "0123456789",
    bv = {
        DIGIT: Wd,
        ALPHA: Ul,
        ALPHA_DIGIT: Ul + Ul.toUpperCase() + Wd
    },
    Mw = (e = 16, n = bv.ALPHA_DIGIT) => {
        let t = "";
        const {
            length: i
        } = n;
        for (; e--;) t += n[Math.random() * i | 0];
        return t
    };

function Iw(e) {
    return !!(e && Yn(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const Pw = e => {
        const n = new Array(10),
            t = (i, r) => {
                if (Dl(i)) {
                    if (n.indexOf(i) >= 0) return;
                    if (!("toJSON" in i)) {
                        n[r] = i;
                        const s = fs(i) ? [] : {};
                        return Do(i, (o, a) => {
                            const l = t(o, r + 1);
                            !so(l) && (s[a] = l)
                        }), n[r] = void 0, s
                    }
                }
                return i
            };
        return t(e, 0)
    },
    Nw = si("AsyncFunction"),
    Rw = e => e && (Dl(e) || Yn(e)) && Yn(e.then) && Yn(e.catch),
    U = {
        isArray: fs,
        isArrayBuffer: hv,
        isBuffer: JS,
        isFormData: ow,
        isArrayBufferView: QS,
        isString: qS,
        isNumber: pv,
        isBoolean: ew,
        isObject: Dl,
        isPlainObject: fa,
        isReadableStream: lw,
        isRequest: uw,
        isResponse: cw,
        isHeaders: fw,
        isUndefined: so,
        isDate: tw,
        isFile: nw,
        isBlob: iw,
        isRegExp: Tw,
        isFunction: Yn,
        isStream: sw,
        isURLSearchParams: aw,
        isTypedArray: bw,
        isFileList: rw,
        forEach: Do,
        merge: ju,
        extend: hw,
        trim: dw,
        stripBOM: pw,
        inherits: mw,
        toFlatObject: gw,
        kindOf: Sl,
        kindOfTest: si,
        endsWith: vw,
        toArray: yw,
        forEachEntry: Ew,
        matchAll: Sw,
        isHTMLForm: ww,
        hasOwnProperty: Ud,
        hasOwnProp: Ud,
        reduceDescriptors: yv,
        freezeMethods: Cw,
        toObjectSet: Ow,
        toCamelCase: Dw,
        noop: xw,
        toFiniteNumber: Aw,
        findKey: mv,
        global: gv,
        isContextDefined: vv,
        ALPHABET: bv,
        generateString: Mw,
        isSpecCompliantForm: Iw,
        toJSONObject: Pw,
        isAsyncFn: Nw,
        isThenable: Rw
    };

function Le(e, n, t, i, r) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), t && (this.config = t), i && (this.request = i), r && (this.response = r)
}
U.inherits(Le, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: U.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const Ev = Le.prototype,
    Sv = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    Sv[e] = {
        value: e
    }
});
Object.defineProperties(Le, Sv);
Object.defineProperty(Ev, "isAxiosError", {
    value: !0
});
Le.from = (e, n, t, i, r, s) => {
    const o = Object.create(Ev);
    return U.toFlatObject(e, o, function(l) {
        return l !== Error.prototype
    }, a => a !== "isAxiosError"), Le.call(o, e.message, n, t, i, r), o.cause = e, o.name = e.name, s && Object.assign(o, s), o
};
const _w = null;

function Vu(e) {
    return U.isPlainObject(e) || U.isArray(e)
}

function wv(e) {
    return U.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function Yd(e, n, t) {
    return e ? e.concat(n).map(function(r, s) {
        return r = wv(r), !t && s ? "[" + r + "]" : r
    }).join(t ? "." : "") : n
}

function Fw(e) {
    return U.isArray(e) && !e.some(Vu)
}
const Lw = U.toFlatObject(U, {}, null, function(n) {
    return /^is[A-Z]/.test(n)
});

function Tl(e, n, t) {
    if (!U.isObject(e)) throw new TypeError("target must be an object");
    n = n || new FormData, t = U.toFlatObject(t, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(m, y) {
        return !U.isUndefined(y[m])
    });
    const i = t.metaTokens,
        r = t.visitor || c,
        s = t.dots,
        o = t.indexes,
        l = (t.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(n);
    if (!U.isFunction(r)) throw new TypeError("visitor must be a function");

    function u(p) {
        if (p === null) return "";
        if (U.isDate(p)) return p.toISOString();
        if (!l && U.isBlob(p)) throw new Le("Blob is not supported. Use a Buffer instead.");
        return U.isArrayBuffer(p) || U.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p
    }

    function c(p, m, y) {
        let D = p;
        if (p && !y && typeof p == "object") {
            if (U.endsWith(m, "{}")) m = i ? m : m.slice(0, -2), p = JSON.stringify(p);
            else if (U.isArray(p) && Fw(p) || (U.isFileList(p) || U.endsWith(m, "[]")) && (D = U.toArray(p))) return m = wv(m), D.forEach(function(b, w) {
                !(U.isUndefined(b) || b === null) && n.append(o === !0 ? Yd([m], w, s) : o === null ? m : m + "[]", u(b))
            }), !1
        }
        return Vu(p) ? !0 : (n.append(Yd(y, m, s), u(p)), !1)
    }
    const f = [],
        d = Object.assign(Lw, {
            defaultVisitor: c,
            convertValue: u,
            isVisitable: Vu
        });

    function h(p, m) {
        if (!U.isUndefined(p)) {
            if (f.indexOf(p) !== -1) throw Error("Circular reference detected in " + m.join("."));
            f.push(p), U.forEach(p, function(D, S) {
                (!(U.isUndefined(D) || D === null) && r.call(n, D, U.isString(S) ? S.trim() : S, m, d)) === !0 && h(D, m ? m.concat(S) : [S])
            }), f.pop()
        }
    }
    if (!U.isObject(e)) throw new TypeError("data must be an object");
    return h(e), n
}

function Kd(e) {
    const n = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(i) {
        return n[i]
    })
}

function bf(e, n) {
    this._pairs = [], e && Tl(e, this, n)
}
const Dv = bf.prototype;
Dv.append = function(n, t) {
    this._pairs.push([n, t])
};
Dv.toString = function(n) {
    const t = n ? function(i) {
        return n.call(this, i, Kd)
    } : Kd;
    return this._pairs.map(function(r) {
        return t(r[0]) + "=" + t(r[1])
    }, "").join("&")
};

function kw(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function Tv(e, n, t) {
    if (!n) return e;
    const i = t && t.encode || kw,
        r = t && t.serialize;
    let s;
    if (r ? s = r(n, t) : s = U.isURLSearchParams(n) ? n.toString() : new bf(n, t).toString(i), s) {
        const o = e.indexOf("#");
        o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s
    }
    return e
}
class $w {
    constructor() {
        this.handlers = []
    }
    use(n, t, i) {
        return this.handlers.push({
            fulfilled: n,
            rejected: t,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }), this.handlers.length - 1
    }
    eject(n) {
        this.handlers[n] && (this.handlers[n] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(n) {
        U.forEach(this.handlers, function(i) {
            i !== null && n(i)
        })
    }
}
const zd = $w,
    Cv = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    jw = typeof URLSearchParams < "u" ? URLSearchParams : bf,
    Vw = typeof FormData < "u" ? FormData : null,
    Hw = typeof Blob < "u" ? Blob : null,
    Bw = {
        isBrowser: !0,
        classes: {
            URLSearchParams: jw,
            FormData: Vw,
            Blob: Hw
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    Ef = typeof window < "u" && typeof document < "u",
    Uw = (e => Ef && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product),
    Ww = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
    Yw = Ef && window.location.href || "http://localhost",
    Kw = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: Ef,
        hasStandardBrowserEnv: Uw,
        hasStandardBrowserWebWorkerEnv: Ww,
        origin: Yw
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ti = {
        ...Kw,
        ...Bw
    };

function zw(e, n) {
    return Tl(e, new ti.classes.URLSearchParams, Object.assign({
        visitor: function(t, i, r, s) {
            return ti.isNode && U.isBuffer(t) ? (this.append(i, t.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments)
        }
    }, n))
}

function Gw(e) {
    return U.matchAll(/\w+|\[(\w*)]/g, e).map(n => n[0] === "[]" ? "" : n[1] || n[0])
}

function Zw(e) {
    const n = {},
        t = Object.keys(e);
    let i;
    const r = t.length;
    let s;
    for (i = 0; i < r; i++) s = t[i], n[s] = e[s];
    return n
}

function Ov(e) {
    function n(t, i, r, s) {
        let o = t[s++];
        if (o === "__proto__") return !0;
        const a = Number.isFinite(+o),
            l = s >= t.length;
        return o = !o && U.isArray(r) ? r.length : o, l ? (U.hasOwnProp(r, o) ? r[o] = [r[o], i] : r[o] = i, !a) : ((!r[o] || !U.isObject(r[o])) && (r[o] = []), n(t, i, r[o], s) && U.isArray(r[o]) && (r[o] = Zw(r[o])), !a)
    }
    if (U.isFormData(e) && U.isFunction(e.entries)) {
        const t = {};
        return U.forEachEntry(e, (i, r) => {
            n(Gw(i), r, t, 0)
        }), t
    }
    return null
}

function Xw(e, n, t) {
    if (U.isString(e)) try {
        return (n || JSON.parse)(e), U.trim(e)
    } catch (i) {
        if (i.name !== "SyntaxError") throw i
    }
    return (t || JSON.stringify)(e)
}
const Sf = {
    transitional: Cv,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(n, t) {
        const i = t.getContentType() || "",
            r = i.indexOf("application/json") > -1,
            s = U.isObject(n);
        if (s && U.isHTMLForm(n) && (n = new FormData(n)), U.isFormData(n)) return r ? JSON.stringify(Ov(n)) : n;
        if (U.isArrayBuffer(n) || U.isBuffer(n) || U.isStream(n) || U.isFile(n) || U.isBlob(n) || U.isReadableStream(n)) return n;
        if (U.isArrayBufferView(n)) return n.buffer;
        if (U.isURLSearchParams(n)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
        let a;
        if (s) {
            if (i.indexOf("application/x-www-form-urlencoded") > -1) return zw(n, this.formSerializer).toString();
            if ((a = U.isFileList(n)) || i.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return Tl(a ? {
                    "files[]": n
                } : n, l && new l, this.formSerializer)
            }
        }
        return s || r ? (t.setContentType("application/json", !1), Xw(n)) : n
    }],
    transformResponse: [function(n) {
        const t = this.transitional || Sf.transitional,
            i = t && t.forcedJSONParsing,
            r = this.responseType === "json";
        if (U.isResponse(n) || U.isReadableStream(n)) return n;
        if (n && U.isString(n) && (i && !this.responseType || r)) {
            const o = !(t && t.silentJSONParsing) && r;
            try {
                return JSON.parse(n)
            } catch (a) {
                if (o) throw a.name === "SyntaxError" ? Le.from(a, Le.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return n
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: ti.classes.FormData,
        Blob: ti.classes.Blob
    },
    validateStatus: function(n) {
        return n >= 200 && n < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
U.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    Sf.headers[e] = {}
});
const wf = Sf,
    Jw = U.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    Qw = e => {
        const n = {};
        let t, i, r;
        return e && e.split(`
`).forEach(function(o) {
            r = o.indexOf(":"), t = o.substring(0, r).trim().toLowerCase(), i = o.substring(r + 1).trim(), !(!t || n[t] && Jw[t]) && (t === "set-cookie" ? n[t] ? n[t].push(i) : n[t] = [i] : n[t] = n[t] ? n[t] + ", " + i : i)
        }), n
    },
    Gd = Symbol("internals");

function gs(e) {
    return e && String(e).trim().toLowerCase()
}

function da(e) {
    return e === !1 || e == null ? e : U.isArray(e) ? e.map(da) : String(e)
}

function qw(e) {
    const n = Object.create(null),
        t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = t.exec(e);) n[i[1]] = i[2];
    return n
}
const eD = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function Wl(e, n, t, i, r) {
    if (U.isFunction(i)) return i.call(this, n, t);
    if (r && (n = t), !!U.isString(n)) {
        if (U.isString(i)) return n.indexOf(i) !== -1;
        if (U.isRegExp(i)) return i.test(n)
    }
}

function tD(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, t, i) => t.toUpperCase() + i)
}

function nD(e, n) {
    const t = U.toCamelCase(" " + n);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(e, i + t, {
            value: function(r, s, o) {
                return this[i].call(this, n, r, s, o)
            },
            configurable: !0
        })
    })
}
class Cl {
    constructor(n) {
        n && this.set(n)
    }
    set(n, t, i) {
        const r = this;

        function s(a, l, u) {
            const c = gs(l);
            if (!c) throw new Error("header name must be a non-empty string");
            const f = U.findKey(r, c);
            (!f || r[f] === void 0 || u === !0 || u === void 0 && r[f] !== !1) && (r[f || l] = da(a))
        }
        const o = (a, l) => U.forEach(a, (u, c) => s(u, c, l));
        if (U.isPlainObject(n) || n instanceof this.constructor) o(n, t);
        else if (U.isString(n) && (n = n.trim()) && !eD(n)) o(Qw(n), t);
        else if (U.isHeaders(n))
            for (const [a, l] of n.entries()) s(l, a, i);
        else n != null && s(t, n, i);
        return this
    }
    get(n, t) {
        if (n = gs(n), n) {
            const i = U.findKey(this, n);
            if (i) {
                const r = this[i];
                if (!t) return r;
                if (t === !0) return qw(r);
                if (U.isFunction(t)) return t.call(this, r, i);
                if (U.isRegExp(t)) return t.exec(r);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(n, t) {
        if (n = gs(n), n) {
            const i = U.findKey(this, n);
            return !!(i && this[i] !== void 0 && (!t || Wl(this, this[i], i, t)))
        }
        return !1
    }
    delete(n, t) {
        const i = this;
        let r = !1;

        function s(o) {
            if (o = gs(o), o) {
                const a = U.findKey(i, o);
                a && (!t || Wl(i, i[a], a, t)) && (delete i[a], r = !0)
            }
        }
        return U.isArray(n) ? n.forEach(s) : s(n), r
    }
    clear(n) {
        const t = Object.keys(this);
        let i = t.length,
            r = !1;
        for (; i--;) {
            const s = t[i];
            (!n || Wl(this, this[s], s, n, !0)) && (delete this[s], r = !0)
        }
        return r
    }
    normalize(n) {
        const t = this,
            i = {};
        return U.forEach(this, (r, s) => {
            const o = U.findKey(i, s);
            if (o) {
                t[o] = da(r), delete t[s];
                return
            }
            const a = n ? tD(s) : String(s).trim();
            a !== s && delete t[s], t[a] = da(r), i[a] = !0
        }), this
    }
    concat(...n) {
        return this.constructor.concat(this, ...n)
    }
    toJSON(n) {
        const t = Object.create(null);
        return U.forEach(this, (i, r) => {
            i != null && i !== !1 && (t[r] = n && U.isArray(i) ? i.join(", ") : i)
        }), t
    } [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([n, t]) => n + ": " + t).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(n) {
        return n instanceof this ? n : new this(n)
    }
    static concat(n, ...t) {
        const i = new this(n);
        return t.forEach(r => i.set(r)), i
    }
    static accessor(n) {
        const i = (this[Gd] = this[Gd] = {
                accessors: {}
            }).accessors,
            r = this.prototype;

        function s(o) {
            const a = gs(o);
            i[a] || (nD(r, o), i[a] = !0)
        }
        return U.isArray(n) ? n.forEach(s) : s(n), this
    }
}
Cl.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.reduceDescriptors(Cl.prototype, ({
    value: e
}, n) => {
    let t = n[0].toUpperCase() + n.slice(1);
    return {
        get: () => e,
        set(i) {
            this[t] = i
        }
    }
});
U.freezeMethods(Cl);
const ni = Cl;

function Yl(e, n) {
    const t = this || wf,
        i = n || t,
        r = ni.from(i.headers);
    let s = i.data;
    return U.forEach(e, function(a) {
        s = a.call(t, s, r.normalize(), n ? n.status : void 0)
    }), r.normalize(), s
}

function xv(e) {
    return !!(e && e.__CANCEL__)
}

function ds(e, n, t) {
    Le.call(this, e ?? "canceled", Le.ERR_CANCELED, n, t), this.name = "CanceledError"
}
U.inherits(ds, Le, {
    __CANCEL__: !0
});

function Av(e, n, t) {
    const i = t.config.validateStatus;
    !t.status || !i || i(t.status) ? e(t) : n(new Le("Request failed with status code " + t.status, [Le.ERR_BAD_REQUEST, Le.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4], t.config, t.request, t))
}

function iD(e) {
    const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return n && n[1] || ""
}

function rD(e, n) {
    e = e || 10;
    const t = new Array(e),
        i = new Array(e);
    let r = 0,
        s = 0,
        o;
    return n = n !== void 0 ? n : 1e3,
        function(l) {
            const u = Date.now(),
                c = i[s];
            o || (o = u), t[r] = l, i[r] = u;
            let f = s,
                d = 0;
            for (; f !== r;) d += t[f++], f = f % e;
            if (r = (r + 1) % e, r === s && (s = (s + 1) % e), u - o < n) return;
            const h = c && u - c;
            return h ? Math.round(d * 1e3 / h) : void 0
        }
}

function sD(e, n) {
    let t = 0;
    const i = 1e3 / n;
    let r = null;
    return function() {
        const o = this === !0,
            a = Date.now();
        if (o || a - t > i) return r && (clearTimeout(r), r = null), t = a, e.apply(null, arguments);
        r || (r = setTimeout(() => (r = null, t = Date.now(), e.apply(null, arguments)), i - (a - t)))
    }
}
const Ua = (e, n, t = 3) => {
        let i = 0;
        const r = rD(50, 250);
        return sD(s => {
            const o = s.loaded,
                a = s.lengthComputable ? s.total : void 0,
                l = o - i,
                u = r(l),
                c = o <= a;
            i = o;
            const f = {
                loaded: o,
                total: a,
                progress: a ? o / a : void 0,
                bytes: l,
                rate: u || void 0,
                estimated: u && a && c ? (a - o) / u : void 0,
                event: s,
                lengthComputable: a != null
            };
            f[n ? "download" : "upload"] = !0, e(f)
        }, t)
    },
    oD = ti.hasStandardBrowserEnv ? function() {
        const n = /(msie|trident)/i.test(navigator.userAgent),
            t = document.createElement("a");
        let i;

        function r(s) {
            let o = s;
            return n && (t.setAttribute("href", o), o = t.href), t.setAttribute("href", o), {
                href: t.href,
                protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                host: t.host,
                search: t.search ? t.search.replace(/^\?/, "") : "",
                hash: t.hash ? t.hash.replace(/^#/, "") : "",
                hostname: t.hostname,
                port: t.port,
                pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
            }
        }
        return i = r(window.location.href),
            function(o) {
                const a = U.isString(o) ? r(o) : o;
                return a.protocol === i.protocol && a.host === i.host
            }
    }() : function() {
        return function() {
            return !0
        }
    }(),
    aD = ti.hasStandardBrowserEnv ? {
        write(e, n, t, i, r, s) {
            const o = [e + "=" + encodeURIComponent(n)];
            U.isNumber(t) && o.push("expires=" + new Date(t).toGMTString()), U.isString(i) && o.push("path=" + i), U.isString(r) && o.push("domain=" + r), s === !0 && o.push("secure"), document.cookie = o.join("; ")
        },
        read(e) {
            const n = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return n ? decodeURIComponent(n[3]) : null
        },
        remove(e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write() {},
        read() {
            return null
        },
        remove() {}
    };

function lD(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function uD(e, n) {
    return n ? e.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : e
}

function Mv(e, n) {
    return e && !lD(n) ? uD(e, n) : n
}
const Zd = e => e instanceof ni ? {
    ...e
} : e;

function Ir(e, n) {
    n = n || {};
    const t = {};

    function i(u, c, f) {
        return U.isPlainObject(u) && U.isPlainObject(c) ? U.merge.call({
            caseless: f
        }, u, c) : U.isPlainObject(c) ? U.merge({}, c) : U.isArray(c) ? c.slice() : c
    }

    function r(u, c, f) {
        if (U.isUndefined(c)) {
            if (!U.isUndefined(u)) return i(void 0, u, f)
        } else return i(u, c, f)
    }

    function s(u, c) {
        if (!U.isUndefined(c)) return i(void 0, c)
    }

    function o(u, c) {
        if (U.isUndefined(c)) {
            if (!U.isUndefined(u)) return i(void 0, u)
        } else return i(void 0, c)
    }

    function a(u, c, f) {
        if (f in n) return i(u, c);
        if (f in e) return i(void 0, u)
    }
    const l = {
        url: s,
        method: s,
        data: s,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        withXSRFToken: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: a,
        headers: (u, c) => r(Zd(u), Zd(c), !0)
    };
    return U.forEach(Object.keys(Object.assign({}, e, n)), function(c) {
        const f = l[c] || r,
            d = f(e[c], n[c], c);
        U.isUndefined(d) && f !== a || (t[c] = d)
    }), t
}
const Iv = e => {
        const n = Ir({}, e);
        let {
            data: t,
            withXSRFToken: i,
            xsrfHeaderName: r,
            xsrfCookieName: s,
            headers: o,
            auth: a
        } = n;
        n.headers = o = ni.from(o), n.url = Tv(Mv(n.baseURL, n.url), e.params, e.paramsSerializer), a && o.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")));
        let l;
        if (U.isFormData(t)) {
            if (ti.hasStandardBrowserEnv || ti.hasStandardBrowserWebWorkerEnv) o.setContentType(void 0);
            else if ((l = o.getContentType()) !== !1) {
                const [u, ...c] = l ? l.split(";").map(f => f.trim()).filter(Boolean) : [];
                o.setContentType([u || "multipart/form-data", ...c].join("; "))
            }
        }
        if (ti.hasStandardBrowserEnv && (i && U.isFunction(i) && (i = i(n)), i || i !== !1 && oD(n.url))) {
            const u = r && s && aD.read(s);
            u && o.set(r, u)
        }
        return n
    },
    cD = typeof XMLHttpRequest < "u",
    fD = cD && function(e) {
        return new Promise(function(t, i) {
            const r = Iv(e);
            let s = r.data;
            const o = ni.from(r.headers).normalize();
            let {
                responseType: a
            } = r, l;

            function u() {
                r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l)
            }
            let c = new XMLHttpRequest;
            c.open(r.method.toUpperCase(), r.url, !0), c.timeout = r.timeout;

            function f() {
                if (!c) return;
                const h = ni.from("getAllResponseHeaders" in c && c.getAllResponseHeaders()),
                    m = {
                        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
                        status: c.status,
                        statusText: c.statusText,
                        headers: h,
                        config: e,
                        request: c
                    };
                Av(function(D) {
                    t(D), u()
                }, function(D) {
                    i(D), u()
                }, m), c = null
            }
            "onloadend" in c ? c.onloadend = f : c.onreadystatechange = function() {
                !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(f)
            }, c.onabort = function() {
                c && (i(new Le("Request aborted", Le.ECONNABORTED, r, c)), c = null)
            }, c.onerror = function() {
                i(new Le("Network Error", Le.ERR_NETWORK, r, c)), c = null
            }, c.ontimeout = function() {
                let p = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
                const m = r.transitional || Cv;
                r.timeoutErrorMessage && (p = r.timeoutErrorMessage), i(new Le(p, m.clarifyTimeoutError ? Le.ETIMEDOUT : Le.ECONNABORTED, r, c)), c = null
            }, s === void 0 && o.setContentType(null), "setRequestHeader" in c && U.forEach(o.toJSON(), function(p, m) {
                c.setRequestHeader(m, p)
            }), U.isUndefined(r.withCredentials) || (c.withCredentials = !!r.withCredentials), a && a !== "json" && (c.responseType = r.responseType), typeof r.onDownloadProgress == "function" && c.addEventListener("progress", Ua(r.onDownloadProgress, !0)), typeof r.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Ua(r.onUploadProgress)), (r.cancelToken || r.signal) && (l = h => {
                c && (i(!h || h.type ? new ds(null, e, c) : h), c.abort(), c = null)
            }, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
            const d = iD(r.url);
            if (d && ti.protocols.indexOf(d) === -1) {
                i(new Le("Unsupported protocol " + d + ":", Le.ERR_BAD_REQUEST, e));
                return
            }
            c.send(s || null)
        })
    },
    dD = (e, n) => {
        let t = new AbortController,
            i;
        const r = function(l) {
            if (!i) {
                i = !0, o();
                const u = l instanceof Error ? l : this.reason;
                t.abort(u instanceof Le ? u : new ds(u instanceof Error ? u.message : u))
            }
        };
        let s = n && setTimeout(() => {
            r(new Le(`timeout ${n} of ms exceeded`, Le.ETIMEDOUT))
        }, n);
        const o = () => {
            e && (s && clearTimeout(s), s = null, e.forEach(l => {
                l && (l.removeEventListener ? l.removeEventListener("abort", r) : l.unsubscribe(r))
            }), e = null)
        };
        e.forEach(l => l && l.addEventListener && l.addEventListener("abort", r));
        const {
            signal: a
        } = t;
        return a.unsubscribe = o, [a, () => {
            s && clearTimeout(s), s = null
        }]
    },
    hD = dD,
    pD = function*(e, n) {
        let t = e.byteLength;
        if (!n || t < n) {
            yield e;
            return
        }
        let i = 0,
            r;
        for (; i < t;) r = i + n, yield e.slice(i, r), i = r
    },
    mD = async function*(e, n, t) {
        for await (const i of e) yield* pD(ArrayBuffer.isView(i) ? i : await t(String(i)), n)
    }, Xd = (e, n, t, i, r) => {
        const s = mD(e, n, r);
        let o = 0;
        return new ReadableStream({
            type: "bytes",
            async pull(a) {
                const {
                    done: l,
                    value: u
                } = await s.next();
                if (l) {
                    a.close(), i();
                    return
                }
                let c = u.byteLength;
                t && t(o += c), a.enqueue(new Uint8Array(u))
            },
            cancel(a) {
                return i(a), s.return()
            }
        }, {
            highWaterMark: 2
        })
    }, Jd = (e, n) => {
        const t = e != null;
        return i => setTimeout(() => n({
            lengthComputable: t,
            total: e,
            loaded: i
        }))
    }, Ol = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Pv = Ol && typeof ReadableStream == "function", Hu = Ol && (typeof TextEncoder == "function" ? (e => n => e.encode(n))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer())), gD = Pv && (() => {
        let e = !1;
        const n = new Request(ti.origin, {
            body: new ReadableStream,
            method: "POST",
            get duplex() {
                return e = !0, "half"
            }
        }).headers.has("Content-Type");
        return e && !n
    })(), Qd = 64 * 1024, Bu = Pv && !!(() => {
        try {
            return U.isReadableStream(new Response("").body)
        } catch {}
    })(), Wa = {
        stream: Bu && (e => e.body)
    };
Ol && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(n => {
        !Wa[n] && (Wa[n] = U.isFunction(e[n]) ? t => t[n]() : (t, i) => {
            throw new Le(`Response type '${n}' is not supported`, Le.ERR_NOT_SUPPORT, i)
        })
    })
})(new Response);
const vD = async e => {
    if (e == null) return 0;
    if (U.isBlob(e)) return e.size;
    if (U.isSpecCompliantForm(e)) return (await new Request(e).arrayBuffer()).byteLength;
    if (U.isArrayBufferView(e)) return e.byteLength;
    if (U.isURLSearchParams(e) && (e = e + ""), U.isString(e)) return (await Hu(e)).byteLength
}, yD = async (e, n) => {
    const t = U.toFiniteNumber(e.getContentLength());
    return t ?? vD(n)
}, bD = Ol && (async e => {
    let {
        url: n,
        method: t,
        data: i,
        signal: r,
        cancelToken: s,
        timeout: o,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: u,
        headers: c,
        withCredentials: f = "same-origin",
        fetchOptions: d
    } = Iv(e);
    u = u ? (u + "").toLowerCase() : "text";
    let [h, p] = r || s || o ? hD([r, s], o) : [], m, y;
    const D = () => {
        !m && setTimeout(() => {
            h && h.unsubscribe()
        }), m = !0
    };
    let S;
    try {
        if (l && gD && t !== "get" && t !== "head" && (S = await yD(c, i)) !== 0) {
            let O = new Request(n, {
                    method: "POST",
                    body: i,
                    duplex: "half"
                }),
                F;
            U.isFormData(i) && (F = O.headers.get("content-type")) && c.setContentType(F), O.body && (i = Xd(O.body, Qd, Jd(S, Ua(l)), null, Hu))
        }
        U.isString(f) || (f = f ? "cors" : "omit"), y = new Request(n, {
            ...d,
            signal: h,
            method: t.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: i,
            duplex: "half",
            withCredentials: f
        });
        let b = await fetch(y);
        const w = Bu && (u === "stream" || u === "response");
        if (Bu && (a || w)) {
            const O = {};
            ["status", "statusText", "headers"].forEach(L => {
                O[L] = b[L]
            });
            const F = U.toFiniteNumber(b.headers.get("content-length"));
            b = new Response(Xd(b.body, Qd, a && Jd(F, Ua(a, !0)), w && D, Hu), O)
        }
        u = u || "text";
        let x = await Wa[U.findKey(Wa, u) || "text"](b, e);
        return !w && D(), p && p(), await new Promise((O, F) => {
            Av(O, F, {
                data: x,
                headers: ni.from(b.headers),
                status: b.status,
                statusText: b.statusText,
                config: e,
                request: y
            })
        })
    } catch (b) {
        throw D(), b && b.name === "TypeError" && /fetch/i.test(b.message) ? Object.assign(new Le("Network Error", Le.ERR_NETWORK, e, y), {
            cause: b.cause || b
        }) : Le.from(b, b && b.code, e, y)
    }
}), Uu = {
    http: _w,
    xhr: fD,
    fetch: bD
};
U.forEach(Uu, (e, n) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: n
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: n
        })
    }
});
const qd = e => `- ${e}`,
    ED = e => U.isFunction(e) || e === null || e === !1,
    Nv = {
        getAdapter: e => {
            e = U.isArray(e) ? e : [e];
            const {
                length: n
            } = e;
            let t, i;
            const r = {};
            for (let s = 0; s < n; s++) {
                t = e[s];
                let o;
                if (i = t, !ED(t) && (i = Uu[(o = String(t)).toLowerCase()], i === void 0)) throw new Le(`Unknown adapter '${o}'`);
                if (i) break;
                r[o || "#" + s] = i
            }
            if (!i) {
                const s = Object.entries(r).map(([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
                let o = n ? s.length > 1 ? `since :
` + s.map(qd).join(`
`) : " " + qd(s[0]) : "as no adapter specified";
                throw new Le("There is no suitable adapter to dispatch the request " + o, "ERR_NOT_SUPPORT")
            }
            return i
        },
        adapters: Uu
    };

function Kl(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new ds(null, e)
}

function eh(e) {
    return Kl(e), e.headers = ni.from(e.headers), e.data = Yl.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Nv.getAdapter(e.adapter || wf.adapter)(e).then(function(i) {
        return Kl(e), i.data = Yl.call(e, e.transformResponse, i), i.headers = ni.from(i.headers), i
    }, function(i) {
        return xv(i) || (Kl(e), i && i.response && (i.response.data = Yl.call(e, e.transformResponse, i.response), i.response.headers = ni.from(i.response.headers))), Promise.reject(i)
    })
}
const Rv = "1.7.2",
    Df = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
    Df[e] = function(i) {
        return typeof i === e || "a" + (n < 1 ? "n " : " ") + e
    }
});
const th = {};
Df.transitional = function(n, t, i) {
    function r(s, o) {
        return "[Axios v" + Rv + "] Transitional option '" + s + "'" + o + (i ? ". " + i : "")
    }
    return (s, o, a) => {
        if (n === !1) throw new Le(r(o, " has been removed" + (t ? " in " + t : "")), Le.ERR_DEPRECATED);
        return t && !th[o] && (th[o] = !0, console.warn(r(o, " has been deprecated since v" + t + " and will be removed in the near future"))), n ? n(s, o, a) : !0
    }
};

function SD(e, n, t) {
    if (typeof e != "object") throw new Le("options must be an object", Le.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(e);
    let r = i.length;
    for (; r-- > 0;) {
        const s = i[r],
            o = n[s];
        if (o) {
            const a = e[s],
                l = a === void 0 || o(a, s, e);
            if (l !== !0) throw new Le("option " + s + " must be " + l, Le.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (t !== !0) throw new Le("Unknown option " + s, Le.ERR_BAD_OPTION)
    }
}
const Wu = {
        assertOptions: SD,
        validators: Df
    },
    Fi = Wu.validators;
let Ya = class {
    constructor(n) {
        this.defaults = n, this.interceptors = {
            request: new zd,
            response: new zd
        }
    }
    async request(n, t) {
        try {
            return await this._request(n, t)
        } catch (i) {
            if (i instanceof Error) {
                let r;
                Error.captureStackTrace ? Error.captureStackTrace(r = {}) : r = new Error;
                const s = r.stack ? r.stack.replace(/^.+\n/, "") : "";
                try {
                    i.stack ? s && !String(i.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + s) : i.stack = s
                } catch {}
            }
            throw i
        }
    }
    _request(n, t) {
        typeof n == "string" ? (t = t || {}, t.url = n) : t = n || {}, t = Ir(this.defaults, t);
        const {
            transitional: i,
            paramsSerializer: r,
            headers: s
        } = t;
        i !== void 0 && Wu.assertOptions(i, {
            silentJSONParsing: Fi.transitional(Fi.boolean),
            forcedJSONParsing: Fi.transitional(Fi.boolean),
            clarifyTimeoutError: Fi.transitional(Fi.boolean)
        }, !1), r != null && (U.isFunction(r) ? t.paramsSerializer = {
            serialize: r
        } : Wu.assertOptions(r, {
            encode: Fi.function,
            serialize: Fi.function
        }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
        let o = s && U.merge(s.common, s[t.method]);
        s && U.forEach(["delete", "get", "head", "post", "put", "patch", "common"], p => {
            delete s[p]
        }), t.headers = ni.concat(o, s);
        const a = [];
        let l = !0;
        this.interceptors.request.forEach(function(m) {
            typeof m.runWhen == "function" && m.runWhen(t) === !1 || (l = l && m.synchronous, a.unshift(m.fulfilled, m.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function(m) {
            u.push(m.fulfilled, m.rejected)
        });
        let c, f = 0,
            d;
        if (!l) {
            const p = [eh.bind(this), void 0];
            for (p.unshift.apply(p, a), p.push.apply(p, u), d = p.length, c = Promise.resolve(t); f < d;) c = c.then(p[f++], p[f++]);
            return c
        }
        d = a.length;
        let h = t;
        for (f = 0; f < d;) {
            const p = a[f++],
                m = a[f++];
            try {
                h = p(h)
            } catch (y) {
                m.call(this, y);
                break
            }
        }
        try {
            c = eh.call(this, h)
        } catch (p) {
            return Promise.reject(p)
        }
        for (f = 0, d = u.length; f < d;) c = c.then(u[f++], u[f++]);
        return c
    }
    getUri(n) {
        n = Ir(this.defaults, n);
        const t = Mv(n.baseURL, n.url);
        return Tv(t, n.params, n.paramsSerializer)
    }
};
U.forEach(["delete", "get", "head", "options"], function(n) {
    Ya.prototype[n] = function(t, i) {
        return this.request(Ir(i || {}, {
            method: n,
            url: t,
            data: (i || {}).data
        }))
    }
});
U.forEach(["post", "put", "patch"], function(n) {
    function t(i) {
        return function(s, o, a) {
            return this.request(Ir(a || {}, {
                method: n,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: s,
                data: o
            }))
        }
    }
    Ya.prototype[n] = t(), Ya.prototype[n + "Form"] = t(!0)
});
const ha = Ya;
class Tf {
    constructor(n) {
        if (typeof n != "function") throw new TypeError("executor must be a function.");
        let t;
        this.promise = new Promise(function(s) {
            t = s
        });
        const i = this;
        this.promise.then(r => {
            if (!i._listeners) return;
            let s = i._listeners.length;
            for (; s-- > 0;) i._listeners[s](r);
            i._listeners = null
        }), this.promise.then = r => {
            let s;
            const o = new Promise(a => {
                i.subscribe(a), s = a
            }).then(r);
            return o.cancel = function() {
                i.unsubscribe(s)
            }, o
        }, n(function(s, o, a) {
            i.reason || (i.reason = new ds(s, o, a), t(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(n) {
        if (this.reason) {
            n(this.reason);
            return
        }
        this._listeners ? this._listeners.push(n) : this._listeners = [n]
    }
    unsubscribe(n) {
        if (!this._listeners) return;
        const t = this._listeners.indexOf(n);
        t !== -1 && this._listeners.splice(t, 1)
    }
    static source() {
        let n;
        return {
            token: new Tf(function(r) {
                n = r
            }),
            cancel: n
        }
    }
}
const wD = Tf;

function DD(e) {
    return function(t) {
        return e.apply(null, t)
    }
}

function TD(e) {
    return U.isObject(e) && e.isAxiosError === !0
}
const Yu = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Yu).forEach(([e, n]) => {
    Yu[n] = e
});
const CD = Yu;

function _v(e) {
    const n = new ha(e),
        t = dv(ha.prototype.request, n);
    return U.extend(t, ha.prototype, n, {
        allOwnKeys: !0
    }), U.extend(t, n, null, {
        allOwnKeys: !0
    }), t.create = function(r) {
        return _v(Ir(e, r))
    }, t
}
const jt = _v(wf);
jt.Axios = ha;
jt.CanceledError = ds;
jt.CancelToken = wD;
jt.isCancel = xv;
jt.VERSION = Rv;
jt.toFormData = Tl;
jt.AxiosError = Le;
jt.Cancel = jt.CanceledError;
jt.all = function(n) {
    return Promise.all(n)
};
jt.spread = DD;
jt.isAxiosError = TD;
jt.mergeConfig = Ir;
jt.AxiosHeaders = ni;
jt.formToJSON = e => Ov(U.isHTMLForm(e) ? new FormData(e) : e);
jt.getAdapter = Nv.getAdapter;
jt.HttpStatusCode = CD;
jt.default = jt;
const Fv = jt;
window.axios = Fv;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const OD = {
    install(e) {
        e.config.globalProperties.$axios = Fv
    }
};

function xD(e) {
    return {
        all: e = e || new Map,
        on: function(n, t) {
            var i = e.get(n);
            i ? i.push(t) : e.set(n, [t])
        },
        off: function(n, t) {
            var i = e.get(n);
            i && (t ? i.splice(i.indexOf(t) >>> 0, 1) : e.set(n, []))
        },
        emit: function(n, t) {
            var i = e.get(n);
            i && i.slice().map(function(r) {
                r(t)
            }), (i = e.get("*")) && i.slice().map(function(r) {
                r(n, t)
            })
        }
    }
}
const Lv = xD();
window.emitter = Lv;
const AD = {
    install: (e, n) => {
        e.config.globalProperties.$emitter = Lv
    }
};
var zl = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
    Qr = {
        _disable: [],
        allowInput: !1,
        allowInvalidPreload: !1,
        altFormat: "F j, Y",
        altInput: !1,
        altInputClass: "form-control input",
        animate: typeof window == "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        autoFillDefaultTime: !0,
        clickOpens: !0,
        closeOnSelect: !0,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: !1,
        enableSeconds: !1,
        enableTime: !1,
        errorHandler: function(e) {
            return typeof console < "u" && console.warn(e)
        },
        getWeek: function(e) {
            var n = new Date(e.getTime());
            n.setHours(0, 0, 0, 0), n.setDate(n.getDate() + 3 - (n.getDay() + 6) % 7);
            var t = new Date(n.getFullYear(), 0, 4);
            return 1 + Math.round(((n.getTime() - t.getTime()) / 864e5 - 3 + (t.getDay() + 6) % 7) / 7)
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: !1,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: !1,
        now: new Date,
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: void 0,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: !1,
        showMonths: 1,
        static: !1,
        time_24hr: !1,
        weekNumbers: !1,
        wrap: !1
    },
    oo = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function(e) {
            var n = e % 100;
            if (n > 3 && n < 21) return "th";
            switch (n % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th"
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        monthAriaLabel: "Month",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: !1
    },
    vn = function(e, n) {
        return n === void 0 && (n = 2), ("000" + e).slice(n * -1)
    },
    Hn = function(e) {
        return e === !0 ? 1 : 0
    };

function nh(e, n) {
    var t;
    return function() {
        var i = this,
            r = arguments;
        clearTimeout(t), t = setTimeout(function() {
            return e.apply(i, r)
        }, n)
    }
}
var Gl = function(e) {
    return e instanceof Array ? e : [e]
};

function an(e, n, t) {
    if (t === !0) return e.classList.add(n);
    e.classList.remove(n)
}

function rt(e, n, t) {
    var i = window.document.createElement(e);
    return n = n || "", t = t || "", i.className = n, t !== void 0 && (i.textContent = t), i
}

function Uo(e) {
    for (; e.firstChild;) e.removeChild(e.firstChild)
}

function kv(e, n) {
    if (n(e)) return e;
    if (e.parentNode) return kv(e.parentNode, n)
}

function Wo(e, n) {
    var t = rt("div", "numInputWrapper"),
        i = rt("input", "numInput " + e),
        r = rt("span", "arrowUp"),
        s = rt("span", "arrowDown");
    if (navigator.userAgent.indexOf("MSIE 9.0") === -1 ? i.type = "number" : (i.type = "text", i.pattern = "\\d*"), n !== void 0)
        for (var o in n) i.setAttribute(o, n[o]);
    return t.appendChild(i), t.appendChild(r), t.appendChild(s), t
}

function On(e) {
    try {
        if (typeof e.composedPath == "function") {
            var n = e.composedPath();
            return n[0]
        }
        return e.target
    } catch {
        return e.target
    }
}
var Zl = function() {},
    Ka = function(e, n, t) {
        return t.months[n ? "shorthand" : "longhand"][e]
    },
    MD = {
        D: Zl,
        F: function(e, n, t) {
            e.setMonth(t.months.longhand.indexOf(n))
        },
        G: function(e, n) {
            e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n))
        },
        H: function(e, n) {
            e.setHours(parseFloat(n))
        },
        J: function(e, n) {
            e.setDate(parseFloat(n))
        },
        K: function(e, n, t) {
            e.setHours(e.getHours() % 12 + 12 * Hn(new RegExp(t.amPM[1], "i").test(n)))
        },
        M: function(e, n, t) {
            e.setMonth(t.months.shorthand.indexOf(n))
        },
        S: function(e, n) {
            e.setSeconds(parseFloat(n))
        },
        U: function(e, n) {
            return new Date(parseFloat(n) * 1e3)
        },
        W: function(e, n, t) {
            var i = parseInt(n),
                r = new Date(e.getFullYear(), 0, 2 + (i - 1) * 7, 0, 0, 0, 0);
            return r.setDate(r.getDate() - r.getDay() + t.firstDayOfWeek), r
        },
        Y: function(e, n) {
            e.setFullYear(parseFloat(n))
        },
        Z: function(e, n) {
            return new Date(n)
        },
        d: function(e, n) {
            e.setDate(parseFloat(n))
        },
        h: function(e, n) {
            e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n))
        },
        i: function(e, n) {
            e.setMinutes(parseFloat(n))
        },
        j: function(e, n) {
            e.setDate(parseFloat(n))
        },
        l: Zl,
        m: function(e, n) {
            e.setMonth(parseFloat(n) - 1)
        },
        n: function(e, n) {
            e.setMonth(parseFloat(n) - 1)
        },
        s: function(e, n) {
            e.setSeconds(parseFloat(n))
        },
        u: function(e, n) {
            return new Date(parseFloat(n))
        },
        w: Zl,
        y: function(e, n) {
            e.setFullYear(2e3 + parseFloat(n))
        }
    },
    mr = {
        D: "",
        F: "",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
    },
    ks = {
        Z: function(e) {
            return e.toISOString()
        },
        D: function(e, n, t) {
            return n.weekdays.shorthand[ks.w(e, n, t)]
        },
        F: function(e, n, t) {
            return Ka(ks.n(e, n, t) - 1, !1, n)
        },
        G: function(e, n, t) {
            return vn(ks.h(e, n, t))
        },
        H: function(e) {
            return vn(e.getHours())
        },
        J: function(e, n) {
            return n.ordinal !== void 0 ? e.getDate() + n.ordinal(e.getDate()) : e.getDate()
        },
        K: function(e, n) {
            return n.amPM[Hn(e.getHours() > 11)]
        },
        M: function(e, n) {
            return Ka(e.getMonth(), !0, n)
        },
        S: function(e) {
            return vn(e.getSeconds())
        },
        U: function(e) {
            return e.getTime() / 1e3
        },
        W: function(e, n, t) {
            return t.getWeek(e)
        },
        Y: function(e) {
            return vn(e.getFullYear(), 4)
        },
        d: function(e) {
            return vn(e.getDate())
        },
        h: function(e) {
            return e.getHours() % 12 ? e.getHours() % 12 : 12
        },
        i: function(e) {
            return vn(e.getMinutes())
        },
        j: function(e) {
            return e.getDate()
        },
        l: function(e, n) {
            return n.weekdays.longhand[e.getDay()]
        },
        m: function(e) {
            return vn(e.getMonth() + 1)
        },
        n: function(e) {
            return e.getMonth() + 1
        },
        s: function(e) {
            return e.getSeconds()
        },
        u: function(e) {
            return e.getTime()
        },
        w: function(e) {
            return e.getDay()
        },
        y: function(e) {
            return String(e.getFullYear()).substring(2)
        }
    },
    $v = function(e) {
        var n = e.config,
            t = n === void 0 ? Qr : n,
            i = e.l10n,
            r = i === void 0 ? oo : i,
            s = e.isMobile,
            o = s === void 0 ? !1 : s;
        return function(a, l, u) {
            var c = u || r;
            return t.formatDate !== void 0 && !o ? t.formatDate(a, l, c) : l.split("").map(function(f, d, h) {
                return ks[f] && h[d - 1] !== "\\" ? ks[f](a, c, t) : f !== "\\" ? f : ""
            }).join("")
        }
    },
    Ku = function(e) {
        var n = e.config,
            t = n === void 0 ? Qr : n,
            i = e.l10n,
            r = i === void 0 ? oo : i;
        return function(s, o, a, l) {
            if (!(s !== 0 && !s)) {
                var u = l || r,
                    c, f = s;
                if (s instanceof Date) c = new Date(s.getTime());
                else if (typeof s != "string" && s.toFixed !== void 0) c = new Date(s);
                else if (typeof s == "string") {
                    var d = o || (t || Qr).dateFormat,
                        h = String(s).trim();
                    if (h === "today") c = new Date, a = !0;
                    else if (t && t.parseDate) c = t.parseDate(s, d);
                    else if (/Z$/.test(h) || /GMT$/.test(h)) c = new Date(s);
                    else {
                        for (var p = void 0, m = [], y = 0, D = 0, S = ""; y < d.length; y++) {
                            var b = d[y],
                                w = b === "\\",
                                x = d[y - 1] === "\\" || w;
                            if (mr[b] && !x) {
                                S += mr[b];
                                var O = new RegExp(S).exec(s);
                                O && (p = !0) && m[b !== "Y" ? "push" : "unshift"]({
                                    fn: MD[b],
                                    val: O[++D]
                                })
                            } else w || (S += ".")
                        }
                        c = !t || !t.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0)), m.forEach(function(F) {
                            var L = F.fn,
                                C = F.val;
                            return c = L(c, C, u) || c
                        }), c = p ? c : void 0
                    }
                }
                if (!(c instanceof Date && !isNaN(c.getTime()))) {
                    t.errorHandler(new Error("Invalid date provided: " + f));
                    return
                }
                return a === !0 && c.setHours(0, 0, 0, 0), c
            }
        }
    };

function xn(e, n, t) {
    return t === void 0 && (t = !0), t !== !1 ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(n.getTime()).setHours(0, 0, 0, 0) : e.getTime() - n.getTime()
}
var ID = function(e, n, t) {
        return e > Math.min(n, t) && e < Math.max(n, t)
    },
    Xl = function(e, n, t) {
        return e * 3600 + n * 60 + t
    },
    PD = function(e) {
        var n = Math.floor(e / 3600),
            t = (e - n * 3600) / 60;
        return [n, t, e - n * 3600 - t * 60]
    },
    ND = {
        DAY: 864e5
    };

function Jl(e) {
    var n = e.defaultHour,
        t = e.defaultMinute,
        i = e.defaultSeconds;
    if (e.minDate !== void 0) {
        var r = e.minDate.getHours(),
            s = e.minDate.getMinutes(),
            o = e.minDate.getSeconds();
        n < r && (n = r), n === r && t < s && (t = s), n === r && t === s && i < o && (i = e.minDate.getSeconds())
    }
    if (e.maxDate !== void 0) {
        var a = e.maxDate.getHours(),
            l = e.maxDate.getMinutes();
        n = Math.min(n, a), n === a && (t = Math.min(l, t)), n === a && t === l && (i = e.maxDate.getSeconds())
    }
    return {
        hours: n,
        minutes: t,
        seconds: i
    }
}
typeof Object.assign != "function" && (Object.assign = function(e) {
    for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
    if (!e) throw TypeError("Cannot convert undefined or null to object");
    for (var i = function(a) {
            a && Object.keys(a).forEach(function(l) {
                return e[l] = a[l]
            })
        }, r = 0, s = n; r < s.length; r++) {
        var o = s[r];
        i(o)
    }
    return e
});
var tn = globalThis && globalThis.__assign || function() {
        return tn = Object.assign || function(e) {
            for (var n, t = 1, i = arguments.length; t < i; t++) {
                n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, tn.apply(this, arguments)
    },
    ih = globalThis && globalThis.__spreadArrays || function() {
        for (var e = 0, n = 0, t = arguments.length; n < t; n++) e += arguments[n].length;
        for (var i = Array(e), r = 0, n = 0; n < t; n++)
            for (var s = arguments[n], o = 0, a = s.length; o < a; o++, r++) i[r] = s[o];
        return i
    },
    RD = 300;

function _D(e, n) {
    var t = {
        config: tn(tn({}, Qr), kt.defaultConfig),
        l10n: oo
    };
    t.parseDate = Ku({
        config: t.config,
        l10n: t.l10n
    }), t._handlers = [], t.pluginElements = [], t.loadedPlugins = [], t._bind = m, t._setHoursFromDate = d, t._positionCalendar = ne, t.changeMonth = Pe, t.changeYear = ce, t.clear = He, t.close = at, t.onMouseOver = dt, t._createElement = rt, t.createDay = O, t.destroy = Ye, t.isEnabled = Ne, t.jumpToDate = S, t.updateValue = Ee, t.open = P, t.redraw = X, t.set = Te, t.setDate = ze, t.toggle = ee;

    function i() {
        t.utils = {
            getDaysInMonth: function(E, T) {
                return E === void 0 && (E = t.currentMonth), T === void 0 && (T = t.currentYear), E === 1 && (T % 4 === 0 && T % 100 !== 0 || T % 400 === 0) ? 29 : t.l10n.daysInMonth[E]
            }
        }
    }

    function r() {
        t.element = t.input = e, t.isOpen = !1, Z(), Q(), A(), v(), i(), t.isMobile || x(), D(), (t.selectedDates.length || t.config.noCalendar) && (t.config.enableTime && d(t.config.noCalendar ? t.latestSelectedDateObj : void 0), Ee(!1)), a();
        var E = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        !t.isMobile && E && ne(), Y("onReady")
    }

    function s() {
        var E;
        return ((E = t.calendarContainer) === null || E === void 0 ? void 0 : E.getRootNode()).activeElement || document.activeElement
    }

    function o(E) {
        return E.bind(t)
    }

    function a() {
        var E = t.config;
        E.weekNumbers === !1 && E.showMonths === 1 || E.noCalendar !== !0 && window.requestAnimationFrame(function() {
            if (t.calendarContainer !== void 0 && (t.calendarContainer.style.visibility = "hidden", t.calendarContainer.style.display = "block"), t.daysContainer !== void 0) {
                var T = (t.days.offsetWidth + 1) * E.showMonths;
                t.daysContainer.style.width = T + "px", t.calendarContainer.style.width = T + (t.weekWrapper !== void 0 ? t.weekWrapper.offsetWidth : 0) + "px", t.calendarContainer.style.removeProperty("visibility"), t.calendarContainer.style.removeProperty("display")
            }
        })
    }

    function l(E) {
        if (t.selectedDates.length === 0) {
            var T = t.config.minDate === void 0 || xn(new Date, t.config.minDate) >= 0 ? new Date : new Date(t.config.minDate.getTime()),
                N = Jl(t.config);
            T.setHours(N.hours, N.minutes, N.seconds, T.getMilliseconds()), t.selectedDates = [T], t.latestSelectedDateObj = T
        }
        E !== void 0 && E.type !== "blur" && At(E);
        var B = t._input.value;
        f(), Ee(), t._input.value !== B && t._debouncedChange()
    }

    function u(E, T) {
        return E % 12 + 12 * Hn(T === t.l10n.amPM[1])
    }

    function c(E) {
        switch (E % 24) {
            case 0:
            case 12:
                return 12;
            default:
                return E % 12
        }
    }

    function f() {
        if (!(t.hourElement === void 0 || t.minuteElement === void 0)) {
            var E = (parseInt(t.hourElement.value.slice(-2), 10) || 0) % 24,
                T = (parseInt(t.minuteElement.value, 10) || 0) % 60,
                N = t.secondElement !== void 0 ? (parseInt(t.secondElement.value, 10) || 0) % 60 : 0;
            t.amPM !== void 0 && (E = u(E, t.amPM.textContent));
            var B = t.config.minTime !== void 0 || t.config.minDate && t.minDateHasTime && t.latestSelectedDateObj && xn(t.latestSelectedDateObj, t.config.minDate, !0) === 0,
                se = t.config.maxTime !== void 0 || t.config.maxDate && t.maxDateHasTime && t.latestSelectedDateObj && xn(t.latestSelectedDateObj, t.config.maxDate, !0) === 0;
            if (t.config.maxTime !== void 0 && t.config.minTime !== void 0 && t.config.minTime > t.config.maxTime) {
                var he = Xl(t.config.minTime.getHours(), t.config.minTime.getMinutes(), t.config.minTime.getSeconds()),
                    $e = Xl(t.config.maxTime.getHours(), t.config.maxTime.getMinutes(), t.config.maxTime.getSeconds()),
                    Se = Xl(E, T, N);
                if (Se > $e && Se < he) {
                    var Be = PD(he);
                    E = Be[0], T = Be[1], N = Be[2]
                }
            } else {
                if (se) {
                    var ye = t.config.maxTime !== void 0 ? t.config.maxTime : t.config.maxDate;
                    E = Math.min(E, ye.getHours()), E === ye.getHours() && (T = Math.min(T, ye.getMinutes())), T === ye.getMinutes() && (N = Math.min(N, ye.getSeconds()))
                }
                if (B) {
                    var Ie = t.config.minTime !== void 0 ? t.config.minTime : t.config.minDate;
                    E = Math.max(E, Ie.getHours()), E === Ie.getHours() && T < Ie.getMinutes() && (T = Ie.getMinutes()), T === Ie.getMinutes() && (N = Math.max(N, Ie.getSeconds()))
                }
            }
            h(E, T, N)
        }
    }

    function d(E) {
        var T = E || t.latestSelectedDateObj;
        T && T instanceof Date && h(T.getHours(), T.getMinutes(), T.getSeconds())
    }

    function h(E, T, N) {
        t.latestSelectedDateObj !== void 0 && t.latestSelectedDateObj.setHours(E % 24, T, N || 0, 0), !(!t.hourElement || !t.minuteElement || t.isMobile) && (t.hourElement.value = vn(t.config.time_24hr ? E : (12 + E) % 12 + 12 * Hn(E % 12 === 0)), t.minuteElement.value = vn(T), t.amPM !== void 0 && (t.amPM.textContent = t.l10n.amPM[Hn(E >= 12)]), t.secondElement !== void 0 && (t.secondElement.value = vn(N)))
    }

    function p(E) {
        var T = On(E),
            N = parseInt(T.value) + (E.delta || 0);
        (N / 1e3 > 1 || E.key === "Enter" && !/[^\d]/.test(N.toString())) && ce(N)
    }

    function m(E, T, N, B) {
        if (T instanceof Array) return T.forEach(function(se) {
            return m(E, se, N, B)
        });
        if (E instanceof Array) return E.forEach(function(se) {
            return m(se, T, N, B)
        });
        E.addEventListener(T, N, B), t._handlers.push({
            remove: function() {
                return E.removeEventListener(T, N, B)
            }
        })
    }

    function y() {
        Y("onChange")
    }

    function D() {
        if (t.config.wrap && ["open", "close", "toggle", "clear"].forEach(function(N) {
                Array.prototype.forEach.call(t.element.querySelectorAll("[data-" + N + "]"), function(B) {
                    return m(B, "click", t[N])
                })
            }), t.isMobile) {
            z();
            return
        }
        var E = nh(M, 50);
        if (t._debouncedChange = nh(y, RD), t.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && m(t.daysContainer, "mouseover", function(N) {
                t.config.mode === "range" && dt(On(N))
            }), m(t._input, "keydown", mt), t.calendarContainer !== void 0 && m(t.calendarContainer, "keydown", mt), !t.config.inline && !t.config.static && m(window, "resize", E), window.ontouchstart !== void 0 ? m(window.document, "touchstart", q) : m(window.document, "mousedown", q), m(window.document, "focus", q, {
                capture: !0
            }), t.config.clickOpens === !0 && (m(t._input, "focus", t.open), m(t._input, "click", t.open)), t.daysContainer !== void 0 && (m(t.monthNav, "click", Me), m(t.monthNav, ["keyup", "increment"], p), m(t.daysContainer, "click", ve)), t.timeContainer !== void 0 && t.minuteElement !== void 0 && t.hourElement !== void 0) {
            var T = function(N) {
                return On(N).select()
            };
            m(t.timeContainer, ["increment"], l), m(t.timeContainer, "blur", l, {
                capture: !0
            }), m(t.timeContainer, "click", b), m([t.hourElement, t.minuteElement], ["focus", "click"], T), t.secondElement !== void 0 && m(t.secondElement, "focus", function() {
                return t.secondElement && t.secondElement.select()
            }), t.amPM !== void 0 && m(t.amPM, "click", function(N) {
                l(N)
            })
        }
        t.config.allowInput && m(t._input, "blur", ft)
    }

    function S(E, T) {
        var N = E !== void 0 ? t.parseDate(E) : t.latestSelectedDateObj || (t.config.minDate && t.config.minDate > t.now ? t.config.minDate : t.config.maxDate && t.config.maxDate < t.now ? t.config.maxDate : t.now),
            B = t.currentYear,
            se = t.currentMonth;
        try {
            N !== void 0 && (t.currentYear = N.getFullYear(), t.currentMonth = N.getMonth())
        } catch (he) {
            he.message = "Invalid date supplied: " + N, t.config.errorHandler(he)
        }
        T && t.currentYear !== B && (Y("onYearChange"), _()), T && (t.currentYear !== B || t.currentMonth !== se) && Y("onMonthChange"), t.redraw()
    }

    function b(E) {
        var T = On(E);
        ~T.className.indexOf("arrow") && w(E, T.classList.contains("arrowUp") ? 1 : -1)
    }

    function w(E, T, N) {
        var B = E && On(E),
            se = N || B && B.parentNode && B.parentNode.firstChild,
            he = ue("increment");
        he.delta = T, se && se.dispatchEvent(he)
    }

    function x() {
        var E = window.document.createDocumentFragment();
        if (t.calendarContainer = rt("div", "flatpickr-calendar"), t.calendarContainer.tabIndex = -1, !t.config.noCalendar) {
            if (E.appendChild($()), t.innerContainer = rt("div", "flatpickr-innerContainer"), t.config.weekNumbers) {
                var T = Je(),
                    N = T.weekWrapper,
                    B = T.weekNumbers;
                t.innerContainer.appendChild(N), t.weekNumbers = B, t.weekWrapper = N
            }
            t.rContainer = rt("div", "flatpickr-rContainer"), t.rContainer.appendChild(J()), t.daysContainer || (t.daysContainer = rt("div", "flatpickr-days"), t.daysContainer.tabIndex = -1), R(), t.rContainer.appendChild(t.daysContainer), t.innerContainer.appendChild(t.rContainer), E.appendChild(t.innerContainer)
        }
        t.config.enableTime && E.appendChild(W()), an(t.calendarContainer, "rangeMode", t.config.mode === "range"), an(t.calendarContainer, "animate", t.config.animate === !0), an(t.calendarContainer, "multiMonth", t.config.showMonths > 1), t.calendarContainer.appendChild(E);
        var se = t.config.appendTo !== void 0 && t.config.appendTo.nodeType !== void 0;
        if ((t.config.inline || t.config.static) && (t.calendarContainer.classList.add(t.config.inline ? "inline" : "static"), t.config.inline && (!se && t.element.parentNode ? t.element.parentNode.insertBefore(t.calendarContainer, t._input.nextSibling) : t.config.appendTo !== void 0 && t.config.appendTo.appendChild(t.calendarContainer)), t.config.static)) {
            var he = rt("div", "flatpickr-wrapper");
            t.element.parentNode && t.element.parentNode.insertBefore(he, t.element), he.appendChild(t.element), t.altInput && he.appendChild(t.altInput), he.appendChild(t.calendarContainer)
        }!t.config.static && !t.config.inline && (t.config.appendTo !== void 0 ? t.config.appendTo : window.document.body).appendChild(t.calendarContainer)
    }

    function O(E, T, N, B) {
        var se = Ne(T, !0),
            he = rt("span", E, T.getDate().toString());
        return he.dateObj = T, he.$i = B, he.setAttribute("aria-label", t.formatDate(T, t.config.ariaDateFormat)), E.indexOf("hidden") === -1 && xn(T, t.now) === 0 && (t.todayDateElem = he, he.classList.add("today"), he.setAttribute("aria-current", "date")), se ? (he.tabIndex = -1, we(T) && (he.classList.add("selected"), t.selectedDateElem = he, t.config.mode === "range" && (an(he, "startRange", t.selectedDates[0] && xn(T, t.selectedDates[0], !0) === 0), an(he, "endRange", t.selectedDates[1] && xn(T, t.selectedDates[1], !0) === 0), E === "nextMonthDay" && he.classList.add("inRange")))) : he.classList.add("flatpickr-disabled"), t.config.mode === "range" && me(T) && !we(T) && he.classList.add("inRange"), t.weekNumbers && t.config.showMonths === 1 && E !== "prevMonthDay" && B % 7 === 6 && t.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + t.config.getWeek(T) + "</span>"), Y("onDayCreate", he), he
    }

    function F(E) {
        E.focus(), t.config.mode === "range" && dt(E)
    }

    function L(E) {
        for (var T = E > 0 ? 0 : t.config.showMonths - 1, N = E > 0 ? t.config.showMonths : -1, B = T; B != N; B += E)
            for (var se = t.daysContainer.children[B], he = E > 0 ? 0 : se.children.length - 1, $e = E > 0 ? se.children.length : -1, Se = he; Se != $e; Se += E) {
                var Be = se.children[Se];
                if (Be.className.indexOf("hidden") === -1 && Ne(Be.dateObj)) return Be
            }
    }

    function C(E, T) {
        for (var N = E.className.indexOf("Month") === -1 ? E.dateObj.getMonth() : t.currentMonth, B = T > 0 ? t.config.showMonths : -1, se = T > 0 ? 1 : -1, he = N - t.currentMonth; he != B; he += se)
            for (var $e = t.daysContainer.children[he], Se = N - t.currentMonth === he ? E.$i + T : T < 0 ? $e.children.length - 1 : 0, Be = $e.children.length, ye = Se; ye >= 0 && ye < Be && ye != (T > 0 ? Be : -1); ye += se) {
                var Ie = $e.children[ye];
                if (Ie.className.indexOf("hidden") === -1 && Ne(Ie.dateObj) && Math.abs(E.$i - ye) >= Math.abs(T)) return F(Ie)
            }
        t.changeMonth(se), I(L(se), 0)
    }

    function I(E, T) {
        var N = s(),
            B = De(N || document.body),
            se = E !== void 0 ? E : B ? N : t.selectedDateElem !== void 0 && De(t.selectedDateElem) ? t.selectedDateElem : t.todayDateElem !== void 0 && De(t.todayDateElem) ? t.todayDateElem : L(T > 0 ? 1 : -1);
        se === void 0 ? t._input.focus() : B ? C(se, T) : F(se)
    }

    function j(E, T) {
        for (var N = (new Date(E, T, 1).getDay() - t.l10n.firstDayOfWeek + 7) % 7, B = t.utils.getDaysInMonth((T - 1 + 12) % 12, E), se = t.utils.getDaysInMonth(T, E), he = window.document.createDocumentFragment(), $e = t.config.showMonths > 1, Se = $e ? "prevMonthDay hidden" : "prevMonthDay", Be = $e ? "nextMonthDay hidden" : "nextMonthDay", ye = B + 1 - N, Ie = 0; ye <= B; ye++, Ie++) he.appendChild(O("flatpickr-day " + Se, new Date(E, T - 1, ye), ye, Ie));
        for (ye = 1; ye <= se; ye++, Ie++) he.appendChild(O("flatpickr-day", new Date(E, T, ye), ye, Ie));
        for (var ht = se + 1; ht <= 42 - N && (t.config.showMonths === 1 || Ie % 7 !== 0); ht++, Ie++) he.appendChild(O("flatpickr-day " + Be, new Date(E, T + 1, ht % se), ht, Ie));
        var oi = rt("div", "dayContainer");
        return oi.appendChild(he), oi
    }

    function R() {
        if (t.daysContainer !== void 0) {
            Uo(t.daysContainer), t.weekNumbers && Uo(t.weekNumbers);
            for (var E = document.createDocumentFragment(), T = 0; T < t.config.showMonths; T++) {
                var N = new Date(t.currentYear, t.currentMonth, 1);
                N.setMonth(t.currentMonth + T), E.appendChild(j(N.getFullYear(), N.getMonth()))
            }
            t.daysContainer.appendChild(E), t.days = t.daysContainer.firstChild, t.config.mode === "range" && t.selectedDates.length === 1 && dt()
        }
    }

    function _() {
        if (!(t.config.showMonths > 1 || t.config.monthSelectorType !== "dropdown")) {
            var E = function(B) {
                return t.config.minDate !== void 0 && t.currentYear === t.config.minDate.getFullYear() && B < t.config.minDate.getMonth() ? !1 : !(t.config.maxDate !== void 0 && t.currentYear === t.config.maxDate.getFullYear() && B > t.config.maxDate.getMonth())
            };
            t.monthsDropdownContainer.tabIndex = -1, t.monthsDropdownContainer.innerHTML = "";
            for (var T = 0; T < 12; T++)
                if (E(T)) {
                    var N = rt("option", "flatpickr-monthDropdown-month");
                    N.value = new Date(t.currentYear, T).getMonth().toString(), N.textContent = Ka(T, t.config.shorthandCurrentMonth, t.l10n), N.tabIndex = -1, t.currentMonth === T && (N.selected = !0), t.monthsDropdownContainer.appendChild(N)
                }
        }
    }

    function V() {
        var E = rt("div", "flatpickr-month"),
            T = window.document.createDocumentFragment(),
            N;
        t.config.showMonths > 1 || t.config.monthSelectorType === "static" ? N = rt("span", "cur-month") : (t.monthsDropdownContainer = rt("select", "flatpickr-monthDropdown-months"), t.monthsDropdownContainer.setAttribute("aria-label", t.l10n.monthAriaLabel), m(t.monthsDropdownContainer, "change", function($e) {
            var Se = On($e),
                Be = parseInt(Se.value, 10);
            t.changeMonth(Be - t.currentMonth), Y("onMonthChange")
        }), _(), N = t.monthsDropdownContainer);
        var B = Wo("cur-year", {
                tabindex: "-1"
            }),
            se = B.getElementsByTagName("input")[0];
        se.setAttribute("aria-label", t.l10n.yearAriaLabel), t.config.minDate && se.setAttribute("min", t.config.minDate.getFullYear().toString()), t.config.maxDate && (se.setAttribute("max", t.config.maxDate.getFullYear().toString()), se.disabled = !!t.config.minDate && t.config.minDate.getFullYear() === t.config.maxDate.getFullYear());
        var he = rt("div", "flatpickr-current-month");
        return he.appendChild(N), he.appendChild(B), T.appendChild(he), E.appendChild(T), {
            container: E,
            yearElement: se,
            monthElement: N
        }
    }

    function G() {
        Uo(t.monthNav), t.monthNav.appendChild(t.prevMonthNav), t.config.showMonths && (t.yearElements = [], t.monthElements = []);
        for (var E = t.config.showMonths; E--;) {
            var T = V();
            t.yearElements.push(T.yearElement), t.monthElements.push(T.monthElement), t.monthNav.appendChild(T.container)
        }
        t.monthNav.appendChild(t.nextMonthNav)
    }

    function $() {
        return t.monthNav = rt("div", "flatpickr-months"), t.yearElements = [], t.monthElements = [], t.prevMonthNav = rt("span", "flatpickr-prev-month"), t.prevMonthNav.innerHTML = t.config.prevArrow, t.nextMonthNav = rt("span", "flatpickr-next-month"), t.nextMonthNav.innerHTML = t.config.nextArrow, G(), Object.defineProperty(t, "_hidePrevMonthArrow", {
            get: function() {
                return t.__hidePrevMonthArrow
            },
            set: function(E) {
                t.__hidePrevMonthArrow !== E && (an(t.prevMonthNav, "flatpickr-disabled", E), t.__hidePrevMonthArrow = E)
            }
        }), Object.defineProperty(t, "_hideNextMonthArrow", {
            get: function() {
                return t.__hideNextMonthArrow
            },
            set: function(E) {
                t.__hideNextMonthArrow !== E && (an(t.nextMonthNav, "flatpickr-disabled", E), t.__hideNextMonthArrow = E)
            }
        }), t.currentYearElement = t.yearElements[0], re(), t.monthNav
    }

    function W() {
        t.calendarContainer.classList.add("hasTime"), t.config.noCalendar && t.calendarContainer.classList.add("noCalendar");
        var E = Jl(t.config);
        t.timeContainer = rt("div", "flatpickr-time"), t.timeContainer.tabIndex = -1;
        var T = rt("span", "flatpickr-time-separator", ":"),
            N = Wo("flatpickr-hour", {
                "aria-label": t.l10n.hourAriaLabel
            });
        t.hourElement = N.getElementsByTagName("input")[0];
        var B = Wo("flatpickr-minute", {
            "aria-label": t.l10n.minuteAriaLabel
        });
        if (t.minuteElement = B.getElementsByTagName("input")[0], t.hourElement.tabIndex = t.minuteElement.tabIndex = -1, t.hourElement.value = vn(t.latestSelectedDateObj ? t.latestSelectedDateObj.getHours() : t.config.time_24hr ? E.hours : c(E.hours)), t.minuteElement.value = vn(t.latestSelectedDateObj ? t.latestSelectedDateObj.getMinutes() : E.minutes), t.hourElement.setAttribute("step", t.config.hourIncrement.toString()), t.minuteElement.setAttribute("step", t.config.minuteIncrement.toString()), t.hourElement.setAttribute("min", t.config.time_24hr ? "0" : "1"), t.hourElement.setAttribute("max", t.config.time_24hr ? "23" : "12"), t.hourElement.setAttribute("maxlength", "2"), t.minuteElement.setAttribute("min", "0"), t.minuteElement.setAttribute("max", "59"), t.minuteElement.setAttribute("maxlength", "2"), t.timeContainer.appendChild(N), t.timeContainer.appendChild(T), t.timeContainer.appendChild(B), t.config.time_24hr && t.timeContainer.classList.add("time24hr"), t.config.enableSeconds) {
            t.timeContainer.classList.add("hasSeconds");
            var se = Wo("flatpickr-second");
            t.secondElement = se.getElementsByTagName("input")[0], t.secondElement.value = vn(t.latestSelectedDateObj ? t.latestSelectedDateObj.getSeconds() : E.seconds), t.secondElement.setAttribute("step", t.minuteElement.getAttribute("step")), t.secondElement.setAttribute("min", "0"), t.secondElement.setAttribute("max", "59"), t.secondElement.setAttribute("maxlength", "2"), t.timeContainer.appendChild(rt("span", "flatpickr-time-separator", ":")), t.timeContainer.appendChild(se)
        }
        return t.config.time_24hr || (t.amPM = rt("span", "flatpickr-am-pm", t.l10n.amPM[Hn((t.latestSelectedDateObj ? t.hourElement.value : t.config.defaultHour) > 11)]), t.amPM.title = t.l10n.toggleTitle, t.amPM.tabIndex = -1, t.timeContainer.appendChild(t.amPM)), t.timeContainer
    }

    function J() {
        t.weekdayContainer ? Uo(t.weekdayContainer) : t.weekdayContainer = rt("div", "flatpickr-weekdays");
        for (var E = t.config.showMonths; E--;) {
            var T = rt("div", "flatpickr-weekdaycontainer");
            t.weekdayContainer.appendChild(T)
        }
        return Ce(), t.weekdayContainer
    }

    function Ce() {
        if (t.weekdayContainer) {
            var E = t.l10n.firstDayOfWeek,
                T = ih(t.l10n.weekdays.shorthand);
            E > 0 && E < T.length && (T = ih(T.splice(E, T.length), T.splice(0, E)));
            for (var N = t.config.showMonths; N--;) t.weekdayContainer.children[N].innerHTML = `
      <span class='flatpickr-weekday'>
        ` + T.join("</span><span class='flatpickr-weekday'>") + `
      </span>
      `
        }
    }

    function Je() {
        t.calendarContainer.classList.add("hasWeeks");
        var E = rt("div", "flatpickr-weekwrapper");
        E.appendChild(rt("span", "flatpickr-weekday", t.l10n.weekAbbreviation));
        var T = rt("div", "flatpickr-weeks");
        return E.appendChild(T), {
            weekWrapper: E,
            weekNumbers: T
        }
    }

    function Pe(E, T) {
        T === void 0 && (T = !0);
        var N = T ? E : E - t.currentMonth;
        N < 0 && t._hidePrevMonthArrow === !0 || N > 0 && t._hideNextMonthArrow === !0 || (t.currentMonth += N, (t.currentMonth < 0 || t.currentMonth > 11) && (t.currentYear += t.currentMonth > 11 ? 1 : -1, t.currentMonth = (t.currentMonth + 12) % 12, Y("onYearChange"), _()), R(), Y("onMonthChange"), re())
    }

    function He(E, T) {
        if (E === void 0 && (E = !0), T === void 0 && (T = !0), t.input.value = "", t.altInput !== void 0 && (t.altInput.value = ""), t.mobileInput !== void 0 && (t.mobileInput.value = ""), t.selectedDates = [], t.latestSelectedDateObj = void 0, T === !0 && (t.currentYear = t._initialDate.getFullYear(), t.currentMonth = t._initialDate.getMonth()), t.config.enableTime === !0) {
            var N = Jl(t.config),
                B = N.hours,
                se = N.minutes,
                he = N.seconds;
            h(B, se, he)
        }
        t.redraw(), E && Y("onChange")
    }

    function at() {
        t.isOpen = !1, t.isMobile || (t.calendarContainer !== void 0 && t.calendarContainer.classList.remove("open"), t._input !== void 0 && t._input.classList.remove("active")), Y("onClose")
    }

    function Ye() {
        t.config !== void 0 && Y("onDestroy");
        for (var E = t._handlers.length; E--;) t._handlers[E].remove();
        if (t._handlers = [], t.mobileInput) t.mobileInput.parentNode && t.mobileInput.parentNode.removeChild(t.mobileInput), t.mobileInput = void 0;
        else if (t.calendarContainer && t.calendarContainer.parentNode)
            if (t.config.static && t.calendarContainer.parentNode) {
                var T = t.calendarContainer.parentNode;
                if (T.lastChild && T.removeChild(T.lastChild), T.parentNode) {
                    for (; T.firstChild;) T.parentNode.insertBefore(T.firstChild, T);
                    T.parentNode.removeChild(T)
                }
            } else t.calendarContainer.parentNode.removeChild(t.calendarContainer);
        t.altInput && (t.input.type = "text", t.altInput.parentNode && t.altInput.parentNode.removeChild(t.altInput), delete t.altInput), t.input && (t.input.type = t.input._type, t.input.classList.remove("flatpickr-input"), t.input.removeAttribute("readonly")), ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function(N) {
            try {
                delete t[N]
            } catch {}
        })
    }

    function tt(E) {
        return t.calendarContainer.contains(E)
    }

    function q(E) {
        if (t.isOpen && !t.config.inline) {
            var T = On(E),
                N = tt(T),
                B = T === t.input || T === t.altInput || t.element.contains(T) || E.path && E.path.indexOf && (~E.path.indexOf(t.input) || ~E.path.indexOf(t.altInput)),
                se = !B && !N && !tt(E.relatedTarget),
                he = !t.config.ignoredFocusElements.some(function($e) {
                    return $e.contains(T)
                });
            se && he && (t.config.allowInput && t.setDate(t._input.value, !1, t.config.altInput ? t.config.altFormat : t.config.dateFormat), t.timeContainer !== void 0 && t.minuteElement !== void 0 && t.hourElement !== void 0 && t.input.value !== "" && t.input.value !== void 0 && l(), t.close(), t.config && t.config.mode === "range" && t.selectedDates.length === 1 && t.clear(!1))
        }
    }

    function ce(E) {
        if (!(!E || t.config.minDate && E < t.config.minDate.getFullYear() || t.config.maxDate && E > t.config.maxDate.getFullYear())) {
            var T = E,
                N = t.currentYear !== T;
            t.currentYear = T || t.currentYear, t.config.maxDate && t.currentYear === t.config.maxDate.getFullYear() ? t.currentMonth = Math.min(t.config.maxDate.getMonth(), t.currentMonth) : t.config.minDate && t.currentYear === t.config.minDate.getFullYear() && (t.currentMonth = Math.max(t.config.minDate.getMonth(), t.currentMonth)), N && (t.redraw(), Y("onYearChange"), _())
        }
    }

    function Ne(E, T) {
        var N;
        T === void 0 && (T = !0);
        var B = t.parseDate(E, void 0, T);
        if (t.config.minDate && B && xn(B, t.config.minDate, T !== void 0 ? T : !t.minDateHasTime) < 0 || t.config.maxDate && B && xn(B, t.config.maxDate, T !== void 0 ? T : !t.maxDateHasTime) > 0) return !1;
        if (!t.config.enable && t.config.disable.length === 0) return !0;
        if (B === void 0) return !1;
        for (var se = !!t.config.enable, he = (N = t.config.enable) !== null && N !== void 0 ? N : t.config.disable, $e = 0, Se = void 0; $e < he.length; $e++) {
            if (Se = he[$e], typeof Se == "function" && Se(B)) return se;
            if (Se instanceof Date && B !== void 0 && Se.getTime() === B.getTime()) return se;
            if (typeof Se == "string") {
                var Be = t.parseDate(Se, void 0, !0);
                return Be && Be.getTime() === B.getTime() ? se : !se
            } else if (typeof Se == "object" && B !== void 0 && Se.from && Se.to && B.getTime() >= Se.from.getTime() && B.getTime() <= Se.to.getTime()) return se
        }
        return !se
    }

    function De(E) {
        return t.daysContainer !== void 0 ? E.className.indexOf("hidden") === -1 && E.className.indexOf("flatpickr-disabled") === -1 && t.daysContainer.contains(E) : !1
    }

    function ft(E) {
        var T = E.target === t._input,
            N = t._input.value.trimEnd() !== de();
        T && N && !(E.relatedTarget && tt(E.relatedTarget)) && t.setDate(t._input.value, !0, E.target === t.altInput ? t.config.altFormat : t.config.dateFormat)
    }

    function mt(E) {
        var T = On(E),
            N = t.config.wrap ? e.contains(T) : T === t._input,
            B = t.config.allowInput,
            se = t.isOpen && (!B || !N),
            he = t.config.inline && N && !B;
        if (E.keyCode === 13 && N) {
            if (B) return t.setDate(t._input.value, !0, T === t.altInput ? t.config.altFormat : t.config.dateFormat), t.close(), T.blur();
            t.open()
        } else if (tt(T) || se || he) {
            var $e = !!t.timeContainer && t.timeContainer.contains(T);
            switch (E.keyCode) {
                case 13:
                    $e ? (E.preventDefault(), l(), le()) : ve(E);
                    break;
                case 27:
                    E.preventDefault(), le();
                    break;
                case 8:
                case 46:
                    N && !t.config.allowInput && (E.preventDefault(), t.clear());
                    break;
                case 37:
                case 39:
                    if (!$e && !N) {
                        E.preventDefault();
                        var Se = s();
                        if (t.daysContainer !== void 0 && (B === !1 || Se && De(Se))) {
                            var Be = E.keyCode === 39 ? 1 : -1;
                            E.ctrlKey ? (E.stopPropagation(), Pe(Be), I(L(1), 0)) : I(void 0, Be)
                        }
                    } else t.hourElement && t.hourElement.focus();
                    break;
                case 38:
                case 40:
                    E.preventDefault();
                    var ye = E.keyCode === 40 ? 1 : -1;
                    t.daysContainer && T.$i !== void 0 || T === t.input || T === t.altInput ? E.ctrlKey ? (E.stopPropagation(), ce(t.currentYear - ye), I(L(1), 0)) : $e || I(void 0, ye * 7) : T === t.currentYearElement ? ce(t.currentYear - ye) : t.config.enableTime && (!$e && t.hourElement && t.hourElement.focus(), l(E), t._debouncedChange());
                    break;
                case 9:
                    if ($e) {
                        var Ie = [t.hourElement, t.minuteElement, t.secondElement, t.amPM].concat(t.pluginElements).filter(function(Cn) {
                                return Cn
                            }),
                            ht = Ie.indexOf(T);
                        if (ht !== -1) {
                            var oi = Ie[ht + (E.shiftKey ? -1 : 1)];
                            E.preventDefault(), (oi || t._input).focus()
                        }
                    } else !t.config.noCalendar && t.daysContainer && t.daysContainer.contains(T) && E.shiftKey && (E.preventDefault(), t._input.focus());
                    break
            }
        }
        if (t.amPM !== void 0 && T === t.amPM) switch (E.key) {
            case t.l10n.amPM[0].charAt(0):
            case t.l10n.amPM[0].charAt(0).toLowerCase():
                t.amPM.textContent = t.l10n.amPM[0], f(), Ee();
                break;
            case t.l10n.amPM[1].charAt(0):
            case t.l10n.amPM[1].charAt(0).toLowerCase():
                t.amPM.textContent = t.l10n.amPM[1], f(), Ee();
                break
        }(N || tt(T)) && Y("onKeyDown", E)
    }

    function dt(E, T) {
        if (T === void 0 && (T = "flatpickr-day"), !(t.selectedDates.length !== 1 || E && (!E.classList.contains(T) || E.classList.contains("flatpickr-disabled")))) {
            for (var N = E ? E.dateObj.getTime() : t.days.firstElementChild.dateObj.getTime(), B = t.parseDate(t.selectedDates[0], void 0, !0).getTime(), se = Math.min(N, t.selectedDates[0].getTime()), he = Math.max(N, t.selectedDates[0].getTime()), $e = !1, Se = 0, Be = 0, ye = se; ye < he; ye += ND.DAY) Ne(new Date(ye), !0) || ($e = $e || ye > se && ye < he, ye < B && (!Se || ye > Se) ? Se = ye : ye > B && (!Be || ye < Be) && (Be = ye));
            var Ie = Array.from(t.rContainer.querySelectorAll("*:nth-child(-n+" + t.config.showMonths + ") > ." + T));
            Ie.forEach(function(ht) {
                var oi = ht.dateObj,
                    Cn = oi.getTime(),
                    hs = Se > 0 && Cn < Se || Be > 0 && Cn > Be;
                if (hs) {
                    ht.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(function(Fr) {
                        ht.classList.remove(Fr)
                    });
                    return
                } else if ($e && !hs) return;
                ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(Fr) {
                    ht.classList.remove(Fr)
                }), E !== void 0 && (E.classList.add(N <= t.selectedDates[0].getTime() ? "startRange" : "endRange"), B < N && Cn === B ? ht.classList.add("startRange") : B > N && Cn === B && ht.classList.add("endRange"), Cn >= Se && (Be === 0 || Cn <= Be) && ID(Cn, B, N) && ht.classList.add("inRange"))
            })
        }
    }

    function M() {
        t.isOpen && !t.config.static && !t.config.inline && ne()
    }

    function P(E, T) {
        if (T === void 0 && (T = t._positionElement), t.isMobile === !0) {
            if (E) {
                E.preventDefault();
                var N = On(E);
                N && N.blur()
            }
            t.mobileInput !== void 0 && (t.mobileInput.focus(), t.mobileInput.click()), Y("onOpen");
            return
        } else if (t._input.disabled || t.config.inline) return;
        var B = t.isOpen;
        t.isOpen = !0, B || (t.calendarContainer.classList.add("open"), t._input.classList.add("active"), Y("onOpen"), ne(T)), t.config.enableTime === !0 && t.config.noCalendar === !0 && t.config.allowInput === !1 && (E === void 0 || !t.timeContainer.contains(E.relatedTarget)) && setTimeout(function() {
            return t.hourElement.select()
        }, 50)
    }

    function H(E) {
        return function(T) {
            var N = t.config["_" + E + "Date"] = t.parseDate(T, t.config.dateFormat),
                B = t.config["_" + (E === "min" ? "max" : "min") + "Date"];
            N !== void 0 && (t[E === "min" ? "minDateHasTime" : "maxDateHasTime"] = N.getHours() > 0 || N.getMinutes() > 0 || N.getSeconds() > 0), t.selectedDates && (t.selectedDates = t.selectedDates.filter(function(se) {
                return Ne(se)
            }), !t.selectedDates.length && E === "min" && d(N), Ee()), t.daysContainer && (X(), N !== void 0 ? t.currentYearElement[E] = N.getFullYear().toString() : t.currentYearElement.removeAttribute(E), t.currentYearElement.disabled = !!B && N !== void 0 && B.getFullYear() === N.getFullYear())
        }
    }

    function Z() {
        var E = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
            T = tn(tn({}, JSON.parse(JSON.stringify(e.dataset || {}))), n),
            N = {};
        t.config.parseDate = T.parseDate, t.config.formatDate = T.formatDate, Object.defineProperty(t.config, "enable", {
            get: function() {
                return t.config._enable
            },
            set: function(Ie) {
                t.config._enable = g(Ie)
            }
        }), Object.defineProperty(t.config, "disable", {
            get: function() {
                return t.config._disable
            },
            set: function(Ie) {
                t.config._disable = g(Ie)
            }
        });
        var B = T.mode === "time";
        if (!T.dateFormat && (T.enableTime || B)) {
            var se = kt.defaultConfig.dateFormat || Qr.dateFormat;
            N.dateFormat = T.noCalendar || B ? "H:i" + (T.enableSeconds ? ":S" : "") : se + " H:i" + (T.enableSeconds ? ":S" : "")
        }
        if (T.altInput && (T.enableTime || B) && !T.altFormat) {
            var he = kt.defaultConfig.altFormat || Qr.altFormat;
            N.altFormat = T.noCalendar || B ? "h:i" + (T.enableSeconds ? ":S K" : " K") : he + (" h:i" + (T.enableSeconds ? ":S" : "") + " K")
        }
        Object.defineProperty(t.config, "minDate", {
            get: function() {
                return t.config._minDate
            },
            set: H("min")
        }), Object.defineProperty(t.config, "maxDate", {
            get: function() {
                return t.config._maxDate
            },
            set: H("max")
        });
        var $e = function(Ie) {
            return function(ht) {
                t.config[Ie === "min" ? "_minTime" : "_maxTime"] = t.parseDate(ht, "H:i:S")
            }
        };
        Object.defineProperty(t.config, "minTime", {
            get: function() {
                return t.config._minTime
            },
            set: $e("min")
        }), Object.defineProperty(t.config, "maxTime", {
            get: function() {
                return t.config._maxTime
            },
            set: $e("max")
        }), T.mode === "time" && (t.config.noCalendar = !0, t.config.enableTime = !0), Object.assign(t.config, N, T);
        for (var Se = 0; Se < E.length; Se++) t.config[E[Se]] = t.config[E[Se]] === !0 || t.config[E[Se]] === "true";
        zl.filter(function(Ie) {
            return t.config[Ie] !== void 0
        }).forEach(function(Ie) {
            t.config[Ie] = Gl(t.config[Ie] || []).map(o)
        }), t.isMobile = !t.config.disableMobile && !t.config.inline && t.config.mode === "single" && !t.config.disable.length && !t.config.enable && !t.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for (var Se = 0; Se < t.config.plugins.length; Se++) {
            var Be = t.config.plugins[Se](t) || {};
            for (var ye in Be) zl.indexOf(ye) > -1 ? t.config[ye] = Gl(Be[ye]).map(o).concat(t.config[ye]) : typeof T[ye] > "u" && (t.config[ye] = Be[ye])
        }
        T.altInputClass || (t.config.altInputClass = K().className + " " + t.config.altInputClass), Y("onParseConfig")
    }

    function K() {
        return t.config.wrap ? e.querySelector("[data-input]") : e
    }

    function Q() {
        typeof t.config.locale != "object" && typeof kt.l10ns[t.config.locale] > "u" && t.config.errorHandler(new Error("flatpickr: invalid locale " + t.config.locale)), t.l10n = tn(tn({}, kt.l10ns.default), typeof t.config.locale == "object" ? t.config.locale : t.config.locale !== "default" ? kt.l10ns[t.config.locale] : void 0), mr.D = "(" + t.l10n.weekdays.shorthand.join("|") + ")", mr.l = "(" + t.l10n.weekdays.longhand.join("|") + ")", mr.M = "(" + t.l10n.months.shorthand.join("|") + ")", mr.F = "(" + t.l10n.months.longhand.join("|") + ")", mr.K = "(" + t.l10n.amPM[0] + "|" + t.l10n.amPM[1] + "|" + t.l10n.amPM[0].toLowerCase() + "|" + t.l10n.amPM[1].toLowerCase() + ")";
        var E = tn(tn({}, n), JSON.parse(JSON.stringify(e.dataset || {})));
        E.time_24hr === void 0 && kt.defaultConfig.time_24hr === void 0 && (t.config.time_24hr = t.l10n.time_24hr), t.formatDate = $v(t), t.parseDate = Ku({
            config: t.config,
            l10n: t.l10n
        })
    }

    function ne(E) {
        if (typeof t.config.position == "function") return void t.config.position(t, E);
        if (t.calendarContainer !== void 0) {
            Y("onPreCalendarPosition");
            var T = E || t._positionElement,
                N = Array.prototype.reduce.call(t.calendarContainer.children, function(Py, Ny) {
                    return Py + Ny.offsetHeight
                }, 0),
                B = t.calendarContainer.offsetWidth,
                se = t.config.position.split(" "),
                he = se[0],
                $e = se.length > 1 ? se[1] : null,
                Se = T.getBoundingClientRect(),
                Be = window.innerHeight - Se.bottom,
                ye = he === "above" || he !== "below" && Be < N && Se.top > N,
                Ie = window.pageYOffset + Se.top + (ye ? -N - 2 : T.offsetHeight + 2);
            if (an(t.calendarContainer, "arrowTop", !ye), an(t.calendarContainer, "arrowBottom", ye), !t.config.inline) {
                var ht = window.pageXOffset + Se.left,
                    oi = !1,
                    Cn = !1;
                $e === "center" ? (ht -= (B - Se.width) / 2, oi = !0) : $e === "right" && (ht -= B - Se.width, Cn = !0), an(t.calendarContainer, "arrowLeft", !oi && !Cn), an(t.calendarContainer, "arrowCenter", oi), an(t.calendarContainer, "arrowRight", Cn);
                var hs = window.document.body.offsetWidth - (window.pageXOffset + Se.right),
                    Fr = ht + B > window.document.body.offsetWidth,
                    Ty = hs + B > window.document.body.offsetWidth;
                if (an(t.calendarContainer, "rightMost", Fr), !t.config.static)
                    if (t.calendarContainer.style.top = Ie + "px", !Fr) t.calendarContainer.style.left = ht + "px", t.calendarContainer.style.right = "auto";
                    else if (!Ty) t.calendarContainer.style.left = "auto", t.calendarContainer.style.right = hs + "px";
                else {
                    var Pl = te();
                    if (Pl === void 0) return;
                    var Cy = window.document.body.offsetWidth,
                        Oy = Math.max(0, Cy / 2 - B / 2),
                        xy = ".flatpickr-calendar.centerMost:before",
                        Ay = ".flatpickr-calendar.centerMost:after",
                        My = Pl.cssRules.length,
                        Iy = "{left:" + Se.left + "px;right:auto;}";
                    an(t.calendarContainer, "rightMost", !1), an(t.calendarContainer, "centerMost", !0), Pl.insertRule(xy + "," + Ay + Iy, My), t.calendarContainer.style.left = Oy + "px", t.calendarContainer.style.right = "auto"
                }
            }
        }
    }

    function te() {
        for (var E = null, T = 0; T < document.styleSheets.length; T++) {
            var N = document.styleSheets[T];
            if (N.cssRules) {
                try {
                    N.cssRules
                } catch {
                    continue
                }
                E = N;
                break
            }
        }
        return E ?? ie()
    }

    function ie() {
        var E = document.createElement("style");
        return document.head.appendChild(E), E.sheet
    }

    function X() {
        t.config.noCalendar || t.isMobile || (_(), re(), R())
    }

    function le() {
        t._input.focus(), window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0 ? setTimeout(t.close, 0) : t.close()
    }

    function ve(E) {
        E.preventDefault(), E.stopPropagation();
        var T = function(Ie) {
                return Ie.classList && Ie.classList.contains("flatpickr-day") && !Ie.classList.contains("flatpickr-disabled") && !Ie.classList.contains("notAllowed")
            },
            N = kv(On(E), T);
        if (N !== void 0) {
            var B = N,
                se = t.latestSelectedDateObj = new Date(B.dateObj.getTime()),
                he = (se.getMonth() < t.currentMonth || se.getMonth() > t.currentMonth + t.config.showMonths - 1) && t.config.mode !== "range";
            if (t.selectedDateElem = B, t.config.mode === "single") t.selectedDates = [se];
            else if (t.config.mode === "multiple") {
                var $e = we(se);
                $e ? t.selectedDates.splice(parseInt($e), 1) : t.selectedDates.push(se)
            } else t.config.mode === "range" && (t.selectedDates.length === 2 && t.clear(!1, !1), t.latestSelectedDateObj = se, t.selectedDates.push(se), xn(se, t.selectedDates[0], !0) !== 0 && t.selectedDates.sort(function(Ie, ht) {
                return Ie.getTime() - ht.getTime()
            }));
            if (f(), he) {
                var Se = t.currentYear !== se.getFullYear();
                t.currentYear = se.getFullYear(), t.currentMonth = se.getMonth(), Se && (Y("onYearChange"), _()), Y("onMonthChange")
            }
            if (re(), R(), Ee(), !he && t.config.mode !== "range" && t.config.showMonths === 1 ? F(B) : t.selectedDateElem !== void 0 && t.hourElement === void 0 && t.selectedDateElem && t.selectedDateElem.focus(), t.hourElement !== void 0 && t.hourElement !== void 0 && t.hourElement.focus(), t.config.closeOnSelect) {
                var Be = t.config.mode === "single" && !t.config.enableTime,
                    ye = t.config.mode === "range" && t.selectedDates.length === 2 && !t.config.enableTime;
                (Be || ye) && le()
            }
            y()
        }
    }
    var fe = {
        locale: [Q, Ce],
        showMonths: [G, a, J],
        minDate: [S],
        maxDate: [S],
        positionElement: [k],
        clickOpens: [function() {
            t.config.clickOpens === !0 ? (m(t._input, "focus", t.open), m(t._input, "click", t.open)) : (t._input.removeEventListener("focus", t.open), t._input.removeEventListener("click", t.open))
        }]
    };

    function Te(E, T) {
        if (E !== null && typeof E == "object") {
            Object.assign(t.config, E);
            for (var N in E) fe[N] !== void 0 && fe[N].forEach(function(B) {
                return B()
            })
        } else t.config[E] = T, fe[E] !== void 0 ? fe[E].forEach(function(B) {
            return B()
        }) : zl.indexOf(E) > -1 && (t.config[E] = Gl(T));
        t.redraw(), Ee(!0)
    }

    function Ae(E, T) {
        var N = [];
        if (E instanceof Array) N = E.map(function(B) {
            return t.parseDate(B, T)
        });
        else if (E instanceof Date || typeof E == "number") N = [t.parseDate(E, T)];
        else if (typeof E == "string") switch (t.config.mode) {
            case "single":
            case "time":
                N = [t.parseDate(E, T)];
                break;
            case "multiple":
                N = E.split(t.config.conjunction).map(function(B) {
                    return t.parseDate(B, T)
                });
                break;
            case "range":
                N = E.split(t.l10n.rangeSeparator).map(function(B) {
                    return t.parseDate(B, T)
                });
                break
        } else t.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(E)));
        t.selectedDates = t.config.allowInvalidPreload ? N : N.filter(function(B) {
            return B instanceof Date && Ne(B, !1)
        }), t.config.mode === "range" && t.selectedDates.sort(function(B, se) {
            return B.getTime() - se.getTime()
        })
    }

    function ze(E, T, N) {
        if (T === void 0 && (T = !1), N === void 0 && (N = t.config.dateFormat), E !== 0 && !E || E instanceof Array && E.length === 0) return t.clear(T);
        Ae(E, N), t.latestSelectedDateObj = t.selectedDates[t.selectedDates.length - 1], t.redraw(), S(void 0, T), d(), t.selectedDates.length === 0 && t.clear(!1), Ee(T), T && Y("onChange")
    }

    function g(E) {
        return E.slice().map(function(T) {
            return typeof T == "string" || typeof T == "number" || T instanceof Date ? t.parseDate(T, void 0, !0) : T && typeof T == "object" && T.from && T.to ? {
                from: t.parseDate(T.from, void 0),
                to: t.parseDate(T.to, void 0)
            } : T
        }).filter(function(T) {
            return T
        })
    }

    function v() {
        t.selectedDates = [], t.now = t.parseDate(t.config.now) || new Date;
        var E = t.config.defaultDate || ((t.input.nodeName === "INPUT" || t.input.nodeName === "TEXTAREA") && t.input.placeholder && t.input.value === t.input.placeholder ? null : t.input.value);
        E && Ae(E, t.config.dateFormat), t._initialDate = t.selectedDates.length > 0 ? t.selectedDates[0] : t.config.minDate && t.config.minDate.getTime() > t.now.getTime() ? t.config.minDate : t.config.maxDate && t.config.maxDate.getTime() < t.now.getTime() ? t.config.maxDate : t.now, t.currentYear = t._initialDate.getFullYear(), t.currentMonth = t._initialDate.getMonth(), t.selectedDates.length > 0 && (t.latestSelectedDateObj = t.selectedDates[0]), t.config.minTime !== void 0 && (t.config.minTime = t.parseDate(t.config.minTime, "H:i")), t.config.maxTime !== void 0 && (t.config.maxTime = t.parseDate(t.config.maxTime, "H:i")), t.minDateHasTime = !!t.config.minDate && (t.config.minDate.getHours() > 0 || t.config.minDate.getMinutes() > 0 || t.config.minDate.getSeconds() > 0), t.maxDateHasTime = !!t.config.maxDate && (t.config.maxDate.getHours() > 0 || t.config.maxDate.getMinutes() > 0 || t.config.maxDate.getSeconds() > 0)
    }

    function A() {
        if (t.input = K(), !t.input) {
            t.config.errorHandler(new Error("Invalid input element specified"));
            return
        }
        t.input._type = t.input.type, t.input.type = "text", t.input.classList.add("flatpickr-input"), t._input = t.input, t.config.altInput && (t.altInput = rt(t.input.nodeName, t.config.altInputClass), t._input = t.altInput, t.altInput.placeholder = t.input.placeholder, t.altInput.disabled = t.input.disabled, t.altInput.required = t.input.required, t.altInput.tabIndex = t.input.tabIndex, t.altInput.type = "text", t.input.setAttribute("type", "hidden"), !t.config.static && t.input.parentNode && t.input.parentNode.insertBefore(t.altInput, t.input.nextSibling)), t.config.allowInput || t._input.setAttribute("readonly", "readonly"), k()
    }

    function k() {
        t._positionElement = t.config.positionElement || t._input
    }

    function z() {
        var E = t.config.enableTime ? t.config.noCalendar ? "time" : "datetime-local" : "date";
        t.mobileInput = rt("input", t.input.className + " flatpickr-mobile"), t.mobileInput.tabIndex = 1, t.mobileInput.type = E, t.mobileInput.disabled = t.input.disabled, t.mobileInput.required = t.input.required, t.mobileInput.placeholder = t.input.placeholder, t.mobileFormatStr = E === "datetime-local" ? "Y-m-d\\TH:i:S" : E === "date" ? "Y-m-d" : "H:i:S", t.selectedDates.length > 0 && (t.mobileInput.defaultValue = t.mobileInput.value = t.formatDate(t.selectedDates[0], t.mobileFormatStr)), t.config.minDate && (t.mobileInput.min = t.formatDate(t.config.minDate, "Y-m-d")), t.config.maxDate && (t.mobileInput.max = t.formatDate(t.config.maxDate, "Y-m-d")), t.input.getAttribute("step") && (t.mobileInput.step = String(t.input.getAttribute("step"))), t.input.type = "hidden", t.altInput !== void 0 && (t.altInput.type = "hidden");
        try {
            t.input.parentNode && t.input.parentNode.insertBefore(t.mobileInput, t.input.nextSibling)
        } catch {}
        m(t.mobileInput, "change", function(T) {
            t.setDate(On(T).value, !1, t.mobileFormatStr), Y("onChange"), Y("onClose")
        })
    }

    function ee(E) {
        if (t.isOpen === !0) return t.close();
        t.open(E)
    }

    function Y(E, T) {
        if (t.config !== void 0) {
            var N = t.config[E];
            if (N !== void 0 && N.length > 0)
                for (var B = 0; N[B] && B < N.length; B++) N[B](t.selectedDates, t.input.value, t, T);
            E === "onChange" && (t.input.dispatchEvent(ue("change")), t.input.dispatchEvent(ue("input")))
        }
    }

    function ue(E) {
        var T = document.createEvent("Event");
        return T.initEvent(E, !0, !0), T
    }

    function we(E) {
        for (var T = 0; T < t.selectedDates.length; T++) {
            var N = t.selectedDates[T];
            if (N instanceof Date && xn(N, E) === 0) return "" + T
        }
        return !1
    }

    function me(E) {
        return t.config.mode !== "range" || t.selectedDates.length < 2 ? !1 : xn(E, t.selectedDates[0]) >= 0 && xn(E, t.selectedDates[1]) <= 0
    }

    function re() {
        t.config.noCalendar || t.isMobile || !t.monthNav || (t.yearElements.forEach(function(E, T) {
            var N = new Date(t.currentYear, t.currentMonth, 1);
            N.setMonth(t.currentMonth + T), t.config.showMonths > 1 || t.config.monthSelectorType === "static" ? t.monthElements[T].textContent = Ka(N.getMonth(), t.config.shorthandCurrentMonth, t.l10n) + " " : t.monthsDropdownContainer.value = N.getMonth().toString(), E.value = N.getFullYear().toString()
        }), t._hidePrevMonthArrow = t.config.minDate !== void 0 && (t.currentYear === t.config.minDate.getFullYear() ? t.currentMonth <= t.config.minDate.getMonth() : t.currentYear < t.config.minDate.getFullYear()), t._hideNextMonthArrow = t.config.maxDate !== void 0 && (t.currentYear === t.config.maxDate.getFullYear() ? t.currentMonth + 1 > t.config.maxDate.getMonth() : t.currentYear > t.config.maxDate.getFullYear()))
    }

    function de(E) {
        var T = E || (t.config.altInput ? t.config.altFormat : t.config.dateFormat);
        return t.selectedDates.map(function(N) {
            return t.formatDate(N, T)
        }).filter(function(N, B, se) {
            return t.config.mode !== "range" || t.config.enableTime || se.indexOf(N) === B
        }).join(t.config.mode !== "range" ? t.config.conjunction : t.l10n.rangeSeparator)
    }

    function Ee(E) {
        E === void 0 && (E = !0), t.mobileInput !== void 0 && t.mobileFormatStr && (t.mobileInput.value = t.latestSelectedDateObj !== void 0 ? t.formatDate(t.latestSelectedDateObj, t.mobileFormatStr) : ""), t.input.value = de(t.config.dateFormat), t.altInput !== void 0 && (t.altInput.value = de(t.config.altFormat)), E !== !1 && Y("onValueUpdate")
    }

    function Me(E) {
        var T = On(E),
            N = t.prevMonthNav.contains(T),
            B = t.nextMonthNav.contains(T);
        N || B ? Pe(N ? -1 : 1) : t.yearElements.indexOf(T) >= 0 ? T.select() : T.classList.contains("arrowUp") ? t.changeYear(t.currentYear + 1) : T.classList.contains("arrowDown") && t.changeYear(t.currentYear - 1)
    }

    function At(E) {
        E.preventDefault();
        var T = E.type === "keydown",
            N = On(E),
            B = N;
        t.amPM !== void 0 && N === t.amPM && (t.amPM.textContent = t.l10n.amPM[Hn(t.amPM.textContent === t.l10n.amPM[0])]);
        var se = parseFloat(B.getAttribute("min")),
            he = parseFloat(B.getAttribute("max")),
            $e = parseFloat(B.getAttribute("step")),
            Se = parseInt(B.value, 10),
            Be = E.delta || (T ? E.which === 38 ? 1 : -1 : 0),
            ye = Se + $e * Be;
        if (typeof B.value < "u" && B.value.length === 2) {
            var Ie = B === t.hourElement,
                ht = B === t.minuteElement;
            ye < se ? (ye = he + ye + Hn(!Ie) + (Hn(Ie) && Hn(!t.amPM)), ht && w(void 0, -1, t.hourElement)) : ye > he && (ye = B === t.hourElement ? ye - he - Hn(!t.amPM) : se, ht && w(void 0, 1, t.hourElement)), t.amPM && Ie && ($e === 1 ? ye + Se === 23 : Math.abs(ye - Se) > $e) && (t.amPM.textContent = t.l10n.amPM[Hn(t.amPM.textContent === t.l10n.amPM[0])]), B.value = vn(ye)
        }
    }
    return r(), t
}

function qr(e, n) {
    for (var t = Array.prototype.slice.call(e).filter(function(o) {
            return o instanceof HTMLElement
        }), i = [], r = 0; r < t.length; r++) {
        var s = t[r];
        try {
            if (s.getAttribute("data-fp-omit") !== null) continue;
            s._flatpickr !== void 0 && (s._flatpickr.destroy(), s._flatpickr = void 0), s._flatpickr = _D(s, n || {}), i.push(s._flatpickr)
        } catch (o) {
            console.error(o)
        }
    }
    return i.length === 1 ? i[0] : i
}
typeof HTMLElement < "u" && typeof HTMLCollection < "u" && typeof NodeList < "u" && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(e) {
    return qr(this, e)
}, HTMLElement.prototype.flatpickr = function(e) {
    return qr([this], e)
});
var kt = function(e, n) {
    return typeof e == "string" ? qr(window.document.querySelectorAll(e), n) : e instanceof Node ? qr([e], n) : qr(e, n)
};
kt.defaultConfig = {};
kt.l10ns = {
    en: tn({}, oo),
    default: tn({}, oo)
};
kt.localize = function(e) {
    kt.l10ns.default = tn(tn({}, kt.l10ns.default), e)
};
kt.setDefaults = function(e) {
    kt.defaultConfig = tn(tn({}, kt.defaultConfig), e)
};
kt.parseDate = Ku({});
kt.formatDate = $v({});
kt.compareDates = xn;
typeof jQuery < "u" && typeof jQuery.fn < "u" && (jQuery.fn.flatpickr = function(e) {
    return qr(this, e)
});
Date.prototype.fp_incr = function(e) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof e == "string" ? parseInt(e, 10) : e))
};
typeof window < "u" && (window.flatpickr = kt);
const FD = {
    install: e => {
        window.Flatpickr = kt;
        const n = i => {
                var s;
                if ((s = document.getElementById("flatpickr")) == null || s.remove(), i === "light") return;
                const r = document.createElement("link");
                r.rel = "stylesheet", r.type = "text/css", r.href = `https://npmcdn.com/flatpickr/dist/themes/${i}.css`, r.id = "flatpickr", document.head.appendChild(r)
            },
            t = document.documentElement.classList.contains("dark") ? "dark" : "light";
        n(t), e.config.globalProperties.$emitter.on("change-theme", i => {
            n(i)
        })
    }
};
/**
 * vue v3.4.32
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const LD = () => {},
    kD = Object.freeze(Object.defineProperty({
        __proto__: null,
        BaseTransition: yc,
        BaseTransitionPropsValidators: dl,
        Comment: Bt,
        DeprecationTypes: rg,
        EffectScope: il,
        ErrorCodes: Fp,
        ErrorTypeStrings: Qm,
        Fragment: et,
        KeepAlive: zp,
        ReactiveEffect: Cr,
        Static: Xi,
        Suspense: Fm,
        Teleport: Om,
        Text: Di,
        TrackOpTypes: Np,
        Transition: tr,
        TransitionGroup: zc,
        TriggerOpTypes: Rp,
        VueElement: yo,
        assertNumber: _p,
        callWithAsyncErrorHandling: wn,
        callWithErrorHandling: ci,
        camelize: bt,
        capitalize: ir,
        cloneVNode: ri,
        compatUtils: ig,
        compile: LD,
        computed: Xe,
        createApp: Jc,
        createBlock: Rn,
        createCommentVNode: je,
        createElementBlock: ge,
        createElementVNode: yt,
        createHydrationRenderer: Nc,
        createPropsRestProxy: fm,
        createRenderer: Pc,
        createSSRApp: wg,
        createSlots: Gs,
        createStaticVNode: Bm,
        createTextVNode: Xt,
        createVNode: ot,
        customRef: gc,
        defineAsyncComponent: Kp,
        defineComponent: _r,
        defineCustomElement: Kc,
        defineEmits: em,
        defineExpose: tm,
        defineModel: rm,
        defineOptions: nm,
        defineProps: qp,
        defineSSRCustomElement: dg,
        defineSlots: im,
        devtools: qm,
        effect: dp,
        effectScope: lp,
        getCurrentInstance: Tn,
        getCurrentScope: ac,
        getTransitionRawChildren: uo,
        guardReactiveProps: Vc,
        h: er,
        handleError: or,
        hasInjectionContext: mm,
        hydrate: Xc,
        initCustomFormatter: Zm,
        initDirectivesForSSR: Cg,
        inject: Zi,
        isMemoSame: Uc,
        isProxy: al,
        isReactive: Gi,
        isReadonly: xi,
        isRef: _t,
        isRuntimeOnly: Km,
        isShallow: qi,
        isVNode: Mi,
        markRaw: dc,
        mergeDefaults: um,
        mergeModels: cm,
        mergeProps: Js,
        nextTick: cn,
        normalizeClass: Rt,
        normalizeProps: Sa,
        normalizeStyle: Kt,
        onActivated: bc,
        onBeforeMount: Sc,
        onBeforeUnmount: us,
        onBeforeUpdate: wc,
        onDeactivated: Ec,
        onErrorCaptured: Oc,
        onMounted: ar,
        onRenderTracked: Cc,
        onRenderTriggered: Tc,
        onScopeDispose: cp,
        onServerPrefetch: Dc,
        onUnmounted: ho,
        onUpdated: fo,
        openBlock: ae,
        popScopeId: Hp,
        provide: po,
        proxyRefs: ll,
        pushScopeId: Vp,
        queuePostFlushCb: Ys,
        reactive: Oi,
        readonly: lo,
        ref: Jt,
        registerRuntimeCompiler: Bc,
        render: Ra,
        renderList: fn,
        renderSlot: Qe,
        resolveComponent: ui,
        resolveDirective: Xp,
        resolveDynamicComponent: cs,
        resolveFilter: ng,
        resolveTransitionHooks: Or,
        setBlockTracking: xa,
        setDevtoolsHook: eg,
        setTransitionHooks: Ai,
        shallowReactive: fc,
        shallowReadonly: Op,
        shallowRef: mc,
        ssrContextKey: _c,
        ssrUtils: tg,
        stop: hp,
        toDisplayString: vt,
        toHandlerKey: br,
        toHandlers: Qp,
        toRaw: Ge,
        toRef: bi,
        toRefs: Ip,
        toValue: We,
        transformVNodeArgs: Vm,
        triggerRef: Mp,
        unref: ut,
        useAttrs: am,
        useCssModule: hg,
        useCssVars: fg,
        useModel: Nm,
        useSSRContext: Fc,
        useSlots: om,
        useTransitionState: fl,
        vModelCheckbox: ml,
        vModelDynamic: Zc,
        vModelRadio: gl,
        vModelSelect: Gc,
        vModelText: Qs,
        vShow: Yc,
        version: Wc,
        warn: Jm,
        watch: _n,
        watchEffect: Lc,
        watchPostEffect: kc,
        watchSyncEffect: $c,
        withAsyncContext: dm,
        withCtx: pt,
        withDefaults: sm,
        withDirectives: Up,
        withKeys: Na,
        withMemo: Xm,
        withModifiers: Vi,
        withScopeId: Bp
    }, Symbol.toStringTag, {
        value: "Module"
    }));
/**
 * vee-validate v4.13.2
 * (c) 2024 Abdelrahman Awad
 * @license MIT
 */
function zt(e) {
    return typeof e == "function"
}

function jv(e) {
    return e == null
}
const Pr = e => e !== null && !!e && typeof e == "object" && !Array.isArray(e);

function Cf(e) {
    return Number(e) >= 0
}

function $D(e) {
    const n = parseFloat(e);
    return isNaN(n) ? e : n
}

function jD(e) {
    return typeof e == "object" && e !== null
}

function VD(e) {
    return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
}

function rh(e) {
    if (!jD(e) || VD(e) !== "[object Object]") return !1;
    if (Object.getPrototypeOf(e) === null) return !0;
    let n = e;
    for (; Object.getPrototypeOf(n) !== null;) n = Object.getPrototypeOf(n);
    return Object.getPrototypeOf(e) === n
}

function ao(e, n) {
    return Object.keys(n).forEach(t => {
        if (rh(n[t]) && rh(e[t])) {
            e[t] || (e[t] = {}), ao(e[t], n[t]);
            return
        }
        e[t] = n[t]
    }), e
}

function Cs(e) {
    const n = e.split(".");
    if (!n.length) return "";
    let t = String(n[0]);
    for (let i = 1; i < n.length; i++) {
        if (Cf(n[i])) {
            t += `[${n[i]}]`;
            continue
        }
        t += `.${n[i]}`
    }
    return t
}
const Vv = {};

function gi(e, n) {
    BD(e, n), Vv[e] = n
}

function HD(e) {
    return Vv[e]
}

function BD(e, n) {
    if (!zt(n)) throw new Error(`Extension Error: The validator '${e}' must be a function.`)
}

function sh(e, n, t) {
    typeof t.value == "object" && (t.value = lt(t.value)), !t.enumerable || t.get || t.set || !t.configurable || !t.writable || n === "__proto__" ? Object.defineProperty(e, n, t) : e[n] = t.value
}

function lt(e) {
    if (typeof e != "object") return e;
    var n = 0,
        t, i, r, s = Object.prototype.toString.call(e);
    if (s === "[object Object]" ? r = Object.create(e.__proto__ || null) : s === "[object Array]" ? r = Array(e.length) : s === "[object Set]" ? (r = new Set, e.forEach(function(o) {
            r.add(lt(o))
        })) : s === "[object Map]" ? (r = new Map, e.forEach(function(o, a) {
            r.set(lt(a), lt(o))
        })) : s === "[object Date]" ? r = new Date(+e) : s === "[object RegExp]" ? r = new RegExp(e.source, e.flags) : s === "[object DataView]" ? r = new e.constructor(lt(e.buffer)) : s === "[object ArrayBuffer]" ? r = e.slice(0) : s.slice(-6) === "Array]" && (r = new e.constructor(e)), r) {
        for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) sh(r, i[n], Object.getOwnPropertyDescriptor(e, i[n]));
        for (n = 0, i = Object.getOwnPropertyNames(e); n < i.length; n++) Object.hasOwnProperty.call(r, t = i[n]) && r[t] === e[t] || sh(r, t, Object.getOwnPropertyDescriptor(e, t))
    }
    return r || e
}
const xl = Symbol("vee-validate-form"),
    UD = Symbol("vee-validate-field-instance"),
    za = Symbol("Default empty value"),
    WD = typeof window < "u";

function zu(e) {
    return zt(e) && !!e.__locatorRef
}

function qn(e) {
    return !!e && zt(e.parse) && e.__type === "VVTypedSchema"
}

function Ga(e) {
    return !!e && zt(e.validate)
}

function To(e) {
    return e === "checkbox" || e === "radio"
}

function YD(e) {
    return Pr(e) || Array.isArray(e)
}

function KD(e) {
    return Array.isArray(e) ? e.length === 0 : Pr(e) && Object.keys(e).length === 0
}

function Al(e) {
    return /^\[.+\]$/i.test(e)
}

function zD(e) {
    return Hv(e) && e.multiple
}

function Hv(e) {
    return e.tagName === "SELECT"
}

function GD(e, n) {
    const t = ![!1, null, void 0, 0].includes(n.multiple) && !Number.isNaN(n.multiple);
    return e === "select" && "multiple" in n && t
}

function ZD(e, n) {
    return !GD(e, n) && n.type !== "file" && !To(n.type)
}

function Bv(e) {
    return Of(e) && e.target && "submit" in e.target
}

function Of(e) {
    return e ? !!(typeof Event < "u" && zt(Event) && e instanceof Event || e && e.srcElement) : !1
}

function oh(e, n) {
    return n in e && e[n] !== za
}

function dn(e, n) {
    if (e === n) return !0;
    if (e && n && typeof e == "object" && typeof n == "object") {
        if (e.constructor !== n.constructor) return !1;
        var t, i, r;
        if (Array.isArray(e)) {
            if (t = e.length, t != n.length) return !1;
            for (i = t; i-- !== 0;)
                if (!dn(e[i], n[i])) return !1;
            return !0
        }
        if (e instanceof Map && n instanceof Map) {
            if (e.size !== n.size) return !1;
            for (i of e.entries())
                if (!n.has(i[0])) return !1;
            for (i of e.entries())
                if (!dn(i[1], n.get(i[0]))) return !1;
            return !0
        }
        if (ah(e) && ah(n)) return !(e.size !== n.size || e.name !== n.name || e.lastModified !== n.lastModified || e.type !== n.type);
        if (e instanceof Set && n instanceof Set) {
            if (e.size !== n.size) return !1;
            for (i of e.entries())
                if (!n.has(i[0])) return !1;
            return !0
        }
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(n)) {
            if (t = e.length, t != n.length) return !1;
            for (i = t; i-- !== 0;)
                if (e[i] !== n[i]) return !1;
            return !0
        }
        if (e.constructor === RegExp) return e.source === n.source && e.flags === n.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === n.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === n.toString();
        for (r = Object.keys(e), t = r.length, i = t; i-- !== 0;) {
            var s = r[i];
            if (!dn(e[s], n[s])) return !1
        }
        return !0
    }
    return e !== e && n !== n
}

function ah(e) {
    return WD ? e instanceof File : !1
}

function xf(e) {
    return Al(e) ? e.replace(/\[|\]/gi, "") : e
}

function En(e, n, t) {
    return e ? Al(n) ? e[xf(n)] : (n || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((r, s) => YD(r) && s in r ? r[s] : t, e) : t
}

function vi(e, n, t) {
    if (Al(n)) {
        e[xf(n)] = t;
        return
    }
    const i = n.split(/\.|\[(\d+)\]/).filter(Boolean);
    let r = e;
    for (let s = 0; s < i.length; s++) {
        if (s === i.length - 1) {
            r[i[s]] = t;
            return
        }(!(i[s] in r) || jv(r[i[s]])) && (r[i[s]] = Cf(i[s + 1]) ? [] : {}), r = r[i[s]]
    }
}

function Ql(e, n) {
    if (Array.isArray(e) && Cf(n)) {
        e.splice(Number(n), 1);
        return
    }
    Pr(e) && delete e[n]
}

function lh(e, n) {
    if (Al(n)) {
        delete e[xf(n)];
        return
    }
    const t = n.split(/\.|\[(\d+)\]/).filter(Boolean);
    let i = e;
    for (let s = 0; s < t.length; s++) {
        if (s === t.length - 1) {
            Ql(i, t[s]);
            break
        }
        if (!(t[s] in i) || jv(i[t[s]])) break;
        i = i[t[s]]
    }
    const r = t.map((s, o) => En(e, t.slice(0, o).join(".")));
    for (let s = r.length - 1; s >= 0; s--)
        if (KD(r[s])) {
            if (s === 0) {
                Ql(e, t[0]);
                continue
            }
            Ql(r[s - 1], t[s - 1])
        }
}

function Pn(e) {
    return Object.keys(e)
}

function Uv(e, n = void 0) {
    const t = Tn();
    return (t == null ? void 0 : t.provides[e]) || Zi(e, n)
}

function uh(e, n, t) {
    if (Array.isArray(e)) {
        const i = [...e],
            r = i.findIndex(s => dn(s, n));
        return r >= 0 ? i.splice(r, 1) : i.push(n), i
    }
    return dn(e, n) ? t : n
}

function ch(e, n = 0) {
    let t = null,
        i = [];
    return function(...r) {
        return t && clearTimeout(t), t = setTimeout(() => {
            const s = e(...r);
            i.forEach(o => o(s)), i = []
        }, n), new Promise(s => i.push(s))
    }
}

function XD(e, n) {
    return Pr(n) && n.number ? $D(e) : e
}

function Gu(e, n) {
    let t;
    return async function(...r) {
        const s = e(...r);
        t = s;
        const o = await s;
        return s !== t ? o : (t = void 0, n(o, r))
    }
}

function Zu(e) {
    return Array.isArray(e) ? e : e ? [e] : []
}

function Yo(e, n) {
    const t = {};
    for (const i in e) n.includes(i) || (t[i] = e[i]);
    return t
}

function JD(e) {
    let n = null,
        t = [];
    return function(...i) {
        const r = cn(() => {
            if (n !== r) return;
            const s = e(...i);
            t.forEach(o => o(s)), t = [], n = null
        });
        return n = r, new Promise(s => t.push(s))
    }
}

function Af(e, n, t) {
    return n.slots.default ? typeof e == "string" || !e ? n.slots.default(t()) : {
        default: () => {
            var i, r;
            return (r = (i = n.slots).default) === null || r === void 0 ? void 0 : r.call(i, t())
        }
    } : n.slots.default
}

function ql(e) {
    if (Wv(e)) return e._value
}

function Wv(e) {
    return "_value" in e
}

function QD(e) {
    return e.type === "number" || e.type === "range" ? Number.isNaN(e.valueAsNumber) ? e.value : e.valueAsNumber : e.value
}

function Za(e) {
    if (!Of(e)) return e;
    const n = e.target;
    if (To(n.type) && Wv(n)) return ql(n);
    if (n.type === "file" && n.files) {
        const t = Array.from(n.files);
        return n.multiple ? t : t[0]
    }
    if (zD(n)) return Array.from(n.options).filter(t => t.selected && !t.disabled).map(ql);
    if (Hv(n)) {
        const t = Array.from(n.options).find(i => i.selected);
        return t ? ql(t) : n.value
    }
    return QD(n)
}

function Yv(e) {
    const n = {};
    return Object.defineProperty(n, "_$$isNormalized", {
        value: !0,
        writable: !1,
        enumerable: !1,
        configurable: !1
    }), e ? Pr(e) && e._$$isNormalized ? e : Pr(e) ? Object.keys(e).reduce((t, i) => {
        const r = qD(e[i]);
        return e[i] !== !1 && (t[i] = fh(r)), t
    }, n) : typeof e != "string" ? n : e.split("|").reduce((t, i) => {
        const r = eT(i);
        return r.name && (t[r.name] = fh(r.params)), t
    }, n) : n
}

function qD(e) {
    return e === !0 ? [] : Array.isArray(e) || Pr(e) ? e : [e]
}

function fh(e) {
    const n = t => typeof t == "string" && t[0] === "@" ? tT(t.slice(1)) : t;
    return Array.isArray(e) ? e.map(n) : e instanceof RegExp ? [e] : Object.keys(e).reduce((t, i) => (t[i] = n(e[i]), t), {})
}
const eT = e => {
    let n = [];
    const t = e.split(":")[0];
    return e.includes(":") && (n = e.split(":").slice(1).join(":").split(",")), {
        name: t,
        params: n
    }
};

function tT(e) {
    const n = t => En(t, e) || t[e];
    return n.__locatorRef = e, n
}

function nT(e) {
    return Array.isArray(e) ? e.filter(zu) : Pn(e).filter(n => zu(e[n])).map(n => e[n])
}
const iT = {
    generateMessage: ({
        field: e
    }) => `${e} não é válido(a).`,
    bails: !0,
    validateOnBlur: !0,
    validateOnChange: !0,
    validateOnInput: !1,
    validateOnModelUpdate: !0
};
let Xu = Object.assign({}, iT);
const yr = () => Xu,
    rT = e => {
        Xu = Object.assign(Object.assign({}, Xu), e)
    },
    sT = rT;
async function Kv(e, n, t = {}) {
    const i = t == null ? void 0 : t.bails,
        r = {
            name: (t == null ? void 0 : t.name) || "{field}",
            rules: n,
            label: t == null ? void 0 : t.label,
            bails: i ?? !0,
            formData: (t == null ? void 0 : t.values) || {}
        },
        s = await oT(r, e);
    return Object.assign(Object.assign({}, s), {
        valid: !s.errors.length
    })
}
async function oT(e, n) {
    const t = e.rules;
    if (qn(t) || Ga(t)) return lT(n, Object.assign(Object.assign({}, e), {
        rules: t
    }));
    if (zt(t) || Array.isArray(t)) {
        const a = {
                field: e.label || e.name,
                name: e.name,
                label: e.label,
                form: e.formData,
                value: n
            },
            l = Array.isArray(t) ? t : [t],
            u = l.length,
            c = [];
        for (let f = 0; f < u; f++) {
            const d = l[f],
                h = await d(n, a);
            if (!(typeof h != "string" && !Array.isArray(h) && h)) {
                if (Array.isArray(h)) c.push(...h);
                else {
                    const m = typeof h == "string" ? h : Gv(a);
                    c.push(m)
                }
                if (e.bails) return {
                    errors: c
                }
            }
        }
        return {
            errors: c
        }
    }
    const i = Object.assign(Object.assign({}, e), {
            rules: Yv(t)
        }),
        r = [],
        s = Object.keys(i.rules),
        o = s.length;
    for (let a = 0; a < o; a++) {
        const l = s[a],
            u = await uT(i, n, {
                name: l,
                params: i.rules[l]
            });
        if (u.error && (r.push(u.error), e.bails)) return {
            errors: r
        }
    }
    return {
        errors: r
    }
}

function aT(e) {
    return !!e && e.name === "ValidationError"
}

function zv(e) {
    return {
        __type: "VVTypedSchema",
        async parse(t, i) {
            var r;
            try {
                return {
                    output: await e.validate(t, {
                        abortEarly: !1,
                        context: (i == null ? void 0 : i.formData) || {}
                    }),
                    errors: []
                }
            } catch (s) {
                if (!aT(s)) throw s;
                if (!(!((r = s.inner) === null || r === void 0) && r.length) && s.errors.length) return {
                    errors: [{
                        path: s.path,
                        errors: s.errors
                    }]
                };
                const o = s.inner.reduce((a, l) => {
                    const u = l.path || "";
                    return a[u] || (a[u] = {
                        errors: [],
                        path: u
                    }), a[u].errors.push(...l.errors), a
                }, {});
                return {
                    errors: Object.values(o)
                }
            }
        }
    }
}
async function lT(e, n) {
    const i = await (qn(n.rules) ? n.rules : zv(n.rules)).parse(e, {
            formData: n.formData
        }),
        r = [];
    for (const s of i.errors) s.errors.length && r.push(...s.errors);
    return {
        value: i.value,
        errors: r
    }
}
async function uT(e, n, t) {
    const i = HD(t.name);
    if (!i) throw new Error(`No such validator '${t.name}' exists.`);
    const r = cT(t.params, e.formData),
        s = {
            field: e.label || e.name,
            name: e.name,
            label: e.label,
            value: n,
            form: e.formData,
            rule: Object.assign(Object.assign({}, t), {
                params: r
            })
        },
        o = await i(n, r, s);
    return typeof o == "string" ? {
        error: o
    } : {
        error: o ? void 0 : Gv(s)
    }
}

function Gv(e) {
    const n = yr().generateMessage;
    return n ? n(e) : "Field is invalid"
}

function cT(e, n) {
    const t = i => zu(i) ? i(n) : i;
    return Array.isArray(e) ? e.map(t) : Object.keys(e).reduce((i, r) => (i[r] = t(e[r]), i), {})
}
async function fT(e, n) {
    const i = await (qn(e) ? e : zv(e)).parse(lt(n)),
        r = {},
        s = {};
    for (const o of i.errors) {
        const a = o.errors,
            l = (o.path || "").replace(/\["(\d+)"\]/g, (u, c) => `[${c}]`);
        r[l] = {
            valid: !a.length,
            errors: a
        }, a.length && (s[l] = a[0])
    }
    return {
        valid: !i.errors.length,
        results: r,
        errors: s,
        values: i.value,
        source: "schema"
    }
}
async function dT(e, n, t) {
    const r = Pn(e).map(async u => {
        var c, f, d;
        const h = (c = t == null ? void 0 : t.names) === null || c === void 0 ? void 0 : c[u],
            p = await Kv(En(n, u), e[u], {
                name: (h == null ? void 0 : h.name) || u,
                label: h == null ? void 0 : h.label,
                values: n,
                bails: (d = (f = t == null ? void 0 : t.bailsMap) === null || f === void 0 ? void 0 : f[u]) !== null && d !== void 0 ? d : !0
            });
        return Object.assign(Object.assign({}, p), {
            path: u
        })
    });
    let s = !0;
    const o = await Promise.all(r),
        a = {},
        l = {};
    for (const u of o) a[u.path] = {
        valid: u.valid,
        errors: u.errors
    }, u.valid || (s = !1, l[u.path] = u.errors[0]);
    return {
        valid: s,
        results: a,
        errors: l,
        source: "schema"
    }
}
let dh = 0;

function hT(e, n) {
    const {
        value: t,
        initialValue: i,
        setInitialValue: r
    } = pT(e, n.modelValue, n.form);
    if (!n.form) {
        let d = function(h) {
            var p;
            "value" in h && (t.value = h.value), "errors" in h && u(h.errors), "touched" in h && (f.touched = (p = h.touched) !== null && p !== void 0 ? p : f.touched), "initialValue" in h && r(h.initialValue)
        };
        const {
            errors: l,
            setErrors: u
        } = vT(), c = dh >= Number.MAX_SAFE_INTEGER ? 0 : ++dh, f = gT(t, i, l, n.schema);
        return {
            id: c,
            path: e,
            value: t,
            initialValue: i,
            meta: f,
            flags: {
                pendingUnmount: {
                    [c]: !1
                },
                pendingReset: !1
            },
            errors: l,
            setState: d
        }
    }
    const s = n.form.createPathState(e, {
            bails: n.bails,
            label: n.label,
            type: n.type,
            validate: n.validate,
            schema: n.schema
        }),
        o = Xe(() => s.errors);

    function a(l) {
        var u, c, f;
        "value" in l && (t.value = l.value), "errors" in l && ((u = n.form) === null || u === void 0 || u.setFieldError(ut(e), l.errors)), "touched" in l && ((c = n.form) === null || c === void 0 || c.setFieldTouched(ut(e), (f = l.touched) !== null && f !== void 0 ? f : !1)), "initialValue" in l && r(l.initialValue)
    }
    return {
        id: Array.isArray(s.id) ? s.id[s.id.length - 1] : s.id,
        path: e,
        value: t,
        errors: o,
        meta: s,
        initialValue: i,
        flags: s.__flags,
        setState: a
    }
}

function pT(e, n, t) {
    const i = Jt(ut(n));

    function r() {
        return t ? En(t.initialValues.value, ut(e), ut(i)) : ut(i)
    }

    function s(u) {
        if (!t) {
            i.value = u;
            return
        }
        t.setFieldInitialValue(ut(e), u, !0)
    }
    const o = Xe(r);
    if (!t) return {
        value: Jt(r()),
        initialValue: o,
        setInitialValue: s
    };
    const a = mT(n, t, o, e);
    return t.stageInitialValue(ut(e), a, !0), {
        value: Xe({
            get() {
                return En(t.values, ut(e))
            },
            set(u) {
                t.setFieldValue(ut(e), u, !1)
            }
        }),
        initialValue: o,
        setInitialValue: s
    }
}

function mT(e, n, t, i) {
    return _t(e) ? ut(e) : e !== void 0 ? e : En(n.values, ut(i), ut(t))
}

function gT(e, n, t, i) {
    const r = Xe(() => {
            var o, a, l;
            return (l = (a = (o = We(i)) === null || o === void 0 ? void 0 : o.describe) === null || a === void 0 ? void 0 : a.call(o).required) !== null && l !== void 0 ? l : !1
        }),
        s = Oi({
            touched: !1,
            pending: !1,
            valid: !0,
            required: r,
            validated: !!ut(t).length,
            initialValue: Xe(() => ut(n)),
            dirty: Xe(() => !dn(ut(e), ut(n)))
        });
    return _n(t, o => {
        s.valid = !o.length
    }, {
        immediate: !0,
        flush: "sync"
    }), s
}

function vT() {
    const e = Jt([]);
    return {
        errors: e,
        setErrors: n => {
            e.value = Zu(n)
        }
    }
}

function yT(e, n, t) {
    return To(t == null ? void 0 : t.type) ? ET(e, n, t) : Zv(e, n, t)
}

function Zv(e, n, t) {
    const {
        initialValue: i,
        validateOnMount: r,
        bails: s,
        type: o,
        checkedValue: a,
        label: l,
        validateOnValueUpdate: u,
        uncheckedValue: c,
        controlled: f,
        keepValueOnUnmount: d,
        syncVModel: h,
        form: p
    } = bT(t), m = f ? Uv(xl) : void 0, y = p || m, D = Xe(() => Cs(We(e))), S = Xe(() => {
        if (We(y == null ? void 0 : y.schema)) return;
        const ce = ut(n);
        return Ga(ce) || qn(ce) || zt(ce) || Array.isArray(ce) ? ce : Yv(ce)
    }), b = !zt(S.value) && qn(We(n)), {
        id: w,
        value: x,
        initialValue: O,
        meta: F,
        setState: L,
        errors: C,
        flags: I
    } = hT(D, {
        modelValue: i,
        form: y,
        bails: s,
        label: l,
        type: o,
        validate: S.value ? $ : void 0,
        schema: b ? n : void 0
    }), j = Xe(() => C.value[0]);
    h && ST({
        value: x,
        prop: h,
        handleChange: W,
        shouldValidate: () => u && !I.pendingReset
    });
    const R = (q, ce = !1) => {
        F.touched = !0, ce && V()
    };
    async function _(q) {
        var ce, Ne;
        if (y != null && y.validateSchema) {
            const {
                results: De
            } = await y.validateSchema(q);
            return (ce = De[We(D)]) !== null && ce !== void 0 ? ce : {
                valid: !0,
                errors: []
            }
        }
        return S.value ? Kv(x.value, S.value, {
            name: We(D),
            label: We(l),
            values: (Ne = y == null ? void 0 : y.values) !== null && Ne !== void 0 ? Ne : {},
            bails: s
        }) : {
            valid: !0,
            errors: []
        }
    }
    const V = Gu(async () => (F.pending = !0, F.validated = !0, _("validated-only")), q => (I.pendingUnmount[Ye.id] || (L({
            errors: q.errors
        }), F.pending = !1, F.valid = q.valid), q)),
        G = Gu(async () => _("silent"), q => (F.valid = q.valid, q));

    function $(q) {
        return (q == null ? void 0 : q.mode) === "silent" ? G() : V()
    }

    function W(q, ce = !0) {
        const Ne = Za(q);
        Pe(Ne, ce)
    }
    ar(() => {
        if (r) return V();
        (!y || !y.validateSchema) && G()
    });

    function J(q) {
        F.touched = q
    }

    function Ce(q) {
        var ce;
        const Ne = q && "value" in q ? q.value : O.value;
        L({
            value: lt(Ne),
            initialValue: lt(Ne),
            touched: (ce = q == null ? void 0 : q.touched) !== null && ce !== void 0 ? ce : !1,
            errors: (q == null ? void 0 : q.errors) || []
        }), F.pending = !1, F.validated = !1, G()
    }
    const Je = Tn();

    function Pe(q, ce = !0) {
        x.value = Je && h ? XD(q, Je.props.modelModifiers) : q, (ce ? V : G)()
    }

    function He(q) {
        L({
            errors: Array.isArray(q) ? q : [q]
        })
    }
    const at = Xe({
            get() {
                return x.value
            },
            set(q) {
                Pe(q, u)
            }
        }),
        Ye = {
            id: w,
            name: D,
            label: l,
            value: at,
            meta: F,
            errors: C,
            errorMessage: j,
            type: o,
            checkedValue: a,
            uncheckedValue: c,
            bails: s,
            keepValueOnUnmount: d,
            resetField: Ce,
            handleReset: () => Ce(),
            validate: $,
            handleChange: W,
            handleBlur: R,
            setState: L,
            setTouched: J,
            setErrors: He,
            setValue: Pe
        };
    if (po(UD, Ye), _t(n) && typeof ut(n) != "function" && _n(n, (q, ce) => {
            dn(q, ce) || (F.validated ? V() : G())
        }, {
            deep: !0
        }), !y) return Ye;
    const tt = Xe(() => {
        const q = S.value;
        return !q || zt(q) || Ga(q) || qn(q) || Array.isArray(q) ? {} : Object.keys(q).reduce((ce, Ne) => {
            const De = nT(q[Ne]).map(ft => ft.__locatorRef).reduce((ft, mt) => {
                const dt = En(y.values, mt) || y.values[mt];
                return dt !== void 0 && (ft[mt] = dt), ft
            }, {});
            return Object.assign(ce, De), ce
        }, {})
    });
    return _n(tt, (q, ce) => {
        if (!Object.keys(q).length) return;
        !dn(q, ce) && (F.validated ? V() : G())
    }), us(() => {
        var q;
        const ce = (q = We(Ye.keepValueOnUnmount)) !== null && q !== void 0 ? q : We(y.keepValuesOnUnmount),
            Ne = We(D);
        if (ce || !y || I.pendingUnmount[Ye.id]) {
            y == null || y.removePathState(Ne, w);
            return
        }
        I.pendingUnmount[Ye.id] = !0;
        const De = y.getPathState(Ne);
        if (Array.isArray(De == null ? void 0 : De.id) && (De != null && De.multiple) ? De != null && De.id.includes(Ye.id) : (De == null ? void 0 : De.id) === Ye.id) {
            if (De != null && De.multiple && Array.isArray(De.value)) {
                const mt = De.value.findIndex(dt => dn(dt, We(Ye.checkedValue)));
                if (mt > -1) {
                    const dt = [...De.value];
                    dt.splice(mt, 1), y.setFieldValue(Ne, dt)
                }
                Array.isArray(De.id) && De.id.splice(De.id.indexOf(Ye.id), 1)
            } else y.unsetPathValue(We(D));
            y.removePathState(Ne, w)
        }
    }), Ye
}

function bT(e) {
    const n = () => ({
            initialValue: void 0,
            validateOnMount: !1,
            bails: !0,
            label: void 0,
            validateOnValueUpdate: !0,
            keepValueOnUnmount: void 0,
            syncVModel: !1,
            controlled: !0
        }),
        t = !!(e != null && e.syncVModel),
        i = typeof(e == null ? void 0 : e.syncVModel) == "string" ? e.syncVModel : (e == null ? void 0 : e.modelPropName) || "modelValue",
        r = t && !("initialValue" in (e || {})) ? Ju(Tn(), i) : e == null ? void 0 : e.initialValue;
    if (!e) return Object.assign(Object.assign({}, n()), {
        initialValue: r
    });
    const s = "valueProp" in e ? e.valueProp : e.checkedValue,
        o = "standalone" in e ? !e.standalone : e.controlled,
        a = (e == null ? void 0 : e.modelPropName) || (e == null ? void 0 : e.syncVModel) || !1;
    return Object.assign(Object.assign(Object.assign({}, n()), e || {}), {
        initialValue: r,
        controlled: o ?? !0,
        checkedValue: s,
        syncVModel: a
    })
}

function ET(e, n, t) {
    const i = t != null && t.standalone ? void 0 : Uv(xl),
        r = t == null ? void 0 : t.checkedValue,
        s = t == null ? void 0 : t.uncheckedValue;

    function o(a) {
        const l = a.handleChange,
            u = Xe(() => {
                const f = We(a.value),
                    d = We(r);
                return Array.isArray(f) ? f.findIndex(h => dn(h, d)) >= 0 : dn(d, f)
            });

        function c(f, d = !0) {
            var h, p;
            if (u.value === ((h = f == null ? void 0 : f.target) === null || h === void 0 ? void 0 : h.checked)) {
                d && a.validate();
                return
            }
            const m = We(e),
                y = i == null ? void 0 : i.getPathState(m),
                D = Za(f);
            let S = (p = We(r)) !== null && p !== void 0 ? p : D;
            i && (y != null && y.multiple) && y.type === "checkbox" ? S = uh(En(i.values, m) || [], S, void 0) : (t == null ? void 0 : t.type) === "checkbox" && (S = uh(We(a.value), S, We(s))), l(S, d)
        }
        return Object.assign(Object.assign({}, a), {
            checked: u,
            checkedValue: r,
            uncheckedValue: s,
            handleChange: c
        })
    }
    return o(Zv(e, n, t))
}

function ST({
    prop: e,
    value: n,
    handleChange: t,
    shouldValidate: i
}) {
    const r = Tn();
    if (!r || !e) return;
    const s = typeof e == "string" ? e : "modelValue",
        o = `update:${s}`;
    s in r.props && (_n(n, a => {
        dn(a, Ju(r, s)) || r.emit(o, a)
    }), _n(() => Ju(r, s), a => {
        if (a === za && n.value === void 0) return;
        const l = a === za ? void 0 : a;
        dn(l, n.value) || t(l, i())
    }))
}

function Ju(e, n) {
    if (e) return e.props[n]
}
const wT = _r({
    name: "Field",
    inheritAttrs: !1,
    props: {
        as: {
            type: [String, Object],
            default: void 0
        },
        name: {
            type: String,
            required: !0
        },
        rules: {
            type: [Object, String, Function],
            default: void 0
        },
        validateOnMount: {
            type: Boolean,
            default: !1
        },
        validateOnBlur: {
            type: Boolean,
            default: void 0
        },
        validateOnChange: {
            type: Boolean,
            default: void 0
        },
        validateOnInput: {
            type: Boolean,
            default: void 0
        },
        validateOnModelUpdate: {
            type: Boolean,
            default: void 0
        },
        bails: {
            type: Boolean,
            default: () => yr().bails
        },
        label: {
            type: String,
            default: void 0
        },
        uncheckedValue: {
            type: null,
            default: void 0
        },
        modelValue: {
            type: null,
            default: za
        },
        modelModifiers: {
            type: null,
            default: () => ({})
        },
        "onUpdate:modelValue": {
            type: null,
            default: void 0
        },
        standalone: {
            type: Boolean,
            default: !1
        },
        keepValue: {
            type: Boolean,
            default: void 0
        }
    },
    setup(e, n) {
        const t = bi(e, "rules"),
            i = bi(e, "name"),
            r = bi(e, "label"),
            s = bi(e, "uncheckedValue"),
            o = bi(e, "keepValue"),
            {
                errors: a,
                value: l,
                errorMessage: u,
                validate: c,
                handleChange: f,
                handleBlur: d,
                setTouched: h,
                resetField: p,
                handleReset: m,
                meta: y,
                checked: D,
                setErrors: S,
                setValue: b
            } = yT(i, t, {
                validateOnMount: e.validateOnMount,
                bails: e.bails,
                standalone: e.standalone,
                type: n.attrs.type,
                initialValue: TT(e, n),
                checkedValue: n.attrs.value,
                uncheckedValue: s,
                label: r,
                validateOnValueUpdate: e.validateOnModelUpdate,
                keepValueOnUnmount: o,
                syncVModel: !0
            }),
            w = function(I, j = !0) {
                f(I, j)
            },
            x = Xe(() => {
                const {
                    validateOnInput: C,
                    validateOnChange: I,
                    validateOnBlur: j,
                    validateOnModelUpdate: R
                } = DT(e);

                function _(W) {
                    d(W, j), zt(n.attrs.onBlur) && n.attrs.onBlur(W)
                }

                function V(W) {
                    w(W, C), zt(n.attrs.onInput) && n.attrs.onInput(W)
                }

                function G(W) {
                    w(W, I), zt(n.attrs.onChange) && n.attrs.onChange(W)
                }
                const $ = {
                    name: e.name,
                    onBlur: _,
                    onInput: V,
                    onChange: G
                };
                return $["onUpdate:modelValue"] = W => w(W, R), $
            }),
            O = Xe(() => {
                const C = Object.assign({}, x.value);
                To(n.attrs.type) && D && (C.checked = D.value);
                const I = hh(e, n);
                return ZD(I, n.attrs) && (C.value = l.value), C
            }),
            F = Xe(() => Object.assign(Object.assign({}, x.value), {
                modelValue: l.value
            }));

        function L() {
            return {
                field: O.value,
                componentField: F.value,
                value: l.value,
                meta: y,
                errors: a.value,
                errorMessage: u.value,
                validate: c,
                resetField: p,
                handleChange: w,
                handleInput: C => w(C, !1),
                handleReset: m,
                handleBlur: x.value.onBlur,
                setTouched: h,
                setErrors: S,
                setValue: b
            }
        }
        return n.expose({
            value: l,
            meta: y,
            errors: a,
            errorMessage: u,
            setErrors: S,
            setTouched: h,
            setValue: b,
            reset: p,
            validate: c,
            handleChange: f
        }), () => {
            const C = cs(hh(e, n)),
                I = Af(C, n, L);
            return C ? er(C, Object.assign(Object.assign({}, n.attrs), O.value), I) : I
        }
    }
});

function hh(e, n) {
    let t = e.as || "";
    return !e.as && !n.slots.default && (t = "input"), t
}

function DT(e) {
    var n, t, i, r;
    const {
        validateOnInput: s,
        validateOnChange: o,
        validateOnBlur: a,
        validateOnModelUpdate: l
    } = yr();
    return {
        validateOnInput: (n = e.validateOnInput) !== null && n !== void 0 ? n : s,
        validateOnChange: (t = e.validateOnChange) !== null && t !== void 0 ? t : o,
        validateOnBlur: (i = e.validateOnBlur) !== null && i !== void 0 ? i : a,
        validateOnModelUpdate: (r = e.validateOnModelUpdate) !== null && r !== void 0 ? r : l
    }
}

function TT(e, n) {
    return To(n.attrs.type) ? oh(e, "modelValue") ? e.modelValue : void 0 : oh(e, "modelValue") ? e.modelValue : n.attrs.value
}
const CT = wT;
let OT = 0;
const Ko = ["bails", "fieldsCount", "id", "multiple", "type", "validate"];

function Xv(e) {
    const n = (e == null ? void 0 : e.initialValues) || {},
        t = Object.assign({}, We(n)),
        i = ut(e == null ? void 0 : e.validationSchema);
    return i && qn(i) && zt(i.cast) ? lt(i.cast(t) || {}) : lt(t)
}

function xT(e) {
    var n;
    const t = OT++;
    let i = 0;
    const r = Jt(!1),
        s = Jt(!1),
        o = Jt(0),
        a = [],
        l = Oi(Xv(e)),
        u = Jt([]),
        c = Jt({}),
        f = Jt({}),
        d = JD(() => {
            f.value = u.value.reduce((g, v) => (g[Cs(We(v.path))] = v, g), {})
        });

    function h(g, v) {
        const A = $(g);
        if (!A) {
            typeof g == "string" && (c.value[Cs(g)] = Zu(v));
            return
        }
        if (typeof g == "string") {
            const k = Cs(g);
            c.value[k] && delete c.value[k]
        }
        A.errors = Zu(v), A.valid = !A.errors.length
    }

    function p(g) {
        Pn(g).forEach(v => {
            h(v, g[v])
        })
    }
    e != null && e.initialErrors && p(e.initialErrors);
    const m = Xe(() => {
            const g = u.value.reduce((v, A) => (A.errors.length && (v[A.path] = A.errors), v), {});
            return Object.assign(Object.assign({}, c.value), g)
        }),
        y = Xe(() => Pn(m.value).reduce((g, v) => {
            const A = m.value[v];
            return A != null && A.length && (g[v] = A[0]), g
        }, {})),
        D = Xe(() => u.value.reduce((g, v) => (g[v.path] = {
            name: v.path || "",
            label: v.label || ""
        }, g), {})),
        S = Xe(() => u.value.reduce((g, v) => {
            var A;
            return g[v.path] = (A = v.bails) !== null && A !== void 0 ? A : !0, g
        }, {})),
        b = Object.assign({}, (e == null ? void 0 : e.initialErrors) || {}),
        w = (n = e == null ? void 0 : e.keepValuesOnUnmount) !== null && n !== void 0 ? n : !1,
        {
            initialValues: x,
            originalInitialValues: O,
            setInitialValues: F
        } = MT(u, l, e),
        L = AT(u, l, O, y),
        C = Xe(() => u.value.reduce((g, v) => {
            const A = En(l, v.path);
            return vi(g, v.path, A), g
        }, {})),
        I = e == null ? void 0 : e.validationSchema;

    function j(g, v) {
        var A, k;
        const z = Xe(() => En(x.value, We(g))),
            ee = f.value[We(g)],
            Y = (v == null ? void 0 : v.type) === "checkbox" || (v == null ? void 0 : v.type) === "radio";
        if (ee && Y) {
            ee.multiple = !0;
            const Me = i++;
            return Array.isArray(ee.id) ? ee.id.push(Me) : ee.id = [ee.id, Me], ee.fieldsCount++, ee.__flags.pendingUnmount[Me] = !1, ee
        }
        const ue = Xe(() => En(l, We(g))),
            we = We(g),
            me = J.findIndex(Me => Me === we);
        me !== -1 && J.splice(me, 1);
        const re = Xe(() => {
                var Me, At, E, T;
                const N = We(I);
                if (qn(N)) return (At = (Me = N.describe) === null || Me === void 0 ? void 0 : Me.call(N, We(g)).required) !== null && At !== void 0 ? At : !1;
                const B = We(v == null ? void 0 : v.schema);
                return qn(B) && (T = (E = B.describe) === null || E === void 0 ? void 0 : E.call(B).required) !== null && T !== void 0 ? T : !1
            }),
            de = i++,
            Ee = Oi({
                id: de,
                path: g,
                touched: !1,
                pending: !1,
                valid: !0,
                validated: !!(!((A = b[we]) === null || A === void 0) && A.length),
                required: re,
                initialValue: z,
                errors: mc([]),
                bails: (k = v == null ? void 0 : v.bails) !== null && k !== void 0 ? k : !1,
                label: v == null ? void 0 : v.label,
                type: (v == null ? void 0 : v.type) || "default",
                value: ue,
                multiple: !1,
                __flags: {
                    pendingUnmount: {
                        [de]: !1
                    },
                    pendingReset: !1
                },
                fieldsCount: 1,
                validate: v == null ? void 0 : v.validate,
                dirty: Xe(() => !dn(ut(ue), ut(z)))
            });
        return u.value.push(Ee), f.value[we] = Ee, d(), y.value[we] && !b[we] && cn(() => {
            ne(we, {
                mode: "silent"
            })
        }), _t(g) && _n(g, Me => {
            d();
            const At = lt(ue.value);
            f.value[Me] = Ee, cn(() => {
                vi(l, Me, At)
            })
        }), Ee
    }
    const R = ch(le, 5),
        _ = ch(le, 5),
        V = Gu(async g => await (g === "silent" ? R() : _()), (g, [v]) => {
            const A = Pn(q.errorBag.value),
                z = [...new Set([...Pn(g.results), ...u.value.map(ee => ee.path), ...A])].sort().reduce((ee, Y) => {
                    var ue;
                    const we = Y,
                        me = $(we) || W(we),
                        re = ((ue = g.results[we]) === null || ue === void 0 ? void 0 : ue.errors) || [],
                        de = We(me == null ? void 0 : me.path) || we,
                        Ee = IT({
                            errors: re,
                            valid: !re.length
                        }, ee.results[de]);
                    return ee.results[de] = Ee, Ee.valid || (ee.errors[de] = Ee.errors[0]), me && c.value[de] && delete c.value[de], me ? (me.valid = Ee.valid, v === "silent" || v === "validated-only" && !me.validated || h(me, Ee.errors), ee) : (h(de, re), ee)
                }, {
                    valid: g.valid,
                    results: {},
                    errors: {},
                    source: g.source
                });
            return g.values && (z.values = g.values, z.source = g.source), Pn(z.results).forEach(ee => {
                var Y;
                const ue = $(ee);
                ue && v !== "silent" && (v === "validated-only" && !ue.validated || h(ue, (Y = z.results[ee]) === null || Y === void 0 ? void 0 : Y.errors))
            }), z
        });

    function G(g) {
        u.value.forEach(g)
    }

    function $(g) {
        const v = typeof g == "string" ? Cs(g) : g;
        return typeof v == "string" ? f.value[v] : v
    }

    function W(g) {
        return u.value.filter(A => g.startsWith(A.path)).reduce((A, k) => A ? k.path.length > A.path.length ? k : A : k, void 0)
    }
    let J = [],
        Ce;

    function Je(g) {
        return J.push(g), Ce || (Ce = cn(() => {
            [...J].sort().reverse().forEach(A => {
                lh(l, A)
            }), J = [], Ce = null
        })), Ce
    }

    function Pe(g) {
        return function(A, k) {
            return function(ee) {
                return ee instanceof Event && (ee.preventDefault(), ee.stopPropagation()), G(Y => Y.touched = !0), r.value = !0, o.value++, Q().then(Y => {
                    const ue = lt(l);
                    if (Y.valid && typeof A == "function") {
                        const we = lt(C.value);
                        let me = g ? we : ue;
                        return Y.values && (me = Y.source === "schema" ? Y.values : Object.assign({}, me, Y.values)), A(me, {
                            evt: ee,
                            controlledValues: we,
                            setErrors: p,
                            setFieldError: h,
                            setTouched: H,
                            setFieldTouched: mt,
                            setValues: De,
                            setFieldValue: ce,
                            resetForm: K,
                            resetField: Z
                        })
                    }!Y.valid && typeof k == "function" && k({
                        values: ue,
                        evt: ee,
                        errors: Y.errors,
                        results: Y.results
                    })
                }).then(Y => (r.value = !1, Y), Y => {
                    throw r.value = !1, Y
                })
            }
        }
    }
    const at = Pe(!1);
    at.withControlled = Pe(!0);

    function Ye(g, v) {
        const A = u.value.findIndex(z => z.path === g && (Array.isArray(z.id) ? z.id.includes(v) : z.id === v)),
            k = u.value[A];
        if (!(A === -1 || !k)) {
            if (cn(() => {
                    ne(g, {
                        mode: "silent",
                        warn: !1
                    })
                }), k.multiple && k.fieldsCount && k.fieldsCount--, Array.isArray(k.id)) {
                const z = k.id.indexOf(v);
                z >= 0 && k.id.splice(z, 1), delete k.__flags.pendingUnmount[v]
            }(!k.multiple || k.fieldsCount <= 0) && (u.value.splice(A, 1), te(g), d(), delete f.value[g])
        }
    }

    function tt(g) {
        Pn(f.value).forEach(v => {
            v.startsWith(g) && delete f.value[v]
        }), u.value = u.value.filter(v => !v.path.startsWith(g)), cn(() => {
            d()
        })
    }
    const q = {
        formId: t,
        values: l,
        controlledValues: C,
        errorBag: m,
        errors: y,
        schema: I,
        submitCount: o,
        meta: L,
        isSubmitting: r,
        isValidating: s,
        fieldArrays: a,
        keepValuesOnUnmount: w,
        validateSchema: ut(I) ? V : void 0,
        validate: Q,
        setFieldError: h,
        validateField: ne,
        setFieldValue: ce,
        setValues: De,
        setErrors: p,
        setFieldTouched: mt,
        setTouched: H,
        resetForm: K,
        resetField: Z,
        handleSubmit: at,
        useFieldModel: Te,
        defineInputBinds: Ae,
        defineComponentBinds: ze,
        defineField: fe,
        stageInitialValue: ie,
        unsetInitialValue: te,
        setFieldInitialValue: X,
        createPathState: j,
        getPathState: $,
        unsetPathValue: Je,
        removePathState: Ye,
        initialValues: x,
        getAllPathStates: () => u.value,
        destroyPath: tt,
        isFieldTouched: dt,
        isFieldDirty: M,
        isFieldValid: P
    };

    function ce(g, v, A = !0) {
        const k = lt(v),
            z = typeof g == "string" ? g : g.path;
        $(z) || j(z), vi(l, z, k), A && ne(z)
    }

    function Ne(g, v = !0) {
        Pn(l).forEach(A => {
            delete l[A]
        }), Pn(g).forEach(A => {
            ce(A, g[A], !1)
        }), v && Q()
    }

    function De(g, v = !0) {
        ao(l, g), a.forEach(A => A && A.reset()), v && Q()
    }

    function ft(g, v) {
        const A = $(We(g)) || j(g);
        return Xe({
            get() {
                return A.value
            },
            set(k) {
                var z;
                const ee = We(g);
                ce(ee, k, (z = We(v)) !== null && z !== void 0 ? z : !1)
            }
        })
    }

    function mt(g, v) {
        const A = $(g);
        A && (A.touched = v)
    }

    function dt(g) {
        const v = $(g);
        return v ? v.touched : u.value.filter(A => A.path.startsWith(g)).some(A => A.touched)
    }

    function M(g) {
        const v = $(g);
        return v ? v.dirty : u.value.filter(A => A.path.startsWith(g)).some(A => A.dirty)
    }

    function P(g) {
        const v = $(g);
        return v ? v.valid : u.value.filter(A => A.path.startsWith(g)).every(A => A.valid)
    }

    function H(g) {
        if (typeof g == "boolean") {
            G(v => {
                v.touched = g
            });
            return
        }
        Pn(g).forEach(v => {
            mt(v, !!g[v])
        })
    }

    function Z(g, v) {
        var A;
        const k = v && "value" in v ? v.value : En(x.value, g),
            z = $(g);
        z && (z.__flags.pendingReset = !0), X(g, lt(k), !0), ce(g, k, !1), mt(g, (A = v == null ? void 0 : v.touched) !== null && A !== void 0 ? A : !1), h(g, (v == null ? void 0 : v.errors) || []), cn(() => {
            z && (z.__flags.pendingReset = !1)
        })
    }

    function K(g, v) {
        let A = lt(g != null && g.values ? g.values : O.value);
        A = v != null && v.force ? A : ao(O.value, A), A = qn(I) && zt(I.cast) ? I.cast(A) : A, F(A, {
            force: v == null ? void 0 : v.force
        }), G(k => {
            var z;
            k.__flags.pendingReset = !0, k.validated = !1, k.touched = ((z = g == null ? void 0 : g.touched) === null || z === void 0 ? void 0 : z[k.path]) || !1, ce(k.path, En(A, k.path), !1), h(k.path, void 0)
        }), v != null && v.force ? Ne(A, !1) : De(A, !1), p((g == null ? void 0 : g.errors) || {}), o.value = (g == null ? void 0 : g.submitCount) || 0, cn(() => {
            Q({
                mode: "silent"
            }), G(k => {
                k.__flags.pendingReset = !1
            })
        })
    }
    async function Q(g) {
        const v = (g == null ? void 0 : g.mode) || "force";
        if (v === "force" && G(Y => Y.validated = !0), q.validateSchema) return q.validateSchema(v);
        s.value = !0;
        const A = await Promise.all(u.value.map(Y => Y.validate ? Y.validate(g).then(ue => ({
            key: Y.path,
            valid: ue.valid,
            errors: ue.errors,
            value: ue.value
        })) : Promise.resolve({
            key: Y.path,
            valid: !0,
            errors: [],
            value: void 0
        })));
        s.value = !1;
        const k = {},
            z = {},
            ee = {};
        for (const Y of A) k[Y.key] = {
            valid: Y.valid,
            errors: Y.errors
        }, Y.value && vi(ee, Y.key, Y.value), Y.errors.length && (z[Y.key] = Y.errors[0]);
        return {
            valid: A.every(Y => Y.valid),
            results: k,
            errors: z,
            values: ee,
            source: "fields"
        }
    }
    async function ne(g, v) {
        var A;
        const k = $(g);
        if (k && (v == null ? void 0 : v.mode) !== "silent" && (k.validated = !0), I) {
            const {
                results: z
            } = await V((v == null ? void 0 : v.mode) || "validated-only");
            return z[g] || {
                errors: [],
                valid: !0
            }
        }
        return k != null && k.validate ? k.validate(v) : (!k && (A = v == null ? void 0 : v.warn), Promise.resolve({
            errors: [],
            valid: !0
        }))
    }

    function te(g) {
        lh(x.value, g)
    }

    function ie(g, v, A = !1) {
        X(g, v), vi(l, g, v), A && !(e != null && e.initialValues) && vi(O.value, g, lt(v))
    }

    function X(g, v, A = !1) {
        vi(x.value, g, lt(v)), A && vi(O.value, g, lt(v))
    }
    async function le() {
        const g = ut(I);
        if (!g) return {
            valid: !0,
            results: {},
            errors: {},
            source: "none"
        };
        s.value = !0;
        const v = Ga(g) || qn(g) ? await fT(g, l) : await dT(g, l, {
            names: D.value,
            bailsMap: S.value
        });
        return s.value = !1, v
    }
    const ve = at((g, {
        evt: v
    }) => {
        Bv(v) && v.target.submit()
    });
    ar(() => {
        if (e != null && e.initialErrors && p(e.initialErrors), e != null && e.initialTouched && H(e.initialTouched), e != null && e.validateOnMount) {
            Q();
            return
        }
        q.validateSchema && q.validateSchema("silent")
    }), _t(I) && _n(I, () => {
        var g;
        (g = q.validateSchema) === null || g === void 0 || g.call(q, "validated-only")
    }), po(xl, q);

    function fe(g, v) {
        const A = zt(v) || v == null ? void 0 : v.label,
            k = $(We(g)) || j(g, {
                label: A
            }),
            z = () => zt(v) ? v(Yo(k, Ko)) : v || {};

        function ee() {
            var re;
            k.touched = !0, ((re = z().validateOnBlur) !== null && re !== void 0 ? re : yr().validateOnBlur) && ne(k.path)
        }

        function Y() {
            var re;
            ((re = z().validateOnInput) !== null && re !== void 0 ? re : yr().validateOnInput) && cn(() => {
                ne(k.path)
            })
        }

        function ue() {
            var re;
            ((re = z().validateOnChange) !== null && re !== void 0 ? re : yr().validateOnChange) && cn(() => {
                ne(k.path)
            })
        }
        const we = Xe(() => {
            const re = {
                onChange: ue,
                onInput: Y,
                onBlur: ee
            };
            return zt(v) ? Object.assign(Object.assign({}, re), v(Yo(k, Ko)).props || {}) : v != null && v.props ? Object.assign(Object.assign({}, re), v.props(Yo(k, Ko))) : re
        });
        return [ft(g, () => {
            var re, de, Ee;
            return (Ee = (re = z().validateOnModelUpdate) !== null && re !== void 0 ? re : (de = yr()) === null || de === void 0 ? void 0 : de.validateOnModelUpdate) !== null && Ee !== void 0 ? Ee : !0
        }), we]
    }

    function Te(g) {
        return Array.isArray(g) ? g.map(v => ft(v, !0)) : ft(g)
    }

    function Ae(g, v) {
        const [A, k] = fe(g, v);

        function z() {
            k.value.onBlur()
        }

        function ee(ue) {
            const we = Za(ue);
            ce(We(g), we, !1), k.value.onInput()
        }

        function Y(ue) {
            const we = Za(ue);
            ce(We(g), we, !1), k.value.onChange()
        }
        return Xe(() => Object.assign(Object.assign({}, k.value), {
            onBlur: z,
            onInput: ee,
            onChange: Y,
            value: A.value
        }))
    }

    function ze(g, v) {
        const [A, k] = fe(g, v), z = $(We(g));

        function ee(Y) {
            A.value = Y
        }
        return Xe(() => {
            const Y = zt(v) ? v(Yo(z, Ko)) : v || {};
            return Object.assign({
                [Y.model || "modelValue"]: A.value,
                [`onUpdate:${Y.model||"modelValue"}`]: ee
            }, k.value)
        })
    }
    return Object.assign(Object.assign({}, q), {
        values: lo(l),
        handleReset: () => K(),
        submitForm: ve
    })
}

function AT(e, n, t, i) {
    const r = {
            touched: "some",
            pending: "some",
            valid: "every"
        },
        s = Xe(() => !dn(n, ut(t)));

    function o() {
        const l = e.value;
        return Pn(r).reduce((u, c) => {
            const f = r[c];
            return u[c] = l[f](d => d[c]), u
        }, {})
    }
    const a = Oi(o());
    return Lc(() => {
        const l = o();
        a.touched = l.touched, a.valid = l.valid, a.pending = l.pending
    }), Xe(() => Object.assign(Object.assign({
        initialValues: ut(t)
    }, a), {
        valid: a.valid && !Pn(i.value).length,
        dirty: s.value
    }))
}

function MT(e, n, t) {
    const i = Xv(t),
        r = Jt(i),
        s = Jt(lt(i));

    function o(a, l) {
        l != null && l.force ? (r.value = lt(a), s.value = lt(a)) : (r.value = ao(lt(r.value) || {}, lt(a)), s.value = ao(lt(s.value) || {}, lt(a))), l != null && l.updateFields && e.value.forEach(u => {
            if (u.touched) return;
            const f = En(r.value, u.path);
            vi(n, u.path, lt(f))
        })
    }
    return {
        initialValues: r,
        originalInitialValues: s,
        setInitialValues: o
    }
}

function IT(e, n) {
    return n ? {
        valid: e.valid && n.valid,
        errors: [...e.errors, ...n.errors]
    } : e
}
const PT = _r({
        name: "Form",
        inheritAttrs: !1,
        props: {
            as: {
                type: null,
                default: "form"
            },
            validationSchema: {
                type: Object,
                default: void 0
            },
            initialValues: {
                type: Object,
                default: void 0
            },
            initialErrors: {
                type: Object,
                default: void 0
            },
            initialTouched: {
                type: Object,
                default: void 0
            },
            validateOnMount: {
                type: Boolean,
                default: !1
            },
            onSubmit: {
                type: Function,
                default: void 0
            },
            onInvalidSubmit: {
                type: Function,
                default: void 0
            },
            keepValues: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, n) {
            const t = bi(e, "validationSchema"),
                i = bi(e, "keepValues"),
                {
                    errors: r,
                    errorBag: s,
                    values: o,
                    meta: a,
                    isSubmitting: l,
                    isValidating: u,
                    submitCount: c,
                    controlledValues: f,
                    validate: d,
                    validateField: h,
                    handleReset: p,
                    resetForm: m,
                    handleSubmit: y,
                    setErrors: D,
                    setFieldError: S,
                    setFieldValue: b,
                    setValues: w,
                    setFieldTouched: x,
                    setTouched: O,
                    resetField: F
                } = xT({
                    validationSchema: t.value ? t : void 0,
                    initialValues: e.initialValues,
                    initialErrors: e.initialErrors,
                    initialTouched: e.initialTouched,
                    validateOnMount: e.validateOnMount,
                    keepValuesOnUnmount: i
                }),
                L = y(($, {
                    evt: W
                }) => {
                    Bv(W) && W.target.submit()
                }, e.onInvalidSubmit),
                C = e.onSubmit ? y(e.onSubmit, e.onInvalidSubmit) : L;

            function I($) {
                Of($) && $.preventDefault(), p(), typeof n.attrs.onReset == "function" && n.attrs.onReset()
            }

            function j($, W) {
                return y(typeof $ == "function" && !W ? $ : W, e.onInvalidSubmit)($)
            }

            function R() {
                return lt(o)
            }

            function _() {
                return lt(a.value)
            }

            function V() {
                return lt(r.value)
            }

            function G() {
                return {
                    meta: a.value,
                    errors: r.value,
                    errorBag: s.value,
                    values: o,
                    isSubmitting: l.value,
                    isValidating: u.value,
                    submitCount: c.value,
                    controlledValues: f.value,
                    validate: d,
                    validateField: h,
                    handleSubmit: j,
                    handleReset: p,
                    submitForm: L,
                    setErrors: D,
                    setFieldError: S,
                    setFieldValue: b,
                    setValues: w,
                    setFieldTouched: x,
                    setTouched: O,
                    resetForm: m,
                    resetField: F,
                    getValues: R,
                    getMeta: _,
                    getErrors: V
                }
            }
            return n.expose({
                    setFieldError: S,
                    setErrors: D,
                    setFieldValue: b,
                    setValues: w,
                    setFieldTouched: x,
                    setTouched: O,
                    resetForm: m,
                    validate: d,
                    validateField: h,
                    resetField: F,
                    getValues: R,
                    getMeta: _,
                    getErrors: V,
                    values: o,
                    meta: a,
                    errors: r
                }),
                function() {
                    const W = e.as === "form" ? e.as : e.as ? cs(e.as) : null,
                        J = Af(W, n, G);
                    return W ? er(W, Object.assign(Object.assign(Object.assign({}, W === "form" ? {
                        novalidate: !0
                    } : {}), n.attrs), {
                        onSubmit: C,
                        onReset: I
                    }), J) : J
                }
        }
    }),
    NT = PT,
    RT = _r({
        name: "ErrorMessage",
        props: {
            as: {
                type: String,
                default: void 0
            },
            name: {
                type: String,
                required: !0
            }
        },
        setup(e, n) {
            const t = Zi(xl, void 0),
                i = Xe(() => t == null ? void 0 : t.errors.value[e.name]);

            function r() {
                return {
                    message: i.value
                }
            }
            return () => {
                if (!i.value) return;
                const s = e.as ? cs(e.as) : e.as,
                    o = Af(s, n, r),
                    a = Object.assign({
                        role: "alert"
                    }, n.attrs);
                return !s && (Array.isArray(o) || !o) && (o != null && o.length) ? o : (Array.isArray(o) || !o) && !(o != null && o.length) ? er(s || "span", a, i.value) : er(s, a, o)
            }
        }
    }),
    _T = RT;
/**
 * vee-validate v4.13.2
 * (c) 2024 Abdelrahman Awad
 * @license MIT
 */
function ph(e) {
    return typeof e == "function"
}

function FT(e) {
    return typeof e == "object" && e !== null
}

function LT(e) {
    return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
}

function mh(e) {
    if (!FT(e) || LT(e) !== "[object Object]") return !1;
    if (Object.getPrototypeOf(e) === null) return !0;
    let n = e;
    for (; Object.getPrototypeOf(n) !== null;) n = Object.getPrototypeOf(n);
    return Object.getPrototypeOf(e) === n
}

function Jv(e, n) {
    return Object.keys(n).forEach(t => {
        if (mh(n[t]) && mh(e[t])) {
            e[t] || (e[t] = {}), Jv(e[t], n[t]);
            return
        }
        e[t] = n[t]
    }), e
}

function gh(e, n, t) {
    const {
        prefix: i,
        suffix: r
    } = t, s = new RegExp(`([0-9]:)?${i}([^${r}]+)${r}`, "g");
    return e.replace(s, function(o, a, l) {
        if (!a || !n.params) return l in n ? n[l] : n.params && l in n.params ? n.params[l] : `${i}${l}${r}`;
        if (!Array.isArray(n.params)) return l in n.params ? n.params[l] : `${i}${l}${r}`;
        const u = Number(a.replace(":", ""));
        return u in n.params ? n.params[u] : `${a}${i}${l}${r}`
    })
}
class kT {
    constructor(n, t, i = {
        prefix: "{",
        suffix: "}"
    }) {
        this.container = {}, this.locale = n, this.interpolateOptions = i, this.merge(t)
    }
    resolve(n, t) {
        return this.format(this.locale, n, t)
    }
    getLocaleDefault(n, t) {
        var i, r, s, o, a;
        return ((s = (r = (i = this.container[n]) === null || i === void 0 ? void 0 : i.fields) === null || r === void 0 ? void 0 : r[t]) === null || s === void 0 ? void 0 : s._default) || ((a = (o = this.container[n]) === null || o === void 0 ? void 0 : o.messages) === null || a === void 0 ? void 0 : a._default)
    }
    resolveLabel(n, t, i) {
        var r, s, o, a;
        return i ? ((s = (r = this.container[n]) === null || r === void 0 ? void 0 : r.names) === null || s === void 0 ? void 0 : s[i]) || i : ((a = (o = this.container[n]) === null || o === void 0 ? void 0 : o.names) === null || a === void 0 ? void 0 : a[t]) || t
    }
    format(n, t, i) {
        var r, s, o, a, l;
        let u;
        const {
            rule: c,
            form: f,
            label: d,
            name: h
        } = t, p = this.resolveLabel(n, h, d);
        return c ? (u = ((o = (s = (r = this.container[n]) === null || r === void 0 ? void 0 : r.fields) === null || s === void 0 ? void 0 : s[h]) === null || o === void 0 ? void 0 : o[c.name]) || ((l = (a = this.container[n]) === null || a === void 0 ? void 0 : a.messages) === null || l === void 0 ? void 0 : l[c.name]), u || (u = this.getLocaleDefault(n, h) || `${p} não é válido`), ph(u) ? u(t) : gh(u, Object.assign(Object.assign({}, f), {
            field: p,
            params: c.params
        }), i ?? this.interpolateOptions)) : (u = this.getLocaleDefault(n, h) || `${p}não é válido`, ph(u) ? u(t) : gh(u, Object.assign(Object.assign({}, f), {
            field: p
        }), i ?? this.interpolateOptions))
    }
    merge(n) {
        Jv(this.container, n)
    }
}
const Os = new kT("en", {});

function $T(e, n, t) {
    const i = r => Os.resolve(r, t);
    return typeof e == "string" ? (Os.locale = e, n && Os.merge({
        [e]: n
    }), i) : (Os.merge(e), i)
}

function jT(e) {
    Os.locale = e
}
const VT = "ar",
    HT = {
        alpha: "{field} يجب ان يحتوي على حروف فقط",
        alpha_num: "{field} قد يحتوي فقط على حروف وارقام",
        alpha_dash: "{field} قد يحتوي على حروف او الرموز - و _",
        alpha_spaces: "{field} قد يحتوي فقط على حروف ومسافات",
        between: "قيمة {field} يجب ان تكون ما بين 0:{min} و 1:{max}",
        confirmed: "{field} لا يماثل التأكيد",
        digits: "{field} يجب ان تحتوي فقط على ارقام والا يزيد عددها عن 0:{length} رقم",
        dimensions: "{field} يجب ان تكون بمقاس 0:{width} بكسل في 1:{height} بكسل",
        email: "{field} يجب ان يكون بريدا اليكتروني صحيح",
        not_one_of: "الحقل {field} غير صحيح",
        ext: "نوع ملف {field} غير صحيح",
        image: "{field} يجب ان تكون صورة",
        integer: "الحقل {field} يجب ان يكون عدداً صحيحاً",
        length: "حقل {field} يجب الا يزيد عن 0:{length}",
        max_value: "قيمة الحقل {field} يجب ان تكون اصغر من 0:{min} او تساويها",
        max: "الحقل {field} يجب ان يحتوي على 0:{length} حروف على الأكثر",
        mimes: "نوع ملف {field} غير صحيح",
        min_value: "قيمة الحقل {field} يجب ان تكون اكبر من 0:{min} او تساويها",
        min: "الحقل {field} يجب ان يحتوي على 0:{length} حروف على الأقل",
        numeric: "{field} يمكن ان يحتوي فقط على ارقام",
        one_of: "الحقل {field} يجب ان يكون قيمة صحيحة",
        regex: "الحقل {field} غير صحيح",
        required: "{field} مطلوب",
        required_if: "حقل {field} مطلوب",
        size: "{field} يجب ان يكون اقل من 0:{size} كيلوبايت",
        url: "حقل {field} ليس رابطاً صحيحاً"
    },
    vh = {
        code: VT,
        messages: HT
    },
    BT = "bn",
    UT = {
        alpha: "এই {field} ক্ষেত্রে কেবলমাত্র অক্ষর থাকতে পারে",
        alpha_num: "এই {field} ক্ষেত্রে কেবলমাত্র অক্ষর, সংখ্যা থাকতে পারে",
        alpha_dash: "এই {field} ক্ষেত্রে কেবলমাত্র অক্ষর, সংখ্যা, ড্যাশ এবং আন্ডারস্কোর থাকতে পারে",
        alpha_spaces: "এই {field} ক্ষেত্রে কেবলমাত্র অক্ষর, সংখ্যা, ড্যাশ এবং আন্ডারস্কোর থাকতে পারে",
        between: "এই {field} ক্ষেত্রটি 0:{min} এবং 1:{max} এর মধ্যে হতে হবে",
        confirmed: "এই {field} ক্ষেত্রটি মিলছে না",
        digits: "এই {field} ক্ষেত্রটি সংখ্যা হতে হবে এবং ঠিক 0:{length} অঙ্ক থাকতে হবে",
        dimensions: "এই {field} ক্ষেত্রটি 0:{width} পিক্সেল 1:{height} পিক্সেল হতে হবে",
        email: "এই {field} ক্ষেত্রটি একটি বৈধ ইমেল হতে হবে",
        not_one_of: "এই {field} ক্ষেত্রটির মান বৈধ না",
        ext: "এই {field} ক্ষেত্রটির ফাইল বৈধ না",
        image: "এই {field} ক্ষেত্রটি একটি চিত্র হতে হবে",
        integer: "এই {field} ক্ষেত্রটি পূর্ণসংখ্যা হতে হবে",
        length: "এই {field} ক্ষেত্রটি 0:{length} দীর্ঘ হতে হবে",
        max_value: "এই {field} ক্ষেত্রটি 0:{max} বা তার চেয়ে কম হতে হবে",
        max: "এই {field} ক্ষেত্রটি 0:{length} অক্ষরের চেয়ে বেশি হওয়া উচিত নয়",
        mimes: "এই {field} ক্ষেত্রের একটি বৈধ ফাইল প্রকার থাকতে হবে",
        min_value: "এই {field} ক্ষেত্রটি 0:{min} বা তার বেশি হতে হবে",
        min: "এই {field} ক্ষেত্রটি কমপক্ষে 0:{length} অক্ষর হতে হবে",
        numeric: "এই {field} ক্ষেত্রে কেবলমাত্র সংখ্যা থাকতে পারে",
        one_of: "এই {field} ক্ষেত্রটির মান বৈধ না",
        regex: "এই {field} ক্ষেত্রটির বিন্যাস বৈধ না",
        required_if: "এই {field} ক্ষেত্রটি অবশ্যক",
        required: "এই {field} ক্ষেত্রটি অবশ্যক",
        size: "এই {field} ক্ষেত্রের আকার 0:{size}KB এর চেয়ে কম হওয়া উচিত"
    },
    yh = {
        code: BT,
        messages: UT
    },
    WT = "de",
    YT = {
        _default: "{field} ist ungültig",
        alpha: "{field} darf nur alphabetische Zeichen enthalten",
        alpha_dash: "{field} darf alphanumerische Zeichen sowie Striche und Unterstriche enthalten",
        alpha_num: "{field} darf nur alphanumerische Zeichen enthalten",
        alpha_spaces: "{field} darf nur alphanumerische Zeichen und Leerzeichen enthalten",
        between: "{field} muss zwischen 0:{min} und 1:{max} liegen",
        confirmed: "Die Bestätigung von {field} stimmt nicht überein",
        digits: "{field} muss numerisch sein und exakt 0:{length} Ziffern enthalten",
        dimensions: "{field} muss 0:{width} x 1:{height} Bildpunkte groß sein",
        email: "{field} muss eine gültige E-Mail-Adresse sein",
        not_one_of: "{field} muss ein gültiger Wert sein",
        ext: "{field} muss eine gültige Datei sein",
        image: "{field} muss eine Grafik sein",
        one_of: "{field} muss ein gültiger Wert sein",
        integer: "{field} muss eine ganze Zahl sein",
        length: "Die Länge von {field} muss 0:{length} sein",
        max: "{field} darf nicht länger als 0:{length} Zeichen sein",
        max_value: "{field} darf maximal 0:{max} sein",
        mimes: "{field} muss einen gültigen Dateityp haben",
        min: "{field} muss mindestens 0:{length} Zeichen lang sein",
        min_value: "{field} muss mindestens 0:{min} sein",
        numeric: "{field} darf nur numerische Zeichen enthalten",
        regex: "Das Format von {field} ist ungültig",
        required: "{field} ist ein Pflichtfeld",
        required_if: "{field} ist ein Pflichtfeld",
        size: "{field} muss kleiner als 0:{size}KB sein",
        url: "{field} ist keine gültige URL"
    },
    bh = {
        code: WT,
        messages: YT
    },
    KT = "en",
    zT = {
        _default: "The {field} não é válido(a)",
        alpha: "The {field} field may only contain alphabetic characters",
        alpha_num: "The {field} field may only contain alpha-numeric characters",
        alpha_dash: "The {field} field may contain alpha-numeric characters as well as dashes and underscores",
        alpha_spaces: "The {field} field may only contain alphabetic characters as well as spaces",
        between: "The {field} field must be between 0:{min} and 1:{max}",
        confirmed: "The {field} field confirmation does not match",
        digits: "The {field} field must be numeric and exactly contain 0:{length} digits",
        dimensions: "The {field} field must be 0:{width} pixels by 1:{height} pixels",
        email: "The {field} field must be a valid email",
        not_one_of: "The {field} field is not a valid value",
        ext: "The {field} field is not a valid file",
        image: "The {field} field must be an image",
        integer: "The {field} field must be an integer",
        length: "The {field} field must be 0:{length} long",
        max_value: "The {field} field must be 0:{max} or less",
        max: "The {field} field may not be greater than 0:{length} characters",
        mimes: "The {field} field must have a valid file type",
        min_value: "The {field} field must be 0:{min} or more",
        min: "The {field} field must be at least 0:{length} characters",
        numeric: "The {field} field may only contain numeric characters",
        one_of: "The {field} field is not a valid value",
        regex: "The {field} field format is invalid",
        required_if: "The {field} field is required",
        required: "The {field} field is required",
        size: "The {field} field size must be less than 0:{size}KB",
        url: "The {field} field is not a valid URL"
    },
    Eh = {
        code: KT,
        messages: zT
    },
    GT = "es",
    ZT = {
        alpha: "El campo {field} solo debe contener letras",
        alpha_dash: "El campo {field} solo debe contener letras, números y guiones",
        alpha_num: "El campo {field} solo debe contener letras y números",
        alpha_spaces: "El campo {field} solo debe contener letras y espacios",
        between: "El campo {field} debe estar entre 0:{min} y 1:{max}",
        confirmed: "El campo {field} no coincide",
        digits: "El campo {field} debe ser numérico y contener exactamente 0:{length} dígitos",
        dimensions: "El campo {field} debe ser de 0:{width} píxeles por 1:{height} píxeles",
        email: "El campo {field} debe ser un correo electrónico válido",
        not_one_of: "El campo {field} debe ser un valor válido",
        ext: "El campo {field} debe ser un archivo válido",
        image: "El campo {field} debe ser una imagen",
        one_of: "El campo {field} debe ser un valor válido",
        integer: "El campo {field} debe ser un entero",
        length: "El largo del campo {field} debe ser 0:{length}",
        max: "El campo {field} no debe ser mayor a 0:{length} caracteres",
        max_value: "El campo {field} debe de ser 0:{max} o menor",
        mimes: "El campo {field} debe ser un tipo de archivo válido",
        min: "El campo {field} debe tener al menos 0:{length} caracteres",
        min_value: "El campo {field} debe ser 0:{min} o superior",
        numeric: "El campo {field} debe contener solo caracteres numéricos",
        regex: "El formato del campo {field} no es válido",
        required: "El campo {field} es obligatorio",
        required_if: "El campo {field} es obligatorio",
        size: "El campo {field} debe ser menor a 0:{size}KB"
    },
    Sh = {
        code: GT,
        messages: ZT
    },
    XT = "fa",
    JT = {
        alpha: "{field} فقط می تواند از حروف تشکیل شود",
        alpha_num: "{field} فقط میتواند از حروف و اعداد تشکیل شود",
        alpha_dash: "{field} فقط می تواند از حروف، اعداد، خط فاصله و زیرخط تشکیل شود",
        alpha_spaces: "{field} فقط می تواند از حروف و فاصله تشکیل شود",
        between: "{field} باید بین 0:{min} و 1:{max} کارکتر باشد",
        confirmed: "{field} با تاییدیه اش مطابقت ندارد",
        digits: "{field} باید یک مقدار عددی و دقیقاً 0:{length} رقم باشد",
        dimensions: "{field} باید در اندازه 0:{width} پیکسل عرض و 1:{height} پیکسل ارتفاع باشد",
        email: "{field} باید یک پست الکترونیک معتبر باشد",
        not_one_of: "{field}باید یک مقدار معتبر باشد",
        ext: "{field} باید یک فایل معتبر باشد",
        image: "{field} باید یک تصویر باشد",
        integer: "{field} باید یک عدد صحیح باشد",
        length: "{field} باید دقیقا 0:{length} کاراکتر باشد",
        max_value: "مقدار {field} باید 0:{max} یا کمتر باشد",
        max: "{field} نباید بیشتر از 0:{length} کارکتر باشد",
        mimes: "{field} باید از نوع معتبر باشد",
        min_value: "مقدار {field} باید 0:{min} یا بیشتر باشد",
        min: "{field} باید حداقل 0:{length} کارکتر باشد",
        numeric: "{field} فقط می تواند عددی باشد",
        one_of: "{field} باید یک مقدار معتبر باشد",
        regex: "قالب {field} قابل قبول نیست",
        required_if: "{field} الزامی است",
        required: "{field} الزامی است",
        size: "حجم {field} کمتر از 0:{size}KB باشد"
    },
    wh = {
        code: XT,
        messages: JT
    },
    QT = "fr",
    qT = {
        _default: "Le champ {field} est invalide",
        alpha: "Le champ {field} ne peut contenir que des lettres",
        alpha_num: "Le champ {field} ne peut contenir que des caractères alpha-numériques",
        alpha_dash: "Le champ {field} ne peut contenir que des caractères alpha-numériques, tirets ou soulignés",
        alpha_spaces: "Le champ {field} ne peut contenir que des lettres ou des espaces",
        between: "Le champ {field} doit être compris entre 0:{min} et 1:{max}",
        confirmed: "Le champ {field} ne correspond pas",
        digits: "Le champ {field} doit être un nombre entier de 0:{length} chiffres",
        dimensions: "Le champ {field} doit avoir une taille de 0:{width} pixels par 1:{height} pixels",
        email: "Le champ {field} doit être une adresse e-mail valide",
        not_one_of: "Le champ {field} doit être une valeur valide",
        ext: "Le champ {field} doit être un fichier valide",
        image: "Le champ {field} doit être une image",
        integer: "Le champ {field} doit être un entier",
        length: "Le champ {field} doit contenir 0:{length} caractères",
        max_value: "Le champ {field} doit avoir une valeur de 0:{max} ou moins",
        max: "Le champ {field} ne peut pas contenir plus de 0:{length} caractères",
        mimes: "Le champ {field} doit avoir un type MIME valide",
        min_value: "Le champ {field} doit avoir une valeur de 0:{min} ou plus",
        min: "Le champ {field} doit contenir au minimum 0:{length} caractères",
        numeric: "Le champ {field} ne peut contenir que des chiffres",
        one_of: "Le champ {field} doit être une valeur valide",
        regex: "Le champ {field} est invalide",
        required: "Le champ {field} est obligatoire",
        required_if: "Le champ {field} est obligatoire lorsque {target} possède cette valeur",
        size: "Le champ {field} doit avoir un poids inférieur à 0:{size}KB"
    },
    Dh = {
        code: QT,
        messages: qT
    },
    e1 = "he",
    t1 = {
        alpha: "השדה {field} יכול להכיל רק אותיות",
        alpha_num: "השדה {field} יכול להכיל רק אותיות ומספרים.",
        alpha_dash: "השדה {field} יכול להכיל רק אותיות, מספרים ומקפים",
        alpha_spaces: "השדה {field} יכול להכיל רק אותיות ורווחים",
        between: "הערך {field} חייב להיות בין 0:{min} ל- 1:{max}",
        confirmed: "הערכים של {field} חייבים להיות זהים",
        digits: "השדה {field} חייב להיות מספר ולהכיל 0:{length} ספרות בדיוק",
        dimensions: "השדה {field} חייב להיות 0:{width} פיקסלים על 1:{height} פיקסלים",
        email: "השדה {field} חייב להכיל כתובת אימייל תקינה",
        not_one_of: "השדה {field} חייב להכיל ערך תקין",
        ext: "השדה {field} חייב להכיל קובץ תקין",
        image: "השדה {field} חייב להכיל תמונה",
        max_value: "השדה {field} יכול להיות 0:{max} לכל היותר",
        max: "השדה {field} לא יכול להכיל יותר מ- 0:{length} תווים",
        mimes: "הקובץ חייב להיות מסוג תקין",
        min_value: "הערך של {field} חייב להיות לפחות 0:{min}",
        min: "השדה {field} חייב להכיל 0:{length} תווים לפחות",
        numeric: "השדה {field} יכול להכיל ספרות בלבד",
        one_of: "השדה {field} חייב להיות בעל ערך תקין",
        regex: "הפורמט של {field} אינו תקין",
        required: "חובה למלא את השדה {field}",
        required_if: "חובה למלא את השדה {field}",
        size: "השדה {field} חייב לשקול פחות מ 0:{size}KB"
    },
    Th = {
        code: e1,
        messages: t1
    },
    n1 = "hi_IN",
    i1 = {
        _default: "यह {field} मान्य नहीं है",
        alpha: "{field} फ़ील्ड में केवल वर्णात्मक अक्षर हो सकते हैं",
        alpha_num: "{field} फ़ील्ड में केवल वर्णात्मक और संख्यात्मक अक्षर हो सकते हैं",
        alpha_dash: "{field} फ़ील्ड में वर्णात्मक और संख्यात्मक अक्षरों के साथ डैश और अंडरस्कोर हो सकते हैं",
        alpha_spaces: "{field} फ़ील्ड में केवल वर्णात्मक अक्षर और अंतर हो सकते हैं",
        between: "{field} फ़ील्ड 0:{min} और 1:{max} के बीच होना चाहिए",
        confirmed: "{field} फ़ील्ड की पुष्टि मेल नहीं खाती",
        digits: "{field} फ़ील्ड संख्यात्मक होनी चाहिए और बिल्कुल 0:{length} अंक होने चाहिए",
        dimensions: "{field} फ़ील्ड 0:{width} पिक्सेल और 1:{height} पिक्सेल होना चाहिए",
        email: "{field} फ़ील्ड में एक मान्य ईमेल होना चाहिए",
        not_one_of: "{field} फ़ील्ड मान्य मूल्य नहीं है",
        ext: "{field} फ़ील्ड में मान्य फ़ाइल नहीं है",
        image: "{field} फ़ील्ड एक छवि होनी चाहिए",
        integer: "{field} फ़ील्ड एक पूर्णांक होना चाहिए",
        length: "{field} फ़ील्ड 0:{length} लंबा होना चाहिए",
        max_value: "{field} फ़ील्ड 0:{max} या उससे कम होना चाहिए",
        max: "{field} फ़ील्ड 0:{length} अक्षरों से अधिक नहीं हो सकता",
        mimes: "{field} फ़ील्ड को मान्य फ़ाइल प्रकार होना चाहिए",
        min_value: "{field} फ़ील्ड 0:{min} या उससे अधिक होना चाहिए",
        min: "{field} फ़ील्ड कम से कम 0:{length} अक्षरों का होना चाहिए",
        numeric: "{field} फ़ील्ड में केवल संख्याएँ हो सकती हैं",
        one_of: "{field} फ़ील्ड मान्य मूल्य नहीं है",
        regex: "{field} फ़ील्ड का प्रारूप अवैध है",
        required_if: "{field} फ़ील्ड आवश्यक है",
        required: "{field} फ़ील्ड आवश्यक है",
        size: "{field} फ़ील्ड का आकार 0:{size}KB से कम होना चाहिए",
        url: "{field} फ़ील्ड में एक मान्य URL नहीं है"
    },
    Ch = {
        code: n1,
        messages: i1
    },
    r1 = "it",
    s1 = {
        alpha: "Il campo {field} può contenere solo caratteri alfabetici",
        alpha_num: "Il campo {field} può contenere solo caratteri alfanumerici",
        alpha_dash: "Il campo {field} può contenere caratteri alfa-numerici così come lineette e trattini di sottolineatura",
        alpha_spaces: "Il campo {field} può contenere solo caratteri alfanumerici così come spazi",
        between: "Il campo {field} deve essere compreso tra 0:{min} e 1:{max}",
        confirmed: "Il campo {field} non corrisponde",
        digits: "Il campo {field} deve essere numerico e contenere esattamente 0:{length} cifre",
        dimensions: "Il campo {field} deve essere 0:{width} x 1:{height}",
        email: "Il campo {field} deve essere un indirizzo email valido",
        not_one_of: "Il campo {field} deve avere un valore valido",
        ext: "Il campo {field} deve essere un file valido",
        image: "Il campo {field} deve essere un'immagine",
        integer: "Il campo {field} deve essere un numero",
        is_not: "Il campo {field} non è valido",
        length: "La lunghezza del campo {field} deve essere 0:{length}",
        max_value: "Il campo {field} deve essere minore o uguale a 0:{max}",
        max: "Il campo {field} non può essere più lungo di 0:{length} caratteri",
        mimes: "Il campo {field} deve avere un tipo di file valido",
        min_value: "Il campo {field} deve essere maggiore o uguale a 0:{min}",
        min: "Il campo {field} deve avere almeno 0:{length} caratteri",
        numeric: "Il campo {field} può contenere solo caratteri numerici",
        one_of: "Il campo {field} deve avere un valore valido",
        regex: "Il campo {field} non ha un formato valido",
        required: "Il campo {field} è richiesto",
        required_if: "Il campo {field} è richiesto",
        size: "Il campo {field} deve essere inferiore a 0:{size}KB"
    },
    Oh = {
        code: r1,
        messages: s1
    },
    o1 = "ja",
    a1 = {
        _default: "{field}は有効な値ではありません",
        alpha: "{field}はアルファベットのみ使用できます",
        alpha_num: "{field}は英数字のみ使用できます",
        alpha_dash: "{field}は英数字とハイフン、アンダースコアのみ使用できます",
        alpha_spaces: "{field}はアルファベットと空白のみ使用できます",
        between: "{field}は 0:{min} から 1:{max} の間でなければなりません",
        confirmed: "{field}が一致しません",
        digits: "{field}は 0:{length}桁の数字でなければなりません",
        dimensions: "{field}は幅 0:{width}px、高さ 1:{height}px 以内でなければなりません",
        email: "{field}は有効なメールアドレスではありません",
        not_one_of: "{field}は不正な値です",
        ext: "{field}は有効なファイル形式ではありません",
        image: "{field}は有効な画像形式ではありません",
        integer: "{field}は整数のみ使用できます",
        is: "{field}が一致しません",
        length: "{field}は 0:{length} 文字でなければなりません",
        max_value: "{field}は 0:{max} 以下でなければなりません",
        max: "{field}は 0:{length} 文字以内にしてください",
        mimes: "{field}は有効なファイル形式ではありません",
        min_value: "{field}は 0:{min} 以上でなければなりません",
        min: "{field}は 0:{length} 文字以上でなければなりません",
        numeric: "{field}は数字のみ使用できます",
        one_of: "{field}は有効な値ではありません",
        regex: "{field}のフォーマットが正しくありません",
        required: "{field}は必須項目です",
        required_if: "{field}は必須項目です",
        size: "{field}は 0:{size}KB 以内でなければなりません",
        url: "{field}は有効なURLではありません"
    },
    xh = {
        code: o1,
        messages: a1
    },
    l1 = "nl",
    u1 = {
        _default: "{field} is ongeldig",
        alpha: "{field} mag alleen letters bevatten",
        alpha_dash: "{field} mag alleen letters, nummers, en streepjes bevatten",
        alpha_num: "{field} mag alleen letters en nummers bevatten",
        alpha_spaces: "{field} mag alleen letters en spaties bevatten",
        between: "{field} moet tussen 0:{min} en 1:{max} liggen",
        confirmed: "{field} bevestiging komt niet overeen",
        digits: "{field} moet een nummer zijn en exact 0:{length} tekens bevatten",
        dimensions: "{field} moet 0:{width} pixels breed zijn en 1:{height} pixels hoog",
        email: "{field} moet een geldig e-mailadres zijn",
        not_one_of: "{field} is ongeldig",
        ext: "{field} moet een geldig bestand zijn",
        image: "{field} moet een afbeelding zijn",
        one_of: "{field} moet een geldige waarde zijn",
        max: "{field} mag niet groter zijn dan 0:{length} karakters",
        max_value: "{field} mag maximaal 0:{max} zijn",
        mimes: "{field} moet een geldig bestandstype hebben",
        min: "{field} moet minimaal 0:{length} karakters zijn",
        min_value: "{field} moet minimaal 0:{min} zijn",
        numeric: "{field} mag alleen nummers bevatten",
        regex: "{field} formaat is ongeldig",
        required: "{field} is verplicht",
        required_if: "{field} is verplicht",
        size: "{field} mag niet groter zijn dan 0:{size}KB"
    },
    Ah = {
        code: l1,
        messages: u1
    },
    c1 = "pl",
    f1 = {
        alpha: "Pole {field} może zawierać tylko litery",
        alpha_dash: "Pole {field} może zawierać litery, cyfry oraz myślnik lub podkreślnik",
        alpha_num: "Pole {field} może zawierać tylko litery i cyfry",
        alpha_spaces: "Pole {field} może zawierać tylko litery oraz spacje",
        between: "Pole {field} musi być pomiędzy 0:{min} oraz 1:{max}",
        confirmed: "Pole {field} nie zgadza się z polem potwierdzającym {target}",
        digits: "Pole {field} musi być liczbą i dokładnie 0:{length} cyfr",
        dimensions: "Obraz {field} musi być szeroki na 0:{width} pikseli i wysoki na 1:{height} pikseli",
        email: "Pole {field} musi być poprawnym adresem email",
        not_one_of: "Pole {field} musi być poprawną wartością",
        ext: "Plik {field} musi być poprawnym plikiem",
        image: "Pole {field} musi być obrazem",
        one_of: "Pole {field} musi być poprawną wartością",
        integer: "Pole {field} musi być liczbą całkowitą",
        length: "Pole {field} musi mieć długość 0:{length}",
        max: "Pole {field} nie może być dłuższe niż 0:{length}",
        max_value: "Pole {field} musi mieć maksymalną wartość 0:{max}",
        mimes: "Plik {field} musi posiadać poprawne rozszerzenie",
        min: "Pole {field} musi być długie na co najmniej 0:{length}",
        min_value: "Pole {field} musi mieć minimalną wartość 0:{min}",
        numeric: "Pole {field} może zawierać tylko cyfry",
        regex: "Format pola {field} jest nieodpowiedni",
        required: "Pole {field} jest wymagane",
        required_if: "Pole {field} jest wymagane",
        size: "Plik {field} musi być mniejszy niż 0:{size}KB"
    },
    Mh = {
        code: c1,
        messages: f1
    },
    d1 = "pt_BR",
    h1 = {
        alpha: "O campo {field} deve conter somente letras",
        alpha_dash: "O campo {field} deve conter letras, números e traços",
        alpha_num: "O campo {field} deve conter somente letras e números",
        alpha_spaces: "O campo {field} só pode conter caracteres alfabéticos e espaços",
        between: "O campo {field} deve estar entre 0:{min} e 1:{max}",
        confirmed: "A confirmação do campo {field} deve ser igual",
        digits: "O campo {field} deve ser numérico e ter exatamente 0:{length} dígitos",
        dimensions: "O campo {field} deve ter 0:{width} pixels de largura por 1:{height} pixels de altura",
        email: "O campo {field} deve ser um email válido",
        not_one_of: "O campo {field} deve ser um valor válido",
        ext: "O campo {field} deve ser um arquivo válido",
        image: "O campo {field} deve ser uma imagem",
        integer: "O campo {field} deve ser um número inteiro",
        is: "O valor inserido no campo {field} não é válido(a)",
        one_of: "O campo {field} deve ter um valor válido",
        length: "O tamanho do campo {field} deve ser 0:{length}",
        max: "O campo {field} não deve ter mais que 0:{length} caracteres",
        max_value: "O campo {field} precisa ser 0:{max} ou menor",
        mimes: "O campo {field} deve ser um tipo de arquivo válido",
        min: "O campo {field} deve conter pelo menos 0:{length} caracteres",
        min_value: "O campo {field} precisa ser 0:{min} ou maior",
        numeric: "O campo {field} deve conter apenas números",
        regex: "O campo {field} possui um formato inválido",
        required: "O campo {field} é obrigatório",
        required_if: "O campo {field} é obrigatório",
        size: "O campo {field} deve ser menor que 0:{size}KB",
        url: "O campo {field} deve ser uma URL válida"
    },
    Ih = {
        code: d1,
        messages: h1
    },
    p1 = "ru",
    m1 = {
        _default: "Поле {field} некорректно",
        alpha: "Поле {field} может содержать только буквы",
        alpha_num: "Поле {field} может содержать только буквы и цифры",
        alpha_dash: "Поле {field} может содержать только буквы, цифры и дефис",
        alpha_spaces: "Поле {field} может содержать только буквы и пробелы",
        between: "Поле {field} должно быть числом между 0:{min} и 1:{max}",
        confirmed: "Поле {field} не совпадает с другим полем",
        digits: "Поле {field} должно быть числом ровно из 0:{length} цифр",
        dimensions: "Поле {field} должно быть изображением 0:{width} пикселей на 1:{height} пикселей",
        email: "Поле {field} должно быть действительным электронным адресом",
        not_one_of: "Поле {field} должно быть допустимым значением",
        ext: "Поле {field} должно быть действительным файлом",
        image: "Поле {field} должно быть изображением",
        integer: "Поле {field} должно быть целым числом",
        length: "Длина поля {field} должна быть 0:{length}",
        max_value: "Поле {field} должно быть числом 0:{max} или меньше",
        max: "Поле {field} не может быть длиннее 0:{length} символов",
        mimes: "Поле {field} должно иметь допустимый тип файла",
        min_value: "Поле {field} должно быть числом 0:{min} или больше",
        min: "Поле {field} должно быть не короче 0:{length} символов",
        numeric: "Поле {field} должно быть числом",
        one_of: "Поле {field} должно быть допустимым значением",
        regex: "Поле {field} имеет некорректный формат",
        required_if: "Поле {field} обязательно для заполнения",
        required: "Поле {field} обязательно для заполнения",
        size: "Поле {field} должно быть меньше, чем 0:{size}KB",
        url: "Поле {field} содержит ссылку в некорректном формате"
    },
    Ph = {
        code: p1,
        messages: m1
    },
    g1 = "sin",
    v1 = {
        _default: "මේ {field} වල වලංගු නොවේ",
        alpha: "{field} ක්ෂණික සංඛ්‍යාවක් පිළිබඳව සියල්ල සියල්ල සහිතව හැකිය",
        alpha_num: "{field} ක්ෂණික සහ සංඛ්‍යාවක් පිළිබඳව සියල්ල සහිතව හැකිය",
        alpha_dash: "{field} ක්ෂණික සහ සංඛ්‍යාවක් සමග දැහැ හෝ පරිදි ලොව සහිතව හැකිය",
        alpha_spaces: "{field} ක්ෂණික සංඛ්‍යාවක් සහිතව හැකිය, සහ වීඩියෝ හෝම්හෝ සහිතව හැකිය",
        between: "{field} ක්ෂණික 0:{min} සහ 1:{max} අතර විය යුතුය",
        confirmed: "{field} ක්ෂණික තහවුරු නොගත් බව තහවුරු කර නොයාය",
        digits: "{field} ක්ෂණික සෂ්යෝගයක් හා සියලුමේ විය 0:{length} දිගු විය යුතුය",
        dimensions: "{field} ක්ෂණික 0:{width} පික්සල සහ 1:{height} පික්සල විය යුතුය",
        email: "{field} ක්ෂණික වලංගු ඊමේල් එක හෝ යුක්ත විය යුතුය",
        not_one_of: "{field} ක්ෂණික වලංගු අගය නොවේ",
        ext: "{field} ක්ෂණික වලංගු ගොනුව නොවේ",
        image: "{field} ක්ෂණික වලංගු ඡායාරූපය යුතුය",
        integer: "{field} ක්ෂණික වලංගු නික්මෙර වර්ගයේ යුතුය",
        length: "{field} ක්ෂණික වලංගු 0:{length} හෝමාව යුතුය",
        max_value: "{field} ක්ෂණික 0:{max} හෝමා හෝමා හෝමා යුතුය",
        max: "{field} ක්ෂණික 0:{length} අකුරු වලංගු වී නොයාය",
        mimes: "{field} ක්ෂණික ගොනුවේ වලංගු ගොනු වර්ගය හෝ හෝ හෝ යුතුය",
        min_value: "{field} ක්ෂණික 0:{min} හෝමාව හෝමාව හෝමාව හෝමාව හෝමාව යුතුය",
        min: "{field} ක්ෂණික 0:{length} හෝමාවක් හෝමාවක් හෝමාවක් හෝමාවක් යුතුය",
        numeric: "{field} ක්ෂණික වලංගු සංඛ්‍යාවෙන් වයස්ක්‍ර සංඛ්‍යාවෙන් වයස්ක්‍ර විය ෺",
        one_of: "{field} ක්ෂණික වලංගු අගය නොවේ",
        regex: "{field} ක්ෂණික වලංගු ආකාරය අවලංගුය",
        required_if: "{field} ක්ෂණිකයෙන් හෝයි",
        required: "{field} ක්ෂණිකයෙන් හෝයි",
        size: "{field} ක්ෂණික වලංගු විය හැකි ආකාරය 0:{size}KB හෝ හොයා යුතුයි",
        url: "{field} ක්ෂණික වලංගු වර්ගවල URL නොවේ"
    },
    Nh = {
        code: g1,
        messages: v1
    },
    y1 = "tr",
    b1 = {
        alpha: "{field} yalnızca harf içerebilir",
        alpha_dash: "{field} alanı harf ve tire (-) ya da alttan tire (_) içerebilir",
        alpha_num: "{field} yalnızca harf ve rakam içerebilir",
        alpha_spaces: "{field} yalnızca harf boşluk (space) içerebilir",
        between: "{field} 0:{min} ile 1:{max} aralığında olmalıdır",
        confirmed: "{field} doğrulaması hatalı",
        digits: "{field} sayısal ve 0:{length} basamaklı olmalıdır",
        dimensions: "{field} alanı 0:{width} piksel ile 1:{height} piksel arasında olmalıdır",
        email: "{field} alanının geçerli bir e-posta olması gerekir",
        not_one_of: "{field} alanına geçerli bir değer giriniz",
        ext: "{field} alanı geçerli bir dosya olmalıdır",
        image: "{field} alanı resim dosyası olmalıdır",
        integer: "{field} alanı bir tamsayı olmalıdır",
        length: "{field} alanı 0:{length} uzunluğunda olmalıdır",
        one_of: "{field} alanına geçerli bir değer giriniz",
        max: "{field} alanı 0:{length} karakterden fazla olmamalıdır",
        max_value: "{field} alanı 0:{max} ya da daha az bir değer olmalıdır",
        mimes: "{field} geçerli bir dosya olmalıdır",
        min: "{field} alanına en az 0:{length} karakter girilmelidir",
        min_value: "{field} alanı 0:{min} ya da daha fazla bir değer olmalıdır",
        numeric: "{field} alanına sayısal bir değer giriniz",
        regex: "{field} formatı geçersiz",
        required: "{field} alanı gereklidir",
        required_if: "{field} alanı gereklidir",
        size: "{field} alanı 0:{size}KB'dan daha az olmalıdır",
        url: "{field} geçerli bir URL değil"
    },
    Rh = {
        code: y1,
        messages: b1
    },
    E1 = "uk",
    S1 = {
        alpha: "Поле {field} може містити тільки літери",
        alpha_dash: "Поле {field} може містити буквено-цифрові символи, а також тире та підкреслення",
        alpha_num: "Поле {field} може містити тільки літери та цифри",
        alpha_spaces: "Поле {field} може містити тільки літери та пробіли",
        between: "Поле {field} повинно бути між 0:{min} та 1:{max}",
        confirmed: "Поле {field} не співпадає з підтвердженням",
        digits: "Поле {field} повинно бути числовим та точно містити 0:{length} цифри",
        dimensions: "Поле {field} повинно бути 0:{width} пікселів на 1:{height} пікселів",
        email: "В полі {field} повинна бути адреса електронної пошти",
        not_one_of: "Поле {field} повинно мати допустиме значення",
        ext: "Поле {field} повинно бути дійсним файлом",
        image: "В полі {field} має бути зображення",
        one_of: "Поле {field} повинно бути допустимим значенням",
        max: "Поле {field} не може бути більше, ніж 0:{length} символів",
        max_value: "Поле {field} повинно бути 0:{max} або менше",
        mimes: "Поле {field} повиннно мати дійсний тип файлу",
        min: "Поле {field} має бути принаймні 0:{length} символів",
        min_value: "Поле {field} повинно бути 0:{min} або більше",
        numeric: "Поле {field} може містить лише цифри",
        regex: "Поле {field} має невірний формат",
        required: "Поле {field} повинно мати значення",
        required_if: "Поле {field} повинно мати значення",
        size: "Поле {field} повинно бути менше 0:{size}KB"
    },
    _h = {
        code: E1,
        messages: S1
    },
    w1 = "zh_CN",
    D1 = {
        _default: "{field}不是一个有效值",
        alpha: "{field}只能包含字母字符",
        alpha_dash: "{field}能够包含字母数字字符、破折号和下划线",
        alpha_num: "{field}只能包含字母数字字符",
        alpha_spaces: "{field}只能包含字母字符和空格",
        between: "{field}必须在0:{min}与1:{max}之间",
        confirmed: "{field}不能和0:{target}匹配",
        digits: "{field}必须是数字，且精确到0:{length}位数",
        dimensions: "{field}必须在0:{width}像素与1:{height}像素之间",
        email: "{field}不是一个有效的邮箱",
        not_one_of: "{field}不是一个有效值",
        ext: "{field}不是一个有效的文件",
        image: "{field}不是一张有效的图片",
        one_of: "{field}不是一个有效值",
        integer: "{field}必须是整数",
        length: "{field}长度必须为0:{length}",
        max: "{field}不能超过0:{length}个字符",
        max_value: "{field}必须小于或等于0:{max}",
        mimes: "{field}不是一个有效的文件类型",
        min: "{field}必须至少有0:{length}个字符",
        min_value: "{field}必须大于或等于0:{min}",
        numeric: "{field}只能包含数字字符",
        regex: "{field}格式无效",
        required: "{field}是必须的",
        required_if: "{field}是必须的",
        size: "{field}必须小于0:{size}KB",
        url: "{field}不是一个有效的URL"
    },
    Fh = {
        code: w1,
        messages: D1
    };
/**
 * vee-validate v4.13.2
 * (c) 2024 Abdelrahman Awad
 * @license MIT
 */
const zo = {
        en: /^[A-Z]*$/i,
        cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
        da: /^[A-ZÆØÅ]*$/i,
        de: /^[A-ZÄÖÜß]*$/i,
        es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
        fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
        it: /^[A-Z\xC0-\xFF]*$/i,
        lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
        nl: /^[A-ZÉËÏÓÖÜ]*$/i,
        hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
        pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
        pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
        ru: /^[А-ЯЁ]*$/i,
        kz: /^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]*$/i,
        sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
        sr: /^[A-ZČĆŽŠĐ]*$/i,
        sv: /^[A-ZÅÄÖ]*$/i,
        tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
        uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
        ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
        az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
        ug: /^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ]*$/i
    },
    Go = {
        en: /^[A-Z\s]*$/i,
        cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
        da: /^[A-ZÆØÅ\s]*$/i,
        de: /^[A-ZÄÖÜß\s]*$/i,
        es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
        fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
        it: /^[A-Z\xC0-\xFF\s]*$/i,
        lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
        nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
        hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
        pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
        pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
        ru: /^[А-ЯЁ\s]*$/i,
        kz: /^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA\s]*$/i,
        sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
        sr: /^[A-ZČĆŽŠĐ\s]*$/i,
        sv: /^[A-ZÅÄÖ\s]*$/i,
        tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
        uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
        ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
        az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
        ug: /^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ\s]*$/i
    },
    Zo = {
        en: /^[0-9A-Z]*$/i,
        cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
        da: /^[0-9A-ZÆØÅ]$/i,
        de: /^[0-9A-ZÄÖÜß]*$/i,
        es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
        fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
        it: /^[0-9A-Z\xC0-\xFF]*$/i,
        lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
        hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
        nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
        pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
        pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
        ru: /^[0-9А-ЯЁ]*$/i,
        kz: /^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]*$/i,
        sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
        sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
        sv: /^[0-9A-ZÅÄÖ]*$/i,
        tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
        uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
        ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
        az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
        ug: /^[0-9A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ]*$/i
    },
    Xo = {
        en: /^[0-9A-Z_-]*$/i,
        cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
        da: /^[0-9A-ZÆØÅ_-]*$/i,
        de: /^[0-9A-ZÄÖÜß_-]*$/i,
        es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
        fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
        it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
        lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
        nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
        hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
        pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
        pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
        ru: /^[0-9А-ЯЁ_-]*$/i,
        kz: /^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA_-]*$/i,
        sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
        sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
        sv: /^[0-9A-ZÅÄÖ_-]*$/i,
        tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
        uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
        ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
        az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
        ug: /^[0-9A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ_-]*$/i
    },
    Ml = e => {
        if (e) return Array.isArray(e) ? e[0] : e.locale
    };

function zn(e, n) {
    return Array.isArray(e) ? e[0] : e[n]
}

function xt(e) {
    return !!(e == null || e === "" || Array.isArray(e) && e.length === 0)
}
const Qv = (e, n) => {
        if (xt(e)) return !0;
        const t = Ml(n);
        if (Array.isArray(e)) return e.every(r => Qv(r, {
            locale: t
        }));
        const i = String(e);
        return t ? (zo[t] || zo.en).test(i) : Object.keys(zo).some(r => zo[r].test(i))
    },
    qv = (e, n) => {
        if (xt(e)) return !0;
        const t = Ml(n);
        if (Array.isArray(e)) return e.every(r => qv(r, {
            locale: t
        }));
        const i = String(e);
        return t ? (Xo[t] || Xo.en).test(i) : Object.keys(Xo).some(r => Xo[r].test(i))
    },
    ey = (e, n) => {
        if (xt(e)) return !0;
        const t = Ml(n);
        if (Array.isArray(e)) return e.every(r => ey(r, {
            locale: t
        }));
        const i = String(e);
        return t ? (Zo[t] || Zo.en).test(i) : Object.keys(Zo).some(r => Zo[r].test(i))
    },
    ty = (e, n) => {
        if (xt(e)) return !0;
        const t = Ml(n);
        if (Array.isArray(e)) return e.every(r => ty(r, {
            locale: t
        }));
        const i = String(e);
        return t ? (Go[t] || Go.en).test(i) : Object.keys(Go).some(r => Go[r].test(i))
    };

function T1(e) {
    return Array.isArray(e) ? {
        min: e[0],
        max: e[1]
    } : e
}
const ny = (e, n) => {
        if (xt(e)) return !0;
        const {
            min: t,
            max: i
        } = T1(n);
        if (Array.isArray(e)) return e.every(s => ny(s, {
            min: t,
            max: i
        }));
        const r = Number(e);
        return Number(t) <= r && Number(i) >= r
    },
    C1 = (e, n) => {
        const t = zn(n, "target");
        return String(e) === String(t)
    },
    iy = (e, n) => {
        if (xt(e)) return !0;
        const t = zn(n, "length");
        if (Array.isArray(e)) return e.every(r => iy(r, {
            length: t
        }));
        const i = String(e);
        return /^[0-9]*$/.test(i) && i.length === Number(t)
    },
    O1 = (e, n, t) => {
        const i = window.URL || window.webkitURL;
        return new Promise(r => {
            const s = new Image;
            s.onerror = () => r(!1), s.onload = () => r(s.width === n && s.height === t), s.src = i.createObjectURL(e)
        })
    };

function x1(e) {
    return e ? Array.isArray(e) ? {
        width: Number(e[0]),
        height: Number(e[1])
    } : {
        width: Number(e.width),
        height: Number(e.height)
    } : {
        width: 0,
        height: 0
    }
}
const A1 = (e, n) => {
        if (xt(e)) return !0;
        const {
            width: t,
            height: i
        } = x1(n), r = [], s = Array.isArray(e) ? e : [e];
        for (let o = 0; o < s.length; o++) {
            if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(s[o].name)) return Promise.resolve(!1);
            r.push(s[o])
        }
        return Promise.all(r.map(o => O1(o, t, i))).then(o => o.every(a => a))
    },
    Lh = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
    M1 = e => xt(e) ? !0 : Array.isArray(e) ? e.every(n => Lh.test(String(n))) : Lh.test(String(e)),
    I1 = (e, n) => {
        if (xt(e)) return !0;
        const t = new RegExp(`\\.(${n.join("|")})$`, "i");
        return Array.isArray(e) ? e.every(i => t.test(i.name)) : t.test(e.name)
    },
    P1 = e => {
        if (xt(e)) return !0;
        const n = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;
        return Array.isArray(e) ? e.every(t => n.test(t.name)) : n.test(e.name)
    },
    N1 = e => xt(e) ? !0 : Array.isArray(e) ? e.every(n => /^-?[0-9]+$/.test(String(n))) : /^-?[0-9]+$/.test(String(e)),
    R1 = (e, n) => {
        const t = zn(n, "other");
        return e === t
    },
    _1 = (e, n) => {
        const t = zn(n, "other");
        return e !== t
    },
    F1 = (e, n) => {
        if (xt(e)) return !0;
        const t = zn(n, "length");
        return typeof e == "number" && (e = String(e)), e.length || (e = Array.from(e)), e.length === Number(t)
    },
    ry = (e, n) => {
        if (xt(e)) return !0;
        const t = zn(n, "length");
        return Array.isArray(e) ? e.every(i => ry(i, {
            length: t
        })) : [...String(e)].length <= Number(t)
    },
    sy = (e, n) => {
        if (xt(e)) return !0;
        const t = zn(n, "max");
        return Array.isArray(e) ? e.length > 0 && e.every(i => sy(i, {
            max: t
        })) : Number(e) <= Number(t)
    },
    kh = /\+(.+)?/;

function L1(e) {
    let n = e;
    return kh.test(e) && (n = e.replace(kh, "(\\+$1)?")), new RegExp(n.replace("*", ".+"), "i")
}
const k1 = (e, n) => {
        if (xt(e)) return !0;
        n || (n = []);
        const t = n.map(L1);
        return Array.isArray(e) ? e.every(i => t.some(r => r.test(i.type))) : t.some(i => i.test(e.type))
    },
    oy = (e, n) => {
        if (xt(e)) return !0;
        const t = zn(n, "length");
        return Array.isArray(e) ? e.every(i => oy(i, {
            length: t
        })) : [...String(e)].length >= Number(t)
    },
    ay = (e, n) => {
        if (xt(e)) return !0;
        const t = zn(n, "min");
        return Array.isArray(e) ? e.length > 0 && e.every(i => ay(i, {
            min: t
        })) : Number(e) >= Number(t)
    },
    Mf = (e, n) => xt(e) ? !0 : Array.isArray(e) ? e.every(t => Mf(t, n)) : Array.from(n).some(t => t == e),
    $1 = (e, n) => xt(e) ? !0 : !Mf(e, n),
    j1 = /^[٠١٢٣٤٥٦٧٨٩]+$/,
    V1 = /^[0-9]+$/,
    H1 = e => {
        if (xt(e)) return !0;
        const n = t => {
            const i = String(t);
            return V1.test(i) || j1.test(i)
        };
        return Array.isArray(e) ? e.every(n) : n(e)
    },
    ly = (e, n) => {
        if (xt(e)) return !0;
        let t = zn(n, "regex");
        return typeof t == "string" && (t = new RegExp(t)), Array.isArray(e) ? e.every(i => ly(i, {
            regex: t
        })) : t.test(String(e))
    };

function B1(e) {
    return e == null
}

function U1(e) {
    return Array.isArray(e) && e.length === 0
}
const W1 = e => B1(e) || U1(e) || e === !1 ? !1 : !!String(e).trim().length,
    Y1 = (e, n) => {
        if (xt(e)) return !0;
        let t = zn(n, "size");
        if (t = Number(t), isNaN(t)) return !1;
        const i = t * 1024;
        if (!Array.isArray(e)) return e.size <= i;
        for (let r = 0; r < e.length; r++)
            if (e[r].size > i) return !1;
        return !0
    },
    K1 = (e, n) => {
        var t;
        if (xt(e)) return !0;
        let i = zn(n, "pattern");
        typeof i == "string" && (i = new RegExp(i));
        try {
            new URL(e)
        } catch {
            return !1
        }
        return (t = i == null ? void 0 : i.test(e)) !== null && t !== void 0 ? t : !0
    },
    z1 = {
        alpha_dash: qv,
        alpha_num: ey,
        alpha_spaces: ty,
        alpha: Qv,
        between: ny,
        confirmed: C1,
        digits: iy,
        dimensions: A1,
        email: M1,
        ext: I1,
        image: P1,
        integer: N1,
        is_not: _1,
        is: R1,
        length: F1,
        max_value: sy,
        max: ry,
        mimes: k1,
        min_value: ay,
        min: oy,
        not_one_of: $1,
        numeric: H1,
        one_of: Mf,
        regex: ly,
        required: W1,
        size: Y1,
        url: K1
    };
window.defineRule = gi;
const G1 = {
        install: e => {
            e.component("VForm", NT), e.component("VField", CT), e.component("VErrorMessage", _T), window.addEventListener("load", () => jT(document.documentElement.attributes.lang.value)), Object.entries(z1).forEach(([n, t]) => gi(n, t)), gi("phone", n => !n || !n.length ? !0 : !!/^\+?\d+$/.test(n)), gi("address", n => !n || !n.length ? !0 : !!/^[a-zA-Z0-9\s.\/*'\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u0590-\u05FF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF\u0D80-\u0DFF\u3400-\u4DBF\u2000-\u2A6D\u00C0-\u017F\u0980-\u09FF\u0900-\u097F\u4E00-\u9FFF,\(\)-]{1,60}$/iu.test(n)), gi("decimal", (n, {
                decimals: t = "*",
                separator: i = "."
            } = {}) => {
                if (n == null || n === "") return !0;
                if (Number(t) === 0) return /^-?\d*$/.test(n);
                const r = t === "*" ? "+" : `{1,${t}}`;
                return new RegExp(`^[-+]?\\d*(\\${i}\\d${r})?([eE]{1}[-]?\\d+)?$`).test(n)
            }), gi("required_if", (n, {
                condition: t = !0
            } = {}) => !(t && (n == null || n === ""))), gi("", () => !0), gi("date_format", n => !0), gi("after", n => !0), sT({
                generateMessage: $T({
                    ar: {
                        ...vh,
                        messages: {
                            ...vh.messages,
                            phone: "يجب أن يكون هذا {field} رقم هاتف صالحًا"
                        }
                    },
                    bn: {
                        ...yh,
                        messages: {
                            ...yh.messages,
                            phone: "এই {field} একটি বৈধ ফোন নম্বর হতে হবে"
                        }
                    },
                    de: {
                        ...bh,
                        messages: {
                            ...bh.messages,
                            phone: "Dieses {field} muss eine gültige Telefonnummer sein."
                        }
                    },
                    en: {
                        ...Eh,
                        messages: {
                            ...Eh.messages,
                            phone: "This {field} must be a valid phone number"
                        }
                    },
                    es: {
                        ...Sh,
                        messages: {
                            ...Sh.messages,
                            phone: "Este {field} debe ser un número de teléfono válido."
                        }
                    },
                    fa: {
                        ...wh,
                        messages: {
                            ...wh.messages,
                            phone: "این {field} باید یک شماره تلفن معتبر باشد."
                        }
                    },
                    fr: {
                        ...Dh,
                        messages: {
                            ...Dh.messages,
                            phone: "Ce {field} doit être un numéro de téléphone valide."
                        }
                    },
                    he: {
                        ...Th,
                        messages: {
                            ...Th.messages,
                            phone: "זה {field} חייב להיות מספר טלפון תקין."
                        }
                    },
                    hi_IN: {
                        ...Ch,
                        messages: {
                            ...Ch.messages,
                            phone: "यह {field} कोई मान्य फ़ोन नंबर होना चाहिए।"
                        }
                    },
                    it: {
                        ...Oh,
                        messages: {
                            ...Oh.messages,
                            phone: "Questo {field} deve essere un numero di telefono valido."
                        }
                    },
                    ja: {
                        ...xh,
                        messages: {
                            ...xh.messages,
                            phone: "この{field}は有効な電話番号である必要があります。"
                        }
                    },
                    nl: {
                        ...Ah,
                        messages: {
                            ...Ah.messages,
                            phone: "Dit {field} moet een geldig telefoonnummer zijn."
                        }
                    },
                    pl: {
                        ...Mh,
                        messages: {
                            ...Mh.messages,
                            phone: "To {field} musi być prawidłowy numer telefonu."
                        }
                    },
                    pt_BR: {
                        ...Ih,
                        messages: {
                            ...Ih.messages,
                            phone: "Este {field} deve ser um número de telefone válido."
                        }
                    },
                    ru: {
                        ...Ph,
                        messages: {
                            ...Ph.messages,
                            phone: "Это {field} должно быть действительным номером телефона."
                        }
                    },
                    sin: {
                        ...Nh,
                        messages: {
                            ...Nh.messages,
                            phone: "මෙම {field} වටේ වලංගු දුරකතන අංකය විය යුතුයි."
                        }
                    },
                    tr: {
                        ...Rh,
                        messages: {
                            ...Rh.messages,
                            phone: "Bu {field} geçerli bir telefon numarası olmalıdır."
                        }
                    },
                    uk: {
                        ..._h,
                        messages: {
                            ..._h.messages,
                            phone: "Це {field} повинно бути дійсним номером телефону."
                        }
                    },
                    zh_CN: {
                        ...Fh,
                        messages: {
                            ...Fh.messages,
                            phone: "这个 {field} 必须是一个有效的电话号码。"
                        }
                    }
                }),
                validateOnBlur: !0,
                validateOnInput: !0,
                validateOnChange: !0
            })
        }
    },
    Z1 = {
        install(e) {
            e.config.globalProperties.$h = er, e.config.globalProperties.$resolveComponent = ui
        }
    };
var X1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function J1(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function uy(e) {
    if (e.__esModule) return e;
    var n = e.default;
    if (typeof n == "function") {
        var t = function i() {
            return this instanceof i ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments)
        };
        t.prototype = n.prototype
    } else t = {};
    return Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(i) {
        var r = Object.getOwnPropertyDescriptor(e, i);
        Object.defineProperty(t, i, r.get ? r : {
            enumerable: !0,
            get: function() {
                return e[i]
            }
        })
    }), t
}
var cy = {
    exports: {}
};
const Q1 = uy(kD);
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function $h(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n && (i = i.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), t.push.apply(t, i)
    }
    return t
}

function di(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n] != null ? arguments[n] : {};
        n % 2 ? $h(Object(t), !0).forEach(function(i) {
            q1(e, i, t[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $h(Object(t)).forEach(function(i) {
            Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
        })
    }
    return e
}

function pa(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? pa = function(n) {
        return typeof n
    } : pa = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, pa(e)
}

function q1(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e
}

function Kn() {
    return Kn = Object.assign || function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
        }
        return e
    }, Kn.apply(this, arguments)
}

function eC(e, n) {
    if (e == null) return {};
    var t = {},
        i = Object.keys(e),
        r, s;
    for (s = 0; s < i.length; s++) r = i[s], !(n.indexOf(r) >= 0) && (t[r] = e[r]);
    return t
}

function tC(e, n) {
    if (e == null) return {};
    var t = eC(e, n),
        i, r;
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) i = s[r], !(n.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (t[i] = e[i])
    }
    return t
}

function nC(e) {
    return iC(e) || rC(e) || sC(e) || oC()
}

function iC(e) {
    if (Array.isArray(e)) return Qu(e)
}

function rC(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function sC(e, n) {
    if (e) {
        if (typeof e == "string") return Qu(e, n);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Qu(e, n)
    }
}

function Qu(e, n) {
    (n == null || n > e.length) && (n = e.length);
    for (var t = 0, i = new Array(n); t < n; t++) i[t] = e[t];
    return i
}

function oC() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var aC = "1.14.0";

function Ci(e) {
    if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(e)
}
var Pi = Ci(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    Co = Ci(/Edge/i),
    jh = Ci(/firefox/i),
    $s = Ci(/safari/i) && !Ci(/chrome/i) && !Ci(/android/i),
    fy = Ci(/iP(ad|od|hone)/i),
    lC = Ci(/chrome/i) && Ci(/android/i),
    dy = {
        capture: !1,
        passive: !1
    };

function Ke(e, n, t) {
    e.addEventListener(n, t, !Pi && dy)
}

function Ue(e, n, t) {
    e.removeEventListener(n, t, !Pi && dy)
}

function Xa(e, n) {
    if (n) {
        if (n[0] === ">" && (n = n.substring(1)), e) try {
            if (e.matches) return e.matches(n);
            if (e.msMatchesSelector) return e.msMatchesSelector(n);
            if (e.webkitMatchesSelector) return e.webkitMatchesSelector(n)
        } catch {
            return !1
        }
        return !1
    }
}

function uC(e) {
    return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode
}

function Xn(e, n, t, i) {
    if (e) {
        t = t || document;
        do {
            if (n != null && (n[0] === ">" ? e.parentNode === t && Xa(e, n) : Xa(e, n)) || i && e === t) return e;
            if (e === t) break
        } while (e = uC(e))
    }
    return null
}
var Vh = /\s+/g;

function Ot(e, n, t) {
    if (e && n)
        if (e.classList) e.classList[t ? "add" : "remove"](n);
        else {
            var i = (" " + e.className + " ").replace(Vh, " ").replace(" " + n + " ", " ");
            e.className = (i + (t ? " " + n : "")).replace(Vh, " ")
        }
}

function be(e, n, t) {
    var i = e && e.style;
    if (i) {
        if (t === void 0) return document.defaultView && document.defaultView.getComputedStyle ? t = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (t = e.currentStyle), n === void 0 ? t : t[n];
        !(n in i) && n.indexOf("webkit") === -1 && (n = "-webkit-" + n), i[n] = t + (typeof t == "string" ? "" : "px")
    }
}

function Tr(e, n) {
    var t = "";
    if (typeof e == "string") t = e;
    else
        do {
            var i = be(e, "transform");
            i && i !== "none" && (t = i + " " + t)
        } while (!n && (e = e.parentNode));
    var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return r && new r(t)
}

function hy(e, n, t) {
    if (e) {
        var i = e.getElementsByTagName(n),
            r = 0,
            s = i.length;
        if (t)
            for (; r < s; r++) t(i[r], r);
        return i
    }
    return []
}

function fi() {
    var e = document.scrollingElement;
    return e || document.documentElement
}

function wt(e, n, t, i, r) {
    if (!(!e.getBoundingClientRect && e !== window)) {
        var s, o, a, l, u, c, f;
        if (e !== window && e.parentNode && e !== fi() ? (s = e.getBoundingClientRect(), o = s.top, a = s.left, l = s.bottom, u = s.right, c = s.height, f = s.width) : (o = 0, a = 0, l = window.innerHeight, u = window.innerWidth, c = window.innerHeight, f = window.innerWidth), (n || t) && e !== window && (r = r || e.parentNode, !Pi))
            do
                if (r && r.getBoundingClientRect && (be(r, "transform") !== "none" || t && be(r, "position") !== "static")) {
                    var d = r.getBoundingClientRect();
                    o -= d.top + parseInt(be(r, "border-top-width")), a -= d.left + parseInt(be(r, "border-left-width")), l = o + s.height, u = a + s.width;
                    break
                } while (r = r.parentNode);
        if (i && e !== window) {
            var h = Tr(r || e),
                p = h && h.a,
                m = h && h.d;
            h && (o /= m, a /= p, f /= p, c /= m, l = o + c, u = a + f)
        }
        return {
            top: o,
            left: a,
            bottom: l,
            right: u,
            width: f,
            height: c
        }
    }
}

function Hh(e, n, t) {
    for (var i = Yi(e, !0), r = wt(e)[n]; i;) {
        var s = wt(i)[t],
            o = void 0;
        if (t === "top" || t === "left" ? o = r >= s : o = r <= s, !o) return i;
        if (i === fi()) break;
        i = Yi(i, !1)
    }
    return !1
}

function os(e, n, t, i) {
    for (var r = 0, s = 0, o = e.children; s < o.length;) {
        if (o[s].style.display !== "none" && o[s] !== Oe.ghost && (i || o[s] !== Oe.dragged) && Xn(o[s], t.draggable, e, !1)) {
            if (r === n) return o[s];
            r++
        }
        s++
    }
    return null
}

function If(e, n) {
    for (var t = e.lastElementChild; t && (t === Oe.ghost || be(t, "display") === "none" || n && !Xa(t, n));) t = t.previousElementSibling;
    return t || null
}

function Pt(e, n) {
    var t = 0;
    if (!e || !e.parentNode) return -1;
    for (; e = e.previousElementSibling;) e.nodeName.toUpperCase() !== "TEMPLATE" && e !== Oe.clone && (!n || Xa(e, n)) && t++;
    return t
}

function Bh(e) {
    var n = 0,
        t = 0,
        i = fi();
    if (e)
        do {
            var r = Tr(e),
                s = r.a,
                o = r.d;
            n += e.scrollLeft * s, t += e.scrollTop * o
        } while (e !== i && (e = e.parentNode));
    return [n, t]
}

function cC(e, n) {
    for (var t in e)
        if (e.hasOwnProperty(t)) {
            for (var i in n)
                if (n.hasOwnProperty(i) && n[i] === e[t][i]) return Number(t)
        } return -1
}

function Yi(e, n) {
    if (!e || !e.getBoundingClientRect) return fi();
    var t = e,
        i = !1;
    do
        if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
            var r = be(t);
            if (t.clientWidth < t.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll")) {
                if (!t.getBoundingClientRect || t === document.body) return fi();
                if (i || n) return t;
                i = !0
            }
        } while (t = t.parentNode);
    return fi()
}

function fC(e, n) {
    if (e && n)
        for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    return e
}

function eu(e, n) {
    return Math.round(e.top) === Math.round(n.top) && Math.round(e.left) === Math.round(n.left) && Math.round(e.height) === Math.round(n.height) && Math.round(e.width) === Math.round(n.width)
}
var js;

function py(e, n) {
    return function() {
        if (!js) {
            var t = arguments,
                i = this;
            t.length === 1 ? e.call(i, t[0]) : e.apply(i, t), js = setTimeout(function() {
                js = void 0
            }, n)
        }
    }
}

function dC() {
    clearTimeout(js), js = void 0
}

function my(e, n, t) {
    e.scrollLeft += n, e.scrollTop += t
}

function Pf(e) {
    var n = window.Polymer,
        t = window.jQuery || window.Zepto;
    return n && n.dom ? n.dom(e).cloneNode(!0) : t ? t(e).clone(!0)[0] : e.cloneNode(!0)
}

function Uh(e, n) {
    be(e, "position", "absolute"), be(e, "top", n.top), be(e, "left", n.left), be(e, "width", n.width), be(e, "height", n.height)
}

function tu(e) {
    be(e, "position", ""), be(e, "top", ""), be(e, "left", ""), be(e, "width", ""), be(e, "height", "")
}
var rn = "Sortable" + new Date().getTime();

function hC() {
    var e = [],
        n;
    return {
        captureAnimationState: function() {
            if (e = [], !!this.options.animation) {
                var i = [].slice.call(this.el.children);
                i.forEach(function(r) {
                    if (!(be(r, "display") === "none" || r === Oe.ghost)) {
                        e.push({
                            target: r,
                            rect: wt(r)
                        });
                        var s = di({}, e[e.length - 1].rect);
                        if (r.thisAnimationDuration) {
                            var o = Tr(r, !0);
                            o && (s.top -= o.f, s.left -= o.e)
                        }
                        r.fromRect = s
                    }
                })
            }
        },
        addAnimationState: function(i) {
            e.push(i)
        },
        removeAnimationState: function(i) {
            e.splice(cC(e, {
                target: i
            }), 1)
        },
        animateAll: function(i) {
            var r = this;
            if (!this.options.animation) {
                clearTimeout(n), typeof i == "function" && i();
                return
            }
            var s = !1,
                o = 0;
            e.forEach(function(a) {
                var l = 0,
                    u = a.target,
                    c = u.fromRect,
                    f = wt(u),
                    d = u.prevFromRect,
                    h = u.prevToRect,
                    p = a.rect,
                    m = Tr(u, !0);
                m && (f.top -= m.f, f.left -= m.e), u.toRect = f, u.thisAnimationDuration && eu(d, f) && !eu(c, f) && (p.top - f.top) / (p.left - f.left) === (c.top - f.top) / (c.left - f.left) && (l = mC(p, d, h, r.options)), eu(f, c) || (u.prevFromRect = c, u.prevToRect = f, l || (l = r.options.animation), r.animate(u, p, f, l)), l && (s = !0, o = Math.max(o, l), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
                    u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null
                }, l), u.thisAnimationDuration = l)
            }), clearTimeout(n), s ? n = setTimeout(function() {
                typeof i == "function" && i()
            }, o) : typeof i == "function" && i(), e = []
        },
        animate: function(i, r, s, o) {
            if (o) {
                be(i, "transition", ""), be(i, "transform", "");
                var a = Tr(this.el),
                    l = a && a.a,
                    u = a && a.d,
                    c = (r.left - s.left) / (l || 1),
                    f = (r.top - s.top) / (u || 1);
                i.animatingX = !!c, i.animatingY = !!f, be(i, "transform", "translate3d(" + c + "px," + f + "px,0)"), this.forRepaintDummy = pC(i), be(i, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")), be(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
                    be(i, "transition", ""), be(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1
                }, o)
            }
        }
    }
}

function pC(e) {
    return e.offsetWidth
}

function mC(e, n, t, i) {
    return Math.sqrt(Math.pow(n.top - e.top, 2) + Math.pow(n.left - e.left, 2)) / Math.sqrt(Math.pow(n.top - t.top, 2) + Math.pow(n.left - t.left, 2)) * i.animation
}
var $r = [],
    nu = {
        initializeByDefault: !0
    },
    Oo = {
        mount: function(n) {
            for (var t in nu) nu.hasOwnProperty(t) && !(t in n) && (n[t] = nu[t]);
            $r.forEach(function(i) {
                if (i.pluginName === n.pluginName) throw "Sortable: Cannot mount plugin ".concat(n.pluginName, " more than once")
            }), $r.push(n)
        },
        pluginEvent: function(n, t, i) {
            var r = this;
            this.eventCanceled = !1, i.cancel = function() {
                r.eventCanceled = !0
            };
            var s = n + "Global";
            $r.forEach(function(o) {
                t[o.pluginName] && (t[o.pluginName][s] && t[o.pluginName][s](di({
                    sortable: t
                }, i)), t.options[o.pluginName] && t[o.pluginName][n] && t[o.pluginName][n](di({
                    sortable: t
                }, i)))
            })
        },
        initializePlugins: function(n, t, i, r) {
            $r.forEach(function(a) {
                var l = a.pluginName;
                if (!(!n.options[l] && !a.initializeByDefault)) {
                    var u = new a(n, t, n.options);
                    u.sortable = n, u.options = n.options, n[l] = u, Kn(i, u.defaults)
                }
            });
            for (var s in n.options)
                if (n.options.hasOwnProperty(s)) {
                    var o = this.modifyOption(n, s, n.options[s]);
                    typeof o < "u" && (n.options[s] = o)
                }
        },
        getEventProperties: function(n, t) {
            var i = {};
            return $r.forEach(function(r) {
                typeof r.eventProperties == "function" && Kn(i, r.eventProperties.call(t[r.pluginName], n))
            }), i
        },
        modifyOption: function(n, t, i) {
            var r;
            return $r.forEach(function(s) {
                n[s.pluginName] && s.optionListeners && typeof s.optionListeners[t] == "function" && (r = s.optionListeners[t].call(n[s.pluginName], i))
            }), r
        }
    };

function xs(e) {
    var n = e.sortable,
        t = e.rootEl,
        i = e.name,
        r = e.targetEl,
        s = e.cloneEl,
        o = e.toEl,
        a = e.fromEl,
        l = e.oldIndex,
        u = e.newIndex,
        c = e.oldDraggableIndex,
        f = e.newDraggableIndex,
        d = e.originalEvent,
        h = e.putSortable,
        p = e.extraEventProperties;
    if (n = n || t && t[rn], !!n) {
        var m, y = n.options,
            D = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        window.CustomEvent && !Pi && !Co ? m = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }) : (m = document.createEvent("Event"), m.initEvent(i, !0, !0)), m.to = o || t, m.from = a || t, m.item = r || t, m.clone = s, m.oldIndex = l, m.newIndex = u, m.oldDraggableIndex = c, m.newDraggableIndex = f, m.originalEvent = d, m.pullMode = h ? h.lastPutMode : void 0;
        var S = di(di({}, p), Oo.getEventProperties(i, n));
        for (var b in S) m[b] = S[b];
        t && t.dispatchEvent(m), y[D] && y[D].call(n, m)
    }
}
var gC = ["evt"],
    hn = function(n, t) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            r = i.evt,
            s = tC(i, gC);
        Oo.pluginEvent.bind(Oe)(n, t, di({
            dragEl: oe,
            parentEl: Mt,
            ghostEl: Fe,
            rootEl: Et,
            nextEl: hr,
            lastDownEl: ma,
            cloneEl: It,
            cloneHidden: Wi,
            dragStarted: As,
            putSortable: Gt,
            activeSortable: Oe.active,
            originalEvent: r,
            oldIndex: Wr,
            oldDraggableIndex: Vs,
            newIndex: Mn,
            newDraggableIndex: Bi,
            hideGhostForTarget: by,
            unhideGhostForTarget: Ey,
            cloneNowHidden: function() {
                Wi = !0
            },
            cloneNowShown: function() {
                Wi = !1
            },
            dispatchSortableEvent: function(a) {
                un({
                    sortable: t,
                    name: a,
                    originalEvent: r
                })
            }
        }, s))
    };

function un(e) {
    xs(di({
        putSortable: Gt,
        cloneEl: It,
        targetEl: oe,
        rootEl: Et,
        oldIndex: Wr,
        oldDraggableIndex: Vs,
        newIndex: Mn,
        newDraggableIndex: Bi
    }, e))
}
var oe, Mt, Fe, Et, hr, ma, It, Wi, Wr, Mn, Vs, Bi, Jo, Gt, Ur = !1,
    Ja = !1,
    Qa = [],
    cr, Gn, iu, ru, Wh, Yh, As, jr, Hs, Bs = !1,
    Qo = !1,
    ga, qt, su = [],
    qu = !1,
    qa = [],
    Il = typeof document < "u",
    qo = fy,
    Kh = Co || Pi ? "cssFloat" : "float",
    vC = Il && !lC && !fy && "draggable" in document.createElement("div"),
    gy = function() {
        if (Il) {
            if (Pi) return !1;
            var e = document.createElement("x");
            return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto"
        }
    }(),
    vy = function(n, t) {
        var i = be(n),
            r = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            s = os(n, 0, t),
            o = os(n, 1, t),
            a = s && be(s),
            l = o && be(o),
            u = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + wt(s).width,
            c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + wt(o).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (s && a.float && a.float !== "none") {
            var f = a.float === "left" ? "left" : "right";
            return o && (l.clear === "both" || l.clear === f) ? "vertical" : "horizontal"
        }
        return s && (a.display === "block" || a.display === "flex" || a.display === "table" || a.display === "grid" || u >= r && i[Kh] === "none" || o && i[Kh] === "none" && u + c > r) ? "vertical" : "horizontal"
    },
    yC = function(n, t, i) {
        var r = i ? n.left : n.top,
            s = i ? n.right : n.bottom,
            o = i ? n.width : n.height,
            a = i ? t.left : t.top,
            l = i ? t.right : t.bottom,
            u = i ? t.width : t.height;
        return r === a || s === l || r + o / 2 === a + u / 2
    },
    bC = function(n, t) {
        var i;
        return Qa.some(function(r) {
            var s = r[rn].options.emptyInsertThreshold;
            if (!(!s || If(r))) {
                var o = wt(r),
                    a = n >= o.left - s && n <= o.right + s,
                    l = t >= o.top - s && t <= o.bottom + s;
                if (a && l) return i = r
            }
        }), i
    },
    yy = function(n) {
        function t(s, o) {
            return function(a, l, u, c) {
                var f = a.options.group.name && l.options.group.name && a.options.group.name === l.options.group.name;
                if (s == null && (o || f)) return !0;
                if (s == null || s === !1) return !1;
                if (o && s === "clone") return s;
                if (typeof s == "function") return t(s(a, l, u, c), o)(a, l, u, c);
                var d = (o ? a : l).options.group.name;
                return s === !0 || typeof s == "string" && s === d || s.join && s.indexOf(d) > -1
            }
        }
        var i = {},
            r = n.group;
        (!r || pa(r) != "object") && (r = {
            name: r
        }), i.name = r.name, i.checkPull = t(r.pull, !0), i.checkPut = t(r.put), i.revertClone = r.revertClone, n.group = i
    },
    by = function() {
        !gy && Fe && be(Fe, "display", "none")
    },
    Ey = function() {
        !gy && Fe && be(Fe, "display", "")
    };
Il && document.addEventListener("click", function(e) {
    if (Ja) return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Ja = !1, !1
}, !0);
var fr = function(n) {
        if (oe) {
            n = n.touches ? n.touches[0] : n;
            var t = bC(n.clientX, n.clientY);
            if (t) {
                var i = {};
                for (var r in n) n.hasOwnProperty(r) && (i[r] = n[r]);
                i.target = i.rootEl = t, i.preventDefault = void 0, i.stopPropagation = void 0, t[rn]._onDragOver(i)
            }
        }
    },
    EC = function(n) {
        oe && oe.parentNode[rn]._isOutsideThisEl(n.target)
    };

function Oe(e, n) {
    if (!(e && e.nodeType && e.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
    this.el = e, this.options = n = Kn({}, n), e[rn] = this;
    var t = {
        group: null,
        sort: !0,
        disabled: !1,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
        swapThreshold: 1,
        invertSwap: !1,
        invertedSwapThreshold: null,
        removeCloneOnHide: !0,
        direction: function() {
            return vy(e, this.options)
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function(o, a) {
            o.setData("Text", a.textContent)
        },
        dropBubble: !1,
        dragoverBubble: !1,
        dataIdAttr: "data-id",
        delay: 0,
        delayOnTouchOnly: !1,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: !1,
        fallbackClass: "sortable-fallback",
        fallbackOnBody: !1,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: Oe.supportPointer !== !1 && "PointerEvent" in window && !$s,
        emptyInsertThreshold: 5
    };
    Oo.initializePlugins(this, e, t);
    for (var i in t) !(i in n) && (n[i] = t[i]);
    yy(n);
    for (var r in this) r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
    this.nativeDraggable = n.forceFallback ? !1 : vC, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? Ke(e, "pointerdown", this._onTapStart) : (Ke(e, "mousedown", this._onTapStart), Ke(e, "touchstart", this._onTapStart)), this.nativeDraggable && (Ke(e, "dragover", this), Ke(e, "dragenter", this)), Qa.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), Kn(this, hC())
}
Oe.prototype = {
    constructor: Oe,
    _isOutsideThisEl: function(n) {
        !this.el.contains(n) && n !== this.el && (jr = null)
    },
    _getDirection: function(n, t) {
        return typeof this.options.direction == "function" ? this.options.direction.call(this, n, t, oe) : this.options.direction
    },
    _onTapStart: function(n) {
        if (n.cancelable) {
            var t = this,
                i = this.el,
                r = this.options,
                s = r.preventOnFilter,
                o = n.type,
                a = n.touches && n.touches[0] || n.pointerType && n.pointerType === "touch" && n,
                l = (a || n).target,
                u = n.target.shadowRoot && (n.path && n.path[0] || n.composedPath && n.composedPath()[0]) || l,
                c = r.filter;
            if (AC(i), !oe && !(/mousedown|pointerdown/.test(o) && n.button !== 0 || r.disabled) && !u.isContentEditable && !(!this.nativeDraggable && $s && l && l.tagName.toUpperCase() === "SELECT") && (l = Xn(l, r.draggable, i, !1), !(l && l.animated) && ma !== l)) {
                if (Wr = Pt(l), Vs = Pt(l, r.draggable), typeof c == "function") {
                    if (c.call(this, n, l, this)) {
                        un({
                            sortable: t,
                            rootEl: u,
                            name: "filter",
                            targetEl: l,
                            toEl: i,
                            fromEl: i
                        }), hn("filter", t, {
                            evt: n
                        }), s && n.cancelable && n.preventDefault();
                        return
                    }
                } else if (c && (c = c.split(",").some(function(f) {
                        if (f = Xn(u, f.trim(), i, !1), f) return un({
                            sortable: t,
                            rootEl: f,
                            name: "filter",
                            targetEl: l,
                            fromEl: i,
                            toEl: i
                        }), hn("filter", t, {
                            evt: n
                        }), !0
                    }), c)) {
                    s && n.cancelable && n.preventDefault();
                    return
                }
                r.handle && !Xn(u, r.handle, i, !1) || this._prepareDragStart(n, a, l)
            }
        }
    },
    _prepareDragStart: function(n, t, i) {
        var r = this,
            s = r.el,
            o = r.options,
            a = s.ownerDocument,
            l;
        if (i && !oe && i.parentNode === s) {
            var u = wt(i);
            if (Et = s, oe = i, Mt = oe.parentNode, hr = oe.nextSibling, ma = i, Jo = o.group, Oe.dragged = oe, cr = {
                    target: oe,
                    clientX: (t || n).clientX,
                    clientY: (t || n).clientY
                }, Wh = cr.clientX - u.left, Yh = cr.clientY - u.top, this._lastX = (t || n).clientX, this._lastY = (t || n).clientY, oe.style["will-change"] = "all", l = function() {
                    if (hn("delayEnded", r, {
                            evt: n
                        }), Oe.eventCanceled) {
                        r._onDrop();
                        return
                    }
                    r._disableDelayedDragEvents(), !jh && r.nativeDraggable && (oe.draggable = !0), r._triggerDragStart(n, t), un({
                        sortable: r,
                        name: "choose",
                        originalEvent: n
                    }), Ot(oe, o.chosenClass, !0)
                }, o.ignore.split(",").forEach(function(c) {
                    hy(oe, c.trim(), ou)
                }), Ke(a, "dragover", fr), Ke(a, "mousemove", fr), Ke(a, "touchmove", fr), Ke(a, "mouseup", r._onDrop), Ke(a, "touchend", r._onDrop), Ke(a, "touchcancel", r._onDrop), jh && this.nativeDraggable && (this.options.touchStartThreshold = 4, oe.draggable = !0), hn("delayStart", this, {
                    evt: n
                }), o.delay && (!o.delayOnTouchOnly || t) && (!this.nativeDraggable || !(Co || Pi))) {
                if (Oe.eventCanceled) {
                    this._onDrop();
                    return
                }
                Ke(a, "mouseup", r._disableDelayedDrag), Ke(a, "touchend", r._disableDelayedDrag), Ke(a, "touchcancel", r._disableDelayedDrag), Ke(a, "mousemove", r._delayedDragTouchMoveHandler), Ke(a, "touchmove", r._delayedDragTouchMoveHandler), o.supportPointer && Ke(a, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(l, o.delay)
            } else l()
        }
    },
    _delayedDragTouchMoveHandler: function(n) {
        var t = n.touches ? n.touches[0] : n;
        Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
    },
    _disableDelayedDrag: function() {
        oe && ou(oe), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
    },
    _disableDelayedDragEvents: function() {
        var n = this.el.ownerDocument;
        Ue(n, "mouseup", this._disableDelayedDrag), Ue(n, "touchend", this._disableDelayedDrag), Ue(n, "touchcancel", this._disableDelayedDrag), Ue(n, "mousemove", this._delayedDragTouchMoveHandler), Ue(n, "touchmove", this._delayedDragTouchMoveHandler), Ue(n, "pointermove", this._delayedDragTouchMoveHandler)
    },
    _triggerDragStart: function(n, t) {
        t = t || n.pointerType == "touch" && n, !this.nativeDraggable || t ? this.options.supportPointer ? Ke(document, "pointermove", this._onTouchMove) : t ? Ke(document, "touchmove", this._onTouchMove) : Ke(document, "mousemove", this._onTouchMove) : (Ke(oe, "dragend", this), Ke(Et, "dragstart", this._onDragStart));
        try {
            document.selection ? va(function() {
                document.selection.empty()
            }) : window.getSelection().removeAllRanges()
        } catch {}
    },
    _dragStarted: function(n, t) {
        if (Ur = !1, Et && oe) {
            hn("dragStarted", this, {
                evt: t
            }), this.nativeDraggable && Ke(document, "dragover", EC);
            var i = this.options;
            !n && Ot(oe, i.dragClass, !1), Ot(oe, i.ghostClass, !0), Oe.active = this, n && this._appendGhost(), un({
                sortable: this,
                name: "start",
                originalEvent: t
            })
        } else this._nulling()
    },
    _emulateDragOver: function() {
        if (Gn) {
            this._lastX = Gn.clientX, this._lastY = Gn.clientY, by();
            for (var n = document.elementFromPoint(Gn.clientX, Gn.clientY), t = n; n && n.shadowRoot && (n = n.shadowRoot.elementFromPoint(Gn.clientX, Gn.clientY), n !== t);) t = n;
            if (oe.parentNode[rn]._isOutsideThisEl(n), t)
                do {
                    if (t[rn]) {
                        var i = void 0;
                        if (i = t[rn]._onDragOver({
                                clientX: Gn.clientX,
                                clientY: Gn.clientY,
                                target: n,
                                rootEl: t
                            }), i && !this.options.dragoverBubble) break
                    }
                    n = t
                } while (t = t.parentNode);
            Ey()
        }
    },
    _onTouchMove: function(n) {
        if (cr) {
            var t = this.options,
                i = t.fallbackTolerance,
                r = t.fallbackOffset,
                s = n.touches ? n.touches[0] : n,
                o = Fe && Tr(Fe, !0),
                a = Fe && o && o.a,
                l = Fe && o && o.d,
                u = qo && qt && Bh(qt),
                c = (s.clientX - cr.clientX + r.x) / (a || 1) + (u ? u[0] - su[0] : 0) / (a || 1),
                f = (s.clientY - cr.clientY + r.y) / (l || 1) + (u ? u[1] - su[1] : 0) / (l || 1);
            if (!Oe.active && !Ur) {
                if (i && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < i) return;
                this._onDragStart(n, !0)
            }
            if (Fe) {
                o ? (o.e += c - (iu || 0), o.f += f - (ru || 0)) : o = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: c,
                    f
                };
                var d = "matrix(".concat(o.a, ",").concat(o.b, ",").concat(o.c, ",").concat(o.d, ",").concat(o.e, ",").concat(o.f, ")");
                be(Fe, "webkitTransform", d), be(Fe, "mozTransform", d), be(Fe, "msTransform", d), be(Fe, "transform", d), iu = c, ru = f, Gn = s
            }
            n.cancelable && n.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!Fe) {
            var n = this.options.fallbackOnBody ? document.body : Et,
                t = wt(oe, !0, qo, !0, n),
                i = this.options;
            if (qo) {
                for (qt = n; be(qt, "position") === "static" && be(qt, "transform") === "none" && qt !== document;) qt = qt.parentNode;
                qt !== document.body && qt !== document.documentElement ? (qt === document && (qt = fi()), t.top += qt.scrollTop, t.left += qt.scrollLeft) : qt = fi(), su = Bh(qt)
            }
            Fe = oe.cloneNode(!0), Ot(Fe, i.ghostClass, !1), Ot(Fe, i.fallbackClass, !0), Ot(Fe, i.dragClass, !0), be(Fe, "transition", ""), be(Fe, "transform", ""), be(Fe, "box-sizing", "border-box"), be(Fe, "margin", 0), be(Fe, "top", t.top), be(Fe, "left", t.left), be(Fe, "width", t.width), be(Fe, "height", t.height), be(Fe, "opacity", "0.8"), be(Fe, "position", qo ? "absolute" : "fixed"), be(Fe, "zIndex", "100000"), be(Fe, "pointerEvents", "none"), Oe.ghost = Fe, n.appendChild(Fe), be(Fe, "transform-origin", Wh / parseInt(Fe.style.width) * 100 + "% " + Yh / parseInt(Fe.style.height) * 100 + "%")
        }
    },
    _onDragStart: function(n, t) {
        var i = this,
            r = n.dataTransfer,
            s = i.options;
        if (hn("dragStart", this, {
                evt: n
            }), Oe.eventCanceled) {
            this._onDrop();
            return
        }
        hn("setupClone", this), Oe.eventCanceled || (It = Pf(oe), It.draggable = !1, It.style["will-change"] = "", this._hideClone(), Ot(It, this.options.chosenClass, !1), Oe.clone = It), i.cloneId = va(function() {
            hn("clone", i), !Oe.eventCanceled && (i.options.removeCloneOnHide || Et.insertBefore(It, oe), i._hideClone(), un({
                sortable: i,
                name: "clone"
            }))
        }), !t && Ot(oe, s.dragClass, !0), t ? (Ja = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (Ue(document, "mouseup", i._onDrop), Ue(document, "touchend", i._onDrop), Ue(document, "touchcancel", i._onDrop), r && (r.effectAllowed = "move", s.setData && s.setData.call(i, r, oe)), Ke(document, "drop", i), be(oe, "transform", "translateZ(0)")), Ur = !0, i._dragStartId = va(i._dragStarted.bind(i, t, n)), Ke(document, "selectstart", i), As = !0, $s && be(document.body, "user-select", "none")
    },
    _onDragOver: function(n) {
        var t = this.el,
            i = n.target,
            r, s, o, a = this.options,
            l = a.group,
            u = Oe.active,
            c = Jo === l,
            f = a.sort,
            d = Gt || u,
            h, p = this,
            m = !1;
        if (qu) return;

        function y(J, Ce) {
            hn(J, p, di({
                evt: n,
                isOwner: c,
                axis: h ? "vertical" : "horizontal",
                revert: o,
                dragRect: r,
                targetRect: s,
                canSort: f,
                fromSortable: d,
                target: i,
                completed: S,
                onMove: function(Pe, He) {
                    return ea(Et, t, oe, r, Pe, wt(Pe), n, He)
                },
                changed: b
            }, Ce))
        }

        function D() {
            y("dragOverAnimationCapture"), p.captureAnimationState(), p !== d && d.captureAnimationState()
        }

        function S(J) {
            return y("dragOverCompleted", {
                insertion: J
            }), J && (c ? u._hideClone() : u._showClone(p), p !== d && (Ot(oe, Gt ? Gt.options.ghostClass : u.options.ghostClass, !1), Ot(oe, a.ghostClass, !0)), Gt !== p && p !== Oe.active ? Gt = p : p === Oe.active && Gt && (Gt = null), d === p && (p._ignoreWhileAnimating = i), p.animateAll(function() {
                y("dragOverAnimationComplete"), p._ignoreWhileAnimating = null
            }), p !== d && (d.animateAll(), d._ignoreWhileAnimating = null)), (i === oe && !oe.animated || i === t && !i.animated) && (jr = null), !a.dragoverBubble && !n.rootEl && i !== document && (oe.parentNode[rn]._isOutsideThisEl(n.target), !J && fr(n)), !a.dragoverBubble && n.stopPropagation && n.stopPropagation(), m = !0
        }

        function b() {
            Mn = Pt(oe), Bi = Pt(oe, a.draggable), un({
                sortable: p,
                name: "change",
                toEl: t,
                newIndex: Mn,
                newDraggableIndex: Bi,
                originalEvent: n
            })
        }
        if (n.preventDefault !== void 0 && n.cancelable && n.preventDefault(), i = Xn(i, a.draggable, t, !0), y("dragOver"), Oe.eventCanceled) return m;
        if (oe.contains(n.target) || i.animated && i.animatingX && i.animatingY || p._ignoreWhileAnimating === i) return S(!1);
        if (Ja = !1, u && !a.disabled && (c ? f || (o = Mt !== Et) : Gt === this || (this.lastPutMode = Jo.checkPull(this, u, oe, n)) && l.checkPut(this, u, oe, n))) {
            if (h = this._getDirection(n, i) === "vertical", r = wt(oe), y("dragOverValid"), Oe.eventCanceled) return m;
            if (o) return Mt = Et, D(), this._hideClone(), y("revert"), Oe.eventCanceled || (hr ? Et.insertBefore(oe, hr) : Et.appendChild(oe)), S(!0);
            var w = If(t, a.draggable);
            if (!w || TC(n, h, this) && !w.animated) {
                if (w === oe) return S(!1);
                if (w && t === n.target && (i = w), i && (s = wt(i)), ea(Et, t, oe, r, i, s, n, !!i) !== !1) return D(), t.appendChild(oe), Mt = t, b(), S(!0)
            } else if (w && DC(n, h, this)) {
                var x = os(t, 0, a, !0);
                if (x === oe) return S(!1);
                if (i = x, s = wt(i), ea(Et, t, oe, r, i, s, n, !1) !== !1) return D(), t.insertBefore(oe, x), Mt = t, b(), S(!0)
            } else if (i.parentNode === t) {
                s = wt(i);
                var O = 0,
                    F, L = oe.parentNode !== t,
                    C = !yC(oe.animated && oe.toRect || r, i.animated && i.toRect || s, h),
                    I = h ? "top" : "left",
                    j = Hh(i, "top", "top") || Hh(oe, "top", "top"),
                    R = j ? j.scrollTop : void 0;
                jr !== i && (F = s[I], Bs = !1, Qo = !C && a.invertSwap || L), O = CC(n, i, s, h, C ? 1 : a.swapThreshold, a.invertedSwapThreshold == null ? a.swapThreshold : a.invertedSwapThreshold, Qo, jr === i);
                var _;
                if (O !== 0) {
                    var V = Pt(oe);
                    do V -= O, _ = Mt.children[V]; while (_ && (be(_, "display") === "none" || _ === Fe))
                }
                if (O === 0 || _ === i) return S(!1);
                jr = i, Hs = O;
                var G = i.nextElementSibling,
                    $ = !1;
                $ = O === 1;
                var W = ea(Et, t, oe, r, i, s, n, $);
                if (W !== !1) return (W === 1 || W === -1) && ($ = W === 1), qu = !0, setTimeout(wC, 30), D(), $ && !G ? t.appendChild(oe) : i.parentNode.insertBefore(oe, $ ? G : i), j && my(j, 0, R - j.scrollTop), Mt = oe.parentNode, F !== void 0 && !Qo && (ga = Math.abs(F - wt(i)[I])), b(), S(!0)
            }
            if (t.contains(oe)) return S(!1)
        }
        return !1
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function() {
        Ue(document, "mousemove", this._onTouchMove), Ue(document, "touchmove", this._onTouchMove), Ue(document, "pointermove", this._onTouchMove), Ue(document, "dragover", fr), Ue(document, "mousemove", fr), Ue(document, "touchmove", fr)
    },
    _offUpEvents: function() {
        var n = this.el.ownerDocument;
        Ue(n, "mouseup", this._onDrop), Ue(n, "touchend", this._onDrop), Ue(n, "pointerup", this._onDrop), Ue(n, "touchcancel", this._onDrop), Ue(document, "selectstart", this)
    },
    _onDrop: function(n) {
        var t = this.el,
            i = this.options;
        if (Mn = Pt(oe), Bi = Pt(oe, i.draggable), hn("drop", this, {
                evt: n
            }), Mt = oe && oe.parentNode, Mn = Pt(oe), Bi = Pt(oe, i.draggable), Oe.eventCanceled) {
            this._nulling();
            return
        }
        Ur = !1, Qo = !1, Bs = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ec(this.cloneId), ec(this._dragStartId), this.nativeDraggable && (Ue(document, "drop", this), Ue(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), $s && be(document.body, "user-select", ""), be(oe, "transform", ""), n && (As && (n.cancelable && n.preventDefault(), !i.dropBubble && n.stopPropagation()), Fe && Fe.parentNode && Fe.parentNode.removeChild(Fe), (Et === Mt || Gt && Gt.lastPutMode !== "clone") && It && It.parentNode && It.parentNode.removeChild(It), oe && (this.nativeDraggable && Ue(oe, "dragend", this), ou(oe), oe.style["will-change"] = "", As && !Ur && Ot(oe, Gt ? Gt.options.ghostClass : this.options.ghostClass, !1), Ot(oe, this.options.chosenClass, !1), un({
            sortable: this,
            name: "unchoose",
            toEl: Mt,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: n
        }), Et !== Mt ? (Mn >= 0 && (un({
            rootEl: Mt,
            name: "add",
            toEl: Mt,
            fromEl: Et,
            originalEvent: n
        }), un({
            sortable: this,
            name: "remove",
            toEl: Mt,
            originalEvent: n
        }), un({
            rootEl: Mt,
            name: "sort",
            toEl: Mt,
            fromEl: Et,
            originalEvent: n
        }), un({
            sortable: this,
            name: "sort",
            toEl: Mt,
            originalEvent: n
        })), Gt && Gt.save()) : Mn !== Wr && Mn >= 0 && (un({
            sortable: this,
            name: "update",
            toEl: Mt,
            originalEvent: n
        }), un({
            sortable: this,
            name: "sort",
            toEl: Mt,
            originalEvent: n
        })), Oe.active && ((Mn == null || Mn === -1) && (Mn = Wr, Bi = Vs), un({
            sortable: this,
            name: "end",
            toEl: Mt,
            originalEvent: n
        }), this.save()))), this._nulling()
    },
    _nulling: function() {
        hn("nulling", this), Et = oe = Mt = Fe = hr = It = ma = Wi = cr = Gn = As = Mn = Bi = Wr = Vs = jr = Hs = Gt = Jo = Oe.dragged = Oe.ghost = Oe.clone = Oe.active = null, qa.forEach(function(n) {
            n.checked = !0
        }), qa.length = iu = ru = 0
    },
    handleEvent: function(n) {
        switch (n.type) {
            case "drop":
            case "dragend":
                this._onDrop(n);
                break;
            case "dragenter":
            case "dragover":
                oe && (this._onDragOver(n), SC(n));
                break;
            case "selectstart":
                n.preventDefault();
                break
        }
    },
    toArray: function() {
        for (var n = [], t, i = this.el.children, r = 0, s = i.length, o = this.options; r < s; r++) t = i[r], Xn(t, o.draggable, this.el, !1) && n.push(t.getAttribute(o.dataIdAttr) || xC(t));
        return n
    },
    sort: function(n, t) {
        var i = {},
            r = this.el;
        this.toArray().forEach(function(s, o) {
            var a = r.children[o];
            Xn(a, this.options.draggable, r, !1) && (i[s] = a)
        }, this), t && this.captureAnimationState(), n.forEach(function(s) {
            i[s] && (r.removeChild(i[s]), r.appendChild(i[s]))
        }), t && this.animateAll()
    },
    save: function() {
        var n = this.options.store;
        n && n.set && n.set(this)
    },
    closest: function(n, t) {
        return Xn(n, t || this.options.draggable, this.el, !1)
    },
    option: function(n, t) {
        var i = this.options;
        if (t === void 0) return i[n];
        var r = Oo.modifyOption(this, n, t);
        typeof r < "u" ? i[n] = r : i[n] = t, n === "group" && yy(i)
    },
    destroy: function() {
        hn("destroy", this);
        var n = this.el;
        n[rn] = null, Ue(n, "mousedown", this._onTapStart), Ue(n, "touchstart", this._onTapStart), Ue(n, "pointerdown", this._onTapStart), this.nativeDraggable && (Ue(n, "dragover", this), Ue(n, "dragenter", this)), Array.prototype.forEach.call(n.querySelectorAll("[draggable]"), function(t) {
            t.removeAttribute("draggable")
        }), this._onDrop(), this._disableDelayedDragEvents(), Qa.splice(Qa.indexOf(this.el), 1), this.el = n = null
    },
    _hideClone: function() {
        if (!Wi) {
            if (hn("hideClone", this), Oe.eventCanceled) return;
            be(It, "display", "none"), this.options.removeCloneOnHide && It.parentNode && It.parentNode.removeChild(It), Wi = !0
        }
    },
    _showClone: function(n) {
        if (n.lastPutMode !== "clone") {
            this._hideClone();
            return
        }
        if (Wi) {
            if (hn("showClone", this), Oe.eventCanceled) return;
            oe.parentNode == Et && !this.options.group.revertClone ? Et.insertBefore(It, oe) : hr ? Et.insertBefore(It, hr) : Et.appendChild(It), this.options.group.revertClone && this.animate(oe, It), be(It, "display", ""), Wi = !1
        }
    }
};

function SC(e) {
    e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault()
}

function ea(e, n, t, i, r, s, o, a) {
    var l, u = e[rn],
        c = u.options.onMove,
        f;
    return window.CustomEvent && !Pi && !Co ? l = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = n, l.from = e, l.dragged = t, l.draggedRect = i, l.related = r || n, l.relatedRect = s || wt(n), l.willInsertAfter = a, l.originalEvent = o, e.dispatchEvent(l), c && (f = c.call(u, l, o)), f
}

function ou(e) {
    e.draggable = !1
}

function wC() {
    qu = !1
}

function DC(e, n, t) {
    var i = wt(os(t.el, 0, t.options, !0)),
        r = 10;
    return n ? e.clientX < i.left - r || e.clientY < i.top && e.clientX < i.right : e.clientY < i.top - r || e.clientY < i.bottom && e.clientX < i.left
}

function TC(e, n, t) {
    var i = wt(If(t.el, t.options.draggable)),
        r = 10;
    return n ? e.clientX > i.right + r || e.clientX <= i.right && e.clientY > i.bottom && e.clientX >= i.left : e.clientX > i.right && e.clientY > i.top || e.clientX <= i.right && e.clientY > i.bottom + r
}

function CC(e, n, t, i, r, s, o, a) {
    var l = i ? e.clientY : e.clientX,
        u = i ? t.height : t.width,
        c = i ? t.top : t.left,
        f = i ? t.bottom : t.right,
        d = !1;
    if (!o) {
        if (a && ga < u * r) {
            if (!Bs && (Hs === 1 ? l > c + u * s / 2 : l < f - u * s / 2) && (Bs = !0), Bs) d = !0;
            else if (Hs === 1 ? l < c + ga : l > f - ga) return -Hs
        } else if (l > c + u * (1 - r) / 2 && l < f - u * (1 - r) / 2) return OC(n)
    }
    return d = d || o, d && (l < c + u * s / 2 || l > f - u * s / 2) ? l > c + u / 2 ? 1 : -1 : 0
}

function OC(e) {
    return Pt(oe) < Pt(e) ? 1 : -1
}

function xC(e) {
    for (var n = e.tagName + e.className + e.src + e.href + e.textContent, t = n.length, i = 0; t--;) i += n.charCodeAt(t);
    return i.toString(36)
}

function AC(e) {
    qa.length = 0;
    for (var n = e.getElementsByTagName("input"), t = n.length; t--;) {
        var i = n[t];
        i.checked && qa.push(i)
    }
}

function va(e) {
    return setTimeout(e, 0)
}

function ec(e) {
    return clearTimeout(e)
}
Il && Ke(document, "touchmove", function(e) {
    (Oe.active || Ur) && e.cancelable && e.preventDefault()
});
Oe.utils = {
    on: Ke,
    off: Ue,
    css: be,
    find: hy,
    is: function(n, t) {
        return !!Xn(n, t, n, !1)
    },
    extend: fC,
    throttle: py,
    closest: Xn,
    toggleClass: Ot,
    clone: Pf,
    index: Pt,
    nextTick: va,
    cancelNextTick: ec,
    detectDirection: vy,
    getChild: os
};
Oe.get = function(e) {
    return e[rn]
};
Oe.mount = function() {
    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
    n[0].constructor === Array && (n = n[0]), n.forEach(function(i) {
        if (!i.prototype || !i.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
        i.utils && (Oe.utils = di(di({}, Oe.utils), i.utils)), Oo.mount(i)
    })
};
Oe.create = function(e, n) {
    return new Oe(e, n)
};
Oe.version = aC;
var Lt = [],
    Ms, tc, nc = !1,
    au, lu, el, Is;

function MC() {
    function e() {
        this.defaults = {
            scroll: !0,
            forceAutoScrollFallback: !1,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: !0
        };
        for (var n in this) n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this))
    }
    return e.prototype = {
        dragStarted: function(t) {
            var i = t.originalEvent;
            this.sortable.nativeDraggable ? Ke(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ke(document, "pointermove", this._handleFallbackAutoScroll) : i.touches ? Ke(document, "touchmove", this._handleFallbackAutoScroll) : Ke(document, "mousemove", this._handleFallbackAutoScroll)
        },
        dragOverCompleted: function(t) {
            var i = t.originalEvent;
            !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i)
        },
        drop: function() {
            this.sortable.nativeDraggable ? Ue(document, "dragover", this._handleAutoScroll) : (Ue(document, "pointermove", this._handleFallbackAutoScroll), Ue(document, "touchmove", this._handleFallbackAutoScroll), Ue(document, "mousemove", this._handleFallbackAutoScroll)), zh(), ya(), dC()
        },
        nulling: function() {
            el = tc = Ms = nc = Is = au = lu = null, Lt.length = 0
        },
        _handleFallbackAutoScroll: function(t) {
            this._handleAutoScroll(t, !0)
        },
        _handleAutoScroll: function(t, i) {
            var r = this,
                s = (t.touches ? t.touches[0] : t).clientX,
                o = (t.touches ? t.touches[0] : t).clientY,
                a = document.elementFromPoint(s, o);
            if (el = t, i || this.options.forceAutoScrollFallback || Co || Pi || $s) {
                uu(t, this.options, a, i);
                var l = Yi(a, !0);
                nc && (!Is || s !== au || o !== lu) && (Is && zh(), Is = setInterval(function() {
                    var u = Yi(document.elementFromPoint(s, o), !0);
                    u !== l && (l = u, ya()), uu(t, r.options, u, i)
                }, 10), au = s, lu = o)
            } else {
                if (!this.options.bubbleScroll || Yi(a, !0) === fi()) {
                    ya();
                    return
                }
                uu(t, this.options, Yi(a, !1), !1)
            }
        }
    }, Kn(e, {
        pluginName: "scroll",
        initializeByDefault: !0
    })
}

function ya() {
    Lt.forEach(function(e) {
        clearInterval(e.pid)
    }), Lt = []
}

function zh() {
    clearInterval(Is)
}
var uu = py(function(e, n, t, i) {
        if (n.scroll) {
            var r = (e.touches ? e.touches[0] : e).clientX,
                s = (e.touches ? e.touches[0] : e).clientY,
                o = n.scrollSensitivity,
                a = n.scrollSpeed,
                l = fi(),
                u = !1,
                c;
            tc !== t && (tc = t, ya(), Ms = n.scroll, c = n.scrollFn, Ms === !0 && (Ms = Yi(t, !0)));
            var f = 0,
                d = Ms;
            do {
                var h = d,
                    p = wt(h),
                    m = p.top,
                    y = p.bottom,
                    D = p.left,
                    S = p.right,
                    b = p.width,
                    w = p.height,
                    x = void 0,
                    O = void 0,
                    F = h.scrollWidth,
                    L = h.scrollHeight,
                    C = be(h),
                    I = h.scrollLeft,
                    j = h.scrollTop;
                h === l ? (x = b < F && (C.overflowX === "auto" || C.overflowX === "scroll" || C.overflowX === "visible"), O = w < L && (C.overflowY === "auto" || C.overflowY === "scroll" || C.overflowY === "visible")) : (x = b < F && (C.overflowX === "auto" || C.overflowX === "scroll"), O = w < L && (C.overflowY === "auto" || C.overflowY === "scroll"));
                var R = x && (Math.abs(S - r) <= o && I + b < F) - (Math.abs(D - r) <= o && !!I),
                    _ = O && (Math.abs(y - s) <= o && j + w < L) - (Math.abs(m - s) <= o && !!j);
                if (!Lt[f])
                    for (var V = 0; V <= f; V++) Lt[V] || (Lt[V] = {});
                (Lt[f].vx != R || Lt[f].vy != _ || Lt[f].el !== h) && (Lt[f].el = h, Lt[f].vx = R, Lt[f].vy = _, clearInterval(Lt[f].pid), (R != 0 || _ != 0) && (u = !0, Lt[f].pid = setInterval((function() {
                    i && this.layer === 0 && Oe.active._onTouchMove(el);
                    var G = Lt[this.layer].vy ? Lt[this.layer].vy * a : 0,
                        $ = Lt[this.layer].vx ? Lt[this.layer].vx * a : 0;
                    typeof c == "function" && c.call(Oe.dragged.parentNode[rn], $, G, e, el, Lt[this.layer].el) !== "continue" || my(Lt[this.layer].el, $, G)
                }).bind({
                    layer: f
                }), 24))), f++
            } while (n.bubbleScroll && d !== l && (d = Yi(d, !1)));
            nc = u
        }
    }, 30),
    Sy = function(n) {
        var t = n.originalEvent,
            i = n.putSortable,
            r = n.dragEl,
            s = n.activeSortable,
            o = n.dispatchSortableEvent,
            a = n.hideGhostForTarget,
            l = n.unhideGhostForTarget;
        if (t) {
            var u = i || s;
            a();
            var c = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t,
                f = document.elementFromPoint(c.clientX, c.clientY);
            l(), u && !u.el.contains(f) && (o("spill"), this.onSpill({
                dragEl: r,
                putSortable: i
            }))
        }
    };

function Nf() {}
Nf.prototype = {
    startIndex: null,
    dragStart: function(n) {
        var t = n.oldDraggableIndex;
        this.startIndex = t
    },
    onSpill: function(n) {
        var t = n.dragEl,
            i = n.putSortable;
        this.sortable.captureAnimationState(), i && i.captureAnimationState();
        var r = os(this.sortable.el, this.startIndex, this.options);
        r ? this.sortable.el.insertBefore(t, r) : this.sortable.el.appendChild(t), this.sortable.animateAll(), i && i.animateAll()
    },
    drop: Sy
};
Kn(Nf, {
    pluginName: "revertOnSpill"
});

function Rf() {}
Rf.prototype = {
    onSpill: function(n) {
        var t = n.dragEl,
            i = n.putSortable,
            r = i || this.sortable;
        r.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), r.animateAll()
    },
    drop: Sy
};
Kn(Rf, {
    pluginName: "removeOnSpill"
});
var jn;

function IC() {
    function e() {
        this.defaults = {
            swapClass: "sortable-swap-highlight"
        }
    }
    return e.prototype = {
        dragStart: function(t) {
            var i = t.dragEl;
            jn = i
        },
        dragOverValid: function(t) {
            var i = t.completed,
                r = t.target,
                s = t.onMove,
                o = t.activeSortable,
                a = t.changed,
                l = t.cancel;
            if (o.options.swap) {
                var u = this.sortable.el,
                    c = this.options;
                if (r && r !== u) {
                    var f = jn;
                    s(r) !== !1 ? (Ot(r, c.swapClass, !0), jn = r) : jn = null, f && f !== jn && Ot(f, c.swapClass, !1)
                }
                a(), i(!0), l()
            }
        },
        drop: function(t) {
            var i = t.activeSortable,
                r = t.putSortable,
                s = t.dragEl,
                o = r || this.sortable,
                a = this.options;
            jn && Ot(jn, a.swapClass, !1), jn && (a.swap || r && r.options.swap) && s !== jn && (o.captureAnimationState(), o !== i && i.captureAnimationState(), PC(s, jn), o.animateAll(), o !== i && i.animateAll())
        },
        nulling: function() {
            jn = null
        }
    }, Kn(e, {
        pluginName: "swap",
        eventProperties: function() {
            return {
                swapItem: jn
            }
        }
    })
}

function PC(e, n) {
    var t = e.parentNode,
        i = n.parentNode,
        r, s;
    !t || !i || t.isEqualNode(n) || i.isEqualNode(e) || (r = Pt(e), s = Pt(n), t.isEqualNode(i) && r < s && s++, t.insertBefore(n, t.children[r]), i.insertBefore(e, i.children[s]))
}
var _e = [],
    An = [],
    vs, Zn, ys = !1,
    pn = !1,
    Vr = !1,
    gt, bs, ta;

function NC() {
    function e(n) {
        for (var t in this) t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
        n.options.supportPointer ? Ke(document, "pointerup", this._deselectMultiDrag) : (Ke(document, "mouseup", this._deselectMultiDrag), Ke(document, "touchend", this._deselectMultiDrag)), Ke(document, "keydown", this._checkKeyDown), Ke(document, "keyup", this._checkKeyUp), this.defaults = {
            selectedClass: "sortable-selected",
            multiDragKey: null,
            setData: function(r, s) {
                var o = "";
                _e.length && Zn === n ? _e.forEach(function(a, l) {
                    o += (l ? ", " : "") + a.textContent
                }) : o = s.textContent, r.setData("Text", o)
            }
        }
    }
    return e.prototype = {
        multiDragKeyDown: !1,
        isMultiDrag: !1,
        delayStartGlobal: function(t) {
            var i = t.dragEl;
            gt = i
        },
        delayEnded: function() {
            this.isMultiDrag = ~_e.indexOf(gt)
        },
        setupClone: function(t) {
            var i = t.sortable,
                r = t.cancel;
            if (this.isMultiDrag) {
                for (var s = 0; s < _e.length; s++) An.push(Pf(_e[s])), An[s].sortableIndex = _e[s].sortableIndex, An[s].draggable = !1, An[s].style["will-change"] = "", Ot(An[s], this.options.selectedClass, !1), _e[s] === gt && Ot(An[s], this.options.chosenClass, !1);
                i._hideClone(), r()
            }
        },
        clone: function(t) {
            var i = t.sortable,
                r = t.rootEl,
                s = t.dispatchSortableEvent,
                o = t.cancel;
            this.isMultiDrag && (this.options.removeCloneOnHide || _e.length && Zn === i && (Gh(!0, r), s("clone"), o()))
        },
        showClone: function(t) {
            var i = t.cloneNowShown,
                r = t.rootEl,
                s = t.cancel;
            this.isMultiDrag && (Gh(!1, r), An.forEach(function(o) {
                be(o, "display", "")
            }), i(), ta = !1, s())
        },
        hideClone: function(t) {
            var i = this;
            t.sortable;
            var r = t.cloneNowHidden,
                s = t.cancel;
            this.isMultiDrag && (An.forEach(function(o) {
                be(o, "display", "none"), i.options.removeCloneOnHide && o.parentNode && o.parentNode.removeChild(o)
            }), r(), ta = !0, s())
        },
        dragStartGlobal: function(t) {
            t.sortable, !this.isMultiDrag && Zn && Zn.multiDrag._deselectMultiDrag(), _e.forEach(function(i) {
                i.sortableIndex = Pt(i)
            }), _e = _e.sort(function(i, r) {
                return i.sortableIndex - r.sortableIndex
            }), Vr = !0
        },
        dragStarted: function(t) {
            var i = this,
                r = t.sortable;
            if (this.isMultiDrag) {
                if (this.options.sort && (r.captureAnimationState(), this.options.animation)) {
                    _e.forEach(function(o) {
                        o !== gt && be(o, "position", "absolute")
                    });
                    var s = wt(gt, !1, !0, !0);
                    _e.forEach(function(o) {
                        o !== gt && Uh(o, s)
                    }), pn = !0, ys = !0
                }
                r.animateAll(function() {
                    pn = !1, ys = !1, i.options.animation && _e.forEach(function(o) {
                        tu(o)
                    }), i.options.sort && na()
                })
            }
        },
        dragOver: function(t) {
            var i = t.target,
                r = t.completed,
                s = t.cancel;
            pn && ~_e.indexOf(i) && (r(!1), s())
        },
        revert: function(t) {
            var i = t.fromSortable,
                r = t.rootEl,
                s = t.sortable,
                o = t.dragRect;
            _e.length > 1 && (_e.forEach(function(a) {
                s.addAnimationState({
                    target: a,
                    rect: pn ? wt(a) : o
                }), tu(a), a.fromRect = o, i.removeAnimationState(a)
            }), pn = !1, RC(!this.options.removeCloneOnHide, r))
        },
        dragOverCompleted: function(t) {
            var i = t.sortable,
                r = t.isOwner,
                s = t.insertion,
                o = t.activeSortable,
                a = t.parentEl,
                l = t.putSortable,
                u = this.options;
            if (s) {
                if (r && o._hideClone(), ys = !1, u.animation && _e.length > 1 && (pn || !r && !o.options.sort && !l)) {
                    var c = wt(gt, !1, !0, !0);
                    _e.forEach(function(d) {
                        d !== gt && (Uh(d, c), a.appendChild(d))
                    }), pn = !0
                }
                if (!r)
                    if (pn || na(), _e.length > 1) {
                        var f = ta;
                        o._showClone(i), o.options.animation && !ta && f && An.forEach(function(d) {
                            o.addAnimationState({
                                target: d,
                                rect: bs
                            }), d.fromRect = bs, d.thisAnimationDuration = null
                        })
                    } else o._showClone(i)
            }
        },
        dragOverAnimationCapture: function(t) {
            var i = t.dragRect,
                r = t.isOwner,
                s = t.activeSortable;
            if (_e.forEach(function(a) {
                    a.thisAnimationDuration = null
                }), s.options.animation && !r && s.multiDrag.isMultiDrag) {
                bs = Kn({}, i);
                var o = Tr(gt, !0);
                bs.top -= o.f, bs.left -= o.e
            }
        },
        dragOverAnimationComplete: function() {
            pn && (pn = !1, na())
        },
        drop: function(t) {
            var i = t.originalEvent,
                r = t.rootEl,
                s = t.parentEl,
                o = t.sortable,
                a = t.dispatchSortableEvent,
                l = t.oldIndex,
                u = t.putSortable,
                c = u || this.sortable;
            if (i) {
                var f = this.options,
                    d = s.children;
                if (!Vr)
                    if (f.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), Ot(gt, f.selectedClass, !~_e.indexOf(gt)), ~_e.indexOf(gt)) _e.splice(_e.indexOf(gt), 1), vs = null, xs({
                        sortable: o,
                        rootEl: r,
                        name: "deselect",
                        targetEl: gt,
                        originalEvt: i
                    });
                    else {
                        if (_e.push(gt), xs({
                                sortable: o,
                                rootEl: r,
                                name: "select",
                                targetEl: gt,
                                originalEvt: i
                            }), i.shiftKey && vs && o.el.contains(vs)) {
                            var h = Pt(vs),
                                p = Pt(gt);
                            if (~h && ~p && h !== p) {
                                var m, y;
                                for (p > h ? (y = h, m = p) : (y = p, m = h + 1); y < m; y++) ~_e.indexOf(d[y]) || (Ot(d[y], f.selectedClass, !0), _e.push(d[y]), xs({
                                    sortable: o,
                                    rootEl: r,
                                    name: "select",
                                    targetEl: d[y],
                                    originalEvt: i
                                }))
                            }
                        } else vs = gt;
                        Zn = c
                    } if (Vr && this.isMultiDrag) {
                    if (pn = !1, (s[rn].options.sort || s !== r) && _e.length > 1) {
                        var D = wt(gt),
                            S = Pt(gt, ":not(." + this.options.selectedClass + ")");
                        if (!ys && f.animation && (gt.thisAnimationDuration = null), c.captureAnimationState(), !ys && (f.animation && (gt.fromRect = D, _e.forEach(function(w) {
                                if (w.thisAnimationDuration = null, w !== gt) {
                                    var x = pn ? wt(w) : D;
                                    w.fromRect = x, c.addAnimationState({
                                        target: w,
                                        rect: x
                                    })
                                }
                            })), na(), _e.forEach(function(w) {
                                d[S] ? s.insertBefore(w, d[S]) : s.appendChild(w), S++
                            }), l === Pt(gt))) {
                            var b = !1;
                            _e.forEach(function(w) {
                                if (w.sortableIndex !== Pt(w)) {
                                    b = !0;
                                    return
                                }
                            }), b && a("update")
                        }
                        _e.forEach(function(w) {
                            tu(w)
                        }), c.animateAll()
                    }
                    Zn = c
                }(r === s || u && u.lastPutMode !== "clone") && An.forEach(function(w) {
                    w.parentNode && w.parentNode.removeChild(w)
                })
            }
        },
        nullingGlobal: function() {
            this.isMultiDrag = Vr = !1, An.length = 0
        },
        destroyGlobal: function() {
            this._deselectMultiDrag(), Ue(document, "pointerup", this._deselectMultiDrag), Ue(document, "mouseup", this._deselectMultiDrag), Ue(document, "touchend", this._deselectMultiDrag), Ue(document, "keydown", this._checkKeyDown), Ue(document, "keyup", this._checkKeyUp)
        },
        _deselectMultiDrag: function(t) {
            if (!(typeof Vr < "u" && Vr) && Zn === this.sortable && !(t && Xn(t.target, this.options.draggable, this.sortable.el, !1)) && !(t && t.button !== 0))
                for (; _e.length;) {
                    var i = _e[0];
                    Ot(i, this.options.selectedClass, !1), _e.shift(), xs({
                        sortable: this.sortable,
                        rootEl: this.sortable.el,
                        name: "deselect",
                        targetEl: i,
                        originalEvt: t
                    })
                }
        },
        _checkKeyDown: function(t) {
            t.key === this.options.multiDragKey && (this.multiDragKeyDown = !0)
        },
        _checkKeyUp: function(t) {
            t.key === this.options.multiDragKey && (this.multiDragKeyDown = !1)
        }
    }, Kn(e, {
        pluginName: "multiDrag",
        utils: {
            select: function(t) {
                var i = t.parentNode[rn];
                !i || !i.options.multiDrag || ~_e.indexOf(t) || (Zn && Zn !== i && (Zn.multiDrag._deselectMultiDrag(), Zn = i), Ot(t, i.options.selectedClass, !0), _e.push(t))
            },
            deselect: function(t) {
                var i = t.parentNode[rn],
                    r = _e.indexOf(t);
                !i || !i.options.multiDrag || !~r || (Ot(t, i.options.selectedClass, !1), _e.splice(r, 1))
            }
        },
        eventProperties: function() {
            var t = this,
                i = [],
                r = [];
            return _e.forEach(function(s) {
                i.push({
                    multiDragElement: s,
                    index: s.sortableIndex
                });
                var o;
                pn && s !== gt ? o = -1 : pn ? o = Pt(s, ":not(." + t.options.selectedClass + ")") : o = Pt(s), r.push({
                    multiDragElement: s,
                    index: o
                })
            }), {
                items: nC(_e),
                clones: [].concat(An),
                oldIndicies: i,
                newIndicies: r
            }
        },
        optionListeners: {
            multiDragKey: function(t) {
                return t = t.toLowerCase(), t === "ctrl" ? t = "Control" : t.length > 1 && (t = t.charAt(0).toUpperCase() + t.substr(1)), t
            }
        }
    })
}

function RC(e, n) {
    _e.forEach(function(t, i) {
        var r = n.children[t.sortableIndex + (e ? Number(i) : 0)];
        r ? n.insertBefore(t, r) : n.appendChild(t)
    })
}

function Gh(e, n) {
    An.forEach(function(t, i) {
        var r = n.children[t.sortableIndex + (e ? Number(i) : 0)];
        r ? n.insertBefore(t, r) : n.appendChild(t)
    })
}

function na() {
    _e.forEach(function(e) {
        e !== gt && e.parentNode && e.parentNode.removeChild(e)
    })
}
Oe.mount(new MC);
Oe.mount(Rf, Nf);
const _C = Object.freeze(Object.defineProperty({
        __proto__: null,
        MultiDrag: NC,
        Sortable: Oe,
        Swap: IC,
        default: Oe
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    FC = uy(_C);
(function(e, n) {
    (function(i, r) {
        e.exports = r(Q1, FC)
    })(typeof self < "u" ? self : X1, function(t, i) {
        return function(r) {
            var s = {};

            function o(a) {
                if (s[a]) return s[a].exports;
                var l = s[a] = {
                    i: a,
                    l: !1,
                    exports: {}
                };
                return r[a].call(l.exports, l, l.exports, o), l.l = !0, l.exports
            }
            return o.m = r, o.c = s, o.d = function(a, l, u) {
                o.o(a, l) || Object.defineProperty(a, l, {
                    enumerable: !0,
                    get: u
                })
            }, o.r = function(a) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(a, "__esModule", {
                    value: !0
                })
            }, o.t = function(a, l) {
                if (l & 1 && (a = o(a)), l & 8 || l & 4 && typeof a == "object" && a && a.__esModule) return a;
                var u = Object.create(null);
                if (o.r(u), Object.defineProperty(u, "default", {
                        enumerable: !0,
                        value: a
                    }), l & 2 && typeof a != "string")
                    for (var c in a) o.d(u, c, (function(f) {
                        return a[f]
                    }).bind(null, c));
                return u
            }, o.n = function(a) {
                var l = a && a.__esModule ? function() {
                    return a.default
                } : function() {
                    return a
                };
                return o.d(l, "a", l), l
            }, o.o = function(a, l) {
                return Object.prototype.hasOwnProperty.call(a, l)
            }, o.p = "", o(o.s = "fb15")
        }({
            "00ee": function(r, s, o) {
                var a = o("b622"),
                    l = a("toStringTag"),
                    u = {};
                u[l] = "z", r.exports = String(u) === "[object z]"
            },
            "0366": function(r, s, o) {
                var a = o("1c0b");
                r.exports = function(l, u, c) {
                    if (a(l), u === void 0) return l;
                    switch (c) {
                        case 0:
                            return function() {
                                return l.call(u)
                            };
                        case 1:
                            return function(f) {
                                return l.call(u, f)
                            };
                        case 2:
                            return function(f, d) {
                                return l.call(u, f, d)
                            };
                        case 3:
                            return function(f, d, h) {
                                return l.call(u, f, d, h)
                            }
                    }
                    return function() {
                        return l.apply(u, arguments)
                    }
                }
            },
            "057f": function(r, s, o) {
                var a = o("fc6a"),
                    l = o("241c").f,
                    u = {}.toString,
                    c = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                    f = function(d) {
                        try {
                            return l(d)
                        } catch {
                            return c.slice()
                        }
                    };
                r.exports.f = function(h) {
                    return c && u.call(h) == "[object Window]" ? f(h) : l(a(h))
                }
            },
            "06cf": function(r, s, o) {
                var a = o("83ab"),
                    l = o("d1e7"),
                    u = o("5c6c"),
                    c = o("fc6a"),
                    f = o("c04e"),
                    d = o("5135"),
                    h = o("0cfb"),
                    p = Object.getOwnPropertyDescriptor;
                s.f = a ? p : function(y, D) {
                    if (y = c(y), D = f(D, !0), h) try {
                        return p(y, D)
                    } catch {}
                    if (d(y, D)) return u(!l.f.call(y, D), y[D])
                }
            },
            "0cfb": function(r, s, o) {
                var a = o("83ab"),
                    l = o("d039"),
                    u = o("cc12");
                r.exports = !a && !l(function() {
                    return Object.defineProperty(u("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a != 7
                })
            },
            "13d5": function(r, s, o) {
                var a = o("23e7"),
                    l = o("d58f").left,
                    u = o("a640"),
                    c = o("ae40"),
                    f = u("reduce"),
                    d = c("reduce", {
                        1: 0
                    });
                a({
                    target: "Array",
                    proto: !0,
                    forced: !f || !d
                }, {
                    reduce: function(p) {
                        return l(this, p, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
                    }
                })
            },
            "14c3": function(r, s, o) {
                var a = o("c6b6"),
                    l = o("9263");
                r.exports = function(u, c) {
                    var f = u.exec;
                    if (typeof f == "function") {
                        var d = f.call(u, c);
                        if (typeof d != "object") throw TypeError("RegExp exec method returned something other than an Object or null");
                        return d
                    }
                    if (a(u) !== "RegExp") throw TypeError("RegExp#exec called on incompatible receiver");
                    return l.call(u, c)
                }
            },
            "159b": function(r, s, o) {
                var a = o("da84"),
                    l = o("fdbc"),
                    u = o("17c2"),
                    c = o("9112");
                for (var f in l) {
                    var d = a[f],
                        h = d && d.prototype;
                    if (h && h.forEach !== u) try {
                        c(h, "forEach", u)
                    } catch {
                        h.forEach = u
                    }
                }
            },
            "17c2": function(r, s, o) {
                var a = o("b727").forEach,
                    l = o("a640"),
                    u = o("ae40"),
                    c = l("forEach"),
                    f = u("forEach");
                r.exports = !c || !f ? function(h) {
                    return a(this, h, arguments.length > 1 ? arguments[1] : void 0)
                } : [].forEach
            },
            "1be4": function(r, s, o) {
                var a = o("d066");
                r.exports = a("document", "documentElement")
            },
            "1c0b": function(r, s) {
                r.exports = function(o) {
                    if (typeof o != "function") throw TypeError(String(o) + " is not a function");
                    return o
                }
            },
            "1c7e": function(r, s, o) {
                var a = o("b622"),
                    l = a("iterator"),
                    u = !1;
                try {
                    var c = 0,
                        f = {
                            next: function() {
                                return {
                                    done: !!c++
                                }
                            },
                            return: function() {
                                u = !0
                            }
                        };
                    f[l] = function() {
                        return this
                    }, Array.from(f, function() {
                        throw 2
                    })
                } catch {}
                r.exports = function(d, h) {
                    if (!h && !u) return !1;
                    var p = !1;
                    try {
                        var m = {};
                        m[l] = function() {
                            return {
                                next: function() {
                                    return {
                                        done: p = !0
                                    }
                                }
                            }
                        }, d(m)
                    } catch {}
                    return p
                }
            },
            "1d80": function(r, s) {
                r.exports = function(o) {
                    if (o == null) throw TypeError("Can't call method on " + o);
                    return o
                }
            },
            "1dde": function(r, s, o) {
                var a = o("d039"),
                    l = o("b622"),
                    u = o("2d00"),
                    c = l("species");
                r.exports = function(f) {
                    return u >= 51 || !a(function() {
                        var d = [],
                            h = d.constructor = {};
                        return h[c] = function() {
                            return {
                                foo: 1
                            }
                        }, d[f](Boolean).foo !== 1
                    })
                }
            },
            "23cb": function(r, s, o) {
                var a = o("a691"),
                    l = Math.max,
                    u = Math.min;
                r.exports = function(c, f) {
                    var d = a(c);
                    return d < 0 ? l(d + f, 0) : u(d, f)
                }
            },
            "23e7": function(r, s, o) {
                var a = o("da84"),
                    l = o("06cf").f,
                    u = o("9112"),
                    c = o("6eeb"),
                    f = o("ce4e"),
                    d = o("e893"),
                    h = o("94ca");
                r.exports = function(p, m) {
                    var y = p.target,
                        D = p.global,
                        S = p.stat,
                        b, w, x, O, F, L;
                    if (D ? w = a : S ? w = a[y] || f(y, {}) : w = (a[y] || {}).prototype, w)
                        for (x in m) {
                            if (F = m[x], p.noTargetGet ? (L = l(w, x), O = L && L.value) : O = w[x], b = h(D ? x : y + (S ? "." : "#") + x, p.forced), !b && O !== void 0) {
                                if (typeof F == typeof O) continue;
                                d(F, O)
                            }(p.sham || O && O.sham) && u(F, "sham", !0), c(w, x, F, p)
                        }
                }
            },
            "241c": function(r, s, o) {
                var a = o("ca84"),
                    l = o("7839"),
                    u = l.concat("length", "prototype");
                s.f = Object.getOwnPropertyNames || function(f) {
                    return a(f, u)
                }
            },
            "25f0": function(r, s, o) {
                var a = o("6eeb"),
                    l = o("825a"),
                    u = o("d039"),
                    c = o("ad6d"),
                    f = "toString",
                    d = RegExp.prototype,
                    h = d[f],
                    p = u(function() {
                        return h.call({
                            source: "a",
                            flags: "b"
                        }) != "/a/b"
                    }),
                    m = h.name != f;
                (p || m) && a(RegExp.prototype, f, function() {
                    var D = l(this),
                        S = String(D.source),
                        b = D.flags,
                        w = String(b === void 0 && D instanceof RegExp && !("flags" in d) ? c.call(D) : b);
                    return "/" + S + "/" + w
                }, {
                    unsafe: !0
                })
            },
            "2ca0": function(r, s, o) {
                var a = o("23e7"),
                    l = o("06cf").f,
                    u = o("50c4"),
                    c = o("5a34"),
                    f = o("1d80"),
                    d = o("ab13"),
                    h = o("c430"),
                    p = "".startsWith,
                    m = Math.min,
                    y = d("startsWith"),
                    D = !h && !y && !! function() {
                        var S = l(String.prototype, "startsWith");
                        return S && !S.writable
                    }();
                a({
                    target: "String",
                    proto: !0,
                    forced: !D && !y
                }, {
                    startsWith: function(b) {
                        var w = String(f(this));
                        c(b);
                        var x = u(m(arguments.length > 1 ? arguments[1] : void 0, w.length)),
                            O = String(b);
                        return p ? p.call(w, O, x) : w.slice(x, x + O.length) === O
                    }
                })
            },
            "2d00": function(r, s, o) {
                var a = o("da84"),
                    l = o("342f"),
                    u = a.process,
                    c = u && u.versions,
                    f = c && c.v8,
                    d, h;
                f ? (d = f.split("."), h = d[0] + d[1]) : l && (d = l.match(/Edge\/(\d+)/), (!d || d[1] >= 74) && (d = l.match(/Chrome\/(\d+)/), d && (h = d[1]))), r.exports = h && +h
            },
            "342f": function(r, s, o) {
                var a = o("d066");
                r.exports = a("navigator", "userAgent") || ""
            },
            "35a1": function(r, s, o) {
                var a = o("f5df"),
                    l = o("3f8c"),
                    u = o("b622"),
                    c = u("iterator");
                r.exports = function(f) {
                    if (f != null) return f[c] || f["@@iterator"] || l[a(f)]
                }
            },
            "37e8": function(r, s, o) {
                var a = o("83ab"),
                    l = o("9bf2"),
                    u = o("825a"),
                    c = o("df75");
                r.exports = a ? Object.defineProperties : function(d, h) {
                    u(d);
                    for (var p = c(h), m = p.length, y = 0, D; m > y;) l.f(d, D = p[y++], h[D]);
                    return d
                }
            },
            "3bbe": function(r, s, o) {
                var a = o("861d");
                r.exports = function(l) {
                    if (!a(l) && l !== null) throw TypeError("Can't set " + String(l) + " as a prototype");
                    return l
                }
            },
            "3ca3": function(r, s, o) {
                var a = o("6547").charAt,
                    l = o("69f3"),
                    u = o("7dd0"),
                    c = "String Iterator",
                    f = l.set,
                    d = l.getterFor(c);
                u(String, "String", function(h) {
                    f(this, {
                        type: c,
                        string: String(h),
                        index: 0
                    })
                }, function() {
                    var p = d(this),
                        m = p.string,
                        y = p.index,
                        D;
                    return y >= m.length ? {
                        value: void 0,
                        done: !0
                    } : (D = a(m, y), p.index += D.length, {
                        value: D,
                        done: !1
                    })
                })
            },
            "3f8c": function(r, s) {
                r.exports = {}
            },
            4160: function(r, s, o) {
                var a = o("23e7"),
                    l = o("17c2");
                a({
                    target: "Array",
                    proto: !0,
                    forced: [].forEach != l
                }, {
                    forEach: l
                })
            },
            "428f": function(r, s, o) {
                var a = o("da84");
                r.exports = a
            },
            "44ad": function(r, s, o) {
                var a = o("d039"),
                    l = o("c6b6"),
                    u = "".split;
                r.exports = a(function() {
                    return !Object("z").propertyIsEnumerable(0)
                }) ? function(c) {
                    return l(c) == "String" ? u.call(c, "") : Object(c)
                } : Object
            },
            "44d2": function(r, s, o) {
                var a = o("b622"),
                    l = o("7c73"),
                    u = o("9bf2"),
                    c = a("unscopables"),
                    f = Array.prototype;
                f[c] == null && u.f(f, c, {
                    configurable: !0,
                    value: l(null)
                }), r.exports = function(d) {
                    f[c][d] = !0
                }
            },
            "44e7": function(r, s, o) {
                var a = o("861d"),
                    l = o("c6b6"),
                    u = o("b622"),
                    c = u("match");
                r.exports = function(f) {
                    var d;
                    return a(f) && ((d = f[c]) !== void 0 ? !!d : l(f) == "RegExp")
                }
            },
            4930: function(r, s, o) {
                var a = o("d039");
                r.exports = !!Object.getOwnPropertySymbols && !a(function() {
                    return !String(Symbol())
                })
            },
            "4d64": function(r, s, o) {
                var a = o("fc6a"),
                    l = o("50c4"),
                    u = o("23cb"),
                    c = function(f) {
                        return function(d, h, p) {
                            var m = a(d),
                                y = l(m.length),
                                D = u(p, y),
                                S;
                            if (f && h != h) {
                                for (; y > D;)
                                    if (S = m[D++], S != S) return !0
                            } else
                                for (; y > D; D++)
                                    if ((f || D in m) && m[D] === h) return f || D || 0;
                            return !f && -1
                        }
                    };
                r.exports = {
                    includes: c(!0),
                    indexOf: c(!1)
                }
            },
            "4de4": function(r, s, o) {
                var a = o("23e7"),
                    l = o("b727").filter,
                    u = o("1dde"),
                    c = o("ae40"),
                    f = u("filter"),
                    d = c("filter");
                a({
                    target: "Array",
                    proto: !0,
                    forced: !f || !d
                }, {
                    filter: function(p) {
                        return l(this, p, arguments.length > 1 ? arguments[1] : void 0)
                    }
                })
            },
            "4df4": function(r, s, o) {
                var a = o("0366"),
                    l = o("7b0b"),
                    u = o("9bdd"),
                    c = o("e95a"),
                    f = o("50c4"),
                    d = o("8418"),
                    h = o("35a1");
                r.exports = function(m) {
                    var y = l(m),
                        D = typeof this == "function" ? this : Array,
                        S = arguments.length,
                        b = S > 1 ? arguments[1] : void 0,
                        w = b !== void 0,
                        x = h(y),
                        O = 0,
                        F, L, C, I, j, R;
                    if (w && (b = a(b, S > 2 ? arguments[2] : void 0, 2)), x != null && !(D == Array && c(x)))
                        for (I = x.call(y), j = I.next, L = new D; !(C = j.call(I)).done; O++) R = w ? u(I, b, [C.value, O], !0) : C.value, d(L, O, R);
                    else
                        for (F = f(y.length), L = new D(F); F > O; O++) R = w ? b(y[O], O) : y[O], d(L, O, R);
                    return L.length = O, L
                }
            },
            "4fad": function(r, s, o) {
                var a = o("23e7"),
                    l = o("6f53").entries;
                a({
                    target: "Object",
                    stat: !0
                }, {
                    entries: function(c) {
                        return l(c)
                    }
                })
            },
            "50c4": function(r, s, o) {
                var a = o("a691"),
                    l = Math.min;
                r.exports = function(u) {
                    return u > 0 ? l(a(u), 9007199254740991) : 0
                }
            },
            5135: function(r, s) {
                var o = {}.hasOwnProperty;
                r.exports = function(a, l) {
                    return o.call(a, l)
                }
            },
            5319: function(r, s, o) {
                var a = o("d784"),
                    l = o("825a"),
                    u = o("7b0b"),
                    c = o("50c4"),
                    f = o("a691"),
                    d = o("1d80"),
                    h = o("8aa5"),
                    p = o("14c3"),
                    m = Math.max,
                    y = Math.min,
                    D = Math.floor,
                    S = /\$([$&'`]|\d\d?|<[^>]*>)/g,
                    b = /\$([$&'`]|\d\d?)/g,
                    w = function(x) {
                        return x === void 0 ? x : String(x)
                    };
                a("replace", 2, function(x, O, F, L) {
                    var C = L.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                        I = L.REPLACE_KEEPS_$0,
                        j = C ? "$" : "$0";
                    return [function(V, G) {
                        var $ = d(this),
                            W = V == null ? void 0 : V[x];
                        return W !== void 0 ? W.call(V, $, G) : O.call(String($), V, G)
                    }, function(_, V) {
                        if (!C && I || typeof V == "string" && V.indexOf(j) === -1) {
                            var G = F(O, _, this, V);
                            if (G.done) return G.value
                        }
                        var $ = l(_),
                            W = String(this),
                            J = typeof V == "function";
                        J || (V = String(V));
                        var Ce = $.global;
                        if (Ce) {
                            var Je = $.unicode;
                            $.lastIndex = 0
                        }
                        for (var Pe = [];;) {
                            var He = p($, W);
                            if (He === null || (Pe.push(He), !Ce)) break;
                            var at = String(He[0]);
                            at === "" && ($.lastIndex = h(W, c($.lastIndex), Je))
                        }
                        for (var Ye = "", tt = 0, q = 0; q < Pe.length; q++) {
                            He = Pe[q];
                            for (var ce = String(He[0]), Ne = m(y(f(He.index), W.length), 0), De = [], ft = 1; ft < He.length; ft++) De.push(w(He[ft]));
                            var mt = He.groups;
                            if (J) {
                                var dt = [ce].concat(De, Ne, W);
                                mt !== void 0 && dt.push(mt);
                                var M = String(V.apply(void 0, dt))
                            } else M = R(ce, W, Ne, De, mt, V);
                            Ne >= tt && (Ye += W.slice(tt, Ne) + M, tt = Ne + ce.length)
                        }
                        return Ye + W.slice(tt)
                    }];

                    function R(_, V, G, $, W, J) {
                        var Ce = G + _.length,
                            Je = $.length,
                            Pe = b;
                        return W !== void 0 && (W = u(W), Pe = S), O.call(J, Pe, function(He, at) {
                            var Ye;
                            switch (at.charAt(0)) {
                                case "$":
                                    return "$";
                                case "&":
                                    return _;
                                case "`":
                                    return V.slice(0, G);
                                case "'":
                                    return V.slice(Ce);
                                case "<":
                                    Ye = W[at.slice(1, -1)];
                                    break;
                                default:
                                    var tt = +at;
                                    if (tt === 0) return He;
                                    if (tt > Je) {
                                        var q = D(tt / 10);
                                        return q === 0 ? He : q <= Je ? $[q - 1] === void 0 ? at.charAt(1) : $[q - 1] + at.charAt(1) : He
                                    }
                                    Ye = $[tt - 1]
                            }
                            return Ye === void 0 ? "" : Ye
                        })
                    }
                })
            },
            5692: function(r, s, o) {
                var a = o("c430"),
                    l = o("c6cd");
                (r.exports = function(u, c) {
                    return l[u] || (l[u] = c !== void 0 ? c : {})
                })("versions", []).push({
                    version: "3.6.5",
                    mode: a ? "pure" : "global",
                    copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
                })
            },
            "56ef": function(r, s, o) {
                var a = o("d066"),
                    l = o("241c"),
                    u = o("7418"),
                    c = o("825a");
                r.exports = a("Reflect", "ownKeys") || function(d) {
                    var h = l.f(c(d)),
                        p = u.f;
                    return p ? h.concat(p(d)) : h
                }
            },
            "5a34": function(r, s, o) {
                var a = o("44e7");
                r.exports = function(l) {
                    if (a(l)) throw TypeError("The method doesn't accept regular expressions");
                    return l
                }
            },
            "5c6c": function(r, s) {
                r.exports = function(o, a) {
                    return {
                        enumerable: !(o & 1),
                        configurable: !(o & 2),
                        writable: !(o & 4),
                        value: a
                    }
                }
            },
            "5db7": function(r, s, o) {
                var a = o("23e7"),
                    l = o("a2bf"),
                    u = o("7b0b"),
                    c = o("50c4"),
                    f = o("1c0b"),
                    d = o("65f0");
                a({
                    target: "Array",
                    proto: !0
                }, {
                    flatMap: function(p) {
                        var m = u(this),
                            y = c(m.length),
                            D;
                        return f(p), D = d(m, 0), D.length = l(D, m, m, y, 0, 1, p, arguments.length > 1 ? arguments[1] : void 0), D
                    }
                })
            },
            6547: function(r, s, o) {
                var a = o("a691"),
                    l = o("1d80"),
                    u = function(c) {
                        return function(f, d) {
                            var h = String(l(f)),
                                p = a(d),
                                m = h.length,
                                y, D;
                            return p < 0 || p >= m ? c ? "" : void 0 : (y = h.charCodeAt(p), y < 55296 || y > 56319 || p + 1 === m || (D = h.charCodeAt(p + 1)) < 56320 || D > 57343 ? c ? h.charAt(p) : y : c ? h.slice(p, p + 2) : (y - 55296 << 10) + (D - 56320) + 65536)
                        }
                    };
                r.exports = {
                    codeAt: u(!1),
                    charAt: u(!0)
                }
            },
            "65f0": function(r, s, o) {
                var a = o("861d"),
                    l = o("e8b5"),
                    u = o("b622"),
                    c = u("species");
                r.exports = function(f, d) {
                    var h;
                    return l(f) && (h = f.constructor, typeof h == "function" && (h === Array || l(h.prototype)) ? h = void 0 : a(h) && (h = h[c], h === null && (h = void 0))), new(h === void 0 ? Array : h)(d === 0 ? 0 : d)
                }
            },
            "69f3": function(r, s, o) {
                var a = o("7f9a"),
                    l = o("da84"),
                    u = o("861d"),
                    c = o("9112"),
                    f = o("5135"),
                    d = o("f772"),
                    h = o("d012"),
                    p = l.WeakMap,
                    m, y, D, S = function(C) {
                        return D(C) ? y(C) : m(C, {})
                    },
                    b = function(C) {
                        return function(I) {
                            var j;
                            if (!u(I) || (j = y(I)).type !== C) throw TypeError("Incompatible receiver, " + C + " required");
                            return j
                        }
                    };
                if (a) {
                    var w = new p,
                        x = w.get,
                        O = w.has,
                        F = w.set;
                    m = function(C, I) {
                        return F.call(w, C, I), I
                    }, y = function(C) {
                        return x.call(w, C) || {}
                    }, D = function(C) {
                        return O.call(w, C)
                    }
                } else {
                    var L = d("state");
                    h[L] = !0, m = function(C, I) {
                        return c(C, L, I), I
                    }, y = function(C) {
                        return f(C, L) ? C[L] : {}
                    }, D = function(C) {
                        return f(C, L)
                    }
                }
                r.exports = {
                    set: m,
                    get: y,
                    has: D,
                    enforce: S,
                    getterFor: b
                }
            },
            "6eeb": function(r, s, o) {
                var a = o("da84"),
                    l = o("9112"),
                    u = o("5135"),
                    c = o("ce4e"),
                    f = o("8925"),
                    d = o("69f3"),
                    h = d.get,
                    p = d.enforce,
                    m = String(String).split("String");
                (r.exports = function(y, D, S, b) {
                    var w = b ? !!b.unsafe : !1,
                        x = b ? !!b.enumerable : !1,
                        O = b ? !!b.noTargetGet : !1;
                    if (typeof S == "function" && (typeof D == "string" && !u(S, "name") && l(S, "name", D), p(S).source = m.join(typeof D == "string" ? D : "")), y === a) {
                        x ? y[D] = S : c(D, S);
                        return
                    } else w ? !O && y[D] && (x = !0) : delete y[D];
                    x ? y[D] = S : l(y, D, S)
                })(Function.prototype, "toString", function() {
                    return typeof this == "function" && h(this).source || f(this)
                })
            },
            "6f53": function(r, s, o) {
                var a = o("83ab"),
                    l = o("df75"),
                    u = o("fc6a"),
                    c = o("d1e7").f,
                    f = function(d) {
                        return function(h) {
                            for (var p = u(h), m = l(p), y = m.length, D = 0, S = [], b; y > D;) b = m[D++], (!a || c.call(p, b)) && S.push(d ? [b, p[b]] : p[b]);
                            return S
                        }
                    };
                r.exports = {
                    entries: f(!0),
                    values: f(!1)
                }
            },
            "73d9": function(r, s, o) {
                var a = o("44d2");
                a("flatMap")
            },
            7418: function(r, s) {
                s.f = Object.getOwnPropertySymbols
            },
            "746f": function(r, s, o) {
                var a = o("428f"),
                    l = o("5135"),
                    u = o("e538"),
                    c = o("9bf2").f;
                r.exports = function(f) {
                    var d = a.Symbol || (a.Symbol = {});
                    l(d, f) || c(d, f, {
                        value: u.f(f)
                    })
                }
            },
            7839: function(r, s) {
                r.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            },
            "7b0b": function(r, s, o) {
                var a = o("1d80");
                r.exports = function(l) {
                    return Object(a(l))
                }
            },
            "7c73": function(r, s, o) {
                var a = o("825a"),
                    l = o("37e8"),
                    u = o("7839"),
                    c = o("d012"),
                    f = o("1be4"),
                    d = o("cc12"),
                    h = o("f772"),
                    p = ">",
                    m = "<",
                    y = "prototype",
                    D = "script",
                    S = h("IE_PROTO"),
                    b = function() {},
                    w = function(C) {
                        return m + D + p + C + m + "/" + D + p
                    },
                    x = function(C) {
                        C.write(w("")), C.close();
                        var I = C.parentWindow.Object;
                        return C = null, I
                    },
                    O = function() {
                        var C = d("iframe"),
                            I = "java" + D + ":",
                            j;
                        return C.style.display = "none", f.appendChild(C), C.src = String(I), j = C.contentWindow.document, j.open(), j.write(w("document.F=Object")), j.close(), j.F
                    },
                    F, L = function() {
                        try {
                            F = document.domain && new ActiveXObject("htmlfile")
                        } catch {}
                        L = F ? x(F) : O();
                        for (var C = u.length; C--;) delete L[y][u[C]];
                        return L()
                    };
                c[S] = !0, r.exports = Object.create || function(I, j) {
                    var R;
                    return I !== null ? (b[y] = a(I), R = new b, b[y] = null, R[S] = I) : R = L(), j === void 0 ? R : l(R, j)
                }
            },
            "7dd0": function(r, s, o) {
                var a = o("23e7"),
                    l = o("9ed3"),
                    u = o("e163"),
                    c = o("d2bb"),
                    f = o("d44e"),
                    d = o("9112"),
                    h = o("6eeb"),
                    p = o("b622"),
                    m = o("c430"),
                    y = o("3f8c"),
                    D = o("ae93"),
                    S = D.IteratorPrototype,
                    b = D.BUGGY_SAFARI_ITERATORS,
                    w = p("iterator"),
                    x = "keys",
                    O = "values",
                    F = "entries",
                    L = function() {
                        return this
                    };
                r.exports = function(C, I, j, R, _, V, G) {
                    l(j, I, R);
                    var $ = function(q) {
                            if (q === _ && Pe) return Pe;
                            if (!b && q in Ce) return Ce[q];
                            switch (q) {
                                case x:
                                    return function() {
                                        return new j(this, q)
                                    };
                                case O:
                                    return function() {
                                        return new j(this, q)
                                    };
                                case F:
                                    return function() {
                                        return new j(this, q)
                                    }
                            }
                            return function() {
                                return new j(this)
                            }
                        },
                        W = I + " Iterator",
                        J = !1,
                        Ce = C.prototype,
                        Je = Ce[w] || Ce["@@iterator"] || _ && Ce[_],
                        Pe = !b && Je || $(_),
                        He = I == "Array" && Ce.entries || Je,
                        at, Ye, tt;
                    if (He && (at = u(He.call(new C)), S !== Object.prototype && at.next && (!m && u(at) !== S && (c ? c(at, S) : typeof at[w] != "function" && d(at, w, L)), f(at, W, !0, !0), m && (y[W] = L))), _ == O && Je && Je.name !== O && (J = !0, Pe = function() {
                            return Je.call(this)
                        }), (!m || G) && Ce[w] !== Pe && d(Ce, w, Pe), y[I] = Pe, _)
                        if (Ye = {
                                values: $(O),
                                keys: V ? Pe : $(x),
                                entries: $(F)
                            }, G)
                            for (tt in Ye)(b || J || !(tt in Ce)) && h(Ce, tt, Ye[tt]);
                        else a({
                            target: I,
                            proto: !0,
                            forced: b || J
                        }, Ye);
                    return Ye
                }
            },
            "7f9a": function(r, s, o) {
                var a = o("da84"),
                    l = o("8925"),
                    u = a.WeakMap;
                r.exports = typeof u == "function" && /native code/.test(l(u))
            },
            "825a": function(r, s, o) {
                var a = o("861d");
                r.exports = function(l) {
                    if (!a(l)) throw TypeError(String(l) + " is not an object");
                    return l
                }
            },
            "83ab": function(r, s, o) {
                var a = o("d039");
                r.exports = !a(function() {
                    return Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1] != 7
                })
            },
            8418: function(r, s, o) {
                var a = o("c04e"),
                    l = o("9bf2"),
                    u = o("5c6c");
                r.exports = function(c, f, d) {
                    var h = a(f);
                    h in c ? l.f(c, h, u(0, d)) : c[h] = d
                }
            },
            "861d": function(r, s) {
                r.exports = function(o) {
                    return typeof o == "object" ? o !== null : typeof o == "function"
                }
            },
            8875: function(r, s, o) {
                var a, l, u;
                (function(c, f) {
                    l = [], a = f, u = typeof a == "function" ? a.apply(s, l) : a, u !== void 0 && (r.exports = u)
                })(typeof self < "u" ? self : this, function() {
                    function c() {
                        var f = Object.getOwnPropertyDescriptor(document, "currentScript");
                        if (!f && "currentScript" in document && document.currentScript || f && f.get !== c && document.currentScript) return document.currentScript;
                        try {
                            throw new Error
                        } catch (F) {
                            var d = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
                                h = /@([^@]*):(\d+):(\d+)\s*$/ig,
                                p = d.exec(F.stack) || h.exec(F.stack),
                                m = p && p[1] || !1,
                                y = p && p[2] || !1,
                                D = document.location.href.replace(document.location.hash, ""),
                                S, b, w, x = document.getElementsByTagName("script");
                            m === D && (S = document.documentElement.outerHTML, b = new RegExp("(?:[^\\n]+?\\n){0," + (y - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), w = S.replace(b, "$1").trim());
                            for (var O = 0; O < x.length; O++)
                                if (x[O].readyState === "interactive" || x[O].src === m || m === D && x[O].innerHTML && x[O].innerHTML.trim() === w) return x[O];
                            return null
                        }
                    }
                    return c
                })
            },
            8925: function(r, s, o) {
                var a = o("c6cd"),
                    l = Function.toString;
                typeof a.inspectSource != "function" && (a.inspectSource = function(u) {
                    return l.call(u)
                }), r.exports = a.inspectSource
            },
            "8aa5": function(r, s, o) {
                var a = o("6547").charAt;
                r.exports = function(l, u, c) {
                    return u + (c ? a(l, u).length : 1)
                }
            },
            "8bbf": function(r, s) {
                r.exports = t
            },
            "90e3": function(r, s) {
                var o = 0,
                    a = Math.random();
                r.exports = function(l) {
                    return "Symbol(" + String(l === void 0 ? "" : l) + ")_" + (++o + a).toString(36)
                }
            },
            9112: function(r, s, o) {
                var a = o("83ab"),
                    l = o("9bf2"),
                    u = o("5c6c");
                r.exports = a ? function(c, f, d) {
                    return l.f(c, f, u(1, d))
                } : function(c, f, d) {
                    return c[f] = d, c
                }
            },
            9263: function(r, s, o) {
                var a = o("ad6d"),
                    l = o("9f7f"),
                    u = RegExp.prototype.exec,
                    c = String.prototype.replace,
                    f = u,
                    d = function() {
                        var y = /a/,
                            D = /b*/g;
                        return u.call(y, "a"), u.call(D, "a"), y.lastIndex !== 0 || D.lastIndex !== 0
                    }(),
                    h = l.UNSUPPORTED_Y || l.BROKEN_CARET,
                    p = /()??/.exec("")[1] !== void 0,
                    m = d || p || h;
                m && (f = function(D) {
                    var S = this,
                        b, w, x, O, F = h && S.sticky,
                        L = a.call(S),
                        C = S.source,
                        I = 0,
                        j = D;
                    return F && (L = L.replace("y", ""), L.indexOf("g") === -1 && (L += "g"), j = String(D).slice(S.lastIndex), S.lastIndex > 0 && (!S.multiline || S.multiline && D[S.lastIndex - 1] !== `
`) && (C = "(?: " + C + ")", j = " " + j, I++), w = new RegExp("^(?:" + C + ")", L)), p && (w = new RegExp("^" + C + "$(?!\\s)", L)), d && (b = S.lastIndex), x = u.call(F ? w : S, j), F ? x ? (x.input = x.input.slice(I), x[0] = x[0].slice(I), x.index = S.lastIndex, S.lastIndex += x[0].length) : S.lastIndex = 0 : d && x && (S.lastIndex = S.global ? x.index + x[0].length : b), p && x && x.length > 1 && c.call(x[0], w, function() {
                        for (O = 1; O < arguments.length - 2; O++) arguments[O] === void 0 && (x[O] = void 0)
                    }), x
                }), r.exports = f
            },
            "94ca": function(r, s, o) {
                var a = o("d039"),
                    l = /#|\.prototype\./,
                    u = function(p, m) {
                        var y = f[c(p)];
                        return y == h ? !0 : y == d ? !1 : typeof m == "function" ? a(m) : !!m
                    },
                    c = u.normalize = function(p) {
                        return String(p).replace(l, ".").toLowerCase()
                    },
                    f = u.data = {},
                    d = u.NATIVE = "N",
                    h = u.POLYFILL = "P";
                r.exports = u
            },
            "99af": function(r, s, o) {
                var a = o("23e7"),
                    l = o("d039"),
                    u = o("e8b5"),
                    c = o("861d"),
                    f = o("7b0b"),
                    d = o("50c4"),
                    h = o("8418"),
                    p = o("65f0"),
                    m = o("1dde"),
                    y = o("b622"),
                    D = o("2d00"),
                    S = y("isConcatSpreadable"),
                    b = 9007199254740991,
                    w = "Maximum allowed index exceeded",
                    x = D >= 51 || !l(function() {
                        var C = [];
                        return C[S] = !1, C.concat()[0] !== C
                    }),
                    O = m("concat"),
                    F = function(C) {
                        if (!c(C)) return !1;
                        var I = C[S];
                        return I !== void 0 ? !!I : u(C)
                    },
                    L = !x || !O;
                a({
                    target: "Array",
                    proto: !0,
                    forced: L
                }, {
                    concat: function(I) {
                        var j = f(this),
                            R = p(j, 0),
                            _ = 0,
                            V, G, $, W, J;
                        for (V = -1, $ = arguments.length; V < $; V++)
                            if (J = V === -1 ? j : arguments[V], F(J)) {
                                if (W = d(J.length), _ + W > b) throw TypeError(w);
                                for (G = 0; G < W; G++, _++) G in J && h(R, _, J[G])
                            } else {
                                if (_ >= b) throw TypeError(w);
                                h(R, _++, J)
                            } return R.length = _, R
                    }
                })
            },
            "9bdd": function(r, s, o) {
                var a = o("825a");
                r.exports = function(l, u, c, f) {
                    try {
                        return f ? u(a(c)[0], c[1]) : u(c)
                    } catch (h) {
                        var d = l.return;
                        throw d !== void 0 && a(d.call(l)), h
                    }
                }
            },
            "9bf2": function(r, s, o) {
                var a = o("83ab"),
                    l = o("0cfb"),
                    u = o("825a"),
                    c = o("c04e"),
                    f = Object.defineProperty;
                s.f = a ? f : function(h, p, m) {
                    if (u(h), p = c(p, !0), u(m), l) try {
                        return f(h, p, m)
                    } catch {}
                    if ("get" in m || "set" in m) throw TypeError("Accessors not supported");
                    return "value" in m && (h[p] = m.value), h
                }
            },
            "9ed3": function(r, s, o) {
                var a = o("ae93").IteratorPrototype,
                    l = o("7c73"),
                    u = o("5c6c"),
                    c = o("d44e"),
                    f = o("3f8c"),
                    d = function() {
                        return this
                    };
                r.exports = function(h, p, m) {
                    var y = p + " Iterator";
                    return h.prototype = l(a, {
                        next: u(1, m)
                    }), c(h, y, !1, !0), f[y] = d, h
                }
            },
            "9f7f": function(r, s, o) {
                var a = o("d039");

                function l(u, c) {
                    return RegExp(u, c)
                }
                s.UNSUPPORTED_Y = a(function() {
                    var u = l("a", "y");
                    return u.lastIndex = 2, u.exec("abcd") != null
                }), s.BROKEN_CARET = a(function() {
                    var u = l("^r", "gy");
                    return u.lastIndex = 2, u.exec("str") != null
                })
            },
            a2bf: function(r, s, o) {
                var a = o("e8b5"),
                    l = o("50c4"),
                    u = o("0366"),
                    c = function(f, d, h, p, m, y, D, S) {
                        for (var b = m, w = 0, x = D ? u(D, S, 3) : !1, O; w < p;) {
                            if (w in h) {
                                if (O = x ? x(h[w], w, d) : h[w], y > 0 && a(O)) b = c(f, d, O, l(O.length), b, y - 1) - 1;
                                else {
                                    if (b >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                                    f[b] = O
                                }
                                b++
                            }
                            w++
                        }
                        return b
                    };
                r.exports = c
            },
            a352: function(r, s) {
                r.exports = i
            },
            a434: function(r, s, o) {
                var a = o("23e7"),
                    l = o("23cb"),
                    u = o("a691"),
                    c = o("50c4"),
                    f = o("7b0b"),
                    d = o("65f0"),
                    h = o("8418"),
                    p = o("1dde"),
                    m = o("ae40"),
                    y = p("splice"),
                    D = m("splice", {
                        ACCESSORS: !0,
                        0: 0,
                        1: 2
                    }),
                    S = Math.max,
                    b = Math.min,
                    w = 9007199254740991,
                    x = "Maximum allowed length exceeded";
                a({
                    target: "Array",
                    proto: !0,
                    forced: !y || !D
                }, {
                    splice: function(F, L) {
                        var C = f(this),
                            I = c(C.length),
                            j = l(F, I),
                            R = arguments.length,
                            _, V, G, $, W, J;
                        if (R === 0 ? _ = V = 0 : R === 1 ? (_ = 0, V = I - j) : (_ = R - 2, V = b(S(u(L), 0), I - j)), I + _ - V > w) throw TypeError(x);
                        for (G = d(C, V), $ = 0; $ < V; $++) W = j + $, W in C && h(G, $, C[W]);
                        if (G.length = V, _ < V) {
                            for ($ = j; $ < I - V; $++) W = $ + V, J = $ + _, W in C ? C[J] = C[W] : delete C[J];
                            for ($ = I; $ > I - V + _; $--) delete C[$ - 1]
                        } else if (_ > V)
                            for ($ = I - V; $ > j; $--) W = $ + V - 1, J = $ + _ - 1, W in C ? C[J] = C[W] : delete C[J];
                        for ($ = 0; $ < _; $++) C[$ + j] = arguments[$ + 2];
                        return C.length = I - V + _, G
                    }
                })
            },
            a4d3: function(r, s, o) {
                var a = o("23e7"),
                    l = o("da84"),
                    u = o("d066"),
                    c = o("c430"),
                    f = o("83ab"),
                    d = o("4930"),
                    h = o("fdbf"),
                    p = o("d039"),
                    m = o("5135"),
                    y = o("e8b5"),
                    D = o("861d"),
                    S = o("825a"),
                    b = o("7b0b"),
                    w = o("fc6a"),
                    x = o("c04e"),
                    O = o("5c6c"),
                    F = o("7c73"),
                    L = o("df75"),
                    C = o("241c"),
                    I = o("057f"),
                    j = o("7418"),
                    R = o("06cf"),
                    _ = o("9bf2"),
                    V = o("d1e7"),
                    G = o("9112"),
                    $ = o("6eeb"),
                    W = o("5692"),
                    J = o("f772"),
                    Ce = o("d012"),
                    Je = o("90e3"),
                    Pe = o("b622"),
                    He = o("e538"),
                    at = o("746f"),
                    Ye = o("d44e"),
                    tt = o("69f3"),
                    q = o("b727").forEach,
                    ce = J("hidden"),
                    Ne = "Symbol",
                    De = "prototype",
                    ft = Pe("toPrimitive"),
                    mt = tt.set,
                    dt = tt.getterFor(Ne),
                    M = Object[De],
                    P = l.Symbol,
                    H = u("JSON", "stringify"),
                    Z = R.f,
                    K = _.f,
                    Q = I.f,
                    ne = V.f,
                    te = W("symbols"),
                    ie = W("op-symbols"),
                    X = W("string-to-symbol-registry"),
                    le = W("symbol-to-string-registry"),
                    ve = W("wks"),
                    fe = l.QObject,
                    Te = !fe || !fe[De] || !fe[De].findChild,
                    Ae = f && p(function() {
                        return F(K({}, "a", {
                            get: function() {
                                return K(this, "a", {
                                    value: 7
                                }).a
                            }
                        })).a != 7
                    }) ? function(me, re, de) {
                        var Ee = Z(M, re);
                        Ee && delete M[re], K(me, re, de), Ee && me !== M && K(M, re, Ee)
                    } : K,
                    ze = function(me, re) {
                        var de = te[me] = F(P[De]);
                        return mt(de, {
                            type: Ne,
                            tag: me,
                            description: re
                        }), f || (de.description = re), de
                    },
                    g = h ? function(me) {
                        return typeof me == "symbol"
                    } : function(me) {
                        return Object(me) instanceof P
                    },
                    v = function(re, de, Ee) {
                        re === M && v(ie, de, Ee), S(re);
                        var Me = x(de, !0);
                        return S(Ee), m(te, Me) ? (Ee.enumerable ? (m(re, ce) && re[ce][Me] && (re[ce][Me] = !1), Ee = F(Ee, {
                            enumerable: O(0, !1)
                        })) : (m(re, ce) || K(re, ce, O(1, {})), re[ce][Me] = !0), Ae(re, Me, Ee)) : K(re, Me, Ee)
                    },
                    A = function(re, de) {
                        S(re);
                        var Ee = w(de),
                            Me = L(Ee).concat(ue(Ee));
                        return q(Me, function(At) {
                            (!f || z.call(Ee, At)) && v(re, At, Ee[At])
                        }), re
                    },
                    k = function(re, de) {
                        return de === void 0 ? F(re) : A(F(re), de)
                    },
                    z = function(re) {
                        var de = x(re, !0),
                            Ee = ne.call(this, de);
                        return this === M && m(te, de) && !m(ie, de) ? !1 : Ee || !m(this, de) || !m(te, de) || m(this, ce) && this[ce][de] ? Ee : !0
                    },
                    ee = function(re, de) {
                        var Ee = w(re),
                            Me = x(de, !0);
                        if (!(Ee === M && m(te, Me) && !m(ie, Me))) {
                            var At = Z(Ee, Me);
                            return At && m(te, Me) && !(m(Ee, ce) && Ee[ce][Me]) && (At.enumerable = !0), At
                        }
                    },
                    Y = function(re) {
                        var de = Q(w(re)),
                            Ee = [];
                        return q(de, function(Me) {
                            !m(te, Me) && !m(Ce, Me) && Ee.push(Me)
                        }), Ee
                    },
                    ue = function(re) {
                        var de = re === M,
                            Ee = Q(de ? ie : w(re)),
                            Me = [];
                        return q(Ee, function(At) {
                            m(te, At) && (!de || m(M, At)) && Me.push(te[At])
                        }), Me
                    };
                if (d || (P = function() {
                        if (this instanceof P) throw TypeError("Symbol is not a constructor");
                        var re = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]),
                            de = Je(re),
                            Ee = function(Me) {
                                this === M && Ee.call(ie, Me), m(this, ce) && m(this[ce], de) && (this[ce][de] = !1), Ae(this, de, O(1, Me))
                            };
                        return f && Te && Ae(M, de, {
                            configurable: !0,
                            set: Ee
                        }), ze(de, re)
                    }, $(P[De], "toString", function() {
                        return dt(this).tag
                    }), $(P, "withoutSetter", function(me) {
                        return ze(Je(me), me)
                    }), V.f = z, _.f = v, R.f = ee, C.f = I.f = Y, j.f = ue, He.f = function(me) {
                        return ze(Pe(me), me)
                    }, f && (K(P[De], "description", {
                        configurable: !0,
                        get: function() {
                            return dt(this).description
                        }
                    }), c || $(M, "propertyIsEnumerable", z, {
                        unsafe: !0
                    }))), a({
                        global: !0,
                        wrap: !0,
                        forced: !d,
                        sham: !d
                    }, {
                        Symbol: P
                    }), q(L(ve), function(me) {
                        at(me)
                    }), a({
                        target: Ne,
                        stat: !0,
                        forced: !d
                    }, {
                        for: function(me) {
                            var re = String(me);
                            if (m(X, re)) return X[re];
                            var de = P(re);
                            return X[re] = de, le[de] = re, de
                        },
                        keyFor: function(re) {
                            if (!g(re)) throw TypeError(re + " is not a symbol");
                            if (m(le, re)) return le[re]
                        },
                        useSetter: function() {
                            Te = !0
                        },
                        useSimple: function() {
                            Te = !1
                        }
                    }), a({
                        target: "Object",
                        stat: !0,
                        forced: !d,
                        sham: !f
                    }, {
                        create: k,
                        defineProperty: v,
                        defineProperties: A,
                        getOwnPropertyDescriptor: ee
                    }), a({
                        target: "Object",
                        stat: !0,
                        forced: !d
                    }, {
                        getOwnPropertyNames: Y,
                        getOwnPropertySymbols: ue
                    }), a({
                        target: "Object",
                        stat: !0,
                        forced: p(function() {
                            j.f(1)
                        })
                    }, {
                        getOwnPropertySymbols: function(re) {
                            return j.f(b(re))
                        }
                    }), H) {
                    var we = !d || p(function() {
                        var me = P();
                        return H([me]) != "[null]" || H({
                            a: me
                        }) != "{}" || H(Object(me)) != "{}"
                    });
                    a({
                        target: "JSON",
                        stat: !0,
                        forced: we
                    }, {
                        stringify: function(re, de, Ee) {
                            for (var Me = [re], At = 1, E; arguments.length > At;) Me.push(arguments[At++]);
                            if (E = de, !(!D(de) && re === void 0 || g(re))) return y(de) || (de = function(T, N) {
                                if (typeof E == "function" && (N = E.call(this, T, N)), !g(N)) return N
                            }), Me[1] = de, H.apply(null, Me)
                        }
                    })
                }
                P[De][ft] || G(P[De], ft, P[De].valueOf), Ye(P, Ne), Ce[ce] = !0
            },
            a630: function(r, s, o) {
                var a = o("23e7"),
                    l = o("4df4"),
                    u = o("1c7e"),
                    c = !u(function(f) {
                        Array.from(f)
                    });
                a({
                    target: "Array",
                    stat: !0,
                    forced: c
                }, {
                    from: l
                })
            },
            a640: function(r, s, o) {
                var a = o("d039");
                r.exports = function(l, u) {
                    var c = [][l];
                    return !!c && a(function() {
                        c.call(null, u || function() {
                            throw 1
                        }, 1)
                    })
                }
            },
            a691: function(r, s) {
                var o = Math.ceil,
                    a = Math.floor;
                r.exports = function(l) {
                    return isNaN(l = +l) ? 0 : (l > 0 ? a : o)(l)
                }
            },
            ab13: function(r, s, o) {
                var a = o("b622"),
                    l = a("match");
                r.exports = function(u) {
                    var c = /./;
                    try {
                        "/./" [u](c)
                    } catch {
                        try {
                            return c[l] = !1, "/./" [u](c)
                        } catch {}
                    }
                    return !1
                }
            },
            ac1f: function(r, s, o) {
                var a = o("23e7"),
                    l = o("9263");
                a({
                    target: "RegExp",
                    proto: !0,
                    forced: /./.exec !== l
                }, {
                    exec: l
                })
            },
            ad6d: function(r, s, o) {
                var a = o("825a");
                r.exports = function() {
                    var l = a(this),
                        u = "";
                    return l.global && (u += "g"), l.ignoreCase && (u += "i"), l.multiline && (u += "m"), l.dotAll && (u += "s"), l.unicode && (u += "u"), l.sticky && (u += "y"), u
                }
            },
            ae40: function(r, s, o) {
                var a = o("83ab"),
                    l = o("d039"),
                    u = o("5135"),
                    c = Object.defineProperty,
                    f = {},
                    d = function(h) {
                        throw h
                    };
                r.exports = function(h, p) {
                    if (u(f, h)) return f[h];
                    p || (p = {});
                    var m = [][h],
                        y = u(p, "ACCESSORS") ? p.ACCESSORS : !1,
                        D = u(p, 0) ? p[0] : d,
                        S = u(p, 1) ? p[1] : void 0;
                    return f[h] = !!m && !l(function() {
                        if (y && !a) return !0;
                        var b = {
                            length: -1
                        };
                        y ? c(b, 1, {
                            enumerable: !0,
                            get: d
                        }) : b[1] = 1, m.call(b, D, S)
                    })
                }
            },
            ae93: function(r, s, o) {
                var a = o("e163"),
                    l = o("9112"),
                    u = o("5135"),
                    c = o("b622"),
                    f = o("c430"),
                    d = c("iterator"),
                    h = !1,
                    p = function() {
                        return this
                    },
                    m, y, D;
                [].keys && (D = [].keys(), "next" in D ? (y = a(a(D)), y !== Object.prototype && (m = y)) : h = !0), m == null && (m = {}), !f && !u(m, d) && l(m, d, p), r.exports = {
                    IteratorPrototype: m,
                    BUGGY_SAFARI_ITERATORS: h
                }
            },
            b041: function(r, s, o) {
                var a = o("00ee"),
                    l = o("f5df");
                r.exports = a ? {}.toString : function() {
                    return "[object " + l(this) + "]"
                }
            },
            b0c0: function(r, s, o) {
                var a = o("83ab"),
                    l = o("9bf2").f,
                    u = Function.prototype,
                    c = u.toString,
                    f = /^\s*function ([^ (]*)/,
                    d = "name";
                a && !(d in u) && l(u, d, {
                    configurable: !0,
                    get: function() {
                        try {
                            return c.call(this).match(f)[1]
                        } catch {
                            return ""
                        }
                    }
                })
            },
            b622: function(r, s, o) {
                var a = o("da84"),
                    l = o("5692"),
                    u = o("5135"),
                    c = o("90e3"),
                    f = o("4930"),
                    d = o("fdbf"),
                    h = l("wks"),
                    p = a.Symbol,
                    m = d ? p : p && p.withoutSetter || c;
                r.exports = function(y) {
                    return u(h, y) || (f && u(p, y) ? h[y] = p[y] : h[y] = m("Symbol." + y)), h[y]
                }
            },
            b64b: function(r, s, o) {
                var a = o("23e7"),
                    l = o("7b0b"),
                    u = o("df75"),
                    c = o("d039"),
                    f = c(function() {
                        u(1)
                    });
                a({
                    target: "Object",
                    stat: !0,
                    forced: f
                }, {
                    keys: function(h) {
                        return u(l(h))
                    }
                })
            },
            b727: function(r, s, o) {
                var a = o("0366"),
                    l = o("44ad"),
                    u = o("7b0b"),
                    c = o("50c4"),
                    f = o("65f0"),
                    d = [].push,
                    h = function(p) {
                        var m = p == 1,
                            y = p == 2,
                            D = p == 3,
                            S = p == 4,
                            b = p == 6,
                            w = p == 5 || b;
                        return function(x, O, F, L) {
                            for (var C = u(x), I = l(C), j = a(O, F, 3), R = c(I.length), _ = 0, V = L || f, G = m ? V(x, R) : y ? V(x, 0) : void 0, $, W; R > _; _++)
                                if ((w || _ in I) && ($ = I[_], W = j($, _, C), p)) {
                                    if (m) G[_] = W;
                                    else if (W) switch (p) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return $;
                                        case 6:
                                            return _;
                                        case 2:
                                            d.call(G, $)
                                    } else if (S) return !1
                                } return b ? -1 : D || S ? S : G
                        }
                    };
                r.exports = {
                    forEach: h(0),
                    map: h(1),
                    filter: h(2),
                    some: h(3),
                    every: h(4),
                    find: h(5),
                    findIndex: h(6)
                }
            },
            c04e: function(r, s, o) {
                var a = o("861d");
                r.exports = function(l, u) {
                    if (!a(l)) return l;
                    var c, f;
                    if (u && typeof(c = l.toString) == "function" && !a(f = c.call(l)) || typeof(c = l.valueOf) == "function" && !a(f = c.call(l)) || !u && typeof(c = l.toString) == "function" && !a(f = c.call(l))) return f;
                    throw TypeError("Can't convert object to primitive value")
                }
            },
            c430: function(r, s) {
                r.exports = !1
            },
            c6b6: function(r, s) {
                var o = {}.toString;
                r.exports = function(a) {
                    return o.call(a).slice(8, -1)
                }
            },
            c6cd: function(r, s, o) {
                var a = o("da84"),
                    l = o("ce4e"),
                    u = "__core-js_shared__",
                    c = a[u] || l(u, {});
                r.exports = c
            },
            c740: function(r, s, o) {
                var a = o("23e7"),
                    l = o("b727").findIndex,
                    u = o("44d2"),
                    c = o("ae40"),
                    f = "findIndex",
                    d = !0,
                    h = c(f);
                f in [] && Array(1)[f](function() {
                    d = !1
                }), a({
                    target: "Array",
                    proto: !0,
                    forced: d || !h
                }, {
                    findIndex: function(m) {
                        return l(this, m, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), u(f)
            },
            c8ba: function(r, s) {
                var o;
                o = function() {
                    return this
                }();
                try {
                    o = o || new Function("return this")()
                } catch {
                    typeof window == "object" && (o = window)
                }
                r.exports = o
            },
            c975: function(r, s, o) {
                var a = o("23e7"),
                    l = o("4d64").indexOf,
                    u = o("a640"),
                    c = o("ae40"),
                    f = [].indexOf,
                    d = !!f && 1 / [1].indexOf(1, -0) < 0,
                    h = u("indexOf"),
                    p = c("indexOf", {
                        ACCESSORS: !0,
                        1: 0
                    });
                a({
                    target: "Array",
                    proto: !0,
                    forced: d || !h || !p
                }, {
                    indexOf: function(y) {
                        return d ? f.apply(this, arguments) || 0 : l(this, y, arguments.length > 1 ? arguments[1] : void 0)
                    }
                })
            },
            ca84: function(r, s, o) {
                var a = o("5135"),
                    l = o("fc6a"),
                    u = o("4d64").indexOf,
                    c = o("d012");
                r.exports = function(f, d) {
                    var h = l(f),
                        p = 0,
                        m = [],
                        y;
                    for (y in h) !a(c, y) && a(h, y) && m.push(y);
                    for (; d.length > p;) a(h, y = d[p++]) && (~u(m, y) || m.push(y));
                    return m
                }
            },
            caad: function(r, s, o) {
                var a = o("23e7"),
                    l = o("4d64").includes,
                    u = o("44d2"),
                    c = o("ae40"),
                    f = c("indexOf", {
                        ACCESSORS: !0,
                        1: 0
                    });
                a({
                    target: "Array",
                    proto: !0,
                    forced: !f
                }, {
                    includes: function(h) {
                        return l(this, h, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), u("includes")
            },
            cc12: function(r, s, o) {
                var a = o("da84"),
                    l = o("861d"),
                    u = a.document,
                    c = l(u) && l(u.createElement);
                r.exports = function(f) {
                    return c ? u.createElement(f) : {}
                }
            },
            ce4e: function(r, s, o) {
                var a = o("da84"),
                    l = o("9112");
                r.exports = function(u, c) {
                    try {
                        l(a, u, c)
                    } catch {
                        a[u] = c
                    }
                    return c
                }
            },
            d012: function(r, s) {
                r.exports = {}
            },
            d039: function(r, s) {
                r.exports = function(o) {
                    try {
                        return !!o()
                    } catch {
                        return !0
                    }
                }
            },
            d066: function(r, s, o) {
                var a = o("428f"),
                    l = o("da84"),
                    u = function(c) {
                        return typeof c == "function" ? c : void 0
                    };
                r.exports = function(c, f) {
                    return arguments.length < 2 ? u(a[c]) || u(l[c]) : a[c] && a[c][f] || l[c] && l[c][f]
                }
            },
            d1e7: function(r, s, o) {
                var a = {}.propertyIsEnumerable,
                    l = Object.getOwnPropertyDescriptor,
                    u = l && !a.call({
                        1: 2
                    }, 1);
                s.f = u ? function(f) {
                    var d = l(this, f);
                    return !!d && d.enumerable
                } : a
            },
            d28b: function(r, s, o) {
                var a = o("746f");
                a("iterator")
            },
            d2bb: function(r, s, o) {
                var a = o("825a"),
                    l = o("3bbe");
                r.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                    var u = !1,
                        c = {},
                        f;
                    try {
                        f = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, f.call(c, []), u = c instanceof Array
                    } catch {}
                    return function(h, p) {
                        return a(h), l(p), u ? f.call(h, p) : h.__proto__ = p, h
                    }
                }() : void 0)
            },
            d3b7: function(r, s, o) {
                var a = o("00ee"),
                    l = o("6eeb"),
                    u = o("b041");
                a || l(Object.prototype, "toString", u, {
                    unsafe: !0
                })
            },
            d44e: function(r, s, o) {
                var a = o("9bf2").f,
                    l = o("5135"),
                    u = o("b622"),
                    c = u("toStringTag");
                r.exports = function(f, d, h) {
                    f && !l(f = h ? f : f.prototype, c) && a(f, c, {
                        configurable: !0,
                        value: d
                    })
                }
            },
            d58f: function(r, s, o) {
                var a = o("1c0b"),
                    l = o("7b0b"),
                    u = o("44ad"),
                    c = o("50c4"),
                    f = function(d) {
                        return function(h, p, m, y) {
                            a(p);
                            var D = l(h),
                                S = u(D),
                                b = c(D.length),
                                w = d ? b - 1 : 0,
                                x = d ? -1 : 1;
                            if (m < 2)
                                for (;;) {
                                    if (w in S) {
                                        y = S[w], w += x;
                                        break
                                    }
                                    if (w += x, d ? w < 0 : b <= w) throw TypeError("Reduce of empty array with no initial value")
                                }
                            for (; d ? w >= 0 : b > w; w += x) w in S && (y = p(y, S[w], w, D));
                            return y
                        }
                    };
                r.exports = {
                    left: f(!1),
                    right: f(!0)
                }
            },
            d784: function(r, s, o) {
                o("ac1f");
                var a = o("6eeb"),
                    l = o("d039"),
                    u = o("b622"),
                    c = o("9263"),
                    f = o("9112"),
                    d = u("species"),
                    h = !l(function() {
                        var S = /./;
                        return S.exec = function() {
                            var b = [];
                            return b.groups = {
                                a: "7"
                            }, b
                        }, "".replace(S, "$<a>") !== "7"
                    }),
                    p = function() {
                        return "a".replace(/./, "$0") === "$0"
                    }(),
                    m = u("replace"),
                    y = function() {
                        return /./ [m] ? /./ [m]("a", "$0") === "" : !1
                    }(),
                    D = !l(function() {
                        var S = /(?:)/,
                            b = S.exec;
                        S.exec = function() {
                            return b.apply(this, arguments)
                        };
                        var w = "ab".split(S);
                        return w.length !== 2 || w[0] !== "a" || w[1] !== "b"
                    });
                r.exports = function(S, b, w, x) {
                    var O = u(S),
                        F = !l(function() {
                            var _ = {};
                            return _[O] = function() {
                                return 7
                            }, "" [S](_) != 7
                        }),
                        L = F && !l(function() {
                            var _ = !1,
                                V = /a/;
                            return S === "split" && (V = {}, V.constructor = {}, V.constructor[d] = function() {
                                return V
                            }, V.flags = "", V[O] = /./ [O]), V.exec = function() {
                                return _ = !0, null
                            }, V[O](""), !_
                        });
                    if (!F || !L || S === "replace" && !(h && p && !y) || S === "split" && !D) {
                        var C = /./ [O],
                            I = w(O, "" [S], function(_, V, G, $, W) {
                                return V.exec === c ? F && !W ? {
                                    done: !0,
                                    value: C.call(V, G, $)
                                } : {
                                    done: !0,
                                    value: _.call(G, V, $)
                                } : {
                                    done: !1
                                }
                            }, {
                                REPLACE_KEEPS_$0: p,
                                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: y
                            }),
                            j = I[0],
                            R = I[1];
                        a(String.prototype, S, j), a(RegExp.prototype, O, b == 2 ? function(_, V) {
                            return R.call(_, this, V)
                        } : function(_) {
                            return R.call(_, this)
                        })
                    }
                    x && f(RegExp.prototype[O], "sham", !0)
                }
            },
            d81d: function(r, s, o) {
                var a = o("23e7"),
                    l = o("b727").map,
                    u = o("1dde"),
                    c = o("ae40"),
                    f = u("map"),
                    d = c("map");
                a({
                    target: "Array",
                    proto: !0,
                    forced: !f || !d
                }, {
                    map: function(p) {
                        return l(this, p, arguments.length > 1 ? arguments[1] : void 0)
                    }
                })
            },
            da84: function(r, s, o) {
                (function(a) {
                    var l = function(u) {
                        return u && u.Math == Math && u
                    };
                    r.exports = l(typeof globalThis == "object" && globalThis) || l(typeof window == "object" && window) || l(typeof self == "object" && self) || l(typeof a == "object" && a) || Function("return this")()
                }).call(this, o("c8ba"))
            },
            dbb4: function(r, s, o) {
                var a = o("23e7"),
                    l = o("83ab"),
                    u = o("56ef"),
                    c = o("fc6a"),
                    f = o("06cf"),
                    d = o("8418");
                a({
                    target: "Object",
                    stat: !0,
                    sham: !l
                }, {
                    getOwnPropertyDescriptors: function(p) {
                        for (var m = c(p), y = f.f, D = u(m), S = {}, b = 0, w, x; D.length > b;) x = y(m, w = D[b++]), x !== void 0 && d(S, w, x);
                        return S
                    }
                })
            },
            dbf1: function(r, s, o) {
                (function(a) {
                    o.d(s, "a", function() {
                        return u
                    });

                    function l() {
                        return typeof window < "u" ? window.console : a.console
                    }
                    var u = l()
                }).call(this, o("c8ba"))
            },
            ddb0: function(r, s, o) {
                var a = o("da84"),
                    l = o("fdbc"),
                    u = o("e260"),
                    c = o("9112"),
                    f = o("b622"),
                    d = f("iterator"),
                    h = f("toStringTag"),
                    p = u.values;
                for (var m in l) {
                    var y = a[m],
                        D = y && y.prototype;
                    if (D) {
                        if (D[d] !== p) try {
                            c(D, d, p)
                        } catch {
                            D[d] = p
                        }
                        if (D[h] || c(D, h, m), l[m]) {
                            for (var S in u)
                                if (D[S] !== u[S]) try {
                                    c(D, S, u[S])
                                } catch {
                                    D[S] = u[S]
                                }
                        }
                    }
                }
            },
            df75: function(r, s, o) {
                var a = o("ca84"),
                    l = o("7839");
                r.exports = Object.keys || function(c) {
                    return a(c, l)
                }
            },
            e01a: function(r, s, o) {
                var a = o("23e7"),
                    l = o("83ab"),
                    u = o("da84"),
                    c = o("5135"),
                    f = o("861d"),
                    d = o("9bf2").f,
                    h = o("e893"),
                    p = u.Symbol;
                if (l && typeof p == "function" && (!("description" in p.prototype) || p().description !== void 0)) {
                    var m = {},
                        y = function() {
                            var O = arguments.length < 1 || arguments[0] === void 0 ? void 0 : String(arguments[0]),
                                F = this instanceof y ? new p(O) : O === void 0 ? p() : p(O);
                            return O === "" && (m[F] = !0), F
                        };
                    h(y, p);
                    var D = y.prototype = p.prototype;
                    D.constructor = y;
                    var S = D.toString,
                        b = String(p("test")) == "Symbol(test)",
                        w = /^Symbol\((.*)\)[^)]+$/;
                    d(D, "description", {
                        configurable: !0,
                        get: function() {
                            var O = f(this) ? this.valueOf() : this,
                                F = S.call(O);
                            if (c(m, O)) return "";
                            var L = b ? F.slice(7, -1) : F.replace(w, "$1");
                            return L === "" ? void 0 : L
                        }
                    }), a({
                        global: !0,
                        forced: !0
                    }, {
                        Symbol: y
                    })
                }
            },
            e163: function(r, s, o) {
                var a = o("5135"),
                    l = o("7b0b"),
                    u = o("f772"),
                    c = o("e177"),
                    f = u("IE_PROTO"),
                    d = Object.prototype;
                r.exports = c ? Object.getPrototypeOf : function(h) {
                    return h = l(h), a(h, f) ? h[f] : typeof h.constructor == "function" && h instanceof h.constructor ? h.constructor.prototype : h instanceof Object ? d : null
                }
            },
            e177: function(r, s, o) {
                var a = o("d039");
                r.exports = !a(function() {
                    function l() {}
                    return l.prototype.constructor = null, Object.getPrototypeOf(new l) !== l.prototype
                })
            },
            e260: function(r, s, o) {
                var a = o("fc6a"),
                    l = o("44d2"),
                    u = o("3f8c"),
                    c = o("69f3"),
                    f = o("7dd0"),
                    d = "Array Iterator",
                    h = c.set,
                    p = c.getterFor(d);
                r.exports = f(Array, "Array", function(m, y) {
                    h(this, {
                        type: d,
                        target: a(m),
                        index: 0,
                        kind: y
                    })
                }, function() {
                    var m = p(this),
                        y = m.target,
                        D = m.kind,
                        S = m.index++;
                    return !y || S >= y.length ? (m.target = void 0, {
                        value: void 0,
                        done: !0
                    }) : D == "keys" ? {
                        value: S,
                        done: !1
                    } : D == "values" ? {
                        value: y[S],
                        done: !1
                    } : {
                        value: [S, y[S]],
                        done: !1
                    }
                }, "values"), u.Arguments = u.Array, l("keys"), l("values"), l("entries")
            },
            e439: function(r, s, o) {
                var a = o("23e7"),
                    l = o("d039"),
                    u = o("fc6a"),
                    c = o("06cf").f,
                    f = o("83ab"),
                    d = l(function() {
                        c(1)
                    }),
                    h = !f || d;
                a({
                    target: "Object",
                    stat: !0,
                    forced: h,
                    sham: !f
                }, {
                    getOwnPropertyDescriptor: function(m, y) {
                        return c(u(m), y)
                    }
                })
            },
            e538: function(r, s, o) {
                var a = o("b622");
                s.f = a
            },
            e893: function(r, s, o) {
                var a = o("5135"),
                    l = o("56ef"),
                    u = o("06cf"),
                    c = o("9bf2");
                r.exports = function(f, d) {
                    for (var h = l(d), p = c.f, m = u.f, y = 0; y < h.length; y++) {
                        var D = h[y];
                        a(f, D) || p(f, D, m(d, D))
                    }
                }
            },
            e8b5: function(r, s, o) {
                var a = o("c6b6");
                r.exports = Array.isArray || function(u) {
                    return a(u) == "Array"
                }
            },
            e95a: function(r, s, o) {
                var a = o("b622"),
                    l = o("3f8c"),
                    u = a("iterator"),
                    c = Array.prototype;
                r.exports = function(f) {
                    return f !== void 0 && (l.Array === f || c[u] === f)
                }
            },
            f5df: function(r, s, o) {
                var a = o("00ee"),
                    l = o("c6b6"),
                    u = o("b622"),
                    c = u("toStringTag"),
                    f = l(function() {
                        return arguments
                    }()) == "Arguments",
                    d = function(h, p) {
                        try {
                            return h[p]
                        } catch {}
                    };
                r.exports = a ? l : function(h) {
                    var p, m, y;
                    return h === void 0 ? "Undefined" : h === null ? "Null" : typeof(m = d(p = Object(h), c)) == "string" ? m : f ? l(p) : (y = l(p)) == "Object" && typeof p.callee == "function" ? "Arguments" : y
                }
            },
            f772: function(r, s, o) {
                var a = o("5692"),
                    l = o("90e3"),
                    u = a("keys");
                r.exports = function(c) {
                    return u[c] || (u[c] = l(c))
                }
            },
            fb15: function(r, s, o) {
                if (o.r(s), typeof window < "u") {
                    var a = window.document.currentScript;
                    {
                        var l = o("8875");
                        a = l(), "currentScript" in document || Object.defineProperty(document, "currentScript", {
                            get: l
                        })
                    }
                    var u = a && a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                    u && (o.p = u[1])
                }
                o("99af"), o("4de4"), o("4160"), o("c975"), o("d81d"), o("a434"), o("159b"), o("a4d3"), o("e439"), o("dbb4"), o("b64b");

                function c(g, v, A) {
                    return v in g ? Object.defineProperty(g, v, {
                        value: A,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : g[v] = A, g
                }

                function f(g, v) {
                    var A = Object.keys(g);
                    if (Object.getOwnPropertySymbols) {
                        var k = Object.getOwnPropertySymbols(g);
                        v && (k = k.filter(function(z) {
                            return Object.getOwnPropertyDescriptor(g, z).enumerable
                        })), A.push.apply(A, k)
                    }
                    return A
                }

                function d(g) {
                    for (var v = 1; v < arguments.length; v++) {
                        var A = arguments[v] != null ? arguments[v] : {};
                        v % 2 ? f(Object(A), !0).forEach(function(k) {
                            c(g, k, A[k])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(A)) : f(Object(A)).forEach(function(k) {
                            Object.defineProperty(g, k, Object.getOwnPropertyDescriptor(A, k))
                        })
                    }
                    return g
                }

                function h(g) {
                    if (Array.isArray(g)) return g
                }
                o("e01a"), o("d28b"), o("e260"), o("d3b7"), o("3ca3"), o("ddb0");

                function p(g, v) {
                    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(g)))) {
                        var A = [],
                            k = !0,
                            z = !1,
                            ee = void 0;
                        try {
                            for (var Y = g[Symbol.iterator](), ue; !(k = (ue = Y.next()).done) && (A.push(ue.value), !(v && A.length === v)); k = !0);
                        } catch (we) {
                            z = !0, ee = we
                        } finally {
                            try {
                                !k && Y.return != null && Y.return()
                            } finally {
                                if (z) throw ee
                            }
                        }
                        return A
                    }
                }
                o("a630"), o("fb6a"), o("b0c0"), o("25f0");

                function m(g, v) {
                    (v == null || v > g.length) && (v = g.length);
                    for (var A = 0, k = new Array(v); A < v; A++) k[A] = g[A];
                    return k
                }

                function y(g, v) {
                    if (g) {
                        if (typeof g == "string") return m(g, v);
                        var A = Object.prototype.toString.call(g).slice(8, -1);
                        if (A === "Object" && g.constructor && (A = g.constructor.name), A === "Map" || A === "Set") return Array.from(g);
                        if (A === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)) return m(g, v)
                    }
                }

                function D() {
                    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                }

                function S(g, v) {
                    return h(g) || p(g, v) || y(g, v) || D()
                }

                function b(g) {
                    if (Array.isArray(g)) return m(g)
                }

                function w(g) {
                    if (typeof Symbol < "u" && Symbol.iterator in Object(g)) return Array.from(g)
                }

                function x() {
                    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                }

                function O(g) {
                    return b(g) || w(g) || y(g) || x()
                }
                var F = o("a352"),
                    L = o.n(F);

                function C(g) {
                    g.parentElement !== null && g.parentElement.removeChild(g)
                }

                function I(g, v, A) {
                    var k = A === 0 ? g.children[0] : g.children[A - 1].nextSibling;
                    g.insertBefore(v, k)
                }
                var j = o("dbf1");
                o("13d5"), o("4fad"), o("ac1f"), o("5319");

                function R(g) {
                    var v = Object.create(null);
                    return function(k) {
                        var z = v[k];
                        return z || (v[k] = g(k))
                    }
                }
                var _ = /-(\w)/g,
                    V = R(function(g) {
                        return g.replace(_, function(v, A) {
                            return A.toUpperCase()
                        })
                    });
                o("5db7"), o("73d9");
                var G = ["Start", "Add", "Remove", "Update", "End"],
                    $ = ["Choose", "Unchoose", "Sort", "Filter", "Clone"],
                    W = ["Move"],
                    J = [W, G, $].flatMap(function(g) {
                        return g
                    }).map(function(g) {
                        return "on".concat(g)
                    }),
                    Ce = {
                        manage: W,
                        manageAndEmit: G,
                        emit: $
                    };

                function Je(g) {
                    return J.indexOf(g) !== -1
                }
                o("caad"), o("2ca0");
                var Pe = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];

                function He(g) {
                    return Pe.includes(g)
                }

                function at(g) {
                    return ["transition-group", "TransitionGroup"].includes(g)
                }

                function Ye(g) {
                    return ["id", "class", "role", "style"].includes(g) || g.startsWith("data-") || g.startsWith("aria-") || g.startsWith("on")
                }

                function tt(g) {
                    return g.reduce(function(v, A) {
                        var k = S(A, 2),
                            z = k[0],
                            ee = k[1];
                        return v[z] = ee, v
                    }, {})
                }

                function q(g) {
                    var v = g.$attrs,
                        A = g.componentData,
                        k = A === void 0 ? {} : A,
                        z = tt(Object.entries(v).filter(function(ee) {
                            var Y = S(ee, 2),
                                ue = Y[0];
                            return Y[1], Ye(ue)
                        }));
                    return d(d({}, z), k)
                }

                function ce(g) {
                    var v = g.$attrs,
                        A = g.callBackBuilder,
                        k = tt(Ne(v));
                    Object.entries(A).forEach(function(ee) {
                        var Y = S(ee, 2),
                            ue = Y[0],
                            we = Y[1];
                        Ce[ue].forEach(function(me) {
                            k["on".concat(me)] = we(me)
                        })
                    });
                    var z = "[data-draggable]".concat(k.draggable || "");
                    return d(d({}, k), {}, {
                        draggable: z
                    })
                }

                function Ne(g) {
                    return Object.entries(g).filter(function(v) {
                        var A = S(v, 2),
                            k = A[0];
                        return A[1], !Ye(k)
                    }).map(function(v) {
                        var A = S(v, 2),
                            k = A[0],
                            z = A[1];
                        return [V(k), z]
                    }).filter(function(v) {
                        var A = S(v, 2),
                            k = A[0];
                        return A[1], !Je(k)
                    })
                }
                o("c740");

                function De(g, v) {
                    if (!(g instanceof v)) throw new TypeError("Cannot call a class as a function")
                }

                function ft(g, v) {
                    for (var A = 0; A < v.length; A++) {
                        var k = v[A];
                        k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(g, k.key, k)
                    }
                }

                function mt(g, v, A) {
                    return v && ft(g.prototype, v), A && ft(g, A), g
                }
                var dt = function(v) {
                        var A = v.el;
                        return A
                    },
                    M = function(v, A) {
                        return v.__draggable_context = A
                    },
                    P = function(v) {
                        return v.__draggable_context
                    },
                    H = function() {
                        function g(v) {
                            var A = v.nodes,
                                k = A.header,
                                z = A.default,
                                ee = A.footer,
                                Y = v.root,
                                ue = v.realList;
                            De(this, g), this.defaultNodes = z, this.children = [].concat(O(k), O(z), O(ee)), this.externalComponent = Y.externalComponent, this.rootTransition = Y.transition, this.tag = Y.tag, this.realList = ue
                        }
                        return mt(g, [{
                            key: "render",
                            value: function(A, k) {
                                var z = this.tag,
                                    ee = this.children,
                                    Y = this._isRootComponent,
                                    ue = Y ? {
                                        default: function() {
                                            return ee
                                        }
                                    } : ee;
                                return A(z, k, ue)
                            }
                        }, {
                            key: "updated",
                            value: function() {
                                var A = this.defaultNodes,
                                    k = this.realList;
                                A.forEach(function(z, ee) {
                                    M(dt(z), {
                                        element: k[ee],
                                        index: ee
                                    })
                                })
                            }
                        }, {
                            key: "getUnderlyingVm",
                            value: function(A) {
                                return P(A)
                            }
                        }, {
                            key: "getVmIndexFromDomIndex",
                            value: function(A, k) {
                                var z = this.defaultNodes,
                                    ee = z.length,
                                    Y = k.children,
                                    ue = Y.item(A);
                                if (ue === null) return ee;
                                var we = P(ue);
                                if (we) return we.index;
                                if (ee === 0) return 0;
                                var me = dt(z[0]),
                                    re = O(Y).findIndex(function(de) {
                                        return de === me
                                    });
                                return A < re ? 0 : ee
                            }
                        }, {
                            key: "_isRootComponent",
                            get: function() {
                                return this.externalComponent || this.rootTransition
                            }
                        }]), g
                    }(),
                    Z = o("8bbf");

                function K(g, v) {
                    var A = g[v];
                    return A ? A() : []
                }

                function Q(g) {
                    var v = g.$slots,
                        A = g.realList,
                        k = g.getKey,
                        z = A || [],
                        ee = ["header", "footer"].map(function(de) {
                            return K(v, de)
                        }),
                        Y = S(ee, 2),
                        ue = Y[0],
                        we = Y[1],
                        me = v.item;
                    if (!me) throw new Error("draggable element must have an item slot");
                    var re = z.flatMap(function(de, Ee) {
                        return me({
                            element: de,
                            index: Ee
                        }).map(function(Me) {
                            return Me.key = k(de), Me.props = d(d({}, Me.props || {}), {}, {
                                "data-draggable": !0
                            }), Me
                        })
                    });
                    if (re.length !== z.length) throw new Error("Item slot must have only one child");
                    return {
                        header: ue,
                        footer: we,
                        default: re
                    }
                }

                function ne(g) {
                    var v = at(g),
                        A = !He(g) && !v;
                    return {
                        transition: v,
                        externalComponent: A,
                        tag: A ? Object(Z.resolveComponent)(g) : v ? Z.TransitionGroup : g
                    }
                }

                function te(g) {
                    var v = g.$slots,
                        A = g.tag,
                        k = g.realList,
                        z = g.getKey,
                        ee = Q({
                            $slots: v,
                            realList: k,
                            getKey: z
                        }),
                        Y = ne(A);
                    return new H({
                        nodes: ee,
                        root: Y,
                        realList: k
                    })
                }

                function ie(g, v) {
                    var A = this;
                    Object(Z.nextTick)(function() {
                        return A.$emit(g.toLowerCase(), v)
                    })
                }

                function X(g) {
                    var v = this;
                    return function(A, k) {
                        if (v.realList !== null) return v["onDrag".concat(g)](A, k)
                    }
                }

                function le(g) {
                    var v = this,
                        A = X.call(this, g);
                    return function(k, z) {
                        A.call(v, k, z), ie.call(v, g, k)
                    }
                }
                var ve = null,
                    fe = {
                        list: {
                            type: Array,
                            required: !1,
                            default: null
                        },
                        modelValue: {
                            type: Array,
                            required: !1,
                            default: null
                        },
                        itemKey: {
                            type: [String, Function],
                            required: !0
                        },
                        clone: {
                            type: Function,
                            default: function(v) {
                                return v
                            }
                        },
                        tag: {
                            type: String,
                            default: "div"
                        },
                        move: {
                            type: Function,
                            default: null
                        },
                        componentData: {
                            type: Object,
                            required: !1,
                            default: null
                        }
                    },
                    Te = ["update:modelValue", "change"].concat(O([].concat(O(Ce.manageAndEmit), O(Ce.emit)).map(function(g) {
                        return g.toLowerCase()
                    }))),
                    Ae = Object(Z.defineComponent)({
                        name: "draggable",
                        inheritAttrs: !1,
                        props: fe,
                        emits: Te,
                        data: function() {
                            return {
                                error: !1
                            }
                        },
                        render: function() {
                            try {
                                this.error = !1;
                                var v = this.$slots,
                                    A = this.$attrs,
                                    k = this.tag,
                                    z = this.componentData,
                                    ee = this.realList,
                                    Y = this.getKey,
                                    ue = te({
                                        $slots: v,
                                        tag: k,
                                        realList: ee,
                                        getKey: Y
                                    });
                                this.componentStructure = ue;
                                var we = q({
                                    $attrs: A,
                                    componentData: z
                                });
                                return ue.render(Z.h, we)
                            } catch (me) {
                                return this.error = !0, Object(Z.h)("pre", {
                                    style: {
                                        color: "red"
                                    }
                                }, me.stack)
                            }
                        },
                        created: function() {
                            this.list !== null && this.modelValue !== null && j.a.error("modelValue and list props are mutually exclusive! Please set one or another.")
                        },
                        mounted: function() {
                            var v = this;
                            if (!this.error) {
                                var A = this.$attrs,
                                    k = this.$el,
                                    z = this.componentStructure;
                                z.updated();
                                var ee = ce({
                                        $attrs: A,
                                        callBackBuilder: {
                                            manageAndEmit: function(we) {
                                                return le.call(v, we)
                                            },
                                            emit: function(we) {
                                                return ie.bind(v, we)
                                            },
                                            manage: function(we) {
                                                return X.call(v, we)
                                            }
                                        }
                                    }),
                                    Y = k.nodeType === 1 ? k : k.parentElement;
                                this._sortable = new L.a(Y, ee), this.targetDomElement = Y, Y.__draggable_component__ = this
                            }
                        },
                        updated: function() {
                            this.componentStructure.updated()
                        },
                        beforeUnmount: function() {
                            this._sortable !== void 0 && this._sortable.destroy()
                        },
                        computed: {
                            realList: function() {
                                var v = this.list;
                                return v || this.modelValue
                            },
                            getKey: function() {
                                var v = this.itemKey;
                                return typeof v == "function" ? v : function(A) {
                                    return A[v]
                                }
                            }
                        },
                        watch: {
                            $attrs: {
                                handler: function(v) {
                                    var A = this._sortable;
                                    A && Ne(v).forEach(function(k) {
                                        var z = S(k, 2),
                                            ee = z[0],
                                            Y = z[1];
                                        A.option(ee, Y)
                                    })
                                },
                                deep: !0
                            }
                        },
                        methods: {
                            getUnderlyingVm: function(v) {
                                return this.componentStructure.getUnderlyingVm(v) || null
                            },
                            getUnderlyingPotencialDraggableComponent: function(v) {
                                return v.__draggable_component__
                            },
                            emitChanges: function(v) {
                                var A = this;
                                Object(Z.nextTick)(function() {
                                    return A.$emit("change", v)
                                })
                            },
                            alterList: function(v) {
                                if (this.list) {
                                    v(this.list);
                                    return
                                }
                                var A = O(this.modelValue);
                                v(A), this.$emit("update:modelValue", A)
                            },
                            spliceList: function() {
                                var v = arguments,
                                    A = function(z) {
                                        return z.splice.apply(z, O(v))
                                    };
                                this.alterList(A)
                            },
                            updatePosition: function(v, A) {
                                var k = function(ee) {
                                    return ee.splice(A, 0, ee.splice(v, 1)[0])
                                };
                                this.alterList(k)
                            },
                            getRelatedContextFromMoveEvent: function(v) {
                                var A = v.to,
                                    k = v.related,
                                    z = this.getUnderlyingPotencialDraggableComponent(A);
                                if (!z) return {
                                    component: z
                                };
                                var ee = z.realList,
                                    Y = {
                                        list: ee,
                                        component: z
                                    };
                                if (A !== k && ee) {
                                    var ue = z.getUnderlyingVm(k) || {};
                                    return d(d({}, ue), Y)
                                }
                                return Y
                            },
                            getVmIndexFromDomIndex: function(v) {
                                return this.componentStructure.getVmIndexFromDomIndex(v, this.targetDomElement)
                            },
                            onDragStart: function(v) {
                                this.context = this.getUnderlyingVm(v.item), v.item._underlying_vm_ = this.clone(this.context.element), ve = v.item
                            },
                            onDragAdd: function(v) {
                                var A = v.item._underlying_vm_;
                                if (A !== void 0) {
                                    C(v.item);
                                    var k = this.getVmIndexFromDomIndex(v.newIndex);
                                    this.spliceList(k, 0, A);
                                    var z = {
                                        element: A,
                                        newIndex: k
                                    };
                                    this.emitChanges({
                                        added: z
                                    })
                                }
                            },
                            onDragRemove: function(v) {
                                if (I(this.$el, v.item, v.oldIndex), v.pullMode === "clone") {
                                    C(v.clone);
                                    return
                                }
                                var A = this.context,
                                    k = A.index,
                                    z = A.element;
                                this.spliceList(k, 1);
                                var ee = {
                                    element: z,
                                    oldIndex: k
                                };
                                this.emitChanges({
                                    removed: ee
                                })
                            },
                            onDragUpdate: function(v) {
                                C(v.item), I(v.from, v.item, v.oldIndex);
                                var A = this.context.index,
                                    k = this.getVmIndexFromDomIndex(v.newIndex);
                                this.updatePosition(A, k);
                                var z = {
                                    element: this.context.element,
                                    oldIndex: A,
                                    newIndex: k
                                };
                                this.emitChanges({
                                    moved: z
                                })
                            },
                            computeFutureIndex: function(v, A) {
                                if (!v.element) return 0;
                                var k = O(A.to.children).filter(function(ue) {
                                        return ue.style.display !== "none"
                                    }),
                                    z = k.indexOf(A.related),
                                    ee = v.component.getVmIndexFromDomIndex(z),
                                    Y = k.indexOf(ve) !== -1;
                                return Y || !A.willInsertAfter ? ee : ee + 1
                            },
                            onDragMove: function(v, A) {
                                var k = this.move,
                                    z = this.realList;
                                if (!k || !z) return !0;
                                var ee = this.getRelatedContextFromMoveEvent(v),
                                    Y = this.computeFutureIndex(ee, v),
                                    ue = d(d({}, this.context), {}, {
                                        futureIndex: Y
                                    }),
                                    we = d(d({}, v), {}, {
                                        relatedContext: ee,
                                        draggedContext: ue
                                    });
                                return k(we, A)
                            },
                            onDragEnd: function() {
                                ve = null
                            }
                        }
                    }),
                    ze = Ae;
                s.default = ze
            },
            fb6a: function(r, s, o) {
                var a = o("23e7"),
                    l = o("861d"),
                    u = o("e8b5"),
                    c = o("23cb"),
                    f = o("50c4"),
                    d = o("fc6a"),
                    h = o("8418"),
                    p = o("b622"),
                    m = o("1dde"),
                    y = o("ae40"),
                    D = m("slice"),
                    S = y("slice", {
                        ACCESSORS: !0,
                        0: 0,
                        1: 2
                    }),
                    b = p("species"),
                    w = [].slice,
                    x = Math.max;
                a({
                    target: "Array",
                    proto: !0,
                    forced: !D || !S
                }, {
                    slice: function(F, L) {
                        var C = d(this),
                            I = f(C.length),
                            j = c(F, I),
                            R = c(L === void 0 ? I : L, I),
                            _, V, G;
                        if (u(C) && (_ = C.constructor, typeof _ == "function" && (_ === Array || u(_.prototype)) ? _ = void 0 : l(_) && (_ = _[b], _ === null && (_ = void 0)), _ === Array || _ === void 0)) return w.call(C, j, R);
                        for (V = new(_ === void 0 ? Array : _)(x(R - j, 0)), G = 0; j < R; j++, G++) j in C && h(V, G, C[j]);
                        return V.length = G, V
                    }
                })
            },
            fc6a: function(r, s, o) {
                var a = o("44ad"),
                    l = o("1d80");
                r.exports = function(u) {
                    return a(l(u))
                }
            },
            fdbc: function(r, s) {
                r.exports = {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0
                }
            },
            fdbf: function(r, s, o) {
                var a = o("4930");
                r.exports = a && !Symbol.sham && typeof Symbol.iterator == "symbol"
            }
        }).default
    })
})(cy);
var LC = cy.exports;
const kC = J1(LC),
    $C = {
        install: e => {
            e.component("draggable", kC)
        }
    };
var jC = Object.defineProperty,
    VC = (e, n, t) => n in e ? jC(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[n] = t,
    Si = (e, n, t) => (VC(e, typeof n != "symbol" ? n + "" : n, t), t);
/**
 * vue-cal v4.9.0
 * (c) 2024 Antoni Andre <antoniandre.web@gmail.com>
 * @license MIT
 */
let Es, Zh, Xh, Vn, Ss = {},
    Hr = {};
class HC {
    constructor(n) {
        Si(this, "_vuecal", null), Si(this, "selectCell", (t = !1, i, r) => {
            this._vuecal.$emit("cell-click", r ? {
                date: i,
                split: r
            } : i), this._vuecal.clickToNavigate || t ? this._vuecal.switchToNarrowerView() : this._vuecal.dblclickToNavigate && "ontouchstart" in window && (this._vuecal.domEvents.dblTapACell.taps++, setTimeout(() => this._vuecal.domEvents.dblTapACell.taps = 0, this._vuecal.domEvents.dblTapACell.timeout), this._vuecal.domEvents.dblTapACell.taps >= 2 && (this._vuecal.domEvents.dblTapACell.taps = 0, this._vuecal.switchToNarrowerView(), this._vuecal.$emit("cell-dblclick", r ? {
                date: i,
                split: r
            } : i)))
        }), Si(this, "keyPressEnterCell", (t, i) => {
            this._vuecal.$emit("cell-keypress-enter", i ? {
                date: t,
                split: i
            } : t), this._vuecal.switchToNarrowerView()
        }), Si(this, "getPosition", t => {
            const {
                left: i,
                top: r
            } = this._vuecal.cellsEl.getBoundingClientRect(), {
                clientX: s,
                clientY: o
            } = "ontouchstart" in window && t.touches ? t.touches[0] : t;
            return {
                x: s - i,
                y: o - r
            }
        }), Si(this, "minutesAtCursor", t => {
            let i = 0,
                r = {
                    x: 0,
                    y: 0
                };
            const {
                timeStep: s,
                timeCellHeight: o,
                timeFrom: a
            } = this._vuecal.$props;
            return typeof t == "number" ? i = t : typeof t == "object" && (r = this.getPosition(t), i = Math.round(r.y * s / parseInt(o) + a)), {
                minutes: Math.max(Math.min(i, 1440), 0),
                cursorCoords: r
            }
        }), this._vuecal = n
    }
}
const cu = 1440;
let Tt, Ct, fu;
class BC {
    constructor(n, t) {
        Si(this, "_vuecal", null), Si(this, "eventDefaults", {
            _eid: null,
            start: "",
            startTimeMinutes: 0,
            end: "",
            endTimeMinutes: 0,
            title: "",
            content: "",
            background: !1,
            allDay: !1,
            segments: null,
            repeat: null,
            daysCount: 1,
            deletable: !0,
            deleting: !1,
            titleEditable: !0,
            resizable: !0,
            resizing: !1,
            draggable: !0,
            dragging: !1,
            draggingStatic: !1,
            focused: !1,
            class: ""
        }), this._vuecal = n, Tt = t
    }
    createAnEvent(n, t, i) {
        if (typeof n == "string" && (n = Tt.stringToDate(n)), !(n instanceof Date)) return !1;
        const r = Tt.dateToMinutes(n),
            s = r + (t = 1 * t || 120),
            o = Tt.addMinutes(new Date(n), t);
        i.end && (typeof i.end == "string" && (i.end = Tt.stringToDate(i.end)), i.endTimeMinutes = Tt.dateToMinutes(i.end));
        const a = {
            ...this.eventDefaults,
            _eid: `${this._vuecal._.uid}_${this._vuecal.eventIdIncrement++}`,
            start: n,
            startTimeMinutes: r,
            end: o,
            endTimeMinutes: s,
            segments: null,
            ...i
        };
        return typeof this._vuecal.onEventCreate != "function" || this._vuecal.onEventCreate(a, () => this.deleteAnEvent(a)) ? (a.startDateF !== a.endDateF && (a.daysCount = Tt.countDays(a.start, a.end)), this._vuecal.mutableEvents.push(a), this._vuecal.addEventsToView([a]), this._vuecal.emitWithEvent("event-create", a), this._vuecal.$emit("event-change", {
            event: this._vuecal.cleanupEvent(a),
            originalEvent: null
        }), a) : void 0
    }
    addEventSegment(n) {
        n.segments || (n.segments = {}, n.segments[Tt.formatDateLite(n.start)] = {
            start: n.start,
            startTimeMinutes: n.startTimeMinutes,
            endTimeMinutes: cu,
            isFirstDay: !0,
            isLastDay: !1
        });
        const t = n.segments[Tt.formatDateLite(n.end)];
        t && (t.isLastDay = !1, t.endTimeMinutes = cu);
        const i = Tt.addDays(n.end, 1),
            r = Tt.formatDateLite(i);
        return i.setHours(0, 0, 0, 0), n.segments[r] = {
            start: i,
            startTimeMinutes: 0,
            endTimeMinutes: n.endTimeMinutes,
            isFirstDay: !1,
            isLastDay: !0
        }, n.end = Tt.addMinutes(i, n.endTimeMinutes), n.daysCount = Object.keys(n.segments).length, r
    }
    removeEventSegment(n) {
        let t = Object.keys(n.segments).length;
        if (t <= 1) return Tt.formatDateLite(n.end);
        delete n.segments[Tt.formatDateLite(n.end)], t--;
        const i = Tt.subtractDays(n.end, 1),
            r = Tt.formatDateLite(i),
            s = n.segments[r];
        return t ? s && (s.isLastDay = !0, s.endTimeMinutes = n.endTimeMinutes) : n.segments = null, n.daysCount = t || 1, n.end = i, r
    }
    createEventSegments(n, t, i) {
        const r = t.getTime(),
            s = i.getTime();
        let o, a, l, u = n.start.getTime(),
            c = n.end.getTime(),
            f = !1;
        for (n.end.getHours() || n.end.getMinutes() || (c -= 1e3), n.segments = {}, n.repeat ? (o = r, a = Math.min(s, n.repeat.until ? Tt.stringToDate(n.repeat.until).getTime() : s)) : (o = Math.max(r, u), a = Math.min(s, c)); o <= a;) {
            let d = !1;
            const h = Tt.addDays(new Date(o), 1).setHours(0, 0, 0, 0);
            let p, m, y, D;
            if (n.repeat) {
                const S = new Date(o),
                    b = Tt.formatDateLite(S);
                (f || n.occurrences && n.occurrences[b]) && (f || (u = n.occurrences[b].start, l = new Date(u).setHours(0, 0, 0, 0), c = n.occurrences[b].end), f = !0, d = !0), p = o === l, m = b === Tt.formatDateLite(new Date(c)), y = new Date(p ? u : o), D = Tt.formatDateLite(y), m && (f = !1)
            } else d = !0, p = o === u, m = a === c && h > a, y = p ? n.start : new Date(o), D = Tt.formatDateLite(p ? n.start : y);
            d && (n.segments[D] = {
                start: y,
                startTimeMinutes: p ? n.startTimeMinutes : 0,
                endTimeMinutes: m ? n.endTimeMinutes : cu,
                isFirstDay: p,
                isLastDay: m
            }), o = h
        }
        return n
    }
    deleteAnEvent(n) {
        this._vuecal.emitWithEvent("event-delete", n), this._vuecal.mutableEvents = this._vuecal.mutableEvents.filter(t => t._eid !== n._eid), this._vuecal.view.events = this._vuecal.view.events.filter(t => t._eid !== n._eid)
    }
    checkCellOverlappingEvents(n, t) {
        fu = n.slice(0), Ct = {}, n.forEach(r => {
            fu.shift(), Ct[r._eid] || (Ct[r._eid] = {
                overlaps: [],
                start: r.start,
                position: 0
            }), Ct[r._eid].position = 0, fu.forEach(s => {
                Ct[s._eid] || (Ct[s._eid] = {
                    overlaps: [],
                    start: s.start,
                    position: 0
                });
                const o = this.eventInRange(s, r.start, r.end),
                    a = t.overlapsPerTimeStep ? Tt.datesInSameTimeStep(r.start, s.start, t.timeStep) : 1;
                if (r.background || r.allDay || s.background || s.allDay || !o || !a) {
                    let l, u;
                    (l = (Ct[r._eid] || {
                        overlaps: []
                    }).overlaps.indexOf(s._eid)) > -1 && Ct[r._eid].overlaps.splice(l, 1), (u = (Ct[s._eid] || {
                        overlaps: []
                    }).overlaps.indexOf(r._eid)) > -1 && Ct[s._eid].overlaps.splice(u, 1), Ct[s._eid].position--
                } else Ct[r._eid].overlaps.push(s._eid), Ct[r._eid].overlaps = [...new Set(Ct[r._eid].overlaps)], Ct[s._eid].overlaps.push(r._eid), Ct[s._eid].overlaps = [...new Set(Ct[s._eid].overlaps)], Ct[s._eid].position++
            })
        });
        let i = 0;
        for (const r in Ct) {
            const s = Ct[r],
                o = s.overlaps.map(a => ({
                    id: a,
                    start: Ct[a].start
                }));
            o.push({
                id: r,
                start: s.start
            }), o.sort((a, l) => a.start < l.start ? -1 : a.start > l.start ? 1 : a.id > l.id ? -1 : 1), s.position = o.findIndex(a => a.id === r), i = Math.max(this.getOverlapsStreak(s, Ct), i)
        }
        return [Ct, i]
    }
    getOverlapsStreak(n, t = {}) {
        let i = n.overlaps.length + 1,
            r = [];
        return n.overlaps.forEach(s => {
            r.includes(s) || n.overlaps.filter(o => o !== s).forEach(o => {
                t[o].overlaps.includes(s) || r.push(o)
            })
        }), r = [...new Set(r)], i -= r.length, i
    }
    eventInRange(n, t, i) {
        if (n.allDay || !this._vuecal.time) {
            const o = new Date(n.start).setHours(0, 0, 0, 0);
            return new Date(n.end).setHours(23, 59, 0, 0) >= new Date(t).setHours(0, 0, 0, 0) && o <= new Date(i).setHours(0, 0, 0, 0)
        }
        const r = n.start.getTime(),
            s = n.end.getTime();
        return r < i.getTime() && s > t.getTime()
    }
}
const UC = {
        class: "vuecal__flex vuecal__weekdays-headings"
    },
    WC = ["onClick"],
    YC = {
        class: "vuecal__flex weekday-label",
        grow: ""
    },
    KC = {
        class: "full"
    },
    zC = {
        class: "small"
    },
    GC = {
        class: "xsmall"
    },
    ZC = {
        key: 0
    },
    XC = {
        key: 0,
        class: "vuecal__flex vuecal__split-days-headers",
        grow: ""
    },
    as = (e, n) => {
        const t = e.__vccOpts || e;
        for (const [i, r] of n) t[i] = r;
        return t
    },
    wy = as({
        inject: ["vuecal", "utils", "view"],
        props: {
            transitionDirection: {
                type: String,
                default: "right"
            },
            weekDays: {
                type: Array,
                default: () => []
            },
            switchToNarrowerView: {
                type: Function,
                default: () => {}
            }
        },
        methods: {
            selectCell(e, n) {
                e.getTime() !== this.view.selectedDate.getTime() && (this.view.selectedDate = e), this.utils.cell.selectCell(!1, e, n)
            },
            cleanupHeading: e => ({
                label: e.full,
                date: e.date,
                ...e.today ? {
                    today: e.today
                } : {}
            })
        },
        computed: {
            headings() {
                if (!["month", "week"].includes(this.view.id)) return [];
                let e = !1;
                return this.weekDays.map((n, t) => {
                    const i = this.utils.date.addDays(this.view.startDate, this.vuecal.startWeekOnSunday ? t - 1 : t);
                    return {
                        hide: n.hide,
                        full: n.label,
                        small: n.short || n.label.substr(0, 3),
                        xsmall: n.short || n.label.substr(0, 1),
                        ...this.view.id === "week" ? {
                            dayOfMonth: i.getDate(),
                            date: i,
                            today: !e && this.utils.date.isToday(i) && !e++
                        } : {}
                    }
                })
            },
            cellWidth() {
                return 100 / (7 - this.weekDays.reduce((e, n) => e + n.hide, 0))
            },
            weekdayCellStyles() {
                return {
                    ...this.vuecal.hideWeekdays.length ? {
                        width: `${this.cellWidth}%`
                    } : {}
                }
            },
            cellHeadingsClickable() {
                return this.view.id === "week" && (this.vuecal.clickToNavigate || this.vuecal.dblclickToNavigate)
            }
        }
    }, [
        ["render", function(e, n, t, i, r, s) {
            return ae(), ge("div", UC, [(ae(!0), ge(et, null, fn(s.headings, (o, a) => (ae(), ge(et, {
                key: a
            }, [o.hide ? je("", !0) : (ae(), ge("div", {
                key: 0,
                class: Rt(["vuecal__flex vuecal__heading", {
                    today: o.today,
                    clickable: s.cellHeadingsClickable
                }]),
                style: Kt(s.weekdayCellStyles),
                onClick: l => s.view.id === "week" && s.selectCell(o.date, l),
                onDblclick: n[0] || (n[0] = l => s.view.id === "week" && s.vuecal.dblclickToNavigate && t.switchToNarrowerView())
            }, [ot(tr, {
                name: `slide-fade--${t.transitionDirection}`,
                appear: s.vuecal.transitions
            }, {
                default: pt(() => [(ae(), ge("div", {
                    class: "vuecal__flex",
                    column: "",
                    key: !!s.vuecal.transitions && `${a}-${o.dayOfMonth}`
                }, [yt("div", YC, [Qe(e.$slots, "weekday-heading", {
                    heading: s.cleanupHeading(o),
                    view: s.view
                }, () => [yt("span", KC, vt(o.full), 1), yt("span", zC, vt(o.small), 1), yt("span", GC, vt(o.xsmall), 1), o.dayOfMonth ? (ae(), ge("span", ZC, " " + vt(o.dayOfMonth), 1)) : je("", !0)])]), s.vuecal.hasSplits && s.vuecal.stickySplitLabels ? (ae(), ge("div", XC, [(ae(!0), ge(et, null, fn(s.vuecal.daySplits, (l, u) => (ae(), ge("div", {
                    class: Rt(["day-split-header", l.class || !1]),
                    key: u
                }, [Qe(e.$slots, "split-label", {
                    split: l,
                    view: s.view
                }, () => [Xt(vt(l.label), 1)])], 2))), 128))])) : je("", !0)]))]),
                _: 2
            }, 1032, ["name", "appear"])], 46, WC))], 64))), 128))])
        }]
    ]),
    JC = {
        class: "vuecal__header"
    },
    QC = {
        key: 0,
        class: "vuecal__flex vuecal__menu",
        role: "tablist",
        "aria-label": "Calendar views navigation"
    },
    qC = ["onDragenter", "onDragleave", "onClick", "aria-label"],
    eO = {
        key: 1,
        class: "vuecal__title-bar"
    },
    tO = ["aria-label"],
    nO = {
        class: "vuecal__flex vuecal__title",
        grow: ""
    },
    iO = ["aria-label"],
    rO = {
        key: 0,
        class: "vuecal__flex vuecal__split-days-headers"
    },
    sO = as({
        inject: ["vuecal", "previous", "next", "switchView", "updateSelectedDate", "modules", "view"],
        components: {
            WeekdaysHeadings: wy
        },
        props: {
            options: {
                type: Object,
                default: () => ({})
            },
            editEvents: {
                type: Object,
                required: !0
            },
            hasSplits: {
                type: [Boolean, Number],
                default: !1
            },
            daySplits: {
                type: Array,
                default: () => []
            },
            viewProps: {
                type: Object,
                default: () => ({})
            },
            weekDays: {
                type: Array,
                default: () => []
            },
            switchToNarrowerView: {
                type: Function,
                default: () => {}
            }
        },
        data: () => ({
            highlightedControl: null
        }),
        methods: {
            goToToday() {
                this.updateSelectedDate(new Date(new Date().setHours(0, 0, 0, 0)))
            },
            switchToBroaderView() {
                this.transitionDirection = "left", this.broaderView && this.switchView(this.broaderView)
            }
        },
        computed: {
            transitionDirection: {
                get() {
                    return this.vuecal.transitionDirection
                },
                set(e) {
                    this.vuecal.transitionDirection = e
                }
            },
            broaderView() {
                const {
                    enabledViews: e
                } = this.vuecal;
                return e[e.indexOf(this.view.id) - 1]
            },
            showDaySplits() {
                return this.view.id === "day" && this.hasSplits && this.options.stickySplitLabels && !this.options.minSplitWidth
            },
            dnd() {
                return this.modules.dnd
            }
        }
    }, [
        ["render", function(e, n, t, i, r, s) {
            const o = ui("weekdays-headings");
            return ae(), ge("div", JC, [t.options.hideViewSelector ? je("", !0) : (ae(), ge("div", QC, [(ae(!0), ge(et, null, fn(t.viewProps.views, (a, l) => (ae(), ge(et, {
                key: l
            }, [a.enabled ? (ae(), ge("button", {
                key: 0,
                class: Rt(["vuecal__view-btn", {
                    "vuecal__view-btn--active": s.view.id === l,
                    "vuecal__view-btn--highlighted": e.highlightedControl === l
                }]),
                type: "button",
                onDragenter: u => t.editEvents.drag && s.dnd && s.dnd.viewSelectorDragEnter(u, l, e.$data),
                onDragleave: u => t.editEvents.drag && s.dnd && s.dnd.viewSelectorDragLeave(u, l, e.$data),
                onClick: u => s.switchView(l, null, !0),
                "aria-label": `${a.label} view`
            }, vt(a.label), 43, qC)) : je("", !0)], 64))), 128))])), t.options.hideTitleBar ? je("", !0) : (ae(), ge("div", eO, [yt("button", {
                class: Rt(["vuecal__arrow vuecal__arrow--prev", {
                    "vuecal__arrow--highlighted": e.highlightedControl === "previous"
                }]),
                type: "button",
                onClick: n[0] || (n[0] = (...a) => s.previous && s.previous(...a)),
                onDragenter: n[1] || (n[1] = a => t.editEvents.drag && s.dnd && s.dnd.viewSelectorDragEnter(a, "previous", e.$data)),
                onDragleave: n[2] || (n[2] = a => t.editEvents.drag && s.dnd && s.dnd.viewSelectorDragLeave(a, "previous", e.$data)),
                "aria-label": `Previous ${s.view.id}`
            }, [Qe(e.$slots, "arrow-prev")], 42, tO), yt("div", nO, [ot(tr, {
                name: t.options.transitions ? `slide-fade--${s.transitionDirection}` : ""
            }, {
                default: pt(() => [(ae(), Rn(cs(s.broaderView ? "button" : "span"), {
                    type: !!s.broaderView && "button",
                    key: `${s.view.id}${s.view.startDate.toString()}`,
                    onClick: n[3] || (n[3] = a => !!s.broaderView && s.switchToBroaderView()),
                    "aria-label": !!s.broaderView && `Go to ${s.broaderView} view`
                }, {
                    default: pt(() => [Qe(e.$slots, "title")]),
                    _: 3
                }, 8, ["type", "aria-label"]))]),
                _: 3
            }, 8, ["name"])]), t.options.todayButton ? (ae(), ge("button", {
                key: 0,
                class: Rt(["vuecal__today-btn", {
                    "vuecal__today-btn--highlighted": e.highlightedControl === "today"
                }]),
                type: "button",
                onClick: n[4] || (n[4] = (...a) => s.goToToday && s.goToToday(...a)),
                onDragenter: n[5] || (n[5] = a => t.editEvents.drag && s.dnd && s.dnd.viewSelectorDragEnter(a, "today", e.$data)),
                onDragleave: n[6] || (n[6] = a => t.editEvents.drag && s.dnd && s.dnd.viewSelectorDragLeave(a, "today", e.$data)),
                "aria-label": "Today"
            }, [Qe(e.$slots, "today-button")], 34)) : je("", !0), yt("button", {
                class: Rt(["vuecal__arrow vuecal__arrow--next", {
                    "vuecal__arrow--highlighted": e.highlightedControl === "next"
                }]),
                type: "button",
                onClick: n[7] || (n[7] = (...a) => s.next && s.next(...a)),
                onDragenter: n[8] || (n[8] = a => t.editEvents.drag && s.dnd && s.dnd.viewSelectorDragEnter(a, "next", e.$data)),
                onDragleave: n[9] || (n[9] = a => t.editEvents.drag && s.dnd && s.dnd.viewSelectorDragLeave(a, "next", e.$data)),
                "aria-label": `Next ${s.view.id}`
            }, [Qe(e.$slots, "arrow-next")], 42, iO)])), t.viewProps.weekDaysInHeader ? (ae(), Rn(o, {
                key: 2,
                "week-days": t.weekDays,
                "transition-direction": s.transitionDirection,
                "switch-to-narrower-view": t.switchToNarrowerView
            }, Gs({
                _: 2
            }, [e.$slots["weekday-heading"] ? {
                name: "weekday-heading",
                fn: pt(({
                    heading: a,
                    view: l
                }) => [Qe(e.$slots, "weekday-heading", {
                    heading: a,
                    view: l
                })]),
                key: "0"
            } : void 0, e.$slots["split-label"] ? {
                name: "split-label",
                fn: pt(({
                    split: a
                }) => [Qe(e.$slots, "split-label", {
                    split: a,
                    view: s.view
                })]),
                key: "1"
            } : void 0]), 1032, ["week-days", "transition-direction", "switch-to-narrower-view"])) : je("", !0), ot(tr, {
                name: `slide-fade--${s.transitionDirection}`
            }, {
                default: pt(() => [s.showDaySplits ? (ae(), ge("div", rO, [(ae(!0), ge(et, null, fn(t.daySplits, (a, l) => (ae(), ge("div", {
                    class: Rt(["day-split-header", a.class || !1]),
                    key: l
                }, [Qe(e.$slots, "split-label", {
                    split: a,
                    view: s.view.id
                }, () => [Xt(vt(a.label), 1)])], 2))), 128))])) : je("", !0)]),
                _: 3
            }, 8, ["name"])])
        }]
    ]),
    oO = ["draggable"],
    aO = {
        inject: ["vuecal", "utils", "modules", "view", "domEvents", "editEvents"],
        props: {
            cellFormattedDate: {
                type: String,
                default: ""
            },
            event: {
                type: Object,
                default: () => ({})
            },
            cellEvents: {
                type: Array,
                default: () => []
            },
            overlaps: {
                type: Array,
                default: () => []
            },
            eventPosition: {
                type: Number,
                default: 0
            },
            overlapsStreak: {
                type: Number,
                default: 0
            },
            allDay: {
                type: Boolean,
                default: !1
            }
        },
        data: () => ({
            touch: {
                dragThreshold: 30,
                startX: 0,
                startY: 0,
                dragged: !1
            }
        }),
        methods: {
            onMouseDown(e, n = !1) {
                if ("ontouchstart" in window && !n) return !1;
                const {
                    clickHoldAnEvent: t,
                    focusAnEvent: i,
                    resizeAnEvent: r,
                    dragAnEvent: s
                } = this.domEvents;
                if (i._eid === this.event._eid && t._eid === this.event._eid) return !0;
                this.focusEvent(), t._eid = null, this.vuecal.editEvents.delete && this.event.deletable && (t.timeoutId = setTimeout(() => {
                    r._eid || s._eid || (t._eid = this.event._eid, this.event.deleting = !0)
                }, t.timeout))
            },
            onMouseUp(e) {
                this.domEvents.focusAnEvent._eid !== this.event._eid || this.touch.dragged || (this.domEvents.focusAnEvent.mousedUp = !0), this.touch.dragged = !1
            },
            onMouseEnter(e) {
                e.preventDefault(), this.vuecal.emitWithEvent("event-mouse-enter", this.event)
            },
            onMouseLeave(e) {
                e.preventDefault(), this.vuecal.emitWithEvent("event-mouse-leave", this.event)
            },
            onTouchMove(e) {
                if (typeof this.vuecal.onEventClick != "function") return;
                const {
                    clientX: n,
                    clientY: t
                } = e.touches[0], {
                    startX: i,
                    startY: r,
                    dragThreshold: s
                } = this.touch;
                (Math.abs(n - i) > s || Math.abs(t - r) > s) && (this.touch.dragged = !0)
            },
            onTouchStart(e) {
                this.touch.startX = e.touches[0].clientX, this.touch.startY = e.touches[0].clientY, this.onMouseDown(e, !0)
            },
            onEnterKeypress(e) {
                if (typeof this.vuecal.onEventClick == "function") return this.vuecal.onEventClick(this.event, e)
            },
            onDblClick(e) {
                if (typeof this.vuecal.onEventDblclick == "function") return this.vuecal.onEventDblclick(this.event, e)
            },
            onDragStart(e) {
                this.dnd && this.dnd.eventDragStart(e, this.event)
            },
            onDragEnd() {
                this.dnd && this.dnd.eventDragEnd(this.event)
            },
            onResizeHandleMouseDown() {
                this.focusEvent(), this.domEvents.dragAnEvent._eid = null, this.domEvents.resizeAnEvent = Object.assign(this.domEvents.resizeAnEvent, {
                    _eid: this.event._eid,
                    start: (this.segment || this.event).start,
                    split: this.event.split || null,
                    segment: !!this.segment && this.utils.date.formatDateLite(this.segment.start),
                    originalEnd: new Date((this.segment || this.event).end),
                    originalEndTimeMinutes: this.event.endTimeMinutes
                }), this.event.resizing = !0
            },
            deleteEvent(e = !1) {
                if ("ontouchstart" in window && !e) return !1;
                this.utils.event.deleteAnEvent(this.event)
            },
            touchDeleteEvent(e) {
                this.deleteEvent(!0)
            },
            cancelDeleteEvent() {
                this.event.deleting = !1
            },
            focusEvent() {
                const {
                    focusAnEvent: e
                } = this.domEvents, n = e._eid;
                if (n !== this.event._eid) {
                    if (n) {
                        const t = this.view.events.find(i => i._eid === n);
                        t && (t.focused = !1)
                    }
                    this.vuecal.cancelDelete(), this.vuecal.emitWithEvent("event-focus", this.event), e._eid = this.event._eid, this.event.focused = !0
                }
            }
        },
        computed: {
            eventDimensions() {
                const {
                    startTimeMinutes: e,
                    endTimeMinutes: n
                } = this.segment || this.event;
                let t = e - this.vuecal.timeFrom;
                const i = Math.max(Math.round(t * this.vuecal.timeCellHeight / this.vuecal.timeStep), 0);
                t = Math.min(n, this.vuecal.timeTo) - this.vuecal.timeFrom;
                const r = Math.round(t * this.vuecal.timeCellHeight / this.vuecal.timeStep);
                return {
                    top: i,
                    height: Math.max(r - i, 5)
                }
            },
            eventStyles() {
                if (this.event.allDay || !this.vuecal.time || !this.event.endTimeMinutes || this.view.id === "month" || this.allDay) return {};
                let e = 100 / Math.min(this.overlaps.length + 1, this.overlapsStreak),
                    n = 100 / (this.overlaps.length + 1) * this.eventPosition;
                this.vuecal.minEventWidth && e < this.vuecal.minEventWidth && (e = this.vuecal.minEventWidth, n = (100 - this.vuecal.minEventWidth) / this.overlaps.length * this.eventPosition);
                const {
                    top: t,
                    height: i
                } = this.eventDimensions;
                return {
                    top: `${t}px`,
                    height: `${i}px`,
                    width: `${e}%`,
                    left: this.event.left && `${this.event.left}px` || `${n}%`
                }
            },
            eventClasses() {
                const {
                    isFirstDay: e,
                    isLastDay: n
                } = this.segment || {};
                return {
                    [this.event.class]: !!this.event.class,
                    "vuecal__event--focus": this.event.focused,
                    "vuecal__event--resizing": this.event.resizing,
                    "vuecal__event--background": this.event.background,
                    "vuecal__event--deletable": this.event.deleting,
                    "vuecal__event--all-day": this.event.allDay,
                    "vuecal__event--dragging": !this.event.draggingStatic && this.event.dragging,
                    "vuecal__event--static": this.event.dragging && this.event.draggingStatic,
                    "vuecal__event--multiple-days": !!this.segment,
                    "event-start": this.segment && e && !n,
                    "event-middle": this.segment && !e && !n,
                    "event-end": this.segment && n && !e
                }
            },
            segment() {
                return this.event.segments && this.event.segments[this.cellFormattedDate] || null
            },
            draggable() {
                const {
                    draggable: e,
                    background: n,
                    daysCount: t
                } = this.event;
                return this.vuecal.editEvents.drag && e && !n && t === 1
            },
            resizable() {
                const {
                    editEvents: e,
                    time: n
                } = this.vuecal;
                return e.resize && this.event.resizable && n && !this.allDay && (!this.segment || this.segment && this.segment.isLastDay) && this.view.id !== "month"
            },
            dnd() {
                return this.modules.dnd
            }
        }
    },
    lO = ["data-split", "aria-label", "onTouchstart", "onMousedown", "onDragover", "onDrop"],
    uO = {
        key: 0,
        class: "cell-time-labels"
    },
    cO = ["innerHTML"],
    fO = {
        key: 2,
        class: "vuecal__cell-events"
    },
    dO = ["title"],
    Dy = as({
        inject: ["vuecal", "utils", "modules", "view", "domEvents"],
        components: {
            Event: as(aO, [
                ["render", function(e, n, t, i, r, s) {
                    return ae(), ge("div", {
                        class: Rt(["vuecal__event", s.eventClasses]),
                        style: Kt(s.eventStyles),
                        tabindex: "0",
                        onFocus: n[4] || (n[4] = (...o) => s.focusEvent && s.focusEvent(...o)),
                        onKeypress: n[5] || (n[5] = Na(Vi((...o) => s.onEnterKeypress && s.onEnterKeypress(...o), ["stop"]), ["enter"])),
                        onMouseenter: n[6] || (n[6] = (...o) => s.onMouseEnter && s.onMouseEnter(...o)),
                        onMouseleave: n[7] || (n[7] = (...o) => s.onMouseLeave && s.onMouseLeave(...o)),
                        onTouchstart: n[8] || (n[8] = Vi((...o) => s.onTouchStart && s.onTouchStart(...o), ["stop"])),
                        onMousedown: n[9] || (n[9] = o => s.onMouseDown(o)),
                        onMouseup: n[10] || (n[10] = (...o) => s.onMouseUp && s.onMouseUp(...o)),
                        onTouchend: n[11] || (n[11] = (...o) => s.onMouseUp && s.onMouseUp(...o)),
                        onTouchmove: n[12] || (n[12] = (...o) => s.onTouchMove && s.onTouchMove(...o)),
                        onDblclick: n[13] || (n[13] = (...o) => s.onDblClick && s.onDblClick(...o)),
                        draggable: s.draggable,
                        onDragstart: n[14] || (n[14] = o => s.draggable && s.onDragStart(o)),
                        onDragend: n[15] || (n[15] = o => s.draggable && s.onDragEnd())
                    }, [s.vuecal.editEvents.delete && t.event.deletable ? (ae(), ge("div", {
                        key: 0,
                        class: "vuecal__event-delete",
                        onClick: n[0] || (n[0] = Vi((...o) => s.deleteEvent && s.deleteEvent(...o), ["stop"])),
                        onTouchstart: n[1] || (n[1] = Vi((...o) => s.touchDeleteEvent && s.touchDeleteEvent(...o), ["stop"]))
                    }, vt(s.vuecal.texts.deleteEvent), 33)) : je("", !0), Qe(e.$slots, "event", {
                        event: t.event,
                        view: s.view.id
                    }), s.resizable ? (ae(), ge("div", {
                        key: 1,
                        class: "vuecal__event-resize-handle",
                        contenteditable: "false",
                        onMousedown: n[2] || (n[2] = Vi((...o) => s.onResizeHandleMouseDown && s.onResizeHandleMouseDown(...o), ["stop", "prevent"])),
                        onTouchstart: n[3] || (n[3] = Vi((...o) => s.onResizeHandleMouseDown && s.onResizeHandleMouseDown(...o), ["stop", "prevent"]))
                    }, null, 32)) : je("", !0)], 46, oO)
                }]
            ])
        },
        props: {
            options: {
                type: Object,
                default: () => ({})
            },
            editEvents: {
                type: Object,
                required: !0
            },
            data: {
                type: Object,
                required: !0
            },
            cellSplits: {
                type: Array,
                default: () => []
            },
            minTimestamp: {
                type: [Number, null],
                default: null
            },
            maxTimestamp: {
                type: [Number, null],
                default: null
            },
            cellWidth: {
                type: [Number, Boolean],
                default: !1
            },
            allDay: {
                type: Boolean,
                default: !1
            }
        },
        data: () => ({
            cellOverlaps: {},
            cellOverlapsStreak: 1,
            timeAtCursor: null,
            highlighted: !1,
            highlightedSplit: null
        }),
        methods: {
            getSplitAtCursor({
                target: e
            }) {
                let n = e.classList.contains("vuecal__cell-split") ? e : this.vuecal.findAncestor(e, "vuecal__cell-split");
                return n && (n = n.attributes["data-split"].value, parseInt(n).toString() === n.toString() && (n = parseInt(n))), n || null
            },
            splitClasses(e) {
                return {
                    "vuecal__cell-split": !0,
                    "vuecal__cell-split--highlighted": this.highlightedSplit === e.id,
                    [e.class]: !!e.class
                }
            },
            checkCellOverlappingEvents() {
                this.options.time && this.eventsCount && !this.splitsCount && (this.eventsCount === 1 ? (this.cellOverlaps = [], this.cellOverlapsStreak = 1) : [this.cellOverlaps, this.cellOverlapsStreak] = this.utils.event.checkCellOverlappingEvents(this.events, this.options))
            },
            isDOMElementAnEvent(e) {
                return this.vuecal.isDOMElementAnEvent(e)
            },
            selectCell(e, n = !1) {
                const t = this.splitsCount ? this.getSplitAtCursor(e) : null;
                this.utils.cell.selectCell(n, this.timeAtCursor, t), this.timeAtCursor = null
            },
            onCellkeyPressEnter(e) {
                this.isSelected || this.onCellFocus(e);
                const n = this.splitsCount ? this.getSplitAtCursor(e) : null;
                this.utils.cell.keyPressEnterCell(this.timeAtCursor, n), this.timeAtCursor = null
            },
            onCellFocus(e) {
                if (!this.isSelected && !this.isDisabled) {
                    this.isSelected = this.data.startDate;
                    const n = this.splitsCount ? this.getSplitAtCursor(e) : null,
                        t = this.timeAtCursor || this.data.startDate;
                    this.vuecal.$emit("cell-focus", n ? {
                        date: t,
                        split: n
                    } : t)
                }
            },
            onCellMouseDown(e, n = null, t = !1) {
                if ("ontouchstart" in window && !t) return !1;
                this.isSelected || this.onCellFocus(e);
                const {
                    clickHoldACell: i,
                    focusAnEvent: r
                } = this.domEvents;
                this.domEvents.cancelClickEventCreation = !1, i.eventCreated = !1, this.timeAtCursor = new Date(this.data.startDate);
                const {
                    minutes: s,
                    cursorCoords: {
                        y: o
                    }
                } = this.vuecal.minutesAtCursor(e);
                this.timeAtCursor.setMinutes(s);
                const a = this.isDOMElementAnEvent(e.target);
                !a && r._eid && ((this.view.events.find(l => l._eid === r._eid) || {}).focused = !1), this.editEvents.create && !a && this.setUpEventCreation(e, o)
            },
            setUpEventCreation(e, n) {
                if (this.options.dragToCreateEvent && ["week", "day"].includes(this.view.id)) {
                    const {
                        dragCreateAnEvent: t
                    } = this.domEvents;
                    if (t.startCursorY = n, t.split = this.splitsCount ? this.getSplitAtCursor(e) : null, t.start = this.timeAtCursor, this.options.snapToTime) {
                        let i = 60 * this.timeAtCursor.getHours() + this.timeAtCursor.getMinutes();
                        const r = i + this.options.snapToTime / 2;
                        i = r - r % this.options.snapToTime, t.start.setHours(0, i, 0, 0)
                    }
                } else this.options.cellClickHold && ["month", "week", "day"].includes(this.view.id) && this.setUpCellHoldTimer(e)
            },
            setUpCellHoldTimer(e) {
                const {
                    clickHoldACell: n
                } = this.domEvents;
                n.cellId = `${this.vuecal._.uid}_${this.data.formattedDate}`, n.split = this.splitsCount ? this.getSplitAtCursor(e) : null, n.timeoutId = setTimeout(() => {
                    if (n.cellId && !this.domEvents.cancelClickEventCreation) {
                        const {
                            _eid: t
                        } = this.utils.event.createAnEvent(this.timeAtCursor, null, n.split ? {
                            split: n.split
                        } : {});
                        n.eventCreated = t
                    }
                }, n.timeout)
            },
            onCellTouchStart(e, n = null) {
                this.onCellMouseDown(e, n, !0)
            },
            onCellClick(e) {
                this.isDOMElementAnEvent(e.target) || this.selectCell(e)
            },
            onCellDblClick(e) {
                const n = new Date(this.data.startDate);
                n.setMinutes(this.vuecal.minutesAtCursor(e).minutes);
                const t = this.splitsCount ? this.getSplitAtCursor(e) : null;
                this.vuecal.$emit("cell-dblclick", t ? {
                    date: n,
                    split: t
                } : n), this.options.dblclickToNavigate && this.vuecal.switchToNarrowerView()
            },
            onCellContextMenu(e) {
                e.stopPropagation(), e.preventDefault();
                const n = new Date(this.data.startDate),
                    {
                        cursorCoords: t,
                        minutes: i
                    } = this.vuecal.minutesAtCursor(e);
                n.setMinutes(i);
                const r = this.splitsCount ? this.getSplitAtCursor(e) : null;
                this.vuecal.$emit("cell-contextmenu", {
                    date: n,
                    ...t,
                    ...r || {},
                    e
                })
            }
        },
        computed: {
            dnd() {
                return this.modules.dnd
            },
            nowInMinutes() {
                return this.utils.date.dateToMinutes(this.vuecal.now)
            },
            isBeforeMinDate() {
                return this.minTimestamp !== null && this.minTimestamp > this.data.endDate.getTime()
            },
            isAfterMaxDate() {
                return this.maxTimestamp && this.maxTimestamp < this.data.startDate.getTime()
            },
            isDisabled() {
                const {
                    disableDays: e
                } = this.options, {
                    isYearsOrYearView: n
                } = this.vuecal;
                return !(!e.length || !e.includes(this.data.formattedDate) || n) || this.isBeforeMinDate || this.isAfterMaxDate
            },
            isSelected: {
                get() {
                    let e = !1;
                    const {
                        selectedDate: n
                    } = this.view;
                    return e = this.view.id === "years" ? n.getFullYear() === this.data.startDate.getFullYear() : this.view.id === "year" ? n.getFullYear() === this.data.startDate.getFullYear() && n.getMonth() === this.data.startDate.getMonth() : n.getTime() === this.data.startDate.getTime(), e
                },
                set(e) {
                    this.view.selectedDate = e, this.vuecal.$emit("update:selected-date", this.view.selectedDate)
                }
            },
            isWeekOrDayView() {
                return ["week", "day"].includes(this.view.id)
            },
            transitionDirection() {
                return this.vuecal.transitionDirection
            },
            specialHours() {
                return this.data.specialHours.map(e => {
                    let {
                        from: n,
                        to: t
                    } = e;
                    return n = Math.max(n, this.options.timeFrom), t = Math.min(t, this.options.timeTo), {
                        ...e,
                        height: (t - n) * this.timeScale,
                        top: (n - this.options.timeFrom) * this.timeScale
                    }
                })
            },
            events() {
                const {
                    startDate: e,
                    endDate: n
                } = this.data;
                let t = [];
                if (!["years", "year"].includes(this.view.id) || this.options.eventsCountOnYearView) {
                    if (t = this.view.events.slice(0), this.view.id === "month" && t.push(...this.view.outOfScopeEvents), t = t.filter(i => this.utils.event.eventInRange(i, e, n)), this.options.showAllDayEvents && this.view.id !== "month" && (t = t.filter(i => !!i.allDay === this.allDay)), this.options.time && this.isWeekOrDayView && !this.allDay) {
                        const {
                            timeFrom: i,
                            timeTo: r
                        } = this.options;
                        t = t.filter(s => {
                            const o = s.daysCount > 1 && s.segments[this.data.formattedDate] || {},
                                a = s.daysCount === 1 && s.startTimeMinutes < r && s.endTimeMinutes > i,
                                l = s.daysCount > 1 && o.startTimeMinutes < r && o.endTimeMinutes > i;
                            return s.allDay || a || l || !1
                        })
                    }!this.options.time || !this.isWeekOrDayView || this.options.showAllDayEvents && this.allDay || t.sort((i, r) => i.start < r.start ? -1 : 1), this.cellSplits.length || this.$nextTick(this.checkCellOverlappingEvents)
                }
                return t
            },
            eventsCount() {
                return this.events.length
            },
            splits() {
                return this.cellSplits.map((e, n) => {
                    const t = this.events.filter(s => s.split === e.id),
                        [i, r] = this.utils.event.checkCellOverlappingEvents(t.filter(s => !s.background && !s.allDay), this.options);
                    return {
                        ...e,
                        overlaps: i,
                        overlapsStreak: r,
                        events: t
                    }
                })
            },
            splitsCount() {
                return this.splits.length
            },
            cellClasses() {
                return {
                    [this.data.class]: !!this.data.class,
                    "vuecal__cell--current": this.data.current,
                    "vuecal__cell--today": this.data.today,
                    "vuecal__cell--out-of-scope": this.data.outOfScope,
                    "vuecal__cell--before-min": this.isDisabled && this.isBeforeMinDate,
                    "vuecal__cell--after-max": this.isDisabled && this.isAfterMaxDate,
                    "vuecal__cell--disabled": this.isDisabled,
                    "vuecal__cell--selected": this.isSelected,
                    "vuecal__cell--highlighted": this.highlighted,
                    "vuecal__cell--has-splits": this.splitsCount,
                    "vuecal__cell--has-events": this.eventsCount
                }
            },
            cellStyles() {
                return {
                    ...this.cellWidth ? {
                        width: `${this.cellWidth}%`
                    } : {}
                }
            },
            timelineVisible() {
                const {
                    time: e,
                    timeTo: n
                } = this.options;
                return this.data.today && this.isWeekOrDayView && e && !this.allDay && this.nowInMinutes <= n
            },
            todaysTimePosition() {
                if (!this.data.today || !this.options.time) return;
                const e = this.nowInMinutes - this.options.timeFrom;
                return Math.round(e * this.timeScale)
            },
            timeScale() {
                return this.options.timeCellHeight / this.options.timeStep
            }
        }
    }, [
        ["render", function(e, n, t, i, r, s) {
            const o = ui("event");
            return ae(), Rn(zc, {
                class: Rt(["vuecal__cell", s.cellClasses]),
                name: `slide-fade--${s.transitionDirection}`,
                tag: "div",
                appear: t.options.transitions,
                style: Kt(s.cellStyles)
            }, {
                default: pt(() => [(ae(!0), ge(et, null, fn(s.splitsCount ? s.splits : 1, (a, l) => (ae(), ge("div", {
                    class: Rt(["vuecal__flex vuecal__cell-content", s.splitsCount && s.splitClasses(a)]),
                    key: t.options.transitions ? `${s.view.id}-${t.data.content}-${l}` : l,
                    "data-split": !!s.splitsCount && a.id,
                    column: "",
                    tabindex: "0",
                    "aria-label": t.data.content,
                    onFocus: n[0] || (n[0] = u => s.onCellFocus(u)),
                    onKeypress: n[1] || (n[1] = Na(u => s.onCellkeyPressEnter(u), ["enter"])),
                    onTouchstart: u => !s.isDisabled && s.onCellTouchStart(u, s.splitsCount ? a.id : null),
                    onMousedown: u => !s.isDisabled && s.onCellMouseDown(u, s.splitsCount ? a.id : null),
                    onClick: n[2] || (n[2] = u => !s.isDisabled && s.onCellClick(u)),
                    onDblclick: n[3] || (n[3] = u => !s.isDisabled && s.onCellDblClick(u)),
                    onContextmenu: n[4] || (n[4] = u => !s.isDisabled && t.options.cellContextmenu && s.onCellContextMenu(u)),
                    onDragenter: n[5] || (n[5] = u => !s.isDisabled && t.editEvents.drag && s.dnd && s.dnd.cellDragEnter(u, e.$data, t.data.startDate)),
                    onDragover: u => !s.isDisabled && t.editEvents.drag && s.dnd && s.dnd.cellDragOver(u, e.$data, t.data.startDate, s.splitsCount ? a.id : null),
                    onDragleave: n[6] || (n[6] = u => !s.isDisabled && t.editEvents.drag && s.dnd && s.dnd.cellDragLeave(u, e.$data, t.data.startDate)),
                    onDrop: u => !s.isDisabled && t.editEvents.drag && s.dnd && s.dnd.cellDragDrop(u, e.$data, t.data.startDate, s.splitsCount ? a.id : null)
                }, [t.options.showTimeInCells && t.options.time && s.isWeekOrDayView && !t.allDay ? (ae(), ge("div", uO, [(ae(!0), ge(et, null, fn(s.vuecal.timeCells, (u, c) => (ae(), ge("span", {
                    class: "cell-time-label",
                    key: c
                }, vt(u.label), 1))), 128))])) : je("", !0), s.isWeekOrDayView && !t.allDay && s.specialHours.length ? (ae(!0), ge(et, {
                    key: 1
                }, fn(s.specialHours, (u, c) => (ae(), ge("div", {
                    class: Rt(["vuecal__special-hours", `vuecal__special-hours--day${u.day} ${u.class}`]),
                    style: Kt(`height: ${u.height}px;top: ${u.top}px`)
                }, [u.label ? (ae(), ge("div", {
                    key: 0,
                    class: "special-hours-label",
                    innerHTML: u.label
                }, null, 8, cO)) : je("", !0)], 6))), 256)) : je("", !0), Qe(e.$slots, "cell-content", {
                    events: s.events,
                    selectCell: u => s.selectCell(u, !0),
                    split: !!s.splitsCount && a
                }), s.eventsCount && (s.isWeekOrDayView || s.view.id === "month" && t.options.eventsOnMonthView) ? (ae(), ge("div", fO, [(ae(!0), ge(et, null, fn(s.splitsCount ? a.events : s.events, (u, c) => (ae(), Rn(o, {
                    key: c,
                    "cell-formatted-date": t.data.formattedDate,
                    event: u,
                    "all-day": t.allDay,
                    "cell-events": s.splitsCount ? a.events : s.events,
                    overlaps: ((s.splitsCount ? a.overlaps[u._eid] : e.cellOverlaps[u._eid]) || []).overlaps,
                    "event-position": ((s.splitsCount ? a.overlaps[u._eid] : e.cellOverlaps[u._eid]) || []).position,
                    "overlaps-streak": s.splitsCount ? a.overlapsStreak : e.cellOverlapsStreak
                }, {
                    event: pt(({
                        event: f,
                        view: d
                    }) => [Qe(e.$slots, "event", {
                        view: d,
                        event: f
                    })]),
                    _: 2
                }, 1032, ["cell-formatted-date", "event", "all-day", "cell-events", "overlaps", "event-position", "overlaps-streak"]))), 128))])) : je("", !0)], 42, lO))), 128)), s.timelineVisible ? (ae(), ge("div", {
                    class: "vuecal__now-line",
                    style: Kt(`top: ${s.todaysTimePosition}px`),
                    key: t.options.transitions ? `${s.view.id}-now-line` : "now-line",
                    title: s.utils.date.formatTime(s.vuecal.now)
                }, null, 12, dO)) : je("", !0)]),
                _: 3
            }, 8, ["class", "name", "appear", "style"])
        }]
    ]),
    hO = {
        key: 0,
        class: "vuecal__all-day-text",
        style: {
            width: "3em"
        }
    },
    pO = as({
        inject: ["vuecal", "view", "editEvents"],
        components: {
            "vuecal-cell": Dy
        },
        props: {
            options: {
                type: Object,
                required: !0
            },
            cells: {
                type: Array,
                required: !0
            },
            label: {
                type: String,
                required: !0
            },
            daySplits: {
                type: Array,
                default: () => []
            },
            shortEvents: {
                type: Boolean,
                default: !0
            },
            height: {
                type: String,
                default: ""
            },
            cellOrSplitMinWidth: {
                type: Number,
                default: null
            }
        },
        computed: {
            hasCellOrSplitWidth() {
                return !!(this.options.minCellWidth || this.daySplits.length && this.options.minSplitWidth)
            }
        }
    }, [
        ["render", function(e, n, t, i, r, s) {
            const o = ui("vuecal-cell");
            return ae(), ge("div", {
                class: "vuecal__flex vuecal__all-day",
                style: Kt(t.cellOrSplitMinWidth && {
                    height: t.height
                })
            }, [t.cellOrSplitMinWidth ? je("", !0) : (ae(), ge("div", hO, [yt("span", null, vt(t.label), 1)])), yt("div", {
                class: Rt(["vuecal__flex vuecal__cells", `${s.view.id}-view`]),
                grow: "",
                style: Kt(t.cellOrSplitMinWidth ? `min-width: ${t.cellOrSplitMinWidth}px` : "")
            }, [(ae(!0), ge(et, null, fn(t.cells, (a, l) => (ae(), Rn(o, {
                key: l,
                options: t.options,
                "edit-events": s.editEvents,
                data: a,
                "all-day": !0,
                "cell-width": t.options.hideWeekdays.length && (s.vuecal.isWeekView || s.vuecal.isMonthView) && s.vuecal.cellWidth,
                "min-timestamp": t.options.minTimestamp,
                "max-timestamp": t.options.maxTimestamp,
                "cell-splits": t.daySplits
            }, {
                event: pt(({
                    event: u,
                    view: c
                }) => [Qe(e.$slots, "event", {
                    view: c,
                    event: u
                })]),
                _: 2
            }, 1032, ["options", "edit-events", "data", "cell-width", "min-timestamp", "max-timestamp", "cell-splits"]))), 128))], 6)], 4)
        }]
    ]),
    mO = ["lang"],
    gO = yt("i", {
        class: "angle"
    }, null, -1),
    vO = yt("i", {
        class: "angle"
    }, null, -1),
    yO = {
        class: "default"
    },
    bO = {
        key: 0,
        class: "vuecal__flex vuecal__body",
        grow: ""
    },
    EO = ["onBlur", "innerHTML"],
    SO = ["innerHTML"],
    wO = ["innerHTML"],
    DO = {
        class: "vuecal__flex",
        row: "",
        grow: ""
    },
    TO = {
        key: 0,
        class: "vuecal__time-column"
    },
    CO = yt("span", {
        class: "vuecal__time-cell-line"
    }, null, -1),
    OO = {
        class: "vuecal__time-cell-label"
    },
    xO = {
        key: 1,
        class: "vuecal__flex vuecal__week-numbers",
        column: ""
    },
    AO = ["wrap", "column"],
    MO = ["onBlur", "innerHTML"],
    IO = ["innerHTML"],
    PO = ["innerHTML"],
    NO = ["wrap"],
    RO = ["innerHTML"],
    _O = ["innerHTML"],
    FO = {
        key: 2,
        class: "vuecal__cell-events-count"
    },
    LO = {
        key: 3,
        class: "vuecal__no-event"
    },
    kO = ["onBlur", "innerHTML"],
    $O = ["innerHTML"],
    jO = {
        key: 2,
        class: "vuecal__event-time"
    },
    VO = {
        key: 0
    },
    HO = {
        key: 1,
        class: "days-to-end"
    },
    BO = ["innerHTML"],
    UO = {
        key: 0,
        class: "vuecal__scrollbar-check"
    },
    WO = [yt("div", null, null, -1)],
    ws = 1440,
    Ps = {
        weekDays: Array(7).fill(""),
        weekDaysShort: [],
        months: Array(12).fill(""),
        years: "",
        year: "",
        month: "",
        week: "",
        day: "",
        today: "",
        noEvent: "",
        allDay: "",
        deleteEvent: "",
        createEvent: "",
        dateFormat: "dddd MMMM D, YYYY",
        am: "am",
        pm: "pm"
    },
    Jh = ["years", "year", "month", "week", "day"],
    Qh = new class {
        constructor(e, n = !1) {
            Si(this, "texts", {}), Si(this, "dateToMinutes", t => 60 * t.getHours() + t.getMinutes()), Vn = this, this._texts = e, n || !Date || Date.prototype.addDays || this._initDatePrototypes()
        }
        _initDatePrototypes() {
            Date.prototype.addDays = function(e) {
                return Vn.addDays(this, e)
            }, Date.prototype.subtractDays = function(e) {
                return Vn.subtractDays(this, e)
            }, Date.prototype.addHours = function(e) {
                return Vn.addHours(this, e)
            }, Date.prototype.subtractHours = function(e) {
                return Vn.subtractHours(this, e)
            }, Date.prototype.addMinutes = function(e) {
                return Vn.addMinutes(this, e)
            }, Date.prototype.subtractMinutes = function(e) {
                return Vn.subtractMinutes(this, e)
            }, Date.prototype.getWeek = function() {
                return Vn.getWeek(this)
            }, Date.prototype.isToday = function() {
                return Vn.isToday(this)
            }, Date.prototype.isLeapYear = function() {
                return Vn.isLeapYear(this)
            }, Date.prototype.format = function(e = "YYYY-MM-DD") {
                return Vn.formatDate(this, e)
            }, Date.prototype.formatTime = function(e = "HH:mm") {
                return Vn.formatTime(this, e)
            }
        }
        removePrototypes() {
            delete Date.prototype.addDays, delete Date.prototype.subtractDays, delete Date.prototype.addHours, delete Date.prototype.subtractHours, delete Date.prototype.addMinutes, delete Date.prototype.subtractMinutes, delete Date.prototype.getWeek, delete Date.prototype.isToday, delete Date.prototype.isLeapYear, delete Date.prototype.format, delete Date.prototype.formatTime
        }
        updateTexts(e) {
            this._texts = e
        }
        _todayFormatted() {
            return Zh !== new Date().getDate() && (Es = new Date, Zh = Es.getDate(), Xh = `${Es.getFullYear()}-${Es.getMonth()}-${Es.getDate()}`), Xh
        }
        addDays(e, n) {
            const t = new Date(e.valueOf());
            return t.setDate(t.getDate() + n), t
        }
        subtractDays(e, n) {
            const t = new Date(e.valueOf());
            return t.setDate(t.getDate() - n), t
        }
        addHours(e, n) {
            const t = new Date(e.valueOf());
            return t.setHours(t.getHours() + n), t
        }
        subtractHours(e, n) {
            const t = new Date(e.valueOf());
            return t.setHours(t.getHours() - n), t
        }
        addMinutes(e, n) {
            const t = new Date(e.valueOf());
            return t.setMinutes(t.getMinutes() + n), t
        }
        subtractMinutes(e, n) {
            const t = new Date(e.valueOf());
            return t.setMinutes(t.getMinutes() - n), t
        }
        getWeek(e) {
            const n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())),
                t = n.getUTCDay() || 7;
            n.setUTCDate(n.getUTCDate() + 4 - t);
            const i = new Date(Date.UTC(n.getUTCFullYear(), 0, 1));
            return Math.ceil(((n - i) / 864e5 + 1) / 7)
        }
        isToday(e) {
            return `${e.getFullYear()}-${e.getMonth()}-${e.getDate()}` === this._todayFormatted()
        }
        isLeapYear(e) {
            const n = e.getFullYear();
            return !(n % 400) || n % 100 && !(n % 4)
        }
        getPreviousFirstDayOfWeek(e = null, n) {
            const t = e && new Date(e.valueOf()) || new Date,
                i = n ? 7 : 6;
            return t.setDate(t.getDate() - (t.getDay() + i) % 7), t
        }
        stringToDate(e) {
            return e instanceof Date ? e : (e.length === 10 && (e += " 00:00"), new Date(e.replace(/-/g, "/")))
        }
        countDays(e, n) {
            typeof e == "string" && (e = e.replace(/-/g, "/")), typeof n == "string" && (n = n.replace(/-/g, "/")), e = new Date(e).setHours(0, 0, 0, 0), n = new Date(n).setHours(0, 0, 1, 0);
            const t = 60 * (new Date(n).getTimezoneOffset() - new Date(e).getTimezoneOffset()) * 1e3;
            return Math.ceil((n - e - t) / 864e5)
        }
        datesInSameTimeStep(e, n, t) {
            return Math.abs(e.getTime() - n.getTime()) <= 60 * t * 1e3
        }
        formatDate(e, n = "YYYY-MM-DD", t = null) {
            if (t || (t = this._texts), n || (n = "YYYY-MM-DD"), n === "YYYY-MM-DD") return this.formatDateLite(e);
            Ss = {}, Hr = {};
            const i = {
                YYYY: () => this._hydrateDateObject(e, t).YYYY,
                YY: () => this._hydrateDateObject(e, t).YY(),
                M: () => this._hydrateDateObject(e, t).M,
                MM: () => this._hydrateDateObject(e, t).MM(),
                MMM: () => this._hydrateDateObject(e, t).MMM(),
                MMMM: () => this._hydrateDateObject(e, t).MMMM(),
                MMMMG: () => this._hydrateDateObject(e, t).MMMMG(),
                D: () => this._hydrateDateObject(e, t).D,
                DD: () => this._hydrateDateObject(e, t).DD(),
                S: () => this._hydrateDateObject(e, t).S(),
                d: () => this._hydrateDateObject(e, t).d,
                dd: () => this._hydrateDateObject(e, t).dd(),
                ddd: () => this._hydrateDateObject(e, t).ddd(),
                dddd: () => this._hydrateDateObject(e, t).dddd(),
                HH: () => this._hydrateTimeObject(e, t).HH,
                H: () => this._hydrateTimeObject(e, t).H,
                hh: () => this._hydrateTimeObject(e, t).hh,
                h: () => this._hydrateTimeObject(e, t).h,
                am: () => this._hydrateTimeObject(e, t).am,
                AM: () => this._hydrateTimeObject(e, t).AM,
                mm: () => this._hydrateTimeObject(e, t).mm,
                m: () => this._hydrateTimeObject(e, t).m
            };
            return n.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, (r, s) => {
                const o = i[s.replace(/\{|\}/g, "")];
                return o !== void 0 ? o() : s
            })
        }
        formatDateLite(e) {
            const n = e.getMonth() + 1,
                t = e.getDate();
            return `${e.getFullYear()}-${n<10?"0":""}${n}-${t<10?"0":""}${t}`
        }
        formatTime(e, n = "HH:mm", t = null, i = !1) {
            let r = !1;
            if (i) {
                const [a, l, u] = [e.getHours(), e.getMinutes(), e.getSeconds()];
                a + l + u === 141 && (r = !0)
            }
            if (e instanceof Date && n === "HH:mm") return r ? "24:00" : this.formatTimeLite(e);
            Hr = {}, t || (t = this._texts);
            const s = this._hydrateTimeObject(e, t),
                o = n.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, (a, l) => {
                    const u = s[l.replace(/\{|\}/g, "")];
                    return u !== void 0 ? u : l
                });
            return r ? o.replace("23:59", "24:00") : o
        }
        formatTimeLite(e) {
            const n = e.getHours(),
                t = e.getMinutes();
            return `${(n<10?"0":"")+n}:${(t<10?"0":"")+t}`
        }
        _nth(e) {
            if (e > 3 && e < 21) return "th";
            switch (e % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th"
            }
        }
        _hydrateDateObject(e, n) {
            if (Ss.D) return Ss;
            const t = e.getFullYear(),
                i = e.getMonth() + 1,
                r = e.getDate(),
                s = (e.getDay() - 1 + 7) % 7;
            return Ss = {
                YYYY: t,
                YY: () => t.toString().substring(2),
                M: i,
                MM: () => (i < 10 ? "0" : "") + i,
                MMM: () => n.months[i - 1].substring(0, 3),
                MMMM: () => n.months[i - 1],
                MMMMG: () => (n.monthsGenitive || n.months)[i - 1],
                D: r,
                DD: () => (r < 10 ? "0" : "") + r,
                S: () => this._nth(r),
                d: s + 1,
                dd: () => n.weekDays[s][0],
                ddd: () => n.weekDays[s].substr(0, 3),
                dddd: () => n.weekDays[s]
            }, Ss
        }
        _hydrateTimeObject(e, n) {
            if (Hr.am) return Hr;
            let t, i;
            e instanceof Date ? (t = e.getHours(), i = e.getMinutes()) : (t = Math.floor(e / 60), i = Math.floor(e % 60));
            const r = t % 12 ? t % 12 : 12,
                s = (n || {
                    am: "am",
                    pm: "pm"
                })[t === 24 || t < 12 ? "am" : "pm"];
            return Hr = {
                H: t,
                h: r,
                HH: (t < 10 ? "0" : "") + t,
                hh: (r < 10 ? "0" : "") + r,
                am: s,
                AM: s.toUpperCase(),
                m: i,
                mm: (i < 10 ? "0" : "") + i
            }, Hr
        }
    }(Ps),
    YO = {
        name: "vue-cal",
        components: {
            "vuecal-cell": Dy,
            "vuecal-header": sO,
            WeekdaysHeadings: wy,
            AllDayBar: pO
        },
        provide() {
            return {
                vuecal: this,
                utils: this.utils,
                modules: this.modules,
                previous: this.previous,
                next: this.next,
                switchView: this.switchView,
                updateSelectedDate: this.updateSelectedDate,
                editEvents: this.editEvents,
                view: this.view,
                domEvents: this.domEvents
            }
        },
        props: {
            activeView: {
                type: String,
                default: "week"
            },
            allDayBarHeight: {
                type: [String, Number],
                default: "25px"
            },
            cellClickHold: {
                type: Boolean,
                default: !0
            },
            cellContextmenu: {
                type: Boolean,
                default: !1
            },
            clickToNavigate: {
                type: Boolean,
                default: !1
            },
            dblclickToNavigate: {
                type: Boolean,
                default: !0
            },
            disableDatePrototypes: {
                type: Boolean,
                default: !1
            },
            disableDays: {
                type: Array,
                default: () => []
            },
            disableViews: {
                type: Array,
                default: () => []
            },
            dragToCreateEvent: {
                type: Boolean,
                default: !0
            },
            dragToCreateThreshold: {
                type: Number,
                default: 15
            },
            editableEvents: {
                type: [Boolean, Object],
                default: !1
            },
            events: {
                type: Array,
                default: () => []
            },
            eventsCountOnYearView: {
                type: Boolean,
                default: !1
            },
            eventsOnMonthView: {
                type: [Boolean, String],
                default: !1
            },
            hideBody: {
                type: Boolean,
                default: !1
            },
            hideTitleBar: {
                type: Boolean,
                default: !1
            },
            hideViewSelector: {
                type: Boolean,
                default: !1
            },
            hideWeekdays: {
                type: Array,
                default: () => []
            },
            hideWeekends: {
                type: Boolean,
                default: !1
            },
            locale: {
                type: [String, Object],
                default: "en"
            },
            maxDate: {
                type: [String, Date],
                default: ""
            },
            minCellWidth: {
                type: Number,
                default: 0
            },
            minDate: {
                type: [String, Date],
                default: ""
            },
            minEventWidth: {
                type: Number,
                default: 0
            },
            minSplitWidth: {
                type: Number,
                default: 0
            },
            onEventClick: {
                type: [Function, null],
                default: null
            },
            onEventCreate: {
                type: [Function, null],
                default: null
            },
            onEventDblclick: {
                type: [Function, null],
                default: null
            },
            overlapsPerTimeStep: {
                type: Boolean,
                default: !1
            },
            resizeX: {
                type: Boolean,
                default: !1
            },
            selectedDate: {
                type: [String, Date],
                default: ""
            },
            showAllDayEvents: {
                type: [Boolean, String],
                default: !1
            },
            showTimeInCells: {
                type: Boolean,
                default: !1
            },
            showWeekNumbers: {
                type: [Boolean, String],
                default: !1
            },
            snapToTime: {
                type: Number,
                default: 0
            },
            small: {
                type: Boolean,
                default: !1
            },
            specialHours: {
                type: Object,
                default: () => ({})
            },
            splitDays: {
                type: Array,
                default: () => []
            },
            startWeekOnSunday: {
                type: Boolean,
                default: !1
            },
            stickySplitLabels: {
                type: Boolean,
                default: !1
            },
            time: {
                type: Boolean,
                default: !0
            },
            timeCellHeight: {
                type: Number,
                default: 40
            },
            timeFormat: {
                type: String,
                default: ""
            },
            timeFrom: {
                type: Number,
                default: 0
            },
            timeStep: {
                type: Number,
                default: 60
            },
            timeTo: {
                type: Number,
                default: ws
            },
            todayButton: {
                type: Boolean,
                default: !1
            },
            transitions: {
                type: Boolean,
                default: !0
            },
            twelveHour: {
                type: Boolean,
                default: !1
            },
            watchRealTime: {
                type: Boolean,
                default: !1
            },
            xsmall: {
                type: Boolean,
                default: !1
            }
        },
        data() {
            return {
                ready: !1,
                texts: {
                    ...Ps
                },
                utils: {
                    date: !!this.disableDatePrototypes && Qh.removePrototypes() || Qh,
                    cell: null,
                    event: null
                },
                modules: {
                    dnd: null
                },
                cellsEl: null,
                view: {
                    id: "",
                    title: "",
                    startDate: null,
                    endDate: null,
                    firstCellDate: null,
                    lastCellDate: null,
                    selectedDate: null,
                    events: []
                },
                eventIdIncrement: 1,
                now: new Date,
                timeTickerIds: [null, null],
                domEvents: {
                    resizeAnEvent: {
                        _eid: null,
                        start: null,
                        split: null,
                        segment: null,
                        originalEndTimeMinutes: 0,
                        originalEnd: null,
                        end: null,
                        startCell: null,
                        endCell: null
                    },
                    dragAnEvent: {
                        _eid: null
                    },
                    dragCreateAnEvent: {
                        startCursorY: null,
                        start: null,
                        split: null,
                        event: null
                    },
                    focusAnEvent: {
                        _eid: null,
                        mousedUp: !1
                    },
                    clickHoldAnEvent: {
                        _eid: null,
                        timeout: 1200,
                        timeoutId: null
                    },
                    dblTapACell: {
                        taps: 0,
                        timeout: 500
                    },
                    clickHoldACell: {
                        cellId: null,
                        split: null,
                        timeout: 1200,
                        timeoutId: null,
                        eventCreated: !1
                    },
                    cancelClickEventCreation: !1
                },
                mutableEvents: [],
                transitionDirection: "right"
            }
        },
        methods: {
            async loadLocale(e) {
                if (typeof this.locale == "object") return this.texts = Object.assign({}, Ps, e), void this.utils.date.updateTexts(this.texts);
                if (this.locale === "en") {
                    const n = await Re(() => import("./en.es-d28ce695.js"), [], import.meta.url);
                    this.texts = Object.assign({}, Ps, n)
                } else((n, t) => {
                    const i = n[t];
                    return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((r, s) => {
                        (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(s.bind(null, new Error("Unknown variable dynamic import: " + t)))
                    })
                })(Object.assign({
                    "./i18n/ar.json": () => Re(() => import("./ar.es-2968a13f.js"), [], import.meta.url),
                    "./i18n/bg.json": () => Re(() => import("./bg.es-182cdcb3.js"), [], import.meta.url),
                    "./i18n/bn.json": () => Re(() => import("./bn.es-3f8773a4.js"), [], import.meta.url),
                    "./i18n/bs.json": () => Re(() => import("./bs.es-47a220af.js"), [], import.meta.url),
                    "./i18n/ca.json": () => Re(() => import("./ca.es-47a49a5a.js"), [], import.meta.url),
                    "./i18n/cs.json": () => Re(() => import("./cs.es-29e50c14.js"), [], import.meta.url),
                    "./i18n/da.json": () => Re(() => import("./da.es-eecb0b06.js"), [], import.meta.url),
                    "./i18n/de.json": () => Re(() => import("./de.es-83841cfd.js"), [], import.meta.url),
                    "./i18n/el.json": () => Re(() => import("./el.es-b1c0d142.js"), [], import.meta.url),
                    "./i18n/en.json": () => Re(() => import("./en.es-d28ce695.js"), [], import.meta.url),
                    "./i18n/es.json": () => Re(() => import("./es.es-232cf334.js"), [], import.meta.url),
                    "./i18n/et.json": () => Re(() => import("./et.es-7e6a3380.js"), [], import.meta.url),
                    "./i18n/fa.json": () => Re(() => import("./fa.es-b08cd112.js"), [], import.meta.url),
                    "./i18n/fi.json": () => Re(() => import("./fi.es-d164093c.js"), [], import.meta.url),
                    "./i18n/fr.json": () => Re(() => import("./fr.es-bb780d19.js"), [], import.meta.url),
                    "./i18n/he.json": () => Re(() => import("./he.es-38780c8b.js"), [], import.meta.url),
                    "./i18n/hr.json": () => Re(() => import("./hr.es-fdafdc21.js"), [], import.meta.url),
                    "./i18n/hu.json": () => Re(() => import("./hu.es-3630014a.js"), [], import.meta.url),
                    "./i18n/id.json": () => Re(() => import("./id.es-3e6a36ce.js"), [], import.meta.url),
                    "./i18n/is.json": () => Re(() => import("./is.es-a5785bf6.js"), [], import.meta.url),
                    "./i18n/it.json": () => Re(() => import("./it.es-a9d8c123.js"), [], import.meta.url),
                    "./i18n/ja.json": () => Re(() => import("./ja.es-6a0383c1.js"), [], import.meta.url),
                    "./i18n/ka.json": () => Re(() => import("./ka.es-75616353.js"), [], import.meta.url),
                    "./i18n/ko.json": () => Re(() => import("./ko.es-52b4fe30.js"), [], import.meta.url),
                    "./i18n/lt.json": () => Re(() => import("./lt.es-fb2fe7b5.js"), [], import.meta.url),
                    "./i18n/mn.json": () => Re(() => import("./mn.es-fcd02e46.js"), [], import.meta.url),
                    "./i18n/nl.json": () => Re(() => import("./nl.es-558331c7.js"), [], import.meta.url),
                    "./i18n/no.json": () => Re(() => import("./no.es-8b33619c.js"), [], import.meta.url),
                    "./i18n/pl.json": () => Re(() => import("./pl.es-631374bd.js"), [], import.meta.url),
                    "./i18n/pt-br.json": () => Re(() => import("./pt-br.es-a39b3c5f.js"), [], import.meta.url),
                    "./i18n/pt-pt.json": () => Re(() => import("./pt-pt.es-a39b3c5f.js"), [], import.meta.url),
                    "./i18n/ro.json": () => Re(() => import("./ro.es-8080c341.js"), [], import.meta.url),
                    "./i18n/ru.json": () => Re(() => import("./ru.es-9e02a02e.js"), [], import.meta.url),
                    "./i18n/sk.json": () => Re(() => import("./sk.es-7894e5cb.js"), [], import.meta.url),
                    "./i18n/sl.json": () => Re(() => import("./sl.es-886c86bd.js"), [], import.meta.url),
                    "./i18n/sq.json": () => Re(() => import("./sq.es-600bc51c.js"), [], import.meta.url),
                    "./i18n/sr.json": () => Re(() => import("./sr.es-f3348729.js"), [], import.meta.url),
                    "./i18n/sv.json": () => Re(() => import("./sv.es-f0a285bd.js"), [], import.meta.url),
                    "./i18n/tr.json": () => Re(() => import("./tr.es-f57d7128.js"), [], import.meta.url),
                    "./i18n/uk.json": () => Re(() => import("./uk.es-0afcf35e.js"), [], import.meta.url),
                    "./i18n/vi.json": () => Re(() => import("./vi.es-c0302793.js"), [], import.meta.url),
                    "./i18n/zh-cn.json": () => Re(() => import("./zh-cn.es-b584d7c2.js"), [], import.meta.url),
                    "./i18n/zh-hk.json": () => Re(() => import("./zh-hk.es-3b3b5fba.js"), [], import.meta.url)
                }), `./i18n/${e}.json`).then(n => {
                    this.texts = Object.assign({}, Ps, n.default), this.utils.date.updateTexts(this.texts)
                })
            },
            loadDragAndDrop() {
                Re(() => import("./drag-and-drop.es-0df93f71.js"), [], import.meta.url).then(e => {
                    const {
                        DragAndDrop: n
                    } = e;
                    this.modules.dnd = new n(this)
                }).catch(() => console.warn("Vue Cal: Missing drag & drop module."))
            },
            validateView(e) {
                return Jh.includes(e) || (console.error(`Vue Cal: invalid active-view parameter provided: "${e}".
A valid view must be one of: ${Jh.join(", ")}.`), e = "week"), this.enabledViews.includes(e) || (console.warn(`Vue Cal: the provided active-view "${e}" is disabled. Using the "${this.enabledViews[0]}" view instead.`), e = this.enabledViews[0]), e
            },
            switchToNarrowerView(e = null) {
                this.transitionDirection = "right";
                const n = this.enabledViews[this.enabledViews.indexOf(this.view.id) + 1];
                n && this.switchView(n, e)
            },
            switchView(e, n = null, t = !1) {
                e = this.validateView(e);
                const i = this.utils.date,
                    r = this.view.startDate && this.view.startDate.getTime();
                if (this.transitions && t) {
                    if (this.view.id === e) return;
                    const a = this.enabledViews;
                    this.transitionDirection = a.indexOf(this.view.id) > a.indexOf(e) ? "left" : "right"
                }
                const s = this.view.id;
                switch (this.view.events = [], this.view.id = e, this.view.firstCellDate = null, this.view.lastCellDate = null, n || (n = this.view.selectedDate || this.view.startDate), e) {
                    case "years":
                        this.view.startDate = new Date(25 * Math.floor(n.getFullYear() / 25) || 2e3, 0, 1), this.view.endDate = new Date(this.view.startDate.getFullYear() + 25, 0, 1), this.view.endDate.setSeconds(-1);
                        break;
                    case "year":
                        this.view.startDate = new Date(n.getFullYear(), 0, 1), this.view.endDate = new Date(n.getFullYear() + 1, 0, 1), this.view.endDate.setSeconds(-1);
                        break;
                    case "month": {
                        this.view.startDate = new Date(n.getFullYear(), n.getMonth(), 1), this.view.endDate = new Date(n.getFullYear(), n.getMonth() + 1, 1), this.view.endDate.setSeconds(-1);
                        let a = new Date(this.view.startDate);
                        if (a.getDay() !== (this.startWeekOnSunday ? 0 : 1) && (a = i.getPreviousFirstDayOfWeek(a, this.startWeekOnSunday)), this.view.firstCellDate = a, this.view.lastCellDate = i.addDays(a, 41), this.view.lastCellDate.setHours(23, 59, 59, 0), this.hideWeekends) {
                            if ([0, 6].includes(this.view.firstCellDate.getDay())) {
                                const l = this.view.firstCellDate.getDay() !== 6 || this.startWeekOnSunday ? 1 : 2;
                                this.view.firstCellDate = i.addDays(this.view.firstCellDate, l)
                            }
                            if ([0, 6].includes(this.view.startDate.getDay())) {
                                const l = this.view.startDate.getDay() === 6 ? 2 : 1;
                                this.view.startDate = i.addDays(this.view.startDate, l)
                            }
                            if ([0, 6].includes(this.view.lastCellDate.getDay())) {
                                const l = this.view.lastCellDate.getDay() !== 0 || this.startWeekOnSunday ? 1 : 2;
                                this.view.lastCellDate = i.subtractDays(this.view.lastCellDate, l)
                            }
                            if ([0, 6].includes(this.view.endDate.getDay())) {
                                const l = this.view.endDate.getDay() === 0 ? 2 : 1;
                                this.view.endDate = i.subtractDays(this.view.endDate, l)
                            }
                        }
                        break
                    }
                    case "week": {
                        n = i.getPreviousFirstDayOfWeek(n, this.startWeekOnSunday);
                        const a = this.hideWeekends ? 5 : 7;
                        this.view.startDate = this.hideWeekends && this.startWeekOnSunday ? i.addDays(n, 1) : n, this.view.startDate.setHours(0, 0, 0, 0), this.view.endDate = i.addDays(n, a), this.view.endDate.setSeconds(-1);
                        break
                    }
                    case "day":
                        this.view.startDate = n, this.view.startDate.setHours(0, 0, 0, 0), this.view.endDate = new Date(n), this.view.endDate.setHours(23, 59, 59, 0)
                }
                this.addEventsToView();
                const o = this.view.startDate && this.view.startDate.getTime();
                if ((s !== e || o !== r) && (this.$emit("update:activeView", e), this.ready)) {
                    const a = this.view.startDate,
                        l = {
                            view: e,
                            startDate: a,
                            endDate: this.view.endDate,
                            ...this.isMonthView ? {
                                firstCellDate: this.view.firstCellDate,
                                lastCellDate: this.view.lastCellDate,
                                outOfScopeEvents: this.view.outOfScopeEvents.map(this.cleanupEvent)
                            } : {},
                            events: this.view.events.map(this.cleanupEvent),
                            ...this.isWeekView ? {
                                week: i.getWeek(this.startWeekOnSunday ? i.addDays(a, 1) : a)
                            } : {}
                        };
                    this.$emit("view-change", l)
                }
            },
            previous() {
                this.previousNext(!1)
            },
            next() {
                this.previousNext()
            },
            previousNext(e = !0) {
                const n = this.utils.date;
                this.transitionDirection = e ? "right" : "left";
                const t = e ? 1 : -1;
                let i = null;
                const {
                    startDate: r,
                    id: s
                } = this.view;
                switch (s) {
                    case "years":
                        i = new Date(r.getFullYear() + 25 * t, 0, 1);
                        break;
                    case "year":
                        i = new Date(r.getFullYear() + 1 * t, 1, 1);
                        break;
                    case "month":
                        i = new Date(r.getFullYear(), r.getMonth() + 1 * t, 1);
                        break;
                    case "week":
                        i = n[e ? "addDays" : "subtractDays"](n.getPreviousFirstDayOfWeek(r, this.startWeekOnSunday), 7);
                        break;
                    case "day":
                        i = n[e ? "addDays" : "subtractDays"](r, 1);
                        const o = i.getDay(),
                            a = this.startWeekOnSunday ? o : (o || 7) - 1;
                        if (this.weekDays[a].hide) {
                            const l = this.weekDays.map((c, f) => ({
                                ...c,
                                i: f
                            }));
                            let u = 0;
                            e ? ([...l.slice(a), ...l].find(c => (u++, !c.hide)).i, u--) : [...l, ...l.slice(0, a)].reverse().find(c => (u++, !c.hide)).i, i = n[e ? "addDays" : "subtractDays"](i, u)
                        }
                }
                i && this.switchView(s, i)
            },
            addEventsToView(e = []) {
                const n = this.utils.event,
                    {
                        startDate: t,
                        endDate: i,
                        firstCellDate: r,
                        lastCellDate: s
                    } = this.view;
                if (e.length || (this.view.events = []), !(e = e.length ? e : [...this.mutableEvents]) || this.isYearsOrYearView && !this.eventsCountOnYearView) return;
                let o = e.filter(a => n.eventInRange(a, t, i));
                this.isYearsOrYearView || this.isMonthView && !this.eventsOnMonthView || (o = o.map(a => a.daysCount > 1 ? n.createEventSegments(a, r || t, s || i) : a)), this.view.events.push(...o), this.isMonthView && (this.view.outOfScopeEvents = [], e.forEach(a => {
                    (n.eventInRange(a, r, t) || n.eventInRange(a, i, s)) && (this.view.events.some(l => l._eid === a._eid) || this.view.outOfScopeEvents.push(a))
                }))
            },
            findAncestor(e, n) {
                for (;
                    (e = e.parentElement) && !e.classList.contains(n););
                return e
            },
            isDOMElementAnEvent(e) {
                return e.classList.contains("vuecal__event") || this.findAncestor(e, "vuecal__event")
            },
            onMouseMove(e) {
                const {
                    resizeAnEvent: n,
                    dragAnEvent: t,
                    dragCreateAnEvent: i
                } = this.domEvents;
                (n._eid !== null || t._eid !== null || i.start) && (e.preventDefault(), n._eid ? this.eventResizing(e) : this.dragToCreateEvent && i.start && this.eventDragCreation(e))
            },
            onMouseUp(e) {
                const {
                    focusAnEvent: n,
                    resizeAnEvent: t,
                    clickHoldAnEvent: i,
                    clickHoldACell: r,
                    dragCreateAnEvent: s
                } = this.domEvents, {
                    _eid: o
                } = i, {
                    _eid: a
                } = t;
                let l = !1;
                const {
                    event: u,
                    start: c
                } = s, f = this.isDOMElementAnEvent(e.target), d = n.mousedUp;
                if (n.mousedUp = !1, f && (this.domEvents.cancelClickEventCreation = !0), r.eventCreated) return;
                if (a) {
                    const {
                        originalEnd: p,
                        originalEndTimeMinutes: m,
                        endTimeMinutes: y
                    } = t, D = this.view.events.find(S => S._eid === t._eid);
                    if (l = y && y !== m, D && D.end.getTime() !== p.getTime()) {
                        const S = this.mutableEvents.find(x => x._eid === t._eid);
                        S.endTimeMinutes = D.endTimeMinutes, S.end = D.end;
                        const b = this.cleanupEvent(D),
                            w = {
                                ...this.cleanupEvent(D),
                                end: p,
                                endTimeMinutes: D.originalEndTimeMinutes
                            };
                        this.$emit("event-duration-change", {
                            event: b,
                            oldDate: t.originalEnd,
                            originalEvent: w
                        }), this.$emit("event-change", {
                            event: b,
                            originalEvent: w
                        })
                    }
                    D && (D.resizing = !1), t._eid = null, t.start = null, t.split = null, t.segment = null, t.originalEndTimeMinutes = null, t.originalEnd = null, t.endTimeMinutes = null, t.startCell = null, t.endCell = null
                } else c && (u && (this.emitWithEvent("event-drag-create", u), s.event.resizing = !1), s.start = null, s.split = null, s.event = null);
                f || a || this.unfocusEvent(), i.timeoutId && !o && (clearTimeout(i.timeoutId), i.timeoutId = null), r.timeoutId && (clearTimeout(r.timeoutId), r.timeoutId = null);
                const h = typeof this.onEventClick == "function";
                if (d && !l && !o && !u && h) {
                    let p = this.view.events.find(m => m._eid === n._eid);
                    return !p && this.isMonthView && (p = this.view.outOfScopeEvents.find(m => m._eid === n._eid)), p && this.onEventClick(p, e)
                }
            },
            onKeyUp(e) {
                e.keyCode === 27 && this.cancelDelete()
            },
            eventResizing(e) {
                const {
                    resizeAnEvent: n
                } = this.domEvents, t = this.view.events.find(u => u._eid === n._eid) || {
                    segments: {}
                }, {
                    minutes: i,
                    cursorCoords: r
                } = this.minutesAtCursor(e), s = t.segments && t.segments[n.segment], {
                    date: o,
                    event: a
                } = this.utils, l = Math.max(i, this.timeFrom + 1, (s || t).startTimeMinutes + 1);
                if (t.endTimeMinutes = n.endTimeMinutes = l, this.snapToTime) {
                    const u = t.endTimeMinutes + this.snapToTime / 2;
                    t.endTimeMinutes = u - u % this.snapToTime
                }
                if (s && (s.endTimeMinutes = t.endTimeMinutes), t.end.setHours(0, t.endTimeMinutes, t.endTimeMinutes === ws ? -1 : 0, 0), this.resizeX && this.isWeekView) {
                    t.daysCount = o.countDays(t.start, t.end);
                    const u = this.cellsEl,
                        c = u.offsetWidth / u.childElementCount,
                        f = Math.floor(r.x / c);
                    if (n.startCell === null && (n.startCell = f - (t.daysCount - 1)), n.endCell !== f) {
                        n.endCell = f;
                        const d = o.addDays(t.start, f - n.startCell),
                            h = Math.max(o.countDays(t.start, d), 1);
                        if (h !== t.daysCount) {
                            let p = null;
                            p = h > t.daysCount ? a.addEventSegment(t) : a.removeEventSegment(t), n.segment = p, t.endTimeMinutes += .001
                        }
                    }
                }
                this.$emit("event-resizing", {
                    _eid: t._eid,
                    end: t.end,
                    endTimeMinutes: t.endTimeMinutes
                })
            },
            eventDragCreation(e) {
                const {
                    dragCreateAnEvent: n
                } = this.domEvents, {
                    start: t,
                    startCursorY: i,
                    split: r
                } = n, s = new Date(t), {
                    minutes: o,
                    cursorCoords: {
                        y: a
                    }
                } = this.minutesAtCursor(e);
                if (n.event || !(Math.abs(i - a) < this.dragToCreateThreshold))
                    if (n.event) {
                        if (s.setHours(0, o, o === ws ? -1 : 0, 0), this.snapToTime) {
                            let c = 60 * s.getHours() + s.getMinutes();
                            const f = c + this.snapToTime / 2;
                            c = f - f % this.snapToTime, s.setHours(0, c, 0, 0)
                        }
                        const l = t < s,
                            {
                                event: u
                            } = n;
                        u.start = l ? t : s, u.end = l ? s : t, u.startTimeMinutes = 60 * u.start.getHours() + u.start.getMinutes(), u.endTimeMinutes = 60 * u.end.getHours() + u.end.getMinutes()
                    } else {
                        if (n.event = this.utils.event.createAnEvent(t, 1, {
                                split: r
                            }), !n.event) return n.start = null, n.split = null, void(n.event = null);
                        n.event.resizing = !0
                    }
            },
            unfocusEvent() {
                const {
                    focusAnEvent: e,
                    clickHoldAnEvent: n
                } = this.domEvents, t = this.view.events.find(i => i._eid === (e._eid || n._eid));
                e._eid = null, n._eid = null, t && (t.focused = !1, t.deleting = !1)
            },
            cancelDelete() {
                const {
                    clickHoldAnEvent: e
                } = this.domEvents;
                if (e._eid) {
                    const n = this.view.events.find(t => t._eid === e._eid);
                    n && (n.deleting = !1), e._eid = null, e.timeoutId = null
                }
            },
            onEventTitleBlur(e, n) {
                if (n.title === e.target.innerHTML) return;
                const t = n.title;
                n.title = e.target.innerHTML;
                const i = this.cleanupEvent(n);
                this.$emit("event-title-change", {
                    event: i,
                    oldTitle: t
                }), this.$emit("event-change", {
                    event: i,
                    originalEvent: {
                        ...i,
                        title: t
                    }
                })
            },
            updateMutableEvents() {
                const e = this.utils.date;
                this.mutableEvents = [], this.events.forEach(n => {
                    const t = typeof n.start == "string" ? e.stringToDate(n.start) : n.start,
                        i = e.formatDateLite(t),
                        r = e.dateToMinutes(t);
                    let s = null;
                    typeof n.end == "string" && n.end.includes("24:00") ? (s = new Date(n.end.replace(" 24:00", "")), s.setHours(23, 59, 59, 0)) : s = typeof n.end == "string" ? e.stringToDate(n.end) : n.end;
                    let o = e.formatDateLite(s),
                        a = e.dateToMinutes(s);
                    a && a !== ws || (!this.time || typeof n.end == "string" && n.end.length === 10 ? s.setHours(23, 59, 59, 0) : s.setSeconds(s.getSeconds() - 1), o = e.formatDateLite(s), a = ws);
                    const l = i !== o;
                    n = Object.assign({
                        ...this.utils.event.eventDefaults
                    }, n, {
                        _eid: `${this._.uid}_${this.eventIdIncrement++}`,
                        segments: l ? {} : null,
                        start: t,
                        startTimeMinutes: r,
                        end: s,
                        endTimeMinutes: a,
                        daysCount: l ? e.countDays(t, s) : 1,
                        class: n.class
                    }), this.mutableEvents.push(n)
                })
            },
            minutesAtCursor(e) {
                return this.utils.cell.minutesAtCursor(e)
            },
            createEvent(e, n, t = {}) {
                return this.utils.event.createAnEvent(e, n, t)
            },
            cleanupEvent(e) {
                return e = {
                    ...e
                }, ["segments", "deletable", "deleting", "titleEditable", "resizable", "resizing", "draggable", "dragging", "draggingStatic", "focused"].forEach(n => {
                    n in e && delete e[n]
                }), e.repeat || delete e.repeat, e
            },
            emitWithEvent(e, n) {
                this.$emit(e, this.cleanupEvent(n))
            },
            updateSelectedDate(e) {
                if ((e = e && typeof e == "string" ? this.utils.date.stringToDate(e) : new Date(e)) && e instanceof Date) {
                    const {
                        selectedDate: n
                    } = this.view;
                    n && (this.transitionDirection = n.getTime() > e.getTime() ? "left" : "right"), e.setHours(0, 0, 0, 0), n && n.getTime() === e.getTime() || (this.view.selectedDate = e), this.switchView(this.view.id)
                }
                this.$emit("update:selected-date", this.view.selectedDate)
            },
            getWeekNumber(e) {
                const n = this.utils.date,
                    t = this.firstCellDateWeekNumber + e,
                    i = this.startWeekOnSunday ? 1 : 0;
                return t > 52 ? n.getWeek(n.addDays(this.view.firstCellDate, 7 * e + i)) : t
            },
            timeTick() {
                this.now = new Date, this.timeTickerIds[1] = setTimeout(this.timeTick, 6e4)
            },
            updateDateTexts() {
                this.utils.date.updateTexts(this.texts)
            },
            alignWithScrollbar() {
                if (document.getElementById("vuecal-align-with-scrollbar")) return;
                const e = this.$refs.vuecal.getElementsByClassName("vuecal__scrollbar-check")[0],
                    n = e.offsetWidth - e.children[0].offsetWidth;
                if (n) {
                    const t = document.createElement("style");
                    t.id = "vuecal-align-with-scrollbar", t.type = "text/css", t.innerHTML = `.vuecal--view-with-time .vuecal__weekdays-headings,.vuecal--view-with-time .vuecal__all-day {padding-right: ${n}px}`, document.head.appendChild(t)
                }
            },
            cellOrSplitHasEvents: (e, n = null) => e.length && (!n && e.length || n && e.some(t => t.split === n.id))
        },
        created() {
            this.utils.cell = new HC(this), this.utils.event = new BC(this, this.utils.date), this.loadLocale(this.locale), this.editEvents.drag && this.loadDragAndDrop(), this.updateMutableEvents(this.events), this.view.id = this.currentView, this.selectedDate ? this.updateSelectedDate(this.selectedDate) : (this.view.selectedDate = new Date, this.switchView(this.currentView)), this.time && this.watchRealTime && (this.timeTickerIds[0] = setTimeout(this.timeTick, 1e3 * (60 - this.now.getSeconds())))
        },
        mounted() {
            const e = this.utils.date,
                n = "ontouchstart" in window,
                {
                    resize: t,
                    drag: i,
                    create: r,
                    delete: s,
                    title: o
                } = this.editEvents,
                a = this.onEventClick && typeof this.onEventClick == "function";
            (t || i || r || s || o || a) && window.addEventListener(n ? "touchend" : "mouseup", this.onMouseUp), (t || i || r && this.dragToCreateEvent) && window.addEventListener(n ? "touchmove" : "mousemove", this.onMouseMove, {
                passive: !1
            }), o && window.addEventListener("keyup", this.onKeyUp), n && (this.$refs.vuecal.oncontextmenu = function(c) {
                c.preventDefault(), c.stopPropagation()
            }), this.hideBody || this.alignWithScrollbar();
            const l = this.view.startDate,
                u = {
                    view: this.view.id,
                    startDate: l,
                    endDate: this.view.endDate,
                    ...this.isMonthView ? {
                        firstCellDate: this.view.firstCellDate,
                        lastCellDate: this.view.lastCellDate
                    } : {},
                    events: this.view.events.map(this.cleanupEvent),
                    ...this.isWeekView ? {
                        week: e.getWeek(this.startWeekOnSunday ? e.addDays(l, 1) : l)
                    } : {}
                };
            this.$emit("ready", u), this.ready = !0
        },
        beforeUnmount() {
            const e = "ontouchstart" in window;
            window.removeEventListener(e ? "touchmove" : "mousemove", this.onMouseMove, {
                passive: !1
            }), window.removeEventListener(e ? "touchend" : "mouseup", this.onMouseUp), window.removeEventListener("keyup", this.onKeyUp), this.timeTickerIds[0] && clearTimeout(this.timeTickerIds[0]), this.timeTickerIds[1] && clearTimeout(this.timeTickerIds[1]), this.timeTickerIds = [null, null]
        },
        computed: {
            editEvents() {
                return this.editableEvents && typeof this.editableEvents == "object" ? {
                    title: !!this.editableEvents.title,
                    drag: !!this.editableEvents.drag,
                    resize: !!this.editableEvents.resize,
                    create: !!this.editableEvents.create,
                    delete: !!this.editableEvents.delete
                } : {
                    title: !!this.editableEvents,
                    drag: !!this.editableEvents,
                    resize: !!this.editableEvents,
                    create: !!this.editableEvents,
                    delete: !!this.editableEvents
                }
            },
            views() {
                return {
                    years: {
                        label: this.texts.years,
                        enabled: !this.disableViews.includes("years")
                    },
                    year: {
                        label: this.texts.year,
                        enabled: !this.disableViews.includes("year")
                    },
                    month: {
                        label: this.texts.month,
                        enabled: !this.disableViews.includes("month")
                    },
                    week: {
                        label: this.texts.week,
                        enabled: !this.disableViews.includes("week")
                    },
                    day: {
                        label: this.texts.day,
                        enabled: !this.disableViews.includes("day")
                    }
                }
            },
            currentView() {
                return this.validateView(this.activeView)
            },
            enabledViews() {
                return Object.keys(this.views).filter(e => this.views[e].enabled)
            },
            hasTimeColumn() {
                return this.time && this.isWeekOrDayView
            },
            isShortMonthView() {
                return this.isMonthView && this.eventsOnMonthView === "short"
            },
            firstCellDateWeekNumber() {
                const e = this.utils.date,
                    n = this.view.firstCellDate;
                return e.getWeek(this.startWeekOnSunday ? e.addDays(n, 1) : n)
            },
            timeCells() {
                const e = [];
                for (let n = this.timeFrom, t = this.timeTo; n < t; n += this.timeStep) e.push({
                    hours: Math.floor(n / 60),
                    minutes: n % 60,
                    label: this.utils.date.formatTime(n, this.TimeFormat),
                    value: n
                });
                return e
            },
            TimeFormat() {
                return this.timeFormat || (this.twelveHour ? "h:mm{am}" : "HH:mm")
            },
            daySplits() {
                return (this.splitDays.filter(e => !e.hide) || []).map((e, n) => ({
                    ...e,
                    id: e.id || n + 1
                }))
            },
            hasSplits() {
                return this.daySplits.length && this.isWeekOrDayView
            },
            hasShortEvents() {
                return this.showAllDayEvents === "short"
            },
            cellOrSplitMinWidth() {
                let e = null;
                return this.hasSplits && this.minSplitWidth ? e = this.visibleDaysCount * this.minSplitWidth * this.daySplits.length : this.minCellWidth && this.isWeekView && (e = this.visibleDaysCount * this.minCellWidth), e
            },
            allDayBar() {
                let e = this.allDayBarHeight || null;
                return e && !isNaN(e) && (e += "px"), {
                    cells: this.viewCells,
                    options: this.$props,
                    label: this.texts.allDay,
                    shortEvents: this.hasShortEvents,
                    daySplits: this.hasSplits && this.daySplits || [],
                    cellOrSplitMinWidth: this.cellOrSplitMinWidth,
                    height: e
                }
            },
            minTimestamp() {
                let e = null;
                return this.minDate && typeof this.minDate == "string" ? e = this.utils.date.stringToDate(this.minDate) : this.minDate && this.minDate instanceof Date && (e = this.minDate), e ? e.getTime() : null
            },
            maxTimestamp() {
                let e = null;
                return this.maxDate && typeof this.maxDate == "string" ? e = this.utils.date.stringToDate(this.maxDate) : this.maxDate && this.minDate instanceof Date && (e = this.maxDate), e ? e.getTime() : null
            },
            weekDays() {
                let {
                    weekDays: e,
                    weekDaysShort: n = []
                } = this.texts;
                return e = e.slice(0).map((t, i) => ({
                    label: t,
                    ...n.length ? {
                        short: n[i]
                    } : {},
                    hide: this.hideWeekends && i >= 5 || this.hideWeekdays.length && this.hideWeekdays.includes(i + 1)
                })), this.startWeekOnSunday && e.unshift(e.pop()), e
            },
            weekDaysInHeader() {
                return this.isMonthView || this.isWeekView && !this.minCellWidth && !(this.hasSplits && this.minSplitWidth)
            },
            months() {
                return this.texts.months.map(e => ({
                    label: e
                }))
            },
            specialDayHours() {
                return this.specialHours && Object.keys(this.specialHours).length ? Array(7).fill("").map((e, n) => {
                    let t = this.specialHours[n + 1] || [];
                    return Array.isArray(t) || (t = [t]), e = [], t.forEach(({
                        from: i,
                        to: r,
                        class: s,
                        label: o
                    }, a) => {
                        e[a] = {
                            day: n + 1,
                            from: [null, void 0].includes(i) ? null : 1 * i,
                            to: [null, void 0].includes(r) ? null : 1 * r,
                            class: s || "",
                            label: o || ""
                        }
                    }), e
                }) : {}
            },
            viewTitle() {
                const e = this.utils.date;
                let n = "";
                const t = this.view.startDate,
                    i = t.getFullYear(),
                    r = t.getMonth();
                switch (this.view.id) {
                    case "years":
                        n = this.texts.years;
                        break;
                    case "year":
                        n = i;
                        break;
                    case "month":
                        n = `${this.months[r].label} ${i}`;
                        break;
                    case "week": {
                        const s = this.view.endDate,
                            o = t.getFullYear();
                        let a = this.texts.months[t.getMonth()];
                        this.xsmall && (a = a.substring(0, 3));
                        let l = `${a} ${o}`;
                        if (s.getMonth() !== t.getMonth()) {
                            const u = s.getFullYear();
                            let c = this.texts.months[s.getMonth()];
                            this.xsmall && (c = c.substring(0, 3)), l = o === u ? `${a} - ${c} ${o}` : this.small ? `${a.substring(0,3)} ${o} - ${c.substring(0,3)} ${u}` : `${a} ${o} - ${c} ${u}`
                        }
                        n = `${this.texts.week} ${e.getWeek(this.startWeekOnSunday?e.addDays(t,1):t)} (${l})`;
                        break
                    }
                    case "day":
                        n = this.utils.date.formatDate(t, this.texts.dateFormat, this.texts)
                }
                return n
            },
            viewCells() {
                const e = this.utils.date;
                let n = [],
                    t = null,
                    i = !1;
                this.watchRealTime || (this.now = new Date);
                const r = this.now;
                switch (this.view.id) {
                    case "years":
                        t = this.view.startDate.getFullYear(), n = Array.apply(null, Array(25)).map((s, o) => {
                            const a = new Date(t + o, 0, 1),
                                l = new Date(t + o + 1, 0, 1);
                            return l.setSeconds(-1), {
                                startDate: a,
                                formattedDate: e.formatDateLite(a),
                                endDate: l,
                                content: t + o,
                                current: t + o === r.getFullYear()
                            }
                        });
                        break;
                    case "year":
                        t = this.view.startDate.getFullYear(), n = Array.apply(null, Array(12)).map((s, o) => {
                            const a = new Date(t, o, 1),
                                l = new Date(t, o + 1, 1);
                            return l.setSeconds(-1), {
                                startDate: a,
                                formattedDate: e.formatDateLite(a),
                                endDate: l,
                                content: this.xsmall ? this.months[o].label.substr(0, 3) : this.months[o].label,
                                current: o === r.getMonth() && t === r.getFullYear()
                            }
                        });
                        break;
                    case "month": {
                        const s = this.view.startDate.getMonth(),
                            o = new Date(this.view.firstCellDate);
                        i = !1, n = Array.apply(null, Array(42)).map((a, l) => {
                            const u = e.addDays(o, l),
                                c = new Date(u);
                            c.setHours(23, 59, 59, 0);
                            const f = !i && e.isToday(u) && !i++;
                            return {
                                startDate: u,
                                formattedDate: e.formatDateLite(u),
                                endDate: c,
                                content: u.getDate(),
                                today: f,
                                outOfScope: u.getMonth() !== s,
                                class: `vuecal__cell--day${u.getDay()||7}`
                            }
                        }), (this.hideWeekends || this.hideWeekdays.length) && (n = n.filter(a => {
                            const l = a.startDate.getDay() || 7;
                            return !(this.hideWeekends && l >= 6 || this.hideWeekdays.length && this.hideWeekdays.includes(l))
                        }));
                        break
                    }
                    case "week": {
                        i = !1;
                        const s = this.view.startDate,
                            o = this.weekDays;
                        n = o.map((a, l) => {
                            const u = e.addDays(s, this.startWeekOnSunday ? l - 1 : l),
                                c = new Date(u);
                            c.setHours(23, 59, 59, 0);
                            const f = (u.getDay() || 7) - 1;
                            return {
                                startDate: u,
                                formattedDate: e.formatDateLite(u),
                                endDate: c,
                                today: !i && e.isToday(u) && !i++,
                                specialHours: this.specialDayHours[f] || []
                            }
                        }).filter((a, l) => !o[l].hide);
                        break
                    }
                    case "day": {
                        const s = this.view.startDate,
                            o = new Date(this.view.startDate);
                        o.setHours(23, 59, 59, 0);
                        const a = (s.getDay() || 7) - 1;
                        n = [{
                            startDate: s,
                            formattedDate: e.formatDateLite(s),
                            endDate: o,
                            today: e.isToday(s),
                            specialHours: this.specialDayHours[a] || []
                        }];
                        break
                    }
                }
                return n
            },
            visibleDaysCount() {
                return this.isDayView ? 1 : 7 - this.weekDays.reduce((e, n) => e + n.hide, 0)
            },
            cellWidth() {
                return 100 / this.visibleDaysCount
            },
            cssClasses() {
                const {
                    resizeAnEvent: e,
                    dragAnEvent: n,
                    dragCreateAnEvent: t
                } = this.domEvents;
                return {
                    [`vuecal--${this.view.id}-view`]: !0,
                    [`vuecal--${this.locale}`]: this.locale,
                    "vuecal--no-time": !this.time,
                    "vuecal--view-with-time": this.hasTimeColumn,
                    "vuecal--week-numbers": this.showWeekNumbers && this.isMonthView,
                    "vuecal--twelve-hour": this.twelveHour,
                    "vuecal--click-to-navigate": this.clickToNavigate,
                    "vuecal--hide-weekends": this.hideWeekends,
                    "vuecal--split-days": this.hasSplits,
                    "vuecal--sticky-split-labels": this.hasSplits && this.stickySplitLabels,
                    "vuecal--overflow-x": this.minCellWidth && this.isWeekView || this.hasSplits && this.minSplitWidth,
                    "vuecal--small": this.small,
                    "vuecal--xsmall": this.xsmall,
                    "vuecal--resizing-event": e._eid,
                    "vuecal--drag-creating-event": t.event,
                    "vuecal--dragging-event": n._eid,
                    "vuecal--events-on-month-view": this.eventsOnMonthView,
                    "vuecal--short-events": this.isMonthView && this.eventsOnMonthView === "short",
                    "vuecal--has-touch": typeof window < "u" && "ontouchstart" in window
                }
            },
            isYearsOrYearView() {
                return ["years", "year"].includes(this.view.id)
            },
            isYearsView() {
                return this.view.id === "years"
            },
            isYearView() {
                return this.view.id === "year"
            },
            isMonthView() {
                return this.view.id === "month"
            },
            isWeekOrDayView() {
                return ["week", "day"].includes(this.view.id)
            },
            isWeekView() {
                return this.view.id === "week"
            },
            isDayView() {
                return this.view.id === "day"
            }
        },
        watch: {
            events: {
                handler(e, n) {
                    this.updateMutableEvents(e), this.addEventsToView()
                },
                deep: !0
            },
            locale(e) {
                this.loadLocale(e)
            },
            selectedDate(e) {
                this.updateSelectedDate(e)
            },
            activeView(e) {
                this.switchView(e)
            }
        }
    },
    KO = as(YO, [
        ["render", function(e, n, t, i, r, s) {
            const o = ui("vuecal-header"),
                a = ui("all-day-bar"),
                l = ui("weekdays-headings"),
                u = ui("vuecal-cell");
            return ae(), ge("div", {
                class: Rt(["vuecal__flex vuecal", s.cssClasses]),
                column: "",
                ref: "vuecal",
                lang: t.locale
            }, [ot(o, {
                options: e.$props,
                "edit-events": s.editEvents,
                "view-props": {
                    views: s.views,
                    weekDaysInHeader: s.weekDaysInHeader
                },
                "week-days": s.weekDays,
                "has-splits": s.hasSplits,
                "day-splits": s.daySplits,
                "switch-to-narrower-view": s.switchToNarrowerView
            }, Gs({
                "arrow-prev": pt(() => [Qe(e.$slots, "arrow-prev", {}, () => [Xt(" "), gO, Xt(" ")])]),
                "arrow-next": pt(() => [Qe(e.$slots, "arrow-next", {}, () => [Xt(" "), vO, Xt(" ")])]),
                "today-button": pt(() => [Qe(e.$slots, "today-button", {}, () => [yt("span", yO, vt(r.texts.today), 1)])]),
                title: pt(() => [Qe(e.$slots, "title", {
                    title: s.viewTitle,
                    view: r.view
                }, () => [Xt(vt(s.viewTitle), 1)])]),
                _: 2
            }, [e.$slots["weekday-heading"] ? {
                name: "weekday-heading",
                fn: pt(({
                    heading: c,
                    view: f
                }) => [Qe(e.$slots, "weekday-heading", {
                    heading: c,
                    view: f
                })]),
                key: "0"
            } : void 0, e.$slots["split-label"] ? {
                name: "split-label",
                fn: pt(({
                    split: c
                }) => [Qe(e.$slots, "split-label", {
                    split: c,
                    view: r.view.id
                })]),
                key: "1"
            } : void 0]), 1032, ["options", "edit-events", "view-props", "week-days", "has-splits", "day-splits", "switch-to-narrower-view"]), t.hideBody ? je("", !0) : (ae(), ge("div", bO, [ot(tr, {
                name: `slide-fade--${r.transitionDirection}`,
                appear: t.transitions
            }, {
                default: pt(() => [(ae(), ge("div", {
                    class: "vuecal__flex",
                    style: {
                        "min-width": "100%"
                    },
                    key: !!t.transitions && r.view.id,
                    column: ""
                }, [t.showAllDayEvents && s.hasTimeColumn && (!s.cellOrSplitMinWidth || s.isDayView && !t.minSplitWidth) ? (ae(), Rn(a, Sa(Js({
                    key: 0
                }, s.allDayBar)), {
                    event: pt(({
                        event: c,
                        view: f
                    }) => [Qe(e.$slots, "event", {
                        view: f,
                        event: c
                    }, () => [s.editEvents.title && c.titleEditable ? (ae(), ge("div", {
                        key: 0,
                        class: "vuecal__event-title vuecal__event-title--edit",
                        contenteditable: "",
                        onBlur: d => s.onEventTitleBlur(d, c),
                        innerHTML: c.title
                    }, null, 40, EO)) : c.title ? (ae(), ge("div", {
                        key: 1,
                        class: "vuecal__event-title",
                        innerHTML: c.title
                    }, null, 8, SO)) : je("", !0), !c.content || s.hasShortEvents || s.isShortMonthView ? je("", !0) : (ae(), ge("div", {
                        key: 2,
                        class: "vuecal__event-content",
                        innerHTML: c.content
                    }, null, 8, wO))])]),
                    _: 3
                }, 16)) : je("", !0), yt("div", {
                    class: Rt(["vuecal__bg", {
                        vuecal__flex: !s.hasTimeColumn
                    }]),
                    column: ""
                }, [yt("div", DO, [s.hasTimeColumn ? (ae(), ge("div", TO, [t.showAllDayEvents && s.cellOrSplitMinWidth && (!s.isDayView || t.minSplitWidth) ? (ae(), ge("div", {
                    key: 0,
                    class: "vuecal__all-day-text",
                    style: Kt({
                        height: s.allDayBar.height
                    })
                }, [yt("span", null, vt(r.texts.allDay), 1)], 4)) : je("", !0), (ae(!0), ge(et, null, fn(s.timeCells, (c, f) => (ae(), ge("div", {
                    class: "vuecal__time-cell",
                    key: f,
                    style: Kt(`height: ${t.timeCellHeight}px`)
                }, [Qe(e.$slots, "time-cell", {
                    hours: c.hours,
                    minutes: c.minutes
                }, () => [CO, yt("span", OO, vt(c.label), 1)])], 4))), 128))])) : je("", !0), t.showWeekNumbers && s.isMonthView ? (ae(), ge("div", xO, [(ae(), ge(et, null, fn(6, c => yt("div", {
                    class: "vuecal__flex vuecal__week-number-cell",
                    key: c,
                    grow: ""
                }, [Qe(e.$slots, "week-number-cell", {
                    week: s.getWeekNumber(c - 1)
                }, () => [Xt(vt(s.getWeekNumber(c - 1)), 1)])])), 64))])) : je("", !0), yt("div", {
                    class: Rt(["vuecal__flex vuecal__cells", `${r.view.id}-view`]),
                    grow: "",
                    wrap: !s.cellOrSplitMinWidth || !s.isWeekView,
                    column: !!s.cellOrSplitMinWidth
                }, [s.cellOrSplitMinWidth && s.isWeekView ? (ae(), Rn(l, {
                    key: 0,
                    "transition-direction": r.transitionDirection,
                    "week-days": s.weekDays,
                    "switch-to-narrower-view": s.switchToNarrowerView,
                    style: Kt(s.cellOrSplitMinWidth ? `min-width: ${s.cellOrSplitMinWidth}px` : "")
                }, Gs({
                    _: 2
                }, [e.$slots["weekday-heading"] ? {
                    name: "weekday-heading",
                    fn: pt(({
                        heading: c,
                        view: f
                    }) => [Qe(e.$slots, "weekday-heading", {
                        heading: c,
                        view: f
                    })]),
                    key: "0"
                } : void 0, e.$slots["split-label"] ? {
                    name: "split-label",
                    fn: pt(({
                        split: c
                    }) => [Qe(e.$slots, "split-label", {
                        split: c,
                        view: r.view.id
                    })]),
                    key: "1"
                } : void 0]), 1032, ["transition-direction", "week-days", "switch-to-narrower-view", "style"])) : s.hasSplits && t.stickySplitLabels && t.minSplitWidth ? (ae(), ge("div", {
                    key: 1,
                    class: "vuecal__flex vuecal__split-days-headers",
                    style: Kt(s.cellOrSplitMinWidth ? `min-width: ${s.cellOrSplitMinWidth}px` : "")
                }, [(ae(!0), ge(et, null, fn(s.daySplits, (c, f) => (ae(), ge("div", {
                    class: Rt(["day-split-header", c.class || !1]),
                    key: f
                }, [Qe(e.$slots, "split-label", {
                    split: c,
                    view: r.view.id
                }, () => [Xt(vt(c.label), 1)])], 2))), 128))], 4)) : je("", !0), t.showAllDayEvents && s.hasTimeColumn && (s.isWeekView && s.cellOrSplitMinWidth || s.isDayView && s.hasSplits && t.minSplitWidth) ? (ae(), Rn(a, Sa(Js({
                    key: 2
                }, s.allDayBar)), {
                    event: pt(({
                        event: c,
                        view: f
                    }) => [Qe(e.$slots, "event", {
                        view: f,
                        event: c
                    }, () => [s.editEvents.title && c.titleEditable ? (ae(), ge("div", {
                        key: 0,
                        class: "vuecal__event-title vuecal__event-title--edit",
                        contenteditable: "",
                        onBlur: d => s.onEventTitleBlur(d, c),
                        innerHTML: c.title
                    }, null, 40, MO)) : c.title ? (ae(), ge("div", {
                        key: 1,
                        class: "vuecal__event-title",
                        innerHTML: c.title
                    }, null, 8, IO)) : je("", !0), !c.content || s.hasShortEvents || s.isShortMonthView ? je("", !0) : (ae(), ge("div", {
                        key: 2,
                        class: "vuecal__event-content",
                        innerHTML: c.content
                    }, null, 8, PO))])]),
                    _: 3
                }, 16)) : je("", !0), yt("div", {
                    class: "vuecal__flex",
                    ref: c => r.cellsEl = c,
                    grow: "",
                    wrap: !s.cellOrSplitMinWidth || !s.isWeekView,
                    style: Kt(s.cellOrSplitMinWidth ? `min-width: ${s.cellOrSplitMinWidth}px` : "")
                }, [(ae(!0), ge(et, null, fn(s.viewCells, (c, f) => (ae(), Rn(u, {
                    key: f,
                    options: e.$props,
                    "edit-events": s.editEvents,
                    data: c,
                    "cell-width": t.hideWeekdays.length && (s.isWeekView || s.isMonthView) && s.cellWidth,
                    "min-timestamp": s.minTimestamp,
                    "max-timestamp": s.maxTimestamp,
                    "cell-splits": s.hasSplits && s.daySplits || []
                }, {
                    "cell-content": pt(({
                        events: d,
                        split: h,
                        selectCell: p
                    }) => [Qe(e.$slots, "cell-content", {
                        cell: c,
                        view: r.view,
                        goNarrower: p,
                        events: d
                    }, () => [h && !t.stickySplitLabels ? (ae(), ge("div", {
                        key: 0,
                        class: "split-label",
                        innerHTML: h.label
                    }, null, 8, RO)) : je("", !0), c.content ? (ae(), ge("div", {
                        key: 1,
                        class: "vuecal__cell-date",
                        innerHTML: c.content
                    }, null, 8, _O)) : je("", !0), (s.isMonthView && !t.eventsOnMonthView || s.isYearsOrYearView && t.eventsCountOnYearView) && d.length ? (ae(), ge("div", FO, [Qe(e.$slots, "events-count", {
                        view: r.view,
                        events: d
                    }, () => [Xt(vt(d.length), 1)])])) : je("", !0), !s.cellOrSplitHasEvents(d, h) && s.isWeekOrDayView ? (ae(), ge("div", LO, [Qe(e.$slots, "no-event", {}, () => [Xt(vt(r.texts.noEvent), 1)])])) : je("", !0)])]),
                    event: pt(({
                        event: d,
                        view: h
                    }) => [Qe(e.$slots, "event", {
                        view: h,
                        event: d
                    }, () => [s.editEvents.title && d.titleEditable ? (ae(), ge("div", {
                        key: 0,
                        class: "vuecal__event-title vuecal__event-title--edit",
                        contenteditable: "",
                        onBlur: p => s.onEventTitleBlur(p, d),
                        innerHTML: d.title
                    }, null, 40, kO)) : d.title ? (ae(), ge("div", {
                        key: 1,
                        class: "vuecal__event-title",
                        innerHTML: d.title
                    }, null, 8, $O)) : je("", !0), !t.time || d.allDay || s.isMonthView && (d.allDay || t.showAllDayEvents === "short") || s.isShortMonthView ? je("", !0) : (ae(), ge("div", jO, [Xt(vt(r.utils.date.formatTime(d.start, s.TimeFormat)), 1), d.endTimeMinutes ? (ae(), ge("span", VO, " - " + vt(r.utils.date.formatTime(d.end, s.TimeFormat, null, !0)), 1)) : je("", !0), d.daysCount > 1 && (d.segments[c.formattedDate] || {}).isFirstDay ? (ae(), ge("small", HO, " +" + vt(d.daysCount - 1) + vt((r.texts.day[0] || "").toLowerCase()), 1)) : je("", !0)])), !d.content || s.isMonthView && d.allDay && t.showAllDayEvents === "short" || s.isShortMonthView ? je("", !0) : (ae(), ge("div", {
                        key: 3,
                        class: "vuecal__event-content",
                        innerHTML: d.content
                    }, null, 8, BO))])]),
                    "no-event": pt(() => [Qe(e.$slots, "no-event", {}, () => [Xt(vt(r.texts.noEvent), 1)])]),
                    _: 2
                }, 1032, ["options", "edit-events", "data", "cell-width", "min-timestamp", "max-timestamp", "cell-splits"]))), 128))], 12, NO)], 10, AO)])], 2)]))]),
                _: 3
            }, 8, ["name", "appear"]), r.ready ? je("", !0) : (ae(), ge("div", UO, WO))]))], 10, mO)
        }]
    ]);
    const zO = {
        install: (e, n) => e.component("v-vue-cal", KO)
    };
    var qh = null;
    const GO = {
        mounted(e, n) {
            let t = function(i) {
                n.value !== n.oldValue && (clearTimeout(qh), qh = setTimeout(function() {
                    e.dispatchEvent(new Event("change"))
                }, n.value || 500))
            };
            e.addEventListener("input", t)
        }
    };
    
    window.app = Jc({
        data() {
            return {
                isMenuActive: false,     // Controla a expansão do sidebar
                isSmallScreen: window.innerWidth <= 1024,
                activeSubmenu: ""       // Controla qual submenu está aberto
            };
        },
        mounted() {
            this.handleResize();
            window.addEventListener("resize", this.handleResize);
            window.addEventListener("click", this.handleFocusOut);
        },
        beforeUnmount() {
            window.removeEventListener("resize", this.handleResize);
            window.removeEventListener("click", this.handleFocusOut);
        },
        methods: {
            toggleSidebar() {
                if (this.isSmallScreen) {
                    this.isMenuActive = !this.isMenuActive;
                }
            },
            handleResize() {
                this.isSmallScreen = window.innerWidth <= 1024;
                if (!this.isSmallScreen) {
                    // Em telas grandes, resetar estado se necessário
                    this.isMenuActive = false;
                    this.activeSubmenu = "";
                }
            },
            handleMouseOver() {
                // Em telas grandes, ao passar o mouse no sidebar, expande o sidebar principal
                if (!this.isSmallScreen) {
                    this.isMenuActive = true;
                }
            },
            handleMouseLeave() {
                // Em telas grandes, ao tirar o mouse do sidebar, recolhe o sidebar e fecha submenu
                if (!this.isSmallScreen) {
                    this.isMenuActive = false;
                    this.activeSubmenu = "";
                }
            },
            handleFocusOut(event) {
                const sidebar = this.$refs.sidebar;
                if (
                    sidebar &&
                    !sidebar.contains(event.target) &&
                    event.target.id !== "menu-icon"
                ) {
                    // Se clicar fora do sidebar, fecha tudo
                    this.isMenuActive = false;
                    this.activeSubmenu = "";
                }
            },
            onMenuItemClick(event, menuKey, hasChildren) {
                if (hasChildren === true) {
                    // Se o item tem submenu, impedir a navegação e alternar o submenu
                    event.preventDefault();
                    this.activeSubmenu = (this.activeSubmenu === menuKey) ? "" : menuKey;
                }
                // Caso não tenha submenu, segue navegação normal (se tiver URL)
            }
        }
    });
    
    [ZS, OD, AD, Z1, $C, FD, G1, zO].forEach(e => app.use(e));
    app.directive("debounce", GO);
    app;
    