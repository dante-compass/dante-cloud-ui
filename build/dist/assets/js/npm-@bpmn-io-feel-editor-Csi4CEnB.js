import{n as e}from"../rolldown-runtime-Bhmf7a9N.js";import{C as t,h as n,v as r,y as i}from"./npm-@bpmn-io-element-template-chooser-BwKADn9X.js";import{$ as a,A as o,B as s,C as c,D as l,E as u,F as d,G as f,H as p,I as m,J as h,K as ee,L as g,M as te,N as _,O as ne,P as re,Q as ie,R as ae,S as oe,T as se,U as v,V as y,W as ce,X as le,Y as b,Z as ue,_ as de,a as fe,b as x,c as pe,ct as me,d as he,dt as ge,et as S,f as _e,ft as ve,g as ye,h as be,i as xe,it as Se,j as Ce,l as we,lt as Te,m as Ee,mt as De,nt as Oe,o as ke,ot as Ae,p as je,pt as Me,q as Ne,r as Pe,rt as Fe,s as Ie,st as C,tt as Le,u as Re,ut as ze,v as Be,w as Ve,x as w,y as He,z as Ue}from"./npm-@bpmn-io-cm-theme-9l2e5W88.js";var T,We=e((()=>{We(),T=T===void 0?typeof self<`u`?self:typeof window<`u`?window:{}:T}));We();function Ge(){throw Error(`setTimeout has not been defined`)}function Ke(){throw Error(`clearTimeout has not been defined`)}var E=Ge,D=Ke;typeof T.setTimeout==`function`&&(E=setTimeout),typeof T.clearTimeout==`function`&&(D=clearTimeout);function qe(e){if(E===setTimeout)return setTimeout(e,0);if((E===Ge||!E)&&setTimeout)return E=setTimeout,setTimeout(e,0);try{return E(e,0)}catch{try{return E.call(null,e,0)}catch{return E.call(this,e,0)}}}function Je(e){if(D===clearTimeout)return clearTimeout(e);if((D===Ke||!D)&&clearTimeout)return D=clearTimeout,clearTimeout(e);try{return D(e)}catch{try{return D.call(null,e)}catch{return D.call(this,e)}}}var O=[],k=!1,A,Ye=-1;function Xe(){!k||!A||(k=!1,A.length?O=A.concat(O):Ye=-1,O.length&&Ze())}function Ze(){if(!k){var e=qe(Xe);k=!0;for(var t=O.length;t;){for(A=O,O=[];++Ye<t;)A&&A[Ye].run();Ye=-1,t=O.length}A=null,k=!1,Je(e)}}function Qe(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];O.push(new $e(e,t)),O.length===1&&!k&&qe(Ze)}function $e(e,t){this.fun=e,this.array=t}$e.prototype.run=function(){this.fun.apply(null,this.array)};var et=`browser`,tt=`browser`,nt={},rt=[],it={},at={},ot={};function j(){}var st=j,ct=j,lt=j,ut=j,dt=j,ft=j,pt=j;function mt(e){throw Error(`process.binding is not supported`)}function ht(){return`/`}function gt(e){throw Error(`process.chdir is not supported`)}function _t(){return 0}var M=T.performance||{},vt=M.now||M.mozNow||M.msNow||M.oNow||M.webkitNow||function(){return new Date().getTime()};function yt(e){var t=vt.call(M)*.001,n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n-=e[0],r-=e[1],r<0&&(n--,r+=1e9)),[n,r]}var bt=new Date;function xt(){return(new Date-bt)/1e3}var St={nextTick:Qe,title:et,browser:!0,env:nt,argv:rt,version:``,versions:it,on:st,addListener:ct,once:lt,off:ut,removeListener:dt,removeAllListeners:ft,emit:pt,binding:mt,cwd:ht,chdir:gt,umask:_t,hrtime:yt,platform:tt,release:at,config:ot,uptime:xt},N={legend:[1,`<fieldset>`,`</fieldset>`],tr:[2,`<table><tbody>`,`</tbody></table>`],col:[2,`<table><tbody></tbody><colgroup>`,`</colgroup></table>`],_default:[0,``,``]};N.td=N.th=[3,`<table><tbody><tr>`,`</tr></tbody></table>`],N.option=N.optgroup=[1,`<select multiple="multiple">`,`</select>`],N.thead=N.tbody=N.colgroup=N.caption=N.tfoot=[1,`<table>`,`</table>`],N.polyline=N.ellipse=N.polygon=N.circle=N.text=N.line=N.path=N.rect=N.g=[1,`<svg xmlns="http://www.w3.org/2000/svg" version="1.1">`,`</svg>`];function Ct(e,t=globalThis.document){if(typeof e!=`string`)throw TypeError(`String expected`);let n=/^<!--(.*?)-->$/s.exec(e);if(n)return t.createComment(n[1]);let r=/<([\w:]+)/.exec(e)?.[1];if(!r)return t.createTextNode(e);if(e=e.trim(),r===`body`){let n=t.createElement(`html`);n.innerHTML=e;let{lastChild:r}=n;return r.remove(),r}let[i,a,o]=Object.hasOwn(N,r)?N[r]:N._default,s=t.createElement(`div`);for(s.innerHTML=a+e+o;i--;)s=s.lastChild;if(s.firstChild===s.lastChild){let{firstChild:e}=s;return e.remove(),e}let c=t.createDocumentFragment();return c.append(...s.childNodes),c}i();function wt(e,t){return t.forEach(function(t){t&&typeof t!=`string`&&!Array.isArray(t)&&Object.keys(t).forEach(function(n){if(n!==`default`&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}})}),Object.freeze(e)}function Tt(e,...t){let r=e.style;return n(t,function(e){e&&n(e,function(e,t){r[t]=e})}),e}function Et(e,t,n){return arguments.length==2?e.getAttribute(t):n===null?e.removeAttribute(t):(e.setAttribute(t,n),e)}var Dt=Object.prototype.toString;function Ot(e){return new P(e)}function P(e){if(!e||!e.nodeType)throw Error(`A DOM element reference is required`);this.el=e,this.list=e.classList}P.prototype.add=function(e){return this.list.add(e),this},P.prototype.remove=function(e){return Dt.call(e)==`[object RegExp]`?this.removeMatching(e):(this.list.remove(e),this)},P.prototype.removeMatching=function(e){let t=this.array();for(let n=0;n<t.length;n++)e.test(t[n])&&this.remove(t[n]);return this},P.prototype.toggle=function(e,t){return(t===void 0||t!==this.list.toggle(e,t))&&this.list.toggle(e),this},P.prototype.array=function(){return Array.from(this.list)},P.prototype.has=P.prototype.contains=function(e){return this.list.contains(e)};function kt(e){for(var t;t=e.firstChild;)e.removeChild(t);return e}function At(e,t,n){var r=n?e:e.parentNode;return r&&typeof r.closest==`function`&&r.closest(t)||null}function jt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,`default`)?e.default:e}var Mt={},Nt;function Pt(){if(Nt)return Mt;Nt=1;var e,t,n;function r(){e=window.addEventListener?`addEventListener`:`attachEvent`,t=window.removeEventListener?`removeEventListener`:`detachEvent`,n=e===`addEventListener`?``:`on`}return Mt.bind=function(t,i,a,o){return e||r(),t[e](n+i,a,o||!1),a},Mt.unbind=function(e,i,a,o){return t||r(),e[t](n+i,a,o||!1),a},Mt}var Ft=Pt(),It=wt({__proto__:null,default:jt(Ft)},[Ft]),Lt=[`focus`,`blur`];function Rt(e,t,n,r,i){return Lt.indexOf(n)!==-1&&(i=!0),It.bind(e,n,function(n){n.delegateTarget=At(n.target||n.srcElement,t,!0),n.delegateTarget&&r.call(e,n)},i)}function zt(e,t,n,r){return Lt.indexOf(t)!==-1&&(r=!0),It.unbind(e,t,n,r)}var Bt={bind:Rt,unbind:zt};function Vt(e,t){return e&&typeof e.matches==`function`&&e.matches(t)||!1}function Ht(e,t){return t||=document,t.querySelector(e)}function Ut(e,t){return t||=document,t.querySelectorAll(e)}function Wt(e){e.parentNode&&e.parentNode.removeChild(e)}var Gt=class e{constructor(e,t,n,r,i,a,o,s,c,l=0,u){this.p=e,this.stack=t,this.state=n,this.reducePos=r,this.pos=i,this.score=a,this.buffer=o,this.bufferBase=s,this.curContext=c,this.lookAhead=l,this.parent=u}toString(){return`[${this.stack.filter((e,t)=>t%3==0).concat(this.state)}]@${this.pos}${this.score?`!`+this.score:``}`}static start(t,n,r=0){let i=t.parser.context;return new e(t,[],n,r,r,0,[],0,i?new Kt(i,i.start):null,0,null)}get context(){return this.curContext?this.curContext.context:null}pushState(e,t){this.stack.push(this.state,t,this.bufferBase+this.buffer.length),this.state=e}reduce(e){let t=e>>19,n=e&65535,{parser:r}=this.p,i=this.reducePos<this.pos-25&&this.setLookAhead(this.pos),a=r.dynamicPrecedence(n);if(a&&(this.score+=a),t==0){this.pushState(r.getGoto(this.state,n,!0),this.reducePos),n<r.minRepeatTerm&&this.storeNode(n,this.reducePos,this.reducePos,i?8:4,!0),this.reduceContext(n,this.reducePos);return}let o=this.stack.length-(t-1)*3-(e&262144?6:0),s=o?this.stack[o-2]:this.p.ranges[0].from,c=this.reducePos-s;c>=2e3&&!this.p.parser.nodeSet.types[n]?.isAnonymous&&(s==this.p.lastBigReductionStart?(this.p.bigReductionCount++,this.p.lastBigReductionSize=c):this.p.lastBigReductionSize<c&&(this.p.bigReductionCount=1,this.p.lastBigReductionStart=s,this.p.lastBigReductionSize=c));let l=o?this.stack[o-1]:0,u=this.bufferBase+this.buffer.length-l;if(n<r.minRepeatTerm||e&131072){let e=r.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(n,s,e,u+4,!0)}if(e&262144)this.state=this.stack[o];else{let e=this.stack[o-3];this.state=r.getGoto(e,n,!0)}for(;this.stack.length>o;)this.stack.pop();this.reduceContext(n,s)}storeNode(e,t,n,r=4,i=!1){if(e==0&&(!this.stack.length||this.stack[this.stack.length-1]<this.buffer.length+this.bufferBase)){let e=this,r=this.buffer.length;if(r==0&&e.parent&&(r=e.bufferBase-e.parent.bufferBase,e=e.parent),r>0&&e.buffer[r-4]==0&&e.buffer[r-1]>-1){if(t==n)return;if(e.buffer[r-2]>=t){e.buffer[r-2]=n;return}}}if(!i||this.pos==n)this.buffer.push(e,t,n,r);else{let i=this.buffer.length;if(i>0&&(this.buffer[i-4]!=0||this.buffer[i-1]<0)){let e=!1;for(let t=i;t>0&&this.buffer[t-2]>n;t-=4)if(this.buffer[t-1]>=0){e=!0;break}if(e)for(;i>0&&this.buffer[i-2]>n;)this.buffer[i]=this.buffer[i-4],this.buffer[i+1]=this.buffer[i-3],this.buffer[i+2]=this.buffer[i-2],this.buffer[i+3]=this.buffer[i-1],i-=4,r>4&&(r-=4)}this.buffer[i]=e,this.buffer[i+1]=t,this.buffer[i+2]=n,this.buffer[i+3]=r}}shift(e,t,n,r){if(e&131072)this.pushState(e&65535,this.pos);else if(e&262144)this.pos=r,this.shiftContext(t,n),t<=this.p.parser.maxNode&&this.buffer.push(t,n,r,4);else{let i=e,{parser:a}=this.p;this.pos=r;let o=a.stateFlag(i,1);!o&&(r>n||t<=a.maxNode)&&(this.reducePos=r),this.pushState(i,o?n:Math.min(n,this.reducePos)),this.shiftContext(t,n),t<=a.maxNode&&this.buffer.push(t,n,r,4)}}apply(e,t,n,r){e&65536?this.reduce(e):this.shift(e,t,n,r)}useNode(e,t){let n=this.p.reused.length-1;(n<0||this.p.reused[n]!=e)&&(this.p.reused.push(e),n++);let r=this.pos;this.reducePos=this.pos=r+e.length,this.pushState(t,r),this.buffer.push(n,r,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,e,this,this.p.stream.reset(this.pos-e.length)))}split(){let t=this,n=t.buffer.length;for(;n>0&&t.buffer[n-2]>t.reducePos;)n-=4;let r=t.buffer.slice(n),i=t.bufferBase+n;for(;t&&i==t.bufferBase;)t=t.parent;return new e(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,r,i,this.curContext,this.lookAhead,t)}recoverByDelete(e,t){let n=e<=this.p.parser.maxNode;n&&this.storeNode(e,this.pos,t,4),this.storeNode(0,this.pos,t,n?8:4),this.pos=this.reducePos=t,this.score-=190}canShift(e){for(let t=new qt(this);;){let n=this.p.parser.stateSlot(t.state,4)||this.p.parser.hasAction(t.state,e);if(n==0)return!1;if(!(n&65536))return!0;t.reduce(n)}}recoverByInsert(e){if(this.stack.length>=300)return[];let t=this.p.parser.nextStates(this.state);if(t.length>8||this.stack.length>=120){let n=[];for(let r=0,i;r<t.length;r+=2)(i=t[r+1])!=this.state&&this.p.parser.hasAction(i,e)&&n.push(t[r],i);if(this.stack.length<120)for(let e=0;n.length<8&&e<t.length;e+=2){let r=t[e+1];n.some((e,t)=>t&1&&e==r)||n.push(t[e],r)}t=n}let n=[];for(let e=0;e<t.length&&n.length<4;e+=2){let r=t[e+1];if(r==this.state)continue;let i=this.split();i.pushState(r,this.pos),i.storeNode(0,i.pos,i.pos,4,!0),i.shiftContext(t[e],this.pos),i.reducePos=this.pos,i.score-=200,n.push(i)}return n}forceReduce(){let{parser:e}=this.p,t=e.stateSlot(this.state,5);if(!(t&65536))return!1;if(!e.validAction(this.state,t)){let n=t>>19,r=t&65535,i=this.stack.length-n*3;if(i<0||e.getGoto(this.stack[i],r,!1)<0){let e=this.findForcedReduction();if(e==null)return!1;t=e}this.storeNode(0,this.pos,this.pos,4,!0),this.score-=100}return this.reducePos=this.pos,this.reduce(t),!0}findForcedReduction(){let{parser:e}=this.p,t=[],n=(r,i)=>{if(!t.includes(r))return t.push(r),e.allActions(r,t=>{if(!(t&393216))if(t&65536){let n=(t>>19)-i;if(n>1){let r=t&65535,i=this.stack.length-n*3;if(i>=0&&e.getGoto(this.stack[i],r,!1)>=0)return n<<19|65536|r}}else{let e=n(t,i+1);if(e!=null)return e}})};return n(this.state,0)}forceAll(){for(;!this.p.parser.stateFlag(this.state,2);)if(!this.forceReduce()){this.storeNode(0,this.pos,this.pos,4,!0);break}return this}get deadEnd(){if(this.stack.length!=3)return!1;let{parser:e}=this.p;return e.data[e.stateSlot(this.state,1)]==65535&&!e.stateSlot(this.state,4)}restart(){this.storeNode(0,this.pos,this.pos,4,!0),this.state=this.stack[0],this.stack.length=0}sameState(e){if(this.state!=e.state||this.stack.length!=e.stack.length)return!1;for(let t=0;t<this.stack.length;t+=3)if(this.stack[t]!=e.stack[t])return!1;return!0}get parser(){return this.p.parser}dialectEnabled(e){return this.p.parser.dialect.flags[e]}shiftContext(e,t){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,e,this,this.p.stream.reset(t)))}reduceContext(e,t){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,e,this,this.p.stream.reset(t)))}emitContext(){let e=this.buffer.length-1;(e<0||this.buffer[e]!=-3)&&this.buffer.push(this.curContext.hash,this.pos,this.pos,-3)}emitLookAhead(){let e=this.buffer.length-1;(e<0||this.buffer[e]!=-4)&&this.buffer.push(this.lookAhead,this.pos,this.pos,-4)}updateContext(e){if(e!=this.curContext.context){let t=new Kt(this.curContext.tracker,e);t.hash!=this.curContext.hash&&this.emitContext(),this.curContext=t}}setLookAhead(e){return e<=this.lookAhead?!1:(this.emitLookAhead(),this.lookAhead=e,!0)}close(){this.curContext&&this.curContext.tracker.strict&&this.emitContext(),this.lookAhead>0&&this.emitLookAhead()}},Kt=class{constructor(e,t){this.tracker=e,this.context=t,this.hash=e.strict?e.hash(t):0}},qt=class{constructor(e){this.start=e,this.state=e.state,this.stack=e.stack,this.base=this.stack.length}reduce(e){let t=e&65535,n=e>>19;n==0?(this.stack==this.start.stack&&(this.stack=this.stack.slice()),this.stack.push(this.state,0,0),this.base+=3):this.base-=(n-1)*3,this.state=this.start.p.parser.getGoto(this.stack[this.base-3],t,!0)}},Jt=class e{constructor(e,t,n){this.stack=e,this.pos=t,this.index=n,this.buffer=e.buffer,this.index==0&&this.maybeNext()}static create(t,n=t.bufferBase+t.buffer.length){return new e(t,n,n-t.bufferBase)}maybeNext(){let e=this.stack.parent;e!=null&&(this.index=this.stack.bufferBase-e.bufferBase,this.stack=e,this.buffer=e.buffer)}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}next(){this.index-=4,this.pos-=4,this.index==0&&this.maybeNext()}fork(){return new e(this.stack,this.pos,this.index)}};function Yt(e,t=Uint16Array){if(typeof e!=`string`)return e;let n=null;for(let r=0,i=0;r<e.length;){let a=0;for(;;){let t=e.charCodeAt(r++),n=!1;if(t==126){a=65535;break}t>=92&&t--,t>=34&&t--;let i=t-32;if(i>=46&&(i-=46,n=!0),a+=i,n)break;a*=46}n?n[i++]=a:n=new t(a)}return n}var Xt=class{constructor(){this.start=-1,this.value=-1,this.end=-1,this.extended=-1,this.lookAhead=0,this.mask=0,this.context=0}},Zt=new Xt,Qt=class{constructor(e,t){this.input=e,this.ranges=t,this.chunk=``,this.chunkOff=0,this.chunk2=``,this.chunk2Pos=0,this.next=-1,this.token=Zt,this.rangeIndex=0,this.pos=this.chunkPos=t[0].from,this.range=t[0],this.end=t[t.length-1].to,this.readNext()}resolveOffset(e,t){let n=this.range,r=this.rangeIndex,i=this.pos+e;for(;i<n.from;){if(!r)return null;let e=this.ranges[--r];i-=n.from-e.to,n=e}for(;t<0?i>n.to:i>=n.to;){if(r==this.ranges.length-1)return null;let e=this.ranges[++r];i+=e.from-n.to,n=e}return i}clipPos(e){if(e>=this.range.from&&e<this.range.to)return e;for(let t of this.ranges)if(t.to>e)return Math.max(e,t.from);return this.end}peek(e){let t=this.chunkOff+e,n,r;if(t>=0&&t<this.chunk.length)n=this.pos+e,r=this.chunk.charCodeAt(t);else{let t=this.resolveOffset(e,1);if(t==null)return-1;if(n=t,n>=this.chunk2Pos&&n<this.chunk2Pos+this.chunk2.length)r=this.chunk2.charCodeAt(n-this.chunk2Pos);else{let e=this.rangeIndex,t=this.range;for(;t.to<=n;)t=this.ranges[++e];this.chunk2=this.input.chunk(this.chunk2Pos=n),n+this.chunk2.length>t.to&&(this.chunk2=this.chunk2.slice(0,t.to-n)),r=this.chunk2.charCodeAt(0)}}return n>=this.token.lookAhead&&(this.token.lookAhead=n+1),r}acceptToken(e,t=0){let n=t?this.resolveOffset(t,-1):this.pos;if(n==null||n<this.token.start)throw RangeError(`Token end out of bounds`);this.token.value=e,this.token.end=n}acceptTokenTo(e,t){this.token.value=e,this.token.end=t}getChunk(){if(this.pos>=this.chunk2Pos&&this.pos<this.chunk2Pos+this.chunk2.length){let{chunk:e,chunkPos:t}=this;this.chunk=this.chunk2,this.chunkPos=this.chunk2Pos,this.chunk2=e,this.chunk2Pos=t,this.chunkOff=this.pos-this.chunkPos}else{this.chunk2=this.chunk,this.chunk2Pos=this.chunkPos;let e=this.input.chunk(this.pos);this.chunk=this.pos+e.length>this.range.to?e.slice(0,this.range.to-this.pos):e,this.chunkPos=this.pos,this.chunkOff=0}}readNext(){return this.chunkOff>=this.chunk.length&&(this.getChunk(),this.chunkOff==this.chunk.length)?this.next=-1:this.next=this.chunk.charCodeAt(this.chunkOff)}advance(e=1){for(this.chunkOff+=e;this.pos+e>=this.range.to;){if(this.rangeIndex==this.ranges.length-1)return this.setDone();e-=this.range.to-this.pos,this.range=this.ranges[++this.rangeIndex],this.pos=this.range.from}return this.pos+=e,this.pos>=this.token.lookAhead&&(this.token.lookAhead=this.pos+1),this.readNext()}setDone(){return this.pos=this.chunkPos=this.end,this.range=this.ranges[this.rangeIndex=this.ranges.length-1],this.chunk=``,this.next=-1}reset(e,t){if(t?(this.token=t,t.start=e,t.lookAhead=e+1,t.value=t.extended=-1):this.token=Zt,this.pos!=e){if(this.pos=e,e==this.end)return this.setDone(),this;for(;e<this.range.from;)this.range=this.ranges[--this.rangeIndex];for(;e>=this.range.to;)this.range=this.ranges[++this.rangeIndex];e>=this.chunkPos&&e<this.chunkPos+this.chunk.length?this.chunkOff=e-this.chunkPos:(this.chunk=``,this.chunkOff=0),this.readNext()}return this}read(e,t){if(e>=this.chunkPos&&t<=this.chunkPos+this.chunk.length)return this.chunk.slice(e-this.chunkPos,t-this.chunkPos);if(e>=this.chunk2Pos&&t<=this.chunk2Pos+this.chunk2.length)return this.chunk2.slice(e-this.chunk2Pos,t-this.chunk2Pos);if(e>=this.range.from&&t<=this.range.to)return this.input.read(e,t);let n=``;for(let r of this.ranges){if(r.from>=t)break;r.to>e&&(n+=this.input.read(Math.max(r.from,e),Math.min(r.to,t)))}return n}},$t=class{constructor(e,t){this.data=e,this.id=t}token(e,t){let{parser:n}=t.p;nn(this.data,e,t,this.id,n.data,n.tokenPrecTable)}};$t.prototype.contextual=$t.prototype.fallback=$t.prototype.extend=!1;var en=class{constructor(e,t,n){this.precTable=t,this.elseToken=n,this.data=typeof e==`string`?Yt(e):e}token(e,t){let n=e.pos,r=0;for(;;){let n=e.next<0,i=e.resolveOffset(1,1);if(nn(this.data,e,t,0,this.data,this.precTable),e.token.value>-1)break;if(this.elseToken==null)return;if(n||r++,i==null)break;e.reset(i,e.token)}r&&(e.reset(n,e.token),e.acceptToken(this.elseToken,r))}};en.prototype.contextual=$t.prototype.fallback=$t.prototype.extend=!1;var tn=class{constructor(e,t={}){this.token=e,this.contextual=!!t.contextual,this.fallback=!!t.fallback,this.extend=!!t.extend}};function nn(e,t,n,r,i,a){let o=0,s=1<<r,{dialect:c}=n.p.parser;scan:for(;(s&e[o])!=0;){let n=e[o+1];for(let r=o+3;r<n;r+=2)if((e[r+1]&s)>0){let n=e[r];if(c.allows(n)&&(t.token.value==-1||t.token.value==n||an(n,t.token.value,i,a))){t.acceptToken(n);break}}let r=t.next,l=0,u=e[o+2];if(t.next<0&&u>l&&e[n+u*3-3]==65535){o=e[n+u*3-1];continue scan}for(;l<u;){let i=l+u>>1,a=n+i+(i<<1),s=e[a],c=e[a+1]||65536;if(r<s)u=i;else if(r>=c)l=i+1;else{o=e[a+2],t.advance();continue scan}}break}}function rn(e,t,n){for(let r=t,i;(i=e[r])!=65535;r++)if(i==n)return r-t;return-1}function an(e,t,n,r){let i=rn(n,r,t);return i<0||rn(n,r,e)<i}var F=St!==void 0&&/\bparse\b/.test({VITE_OPEN:`false`,VITE_PORT:`3000`,VITE_API_URL:`http://192.168.101.10:8847/`,VITE_APPLICATION_NAME:`Herodotus Cloud`,VITE_BASE_URL:`/`,VITE_CAPTCHA:`HUTOOL_LINE`,VITE_MULTI_TENANCY_ID:``,VITE_OAUTH2_AUTHORIZE_URI:``,VITE_OAUTH2_CLIENT_ID:`14a9cf797931430896ad13a6b1855611`,VITE_OAUTH2_CLIENT_SECRET:`a05fe1fc50ed42a4990c6c6fc4bec398`,VITE_OAUTH2_REDIRECT_URI:`http://192.168.101.10:3000/authorization-code`,VITE_PROJECT:`herodotus`,VITE_SECRET_KEY:`8b026adcaa59468fd47ef361c623ce10`,VITE_USE_CRYPTO:`true`,VITE_USE_DISABLE_DEVTOOL:`false`,VITE_USE_OIDC:`true`,VITE_USE_WEBSOCKET:`true`,VITE_WS_URL:`ws://192.168.101.10:8847/`}.LOG),on=null;function sn(e,t,n){let r=e.cursor(Te.IncludeAnonymous);for(r.moveTo(t);;)if(!(n<0?r.childBefore(t):r.childAfter(t)))for(;;){if((n<0?r.to<t:r.from>t)&&!r.type.isError)return n<0?Math.max(0,Math.min(r.to-1,t-25)):Math.min(e.length,Math.max(r.from+1,t+25));if(n<0?r.prevSibling():r.nextSibling())break;if(!r.parent())return n<0?0:e.length}}var cn=class{constructor(e,t){this.fragments=e,this.nodeSet=t,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}nextFragment(){let e=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(e){for(this.safeFrom=e.openStart?sn(e.tree,e.from+e.offset,1)-e.offset:e.from,this.safeTo=e.openEnd?sn(e.tree,e.to+e.offset,-1)-e.offset:e.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop();this.trees.push(e.tree),this.start.push(-e.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}nodeAt(e){if(e<this.nextStart)return null;for(;this.fragment&&this.safeTo<=e;)this.nextFragment();if(!this.fragment)return null;for(;;){let t=this.trees.length-1;if(t<0)return this.nextFragment(),null;let n=this.trees[t],r=this.index[t];if(r==n.children.length){this.trees.pop(),this.start.pop(),this.index.pop();continue}let i=n.children[r],a=this.start[t]+n.positions[r];if(a>e)return this.nextStart=a,null;if(i instanceof De){if(a==e){if(a<this.safeFrom)return null;let e=a+i.length;if(e<=this.safeTo){let t=i.prop(ze.lookAhead);if(!t||e+t<this.fragment.to)return i}}this.index[t]++,a+i.length>=Math.max(this.safeFrom,e)&&(this.trees.push(i),this.start.push(a),this.index.push(0))}else this.index[t]++,this.nextStart=a+i.length}}},ln=class{constructor(e,t){this.stream=t,this.tokens=[],this.mainToken=null,this.actions=[],this.tokens=e.tokenizers.map(e=>new Xt)}getActions(e){let t=0,n=null,{parser:r}=e.p,{tokenizers:i}=r,a=r.stateSlot(e.state,3),o=e.curContext?e.curContext.hash:0,s=0;for(let r=0;r<i.length;r++){if(!(1<<r&a))continue;let c=i[r],l=this.tokens[r];if(!(n&&!c.fallback)&&((c.contextual||l.start!=e.pos||l.mask!=a||l.context!=o)&&(this.updateCachedToken(l,c,e),l.mask=a,l.context=o),l.lookAhead>l.end+25&&(s=Math.max(l.lookAhead,s)),l.value!=0)){let r=t;if(l.extended>-1&&(t=this.addActions(e,l.extended,l.end,t)),t=this.addActions(e,l.value,l.end,t),!c.extend&&(n=l,t>r))break}}for(;this.actions.length>t;)this.actions.pop();return s&&e.setLookAhead(s),!n&&e.pos==this.stream.end&&(n=new Xt,n.value=e.p.parser.eofTerm,n.start=n.end=e.pos,t=this.addActions(e,n.value,n.end,t)),this.mainToken=n,this.actions}getMainToken(e){if(this.mainToken)return this.mainToken;let t=new Xt,{pos:n,p:r}=e;return t.start=n,t.end=Math.min(n+1,r.stream.end),t.value=n==r.stream.end?r.parser.eofTerm:0,t}updateCachedToken(e,t,n){let r=this.stream.clipPos(n.pos);if(t.token(this.stream.reset(r,e),n),e.value>-1){let{parser:t}=n.p;for(let r=0;r<t.specialized.length;r++)if(t.specialized[r]==e.value){let i=t.specializers[r](this.stream.read(e.start,e.end),n);if(i>=0&&n.p.parser.dialect.allows(i>>1)){i&1?e.extended=i>>1:e.value=i>>1;break}}}else e.value=0,e.end=this.stream.clipPos(r+1)}putAction(e,t,n,r){for(let t=0;t<r;t+=3)if(this.actions[t]==e)return r;return this.actions[r++]=e,this.actions[r++]=t,this.actions[r++]=n,r}addActions(e,t,n,r){let{state:i}=e,{parser:a}=e.p,{data:o}=a;for(let e=0;e<2;e++)for(let s=a.stateSlot(i,e?2:1);;s+=3){if(o[s]==65535)if(o[s+1]==1)s=I(o,s+2);else{r==0&&o[s+1]==2&&(r=this.putAction(I(o,s+2),t,n,r));break}o[s]==t&&(r=this.putAction(I(o,s+1),t,n,r))}return r}},un=class{constructor(e,t,n,r){this.parser=e,this.input=t,this.ranges=r,this.recovering=0,this.nextStackID=9812,this.minStackPos=0,this.reused=[],this.stoppedAt=null,this.lastBigReductionStart=-1,this.lastBigReductionSize=0,this.bigReductionCount=0,this.stream=new Qt(t,r),this.tokens=new ln(e,this.stream),this.topTerm=e.top[1];let{from:i}=r[0];this.stacks=[Gt.start(this,e.top[0],i)],this.fragments=n.length&&this.stream.end-i>e.bufferLength*4?new cn(n,e.nodeSet):null}get parsedPos(){return this.minStackPos}advance(){let e=this.stacks,t=this.minStackPos,n=this.stacks=[],r,i;if(this.bigReductionCount>300&&e.length==1){let[t]=e;for(;t.forceReduce()&&t.stack.length&&t.stack[t.stack.length-2]>=this.lastBigReductionStart;);this.bigReductionCount=this.lastBigReductionSize=0}for(let a=0;a<e.length;a++){let o=e[a];for(;;){if(this.tokens.mainToken=null,o.pos>t)n.push(o);else if(this.advanceStack(o,n,e))continue;else{r||(r=[],i=[]),r.push(o);let e=this.tokens.getMainToken(o);i.push(e.value,e.end)}break}}if(!n.length){let e=r&&gn(r);if(e)return F&&console.log(`Finish with `+this.stackID(e)),this.stackToTree(e);if(this.parser.strict)throw F&&r&&console.log(`Stuck with token `+(this.tokens.mainToken?this.parser.getName(this.tokens.mainToken.value):`none`)),SyntaxError(`No parse at `+t);this.recovering||=5}if(this.recovering&&r){let e=this.stoppedAt!=null&&r[0].pos>this.stoppedAt?r[0]:this.runRecovery(r,i,n);if(e)return F&&console.log(`Force-finish `+this.stackID(e)),this.stackToTree(e.forceAll())}if(this.recovering){let e=this.recovering==1?1:this.recovering*3;if(n.length>e)for(n.sort((e,t)=>t.score-e.score);n.length>e;)n.pop();n.some(e=>e.reducePos>t)&&this.recovering--}else if(n.length>1){outer:for(let e=0;e<n.length-1;e++){let t=n[e];for(let r=e+1;r<n.length;r++){let i=n[r];if(t.sameState(i)||t.buffer.length>500&&i.buffer.length>500)if((t.score-i.score||t.buffer.length-i.buffer.length)>0)n.splice(r--,1);else{n.splice(e--,1);continue outer}}}n.length>12&&(n.sort((e,t)=>t.score-e.score),n.splice(12,n.length-12))}this.minStackPos=n[0].pos;for(let e=1;e<n.length;e++)n[e].pos<this.minStackPos&&(this.minStackPos=n[e].pos);return null}stopAt(e){if(this.stoppedAt!=null&&this.stoppedAt<e)throw RangeError(`Can't move stoppedAt forward`);this.stoppedAt=e}advanceStack(e,t,n){let r=e.pos,{parser:i}=this,a=F?this.stackID(e)+` -> `:``;if(this.stoppedAt!=null&&r>this.stoppedAt)return e.forceReduce()?e:null;if(this.fragments){let t=e.curContext&&e.curContext.tracker.strict,n=t?e.curContext.hash:0;for(let o=this.fragments.nodeAt(r);o;){let r=this.parser.nodeSet.types[o.type.id]==o.type?i.getGoto(e.state,o.type.id):-1;if(r>-1&&o.length&&(!t||(o.prop(ze.contextHash)||0)==n))return e.useNode(o,r),F&&console.log(a+this.stackID(e)+` (via reuse of ${i.getName(o.type.id)})`),!0;if(!(o instanceof De)||o.children.length==0||o.positions[0]>0)break;let s=o.children[0];if(s instanceof De&&o.positions[0]==0)o=s;else break}}let o=i.stateSlot(e.state,4);if(o>0)return e.reduce(o),F&&console.log(a+this.stackID(e)+` (via always-reduce ${i.getName(o&65535)})`),!0;if(e.stack.length>=8400)for(;e.stack.length>6e3&&e.forceReduce(););let s=this.tokens.getActions(e);for(let o=0;o<s.length;){let c=s[o++],l=s[o++],u=s[o++],d=o==s.length||!n,f=d?e:e.split(),p=this.tokens.mainToken;if(f.apply(c,l,p?p.start:f.pos,u),F&&console.log(a+this.stackID(f)+` (via ${c&65536?`reduce of ${i.getName(c&65535)}`:`shift`} for ${i.getName(l)} @ ${r}${f==e?``:`, split`})`),d)return!0;f.pos>r?t.push(f):n.push(f)}return!1}advanceFully(e,t){let n=e.pos;for(;;){if(!this.advanceStack(e,null,null))return!1;if(e.pos>n)return dn(e,t),!0}}runRecovery(e,t,n){let r=null,i=!1;for(let a=0;a<e.length;a++){let o=e[a],s=t[a<<1],c=t[(a<<1)+1],l=F?this.stackID(o)+` -> `:``;if(o.deadEnd&&(i||(i=!0,o.restart(),F&&console.log(l+this.stackID(o)+` (restarted)`),this.advanceFully(o,n))))continue;let u=o.split(),d=l;for(let e=0;e<10&&u.forceReduce()&&(F&&console.log(d+this.stackID(u)+` (via force-reduce)`),!this.advanceFully(u,n));e++)F&&(d=this.stackID(u)+` -> `);for(let e of o.recoverByInsert(s))F&&console.log(l+this.stackID(e)+` (via recover-insert)`),this.advanceFully(e,n);this.stream.end>o.pos?(c==o.pos&&(c++,s=0),o.recoverByDelete(s,c),F&&console.log(l+this.stackID(o)+` (via recover-delete ${this.parser.getName(s)})`),dn(o,n)):(!r||r.score<u.score)&&(r=u)}return r}stackToTree(e){return e.close(),De.build({buffer:Jt.create(e),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.ranges[0].from,length:e.pos-this.ranges[0].from,minRepeatType:this.parser.minRepeatTerm})}stackID(e){let t=(on||=new WeakMap).get(e);return t||on.set(e,t=String.fromCodePoint(this.nextStackID++)),t+e}};function dn(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(r.pos==e.pos&&r.sameState(e)){t[n].score<e.score&&(t[n]=e);return}}t.push(e)}var fn=class{constructor(e,t,n){this.source=e,this.flags=t,this.disabled=n}allows(e){return!this.disabled||this.disabled[e]==0}},pn=e=>e,mn=class{constructor(e){this.start=e.start,this.shift=e.shift||pn,this.reduce=e.reduce||pn,this.reuse=e.reuse||pn,this.hash=e.hash||(()=>0),this.strict=e.strict!==!1}},hn=class e extends Me{constructor(e){if(super(),this.wrappers=[],e.version!=14)throw RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);let t=e.nodeNames.split(` `);this.minRepeatTerm=t.length;for(let n=0;n<e.repeatNodeCount;n++)t.push(``);let n=Object.keys(e.topRules).map(t=>e.topRules[t][1]),r=[];for(let e=0;e<t.length;e++)r.push([]);function i(e,t,n){r[e].push([t,t.deserialize(String(n))])}if(e.nodeProps)for(let t of e.nodeProps){let e=t[0];typeof e==`string`&&(e=ze[e]);for(let n=1;n<t.length;){let r=t[n++];if(r>=0)i(r,e,t[n++]);else{let a=t[n+-r];for(let o=-r;o>0;o--)i(t[n++],e,a);n++}}}this.nodeSet=new ge(t.map((t,i)=>ve.define({name:i>=this.minRepeatTerm?void 0:t,id:i,props:r[i],top:n.indexOf(i)>-1,error:i==0,skipped:e.skippedNodes&&e.skippedNodes.indexOf(i)>-1}))),e.propSources&&(this.nodeSet=this.nodeSet.extend(...e.propSources)),this.strict=!1,this.bufferLength=me;let a=Yt(e.tokenData);this.context=e.context,this.specializerSpecs=e.specialized||[],this.specialized=new Uint16Array(this.specializerSpecs.length);for(let e=0;e<this.specializerSpecs.length;e++)this.specialized[e]=this.specializerSpecs[e].term;this.specializers=this.specializerSpecs.map(_n),this.states=Yt(e.states,Uint32Array),this.data=Yt(e.stateData),this.goto=Yt(e.goto),this.maxTerm=e.maxTerm,this.tokenizers=e.tokenizers.map(e=>typeof e==`number`?new $t(a,e):e),this.topRules=e.topRules,this.dialects=e.dialects||{},this.dynamicPrecedences=e.dynamicPrecedences||null,this.tokenPrecTable=e.tokenPrec,this.termNames=e.termNames||null,this.maxNode=this.nodeSet.types.length-1,this.dialect=this.parseDialect(),this.top=this.topRules[Object.keys(this.topRules)[0]]}createParse(e,t,n){let r=new un(this,e,t,n);for(let i of this.wrappers)r=i(r,e,t,n);return r}getGoto(e,t,n=!1){let r=this.goto;if(t>=r[0])return-1;for(let i=r[t+1];;){let t=r[i++],a=t&1,o=r[i++];if(a&&n)return o;for(let n=i+(t>>1);i<n;i++)if(r[i]==e)return o;if(a)return-1}}hasAction(e,t){let n=this.data;for(let r=0;r<2;r++)for(let i=this.stateSlot(e,r?2:1),a;;i+=3){if((a=n[i])==65535)if(n[i+1]==1)a=n[i=I(n,i+2)];else if(n[i+1]==2)return I(n,i+2);else break;if(a==t||a==0)return I(n,i+1)}return 0}stateSlot(e,t){return this.states[e*6+t]}stateFlag(e,t){return(this.stateSlot(e,0)&t)>0}validAction(e,t){return!!this.allActions(e,e=>e==t?!0:null)}allActions(e,t){let n=this.stateSlot(e,4),r=n?t(n):void 0;for(let n=this.stateSlot(e,1);r==null;n+=3){if(this.data[n]==65535)if(this.data[n+1]==1)n=I(this.data,n+2);else break;r=t(I(this.data,n+1))}return r}nextStates(e){let t=[];for(let n=this.stateSlot(e,1);;n+=3){if(this.data[n]==65535)if(this.data[n+1]==1)n=I(this.data,n+2);else break;if(!(this.data[n+2]&1)){let e=this.data[n+1];t.some((t,n)=>n&1&&t==e)||t.push(this.data[n],e)}}return t}configure(t){let n=Object.assign(Object.create(e.prototype),this);if(t.props&&(n.nodeSet=this.nodeSet.extend(...t.props)),t.top){let e=this.topRules[t.top];if(!e)throw RangeError(`Invalid top rule name ${t.top}`);n.top=e}return t.tokenizers&&(n.tokenizers=this.tokenizers.map(e=>{let n=t.tokenizers.find(t=>t.from==e);return n?n.to:e})),t.specializers&&(n.specializers=this.specializers.slice(),n.specializerSpecs=this.specializerSpecs.map((e,r)=>{let i=t.specializers.find(t=>t.from==e.external);if(!i)return e;let a=Object.assign(Object.assign({},e),{external:i.to});return n.specializers[r]=_n(a),a})),t.contextTracker&&(n.context=t.contextTracker),t.dialect&&(n.dialect=this.parseDialect(t.dialect)),t.strict!=null&&(n.strict=t.strict),t.wrap&&(n.wrappers=n.wrappers.concat(t.wrap)),t.bufferLength!=null&&(n.bufferLength=t.bufferLength),n}hasWrappers(){return this.wrappers.length>0}getName(e){return this.termNames?this.termNames[e]:String(e<=this.maxNode&&this.nodeSet.types[e].name||e)}get eofTerm(){return this.maxNode+1}get topNode(){return this.nodeSet.types[this.top[1]]}dynamicPrecedence(e){let t=this.dynamicPrecedences;return t==null?0:t[e]||0}parseDialect(e){let t=Object.keys(this.dialects),n=t.map(()=>!1);if(e)for(let r of e.split(` `)){let e=t.indexOf(r);e>=0&&(n[e]=!0)}let r=null;for(let e=0;e<t.length;e++)if(!n[e])for(let n=this.dialects[t[e]],i;(i=this.data[n++])!=65535;)(r||=new Uint8Array(this.maxTerm+1))[i]=1;return new fn(e,n,r)}static deserialize(t){return new e(t)}};function I(e,t){return e[t]|e[t+1]<<16}function gn(e){let t=null;for(let n of e){let e=n.p.stoppedAt;(n.pos==n.p.stream.end||e!=null&&n.pos>e)&&n.p.parser.stateFlag(n.state,2)&&(!t||t.score<n.score)&&(t=n)}return t}function _n(e){if(e.external){let t=e.extend?1:0;return(n,r)=>e.external(n,r)<<1|t}return e.get}i();var vn=121,yn=122,bn=123,xn=124,Sn=128,Cn=4,wn=131,Tn=7,En=8,Dn=9,On=10,kn=139,An=19,jn=140,Mn=23,Nn=141,Pn=27,Fn=37,In=41,Ln=144,Rn=145,zn=146,Bn=147,Vn=47,Hn=68,Un=153,Wn=70,Gn=154,Kn=72,qn=155,Jn=76,Yn=160,Xn=79,Zn=80,Qn=81,$n=167,er=89,tr=90,nr=169,rr=97,ir=171,ar=98,or=100,sr=101,cr=St!==void 0&&/\bfparse(:dbg)?\b/.test({VITE_OPEN:`false`,VITE_PORT:`3000`,VITE_API_URL:`http://192.168.101.10:8847/`,VITE_APPLICATION_NAME:`Herodotus Cloud`,VITE_BASE_URL:`/`,VITE_CAPTCHA:`HUTOOL_LINE`,VITE_MULTI_TENANCY_ID:``,VITE_OAUTH2_AUTHORIZE_URI:``,VITE_OAUTH2_CLIENT_ID:`14a9cf797931430896ad13a6b1855611`,VITE_OAUTH2_CLIENT_SECRET:`a05fe1fc50ed42a4990c6c6fc4bec398`,VITE_OAUTH2_REDIRECT_URI:`http://192.168.101.10:3000/authorization-code`,VITE_PROJECT:`herodotus`,VITE_SECRET_KEY:`8b026adcaa59468fd47ef361c623ce10`,VITE_USE_CRYPTO:`true`,VITE_USE_DISABLE_DEVTOOL:`false`,VITE_USE_OIDC:`true`,VITE_USE_WEBSOCKET:`true`,VITE_WS_URL:`ws://192.168.101.10:8847/`}.LOG),lr=St!==void 0&&/\bfparse:dbg\b/.test({VITE_OPEN:`false`,VITE_PORT:`3000`,VITE_API_URL:`http://192.168.101.10:8847/`,VITE_APPLICATION_NAME:`Herodotus Cloud`,VITE_BASE_URL:`/`,VITE_CAPTCHA:`HUTOOL_LINE`,VITE_MULTI_TENANCY_ID:``,VITE_OAUTH2_AUTHORIZE_URI:``,VITE_OAUTH2_CLIENT_ID:`14a9cf797931430896ad13a6b1855611`,VITE_OAUTH2_CLIENT_SECRET:`a05fe1fc50ed42a4990c6c6fc4bec398`,VITE_OAUTH2_REDIRECT_URI:`http://192.168.101.10:3000/authorization-code`,VITE_PROJECT:`herodotus`,VITE_SECRET_KEY:`8b026adcaa59468fd47ef361c623ce10`,VITE_USE_CRYPTO:`true`,VITE_USE_DISABLE_DEVTOOL:`false`,VITE_USE_OIDC:`true`,VITE_USE_WEBSOCKET:`true`,VITE_WS_URL:`ws://192.168.101.10:8847/`}.LOG),L=St!==void 0&&/\bcontext\b/.test({VITE_OPEN:`false`,VITE_PORT:`3000`,VITE_API_URL:`http://192.168.101.10:8847/`,VITE_APPLICATION_NAME:`Herodotus Cloud`,VITE_BASE_URL:`/`,VITE_CAPTCHA:`HUTOOL_LINE`,VITE_MULTI_TENANCY_ID:``,VITE_OAUTH2_AUTHORIZE_URI:``,VITE_OAUTH2_CLIENT_ID:`14a9cf797931430896ad13a6b1855611`,VITE_OAUTH2_CLIENT_SECRET:`a05fe1fc50ed42a4990c6c6fc4bec398`,VITE_OAUTH2_REDIRECT_URI:`http://192.168.101.10:3000/authorization-code`,VITE_PROJECT:`herodotus`,VITE_SECRET_KEY:`8b026adcaa59468fd47ef361c623ce10`,VITE_USE_CRYPTO:`true`,VITE_USE_DISABLE_DEVTOOL:`false`,VITE_USE_OIDC:`true`,VITE_USE_WEBSOCKET:`true`,VITE_WS_URL:`ws://192.168.101.10:8847/`}.LOG),ur=[9,11,12,32,133,160,5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8232,8233,8239,8287,12288],dr=mr(`
\r`),fr=42,pr=mr(`'./-+*^`);function mr(e){return Array.from(e).map(e=>e.charCodeAt(0))}function hr(e){return e===63||e>=65&&e<=90||e===95||e>=97&&e<=122||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=767||e>=880&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=55296&&e<=56319||e>=56320&&e<=57343}function gr(e){return pr.includes(e)}function _r(e){return e>=48&&e<=57||e===183||e>=768&&e<=879||e>=8255&&e<=8256}function vr(e){return ur.includes(e)}function yr(e,t){return t.concat(e.split(/\n/g).join(`
`+t))}function br(e,t=0){let n=e.peek(t);return n===fr&&e.peek(t+1)===fr?{offset:2,token:`**`}:gr(n)?{offset:1,token:String.fromCharCode(n)}:null}function xr(e,t=0,n=!1){for(let r=!1,i=[],a=0;;a++){let o=e.peek(t+a);if(hr(o)||(r||n)&&_r(o))r||=!0,i.push(o);else return i.length?{token:String.fromCharCode(...i),offset:a}:null}}function Sr(e,t){for(let n=!1,r=0;;r++)if(vr(e.peek(t+r)))n||=!0;else return n?{token:` `,offset:r}:null}function Cr(e,t){let{keys:n,prefixes:r}=t.contextCache(),i=t.tokens;for(let t=0,a=[],o=null;;){let s=i.length+a.length>0,c=a.length>0,l=xr(e,t,s)||s&&br(e,t)||c&&Sr(e,t);if(!l)return o;let{token:u,offset:d}=l;if(t+=d,u===` `)continue;a=[...a,u];let f=[...i,...a].join(` `);if(n.has(f)){let e=a[0];o={token:e,offset:e.length,term:bn}}if(!r.has(f)){if(Mr.some(e=>e===f)){let e=a[0];o={token:e,offset:e.length,term:yn}}if(!Mr.some(e=>e.startsWith(f)))return o}}}var wr={[yn]:`identifier`,[bn]:`nameIdentifier`},Tr=new tn((e,t)=>{lr&&console.log(`%s: T <identifier | nameIdentifier>`,e.pos);let n=Cr(e,t.context),r=t.context.tokens,i=n||xr(e,0,r.length>0);i&&(e.advance(i.offset),e.acceptToken(n?n.term:yn),cr&&console.log(`%s: MATCH <%s> <%s>`,e.pos,n?wr[n.term]:`identifier`,i.token))},{contextual:!0}),Er=new tn((e,t)=>{lr&&console.log(`%s: T <propertyIdentifier>`,e.pos);let n=t.context.tokens,r=xr(e,0,n.length>0);r&&(e.advance(r.offset),e.acceptToken(vn),cr&&console.log(`%s: MATCH <propertyIdentifier> <%s>`,e.pos,r.token))}),Dr=new tn((e,t)=>{lr&&console.log(`%s: T <insertSemi>`,e.pos);let n,r=!1;for(n=0;;n++){let t=e.peek(n);if(!ur.includes(t)){dr.includes(t)&&(r=!0);break}}if(r){let t=xr(e,n+1);if(Sr(e,n+1)||t&&/^(then|else|return|satisfies)$/.test(t.token))return;cr&&console.log(`%s: MATCH <insertSemi>`,e.pos),e.acceptToken(xn)}}),Or={[qn]:`FunctionInvocation`,[Gn]:`FilterExpression`,[Un]:`PathExpression`},kr={[ir]:`Context`,[nr]:`FunctionDefinition`,[wn]:`ForExpression`,[$n]:`List`,[jn]:`IfExpression`,[Nn]:`QuantifiedExpression`},Ar={[rr]:`Context`,[tr]:`FunctionDefinition`,[Cn]:`ForExpression`,[er]:`List`,[An]:`IfExpression`,[Mn]:`QuantifiedExpression`,[Hn]:`PathExpression`,[Kn]:`FunctionInvocation`,[Wn]:`FilterExpression`,[In]:`ArithmeticExpression`},jr=class e{constructor(e){this.fn=e}get(e){return this.fn(e)}static of(t){return new e(t)}},Mr=Object.keys({"date and time":1,date:1,time:1,duration:1});function Nr(e){let t=[];for(let n=1;n<=e.length;n++)t.push(e.substring(0,n));return t}function Pr(e,t){let n=zr(e),r=Nr(n);t.keys.add(n);for(let e of r)t.prefixes.add(e);return t.originalMap.set(n,e),t}function Fr(e){let t=Ir();for(let n of e.getKeys())Pr(n,t);return t}function Ir(e){return{keys:new Set(e?.keys),prefixes:new Set(e?.prefixes),originalMap:new Map(e?.originalMap)}}var Lr=class{constructor(e={}){this.value=e}getKeys(){return Object.keys(this.value)}get(e){let t=this.value[e],n=this.constructor;return n.isAtomic(t)?t:n.of(t)}set(e,t){let n=this.constructor;return new n({...this.value,[e]:t})}merge(e){let t=this.constructor;return new t(t.__merge(this.value,e))}static isAtomic(e){return e==null||e instanceof this||e instanceof jr||typeof e!=`object`}static of(...e){let t=e.reduce((e,t)=>this.__merge(e,t),{});return new this(t)}static __unwrap(e){return e?e instanceof this?e.value:this.isAtomic(e)?{}:e:{}}static __merge(e,t){let n=Object.assign({},this.__unwrap(e));for(let[e,i]of Object.entries(this.__unwrap(t))){if(i instanceof jr){n[e]=i;continue}if(r(n,e)){n[e]=this.__merge(n[e],i);continue}n[e]=i}return n}},Rr=class e{constructor({name:e=`Expressions`,tokens:t=[],children:n=[],parent:r=null,context:i,value:a,raw:o,__cache:s}){this.name=e,this.tokens=t,this.children=n,this.parent=r,this.context=i,this.value=a,this.raw=o,this.__cache=s}get root(){let e=this;for(;e.parent;)e=e.parent;return e}get cache(){let e=this.root;return e.__cache||=new WeakMap,e.__cache}enterScope(e){let t=this.of({name:e,parent:this});return L&&console.log(`[%s] enter`,t.path,t.context),t}exitScope(e){return this.parent?(L&&console.log(`[%s] exit %o
%s`,this.path,this.context,yr(e,`  `)),this.parent.pushChild(this)):(L&&console.log(`[%s] NO exit %o
%s`,this.path,this.context,yr(e,`  `)),this)}token(e){return L&&console.log(`[%s] token <%s> + <%s>`,this.path,this.tokens.join(` `),e),this.assign({tokens:[...this.tokens,e]})}literal(e){return L&&console.log(`[%s] literal %o`,this.path,e),this.pushChild(this.of({name:`Literal`,value:e}))}computedValue(){for(let e=this;;e=Gr(e.children)){if(!e)return null;if(!t(e.value))return e.value}}contextCache(){let e=this.cache.get(this.context);return e||(e=Fr(this.context),this.cache.set(this.context,e)),e}get path(){return this.parent?.path?.concat(` > `,this.name)||this.name}get(e){let t=e&&zr(e),n=this.contextCache().originalMap.get(t);if(n===void 0)return;let r=this.context.get(n);return r instanceof jr?r.get(this):r}resolveName(){let e=this.tokens.join(` `),t=this.assign({tokens:[]}),n=this.of({name:`VariableName`,parent:t,value:this.get(e),raw:e});return L&&console.log(`[%s] resolve name <%s=%s>`,n.path,e,this.get(e)),t.pushChild(n)}pushChild(e){if(!e)return this;let t=this.assign({children:[...this.children,e]});return e.parent=t,t}pushChildren(e){let t=this;for(let n of e)t=t.pushChild(n);return t}declareName(){if(this.tokens.length===0)throw Error(`no tokens to declare name`);let e=this.tokens.join(` `);return L&&console.log(`[%s] declareName <%s>`,this.path,e),this.assign({tokens:[]}).pushChild(this.of({name:`Name`,value:e}))}define(e,t){if(typeof e!=`string`)return L&&console.log(`[%s] no define <%s=%s>`,this.path,e,t),this;L&&console.log(`[%s] define <%s=%s>`,this.path,e,t);let n=this.context,r=n.set(e,t),i=Pr(e,Ir(this.cache.get(n)||Fr(n)));return this.cache.set(r,i),this.assign({context:r})}assign(t={}){return e.of({...this,...t})}of(t={}){let n={context:this.context,parent:this.parent};return e.of({...n,...t})}static of(t){let{name:n,tokens:r=[],children:i=[],parent:a=null,context:o,value:s,raw:c,__cache:l}=t;if(!o)throw Error(`must provide <context>`);return new e({name:n,tokens:[...r],children:[...i],context:o,parent:a,value:s,raw:c,__cache:l})}};function zr(e){return e.replace(/\s*([./\-'+]|\*\*?)\s*/g,` $1 `).replace(/\s{2,}/g,` `).trim()}function Br(e,t,n){let r=e.children.filter(e=>e.name!==t),i=e.children.filter(e=>e.name===t),a=r[0],o=r[Math.max(1,r.length-1)],s=a?.computedValue(),c=o?.computedValue()??null;return e.assign({children:i}).enterScope(t).pushChildren(r).exitScope(n).define(s,c)}function Vr(e={},t=Lr){return new mn({start:Rr.of({context:t.of(e)}),reduce(e,n,r,i){if(n===An){let[n,r]=e.children.slice(-2);e=e.assign({value:t.of(n?.computedValue(),r?.computedValue())})}if(n===er&&(e=e.assign({value:t.of(...e.children.map(e=>e?.computedValue()))})),n===Wn){let[t,n]=e.children.slice(-2);e=e.assign({value:t?.computedValue()})}if(n===Kn){let[t,...n]=e.children;t?.raw===`get value`&&(e=Ur(e,n))}let a=kr[n];if(a)return e.enterScope(a);let o=Or[n];if(o){let{children:r,context:i}=e,a=r.slice(0,-1),s=Gr(r),c=null;return n===Un&&(c=t.of(s?.computedValue())),n===Gn&&(c=t.of(i,s?.computedValue()).set(`item`,s?.computedValue())),e.assign({children:a}).enterScope(o).pushChild(s).assign({context:c||i})}let s=i.read(i.pos,r.pos);if(Ar[n])return e.exitScope(s);if(n===ar){let n=e.children.filter(e=>e.name!==`ContextEntry`),r=n[0],i=Gr(n);return Br(e,`ContextEntry`,s).assign({value:t.of(e.value).set(r?.computedValue(),i?.computedValue())})}if(n===Tn||n===Pn)return Br(e,`InExpression`,s);if(n===kn)return e.define(`partial`,jr.of(e=>Gr(e.children)?.computedValue()));if(n===Jn){let t=Gr(e.children).computedValue();return e.define(t,1)}if(n===Ln||n===Rn||n===zn){let t=e.children.slice(0,-1),n=Gr(e.children);return e.assign({children:t}).enterScope(`ArithmeticExpression`).pushChild(n)}if(n===Bn)return e.enterScope(`ArithmeticExpression`);if(n===Dn||n===On||n===sr)return e.token(s);if(n===Zn)return e.literal(s.replace(/^"|"$/g,``).replace(/\\(["\\])/g,`$1`));if(n===Qn)return e.literal(s===`true`);if(n===Xn)return e.literal(parseFloat(s));if(n===Yn)return e.literal(null);if(n===Vn)return e.resolveName();if(n===En||n===or)return e.declareName();if((n===Sn||n===Fn)&&e.tokens.length>0)throw Error(`uncleared name`);if(n===Sn){let t=e;for(;t.parent;)t=t.exitScope(s);return t}return e}})}var Hr=Vr({});function Ur(e,t){if(!t.length||(t[0].name===`Name`&&(t=Wr(t,[`m`,`key`])),t.length!==2))return e.assign({value:null});let[n,r]=t,i=r?.computedValue(),a=n?.computedValue();return!a||typeof a!=`object`||typeof i!=`string`?e.assign({value:null}):e.assign({value:[zr(i),i].reduce((e,t)=>a.get(t)||e,null)})}function Wr(e,t){let n={};for(let t=0;t<e.length;t+=2){let[r,i]=e.slice(t,t+2);n[r.value]=i}return t.map(e=>n[e])}function Gr(e){return e[e.length-1]}var Kr=Ae({StringLiteral:C.string,NumericLiteral:C.number,BooleanLiteral:C.bool,"AtLiteral!":C.special(C.string),CompareOp:C.compareOperator,ArithOp:C.arithmeticOperator,"for if then else some every satisfies between return":C.controlKeyword,"in instance of and or":C.operatorKeyword,function:C.definitionKeyword,as:C.keyword,"Type/...":C.typeName,Wildcard:C.special(C.variableName),null:C.null,LineComment:C.lineComment,BlockComment:C.blockComment,'VariableName! "?"':C.variableName,"DateTimeConstructor! SpecialFunctionName!":C.function(C.special(C.variableName)),"List Interval":C.list,Context:C.definition(C.literal),"Name!":C.definition(C.variableName),"Key/Name! ContextEntryType/Name!":C.definition(C.propertyName),"PathExpression/VariableName!":C.function(C.propertyName),"FormalParameter/ParameterName!":C.function(C.definition(C.variableName)),"( )":C.paren,"[ ]":C.squareBracket,"{ }":C.brace,".":C.derefOperator,", ;":C.separator,"..":C.punctuation}),qr={__proto__:null,for:10,in:32,return:36,if:40,then:42,else:44,some:48,every:50,satisfies:56,or:60,and:64,between:72,instance:86,of:89,days:101,time:103,duration:105,years:107,months:109,date:111,list:117,context:123,function:130,null:156,true:330,false:330,"?":170,external:186,not:211},Jr=hn.deserialize({version:14,states:"CjO`QYOOO`QYOOO$yQYOOOOQU'#Ce'#CeO%TQYO'#C`O&^QYO'#FQOOQQ'#Fe'#FeO&hQYO'#FeO`QYO'#DVOOQU'#En'#EnO(_Q^O'#D]OOQU'#D^'#D^OOQU'#D]'#D]OOQO'#Fm'#FmO*[QWO'#DvOOQQ'#D}'#D}OOQQ'#EO'#EOOOQQ'#EP'#EPO*aOWO'#ESO*[QWO'#EQOOQQ'#EQ'#EQOOQQ'#Fs'#FsOOQQ'#Fq'#FqOOQQ'#Fy'#FyOOQQ'#EU'#EUO`QYO'#EWOOQQ'#FS'#FSO*iQ^O'#FSO,`QYO'#EXO,gQWO'#EYOOQP'#F}'#F}O,lQXO'#EaOOQQ'#Fz'#FzOOQQ'#FR'#FRQOQWOOOOQQ'#FT'#FTOOQQ'#F^'#F^O`QYO'#CoOOQQ'#F_'#F_O%TQYO'#CsO,zQYO'#DwOOQQ'#Fr'#FrO-PQYO'#EROOQO'#ER'#ERO`QYO'#EVO`QYO'#EUOOQO'#F{'#F{Q-XQWOOO-^QYO'#DRO.TQWO'#FaOOQO'#DT'#DTO.`QYO'#FeO.gQWOOO/^QYO'#CdO/kQYO'#FVOOQQ'#Cc'#CcO/pQYO'#FUOOQQ'#Cb'#CbO/xQYO,58zO`QYO,59iOOQQ'#Fb'#FbOOQQ'#Fc'#FcOOQQ'#Fd'#FdO`QYO,59qO`QYO,59qO`QYO,59qOOQQ'#Fk'#FkO/}QYO,5:^OOQQ'#Fl'#FlO`QYO,5:`O`QYO,59eO`QYO,59gO`QYO,59iO1|QYO,59iO2TQYO,59rOOQQ,5:i,5:iO2YQYO,59qOOQU-E8l-E8lO3|QYO'#FnOOQQ,5:b,5:bOOQQ,5:n,5:nOOQQ,5:l,5:lO4TQYO,5:rOOQQ,5;n,5;nO4_QYO,5:qO4lQWO,5:sO4qQYO,5:tOOQP'#Ee'#EeO5hQXO'#EdOOQO'#Ec'#EcO5oQWO'#EbO5tQWO'#GOO5|QWO,5:{O6RQYO,59ZOOQQ'#Cw'#CwO6YQYO'#F`OOQQ'#Cv'#CvO6bQYO,59_O6gQYO,5:cO6lQYO,5:mO4WQYO,5:qO6qQYO,5:pO`QYO'#EwQ-XQWOOO`QYO'#EmO7hQWO,5;{O`QYOOOOQR'#Cf'#CfOOQQ'#Ej'#EjO8bQYO,59OO`QYO,5;qOOQQ'#FY'#FYO%TQYO'#EkO8rQYO,5;pO`QYO1G.fOOQQ'#F]'#F]O9iQYO1G/TO<`QYO1G/]O<jQYO1G/]O<tQYO1G/]OOQQ1G/x1G/xO>hQYO1G/zO>oQYO1G/PO?xQYO1G/ROARQYO1G/TO`QYO1G/TOOQQ1G/T1G/TOAiQYO1G/^OBWQ^O'#CdOCjQYO'#FpOOQO'#Dz'#DzOCtQWO'#DyOCyQWO'#FoOOQO'#Dx'#DxOOQO'#D{'#D{ODRQWO,5<YOOQQ1G0^1G0^O`QYO1G0]O`QYO'#EsODWQWO,5<[OOQQ1G0_1G0_ODcQWO'#E[ODnQWO'#F|OOQO'#EZ'#EZODvQWO1G0`OOQP'#Eu'#EuOD{QXO,5;OO`QYO,5:|OESQXO'#EvOE_QWO,5<jOOQQ1G0g1G0gO`QYO1G.uO%TQYO'#ElOEgQYO,5;zO`QYO1G.yOEoQYO1G/}OOQO1G0X1G0XOOQO,5;c,5;cOOQO-E8u-E8uOOQO,5;X,5;XOOQO-E8k-E8kOEtQWOOOOQQ-E8h-E8hOEyQYO'#CmOOQQ1G1]1G1]OOQQ,5;V,5;VOOQQ-E8i-E8iOFZQYO7+$QOOQQ7+%f7+%fO`QYO7+$oOGQQYO,5:rOG_QWO7+$oOGdQYO'#D[OOQQ'#DZ'#DZOIWQYO'#D_OI]QYO'#D_OIbQYO'#D_OIgQ`O'#DgOIlQ`O'#DjOIqQ`O'#DnOOQQ7+$x7+$xO`QYO,5:eO%TQYO'#ErOIvQWO,5<ZOOQQ1G1t1G1tOJ|QYO7+%wOKZQYO,5;_OOQO-E8q-E8qOAiQYO,5:vO%TQYO'#EtOKhQWO,5<hOKpQYO7+%zOOQP-E8s-E8sOKwQYO1G0hOOQO,5;b,5;bOOQO-E8t-E8tOLRQYO7+$aOOQQ,5;W,5;WOOQQ-E8j-E8jOLYQYO7+$eOOQO7+%i7+%iO`QYO,59XOMPQYO<<HZOOQQ<<HZ<<HZO/}QYO'#EoONYQYO,59vO! |QYO,59yO!!RQYO,59yO!!WQYO,59yO!!]QYO,5:RO%TQYO,5:UO!!zQbO,5:YO!#RQYO1G0POOQO,5;^,5;^OOQO-E8p-E8pO!#]QYO<<IcOOQQ<<Ic<<IcOOQO1G0b1G0bOOQO,5;`,5;`OOQO-E8r-E8rO!&_QYO'#E^OOQQ<<If<<IfO`QYO<<IfO`QYO<<G{O!'UQYO1G.sOOQQ,5;Z,5;ZOOQQ-E8m-E8mO!'cQYO1G/eOOQQ1G/e1G/eO!'hQbO'#D]O!'yQ`O'#D[O!(UQ`O1G/mO!(ZQWO'#DmO!(`Q`O'#FgOOQO'#Dl'#DlO!(hQ`O1G/pOOQO'#Dq'#DqO!(mQ`O'#FiOOQO'#Dp'#DpO!(uQ`O1G/tOOQQAN?QAN?QO!(zQYOAN=gOOQQ7+%P7+%PO!)qQ`O,59vOOQQ7+%X7+%XO!!]QYO,5:XO%TQYO'#EpO!)|Q`O,5<ROOQQ7+%[7+%[O!!]QYO'#EqO!*UQ`O,5<TO!*^Q`O7+%`OOQO1G/s1G/sOOQO,5;[,5;[OOQO-E8n-E8nOOQO,5;],5;]OOQO-E8o-E8oOAiQYO<<HzOOQQAN>fAN>fO/}QYO'#EoO!!]QYO<<HzO!*cQ`O7+%`O!*hQ`O1G/tO!!zQbO,5:YO!*mQ`O'#Dn",stateData:"!+Q~O#rOS#sOSPOSQOS~OTsOZVO[UOdtOhvOivOr}Os}OviO!T{O!U{O!VxO!XzO!c!OO!g|O!igO!pyO!wjO#SnO#nRO#oRO$YZO$h_O$i`O$j`O$kaO$lbO~OTsO[UOdtOhvOivOr}Os}OviO!T{O!U{O!VxO!XzO!c!OO!g|O!igO!pyO!wjO#SnO#nRO#oRO$YZO$h_O$i`O$j`O$kaO$lbO~OZ!TO#]!UO~P#VO#nRO#oRO~OZ!^O[!^O]!_O^!_O_!`O`!kOn!hOp!iOr!]Os!]Ot!jO{!lO!i!fO#z!dOv$aX~O#l#tX$s#tX~P%]O$h!mOT$XXZ$XX[$XXd$XXh$XXi$XXr$XXs$XXv$XX!T$XX!U$XX!V$XX!X$XX!c$XX!g$XX!i$XX!p$XX!w$XX#S$XX#n$XX#o$XX$Y$XX$i$XX$j$XX$k$XX$l$XX~O#nRO#oROZ!PX[!PX]!PX^!PX_!PX`!PXn!PXp!PXr!PXs!PXt!PXv!PX{!PX!i!PX#l!PX#p!PX#z!PX$s!PX$O!PXx!PX#}!PX!g!PXe!PXb!PX#R!PXf!PXl!PX~Ov!pO~O$i`O$j`O~O#p!uOZ#vX[#vX]#vX^#vX_#vX`#vXn#vXp#vXr#vXs#vXt#vXv#vX{#vX!i#vX#l#vX#z#vX$s#vX$O#vXx#vX#}#vX!g#vXe#vXb#vX#R#vXf#vXl#vX~O!g$dP~P`Ov!xO~O#m!yO$i`O$j`O#R$rP~Op#UO~Op#VOv!uX~O$s#YO~O#luX$OuX$suXxuX#}uX!guXeuXbuX#RuXfuXluX~P%]O$O#[O#l$TXx$TX~O#l#[X~P&hOv#^O~OZ#_O[#_O]#_O^#_O_#_O#nRO#oRO#z#_O#{#_O$[WX~O`WXxWX$OWX~P.lO`#cO~O$O#dOb#xX~Ob#gO~O#nRO#oRO$YZO~OTsOZVO[UOdtOhvOivOr}Os}O!T{O!U{O!VxO!XzO!c!OO!g|O!igO!pyO!wjO#SnO#nRO#oRO$YZO$h_O$i`O$j`O$kaO$lbO~Ov#qO~P0YO|#sO~O{!lO!i!fO#z!dOZya[ya]ya^ya_ya`yanyapyaryasyatyav$aX#lya$sya$Oyaxya#}ya!gyaeyabya#Ryafyalya~Ox$dP~P`Ox#|O#}#}O~P%]O#}#}O$O$OO!g$dX~P%]O!g$QO~O#nRO#oROx$pP~OZ#_O[#_O]#_O^#_O_#_O#m!yO#z#_O#{#_O~O$[#WX~P4|O$[$XO~O$O$YO#R$rX~O#R$[O~Oe$]O~P%]O$O$^Ol$SX~Ol$`O~O!W$aO~O!T$bO~O#l!xa$s!xa$O!xax!xa#}!xa!g!xae!xab!xa#R!xaf!xal!xa~P%]O$O#[O#l$Tax$Ta~OZ#_O[#_O]#_O^#_O_#_O#nRO#oRO#z#_O#{#_O~O`Wa$[WaxWa$OWa~P7sO$O#dOb#xa~OZ!^O[!^O]!_O^!_O_!`O{!lO!i!fO#z!dOv$aX~O`qinqipqirqisqitqi#lqi$sqi$Oqixqi#}qi!gqieqibqi#Rqifqilqi~P8zO_!`O{!lO!i!fO#z!dOZyi[yi`yinyipyiryisyityiv$aX#lyi$syi$Oyixyi#}yi!gyieyibyi#Ryifyilyi~O]!_O^!_O~P:rO]yi^yi~P:rO{!lO!i!fO#z!dOZyi[yi]yi^yi_yi`yinyipyiryisyityiv$aX#lyi$syi$Oyixyi#}yi!gyieyibyi#Ryifyilyi~O!g$nO~P%]O`!kOp!iOr!]Os!]Ot!jOnmi#lmi$smi$Omixmi#}mi!gmiemibmi#Rmifmilmi~P8zO`!kOr!]Os!]Ot!jOnoipoi#loi$soi$Ooixoi#}oi!goieoiboi#Roifoiloi~P8zO`!kOn!hOp$oOr!]Os!]Ot!jO~P8zO!S$tO!V$uO!X$vO![$wO!_$xO!c$yO#nRO#oRO$YZO~OZ#bX[#bX]#bX^#bX_#bX`#bXn#bXp#bXr#bXs#bXt#bXv#bXx#bX{#bX!i#bX#n#bX#o#bX#p#bX#z#bX$O#bX~P.lO$O$OOx$dX~P%]O$[${O~O$O$|Ox$cX~Ox%OO~O$O$OO!g$dax$da~O$[%SOx#OX$O#OX~O$O%TOx$pX~Ox%VO~O$[#Wa~P4|O#m!yO$i`O$j`O~O$O$YO#R$ra~O$O$^Ol$Sa~O!U%`O~OxrO~O#}%aObaX$OaXlaX~P%]O#lSq$sSq$OSqxSq#}Sq!gSqeSqbSq#RSqfSqlSq~P%]Ox#|O#}#}O$OuX~P%]Ox%cO~O#z%dOZ!OX[!OX]!OX^!OX_!OX`!OXn!OXp!OXr!OXs!OXt!OXv!OX{!OX!i!OX#l!OX$s!OX$O!OXx!OX#}!OX!g!OXe!OXb!OX#R!OXf!OXl!OX~Op%fO~Op%gO~Op%hO~O!]%iO~O!]%jO~O!]%kO~O$O$|Ox$ca~OZ!^O[!^O]!_O^!_O_!`O`!kOn!hOp!iOr!]Os!]Ot!jO{!lO#z!dOv$aX~Ox%pO!g%pO!i%oO~PJOO!g#ga$O#gax#ga~P%]O$O%TOx$pa~O#P%vO~P`O#R#Ui$O#Ui~P%]Of%wO~P%]O#lgq$sgq$Ogqxgq#}gq!ggqegqbgq#Rgqfgqlgq~P%]O`qynqypqyrqysqytqy#lqy$sqy$Oqyxqy#}qy!gqyeqybqy#Rqyfqylqy~P8zO#z%dOZ!Oa[!Oa]!Oa^!Oa_!Oa`!Oan!Oap!Oar!Oas!Oat!Oav!Oa{!Oa!i!Oa#l!Oa$s!Oa$O!Oax!Oa#}!Oa!g!Oae!Oab!Oa#R!Oaf!Oal!Oa~O!T%{O~O!W%{O~O!T%|O~O!S$tO!V$uO!X$vO![$wO!_$xO!c&rO#nRO#oRO$YZO~O!Y$]P~P!!]Ox!mi$O!mi~P%]OT$`XZ$`X[$`X]!yy^!yy_!yy`!yyd$`Xh$`Xi$`Xn!yyp!yyr$`Xs$`Xt!yyv$`X{!yy!T$`X!U$`X!V$`X!X$`X!c$`X!g$`X!i$`X!p$`X!w$`X#S$`X#l!yy#n$`X#o$`X#z!yy$Y$`X$h$`X$i$`X$j$`X$k$`X$l$`X$s!yy$O!yyx!yy#}!yye!yyb!yy#R!yyf!yyl!yy~O#l#QX$s#QX$O#QXx#QX#}#QX!g#QXe#QXb#QX#R#QXf#QXl#QX~P%]Obai$Oailai~P%]O!U&[O~O#nRO#oRO!Y!PX#z!PX$O!PX~O#z&mO!Y!OX$O!OX~O!Y&^O~O$[&_O~O$O&`O!Y$ZX~O!Y&bO~O$O&cO!Y$]X~O!Y&eO~O#lc!R$sc!R$Oc!Rxc!R#}c!R!gc!Rec!Rbc!R#Rc!Rfc!Rlc!R~P%]O#z&mO!Y!Oa$O!Oa~O$O&`O!Y$Za~O$O&cO!Y$]a~O$^&kO~O$^&nO~O!Y&oO~O!]&qO~O$Y$i~$i$j_^$h#zQP]Q~",goto:"EX$sPPPP$tP%l%o%u&V'oPPPPPP'xP$tPPP$tPP'{(OP$tP$tP$tPPP(UP(aP$t$tPP(j)P)[*h)PPPPPPPP)PPP)PP+l+o)PP+u+{$tP$tP$t,S,z,}-T,zP-].T-]-]/S/zP$t0r$t1j1j2b2eP2kPP1j2q2w/O2{PP3TP3W3_3e3k3q4{5V5]5c5i5p5v5|6SPPPPPPPP6Y6c8g9_:V:YPP:bPP:e:h;`<W<Z<`<|=k>ZP?RP?UP?Y?z@lAdAjAm$tAsAsPPPPPBk8gCcDZD^EU!kjOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%wR![SQ!YSR$k#dW!WSw#d$^W#v!p!x$|%TT&Q%j&`#UXOPQWYilu|}!]!a!b!c!e!g!h!i!j!k#Y#[#^#b#f#q#s#}$O$X$]$`$o${%S%V%a%d%i%k%v%w%}&_&c&k&m&n&qb!VSw!x#d$^$|%T%j&`U#`!V#a#tR#t!pU#`!V#a#tT$V!z$WR$j#bR#TwQ#RwR%]$^U!RQ#^#qQ#r!kR$e#[QrQQ$g#^R$q#qQ$z#sQ%q%SQ&P%iU&U%k&c&qQ&f&_T&l&k&nc$s#s%S%i%k&_&c&k&n&q!jkOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%wQ#l!eU$r#s%S&kS%y%d&m]&O%i%k&_&c&n&q#T[OPQWilu|}!]!a!b!c!e!g!h!i!j!k!p#Y#[#^#b#f#q#s#}$O$X$]$`$o${%S%V%a%d%i%k%v%w&_&c&k&m&n&qR&T%jQ&R%jR&g&`Q&X%kR&p&qS&V%k&qR&i&c!k]OPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%wR#{!pQ#x!pR%m$|S#w!p$|T$R!x%T!keOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%w!jeOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%wQ!rbT!{o$Y!kcOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%w!kdOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%w!khOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%w!kpOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%wR$U!xQ$S!xR%r%TQ%u%VR&Y%vQ!}oR%Y$YT!|o$YS!zo$YT$V!z$WRrQS#a!V#tR$h#aQ#e!YR$l#eQ$_#RR%^$_Q#]!RR$f#]!tYOPQWilu|}!]!a!b!c!e!g!h!i!j!k!p#Y#[#^#b#f#q#s#}$O$X$]$`$o${%S%V%a%d%v%w&kS!oY%}_%}%i%k&_&c&m&n&qQ%e$rS%z%e&]R&]&OQ&a&RR&h&aQ&d&VR&j&dQ$}#xR%n$}S$P!v#uR%R$PQ%U$SR%s%UQ$W!zR%W$WQ$Z!}R%Z$ZQ#Z!PR$d#ZQrOQ!PPR$c#YUTOP#YW!QQ!k#[#^Q!nWQ!tiQ!vlQ#PuQ#W|Q#X}Q#h!]Q#i!aQ#j!bQ#k!cQ#m!gQ#n!hQ#o!iQ#p!jQ#u!pQ$i#bQ$m#fQ$p#qQ%P#}Q%Q$OQ%X$XQ%[$]Q%_$`Q%b$oQ%l${S%t%V%vQ%x%aR&Z%w!kqOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%w!kSOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%wR!ZSS!XS#dT#Qw$^R#b!WR#f![!kuOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%w!kwOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%wR#SwV!SQ#^#q!V!aT!Q!t!v#P#W#X#h#m#n#o#p#u$i$m$p%P%Q%X%[%_%b%l%t%x&Z!X!bT!Q!t!v#P#W#X#h#i#m#n#o#p#u$i$m$p%P%Q%X%[%_%b%l%t%x&Z!Z!cT!Q!t!v#P#W#X#h#i#j#m#n#o#p#u$i$m$p%P%Q%X%[%_%b%l%t%x&Z!kWOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%wR&S%jT&W%k&q!_!eT!Q!n!t!v#P#W#X#h#i#j#k#m#n#o#p#u$i$m$p%P%Q%X%[%_%b%l%t%x&Z!_!gT!Q!n!t!v#P#W#X#h#i#j#k#m#n#o#p#u$i$m$p%P%Q%X%[%_%b%l%t%x&Z!k^OPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%wQ!q^R!scR#y!pQ!wlR#z!p!kfOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%w!klOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%w!kmOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%wR$T!x!koOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#q#}$O$X$]$`$o${%V%a%v%wR#Oo",nodeNames:`⚠ LineComment BlockComment Expression ForExpression for InExpressions InExpression Name Identifier Identifier ArithOp ArithOp ArithOp ArithOp ArithOp in IterationContext return IfExpression if then else QuantifiedExpression some every InExpressions InExpression satisfies Disjunction or Conjunction and Comparison CompareOp CompareOp between PositiveUnaryTest ( PositiveUnaryTests ) ArithmeticExpression InstanceOfExpression instance of Type QualifiedName VariableName BacktickIdentifier SpecialType days time duration years months date > ListType list < ContextType context ContextEntryTypes ContextEntryType FunctionType function ArgumentTypes ArgumentType PathExpression ] FilterExpression [ FunctionInvocation SpecialFunctionName NamedParameters NamedParameter ParameterName PositionalParameters null NumericLiteral StringLiteral BooleanLiteral DateTimeLiteral DateTimeConstructor AtLiteral ? SimplePositiveUnaryTest Interval ParenthesizedExpression List FunctionDefinition FormalParameters FormalParameter external FunctionBody } { Context ContextEntry Key Name Identifier Expressions UnaryTests Wildcard not`,maxTerm:173,context:Hr,nodeProps:[[`group`,-17,4,19,23,29,31,33,41,42,68,70,72,85,86,88,89,90,97,`Expr`,47,`Expr Expr`,-5,78,79,80,81,82,`Expr Literal`],[`closedBy`,38,`)`,71,`]`,96,`}`],[`openedBy`,40,`(`,69,`[`,95,`{`]],propSources:[Kr],skippedNodes:[0,1,2],repeatNodeCount:14,tokenData:"2t~RvXY#iYZ$^Z[#i]^$^pq#iqr$crs$nwx*[xy*ayz*fz{*k{|*x|}*}}!O+S!O!P+a!P!Q,k!Q![.f![!].}!]!^/S!^!_/X!_!`$i!`!a/h!b!c/r!}#O/w#P#Q/|#Q#R*s#S#T0R#o#p2j#q#r2o$f$g#i#BY#BZ#i$IS$I_#i$I|$I}$^$I}$JO$^$JT$JU#i$KV$KW#i&FU&FV#i?HT?HU#i~#nY#r~XY#iZ[#ipq#i$f$g#i#BY#BZ#i$IS$I_#i$JT$JU#i$KV$KW#i&FU&FV#i?HT?HU#i~$cO#s~~$fP!_!`$i~$nOr~~$qXOY$nYZ%^Zr$nrs'us#O$n#O#P'|#P;'S$n;'S;=`)c<%lO$n~%aVOr%^rs%vs#O%^#O#P%{#P;'S%^;'S;=`'S<%lO%^~%{O$i~~&OWOr%^rs&hs#O%^#O#P%{#P;'S%^;'S;=`'Y;=`<%l%^<%lO%^~&mV$i~Or%^rs%vs#O%^#O#P%{#P;'S%^;'S;=`'S<%lO%^~'VP;=`<%l%^~']WOr%^rs%vs#O%^#O#P%{#P;'S%^;'S;=`'S;=`<%l%^<%lO%^~'|O$i~$j~~(PYOY$nYZ$nZr$nrs(os#O$n#O#P'|#P;'S$n;'S;=`)i;=`<%l$n<%lO$n~(vX$i~$j~OY$nYZ%^Zr$nrs'us#O$n#O#P'|#P;'S$n;'S;=`)c<%lO$n~)fP;=`<%l$n~)lYOY$nYZ%^Zr$nrs'us#O$n#O#P'|#P;'S$n;'S;=`)c;=`<%l$n<%lO$n~*aO#{~~*fOv~~*kOx~~*pP^~z{*s~*xO_~~*}O[~~+SO$O~R+XPZP!`!a+[Q+aO$^Q~+fQ#z~!O!P+l!Q![+q~+qO#}~~+vR$h~!Q![+q!g!h,P#X#Y,P~,SR{|,]}!O,]!Q![,c~,`P!Q![,c~,hP$h~!Q![,c~,pQ]~z{,v!P!Q-}~,yTOz,vz{-Y{;'S,v;'S;=`-w<%lO,v~-]VOz,vz{-Y{!P,v!P!Q-r!Q;'S,v;'S;=`-w<%lO,v~-wOQ~~-zP;=`<%l,v~.SSP~OY-}Z;'S-};'S;=`.`<%lO-}~.cP;=`<%l-}~.kS$h~!O!P.w!Q![.f!g!h,P#X#Y,P~.zP!Q![+q~/SO$[~~/XO$s~R/`P!]QsP!_!`/cP/hOsPR/oP!YQsP!_!`/c~/wO$l~~/|O!i~~0RO!g~~0UVO#O0R#O#P0k#P#S0R#S#T1r#T;'S0R;'S;=`1w<%lO0R~0nWO#O0R#O#P0k#P#S0R#S#T1W#T;'S0R;'S;=`1};=`<%l0R<%lO0R~1]V$Y~O#O0R#O#P0k#P#S0R#S#T1r#T;'S0R;'S;=`1w<%lO0R~1wO$Y~~1zP;=`<%l0R~2QWO#O0R#O#P0k#P#S0R#S#T1r#T;'S0R;'S;=`1w;=`<%l0R<%lO0R~2oO#S~~2tO#R~",tokenizers:[Er,Tr,Dr,0,1],topRules:{Expression:[0,3],Expressions:[1,102],UnaryTests:[2,103]},dialects:{camunda:2564},dynamicPrecedences:{31:-1,68:1,72:-1,74:-1},specialized:[{term:122,get:e=>qr[e]||-1}],tokenPrec:2567}),Yr=class{constructor(e,t,n,r){this.state=e,this.pos=t,this.explicit=n,this.view=r,this.abortListeners=[],this.abortOnDocChange=!1}tokenBefore(e){let t=x(this.state).resolveInner(this.pos,-1);for(;t&&e.indexOf(t.name)<0;)t=t.parent;return t?{from:t.from,to:this.pos,text:this.state.sliceDoc(t.from,this.pos),type:t.type}:null}matchBefore(e){let t=this.state.doc.lineAt(this.pos),n=Math.max(t.from,this.pos-250),r=t.text.slice(n-t.from,this.pos-t.from),i=r.search(ei(e,!1));return i<0?null:{from:n+i,to:this.pos,text:r.slice(i)}}get aborted(){return this.abortListeners==null}addEventListener(e,t,n){e==`abort`&&this.abortListeners&&(this.abortListeners.push(t),n&&n.onDocChange&&(this.abortOnDocChange=!0))}};function Xr(e){let t=Object.keys(e).join(``),n=/\w/.test(t);return n&&(t=t.replace(/\w/g,``)),`[${n?`\\w`:``}${t.replace(/[^\w\s]/g,`\\$&`)}]`}function Zr(e){let t=Object.create(null),n=Object.create(null);for(let{label:r}of e){t[r[0]]=!0;for(let e=1;e<r.length;e++)n[r[e]]=!0}let r=Xr(t)+Xr(n)+`*$`;return[RegExp(`^`+r),new RegExp(r)]}function Qr(e){let t=e.map(e=>typeof e==`string`?{label:e}:e),[n,r]=t.every(e=>/^\w+$/.test(e.label))?[/\w*$/,/\w+$/]:Zr(t);return e=>{let i=e.matchBefore(r);return i||e.explicit?{from:i?i.from:e.pos,options:t,validFor:n}:null}}var $r=class{constructor(e,t,n,r){this.completion=e,this.source=t,this.match=n,this.score=r}};function R(e){return e.selection.main.from}function ei(e,t){let{source:n}=e,r=t&&n[0]!=`^`,i=n[n.length-1]!=`$`;return!r&&!i?e:RegExp(`${r?`^`:``}(?:${n})${i?`$`:``}`,e.flags??(e.ignoreCase?`i`:``))}var ti=m.define();function ni(e,t,n,r){let{main:i}=e.selection,a=n-i.from,o=r-i.from;return{...e.changeByRange(s=>{if(s!=i&&n!=r&&e.sliceDoc(s.from+a,s.from+o)!=e.sliceDoc(n,r))return{range:s};let c=e.toText(t);return{changes:{from:s.from+a,to:r==i.from?s.to:s.from+o,insert:c},range:y.cursor(s.from+a+c.length)}}),scrollIntoView:!0,userEvent:`input.complete`}}var ri=new WeakMap;function ii(e){if(!Array.isArray(e))return e;let t=ri.get(e);return t||ri.set(e,t=Qr(e)),t}var ai=b.define(),oi=b.define(),si=class{constructor(e){this.pattern=e,this.chars=[],this.folded=[],this.any=[],this.precise=[],this.byWord=[],this.score=0,this.matched=[];for(let t=0;t<e.length;){let n=a(e,t),r=S(n);this.chars.push(n);let i=e.slice(t,t+r),o=i.toUpperCase();this.folded.push(a(o==i?i.toLowerCase():o,0)),t+=r}this.astral=e.length!=this.chars.length}ret(e,t){return this.score=e,this.matched=t,this}match(e){if(this.pattern.length==0)return this.ret(-100,[]);if(e.length<this.pattern.length)return null;let{chars:t,folded:n,any:r,precise:i,byWord:o}=this;if(t.length==1){let r=a(e,0),i=S(r),o=i==e.length?0:-100;if(r!=t[0])if(r==n[0])o+=-200;else return null;return this.ret(o,[0,i])}let s=e.indexOf(this.pattern);if(s==0)return this.ret(e.length==this.pattern.length?0:-100,[0,this.pattern.length]);let c=t.length,l=0;if(s<0){for(let i=0,o=Math.min(e.length,200);i<o&&l<c;){let o=a(e,i);(o==t[l]||o==n[l])&&(r[l++]=i),i+=S(o)}if(l<c)return null}let u=0,d=0,f=!1,p=0,m=-1,h=-1,ee=/[a-z]/.test(e),g=!0;for(let r=0,l=Math.min(e.length,200),te=0;r<l&&d<c;){let l=a(e,r);s<0&&(u<c&&l==t[u]&&(i[u++]=r),p<c&&(l==t[p]||l==n[p]?(p==0&&(m=r),h=r+1,p++):p=0));let _,ne=l<255?l>=48&&l<=57||l>=97&&l<=122?2:l>=65&&l<=90?1:0:(_=Se(l))==_.toLowerCase()?_==_.toUpperCase()?0:2:1;(!r||ne==1&&ee||te==0&&ne!=0)&&(t[d]==l||n[d]==l&&(f=!0)?o[d++]=r:o.length&&(g=!1)),te=ne,r+=S(l)}return d==c&&o[0]==0&&g?this.result(-100+(f?-200:0),o,e):p==c&&m==0?this.ret(-200-e.length+(h==e.length?0:-100),[0,h]):s>-1?this.ret(-700-e.length,[s,s+this.pattern.length]):p==c?this.ret(-900-e.length,[m,h]):d==c?this.result(-100+(f?-200:0)+-700+(g?0:-1100),o,e):t.length==2?null:this.result((r[0]?-700:0)+-200+-1100,r,e)}result(e,t,n){let r=[],i=0;for(let e of t){let t=e+(this.astral?S(a(n,e)):1);i&&r[i-1]==e?r[i-1]=t:(r[i++]=e,r[i++]=t)}return this.ret(e-n.length,r)}},ci=class{constructor(e){this.pattern=e,this.matched=[],this.score=0,this.folded=e.toLowerCase()}match(e){if(e.length<this.pattern.length)return null;let t=e.slice(0,this.pattern.length),n=t==this.pattern?0:t.toLowerCase()==this.folded?-200:null;return n==null?null:(this.matched=[0,t.length],this.score=n+(e.length==this.pattern.length?0:-100),this)}},z=v.define({combine(e){return Le(e,{activateOnTyping:!0,activateOnCompletion:()=>!1,activateOnTypingDelay:100,selectOnOpen:!0,override:null,closeOnBlur:!0,maxRenderedOptions:100,defaultKeymap:!0,tooltipClass:()=>``,optionClass:()=>``,aboveCursor:!1,icons:!0,addToOptions:[],positionInfo:ui,filterStrict:!1,compareCompletions:(e,t)=>(e.sortText||e.label).localeCompare(t.sortText||t.label),interactionDelay:75,updateSyncTime:100},{defaultKeymap:(e,t)=>e&&t,closeOnBlur:(e,t)=>e&&t,icons:(e,t)=>e&&t,tooltipClass:(e,t)=>n=>li(e(n),t(n)),optionClass:(e,t)=>n=>li(e(n),t(n)),addToOptions:(e,t)=>e.concat(t),filterStrict:(e,t)=>e||t})}});function li(e,t){return e?t?e+` `+t:e:t}function ui(e,t,n,r,i,a){let o=e.textDirection==oe.RTL,s=o,c=!1,l=`top`,u,d,f=t.left-i.left,p=i.right-t.right,m=r.right-r.left,h=r.bottom-r.top;if(s&&f<Math.min(m,p)?s=!1:!s&&p<Math.min(m,f)&&(s=!0),m<=(s?f:p))u=Math.max(i.top,Math.min(n.top,i.bottom-h))-t.top,d=Math.min(400,s?f:p);else{c=!0,d=Math.min(400,(o?t.right:i.right-t.left)-30);let e=i.bottom-t.bottom;e>=h||e>t.top?u=n.bottom-t.top:(l=`bottom`,u=t.bottom-n.top)}let ee=(t.bottom-t.top)/a.offsetHeight,g=(t.right-t.left)/a.offsetWidth;return{style:`${l}: ${u/ee}px; max-width: ${d/g}px`,class:`cm-completionInfo-`+(c?o?`left-narrow`:`right-narrow`:s?`left`:`right`)}}var di=b.define();function fi(e){let t=e.addToOptions.slice();return e.icons&&t.push({render(e){let t=document.createElement(`div`);return t.classList.add(`cm-completionIcon`),e.type&&t.classList.add(...e.type.split(/\s+/g).map(e=>`cm-completionIcon-`+e)),t.setAttribute(`aria-hidden`,`true`),t},position:20}),t.push({render(e,t,n,r){let i=document.createElement(`span`);i.className=`cm-completionLabel`;let a=e.displayLabel||e.label,o=0;for(let e=0;e<r.length;){let t=r[e++],n=r[e++];t>o&&i.appendChild(document.createTextNode(a.slice(o,t)));let s=i.appendChild(document.createElement(`span`));s.appendChild(document.createTextNode(a.slice(t,n))),s.className=`cm-completionMatchedText`,o=n}return o<a.length&&i.appendChild(document.createTextNode(a.slice(o))),i},position:50},{render(e){if(!e.detail)return null;let t=document.createElement(`span`);return t.className=`cm-completionDetail`,t.textContent=e.detail,t},position:80}),t.sort((e,t)=>e.position-t.position).map(e=>e.render)}function pi(e,t,n){if(e<=n)return{from:0,to:e};if(t<0&&(t=0),t<=e>>1){let e=Math.floor(t/n);return{from:e*n,to:(e+1)*n}}let r=Math.floor((e-t)/n);return{from:e-(r+1)*n,to:e-r*n}}var mi=class{constructor(e,t,n){this.view=e,this.stateField=t,this.applyCompletion=n,this.info=null,this.infoDestroy=null,this.placeInfoReq={read:()=>this.measureInfo(),write:e=>this.placeInfo(e),key:this},this.space=null,this.currentClass=``;let r=e.state.field(t),{options:i,selected:a}=r.open,o=e.state.facet(z);this.optionContent=fi(o),this.optionClass=o.optionClass,this.tooltipClass=o.tooltipClass,this.range=pi(i.length,a,o.maxRenderedOptions),this.dom=document.createElement(`div`),this.dom.className=`cm-tooltip-autocomplete`,this.updateTooltipClass(e.state),this.dom.addEventListener(`mousedown`,n=>{let{options:r}=e.state.field(t).open;for(let t=n.target,i;t&&t!=this.dom;t=t.parentNode)if(t.nodeName==`LI`&&(i=/-(\d+)$/.exec(t.id))&&+i[1]<r.length){this.applyCompletion(e,r[+i[1]]),n.preventDefault();return}if(n.target==this.list){let t=this.list.classList.contains(`cm-completionListIncompleteTop`)&&n.clientY<this.list.firstChild.getBoundingClientRect().top?this.range.from-1:this.list.classList.contains(`cm-completionListIncompleteBottom`)&&n.clientY>this.list.lastChild.getBoundingClientRect().bottom?this.range.to:null;t!=null&&(e.dispatch({effects:di.of(t)}),n.preventDefault())}}),this.dom.addEventListener(`focusout`,t=>{let n=e.state.field(this.stateField,!1);n&&n.tooltip&&e.state.facet(z).closeOnBlur&&t.relatedTarget!=e.contentDOM&&e.dispatch({effects:oi.of(null)})}),this.showOptions(i,r.id)}mount(){this.updateSel()}showOptions(e,t){this.list&&this.list.remove(),this.list=this.dom.appendChild(this.createListBox(e,t,this.range)),this.list.addEventListener(`scroll`,()=>{this.info&&this.view.requestMeasure(this.placeInfoReq)})}update(e){let t=e.state.field(this.stateField),n=e.startState.field(this.stateField);if(this.updateTooltipClass(e.state),t!=n){let{options:r,selected:i,disabled:a}=t.open;(!n.open||n.open.options!=r)&&(this.range=pi(r.length,i,e.state.facet(z).maxRenderedOptions),this.showOptions(r,t.id)),this.updateSel(),a!=n.open?.disabled&&this.dom.classList.toggle(`cm-tooltip-autocomplete-disabled`,!!a)}}updateTooltipClass(e){let t=this.tooltipClass(e);if(t!=this.currentClass){for(let e of this.currentClass.split(` `))e&&this.dom.classList.remove(e);for(let e of t.split(` `))e&&this.dom.classList.add(e);this.currentClass=t}}positioned(e){this.space=e,this.info&&this.view.requestMeasure(this.placeInfoReq)}updateSel(){let e=this.view.state.field(this.stateField),t=e.open;(t.selected>-1&&t.selected<this.range.from||t.selected>=this.range.to)&&(this.range=pi(t.options.length,t.selected,this.view.state.facet(z).maxRenderedOptions),this.showOptions(t.options,e.id));let n=this.updateSelectedOption(t.selected);if(n){this.destroyInfo();let{completion:r}=t.options[t.selected],{info:i}=r;if(!i)return;let a=typeof i==`string`?document.createTextNode(i):i(r);if(!a)return;`then`in a?a.then(t=>{t&&this.view.state.field(this.stateField,!1)==e&&this.addInfoPane(t,r)}).catch(e=>o(this.view.state,e,`completion info`)):(this.addInfoPane(a,r),n.setAttribute(`aria-describedby`,this.info.id))}}addInfoPane(e,t){this.destroyInfo();let n=this.info=document.createElement(`div`);if(n.className=`cm-tooltip cm-completionInfo`,n.id=`cm-completionInfo-`+Math.floor(Math.random()*65535).toString(16),e.nodeType!=null)n.appendChild(e),this.infoDestroy=null;else{let{dom:t,destroy:r}=e;n.appendChild(t),this.infoDestroy=r||null}this.dom.appendChild(n),this.view.requestMeasure(this.placeInfoReq)}updateSelectedOption(e){let t=null;for(let n=this.list.firstChild,r=this.range.from;n;n=n.nextSibling,r++)n.nodeName!=`LI`||!n.id?r--:r==e?n.hasAttribute(`aria-selected`)||(n.setAttribute(`aria-selected`,`true`),t=n):n.hasAttribute(`aria-selected`)&&(n.removeAttribute(`aria-selected`),n.removeAttribute(`aria-describedby`));return t&&gi(this.list,t),t}measureInfo(){let e=this.dom.querySelector(`[aria-selected]`);if(!e||!this.info)return null;let t=this.dom.getBoundingClientRect(),n=this.info.getBoundingClientRect(),r=e.getBoundingClientRect(),i=this.space;if(!i){let e=this.dom.ownerDocument.documentElement;i={left:0,top:0,right:e.clientWidth,bottom:e.clientHeight}}return r.top>Math.min(i.bottom,t.bottom)-10||r.bottom<Math.max(i.top,t.top)+10?null:this.view.state.facet(z).positionInfo(this.view,t,r,n,i,this.dom)}placeInfo(e){this.info&&(e?(e.style&&(this.info.style.cssText=e.style),this.info.className=`cm-tooltip cm-completionInfo `+(e.class||``)):this.info.style.cssText=`top: -1e6px`)}createListBox(e,t,n){let r=document.createElement(`ul`);r.id=t,r.setAttribute(`role`,`listbox`),r.setAttribute(`aria-expanded`,`true`),r.setAttribute(`aria-label`,this.view.state.phrase(`Completions`)),r.addEventListener(`mousedown`,e=>{e.target==r&&e.preventDefault()});let i=null;for(let a=n.from;a<n.to;a++){let{completion:o,match:s}=e[a],{section:c}=o;if(c){let e=typeof c==`string`?c:c.name;if(e!=i&&(a>n.from||n.from==0))if(i=e,typeof c!=`string`&&c.header)r.appendChild(c.header(c));else{let t=r.appendChild(document.createElement(`completion-section`));t.textContent=e}}let l=r.appendChild(document.createElement(`li`));l.id=t+`-`+a,l.setAttribute(`role`,`option`);let u=this.optionClass(o);u&&(l.className=u);for(let e of this.optionContent){let t=e(o,this.view.state,this.view,s);t&&l.appendChild(t)}}return n.from&&r.classList.add(`cm-completionListIncompleteTop`),n.to<e.length&&r.classList.add(`cm-completionListIncompleteBottom`),r}destroyInfo(){this.info&&=(this.infoDestroy&&this.infoDestroy(),this.info.remove(),null)}destroy(){this.destroyInfo()}};function hi(e,t){return n=>new mi(n,e,t)}function gi(e,t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=n.height/e.offsetHeight;r.top<n.top?e.scrollTop-=(n.top-r.top)/i:r.bottom>n.bottom&&(e.scrollTop+=(r.bottom-n.bottom)/i)}function _i(e){return(e.boost||0)*100+(e.apply?10:0)+(e.info?5:0)+(e.type?1:0)}function vi(e,t){let n=[],r=null,i=null,a=e=>{n.push(e);let{section:t}=e.completion;if(t){r||=[];let e=typeof t==`string`?t:t.name;r.some(t=>t.name==e)||r.push(typeof t==`string`?{name:e}:t)}},o=t.facet(z);for(let r of e)if(r.hasResult()){let e=r.result.getMatch;if(r.result.filter===!1)for(let t of r.result.options)a(new $r(t,r.source,e?e(t):[],1e9-n.length));else{let n=t.sliceDoc(r.from,r.to),s,c=o.filterStrict?new ci(n):new si(n);for(let t of r.result.options)if(s=c.match(t.label)){let n=t.displayLabel?e?e(t,s.matched):[]:s.matched,o=s.score+(t.boost||0);if(a(new $r(t,r.source,n,o)),typeof t.section==`object`&&t.section.rank===`dynamic`){let{name:e}=t.section;i||=Object.create(null),i[e]=Math.max(o,i[e]||-1e9)}}}}if(r){let e=Object.create(null),t=0,a=(e,t)=>(e.rank===`dynamic`&&t.rank===`dynamic`?i[t.name]-i[e.name]:0)||(typeof e.rank==`number`?e.rank:1e9)-(typeof t.rank==`number`?t.rank:1e9)||(e.name<t.name?-1:1);for(let n of r.sort(a))t-=1e5,e[n.name]=t;for(let t of n){let{section:n}=t.completion;n&&(t.score+=e[typeof n==`string`?n:n.name])}}let s=[],c=null,l=o.compareCompletions;for(let e of n.sort((e,t)=>t.score-e.score||l(e.completion,t.completion))){let t=e.completion;!c||c.label!=t.label||c.detail!=t.detail||c.type!=null&&t.type!=null&&c.type!=t.type||c.apply!=t.apply||c.boost!=t.boost?s.push(e):_i(e.completion)>_i(c)&&(s[s.length-1]=e),c=e.completion}return s}var yi=class e{constructor(e,t,n,r,i,a){this.options=e,this.attrs=t,this.tooltip=n,this.timestamp=r,this.selected=i,this.disabled=a}setSelected(t,n){return t==this.selected||t>=this.options.length?this:new e(this.options,wi(n,t),this.tooltip,this.timestamp,t,this.disabled)}static build(t,n,r,i,a,o){if(i&&!o&&t.some(e=>e.isPending))return i.setDisabled();let s=vi(t,n);if(!s.length)return i&&t.some(e=>e.isPending)?i.setDisabled():null;let c=n.facet(z).selectOnOpen?0:-1;if(i&&i.selected!=c&&i.selected!=-1){let e=i.options[i.selected].completion;for(let t=0;t<s.length;t++)if(s[t].completion==e){c=t;break}}return new e(s,wi(r,c),{pos:t.reduce((e,t)=>t.hasResult()?Math.min(e,t.from):e,1e8),create:ji,above:a.aboveCursor},i?i.timestamp:Date.now(),c,!1)}map(t){return new e(this.options,this.attrs,{...this.tooltip,pos:t.mapPos(this.tooltip.pos)},this.timestamp,this.selected,this.disabled)}setDisabled(){return new e(this.options,this.attrs,this.tooltip,this.timestamp,this.selected,!0)}},bi=class e{constructor(e,t,n){this.active=e,this.id=t,this.open=n}static start(){return new e(Ti,`cm-ac-`+Math.floor(Math.random()*2e6).toString(36),null)}update(t){let{state:n}=t,r=n.facet(z),i=(r.override||n.languageDataAt(`autocomplete`,R(n)).map(ii)).map(e=>(this.active.find(t=>t.source==e)||new B(e,this.active.some(e=>e.state!=0)?1:0)).update(t,r));i.length==this.active.length&&i.every((e,t)=>e==this.active[t])&&(i=this.active);let a=this.open,o=t.effects.some(e=>e.is(ki));a&&t.docChanged&&(a=a.map(t.changes)),t.selection||i.some(e=>e.hasResult()&&t.changes.touchesRange(e.from,e.to))||!xi(i,this.active)||o?a=yi.build(i,n,this.id,a,r,o):a&&a.disabled&&!i.some(e=>e.isPending)&&(a=null),!a&&i.every(e=>!e.isPending)&&i.some(e=>e.hasResult())&&(i=i.map(e=>e.hasResult()?new B(e.source,0):e));for(let e of t.effects)e.is(di)&&(a&&=a.setSelected(e.value,this.id));return i==this.active&&a==this.open?this:new e(i,this.id,a)}get tooltip(){return this.open?this.open.tooltip:null}get attrs(){return this.open?this.open.attrs:this.active.length?Si:Ci}};function xi(e,t){if(e==t)return!0;for(let n=0,r=0;;){for(;n<e.length&&!e[n].hasResult();)n++;for(;r<t.length&&!t[r].hasResult();)r++;let i=n==e.length,a=r==t.length;if(i||a)return i==a;if(e[n++].result!=t[r++].result)return!1}}var Si={"aria-autocomplete":`list`},Ci={};function wi(e,t){let n={"aria-autocomplete":`list`,"aria-haspopup":`listbox`,"aria-controls":e};return t>-1&&(n[`aria-activedescendant`]=e+`-`+t),n}var Ti=[];function Ei(e,t){if(e.isUserEvent(`input.complete`)){let n=e.annotation(ti);if(n&&t.activateOnCompletion(n))return 12}let n=e.isUserEvent(`input.type`);return n&&t.activateOnTyping?5:n?1:e.isUserEvent(`delete.backward`)?2:e.selection?8:e.docChanged?16:0}var B=class e{constructor(e,t,n=!1){this.source=e,this.state=t,this.explicit=n}hasResult(){return!1}get isPending(){return this.state==1}update(t,n){let r=Ei(t,n),i=this;(r&8||r&16&&this.touches(t))&&(i=new e(i.source,0)),r&4&&i.state==0&&(i=new e(this.source,1)),i=i.updateFor(t,r);for(let n of t.effects)if(n.is(ai))i=new e(i.source,1,n.value);else if(n.is(oi))i=new e(i.source,0);else if(n.is(ki))for(let e of n.value)e.source==i.source&&(i=e);return i}updateFor(e,t){return this.map(e.changes)}map(e){return this}touches(e){return e.changes.touchesRange(R(e.state))}},Di=class e extends B{constructor(e,t,n,r,i,a){super(e,3,t),this.limit=n,this.result=r,this.from=i,this.to=a}hasResult(){return!0}updateFor(t,n){if(!(n&3))return this.map(t.changes);let r=this.result;r.map&&!t.changes.empty&&(r=r.map(r,t.changes));let i=t.changes.mapPos(this.from),a=t.changes.mapPos(this.to,1),o=R(t.state);if(o>a||!r||n&2&&(R(t.startState)==this.from||o<this.limit))return new B(this.source,n&4?1:0);let s=t.changes.mapPos(this.limit);return Oi(r.validFor,t.state,i,a)?new e(this.source,this.explicit,s,r,i,a):r.update&&(r=r.update(r,i,a,new Yr(t.state,o,!1)))?new e(this.source,this.explicit,s,r,r.from,r.to??R(t.state)):new B(this.source,1,this.explicit)}map(t){return t.empty?this:(this.result.map?this.result.map(this.result,t):this.result)?new e(this.source,this.explicit,t.mapPos(this.limit),this.result,t.mapPos(this.from),t.mapPos(this.to,1)):new B(this.source,0)}touches(e){return e.changes.touchesRange(this.from,this.to)}};function Oi(e,t,n,r){if(!e)return!1;let i=t.sliceDoc(n,r);return typeof e==`function`?e(i,n,r,t):ei(e,!0).test(i)}var ki=b.define({map(e,t){return e.map(e=>e.map(t))}}),V=le.define({create(){return bi.start()},update(e,t){return e.update(t)},provide:e=>[_.from(e,e=>e.tooltip),c.contentAttributes.from(e,e=>e.attrs)]});function Ai(e,t){let n=t.completion.apply||t.completion.label,r=e.state.field(V).active.find(e=>e.source==t.source);return r instanceof Di?(typeof n==`string`?e.dispatch({...ni(e.state,n,r.from,r.to),annotations:ti.of(t.completion)}):n(e,t.completion,r.from,r.to),!0):!1}var ji=hi(V,Ai);function Mi(e,t=`option`){return n=>{let r=n.state.field(V,!1);if(!r||!r.open||r.open.disabled||Date.now()-r.open.timestamp<n.state.facet(z).interactionDelay)return!1;let i=1,a;t==`page`&&(a=u(n,r.open.tooltip))&&(i=Math.max(2,Math.floor(a.dom.offsetHeight/a.dom.querySelector(`li`).offsetHeight)-1));let{length:o}=r.open.options,s=r.open.selected>-1?r.open.selected+i*(e?1:-1):e?0:o-1;return s<0?s=t==`page`?0:o-1:s>=o&&(s=t==`page`?o-1:0),n.dispatch({effects:di.of(s)}),!0}}var Ni=e=>{let t=e.state.field(V,!1);return e.state.readOnly||!t||!t.open||t.open.selected<0||t.open.disabled||Date.now()-t.open.timestamp<e.state.facet(z).interactionDelay?!1:Ai(e,t.open.options[t.open.selected])},Pi=e=>e.state.field(V,!1)?(e.dispatch({effects:ai.of(!0)}),!0):!1,Fi=e=>{let t=e.state.field(V,!1);return!t||!t.active.some(e=>e.state!=0)?!1:(e.dispatch({effects:oi.of(null)}),!0)},Ii=class{constructor(e,t){this.active=e,this.context=t,this.time=Date.now(),this.updates=[],this.done=void 0}},Li=50,Ri=1e3,zi=Ve.fromClass(class{constructor(e){this.view=e,this.debounceUpdate=-1,this.running=[],this.debounceAccept=-1,this.pendingStart=!1,this.composing=0;for(let t of e.state.field(V).active)t.isPending&&this.startQuery(t)}update(e){let t=e.state.field(V),n=e.state.facet(z);if(!e.selectionSet&&!e.docChanged&&e.startState.field(V)==t)return;let r=e.transactions.some(e=>{let t=Ei(e,n);return t&8||(e.selection||e.docChanged)&&!(t&3)});for(let t=0;t<this.running.length;t++){let n=this.running[t];if(r||n.context.abortOnDocChange&&e.docChanged||n.updates.length+e.transactions.length>Li&&Date.now()-n.time>Ri){for(let e of n.context.abortListeners)try{e()}catch(e){o(this.view.state,e)}n.context.abortListeners=null,this.running.splice(t--,1)}else n.updates.push(...e.transactions)}this.debounceUpdate>-1&&clearTimeout(this.debounceUpdate),e.transactions.some(e=>e.effects.some(e=>e.is(ai)))&&(this.pendingStart=!0);let i=this.pendingStart?50:n.activateOnTypingDelay;if(this.debounceUpdate=t.active.some(e=>e.isPending&&!this.running.some(t=>t.active.source==e.source))?setTimeout(()=>this.startUpdate(),i):-1,this.composing!=0)for(let t of e.transactions)t.isUserEvent(`input.type`)?this.composing=2:this.composing==2&&t.selection&&(this.composing=3)}startUpdate(){this.debounceUpdate=-1,this.pendingStart=!1;let{state:e}=this.view,t=e.field(V);for(let e of t.active)e.isPending&&!this.running.some(t=>t.active.source==e.source)&&this.startQuery(e);this.running.length&&t.open&&t.open.disabled&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(z).updateSyncTime))}startQuery(e){let{state:t}=this.view,n=new Yr(t,R(t),e.explicit,this.view),r=new Ii(e,n);this.running.push(r),Promise.resolve(e.source(n)).then(e=>{r.context.aborted||(r.done=e||null,this.scheduleAccept())},e=>{this.view.dispatch({effects:oi.of(null)}),o(this.view.state,e)})}scheduleAccept(){this.running.every(e=>e.done!==void 0)?this.accept():this.debounceAccept<0&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(z).updateSyncTime))}accept(){this.debounceAccept>-1&&clearTimeout(this.debounceAccept),this.debounceAccept=-1;let e=[],t=this.view.state.facet(z),n=this.view.state.field(V);for(let r=0;r<this.running.length;r++){let i=this.running[r];if(i.done===void 0)continue;if(this.running.splice(r--,1),i.done){let n=R(i.updates.length?i.updates[0].startState:this.view.state),r=Math.min(n,i.done.from+(i.active.explicit?0:1)),a=new Di(i.active.source,i.active.explicit,r,i.done,i.done.from,i.done.to??n);for(let e of i.updates)a=a.update(e,t);if(a.hasResult()){e.push(a);continue}}let a=n.active.find(e=>e.source==i.active.source);if(a&&a.isPending)if(i.done==null){let n=new B(i.active.source,0);for(let e of i.updates)n=n.update(e,t);n.isPending||e.push(n)}else this.startQuery(a)}(e.length||n.open&&n.open.disabled)&&this.view.dispatch({effects:ki.of(e)})}},{eventHandlers:{blur(e){let t=this.view.state.field(V,!1);if(t&&t.tooltip&&this.view.state.facet(z).closeOnBlur){let n=t.open&&u(this.view,t.open.tooltip);(!n||!n.dom.contains(e.relatedTarget))&&setTimeout(()=>this.view.dispatch({effects:oi.of(null)}),10)}},compositionstart(){this.composing=1},compositionend(){this.composing==3&&setTimeout(()=>this.view.dispatch({effects:ai.of(!1)}),20),this.composing=0}}}),Bi=typeof navigator==`object`&&/Win/.test(navigator.platform),Vi=f.highest(c.domEventHandlers({keydown(e,t){let n=t.state.field(V,!1);if(!n||!n.open||n.open.disabled||n.open.selected<0||e.key.length>1||e.ctrlKey&&!(Bi&&e.altKey)||e.metaKey)return!1;let r=n.open.options[n.open.selected],i=n.active.find(e=>e.source==r.source),a=r.completion.commitCharacters||i.result.commitCharacters;return a&&a.indexOf(e.key)>-1&&Ai(t,r),!1}})),Hi=c.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:`monospace`,whiteSpace:`nowrap`,overflow:`hidden auto`,maxWidth_fallback:`700px`,maxWidth:`min(700px, 95vw)`,minWidth:`250px`,maxHeight:`10em`,height:`100%`,listStyle:`none`,margin:0,padding:0,"& > li, & > completion-section":{padding:`1px 3px`,lineHeight:1.2},"& > li":{overflowX:`hidden`,textOverflow:`ellipsis`,cursor:`pointer`},"& > completion-section":{display:`list-item`,borderBottom:`1px solid silver`,paddingLeft:`0.5em`,opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:`#17c`,color:`white`},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:`#777`},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:`#347`,color:`white`},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:`#444`},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:`"···"`,opacity:.5,display:`block`,textAlign:`center`},".cm-tooltip.cm-completionInfo":{position:`absolute`,padding:`3px 9px`,width:`max-content`,maxWidth:`400px`,boxSizing:`border-box`,whiteSpace:`pre-line`},".cm-completionInfo.cm-completionInfo-left":{right:`100%`},".cm-completionInfo.cm-completionInfo-right":{left:`100%`},".cm-completionInfo.cm-completionInfo-left-narrow":{right:`30px`},".cm-completionInfo.cm-completionInfo-right-narrow":{left:`30px`},"&light .cm-snippetField":{backgroundColor:`#00000022`},"&dark .cm-snippetField":{backgroundColor:`#ffffff22`},".cm-snippetFieldPosition":{verticalAlign:`text-top`,width:0,height:`1.15em`,display:`inline-block`,margin:`0 -0.7px -.7em`,borderLeft:`1.4px dotted #888`},".cm-completionMatchedText":{textDecoration:`underline`},".cm-completionDetail":{marginLeft:`0.5em`,fontStyle:`italic`},".cm-completionIcon":{fontSize:`90%`,width:`.8em`,display:`inline-block`,textAlign:`center`,paddingRight:`.6em`,opacity:`0.6`,boxSizing:`content-box`},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:`'ƒ'`}},".cm-completionIcon-class":{"&:after":{content:`'○'`}},".cm-completionIcon-interface":{"&:after":{content:`'◌'`}},".cm-completionIcon-variable":{"&:after":{content:`'𝑥'`}},".cm-completionIcon-constant":{"&:after":{content:`'𝐶'`}},".cm-completionIcon-type":{"&:after":{content:`'𝑡'`}},".cm-completionIcon-enum":{"&:after":{content:`'∪'`}},".cm-completionIcon-property":{"&:after":{content:`'□'`}},".cm-completionIcon-keyword":{"&:after":{content:`'🔑︎'`}},".cm-completionIcon-namespace":{"&:after":{content:`'▢'`}},".cm-completionIcon-text":{"&:after":{content:`'abc'`,fontSize:`50%`,verticalAlign:`middle`}}}),Ui=class{constructor(e,t,n,r){this.field=e,this.line=t,this.from=n,this.to=r}},Wi=class e{constructor(e,t,n){this.field=e,this.from=t,this.to=n}map(t){let n=t.mapPos(this.from,-1,ce.TrackDel),r=t.mapPos(this.to,1,ce.TrackDel);return n==null||r==null?null:new e(this.field,n,r)}},Gi=class e{constructor(e,t){this.lines=e,this.fieldPositions=t}instantiate(e,t){let n=[],r=[t],i=e.doc.lineAt(t),a=/^\s*/.exec(i.text)[0];for(let i of this.lines){if(n.length){let n=a,o=/^\t*/.exec(i)[0].length;for(let t=0;t<o;t++)n+=e.facet(de);r.push(t+n.length-o),i=n+i.slice(o)}n.push(i),t+=i.length+1}return{text:n,ranges:this.fieldPositions.map(e=>new Wi(e.field,r[e.line]+e.from,r[e.line]+e.to))}}static parse(t){let n=[],r=[],i=[],a;for(let e of t.split(/\r\n?|\n/)){for(;a=/[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(e);){let t=a[1]?+a[1]:null,o=a[2]||a[3]||``,s=-1,c=o.replace(/\\[{}]/g,e=>e[1]);for(let e=0;e<n.length;e++)(t==null?c&&n[e].name==c:n[e].seq==t)&&(s=e);if(s<0){let e=0;for(;e<n.length&&(t==null||n[e].seq!=null&&n[e].seq<t);)e++;n.splice(e,0,{seq:t,name:c}),s=e;for(let e of i)e.field>=s&&e.field++}for(let e of i)if(e.line==r.length&&e.from>a.index){let t=a[2]?3+(a[1]||``).length:2;e.from-=t,e.to-=t}i.push(new Ui(s,r.length,a.index,a.index+c.length)),e=e.slice(0,a.index)+o+e.slice(a.index+a[0].length)}e=e.replace(/\\([{}])/g,(e,t,n)=>{for(let e of i)e.line==r.length&&e.from>n&&(e.from--,e.to--);return t}),r.push(e)}return new e(r,i)}},Ki=w.widget({widget:new class extends se{toDOM(){let e=document.createElement(`span`);return e.className=`cm-snippetFieldPosition`,e}ignoreEvent(){return!1}}}),qi=w.mark({class:`cm-snippetField`}),Ji=class e{constructor(e,t){this.ranges=e,this.active=t,this.deco=w.set(e.map(e=>(e.from==e.to?Ki:qi).range(e.from,e.to)),!0)}map(t){let n=[];for(let e of this.ranges){let r=e.map(t);if(!r)return null;n.push(r)}return new e(n,this.active)}selectionInsideField(e){return e.ranges.every(e=>this.ranges.some(t=>t.field==this.active&&t.from<=e.from&&t.to>=e.to))}},Yi=b.define({map(e,t){return e&&e.map(t)}}),Xi=b.define(),Zi=le.define({create(){return null},update(e,t){for(let n of t.effects){if(n.is(Yi))return n.value;if(n.is(Xi)&&e)return new Ji(e.ranges,n.value)}return e&&t.docChanged&&(e=e.map(t.changes)),e&&t.selection&&!e.selectionInsideField(t.selection)&&(e=null),e},provide:e=>c.decorations.from(e,e=>e?e.deco:w.none)});function Qi(e,t){return y.create(e.filter(e=>e.field==t).map(e=>y.range(e.from,e.to)))}function $i(e){let t=Gi.parse(e);return(e,n,r,i)=>{let{text:a,ranges:o}=t.instantiate(e.state,r),{main:s}=e.state.selection,c={changes:{from:r,to:i==s.from?s.to:i,insert:ue.of(a)},scrollIntoView:!0,annotations:n?[ti.of(n),ie.userEvent.of(`input.complete`)]:void 0};if(o.length&&(c.selection=Qi(o,0)),o.some(e=>e.field>0)){let t=new Ji(o,0),n=c.effects=[Yi.of(t)];e.state.field(Zi,!1)===void 0&&n.push(b.appendConfig.of([Zi,ra,ia,Hi]))}e.dispatch(e.state.update(c))}}function ea(e){return({state:t,dispatch:n})=>{let r=t.field(Zi,!1);if(!r||e<0&&r.active==0)return!1;let i=r.active+e,a=e>0&&!r.ranges.some(t=>t.field==i+e);return n(t.update({selection:Qi(r.ranges,i),effects:Yi.of(a?null:new Ji(r.ranges,i)),scrollIntoView:!0})),!0}}var ta=[{key:`Tab`,run:ea(1),shift:ea(-1)},{key:`Escape`,run:({state:e,dispatch:t})=>e.field(Zi,!1)?(t(e.update({effects:Yi.of(null)})),!0):!1}],na=v.define({combine(e){return e.length?e[0]:ta}}),ra=f.highest(ne.compute([na],e=>e.facet(na)));function H(e,t){return{...t,apply:$i(e)}}var ia=c.domEventHandlers({mousedown(e,t){let n=t.state.field(Zi,!1),r;if(!n||(r=t.posAtCoords({x:e.clientX,y:e.clientY}))==null)return!1;let i=n.ranges.find(e=>e.from<=r&&e.to>=r);return!i||i.field==n.active?!1:(t.dispatch({selection:Qi(n.ranges,i.field),effects:Yi.of(n.ranges.some(e=>e.field>i.field)?new Ji(n.ranges,i.field):null),scrollIntoView:!0}),!0)}}),aa={brackets:[`(`,`[`,`{`,`'`,`"`],before:`)]}:;>`,stringPrefixes:[]},U=b.define({map(e,t){return t.mapPos(e,-1,ce.TrackAfter)??void 0}}),oa=new class extends h{};oa.startSide=1,oa.endSide=-1;var sa=le.define({create(){return ee.empty},update(e,t){if(e=e.map(t.changes),t.selection){let n=t.state.doc.lineAt(t.selection.main.head);e=e.update({filter:e=>e>=n.from&&e<=n.to})}for(let n of t.effects)n.is(U)&&(e=e.update({add:[oa.range(n.value,n.value+1)]}));return e}});function ca(){return[pa,sa]}var la=`()[]{}<>«»»«［］｛｝`;function ua(e){for(let t=0;t<16;t+=2)if(la.charCodeAt(t)==e)return la.charAt(t+1);return Se(e<128?e:e+1)}function da(e,t){return e.languageDataAt(`closeBrackets`,t)[0]||aa}var fa=typeof navigator==`object`&&/Android\b/.test(navigator.userAgent),pa=c.inputHandler.of((e,t,n,r)=>{if((fa?e.composing:e.compositionStarted)||e.state.readOnly)return!1;let i=e.state.selection.main;if(r.length>2||r.length==2&&S(a(r,0))==1||t!=i.from||n!=i.to)return!1;let o=ma(e.state,r);return o?(e.dispatch(o),!0):!1});function ma(e,t){let n=da(e,e.selection.main.head),r=n.brackets||aa.brackets;for(let i of r){let o=ua(a(i,0));if(t==i)return o==i?ya(e,i,r.indexOf(i+i+i)>-1,n):_a(e,i,o,n.before||aa.before);if(t==o&&ha(e,e.selection.main.from))return va(e,i,o)}return null}function ha(e,t){let n=!1;return e.field(sa).between(0,e.doc.length,e=>{e==t&&(n=!0)}),n}function ga(e,t){let n=e.sliceString(t,t+2);return n.slice(0,S(a(n,0)))}function _a(e,t,n,r){let i=null,a=e.changeByRange(a=>{if(!a.empty)return{changes:[{insert:t,from:a.from},{insert:n,from:a.to}],effects:U.of(a.to+t.length),range:y.range(a.anchor+t.length,a.head+t.length)};let o=ga(e.doc,a.head);return!o||/\s/.test(o)||r.indexOf(o)>-1?{changes:{insert:t+n,from:a.head},effects:U.of(a.head+t.length),range:y.cursor(a.head+t.length)}:{range:i=a}});return i?null:e.update(a,{scrollIntoView:!0,userEvent:`input.type`})}function va(e,t,n){let r=null,i=e.changeByRange(t=>t.empty&&ga(e.doc,t.head)==n?{changes:{from:t.head,to:t.head+n.length,insert:n},range:y.cursor(t.head+n.length)}:r={range:t});return r?null:e.update(i,{scrollIntoView:!0,userEvent:`input.type`})}function ya(e,t,n,r){let i=r.stringPrefixes||aa.stringPrefixes,a=null,o=e.changeByRange(r=>{if(!r.empty)return{changes:[{insert:t,from:r.from},{insert:t,from:r.to}],effects:U.of(r.to+t.length),range:y.range(r.anchor+t.length,r.head+t.length)};let o=r.head,s=ga(e.doc,o),c;if(s==t){if(ba(e,o))return{changes:{insert:t+t,from:o},effects:U.of(o+t.length),range:y.cursor(o+t.length)};if(ha(e,o)){let r=n&&e.sliceDoc(o,o+t.length*3)==t+t+t?t+t+t:t;return{changes:{from:o,to:o+r.length,insert:r},range:y.cursor(o+r.length)}}}else if(n&&e.sliceDoc(o-2*t.length,o)==t+t&&(c=Sa(e,o-2*t.length,i))>-1&&ba(e,c))return{changes:{insert:t+t+t+t,from:o},effects:U.of(o+t.length),range:y.cursor(o+t.length)};else if(e.charCategorizer(o)(s)!=Ue.Word&&Sa(e,o,i)>-1&&!xa(e,o,t,i))return{changes:{insert:t+t,from:o},effects:U.of(o+t.length),range:y.cursor(o+t.length)};return{range:a=r}});return a?null:e.update(o,{scrollIntoView:!0,userEvent:`input.type`})}function ba(e,t){let n=x(e).resolveInner(t+1);return n.parent&&n.from==t}function xa(e,t,n,r){let i=x(e).resolveInner(t,-1),a=r.reduce((e,t)=>Math.max(e,t.length),0);for(let o=0;o<5;o++){let o=e.sliceDoc(i.from,Math.min(i.to,i.from+n.length+a)),s=o.indexOf(n);if(!s||s>-1&&r.indexOf(o.slice(0,s))>-1){let t=i.firstChild;for(;t&&t.from==i.from&&t.to-t.from>n.length+s;){if(e.sliceDoc(t.to-n.length,t.to)==n)return!1;t=t.firstChild}return!0}let c=i.to==t&&i.parent;if(!c)break;i=c}return!1}function Sa(e,t,n){let r=e.charCategorizer(t);if(r(e.sliceDoc(t-1,t))!=Ue.Word)return t;for(let i of n){let n=t-i.length;if(e.sliceDoc(n,t)==i&&r(e.sliceDoc(n-1,n))!=Ue.Word)return n}return-1}function Ca(e={}){return[Vi,V,z.of(e),zi,Ta,Hi]}var wa=[{key:`Ctrl-Space`,run:Pi},{mac:"Alt-`",run:Pi},{mac:`Alt-i`,run:Pi},{key:`Escape`,run:Fi},{key:`ArrowDown`,run:Mi(!0)},{key:`ArrowUp`,run:Mi(!1)},{key:`PageDown`,run:Mi(!0,`page`)},{key:`PageUp`,run:Mi(!1,`page`)},{key:`Enter`,run:Ni}],Ta=f.highest(ne.computeN([z],e=>e.facet(z).defaultKeymap?[wa]:[])),Ea=e=>{let{state:t}=e,n=t.doc.lineAt(t.selection.main.from),r=ja(e.state,n.from);return r.line?Oa(e):r.block?Aa(e):!1};function Da(e,t){return({state:n,dispatch:r})=>{if(n.readOnly)return!1;let i=e(t,n);return i?(r(n.update(i)),!0):!1}}var Oa=Da(Ia,0),ka=Da(Fa,0),Aa=Da((e,t)=>Fa(e,t,Pa(t)),0);function ja(e,t){let n=e.languageDataAt(`commentTokens`,t,1);return n.length?n[0]:{}}var Ma=50;function Na(e,{open:t,close:n},r,i){let a=e.sliceDoc(r-Ma,r),o=e.sliceDoc(i,i+Ma),s=/\s*$/.exec(a)[0].length,c=/^\s*/.exec(o)[0].length,l=a.length-s;if(a.slice(l-t.length,l)==t&&o.slice(c,c+n.length)==n)return{open:{pos:r-s,margin:s&&1},close:{pos:i+c,margin:c&&1}};let u,d;i-r<=2*Ma?u=d=e.sliceDoc(r,i):(u=e.sliceDoc(r,r+Ma),d=e.sliceDoc(i-Ma,i));let f=/^\s*/.exec(u)[0].length,p=/\s*$/.exec(d)[0].length,m=d.length-p-n.length;return u.slice(f,f+t.length)==t&&d.slice(m,m+n.length)==n?{open:{pos:r+f+t.length,margin:/\s/.test(u.charAt(f+t.length))?1:0},close:{pos:i-p-n.length,margin:/\s/.test(d.charAt(m-1))?1:0}}:null}function Pa(e){let t=[];for(let n of e.selection.ranges){let r=e.doc.lineAt(n.from),i=n.to<=r.to?r:e.doc.lineAt(n.to);i.from>r.from&&i.from==n.to&&(i=n.to==r.to+1?r:e.doc.lineAt(n.to-1));let a=t.length-1;a>=0&&t[a].to>r.from?t[a].to=i.to:t.push({from:r.from+/^\s*/.exec(r.text)[0].length,to:i.to})}return t}function Fa(e,t,n=t.selection.ranges){let r=n.map(e=>ja(t,e.from).block);if(!r.every(e=>e))return null;let i=n.map((e,n)=>Na(t,r[n],e.from,e.to));if(e!=2&&!i.every(e=>e))return{changes:t.changes(n.map((e,t)=>i[t]?[]:[{from:e.from,insert:r[t].open+` `},{from:e.to,insert:` `+r[t].close}]))};if(e!=1&&i.some(e=>e)){let e=[];for(let t=0,n;t<i.length;t++)if(n=i[t]){let i=r[t],{open:a,close:o}=n;e.push({from:a.pos-i.open.length,to:a.pos+a.margin},{from:o.pos-o.margin,to:o.pos+i.close.length})}return{changes:e}}return null}function Ia(e,t,n=t.selection.ranges){let r=[],i=-1;ranges:for(let{from:e,to:a}of n){let n=r.length,o=1e9,s;for(let n=e;n<=a;){let c=t.doc.lineAt(n);if(s==null&&(s=ja(t,c.from).line,!s))continue ranges;if(c.from>i&&(e==a||a>c.from)){i=c.from;let e=/^\s*/.exec(c.text)[0].length,t=e==c.length,n=c.text.slice(e,e+s.length)==s?e:-1;e<c.text.length&&e<o&&(o=e),r.push({line:c,comment:n,token:s,indent:e,empty:t,single:!1})}n=c.to+1}if(o<1e9)for(let e=n;e<r.length;e++)r[e].indent<r[e].line.text.length&&(r[e].indent=o);r.length==n+1&&(r[n].single=!0)}if(e!=2&&r.some(e=>e.comment<0&&(!e.empty||e.single))){let e=[];for(let{line:t,token:n,indent:i,empty:a,single:o}of r)(o||!a)&&e.push({from:t.from+i,insert:n+` `});let n=t.changes(e);return{changes:n,selection:t.selection.map(n,1)}}else if(e!=1&&r.some(e=>e.comment>=0)){let e=[];for(let{line:t,comment:n,token:i}of r)if(n>=0){let r=t.from+n,a=r+i.length;t.text[a-t.from]==` `&&a++,e.push({from:r,to:a})}return{changes:e}}return null}var La=m.define(),Ra=v.define(),za=class e{constructor(e,t,n,r,i){this.changes=e,this.effects=t,this.mapped=n,this.startSelection=r,this.selectionsAfter=i}setSelAfter(t){return new e(this.changes,this.effects,this.mapped,this.startSelection,t)}toJSON(){return{changes:this.changes?.toJSON(),mapped:this.mapped?.toJSON(),startSelection:this.startSelection?.toJSON(),selectionsAfter:this.selectionsAfter.map(e=>e.toJSON())}}static fromJSON(t){return new e(t.changes&&ae.fromJSON(t.changes),[],t.mapped&&g.fromJSON(t.mapped),t.startSelection&&y.fromJSON(t.startSelection),t.selectionsAfter.map(y.fromJSON))}static fromTransaction(t,n){let r=W;for(let e of t.startState.facet(Ra)){let n=e(t);n.length&&(r=r.concat(n))}return!r.length&&t.changes.empty?null:new e(t.changes.invert(t.startState.doc),r,void 0,n||t.startState.selection,W)}static selection(t){return new e(void 0,W,void 0,void 0,t)}};function Ba(e,t,n,r){let i=t+1>n+20?t-n-1:0,a=e.slice(i,t);return a.push(r),a}function Va(e,t){let n=[],r=!1;return e.iterChangedRanges((e,t)=>n.push(e,t)),t.iterChangedRanges((e,t,i,a)=>{for(let e=0;e<n.length;){let t=n[e++],o=n[e++];a>=t&&i<=o&&(r=!0)}}),r}function Ha(e,t){return e.ranges.length==t.ranges.length&&e.ranges.filter((e,n)=>e.empty!=t.ranges[n].empty).length===0}function Ua(e,t){return e.length?t.length?e.concat(t):e:t}var W=[],Wa=200;function Ga(e,t){if(e.length){let n=e[e.length-1],r=n.selectionsAfter.slice(Math.max(0,n.selectionsAfter.length-Wa));return r.length&&r[r.length-1].eq(t)?e:(r.push(t),Ba(e,e.length-1,1e9,n.setSelAfter(r)))}else return[za.selection([t])]}function Ka(e){let t=e[e.length-1],n=e.slice();return n[e.length-1]=t.setSelAfter(t.selectionsAfter.slice(0,t.selectionsAfter.length-1)),n}function qa(e,t){if(!e.length)return e;let n=e.length,r=W;for(;n;){let i=Ja(e[n-1],t,r);if(i.changes&&!i.changes.empty||i.effects.length){let t=e.slice(0,n);return t[n-1]=i,t}else t=i.mapped,n--,r=i.selectionsAfter}return r.length?[za.selection(r)]:W}function Ja(e,t,n){let r=Ua(e.selectionsAfter.length?e.selectionsAfter.map(e=>e.map(t)):W,n);if(!e.changes)return za.selection(r);let i=e.changes.map(t),a=t.mapDesc(e.changes,!0),o=e.mapped?e.mapped.composeDesc(a):a;return new za(i,b.mapEffects(e.effects,t),o,e.startSelection.map(a),r)}var Ya=/^(input\.type|delete)($|\.)/,Xa=class e{constructor(e,t,n=0,r=void 0){this.done=e,this.undone=t,this.prevTime=n,this.prevUserEvent=r}isolate(){return this.prevTime?new e(this.done,this.undone):this}addChanges(t,n,r,i,a){let o=this.done,s=o[o.length-1];return o=s&&s.changes&&!s.changes.empty&&t.changes&&(!r||Ya.test(r))&&(!s.selectionsAfter.length&&n-this.prevTime<i.newGroupDelay&&i.joinToEvent(a,Va(s.changes,t.changes))||r==`input.type.compose`)?Ba(o,o.length-1,i.minDepth,new za(t.changes.compose(s.changes),Ua(b.mapEffects(t.effects,s.changes),s.effects),s.mapped,s.startSelection,W)):Ba(o,o.length,i.minDepth,t),new e(o,W,n,r)}addSelection(t,n,r,i){let a=this.done.length?this.done[this.done.length-1].selectionsAfter:W;return a.length>0&&n-this.prevTime<i&&r==this.prevUserEvent&&r&&/^select($|\.)/.test(r)&&Ha(a[a.length-1],t)?this:new e(Ga(this.done,t),this.undone,n,r)}addMapping(t){return new e(qa(this.done,t),qa(this.undone,t),this.prevTime,this.prevUserEvent)}pop(e,t,n){let r=e==0?this.done:this.undone;if(r.length==0)return null;let i=r[r.length-1],a=i.selectionsAfter[0]||(i.startSelection?i.startSelection.map(i.changes.invertedDesc,1):t.selection);if(n&&i.selectionsAfter.length)return t.update({selection:i.selectionsAfter[i.selectionsAfter.length-1],annotations:La.of({side:e,rest:Ka(r),selection:a}),userEvent:e==0?`select.undo`:`select.redo`,scrollIntoView:!0});if(i.changes){let n=r.length==1?W:r.slice(0,r.length-1);return i.mapped&&(n=qa(n,i.mapped)),t.update({changes:i.changes,selection:i.startSelection,effects:i.effects,annotations:La.of({side:e,rest:n,selection:a}),filter:!1,userEvent:e==0?`undo`:`redo`,scrollIntoView:!0})}else return null}};Xa.empty=new Xa(W,W);function G(e,t){return y.create(e.ranges.map(t),e.mainIndex)}function K(e,t){return e.update({selection:t,scrollIntoView:!0,userEvent:`select`})}function q({state:e,dispatch:t},n){let r=G(e.selection,n);return r.eq(e.selection,!0)?!1:(t(K(e,r)),!0)}function Za(e,t){return y.cursor(t?e.to:e.from)}function Qa(e,t){return q(e,n=>n.empty?e.moveByChar(n,t):Za(n,t))}function J(e){return e.textDirectionAt(e.state.selection.main.head)==oe.LTR}var $a=e=>Qa(e,!J(e)),eo=e=>Qa(e,J(e));function to(e,t){return q(e,n=>n.empty?e.moveByGroup(n,t):Za(n,t))}var no=e=>to(e,!J(e)),ro=e=>to(e,J(e));typeof Intl<`u`&&Intl.Segmenter;function io(e,t,n){if(t.type.prop(n))return!0;let r=t.to-t.from;return r&&(r>2||/[^\s,.;:]/.test(e.sliceDoc(t.from,t.to)))||t.firstChild}function ao(e,t,n){let r=x(e).resolveInner(t.head),i=n?ze.closedBy:ze.openedBy;for(let a=t.head;;){let t=n?r.childAfter(a):r.childBefore(a);if(!t)break;io(e,t,i)?r=t:a=n?t.to:t.from}let a=r.type.prop(i),o,s;return s=a&&(o=n?Be(e,r.from,1):Be(e,r.to,-1))&&o.matched?n?o.end.to:o.end.from:n?r.to:r.from,y.cursor(s,n?-1:1)}var oo=e=>q(e,t=>ao(e.state,t,!J(e))),so=e=>q(e,t=>ao(e.state,t,J(e)));function co(e,t){return q(e,n=>{if(!n.empty)return Za(n,t);let r=e.moveVertically(n,t);return r.head==n.head?e.moveToLineBoundary(n,t):r})}var lo=e=>co(e,!1),uo=e=>co(e,!0);function fo(e){let t=e.scrollDOM.clientHeight<e.scrollDOM.scrollHeight-2,n=0,r=0,i;if(t){for(let t of e.state.facet(c.scrollMargins)){let i=t(e);i?.top&&(n=Math.max(i?.top,n)),i?.bottom&&(r=Math.max(i?.bottom,r))}i=e.scrollDOM.clientHeight-n-r}else i=(e.dom.ownerDocument.defaultView||window).innerHeight;return{marginTop:n,marginBottom:r,selfScroll:t,height:Math.max(e.defaultLineHeight,i-5)}}function po(e,t){let n=fo(e),{state:r}=e,i=G(r.selection,r=>r.empty?e.moveVertically(r,t,n.height):Za(r,t));if(i.eq(r.selection))return!1;let a;if(n.selfScroll){let t=e.coordsAtPos(r.selection.main.head),o=e.scrollDOM.getBoundingClientRect(),s=o.top+n.marginTop,l=o.bottom-n.marginBottom;t&&t.top>s&&t.bottom<l&&(a=c.scrollIntoView(i.main.head,{y:`start`,yMargin:t.top-s}))}return e.dispatch(K(r,i),{effects:a}),!0}var mo=e=>po(e,!1),ho=e=>po(e,!0);function Y(e,t,n){let r=e.lineBlockAt(t.head),i=e.moveToLineBoundary(t,n);if(i.head==t.head&&i.head!=(n?r.to:r.from)&&(i=e.moveToLineBoundary(t,n,!1)),!n&&i.head==r.from&&r.length){let n=/^\s*/.exec(e.state.sliceDoc(r.from,Math.min(r.from+100,r.to)))[0].length;n&&t.head!=r.from+n&&(i=y.cursor(r.from+n))}return i}var go=e=>q(e,t=>Y(e,t,!0)),_o=e=>q(e,t=>Y(e,t,!1)),vo=e=>q(e,t=>Y(e,t,!J(e))),yo=e=>q(e,t=>Y(e,t,J(e))),bo=e=>q(e,t=>y.cursor(e.lineBlockAt(t.head).from,1)),xo=e=>q(e,t=>y.cursor(e.lineBlockAt(t.head).to,-1));function So(e,t,n){let r=!1,i=G(e.selection,t=>{let i=Be(e,t.head,-1)||Be(e,t.head,1)||t.head>0&&Be(e,t.head-1,1)||t.head<e.doc.length&&Be(e,t.head+1,-1);if(!i||!i.end)return t;r=!0;let a=i.start.from==t.head?i.end.to:i.end.from;return n?y.range(t.anchor,a):y.cursor(a)});return r?(t(K(e,i)),!0):!1}var Co=({state:e,dispatch:t})=>So(e,t,!1);function X(e,t){let n=G(e.state.selection,e=>{let n=t(e);return y.range(e.anchor,n.head,n.goalColumn,n.bidiLevel||void 0,n.assoc)});return n.eq(e.state.selection)?!1:(e.dispatch(K(e.state,n)),!0)}function wo(e,t){return X(e,n=>e.moveByChar(n,t))}var To=e=>wo(e,!J(e)),Eo=e=>wo(e,J(e));function Do(e,t){return X(e,n=>e.moveByGroup(n,t))}var Oo=e=>Do(e,!J(e)),ko=e=>Do(e,J(e)),Ao=e=>X(e,t=>ao(e.state,t,!J(e))),jo=e=>X(e,t=>ao(e.state,t,J(e)));function Mo(e,t){return X(e,n=>e.moveVertically(n,t))}var No=e=>Mo(e,!1),Po=e=>Mo(e,!0);function Fo(e,t){return X(e,n=>e.moveVertically(n,t,fo(e).height))}var Io=e=>Fo(e,!1),Lo=e=>Fo(e,!0),Ro=e=>X(e,t=>Y(e,t,!0)),zo=e=>X(e,t=>Y(e,t,!1)),Bo=e=>X(e,t=>Y(e,t,!J(e))),Vo=e=>X(e,t=>Y(e,t,J(e))),Ho=e=>X(e,t=>y.cursor(e.lineBlockAt(t.head).from)),Uo=e=>X(e,t=>y.cursor(e.lineBlockAt(t.head).to)),Wo=({state:e,dispatch:t})=>(t(K(e,{anchor:0})),!0),Go=({state:e,dispatch:t})=>(t(K(e,{anchor:e.doc.length})),!0),Ko=({state:e,dispatch:t})=>(t(K(e,{anchor:e.selection.main.anchor,head:0})),!0),qo=({state:e,dispatch:t})=>(t(K(e,{anchor:e.selection.main.anchor,head:e.doc.length})),!0),Jo=({state:e,dispatch:t})=>(t(e.update({selection:{anchor:0,head:e.doc.length},userEvent:`select`})),!0),Yo=({state:e,dispatch:t})=>{let n=ms(e).map(({from:t,to:n})=>y.range(t,Math.min(n+1,e.doc.length)));return t(e.update({selection:y.create(n),userEvent:`select`})),!0},Xo=({state:e,dispatch:t})=>{let n=G(e.selection,t=>{let n=x(e),r=n.resolveStack(t.from,1);if(t.empty){let e=n.resolveStack(t.from,-1);e.node.from>=r.node.from&&e.node.to<=r.node.to&&(r=e)}for(let e=r;e;e=e.next){let{node:n}=e;if((n.from<t.from&&n.to>=t.to||n.to>t.to&&n.from<=t.from)&&e.next)return y.range(n.to,n.from)}return t});return n.eq(e.selection)?!1:(t(K(e,n)),!0)};function Zo(e,t){let{state:n}=e,r=n.selection,i=n.selection.ranges.slice();for(let r of n.selection.ranges){let a=n.doc.lineAt(r.head);if(t?a.to<e.state.doc.length:a.from>0)for(let n=r;;){let r=e.moveVertically(n,t);if(r.head<a.from||r.head>a.to){i.some(e=>e.head==r.head)||i.push(r);break}else if(r.head==n.head)break;else n=r}}return i.length==r.ranges.length?!1:(e.dispatch(K(n,y.create(i,i.length-1))),!0)}var Qo=e=>Zo(e,!1),$o=e=>Zo(e,!0),es=({state:e,dispatch:t})=>{let n=e.selection,r=null;return n.ranges.length>1?r=y.create([n.main]):n.main.empty||(r=y.create([y.cursor(n.main.head)])),r?(t(K(e,r)),!0):!1};function ts(e,t){if(e.state.readOnly)return!1;let n=`delete.selection`,{state:r}=e,i=r.changeByRange(r=>{let{from:i,to:a}=r;if(i==a){let o=t(r);o<i?(n=`delete.backward`,o=ns(e,o,!1)):o>i&&(n=`delete.forward`,o=ns(e,o,!0)),i=Math.min(i,o),a=Math.max(a,o)}else i=ns(e,i,!1),a=ns(e,a,!0);return i==a?{range:r}:{changes:{from:i,to:a},range:y.cursor(i,i<r.head?-1:1)}});return i.changes.empty?!1:(e.dispatch(r.update(i,{scrollIntoView:!0,userEvent:n,effects:n==`delete.selection`?c.announce.of(r.phrase(`Selection deleted`)):void 0})),!0)}function ns(e,t,n){if(e instanceof c)for(let r of e.state.facet(c.atomicRanges).map(t=>t(e)))r.between(t,t,(e,r)=>{e<t&&r>t&&(t=n?r:e)});return t}var rs=(e,t,n)=>ts(e,r=>{let i=r.from,{state:a}=e,o=a.doc.lineAt(i),s,c;if(n&&!t&&i>o.from&&i<o.from+200&&!/[^ \t]/.test(s=o.text.slice(0,i-o.from))){if(s[s.length-1]==`	`)return i-1;let e=Oe(s,a.tabSize)%_e(a)||_e(a);for(let t=0;t<e&&s[s.length-1-t]==` `;t++)i--;c=i}else c=Fe(o.text,i-o.from,t,t)+o.from,c==i&&o.number!=(t?a.doc.lines:1)?c+=t?1:-1:!t&&/[\ufe00-\ufe0f]/.test(o.text.slice(c-o.from,i-o.from))&&(c=Fe(o.text,c-o.from,!1,!1)+o.from);return c}),is=e=>rs(e,!1,!0),as=e=>rs(e,!0,!1),os=(e,t)=>ts(e,n=>{let r=n.head,{state:i}=e,a=i.doc.lineAt(r),o=i.charCategorizer(r);for(let e=null;;){if(r==(t?a.to:a.from)){r==n.head&&a.number!=(t?i.doc.lines:1)&&(r+=t?1:-1);break}let s=Fe(a.text,r-a.from,t)+a.from,c=a.text.slice(Math.min(r,s)-a.from,Math.max(r,s)-a.from),l=o(c);if(e!=null&&l!=e)break;(c!=` `||r!=n.head)&&(e=l),r=s}return r}),ss=e=>os(e,!1),cs=e=>os(e,!0),ls=e=>ts(e,t=>{let n=e.lineBlockAt(t.head).to;return t.head<n?n:Math.min(e.state.doc.length,t.head+1)}),us=e=>ts(e,t=>{let n=e.moveToLineBoundary(t,!1).head;return t.head>n?n:Math.max(0,t.head-1)}),ds=e=>ts(e,t=>{let n=e.moveToLineBoundary(t,!0).head;return t.head<n?n:Math.min(e.state.doc.length,t.head+1)}),fs=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange(e=>({changes:{from:e.from,to:e.to,insert:ue.of([``,``])},range:y.cursor(e.from)}));return t(e.update(n,{scrollIntoView:!0,userEvent:`input`})),!0},ps=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange(t=>{if(!t.empty||t.from==0||t.from==e.doc.length)return{range:t};let n=t.from,r=e.doc.lineAt(n),i=n==r.from?n-1:Fe(r.text,n-r.from,!1)+r.from,a=n==r.to?n+1:Fe(r.text,n-r.from,!0)+r.from;return{changes:{from:i,to:a,insert:e.doc.slice(n,a).append(e.doc.slice(i,n))},range:y.cursor(a)}});return n.changes.empty?!1:(t(e.update(n,{scrollIntoView:!0,userEvent:`move.character`})),!0)};function ms(e){let t=[],n=-1;for(let r of e.selection.ranges){let i=e.doc.lineAt(r.from),a=e.doc.lineAt(r.to);if(!r.empty&&r.to==a.from&&(a=e.doc.lineAt(r.to-1)),n>=i.number){let e=t[t.length-1];e.to=a.to,e.ranges.push(r)}else t.push({from:i.from,to:a.to,ranges:[r]});n=a.number+1}return t}function hs(e,t,n){if(e.readOnly)return!1;let r=[],i=[];for(let t of ms(e)){if(n?t.to==e.doc.length:t.from==0)continue;let a=e.doc.lineAt(n?t.to+1:t.from-1),o=a.length+1;if(n){r.push({from:t.to,to:a.to},{from:t.from,insert:a.text+e.lineBreak});for(let n of t.ranges)i.push(y.range(Math.min(e.doc.length,n.anchor+o),Math.min(e.doc.length,n.head+o)))}else{r.push({from:a.from,to:t.from},{from:t.to,insert:e.lineBreak+a.text});for(let e of t.ranges)i.push(y.range(e.anchor-o,e.head-o))}}return r.length?(t(e.update({changes:r,scrollIntoView:!0,selection:y.create(i,e.selection.mainIndex),userEvent:`move.line`})),!0):!1}var gs=({state:e,dispatch:t})=>hs(e,t,!1),_s=({state:e,dispatch:t})=>hs(e,t,!0);function vs(e,t,n){if(e.readOnly)return!1;let r=[];for(let t of ms(e))n?r.push({from:t.from,insert:e.doc.slice(t.from,t.to)+e.lineBreak}):r.push({from:t.to,insert:e.lineBreak+e.doc.slice(t.from,t.to)});let i=e.changes(r);return t(e.update({changes:i,selection:e.selection.map(i,n?1:-1),scrollIntoView:!0,userEvent:`input.copyline`})),!0}var ys=({state:e,dispatch:t})=>vs(e,t,!1),bs=({state:e,dispatch:t})=>vs(e,t,!0),xs=e=>{if(e.state.readOnly)return!1;let{state:t}=e,n=t.changes(ms(t).map(({from:e,to:n})=>(e>0?e--:n<t.doc.length&&n++,{from:e,to:n}))),r=G(t.selection,t=>{let n;if(e.lineWrapping){let r=e.lineBlockAt(t.head),i=e.coordsAtPos(t.head,t.assoc||1);i&&(n=r.bottom+e.documentTop-i.bottom+e.defaultLineHeight/2)}return e.moveVertically(t,!0,n)}).map(n);return e.dispatch({changes:n,selection:r,scrollIntoView:!0,userEvent:`delete.line`}),!0};function Ss(e,t){if(/\(\)|\[\]|\{\}/.test(e.sliceDoc(t-1,t+1)))return{from:t,to:t};let n=x(e).resolveInner(t),r=n.childBefore(t),i=n.childAfter(t),a;return r&&i&&r.to<=t&&i.from>=t&&(a=r.type.prop(ze.closedBy))&&a.indexOf(i.name)>-1&&e.doc.lineAt(r.to).from==e.doc.lineAt(i.from).from&&!/\S/.test(e.sliceDoc(r.to,i.from))?{from:r.to,to:i.from}:null}var Cs=Ts(!1),ws=Ts(!0);function Ts(e){return({state:t,dispatch:n})=>{if(t.readOnly)return!1;let r=t.changeByRange(n=>{let{from:r,to:i}=n,a=t.doc.lineAt(r),o=!e&&r==i&&Ss(t,r);e&&(r=i=(i<=a.to?a:t.doc.lineAt(i)).to);let s=new xe(t,{simulateBreak:r,simulateDoubleBreak:!!o}),c=je(s,r);for(c??=Oe(/^\s*/.exec(t.doc.lineAt(r).text)[0],t.tabSize);i<a.to&&/\s/.test(a.text[i-a.from]);)i++;o?{from:r,to:i}=o:r>a.from&&r<a.from+100&&!/\S/.test(a.text.slice(0,r))&&(r=a.from);let l=[``,ye(t,c)];return o&&l.push(ye(t,s.lineIndent(a.from,-1))),{changes:{from:r,to:i,insert:ue.of(l)},range:y.cursor(r+1+l[1].length)}});return n(t.update(r,{scrollIntoView:!0,userEvent:`input`})),!0}}function Es(e,t){let n=-1;return e.changeByRange(r=>{let i=[];for(let a=r.from;a<=r.to;){let o=e.doc.lineAt(a);o.number>n&&(r.empty||r.to>o.from)&&(t(o,i,r),n=o.number),a=o.to+1}let a=e.changes(i);return{changes:i,range:y.range(a.mapPos(r.anchor,1),a.mapPos(r.head,1))}})}var Ds=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=Object.create(null),r=new xe(e,{overrideIndentation:e=>n[e]??-1}),i=Es(e,(t,i,a)=>{let o=je(r,t.from);if(o==null)return;/\S/.test(t.text)||(o=0);let s=/^\s*/.exec(t.text)[0],c=ye(e,o);(s!=c||a.from<t.from+s.length)&&(n[t.from]=o,i.push({from:t.from,to:t.from+s.length,insert:c}))});return i.changes.empty||t(e.update(i,{userEvent:`indent`})),!0},Os=({state:e,dispatch:t})=>e.readOnly?!1:(t(e.update(Es(e,(t,n)=>{n.push({from:t.from,insert:e.facet(de)})}),{userEvent:`input.indent`})),!0),ks=({state:e,dispatch:t})=>e.readOnly?!1:(t(e.update(Es(e,(t,n)=>{let r=/^\s*/.exec(t.text)[0];if(!r)return;let i=Oe(r,e.tabSize),a=0,o=ye(e,Math.max(0,i-_e(e)));for(;a<r.length&&a<o.length&&r.charCodeAt(a)==o.charCodeAt(a);)a++;n.push({from:t.from+a,to:t.from+r.length,insert:o.slice(a)})}),{userEvent:`delete.dedent`})),!0),As=e=>(e.setTabFocusMode(),!0),js=[{key:`Ctrl-b`,run:$a,shift:To,preventDefault:!0},{key:`Ctrl-f`,run:eo,shift:Eo},{key:`Ctrl-p`,run:lo,shift:No},{key:`Ctrl-n`,run:uo,shift:Po},{key:`Ctrl-a`,run:bo,shift:Ho},{key:`Ctrl-e`,run:xo,shift:Uo},{key:`Ctrl-d`,run:as},{key:`Ctrl-h`,run:is},{key:`Ctrl-k`,run:ls},{key:`Ctrl-Alt-h`,run:ss},{key:`Ctrl-o`,run:fs},{key:`Ctrl-t`,run:ps},{key:`Ctrl-v`,run:ho}],Ms=[{key:`ArrowLeft`,run:$a,shift:To,preventDefault:!0},{key:`Mod-ArrowLeft`,mac:`Alt-ArrowLeft`,run:no,shift:Oo,preventDefault:!0},{mac:`Cmd-ArrowLeft`,run:vo,shift:Bo,preventDefault:!0},{key:`ArrowRight`,run:eo,shift:Eo,preventDefault:!0},{key:`Mod-ArrowRight`,mac:`Alt-ArrowRight`,run:ro,shift:ko,preventDefault:!0},{mac:`Cmd-ArrowRight`,run:yo,shift:Vo,preventDefault:!0},{key:`ArrowUp`,run:lo,shift:No,preventDefault:!0},{mac:`Cmd-ArrowUp`,run:Wo,shift:Ko},{mac:`Ctrl-ArrowUp`,run:mo,shift:Io},{key:`ArrowDown`,run:uo,shift:Po,preventDefault:!0},{mac:`Cmd-ArrowDown`,run:Go,shift:qo},{mac:`Ctrl-ArrowDown`,run:ho,shift:Lo},{key:`PageUp`,run:mo,shift:Io},{key:`PageDown`,run:ho,shift:Lo},{key:`Home`,run:_o,shift:zo,preventDefault:!0},{key:`Mod-Home`,run:Wo,shift:Ko},{key:`End`,run:go,shift:Ro,preventDefault:!0},{key:`Mod-End`,run:Go,shift:qo},{key:`Enter`,run:Cs,shift:Cs},{key:`Mod-a`,run:Jo},{key:`Backspace`,run:is,shift:is,preventDefault:!0},{key:`Delete`,run:as,preventDefault:!0},{key:`Mod-Backspace`,mac:`Alt-Backspace`,run:ss,preventDefault:!0},{key:`Mod-Delete`,mac:`Alt-Delete`,run:cs,preventDefault:!0},{mac:`Mod-Backspace`,run:us,preventDefault:!0},{mac:`Mod-Delete`,run:ds,preventDefault:!0}].concat(js.map(e=>({mac:e.key,run:e.run,shift:e.shift}))),Ns=[{key:`Alt-ArrowLeft`,mac:`Ctrl-ArrowLeft`,run:oo,shift:Ao},{key:`Alt-ArrowRight`,mac:`Ctrl-ArrowRight`,run:so,shift:jo},{key:`Alt-ArrowUp`,run:gs},{key:`Shift-Alt-ArrowUp`,run:ys},{key:`Alt-ArrowDown`,run:_s},{key:`Shift-Alt-ArrowDown`,run:bs},{key:`Mod-Alt-ArrowUp`,run:Qo},{key:`Mod-Alt-ArrowDown`,run:$o},{key:`Escape`,run:es},{key:`Mod-Enter`,run:ws},{key:`Alt-l`,mac:`Ctrl-l`,run:Yo},{key:`Mod-i`,run:Xo,preventDefault:!0},{key:`Mod-[`,run:ks},{key:`Mod-]`,run:Os},{key:`Mod-Alt-\\`,run:Ds},{key:`Shift-Mod-k`,run:xs},{key:`Shift-Mod-\\`,run:Co},{key:`Mod-/`,run:Ea},{key:`Alt-A`,run:ka},{key:`Ctrl-m`,mac:`Shift-Alt-m`,run:As}].concat(Ms),Ps=class{constructor(e,t,n){this.from=e,this.to=t,this.diagnostic=n}},Fs=class e{constructor(e,t,n){this.diagnostics=e,this.panel=t,this.selected=n}static init(t,n,r){let i=r.facet(Q).markerFilter;i&&(t=i(t,r));let a=t.slice().sort((e,t)=>e.from-t.from||e.to-t.to),o=new Ne,s=[],c=0,l=r.doc.iter(),u=0,d=r.doc.length;for(let e=0;;){let t=e==a.length?null:a[e];if(!t&&!s.length)break;let n,r;if(s.length)n=c,r=s.reduce((e,t)=>Math.min(e,t.to),t&&t.from>n?t.from:1e8);else{if(n=t.from,n>d)break;r=t.to,s.push(t),e++}for(;e<a.length;){let t=a[e];if(t.from==n&&(t.to>t.from||t.to==n))s.push(t),e++,r=Math.min(t.to,r);else{r=Math.min(t.from,r);break}}r=Math.min(r,d);let i=!1;if(s.some(e=>e.from==n&&(e.to==r||r==d))&&(i=n==r,!i&&r-n<10)){let e=n-(u+l.value.length);e>0&&(l.next(e),u=n);for(let e=n;;){if(e>=r){i=!0;break}if(!l.lineBreak&&u+l.value.length>e)break;e=u+l.value.length,u+=l.value.length,l.next()}}let f=oc(s);if(i)o.add(n,n,w.widget({widget:new $s(f),diagnostics:s.slice()}));else{let e=s.reduce((e,t)=>t.markClass?e+` `+t.markClass:e,``);o.add(n,r,w.mark({class:`cm-lintRange cm-lintRange-`+f+e,diagnostics:s.slice(),inclusiveEnd:s.some(e=>e.to>r)}))}if(c=r,c==d)break;for(let e=0;e<s.length;e++)s[e].to<=c&&s.splice(e--,1)}let f=o.finish();return new e(f,n,Is(f))}};function Is(e,t=null,n=0){let r=null;return e.between(n,1e9,(e,n,{spec:i})=>{if(!(t&&i.diagnostics.indexOf(t)<0))if(!r)r=new Ps(e,n,t||i.diagnostics[0]);else if(i.diagnostics.indexOf(r.diagnostic)<0)return!1;else r=new Ps(r.from,n,r.diagnostic)}),r}function Ls(e,t){let n=t.pos,r=t.end||n,i=e.state.facet(Q).hideOn(e,n,r);if(i!=null)return i;let a=e.startState.doc.lineAt(t.pos);return!!(e.effects.some(e=>e.is(Bs))||e.changes.touchesRange(a.from,Math.max(a.to,r)))}function Rs(e,t){return e.field(Z,!1)?t:t.concat(b.appendConfig.of(sc))}function zs(e,t){return{effects:Rs(e,[Bs.of(t)])}}var Bs=b.define(),Vs=b.define(),Hs=b.define(),Z=le.define({create(){return new Fs(w.none,null,null)},update(e,t){if(t.docChanged&&e.diagnostics.size){let n=e.diagnostics.map(t.changes),r=null,i=e.panel;if(e.selected){let i=t.changes.mapPos(e.selected.from,1);r=Is(n,e.selected.diagnostic,i)||Is(n,null,i)}!n.size&&i&&t.state.facet(Q).autoPanel&&(i=null),e=new Fs(n,i,r)}for(let n of t.effects)if(n.is(Bs)){let r=t.state.facet(Q).autoPanel?n.value.length?tc.open:null:e.panel;e=Fs.init(n.value,r,t.state)}else n.is(Vs)?e=new Fs(e.diagnostics,n.value?tc.open:null,e.selected):n.is(Hs)&&(e=new Fs(e.diagnostics,e.panel,n.value));return e},provide:e=>[te.from(e,e=>e.panel),c.decorations.from(e,e=>e.diagnostics)]}),Us=w.mark({class:`cm-lintRange cm-lintRange-active`});function Ws(e,t,n){let{diagnostics:r}=e.state.field(Z),i,a=-1,o=-1;r.between(t-(n<0?1:0),t+(n>0?1:0),(e,r,{spec:s})=>{if(t>=e&&t<=r&&(e==r||(t>e||n>0)&&(t<r||n<0)))return i=s.diagnostics,a=e,o=r,!1});let s=e.state.facet(Q).tooltipFilter;return i&&s&&(i=s(i,e.state)),i?{pos:a,end:o,above:e.state.doc.lineAt(a).to<o,create(){return{dom:Gs(e,i)}}}:null}function Gs(e,t){return d(`ul`,{class:`cm-tooltip-lint`},t.map(t=>Qs(e,t,!1)))}var Ks=e=>{let t=e.state.field(Z,!1);return!t||!t.panel?!1:(e.dispatch({effects:Vs.of(!1)}),!0)},qs=Ve.fromClass(class{constructor(e){this.view=e,this.timeout=-1,this.set=!0;let{delay:t}=e.state.facet(Q);this.lintTime=Date.now()+t,this.run=this.run.bind(this),this.timeout=setTimeout(this.run,t)}run(){clearTimeout(this.timeout);let e=Date.now();if(e<this.lintTime-10)this.timeout=setTimeout(this.run,this.lintTime-e);else{this.set=!1;let{state:e}=this.view,{sources:t}=e.facet(Q);t.length&&Js(t.map(e=>Promise.resolve(e(this.view))),t=>{this.view.state.doc==e.doc&&this.view.dispatch(zs(this.view.state,t.reduce((e,t)=>e.concat(t))))},e=>{o(this.view.state,e)})}}update(e){let t=e.state.facet(Q);(e.docChanged||t!=e.startState.facet(Q)||t.needsRefresh&&t.needsRefresh(e))&&(this.lintTime=Date.now()+t.delay,this.set||(this.set=!0,this.timeout=setTimeout(this.run,t.delay)))}force(){this.set&&(this.lintTime=Date.now(),this.run())}destroy(){clearTimeout(this.timeout)}});function Js(e,t,n){let r=[],i=-1;for(let a of e)a.then(n=>{r.push(n),clearTimeout(i),r.length==e.length?t(r):i=setTimeout(()=>t(r),200)},n)}var Q=v.define({combine(e){return{sources:e.map(e=>e.source).filter(e=>e!=null),...Le(e.map(e=>e.config),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null,hideOn:()=>null},{delay:Math.max,markerFilter:Ys,tooltipFilter:Ys,needsRefresh:(e,t)=>e?t?n=>e(n)||t(n):e:t,hideOn:(e,t)=>e?t?(n,r,i)=>e(n,r,i)||t(n,r,i):e:t,autoPanel:(e,t)=>e||t})}}});function Ys(e,t){return e?t?(n,r)=>t(e(n,r),r):e:t}function Xs(e,t={}){return[Q.of({source:e,config:t}),qs,sc]}function Zs(e){let t=[];if(e)actions:for(let{name:n}of e){for(let e=0;e<n.length;e++){let r=n[e];if(/[a-zA-Z]/.test(r)&&!t.some(e=>e.toLowerCase()==r.toLowerCase())){t.push(r);continue actions}}t.push(``)}return t}function Qs(e,t,n){let r=n?Zs(t.actions):[];return d(`li`,{class:`cm-diagnostic cm-diagnostic-`+t.severity},d(`span`,{class:`cm-diagnosticText`},t.renderMessage?t.renderMessage(e):t.message),t.actions?.map((n,i)=>{let a=!1,o=r=>{if(r.preventDefault(),a)return;a=!0;let i=Is(e.state.field(Z).diagnostics,t);i&&n.apply(e,i.from,i.to)},{name:s}=n,c=r[i]?s.indexOf(r[i]):-1,l=c<0?s:[s.slice(0,c),d(`u`,s.slice(c,c+1)),s.slice(c+1)];return d(`button`,{type:`button`,class:`cm-diagnosticAction`+(n.markClass?` `+n.markClass:``),onclick:o,onmousedown:o,"aria-label":` Action: ${s}${c<0?``:` (access key "${r[i]})"`}.`},l)}),t.source&&d(`div`,{class:`cm-diagnosticSource`},t.source))}var $s=class extends se{constructor(e){super(),this.sev=e}eq(e){return e.sev==this.sev}toDOM(){return d(`span`,{class:`cm-lintPoint cm-lintPoint-`+this.sev})}},ec=class{constructor(e,t){this.diagnostic=t,this.id=`item_`+Math.floor(Math.random()*4294967295).toString(16),this.dom=Qs(e,t,!0),this.dom.id=this.id,this.dom.setAttribute(`role`,`option`)}},tc=class e{constructor(e){this.view=e,this.items=[];let t=t=>{if(!(t.ctrlKey||t.altKey||t.metaKey)){if(t.keyCode==27)Ks(this.view),this.view.focus();else if(t.keyCode==38||t.keyCode==33)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(t.keyCode==40||t.keyCode==34)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(t.keyCode==36)this.moveSelection(0);else if(t.keyCode==35)this.moveSelection(this.items.length-1);else if(t.keyCode==13)this.view.focus();else if(t.keyCode>=65&&t.keyCode<=90&&this.selectedIndex>=0){let{diagnostic:n}=this.items[this.selectedIndex],r=Zs(n.actions);for(let i=0;i<r.length;i++)if(r[i].toUpperCase().charCodeAt(0)==t.keyCode){let t=Is(this.view.state.field(Z).diagnostics,n);t&&n.actions[i].apply(e,t.from,t.to)}}else return;t.preventDefault()}},n=e=>{for(let t=0;t<this.items.length;t++)this.items[t].dom.contains(e.target)&&this.moveSelection(t)};this.list=d(`ul`,{tabIndex:0,role:`listbox`,"aria-label":this.view.state.phrase(`Diagnostics`),onkeydown:t,onclick:n}),this.dom=d(`div`,{class:`cm-panel-lint`},this.list,d(`button`,{type:`button`,name:`close`,"aria-label":this.view.state.phrase(`close`),onclick:()=>Ks(this.view)},`×`)),this.update()}get selectedIndex(){let e=this.view.state.field(Z).selected;if(!e)return-1;for(let t=0;t<this.items.length;t++)if(this.items[t].diagnostic==e.diagnostic)return t;return-1}update(){let{diagnostics:e,selected:t}=this.view.state.field(Z),n=0,r=!1,i=null,a=new Set;for(e.between(0,this.view.state.doc.length,(e,o,{spec:s})=>{for(let e of s.diagnostics){if(a.has(e))continue;a.add(e);let o=-1,s;for(let t=n;t<this.items.length;t++)if(this.items[t].diagnostic==e){o=t;break}o<0?(s=new ec(this.view,e),this.items.splice(n,0,s),r=!0):(s=this.items[o],o>n&&(this.items.splice(n,o-n),r=!0)),t&&s.diagnostic==t.diagnostic?s.dom.hasAttribute(`aria-selected`)||(s.dom.setAttribute(`aria-selected`,`true`),i=s):s.dom.hasAttribute(`aria-selected`)&&s.dom.removeAttribute(`aria-selected`),n++}});n<this.items.length&&!(this.items.length==1&&this.items[0].diagnostic.from<0);)r=!0,this.items.pop();this.items.length==0&&(this.items.push(new ec(this.view,{from:-1,to:-1,severity:`info`,message:this.view.state.phrase(`No diagnostics`)})),r=!0),i?(this.list.setAttribute(`aria-activedescendant`,i.id),this.view.requestMeasure({key:this,read:()=>({sel:i.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:e,panel:t})=>{let n=t.height/this.list.offsetHeight;e.top<t.top?this.list.scrollTop-=(t.top-e.top)/n:e.bottom>t.bottom&&(this.list.scrollTop+=(e.bottom-t.bottom)/n)}})):this.selectedIndex<0&&this.list.removeAttribute(`aria-activedescendant`),r&&this.sync()}sync(){let e=this.list.firstChild;function t(){let t=e;e=t.nextSibling,t.remove()}for(let n of this.items)if(n.dom.parentNode==this.list){for(;e!=n.dom;)t();e=n.dom.nextSibling}else this.list.insertBefore(n.dom,e);for(;e;)t()}moveSelection(e){if(this.selectedIndex<0)return;let t=Is(this.view.state.field(Z).diagnostics,this.items[e].diagnostic);t&&this.view.dispatch({selection:{anchor:t.from,head:t.to},scrollIntoView:!0,effects:Hs.of(t)})}static open(t){return new e(t)}};function nc(e,t=`viewBox="0 0 40 40"`){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`}function rc(e){return nc(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`,`width="6" height="3"`)}var ic=c.baseTheme({".cm-diagnostic":{padding:`3px 6px 3px 8px`,marginLeft:`-1px`,display:`block`,whiteSpace:`pre-wrap`},".cm-diagnostic-error":{borderLeft:`5px solid #d11`},".cm-diagnostic-warning":{borderLeft:`5px solid orange`},".cm-diagnostic-info":{borderLeft:`5px solid #999`},".cm-diagnostic-hint":{borderLeft:`5px solid #66d`},".cm-diagnosticAction":{font:`inherit`,border:`none`,padding:`2px 4px`,backgroundColor:`#444`,color:`white`,borderRadius:`3px`,marginLeft:`8px`,cursor:`pointer`},".cm-diagnosticSource":{fontSize:`70%`,opacity:.7},".cm-lintRange":{backgroundPosition:`left bottom`,backgroundRepeat:`repeat-x`,paddingBottom:`0.7px`},".cm-lintRange-error":{backgroundImage:rc(`#d11`)},".cm-lintRange-warning":{backgroundImage:rc(`orange`)},".cm-lintRange-info":{backgroundImage:rc(`#999`)},".cm-lintRange-hint":{backgroundImage:rc(`#66d`)},".cm-lintRange-active":{backgroundColor:`#ffdd9980`},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:`relative`,"&:after":{content:`""`,position:`absolute`,bottom:0,left:`-2px`,borderLeft:`3px solid transparent`,borderRight:`3px solid transparent`,borderBottom:`4px solid #d11`}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:`orange`}},".cm-lintPoint-info":{"&:after":{borderBottomColor:`#999`}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:`#66d`}},".cm-panel.cm-panel-lint":{position:`relative`,"& ul":{maxHeight:`100px`,overflowY:`auto`,"& [aria-selected]":{backgroundColor:`#ddd`,"& u":{textDecoration:`underline`}},"&:focus [aria-selected]":{background_fallback:`#bdf`,backgroundColor:`Highlight`,color_fallback:`white`,color:`HighlightText`},"& u":{textDecoration:`none`},padding:0,margin:0},"& [name=close]":{position:`absolute`,top:`0`,right:`2px`,background:`inherit`,border:`none`,font:`inherit`,padding:0,margin:0}},"&dark .cm-lintRange-active":{backgroundColor:`#86714a80`},"&dark .cm-panel.cm-panel-lint ul":{"& [aria-selected]":{backgroundColor:`#2e343e`}}});function ac(e){return e==`error`?4:e==`warning`?3:e==`info`?2:1}function oc(e){let t=`hint`,n=1;for(let r of e){let e=ac(r.severity);e>n&&(n=e,t=r.severity)}return t}var sc=[Z,c.decorations.compute([Z],e=>{let{selected:t,panel:n}=e.field(Z);return!t||!n||t.from==t.to?w.none:w.set([Us.range(t.from,t.to)])}),l(Ws,{hideOn:Ls}),ic];function cc(e){let t=[];return e.iterate({enter:e=>{let n=e.node;if(!n.type.isError)return;let r=n.parent,i=lc(n),a={from:n.from,to:n.to,severity:`error`,type:`Syntax Error`};n.from===n.to?i?(a.message=`Unrecognized token <${i.name}> in <${r.name}>`,a.to=i.to):a.message=`Incomplete <${(r.enterUnfinishedNodesBefore(n.to)||r).name}>`:a.message=`Unrecognized token in <${r.name}>`,t.push(a)}}),t}function lc(e){return e?e.nextSibling||lc(e.parent):null}var uc=`first-item`,dc={create(e){return{enter(t){if(t.name!==`FilterExpression`)return;let n=e.readContent(t.from,t.to);if(fc().test(n)){let{from:r,to:i}=t;e.report({from:r,to:i,message:`First item is accessed via [1]`,severity:`warning`,type:uc,actions:[{name:`fix`,apply(t,a=r,o=i){e.updateContent(a,o,n.replace(fc(),`[1]`))}}]})}}}}};function fc(){return/\[\s*0\s*\]$/}var pc=[dc];function mc(e){let{readContent:t,syntaxTree:n,updateContent:r}=e,i=[],a={readContent:t,report:e=>{i.push(e)},updateContent:r},o=pc.map(e=>e.create(a));return n.iterate({enter:e=>{for(let t of o)t.enter&&t.enter(e)},leave:e=>{for(let t of o)t.leave&&t.leave(e)}}),i}function hc(e){return[...cc(e.syntaxTree),...mc(e)]}var gc=()=>e=>e.state.doc.length===0?[]:hc({syntaxTree:x(e.state),readContent:(t,n)=>e.state.sliceDoc(t,n),updateContent:(t,n,r)=>e.dispatch({changes:{from:t,to:n,insert:r}})}).map(e=>({...e,source:e.type}));function _c(e){return{all:e||=new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(e){e(n)}),(r=e.get(`*`))&&r.slice().map(function(e){e(t,n)})}}}var vc=[H("function(${params}) ${body}",{label:`function`,detail:`definition`,type:`keyword`}),H("for ${var} in ${collection} return ${value}",{label:`for`,detail:`expression`,type:`keyword`}),H("every ${var} in ${collection} satisfies ${condition}",{label:`every`,detail:`quantified expression`,type:`keyword`}),H("some ${var} in ${collection} satisfies ${condition}",{label:`some`,detail:`quantified expression`,type:`keyword`}),H("if ${condition} then ${value} else ${other value}",{label:`if`,detail:`block`,type:`keyword`}),H("{ ${key}: ${value} }",{label:`context`,detail:`block`,type:`keyword`}),H(`null`,{label:`null`,detail:`literal`,type:`keyword`}),H(`true`,{label:`true`,detail:`literal`,type:`keyword`}),H(`false`,{label:`false`,detail:`literal`,type:`keyword`})];function yc(){return yc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yc.apply(null,arguments)}function bc(e){let{context:t,after:n,before:r,keyword:i}=e;return Ac({nodes:t,before:r,after:n,keyword:i},Qr([{label:i,type:`keyword`,boost:10}]))}var xc=[bc({context:`InExpression`,keyword:`in`}),bc({context:`IfExpression`,keyword:`then`,after:`if`,before:`else`}),bc({context:`IfExpression`,keyword:`else`,after:`then`}),bc({context:`QuantifiedExpression`,keyword:`satisfies`}),bc({context:`ForExpression`,after:`InExpressions`,keyword:`return`})],Sc=[`StringLiteral`,`Identifier`,`LineComment`,`BlockComment`,`PathExpression`,`Context`,`Key`,`ParameterName`],Cc=[`Expr`,`ContextEntry`];function wc(e){let t=[...Sc,...Cc];return n=>{let{state:r,pos:i}=n,a=kc(x(r).resolveInner(i,-1),t);if(a){let[e,t]=a;if(Sc.includes(t))return null}return e(n)}}function Tc(e){return wc(Qr(e.map(e=>yc({},e,{type:`text`}))))}function Ec(e,t,n){return Oc(e,t,n,-1)}function Dc(e,t,n){return Oc(e,t,n,1)}function Oc(e,t,n,r){let i=e[r>0?`childAfter`:`childBefore`](t);for(;i;){if(n.includes(i.name))return i;if(i.type.isError&&i.firstChild&&n.includes(i.firstChild.name))return i.firstChild;i=i[r>0?`nextSibling`:`prevSibling`]}return null}function kc(e,t){for(Array.isArray(t)||(t=[t]);e;e=e.parent){let n=e.type,r=t.find(e=>e&&n.is(e));if(r)return[e,r];if(n.isTop)break}return null}function Ac(e,t){let{nodes:n,before:r,after:i,keyword:a}=e;return e=>{let{state:o,pos:s}=e,c=kc(x(o).resolveInner(s,-1),n);if(!c)return null;let[l]=c;return Ec(l,s,[a,r])||Dc(l,s,[a,i])||i&&!Ec(l,s,[i])?null:t(e)}}var jc=fe.define({parser:Jr.configure({props:[Ee.add({Context:we({closing:`}`}),"List FilterExpression":we({closing:`]`}),"ParenthesizedExpression FunctionInvocation":pe({except:/^\s*\)/}),"ForExpression QuantifiedExpression IfExpression":pe({except:/^\s*(then|else|return|satisfies)\b/}),FunctionDefinition:pe({except:/^\s*(\(|\))/})}),he.add({Context:Re,List:Re,ParenthesizedExpression:Re,FunctionDefinition(e){let t=e.getChild(`)`);return t?{from:t.to,to:e.to}:null}})]}),languageData:{indentOnInput:/^\s*(\)|\}|\]|then|else|return|satisfies)$/,commentTokens:{line:`//`,block:{open:`/*`,close:`*/`}}}}),Mc=jc.configure({top:`UnaryTests`},`FEEL unary tests`),Nc=jc.configure({top:`Expression`},`FEEL expression`);function Pc(e={}){let t=e.dialect===`unaryTests`?Mc:Nc,n=e.parserDialect,r=Vr(e.context),i=t.configure({contextTracker:r,dialect:n});return new ke(i,[...(e.completions||[Tc(vc),xc].flat()).map(e=>i.data.of({autocomplete:e}))])}var Fc=[{name:`not`,type:`function`,params:[{name:`negand`}],info:`<p>Returns the logical negation of the given value.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">not(negand: boolean): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">not(true)
// false

not(null)
// null
</code></pre>
`},{name:`get value`,type:`function`,params:[{name:`context`},{name:`key`}],info:`<p>Returns the value of the context entry with the given key.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">get value(context: context, key: string): Any
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">get value({foo: 123}, &quot;foo&quot;)
// 123

get value({a: 1}, &quot;b&quot;)
// null
</code></pre>
`},{name:`get entries`,type:`function`,params:[{name:`context`}],info:`<p>Returns the entries of the context as a list of key-value-pairs.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">get entries(context: context): list&lt;context&gt;
</code></pre>
<p>The return value is a list of contexts. Each context contains two entries for &quot;key&quot; and &quot;value&quot;.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">get entries({foo: 123})
// [{key: &quot;foo&quot;, value: 123}]
</code></pre>
`},{name:`context put`,type:`function`,params:[{name:`context`},{name:`keys`},{name:`value`}],info:`<p>Adds a new entry with the given value to the context. The path of the entry is defined by the keys. Returns a new context that includes the entry.</p>
<p>If <code>keys</code> contains the keys <code>[k1, k2]</code> then it adds the nested entry <code>k1.k2 = value</code> to the context.</p>
<p>If an entry for the same keys already exists in the context, it overrides the value.</p>
<p>If <code>keys</code> are empty, it returns <code>null</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">context put(context: context, keys: list&lt;string&gt;, value: Any): context
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">context put({x:1}, [&quot;y&quot;], 2)
// {x:1, y:2}

context put({x:1, y: {z:0}}, [&quot;y&quot;, &quot;z&quot;], 2)
// {x:1, y: {z:2}}

context put({x:1}, [&quot;y&quot;, &quot;z&quot;], 2)
// {x:1, y: {z:2}}
</code></pre>
`},{name:`string`,type:`function`,params:[{name:`from`}],info:`<p>Returns the given value as a string representation.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">string(from: Any): string
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">string(1.1)
// &quot;1.1&quot;

string(date(&quot;2012-12-25&quot;))
// &quot;2012-12-25&quot;
</code></pre>
`},{name:`number`,type:`function`,params:[{name:`from`}],info:`<p>Parses the given string to a number.</p>
<p>Returns <code>null</code> if the string is not a number.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">number(from: string): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">number(&quot;1500.5&quot;)
// 1500.5
</code></pre>
`},{name:`number`,type:`function`,params:[{name:`from`},{name:`grouping separator`}],info:`<p>Parses the given string to a number using the specified grouping separator.</p>
<p>Returns <code>null</code> if the string is not a number.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">number(from: string, grouping separator: string): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">number(&quot;1,500&quot;, &quot;,&quot;)
// 1500
</code></pre>
`},{name:`number`,type:`function`,params:[{name:`from`},{name:`grouping separator`},{name:`decimal separator`}],info:`<p>Parses the given string to a number using the specified grouping and decimal separators.</p>
<p>Returns <code>null</code> if the string is not a number.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">number(from: string, grouping separator: string, decimal separator: string): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">number(&quot;1 500.5&quot;, &quot; &quot;, &quot;.&quot;)
// 1500.5
</code></pre>
`},{name:`context`,type:`function`,params:[{name:`entries`}],info:`<p>Constructs a context of the given list of key-value pairs. It is the reverse function to <a href="feel-built-in-functions-context.md#get-entriescontext">get entries()</a>.</p>
<p>Each key-value pair must be a context with two entries: <code>key</code> and <code>value</code>. The entry with name <code>key</code> must have a value of the type <code>string</code>.</p>
<p>It might override context entries if the keys are equal. The entries are overridden in the same order as the contexts in the given list.</p>
<p>Returns <code>null</code> if one of the entries is not a context or if a context doesn&#39;t contain the required entries.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">context(entries: list&lt;context&gt;): context
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">context([{&quot;key&quot;:&quot;a&quot;, &quot;value&quot;:1}, {&quot;key&quot;:&quot;b&quot;, &quot;value&quot;:2}])
// {a:1, b:2}
</code></pre>
`},{name:`date`,type:`function`,params:[{name:`from`}],info:`<p>Returns a date from the given value.</p>
<p>Returns <code>null</code> if the string is not a valid calendar date. For example, <code>&quot;2024-06-31&quot;</code> is invalid because June has
only 30 days.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">date(from: string): date
</code></pre>
<p>Parses the given string into a date.</p>
<pre><code class="language-feel">date(from: date and time): date
</code></pre>
<p>Extracts the date component from the given date and time.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">date(&quot;2018-04-29&quot;)
// date(&quot;2018-04-29&quot;)

date(date and time(&quot;2012-12-25T11:00:00&quot;))
// date(&quot;2012-12-25&quot;)
</code></pre>
`},{name:`date`,type:`function`,params:[{name:`year`},{name:`month`},{name:`day`}],info:`<p>Returns a date from the given components.</p>
<p>Returns <code>null</code> if the components don&#39;t represent a valid calendar date. For example, <code>2024,6,31</code> is invalid because
June has only 30 days.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">date(year: number, month: number, day: number): date
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">date(2012, 12, 25)
// date(&quot;2012-12-25&quot;)
</code></pre>
`},{name:`time`,type:`function`,params:[{name:`from`}],info:`<p>Returns a time from the given value.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">time(from: string): time
</code></pre>
<p>Parses the given string into a time.</p>
<pre><code class="language-feel">time(from: date and time): time
</code></pre>
<p>Extracts the time component from the given date and time.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">time(&quot;12:00:00&quot;)
// time(&quot;12:00:00&quot;)

time(date and time(&quot;2012-12-25T11:00:00&quot;))
// time(&quot;11:00:00&quot;)
</code></pre>
`},{name:`time`,type:`function`,params:[{name:`hour`},{name:`minute`},{name:`second`}],info:`<p>Returns a time from the given components.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">time(hour: number, minute: number, second: number): time
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">time(23, 59, 0)
// time(&quot;23:59:00&quot;)
</code></pre>
`},{name:`time`,type:`function`,params:[{name:`hour`},{name:`minute`},{name:`second`},{name:`offset`}],info:`<p>Returns a time from the given components, including a timezone offset.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">time(hour: number, minute: number, second: number, offset: days and time duration): time
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">time(14, 30, 0, duration(&quot;PT1H&quot;))
// time(&quot;14:30:00+01:00&quot;)
</code></pre>
`},{name:`date and time`,type:`function`,params:[{name:`from`}],info:`<p>Parses the given string into a date and time. The function supports strings in the format <code>YYYY-MM-DDThh:mm:ss</code> with
optional timezone information either as offset (e.g., <code>+01:00</code> or <code>Z</code>), as IANA timezone ID (e.g., <code>@Europe/Berlin</code>), or
as a combination of both (e.g., <code>+01:00[Europe/Berlin]</code>).</p>
<p>Returns <code>null</code> if the string is not a valid calendar date. For example, <code>&quot;2024-06-31T10:00:00&quot;</code> is invalid because
June has only 30 days.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">date and time(from: string): date and time
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">date and time(&quot;2018-04-29T09:30:00&quot;)
// date and time(&quot;2018-04-29T09:30:00&quot;)

date and time(&quot;2018-04-29T09:30:00+02:00&quot;)
// date and time(&quot;2018-04-29T09:30:00+02:00&quot;)

date and time(&quot;2018-04-29T09:30:00@Europe/Berlin&quot;)
// date and time(&quot;2018-04-29T09:30:00@Europe/Berlin&quot;)

date and time(&quot;2018-04-29T09:30:00+02:00[Europe/Berlin]&quot;)
// date and time(&quot;2018-04-29T09:30:00@Europe/Berlin&quot;)
</code></pre>
`},{name:`date and time`,type:`function`,params:[{name:`date`},{name:`time`}],info:`<p>Returns a date and time from the given components.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">date and time(date: date, time: time): date and time
</code></pre>
<pre><code class="language-feel">date and time(date: date and time, time: time): date and time
</code></pre>
<p>Returns a date and time value that consists of the date component of <code>date</code> combined with <code>time</code>.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">date and time(date(&quot;2012-12-24&quot;),time(&quot;T23:59:00&quot;))
// date and time(&quot;2012-12-24T23:59:00&quot;)

date and time(date and time(&quot;2012-12-25T11:00:00&quot;),time(&quot;T23:59:00&quot;))
// date and time(&quot;2012-12-25T23:59:00&quot;)
</code></pre>
`},{name:`duration`,type:`function`,params:[{name:`from`}],info:`<p>Parses the given string into a duration. The duration is either a days and time duration or a years and months duration.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">duration(from: string): days and time duration
</code></pre>
<pre><code class="language-feel">duration(from: string): years and months duration
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">duration(&quot;P5D&quot;)
// duration(&quot;P5D&quot;)

duration(&quot;P32Y&quot;)
// duration(&quot;P32Y&quot;)
</code></pre>
`},{name:`years and months duration`,type:`function`,params:[{name:`from`},{name:`to`}],info:`<p>Returns the years and months duration between <code>from</code> and <code>to</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">years and months duration(from: date, to: date): years and months duration
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">years and months duration(date(&quot;2011-12-22&quot;), date(&quot;2013-08-24&quot;))
// duration(&quot;P1Y8M&quot;)
</code></pre>
`},{name:`from json`,type:`function`,params:[{name:`value`}],info:`<p>Parses a JSON string into a FEEL value. The function converts JSON primitives, objects, and arrays into their corresponding FEEL types.</p>
<p>Returns <code>null</code> if the string is not a valid JSON value.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">from json(value: string): Any
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">from json(&quot;{\\&quot;a\\&quot;: 1, \\&quot;b\\&quot;: 2}&quot;)
// {a: 1, b: 2}

from json(&quot;true&quot;)
// true

from json(&quot;\\&quot;2023-06-14\\&quot;&quot;)
// &quot;2023-06-14&quot;
</code></pre>
`},{name:`to json`,type:`function`,params:[{name:`value`}],info:`<p>Converts a FEEL value into a JSON string. The function converts FEEL primitives, contexts, and lists into their
corresponding JSON types. Temporal values are converted to their ISO 8601 string representation, including timezone
information for date and time values (format: <code>2025-11-24T10:00:00+01:00[Europe/Berlin]</code>).</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">to json(value: Any): string
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">to json({a: 1, b: 2})
// &quot;{\\&quot;a\\&quot;:1,\\&quot;b\\&quot;:2}&quot;

to json(true)
// &quot;true&quot;

to json(@&quot;2023-06-14&quot;)
// &quot;\\&quot;2023-06-14\\&quot;&quot;

to json(@&quot;2025-11-24T10:00:00@Europe/Berlin&quot;)
// &quot;\\&quot;2025-11-24T10:00:00+01:00[Europe/Berlin]\\&quot;&quot;

to json(@&quot;P3Y&quot;)
// &quot;\\&quot;P3Y\\&quot;&quot;
</code></pre>
`},{name:`list contains`,type:`function`,params:[{name:`list`},{name:`element`}],info:`<p>Returns <code>true</code> if the given list contains the element. Otherwise, returns <code>false</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">list contains(list: list, element: Any): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">list contains([1,2,3], 2)
// true
</code></pre>
`},{name:`count`,type:`function`,params:[{name:`list`}],info:`<p>Returns the number of elements of the given list.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">count(list: list): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">count([1,2,3])
// 3
</code></pre>
`},{name:`min`,type:`function`,params:[{name:`list`}],info:`<p>Returns the minimum of the given list.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">min(list: list): Any
</code></pre>
<p>All elements in <code>list</code> should have the same type and be comparable.</p>
<p>The parameter <code>list</code> can be passed as a list or as a sequence of elements.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">min([1,2,3])
// 1

min(1,2,3)
// 1
</code></pre>
`},{name:`max`,type:`function`,params:[{name:`list`}],info:`<p>Returns the maximum of the given list.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">max(list: list): Any
</code></pre>
<p>All elements in <code>list</code> should have the same type and be comparable.</p>
<p>The parameter <code>list</code> can be passed as a list or as a sequence of elements.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">max([1,2,3])
// 3

max(1,2,3)
// 3
</code></pre>
`},{name:`sum`,type:`function`,params:[{name:`list`}],info:`<p>Returns the sum of the given list of numbers.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">sum(list: list&lt;number&gt;): number
</code></pre>
<p>The parameter <code>list</code> can be passed as a list or as a sequence of elements.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">sum([1,2,3])
// 6

sum(1,2,3)
// 6
</code></pre>
`},{name:`product`,type:`function`,params:[{name:`list`}],info:`<p>Returns the product of the given list of numbers.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">product(list: list&lt;number&gt;): number
</code></pre>
<p>The parameter <code>list</code> can be passed as a list or as a sequence of elements.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">product([2, 3, 4])
// 24

product(2, 3, 4)
// 24
</code></pre>
`},{name:`mean`,type:`function`,params:[{name:`list`}],info:`<p>Returns the arithmetic mean (i.e. average) of the given list of numbers.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">mean(list: list&lt;number&gt;): number
</code></pre>
<p>The parameter <code>list</code> can be passed as a list or as a sequence of elements.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">mean([1,2,3])
// 2

mean(1,2,3)
// 2
</code></pre>
`},{name:`median`,type:`function`,params:[{name:`list`}],info:`<p>Returns the median element of the given list of numbers.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">median(list: list&lt;number&gt;): number
</code></pre>
<p>The parameter <code>list</code> can be passed as a list or as a sequence of elements.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">median(8, 2, 5, 3, 4)
// 4

median([6, 1, 2, 3])
// 2.5
</code></pre>
`},{name:`stddev`,type:`function`,params:[{name:`list`}],info:`<p>Returns the standard deviation of the given list of numbers.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">stddev(list: list&lt;number&gt;): number
</code></pre>
<p>The parameter <code>list</code> can be passed as a list or as a sequence of elements.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">stddev(2, 4, 7, 5)
// 2.0816659994661326

stddev([2, 4, 7, 5])
// 2.0816659994661326
</code></pre>
`},{name:`mode`,type:`function`,params:[{name:`list`}],info:`<p>Returns the mode of the given list of numbers.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">mode(list: list&lt;number&gt;): number
</code></pre>
<p>The parameter <code>list</code> can be passed as a list or as a sequence of elements.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">mode(6, 3, 9, 6, 6)
// [6]

mode([6, 1, 9, 6, 1])
// [1, 6]
</code></pre>
`},{name:`all`,type:`function`,params:[{name:`list`}],info:`<p>Returns <code>false</code> if any element of the given list is <code>false</code>. Otherwise, returns <code>true</code>.</p>
<p>If the given list is empty, it returns <code>true</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">all(list: list&lt;boolean&gt;): boolean
</code></pre>
<p>The parameter <code>list</code> can be passed as a list or as a sequence of elements.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">all([true,false])
// false

all(false,null,true)
// false
</code></pre>
<p>:::info
The function <code>all()</code> replaced the previous function <code>and()</code>. The previous function is deprecated and
should not be used anymore.
:::</p>
`},{name:`any`,type:`function`,params:[{name:`list`}],info:`<p>Returns <code>true</code> if any element of the given list is <code>true</code>. Otherwise, returns <code>false</code>.</p>
<p>If the given list is empty, it returns <code>false</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">any(list: list&lt;boolean&gt;): boolean
</code></pre>
<p>The parameter <code>list</code> can be passed as a list or as a sequence of elements.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">any([false,true])
// true

any(false,null,true)
// true
</code></pre>
<p>:::info
The function <code>any()</code> replaced the previous function <code>or()</code>. The previous function is deprecated and
should not be used anymore.
:::</p>
`},{name:`sublist`,type:`function`,params:[{name:`list`},{name:`start position`}],info:`<p>Returns a partial list of the given value starting at <code>start position</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">sublist(list: list, start position: number): list
</code></pre>
<p>The <code>start position</code> starts at the index <code>1</code>. The last position is <code>-1</code>.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">sublist([1,2,3], 2)
// [2,3]
</code></pre>
`},{name:`sublist`,type:`function`,params:[{name:`list`},{name:`start position`},{name:`length`}],info:`<p>Returns a partial list of the given value starting at <code>start position</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">sublist(list: list, start position: number, length: number): list
</code></pre>
<p>The <code>start position</code> starts at the index <code>1</code>. The last position is <code>-1</code>.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">sublist([1,2,3], 1, 2)
// [1,2]
</code></pre>
`},{name:`append`,type:`function`,params:[{name:`list`},{name:`items`}],info:`<p>Returns the given list with all <code>items</code> appended.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">append(list: list, items: Any): list
</code></pre>
<p>The parameter <code>items</code> can be a single element or a sequence of elements.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">append([1], 2, 3)
// [1,2,3]
</code></pre>
`},{name:`concatenate`,type:`function`,params:[{name:`lists`}],info:`<p>Returns a list that includes all elements of the given lists.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">concatenate(lists: list): list
</code></pre>
<p>The parameter <code>lists</code> is a sequence of lists.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">concatenate([1,2],[3])
// [1,2,3]

concatenate([1],[2],[3])
// [1,2,3]
</code></pre>
`},{name:`insert before`,type:`function`,params:[{name:`list`},{name:`position`},{name:`newItem`}],info:`<p>Returns the given list with <code>newItem</code> inserted at <code>position</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">insert before(list: list, position: number, newItem: Any): list
</code></pre>
<p>The <code>position</code> starts at the index <code>1</code>. The last position is <code>-1</code>.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">insert before([1,3],1,2)
// [2,1,3]
</code></pre>
`},{name:`remove`,type:`function`,params:[{name:`list`},{name:`position`}],info:`<p>Returns the given list without the element at <code>position</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">remove(list: list, position: number): list
</code></pre>
<p>The <code>position</code> starts at the index <code>1</code>. The last position is <code>-1</code>.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">remove([1,2,3], 2)
// [1,3]
</code></pre>
`},{name:`reverse`,type:`function`,params:[{name:`list`}],info:`<p>Returns the given list in revered order.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">reverse(list: list): list
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">reverse([1,2,3])
// [3,2,1]
</code></pre>
`},{name:`index of`,type:`function`,params:[{name:`list`},{name:`match`}],info:`<p>Returns an ascending list of positions containing <code>match</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">index of(list: list, match: Any): list&lt;number&gt;
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">index of([1,2,3,2],2)
// [2,4]
</code></pre>
`},{name:`union`,type:`function`,params:[{name:`list`}],info:`<p>Returns a list that includes all elements of the given lists without duplicates.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">union(list: list): list
</code></pre>
<p>The parameter <code>list</code> is a sequence of lists.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">union([1,2],[2,3])
// [1,2,3]
</code></pre>
`},{name:`distinct values`,type:`function`,params:[{name:`list`}],info:`<p>Returns the given list without duplicates.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">distinct values(list: list): list
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">distinct values([1,2,3,2,1])
// [1,2,3]
</code></pre>
`},{name:`flatten`,type:`function`,params:[{name:`list`}],info:`<p>Returns a list that includes all elements of the given list without nested lists.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">flatten(list: list): list
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">flatten([[1,2],[[3]], 4])
// [1,2,3,4]
</code></pre>
`},{name:`sort`,type:`function`,params:[{name:`list`},{name:`precedes`}],info:`<p>Returns the given list sorted by the <code>precedes</code> function.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">sort(list: list, precedes: function&lt;(Any, Any) -&gt; boolean&gt;): list
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">sort(list: [3,1,4,5,2], precedes: function(x,y) x &lt; y)
// [1,2,3,4,5]
</code></pre>
`},{name:`string join`,type:`function`,params:[{name:`list`}],info:`<p>Joins a list of strings into a single string. This is similar to
Java&#39;s <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/stream/Collectors.html#joining(java.lang.CharSequence,java.lang.CharSequence,java.lang.CharSequence)">joining</a>
function.</p>
<p>If an item of the list is <code>null</code>, the item is ignored for the result string. If an item is
neither a string nor <code>null</code>, the function returns <code>null</code> instead of a string.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">string join(list: list&lt;string&gt;): string
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">string join([&quot;a&quot;,&quot;b&quot;,&quot;c&quot;])
// &quot;abc&quot;

string join([&quot;a&quot;,null,&quot;c&quot;])
// &quot;ac&quot;

string join([])
// &quot;&quot;
</code></pre>
`},{name:`string join`,type:`function`,params:[{name:`list`},{name:`delimiter`}],info:`<p>Joins a list of strings into a single string. This is similar to
Java&#39;s <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/stream/Collectors.html#joining(java.lang.CharSequence,java.lang.CharSequence,java.lang.CharSequence)">joining</a>
function.</p>
<p>If an item of the list is <code>null</code>, the item is ignored for the result string. If an item is
neither a string nor <code>null</code>, the function returns <code>null</code> instead of a string.</p>
<p>The resulting string contains a <code>delimiter</code> between each element.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">string join(list: list&lt;string&gt;, delimiter: string): string
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">string join([&quot;a&quot;], &quot;X&quot;)
// &quot;a&quot;

string join([&quot;a&quot;,&quot;b&quot;,&quot;c&quot;], &quot;, &quot;)
// &quot;a, b, c&quot;
</code></pre>
`},{name:`decimal`,type:`function`,params:[{name:`n`},{name:`scale`}],info:`<p>Rounds the given value at the given scale.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">decimal(n: number, scale: number): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">decimal(1/3, 2)
// .33

decimal(1.5, 0)
// 2
</code></pre>
`},{name:`floor`,type:`function`,params:[{name:`n`}],info:`<p>Rounds the given value with rounding mode flooring.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">floor(n: number): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">floor(1.5)
// 1

floor(-1.5)
// -2
</code></pre>
`},{name:`floor`,type:`function`,params:[{name:`n`},{name:`scale`}],info:`<p>Rounds the given value with rounding mode flooring at the given scale.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">floor(n: number, scale: number): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">floor(-1.56, 1)
// -1.6
</code></pre>
`},{name:`ceiling`,type:`function`,params:[{name:`n`}],info:`<p>Rounds the given value with rounding mode ceiling.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">ceiling(n: number): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">ceiling(1.5)
// 2

ceiling(-1.5)
// -1
</code></pre>
`},{name:`ceiling`,type:`function`,params:[{name:`n`},{name:`scale`}],info:`<p>Rounds the given value with rounding mode ceiling at the given scale.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">ceiling(n: number, scale: number): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">ceiling(-1.56, 1)
// -1.5
</code></pre>
`},{name:`round up`,type:`function`,params:[{name:`n`},{name:`scale`}],info:`<p>Rounds the given value with the rounding mode round-up at the given scale.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">round up(n: number, scale: number): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">round up(5.5)
// 6

round up(-5.5)
// -6

round up(1.121, 2)
// 1.13

round up(-1.126, 2)
// -1.13
</code></pre>
`},{name:`round down`,type:`function`,params:[{name:`n`},{name:`scale`}],info:`<p>Rounds the given value with the rounding mode round-down at the given scale.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">round down(n: number, scale: number): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">round down(5.5, 0)
// 5

round down (-5.5, 0)
// -5

round down (1.121, 2)
// 1.12

round down (-1.126, 2)
// -1.12
</code></pre>
`},{name:`round half up`,type:`function`,params:[{name:`n`},{name:`scale`}],info:`<p>Rounds the given value with the rounding mode round-half-up at the given scale.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">round half up(n: number, scale: number): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">round half up(5.5, 0)
// 6

round half up(-5.5, 0)
// -6

round half up(1.121, 2)
// 1.12

round half up(-1.126, 2)
// -1.13
</code></pre>
`},{name:`round half down`,type:`function`,params:[{name:`n`},{name:`scale`}],info:`<p>Rounds the given value with the rounding mode round-half-down at the given scale.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">round half down(n: number, scale: number): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">round half down (5.5, 0)
// 5

round half down (-5.5, 0)
// -5

round half down (1.121, 2)
// 1.12

round half down (-1.126, 2)
// -1.13
</code></pre>
`},{name:`abs`,type:`function`,params:[{name:`number`}],info:`<p>Returns the absolute value of the given numeric value.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">abs(number: number): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">abs(10)
// 10

abs(-10)
// 10
</code></pre>
`},{name:`modulo`,type:`function`,params:[{name:`dividend`},{name:`divisor`}],info:`<p>Returns the remainder of the division of dividend by divisor.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">modulo(dividend: number, divisor: number): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">modulo(12, 5)
// 2
</code></pre>
`},{name:`sqrt`,type:`function`,params:[{name:`number`}],info:`<p>Returns the square root of the given value.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">sqrt(number: number): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">sqrt(16)
// 4
</code></pre>
`},{name:`log`,type:`function`,params:[{name:`number`}],info:`<p>Returns the natural logarithm (base e) of the given value.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">log(number: number): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">log(10)
// 2.302585092994046
</code></pre>
`},{name:`exp`,type:`function`,params:[{name:`number`}],info:`<p>Returns the Euler’s number e raised to the power of the given number .</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">exp(number: number): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">exp(5)
// 148.4131591025766
</code></pre>
`},{name:`odd`,type:`function`,params:[{name:`number`}],info:`<p>Returns <code>true</code> if the given value is odd. Otherwise, returns <code>false</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">odd(number: number): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">odd(5)
// true

odd(2)
// false
</code></pre>
`},{name:`even`,type:`function`,params:[{name:`number`}],info:`<p>Returns <code>true</code> if the given is even. Otherwise, returns <code>false</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">even(number: number): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">even(5)
// false

even(2)
// true
</code></pre>
`},{name:`before`,type:`function`,params:[{name:`point1`},{name:`point2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">before(point1: Any, point2: Any): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">before(1, 10)
// true

before(10, 1)
// false
</code></pre>
`},{name:`before`,type:`function`,params:[{name:`range`},{name:`point`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">before(range: range, point: Any): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">before([1..5], 10)
// true
</code></pre>
`},{name:`before`,type:`function`,params:[{name:`point`},{name:`range`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">before(point: Any, range: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">before(1, [2..5])
// true
</code></pre>
`},{name:`before`,type:`function`,params:[{name:`range1`},{name:`range2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">before(range1: range, range2: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">before([1..5], [6..10])
// true

before([1..5),[5..10])
// true
</code></pre>
`},{name:`after`,type:`function`,params:[{name:`point1`},{name:`point2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">after(point1: Any, point2: Any): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">after(10, 1)
// true

after(1, 10)
// false
</code></pre>
`},{name:`after`,type:`function`,params:[{name:`range`},{name:`point`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">after(range: range, point: Any): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">after([1..5], 10)
// false
</code></pre>
`},{name:`after`,type:`function`,params:[{name:`point`},{name:`range`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">after(point: Any, range: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">after(12, [2..5])
// true
</code></pre>
`},{name:`after`,type:`function`,params:[{name:`range1`},{name:`range2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">after(range1: range, range2: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">after([6..10], [1..5])
// true

after([5..10], [1..5))
// true
</code></pre>
`},{name:`meets`,type:`function`,params:[{name:`range1`},{name:`range2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">meets(range1: range, range2: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">meets([1..5], [5..10])
// true

meets([1..3], [4..6])
// false

meets([1..3], [3..5])
// true

meets([1..5], (5..8])
// false
</code></pre>
`},{name:`met by`,type:`function`,params:[{name:`range1`},{name:`range2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">met by(range1: range, range2: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">met by([5..10], [1..5])
// true

met by([3..4], [1..2])
// false

met by([3..5], [1..3])
// true

met by((5..8], [1..5))
// false

met by([5..10], [1..5))
// false
</code></pre>
`},{name:`overlaps`,type:`function`,params:[{name:`range1`},{name:`range2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">overlaps(range1: range, range2: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">overlaps([5..10], [1..6])
// true

overlaps((3..7], [1..4])
// true

overlaps([1..3], (3..6])
// false

overlaps((5..8], [1..5))
// false

overlaps([4..10], [1..5))
// true
</code></pre>
`},{name:`overlaps before`,type:`function`,params:[{name:`range1`},{name:`range2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">overlaps before(range1: range, range2: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">overlaps before([1..5], [4..10])
// true

overlaps before([3..4], [1..2])
// false

overlaps before([1..3], (3..5])
// false

overlaps before([1..5), (3..8])
// true

overlaps before([1..5), [5..10])
// false
</code></pre>
`},{name:`overlaps after`,type:`function`,params:[{name:`range1`},{name:`range2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">overlaps after(range1: range, range2: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">overlaps after([4..10], [1..5])
// true

overlaps after([3..4], [1..2])
// false

overlaps after([3..5], [1..3))
// false

overlaps after((5..8], [1..5))
// false

overlaps after([4..10], [1..5))
// true
</code></pre>
`},{name:`finishes`,type:`function`,params:[{name:`point`},{name:`range`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">finishes(point: Any, range: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">finishes(5, [1..5])
// true

finishes(10, [1..7])
// false
</code></pre>
`},{name:`finishes`,type:`function`,params:[{name:`range1`},{name:`range2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">finishes(range1: range, range2: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">finishes([3..5], [1..5])
// true

finishes((1..5], [1..5))
// false

finishes([5..10], [1..10))
// false
</code></pre>
`},{name:`finished by`,type:`function`,params:[{name:`range`},{name:`point`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">finished by(range: range, point: Any): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">finished by([5..10], 10)
// true

finished by([3..4], 2)
// false
</code></pre>
`},{name:`finished by`,type:`function`,params:[{name:`range1`},{name:`range2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">finished by(range1: range, range2: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">finished by([1..5], [3..5])
// true

finished by((5..8], [1..5))
// false

finished by([5..10], (1..10))
// false
</code></pre>
`},{name:`includes`,type:`function`,params:[{name:`range`},{name:`point`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">includes(range: range, point: Any): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">includes([5..10], 6)
// true

includes([3..4], 5)
// false
</code></pre>
`},{name:`includes`,type:`function`,params:[{name:`range1`},{name:`range2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">includes(range1: range, range2: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">includes([1..10], [4..6])
// true

includes((5..8], [1..5))
// false

includes([1..10], [1..5))
// true
</code></pre>
`},{name:`during`,type:`function`,params:[{name:`point`},{name:`range`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">during(point: Any, range: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">during(5, [1..10])
// true

during(12, [1..10])
// false

during(1, (1..10])
// false
</code></pre>
`},{name:`during`,type:`function`,params:[{name:`range1`},{name:`range2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">during(range1: range, range2: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">during([4..6], [1..10))
// true

during((1..5], (1..10])
// true
</code></pre>
`},{name:`starts`,type:`function`,params:[{name:`point`},{name:`range`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">starts(point: Any, range: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">starts(1, [1..5])
// true

starts(1, (1..8])
// false
</code></pre>
`},{name:`starts`,type:`function`,params:[{name:`range1`},{name:`range2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">starts(range1: range, range2: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">starts((1..5], [1..5])
// false

starts([1..10], [1..5])
// false

starts((1..5), (1..10))
// true
</code></pre>
`},{name:`started by`,type:`function`,params:[{name:`range`},{name:`point`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">started by(range: range, point: Any): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">started by([1..10], 1)
// true

started by((1..10], 1)
// false
</code></pre>
`},{name:`started by`,type:`function`,params:[{name:`range1`},{name:`range2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">started by(range1: range, range2: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">started by([1..10], [1..5])
// true

started by((1..10], [1..5))
// false

started by([1..10], [1..10))
// true
</code></pre>
`},{name:`coincides`,type:`function`,params:[{name:`point1`},{name:`point2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">coincides(point1: Any, point2: Any): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">coincides(5, 5)
// true

coincides(3, 4)
// false
</code></pre>
`},{name:`coincides`,type:`function`,params:[{name:`range1`},{name:`range2`}],info:`<p><strong>Function signature</strong></p>
<pre><code class="language-feel">coincides(range1: range, range2: range): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">coincides([1..5], [1..5])
// true

coincides((1..5], [1..5))
// false

coincides([1..5], [2..6])
// false
</code></pre>
`},{name:`substring`,type:`function`,params:[{name:`string`},{name:`start position`}],info:`<p>Returns a substring of the given value starting at <code>start position</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">substring(string: string, start position: number): string
</code></pre>
<p>The <code>start position</code> starts at the index <code>1</code>. The last position is <code>-1</code>.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">substring(&quot;foobar&quot;, 3)
// &quot;obar&quot;

substring(&quot;foobar&quot;, -2)
// &quot;ar&quot;
</code></pre>
`},{name:`substring`,type:`function`,params:[{name:`string`},{name:`start position`},{name:`length`}],info:`<p>Returns a substring of the given value, starting at <code>start position</code> with the given <code>length</code>. If <code>length</code> is greater than
the remaining characters of the value, it returns all characters from <code>start position</code> until the end.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">substring(string: string, start position: number, length: number): string
</code></pre>
<p>The <code>start position</code> starts at the index <code>1</code>. The last position is <code>-1</code>.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">substring(&quot;foobar&quot;, 3, 3)
// &quot;oba&quot;

substring(&quot;foobar&quot;, -3, 2)
// &quot;ba&quot;

substring(&quot;foobar&quot;, 3, 10)
// &quot;obar&quot;
</code></pre>
`},{name:`string length`,type:`function`,params:[{name:`string`}],info:`<p>Returns the number of characters in the given value.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">string length(string: string): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">string length(&quot;foo&quot;)
// 3
</code></pre>
`},{name:`upper case`,type:`function`,params:[{name:`string`}],info:`<p>Returns the given value with all characters are uppercase.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">upper case(string: string): string
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">upper case(&quot;aBc4&quot;)
// &quot;ABC4&quot;
</code></pre>
`},{name:`lower case`,type:`function`,params:[{name:`string`}],info:`<p>Returns the given value with all characters are lowercase.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">lower case(string: string): string
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">lower case(&quot;aBc4&quot;)
// &quot;abc4&quot;
</code></pre>
`},{name:`substring before`,type:`function`,params:[{name:`string`},{name:`match`}],info:`<p>Returns a substring of the given value that contains all characters before <code>match</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">substring before(string: string, match: string): string
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">substring before(&quot;foobar&quot;, &quot;bar&quot;)
// &quot;foo&quot;
</code></pre>
`},{name:`substring after`,type:`function`,params:[{name:`string`},{name:`match`}],info:`<p>Returns a substring of the given value that contains all characters after <code>match</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">substring after(string: string, match: string): string
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">substring after(&quot;foobar&quot;, &quot;ob&quot;)
// &quot;ar&quot;
</code></pre>
`},{name:`contains`,type:`function`,params:[{name:`string`},{name:`match`}],info:`<p>Returns <code>true</code> if the given value contains the substring <code>match</code>. Otherwise, returns <code>false</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">contains(string: string, match: string): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">contains(&quot;foobar&quot;, &quot;of&quot;)
// false
</code></pre>
`},{name:`starts with`,type:`function`,params:[{name:`string`},{name:`match`}],info:`<p>Returns <code>true</code> if the given value starts with the substring <code>match</code>. Otherwise, returns <code>false</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">starts with(string: string, match: string): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">starts with(&quot;foobar&quot;, &quot;fo&quot;)
// true
</code></pre>
`},{name:`ends with`,type:`function`,params:[{name:`string`},{name:`match`}],info:`<p>Returns <code>true</code> if the given value ends with the substring <code>match</code>. Otherwise, returns <code>false</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">ends with(string: string, match: string): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">ends with(&quot;foobar&quot;, &quot;r&quot;)
// true
</code></pre>
`},{name:`matches`,type:`function`,params:[{name:`input`},{name:`pattern`}],info:`<p>Returns <code>true</code> if the given value matches the <code>pattern</code>. Otherwise, returns <code>false</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">matches(input: string, pattern: string): boolean
</code></pre>
<p>The <code>pattern</code> is a string that contains a regular expression.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">matches(&quot;foobar&quot;, &quot;^fo*bar&quot;)
// true
</code></pre>
`},{name:`matches`,type:`function`,params:[{name:`input`},{name:`pattern`},{name:`flags`}],info:`<p>Returns <code>true</code> if the given value matches the <code>pattern</code>. Otherwise, returns <code>false</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">matches(input: string, pattern: string, flags: string): boolean
</code></pre>
<p>The <code>pattern</code> is a string that contains a regular expression.</p>
<p>The <code>flags</code> can contain one or more of the following characters:</p>
<ul>
<li><code>s</code> (dot-all)</li>
<li><code>m</code> (multi-line)</li>
<li><code>i</code> (case insensitive)</li>
<li><code>x</code> (comments)</li>
</ul>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">matches(&quot;FooBar&quot;, &quot;foo&quot;, &quot;i&quot;)
// true
</code></pre>
`},{name:`replace`,type:`function`,params:[{name:`input`},{name:`pattern`},{name:`replacement`}],info:`<p>Returns the resulting string after replacing all occurrences of <code>pattern</code> with <code>replacement</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">replace(input: string, pattern: string, replacement: string): string
</code></pre>
<p>The <code>pattern</code> is a string that contains a regular expression.</p>
<p>The <code>replacement</code> can access the match groups by using <code>$</code> and the number of the group, for example,
<code>$1</code> to access the first group.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">replace(&quot;abcd&quot;, &quot;(ab)|(a)&quot;, &quot;[1=$1][2=$2]&quot;)
// &quot;[1=ab][2=]cd&quot;

replace(&quot;0123456789&quot;, &quot;(\\d{3})(\\d{3})(\\d{4})&quot;, &quot;($1) $2-$3&quot;)
// &quot;(012) 345-6789&quot;
</code></pre>
`},{name:`replace`,type:`function`,params:[{name:`input`},{name:`pattern`},{name:`replacement`},{name:`flags`}],info:`<p>Returns the resulting string after replacing all occurrences of <code>pattern</code> with <code>replacement</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">replace(input: string, pattern: string, replacement: string, flags: string): string
</code></pre>
<p>The <code>pattern</code> is a string that contains a regular expression.</p>
<p>The <code>replacement</code> can access the match groups by using <code>$</code> and the number of the group, for example,
<code>$1</code> to access the first group.</p>
<p>The <code>flags</code> can contain one or more of the following characters:</p>
<ul>
<li><code>s</code> (dot-all)</li>
<li><code>m</code> (multi-line)</li>
<li><code>i</code> (case insensitive)</li>
<li><code>x</code> (comments)</li>
</ul>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">replace(&quot;How do you feel?&quot;, &quot;Feel&quot;, &quot;FEEL&quot;, &quot;i&quot;)
// &quot;How do you FEEL?&quot;
</code></pre>
`},{name:`split`,type:`function`,params:[{name:`string`},{name:`delimiter`}],info:`<p>Splits the given value into a list of substrings, breaking at each occurrence of the <code>delimiter</code> pattern.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">split(string: string, delimiter: string): list&lt;string&gt;
</code></pre>
<p>The <code>delimiter</code> is a string that contains a regular expression.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">split(&quot;John Doe&quot;, &quot;\\s&quot; )
// [&quot;John&quot;, &quot;Doe&quot;]

split(&quot;a;b;c;;&quot;, &quot;;&quot;)
// [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;&quot;, &quot;&quot;]
</code></pre>
`},{name:`now`,type:`function`,params:[],info:`<p>Returns the current date and time including the timezone.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">now(): date and time
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">now()
// date and time(&quot;2020-07-31T14:27:30@Europe/Berlin&quot;)
</code></pre>
`},{name:`today`,type:`function`,params:[],info:`<p>Returns the current date.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">today(): date
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">today()
// date(&quot;2020-07-31&quot;)
</code></pre>
`},{name:`day of week`,type:`function`,params:[{name:`date`}],info:`<p>Returns the day of the week according to the Gregorian calendar. Note that it always returns the English name of the day.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">day of week(date: date): string
</code></pre>
<pre><code class="language-feel">day of week(date: date and time): string
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">day of week(date(&quot;2019-09-17&quot;))
// &quot;Tuesday&quot;

day of week(date and time(&quot;2019-09-17T12:00:00&quot;))
// &quot;Tuesday&quot;
</code></pre>
`},{name:`day of year`,type:`function`,params:[{name:`date`}],info:`<p>Returns the Gregorian number of the day within the year.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">day of year(date: date): number
</code></pre>
<pre><code class="language-feel">day of year(date: date and time): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">day of year(date(&quot;2019-09-17&quot;))
// 260

day of year(date and time(&quot;2019-09-17T12:00:00&quot;))
// 260
</code></pre>
`},{name:`week of year`,type:`function`,params:[{name:`date`}],info:`<p>Returns the Gregorian number of the week within the year, according to ISO 8601.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">week of year(date: date): number
</code></pre>
<pre><code class="language-feel">week of year(date: date and time): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">week of year(date(&quot;2019-09-17&quot;))
// 38

week of year(date and time(&quot;2019-09-17T12:00:00&quot;))
// 38
</code></pre>
`},{name:`month of year`,type:`function`,params:[{name:`date`}],info:`<p>Returns the month of the year according to the Gregorian calendar. Note that it always returns the English name of the month.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">month of year(date: date): string
</code></pre>
<pre><code class="language-feel">month of year(date: date and time): string
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">month of year(date(&quot;2019-09-17&quot;))
// &quot;September&quot;

month of year(date and time(&quot;2019-09-17T12:00:00&quot;))
// &quot;September&quot;
</code></pre>
`},{name:`abs`,type:`function`,params:[{name:`n`}],info:`<p>Returns the absolute value of a given duration.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">abs(n: days and time duration): days and time duration
</code></pre>
<pre><code class="language-feel">abs(n: years and months duration): years and months duration
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">abs(duration(&quot;-PT5H&quot;))
// &quot;duration(&quot;PT5H&quot;)&quot;

abs(duration(&quot;PT5H&quot;))
// &quot;duration(&quot;PT5H&quot;)&quot;

abs(duration(&quot;-P2M&quot;))
// duration(&quot;P2M&quot;)
</code></pre>
`}],Ic=[{name:`is defined`,type:`function`,params:[{name:`value`}],info:`<p><em>Camunda Extension</em></p>
<p>Checks if a given value is not <code>null</code>. If the value is <code>null</code> then the function returns <code>false</code>.
Otherwise, the function returns <code>true</code>.</p>
<p>The function requires one argument. Calling <code>is defined()</code> without an argument is invalid.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">is defined(value: Any): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">is defined(1)
// true

is defined(null)
// false

is defined(x)
// false - if no variable &quot;x&quot; exists

is defined(x.y)
// false - if no variable &quot;x&quot; exists or it doesn&#39;t have a property &quot;y&quot;

is defined()
// error - expected one argument
</code></pre>
<p>:::caution Breaking change</p>
<p>This function worked differently in previous versions. It returned <code>true</code> if the value was <code>null</code>.
Since this version, the function returns <code>false</code> if the value is <code>null</code>.</p>
<p>:::</p>
`},{name:`get or else`,type:`function`,params:[{name:`value`},{name:`default`}],info:`<p><em>Camunda Extension</em></p>
<p>Return the provided value parameter if not <code>null</code>, otherwise return the default parameter</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">get or else(value: Any, default: Any): Any
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">get or else(&quot;this&quot;, &quot;default&quot;)
// &quot;this&quot;

get or else(null, &quot;default&quot;)
// &quot;default&quot;

get or else(null, null)
// null
</code></pre>
`},{name:`assert`,type:`function`,params:[{name:`value`},{name:`condition`}],info:`<p><em>Camunda Extension</em></p>
<p>Verify that the given condition is met. If the condition is <code>true</code>, the function returns the value.
Otherwise, the evaluation fails with an error.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">assert(value: Any, condition: Any)
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">assert(x, x != null)
// &quot;value&quot; - if x is &quot;value&quot;
// error - if x is null or doesn&#39;t exist

assert(x, x &gt;= 0)
// 4 - if x is 4
// error - if x is less than zero
</code></pre>
`},{name:`assert`,type:`function`,params:[{name:`value`},{name:`condition`},{name:`cause`}],info:`<p><em>Camunda Extension</em></p>
<p>Verify that the given condition is met. If the condition is <code>true</code>, the function returns the value.
Otherwise, the evaluation fails with an error containing the given message.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">assert(value: Any, condition: Any, cause: String)
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">assert(x, x != null, &quot;&#39;x&#39; should not be null&quot;)
// &quot;value&quot; - if x is &quot;value&quot;
// error(&#39;x&#39; should not be null) - if x is null or doesn&#39;t exist

assert(x, x &gt;= 0, &quot;&#39;x&#39; should be positive&quot;)
// 4 - if x is 4
// error(&#39;x&#39; should be positive) - if x is less than zero
</code></pre>
`},{name:`get value`,type:`function`,params:[{name:`context`},{name:`keys`}],info:`<p><em>Camunda Extension</em></p>
<p>Returns the value of the context entry for a context path defined by the given keys.</p>
<p>If <code>keys</code> contains the keys <code>[k1, k2]</code> then it returns the value at the nested entry <code>k1.k2</code> of the context.</p>
<p>If <code>keys</code> are empty or the nested entry defined by the keys doesn&#39;t exist in the context, it returns <code>null</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">get value(context: context, keys: list&lt;string&gt;): Any
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">get value({x:1, y: {z:0}}, [&quot;y&quot;, &quot;z&quot;])
// 0

get value({x: {y: {z:0}}}, [&quot;x&quot;, &quot;y&quot;])
// {z:0}

get value({a: {b: 3}}, [&quot;b&quot;])
// null
</code></pre>
`},{name:`context put`,type:`function`,params:[{name:`context`},{name:`key`},{name:`value`}],info:`<p>Adds a new entry with the given key and value to the context. Returns a new context that includes the entry.</p>
<p>If an entry for the same key already exists in the context, it overrides the value.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">context put(context: context, key: string, value: Any): context
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">context put({x:1}, &quot;y&quot;, 2)
// {x:1, y:2}
</code></pre>
<p>:::info
The function <code>context put()</code> replaced the previous function <code>put()</code> (Camunda Extension). The
previous function is deprecated and should not be used anymore.
:::</p>
`},{name:`context merge`,type:`function`,params:[{name:`contexts`}],info:`<p>Union the given contexts. Returns a new context that includes all entries of the given contexts.</p>
<p>If an entry for the same key already exists in a context, it overrides the value. The entries are overridden in the same order as in the list of contexts.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">context merge(contexts: list&lt;context&gt;): context
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">context merge([{x:1}, {y:2}])
// {x:1, y:2}

context merge([{x:1, y: 0}, {y:2}])
// {x:1, y:2}
</code></pre>
<p>:::info
The function <code>context merge()</code> replaced the previous function <code>put all()</code> (Camunda Extension). The
previous function is deprecated and should not be used anymore.
:::</p>
`},{name:`date and time`,type:`function`,params:[{name:`date`},{name:`timezone`}],info:`<p><em>Camunda Extension</em></p>
<p>Returns the given date and time value at the given timezone.</p>
<p>If <code>date</code> has a different timezone than <code>timezone</code> then it adjusts the time to match the local time of <code>timezone</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">date and time(date: date and time, timezone: string): date and time
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">date and time(@&quot;2020-07-31T14:27:30@Europe/Berlin&quot;, &quot;America/Los_Angeles&quot;)
// date and time(&quot;2020-07-31T05:27:30@America/Los_Angeles&quot;)

date and time(@&quot;2020-07-31T14:27:30&quot;, &quot;Z&quot;)
// date and time(&quot;2020-07-31T12:27:30Z&quot;)
</code></pre>
`},{name:`duplicate values`,type:`function`,params:[{name:`list`}],info:`<p><em>Camunda Extension</em></p>
<p>Returns all duplicate values of the given list.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">duplicate values(list: list): list
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">duplicate values([1,2,3,2,1])
// [1,2]
</code></pre>
`},{name:`string join`,type:`function`,params:[{name:`list`},{name:`delimiter`},{name:`prefix`},{name:`suffix`}],info:`<p><em>Camunda Extension</em></p>
<p>Joins a list of strings into a single string. This is similar to
Java&#39;s <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/stream/Collectors.html#joining(java.lang.CharSequence,java.lang.CharSequence,java.lang.CharSequence)">joining</a>
function.</p>
<p>If an item of the list is <code>null</code>, the item is ignored for the result string. If an item is
neither a string nor <code>null</code>, the function returns <code>null</code> instead of a string.</p>
<p>The resulting string starts with <code>prefix</code>, contains a <code>delimiter</code> between each element, and ends
with <code>suffix</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">string join(list: list&lt;string&gt;, delimiter: string, prefix: string, suffix: string): string
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">string join([&quot;a&quot;,&quot;b&quot;,&quot;c&quot;], &quot;, &quot;, &quot;[&quot;, &quot;]&quot;)
// &quot;[a, b, c]&quot;
</code></pre>
`},{name:`is empty`,type:`function`,params:[{name:`list`}],info:`<p><em>Camunda Extension</em></p>
<p>Returns <code>true</code> if the given list is empty. Otherwise, returns <code>false</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">is empty(list: list): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">is empty([])
// true

is empty([1,2,3])
// false
</code></pre>
`},{name:`partition`,type:`function`,params:[{name:`list`},{name:`size`}],info:`<p><em>Camunda Extension</em></p>
<p>Returns consecutive sublists of a list, each of the same size (the final list may be smaller).</p>
<p>If <code>size</code> is less than <code>0</code>, it returns <code>null</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">partition(list: list, size: number): list
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">partition([1,2,3,4,5], 2)
// [[1,2], [3,4], [5]]

partition([], 2)
// []

partition([1,2], 0)
// null
</code></pre>
`},{name:`fromAi`,type:`function`,params:[{name:`value`}],info:`<p><em>Camunda Extension</em></p>
<p>Returns the unmodified <code>value</code> parameter.</p>
<ul>
<li>The purpose of this function is solely to tag the value as being generated by an AI integration.</li>
<li>The actual handling is not performed by the FEEL engine, but by a custom integration such as a connector or a job worker.</li>
</ul>
<p>The main use case of this function is for <a href="../../../connectors/out-of-the-box-connectors/agentic-ai-aiagent-tool-definitions.md">tool definitions</a> used by the <a href="../../../connectors/out-of-the-box-connectors/agentic-ai-aiagent.md">AI Agent connector</a>.</p>
<p>See the following function overloads for additional function parameters.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">fromAi(value: Any): Any
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">fromAi(toolCall.searchQuery)
// toolCall.searchQuery contents

fromAi(toolCall.userId)
// toolCall.userId contents
</code></pre>
`},{name:`fromAi`,type:`function`,params:[{name:`value`},{name:`description`}],info:`<p><em>Camunda Extension</em></p>
<p>Returns the unmodified <code>value</code> parameter.</p>
<p>In addition to the previous overload, it also accepts an optional <code>description</code> parameter to provide a textual description of the value. The description must be <code>null</code> or a string constant.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">fromAi(value: Any, description: string): Any
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">fromAi(toolCall.searchQuery, &quot;The search query used to find the best match.&quot;)
// toolCall.searchQuery contents

fromAi(toolCall.searchQuery, null)
// toolCall.searchQuery contents
</code></pre>
`},{name:`fromAi`,type:`function`,params:[{name:`value`},{name:`description`},{name:`type`}],info:`<p><em>Camunda Extension</em></p>
<p>Returns the unmodified <code>value</code> parameter.</p>
<p>In addition to the previous overload, it also accepts an optional <code>type</code> parameter to provide type information about the value. The type must be <code>null</code> or a string constant.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">fromAi(value: Any, description: string, type: string): Any
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">fromAi(toolCall.searchQuery, &quot;The search query used to find the best match.&quot;, &quot;string&quot;)
// toolCall.searchQuery contents

fromAi(toolCall.userId, &quot;The user&#39;s ID&quot;, &quot;number&quot;)
// toolCall.userId contents

fromAi(toolCall.userId, null, &quot;number&quot;)
// toolCall.userId contents

fromAi(value: toolCall.userId, type: &quot;number&quot;)
// toolCall.userId contents
</code></pre>
`},{name:`fromAi`,type:`function`,params:[{name:`value`},{name:`description`},{name:`type`},{name:`schema`}],info:`<p><em>Camunda Extension</em></p>
<p>Returns the unmodified <code>value</code> parameter.</p>
<p>In addition to the previous overload, it also accepts an optional <code>schema</code> parameter to provide a (partial) <a href="https://json-schema.org/">JSON schema</a> for the value.</p>
<ul>
<li>The schema must be <code>null</code> or a context (map) containing only constant values. For example, function calls within the schema are not supported.</li>
<li>The schema is not validated by the FEEL engine but might be by a custom integration consuming the information.</li>
<li>From the engine side it is possible to specify both a <code>type</code> and a <code>schema</code>, and it depends on the integration as to which value takes precedence. The <a href="../../../connectors/out-of-the-box-connectors/agentic-ai-aiagent.md">AI Agent connector</a> will override any type specified in the schema if the <code>type</code> parameter is also provided.</li>
</ul>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">fromAi(value: Any, description: string, type: string, schema: context): Any
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">fromAi(toolCall.documentType, &quot;The document type to provide&quot;, &quot;string&quot;, {
  enum: [&quot;invoice&quot;, &quot;receipt&quot;, &quot;contract&quot;]
})
// toolCall.documentType contents

fromAi(value: toolCall.documentType, description: &quot;The document type to provide&quot;, schema: {
  type: &quot;string&quot;,
  enum: [&quot;invoice&quot;, &quot;receipt&quot;, &quot;contract&quot;]
})
// toolCall.documentType contents

fromAi(toolCall.tags, &quot;Tags to apply to the blog post&quot;, &quot;array&quot;, {
  items: {
    type: &quot;string&quot;
  }
})
// toolCall.tags contents
</code></pre>
`},{name:`fromAi`,type:`function`,params:[{name:`value`},{name:`description`},{name:`type`},{name:`schema`},{name:`options`}],info:`<p><em>Camunda Extension</em></p>
<p>Returns the unmodified <code>value</code> parameter.</p>
<p>In addition to the previous overload, it also accepts an optional <code>options</code> parameter to provide additional options for the integration handling the value definition.</p>
<ul>
<li>The options parameter must be <code>null</code> or a context (map) containing only constant values. For example, function calls within options are not supported.</li>
</ul>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">fromAi(value: Any, description: string, type: string, schema: context, options: context): Any
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">fromAi(toolCall.documentType, &quot;The document type to provide&quot;, &quot;string&quot;, null, {
  required: false
})
// toolCall.documentType contents

fromAi(value: toolCall.documentType, options: {
  required: false
})
// toolCall.documentType contents
</code></pre>
`},{name:`random number`,type:`function`,params:[],info:`<p><em>Camunda Extension</em></p>
<p>Returns a random number between <code>0</code> and <code>1</code>.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">random number(): number
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">random number()
// 0.9701618132579795
</code></pre>
`},{name:`extract`,type:`function`,params:[{name:`string`},{name:`pattern`}],info:`<p><em>Camunda Extension</em></p>
<p>Returns all matches of the pattern in the given string. Returns an empty list if the pattern doesn&#39;t
match.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">extract(string: string, pattern: string): list&lt;string&gt;
</code></pre>
<p>The <code>pattern</code> is a string that contains a regular expression.</p>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">extract(&quot;references are 1234, 1256, 1378&quot;, &quot;12[0-9]*&quot;)
// [&quot;1234&quot;,&quot;1256&quot;]
</code></pre>
`},{name:`trim`,type:`function`,params:[{name:`string`}],info:`<p><em>Camunda Extension</em></p>
<p>Returns the given string without leading and trailing spaces.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">trim(string: string): string
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">trim(&quot;  hello world  &quot;)
// &quot;hello world&quot;

trim(&quot;hello   world &quot;)
// &quot;hello   world&quot;
</code></pre>
`},{name:`uuid`,type:`function`,params:[],info:`<p><em>Camunda Extension</em></p>
<p>Returns a UUID (Universally Unique Identifier) with 36 characters.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">uuid(): string
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">uuid()
// &quot;7793aab1-d761-4d38-916b-b7270e309894&quot;
</code></pre>
`},{name:`to base64`,type:`function`,params:[{name:`value`}],info:`<p><em>Camunda Extension</em></p>
<p>Returns the given string encoded in Base64 format.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">to base64(value: string): string
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">to base64(&quot;FEEL&quot;)
// &quot;RkVFTA==&quot;
</code></pre>
`},{name:`is blank`,type:`function`,params:[{name:`string`}],info:`<p><em>Camunda Extension</em></p>
<p>Returns <code>true</code> if the given string is blank (empty or contains only whitespaces).</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">is blank(string: string): boolean
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">is blank(&quot;&quot;)
// true

is blank(&quot; &quot;)
// true

is blank(&quot;hello world&quot;)
// false
</code></pre>
`},{name:`last day of month`,type:`function`,params:[{name:`date`}],info:`<p><em>Camunda Extension</em></p>
<p>Takes the month of the given date or date-time value and returns the last day of this month.</p>
<p><strong>Function signature</strong></p>
<pre><code class="language-feel">last day of month(date: date): date
</code></pre>
<pre><code class="language-feel">last day of month(date: date and time): date
</code></pre>
<p><strong>Examples</strong></p>
<pre><code class="language-feel">last day of month(date(&quot;2022-10-01&quot;))
// date(&quot;2022-10-31&quot;))

last day of month(date and time(&quot;2022-10-16T12:00:00&quot;))
// date(&quot;2022-10-31&quot;))
</code></pre>
`}],Lc=[...Fc,...Ic],Rc=[Xs(gc())],zc=[c.theme({"& .cm-content":{padding:`0px`},"& .cm-line":{padding:`0px`},"&.cm-editor.cm-focused":{outline:`none`},"& .cm-completionInfo":{whiteSpace:`pre-wrap`,overflow:`hidden`,textOverflow:`ellipsis`},"&.cm-editor":{height:`100%`},"& .cm-completionInfo > *":{whiteSpace:`normal`},"& .cm-completionInfo ul":{margin:0,paddingLeft:`15px`},"& .cm-completionInfo pre":{marginBottom:0,whiteSpace:`pre-wrap`},"& .cm-completionInfo p":{marginTop:0},"& .cm-completionInfo p:not(:last-of-type)":{marginBottom:0}}),c.baseTheme({"& .variableName":{color:`#10f`},"& .number":{color:`#164`},"& .string":{color:`#a11`},"& .bool":{color:`#219`},"& .function":{color:`#aa3731`,fontWeight:`bold`},"& .control":{color:`#708`}}),He(Pe.define([{tag:C.variableName,class:`variableName`},{tag:C.name,class:`variableName`},{tag:C.number,class:`number`},{tag:C.string,class:`string`},{tag:C.bool,class:`bool`},{tag:C.function(C.variableName),class:`function`},{tag:C.function(C.special(C.variableName)),class:`function`},{tag:C.controlKeyword,class:`control`},{tag:C.operatorKeyword,class:`control`}]))];function Bc(e){return e&&e.from===e.to}function Vc(e,t){let n=e.nextSibling;return Bc(e)||n&&n.from===t&&Bc(n)}function Hc(e){return e&&e.parent&&e.parent.name===`VariableName`}function Uc(e){return e?e.name===`PathExpression`?!0:Uc(e.parent):!1}function Wc({variables:e}){return t=>{let n=x(t.state).resolve(t.pos,-1);if(!Uc(n))return null;let r=Gc(n),i=n===r?t.pos:n.from,a=Kc(r,t),o=e;for(var s=0;s<a.length-1;s++){var c=o.find(e=>e.name===a[s].name);if(!c||c.isList!==`optional`&&!!c.isList!==a[s].isList)return null;o=c.entries}return o?{from:i,options:o.map(e=>({label:e.name,type:`variable`,info:e.info,detail:e.detail}))}:null}}function Gc(e){for(;e;){if(e.name===`PathExpression`)return e;e=e.parent}}function Kc(e,t){let n=[];for(let r=e.firstChild;r;r=r.nextSibling)r.name===`PathExpression`?n.push(...Kc(r,t)):r.name===`FilterExpression`?n.push(...qc(r,t)):n.push({name:Jc(r,t),isList:!1});return n}function qc(e,t){let n=e.firstChild;if(n.name===`PathExpression`){let e=Kc(n,t),r=e[e.length-1];return r.isList=!0,e}return[{name:Jc(n,t),isList:!0}]}function Jc(e,t){return t.state.sliceDoc(e.from,e.to)}function Yc({variables:e=[],builtins:t=[]}){let n=Xc(e,t),r=/^[\w ]*$/;return n.length?e=>{let{pos:t,state:i}=e,a=x(i).resolve(t,-1);if(Vc(a,t))return e.explicit?{from:t,options:n,validFor:r}:null;if(!Hc(a)||Uc(a))return null;let o=typeof e.matchBefore==`function`?e.matchBefore(/\w[\w ]*$/):null;return{from:o?o.from:a.from,options:n,validFor:r}}:e=>null}function Xc(e,t){return[].concat(e.map(e=>Zc(e)),t.map(e=>Zc(e)))}function Zc(e,t){return e.type===`function`?Qc(e,t):{label:e.name,type:`variable`,info:e.info,detail:e.detail,boost:t}}function Qc(e,t){let{name:n,info:r,detail:i,params:a=[]}=e,o=a.map(({name:e,type:t},n)=>({name:e||`param ${n+1}`,type:t}));return H(`${n}(${o.map(e=>"${"+e.name+`}`).join(`, `)})`,{label:`${n}(${o.map(({name:e,type:t})=>t?`${e}: ${t}`:e).join(`, `)})`,type:`function`,info:r,detail:i,boost:t})}function $c({variables:e=[],builtins:t=[]}){return[Wc({variables:e}),Yc({variables:e,builtins:t}),Qr(vc),...xc]}function el(e){return Pc(e)}function tl(e){return e.slice().reverse().reduce((e,t)=>(e[t.name]=()=>{},e),{})}var nl=v.define(),rl=v.define(),il=v.define(),al=v.define();function ol({dialect:e=`expression`,parserDialect:t,variables:n=[],builtins:r=[],completions:i=$c({builtins:r,variables:n})}){let a=tl([...n,...r]);return[il.of(e),nl.of(r),rl.of(n),al.of(t),el({dialect:e,parserDialect:t,context:a,completions:i})]}function sl(e){return{builtins:e.facet(nl)[0],variables:e.facet(rl)[0],dialect:e.facet(il)[0],parserDialect:e.facet(al)[0]}}var cl=Lc.map(e=>({...e,info:()=>Ct(e.info)})),ll=new s,ul=new s;function $({extensions:e=[],dialect:t=`expression`,parserDialect:n,container:r,contentAttributes:i={},tooltipContainer:a,onChange:o=()=>{},onKeyDown:s=()=>{},onLint:l=()=>{},placeholder:u=``,readOnly:d=!1,value:f=``,builtins:m=cl,variables:h=[]}){this._events=_c();let ee=c.updateListener.of(e=>{e.docChanged&&o(e.state.doc.toString())}),g=c.updateListener.of(e=>{let t=e.transactions.flatMap(e=>e.effects).filter(e=>e.is(Bs));if(!t.length)return;let n=t.flatMap(e=>e.value);this._events.emit(`lint`,{diagnostics:n})}),te=c.domEventObservers({keydown:s});typeof a==`string`&&(a=document.querySelector(a));let _=a?re({tooltipSpace:function(){return a.getBoundingClientRect()}}):[],ie=[Ca(),ll.of(ol({dialect:t,builtins:m,variables:h,parserDialect:n})),Ie(),be(),ca(),c.contentAttributes.of(i),ee,te,ne.of([...Ns]),Rc,g,_,ul.of(Ce(u)),zc,...e];return d&&ie.push(c.editable.of(!1)),this.on(`lint`,({diagnostics:e})=>l(e)),this._cmEditor=new c({state:p.create({doc:f,extensions:ie}),parent:r}),this}$.prototype.setValue=function(e){this._cmEditor.dispatch({changes:{from:0,to:this._cmEditor.state.doc.length,insert:e}})},$.prototype.focus=function(e){let t=this._cmEditor;if(t.contentDOM.focus(),t.focus(),typeof e==`number`){let n=t.state.doc.length;t.dispatch({selection:{anchor:e<=n?e:n}})}},$.prototype.on=function(e,t){this._events.on(e,t)},$.prototype.off=function(e,t){this._events.off(e,t)},$.prototype.getSelection=function(){return this._cmEditor.state.selection},$.prototype.setVariables=function(e){let t=sl(this._cmEditor.state);this._cmEditor.dispatch({effects:[ll.reconfigure(ol({...t,variables:e}))]})},$.prototype.setPlaceholder=function(e){this._cmEditor.dispatch({effects:ul.reconfigure(Ce(e))})};export{T as C,St as S,It as _,Ns as a,Wt as b,tn as c,Tt as d,Et as f,Bt as g,At as h,Bs as i,hn as l,kt as m,gc as n,ca as o,Ot as p,Xs as r,Jr as s,$ as t,Ut as u,Vt as v,We as w,Ct as x,Ht as y};