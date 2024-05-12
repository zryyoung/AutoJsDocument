import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as i,a as e,d as a,w as s,b as n,e as c,r as p}from"./app.6aa2b576.js";const d={},l=e("h1",{id:"interface-scriptengine",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interface-scriptengine","aria-hidden":"true"},"#"),n(" Interface: ScriptEngine")],-1),h=e("p",null,"Script engine object, represents an engine instance of a script or project running. It can be used to communicate with other engines and scripts, get engine status, stop engine running, etc.",-1),u=e("h2",{id:"hierarchy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hierarchy","aria-hidden":"true"},"#"),n(" Hierarchy")],-1),g=e("p",null,[e("strong",null,[e("code",null,[e("span",{class:"token property"},"ScriptEngine")])])],-1),f=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),y=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),n(" Table of contents")],-1),k=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),n(" Properties")],-1),_=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),n(" Methods")],-1),m=e("h2",{id:"properties-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties-1","aria-hidden":"true"},"#"),n(" Properties")],-1),x=e("h3",{id:"executionconfig",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#executionconfig","aria-hidden":"true"},"#"),n(" executionConfig")],-1),b=e("code",null,[e("span",{class:"token property"},"Readonly")],-1),v=e("strong",null,"executionConfig",-1),S=e("code",null,[e("span",{class:"token property"},"ReadOnlyExecutionConfig")],-1),E=c('<p>Get the execution config of this engine.</p><hr><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h3><p>\u2022 <code><span class="token property">Readonly</span></code> <strong>id</strong>: <code><span class="token property">number</span></code></p><p>Unique id of engine, different from other engine&#39;s id.</p><hr><h3 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> source</h3><p>\u2022 <code><span class="token property">Readonly</span></code> <strong>source</strong>: <code><span class="token property">any</span></code></p><p>Source file object of engine.</p><hr><h3 id="sourcefile" tabindex="-1"><a class="header-anchor" href="#sourcefile" aria-hidden="true">#</a> sourceFile</h3><p>\u2022 <code><span class="token property">Readonly</span></code> <strong>sourceFile</strong>: <code><span class="token property">string</span></code></p><p>Path of engine source file.</p><hr><h3 id="workingdirectory" tabindex="-1"><a class="header-anchor" href="#workingdirectory" aria-hidden="true">#</a> workingDirectory</h3><p>\u2022 <code><span class="token property">Readonly</span></code> <strong>workingDirectory</strong>: <code><span class="token property">string</span></code></p><p>Directory of engine running. Usually is the root directory of project or the parent directory of script file.</p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="emit" tabindex="-1"><a class="header-anchor" href="#emit" aria-hidden="true">#</a> emit</h3><p>\u25B8 <strong>emit</strong>(<code><span class="token property">event</span></code>, ...<code><span class="token property">args</span></code>): <code><span class="token keyword">void</span></code></p><p>Send event to engine. For nodejs engine, you can use <code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;engines&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">myEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;event&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></code> to listen event; For pro8 engine, you can use <code>$events<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;event&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></code> to listen event.</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">event</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td><td style="text-align:left;">Event name</td></tr><tr><td style="text-align:left;"><code><span class="token operator">...</span>args</code></td><td style="text-align:left;"><code><span class="token property">any</span></code>[]</td><td style="text-align:left;">Event arguments, must be a JSON-able data</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code><span class="token keyword">void</span></code></p><hr><h3 id="forcestop" tabindex="-1"><a class="header-anchor" href="#forcestop" aria-hidden="true">#</a> forceStop</h3><p>\u25B8 <strong>forceStop</strong>(): <code><span class="token keyword">void</span></code></p><p>Force stop the engine.</p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code><span class="token keyword">void</span></code></p><hr><h3 id="gettag" tabindex="-1"><a class="header-anchor" href="#gettag" aria-hidden="true">#</a> getTag</h3><p>\u25B8 <strong>getTag</strong>(<code><span class="token property">key</span></code>): <code><span class="token property">any</span></code></p><p>Returns the tag associated with this engine and the specified key.</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">key</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">any</span></code></p>',39);function w(R,q){const t=p("RouterLink");return r(),i("div",null,[e("p",null,[a(t,{to:"/en/v9/generated/"},{default:s(()=>[n("Auto.js Pro 9 Docs")]),_:1}),n(" / "),a(t,{to:"/en/v9/generated/modules/engines.html"},{default:s(()=>[n("engines")]),_:1}),n(" / ScriptEngine")]),l,e("p",null,[a(t,{to:"/en/v9/generated/modules/engines.html"},{default:s(()=>[n("engines")]),_:1}),n(".ScriptEngine")]),h,u,e("ul",null,[e("li",null,[g,e("p",null,[n("\u21B3 "),a(t,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:s(()=>[f]),_:1})])])]),y,k,e("ul",null,[e("li",null,[a(t,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html#executionconfig"},{default:s(()=>[n("executionConfig")]),_:1})]),e("li",null,[a(t,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html#id"},{default:s(()=>[n("id")]),_:1})]),e("li",null,[a(t,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html#source"},{default:s(()=>[n("source")]),_:1})]),e("li",null,[a(t,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html#sourcefile"},{default:s(()=>[n("sourceFile")]),_:1})]),e("li",null,[a(t,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html#workingdirectory"},{default:s(()=>[n("workingDirectory")]),_:1})])]),_,e("ul",null,[e("li",null,[a(t,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html#emit"},{default:s(()=>[n("emit")]),_:1})]),e("li",null,[a(t,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html#forcestop"},{default:s(()=>[n("forceStop")]),_:1})]),e("li",null,[a(t,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html#gettag"},{default:s(()=>[n("getTag")]),_:1})])]),m,x,e("p",null,[n("\u2022 "),b,n(),v,n(": "),a(t,{to:"/en/v9/generated/interfaces/engines.ReadOnlyExecutionConfig.html"},{default:s(()=>[S]),_:1})]),E])}const T=o(d,[["render",w],["__file","engines.ScriptEngine.html.vue"]]);export{T as default};
