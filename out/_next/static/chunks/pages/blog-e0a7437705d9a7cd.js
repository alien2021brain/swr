(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{9572:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var a=r(n(4938)),i=n(5893),s=(0,a.default)((0,i.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.Z=s},6215:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var a=r(n(4938)),i=n(5893),s=(0,a.default)((0,i.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.Z=s},7286:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(8609)}])},8609:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return A},default:function(){return H}});var r=n(5893),a=n(7294),i=n(8492),s=n(6675),o=n(7357),d=n(8263),l=n(2623),c=n(363),u=n(9397),m=n(3972),h=n(9008),f=n.n(h),p=n(9572),y=n(6720),x=n(5582),g=n(6215),b=n(7952),w=n(6708),j=n(4745),v=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,M=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,N=/[^-+\dA-Z]/g,D={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},T={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return String(e).padStart(t,"0")},_=function(e){var t=e.y,n=e.m,r=e.d,a=e._,i=e.dayName,s=e.short,o=void 0!==s&&s,d=new Date,l=new Date;l.setDate(l[a+"Date"]()-1);var c=new Date;return(c.setDate(c[a+"Date"]()+1),d[a+"FullYear"]()===t&&d[a+"Month"]()===n&&d[a+"Date"]()===r)?o?"Tdy":"Today":l[a+"FullYear"]()===t&&l[a+"Month"]()===n&&l[a+"Date"]()===r?o?"Ysd":"Yesterday":c[a+"FullYear"]()===t&&c[a+"Month"]()===n&&c[a+"Date"]()===r?o?"Tmw":"Tomorrow":i},S=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=t.getTimezoneOffset()-n.getTimezoneOffset();return t.setHours(t.getHours()-r),1+Math.floor((t-n)/(864e5*7))},C=function(e){var t=e.getDay();return 0===t&&(t=7),t},A=!0;function H(e){let{data:t}=e;console.log("data0000__",t);let[n,h]=(0,a.useState)(1),A=(n-1)*6,[H,P]=(0,a.useState)("All Category"),[k,F]=(0,a.useState)(t),B=Math.ceil(k.length/6),E=e=>{e<=B&&e>0&&(h(e),window.scrollTo(0,0))},W=e=>{if(P(e),h(1),"All Category"==e)F(t);else{let n=t.filter(t=>t._embedded["wp:term"][0][0].name===e);F(n)}};return(0,r.jsxs)("div",{children:[(0,r.jsx)(f(),{children:(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"})}),(0,r.jsx)("noscript",{children:(0,r.jsx)("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-MB38MVS",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),(0,r.jsx)(i.Z,{}),(0,r.jsx)("section",{className:" textAlignCenter blog upperCase mt-10 Poppins ",children:(0,r.jsxs)("div",{className:"container mx-auto bg-white p-5 Poppins rounded-lg shadow-sm max-w-6xl",children:[(0,r.jsx)("h1",{className:"w100 font-extrabold text-4xl text-blue-950 Poppins ",children:"All Posts"}),(0,r.jsxs)("div",{className:"category flex flex-wrap md:gap-2 gap-5 mt-5 mx-auto md:pl-14 ",children:[(0,r.jsx)("div",{className:"button poppin hover:bg-[#f50057]  md:h-fit w-fit p-2  poppin min-w-[150px] text-center border cursor-pointer transition-all ease-out  hover:text-white hover:border-white rounded-lg  ".concat("All Category"===H?"bg-[#f50057] text-white border-white":"text-gray-500 border-gray-500"),onClick:()=>W("All Category"),children:"All Category"}),["Web and APP Development","IT Solutions","Salesforce","App Development","CRM","SAP Emarys","Staff Augmentation","Business","Digital Marketing","Blockchain"].map((e,t)=>(0,r.jsx)("div",{className:"button poppin hover:bg-[#f50057] md:h-10 h-fit w-fit p-2  poppin min-w-[150px] cursor-pointer text-center border transition-all ease-out  hover:text-white hover:border-white rounded-lg ".concat(H===e?"bg-[#f50057] text-white border-white":"text-gray-500 border-gray-500"),onClick:()=>W(e),children:e}))]})]})}),(0,r.jsx)("section",{className:"sectionBox whyUsBox salesForceServices2 blog news ",children:(0,r.jsx)(o.Z,{sx:{flexGrow:1},children:k.slice(A,A+6).map((e,t)=>(0,r.jsxs)("div",{children:[(void 0===e._embedded["wp:featuredmedia"]&&e._embedded["wp:featuredmedia"],(0,r.jsx)("div",{})),(0,r.jsxs)(d.ZP,{container:!0,spacing:0,className:"mb30 items-center",children:[(0,r.jsx)(d.ZP,{item:!0,xs:6,className:"mb1",children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(c.Z,{children:(0,r.jsx)("div",{className:"flex items-center object-cover",children:(0,r.jsx)("a",{href:"/blog/".concat(e.slug,".html"),children:(0,r.jsx)("img",{className:"h-full rounded-xl",style:{width:"100%"},src:e._embedded["wp:featuredmedia"][0]?e._embedded["wp:featuredmedia"][0].source_url:"https://example.com/placeholder-image.jpg",alt:"infodrive blog post"})})})})})}),(0,r.jsxs)(d.ZP,{item:!0,xs:6,children:[(0,r.jsxs)("div",{className:"imgHeader flex flex-wrap grid-col-1 items-baseline justify-between md:pl-[30px] py-3 ",children:[(0,r.jsxs)("div",{className:"text-gray-400 flex gap-2",children:[(0,r.jsx)(b.Z,{src:"/broken-image.jpg",className:"h-6 w-6"}),(0,r.jsx)("p",{children:e._embedded.author[0].name})]}),(0,r.jsx)(u.Z,{href:"/blog/".concat(e.slug,".html"),className:"bgRed white poppin md:ml-[30px] normalCase min-h-7 w-auto text-center",children:e._embedded["wp:term"][0][0].name})]}),(0,r.jsx)(l.Z,{children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(m.Z,{gutterBottom:!0,variant:"h3",component:"h2",className:"w100 md:pl-[30px] ",children:(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:"/blog/".concat(e.slug,".html"),children:(0,r.jsx)("h3",{children:e.title.rendered.replace(/&#8217;/g,"'")})})})}),(0,r.jsx)(m.Z,{gutterBottom:!0,variant:"h5",component:"div",className:"w100 md:pl-[30px] text-start",children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:e.excerpt.rendered}})}),(0,r.jsx)("div",{className:"flex ",children:(0,r.jsxs)("h3",{className:"pr15 poppin md:ml-[30px] font-semibold",children:["Publish Date: ",function(e,t,n,r){if(1!=arguments.length||"string"!=typeof e||/\d/.test(e)||(t=e,e=void 0),(e=e||0===e?e:new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var a=(t=String(D[t]||t||D.default)).slice(0,4);("UTC:"===a||"GMT:"===a)&&(t=t.slice(4),n=!0,"GMT:"===a&&(r=!0));var i=function(){return n?"getUTC":"get"},s=function(){return e[i()+"Date"]()},o=function(){return e[i()+"Day"]()},d=function(){return e[i()+"Month"]()},l=function(){return e[i()+"FullYear"]()},c=function(){return e[i()+"Hours"]()},u=function(){return e[i()+"Minutes"]()},m=function(){return e[i()+"Seconds"]()},h=function(){return e[i()+"Milliseconds"]()},f=function(){return n?0:e.getTimezoneOffset()},p=function(){return S(e)},y={d:function(){return s()},dd:function(){return Z(s())},ddd:function(){return T.dayNames[o()]},DDD:function(){return _({y:l(),m:d(),d:s(),_:i(),dayName:T.dayNames[o()],short:!0})},dddd:function(){return T.dayNames[o()+7]},DDDD:function(){return _({y:l(),m:d(),d:s(),_:i(),dayName:T.dayNames[o()+7]})},m:function(){return d()+1},mm:function(){return Z(d()+1)},mmm:function(){return T.monthNames[d()]},mmmm:function(){return T.monthNames[d()+12]},yy:function(){return String(l()).slice(2)},yyyy:function(){return Z(l(),4)},h:function(){return c()%12||12},hh:function(){return Z(c()%12||12)},H:function(){return c()},HH:function(){return Z(c())},M:function(){return u()},MM:function(){return Z(u())},s:function(){return m()},ss:function(){return Z(m())},l:function(){return Z(h(),3)},L:function(){return Z(Math.floor(h()/10))},t:function(){return 12>c()?T.timeNames[0]:T.timeNames[1]},tt:function(){return 12>c()?T.timeNames[2]:T.timeNames[3]},T:function(){return 12>c()?T.timeNames[4]:T.timeNames[5]},TT:function(){return 12>c()?T.timeNames[6]:T.timeNames[7]},Z:function(){return r?"GMT":n?"UTC":(String(e).match(M)||[""]).pop().replace(N,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(f()>0?"-":"+")+Z(100*Math.floor(Math.abs(f())/60)+Math.abs(f())%60,4)},p:function(){return(f()>0?"-":"+")+Z(Math.floor(Math.abs(f())/60),2)+":"+Z(Math.floor(Math.abs(f())%60),2)},S:function(){return["th","st","nd","rd"][s()%10>3?0:(s()%100-s()%10!=10)*s()%10]},W:function(){return p()},WW:function(){return Z(p())},N:function(){return C(e)}};return t.replace(v,function(e){return e in y?y[e]():e.slice(1,e.length-1)})}(e.date,"fullDate")]})})]})})]})]})]}))})}),(0,r.jsxs)("section",{className:"pagination",children:[(0,r.jsx)(y.ZP,{}),(0,r.jsx)(x.Z,{maxWidth:"sm",component:"Box",sx:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},children:(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:20},children:[(0,r.jsx)(p.Z,{style:{cursor:"pointer"},onClick:()=>E(n-1)}),(0,r.jsx)(b.Z,{sx:{bgcolor:j.Z[500]},children:n}),(0,r.jsx)(g.Z,{onClick:()=>E(n+1),style:{cursor:"pointer"}})]})})]}),(0,r.jsxs)("section",{className:"sectionBox connectUs backDrop mb0",children:[(0,r.jsx)(m.Z,{gutterBottom:!0,variant:"h3",className:"white pb15 pt15 poppin",component:"div",children:"Transforming Your Website Into a Search Egine Powerhouse"}),(0,r.jsx)(u.Z,{href:"/contact-us.html",className:"bgRed white pl15 pr15 poppin upperCase",children:"Connect with Our Expert"})]}),(0,r.jsx)(w.Z,{}),(0,r.jsx)(s.Z,{})]})}}},function(e){e.O(0,[319,582,877,968,159,708,774,888,179],function(){return e(e.s=7286)}),_N_E=e.O()}]);