import{S as we,i as Be,s as Pe,$ as De,e as n,t as V,k as R,w as Ie,c as i,a as v,h as q,d as p,m as E,x as Ue,b as o,a0 as ge,g as Q,F as e,T as M,y as Se,H as j,a1 as Ce,o as ce,p as Oe,q as fe,B as Ve,U as qe,O as ye,n as Me,D as Ne,a2 as Fe,a3 as Ae,a4 as He,a5 as We,G as L,a6 as je,a7 as Re,a8 as Ee}from"../chunks/vendor-2ab1862f.js";import{d as Ge}from"../chunks/firebase-65ae86cc.js";import{s as Ye}from"../chunks/stores-a00b748e.js";function ze(f){let a,t,r,_;return{c(){a=n("p"),t=V("Complaint Report sent!"),this.h()},l(d){a=i(d,"P",{class:!0});var l=v(a);t=q(l,"Complaint Report sent!"),l.forEach(p),this.h()},h(){o(a,"class","error-alert")},m(d,l){Q(d,a,l),e(a,t),_=!0},p:L,i(d){_||(je(()=>{r||(r=Re(a,Ee,{duration:150},!0)),r.run(1)}),_=!0)},o(d){r||(r=Re(a,Ee,{duration:150},!1)),r.run(0),_=!1},d(d){d&&p(a),d&&r&&r.end()}}}function Je(f){let a,t;return{c(){a=n("p"),t=V(Te),this.h()},l(r){a=i(r,"P",{class:!0});var _=v(a);t=q(_,Te),_.forEach(p),this.h()},h(){o(a,"class","error-alert")},m(r,_){Q(r,a,_),e(a,t)},p:L,i:L,o:L,d(r){r&&p(a)}}}function Ke(f){let a,t,r,_,d,l,u,B,T,c,y,C,N,F,b,w,P,A,X,Z,k,$,D,H,x,ee,g,te,O,se,ae,le,re,oe,ne,ie,G,I,Y,ue,pe;const de=[Je,ze],U=[];function _e(s,h){return s[3]?1:-1}return~(l=_e(f))&&(u=U[l]=de[l](f)),I=new De({props:{show:f[5]}}),{c(){a=n("body"),t=n("div"),r=n("h1"),_=V("Report a Complaint"),d=R(),u&&u.c(),B=R(),T=n("div"),c=n("form"),y=n("div"),C=n("p"),N=V("Title"),F=R(),b=n("input"),w=R(),P=n("div"),A=n("p"),X=V("What is the license plate number of the vehicle you are reporting?"),Z=R(),k=n("input"),$=R(),D=n("div"),H=n("p"),x=V("State the details of the issue"),ee=R(),g=n("input"),te=R(),O=n("button"),se=V("SUBMIT REPORT"),ae=R(),le=n("br"),re=n("br"),oe=n("br"),ne=n("br"),ie=n("br"),G=R(),Ie(I.$$.fragment),this.h()},l(s){a=i(s,"BODY",{class:!0});var h=v(a);t=i(h,"DIV",{class:!0});var m=v(t);r=i(m,"H1",{id:!0,class:!0});var W=v(r);_=q(W,"Report a Complaint"),W.forEach(p),d=E(m),u&&u.l(m),B=E(m),T=i(m,"DIV",{class:!0});var me=v(T);c=i(me,"FORM",{id:!0,class:!0});var S=v(c);y=i(S,"DIV",{class:!0});var z=v(y);C=i(z,"P",{});var he=v(C);N=q(he,"Title"),he.forEach(p),F=E(z),b=i(z,"INPUT",{type:!0,class:!0}),z.forEach(p),w=E(S),P=i(S,"DIV",{class:!0});var J=v(P);A=i(J,"P",{});var ve=v(A);X=q(ve,"What is the license plate number of the vehicle you are reporting?"),ve.forEach(p),Z=E(J),k=i(J,"INPUT",{type:!0,class:!0,maxlength:!0,placeholder:!0}),J.forEach(p),$=E(S),D=i(S,"DIV",{class:!0});var K=v(D);H=i(K,"P",{});var be=v(H);x=q(be,"State the details of the issue"),be.forEach(p),ee=E(K),g=i(K,"INPUT",{type:!0,id:!0,class:!0,maxlength:!0}),K.forEach(p),te=E(S),O=i(S,"BUTTON",{class:!0});var ke=v(O);se=q(ke,"SUBMIT REPORT"),ke.forEach(p),S.forEach(p),me.forEach(p),ae=E(m),le=i(m,"BR",{}),re=i(m,"BR",{}),oe=i(m,"BR",{}),ne=i(m,"BR",{}),ie=i(m,"BR",{}),m.forEach(p),h.forEach(p),G=E(s),Ue(I.$$.fragment,s),this.h()},h(){o(r,"id","title"),o(r,"class","svelte-1tka8fl"),o(b,"type","text"),o(b,"class","form-control svelte-1tka8fl"),b.required=!0,o(y,"class","form-group svelte-1tka8fl"),o(k,"type","text"),o(k,"class","form-control svelte-1tka8fl"),o(k,"maxlength","6"),o(k,"placeholder","ABC123"),k.required=!0,o(P,"class","form-group svelte-1tka8fl"),o(g,"type","text"),o(g,"id","detailbox"),o(g,"class","form-control svelte-1tka8fl"),o(g,"maxlength","1000"),g.required=!0,o(D,"class","form-group svelte-1tka8fl"),o(O,"class","svelte-1tka8fl"),o(c,"id","surveyForm"),o(c,"class","mt-4"),ge(c,"submitted",f[4]),o(T,"class","container svelte-1tka8fl"),o(t,"class","svelte-1tka8fl"),o(a,"class","svelte-1tka8fl")},m(s,h){Q(s,a,h),e(a,t),e(t,r),e(r,_),e(t,d),~l&&U[l].m(t,null),e(t,B),e(t,T),e(T,c),e(c,y),e(y,C),e(C,N),e(y,F),e(y,b),M(b,f[0]),e(c,w),e(c,P),e(P,A),e(A,X),e(P,Z),e(P,k),M(k,f[1]),e(c,$),e(c,D),e(D,H),e(H,x),e(D,ee),e(D,g),M(g,f[2]),e(c,te),e(c,O),e(O,se),e(t,ae),e(t,le),e(t,re),e(t,oe),e(t,ne),e(t,ie),Q(s,G,h),Se(I,s,h),Y=!0,ue||(pe=[j(b,"input",f[9]),j(k,"input",f[10]),j(g,"input",f[11]),j(O,"click",f[7]),j(c,"submit",Ce(f[8]))],ue=!0)},p(s,[h]){let m=l;l=_e(s),l===m?~l&&U[l].p(s,h):(u&&(Me(),ce(U[m],1,1,()=>{U[m]=null}),Oe()),~l?(u=U[l],u?u.p(s,h):(u=U[l]=de[l](s),u.c()),fe(u,1),u.m(t,B)):u=null),h&1&&b.value!==s[0]&&M(b,s[0]),h&2&&k.value!==s[1]&&M(k,s[1]),h&4&&g.value!==s[2]&&M(g,s[2]),h&16&&ge(c,"submitted",s[4]);const W={};h&32&&(W.show=s[5]),I.$set(W)},i(s){Y||(fe(u),fe(I.$$.fragment,s),Y=!0)},o(s){ce(u),ce(I.$$.fragment,s),Y=!1},d(s){s&&p(a),~l&&U[l].d(),s&&p(G),Ve(I,s),ue=!1,qe(pe)}}}const Te="All the fields are mandatory";function Le(f,a,t){let r,_;ye(f,Ye,w=>t(12,r=w));let d,l,u,B=!1,T=!1;const c=Ne(null);ye(f,c,w=>t(5,_=w));const y=async()=>{await Fe(He(We(Ge,"complaints"),r.user.uid),{date:Ae.fromDate(new Date),title:d,plateNumReporting:l,reportDetails:u,resolved:!1}),await new Promise(w=>setTimeout(w,2500)),window.location.replace("/")},C=async()=>{t(3,B=!0),t(4,T=!0),currvalue=novalue,setTimeout(function(){t(3,B=!1)},4e3)};function N(){d=this.value,t(0,d)}function F(){l=this.value,t(1,l)}function b(){u=this.value,t(2,u)}return[d,l,u,B,T,_,c,y,C,N,F,b]}class $e extends we{constructor(a){super();Be(this,a,Le,Ke,Pe,{})}}export{$e as default};
