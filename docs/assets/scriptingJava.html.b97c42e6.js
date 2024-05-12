import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,e as t}from"./app.6aa2b576.js";const e={},p=t(`<h1 id="\u548Cjava\u4EA4\u4E92" tabindex="-1"><a class="header-anchor" href="#\u548Cjava\u4EA4\u4E92" aria-hidden="true">#</a> \u548CJava\u4EA4\u4E92</h1><p>Rhino\u63D0\u4F9B\u4E86\u975E\u5E38\u65B9\u4FBF\u5730\u548CJava\u4EA4\u4E92\u7684\u80FD\u529B\u3002</p><h2 id="liveconnect-\u4E0Ejavascript\u7684java\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#liveconnect-\u4E0Ejavascript\u7684java\u901A\u4FE1" aria-hidden="true">#</a> liveConnect\uFF1A\u4E0EJavaScript\u7684Java\u901A\u4FE1</h2><p>Rhino\u5141\u8BB8\u60A8\u4ECEJavaScript\u4E2D\u521B\u5EFAJava\u7C7B\u5E76\u8C03\u7528Java\u65B9\u6CD5\u3002\u4F8B\u5982:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>builder<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BBF\u95EEjavabean\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EEjavabean\u5C5E\u6027" aria-hidden="true">#</a> \u8BBF\u95EEJavaBean\u5C5E\u6027</h2><p>Java\u7C7B\u53EF\u4EE5\u4F7F\u7528getter\u548CSetter\u65B9\u6CD5\u5B9A\u4E49JavaBean\u5C5E\u6027\u3002\u4F8B\u5982\uFF0C\u4EE5\u4E0B\u7C7B\u5B9A\u4E49\u4E86\u4E24\u4E2A\u5C5E\u6027\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Me</span> <span class="token punctuation">{</span>  
 <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> mAge<span class="token punctuation">;</span> <span class="token punctuation">}</span>  
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> anAge<span class="token punctuation">)</span> <span class="token punctuation">{</span> mAge <span class="token operator">=</span> anAge<span class="token punctuation">;</span> <span class="token punctuation">}</span>  
 <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>  
 <span class="token keyword">private</span> <span class="token keyword">int</span> mAge<span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9A\u4E49\u7684\u4E24\u4E2A\u5C5E\u6027\u662F <em>age_\u548C_sex</em>\u3002 _sex_\u5C5E\u6027\u662F\u53EA\u8BFB\u7684\uFF1A\u5B83\u6CA1\u6709Setter\u3002</p><p>\u4F7F\u7528Rhino\u6211\u4EEC\u53EF\u4EE5\u8BBF\u95EEBean\u5C5E\u6027\uFF0C\u5C31\u50CF\u5B83\u4EEC\u4E00\u6837\u7684JavaScript\u5C5E\u6027\u3002\u6211\u4EEC\u4E5F\u53EF\u4EE5\u7EE7\u7EED\u8C03\u7528\u5B9A\u4E49\u5C5E\u6027\u7684\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> me <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Me</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>me<span class="token punctuation">.</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
me<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>me<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>me<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E_sex_\u5C5E\u6027\u662F\u53EA\u8BFB\u7684\uFF0C\u56E0\u6B64\u6211\u4EEC\u4E0D\u5141\u8BB8\u5199\u5165\u5B83\u3002</p><h2 id="\u5BFC\u5165java\u7C7B\u548C\u5305" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165java\u7C7B\u548C\u5305" aria-hidden="true">#</a> \u5BFC\u5165Java\u7C7B\u548C\u5305</h2><p>\u4E0A\u9762\u6211\u4EEC\u770B\u5230\u4E86importPackage\u51FD\u6570\u7684\u4F7F\u7528\u6765\u4ECE\u7279\u5B9A\u7684Java\u5305\u5BFC\u5165\u6240\u6709\u7C7B\u3002\u8FD8\u6709importClass\uFF0C\u5B83\u5BFC\u5165\u5355\u4E2A\u7C7B\u3002</p><p>\u4F60\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528<code>android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>View</code>\u6765\u8868\u793AAndroid\u4E2D\u7684View\u7C7B\uFF0C\u9ED8\u8BA4\u652F\u6301\u7684\u9876\u7EA7\u5305\u540D\u524D\u7F00\u4E3A<code><span class="token property">com</span></code>, <code><span class="token property">android</span></code>, <code><span class="token property">java</span></code>, <code><span class="token property">org</span></code>\uFF0C\u5BF9\u4E8E\u5176\u4ED6\u5305\u540D\uFF0C\u9700\u8981\u4F7F\u7528<code><span class="token property">Packages</span></code>\u5BF9\u8C61\uFF0C\u6BD4\u5982<code>Packages<span class="token punctuation">.</span>javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>xpath<span class="token punctuation">.</span>XPath</code>\u6216<code>Packages<span class="token punctuation">[</span><span class="token string">&quot;javax.xml.xpath.XPath&quot;</span><span class="token punctuation">]</span></code>\u3002</p><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528<code><span class="token property">importClass</span></code>\u6216<code><span class="token property">importPackage</span></code>\u51FD\u6570\u6765\u5BFC\u5165Java/Android\u4E2D\u7684\u5305\u540D\u6216\u7C7B\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">importClass</span><span class="token punctuation">(</span><span class="token string">&quot;android.view.KeyEvent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6216\u8005</span>
<span class="token keyword">let</span> KeyEvent <span class="token operator">=</span> android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>KeyEvent<span class="token punctuation">;</span>
<span class="token comment">// \u6216\u8005</span>
<span class="token function">importPackage</span><span class="token punctuation">(</span><span class="token string">&quot;android.view&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6269\u5C55java\u7C7B\u5E76\u4F7F\u7528javascript\u5B9E\u73B0java\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55java\u7C7B\u5E76\u4F7F\u7528javascript\u5B9E\u73B0java\u63A5\u53E3" aria-hidden="true">#</a> \u6269\u5C55Java\u7C7B\u5E76\u4F7F\u7528JavaScript\u5B9E\u73B0Java\u63A5\u53E3</h2><p>\u4F8B\u5982\u4E3A\u67D0\u4E2AUI\u4E2D\u7684\u63A7\u4EF6\u8BBE\u7F6E\u70B9\u51FB\u76D1\u542COnClickListener:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;ui&quot;</span><span class="token punctuation">;</span>
$ui<span class="token punctuation">.</span><span class="token function">layout</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>frame<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">&quot;btn&quot;</span> text<span class="token operator">=</span><span class="token string">&quot;BUTTON&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>frame<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> listener <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>View<span class="token punctuation">.</span>OnClickListener</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">view</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;clicked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$ui<span class="token punctuation">.</span>btn<span class="token punctuation">.</span><span class="token function">setOnClickListener</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u952E\u5165<code><span class="token keyword">new</span> <span class="token class-name">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>View<span class="token punctuation">.</span>OnClickListener</span></code>\u65F6\uFF0Crhino\u5B9E\u9645\u4E0A\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u7684Java\u7C7B\uFF0C\u5B83\u5B9E\u73B0\u4E86OnClickListener\u5E76\u5C06\u4ECE\u8BE5\u7C7B\u8F6C\u53D1\u7ED9JavaScript\u5BF9\u8C61\u7684\u8C03\u7528\u3002</p><p>Rhino\u4E5F\u5141\u8BB8\u5C06JavaScript\u51FD\u6570\u76F4\u63A5\u4F20\u9012\u7ED9Java\u65B9\u6CD5\uFF0C\u5982\u679C\u76F8\u5E94\u7684\u53C2\u6570\u662FJava\u63A5\u53E3\uFF0C\u5B83\u5177\u6709\u5355\u4E2A\u65B9\u6CD5\u6216\u5176\u6240\u6709\u65B9\u6CD5\u5177\u6709\u76F8\u540C\u6570\u91CF\u7684\u53C2\u6570\uFF0C\u76F8\u5E94\u7684\u53C2\u6570\u5177\u6709\u76F8\u540C\u7C7B\u578B\u7684\u53C2\u6570\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$ui<span class="token punctuation">.</span>btn<span class="token punctuation">.</span><span class="token function">setOnClickListener</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">view</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;clicked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u82E5Java\u63A5\u53E3\u6709\u591A\u4E2A\u65B9\u6CD5\uFF0C\u5219\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2AJavaScript\u5BF9\u8C61\u6765\u5B9E\u73B0\u4ED6\uFF0C\u6BD4\u5982\u5BF9\u4E8EJava\u63A5\u53E3\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
* Interface definition for a callback to be invoked when this view is attached
* or detached from its window.
*/</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">OnAttachStateChangeListener</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
        * Called when the view is attached to a window.
        * <span class="token keyword">@param</span> <span class="token parameter">v</span> The view that was attached
        */</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onViewAttachedToWindow</span><span class="token punctuation">(</span><span class="token class-name">View</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
        * Called when the view is detached from a window.
        * <span class="token keyword">@param</span> <span class="token parameter">v</span> The view that was detached
        */</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onViewDetachedFromWindow</span><span class="token punctuation">(</span><span class="token class-name">View</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u5728JavaScript\u4E2D\u8FD9\u6837\u5B9E\u73B0\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> listener <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>View<span class="token punctuation">.</span>OnAttachStateChangeListener</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">onViewAttachedToWindow</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">view</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;attached&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onViewDetachedFromWindow</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">view</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;detached&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$ui<span class="token punctuation">.</span>btn<span class="token punctuation">.</span><span class="token function">addOnAttachStateChangeListener</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javaadapter\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#javaadapter\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> JavaAdapter\u6784\u9020\u51FD\u6570</h2><p>\u4F7F\u7528JavaAdapter\u4E5F\u53EF\u4EE5\u7528\u4E8E\u5B9E\u73B0\u63A5\u53E3\uFF0C\u540C\u65F6\u53EF\u4EE5\u7528\u4E8E\u7EE7\u627F\u666E\u901A\u7C7B\u6216\u62BD\u8C61\u7C7B\u3002\u4ED6\u7684\u539F\u7406\u662F\u52A8\u6001\u751F\u6210\u4E00\u4E2A\u7C7B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> listener <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JavaAdapter</span><span class="token punctuation">(</span>android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>View<span class="token punctuation">.</span>OnAttachStateChangeListener<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">onViewAttachedToWindow</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">view</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;attached&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onViewDetachedFromWindow</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">view</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;detached&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6211\u4EEC\u60F3\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3\uFF0C\u5219\uFF1A</p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>let listener = new JavaAdapter(android.view.View.OnAttachStateChangeListener, java.lang.Runnable, {
  onViewAttachedToWindow: function(view) {
    console.log(&#39;attached&#39;);
  },
  onViewDetachedFromWindow: function(view) {
    console.log(&#39;detached&#39;);
  },
  run: function() {
    console.log(&#39;run&#39;);
  }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u8BED\u6CD5\u662F:</p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>new JavaAdapter(java-class, [java-class\uFF0C...]\uFF0Cjavascript-object, [args...])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6700\u591A\u4E00\u4E2Ajava-class\u662Fjava\u7C7B\uFF0C\u5269\u4E0B\u7684java-class\u53C2\u6570\u662F\u63A5\u53E3\u3002\u7ED3\u679C\u5C06\u662F\u7EE7\u627F\u6307\u5B9A\u7684Java\u7C7B\u5E76\u5B9E\u73B0\u6240\u6709\u7684Java\u63A5\u53E3\uFF0C\u5E76\u5C06\u4EFB\u4F55\u8C03\u7528\u8F6C\u53D1\u7ED9javascript-object\u7684\u65B9\u6CD5\u3002args\u53C2\u6570\u7528\u4E8E\u6307\u5B9A\u6784\u9020Java\u7C7B\u7684\u6784\u9020\u51FD\u6570\u3002</p><p>\u6BD4\u5982\u7EE7\u627FView\uFF0C\u91CD\u5199onDraw\u51FD\u6570:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;ui&quot;</span><span class="token punctuation">;</span>

$ui<span class="token punctuation">.</span><span class="token function">layout</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>vertical<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>frame id<span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>vertical<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> paint <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Paint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JavaAdapter</span><span class="token punctuation">(</span>android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>View<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">onDraw</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">canvas</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8C03\u7528\u7236\u7C7BView\u7684onDraw</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">super$onDraw</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span>      
    canvas<span class="token punctuation">.</span><span class="token function">drawRect</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> paint<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// activity\u4E3Aandroid.view.View\u7684\u6784\u9020\u51FD\u6570\u53C2\u6570</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> activity<span class="token punctuation">)</span><span class="token punctuation">;</span>

$ui<span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">addView</span><span class="token punctuation">(</span>view<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),c=[p];function o(i,l){return a(),s("div",null,c)}const d=n(e,[["render",o],["__file","scriptingJava.html.vue"]]);export{d as default};
