import{S as x,i as tt,s as et,e as o,t as P,k as v,c as n,a as m,h as T,d,m as f,b as a,g as st,F as e,T as N,H as B,G as Z,U as at,am as lt}from"../chunks/vendor-15aad13b.js";import{a as ot}from"../chunks/firebase-4a996114.js";import{r as nt}from"../chunks/fetch-552fd9ba.js";function rt(r){let c,t,l,_,O,C,p,k,L,y,R,U,i,I,A,M,F,h,H,b,S,W,g,q,D,w,K,$,j;return{c(){c=o("body"),t=o("div"),l=o("h1"),_=P("WELCOME TO CAMPARK "),O=o("br"),C=v(),p=o("h1"),k=P("Login"),L=v(),y=o("p"),R=P("Email"),U=v(),i=o("input"),I=v(),A=o("p"),M=P("Password"),F=v(),h=o("input"),H=v(),b=o("button"),S=P("Log me in!"),W=v(),g=o("button"),q=P("Forgot Password!"),D=v(),w=o("button"),K=P("Register me!"),this.h()},l(u){c=n(u,"BODY",{class:!0});var E=m(c);t=n(E,"DIV",{class:!0});var s=m(t);l=n(s,"H1",{id:!0,class:!0});var G=m(l);_=T(G,"WELCOME TO CAMPARK "),G.forEach(d),O=n(s,"BR",{}),C=f(s),p=n(s,"H1",{id:!0,class:!0});var V=m(p);k=T(V,"Login"),V.forEach(d),L=f(s),y=n(s,"P",{});var Y=m(y);R=T(Y,"Email"),Y.forEach(d),U=f(s),i=n(s,"INPUT",{type:!0,class:!0}),I=f(s),A=n(s,"P",{});var z=m(A);M=T(z,"Password"),z.forEach(d),F=f(s),h=n(s,"INPUT",{type:!0,class:!0}),H=f(s),b=n(s,"BUTTON",{class:!0});var J=m(b);S=T(J,"Log me in!"),J.forEach(d),W=f(s),g=n(s,"BUTTON",{class:!0});var Q=m(g);q=T(Q,"Forgot Password!"),Q.forEach(d),D=f(s),w=n(s,"BUTTON",{class:!0});var X=m(w);K=T(X,"Register me!"),X.forEach(d),s.forEach(d),E.forEach(d),this.h()},h(){a(l,"id","ProjectTitle"),a(l,"class","svelte-bac7m7"),a(p,"id","title"),a(p,"class","svelte-bac7m7"),a(i,"type","text"),a(i,"class","svelte-bac7m7"),a(h,"type","password"),a(h,"class","svelte-bac7m7"),a(b,"class","svelte-bac7m7"),a(g,"class","svelte-bac7m7"),a(w,"class","svelte-bac7m7"),a(t,"class","log svelte-bac7m7"),a(c,"class","svelte-bac7m7")},m(u,E){st(u,c,E),e(c,t),e(t,l),e(l,_),e(t,O),e(t,C),e(t,p),e(p,k),e(t,L),e(t,y),e(y,R),e(t,U),e(t,i),N(i,r[0]),e(t,I),e(t,A),e(A,M),e(t,F),e(t,h),N(h,r[1]),e(t,H),e(t,b),e(b,S),e(t,W),e(t,g),e(g,q),e(t,D),e(t,w),e(w,K),$||(j=[B(i,"input",r[5]),B(h,"input",r[6]),B(b,"click",r[2]),B(g,"click",r[4]),B(w,"click",r[3])],$=!0)},p(u,[E]){E&1&&i.value!==u[0]&&N(i,u[0]),E&2&&h.value!==u[1]&&N(h,u[1])},i:Z,o:Z,d(u){u&&d(c),$=!1,at(j)}}}const pt=async({session:r})=>r.user.exists?{status:302,redirect:"/"}:{};function it(r,c,t){let l,_;const O=async()=>{const R=(await lt(ot,l,_).catch(U=>{const i=U.code;alert(i)}))._tokenResponse.idToken;await nt("/auth","POST",{idToken:R}),window.location.replace("/")},C=async()=>{window.location.replace("/signup")},p=async()=>{window.location.replace("/forgotPassword")};function k(){l=this.value,t(0,l)}function L(){_=this.value,t(1,_)}return[l,_,O,C,p,k,L]}class ht extends x{constructor(c){super();tt(this,c,it,rt,et,{})}}export{ht as default,pt as load};
