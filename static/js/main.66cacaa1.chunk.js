(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n,r=a(2),c=a(0),i=a.n(c),s=a(9),o=a.n(s),l=a(26),d=a(44),u=a(12),j=a(21),m=a(17),h=a(34),b=a(33),f=a(152),p=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},g=a(14),y=a(18),O=a(74),x=a.n(O),C=a(141),v=a(143),w=a(145),N=a(154),E=a(146),I=a(147),_=a(148),T=a(149),S=i.a.createContext(),D=S.Provider,M=S.Consumer,k=function(){return function(e){return function(t){return Object(r.jsx)(M,{children:function(a){return Object(r.jsx)(e,Object(g.a)(Object(g.a)({},t),{},{weatherService:a}))}})}}},F=function(e,t){return function(){t({type:"FETCH_CITY_REQUESTED"}),e.getCityData().then((function(e){return t({type:"FETCH_CITY_LOADED",payload:e})})).catch((function(e){return t({type:"FETCH_CITY_FAILURE",payload:e})}))}},W=function(e,t){return function(){t({type:"FETCH_MY_CITY_WEATHER_REQUESTED"}),e.getMyCityWeather().then((function(e){return t({type:"FETCH_MY_CITY_WEATHER_LOADED",payload:e})}))}},A=Object(C.a)({root:{maxWidth:250,background:"linear-gradient(0deg, rgb(255 255 255 / 0%) 0%, #f7f7f7 50%, rgb(255 255 255 / 0%) 100%)",margin:"auto",boxShadow:"none"},minMax:{width:"60%"},bg:{fontFamily:"'Merriweather', serif"},buttons:{paddingTop:0,justifyContent:"space-between"},fontTemp:Object(y.a)({fontSize:60},"@media (max-width:960px)",{fontSize:45}),fontCity:(n={fontSize:24},Object(y.a)(n,"@media (max-width:960px)",{fontSize:20}),Object(y.a)(n,"fontFamily","'Roboto Slab', serif"),n)}),Y=p(k(),Object(l.b)((function(e){return{myCityWeather:e.myCityWeather,loading:e.loading}}),(function(e,t){var a=t.weatherService;return{fetchMyCityWeather:W(a,e)}})))((function(e){var t=e.cityData,a=e.deleteCityItem,n=e.fetchMyCityWeather,c=t.coord,i=t.name,s=t.t,o=t.feels_like,l=t.temp_min,u=t.temp_max,j=t.icon,m=A();return Object(r.jsxs)(v.a,{className:m.root,children:[Object(r.jsxs)(w.a,{children:[Object(r.jsxs)(N.a,{children:[Object(r.jsxs)(N.a,{display:"flex",justifyContent:"space-evenly",alignItems:"center",children:[Object(r.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(j,".png"),alt:"Icon current weather"}),Object(r.jsxs)(E.a,{className:m.fontTemp,variant:"h2",children:[s,"\u2103"]})]}),Object(r.jsxs)(E.a,{className:m.bg,variant:"subtitle2",children:["Feels Like:  ",o,"\u2103"]})]}),Object(r.jsx)(E.a,{className:m.fontCity,variant:"h5",component:"h1",children:i}),Object(r.jsxs)(N.a,{display:"flex",justifyContent:"space-between",className:m.minMax,children:[Object(r.jsxs)(E.a,{variant:"body2",component:"p",className:m.bg,children:["min: ",l,"\u2103"]}),Object(r.jsxs)(E.a,{variant:"body2",component:"p",className:m.bg,children:["max: ",u,"\u2103"]})]})]}),Object(r.jsxs)(I.a,{className:m.buttons,children:[Object(r.jsx)(d.b,{to:"/cart",onClick:function(){var e=Object(g.a)(Object(g.a)({},c),{},{name:i});sessionStorage.setItem("myCity",JSON.stringify(e)),n()},children:Object(r.jsx)(_.a,{size:"small",children:"Detail inf..."})}),Object(r.jsx)(T.a,{onClick:function(){var e=JSON.parse(localStorage.getItem("citisData")).filter((function(e){return e.id!==a().payload}));localStorage.setItem("citisData",JSON.stringify(e))},"aria-label":"delete",size:"small",children:Object(r.jsx)(x.a,{fontSize:"small"})})]})]})})),H=a(151),R=a(77),z=a(150),J=Object(R.a)({palette:{primary:{main:"#afafaf"}}}),L=Object(C.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),P=function(){var e=L();return Object(r.jsx)(z.a,{theme:J,children:Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(H.a,{color:"primary"})})})},U=a(42),Q=a.n(U),B=a(19),q=a(55),X=a(153),G=a(5),K=a(75),V=a.n(K),Z=Object(R.a)({palette:{primary:{main:"#afafaf"}}}),$=localStorage.getItem("citisData")?JSON.parse(localStorage.getItem("citisData")):[],ee=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({address:e})},n.handleSelect=function(e){n.setState({address:e}),setTimeout((function(){n.onClick()}),100)},n.onClick=Object(q.a)(Q.a.mark((function e(){var t,a,r,c,i,s,o,l,d,u,j,m,h,b,f,p,g,y;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.state.address,a=t.split(",")[0],r="https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat("9db1d496a91bad902ebeff185ff91bdf","&units=metric"),e.next=6,fetch(r);case 6:return c=e.sent,e.next=9,c.json();case 9:return i=e.sent,e.next=12,i;case 12:return s=e.sent,o=s.coord,l=s.id,d=s.name,u=s.main,j=u.feels_like,m=u.temp,h=u.temp_max,b=u.temp_min,f=Object(B.a)(s.weather,1),p=f[0],e.next=25,{coord:o,id:l,name:d,t:Math.trunc(m),feels_like:Math.trunc(j),temp_min:Math.trunc(b),temp_max:Math.trunc(h),icon:p.icon};case 25:return g=e.sent,n.setState({address:""}),e.next=29,$.push({id:g.id,name:g.name}),localStorage.setItem("citisData",JSON.stringify($)),n.props.onAddedNewCiy(g);case 29:return e.abrupt("return",e.sent);case 32:e.prev=32,e.t0=e.catch(0),y=new Error("\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0433\u043e\u0440\u043e\u0434\u0443! \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432\u0432\u043e\u0434\u0430."),alert(y.message);case 36:case"end":return e.stop()}}),e,null,[[0,32]])}))),n.state={address:""},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return Object(r.jsx)(V.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect,children:function(a){var n=a.getInputProps,c=a.suggestions,i=a.getSuggestionItemProps;return Object(r.jsx)(z.a,{theme:Z,children:Object(r.jsxs)("form",{className:t.form,children:[Object(r.jsxs)(N.a,{className:t.box,children:[Object(r.jsx)(X.a,Object(g.a)(Object(g.a)({},n()),{},{label:"You City",color:"primary",className:t.input})),Object(r.jsx)("div",{children:c.map((function(e){var a=e.active?"suggestion-item--active":"suggestion-item",n=e.active?{cursor:"pointer",color:"#000000",fontSize:17,transition:"0.2s"}:{cursor:"pointer",color:"#7f7f7f",transition:"0.2s"};return Object(r.jsx)("div",Object(g.a)(Object(g.a)({},i(e,{className:a,style:n})),{},{children:Object(r.jsx)("span",{className:t.span,children:e.description})}),e.placeId)}))})]}),Object(r.jsx)(_.a,{className:t.button,onClick:e.onClick,size:"small",children:"Add City"})]})})}})}}]),a}(c.Component),te=p(Object(G.a)({form:{display:"flex",justifyContent:"center"},box:{width:"70%"},input:{width:"100%",marginBottom:5,fontFamily:"'Roboto Slab', serif"},button:{height:48},span:{padding:6,fontFamily:"'Roboto Slab', serif"}}),Object(l.b)((function(e){return{city:e.city}}),(function(e){return{onAddedNewCiy:function(t){return e(function(e){return{type:"ITEM_ADDED_TO_CITY",payload:e}}(t))}}})))(ee),ae=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:" Error "}),Object(r.jsx)(te,{})]})},ne=function(e){var t=e.city,a=e.deleteCityItem;return Object(r.jsxs)(f.a,{container:!0,spacing:2,justify:"center",children:[t.map((function(e){return Object(r.jsx)(f.a,{item:!0,xs:6,sm:3,lg:2,children:Object(r.jsx)(Y,{cityData:e,deleteCityItem:function(){return a(e.id)}})},e.id)})),Object(r.jsx)(f.a,{style:{padding:20},item:!0,xs:12,children:Object(r.jsx)(te,{})})]})},re=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchCitis()}},{key:"render",value:function(){var e=this.props,t=e.city,a=e.loading,n=e.error,c=e.deleteCityItem;return a?Object(r.jsx)(P,{}):n?Object(r.jsx)(ae,{}):Object(r.jsx)(ne,{city:t,deleteCityItem:c})}}]),a}(c.Component),ce=p(k(),Object(l.b)((function(e){return{city:e.city,loading:e.loading,error:e.error}}),(function(e,t){var a=t.weatherService;return{fetchCitis:F(a,e),deleteCityItem:function(t){return e({type:"ITEM_CITY_DELETE",payload:t})}}})))(re),ie=function(){return Object(r.jsx)(ce,{})},se=a.p+"static/media/myHumidity.901294ef.svg",oe=a.p+"static/media/myPressure.1b227373.svg",le=a.p+"static/media/myWind.dcd40907.svg",de=Object(C.a)({box:{padding:".5rem 2rem",background:"linear-gradient(0deg, rgb(255 255 255 / 0%) 0%, #f7f7f7 50%, rgb(255 255 255 / 0%) 100%)"},icon:{width:25},hr:{height:100},fontTypogr:{fontFamily:"'Merriweather', serif"}}),ue=function(e){var t=e.current,a=de(),n=t.feels_like,c=t.humidity,i=t.pressure,s=t.temp,o=Object(B.a)(t.weather,1)[0],l=t.wind_speed;return Object(r.jsxs)(N.a,{className:a.box,children:[Object(r.jsxs)(N.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(o.icon,".png"),alt:"".concat(o.description," weather")}),Object(r.jsxs)(E.a,{variant:"h2",children:[Math.trunc(s),"\u2103"]})]}),Object(r.jsxs)(N.a,{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"3rem",children:[Object(r.jsx)(E.a,{className:a.fontTypogr,variant:"subtitle2",children:o.main}),Object(r.jsxs)(E.a,{className:a.fontTypogr,variant:"subtitle2",children:["Feels Like:  ",Math.trunc(n),"\u2103"]})]}),Object(r.jsxs)(N.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(r.jsxs)(N.a,{textAlign:"center",children:[Object(r.jsx)("img",{src:le,alt:"Wind",className:a.icon}),Object(r.jsxs)(E.a,{className:a.fontTypogr,variant:"subtitle2",children:[l,"m/s"]})]}),Object(r.jsx)("hr",{className:a.hr}),Object(r.jsxs)(N.a,{textAlign:"center",children:[Object(r.jsx)("img",{src:oe,alt:"Pressure",className:a.icon}),Object(r.jsxs)(E.a,{className:a.fontTypogr,variant:"subtitle2",children:[i,"hPa"]})]}),Object(r.jsx)("hr",{className:a.hr}),Object(r.jsxs)(N.a,{textAlign:"center",children:[Object(r.jsx)("img",{src:se,alt:"Humidity",className:a.icon}),Object(r.jsxs)(E.a,{className:a.fontTypogr,variant:"subtitle2",children:[c,"%"]})]})]})]})},je=Object(C.a)({boxCont:{display:"flex",alignItems:"center",overflowX:"auto",height:170},box:{transition:"translate 3s ease",padding:".3rem",textAlign:"center",margin:".2rem",boxShadow:"0px 1px 6px 0px rgba(0,0,0,0.12)",background:"linear-gradient(0deg, rgb(255 255 255 / 0%) 0%, #f6f6f6 50%, rgb(255 255 255 / 0%) 100%)"},p:{transform:"scaleY(-1)",fontFamily:"'Merriweather', serif"}}),me=function(e){var t=e.hourly,a=je(),n=t.slice(0,24);return Object(r.jsx)(N.a,{className:a.boxCont,children:n.map((function(e,t){var n=new Date(1e3*e.dt),c=(n.getHours()<10?"0":"")+n.getHours(),i=n.getMinutes()+"0",s="".concat(c,":").concat(i);return Object(r.jsx)(N.a,{style:{transform:"scaleY(-1) translateY(".concat(e.temp,"px)")},className:a.box,children:Object(r.jsxs)(E.a,{variant:"subtitle2",className:a.p,children:[s,Object(r.jsx)("svg",{width:"100%",height:"1px",children:Object(r.jsx)("line",{stroke:"#ffffff","stroke-width":"100",x1:"5",y1:"10",x2:"5",y2:"0"})}),Math.trunc(e.temp),"\xb0"]})},t)}))})},he=Object(C.a)({card:{background:"linear-gradient(0deg, rgb(255 255 255 / 0%) 0%, #f6f6f6 50%, rgb(255 255 255 / 0%) 100%)",flexDirection:"column",display:"flex",alignItems:"center",padding:".3rem .2rem",width:120,borderRadius:1},gridContainer:{justifyContent:"center"},typogrNum1:{fontFamily:"'Merriweather', serif",fontSize:"1rem",fontWeight:"bold"},typogrNum2:{fontFamily:"'Merriweather', serif",fontSize:"1rem",fontWeight:"bold",color:"#5d5d5d"},typogrH2:{fontFamily:"'Roboto Slab', serif",textAlign:"center",fontSize:".9rem"},gridItem:{display:"flex",justifyContent:"center"}}),be=function(e){var t=e.daily,a=he();return Object(r.jsx)(f.a,{container:!0,spacing:1,className:a.gridContainer,children:t.map((function(e,t){var n=e.dt,c=e.temp,i=Object(B.a)(e.weather,1)[0],s=new Date(1e3*n),o=s.getMonth()+1,l=(s.getDate()<10?"0":"")+s.getDate(),d="".concat(l,".").concat(o);return Object(r.jsx)(f.a,{item:!0,xs:6,sm:3,lg:2,className:a.gridItem,children:Object(r.jsxs)(v.a,{className:a.card,children:[Object(r.jsx)(E.a,{variant:"subtitle2",component:"h3",className:a.typogrNum1,children:d}),Object(r.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(i.icon,".png"),alt:"".concat(i.description," weather")}),Object(r.jsx)(E.a,{variant:"caption",component:"h2",className:a.typogrH2,children:i.description}),Object(r.jsxs)(N.a,{display:"flex",children:[Object(r.jsxs)(E.a,{variant:"subtitle2",className:a.typogrNum1,children:[Math.trunc(c.morn),"\xb0/"]}),Object(r.jsxs)(E.a,{variant:"subtitle2",className:a.typogrNum2,children:[Math.trunc(c.night),"\xb0"]})]})]})},t)}))})},fe=a(76),pe=a.n(fe),ge=Object(C.a)({box:{padding:"1rem 2rem .5rem",fontFamily:"'Merriweather', serif"},h2:{fontFamily:"'Roboto Slab', serif"}}),ye=function(e){var t=e.dt,a=ge(),n=JSON.parse(sessionStorage.getItem("myCity")),c=new Date(1e3*t),i=c.getMonth()+1,s=(c.getDate()<10?"0":"")+c.getDate(),o="".concat(s,".").concat(i);return Object(r.jsxs)(N.a,{display:"flex",justifyContent:"space-between",alignItems:"end",className:a.box,children:[Object(r.jsxs)(N.a,{display:"flex",flexDirection:"column",alignItems:"end",children:[Object(r.jsx)(T.a,{"aria-label":"refresh",size:"small",children:Object(r.jsx)(pe.a,{})}),o]}),Object(r.jsx)(E.a,{variant:"h3",component:"h1",className:a.h2,children:n.name})]})},Oe=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchMyCityWeather()}},{key:"render",value:function(){var e=this.props,t=e.myCityWeather,a=e.loading,n=e.classes,c=t.daily,i=t.hourly,s=t.current;return a?Object(r.jsx)(P,{}):Object(r.jsxs)(f.a,{container:!0,className:n.gridContainer,children:[Object(r.jsxs)(f.a,{item:!0,xs:12,md:4,className:n.gridItem1,children:[Object(r.jsx)(ye,{dt:s.dt}),Object(r.jsx)("hr",{}),Object(r.jsx)(ue,{current:s})]}),Object(r.jsxs)(f.a,{item:!0,xs:12,md:8,className:n.gridItem2,children:[Object(r.jsx)(me,{hourly:i}),Object(r.jsx)("hr",{className:n.hr}),Object(r.jsx)(be,{daily:c})]})]})}}]),a}(c.Component),xe=p(Object(G.a)({gridContainer:{height:"100vh"},gridItem1:{padding:"2rem"},gridItem2:{padding:"5rem 2rem"},hr:{width:"100%",margin:"2rem 0 2rem 0"}}),k(),Object(l.b)((function(e){return{myCityWeather:e.myCityWeather,loading:e.loading}}),(function(e,t){var a=t.weatherService;return{fetchMyCityWeather:W(a,e)}})))(Oe),Ce=function(){return Object(r.jsx)(xe,{})},ve=function(){return Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/",component:ie,exact:!0}),Object(r.jsx)(u.a,{path:"/cart",component:Ce})]})},we=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(m.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)(ae,{}):this.props.children}}]),a}(c.Component),Ne=function(){function e(){Object(j.a)(this,e)}return Object(m.a)(e,[{key:"getMyCityWeather",value:function(){var e=Object(q.a)(Q.a.mark((function e(){var t,a,n,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(sessionStorage.getItem("myCity")),a="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t.lat,"&lon=").concat(t.lon,"&exclude=minutely,alerts&appid=9db1d496a91bad902ebeff185ff91bdf&units=metric"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getCityData",value:function(){var e=[];localStorage.getItem("citisData")&&JSON.parse(localStorage.getItem("citisData")).map((function(t){var a="https://api.openweathermap.org/data/2.5/weather?q=".concat(t.name,"&appid=").concat("9db1d496a91bad902ebeff185ff91bdf","&units=metric");fetch(a).then((function(e){if(200!==e.status)throw new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.");return e.json()})).then((function(t){var a=t.coord,n=t.id,r=t.name,c=t.main,i=c.feels_like,s=c.temp,o=c.temp_max,l=c.temp_min,d=Object(B.a)(t.weather,1)[0],u={coord:a,id:n,name:r,t:Math.trunc(s),feels_like:Math.trunc(i),temp_min:Math.trunc(l),temp_max:Math.trunc(o),icon:d.icon};e.push(u),console.log(t)})).catch((function(e){if("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."!==e.message)throw e;alert(e.message)}))}));return new Promise((function(t,a){setTimeout((function(){try{t(e)}catch(n){a(new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!!!"))}}),700)}))}}]),e}(),Ee=a(49),Ie=a(22),_e={city:[],loading:!0,error:null,myCityWeather:{}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CITY_REQUESTED":return{city:[],loading:!0,error:null,myCityWeather:{}};case"FETCH_CITY_LOADED":return{city:t.payload,loading:!1,error:null,myCityWeather:{}};case"FETCH_CITY_FAILURE":return{city:[],loading:!1,error:t.payload,myCityWeather:{}};case"ITEM_ADDED_TO_CITY":var a=t.payload;return Object(g.a)(Object(g.a)({},e),{},{city:[].concat(Object(Ie.a)(e.city),[a])});case"ITEM_CITY_DELETE":var n=t.payload,r=e.city.filter((function(e){return e.id!==n}));return Object(g.a)(Object(g.a)({},e),{},{city:r});case"FETCH_MY_CITY_WEATHER_REQUESTED":return Object(g.a)(Object(g.a)({},e),{},{loading:!0,myCityWeather:{}});case"FETCH_MY_CITY_WEATHER_LOADED":return Object(g.a)(Object(g.a)({},e),{},{loading:!1,myCityWeather:t.payload});default:return e}},Se=Object(Ee.b)(Te),De=(a(111),new Ne);o.a.render(Object(r.jsx)(l.a,{store:Se,children:Object(r.jsx)(we,{children:Object(r.jsx)(D,{value:De,children:Object(r.jsx)(d.a,{children:Object(r.jsx)(ve,{})})})})}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.66cacaa1.chunk.js.map