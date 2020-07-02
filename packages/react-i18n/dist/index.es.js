import e,{createContext as t,useContext as n,useState as r,useEffect as a,useCallback as o,forwardRef as l}from"react";const s=(e,t)=>{const n=[];let r;const a=RegExp(e,"g");for(;null!==(r=a.exec(t));)n.push({offsets:[r.index,r.index+r[0].length],array:r});return n},c=(e,t)=>e.match.offsets[0]-t.match.offsets[0],u=(e,t)=>{if(!t.length)return[e];const n=[],r=[];let a=e;if(t.forEach(e=>{s(e.pattern,a).forEach(t=>{const n=Array.from({length:t.array[0].length}).map(()=>" ").join("");a=a.replace(t.array[0],n),r.push({match:t,rule:e})})}),a===e)return[e];a=e;let o=0;return r.sort(c).forEach((e,t)=>{const[l,s]=e.match.offsets,c=a.substring(o,l);if(c&&n.push(c),n.push(e.rule.onMatch(e.match.array)),o=s,t+1===r.length){const e=a.substring(o);e&&n.push(e)}}),n},h={pattern:/(\*\*|__)(.*?)\1/,onMatch:t=>e.createElement("strong",null,t[2])},i={pattern:/(\*|_)(.*?)\1/,onMatch:t=>e.createElement("em",null,t[2])},m={pattern:/~~(.*?)~~/,onMatch:t=>e.createElement("del",null,t[1])},f={pattern:/`(.*?)`/,onMatch:t=>e.createElement("code",null,t[1])},g={pattern:/\[([^\[]+)\]\(([^\)]+)\)/,onMatch:t=>e.createElement("a",{href:t[2]},t[1])},d=[h,i,f,g,m],p=t(void 0),b=()=>n(p),w=t=>{const{bundles:n,children:l,markdownRules:s,lang:c}=t,u=b();let h,i,m={},f=[];u&&(m=u.bundle,h=u.lang,i=u.resolveLanguageBundle,f=u.markdownRules);const g=(s||[]).filter(e=>!f.includes(e)).concat(f),[d,w]=r(),E=c||h;if(!E)throw Error("No `lang` prop specified");a(()=>{w(void 0)},[t.lang]);const y=o(e=>Promise.all([new Promise(t=>{m&&e===h?t(m):i?i(E).then(t):t({})}),new Promise(t=>{n&&n[e]?n[e]().then(t):t({})})]).then(e=>{let t={};return e.forEach(e=>{t=Object.assign(Object.assign({},t),e)}),t}),[E,h,m,n,i]);return a(()=>{d||y(E).then(w)},[d,E,m,n,y]),d?e.createElement(p.Provider,{value:{resolveLanguageBundle:y,lang:E,bundle:d,markdownRules:g}},l):null};function E(t,n){return l((r,a)=>{const{bundle:o,markdownRules:l}=b();let s=r;if(o&&r[n]){const e=r[n];let t="";if(e.constructor===Array){const[n,...r]=e;o[n]&&(t=o[n](...r))}else t=o[e],t||console.warn("No i18n value found for key: "+e);t&&(t=u(t,l),s=Object.assign(Object.assign({},r),{children:t}))}return e.createElement(t,Object.assign({},s,{ref:a}))})}w.defaultProps={markdownRules:d};const y=(e,t,n)=>new Intl.DateTimeFormat(n,t).format(e),j=(e,t,n={style:"currency"},r)=>new Intl.NumberFormat(r,Object.assign(Object.assign({},n),{currency:t})).format(e),v=(e,t,n,r)=>{const a=new Intl.PluralRules(r).select(e);switch(a){case"one":return`${e} ${t}`;case"other":return`${e} ${n}`}throw Error(`Unable to match ${a}.`)};export{h as BoldRule,d as DefaultMarkdownRules,w as I18NProvider,f as InlineCodeRule,i as ItalicRule,g as LinkRule,m as StrikethroughRule,s as findRegex,j as formatCurrency,y as formatDate,v as pluralize,u as transform,b as useI18N,E as withI18N};