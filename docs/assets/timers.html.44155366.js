import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,e}from"./app.6aa2b576.js";const t={},c=e(`<h1 id="timers-\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#timers-\u5B9A\u65F6\u5668" aria-hidden="true">#</a> timers - \u5B9A\u65F6\u5668</h1><blockquote><p>Stability: 2 - Stable</p></blockquote><p>timers \u6A21\u5757\u66B4\u9732\u4E86\u4E00\u4E2A\u5168\u5C40\u7684 API\uFF0C\u7528\u4E8E\u5728\u67D0\u4E2A\u672A\u6765\u65F6\u95F4\u6BB5\u8C03\u7528\u8C03\u5EA6\u51FD\u6570\u3002 \u56E0\u4E3A\u5B9A\u65F6\u5668\u51FD\u6570\u662F\u5168\u5C40\u7684\uFF0C\u6240\u4EE5\u4F7F\u7528\u8BE5 API \u65E0\u9700\u8C03\u7528 timers.</p><p>Auto.js \u4E2D\u7684\u8BA1\u65F6\u5668\u51FD\u6570\u5B9E\u73B0\u4E86\u4E0E Web \u6D4F\u89C8\u5668\u63D0\u4F9B\u7684\u5B9A\u65F6\u5668\u7C7B\u4F3C\u7684 API\uFF0C\u9664\u4E86\u5B83\u4F7F\u7528\u4E86\u4E00\u4E2A\u4E0D\u540C\u7684\u5185\u90E8\u5B9E\u73B0\uFF0C\u5B83\u662F\u57FA\u4E8E Android Looper-Handler\u6D88\u606F\u5FAA\u73AF\u673A\u5236\u6784\u5EFA\u7684\u3002\u5176\u5B9E\u73B0\u673A\u5236\u4E0ENode.js\u6BD4\u8F83\u76F8\u4F3C\u3002</p><p>\u4F8B\u5982\uFF0C\u8981\u57285\u79D2\u540E\u53D1\u51FA\u6D88\u606F&quot;hello&quot;:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u4E9B\u5B9A\u65F6\u5668\u4ECD\u7136\u662F\u5355\u7EBF\u7A0B\u7684\u3002\u5982\u679C\u811A\u672C\u4E3B\u4F53\u6709\u8017\u65F6\u64CD\u4F5C\u6216\u6B7B\u5FAA\u73AF\uFF0C\u5219\u8BBE\u5B9A\u7684\u5B9A\u65F6\u5668\u4E0D\u80FD\u88AB\u53CA\u65F6\u6267\u884C\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u8FD9\u91CC\u7684\u8BED\u53E5\u4F1A\u572815\u79D2\u540E\u6267\u884C\u800C\u4E0D\u662F5\u79D2\u540E</span>
    <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u6682\u505C10\u79D2</span>
<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u8FD9\u91CC\u7684\u8BED\u53E5\u6C38\u8FDC\u4E0D\u4F1A\u88AB\u6267\u884C</span>
    <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u6B7B\u5FAA\u73AF</span>
<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setinterval-callback-delay-args" tabindex="-1"><a class="header-anchor" href="#setinterval-callback-delay-args" aria-hidden="true">#</a> setInterval(callback, delay[, ...args])</h2><ul><li><code><span class="token property">callback</span></code> {Function} \u5F53\u5B9A\u65F6\u5668\u5230\u70B9\u65F6\u8981\u8C03\u7528\u7684\u51FD\u6570\u3002</li><li><code><span class="token property">delay</span></code> {number} \u8C03\u7528 callback \u4E4B\u524D\u8981\u7B49\u5F85\u7684\u6BEB\u79D2\u6570\u3002</li><li><code><span class="token operator">...</span>args</code> {any} \u5F53\u8C03\u7528 callback \u65F6\u8981\u4F20\u5165\u7684\u53EF\u9009\u53C2\u6570\u3002</li></ul><p>\u9884\u5B9A\u6BCF\u9694 delay \u6BEB\u79D2\u91CD\u590D\u6267\u884C\u7684 callback\u3002 \u8FD4\u56DE\u4E00\u4E2A\u7528\u4E8E clearInterval() \u7684 id\u3002</p><p>\u5F53 delay \u5C0F\u4E8E 0 \u65F6\uFF0Cdelay \u4F1A\u88AB\u8BBE\u4E3A 0\u3002</p><h2 id="settimeout-callback-delay-args" tabindex="-1"><a class="header-anchor" href="#settimeout-callback-delay-args" aria-hidden="true">#</a> setTimeout(callback, delay[, ...args])</h2><ul><li><code><span class="token property">callback</span></code> {Function} \u5F53\u5B9A\u65F6\u5668\u5230\u70B9\u65F6\u8981\u8C03\u7528\u7684\u51FD\u6570\u3002</li><li><code><span class="token property">delay</span></code> {number} \u8C03\u7528 callback \u4E4B\u524D\u8981\u7B49\u5F85\u7684\u6BEB\u79D2\u6570\u3002</li><li><code><span class="token operator">...</span>args</code> {any} \u5F53\u8C03\u7528 callback \u65F6\u8981\u4F20\u5165\u7684\u53EF\u9009\u53C2\u6570\u3002</li></ul><p>\u9884\u5B9A\u5728 delay \u6BEB\u79D2\u4E4B\u540E\u6267\u884C\u7684\u5355\u6B21 callback\u3002 \u8FD4\u56DE\u4E00\u4E2A\u7528\u4E8E clearTimeout() \u7684 id\u3002</p><p>callback \u53EF\u80FD\u4E0D\u4F1A\u7CBE\u786E\u5730\u5728 delay \u6BEB\u79D2\u88AB\u8C03\u7528\u3002 Auto.js \u4E0D\u80FD\u4FDD\u8BC1\u56DE\u8C03\u88AB\u89E6\u53D1\u7684\u786E\u5207\u65F6\u95F4\uFF0C\u4E5F\u4E0D\u80FD\u4FDD\u8BC1\u5B83\u4EEC\u7684\u987A\u5E8F\u3002 \u56DE\u8C03\u4F1A\u5728\u5C3D\u53EF\u80FD\u63A5\u8FD1\u6240\u6307\u5B9A\u7684\u65F6\u95F4\u4E0A\u8C03\u7528\u3002</p><p>\u5F53 delay \u5C0F\u4E8E 0 \u65F6\uFF0Cdelay \u4F1A\u88AB\u8BBE\u4E3A 0\u3002</p><h2 id="setimmediate-callback-args" tabindex="-1"><a class="header-anchor" href="#setimmediate-callback-args" aria-hidden="true">#</a> setImmediate(callback[, ...args])</h2><ul><li><code><span class="token property">callback</span></code> {Function} \u5728Looper\u5FAA\u73AF\u7684\u5F53\u524D\u56DE\u5408\u7ED3\u675F\u65F6\u8981\u8C03\u7528\u7684\u51FD\u6570\u3002</li><li><code><span class="token operator">...</span>args</code> {any} \u5F53\u8C03\u7528 callback \u65F6\u8981\u4F20\u5165\u7684\u53EF\u9009\u53C2\u6570\u3002</li></ul><p>\u9884\u5B9A\u7ACB\u5373\u6267\u884C\u7684 callback\uFF0C\u5B83\u662F\u5728 I/O \u4E8B\u4EF6\u7684\u56DE\u8C03\u4E4B\u540E\u88AB\u89E6\u53D1\u3002 \u8FD4\u56DE\u4E00\u4E2A\u7528\u4E8E clearImmediate() \u7684 id\u3002</p><p>\u5F53\u591A\u6B21\u8C03\u7528 setImmediate() \u65F6\uFF0Ccallback \u51FD\u6570\u4F1A\u6309\u7167\u5B83\u4EEC\u88AB\u521B\u5EFA\u7684\u987A\u5E8F\u4F9D\u6B21\u6267\u884C\u3002 \u6BCF\u6B21\u4E8B\u4EF6\u5FAA\u73AF\u8FED\u4EE3\u90FD\u4F1A\u5904\u7406\u6574\u4E2A\u56DE\u8C03\u961F\u5217\u3002 \u5982\u679C\u4E00\u4E2A\u7ACB\u5373\u5B9A\u65F6\u5668\u662F\u88AB\u4E00\u4E2A\u6B63\u5728\u6267\u884C\u7684\u56DE\u8C03\u6392\u5165\u961F\u5217\u7684\uFF0C\u5219\u8BE5\u5B9A\u65F6\u5668\u76F4\u5230\u4E0B\u4E00\u6B21\u4E8B\u4EF6\u5FAA\u73AF\u8FED\u4EE3\u624D\u4F1A\u88AB\u89E6\u53D1\u3002</p><p>setImmediate()\u3001setInterval() \u548C setTimeout() \u65B9\u6CD5\u6BCF\u6B21\u90FD\u4F1A\u8FD4\u56DE\u8868\u793A\u9884\u5B9A\u7684\u8BA1\u65F6\u5668\u7684id\u3002 \u5B83\u4EEC\u53EF\u7528\u4E8E\u53D6\u6D88\u5B9A\u65F6\u5668\u5E76\u9632\u6B62\u89E6\u53D1\u3002</p><h2 id="clearinterval-id" tabindex="-1"><a class="header-anchor" href="#clearinterval-id" aria-hidden="true">#</a> clearInterval(id)</h2><ul><li><code><span class="token property">id</span></code> {number} \u4E00\u4E2A setInterval() \u8FD4\u56DE\u7684 id\u3002</li></ul><p>\u53D6\u6D88\u4E00\u4E2A\u7531 setInterval() \u521B\u5EFA\u7684\u5FAA\u73AF\u5B9A\u65F6\u4EFB\u52A1\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u6BCF5\u79D2\u5C31\u53D1\u51FA\u4E00\u6B21hello</span>
<span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//1\u5206\u949F\u540E\u53D6\u6D88\u5FAA\u73AF</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cleartimeout-id" tabindex="-1"><a class="header-anchor" href="#cleartimeout-id" aria-hidden="true">#</a> clearTimeout(id)</h2><ul><li><code><span class="token property">id</span></code> {number} \u4E00\u4E2A setTimeout() \u8FD4\u56DE\u7684 id\u3002</li></ul><p>\u53D6\u6D88\u4E00\u4E2A\u7531 setTimeout() \u521B\u5EFA\u7684\u5B9A\u65F6\u4EFB\u52A1\u3002</p><h2 id="clearimmediate-id" tabindex="-1"><a class="header-anchor" href="#clearimmediate-id" aria-hidden="true">#</a> clearImmediate(id)</h2><ul><li><code><span class="token property">id</span></code> {number} \u4E00\u4E2A setImmediate() \u8FD4\u56DE\u7684 id\u3002</li></ul><p>\u53D6\u6D88\u4E00\u4E2A\u7531 setImmediate() \u521B\u5EFA\u7684 Immediate \u5BF9\u8C61\u3002</p>`,35),p=[c];function l(o,i){return n(),s("div",null,p)}const r=a(t,[["render",l],["__file","timers.html.vue"]]);export{r as default};
