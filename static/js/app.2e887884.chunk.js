(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t),function(e){var i=n(29),o=n.n(i),l=n(9),a=n.n(l),r=n(0),c=n(3),s=n(11),u=n(32),d=n(26),f=n(6),h=n(1),g=function(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var i=t[n].split("=");if(i[0]===e)return i[1]}return!1}("token"),j=f.default.create({main:{flex:1,backgroundColor:"black",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"},content:{alignItems:"center",width:"60%",height:"70%"},logo:{flex:1,color:"grey",fontSize:55,fontWeight:100},authText:{color:"grey",fontSize:28,fontWeigth:400},form:{flex:5,justifyContent:"center",alignItems:"center"},fieldTitle:{color:"grey",fontSize:14,fontWeight:300,marginBottom:8},Input:{width:175,height:40,backgroundColor:"grey",padding:8,textAlign:"center",marginBottom:14},errorView:{flex:.2},errorMsg:{color:"red",fontSize:11,fontStyle:"italic"},buttonSection:{flex:.6,justifyContent:"center",alignItems:"center"},button:{justifyContent:"center",alignItems:"center",width:230,height:60,backgroundColor:"lightblue",marginBottom:26},buttonText:{color:"black",fontSize:25,fontWeight:300},signupNav:{padding:8,justifyContent:"center",alignItems:"center"},signupText:{color:"grey",fontSize:14,fontWeight:"700"}});t.default=function(t){var n=t.navigation,i=Object(r.useState)(""),l=a()(i,2),f=l[0],b=l[1],x=Object(r.useState)(""),y=a()(x,2),p=y[0],m=y[1],O=Object(r.useState)(""),S=a()(O,2),w=S[0],k=S[1],C=function(){var e=o()((function*(){if(f&&p){var e=JSON.stringify({email:f,password:p});try{var t=yield fetch("https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC/auth/login",{method:"POST",body:e,headers:{"Content-Type":"application/json"}});if(t.ok){var n=yield t.json();b(""),m(""),k(""),v(n)}else{var i=yield t.json();k(i.message)}}catch(o){console.log(o)}}else k("All fields must be completed")}));return function(){return e.apply(this,arguments)}}(),v=function(t){e.token=t.authToken,n.navigate("Channels",{toSpot:!1})};return Object(h.jsx)(h.Fragment,{children:g?void n.navigate("Verify"):Object(h.jsx)(c.default,{style:j.main,children:Object(h.jsxs)(c.default,{style:j.content,accessibilityRole:"form",children:[Object(h.jsx)(s.default,{style:j.logo,children:"Spot"}),Object(h.jsx)(s.default,{style:j.authText,children:"Log in"}),Object(h.jsxs)(c.default,{style:j.form,children:[Object(h.jsx)(s.default,{style:j.fieldTitle,children:"Email"}),Object(h.jsx)(u.default,{style:j.Input,onChangeText:b,value:f}),Object(h.jsx)(s.default,{style:j.fieldTitle,children:"Password"}),Object(h.jsx)(u.default,{style:j.Input,secureTextEntry:!0,onChangeText:m,value:p}),Object(h.jsx)(c.default,{style:j.errorView,children:w?Object(h.jsx)(s.default,{style:j.errorMsg,children:w}):null})]}),Object(h.jsxs)(c.default,{style:j.buttonSection,children:[Object(h.jsx)(d.default,{style:j.button,onPress:C,children:Object(h.jsx)(s.default,{style:j.buttonText,children:"Log in"})}),Object(h.jsx)(d.default,{style:j.signupNav,onPress:function(){return n.navigate("Signup")},children:Object(h.jsx)(s.default,{style:j.signupText,children:"Signup"})})]})]})})})}}.call(this,n(34))},110:function(e,t,n){"use strict";n.r(t),function(e){var i=n(29),o=n.n(i),l=(n(0),n(3)),a=n(111),r=n(112),c=n(1),s=function(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var i=t[n].split("=");if(i[0]===e)return i[1]}return!1}("token");t.default=function(t){var n=t.navigation,i=function(){var e=o()((function*(){var e=JSON.stringify({magic_token:s});try{var t=yield fetch("https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC/auth/verify_email/magic_login",{method:"POST",body:e,headers:{"Content-Type":"application/json"}});if(t.ok){var n=yield t.json();u(n)}}catch(i){console.log(i)}}));return function(){return e.apply(this,arguments)}}(),u=function(t){e.token=t.authToken,n.navigate("Channels",{toSpot:!1})};return!1===s?console.log("no token"):i(),Object(c.jsx)(l.default,{style:{flex:1},children:!1===s?Object(c.jsx)(a.default,{}):Object(c.jsx)(r.default,{})})}}.call(this,n(34))},111:function(e,t,n){"use strict";n.r(t);n(0);var i=n(3),o=n(11),l=n(6),a=n(1),r=l.default.create({preMain:{flex:1,justifyContent:"center",alignItems:"center",width:"100%",height:"100%",padding:95,backgroundColor:"black"},successIcon:{color:"white",fontSize:34,marginBottom:20},preTitle:{color:"white",textAlign:"center",fontSize:16,fontWeight:300,lineHeight:22,marginBottom:16},preText:{color:"grey",textAlign:"center",fontSize:12,fontWeight:300,lineHeight:18}});t.default=function(){return Object(a.jsxs)(i.default,{style:r.preMain,children:[Object(a.jsx)(o.default,{style:r.successIcon,children:"\u2714\ufe0e"}),Object(a.jsx)(o.default,{style:r.preTitle,children:"Sign up successful. Please check your email to continue."}),Object(a.jsx)(o.default,{style:r.preText,children:"If you can't find a verification email from Spot, check you Spam of Promotion folders."})]})}},112:function(e,t,n){"use strict";n.r(t);n(0);var i=n(3),o=n(11),l=n(6),a=n(1),r=l.default.create({postMain:{flex:1,justifyContent:"center",alignItems:"center",width:"100%",height:"100%",padding:95,backgroundColor:"black"},successIcon:{color:"green",fontSize:34,marginBottom:20},postTitle:{color:"white",textAlign:"center",fontSize:18,fontWeight:300,lineHeight:22,marginBottom:16},postRedirect:{color:"grey",textAlign:"center",fontSize:14,fontWeight:300,lineHeight:18}});t.default=function(){return Object(a.jsxs)(i.default,{style:r.postMain,children:[Object(a.jsx)(o.default,{style:r.successIcon,children:"\u2714\ufe0e"}),Object(a.jsx)(o.default,{style:r.postTitle,children:"Thank you for verifying your email."}),Object(a.jsx)(o.default,{style:r.postRedirect,children:"Redirecting..."})]})}},127:function(e,t,n){"use strict";n.r(t);var i,o,l=n(186),a=n(185),r=n(17),c=n.n(r),s=n(29),u=n.n(s),d=n(9),f=n.n(d),h=n(0),g=n(3),j=n(11),b=n(32),x=n(58),y=n(26),p=n(6),m=n(49),O=n(1),S=p.default.create({main:{width:"100%"},username:{fontSize:12,color:"grey",textAlign:"right",marginRight:12,marginTop:4,marginBottom:4},messageView:{backgroundColor:"lightblue",borderRadius:8,alignSelf:"flex-end",marginLeft:72},message:{padding:12,textAlign:"right"}}),w=function(e){return Object(O.jsxs)(g.default,{style:S.main,children:[Object(O.jsx)(j.default,{style:S.username,children:e.userName}),Object(O.jsx)(g.default,{style:S.messageView,children:Object(O.jsx)(j.default,{style:S.message,children:e.msg})})]})},k=p.default.create({main:{width:"100%"},username:{fontSize:12,color:"grey",textAlign:"left",marginLeft:12,marginTop:6,marginBottom:4},messageView:{backgroundColor:"grey",borderRadius:8,alignSelf:"flex-start",flexWrap:"wrap",marginRight:72},message:{padding:12,textAlign:"left"}}),C=function(e){return Object(O.jsxs)(g.default,{style:k.main,children:[Object(O.jsx)(j.default,{style:k.username,children:e.userName}),Object(O.jsx)(g.default,{style:k.messageView,children:Object(O.jsx)(j.default,{style:k.message,children:e.msg})})]})},v=p.default.create({loadingView:{flex:1,backgroundColor:"black",justifyContent:"center",alignItems:"center",paddingVertical:146},loadingText:{color:"white"}}),T=function(){return Object(O.jsx)(g.default,{style:v.loadingView,children:Object(O.jsx)(j.default,{style:v.loadingText,children:"Loading..."})})},B=p.default.create({main:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black",padding:80},topView:{alignItems:"center",marginBottom:"35%"},titleWelcome:{color:"grey",textAlign:"center",marginBottom:16},title:{color:"white",textAlign:"center",fontSize:36,fontWeight:300,marginBottom:4},titleOwner:{color:"grey",textAlign:"center",fontSize:18},centerMessage:{color:"grey",textAlign:"center",fontStyle:"italic",fontSize:14,lineHeight:22,marginBottom:"35%"},bottomView:{alignItems:"center"},buttonCreateSpot:{height:35,justifyContent:"center",padding:8,marginBottom:2},createSpotText:{color:"white",textAlign:"center",fontSize:12,fontWeight:500},buttonQuestionFeedback:{height:35,justifyContent:"center",padding:8},questionFeedbackText:{color:"white",textAlign:"center",fontSize:12,fontWeight:500}}),I=function(e){return Object(O.jsxs)(g.default,{style:B.main,children:[Object(O.jsxs)(g.default,{style:B.topView,children:[Object(O.jsx)(j.default,{style:B.titleWelcome,children:"Welcome to"}),Object(O.jsx)(j.default,{style:B.title,children:e.title}),Object(O.jsxs)(j.default,{style:B.titleOwner,children:["by ",e.owner]})]}),Object(O.jsx)(j.default,{style:B.centerMessage,children:"Start writing on the field at the bottom. Messages will dissappear after 24 hours, make sure to come back often."}),Object(O.jsxs)(g.default,{style:B.bottomView,children:[Object(O.jsx)(y.default,{style:B.buttonCreateSpot,onPress:e.handlePressSpot,children:Object(O.jsx)(j.default,{style:B.createSpotText,children:"Create your own Spot"})}),Object(O.jsx)(y.default,{style:B.buttonQuestionFeedback,onPress:e.handlePressQuest,children:Object(O.jsx)(j.default,{style:B.questionFeedbackText,children:"Ask question or leave feedback"})})]})]})},z="https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC",P=/chatrooms/,W=n(152),A=p.default.create({main:{flex:1,backgroundColor:"black",alignItems:"stretch",padding:16},top:{width:"100%",alignItems:"flex-end",flexDirection:"row",justifyContent:"space-between"},header:{flex:1,justifyContent:"flex-start",marginTop:4},title:{fontSize:34,lineHeight:36,fontWeight:100,color:"grey",marginBottom:4},subtitle:{color:"grey"},usersView:{width:90,height:50,justifyContent:"flex-end"},usersNumber:{color:"grey",fontSize:11,textAlign:"right"},usersLetter:{fontSize:14,fontWeight:500},chatContainer:{flex:1,marginVertical:16},bottomContainer:{width:"100%",flexDirection:"row"},backButton:{width:50,height:50,backgroundColor:"grey"},backArrow:{fontSize:30,lineHeight:20,fontWeight:800},backButtonText:{fontSize:14,fontWeight:600,alignSelf:"center",marginTop:6},inputView:{flexDirection:"row",flex:1,height:50},textInput:{width:"100%",height:"100%",backgroundColor:"grey",marginLeft:4,padding:8},inputButton:{justifyContent:"center",alignItems:"center",width:100,height:50,backgroundColor:"lightblue",alignSelf:"right"},inputButtonText:{fontSize:16,color:"black",fontWeight:600}}),M=function(e){var t=e.route,n=e.navigation,l=Object(h.useState)(""),a=f()(l,2),r=a[0],s=a[1],d=Object(h.useState)(""),p=f()(d,2),S=p[0],k=p[1],v=Object(h.useState)(null),B=f()(v,2),M=B[0],V=B[1],N=Object(h.useState)(null),E=f()(N,2),R=(E[0],E[1]),L=Object(h.useState)(null),H=f()(L,2),D=H[0],J=H[1],F=Object(h.useState)(null),G=f()(F,2),Q=(G[0],G[1]),_=Object(h.useState)(null),q=f()(_,2),K=q[0],U=q[1],X=Object(h.useState)(null),Y=f()(X,2),Z=Y[0],$=Y[1],ee=Object(h.useState)(""),te=f()(ee,2),ne=te[0],ie=te[1],oe=Object(h.useState)(!0),le=f()(oe,2),ae=le[0],re=le[1],ce=Object(h.useState)(""),se=f()(ce,2),ue=se[0],de=se[1],fe=t.params.id,he=Object(h.useRef)(),ge=function(){var e=u()((function*(){try{var e=yield fetch("https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC/auth/token",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer "+token}});if(e.ok){var t=yield e.json();xe(t),be()}else{var n=yield e.json();Q(n.message),console.log("Not able to connect. Try again later.")}}catch(i){console.log(i)}}));return function(){return e.apply(this,arguments)}}(),je=function(){var e=u()((function*(){try{var e=yield fetch("https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC/auth/token",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer "+token}});if(e.ok)return(yield e.json()).ablyToken}catch(t){console.log(t)}}));return function(){return e.apply(this,arguments)}}(),be=function(){var e=u()((function*(){var e=""+z+P+fe;try{var t=yield fetch(e,{method:"GET",headers:{accept:"application/json",Authorization:"Bearer "+token}});if(t.ok){var n=yield t.json();ye(n)}}catch(i){console.log(i)}}));return function(){return e.apply(this,arguments)}}(),xe=function(e){V(e.user.name),R(e.user.id),J(e.ablyToken)},ye=function(e){U(e.title),$(e.description),ie(e.owner.name)};Object(h.useEffect)((function(){ge()}),[]),Object(h.useEffect)((function(){pe()}),[D]);var pe=function(){null!==D&&(i=new W.Realtime({authCallback:function(){var e=u()((function*(e,t){try{t(null,yield je())}catch(n){t(n,null)}}));return function(t,n){return e.apply(this,arguments)}}()})).connection.on("connected",(function(){console.log(M+" has connected to Ably Realtime!"),me(i)}))},me=function(e){o=e.channels.get(fe,{params:{occupancy:"metrics.connections"}}),console.log(M+" has subscribed to channel "+fe+"!"),Se(o),o.subscribe((function(e){e.data.metrics?de(ke(e.data.metrics.connections)):k((function(t){return[].concat(c()(t),[e])}))}))},Oe=[],Se=function(e){e.history((function(e,t){for(var n=t.items,i=0;i<n.length;i++)Oe.unshift(n[i]);k(Oe),re(!1)}))},we=function(){i.close(),console.log("Connection ended!"),n.navigate("Channels",{token:token})},ke=function(e){return e>0&&e<=1?e+" person present":e>=2&&e<=999?e+" people present":e>=1e3&&e<=999999?Math.floor(e/1e3)+"k people present":e>=1e6&&e<=999999999?Math.floor(e/1e6)+"m people present":e>=1e9&&e<=999999999999?Math.floor(e/1e9)+"b people present":null};return Object(O.jsxs)(g.default,{style:A.main,children:[Object(O.jsxs)(g.default,{style:A.top,children:[Object(O.jsxs)(g.default,{style:A.header,children:[Object(O.jsx)(j.default,{style:A.title,children:K}),Object(O.jsx)(j.default,{style:A.subtitle,children:Z})]}),Object(O.jsx)(g.default,{style:A.usersView,children:Object(O.jsx)(j.default,{style:A.usersNumber,children:ue})})]}),Object(O.jsx)(m.default,{style:A.chatContainer,ref:he,onContentSizeChange:function(){return he.current.scrollToEnd({animated:!0})},children:0!==S.length?Object(O.jsx)(x.default,{data:S,renderItem:function(e){var t=e.item;return!0===t.data.cont?M===t.data.user?Object(O.jsx)(w,{msg:t.data.message},t.id):Object(O.jsx)(C,{msg:t.data.message},t.id):M!==t.data.user?Object(O.jsx)(C,{userName:t.data.user,msg:t.data.message},t.id):Object(O.jsx)(w,{userName:t.data.user,msg:t.data.message},t.id)},keyExtractor:function(e){return e.id}}):!0===ae?Object(O.jsx)(T,{}):Object(O.jsx)(I,{title:K,owner:ne,handlePressSpot:function(){we(),n.navigate("Channels",{toSpot:!1})},handlePressQuest:function(){we(),n.navigate("Channels",{toSpot:!0})}})}),Object(O.jsxs)(g.default,{style:A.bottomContainer,children:[Object(O.jsxs)(y.default,{style:A.backButton,onPress:we,children:[Object(O.jsx)(j.default,{style:A.backArrow,children:"\u230c"}),Object(O.jsx)(j.default,{style:A.backButtonText,children:"Back"})]}),Object(O.jsxs)(g.default,{style:A.inputView,children:[Object(O.jsx)(b.default,{style:A.textInput,onChangeText:s,placeholder:"Type your message...",value:r}),Object(O.jsx)(y.default,{style:A.inputButton,onPress:function(){var e,t=S.length-1;0!==S.length&&(e=S[t].data.user),M===e?o.publish("new-message",{user:M,message:r,cont:!0}):o.publish("new-message",{user:M,message:r,cont:!1}),s("")},children:Object(O.jsx)(j.default,{style:A.inputButtonText,children:"Send"})})]})]})]})},V=n(109),N=p.default.create({main:{flex:1,backgroundColor:"black",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"},content:{alignItems:"center",width:"60%",height:"70%"},logo:{flex:1,color:"grey",fontSize:55,fontWeight:100},authText:{color:"grey",fontSize:28,fontWeigth:400},form:{flex:5,justifyContent:"center",alignItems:"center"},fieldTitle:{color:"grey",fontSize:14,fontWeight:300,marginBottom:8},Input:{width:175,height:40,backgroundColor:"grey",padding:8,textAlign:"center",marginBottom:14},errorView:{flex:.2},errorMsg:{color:"red",fontSize:11,fontStyle:"italic"},buttonSection:{flex:.6,justifyContent:"center",alignItems:"center"},button:{justifyContent:"center",alignItems:"center",width:230,height:60,backgroundColor:"lightblue",marginBottom:26},buttonText:{color:"black",fontSize:25,fontWeight:300},loginNav:{padding:8,justifyContent:"center",alignItems:"center"},loginText:{color:"grey",fontSize:14,fontWeight:"700"}}),E=function(e){var t=e.navigation,n=Object(h.useState)(""),i=f()(n,2),o=i[0],l=i[1],a=Object(h.useState)(""),r=f()(a,2),c=r[0],s=r[1],d=Object(h.useState)(""),x=f()(d,2),p=x[0],m=x[1],S=Object(h.useState)(""),w=f()(S,2),k=w[0],C=w[1],v=Object(h.useState)(""),T=f()(v,2),B=T[0],I=T[1],z=function(){var e=u()((function*(){if(p===k)if(c&&o&&p&&k){var e=JSON.stringify({name:c,email:o,password:p});try{var n=yield fetch("https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC/auth/verify_email/signup",{method:"POST",body:e,headers:{"Content-Type":"application/json"}});if(n.ok)s(""),l(""),m(""),C(""),I(""),t.navigate("Verify");else{var i=yield n.json();I(i.message)}}catch(a){console.log(a)}}else I("All fields must be completed.");else I("Passwords must match")}));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(g.default,{style:N.main,accessibilityRole:"form",children:Object(O.jsxs)(g.default,{style:N.content,children:[Object(O.jsx)(j.default,{style:N.logo,children:"Spot"}),Object(O.jsx)(j.default,{style:N.authText,children:"Sign up"}),Object(O.jsxs)(g.default,{style:N.form,children:[Object(O.jsx)(j.default,{style:N.fieldTitle,children:"Name"}),Object(O.jsx)(b.default,{style:N.Input,onChangeText:s,value:c}),Object(O.jsx)(j.default,{style:N.fieldTitle,children:"Email"}),Object(O.jsx)(b.default,{style:N.Input,onChangeText:l,value:o}),Object(O.jsx)(j.default,{style:N.fieldTitle,children:"Password"}),Object(O.jsx)(b.default,{style:N.Input,secureTextEntry:!0,onChangeText:m,value:p}),Object(O.jsx)(j.default,{style:N.fieldTitle,children:"Confirm password"}),Object(O.jsx)(b.default,{style:N.Input,secureTextEntry:!0,onChangeText:C,value:k}),Object(O.jsx)(g.default,{style:N.errorView,children:B?Object(O.jsx)(j.default,{style:N.errorMsg,children:B}):null})]}),Object(O.jsxs)(g.default,{style:N.buttonSection,children:[Object(O.jsx)(y.default,{style:N.button,onPress:z,children:Object(O.jsx)(j.default,{style:N.buttonText,children:"Sign up"})}),Object(O.jsx)(y.default,{style:N.loginNav,onPress:function(){return t.navigate("Login")},children:Object(O.jsx)(j.default,{style:N.loginText,children:"Log in"})})]})]})})},R=function(e){return Object(O.jsx)(g.default,{style:L.topicMain,children:Object(O.jsx)(j.default,{style:L.topicText,children:e.topic})})},L=p.default.create({topicMain:{alignSelf:"flex-start",backgroundColor:"#202020",padding:6},topicText:{fontSize:11,textAlign:"left",color:"grey"},spotMain:{width:"100%",marginTop:8,padding:12,backgroundColor:"#707070",flexDirection:"row"},spotDescription:{flex:1,alignItems:"left"},spotTitle:{color:"#EEEEEE",fontSize:30,fontWeight:200,marginBottom:4},spotSub:{color:"#101010",fontSize:16,fontWeight:300,lineHeight:20,marginBottom:14},spotArrowView:{width:30,height:"100%",padding:4},spotArrow:{fontSize:34,fontWeight:"800"}}),H=function(e){return Object(O.jsxs)(y.default,{style:L.spotMain,onPress:e.destination,children:[Object(O.jsxs)(g.default,{style:L.spotDescription,children:[Object(O.jsx)(j.default,{style:L.spotTitle,children:e.title}),Object(O.jsx)(j.default,{style:L.spotSub,children:e.subtitle}),Object(O.jsx)(R,{topic:e.topic})]}),Object(O.jsx)(g.default,{style:L.spotArrowView,children:Object(O.jsx)(j.default,{style:L.spotArrow,children:"\u230d"})})]})},D=function(e){return Object(O.jsxs)(y.default,{style:K.addButton,onPress:e.handlePress,children:[Object(O.jsx)(j.default,{style:K.addButtonIcon,children:"+"}),Object(O.jsx)(j.default,{style:K.addButtonText,children:"New Spot"})]})},J=function(e){return Object(O.jsxs)(y.default,{style:K.cancelButton,onPress:e.handlePress,children:[Object(O.jsx)(j.default,{style:K.cancelButtonIcon,children:"x"}),Object(O.jsx)(j.default,{style:K.cancelButtonText,children:"Cancel"})]})},F=function(e){return Object(O.jsxs)(y.default,{style:K.nextButton,onPress:e.handlePress,children:[Object(O.jsx)(j.default,{style:K.nextButtonIcon,children:"\u230d"}),Object(O.jsx)(j.default,{style:K.nextButtonText,children:"Next"})]})},G=function(e){return Object(O.jsxs)(y.default,{style:K.doneButton,onPress:e.handlePress,children:[Object(O.jsx)(j.default,{style:K.doneButtonIcon,children:"\u2713"}),Object(O.jsx)(j.default,{style:K.doneButtonText,children:"Done"})]})},Q=function(e){return Object(O.jsxs)(g.default,{style:K.addMain,children:[Object(O.jsx)(b.default,{style:K.titleInput,placeholder:"Add a title...",onChangeText:e.changeText,value:e.value}),Object(O.jsx)(J,{handlePress:e.handleCancel}),Object(O.jsx)(F,{handlePress:e.handleNext})]})},_=function(e){return Object(O.jsxs)(g.default,{style:K.addMain,children:[Object(O.jsx)(b.default,{style:K.descriptionInput,placeholder:"Add a description...",onChangeText:e.changeText,value:e.value}),Object(O.jsx)(J,{handlePress:e.handleCancel}),Object(O.jsx)(F,{handlePress:e.handleNext})]})},q=function(e){return Object(O.jsxs)(g.default,{style:K.addMain,children:[Object(O.jsx)(b.default,{style:K.topicInput,placeholder:"Add a topic...",onChangeText:e.changeText,value:e.value}),Object(O.jsx)(J,{handlePress:e.handleCancel}),Object(O.jsx)(G,{handlePress:e.handleDone})]})},K=p.default.create({addButton:{justifyContent:"center",alignItems:"center",width:55,height:55,backgroundColor:"grey",padding:4,marginRight:2},addButtonIcon:{fontSize:38,lineHeight:34,fontWeight:300,marginTop:8},addButtonText:{fontSize:9,marginBottom:14,fontWeight:500},addMain:{flex:1,flexDirection:"row",alignContent:"stretch",height:55,backgroundColor:"grey"},titleInput:{width:"100%",padding:14,fontSize:26,fontWeight:300},descriptionInput:{width:"100%",padding:14,fontSize:18,fontWeight:300},topicInput:{width:"100%",padding:14,fontSize:16,fontWeight:300},cancelButton:{width:55,height:55,justifyContent:"center",alignItems:"center",backgroundColor:"#505050"},cancelButtonIcon:{fontSize:28,fontWeight:400,color:"white",lineHeight:30,marginBotton:46},cancelButtonText:{fontSize:9,fontWeight:700,color:"white",lineHeight:12},nextButton:{width:55,height:55,padding:2,alignItems:"flex-end",backgroundColor:"lightgrey"},nextButtonIcon:{fontSize:40,lineHeight:34,fontWeight:600,marginRight:4},nextButtonText:{fontSize:9,fontWeight:700,marginRight:14},doneButton:{width:55,height:55,padding:2,alignItems:"center",justifyContent:"center",backgroundColor:"lightgrey"},doneButtonIcon:{fontSize:24,lineHeight:26,fontWeight:700,marginTop:2},doneButtonText:{fontSize:10,fontWeight:600}}),U=p.default.create({addMain:{width:"100%",height:65,alignItems:"center",justifyContent:"flex-end"},errorMessage:{fontSize:11,color:"red",fontStyle:"italic",marginBottom:4},addSpotMain:{flexDirection:"row",width:"100%",height:55},main:{flex:1,backgroundColor:"black",width:"100%",height:"100%",padding:16},topView:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},title:{color:"white",fontSize:48,fontWeight:200,marginBottom:16},logoutButton:{backgroundColor:"grey",padding:8,height:35,marginBottom:6},logoutText:{color:"white"},flatList:{marginBottom:12}}),X=function(e){var t=e.route,n=e.navigation,i=Object(h.useState)(null),o=f()(i,2),l=o[0],a=o[1],r=Object(h.useState)(null),c=f()(r,2),s=c[0],d=c[1],b=Object(h.useState)(null),p=f()(b,2),m=(p[0],p[1]),S=Object(h.useState)(!1),w=f()(S,2),k=w[0],C=w[1],v=Object(h.useState)(!1),T=f()(v,2),B=T[0],I=T[1],z=Object(h.useState)(!1),P=f()(z,2),W=P[0],A=P[1],M=Object(h.useState)(""),V=f()(M,2),N=V[0],E=V[1],R=Object(h.useState)(""),L=f()(R,2),J=L[0],F=L[1],G=Object(h.useState)(""),K=f()(G,2),X=K[0],Y=K[1];!0===t.params.toSpot&&n.navigate("Chat",{id:1}),Object(h.useEffect)((function(){Z()}),[]);var Z=function(){var e=u()((function*(){try{var e=yield fetch("https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC/chatrooms",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer "+token}});if(e.ok){var t=yield e.json();ee(t)}else{var n=yield e.json();m(n.message)}}catch(i){console.log(i)}}));return function(){return e.apply(this,arguments)}}(),$=function(){var e=u()((function*(){if(N&&J&&""!==X){var e=JSON.stringify({title:N,description:J,topic:X});try{var t=yield fetch("https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC/chatrooms",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+token},body:e});if(t.ok){var n=yield t.json();te(n)}else console.log("There's been an error")}catch(i){console.log(i)}}}));return function(){return e.apply(this,arguments)}}(),ee=function(e){a(e.items)},te=function(e){var t=e.chatroom.id;Z(),n.navigate("Chat",{id:t})};return Object(O.jsxs)(g.default,{style:U.main,children:[Object(O.jsxs)(g.default,{style:U.topView,children:[Object(O.jsx)(j.default,{style:U.title,children:"Spots"}),Object(O.jsx)(y.default,{style:U.logoutButton,onPress:function(){token="",n.navigate("Login")},children:Object(O.jsx)(j.default,{style:U.logoutText,children:"Logout"})})]}),null!==l?Object(O.jsx)(x.default,{style:U.flatList,data:l,renderItem:function(e){var t=e.item;return Object(O.jsx)(H,{title:t.title,subtitle:t.description,topic:t.topic,destination:function(){return n.navigate("Chat",{id:t.id})}})},keyExtractor:function(e){return e.id}}):null,Object(O.jsxs)(g.default,{style:U.addMain,children:[Object(O.jsx)(j.default,{style:U.errorMessage,children:s}),Object(O.jsxs)(g.default,{style:U.addSpotMain,children:[Object(O.jsx)(D,{handlePress:function(){C(!0)}}),!0===k?Object(O.jsx)(Q,{handleCancel:function(){C(!1),d("")},handleNext:function(){""!==N?(C(!1),I(!0),d("")):d("All fields must be completed")},changeText:E,value:N}):null,B?Object(O.jsx)(_,{handleCancel:function(){I(!1),d("")},handleNext:function(){""!==J?(I(!1),A(!0),d("")):d("All fields must be completed")},changeText:F,value:J}):null,W?Object(O.jsx)(q,{handleCancel:function(){A(!1),d("")},handleDone:function(){""!==X?(A(!1),d(""),$()):d("All fields must be completed")},changeText:Y,value:X}):null]})]})]})},Y=n(110),Z=Object(a.default)();t.default=function(){return Object(O.jsx)(l.default,{children:Object(O.jsxs)(Z.Navigator,{initialRouteName:"Login",screenOptions:{headerShown:!1},children:[Object(O.jsx)(Z.Screen,{name:"Login",component:V.default}),Object(O.jsx)(Z.Screen,{name:"Signup",component:E}),Object(O.jsx)(Z.Screen,{name:"Verify",component:Y.default}),Object(O.jsx)(Z.Screen,{name:"Channels",component:X}),Object(O.jsx)(Z.Screen,{name:"Chat",component:M})]})})}},136:function(e,t,n){e.exports=n(177)}},[[136,1,2]]]);
//# sourceMappingURL=app.2e887884.chunk.js.map