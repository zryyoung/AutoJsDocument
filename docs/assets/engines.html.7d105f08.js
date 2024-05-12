import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as r,a as e,d as s,w as a,b as t,e as o,r as d}from"./app.6aa2b576.js";const c={},h=o('<h1 id="engines" tabindex="-1"><a class="header-anchor" href="#engines" aria-hidden="true">#</a> engines</h1><p>The engines module provides methods to get the current engine, arguments, and configuration of current engine, and functions to get other engines, start new engines, control other engines, and communicate with other engines.</p><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="interfaces" tabindex="-1"><a class="header-anchor" href="#interfaces" aria-hidden="true">#</a> Interfaces</h3>',4),u=e("h3",{id:"functions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#functions","aria-hidden":"true"},"#"),t(" Functions")],-1),p=o('<h2 id="functions-1" tabindex="-1"><a class="header-anchor" href="#functions-1" aria-hidden="true">#</a> Functions</h2><h3 id="broadcast" tabindex="-1"><a class="header-anchor" href="#broadcast" aria-hidden="true">#</a> broadcast</h3><p>\u25B8 <strong>broadcast</strong>(<code><span class="token property">event</span></code>, ...<code><span class="token property">args</span></code>): <code><span class="token keyword">void</span></code></p><p>Send a broadcast to all engines. It is equivalent to sending the same event to all engines.</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">event</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td><td style="text-align:left;">Event name</td></tr><tr><td style="text-align:left;"><code><span class="token operator">...</span>args</code></td><td style="text-align:left;"><code><span class="token property">any</span></code>[]</td><td style="text-align:left;">Event arguments, must be serializable (can be converted to JSON)</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code><span class="token keyword">void</span></code></p><hr><h3 id="execscriptfile" tabindex="-1"><a class="header-anchor" href="#execscriptfile" aria-hidden="true">#</a> execScriptFile</h3>',10),g=e("strong",null,"execScriptFile",-1),f=e("code",null,[e("span",{class:"token property"},"file")],-1),_=e("code",null,[t("config"),e("span",{class:"token operator"},"?")],-1),m=e("code",null,[e("span",{class:"token property"},"ScriptExecution")],-1),x=e("p",null,"Start a new engine to run a script or a project. The script context and environment will be independent from the current context and environment. The script can communicate with other scripts by events or broadcasts.",-1),y=e("h4",{id:"parameters-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters-1","aria-hidden":"true"},"#"),t(" Parameters")],-1),b=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),v=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"file")])]),e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"string")])]),e("td",{style:{"text-align":"left"}},"Script or project path")],-1),E=e("td",{style:{"text-align":"left"}},[e("code",null,[t("config"),e("span",{class:"token operator"},"?")])],-1),S={style:{"text-align":"left"}},k=e("code",null,[e("span",{class:"token property"},"ExecutionConfig")],-1),w=e("td",{style:{"text-align":"left"}},"Execution configuration",-1),R=e("h4",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1","aria-hidden":"true"},"#"),t(" Returns")],-1),T=e("code",null,[e("span",{class:"token property"},"ScriptExecution")],-1),A=e("p",null,"Script execution object. It can be used to get engine status, communicate with other scripts, and control the engine.",-1),C=e("hr",null,null,-1),N=e("h3",{id:"getrunningengines",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getrunningengines","aria-hidden":"true"},"#"),t(" getRunningEngines")],-1),O=e("strong",null,"getRunningEngines",-1),j=e("code",null,[e("span",{class:"token property"},"ScriptEngine")],-1),F=e("p",null,"Get all current running engines.",-1),D=e("h4",{id:"returns-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-2","aria-hidden":"true"},"#"),t(" Returns")],-1),P=e("code",null,[e("span",{class:"token property"},"ScriptEngine")],-1),V=e("p",null,"Array of current running engines",-1),B=e("hr",null,null,-1),I=e("h3",{id:"myengine",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#myengine","aria-hidden":"true"},"#"),t(" myEngine")],-1),G=e("strong",null,"myEngine",-1),L=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),q=e("p",null,"Get the engine object of the engine that current script running with.",-1),z=e("h4",{id:"returns-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-3","aria-hidden":"true"},"#"),t(" Returns")],-1),J=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),H=o('<hr><h3 id="stopall" tabindex="-1"><a class="header-anchor" href="#stopall" aria-hidden="true">#</a> stopAll</h3><p>\u25B8 <strong>stopAll</strong>(<code>options<span class="token operator">?</span></code>): <code><span class="token keyword">void</span></code></p><p>Stop all engines.</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4>',5),K=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),M=e("td",{style:{"text-align":"left"}},[e("code",null,[t("options"),e("span",{class:"token operator"},"?")])],-1),Q={style:{"text-align":"left"}},U=e("code",null,[e("span",{class:"token property"},"StopAllOptions")],-1),W=e("td",{style:{"text-align":"left"}},"\u505C\u6B62\u6240\u6709\u5F15\u64CE\u7684\u9009\u9879",-1),X=e("h4",{id:"returns-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-4","aria-hidden":"true"},"#"),t(" Returns")],-1),Y=e("p",null,[e("code",null,[e("span",{class:"token keyword"},"void")])],-1);function Z($,ee){const n=d("RouterLink");return i(),r("div",null,[e("p",null,[s(n,{to:"/en/v9/generated/"},{default:a(()=>[t("Auto.js Pro 9 Docs")]),_:1}),t(" / engines")]),h,e("ul",null,[e("li",null,[s(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html"},{default:a(()=>[t("EngineEventTarget")]),_:1})]),e("li",null,[s(n,{to:"/en/v9/generated/interfaces/engines.ExecutionConfig.html"},{default:a(()=>[t("ExecutionConfig")]),_:1})]),e("li",null,[s(n,{to:"/en/v9/generated/interfaces/engines.ReadOnlyExecutionConfig.html"},{default:a(()=>[t("ReadOnlyExecutionConfig")]),_:1})]),e("li",null,[s(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html"},{default:a(()=>[t("ScriptEngine")]),_:1})]),e("li",null,[s(n,{to:"/en/v9/generated/interfaces/engines.ScriptExecution.html"},{default:a(()=>[t("ScriptExecution")]),_:1})]),e("li",null,[s(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:a(()=>[t("SelfScriptEngine")]),_:1})]),e("li",null,[s(n,{to:"/en/v9/generated/interfaces/engines.StopAllOptions.html"},{default:a(()=>[t("StopAllOptions")]),_:1})])]),u,e("ul",null,[e("li",null,[s(n,{to:"/en/v9/generated/modules/engines.html#broadcast"},{default:a(()=>[t("broadcast")]),_:1})]),e("li",null,[s(n,{to:"/en/v9/generated/modules/engines.html#execscriptfile"},{default:a(()=>[t("execScriptFile")]),_:1})]),e("li",null,[s(n,{to:"/en/v9/generated/modules/engines.html#getrunningengines"},{default:a(()=>[t("getRunningEngines")]),_:1})]),e("li",null,[s(n,{to:"/en/v9/generated/modules/engines.html#myengine"},{default:a(()=>[t("myEngine")]),_:1})]),e("li",null,[s(n,{to:"/en/v9/generated/modules/engines.html#stopall"},{default:a(()=>[t("stopAll")]),_:1})])]),p,e("p",null,[t("\u25B8 "),g,t("("),f,t(", "),_,t("): "),s(n,{to:"/en/v9/generated/interfaces/engines.ScriptExecution.html"},{default:a(()=>[m]),_:1})]),x,y,e("table",null,[b,e("tbody",null,[v,e("tr",null,[E,e("td",S,[s(n,{to:"/en/v9/generated/interfaces/engines.ExecutionConfig.html"},{default:a(()=>[k]),_:1})]),w])])]),R,e("p",null,[s(n,{to:"/en/v9/generated/interfaces/engines.ScriptExecution.html"},{default:a(()=>[T]),_:1})]),A,C,N,e("p",null,[t("\u25B8 "),O,t("(): "),s(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html"},{default:a(()=>[j]),_:1}),t("[]")]),F,D,e("p",null,[s(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html"},{default:a(()=>[P]),_:1}),t("[]")]),V,B,I,e("p",null,[t("\u25B8 "),G,t("(): "),s(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:a(()=>[L]),_:1})]),q,z,e("p",null,[s(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:a(()=>[J]),_:1})]),H,e("table",null,[K,e("tbody",null,[e("tr",null,[M,e("td",Q,[s(n,{to:"/en/v9/generated/interfaces/engines.StopAllOptions.html"},{default:a(()=>[U]),_:1})]),W])])]),X,Y])}const se=l(c,[["render",Z],["__file","engines.html.vue"]]);export{se as default};
