import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as d,a as e,d as a,w as r,b as t,e as s,r as l}from"./app.6aa2b576.js";const c={},h=e("h1",{id:"interface-selfscriptengine",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interface-selfscriptengine","aria-hidden":"true"},"#"),t(" Interface: SelfScriptEngine")],-1),p=e("p",null,"Object of the engine that current script running with.",-1),g=e("h2",{id:"hierarchy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hierarchy","aria-hidden":"true"},"#"),t(" Hierarchy")],-1),f=e("code",null,[e("span",{class:"token property"},"ScriptEngine")],-1),u=e("code",null,[e("span",{class:"token property"},"EngineEventTarget")],-1),_=e("p",null,[t("\u21B3 "),e("strong",null,[e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")])])],-1),y=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),m=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),v=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),x=s('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="execargv" tabindex="-1"><a class="header-anchor" href="#execargv" aria-hidden="true">#</a> execArgv</h3><p>\u2022 <code><span class="token property">Readonly</span></code> <strong>execArgv</strong>: <code><span class="token property">any</span></code></p><p>Execution arguments. Includes arguments specified when starting engine, or arguments specified when triggering by work manager. For example, if triggered by intent task, the <code><span class="token property">execArgv</span></code> is <code><span class="token punctuation">{</span><span class="token literal-property property">intent</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">}</span></code>.</p><hr><h3 id="executionconfig" tabindex="-1"><a class="header-anchor" href="#executionconfig" aria-hidden="true">#</a> executionConfig</h3>',6),k=e("code",null,[e("span",{class:"token property"},"Readonly")],-1),E=e("strong",null,"executionConfig",-1),S=e("code",null,[e("span",{class:"token property"},"ReadOnlyExecutionConfig")],-1),b=e("p",null,"Get the execution config of this engine.",-1),T=e("h4",{id:"inherited-from",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from","aria-hidden":"true"},"#"),t(" Inherited from")],-1),w=s('<hr><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h3><p>\u2022 <code><span class="token property">Readonly</span></code> <strong>id</strong>: <code><span class="token property">number</span></code></p><p>Unique id of engine, different from other engine&#39;s id.</p><h4 id="inherited-from-1" tabindex="-1"><a class="header-anchor" href="#inherited-from-1" aria-hidden="true">#</a> Inherited from</h4>',5),L=s('<hr><h3 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> source</h3><p>\u2022 <code><span class="token property">Readonly</span></code> <strong>source</strong>: <code><span class="token property">any</span></code></p><p>Source file object of engine.</p><h4 id="inherited-from-2" tabindex="-1"><a class="header-anchor" href="#inherited-from-2" aria-hidden="true">#</a> Inherited from</h4>',5),R=s('<hr><h3 id="sourcefile" tabindex="-1"><a class="header-anchor" href="#sourcefile" aria-hidden="true">#</a> sourceFile</h3><p>\u2022 <code><span class="token property">Readonly</span></code> <strong>sourceFile</strong>: <code><span class="token property">string</span></code></p><p>Path of engine source file.</p><h4 id="inherited-from-3" tabindex="-1"><a class="header-anchor" href="#inherited-from-3" aria-hidden="true">#</a> Inherited from</h4>',5),I=s('<hr><h3 id="workingdirectory" tabindex="-1"><a class="header-anchor" href="#workingdirectory" aria-hidden="true">#</a> workingDirectory</h3><p>\u2022 <code><span class="token property">Readonly</span></code> <strong>workingDirectory</strong>: <code><span class="token property">string</span></code></p><p>Directory of engine running. Usually is the root directory of project or the parent directory of script file.</p><h4 id="inherited-from-4" tabindex="-1"><a class="header-anchor" href="#inherited-from-4" aria-hidden="true">#</a> Inherited from</h4>',5),N=e("h2",{id:"methods-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods-1","aria-hidden":"true"},"#"),t(" Methods")],-1),P=e("h3",{id:"addlistener",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#addlistener","aria-hidden":"true"},"#"),t(" addListener")],-1),C=e("strong",null,"addListener",-1),F=e("code",null,[e("span",{class:"token property"},"event")],-1),M=e("code",null,[e("span",{class:"token property"},"listener")],-1),A=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),q=s('<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">event</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td></tr><tr><td style="text-align:left;"><code><span class="token property">listener</span></code></td><td style="text-align:left;">(...<code><span class="token property">args</span></code>: <code><span class="token property">any</span></code>[]) =&gt; <code><span class="token keyword">void</span></code></td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4>',3),O=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),D=e("h4",{id:"inherited-from-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-5","aria-hidden":"true"},"#"),t(" Inherited from")],-1),j=s('<hr><h3 id="emit" tabindex="-1"><a class="header-anchor" href="#emit" aria-hidden="true">#</a> emit</h3><p>\u25B8 <strong>emit</strong>(<code><span class="token property">event</span></code>, ...<code><span class="token property">args</span></code>): <code><span class="token keyword">void</span></code></p><p>Send event to engine. For nodejs engine, you can use <code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;engines&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">myEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;event&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></code> to listen event; For pro8 engine, you can use <code>$events<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;event&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></code> to listen event.</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">event</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td><td style="text-align:left;">Event name</td></tr><tr><td style="text-align:left;"><code><span class="token operator">...</span>args</code></td><td style="text-align:left;"><code><span class="token property">any</span></code>[]</td><td style="text-align:left;">Event arguments, must be a JSON-able data</td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code><span class="token keyword">void</span></code></p><h4 id="inherited-from-6" tabindex="-1"><a class="header-anchor" href="#inherited-from-6" aria-hidden="true">#</a> Inherited from</h4>',9),V=s('<hr><h3 id="eventnames" tabindex="-1"><a class="header-anchor" href="#eventnames" aria-hidden="true">#</a> eventNames</h3><p>\u25B8 <strong>eventNames</strong>(): <code><span class="token property">string</span></code>[]</p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">string</span></code>[]</p><h4 id="inherited-from-7" tabindex="-1"><a class="header-anchor" href="#inherited-from-7" aria-hidden="true">#</a> Inherited from</h4>',6),B=s('<hr><h3 id="forcestop" tabindex="-1"><a class="header-anchor" href="#forcestop" aria-hidden="true">#</a> forceStop</h3><p>\u25B8 <strong>forceStop</strong>(): <code><span class="token keyword">void</span></code></p><p>Force stop the engine.</p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code><span class="token keyword">void</span></code></p><h4 id="inherited-from-8" tabindex="-1"><a class="header-anchor" href="#inherited-from-8" aria-hidden="true">#</a> Inherited from</h4>',7),U=s('<hr><h3 id="getmaxlisteners" tabindex="-1"><a class="header-anchor" href="#getmaxlisteners" aria-hidden="true">#</a> getMaxListeners</h3><p>\u25B8 <strong>getMaxListeners</strong>(): <code><span class="token property">number</span></code></p><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">number</span></code></p><h4 id="inherited-from-9" tabindex="-1"><a class="header-anchor" href="#inherited-from-9" aria-hidden="true">#</a> Inherited from</h4>',6),G=s('<hr><h3 id="gettag" tabindex="-1"><a class="header-anchor" href="#gettag" aria-hidden="true">#</a> getTag</h3><p>\u25B8 <strong>getTag</strong>(<code><span class="token property">key</span></code>): <code><span class="token property">any</span></code></p><p>Returns the tag associated with this engine and the specified key.</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">key</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">any</span></code></p><h4 id="inherited-from-10" tabindex="-1"><a class="header-anchor" href="#inherited-from-10" aria-hidden="true">#</a> Inherited from</h4>',9),H=s('<hr><h3 id="listenercount" tabindex="-1"><a class="header-anchor" href="#listenercount" aria-hidden="true">#</a> listenerCount</h3><p>\u25B8 <strong>listenerCount</strong>(<code><span class="token property">event</span></code>): <code><span class="token property">number</span></code></p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">event</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">number</span></code></p><h4 id="inherited-from-11" tabindex="-1"><a class="header-anchor" href="#inherited-from-11" aria-hidden="true">#</a> Inherited from</h4>',8),J=s('<hr><h3 id="listeners" tabindex="-1"><a class="header-anchor" href="#listeners" aria-hidden="true">#</a> listeners</h3><p>\u25B8 <strong>listeners</strong>(<code><span class="token property">event</span></code>): <code><span class="token property">Function</span></code>[]</p><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">event</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1"><a class="header-anchor" href="#returns-7" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">Function</span></code>[]</p><h4 id="inherited-from-12" tabindex="-1"><a class="header-anchor" href="#inherited-from-12" aria-hidden="true">#</a> Inherited from</h4>',8),$=e("hr",null,null,-1),z=e("h3",{id:"off",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#off","aria-hidden":"true"},"#"),t(" off")],-1),K=e("strong",null,"off",-1),Q=e("code",null,[e("span",{class:"token property"},"event")],-1),W=e("code",null,[e("span",{class:"token property"},"listener")],-1),X=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),Y=s('<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">event</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td></tr><tr><td style="text-align:left;"><code><span class="token property">listener</span></code></td><td style="text-align:left;">(...<code><span class="token property">args</span></code>: <code><span class="token property">any</span></code>[]) =&gt; <code><span class="token keyword">void</span></code></td></tr></tbody></table><h4 id="returns-8" tabindex="-1"><a class="header-anchor" href="#returns-8" aria-hidden="true">#</a> Returns</h4>',3),Z=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),ee=e("h4",{id:"inherited-from-13",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-13","aria-hidden":"true"},"#"),t(" Inherited from")],-1),te=e("hr",null,null,-1),ne=e("h3",{id:"on",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#on","aria-hidden":"true"},"#"),t(" on")],-1),ae=e("strong",null,"on",-1),re=e("code",null,[e("span",{class:"token property"},"event")],-1),se=e("code",null,[e("span",{class:"token property"},"listener")],-1),ie=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),oe=s('<h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">event</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td></tr><tr><td style="text-align:left;"><code><span class="token property">listener</span></code></td><td style="text-align:left;">(...<code><span class="token property">args</span></code>: <code><span class="token property">any</span></code>[]) =&gt; <code><span class="token keyword">void</span></code></td></tr></tbody></table><h4 id="returns-9" tabindex="-1"><a class="header-anchor" href="#returns-9" aria-hidden="true">#</a> Returns</h4>',3),de=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),le=e("h4",{id:"inherited-from-14",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-14","aria-hidden":"true"},"#"),t(" Inherited from")],-1),ce=e("hr",null,null,-1),he=e("h3",{id:"once",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#once","aria-hidden":"true"},"#"),t(" once")],-1),pe=e("strong",null,"once",-1),ge=e("code",null,[e("span",{class:"token property"},"event")],-1),fe=e("code",null,[e("span",{class:"token property"},"listener")],-1),ue=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),_e=s('<h4 id="parameters-7" tabindex="-1"><a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">event</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td></tr><tr><td style="text-align:left;"><code><span class="token property">listener</span></code></td><td style="text-align:left;">(...<code><span class="token property">args</span></code>: <code><span class="token property">any</span></code>[]) =&gt; <code><span class="token keyword">void</span></code></td></tr></tbody></table><h4 id="returns-10" tabindex="-1"><a class="header-anchor" href="#returns-10" aria-hidden="true">#</a> Returns</h4>',3),ye=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),me=e("h4",{id:"inherited-from-15",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-15","aria-hidden":"true"},"#"),t(" Inherited from")],-1),ve=e("hr",null,null,-1),xe=e("h3",{id:"prependlistener",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prependlistener","aria-hidden":"true"},"#"),t(" prependListener")],-1),ke=e("strong",null,"prependListener",-1),Ee=e("code",null,[e("span",{class:"token property"},"event")],-1),Se=e("code",null,[e("span",{class:"token property"},"listener")],-1),be=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),Te=s('<h4 id="parameters-8" tabindex="-1"><a class="header-anchor" href="#parameters-8" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">event</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td></tr><tr><td style="text-align:left;"><code><span class="token property">listener</span></code></td><td style="text-align:left;">(...<code><span class="token property">args</span></code>: <code><span class="token property">any</span></code>[]) =&gt; <code><span class="token keyword">void</span></code></td></tr></tbody></table><h4 id="returns-11" tabindex="-1"><a class="header-anchor" href="#returns-11" aria-hidden="true">#</a> Returns</h4>',3),we=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),Le=e("h4",{id:"inherited-from-16",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-16","aria-hidden":"true"},"#"),t(" Inherited from")],-1),Re=e("hr",null,null,-1),Ie=e("h3",{id:"prependoncelistener",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prependoncelistener","aria-hidden":"true"},"#"),t(" prependOnceListener")],-1),Ne=e("strong",null,"prependOnceListener",-1),Pe=e("code",null,[e("span",{class:"token property"},"event")],-1),Ce=e("code",null,[e("span",{class:"token property"},"listener")],-1),Fe=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),Me=s('<h4 id="parameters-9" tabindex="-1"><a class="header-anchor" href="#parameters-9" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">event</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td></tr><tr><td style="text-align:left;"><code><span class="token property">listener</span></code></td><td style="text-align:left;">(...<code><span class="token property">args</span></code>: <code><span class="token property">any</span></code>[]) =&gt; <code><span class="token keyword">void</span></code></td></tr></tbody></table><h4 id="returns-12" tabindex="-1"><a class="header-anchor" href="#returns-12" aria-hidden="true">#</a> Returns</h4>',3),Ae=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),qe=e("h4",{id:"inherited-from-17",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-17","aria-hidden":"true"},"#"),t(" Inherited from")],-1),Oe=s('<hr><h3 id="rawlisteners" tabindex="-1"><a class="header-anchor" href="#rawlisteners" aria-hidden="true">#</a> rawListeners</h3><p>\u25B8 <strong>rawListeners</strong>(<code><span class="token property">event</span></code>): <code><span class="token property">Function</span></code>[]</p><h4 id="parameters-10" tabindex="-1"><a class="header-anchor" href="#parameters-10" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">event</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td></tr></tbody></table><h4 id="returns-13" tabindex="-1"><a class="header-anchor" href="#returns-13" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">Function</span></code>[]</p><h4 id="inherited-from-18" tabindex="-1"><a class="header-anchor" href="#inherited-from-18" aria-hidden="true">#</a> Inherited from</h4>',8),De=e("hr",null,null,-1),je=e("h3",{id:"removealllisteners",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#removealllisteners","aria-hidden":"true"},"#"),t(" removeAllListeners")],-1),Ve=e("strong",null,"removeAllListeners",-1),Be=e("code",null,[t("event"),e("span",{class:"token operator"},"?")],-1),Ue=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),Ge=s('<h4 id="parameters-11" tabindex="-1"><a class="header-anchor" href="#parameters-11" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event<span class="token operator">?</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td></tr></tbody></table><h4 id="returns-14" tabindex="-1"><a class="header-anchor" href="#returns-14" aria-hidden="true">#</a> Returns</h4>',3),He=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),Je=e("h4",{id:"inherited-from-19",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-19","aria-hidden":"true"},"#"),t(" Inherited from")],-1),$e=e("hr",null,null,-1),ze=e("h3",{id:"removelistener",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#removelistener","aria-hidden":"true"},"#"),t(" removeListener")],-1),Ke=e("strong",null,"removeListener",-1),Qe=e("code",null,[e("span",{class:"token property"},"event")],-1),We=e("code",null,[e("span",{class:"token property"},"listener")],-1),Xe=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),Ye=s('<h4 id="parameters-12" tabindex="-1"><a class="header-anchor" href="#parameters-12" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">event</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td></tr><tr><td style="text-align:left;"><code><span class="token property">listener</span></code></td><td style="text-align:left;">(...<code><span class="token property">args</span></code>: <code><span class="token property">any</span></code>[]) =&gt; <code><span class="token keyword">void</span></code></td></tr></tbody></table><h4 id="returns-15" tabindex="-1"><a class="header-anchor" href="#returns-15" aria-hidden="true">#</a> Returns</h4>',3),Ze=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),et=e("h4",{id:"inherited-from-20",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-20","aria-hidden":"true"},"#"),t(" Inherited from")],-1),tt=e("hr",null,null,-1),nt=e("h3",{id:"setmaxlisteners",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setmaxlisteners","aria-hidden":"true"},"#"),t(" setMaxListeners")],-1),at=e("strong",null,"setMaxListeners",-1),rt=e("code",null,[e("span",{class:"token property"},"n")],-1),st=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),it=s('<h4 id="parameters-13" tabindex="-1"><a class="header-anchor" href="#parameters-13" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">n</span></code></td><td style="text-align:left;"><code><span class="token property">number</span></code></td></tr></tbody></table><h4 id="returns-16" tabindex="-1"><a class="header-anchor" href="#returns-16" aria-hidden="true">#</a> Returns</h4>',3),ot=e("code",null,[e("span",{class:"token property"},"SelfScriptEngine")],-1),dt=e("h4",{id:"inherited-from-21",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-21","aria-hidden":"true"},"#"),t(" Inherited from")],-1);function lt(ct,ht){const n=l("RouterLink");return o(),d("div",null,[e("p",null,[a(n,{to:"/en/v9/generated/"},{default:r(()=>[t("Auto.js Pro 9 Docs")]),_:1}),t(" / "),a(n,{to:"/en/v9/generated/modules/engines.html"},{default:r(()=>[t("engines")]),_:1}),t(" / SelfScriptEngine")]),h,e("p",null,[a(n,{to:"/en/v9/generated/modules/engines.html"},{default:r(()=>[t("engines")]),_:1}),t(".SelfScriptEngine")]),p,g,e("ul",null,[e("li",null,[e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html"},{default:r(()=>[f]),_:1})])]),e("li",null,[e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html"},{default:r(()=>[u]),_:1})]),_])]),y,m,e("ul",null,[e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#execargv"},{default:r(()=>[t("execArgv")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#executionconfig"},{default:r(()=>[t("executionConfig")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#id"},{default:r(()=>[t("id")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#source"},{default:r(()=>[t("source")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#sourcefile"},{default:r(()=>[t("sourceFile")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#workingdirectory"},{default:r(()=>[t("workingDirectory")]),_:1})])]),v,e("ul",null,[e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#addlistener"},{default:r(()=>[t("addListener")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#emit"},{default:r(()=>[t("emit")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#eventnames"},{default:r(()=>[t("eventNames")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#forcestop"},{default:r(()=>[t("forceStop")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#getmaxlisteners"},{default:r(()=>[t("getMaxListeners")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#gettag"},{default:r(()=>[t("getTag")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#listenercount"},{default:r(()=>[t("listenerCount")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#listeners"},{default:r(()=>[t("listeners")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#off"},{default:r(()=>[t("off")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#on"},{default:r(()=>[t("on")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#once"},{default:r(()=>[t("once")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#prependlistener"},{default:r(()=>[t("prependListener")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#prependoncelistener"},{default:r(()=>[t("prependOnceListener")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#rawlisteners"},{default:r(()=>[t("rawListeners")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#removealllisteners"},{default:r(()=>[t("removeAllListeners")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#removelistener"},{default:r(()=>[t("removeListener")]),_:1})]),e("li",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html#setmaxlisteners"},{default:r(()=>[t("setMaxListeners")]),_:1})])]),x,e("p",null,[t("\u2022 "),k,t(),E,t(": "),a(n,{to:"/en/v9/generated/interfaces/engines.ReadOnlyExecutionConfig.html"},{default:r(()=>[S]),_:1})]),b,T,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html"},{default:r(()=>[t("ScriptEngine")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html#executionconfig"},{default:r(()=>[t("executionConfig")]),_:1})]),w,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html"},{default:r(()=>[t("ScriptEngine")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html#id"},{default:r(()=>[t("id")]),_:1})]),L,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html"},{default:r(()=>[t("ScriptEngine")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html#source"},{default:r(()=>[t("source")]),_:1})]),R,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html"},{default:r(()=>[t("ScriptEngine")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html#sourcefile"},{default:r(()=>[t("sourceFile")]),_:1})]),I,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html"},{default:r(()=>[t("ScriptEngine")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html#workingdirectory"},{default:r(()=>[t("workingDirectory")]),_:1})]),N,P,e("p",null,[t("\u25B8 "),C,t("("),F,t(", "),M,t("): "),a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[A]),_:1})]),q,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[O]),_:1})]),D,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html"},{default:r(()=>[t("EngineEventTarget")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html#addlistener"},{default:r(()=>[t("addListener")]),_:1})]),j,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html"},{default:r(()=>[t("ScriptEngine")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html#emit"},{default:r(()=>[t("emit")]),_:1})]),V,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html"},{default:r(()=>[t("EngineEventTarget")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html#eventnames"},{default:r(()=>[t("eventNames")]),_:1})]),B,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html"},{default:r(()=>[t("ScriptEngine")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html#forcestop"},{default:r(()=>[t("forceStop")]),_:1})]),U,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html"},{default:r(()=>[t("EngineEventTarget")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html#getmaxlisteners"},{default:r(()=>[t("getMaxListeners")]),_:1})]),G,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html"},{default:r(()=>[t("ScriptEngine")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.ScriptEngine.html#gettag"},{default:r(()=>[t("getTag")]),_:1})]),H,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html"},{default:r(()=>[t("EngineEventTarget")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html#listenercount"},{default:r(()=>[t("listenerCount")]),_:1})]),J,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html"},{default:r(()=>[t("EngineEventTarget")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html#listeners"},{default:r(()=>[t("listeners")]),_:1})]),$,z,e("p",null,[t("\u25B8 "),K,t("("),Q,t(", "),W,t("): "),a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[X]),_:1})]),Y,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[Z]),_:1})]),ee,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html"},{default:r(()=>[t("EngineEventTarget")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html#off"},{default:r(()=>[t("off")]),_:1})]),te,ne,e("p",null,[t("\u25B8 "),ae,t("("),re,t(", "),se,t("): "),a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[ie]),_:1})]),oe,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[de]),_:1})]),le,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html"},{default:r(()=>[t("EngineEventTarget")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html#on"},{default:r(()=>[t("on")]),_:1})]),ce,he,e("p",null,[t("\u25B8 "),pe,t("("),ge,t(", "),fe,t("): "),a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[ue]),_:1})]),_e,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[ye]),_:1})]),me,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html"},{default:r(()=>[t("EngineEventTarget")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html#once"},{default:r(()=>[t("once")]),_:1})]),ve,xe,e("p",null,[t("\u25B8 "),ke,t("("),Ee,t(", "),Se,t("): "),a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[be]),_:1})]),Te,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[we]),_:1})]),Le,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html"},{default:r(()=>[t("EngineEventTarget")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html#prependlistener"},{default:r(()=>[t("prependListener")]),_:1})]),Re,Ie,e("p",null,[t("\u25B8 "),Ne,t("("),Pe,t(", "),Ce,t("): "),a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[Fe]),_:1})]),Me,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[Ae]),_:1})]),qe,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html"},{default:r(()=>[t("EngineEventTarget")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html#prependoncelistener"},{default:r(()=>[t("prependOnceListener")]),_:1})]),Oe,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html"},{default:r(()=>[t("EngineEventTarget")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html#rawlisteners"},{default:r(()=>[t("rawListeners")]),_:1})]),De,je,e("p",null,[t("\u25B8 "),Ve,t("("),Be,t("): "),a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[Ue]),_:1})]),Ge,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[He]),_:1})]),Je,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html"},{default:r(()=>[t("EngineEventTarget")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html#removealllisteners"},{default:r(()=>[t("removeAllListeners")]),_:1})]),$e,ze,e("p",null,[t("\u25B8 "),Ke,t("("),Qe,t(", "),We,t("): "),a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[Xe]),_:1})]),Ye,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[Ze]),_:1})]),et,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html"},{default:r(()=>[t("EngineEventTarget")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html#removelistener"},{default:r(()=>[t("removeListener")]),_:1})]),tt,nt,e("p",null,[t("\u25B8 "),at,t("("),rt,t("): "),a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[st]),_:1})]),it,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.SelfScriptEngine.html"},{default:r(()=>[ot]),_:1})]),dt,e("p",null,[a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html"},{default:r(()=>[t("EngineEventTarget")]),_:1}),t("."),a(n,{to:"/en/v9/generated/interfaces/engines.EngineEventTarget.html#setmaxlisteners"},{default:r(()=>[t("setMaxListeners")]),_:1})])])}const ft=i(c,[["render",lt],["__file","engines.SelfScriptEngine.html.vue"]]);export{ft as default};
