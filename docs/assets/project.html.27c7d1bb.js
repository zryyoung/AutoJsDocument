import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as s,b as t,d as r,e as n,r as i}from"./app.6aa2b576.js";const d={},l=n(`<h1 id="\u9879\u76EE\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u9879\u76EE\u914D\u7F6E\u6587\u4EF6</h1><p>\u5728Auto.js Pro\u4E2D\uFF0C\u6211\u4EEC\u6709\u65F6\u4E0D\u4EC5\u9700\u8981\u8FD0\u884C\u5355\u6587\u4EF6\uFF0C\u8FD8\u6709\u8FD0\u884C\u9879\u76EE\u7684\u9700\u6C42\u3002\u6240\u8C13\u9879\u76EE\uFF0C\u5C31\u662F\u4E00\u4E2A\u5305\u542B\u914D\u7F6E\u3001\u4EE3\u7801\u6587\u4EF6\u3001\u8D44\u6E90\u6587\u4EF6\uFF08\u56FE\u7247\u7B49\uFF09\u7684\u6587\u4EF6\u5939\u3002</p><p>\u5728Auto.js Pro\u4E2D\u53EF\u4EE5\u5728\u4E3B\u9875\u65B0\u5EFA\u9879\u76EE\uFF0C\u6709\u591A\u79CD\u9879\u76EE\u6A21\u5757\u53EF\u4F9B\u9009\u62E9(Pro 8.7\u4EE5\u4E0A)\u3002</p><h2 id="project-json" tabindex="-1"><a class="header-anchor" href="#project-json" aria-hidden="true">#</a> project.json</h2><p><code>project<span class="token punctuation">.</span>json</code>\u6587\u4EF6\u7528\u4E8E\u914D\u7F6E\u9879\u76EE\u7684\u76F8\u5173\u53C2\u6570\uFF0C\u6BD4\u5982\u4E3B\u6587\u4EF6\u3001\u542F\u52A8\u56FE\u3001\u5305\u540D\u7B49\u4FE1\u606F\u3002</p><table><thead><tr><th>\u53C2\u6570\u540D\u79F0</th><th>\u610F\u4E49</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>androidResources</td><td>\u5B89\u5353\u8D44\u6E90\uFF0C\u53C2\u89C1<a href="#androidresources">androidResources</a></td><td>Object</td><td>{<br> &quot;resDir&quot;: &quot;res&quot;,<br> &quot;manifest&quot;: &quot;AndroidManifest.xml&quot;<br>}</td></tr><tr><td>build</td><td>\u81EA\u52A8\u751F\u6210\u7684\u6784\u5EFA\u4FE1\u606F\uFF0C\u65E0\u9700\u4FEE\u6539\uFF0C\u53C2\u89C1<a href="#build">build</a></td><td>Object</td><td></td></tr><tr><td>assets</td><td>\u4FDD\u7559\u5B57\u6BB5\uFF0C\u6682\u65F6\u6CA1\u6709\u4F5C\u7528</td><td>string[]</td><td>[]</td></tr><tr><td>encryptLevel</td><td>\u52A0\u5BC6\u7EA7\u522B 0-\u4E0D\u52A0\u5BC6, 1-\u672C\u5730\u52A0\u5BC6, 2-\u5728\u7EBF\u52A0\u5BC6(\u4EC5\u57288.7\u4EE5\u4E0A\u7248\u672C\u652F\u6301)</td><td>number</td><td>0</td></tr><tr><td>icon</td><td>\u684C\u9762\u56FE\u6807</td><td>string</td><td>&quot;icons/icon.png&quot;</td></tr><tr><td>ignore</td><td>\u4ECEVSCode\u4E2D\u540C\u6B65\u9879\u76EE\u65F6\u7684\u5FFD\u7565\u6587\u4EF6\uFF0C\u5728Pro9.3\u4EE5\u4E0A\u7248\u672C\u88AB.autojs.sync.ignore\u6587\u4EF6\u4EE3\u66FF</td><td>string[]</td><td>[&quot;build&quot;]</td></tr><tr><td>launchConfig</td><td>\u542F\u52A8\u914D\u7F6E\uFF0C\u53C2\u89C1<a href="#launchconfig">launchConfig</a></td><td>Object</td><td></td></tr><tr><td>main</td><td>\u5165\u53E3\u6587\u4EF6</td><td>string</td><td>&quot;main.js&quot;</td></tr><tr><td>name</td><td>app\u540D\u5B57</td><td>string</td><td>&quot;&quot;</td></tr><tr><td>optimization</td><td>\u4F18\u5316\u914D\u7F6E\uFF0C\u53C2\u89C1<a href="#optimization">optimization</a></td><td>Object</td><td></td></tr><tr><td>packageName</td><td>\u5305\u540D\uFF0C\u5FC5\u987B\u7B26\u5408Android\u5305\u540D\u89C4\u8303\uFF0C\u53E6\u5916\u4E0A\u4F20\u5546\u5E97\u65F6\u5305\u540D\u5FC5\u987B\u552F\u4E00</td><td>string</td><td>&quot;&quot;</td></tr><tr><td>permissionConfig</td><td>\u6743\u9650\u914D\u7F6E\uFF0C\u53C2\u89C1<a href="#permissionconfig">permissionConfig</a></td><td>Object</td><td>{<br> &quot;manifestPermissions&quot;: [],<br> &quot;requestListOnStartup&quot;: []<br>}</td></tr><tr><td>publish</td><td>\u53D1\u5E03/\u4E0A\u4F20\u5546\u5E97\u914D\u7F6E\uFF0C\u53C2\u89C1<a href="#publish">publish</a></td><td>Object</td><td></td></tr><tr><td>scripts</td><td>\u6784\u5EFA\u7B49\u65F6\u673A\u81EA\u52A8\u89E6\u53D1\u8FD0\u884C\u7684\u811A\u672C\u914D\u7F6E\uFF0C\u53C2\u89C1<a href="#scripts">scripts</a></td><td>Object</td><td></td></tr><tr><td>useFeatures</td><td>\u7279\u6027<br><strong><code><span class="token property">continuation</span></code></strong> - \u662F\u5426\u4F7F\u7528\u534F\u7A0B\u7279\u6027\uFF0C\u53C2\u89C1\u793A\u4F8B-&gt;\u534F\u7A0B</td><td>string[]</td><td>[]</td></tr><tr><td>versionCode</td><td>\u7248\u672C\u53F7</td><td>number</td><td>1</td></tr><tr><td>versionName</td><td>\u7ED9\u7528\u6237\u770B\u7684\u7248\u672C\u540D\u79F0</td><td>string</td><td>&quot;1.0.0&quot;</td></tr></tbody></table><p>\u5B8C\u6574\u914D\u7F6E\u5B9E\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;androidResources&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;resDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;res&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;manifest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AndroidManifest.xml&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;assets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;build_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6F47F367-1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build_number&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build_time&quot;</span><span class="token operator">:</span> <span class="token number">1615553004812</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;release&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;encryptLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;useFeatures&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;res/icon.png&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;build&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;launchConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;displaySplash&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;hideLogs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;splashIcon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;res/splashIcon.png&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;splashLayoutXml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;splash.xml&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;splashText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Powered by Auto.js Pro&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;stableMode&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Shape3.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;optimization&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;removeOpenCv&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;unusedResources&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;packageName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.suzy.rippledrawable&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;permissionConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;manifestPermissions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;android.permission.WRITE_EXTERNAL_STORAGE&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;requestListOnStartup&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;android.permission.WRITE_EXTERNAL_STORAGE&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;publish&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5176\u4ED6&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;details&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u63A7\u4EF6\u63CF\u8FB9\u3001\u6E10\u53D8\u3001\u6C34\u6CE2\u7EB9\u3001\u6587\u5B57\u6E10\u53D8&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;maxAutoJsVersion&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;minAutoJsVersion&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;maxProVersion&quot;</span><span class="token operator">:</span> <span class="token number">8059999</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;minProVersion&quot;</span><span class="token operator">:</span> <span class="token number">8050000</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;minSdkVersion&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;permissions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;summary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u63A7\u4EF6\u63CF\u8FB9\u3001\u6E10\u53D8\u3001\u6C34\u6CE2\u7EB9\u3001\u6587\u5B57\u6E10\u53D8&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;versionCode&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;versionName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u5C0F\u914D\u7F6E\u5B9E\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u5EFA\u9879\u76EE&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main.js&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;build&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;packageName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.example&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;versionName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;versionCode&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="androidresources" tabindex="-1"><a class="header-anchor" href="#androidresources" aria-hidden="true">#</a> androidResources</h3><p>\u7528\u4E8E\u914D\u7F6EAndroid\u539F\u751F\u754C\u9762\u7684\u53C2\u6570\uFF0C\u53C2\u89C1\u793A\u4F8B-&gt;\u590D\u6742\u754C\u9762-&gt;Android \u539F\u751F\u754C\u9762\u3002</p><table><thead><tr><th>\u53C2\u6570\u540D\u79F0</th><th>\u610F\u4E49</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>resDir</td><td>Android\u8D44\u6E90\u6587\u4EF6\u5939</td><td>string</td><td>&quot;res&quot;</td></tr><tr><td>manifest</td><td>AndroidManifest.xml\u7684\u6587\u4EF6\u8DEF\u5F84</td><td>string</td><td>&quot;AndroidManifest.xml&quot;</td></tr></tbody></table><h3 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h3><p>\u81EA\u52A8\u751F\u6210\u7684\u6784\u5EFA\u4FE1\u606F\uFF0C\u5305\u542B\u6784\u5EFA\u65F6\u95F4\u3001\u6784\u5EFA\u53F7\u7B49\uFF0C\u8BF7\u52FF\u4FEE\u6539\u3002</p><p>\u6253\u5305\u8F6F\u4EF6\u4E2D\uFF0C\u5C06\u6839\u636E\u8FD9\u91CC\u7684\u4FE1\u606F\u5224\u65AD\u662F\u5426\u9700\u8981\u89E3\u538B\u8986\u76D6\u5B89\u88C5\u5305\u7684\u6587\u4EF6\u5230\u6570\u636E\u8DEF\u5F84\u3002\uFF08\u6BCF\u6B21\u6253\u5305\u540E\u8FD9\u91CC\u7684\u4FE1\u5FC3\u4F1A\u66F4\u65B0\uFF0C\u56E0\u6B64\u5B89\u88C5\u540E\u53EF\u4EE5\u81EA\u52A8\u66F4\u65B0\u672C\u5730\u6570\u636E\u4E2D\u7684\u9879\u76EE\u6587\u4EF6\uFF09</p><table><thead><tr><th>\u53C2\u6570\u540D\u79F0</th><th>\u610F\u4E49</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>build_id</td><td>\u81EA\u52A8\u751F\u6210\u7684\u6784\u5EFAid</td><td>string</td><td>&quot;&quot;</td></tr><tr><td>build_number</td><td>\u6784\u5EFA\u53F7\uFF0C\u6BCF\u6B21\u6784\u5EFA\u81EA\u589E1</td><td>number</td><td>1</td></tr><tr><td>build_time</td><td>\u4E0A\u6B21\u6784\u5EFA\u65F6\u95F4</td><td>number</td><td>\u5F53\u524D13\u4F4D\u65F6\u95F4\u6233</td></tr><tr><td>release</td><td>\u662F\u5426\u4E3A\u6253\u5305\u540E\u9879\u76EE\uFF0C\u4E3A\u81EA\u52A8\u751F\u6210\u7684\u5B57\u6BB5\uFF0C\u4E0D\u9700\u8981\u4FEE\u6539</td><td>boolean</td><td>false</td></tr></tbody></table><h3 id="launchconfig" tabindex="-1"><a class="header-anchor" href="#launchconfig" aria-hidden="true">#</a> launchConfig</h3><p>\u6253\u5305\u540E\u7684\u76F8\u5173\u542F\u52A8\u914D\u7F6E\u3002</p><table><thead><tr><th>\u53C2\u6570\u540D\u79F0</th><th>\u610F\u4E49</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>displaySplash</td><td>\u6253\u5305\u540E\u662F\u5426\u663E\u793A\u542F\u52A8\u56FE\uFF08\u5373\u4F7F\u8BBE\u7F6E\u4E3Afalse\uFF0C\u6253\u5305\u540E\u7B2C\u4E00\u6B21\u4E5F\u4ECD\u7136\u4F1A\u663E\u793A\u542F\u52A8\u56FE\uFF09</td><td>boolean</td><td>true</td></tr><tr><td>hideLogs</td><td>\u6253\u5305\u540E\u662F\u5426\u9690\u85CF\u65E5\u5FD7\u754C\u9762</td><td>boolean</td><td>false</td></tr><tr><td>splashIcon</td><td>\u6253\u5305\u540E\u542F\u52A8\u754C\u9762\u56FE\u6807</td><td>string</td><td>&quot;icons/splashIcon.png&quot;</td></tr><tr><td>splashLayoutXml</td><td>\u542F\u52A8\u56FExml\uFF0C\u7528\u4E8E\u6253\u5305\u540E\u81EA\u5B9A\u4E49\u542F\u52A8\u56FE\uFF0C\u53C2\u89C1\u793A\u4F8B-&gt;\u9879\u76EE\u4E0E\u6253\u5305-&gt;\u81EA\u5B9A\u4E49\u542F\u52A8\u56FE (8.5\u4EE5\u4E0A\u7248\u672C)</td><td>string</td><td>&quot;splash.xml&quot;</td></tr><tr><td>splashText</td><td>\u6253\u5305\u540E\u542F\u52A8\u754C\u9762\u6587\u672C</td><td>string</td><td>&quot;Powered by Auto.js Pro&quot;</td></tr><tr><td>stableMode</td><td>\u6253\u5305\u540E\u662F\u5426\u4EE5\u7A33\u5B9A\u6A21\u5F0F\u8FD0\u884C</td><td>boolean</td><td>false</td></tr></tbody></table><h3 id="permissionconfig" tabindex="-1"><a class="header-anchor" href="#permissionconfig" aria-hidden="true">#</a> permissionConfig</h3><blockquote><p>Pro 8.8.1\u65B0\u589E</p></blockquote><p>\u81EA\u5B9A\u4E49\u6743\u9650\u914D\u7F6E\uFF0C\u5305\u62EC\u5E94\u7528\u6253\u5305\u540E\u58F0\u660E\u7684\u6743\u9650\u5217\u8868\u548C\u542F\u52A8\u65F6\u81EA\u52A8\u7533\u8BF7\u7684\u6743\u9650\u5217\u8868\u3002</p><p>\u4E5F\u53EF\u4EE5\u5728\u6253\u5305\u754C\u9762\u4E2D\u4F7F\u7528\u6743\u9650\u914D\u7F6E\u4FEE\u6539\u3002</p><table><thead><tr><th>\u53C2\u6570\u540D\u79F0</th><th>\u610F\u4E49</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>manifestPermissions</td><td>\u6253\u5305\u540E\u5E94\u7528\u58F0\u660E\u7684\u6743\u9650\u5217\u8868\u3002\u4E3A\u4E86\u517C\u5BB9\u65E7\u7248\u672C\u914D\u7F6E\uFF0C\u5982\u679C\u8BE5\u5B57\u6BB5\u4E3Anull\u5219\u9ED8\u8BA4\u4E3A122\u4E2A\u81EA\u5E26\u6743\u9650\u3002</td><td>string[]</td><td>null</td></tr><tr><td>requestListOnStartup</td><td>\u5E94\u7528\u542F\u52A8\u65F6\u81EA\u52A8\u7533\u8BF7\u7684\u6743\u9650\u5217\u8868\uFF0C\u6743\u9650\u52A1\u5FC5\u5305\u542B\u5728manifestPermissions\u4E2D\uFF0C\u5426\u5219\u4F1A\u65E0\u6CD5\u7533\u8BF7</td><td>string[]</td><td>[&quot;android.permission.WRITE_EXTERNAL_STORAGE&quot;]</td></tr></tbody></table>`,25),u={href:"https://developer.android.google.cn/reference/android/Manifest.permission",target:"_blank",rel:"noopener noreferrer"},c=n(`<h3 id="publish" tabindex="-1"><a class="header-anchor" href="#publish" aria-hidden="true">#</a> publish</h3><p>\u4E0A\u4F20\u5546\u5E97\u53D1\u5E03\u9879\u76EE\u7684\u76F8\u5173\u914D\u7F6E\u3002</p><table><thead><tr><th>\u53C2\u6570\u540D\u79F0</th><th>\u610F\u4E49</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>maxAutoJsVersion</td><td>\u652F\u6301\u7684\u6700\u5927autojs\u7248\u672C\u53F7</td><td>number</td><td>0</td></tr><tr><td>maxProVersion</td><td>\u652F\u6301\u7684\u6700\u5927autojspro\u7248\u672C\u53F7</td><td>number</td><td>0</td></tr><tr><td>minAutoJsVersion</td><td>\u652F\u6301\u7684\u6700\u5C0Fautojs\u7248\u672C\u53F7</td><td>number</td><td>0</td></tr><tr><td>minProVersion</td><td>\u652F\u6301\u7684\u6700\u5927autojspro\u7248\u672C\u53F7</td><td>number</td><td>0</td></tr><tr><td>minSdkVersion</td><td>\u652F\u6301\u7684\u6700\u5C0F\u5B89\u5353\u7248\u672C</td><td>number</td><td>0</td></tr><tr><td>category</td><td>\u9879\u76EE\u7C7B\u522B\uFF0C\u7528\u4E8E\u53D1\u5E03\u5728\u5546\u5E97\u65F6\u4F5C\u4E3A\u5206\u7C7B</td><td>string</td><td>&quot;\u5176\u4ED6&quot;</td></tr><tr><td>details</td><td>\u9879\u76EE\u8BE6\u7EC6\u63CF\u8FF0\uFF0C\u7528\u4E8E\u53D1\u5E03\u5728\u5546\u5E97\u65F6\u4F5C\u4E3A\u9879\u76EE\u8BE6\u60C5</td><td>string</td><td>&quot;&quot;</td></tr><tr><td>permissions</td><td>\u6743\u9650\u5217\u8868\uFF0C\u6BD4\u5982&quot;root&quot;\uFF0C\u6682\u65F6\u6CA1\u6709\u4F5C\u7528</td><td>string[]</td><td>[]</td></tr><tr><td>summary</td><td>\u811A\u672C\u529F\u80FD\u7B80\u4ECB</td><td>string</td><td>&quot;&quot;</td></tr><tr><td>tags</td><td>\u811A\u672C\u6807\u7B7E\uFF0C\u7531\u4E8E\u5546\u5E97\u8FD8\u6CA1\u6709\u6807\u7B7E\u8FC7\u6EE4\u529F\u80FD\uFF0C\u6682\u65F6\u6CA1\u6709\u4F5C\u7528</td><td>string[]</td><td>[]</td></tr></tbody></table><h3 id="optimization" tabindex="-1"><a class="header-anchor" href="#optimization" aria-hidden="true">#</a> optimization</h3><p>\u4F18\u5316\u914D\u7F6E\u3002\u76EE\u524D\u7528\u4E8E\u6253\u5305\u65F6\u7F29\u5C0F\u4F53\u79EF\u3002</p><table><thead><tr><th>\u53C2\u6570\u540D\u79F0</th><th>\u610F\u4E49</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>removeOpenCv</td><td>\u4E0D\u9700\u8981\u56FE\u8272\u6A21\u5757</td><td>boolean</td><td>false</td></tr><tr><td>unusedResources</td><td>\u4E0D\u9700\u8981\u5185\u7F6E\u56FE\u6807</td><td>boolean</td><td>false</td></tr></tbody></table><h2 id="ignore\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#ignore\u914D\u7F6E" aria-hidden="true">#</a> ignore\u914D\u7F6E</h2><blockquote><p>Pro 8.7.6\u65B0\u589E</p></blockquote><p>ignore\u914D\u7F6E\u6587\u4EF6\u7C7B\u4F3C\u4E8E<code><span class="token punctuation">.</span>gitignore</code>\uFF0C\u7528\u4E8E\u914D\u7F6EAuto.js Pro\u5904\u7406\u6253\u5305\u3001\u52A0\u5BC6\u7B49\u5FFD\u7565\u7684\u6587\u4EF6\u3002</p><p>ignore\u6587\u4EF6\u7684\u89C4\u5219\u548C<code><span class="token punctuation">.</span>gitignore</code>\u76F8\u540C\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># / \u8868\u793A \u5F53\u524D\u6587\u4EF6\u6240\u5728\u7684\u76EE\u5F55

# \u5FFD\u7565public\u4E0B\u7684\u6240\u6709\u76EE\u5F55\u53CA\u6587\u4EF6
/public/
#\u4E0D\u5FFD\u7565/public/assets\uFF0C\u5C31\u662F\u7279\u4F8B\u7684\u610F\u601D\uFF0Cassets\u6587\u4EF6\u4E0D\u5FFD\u7565
!/public/assets

# \u5FFD\u7565\u5177\u4F53\u7684\u6587\u4EF6

index.js

# \u5FFD\u7565\u6240\u6709\u7684js\u6587\u4EF6
*.js

# \u5FFD\u7565 a.js b.js
[ab].js

# \u5339\u914D\u89C4\u5219\u548Clinux\u6587\u4EF6\u5339\u914D\u4E00\u6837
# \u4EE5\u659C\u6760\u201C/\u201D\u5F00\u5934\u8868\u793A\u76EE\u5F55
# \u4EE5\u661F\u53F7\u201C*\u201D\u901A\u914D\u591A\u4E2A\u5B57\u7B26
# \u4EE5\u95EE\u53F7\u201C?\u201D\u901A\u914D\u5355\u4E2A\u5B57\u7B26
# \u4EE5\u65B9\u62EC\u53F7\u201C[]\u201D\u5305\u542B\u5355\u4E2A\u5B57\u7B26\u7684\u5339\u914D\u5217\u8868
# \u4EE5\u53F9\u53F7\u201C!\u201D\u8868\u793A\u4E0D\u5FFD\u7565(\u8DDF\u8E2A)\u5339\u914D\u5230\u7684\u6587\u4EF6\u6216\u76EE\u5F55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="autojs-source-ignore" tabindex="-1"><a class="header-anchor" href="#autojs-source-ignore" aria-hidden="true">#</a> .autojs.source.ignore</h3><p>\u6587\u4EF6\u8DEF\u5F84\uFF1A\u9879\u76EE\u6587\u4EF6\u5939\u4E0B<code><span class="token punctuation">.</span>autojs<span class="token punctuation">.</span>source<span class="token punctuation">.</span>ignore</code>\u6587\u4EF6\u3002</p><p>\u8BE5\u6587\u4EF6\u914D\u7F6E\u7684\u89C4\u5219\u6240\u5339\u914D\u7684\u6587\u4EF6\uFF0C\u5C06\u4E0D\u89C6\u4E3AAuto.js Pro\u7684JavaScript\u6E90\u7801\u6587\u4EF6\uFF0C\u4E0D\u53C2\u4E0E\u52A0\u5BC6\u8FC7\u7A0B\u3002</p><p>\u4F8B\u5982\u6709\u4E9Bjs\u6587\u4EF6\u662F\u7528\u4E8EWeb\u4E2D\u52A0\u8F7D\u7684\uFF0C\u4E0D\u5E0C\u671B\u5728\u6253\u5305\u65F6\u5C06\u5176\u52A0\u5BC6\uFF0C\u53EF\u4EE5\u914D\u7F6E\u8BE5\u6587\u4EF6\u6765\u5FFD\u7565\u3002</p><h3 id="autojs-build-ignore" tabindex="-1"><a class="header-anchor" href="#autojs-build-ignore" aria-hidden="true">#</a> .autojs.build.ignore</h3><p>\u6587\u4EF6\u8DEF\u5F84\uFF1A\u9879\u76EE\u6587\u4EF6\u5939\u4E0B<code><span class="token punctuation">.</span>autojs<span class="token punctuation">.</span>build<span class="token punctuation">.</span>ignore</code>\u6587\u4EF6\u3002</p><p>\u8BE5\u6587\u4EF6\u914D\u7F6E\u7684\u89C4\u5219\u6240\u5339\u914D\u7684\u6587\u4EF6\uFF0C\u5C06\u4E0D\u53C2\u4E0EAuto.js Pro\u7684\u6253\u5305apk\u8FC7\u7A0B\uFF0C\u6700\u7EC8\u751F\u6210\u7684apk\u4E2D\uFF0C\u5C06\u4E0D\u5305\u542B\u6307\u5B9A\u7684\u6587\u4EF6\u3002</p><p>\u4F8B\u5982\u6709\u65F6node_modules\u4EC5\u5728\u5F00\u53D1\u65F6\u4F7F\u7528\uFF0C\u6700\u7EC8\u6253\u5305\u65F6\u5DF2\u7ECF\u901A\u8FC7webpack\u7B49\u5DE5\u5177\u6253\u5305\u4E3A\u5355\u6587\u4EF6\uFF0C\u5219\u53EF\u4EE5\u914D\u7F6E\u5FFD\u7565node_modules\u6587\u4EF6\u5939\u3002</p><h3 id="autojs-sync-ignore" tabindex="-1"><a class="header-anchor" href="#autojs-sync-ignore" aria-hidden="true">#</a> .autojs.sync.ignore</h3><p>\u6587\u4EF6\u8DEF\u5F84\uFF1A\u9879\u76EE\u6587\u4EF6\u5939\u4E0B<code><span class="token punctuation">.</span>autojs<span class="token punctuation">.</span>sync<span class="token punctuation">.</span>ignore</code>\u6587\u4EF6\u3002</p><p>\u8BE5\u6587\u4EF6\u914D\u7F6E\u7684\u89C4\u5219\u6240\u5339\u914D\u7684\u6587\u4EF6\uFF0C\u5728VSCode\u63D2\u4EF6\u8FD0\u884C\u3001\u540C\u6B65\u3001\u4FDD\u5B58\u7535\u8111\u4E0A\u7684\u6587\u4EF6\u65F6\uFF0C\u5C06\u88AB\u5FFD\u7565\u3002\u4EC5\u9002\u7528\u4E8EPro 9.3\u4EE5\u4E0A\u7248\u672C\u3002</p><h2 id="scripts" tabindex="-1"><a class="header-anchor" href="#scripts" aria-hidden="true">#</a> scripts</h2><p>scripts\u5B57\u6BB5\u7528\u4E8E\u914D\u7F6E\u6784\u5EFA\u7B49\u65F6\u673A\u81EA\u52A8\u6267\u884C\u7684shell\u547D\u4EE4\u3002\u4F8B\u5982\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build-apk-pre-prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sh build.sh&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u914D\u7F6E\u5C06\u5728\u6253\u5305apk\u524D\u81EA\u52A8\u8FD0\u884Cbuild.sh\u811A\u672C\uFF0C\u4ECE\u800C\u53EF\u4EE5\u5728\u6253\u5305\u524D\u8FDB\u884C\u81EA\u5B9A\u4E49\u7684\u6587\u4EF6\u66FF\u6362\u3001\u6DF7\u6DC6\u7B49\u3002\u5728\u8FD9\u4E9Bshell\u547D\u4EE4\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u7528<code>node build<span class="token punctuation">.</span>js</code>\u6765\u6267\u884Cjs\u6587\u4EF6\uFF08\u7EAFNode.js\u73AF\u5883\uFF09\uFF1B\u76EE\u524D\u6682\u4E0D\u652F\u6301\u6267\u884CAuto.js\u73AF\u5883\u7684js\u811A\u672C\u3002</p><p>\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u65F6\u673A\uFF1A</p><h3 id="\u6784\u5EFAapk\u65F6\u89E6\u53D1" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFAapk\u65F6\u89E6\u53D1" aria-hidden="true">#</a> \u6784\u5EFAapk\u65F6\u89E6\u53D1</h3><p>Auto.js Pro\u6784\u5EFAapk\u5206\u4E3A\u51E0\u4E2A\u9636\u6BB5\uFF1A</p><ul><li>\u51C6\u5907\u9636\u6BB5\uFF1A\u62F7\u8D1D\u9879\u76EE\u6587\u4EF6\u3001apk\u6587\u4EF6\uFF0C\u5904\u7406\u6E90\u6587\u4EF6\u7B49</li><li>\u6784\u5EFA\u9636\u6BB5\uFF1A\u6267\u884Caapt\u7F16\u8BD1\uFF0C\u6DFB\u52A0\u5185\u7F6E\u56FE\u6807\u5305\uFF0C\u4FEE\u6539\u5E76\u5199\u5165Manifest\u6587\u4EF6\u3001\u5904\u7406\u63D2\u4EF6\u7B49</li><li>\u4F18\u5316\u9636\u6BB5\uFF1A\u79FB\u9664\u65E0\u7528\u8D44\u6E90\u3001\u6A21\u5757\u3001\u6DF7\u6DC6\u7EC4\u4EF6\u7B49</li><li>\u6253\u5305\u9636\u6BB5\uFF1A\u7B7E\u540D\u3001\u538B\u7F29\u3001\u6E05\u7406\u5DE5\u4F5C\u7A7A\u95F4\u7B49</li></ul><p>\u53EF\u4EE5\u5728\u4E0D\u540C\u9636\u6BB5\u81EA\u5B9A\u4E49\u8981\u6267\u884C\u7684sh\u811A\u672C\u3002\u5728\u8FD9\u4E9B\u811A\u672C\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u73AF\u5883\u53D8\u91CF\u83B7\u53D6\u4FE1\u606F\uFF1A</p><ul><li><code><span class="token constant">BUILD_APK_WORKSPACE</span></code>: \u6784\u5EFA\u7684\u4E34\u65F6\u5DE5\u4F5C\u533A\uFF0C\u4E5F\u5C31\u662F\u89E3\u538Bapk\u7684\u4E34\u65F6\u9879\u76EE</li><li><code><span class="token constant">BUILD_APK_WORKSPACE_PROJECT</span></code>: \u5DE5\u4F5C\u533A\u4E0B\u7684\u9879\u76EE\u6587\u4EF6\u5939\uFF0C\u9879\u76EE\u5C06\u4F1A\u88AB\u590D\u5236\u5230\u8FD9\u91CC</li><li><code><span class="token constant">BUILD_APK_OUTPUT</span></code>\uFF1Aapk\u7684\u76EE\u6807\u8F93\u51FA\u8DEF\u5F84</li></ul><p>\u53EF\u4EE5\u901A\u8FC7<code><span class="token property">pwd</span></code>\u7B49\u547D\u4EE4\u83B7\u53D6\u5F53\u524D\u9879\u76EE\u8DEF\u5F84\u3002</p><p>\u6BCF\u4E2A\u9636\u6BB5\u5BF9\u5E94\u7684\u540D\u79F0\u6709\uFF1A</p><ul><li><p><code>build<span class="token operator">-</span>apk<span class="token operator">-</span>pre<span class="token operator">-</span>prepare</code>: \u51C6\u5907\u9636\u6BB5\u524D\u89E6\u53D1</p></li><li><p><code>build<span class="token operator">-</span>apk<span class="token operator">-</span>post<span class="token operator">-</span>prepare</code>: \u51C6\u786E\u9636\u6BB5\u540E\u89E6\u53D1</p></li><li><p><code>build<span class="token operator">-</span>apk<span class="token operator">-</span>pre<span class="token operator">-</span>build</code>: \u6784\u5EFA\u9636\u6BB5\u524D\u89E6\u53D1</p></li><li><p><code>build<span class="token operator">-</span>apk<span class="token operator">-</span>post<span class="token operator">-</span>build</code>: \u6784\u5EFA\u9636\u6BB5\u540E\u89E6\u53D1</p></li><li><p><code>build<span class="token operator">-</span>apk<span class="token operator">-</span>pre<span class="token operator">-</span>optimize</code>: \u4F18\u5316\u9636\u6BB5\u524D\u89E6\u53D1</p></li><li><p><code>build<span class="token operator">-</span>apk<span class="token operator">-</span>post<span class="token operator">-</span>optimize</code>: \u4F18\u5316\u9636\u6BB5\u540E\u89E6\u53D1</p></li><li><p><code>build<span class="token operator">-</span>apk<span class="token operator">-</span>pre<span class="token operator">-</span><span class="token keyword">package</span></code>: \u6253\u5305\u9636\u6BB5\u524D\u89E6\u53D1</p></li><li><p><code>build<span class="token operator">-</span>apk<span class="token operator">-</span>post<span class="token operator">-</span><span class="token keyword">package</span></code>: \u6253\u5305\u9636\u6BB5\u540E\u89E6\u53D1</p></li></ul>`,35);function k(b,m){const a=i("ExternalLinkIcon");return e(),p("div",null,[l,s("p",null,[t("\u5168\u90E8\u6743\u9650\u5217\u8868\u53C2\u89C1Android\u5B98\u65B9\u6587\u6863\uFF1A"),s("a",u,[t("Manifest.permission"),r(a)])]),c])}const q=o(d,[["render",k],["__file","project.html.vue"]]);export{q as default};
