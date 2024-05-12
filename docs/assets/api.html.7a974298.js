import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as n,b as s,d as e,e as i,r as c}from"./app.6aa2b576.js";const l={},u=i(`<h1 id="api\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#api\u6587\u6863" aria-hidden="true">#</a> api\u6587\u6863</h1><p>\u672C\u8282\u4ECB\u7ECD<code><span class="token property">$ui</span></code>\u5BF9\u8C61\u7684API\u6587\u6863\uFF0C\u8FD9\u4E9B\u51FD\u6570\u7EDD\u5927\u90E8\u5206\u9700\u8981\u5728<code><span class="token string">&quot;ui&quot;</span><span class="token punctuation">;</span></code>\u6A21\u5F0F\u4E0B\u624D\u80FD\u8C03\u7528\u3002</p><h2 id="ui-layout-xml" tabindex="-1"><a class="header-anchor" href="#ui-layout-xml" aria-hidden="true">#</a> $ui.layout(xml)</h2><ul><li><code><span class="token property">xml</span></code> {XML} | {string} \u5E03\u5C40XML\u6216\u8005XML\u5B57\u7B26\u4E32</li></ul><p>\u5C06\u5E03\u5C40XML\u6E32\u67D3\u4E3A\u89C6\u56FE\uFF08View\uFF09\u5BF9\u8C61\uFF0C \u5E76\u8BBE\u7F6E\u4E3A\u5F53\u524D\u89C6\u56FE\u3002</p><h2 id="ui-layoutfile-xmlfile" tabindex="-1"><a class="header-anchor" href="#ui-layoutfile-xmlfile" aria-hidden="true">#</a> $ui.layoutFile(xmlFile)</h2><ul><li><code><span class="token property">xml</span></code> {string} \u5E03\u5C40XML\u6587\u4EF6\u7684\u8DEF\u5F84</li></ul><p>\u6B64\u51FD\u6570\u548C<code>ui<span class="token punctuation">.</span>layout</code>\u76F8\u4F3C\uFF0C\u53EA\u4E0D\u8FC7\u5141\u8BB8\u4F20\u5165\u4E00\u4E2Axml\u6587\u4EF6\u8DEF\u5F84\u6765\u6E32\u67D3\u5E03\u5C40\u3002</p><h2 id="ui-inflate-xml-parent-null-attachtoparent-false" tabindex="-1"><a class="header-anchor" href="#ui-inflate-xml-parent-null-attachtoparent-false" aria-hidden="true">#</a> $ui.inflate(xml[, parent = null, attachToParent = false])</h2><ul><li><code><span class="token property">xml</span></code> {string} | {XML} \u5E03\u5C40XML\u6216\u8005XML\u5B57\u7B26\u4E32</li><li><code><span class="token property">parent</span></code> {View} \u7236\u89C6\u56FE</li><li><code><span class="token property">attachToParent</span></code> {boolean} \u662F\u5426\u6E32\u67D3\u7684View\u52A0\u5230\u7236\u89C6\u56FE\u4E2D\uFF0C\u9ED8\u8BA4\u4E3Afalse</li><li>\u8FD4\u56DE {View}</li></ul><p>\u5C06\u5E03\u5C40XML\u6E32\u67D3\u4E3A\u89C6\u56FE\uFF08View\uFF09\u5BF9\u8C61\u3002\u5982\u679C\u8BE5View\u5C06\u4F5C\u4E3A\u67D0\u4E2AView\u7684\u5B50View\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u4F20\u5165<code><span class="token property">parent</span></code>\u53C2\u6570\uFF0C\u8FD9\u6837\u5728\u6E32\u67D3\u65F6\u4F9D\u8D56\u4E8E\u7236\u89C6\u56FE\u7684\u4E00\u4E9B\u5E03\u5C40\u5C5E\u6027\u80FD\u591F\u6B63\u786E\u5E94\u7528\u3002</p><p>\u6B64\u51FD\u6570\u7528\u4E8E\u52A8\u6001\u521B\u5EFA\u3001\u663E\u793AView\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;ui&quot;</span><span class="token punctuation">;</span>

$ui<span class="token punctuation">.</span><span class="token function">layout</span><span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>linear id<span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>linear<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u52A8\u6001\u521B\u5EFA3\u4E2A\u6587\u672C\u63A7\u4EF6\uFF0C\u5E76\u52A0\u5230container\u5BB9\u5668\u4E2D</span>
<span class="token comment">// \u8FD9\u91CC\u4EC5\u4E3A\u5B9E\u4F8B\uFF0C\u5B9E\u9645\u4E0A\u5E76\u4E0D\u63A8\u8350\u8FD9\u79CD\u505A\u6CD5\uFF0C\u5982\u679C\u8981\u5C55\u793A\u5217\u8868\uFF0C</span>
<span class="token comment">// \u4F7F\u7528list\u7EC4\u4EF6\uFF1B\u52A8\u6001\u521B\u5EFA\u5341\u51E0\u4E2A\u3001\u51E0\u5341\u4E2AView\u4F1A\u8BA9\u754C\u9762\u5361\u987F</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> textView <span class="token operator">=</span> $ui<span class="token punctuation">.</span><span class="token function">inflate</span><span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>text textColor<span class="token operator">=</span><span class="token string">&quot;#000000&quot;</span> textSize<span class="token operator">=</span><span class="token string">&quot;14sp&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">,</span> $ui<span class="token punctuation">.</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span>
    textView<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6587\u672C\u63A7\u4EF6&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    $ui<span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">addView</span><span class="token punctuation">(</span>textView<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ui-registerwidget-name-widget" tabindex="-1"><a class="header-anchor" href="#ui-registerwidget-name-widget" aria-hidden="true">#</a> $ui.registerWidget(name, widget)</h2><ul><li><code><span class="token property">name</span></code> {string} \u7EC4\u4EF6\u540D\u79F0</li><li><code><span class="token property">widget</span></code> {Function} \u7EC4\u4EF6</li></ul><p>\u6CE8\u518C\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002\u53C2\u8003\u793A\u4F8B-&gt;\u754C\u9762\u63A7\u4EF6-&gt;\u81EA\u5B9A\u4E49\u63A7\u4EF6\u3002</p><h2 id="ui-isuithread" tabindex="-1"><a class="header-anchor" href="#ui-isuithread" aria-hidden="true">#</a> $ui.isUiThread()</h2><ul><li>\u8FD4\u56DE {boolean}</li></ul><p>\u8FD4\u56DE\u5F53\u524D\u7EBF\u7A0B\u662F\u5426\u662FUI\u7EBF\u7A0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;ui&quot;</span><span class="token punctuation">;</span>

<span class="token function">log</span><span class="token punctuation">(</span>$ui<span class="token punctuation">.</span><span class="token function">isUiThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; true</span>

$threads<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>$ui<span class="token punctuation">.</span><span class="token function">isUiThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ui-findview-id" tabindex="-1"><a class="header-anchor" href="#ui-findview-id" aria-hidden="true">#</a> $ui.findView(id)</h2><ul><li><code><span class="token property">id</span></code> {string} View\u7684ID</li><li>\u8FD4\u56DE {View}</li></ul><p>\u5728\u5F53\u524D\u89C6\u56FE\u4E2D\u6839\u636EID\u67E5\u627E\u76F8\u5E94\u7684\u89C6\u56FE\u5BF9\u8C61\u5E76\u8FD4\u56DE\u3002\u5982\u679C\u5F53\u524D\u672A\u8BBE\u7F6E\u89C6\u56FE\u6216\u627E\u4E0D\u5230\u6B64ID\u7684\u89C6\u56FE\u65F6\u8FD4\u56DE<code><span class="token keyword">null</span></code>\u3002</p><p>\u4E00\u822C\u6211\u4EEC\u90FD\u662F\u901A\u8FC7<code>ui<span class="token punctuation">.</span>xxx</code>\u6765\u83B7\u53D6id\u4E3Axxx\u7684\u63A7\u4EF6\uFF0C\u5982\u679Cxxx\u662F\u4E00\u4E2Aui\u5DF2\u7ECF\u6709\u7684\u5C5E\u6027\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7<code>$ui<span class="token punctuation">.</span><span class="token function">findView</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>\u6765\u83B7\u53D6\u8FD9\u4E2A\u63A7\u4EF6\u3002</p><h2 id="ui-finish" tabindex="-1"><a class="header-anchor" href="#ui-finish" aria-hidden="true">#</a> $ui.finish()</h2><p>\u7ED3\u675F\u5F53\u524D\u6D3B\u52A8\u5E76\u9500\u6BC1\u754C\u9762\u3002</p><h2 id="ui-setcontentview-view" tabindex="-1"><a class="header-anchor" href="#ui-setcontentview-view" aria-hidden="true">#</a> $ui.setContentView(view)</h2><ul><li><code><span class="token property">view</span></code> {View}</li></ul><p>\u5C06\u89C6\u56FE\u5BF9\u8C61\u8BBE\u7F6E\u4E3A\u5F53\u524D\u89C6\u56FE\u3002</p><h2 id="ui-post-callback-delay-0" tabindex="-1"><a class="header-anchor" href="#ui-post-callback-delay-0" aria-hidden="true">#</a> $ui.post(callback[, delay = 0])</h2><ul><li><code><span class="token property">callback</span></code> {Function} \u56DE\u8C03\u51FD\u6570</li><li><code><span class="token property">delay</span></code> {number} \u5EF6\u8FDF\uFF0C\u5355\u4F4D\u6BEB\u79D2</li></ul><p>\u5C06<code><span class="token property">callback</span></code>\u52A0\u5230UI\u7EBF\u7A0B\u7684\u6D88\u606F\u5FAA\u73AF\u4E2D\uFF0C\u5E76\u5EF6\u8FDFdelay\u6BEB\u79D2\u540E\u6267\u884C\uFF08\u4E0D\u80FD\u51C6\u786E\u4FDD\u8BC1\u4E00\u5B9A\u5728delay\u6BEB\u79D2\u540E\u6267\u884C\uFF09\u3002</p><p>\u6B64\u51FD\u6570\u53EF\u4EE5\u7528\u4E8EUI\u7EBF\u7A0B\u4E2D\u5EF6\u65F6\u6267\u884C\u52A8\u4F5C\uFF08sleep\u4E0D\u80FD\u5728UI\u7EBF\u7A0B\u4E2D\u4F7F\u7528\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E8E\u5B50\u7EBF\u7A0B\u4E2D\u66F4\u65B0UI\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;ui&quot;</span><span class="token punctuation">;</span>

ui<span class="token punctuation">.</span><span class="token function">layout</span><span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>frame<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>text id<span class="token operator">=</span><span class="token string">&quot;result&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>frame<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

ui<span class="token punctuation">.</span>result<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u8BA1\u7B97\u4E2D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5728\u5B50\u7EBF\u7A0B\u4E2D\u8BA1\u7B971+ ... + 10000000</span>
threads<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u7531\u4E8E\u4E0D\u80FD\u5728\u5B50\u7EBF\u7A0B\u64CD\u4F5CUI\uFF0C\u6240\u4EE5\u8981\u629B\u5230UI\u7EBF\u7A0B\u6267\u884C</span>
    ui<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        ui<span class="token punctuation">.</span>result<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span> <span class="token function">String</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ui-run-callback" tabindex="-1"><a class="header-anchor" href="#ui-run-callback" aria-hidden="true">#</a> $ui.run(callback)</h2><ul><li><code><span class="token property">callback</span></code> {Function} \u56DE\u8C03\u51FD\u6570</li><li>\u8FD4\u56DE {any} callback\u7684\u6267\u884C\u7ED3\u679C</li></ul><p>\u5C06<code><span class="token property">callback</span></code>\u5728UI\u7EBF\u7A0B\u4E2D\u6267\u884C\u3002\u5982\u679C\u5F53\u524D\u5DF2\u7ECF\u5728UI\u7EBF\u7A0B\u4E2D\uFF0C\u5219\u76F4\u63A5\u6267\u884C<code><span class="token property">callback</span></code>\b\b\uFF1B\u5426\u5219\u5C06<code><span class="token property">callback</span></code>\u629B\u5230UI\u7EBF\u7A0B\u4E2D\u6267\u884C\uFF08\u52A0\u5230UI\u7EBF\u7A0B\u7684\u6D88\u606F\u5FAA\u73AF\u7684\u672B\u5C3E\uFF09\uFF0C<strong>\u5E76\u7B49\u5F85callback\u6267\u884C\u7ED3\u675F(\u963B\u585E\u5F53\u524D\u7EBF\u7A0B)</strong>\u3002</p><h2 id="ui-statusbarcolor-color" tabindex="-1"><a class="header-anchor" href="#ui-statusbarcolor-color" aria-hidden="true">#</a> $ui.statusBarColor(color)</h2><ul><li><code><span class="token property">color</span></code> {string | number} \u989C\u8272</li></ul><p>\u8BBE\u7F6E\u5F53\u524D\u754C\u9762\u7684\u72B6\u6001\u680F\u989C\u8272\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;ui&quot;</span><span class="token punctuation">;</span>
ui<span class="token punctuation">.</span><span class="token function">statusBarColor</span><span class="token punctuation">(</span><span class="token string">&quot;#000000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ui-useandroidresources" tabindex="-1"><a class="header-anchor" href="#ui-useandroidresources" aria-hidden="true">#</a> $ui.useAndroidResources()</h2><p>\u542F\u7528\u4F7F\u7528Android\u7684\u5E03\u5C40(layout)\u3001\u7ED8\u56FE(drawable)\u3001\u52A8\u753B(anim)\u3001\u6837\u5F0F(style)\u7B49\u8D44\u6E90\u7684\u7279\u6027\u3002\u542F\u7528\u8BE5\u7279\u6027\u540E\uFF0C\u5728project.json\u4E2D\u8FDB\u884C\u4EE5\u4E0B\u914D\u7F6E\uFF0C\u5C31\u53EF\u4EE5\u50CF\u5199Android\u539F\u751F\u4E00\u6837\u5199\u754C\u9762\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    androidResources<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;resDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;res&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u8D44\u6E90\u6587\u4EF6\u5939</span>
        <span class="token property">&quot;manifest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AndroidManifest.xml&quot;</span> <span class="token comment">// AndroidManifest\u6587\u4EF6\u8DEF\u5F84</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>res\u6587\u4EF6\u5939\u901A\u5E38\u4E3A\u4EE5\u4E0B\u7ED3\u6784\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">-</span> res
    <span class="token operator">-</span> layout  <span class="token comment">// \u5E03\u5C40\u8D44\u6E90</span>
    <span class="token operator">-</span> drawable <span class="token comment">// \u56FE\u7247\u3001\u5F62\u72B6\u7B49\u8D44\u6E90</span>
    <span class="token operator">-</span> menu <span class="token comment">// \u83DC\u5355\u8D44\u6E90</span>
    <span class="token operator">-</span> values <span class="token comment">// \u6837\u5F0F\u3001\u5B57\u7B26\u4E32\u7B49\u8D44\u6E90</span>
    <span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u53C2\u8003\u793A\u4F8B-&gt;\u590D\u6742\u754C\u9762-&gt;Android\u539F\u751F\u754C\u9762\u3002</p><h2 id="ui-imagecache-cleardiskcache" tabindex="-1"><a class="header-anchor" href="#ui-imagecache-cleardiskcache" aria-hidden="true">#</a> $ui.imageCache.clearDiskCache()</h2>`,48),r={href:"https://pro.autojs.org/",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"\u6E05\u9664UI\u7684\u56FE\u7247\u6587\u4EF6\u7F13\u5B58\uFF0C\u901A\u5E38\u662F\u6E05\u9664\u4F7F\u7528url\u4E0B\u8F7D\u7684\u56FE\u7247\u7F13\u5B58\u3002\uFF08\u6BD4\u5982img\u63A7\u4EF6\u7684url\u94FE\u63A5\u52A0\u8F7D\u7684\u56FE\u7247\uFF09",-1),k=n("p",null,"\u6B64\u51FD\u6570\u4E5F\u53EF\u7528\u4E8E\u6E05\u9664\u81EA\u5B9A\u4E49\u542F\u52A8\u56FE\u4E2D\u7684\u56FE\u7247\u63A7\u4EF6\u7684\u6587\u4EF6\u7F13\u5B58\u3002",-1),v=n("p",null,"\u6B64\u51FD\u6570\u548C\u627E\u56FE\u627E\u8272\u65E0\u5173\uFF0C\u5E76\u4E0D\u4F1A\u6E05\u9664\u56FE\u8272\u76F8\u5173\u7684\u56FE\u7247\u5185\u5B58\u3001\u7F13\u5B58\u3002",-1),m=n("p",null,"\u6B64\u51FD\u6570\u9700\u8981\u82E5\u5728UI\u7EBF\u7A0B\u6267\u884C\uFF0C\u4F1A\u81EA\u52A8\u5207\u6362\u5230IO\u7EBF\u7A0B\u5F02\u6B65\u6267\u884C\uFF0C\u56E0\u6B64\u5728UI\u7EBF\u7A0B\u6267\u884C\u65F6\uFF0C\u51FD\u6570\u8FD4\u56DE\u4E0D\u4EE3\u8868\u6587\u4EF6\u7F13\u5B58\u5DF2\u5168\u90E8\u6E05\u7406\u5B8C\u6BD5\u3002",-1),h=n("h2",{id:"ui-imagecache-clearmemory",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ui-imagecache-clearmemory","aria-hidden":"true"},"#"),s(" $ui.imageCache.clearMemory()")],-1),b={href:"https://pro.autojs.org/",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"\u6E05\u9664UI\u7684\u56FE\u7247\u5185\u5B58\u7F13\u5B58\u3002",-1),f=n("p",null,"\u6B64\u51FD\u6570\u548C\u627E\u56FE\u627E\u8272\u65E0\u5173\uFF0C\u5E76\u4E0D\u4F1A\u6E05\u9664\u56FE\u8272\u76F8\u5173\u7684\u56FE\u7247\u5185\u5B58\u3001\u7F13\u5B58\u3002",-1);function x(y,w){const a=c("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[n("strong",null,[s("["),n("a",r,[s("Pro 8.8.16\u65B0\u589E"),e(a)]),s("]")])]),d,k,v,m,h,n("p",null,[n("strong",null,[s("["),n("a",b,[s("Pro 8.8.16\u65B0\u589E"),e(a)]),s("]")])]),g,f])}const V=t(l,[["render",x],["__file","api.html.vue"]]);export{V as default};
