"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[6511],{88395:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"Concepts/concepts-overview","title":"Langflow overview","description":"This page explores the fundamental building blocks of Langflow, beginning with the question, \\"What is a flow?\\"","source":"@site/docs/Concepts/concepts-overview.md","sourceDirName":"Concepts","slug":"/concepts-overview","permalink":"/concepts-overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Langflow overview","slug":"/concepts-overview"},"sidebar":"docs","previous":{"title":"Travel planning agent","permalink":"/tutorials-travel-planning-agent"},"next":{"title":"Playground","permalink":"/concepts-playground"}}');var t=s(74848),i=s(28453),r=s(84443);const l={title:"Langflow overview",slug:"/concepts-overview"},a=void 0,c={},d=[{value:"What is a flow?",id:"what-is-a-flow",level:2},{value:"Find your way around",id:"find-your-way-around",level:2},{value:"Workspace",id:"workspace",level:2},{value:"Components",id:"components",level:2},{value:"Playground",id:"playground",level:2},{value:"API pane",id:"api-pane",level:2},{value:"View logs",id:"view-logs",level:2},{value:"Projects and folders",id:"projects-and-folders",level:2},{value:"Options menu",id:"options-menu",level:2},{value:"Settings",id:"settings",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This page explores the fundamental building blocks of Langflow, beginning with the question, ",(0,t.jsx)(n.strong,{children:'"What is a flow?"'})]}),"\n",(0,t.jsx)(n.h2,{id:"what-is-a-flow",children:"What is a flow?"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"flow"})," is an application. It receives input, processes it, and produces output."]}),"\n",(0,t.jsxs)(n.p,{children:["Flows are created in the ",(0,t.jsx)(n.strong,{children:"workspace"})," with components dragged from the components sidebar."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Basic prompting flow within in the workspace",src:s(22202).A+"",width:"3438",height:"1764"})}),"\n",(0,t.jsxs)(n.p,{children:["A flow can be as simple as the ",(0,t.jsx)(n.a,{href:"/get-started-quickstart",children:"basic prompting flow"}),", which creates an OpenAI chatbot with four components."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Each component in a flow is a ",(0,t.jsx)(n.strong,{children:"node"})," that performs a specific task, like an AI model or a data source."]}),"\n",(0,t.jsxs)(n.li,{children:["Each component has a ",(0,t.jsx)(n.strong,{children:"Configuration"})," menu. Click the ",(0,t.jsx)(n.strong,{children:"Code"})," pane to see a component's underlying Python code."]}),"\n",(0,t.jsxs)(n.li,{children:["Components are connected with ",(0,t.jsx)(n.strong,{children:"edges"})," to form flows."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you're familiar with ",(0,t.jsx)(n.a,{href:"https://reactflow.dev/learn",children:"ReactFlow"}),", a ",(0,t.jsx)(n.strong,{children:"flow"})," is a node-based application, a ",(0,t.jsx)(n.strong,{children:"component"})," is a node, and the connections between components are ",(0,t.jsx)(n.strong,{children:"edges"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["When a flow is run, Langflow builds a Directed Acyclic Graph (DAG) graph object from the nodes (components) and edges (connections between components), with the nodes sorted to determine the order of execution. The graph build calls the individual components' ",(0,t.jsx)(n.code,{children:"def_build"})," functions to validate and prepare the nodes. This graph is then processed in dependency order. Each node is built and executed sequentially, with results from each built node being passed to nodes that are dependent on the previous node's results."]}),"\n",(0,t.jsx)(n.p,{children:"Flows are stored on local disk at these default locations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Linux or WSL on Windows"}),": ",(0,t.jsx)(n.code,{children:"home/<username>/.cache/langflow/"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"MacOS"}),": ",(0,t.jsx)(n.code,{children:"/Users/<username>/Library/Caches/langflow/"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The flow storage location can be customized with the ",(0,t.jsx)(n.a,{href:"/environment-variables#LANGFLOW_CONFIG_DIR",children:"LANGFLOW_CONFIG_DIR"})," environment variable."]}),"\n",(0,t.jsx)(n.h2,{id:"find-your-way-around",children:"Find your way around"}),"\n",(0,t.jsx)(n.p,{children:"If you're new to Langflow, it's OK to feel a bit lost at first. We\u2019ll take you on a tour, so you can orient yourself and start creating applications quickly."}),"\n",(0,t.jsxs)(n.p,{children:["Langflow has four distinct regions: the ",(0,t.jsx)(n.a,{href:"#workspace",children:"workspace"})," is the main area where you build your flows. The components sidebar is on the left, and lists the available ",(0,t.jsx)(n.a,{href:"#components",children:"components"}),". The ",(0,t.jsx)(n.a,{href:"#playground",children:"playground"})," and ",(0,t.jsx)(n.a,{href:"#api-pane",children:"API pane"})," are available in the upper right corner."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(30706).A+"",width:"3444",height:"1898"})}),"\n",(0,t.jsx)(n.h2,{id:"workspace",children:"Workspace"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"workspace"})," is where you create AI applications by connecting and running components in flows."]}),"\n",(0,t.jsx)(n.p,{children:"The workspace controls allow you to adjust your view and lock your flows in place."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.strong,{children:"Notes"})," to flows with the ",(0,t.jsx)(n.strong,{children:"Add Note"})," button, similar to commenting in code."]}),"\n",(0,t.jsxs)(n.li,{children:["To access the ",(0,t.jsx)(n.a,{href:"#settings",children:"Settings"})," menu, click ",(0,t.jsx)(r.A,{name:"Settings","aria-label":"Gear icon"})," ",(0,t.jsx)(n.strong,{children:"Settings"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This menu contains configuration for ",(0,t.jsx)(n.strong,{children:"Global Variables"}),", ",(0,t.jsx)(n.strong,{children:"Langflow API"}),", ",(0,t.jsx)(n.strong,{children:"Shortcuts"}),", and ",(0,t.jsx)(n.strong,{children:"Messages"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"component"})," is a single building block within a flow and consists of inputs, outputs, and parameters that define its functionality."]}),"\n",(0,t.jsx)(n.p,{children:"To add a component to your flow, drag it from the sidebar onto the workspace."}),"\n",(0,t.jsx)(n.p,{children:"To connect components, drag a line from the output handle (\u26aa) of one component to the input handle of another."}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see ",(0,t.jsx)(n.a,{href:"/concepts-components",children:"Components overview"}),"."]}),"\n",(0,t.jsx)("img",{src:"/img/prompt-component.png",alt:"Prompt component",style:{display:"block",margin:"auto",width:300}}),"\n",(0,t.jsx)(n.h2,{id:"playground",children:"Playground"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Playground"})," executes the current flow in the workspace."]}),"\n",(0,t.jsx)(n.p,{children:"Chat with your flow, view inputs and outputs, and modify your AI's memories to tune your responses in real time."}),"\n",(0,t.jsxs)(n.p,{children:["Either the ",(0,t.jsx)(n.strong,{children:"Chat Input"})," or ",(0,t.jsx)(n.strong,{children:"Chat Output"})," component can be opened in the ",(0,t.jsx)(n.strong,{children:"Playground"})," and tested in real time."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see the ",(0,t.jsx)(n.a,{href:"/concepts-playground",children:"Playground"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(75918).A+"",width:"3244",height:"1776"})}),"\n",(0,t.jsx)(n.h2,{id:"api-pane",children:"API pane"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"API"})," pane provides code templates to integrate your flows into external applications."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see the ",(0,t.jsx)(n.a,{href:"/concepts-api",children:"API pane"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(4558).A+"",width:"3236",height:"1760"})}),"\n",(0,t.jsx)(n.h2,{id:"view-logs",children:"View logs"}),"\n",(0,t.jsxs)(n.p,{children:["The\xa0",(0,t.jsx)(n.strong,{children:"Logs"}),"\xa0pane provides a detailed record of all component executions within a workspace."]}),"\n",(0,t.jsxs)(n.p,{children:["To access the ",(0,t.jsx)(n.strong,{children:"Logs"})," pane, click your ",(0,t.jsx)(n.strong,{children:"Flow Name"}),", and then select ",(0,t.jsx)(n.strong,{children:"Logs"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(77232).A+"",width:"3200",height:"1716"})}),"\n",(0,t.jsx)(n.h2,{id:"projects-and-folders",children:"Projects and folders"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"My Projects"})," page displays all the flows and components you've created in the Langflow workspace."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(22640).A+"",width:"3412",height:"1758"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"My Projects"})," is the default folder where all new projects and components are initially stored."]}),"\n",(0,t.jsx)(n.p,{children:"Projects, folders, and flows are exchanged as JSON objects."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To create a new folder, click \ud83d\udcc1 ",(0,t.jsx)(n.strong,{children:"New Folder"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To rename a folder, double-click the folder name."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To download a folder, click \ud83d\udce5 ",(0,t.jsx)(n.strong,{children:"Download"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To upload a folder, click \ud83d\udce4 ",(0,t.jsx)(n.strong,{children:"Upload"}),". The default maximum file upload size is 100 MB."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To move a flow or component, drag and drop it into the desired folder."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"options-menu",children:"Options menu"}),"\n",(0,t.jsx)(n.p,{children:"The dropdown menu labeled with the project name offers several management and customization options for the current flow in the Langflow workspace."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"New"}),": Create a new flow from scratch."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Settings"}),": Adjust settings specific to the current flow, such as its name, description, and endpoint name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Logs"}),": View logs for the current project, including execution history, errors, and other runtime events."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Import"}),": Import a flow or component from a JSON file into the workspace."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Export"}),": Export the current flow as a JSON file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Undo (\u2318Z)"}),": Revert the last action taken in the project."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Redo (\u2318Y)"}),": Reapply a previously undone action."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Refresh All"}),": Refresh all components and delete cache."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(r.A,{name:"Settings","aria-label":"Gear icon"})," ",(0,t.jsx)(n.strong,{children:"Settings"})," to access ",(0,t.jsx)(n.strong,{children:"Global variables"}),", ",(0,t.jsx)(n.strong,{children:"Langflow API"}),", ",(0,t.jsx)(n.strong,{children:"Shortcuts"}),", and ",(0,t.jsx)(n.strong,{children:"Messages"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},84443:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var o=s(64058),t=s(74848);function i(e){let{name:n,...s}=e;const i=o[n];return i?(0,t.jsx)(i,{...s}):null}},4558:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/api-pane-97a01b20a262676d4e21906df0e29f46.png"},77232:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/logs-6ae22cc6a87b128cbc0c7f4559b47f10.png"},22640:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/my-projects-20f73f0541b2f5b41398ef5df610b7b3.png"},75918:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/playground-b2c623fb6849024570bc9bd5285309f5.png"},22202:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/workspace-basic-prompting-5714c651361659596e80fa4a691701d9.png"},30706:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/workspace-e7f86797a44d56c10b93c12b206d88f0.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var o=s(96540);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);