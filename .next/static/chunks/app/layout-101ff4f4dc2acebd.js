(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8710:function(e,t,n){Promise.resolve().then(n.t.bind(n,7800,23)),Promise.resolve().then(n.t.bind(n,2544,23)),Promise.resolve().then(n.t.bind(n,3054,23)),Promise.resolve().then(n.t.bind(n,6711,23)),Promise.resolve().then(n.t.bind(n,9611,23)),Promise.resolve().then(n.bind(n,8998))},8998:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return o}});var a=n(7437);n(2265);var c=n(9512);function o(e){let{children:t,...n}=e;return(0,a.jsx)(c.f,{...n,children:t})}},9611:function(){},6711:function(){},3054:function(){},2544:function(e){e.exports={style:{fontFamily:"'__geistMono_c3aa02', '__geistMono_Fallback_c3aa02'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},7800:function(e){e.exports={style:{fontFamily:"'__geistSans_1e4310', '__geistSans_Fallback_1e4310'"},className:"__className_1e4310",variable:"__variable_1e4310"}},9512:function(e,t,n){"use strict";n.d(t,{F:function(){return i},f:function(){return m}});var a=n(2265),c=["light","dark"],o="(prefers-color-scheme: dark)",r="undefined"==typeof window,s=a.createContext(void 0),l={setTheme:e=>{},themes:[]},i=()=>{var e;return null!=(e=a.useContext(s))?e:l},m=e=>a.useContext(s)?e.children:a.createElement(u,{...e}),d=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:l=!0,storageKey:i="theme",themes:m=d,defaultTheme:u=r?"system":"light",attribute:b="data-theme",value:_,children:g,nonce:S}=e,[p,k]=a.useState(()=>f(i,u)),[w,C]=a.useState(()=>f(i)),T=_?Object.values(_):m,E=a.useCallback(e=>{let t=e;if(!t)return;"system"===e&&r&&(t=y());let a=_?_[t]:t,o=n?v():null,s=document.documentElement;if("class"===b?(s.classList.remove(...T),a&&s.classList.add(a)):a?s.setAttribute(b,a):s.removeAttribute(b),l){let e=c.includes(u)?u:null,n=c.includes(t)?t:e;s.style.colorScheme=n}null==o||o()},[]),x=a.useCallback(e=>{let t="function"==typeof e?e(e):e;k(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),N=a.useCallback(e=>{C(y(e)),"system"===p&&r&&!t&&E("system")},[p,t]);a.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),a.useEffect(()=>{let e=e=>{e.key===i&&x(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[x]),a.useEffect(()=>{E(null!=t?t:p)},[t,p]);let L=a.useMemo(()=>({theme:p,setTheme:x,forcedTheme:t,resolvedTheme:"system"===p?w:p,themes:r?[...m,"system"]:m,systemTheme:r?w:void 0}),[p,x,t,w,r,m]);return a.createElement(s.Provider,{value:L},a.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:r,enableColorScheme:l,storageKey:i,themes:m,defaultTheme:u,attribute:b,value:_,children:g,attrs:T,nonce:S}),g)},h=a.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:r,enableSystem:s,enableColorScheme:l,defaultTheme:i,value:m,attrs:d,nonce:u}=e,h="system"===i,f="class"===r?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(r,"',s='setAttribute';"),v=l?(c.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],a=m?m[e]:e,o=t?e+"|| ''":"'".concat(a,"'"),s="";return l&&n&&!t&&c.includes(e)&&(s+="d.style.colorScheme = '".concat(e,"';")),"class"===r?t||a?s+="c.add(".concat(o,")"):s+="null":a&&(s+="d[s](n,".concat(o,")")),s},b=t?"!function(){".concat(f).concat(y(t),"}()"):s?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(o,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(y("dark"),"}else{").concat(y("light"),"}}else if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(y(m?"x[e]":"e",!0),"}").concat(h?"":"else{"+y(i,!1,!1)+"}").concat(v,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(y(m?"x[e]":"e",!0),"}else{").concat(y(i,!1,!1),";}").concat(v,"}catch(t){}}();");return a.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:b}})}),f=(e,t)=>{let n;if(!r){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}},function(e){e.O(0,[56,971,23,744],function(){return e(e.s=8710)}),_N_E=e.O()}]);