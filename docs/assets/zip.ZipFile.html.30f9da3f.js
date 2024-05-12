import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as p,a as e,d as a,w as n,b as t,e as l,r}from"./app.6aa2b576.js";const c={},h=e("h1",{id:"interface-zipfile",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interface-zipfile","aria-hidden":"true"},"#"),t(" Interface: ZipFile")],-1),f=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),u=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),y=l(`<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="addfile" tabindex="-1"><a class="header-anchor" href="#addfile" aria-hidden="true">#</a> addFile</h3><p>\u25B8 <strong>addFile</strong>(<code><span class="token property">file</span></code>, <code>options<span class="token operator">?</span></code>): <code><span class="token property">Promise</span></code>&lt;<code><span class="token keyword">void</span></code>&gt;</p><p>Add a file to the ZIP file.</p><p><strong><code><span class="token property">Example</span></code></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> zip <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>&#39;zip<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> zipFile <span class="token operator">=</span> <span class="token keyword">await</span> zip<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;test.zip&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> zipFile<span class="token punctuation">.</span><span class="token function">addFile</span><span class="token punctuation">(</span><span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>`,7),g=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),k=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"file")])]),e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"string")])]),e("td",{style:{"text-align":"left"}},"Local file path")],-1),x=e("td",{style:{"text-align":"left"}},[e("code",null,[t("options"),e("span",{class:"token operator"},"?")])],-1),m={style:{"text-align":"left"}},_=e("code",null,[e("span",{class:"token property"},"ZipOptions")],-1),b=e("td",{style:{"text-align":"left"}},"Compress options",-1),v=l('<h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">Promise</span></code>&lt;<code><span class="token keyword">void</span></code>&gt;</p><hr><h3 id="addfiles" tabindex="-1"><a class="header-anchor" href="#addfiles" aria-hidden="true">#</a> addFiles</h3><p>\u25B8 <strong>addFiles</strong>(<code><span class="token property">fileList</span></code>, <code>options<span class="token operator">?</span></code>): <code><span class="token property">Promise</span></code>&lt;<code><span class="token keyword">void</span></code>&gt;</p><p>Add multiple files to the ZIP file.</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4>',7),F=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),w=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"fileList")])]),e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"string")]),t("[]")]),e("td",{style:{"text-align":"left"}},"Array of local file paths")],-1),P=e("td",{style:{"text-align":"left"}},[e("code",null,[t("options"),e("span",{class:"token operator"},"?")])],-1),Z={style:{"text-align":"left"}},z=e("code",null,[e("span",{class:"token property"},"ZipOptions")],-1),I=e("td",{style:{"text-align":"left"}},"Compress options",-1),N=l('<h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">Promise</span></code>&lt;<code><span class="token keyword">void</span></code>&gt;</p><hr><h3 id="addfolder" tabindex="-1"><a class="header-anchor" href="#addfolder" aria-hidden="true">#</a> addFolder</h3><p>\u25B8 <strong>addFolder</strong>(<code><span class="token property">folder</span></code>, <code>options<span class="token operator">?</span></code>): <code><span class="token property">Promise</span></code>&lt;<code><span class="token keyword">void</span></code>&gt;</p><p>Add a folder to the ZIP file.</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4>',7),R=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),j=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"folder")])]),e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"string")])]),e("td",{style:{"text-align":"left"}},"Folder path")],-1),E=e("td",{style:{"text-align":"left"}},[e("code",null,[t("options"),e("span",{class:"token operator"},"?")])],-1),T={style:{"text-align":"left"}},D=e("code",null,[e("span",{class:"token property"},"ZipOptions")],-1),H=e("td",{style:{"text-align":"left"}},"Compress options",-1),O=l('<h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">Promise</span></code>&lt;<code><span class="token keyword">void</span></code>&gt;</p><hr><h3 id="extractall" tabindex="-1"><a class="header-anchor" href="#extractall" aria-hidden="true">#</a> extractAll</h3><p>\u25B8 <strong>extractAll</strong>(<code><span class="token property">dest</span></code>, <code>options<span class="token operator">?</span></code>): <code><span class="token property">Promise</span></code>&lt;<code><span class="token keyword">void</span></code>&gt;</p><p>Extract all files from the ZIP file to the target path <code><span class="token property">dest</span></code>.</p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4>',7),A=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),L=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"dest")])]),e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"string")])]),e("td",{style:{"text-align":"left"}},"Extract path")],-1),V=e("td",{style:{"text-align":"left"}},[e("code",null,[t("options"),e("span",{class:"token operator"},"?")])],-1),C={style:{"text-align":"left"}},G=e("code",null,[e("span",{class:"token property"},"UnzipOptions")],-1),U=e("td",{style:{"text-align":"left"}},"Extract options",-1),B=l('<h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">Promise</span></code>&lt;<code><span class="token keyword">void</span></code>&gt;</p><hr><h3 id="extractfile" tabindex="-1"><a class="header-anchor" href="#extractfile" aria-hidden="true">#</a> extractFile</h3><p>\u25B8 <strong>extractFile</strong>(<code><span class="token property">file</span></code>, <code><span class="token property">dest</span></code>, <code>options<span class="token operator">?</span></code>, <code>newFileName<span class="token operator">?</span></code>): <code><span class="token property">Promise</span></code>&lt;<code><span class="token keyword">void</span></code>&gt;</p><p>Extract a file from the ZIP file. If the target path is invalid, this method will throw an exception.</p><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4>',7),M=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),W=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"file")])]),e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"string")])]),e("td",{style:{"text-align":"left"}},"File to extract")],-1),q=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"dest")])]),e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"string")])]),e("td",{style:{"text-align":"left"}},"Destination path")],-1),S=e("td",{style:{"text-align":"left"}},[e("code",null,[t("options"),e("span",{class:"token operator"},"?")])],-1),J={style:{"text-align":"left"}},K=e("code",null,[e("span",{class:"token property"},"UnzipOptions")],-1),Q=e("td",{style:{"text-align":"left"}},"Extract options",-1),X=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,[t("newFileName"),e("span",{class:"token operator"},"?")])]),e("td",{style:{"text-align":"left"}},[e("code",null,[e("span",{class:"token property"},"string")])]),e("td",{style:{"text-align":"left"}},"New file name, optional")],-1),Y=l('<h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">Promise</span></code>&lt;<code><span class="token keyword">void</span></code>&gt;</p><hr><h3 id="getfileheader" tabindex="-1"><a class="header-anchor" href="#getfileheader" aria-hidden="true">#</a> getFileHeader</h3><p>\u25B8 <strong>getFileHeader</strong>(<code><span class="token property">file</span></code>): <code><span class="token property">any</span></code></p><p>Get the file header information of the specified file in the ZIP file. The file header information includes the checksum, whether the file is encrypted, comments, etc.</p><h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">file</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td><td style="text-align:left;">File path in the ZIP file</td></tr></tbody></table><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">any</span></code></p>',10),$={href:"https://javadoc.io/doc/net.lingala.zip4j/zip4j/1.3.2/net/lingala/zip4j/model/FileHeader.html",target:"_blank",rel:"noopener noreferrer"},ee=l('<hr><h3 id="getfileheaders" tabindex="-1"><a class="header-anchor" href="#getfileheaders" aria-hidden="true">#</a> getFileHeaders</h3><p>\u25B8 <strong>getFileHeaders</strong>(): <code><span class="token property">any</span></code>[]</p><p>Get the file header information of all files in the ZIP file. The file header information includes the checksum, whether the file is encrypted, comments, etc.</p><h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">any</span></code>[]</p>',6),te={href:"https://javadoc.io/doc/net.lingala.zip4j/zip4j/1.3.2/net/lingala/zip4j/model/FileHeader.html",target:"_blank",rel:"noopener noreferrer"},ae=l('<hr><h3 id="getpath" tabindex="-1"><a class="header-anchor" href="#getpath" aria-hidden="true">#</a> getPath</h3><p>\u25B8 <strong>getPath</strong>(): <code><span class="token property">string</span></code></p><p>Get the path of the current ZIP file.</p><h4 id="returns-7" tabindex="-1"><a class="header-anchor" href="#returns-7" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">string</span></code></p><hr><h3 id="isencrypted" tabindex="-1"><a class="header-anchor" href="#isencrypted" aria-hidden="true">#</a> isEncrypted</h3><p>\u25B8 <strong>isEncrypted</strong>(): <code><span class="token property">boolean</span></code></p><p>Get whether the current ZIP file is an encrypted ZIP file.</p><h4 id="returns-8" tabindex="-1"><a class="header-anchor" href="#returns-8" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">boolean</span></code></p><p>Whether the current ZIP file is an encrypted ZIP file.</p><hr><h3 id="isvalidzipfile" tabindex="-1"><a class="header-anchor" href="#isvalidzipfile" aria-hidden="true">#</a> isValidZipFile</h3><p>\u25B8 <strong>isValidZipFile</strong>(): <code><span class="token property">boolean</span></code></p><p>Get whether the current ZIP file is a valid ZIP file. If the path is not a ZIP file or the file does not exist, return <code><span class="token boolean">false</span></code>.</p><h4 id="returns-9" tabindex="-1"><a class="header-anchor" href="#returns-9" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">boolean</span></code></p><p>Whether the current ZIP file is a valid ZIP file.</p><hr><h3 id="removefile" tabindex="-1"><a class="header-anchor" href="#removefile" aria-hidden="true">#</a> removeFile</h3><p>\u25B8 <strong>removeFile</strong>(<code><span class="token property">file</span></code>): <code><span class="token property">Promise</span></code>&lt;<code><span class="token keyword">void</span></code>&gt;</p><p>Delete a file from the ZIP file. If the file does not exist, this method will throw an exception.</p><p>If the ZIP file is a segmented ZIP file, this method will throw an exception, because the zip specification does not allow updating a segmented ZIP file.</p><h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">file</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td><td style="text-align:left;">File to delete</td></tr></tbody></table><h4 id="returns-10" tabindex="-1"><a class="header-anchor" href="#returns-10" aria-hidden="true">#</a> Returns</h4><p><code><span class="token property">Promise</span></code>&lt;<code><span class="token keyword">void</span></code>&gt;</p><hr><h3 id="setpassword" tabindex="-1"><a class="header-anchor" href="#setpassword" aria-hidden="true">#</a> setPassword</h3><p>\u25B8 <strong>setPassword</strong>(<code><span class="token property">password</span></code>): <code><span class="token keyword">void</span></code></p><p>If the ZIP file is encrypted, you must use this function to set the correct password to decrypt the encrypted file. If you do not set the password, an exception will be thrown when you try to decrypt the encrypted ZIP file.</p><h4 id="parameters-7" tabindex="-1"><a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code><span class="token property">password</span></code></td><td style="text-align:left;"><code><span class="token property">string</span></code></td><td style="text-align:left;">Password</td></tr></tbody></table><h4 id="returns-11" tabindex="-1"><a class="header-anchor" href="#returns-11" aria-hidden="true">#</a> Returns</h4><p><code><span class="token keyword">void</span></code></p>',37);function se(ne,le){const s=r("RouterLink"),o=r("ExternalLinkIcon");return d(),p("div",null,[e("p",null,[a(s,{to:"/en/v9/generated/"},{default:n(()=>[t("Auto.js Pro 9 Docs")]),_:1}),t(" / "),a(s,{to:"/en/v9/generated/modules/zip.html"},{default:n(()=>[t("zip")]),_:1}),t(" / ZipFile")]),h,e("p",null,[a(s,{to:"/en/v9/generated/modules/zip.html"},{default:n(()=>[t("zip")]),_:1}),t(".ZipFile")]),e("p",null,[a(s,{to:"/en/v9/generated/modules/zip.html#open"},{default:n(()=>[t("open")]),_:1}),t("\u8FD4\u56DE\u7684\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5728\u538B\u7F29\u5305\u4E2D\u589E\u5220\u6587\u4EF6\u3001\u83B7\u53D6\u6587\u4EF6\u5934\u4FE1\u606F\u3001\u89E3\u538B\u7B49\u3002")]),f,u,e("ul",null,[e("li",null,[a(s,{to:"/en/v9/generated/interfaces/zip.ZipFile.html#addfile"},{default:n(()=>[t("addFile")]),_:1})]),e("li",null,[a(s,{to:"/en/v9/generated/interfaces/zip.ZipFile.html#addfiles"},{default:n(()=>[t("addFiles")]),_:1})]),e("li",null,[a(s,{to:"/en/v9/generated/interfaces/zip.ZipFile.html#addfolder"},{default:n(()=>[t("addFolder")]),_:1})]),e("li",null,[a(s,{to:"/en/v9/generated/interfaces/zip.ZipFile.html#extractall"},{default:n(()=>[t("extractAll")]),_:1})]),e("li",null,[a(s,{to:"/en/v9/generated/interfaces/zip.ZipFile.html#extractfile"},{default:n(()=>[t("extractFile")]),_:1})]),e("li",null,[a(s,{to:"/en/v9/generated/interfaces/zip.ZipFile.html#getfileheader"},{default:n(()=>[t("getFileHeader")]),_:1})]),e("li",null,[a(s,{to:"/en/v9/generated/interfaces/zip.ZipFile.html#getfileheaders"},{default:n(()=>[t("getFileHeaders")]),_:1})]),e("li",null,[a(s,{to:"/en/v9/generated/interfaces/zip.ZipFile.html#getpath"},{default:n(()=>[t("getPath")]),_:1})]),e("li",null,[a(s,{to:"/en/v9/generated/interfaces/zip.ZipFile.html#isencrypted"},{default:n(()=>[t("isEncrypted")]),_:1})]),e("li",null,[a(s,{to:"/en/v9/generated/interfaces/zip.ZipFile.html#isvalidzipfile"},{default:n(()=>[t("isValidZipFile")]),_:1})]),e("li",null,[a(s,{to:"/en/v9/generated/interfaces/zip.ZipFile.html#removefile"},{default:n(()=>[t("removeFile")]),_:1})]),e("li",null,[a(s,{to:"/en/v9/generated/interfaces/zip.ZipFile.html#setpassword"},{default:n(()=>[t("setPassword")]),_:1})])]),y,e("table",null,[g,e("tbody",null,[k,e("tr",null,[x,e("td",m,[a(s,{to:"/en/v9/generated/interfaces/zip.ZipOptions.html"},{default:n(()=>[_]),_:1})]),b])])]),v,e("table",null,[F,e("tbody",null,[w,e("tr",null,[P,e("td",Z,[a(s,{to:"/en/v9/generated/interfaces/zip.ZipOptions.html"},{default:n(()=>[z]),_:1})]),I])])]),N,e("table",null,[R,e("tbody",null,[j,e("tr",null,[E,e("td",T,[a(s,{to:"/en/v9/generated/interfaces/zip.ZipOptions.html"},{default:n(()=>[D]),_:1})]),H])])]),O,e("table",null,[A,e("tbody",null,[L,e("tr",null,[V,e("td",C,[a(s,{to:"/en/v9/generated/interfaces/zip.UnzipOptions.html"},{default:n(()=>[G]),_:1})]),U])])]),B,e("table",null,[M,e("tbody",null,[W,q,e("tr",null,[S,e("td",J,[a(s,{to:"/en/v9/generated/interfaces/zip.UnzipOptions.html"},{default:n(()=>[K]),_:1})]),Q]),X])]),Y,e("p",null,[e("a",$,[t("FileHeader"),a(o)])]),ee,e("p",null,[t("Array of "),e("a",te,[t("FileHeader"),a(o)])]),ae])}const ie=i(c,[["render",se],["__file","zip.ZipFile.html.vue"]]);export{ie as default};