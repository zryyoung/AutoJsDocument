import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as p,a as n,b as t,d as e,e as a,r as i}from"./app.6aa2b576.js";const l={},d=a('<h1 id="project-config" tabindex="-1"><a class="header-anchor" href="#project-config" aria-hidden="true">#</a> Project Config</h1><p>In Auto.js Pro, we sometimes need to run not only single files, but also projects. A project is a folder that contains configuration, code files, resource files (images, etc.).</p><p>You can create a new project in Auto.js Pro from the home page, and there are various project modules available (Pro 8.7 and above).</p><h2 id="project-json" tabindex="-1"><a class="header-anchor" href="#project-json" aria-hidden="true">#</a> project.json</h2><p>The <code>project<span class="token punctuation">.</span>json</code> file is used to configure project related parameters, such as master file, startup image, package name and other information.</p>',5),c=n("thead",null,[n("tr",null,[n("th",null,"Parameter name"),n("th",null,"Meaning"),n("th",null,"Type"),n("th",null,"Default value")])],-1),u=n("td",null,"androidResources",-1),h={href:"/project?id=androidresources",target:"_blank",rel:"noopener noreferrer"},m=n("td",null,"Object",-1),g=n("td",null,[t("{"),n("br"),t(' "resDir": "res",'),n("br"),t(' "manifest ": "AndroidManifest.xml"'),n("br"),t("}")],-1),k=n("td",null,"build",-1),b={href:"/project?id=build",target:"_blank",rel:"noopener noreferrer"},v=n("td",null,"Object",-1),f=n("td",null,null,-1),y=n("tr",null,[n("td",null,"assets"),n("td",null,"Reserved field, no effect for now"),n("td",null,"Array<String>"),n("td",null,"[]")],-1),q=n("tr",null,[n("td",null,"encryptLevel"),n("td",null,"encryptionLevel 0-no encryption, 1-local encryption, 2-online encryption (only supported in 8.7+)"),n("td",null,"number"),n("td",null,"0")],-1),_=n("tr",null,[n("td",null,"icon"),n("td",null,"desktop icon"),n("td",null,"string"),n("td",null,'"icons/icon.png"')],-1),j=n("tr",null,[n("td",null,"ignore"),n("td",null,"Ignore files when syncing projects from VSCode"),n("td",null,"Array"),n("td",null,'["build"]')],-1),x=n("td",null,"launchConfig",-1),w={href:"/project?id=launchconfig",target:"_blank",rel:"noopener noreferrer"},T=n("td",null,"Object",-1),A=n("td",null,null,-1),P=n("tr",null,[n("td",null,"main"),n("td",null,"The entry file"),n("td",null,"string"),n("td",null,'"main.js"')],-1),C=n("tr",null,[n("td",null,"name"),n("td",null,"app name"),n("td",null,"string"),n("td",null,'""')],-1),O=n("td",null,"optimization",-1),I={href:"/project?id=optimization",target:"_blank",rel:"noopener noreferrer"},S=n("td",null,"Object",-1),E=n("td",null,null,-1),z=n("tr",null,[n("td",null,"packageName"),n("td",null,"Package name, must conform to Android package name specification, and the package name must be unique when uploading to the store"),n("td",null,"string"),n("td",null,'""')],-1),L=n("td",null,"permissionConfig",-1),R={href:"/project?id=permissionconfig",target:"_blank",rel:"noopener noreferrer"},N=n("td",null,"Object",-1),V=n("td",null,[t("{"),n("br"),t(' "manifestPermissions": [],'),n("br"),t(' "requestListOnStartup": []'),n("br"),t("}")],-1),M=n("td",null,"publish",-1),F={href:"/project?id=publish",target:"_blank",rel:"noopener noreferrer"},U=n("td",null,"Object",-1),D=n("td",null,null,-1),W=n("tr",null,[n("td",null,"scripts"),n("td",null,[t("The configuration of scripts that are automatically triggered to run when building, etc., see "),n("a",{href:"#scripts"},"scripts")]),n("td",null,"Object"),n("td")],-1),B=n("tr",null,[n("td",null,"versionCode"),n("td",null,"version number"),n("td",null,"number"),n("td",null,"1")],-1),J=n("tr",null,[n("td",null,"versionName"),n("td",null,"name of the version to show to the user"),n("td",null,"string"),n("td",null,'"1.0.0"')],-1),X=a(`<p>Example of full configuration.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
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
    <span class="token string-property property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Other&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;details&quot;</span><span class="token operator">:</span> <span class="token string">&quot;control stroke, gradient, ripple, text gradient&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;maxAutoJsVersion&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;minAutoJsVersion&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;maxProVersion&quot;</span><span class="token operator">:</span> <span class="token number">8059999</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;minProVersion&quot;</span><span class="token operator">:</span> <span class="token number">8050000</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;minSdkVersion&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;permissions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;summary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;control stroke, gradient, water ripple, text gradient&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;versionCode&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;versionName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Minimum configuration example.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;New Project&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main.js&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;build&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;packageName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.example&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;versionName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;versionCode&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="androidresources" tabindex="-1"><a class="header-anchor" href="#androidresources" aria-hidden="true">#</a> androidResources</h3><p>Parameters used to configure Android native interface, see Example-&gt;Complex Interface-&gt;Android Native Interface.</p><table><thead><tr><th>parameter name</th><th>meaning</th><th>type</th><th>default</th></tr></thead><tbody><tr><td>resDir</td><td>Android resource folder</td><td>string</td><td>&quot;res&quot;</td></tr><tr><td>manifest</td><td>The path to the AndroidManifest.xml file</td><td>string</td><td>&quot;AndroidManifest.xml&quot;</td></tr></tbody></table><h3 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h3><p>The automatically generated build information, including build time, build number, etc., please do not modify.</p><p>The package software will determine whether to unpack the files of the installation package to the data path according to the information here. (The confidence here will be updated after each package, so the project files in the local data can be updated automatically after installation)</p><table><thead><tr><th>Parameter Name</th><th>Meaning</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>build_id</td><td>Auto-generated build id</td><td>string</td><td>&quot;&quot;</td></tr><tr><td>build_number</td><td>Build number, incremented by 1 per build</td><td>number</td><td>1</td></tr><tr><td>build_time</td><td>last build time</td><td>number</td><td>current 13-bit timestamp</td></tr><tr><td>release</td><td>Whether or not the project is a packaged project, this is an auto-generated field that does not need to be modified</td><td>boolean</td><td>false</td></tr></tbody></table><h3 id="launchconfig" tabindex="-1"><a class="header-anchor" href="#launchconfig" aria-hidden="true">#</a> launchConfig</h3><p>The launch configuration of the packaged project.</p><table><thead><tr><th>parameter name</th><th>meaning</th><th>type</th><th>default</th></tr></thead><tbody><tr><td>displaySplash</td><td>Whether or not to display the launch graph after packaging (even if set to false, the launch graph will still be displayed the first time after packaging)</td><td>boolean</td><td>true</td></tr><tr><td>hideLogs</td><td>Hide the logs after packaging</td><td>boolean</td><td>false</td></tr><tr><td>splashIcon</td><td>The splash interface icon after packaging</td><td>string</td><td>&quot;icons/splashIcon.png&quot;</td></tr><tr><td>splashLayoutXml</td><td>SplashLayoutXml</td><td>The startup image xml, used to customize the startup image after packaging, see Example-&gt;Projects and Packaging-&gt;Customizing the startup image (version 8.5 or above)</td><td>string</td></tr><tr><td>splashText</td><td>Packed startup interface text</td><td>string</td><td>&quot;Powered by Auto.js Pro&quot;</td></tr><tr><td>stableMode</td><td>Whether to run in stable mode after packaging</td><td>boolean</td><td>false</td></tr></tbody></table><h3 id="permissionconfig" tabindex="-1"><a class="header-anchor" href="#permissionconfig" aria-hidden="true">#</a> permissionConfig</h3><blockquote><p>Added in Pro 8.8.1</p></blockquote><p>Custom permission configuration, including the permissions list of the built apk, and the permission list to request when starting up.</p><p>You can also use the Auto.js Pro permission settings UI to modify permission config.</p><table><thead><tr><th>parameter</th><th>meaning</th><th>type</th><th>default</th></tr></thead><tbody><tr><td>manifestPermissions</td><td>The declared permission list. For compatibility with the old version, if the field is null, the default is 122 built-in permissions.</td><td>Array&lt;string&gt;</td><td>null</td></tr><tr><td>requestListOnStartup</td><td>the permission list to request when starting up\uFF0Cpermission must be included in manifestPermissions, otherwise it cannot be requested</td><td>Array&lt;string&gt;</td><td>[&quot;android.permission.WRITE_EXTERNAL_STORAGE&quot;]</td></tr></tbody></table>`,19),K={href:"https://developer.android.com/reference/android/Manifest.permission",target:"_blank",rel:"noopener noreferrer"},G=a(`<h3 id="publish" tabindex="-1"><a class="header-anchor" href="#publish" aria-hidden="true">#</a> publish</h3><p>The configuration for uploading the store publish project.</p><table><thead><tr><th>parameter name</th><th>meaning</th><th>type</th><th>default</th></tr></thead><tbody><tr><td>maxAutoJsVersion</td><td>The maximum autojs version number supported</td><td>number</td><td>0</td></tr><tr><td>maxProVersion</td><td>maximum supported autojspro version</td><td>number</td><td>0</td></tr><tr><td>minAutoJsVersion</td><td>minimum autojs version supported</td><td>number</td><td>0</td></tr><tr><td>minProVersion</td><td>maximum supported autojspro version</td><td>number</td><td>0</td></tr><tr><td>minSdkVersion</td><td>Minimum supported Android versions</td><td>number</td><td>0</td></tr><tr><td>category</td><td>The category of the project to be used as a category when publishing to the store</td><td>string</td><td>&quot;Other&quot;</td></tr><tr><td>details</td><td>Project details, used as project details when publishing to the store</td><td>string</td><td>&quot;&quot;</td></tr><tr><td>permissions</td><td>A list of permissions, such as &quot;root&quot;, which is not available at the moment</td><td>Array&lt;Stirng&gt;</td><td>[]</td></tr><tr><td>summary</td><td>Script feature summary</td><td>string</td><td>&quot;&quot;</td></tr><tr><td>tags</td><td>Script tags, no effect for now since the store doesn&#39;t have tag filtering yet</td><td>Array&lt;String&gt;</td><td>[]</td></tr></tbody></table><h3 id="optimization" tabindex="-1"><a class="header-anchor" href="#optimization" aria-hidden="true">#</a> optimization</h3><p>Optimize the configuration. Currently used to reduce size when packaging.</p><table><thead><tr><th>parameter name</th><th>meaning</th><th>type</th><th>default</th></tr></thead><tbody><tr><td>removeOpenCv</td><td>do not need the images module with opencv</td><td>boolean</td><td>false</td></tr><tr><td>unusedResources</td><td>don&#39;t need built-in icons</td><td>boolean</td><td>false</td></tr></tbody></table><h2 id="ignore-configuration" tabindex="-1"><a class="header-anchor" href="#ignore-configuration" aria-hidden="true">#</a> ignore configuration</h2><blockquote><p>Added in Pro 8.7.6</p></blockquote><p>The ignore configuration file is similar to <code><span class="token punctuation">.</span>gitignore</code>, which is used to configure Auto.js Pro to process the ignored files such as packaging and encryption.</p><p>The rules of ignore file are the same as <code><span class="token punctuation">.</span>gitignore</code>, for example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># / Indicates the directory where the current file is located

# Ignore all directories and files under public
/public/
#Don\u2019t ignore/public/assets, which means a special case, assets files are not ignored
!/public/assets

# Ignore specific files

index.js

# Ignore all js files
*.js

# Ignore a.js b.js
[ab].js

# Matching rules are the same as linux file matching
# Start with a slash &quot;/&quot; to indicate a directory
# Use an asterisk &quot;*&quot; to wildcard multiple characters
# Use a question mark &quot;?&quot; to wildcard a single character
# Use square brackets &quot;[]&quot; to contain a single character match list
# Use an exclamation mark &quot;!&quot; to indicate not to ignore (track) the matched files or directories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="autojs-source-ignore" tabindex="-1"><a class="header-anchor" href="#autojs-source-ignore" aria-hidden="true">#</a> .autojs.source.ignore</h3><p>File path: <code><span class="token punctuation">.</span>autojs<span class="token punctuation">.</span>source<span class="token punctuation">.</span>ignore</code> file in the project folder.</p><p>The files matched by the rules of the file configuration will not be regarded as Auto.js Pro JavaScript source files and will not participate in the encryption process.</p><p>For example, some js files are used for loading on the Web, and you do not want to encrypt them when packaging, you can configure this file to ignore.</p><h3 id="autojs-build-ignore" tabindex="-1"><a class="header-anchor" href="#autojs-build-ignore" aria-hidden="true">#</a> .autojs.build.ignore</h3><p>File path: <code><span class="token punctuation">.</span>autojs<span class="token punctuation">.</span>build<span class="token punctuation">.</span>ignore</code> file under the project folder.</p><p>The file matched by the rules of the file configuration will not participate in the Auto.js Pro packaging apk process, and the final generated apk will not contain the specified file.</p><p>For example, sometimes node_modules is only used during development, and it has been packaged as a single file by tools such as webpack when it is finally packaged. You can configure to ignore the node_modules folder.</p><h3 id="autojs-sync-ignore" tabindex="-1"><a class="header-anchor" href="#autojs-sync-ignore" aria-hidden="true">#</a> .autojs.sync.ignore</h3><p>File path: <code><span class="token punctuation">.</span>autojs<span class="token punctuation">.</span>sync<span class="token punctuation">.</span>ignore</code> file under the project folder.</p><p>The files matched by the rules configured in this file will be ignored when the VSCode plug-in runs, synchronizes, and saves files on the computer. Only available for Pro 9.3+.</p><h2 id="scripts" tabindex="-1"><a class="header-anchor" href="#scripts" aria-hidden="true">#</a> scripts</h2><p>The scripts field is used to configure the shell commands that are automatically executed at times such as building. E.g:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token comment">//...</span>
   <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">&quot;build-apk-pre-prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sh build.sh&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above configuration will automatically run the build.sh script before packaging the apk, so that custom file replacement, obfuscation, etc. can be performed before packaging. In these shell commands, you can use <code>node build<span class="token punctuation">.</span>js</code> to execute js files (pure Node.js environment); currently, it does not support executing js scripts in Auto.js environment.</p><p>The following timings are currently supported:</p><h3 id="triggered-when-building-apk" tabindex="-1"><a class="header-anchor" href="#triggered-when-building-apk" aria-hidden="true">#</a> Triggered when building apk</h3><p>Auto.js Pro builds the apk in several stages:</p><ul><li>Preparation stage: copy project files, apk files, process source files, etc.</li><li>Construction phase: execute aapt compilation, add built-in icon packs, modify and write Manifest files, process plug-ins, etc.</li><li>Optimization phase: remove useless resources, modules, obfuscated components, etc.</li><li>Packaging phase: signing, compressing, cleaning up workspace, etc.</li></ul><p>The sh scripts to be executed can be customized at different stages. In these scripts, information can be obtained through the following environment variables:</p><ul><li><code><span class="token constant">BUILD_APK_WORKSPACE</span></code>: The temporary workspace for the build, that is, the temporary project for decompressing the apk</li><li><code><span class="token constant">BUILD_APK_WORKSPACE_PROJECT</span></code>: The project folder under the workspace, the project will be copied here</li><li><code><span class="token constant">BUILD_APK_OUTPUT</span></code>: target output path of apk</li></ul><p>The current project path can be obtained by commands such as <code><span class="token property">pwd</span></code>.</p><p>The names corresponding to each stage are:</p><ul><li><p><code>build<span class="token operator">-</span>apk<span class="token operator">-</span>pre<span class="token operator">-</span>prepare</code>: Triggered before the prepare phase</p></li><li><p><code>build<span class="token operator">-</span>apk<span class="token operator">-</span>post<span class="token operator">-</span>prepare</code>: Triggered after the exact phase</p></li><li><p><code>build<span class="token operator">-</span>apk<span class="token operator">-</span>pre<span class="token operator">-</span>build</code>: Triggered before the build phase</p></li><li><p><code>build<span class="token operator">-</span>apk<span class="token operator">-</span>post<span class="token operator">-</span>build</code>: Triggered after the build phase</p></li><li><p><code>build<span class="token operator">-</span>apk<span class="token operator">-</span>pre<span class="token operator">-</span>optimize</code>: Triggered before the optimization phase</p></li><li><p><code>build<span class="token operator">-</span>apk<span class="token operator">-</span>post<span class="token operator">-</span>optimize</code>: Triggered after the optimize phase</p></li><li><p><code>build<span class="token operator">-</span>apk<span class="token operator">-</span>pre<span class="token operator">-</span><span class="token keyword">package</span></code>: Triggered before the packaging phase</p></li><li><p><code>build<span class="token operator">-</span>apk<span class="token operator">-</span>post<span class="token operator">-</span><span class="token keyword">package</span></code>: Triggered after the packaging phase</p></li></ul>`,35);function Y(H,Q){const s=i("ExternalLinkIcon");return r(),p("div",null,[d,n("table",null,[c,n("tbody",null,[n("tr",null,[u,n("td",null,[t("Android resources, see "),n("a",h,[t("androidResources"),e(s)])]),m,g]),n("tr",null,[k,n("td",null,[t("Auto-generated build information, no need to modify, see "),n("a",b,[t("build"),e(s)])]),v,f]),y,q,_,j,n("tr",null,[x,n("td",null,[t("Launch configuration, see "),n("a",w,[t("launchConfig"),e(s)])]),T,A]),P,C,n("tr",null,[O,n("td",null,[t("Optimization configuration, see "),n("a",I,[t("optimization"),e(s)])]),S,E]),z,n("tr",null,[L,n("td",null,[t("Permission Config, see "),n("a",R,[t("permissionConfig"),e(s)])]),N,V]),n("tr",null,[M,n("td",null,[t("The publish/upload store configuration, see "),n("a",F,[t("publish"),e(s)])]),U,D]),W,B,J])]),X,n("p",null,[t("For all permission list, see "),n("a",K,[t("Manifest.permission"),e(s)])]),G])}const nn=o(l,[["render",Y],["__file","project.html.vue"]]);export{nn as default};