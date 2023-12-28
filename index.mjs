// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-broadcast-shapes@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-maybe-broadcast-array@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape@v0.1.0-esm/index.mjs";function t(t){var e,n,d,i,m;for(i=t.length,e=[],m=0;m<i;m++)e.push(a(t[m],!1));if(null===(d=r(e)))throw new Error("invalid arguments. Input arrays must be broadcast compatible.");for(n=[],m=0;m<i;m++)n.push(s(t[m],d));return n}export{t as default};
//# sourceMappingURL=index.mjs.map
