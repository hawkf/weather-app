(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{66:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(13),r=n.n(o),i=n(15),s=n(10),l=n(33),u=n(34),d=n(9),j="weather-app/setLocation",p="weather-app/setCoordinates",f="weather-app/setWeekWeathers",b="weather-app/setIsLocationCorrect",h="weather-app/setIsDataUpdated",m=function(e){return{type:j,payload:e}},O=function(e){return{type:p,payload:e}},x=function(e){return{type:f,payload:e}},v=function(e){return{type:b,payload:e}},_=function(e){return{type:h,payload:e}},y={location:"",coordinates:{lat:null,lng:null},weekWeathers:null,isLocationCorrect:!0,isDataUpdated:!1};var g=n(35),N=n.n(g),w=(n(66),n(20)),D=n(3),W="/",k="/week",C="19c1274fa4a283da3c684631c6063f69",L="weather",U="onecall",E=n(14);var M=n(1);var S=Object(s.b)((function(e){return{location:e.location}}),(function(e){return{setLocation:function(t){e(m(t))}}}))((function(e){var t=e.setLocation,n=e.location,c=Object(a.useState)(n),o=Object(E.a)(c,2),r=o[0],i=o[1],s=function(e,t){var n=Object(a.useState)(e),c=Object(E.a)(n,2),o=c[0],r=c[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){r(e)}),t);return function(){clearTimeout(n)}}),[e,t]),o}(r,500);return Object(a.useEffect)((function(){n!==s&&t(s)}),[s,t,n]),Object(M.jsx)("form",{onSubmit:function(e){e.preventDefault()},className:"location-form",children:Object(M.jsx)("input",{value:r,onChange:function(e){return function(e){e.preventDefault(),i(e.currentTarget.value)}(e)},className:"location-form__input",type:"text",placeholder:"Location name"})})}));function T(e){var t=e.temperature,n=e.description,a=e.date;return Object(M.jsxs)("li",{className:"result-information__item",children:[Object(M.jsx)("p",{className:"result-information__date",children:a}),Object(M.jsx)("p",{className:"result-information__temperature",children:t}),Object(M.jsx)("p",{className:"result-information__description",children:n})]})}var Y=n(36),I=n.n(Y),A=n(37),J=n.n(A),q=function(e){return function(t,n,a){a.get(L,{params:{q:e,appid:C}}).then((function(e){var n=e.data;t(O({lat:n.coord.lon,lon:n.coord.lon})),t(v(!0)),t(_(!1))})).catch((function(e){t(v(!1)),t(_(!0))}))}},B=function(e){var t=e.lat,n=e.lon;return function(e,a,c){c.get(U,{params:{lat:t,lon:n,exclude:"hourly,minutely",units:"metric",appid:C}}).then((function(t){var n=t.data;e(x(function(e){var t=I()(new Date),n=e.map((function(e,n){return{date:t.add(n,"day").format("D MMMM YYYY"),temperature:Math.round(e.temp.day),description:e.weather[0].main}}));return n.pop(),n}(n.daily.slice()))),e(_(!0))})).catch((function(){return J()("An error occurred while loading data")}))}};function P(e){var t=e.isDay,n=Object(D.f)();return Object(M.jsxs)("div",{className:"change-buttons",children:[Object(M.jsx)("button",{className:"change-buttons__item ".concat(t?"change-buttons__item--active":""),onClick:function(){n.push(W)},children:"Day"}),Object(M.jsx)("button",{className:"change-buttons__item ".concat(t?"":"change-buttons__item--active"),onClick:function(){n.push(k)},children:"Week"})]})}var R=Object(s.b)((function(e){return{locationName:e.location,coordinates:e.coordinates,weekWeathers:e.weekWeathers,isDataUpdated:e.isDataUpdated,isLocationCorrect:e.isLocationCorrect}}),(function(e){return{getCoordinates:function(t){e(O({lat:null,lon:null})),e(x(null)),e(q(t))},setWeekWeather:function(t){e(B(t))}}}))((function(e){var t=e.getCoordinates,n=e.setWeekWeather,c=e.locationName,o=e.coordinates,r=e.weekWeathers,i=e.isDataUpdated,s=e.isLocationCorrect;return Object(a.useEffect)((function(){""===c||i||t(c)}),[t,c,i]),Object(a.useEffect)((function(){null===o.lat||null===o.lon||i||n(o)}),[n,o,i]),null==r?Object(M.jsxs)("main",{className:"main-page",children:[Object(M.jsx)(P,{isDay:!0}),Object(M.jsx)(S,{}),Object(M.jsx)("section",{className:"result-information",children:!s&&Object(M.jsx)("p",{children:"Location not found"})})]}):Object(M.jsxs)("main",{className:"main-page",children:[Object(M.jsx)(P,{isDay:!0}),Object(M.jsx)(S,{}),Object(M.jsxs)("section",{className:"result-information",children:[Object(M.jsx)("h2",{className:"result-information__title",children:c}),Object(M.jsx)("ul",{className:"result-information__list",children:Object(M.jsx)(T,{temperature:r[0].temperature,description:r[0].description,date:r[0].date})})]})]})}));var z=Object(s.b)((function(e){return{locationName:e.location,coordinates:e.coordinates,weekWeathers:e.weekWeathers,isDataUpdated:e.isDataUpdated,isLocationCorrect:e.isLocationCorrect}}),(function(e){return{getCoordinates:function(t){e(O({lat:null,lon:null})),e(x(null)),e(q(t))},setWeekWeather:function(t){e(B(t))}}}))((function(e){var t=e.getCoordinates,n=e.setWeekWeather,c=e.locationName,o=e.coordinates,r=e.weekWeathers,i=e.isDataUpdated,s=e.isLocationCorrect;return Object(a.useEffect)((function(){i||""===c||t(c)}),[t,c,i]),Object(a.useEffect)((function(){null===o.lat||null===o.lon||i||n(o)}),[n,o,i]),null==r?Object(M.jsxs)("main",{className:"main-page",children:[Object(M.jsx)(P,{isDay:!1}),Object(M.jsx)(S,{}),Object(M.jsx)("section",{className:"result-information",children:!s&&Object(M.jsx)("p",{children:"Location not found"})})]}):Object(M.jsxs)("main",{className:"main-page",children:[Object(M.jsx)(P,{isDay:!1}),Object(M.jsx)(S,{}),Object(M.jsxs)("section",{className:"result-information",children:[Object(M.jsx)("h2",{className:"result-information__title",children:c}),Object(M.jsx)("ul",{className:"result-information__list",children:r.map((function(e,t){return Object(M.jsx)(T,{temperature:e.temperature,description:e.description,date:e.date},t)}))})]})]})}));function F(){return Object(M.jsxs)("main",{className:"main-page",children:[Object(M.jsx)("h1",{className:"page-not-found__title",children:"404"}),Object(M.jsx)("p",{className:"page-not-found__text",children:"Page not found"})]})}var G=function(){return Object(M.jsx)(w.a,{children:Object(M.jsxs)(D.c,{children:[Object(M.jsx)(D.a,{exact:!0,path:W,children:Object(M.jsx)(R,{})}),Object(M.jsx)(D.a,{exact:!0,path:k,children:Object(M.jsx)(z,{})}),Object(M.jsx)(D.a,{children:Object(M.jsx)(F,{})})]})})},H=N.a.create({baseURL:"https://api.openweathermap.org/data/2.5",timeout:5e3}),K=Object(i.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(d.a)(Object(d.a)({},e),{},{location:t.payload,isDataUpdated:!1});case p:return Object(d.a)(Object(d.a)({},e),{},{coordinates:t.payload});case f:return Object(d.a)(Object(d.a)({},e),{},{weekWeathers:t.payload});case b:return Object(d.a)(Object(d.a)({},e),{},{isLocationCorrect:t.payload});default:return e}}),Object(l.composeWithDevTools)(Object(i.applyMiddleware)(u.a.withExtraArgument(H))));r.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(s.a,{store:K,children:Object(M.jsx)(G,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.1705e1ee.chunk.js.map