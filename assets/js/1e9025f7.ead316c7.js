"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1500],{45526:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>n,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"type":"api","id":"read-variables","title":"Read Variables","description":"","slug":"/read-variables","frontMatter":{},"api":{"tags":["Variables"],"description":"Read all variables.","operationId":"read_variables_api_v1_variables__get","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"items":{"properties":{"id":{"type":"string","format":"uuid","title":"Id"},"name":{"anyOf":[{"type":"string"}],"title":"Name","description":"Name of the variable","nullable":true},"type":{"anyOf":[{"type":"string"}],"title":"Type","description":"Type of the variable","nullable":true},"value":{"anyOf":[{"type":"string"}],"title":"Value","description":"Encrypted value of the variable","nullable":true},"default_fields":{"anyOf":[{"items":{"type":"string"},"type":"array"}],"title":"Default Fields","description":"Default fields for the variable","nullable":true}},"type":"object","required":["id"],"title":"VariableRead"},"type":"array","title":"Response Read Variables Api V1 Variables  Get"}}}}},"security":[{"OAuth2PasswordBearer":[]},{"API key query":[]},{"API key header":[]}],"method":"get","path":"/api/v1/variables/","parameters":[],"securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"info":{"title":"Langflow","version":"1.1.1"},"postman":{"name":"Read Variables","description":{"content":"Read all variables.","type":"text/plain"},"url":{"path":["api","v1","variables",""],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Accept","value":"application/json"}],"method":"GET","auth":{"type":"oauth2","oauth2":[{"type":"any","value":"api/v1/login","key":"accessTokenUrl"},{"type":"any","value":"password_credentials","key":"grant_type"}]}}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/read-variables","previous":{"title":"Logout","permalink":"/api/logout"},"next":{"title":"Create Variable","permalink":"/api/create-variable"}}');var l=a(74848),r=a(28453);const s={},n="Read Variables",d=[];function o(e){const t={h1:"h1",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"read-variables",children:"Read Variables"})}),"\n",(0,l.jsx)(t.p,{children:"Read all variables."}),"\n",(0,l.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)("code",{children:"200"})}),(0,l.jsx)("div",{children:(0,l.jsx)(t.p,{children:"Successful Response"})})]}),(0,l.jsx)("div",{children:(0,l.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("th",{style:{textAlign:"left"},children:[(0,l.jsx)("span",{children:"Schema "}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{})]})})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,l.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"id"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"name"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Name"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(t.p,{children:"Name of the variable"})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"type"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Type"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(t.p,{children:"Type of the variable"})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"value"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Value"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(t.p,{children:"Encrypted value of the variable"})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"default_fields"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Default Fields"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(t.p,{children:"Default fields for the variable"})})]})})]})})]})})})]})})]})})})]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>n});var i=a(96540);const l={},r=i.createContext(l);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);