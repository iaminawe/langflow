"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[8304],{1276:(e,t,n)=>{n.r(t),n.d(t,{CH:()=>d,assets:()=>l,chCodeConfig:()=>h,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"Configuration/configuration-security-best-practices","title":"Security best practices","description":"This guide outlines security best practices for deploying and managing Langflow.","source":"@site/docs/Configuration/configuration-security-best-practices.md","sourceDirName":"Configuration","slug":"/configuration-security-best-practices","permalink":"/configuration-security-best-practices","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Security best practices","slug":"/configuration-security-best-practices"},"sidebar":"docs","previous":{"title":"Environment variables","permalink":"/environment-variables"},"next":{"title":"Docker","permalink":"/Deployment/deployment-docker"}}');var o=n(74848),i=n(28453),c=n(24754);const s={title:"Security best practices",slug:"/configuration-security-best-practices"},a=void 0,l={},d={annotations:c.hk,Code:c.Cy},h={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},u=[{value:"Secret key protection",id:"secret-key-protection",level:2},{value:"API keys and credentials",id:"api-keys-and-credentials",level:2},{value:"Database file protection",id:"database-file-protection",level:2}];function p(e){const t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return d||f("CH",!1),d.Code||f("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,o.jsx)(t.p,{children:"This guide outlines security best practices for deploying and managing Langflow."}),"\n",(0,o.jsx)(t.h2,{id:"secret-key-protection",children:"Secret key protection"}),"\n",(0,o.jsx)(t.p,{children:"The secret key is critical for encrypting sensitive data in Langflow. Follow these guidelines:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Always use a custom secret key in production:"}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"LANGFLOW_SECRET_KEY",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"your-secure-secret-key",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Store the secret key securely:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Use environment variables or secure secret management systems."}),"\n",(0,o.jsx)(t.li,{children:"Never commit the secret key to version control."}),"\n",(0,o.jsx)(t.li,{children:"Regularly rotate the secret key."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Use the default secret key locations:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["macOS: ",(0,o.jsx)(t.code,{children:"~/Library/Caches/langflow/secret_key"})]}),"\n",(0,o.jsxs)(t.li,{children:["Linux: ",(0,o.jsx)(t.code,{children:"~/.cache/langflow/secret_key"})]}),"\n",(0,o.jsxs)(t.li,{children:["Windows: ",(0,o.jsx)(t.code,{children:"%USERPROFILE%\\AppData\\Local\\langflow\\secret_key"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"api-keys-and-credentials",children:"API keys and credentials"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Store API keys and credentials as encrypted global variables."}),"\n",(0,o.jsx)(t.li,{children:"Use the Credential type for sensitive information."}),"\n",(0,o.jsx)(t.li,{children:"Implement proper access controls for users who can view/edit credentials."}),"\n",(0,o.jsx)(t.li,{children:"Regularly audit and rotate API keys."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"database-file-protection",children:"Database file protection"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Store the database in a secure location:"}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"LANGFLOW_SAVE_DB_IN_CONFIG_DIR",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"true",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"LANGFLOW_CONFIG_DIR",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"/secure/path/to/config",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Use the default database locations:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["macOS/Linux: ",(0,o.jsx)(t.code,{children:"PYTHON_LOCATION/site-packages/langflow/langflow.db"})]}),"\n",(0,o.jsxs)(t.li,{children:["Windows: ",(0,o.jsx)(t.code,{children:"PYTHON_LOCATION\\Lib\\site-packages\\langflow\\langflow.db"})]}),"\n"]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}function f(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);