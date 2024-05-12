import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as p,a as n,b as s,d as e,e as t,r as i}from"./app.6aa2b576.js";const l={},r=n("h1",{id:"ocr",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ocr","aria-hidden":"true"},"#"),s(" ocr")],-1),u=n("blockquote",null,[n("p",null,"Added in Pro 9.2 version")],-1),d=n("p",null,"The $ocr module is optical text recognition, which is used to recognize text in pictures. This built-in module is implemented based on PaddleOCR, and you need to download the official PaddleOCR plug-in in the plug-in store of Auto.js Pro before using it. When packaging, the plug-in can be packaged into the apk, and there is no need to install the plug-in separately.",-1),k={href:"https://blog.autojs.org/2022/09/04/mlkit-ocr-plugin/",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="ocr-create-options" tabindex="-1"><a class="header-anchor" href="#ocr-create-options" aria-hidden="true">#</a> $ocr.create([options])</h2><ul><li>options {object} optional parameters, options include the following: <ul><li><code><span class="token property">models</span></code> {string} model, <code><span class="token property">slim</span></code> specifies a model with relatively low accuracy but faster speed, if not specified, it is the <code><span class="token keyword">default</span></code> model, which has higher accuracy but slower speed. You can also directly specify the absolute path of the custom model.</li><li><code><span class="token property">labelsFile</span></code> {string} The label file of the model, the default is <code><span class="token keyword">null</span></code>, it needs to be used with the <code><span class="token property">models</span></code> field.</li><li><code><span class="token property">cpuPowerMode</span></code> {string} CPU mode, default is <code><span class="token constant">LITE_POWER_HIGH</span></code>, optional values are: <ul><li><code><span class="token constant">LITE_POWER_HIGH</span></code> is bound to the large-core operating mode. If the ARM CPU supports big.LITTLE, it will be used first and bound to the Big cluster. If the number of threads set is greater than the number of large cores, the number of threads will be automatically scaled to the number of large cores. If the system does not have a large core or some mobile phones will fail to bind the core when the battery is low, if it fails, it will enter the non-core mode.</li><li><code><span class="token constant">LITE_POWER_LOW</span></code> is bound to the small core operating mode. If the ARM CPU supports big.LITTLE, it will be used first and bound to the Little cluster. If the number of threads set is greater than the number of small cores, the number of threads will be automatically scaled to the number of small cores. If the small core cannot be found, it will automatically enter the mode without binding the core.</li><li><code><span class="token constant">LITE_POWER_FULL</span></code> mixed size core mode. The number of threads can be greater than the number of cores. When the number of threads is greater than the number of cores, the number of threads will be automatically scaled to the number of cores.</li><li><code><span class="token constant">LITE_POWER_NO_BIND</span></code> Run mode without core binding (recommended). The system automatically schedules tasks to idle CPU cores based on load.</li><li><code><span class="token constant">LITE_POWER_RAND_HIGH</span></code> binds the large core mode in turn. If the Big cluster has multiple cores, switch binding to the next core after every 10 predictions.</li><li><code><span class="token constant">LITE_POWER_RAND_LOW</span></code> binds the small core mode in turn. If the Little cluster has multiple cores, switch binding to the next core after every 10 predictions.</li></ul></li><li><code><span class="token property">parallelThreads</span></code> {number} The number of parallel threads, the default is <code><span class="token number">4</span></code></li><li><code><span class="token property">useOpenCL</span></code> {boolean} Whether to use OpenCL, the default is <code><span class="token boolean">false</span></code></li></ul></li><li>return {<a href="#OCR">OCR</a>} returns the new OCR object</li></ul><p>According to the given options, create an OCR object that can be used for text recognition. Generally, there is no need to customize parameters, and a valid OCR object can be created by using <code>$ocr<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>.</p><p>A simple screenshot and text recognition example is as follows:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// To create an OCR object, you need to download the official PaddleOCR plug-in in the plug-in store of Auto.js Pro first.</span>
<span class="token keyword">let</span> ocr <span class="token operator">=</span> $ocr<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">models</span><span class="token operator">:</span> <span class="token string">&#39;slim&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Specify a model with relatively low accuracy but faster speed, if not specified, it will be the default model, with higher accuracy but slower speed</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">requestScreenCapture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">let</span> capture <span class="token operator">=</span> <span class="token function">captureScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

     <span class="token comment">// Detect the screenshot text and calculate the detection time, the first detection takes a long time</span>
     <span class="token comment">// The detection time depends on the image size, content, and text quantity</span>
     <span class="token comment">// You can adjust the detection efficiency by adjusting the thread, CPU mode and other parameters of $ocr.create()</span>
     <span class="token keyword">let</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">let</span> result <span class="token operator">=</span> ocr<span class="token punctuation">.</span><span class="token function">detect</span><span class="token punctuation">(</span>capture<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">let</span> end <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     console<span class="token punctuation">.</span> <span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

     <span class="token function">toastLog</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> detection: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>end <span class="token operator">-</span> start<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ocr<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),m={href:"https://paddle-lite.readthedocs.io/zh/latest/api_reference/java_api_doc.html",target:"_blank",rel:"noopener noreferrer"},f=t(`<h1 id="ocr-1" tabindex="-1"><a class="header-anchor" href="#ocr-1" aria-hidden="true">#</a> OCR</h1><p>The object returned by <code>$ocr<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code> is used for specific text recognition. When the object is no longer needed, the <code><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code> function needs to be called to release the resource.</p><h2 id="ocr-detect-image-options" tabindex="-1"><a class="header-anchor" href="#ocr-detect-image-options" aria-hidden="true">#</a> OCR.detect(image[, options])</h2><ul><li><code><span class="token property">image</span></code> {Image} Image, the image to recognize text.</li><li>options {object} Optional parameters, options optionsinclude the following: <ul><li><code><span class="token property">max</span></code> {number} The upper limit of the number of recognized text, the default is <code><span class="token number">1000</span></code></li><li><code><span class="token property">detectRotation</span></code> {boolean} Whether to detect text rotation, the default is <code><span class="token boolean">false</span></code></li><li><code><span class="token property">region</span></code> {Array} OCR recognition region. is an array of two or four elements. (region[0], region[1]) indicates the upper left corner of the region; region[2]*region[3] indicates the width and height of the region. If only region has only two elements, the region is (region[0], region[1]) to the lower right corner of the image. If the region option is not specified, the recognition region is the entire image. **This option was added in version 9.3. **</li></ul></li><li>Return {Array&lt;<a href="#OCRResult">OCRResult</a>&gt;} an array of text recognition results, including credibility, text content, text range, etc.</li></ul><p>Perform text recognition on the given image according to the given options, and return the text recognition results as an array.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">requestScreenCapture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> ocr <span class="token operator">=</span> $ocr<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> capture <span class="token operator">=</span> <span class="token function">captureScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> ocr<span class="token punctuation">.</span><span class="token function">detect</span><span class="token punctuation">(</span>capture<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Traverse the results and print their text</span>
result<span class="token punctuation">.</span> <span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>text<span class="token punctuation">,</span> item<span class="token punctuation">.</span>confidence<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Filter the text with confidence level above 0.9</span>
<span class="token keyword">let</span> filtered <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span> confidence <span class="token operator">&gt;</span> <span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Fuzzy search text results with &quot;Auto.js&quot;</span>
<span class="token keyword">let</span> autojs <span class="token operator">=</span> filtered<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>text<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;edit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>autojs<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// If it is found, print its reliability, range and midpoint position and click</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>autojs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">confidence = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>autojs<span class="token punctuation">.</span>confidence<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, bounds = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>autojs<span class="token punctuation">.</span>bounds<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, center = (</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>autojs<span class="token punctuation">.</span>bounds<span class="token punctuation">.</span><span class="token function">centerX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>autojs<span class="token punctuation">.</span>bounds<span class="token punctuation">.</span><span class="token function">centerY</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
     autojs<span class="token punctuation">.</span><span class="token function">clickCenter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ocr<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ocr-release" tabindex="-1"><a class="header-anchor" href="#ocr-release" aria-hidden="true">#</a> OCR.release()</h2><p>Release OCR resources. By default, it will be released automatically when the program exits, but please release it in time when OCR is not used to release resources.</p><p>#OCRResult</p><p>The element object of the array returned by <code>$ocr<span class="token punctuation">.</span><span class="token function">detect</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code> contains the reliability of text recognition, text content, text range, text rotation, and the reliability of text rotation.</p><h2 id="ocrresult-confidence" tabindex="-1"><a class="header-anchor" href="#ocrresult-confidence" aria-hidden="true">#</a> OCRResult.confidence</h2><p>*{number}</p><p>The credibility of the OCR text, the range is [0, 1], the closer to 1, the more accurate and credible the result.</p><h2 id="ocrresult-text" tabindex="-1"><a class="header-anchor" href="#ocrresult-text" aria-hidden="true">#</a> OCRResult.text</h2><p>*{string}</p><p>Text content recognized by OCR.</p><h2 id="ocrresult-bounds" tabindex="-1"><a class="header-anchor" href="#ocrresult-bounds" aria-hidden="true">#</a> OCRResult.bounds</h2>`,17),b={href:"/en/v8/widgetsBasedAutomation.html#rect-left",target:"_blank",rel:"noopener noreferrer"},g=t('<p>The range of the recognized text in the picture.</p><h2 id="ocrresult-rotation" tabindex="-1"><a class="header-anchor" href="#ocrresult-rotation" aria-hidden="true">#</a> OCRResult.rotation</h2><p>*{number}</p><p>The rotation angle of the recognized text in the picture ranges from [0, 360), and generally takes values of 0 and 180 degrees. This field is only valid when <code><span class="token property">detectRotation</span></code> is specified as <code><span class="token boolean">true</span></code> when detecting.</p><h2 id="ocrresult-rotationconfidence" tabindex="-1"><a class="header-anchor" href="#ocrresult-rotationconfidence" aria-hidden="true">#</a> OCRResult.rotationConfidence</h2><p>*{number}</p><p>The reliability of the rotation angle of the recognized text, the range is [0, 1]. This field is only valid when <code><span class="token property">detectRotation</span></code> is specified as <code><span class="token boolean">true</span></code> when detecting.</p><h2 id="ocrresult-javaobject" tabindex="-1"><a class="header-anchor" href="#ocrresult-javaobject" aria-hidden="true">#</a> OCRResult.javaObject</h2><p>*{object}</p><p>The original Java object of the OCR recognition result. It is useless in the official PaddleOCR, and additional information may be obtained in other official OCRs, such as lines, fields, and word segmentation.</p><h2 id="ocrresult-clickcenter" tabindex="-1"><a class="header-anchor" href="#ocrresult-clickcenter" aria-hidden="true">#</a> OCRResult.clickCenter()</h2><ul><li>return {boolean}</li></ul><p>Click the midpoint of the OCR result in the image range on the screen, and return whether the click is successful. Actually equivalent to <code><span class="token function">click</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>bounds<span class="token punctuation">.</span><span class="token function">centerX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> result<span class="token punctuation">.</span>bounds<span class="token punctuation">.</span><span class="token function">centerY</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>.</p>',13);function v(y,w){const a=i("ExternalLinkIcon");return c(),p("div",null,[r,u,d,n("p",null,[s("In addition, another Google MLKit-based OCR plugin is officially provided, see "),n("a",k,[s("Official MLKitOCR Plugin"),e(a)]),s(".")]),h,n("p",null,[s("For relevant information, see "),n("a",m,[s("PaddleOCR Documentation"),e(a)]),s(".")]),f,n("ul",null,[n("li",null,[s("{"),n("a",b,[s("Rect"),e(a)]),s("}")])]),g])}const _=o(l,[["render",v],["__file","ocr.html.vue"]]);export{_ as default};
