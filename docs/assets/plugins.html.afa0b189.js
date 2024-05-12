import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c,a as n,d as s,w as t,b as a,e as o,r}from"./app.6aa2b576.js";const d={},i=o('<h1 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h1><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h3>',3),u=o(`<h2 id="functions-1" tabindex="-1"><a class="header-anchor" href="#functions-1" aria-hidden="true">#</a> Functions</h2><h3 id="load" tabindex="-1"><a class="header-anchor" href="#load" aria-hidden="true">#</a> load</h3><p>\u25B8 <strong>load</strong>(<code><span class="token property">packageName</span></code>): <code><span class="token property">Promise</span></code>&lt;<code><span class="token property">any</span></code>&gt;</p><p>Load a plugin and return the module.exports object exported by the plugin.</p><p>If the plugin is not installed or does not exist, throw a PluginLoadException.</p><p><strong><code><span class="token property">Example</span></code></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;nodejs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> plugins <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;plugins&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> ffmpeg <span class="token operator">=</span> <span class="token keyword">await</span> plugins<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&quot;org.autojs.plugin.ffmpeg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ffmpeg<span class="token punctuation">.</span>inProcess<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&#39;-i /path/to/mp4.mp4 /path/to/mp3.mp3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">packageName</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td><td style="text-align:left;">plugin package name</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">Promise</span></code>&lt;<code><span class="token property">any</span></code>&gt;</p><p>plugin exported object</p><hr><h3 id="unload" tabindex="-1"><a class="header-anchor" href="#unload" aria-hidden="true">#</a> unload</h3><p>\u25B8 <strong>unload</strong>(<code><span class="token property">packageName</span></code>): <code><span class="token property">Promise</span></code>&lt;<code><span class="token property">boolean</span></code>&gt;</p><p>Unload a plugin. Using the plugin exported object is an undefined behavior after unloading.</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">packageName</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">Promise</span></code>&lt;<code><span class="token property">boolean</span></code>&gt;</p><hr><h3 id="unloadall" tabindex="-1"><a class="header-anchor" href="#unloadall" aria-hidden="true">#</a> unloadAll</h3><p>\u25B8 <strong>unloadAll</strong>(): <code><span class="token property">Promise</span></code>&lt;<code><span class="token keyword">void</span></code>&gt;</p><p>Unload all plugins. Using the plugin exported object is an undefined behavior after unloading.</p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">Promise</span></code>&lt;<code><span class="token keyword">void</span></code>&gt;</p>`,26);function h(k,g){const e=r("RouterLink");return l(),c("div",null,[n("p",null,[s(e,{to:"/en/v9/generated/"},{default:t(()=>[a("Auto.js Pro 9 Docs")]),_:1}),a(" / plugins")]),i,n("ul",null,[n("li",null,[s(e,{to:"/en/v9/generated/modules/plugins.html#load"},{default:t(()=>[a("load")]),_:1})]),n("li",null,[s(e,{to:"/en/v9/generated/modules/plugins.html#unload"},{default:t(()=>[a("unload")]),_:1})]),n("li",null,[s(e,{to:"/en/v9/generated/modules/plugins.html#unloadall"},{default:t(()=>[a("unloadAll")]),_:1})])]),u])}const y=p(d,[["render",h],["__file","plugins.html.vue"]]);export{y as default};
