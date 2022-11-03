import{S as ki,i as Ai,s as Ii,e as t,t as p,c as i,a as d,h as m,d as l,g as xe,F as e,j as Ei,G as yi,b as r,$ as Oi,k as v,w as zi,m as f,x as Ni,a7 as gi,T,ae as Me,y as qi,H as P,af as Pi,q as Di,o as Si,B as Ui,U as Ci,O as Fi,D as Ri,ag as Bi,ah as ji,a4 as Mi,a3 as xi,a6 as Hi,ai as Li,aj as Wi,ak as Vi,al as Ti}from"../chunks/vendor-15aad13b.js";import{a as Ki,d as Yi}from"../chunks/firebase-4a996114.js";import{r as Gi}from"../chunks/fetch-552fd9ba.js";function Qi(u){let n,c;return{c(){n=t("p"),c=p(u[0])},l(y){n=i(y,"P",{});var b=d(n);c=m(b,u[0]),b.forEach(l)},m(y,b){xe(y,n,b),e(n,c)},p(y,[b]){b&1&&Ei(c,y[0])},i:yi,o:yi,d(y){y&&l(n)}}}function Ji(u,n,c){let{message:y="Hi"}=n;return u.$$set=b=>{"message"in b&&c(0,y=b.message)},[y]}class Xi extends ki{constructor(n){super();Ai(this,n,Ji,Qi,Ii,{message:0})}}const _i={"auth/wrong-password":"The password is invalid or the user does not have a password.","auth/claims-too-large":"The claims payload provided to setCustomUserClaims() exceeds the maximum allowed size of 1000 bytes.","auth/email-already-exists":"The provided email is already in use by an existing user. Each user must have a unique email.","auth/id-token-expired":"The provided Firebase ID token is expired.","auth/id-token-revoked":"The Firebase ID token has been revoked.","auth/insufficient-permission":"The credential used to initialize the Admin SDK has insufficient permission to access the requested Authentication resource. Refer to Set up a Firebase project for documentation on how to generate a credential with appropriate permissions and use it to authenticate the Admin SDKs.","auth/invalid-argument":"An invalid argument was provided to an Authentication method. The error message should contain additional information.","auth/invalid-claims":"The custom claim attributes provided to setCustomUserClaims() are invalid.","auth/invalid-creation-time":"The creation time must be a valid UTC date string.","auth/invalid-disabled-field":"The provided value for the disabled user property is invalid. It must be a boolean.","auth/invalid-display-name":"The provided value for the displayName user property is invalid. It must be a non-empty string.","auth/invalid-email-verified":"The provided value for the emailVerified user property is invalid. It must be a boolean.","auth/invalid-hash-algorithm":"The hash algorithm must match one of the strings in the list of supported algorithms.","auth/invalid-hash-block-size":"The hash block size must be a valid number.","auth/invalid-hash-derived-key-length":"The hash derived key length must be a valid number.","auth/invalid-hash-key":"The hash key must a valid byte buffer.","auth/invalid-hash-memory-cost":"The hash memory cost must be a valid number.","auth/invalid-hash-parallelization":"The hash parallelization must be a valid number.","auth/invalid-hash-rounds":"The hash rounds must be a valid number.","auth/invalid-hash-salt-separator":"The hashing algorithm salt separator field must be a valid byte buffer.","auth/invalid-id-token":"The provided ID token is not a valid Firebase ID token.","auth/invalid-last-sign-in-time":"The last sign-in time must be a valid UTC date string.","auth/invalid-page-token":"The provided next page token in listUsers() is invalid. It must be a valid non-empty string.","auth/invalid-password":"The provided value for the password user property is invalid. It must be a string with at least six characters.","auth/invalid-password-hash":"The password hash must be a valid byte buffer.","auth/invalid-password-salt":"The password salt must be a valid byte buffer","auth/invalid-photo-url":"The provided value for the photoURL user property is invalid. It must be a string URL.","auth/invalid-provider-data":"The providerData must be a valid array of UserInfo objects.","auth/invalid-oauth-responsetype":"Only exactly one OAuth responseType should be set to true.","auth/invalid-session-cookie-duration":"The session cookie duration must be a valid number in milliseconds between 5 minutes and 2 weeks.","auth/invalid-uid":"The provided uid must be a non-empty string with at most 128 characters.","auth/invalid-user-import":"The user record to import is invalid.","auth/maximum-user-count-exceeded":"The maximum allowed number of users to import has been exceeded.","auth/missing-hash-algorithm":"Importing users with password hashes requires that the hashing algorithm and its parameters be provided.","auth/missing-uid":"A uid identifier is required for the current operation.","auth/missing-oauth-client-secret":"The OAuth configuration client secret is required to enable OIDC code flow.","auth/phone-number-already-exists":"The provided phoneNumber is already in use by an existing user. Each user must have a unique phoneNumber.","auth/project-not-found":"No Firebase project was found for the credential used to initialize the Admin SDKs. Refer to Set up a Firebase project for documentation on how to generate a credential for your project and use it to authenticate the Admin SDKs.","auth/reserved-claims":"One or more custom user claims provided to setCustomUserClaims() are reserved. For example, OIDC specific claims such as (sub, iat, iss, exp, aud, auth_time, etc) should not be used as keys for custom claims.","auth/session-cookie-expired":"The provided Firebase session cookie is expired.","auth/session-cookie-revoked":"The Firebase session cookie has been revoked.","auth/uid-already-exists":"The provided uid is already in use by an existing user. Each user must have a unique uid.","auth/admin-restricted-operation":"This operation is restricted to administrators only.","auth/app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","auth/app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","auth/captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","auth/code-expired":"The SMS code has expired. Please re-send the verification code to try again.","auth/cordova-not-ready":"Cordova framework is not ready.","auth/cors-unsupported":"This browser is not supported.","auth/credential-already-in-use":"This credential is already associated with a different user account.","auth/custom-token-mismatch":"The custom token corresponds to a different audience.","auth/requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","auth/dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","auth/dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","auth/email-change-needs-verification":"Multi-factor users must always have a verified email.","auth/email-already-in-use":"The email address is already in use by another account.","auth/emulator-config-failed":"Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling 'connectAuthEmulator()' sooner.","auth/expired-action-code":"The action code has expired.","auth/cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","auth/internal-error":"An internal AuthError has occurred.","auth/invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","auth/invalid-app-id":"The mobile app identifier is not registed for the current project.","auth/invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","auth/invalid-auth-event":"An internal AuthError has occurred.","auth/invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","auth/invalid-continue-uri":"The continue URL provided in the request is invalid.","auth/invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","auth/invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","auth/invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","auth/invalid-email":"The email address is badly formatted.","auth/invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","auth/invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","auth/invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","auth/invalid-credential":"The supplied auth credential is malformed or has expired.","auth/invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","auth/invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","auth/invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","auth/invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","auth/unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","auth/invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","auth/invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","auth/invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","auth/invalid-provider-id":"The specified provider ID is invalid.","auth/invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","auth/invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","auth/invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","auth/invalid-tenant-id":"The Auth instance's tenant ID is invalid.","auth/missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth/auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","auth/missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","auth/missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","auth/missing-continue-uri":"A continue URL must be provided in the request.","auth/missing-iframe-start":"An internal AuthError has occurred.","auth/missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","auth/missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","auth/missing-multi-factor-info":"No second factor identifier is provided.","auth/missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","auth/missing-phone-number":"To send verification codes, provide a phone number for the recipient.","auth/missing-verification-id":"The phone auth credential was created with an empty verification ID.","auth/app-deleted":"This instance of FirebaseApp has been deleted.","auth/multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","auth/multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","auth/account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","auth/network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","auth/no-auth-event":"An internal AuthError has occurred.","auth/no-such-provider":"User was not linked to an account with the given provider.","auth/null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","auth/operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","auth/operation-not-supported-in-this-environment":"This operation is not supported in the environment this application is running on. 'location.protocol' must be http, https or chrome-extension and web storage must be enabled.","auth/popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","auth/popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","auth/provider-already-linked":"User can only be linked to one identity for the given provider.","auth/quota-exceeded":"The project's quota for this operation has been exceeded.","auth/redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","auth/redirect-operation-pending":"A redirect sign-in operation is already pending.","auth/rejected-credential":"The request contains malformed or mismatching credentials.","auth/second-factor-already-in-use":"The second factor is already enrolled on this account.","auth/maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","auth/tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID","auth/timeout":"The operation has timed out.","auth/user-token-expired":"The user's credential is no longer valid. The user must sign in again.","auth/too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","auth/unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","auth/unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","auth/unsupported-persistence-type":"The current environment does not support the specified persistence type.","auth/unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","auth/unverified-email":"The operation requires a verified email.","auth/user-cancelled":"The user did not grant your application the permissions it requested.","auth/user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","auth/user-disabled":"The user account has been disabled by an administrator.","auth/user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","auth/weak-password":"The password must be 6 characters long or more.","auth/web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","auth/already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."};function wi(u){let n,c;return{c(){n=t("div"),c=t("input"),this.h()},l(y){n=i(y,"DIV",{id:!0,class:!0});var b=d(n);c=i(b,"INPUT",{type:!0,maxlength:!0,placeholder:!0,class:!0}),b.forEach(l),this.h()},h(){r(c,"type","text"),r(c,"maxlength","10"),r(c,"placeholder","Provide Valid Security Code"),r(c,"class","svelte-1i8pudz"),r(n,"id","adminAuth"),r(n,"class","svelte-1i8pudz")},m(y,b){xe(y,n,b),e(n,c)},d(y){y&&l(n)}}}function Zi(u){let n,c,y,b,S,F,R,B,j,M,x,H,L,ue,W,le,be,Te,a,U,_e,we,de,ke,Ae,O,Ie,he,Pe,Ee,_,Oe,ce,ye,He,N,Le,ze,We,Ve,C,Ke,ge,Ye,Ne,Ge,Qe,k,Je,qe,Xe,Ze,E,$e,De,et,tt,q,it,Se,at,ot,z,nt,Ue,rt,st,pe,A,V,ut,K,lt,Y,dt,G,ht,ct,Re,Ce,pt,mt,me,g,Q,vt,J,ft,X,bt,Z,yt,$,gt,ee,Tt,te,_t,ie,wt,ae,kt,oe,At,ne,It,re,Pt,Et,D,Ot,ve,zt,Nt,fe,qt,Dt,St,Ut,Ct,Ft,Rt,Bt,Be,se,je,jt,Mt,w=u[7]=="admin"&&wi();return se=new Oi({props:{show:u[11]}}),{c(){n=t("body"),c=t("br"),y=t("br"),b=t("br"),S=t("br"),F=t("br"),R=t("br"),B=t("br"),j=t("br"),M=t("br"),x=t("br"),H=t("br"),L=t("br"),ue=t("br"),W=t("br"),le=t("br"),be=t("br"),Te=v(),a=t("div"),U=t("h1"),_e=p("Create an Account"),we=v(),de=t("p"),ke=p("Username"),Ae=v(),O=t("input"),Ie=v(),he=t("p"),Pe=p("Full Name"),Ee=v(),_=t("input"),Oe=v(),ce=t("p"),ye=p("Email"),He=v(),N=t("input"),Le=v(),ze=t("p"),We=p("Password"),Ve=v(),C=t("input"),Ke=v(),ge=t("p"),Ye=v(),Ne=t("p"),Ge=p("Phone Number"),Qe=v(),k=t("input"),Je=v(),qe=t("p"),Xe=p("Hofstra ID"),Ze=v(),E=t("input"),$e=v(),De=t("p"),et=p("Vehicle Make, Model, Year"),tt=v(),q=t("input"),it=v(),Se=t("p"),at=p("License Plate Number"),ot=v(),z=t("input"),nt=v(),Ue=t("p"),rt=p("User Type"),st=v(),pe=t("div"),A=t("select"),V=t("option"),ut=p("Student"),K=t("option"),lt=p("Faculty"),Y=t("option"),dt=p("Guest"),G=t("option"),ht=p("Admin"),ct=v(),w&&w.c(),Re=v(),Ce=t("p"),pt=p("Security Question"),mt=v(),me=t("div"),g=t("select"),Q=t("option"),vt=p("Maiden name of your mother"),J=t("option"),ft=p("The name of your first pet"),X=t("option"),bt=p("In what city were you born?"),Z=t("option"),yt=p("The make of your first car"),$=t("option"),gt=p("Favorite food as a child"),ee=t("option"),Tt=p("Month your best friend born was born"),te=t("option"),_t=p("Favorite movie"),ie=t("option"),wt=p("Something you will never eat"),ae=t("option"),kt=p("What was your first job?"),oe=t("option"),At=p("What was the make of your first car?"),ne=t("option"),It=p("Who is your favorite actor/actress?"),re=t("option"),Pt=p("The name of your favorite book?"),Et=v(),D=t("input"),Ot=v(),ve=t("button"),zt=p("Create Account!"),Nt=v(),fe=t("button"),qt=p("Already have Account"),Dt=v(),St=t("br"),Ut=t("br"),Ct=t("br"),Ft=t("br"),Rt=t("br"),Bt=t("br"),Be=v(),zi(se.$$.fragment),this.h()},l(h){n=i(h,"BODY",{class:!0});var s=d(n);c=i(s,"BR",{}),y=i(s,"BR",{}),b=i(s,"BR",{}),S=i(s,"BR",{}),F=i(s,"BR",{}),R=i(s,"BR",{}),B=i(s,"BR",{}),j=i(s,"BR",{}),M=i(s,"BR",{}),x=i(s,"BR",{}),H=i(s,"BR",{}),L=i(s,"BR",{}),ue=i(s,"BR",{}),W=i(s,"BR",{}),le=i(s,"BR",{}),be=i(s,"BR",{}),Te=f(s),a=i(s,"DIV",{id:!0,class:!0});var o=d(a);U=i(o,"H1",{id:!0,class:!0});var xt=d(U);_e=m(xt,"Create an Account"),xt.forEach(l),we=f(o),de=i(o,"P",{});var Ht=d(de);ke=m(Ht,"Username"),Ht.forEach(l),Ae=f(o),O=i(o,"INPUT",{type:!0,class:!0}),Ie=f(o),he=i(o,"P",{});var Lt=d(he);Pe=m(Lt,"Full Name"),Lt.forEach(l),Ee=f(o),_=i(o,"INPUT",{type:!0,class:!0}),Oe=f(o),ce=i(o,"P",{});var Wt=d(ce);ye=m(Wt,"Email"),Wt.forEach(l),He=f(o),N=i(o,"INPUT",{type:!0,placeholder:!0,class:!0}),Le=f(o),ze=i(o,"P",{});var Vt=d(ze);We=m(Vt,"Password"),Vt.forEach(l),Ve=f(o),C=i(o,"INPUT",{type:!0,class:!0}),Ke=f(o),ge=i(o,"P",{id:!0,class:!0}),d(ge).forEach(l),Ye=f(o),Ne=i(o,"P",{});var Kt=d(Ne);Ge=m(Kt,"Phone Number"),Kt.forEach(l),Qe=f(o),k=i(o,"INPUT",{type:!0,id:!0,name:!0,pattern:!0,maxlength:!0,placeholder:!0,class:!0}),Je=f(o),qe=i(o,"P",{});var Yt=d(qe);Xe=m(Yt,"Hofstra ID"),Yt.forEach(l),Ze=f(o),E=i(o,"INPUT",{type:!0,pattern:!0,maxlength:!0,placeholder:!0,class:!0}),$e=f(o),De=i(o,"P",{});var Gt=d(De);et=m(Gt,"Vehicle Make, Model, Year"),Gt.forEach(l),tt=f(o),q=i(o,"INPUT",{type:!0,placeholder:!0,class:!0}),it=f(o),Se=i(o,"P",{});var Qt=d(Se);at=m(Qt,"License Plate Number"),Qt.forEach(l),ot=f(o),z=i(o,"INPUT",{type:!0,maxlength:!0,placeholder:!0,class:!0}),nt=f(o),Ue=i(o,"P",{});var Jt=d(Ue);rt=m(Jt,"User Type"),Jt.forEach(l),st=f(o),pe=i(o,"DIV",{id:!0,class:!0});var Xt=d(pe);A=i(Xt,"SELECT",{id:!0,name:!0});var Fe=d(A);V=i(Fe,"OPTION",{});var Zt=d(V);ut=m(Zt,"Student"),Zt.forEach(l),K=i(Fe,"OPTION",{});var $t=d(K);lt=m($t,"Faculty"),$t.forEach(l),Y=i(Fe,"OPTION",{});var ei=d(Y);dt=m(ei,"Guest"),ei.forEach(l),G=i(Fe,"OPTION",{});var ti=d(G);ht=m(ti,"Admin"),ti.forEach(l),Fe.forEach(l),Xt.forEach(l),ct=f(o),w&&w.l(o),Re=f(o),Ce=i(o,"P",{});var ii=d(Ce);pt=m(ii,"Security Question"),ii.forEach(l),mt=f(o),me=i(o,"DIV",{id:!0,class:!0});var ai=d(me);g=i(ai,"SELECT",{id:!0,name:!0});var I=d(g);Q=i(I,"OPTION",{});var oi=d(Q);vt=m(oi,"Maiden name of your mother"),oi.forEach(l),J=i(I,"OPTION",{});var ni=d(J);ft=m(ni,"The name of your first pet"),ni.forEach(l),X=i(I,"OPTION",{});var ri=d(X);bt=m(ri,"In what city were you born?"),ri.forEach(l),Z=i(I,"OPTION",{});var si=d(Z);yt=m(si,"The make of your first car"),si.forEach(l),$=i(I,"OPTION",{});var ui=d($);gt=m(ui,"Favorite food as a child"),ui.forEach(l),ee=i(I,"OPTION",{});var li=d(ee);Tt=m(li,"Month your best friend born was born"),li.forEach(l),te=i(I,"OPTION",{});var di=d(te);_t=m(di,"Favorite movie"),di.forEach(l),ie=i(I,"OPTION",{});var hi=d(ie);wt=m(hi,"Something you will never eat"),hi.forEach(l),ae=i(I,"OPTION",{});var ci=d(ae);kt=m(ci,"What was your first job?"),ci.forEach(l),oe=i(I,"OPTION",{});var pi=d(oe);At=m(pi,"What was the make of your first car?"),pi.forEach(l),ne=i(I,"OPTION",{});var mi=d(ne);It=m(mi,"Who is your favorite actor/actress?"),mi.forEach(l),re=i(I,"OPTION",{});var vi=d(re);Pt=m(vi,"The name of your favorite book?"),vi.forEach(l),I.forEach(l),ai.forEach(l),Et=f(o),D=i(o,"INPUT",{type:!0,placeholder:!0,class:!0}),Ot=f(o),ve=i(o,"BUTTON",{class:!0});var fi=d(ve);zt=m(fi,"Create Account!"),fi.forEach(l),Nt=f(o),fe=i(o,"BUTTON",{class:!0});var bi=d(fe);qt=m(bi,"Already have Account"),bi.forEach(l),o.forEach(l),Dt=f(s),St=i(s,"BR",{}),Ut=i(s,"BR",{}),Ct=i(s,"BR",{}),Ft=i(s,"BR",{}),Rt=i(s,"BR",{}),Bt=i(s,"BR",{}),s.forEach(l),Be=f(h),Ni(se.$$.fragment,h),this.h()},h(){r(U,"id","title"),r(U,"class","svelte-1i8pudz"),r(O,"type","text"),r(O,"class","svelte-1i8pudz"),r(_,"type","text"),r(_,"class","svelte-1i8pudz"),r(N,"type","text"),r(N,"placeholder","Hofstra Email"),r(N,"class","svelte-1i8pudz"),r(C,"type","password"),r(C,"class","svelte-1i8pudz"),r(ge,"id","errorCode"),r(ge,"class","error pink-text center-align"),r(k,"type","tel"),r(k,"id","phone"),r(k,"name","phone"),r(k,"pattern","[0-9]"+3+"-[0-9]"+3+"-[0-9]"+4),k.required=!0,r(k,"maxlength","10"),r(k,"placeholder","123-455-6789"),r(k,"class","svelte-1i8pudz"),r(E,"type","number"),r(E,"pattern","[0-9]"+9),r(E,"maxlength","9"),r(E,"placeholder","700222333"),r(E,"class","svelte-1i8pudz"),r(q,"type","text"),r(q,"placeholder","Honda, Civic, 2000"),r(q,"class","svelte-1i8pudz"),r(z,"type","text"),r(z,"maxlength","10"),r(z,"placeholder","ABC123"),r(z,"class","svelte-1i8pudz"),V.__value="student",V.value=V.__value,K.__value="faculty",K.value=K.__value,Y.__value="guest",Y.value=Y.__value,G.__value="admin",G.value=G.__value,r(A,"id","userType"),r(A,"name","userType"),u[7]===void 0&&gi(()=>u[23].call(A)),r(pe,"id","dropdown"),r(pe,"class","svelte-1i8pudz"),Q.__value="Maiden name of your mother",Q.value=Q.__value,J.__value="The name of your first pet",J.value=J.__value,X.__value="In what city were you born?",X.value=X.__value,Z.__value="The make of your first car",Z.value=Z.__value,$.__value="Favorite food as a child",$.value=$.__value,ee.__value="Month your best friend born was born",ee.value=ee.__value,te.__value="Favorite movie",te.value=te.__value,ie.__value="Something you will never eat",ie.value=ie.__value,ae.__value="What was your first job?",ae.value=ae.__value,oe.__value="What was the make of your first car?",oe.value=oe.__value,ne.__value="Who is your favorite actor/actress?",ne.value=ne.__value,re.__value="The name of your favorite book?",re.value=re.__value,r(g,"id","question"),r(g,"name","question"),u[8]===void 0&&gi(()=>u[24].call(g)),r(me,"id","dropdown"),r(me,"class","svelte-1i8pudz"),r(D,"type","text"),r(D,"placeholder","Answer"),r(D,"class","svelte-1i8pudz"),r(ve,"class","svelte-1i8pudz"),r(fe,"class","svelte-1i8pudz"),r(a,"id","log"),r(a,"class","svelte-1i8pudz"),r(n,"class","svelte-1i8pudz")},m(h,s){xe(h,n,s),e(n,c),e(n,y),e(n,b),e(n,S),e(n,F),e(n,R),e(n,B),e(n,j),e(n,M),e(n,x),e(n,H),e(n,L),e(n,ue),e(n,W),e(n,le),e(n,be),e(n,Te),e(n,a),e(a,U),e(U,_e),e(a,we),e(a,de),e(de,ke),e(a,Ae),e(a,O),T(O,u[0]),e(a,Ie),e(a,he),e(he,Pe),e(a,Ee),e(a,_),T(_,u[10]),e(a,Oe),e(a,ce),e(ce,ye),e(a,He),e(a,N),T(N,u[1]),e(a,Le),e(a,ze),e(ze,We),e(a,Ve),e(a,C),T(C,u[2]),e(a,Ke),e(a,ge),e(a,Ye),e(a,Ne),e(Ne,Ge),e(a,Qe),e(a,k),T(k,u[3]),e(a,Je),e(a,qe),e(qe,Xe),e(a,Ze),e(a,E),T(E,u[4]),e(a,$e),e(a,De),e(De,et),e(a,tt),e(a,q),T(q,u[5]),e(a,it),e(a,Se),e(Se,at),e(a,ot),e(a,z),T(z,u[6]),e(a,nt),e(a,Ue),e(Ue,rt),e(a,st),e(a,pe),e(pe,A),e(A,V),e(V,ut),e(A,K),e(K,lt),e(A,Y),e(Y,dt),e(A,G),e(G,ht),Me(A,u[7]),e(a,ct),w&&w.m(a,null),e(a,Re),e(a,Ce),e(Ce,pt),e(a,mt),e(a,me),e(me,g),e(g,Q),e(Q,vt),e(g,J),e(J,ft),e(g,X),e(X,bt),e(g,Z),e(Z,yt),e(g,$),e($,gt),e(g,ee),e(ee,Tt),e(g,te),e(te,_t),e(g,ie),e(ie,wt),e(g,ae),e(ae,kt),e(g,oe),e(oe,At),e(g,ne),e(ne,It),e(g,re),e(re,Pt),Me(g,u[8]),e(a,Et),e(a,D),T(D,u[9]),e(a,Ot),e(a,ve),e(ve,zt),e(a,Nt),e(a,fe),e(fe,qt),e(n,Dt),e(n,St),e(n,Ut),e(n,Ct),e(n,Ft),e(n,Rt),e(n,Bt),xe(h,Be,s),qi(se,h,s),je=!0,jt||(Mt=[P(O,"input",u[15]),P(_,"input",u[16]),P(N,"input",u[17]),P(C,"input",u[18]),P(k,"input",u[19]),P(E,"input",u[20]),P(q,"input",u[21]),P(z,"input",u[22]),P(A,"change",u[23]),P(g,"change",u[24]),P(D,"input",u[25]),P(ve,"click",u[13]),P(fe,"click",u[14])],jt=!0)},p(h,[s]){s&1&&O.value!==h[0]&&T(O,h[0]),s&1024&&_.value!==h[10]&&T(_,h[10]),s&2&&N.value!==h[1]&&T(N,h[1]),s&4&&C.value!==h[2]&&T(C,h[2]),s&8&&T(k,h[3]),s&16&&Pi(E.value)!==h[4]&&T(E,h[4]),s&32&&q.value!==h[5]&&T(q,h[5]),s&64&&z.value!==h[6]&&T(z,h[6]),s&128&&Me(A,h[7]),h[7]=="admin"?w||(w=wi(),w.c(),w.m(a,Re)):w&&(w.d(1),w=null),s&256&&Me(g,h[8]),s&512&&D.value!==h[9]&&T(D,h[9]);const o={};s&2048&&(o.show=h[11]),se.$set(o)},i(h){je||(Di(se.$$.fragment,h),je=!0)},o(h){Si(se.$$.fragment,h),je=!1},d(h){h&&l(n),w&&w.d(),h&&l(Be),Ui(se,h),jt=!1,Ci(Mt)}}}const aa=async({session:u})=>u.user.exists?{status:302,redirect:"/login"}:{};function $i(u,n,c){let y,b,S,F,R,B,j,M,x,H,L,ue,W;const le=Ri(null);Fi(u,le,_=>c(11,y=_));const be=()=>le.set(ji(Xi,{message:ue})),Te=async()=>{const _=await Bi(Ki,S,F).catch(ce=>{for(var ye in _i)ye==ce.code&&(ue=_i[ye]);be()});await Mi(xi(Hi(Yi,"users"),_.user.uid),{userType:x,username:b,phoneNumber:R,hofstraID:B,vehicleMakeModelYear:j,licenseNumber:M,securityQuestion:H,securityAnswer:L,email:S,fullname:W}),await Li(_.user,{displayName:b}),await Wi(_.user).then(()=>{ue="Email Verification sent!",be()});const Oe=await Vi(_.user,!0);await Gi("/auth","POST",{idToken:Oe}),window.location.replace("/login")},a=async()=>{window.location.replace("/login")};function U(){b=this.value,c(0,b)}function _e(){W=this.value,c(10,W)}function we(){S=this.value,c(1,S)}function de(){F=this.value,c(2,F)}function ke(){R=this.value,c(3,R)}function Ae(){B=Pi(this.value),c(4,B)}function O(){j=this.value,c(5,j)}function Ie(){M=this.value,c(6,M)}function he(){x=Ti(this),c(7,x)}function Pe(){H=Ti(this),c(8,H)}function Ee(){L=this.value,c(9,L)}return[b,S,F,R,B,j,M,x,H,L,W,y,le,Te,a,U,_e,we,de,ke,Ae,O,Ie,he,Pe,Ee]}class oa extends ki{constructor(n){super();Ai(this,n,$i,Zi,Ii,{})}}export{oa as default,aa as load};