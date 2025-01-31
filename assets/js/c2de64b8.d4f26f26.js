"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1185],{74e3:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"type":"api","id":"create-flow","title":"Create Flow","description":"","slug":"/create-flow","frontMatter":{},"api":{"tags":["Flows"],"operationId":"create_flow_api_v1_flows__post","security":[{"OAuth2PasswordBearer":[]},{"API key query":[]},{"API key header":[]}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"name":{"type":"string","title":"Name"},"description":{"anyOf":[{"type":"string"}],"title":"Description","nullable":true},"icon":{"anyOf":[{"type":"string"}],"title":"Icon","nullable":true},"icon_bg_color":{"anyOf":[{"type":"string"}],"title":"Icon Bg Color","nullable":true},"gradient":{"anyOf":[{"type":"string"}],"title":"Gradient","nullable":true},"data":{"anyOf":[{"type":"object"}],"title":"Data","nullable":true},"is_component":{"anyOf":[{"type":"boolean"}],"title":"Is Component","default":false,"nullable":true},"updated_at":{"anyOf":[{"type":"string","format":"date-time"}],"title":"Updated At","nullable":true},"webhook":{"anyOf":[{"type":"boolean"}],"title":"Webhook","description":"Can be used on the webhook endpoint","default":false,"nullable":true},"endpoint_name":{"anyOf":[{"type":"string"}],"title":"Endpoint Name","nullable":true},"tags":{"anyOf":[{"items":{"type":"string"},"type":"array"}],"title":"Tags","nullable":true},"locked":{"anyOf":[{"type":"boolean"}],"title":"Locked","default":false,"nullable":true},"user_id":{"anyOf":[{"type":"string","format":"uuid"}],"title":"User Id","nullable":true},"folder_id":{"anyOf":[{"type":"string","format":"uuid"}],"title":"Folder Id","nullable":true}},"type":"object","required":["name"],"title":"FlowCreate"}}}},"responses":{"201":{"description":"Successful Response","content":{"application/json":{"schema":{"properties":{"name":{"type":"string","title":"Name"},"description":{"anyOf":[{"type":"string"}],"title":"Description","nullable":true},"icon":{"anyOf":[{"type":"string"}],"title":"Icon","nullable":true},"icon_bg_color":{"anyOf":[{"type":"string"}],"title":"Icon Bg Color","nullable":true},"gradient":{"anyOf":[{"type":"string"}],"title":"Gradient","nullable":true},"data":{"anyOf":[{"type":"object"}],"title":"Data","nullable":true},"is_component":{"anyOf":[{"type":"boolean"}],"title":"Is Component","default":false,"nullable":true},"updated_at":{"anyOf":[{"type":"string","format":"date-time"}],"title":"Updated At","nullable":true},"webhook":{"anyOf":[{"type":"boolean"}],"title":"Webhook","description":"Can be used on the webhook endpoint","default":false,"nullable":true},"endpoint_name":{"anyOf":[{"type":"string"}],"title":"Endpoint Name","nullable":true},"tags":{"anyOf":[{"items":{"type":"string"},"type":"array"}],"title":"Tags","nullable":true},"locked":{"anyOf":[{"type":"boolean"}],"title":"Locked","default":false,"nullable":true},"id":{"type":"string","format":"uuid","title":"Id"},"user_id":{"anyOf":[{"type":"string","format":"uuid"}],"title":"User Id","nullable":true},"folder_id":{"anyOf":[{"type":"string","format":"uuid"}],"title":"Folder Id","nullable":true}},"type":"object","required":["name","id","user_id","folder_id"],"title":"FlowRead"}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"}}}}},"description":"Create Flow","method":"post","path":"/api/v1/flows/","parameters":[],"securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"jsonRequestBodyExample":{"name":"string"},"info":{"title":"Langflow","version":"1.1.1"},"postman":{"name":"Create Flow","description":{"type":"text/plain"},"url":{"path":["api","v1","flows",""],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"},{"key":"Accept","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n  \\"name\\": \\"<string>\\",\\n  \\"description\\": \\"<string>\\",\\n  \\"icon\\": \\"<string>\\",\\n  \\"icon_bg_color\\": \\"<string>\\",\\n  \\"gradient\\": \\"<string>\\",\\n  \\"data\\": \\"<object>\\",\\n  \\"is_component\\": \\"<boolean>\\",\\n  \\"updated_at\\": \\"<dateTime>\\",\\n  \\"webhook\\": \\"<boolean>\\",\\n  \\"endpoint_name\\": \\"<string>\\",\\n  \\"tags\\": [\\n    \\"<string>\\",\\n    \\"<string>\\"\\n  ],\\n  \\"locked\\": \\"<boolean>\\",\\n  \\"user_id\\": \\"<uuid>\\",\\n  \\"folder_id\\": \\"<uuid>\\"\\n}","options":{"raw":{"language":"json"}}},"auth":{"type":"oauth2","oauth2":[{"type":"any","value":"api/v1/login","key":"accessTokenUrl"},{"type":"any","value":"password_credentials","key":"grant_type"}]}}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/create-flow","previous":{"title":"Like Component","permalink":"/api/like-component"},"next":{"title":"Read Flows","permalink":"/api/read-flows"}}');var s=n(74848),l=n(28453);const r={},o="Create Flow",d=[];function a(e){const t={h1:"h1",header:"header",p:"p",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"create-flow",children:"Create Flow"})}),"\n",(0,s.jsx)(t.p,{children:"Create Flow"}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Request Body "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,s.jsx)("div",{})]})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"description"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Description"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"icon"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Icon"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"icon_bg_color"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Icon Bg Color"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"gradient"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Gradient"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"data"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Data"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"is_component"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Is Component"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"updated_at"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Updated At"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"webhook"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Webhook"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(t.p,{children:"Can be used on the webhook endpoint"})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"endpoint_name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Endpoint Name"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"tags"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Tags"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"locked"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Locked"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"user_id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" User Id"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"folder_id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Folder Id"})]})})]})]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"201"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Successful Response"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Name"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"description"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Description"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"icon"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Icon"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"icon_bg_color"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Icon Bg Color"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"gradient"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Gradient"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"data"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Data"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"is_component"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Is Component"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"updated_at"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Updated At"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"webhook"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Webhook"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(t.p,{children:"Can be used on the webhook endpoint"})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"endpoint_name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Endpoint Name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"tags"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Tags"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"locked"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Locked"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"user_id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" User Id"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"folder_id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Folder Id"})]})})]})]})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"422"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Validation Error"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"detail"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"loc"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"msg"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"type"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);