import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as l,a as s,b as n,d as a,w as u,e,r as p}from"./app.6aa2b576.js";const r={},d=s("h1",{id:"globals-\u5168\u5C40\u53D8\u91CF\u4E0E\u51FD\u6570",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#globals-\u5168\u5C40\u53D8\u91CF\u4E0E\u51FD\u6570","aria-hidden":"true"},"#"),n(" globals - \u5168\u5C40\u53D8\u91CF\u4E0E\u51FD\u6570")],-1),k=e(`<ul><li>exports</li><li>module</li><li>require() \u4EE5\u4E0B\u7684\u5BF9\u8C61\u662F\u7279\u5B9A\u4E8E Auto.js \u7684\u3002 \u6709\u4E9B\u5185\u7F6E\u5BF9\u8C61\u662F JavaScript \u8BED\u8A00\u672C\u8EAB\u7684\u4E00\u90E8\u5206\uFF0C\u5B83\u4EEC\u4E5F\u662F\u5168\u5C40\u7684\u3002</li></ul><p>\u4E00\u4E9B\u6A21\u5757\u4E2D\u7684\u51FD\u6570\u4E3A\u4E86\u4F7F\u7528\u65B9\u4FBF\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5168\u5C40\u4F7F\u7528\uFF0C\u8FD9\u4E9B\u51FD\u6570\u5728\u6B64\u4E0D\u518D\u8D58\u8FF0\u3002\u4F8B\u5982timers\u6A21\u5757\u7684setInterval, setTimeout\u7B49\u51FD\u6570\u3002</p><h2 id="sleep-n" tabindex="-1"><a class="header-anchor" href="#sleep-n" aria-hidden="true">#</a> sleep(n)</h2><ul><li><code><span class="token property">n</span></code> {number} \u6BEB\u79D2\u6570</li></ul><p>\u6682\u505C\u8FD0\u884Cn<strong>\u6BEB\u79D2</strong>\u7684\u65F6\u95F4\u30021\u79D2\u7B49\u4E8E1000\u6BEB\u79D2\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u6682\u505C5\u79D2</span>
<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setclip-text" tabindex="-1"><a class="header-anchor" href="#setclip-text" aria-hidden="true">#</a> setClip(text)</h2><ul><li><code><span class="token property">text</span></code> {string} \u6587\u672C</li></ul><p>\u8BBE\u7F6E\u526A\u8D34\u677F\u5185\u5BB9\u3002\u6B64\u526A\u8D34\u677F\u5373\u7CFB\u7EDF\u526A\u8D34\u677F\uFF0C\u5728\u4E00\u822C\u5E94\u7528\u7684\u8F93\u5165\u6846\u4E2D&quot;\u7C98\u8D34&quot;\u65E2\u53EF\u4F7F\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setClip</span><span class="token punctuation">(</span><span class="token string">&quot;\u526A\u8D34\u677F\u6587\u672C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="getclip" tabindex="-1"><a class="header-anchor" href="#getclip" aria-hidden="true">#</a> getClip()</h2><ul><li>\u8FD4\u56DE {string}</li></ul><p>\u8FD4\u56DE\u7CFB\u7EDF\u526A\u8D34\u677F\u7684\u5185\u5BB9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&quot;\u526A\u8D34\u677F\u5185\u5BB9\u4E3A:&quot;</span> <span class="token operator">+</span> <span class="token function">getClip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="toast-message" tabindex="-1"><a class="header-anchor" href="#toast-message" aria-hidden="true">#</a> toast(message)</h2><ul><li><code><span class="token property">message</span></code> {string} \u8981\u663E\u793A\u7684\u4FE1\u606F</li></ul><p>\u4EE5\u6C14\u6CE1\u663E\u793A\u4FE1\u606Fmessage\u51E0\u79D2\u3002(\u5177\u4F53\u65F6\u95F4\u53D6\u51B3\u4E8E\u5B89\u5353\u7CFB\u7EDF\uFF0C\u4E00\u822C\u90FD\u662F2\u79D2)</p><p>\u6CE8\u610F\uFF0C\u4FE1\u606F\u7684\u663E\u793A\u662F&quot;\u5F02\u6B65&quot;\u6267\u884C\u7684\uFF0C\u5E76\u4E14\uFF0C\u4E0D\u4F1A\u7B49\u5F85\u4FE1\u606F\u6D88\u5931\u7A0B\u5E8F\u624D\u7EE7\u7EED\u6267\u884C\u3002\u5982\u679C\u5728\u5FAA\u73AF\u4E2D\u6267\u884C\u8BE5\u547D\u4EE4\uFF0C\u53EF\u80FD\u51FA\u73B0\u811A\u672C\u505C\u6B62\u8FD0\u884C\u540E\u4ECD\u7136\u6709\u4E0D\u65AD\u7684\u6C14\u6CE1\u4FE1\u606F\u51FA\u73B0\u7684\u60C5\u51B5\u3002 \u4F8B\u5982:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">toast</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u8FD9\u6BB5\u7A0B\u5E8F\u4EE5\u540E\uFF0C\u4F1A\u5F88\u5FEB\u6267\u884C\u5B8C\u6210\uFF0C\u4E14\u4E0D\u65AD\u5F39\u51FA\u6D88\u606F\uFF0C\u5728\u4EFB\u52A1\u7BA1\u7406\u4E2D\u5173\u95ED\u6240\u6709\u811A\u672C\u4E5F\u65E0\u6CD5\u505C\u6B62\u3002 \u8981\u4FDD\u8BC1\u6C14\u6CE1\u6D88\u606F\u624D\u7EE7\u7EED\u6267\u884C\u53EF\u4EE5\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">toast</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005\u4FEE\u6539toast\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> _toast_ <span class="token operator">=</span> toast<span class="token punctuation">;</span>
<span class="token function-variable function">toast</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">_toast_</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">toast</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="toastlog-message" tabindex="-1"><a class="header-anchor" href="#toastlog-message" aria-hidden="true">#</a> toastLog(message)</h2><ul><li><code><span class="token property">message</span></code> {string} \u8981\u663E\u793A\u7684\u4FE1\u606F</li></ul><p>\u76F8\u5F53\u4E8E<code><span class="token function">toast</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></code>\u3002\u663E\u793A\u4FE1\u606Fmessage\u5E76\u5728\u63A7\u5236\u53F0\u4E2D\u8F93\u51FA\u3002\u53C2\u89C1console.log\u3002</p><h2 id="exit" tabindex="-1"><a class="header-anchor" href="#exit" aria-hidden="true">#</a> exit()</h2><p>\u7ACB\u5373\u505C\u6B62\u811A\u672C\u8FD0\u884C\u3002</p><p>\u7ACB\u5373\u505C\u6B62\u662F\u901A\u8FC7\u629B\u51FA<code><span class="token property">ScriptInterruptedException</span></code>\u6765\u5B9E\u73B0\u7684\uFF0C\u56E0\u6B64\u5982\u679C\u7528<code><span class="token keyword">try</span><span class="token operator">...</span>catch</code>\u628Aexit()\u51FD\u6570\u7684\u5F02\u5E38\u6355\u6349\uFF0C\u5219\u811A\u672C\u4E0D\u4F1A\u7ACB\u5373\u505C\u6B62\uFF0C\u4ECD\u4F1A\u8FD0\u884C\u51E0\u884C\u540E\u518D\u505C\u6B62\u3002</p><h2 id="random-min-max" tabindex="-1"><a class="header-anchor" href="#random-min-max" aria-hidden="true">#</a> random(min, max)</h2><ul><li><code><span class="token property">min</span></code> {number} \u968F\u673A\u6570\u4EA7\u751F\u7684\u533A\u95F4\u4E0B\u754C</li><li><code><span class="token property">max</span></code> {number} \u968F\u673A\u6570\u4EA7\u751F\u7684\u533A\u95F4\u4E0A\u754C</li><li>\u8FD4\u56DE {number}</li></ul><p>\u8FD4\u56DE\u4E00\u4E2A\u5728[min...max]\u4E4B\u95F4\u7684\u968F\u673A\u6570\u3002\u4F8B\u5982random(0, 2)\u53EF\u80FD\u4EA7\u751F0, 1, 2\u3002</p><h2 id="random" tabindex="-1"><a class="header-anchor" href="#random" aria-hidden="true">#</a> random()</h2><ul><li>\u8FD4\u56DE {number}</li></ul><p>\u8FD4\u56DE\u5728[0, 1)\u7684\u968F\u673A\u6D6E\u70B9\u6570\u3002</p><h2 id="requiresapi-api" tabindex="-1"><a class="header-anchor" href="#requiresapi-api" aria-hidden="true">#</a> requiresApi(api)</h2><ul><li><code><span class="token property">api</span></code> {number} Android\u7248\u672C\u53F7</li></ul><p>\u8868\u793A\u6B64\u811A\u672C\u9700\u8981Android API\u7248\u672C\u8FBE\u5230\u6307\u5B9A\u7248\u672C\u624D\u80FD\u8FD0\u884C\u3002\u4F8B\u5982<code><span class="token function">requiresApi</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span></code>\u8868\u793A\u811A\u672C\u9700\u8981\u5728Android 4.4\u4EE5\u53CA\u4EE5\u4E0A\u8FD0\u884C\u3002</p><p>\u8C03\u7528\u8BE5\u51FD\u6570\u65F6\u4F1A\u5224\u65AD\u8FD0\u884C\u811A\u672C\u7684\u8BBE\u5907\u7CFB\u7EDF\u7684\u7248\u672C\u53F7\uFF0C\u5982\u679C\u6CA1\u6709\u8FBE\u5230\u8981\u6C42\u5219\u629B\u51FA\u5F02\u5E38\u3002</p><p>\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0BAndroid API\u548C\u7248\u672C\u7684\u5BF9\u7167\u8868:</p><p>\u5E73\u53F0\u7248\u672C\uFF1A API\u7EA7\u522B</p><p>Android 7.0\uFF1A 24</p><p>Android 6.0\uFF1A 23</p><p>Android 5.1\uFF1A 22</p><p>Android 5.0\uFF1A 21</p><p>Android 4.4W\uFF1A 20</p><p>Android 4.4\uFF1A 19</p><p>Android 4.3\uFF1A 18</p><h2 id="requiresautojsversion-version" tabindex="-1"><a class="header-anchor" href="#requiresautojsversion-version" aria-hidden="true">#</a> requiresAutojsVersion(version)</h2><ul><li><code><span class="token property">version</span></code> {string} | {number} Auto.js\u7684\u7248\u672C\u6216\u7248\u672C\u53F7</li></ul><p>\u8868\u793A\u6B64\u811A\u672C\u9700\u8981Auto.js\u7248\u672C\u8FBE\u5230\u6307\u5B9A\u7248\u672C\u624D\u80FD\u8FD0\u884C\u3002\u4F8B\u5982<code><span class="token function">requiresAutojsVersion</span><span class="token punctuation">(</span><span class="token string">&quot;3.0.0 Beta&quot;</span><span class="token punctuation">)</span></code>\u8868\u793A\u811A\u672C\u9700\u8981\u5728Auto.js 3.0.0 Beta\u4EE5\u53CA\u4EE5\u4E0A\u8FD0\u884C\u3002</p><p>\u8C03\u7528\u8BE5\u51FD\u6570\u65F6\u4F1A\u5224\u65AD\u8FD0\u884C\u811A\u672C\u7684Auto.js\u7684\u7248\u672C\u53F7\uFF0C\u5982\u679C\u6CA1\u6709\u8FBE\u5230\u8981\u6C42\u5219\u629B\u51FA\u5F02\u5E38\u3002</p><p>version\u53C2\u6570\u53EF\u4EE5\u662F\u6574\u6570\u8868\u793A\u7248\u672C\u53F7\uFF0C\u4F8B\u5982<code><span class="token function">requiresAutojsVersion</span><span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">)</span></code>\uFF1B\u4E5F\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u683C\u5F0F\u8868\u793A\u7684\u7248\u672C\uFF0C\u4F8B\u5982&quot;3.0.0 Beta&quot;, &quot;3.1.0 Alpha4&quot;, &quot;3.2.0&quot;\u7B49\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7<code>app<span class="token punctuation">.</span>autojs<span class="token punctuation">.</span>versionCode</code>\u548C<code>app<span class="token punctuation">.</span>autojs<span class="token punctuation">.</span>versionName</code>\u83B7\u53D6\u5F53\u524D\u7684Auto.js\u7248\u672C\u53F7\u548C\u7248\u672C\u3002</p><h2 id="runtime-requestpermissions-permissions" tabindex="-1"><a class="header-anchor" href="#runtime-requestpermissions-permissions" aria-hidden="true">#</a> runtime.requestPermissions(permissions)</h2><ul><li><code><span class="token property">permissions</span></code> {string[]} \u6743\u9650\u7684\u5B57\u7B26\u4E32\u6570\u7EC4</li></ul><p>\u52A8\u6001\u7533\u8BF7\u5B89\u5353\u7684\u6743\u9650\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u8BF7\u6C42GPS\u6743\u9650</span>
runtime<span class="token punctuation">.</span><span class="token function">requestPermissions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;access_fine_location&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C3D\u7BA1\u5B89\u5353\u6709\u5F88\u591A\u6743\u9650\uFF0C\u4F46\u5FC5\u987B\u5199\u5165Manifest\u624D\u80FD\u52A8\u6001\u7533\u8BF7\uFF0C\u4E3A\u4E86\u9632\u6B62\u6743\u9650\u7684\u6EE5\u7528\uFF0C\u76EE\u524DAuto.js\u53EA\u80FD\u989D\u5916\u7533\u8BF7\u4E24\u4E2A\u6743\u9650\uFF1A</p><ul><li><code><span class="token property">access_fine_location</span></code> GPS\u6743\u9650</li><li><code><span class="token property">record_audio</span></code> \u5F55\u97F3\u6743\u9650</li></ul><p>\u60A8\u53EF\u4EE5\u901A\u8FC7APK\u7F16\u8F91\u5668\u6765\u589E\u52A0Auto.js\u4EE5\u53CAAuto.js\u6253\u5305\u7684\u5E94\u7528\u7684\u6743\u9650\u3002</p>`,61),m={href:"https://developer.android.com/guide/topics/permissions/overview",target:"_blank",rel:"noopener noreferrer"},v=e(`<h2 id="runtime-loadjar-path" tabindex="-1"><a class="header-anchor" href="#runtime-loadjar-path" aria-hidden="true">#</a> runtime.loadJar(path)</h2><ul><li><code><span class="token property">path</span></code> {string} jar\u6587\u4EF6\u8DEF\u5F84</li></ul><p>\u52A0\u8F7D\u76EE\u6807jar\u6587\u4EF6\uFF0C\u52A0\u8F7D\u6210\u529F\u540E\u5C06\u53EF\u4EE5\u4F7F\u7528\u8BE5Jar\u6587\u4EF6\u7684\u7C7B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u52A0\u8F7Djsoup.jar</span>
runtime<span class="token punctuation">.</span><span class="token function">loadJar</span><span class="token punctuation">(</span><span class="token string">&quot;./jsoup.jar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4F7F\u7528jsoup\u89E3\u6790html</span>
<span class="token function">importClass</span><span class="token punctuation">(</span>org<span class="token punctuation">.</span>jsoup<span class="token punctuation">.</span>Jsoup<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">log</span><span class="token punctuation">(</span>Jsoup<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>files<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&quot;./test.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),h={href:"https://jsoup.org/download",target:"_blank",rel:"noopener noreferrer"},b=e('<h2 id="runtime-loaddex-path" tabindex="-1"><a class="header-anchor" href="#runtime-loaddex-path" aria-hidden="true">#</a> runtime.loadDex(path)</h2><ul><li><code><span class="token property">path</span></code> {string} dex\u6587\u4EF6\u8DEF\u5F84</li></ul><p>\u52A0\u8F7D\u76EE\u6807dex\u6587\u4EF6\uFF0C\u52A0\u8F7D\u6210\u529F\u540E\u5C06\u53EF\u4EE5\u4F7F\u7528\u8BE5dex\u6587\u4EF6\u7684\u7C7B\u3002</p><p>\u56E0\u4E3A\u52A0\u8F7Djar\u5B9E\u9645\u4E0A\u662F\u628Ajar\u8F6C\u6362\u4E3Adex\u518D\u52A0\u8F7D\u7684\uFF0C\u56E0\u6B64\u52A0\u8F7Ddex\u6587\u4EF6\u4F1A\u6BD4jar\u6587\u4EF6\u5FEB\u5F97\u591A\u3002\u53EF\u4EE5\u4F7F\u7528Android SDK\u7684build tools\u7684dx\u5DE5\u5177\u628Ajar\u8F6C\u6362\u4E3Adex\u3002</p><h2 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h2><p>\u5168\u5C40\u53D8\u91CF\u3002\u4E00\u4E2Aandroid.content.Context\u5BF9\u8C61\u3002</p><p>\u6CE8\u610F\u8BE5\u5BF9\u8C61\u4E3AApplicationContext\uFF0C\u56E0\u6B64\u4E0D\u80FD\u7528\u4E8E\u754C\u9762\u3001\u5BF9\u8BDD\u6846\u7B49\u7684\u521B\u5EFA\u3002</p>',7);function g(x,f){const o=p("RouterLink"),t=p("ExternalLinkIcon");return c(),l("div",null,[d,s("p",null,[n("\u5168\u5C40\u53D8\u91CF\u548C\u51FD\u6570\u5728\u6240\u6709\u6A21\u5757\u4E2D\u5747\u53EF\u4F7F\u7528\u3002 \u4F46\u4EE5\u4E0B\u53D8\u91CF\u7684\u4F5C\u7528\u57DF\u53EA\u5728\u6A21\u5757\u5185\uFF0C\u8BE6\u89C1 "),a(o,{to:"/zh/v8/modules.html"},{default:u(()=>[n("module")]),_:1}),n("\uFF1A")]),k,s("p",null,[n("\u5B89\u5353\u6240\u6709\u7684\u6743\u9650\u5217\u8868\u53C2\u89C1"),s("a",m,[n("Permissions Overview"),a(t)]),n("\u3002\uFF08\u5E76\u6CA1\u6709\u7528\uFF09")]),v,s("p",null,[n("(jsoup\u662F\u4E00\u4E2AJava\u5B9E\u73B0\u7684\u89E3\u6790Html DOM\u7684\u5E93\uFF0C\u53EF\u4EE5\u5728"),s("a",h,[n("Jsoup"),a(t)]),n("\u4E0B\u8F7D)")]),b])}const q=i(r,[["render",g],["__file","globals.html.vue"]]);export{q as default};
