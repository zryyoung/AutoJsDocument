import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as e,e as a}from"./app.6aa2b576.js";const l={},s=a('<h1 id="colors-\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#colors-\u989C\u8272" aria-hidden="true">#</a> colors - \u989C\u8272</h1><blockquote><p>Stability: 2 - Stable</p></blockquote><p>\u5728Auto.js\u6709\u4E24\u79CD\u65B9\u5F0F\u8868\u793A\u4E00\u4E2A\u989C\u8272\u3002</p><p>\u4E00\u79CD\u662F\u4F7F\u7528\u4E00\u4E2A\u5B57\u7B26\u4E32&quot;#AARRGGBB&quot;\u6216&quot;#RRGGBB&quot;\uFF0C\u5176\u4E2D AA \u662FAlpha\u901A\u9053(\u900F\u660E\u5EA6)\u7684\u503C\uFF0CRR \u662FR\u901A\u9053(\u7EA2\u8272)\u7684\u503C\uFF0CGG \u662FG\u901A\u9053(\u7EFF\u8272)\u7684\u503C\uFF0CBB\u662FB\u901A\u9053(\u84DD\u8272)\u7684\u503C\u3002\u4F8B\u5982&quot;#ffffff&quot;\u8868\u793A\u767D\u8272, &quot;#7F000000&quot;\u8868\u793A\u534A\u900F\u660E\u7684\u9ED1\u8272\u3002</p><p>\u53E6\u4E00\u79CD\u662F\u4F7F\u7528\u4E00\u4E2A16\u8FDB\u5236\u7684&quot;32\u4F4D\u6574\u6570&quot; 0xAARRGGBB \u6765\u8868\u793A\u4E00\u4E2A\u989C\u8272\uFF0C\u4F8B\u5982 <code><span class="token number">0xFF112233</span></code>\u8868\u793A\u989C\u8272&quot;#112233&quot;, <code><span class="token number">0x11223344</span></code>\u8868\u793A\u989C\u8272&quot;#11223344&quot;\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7<code>colors<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>\u628A\u989C\u8272\u6574\u6570\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF0C\u901A\u8FC7<code>colors<span class="token punctuation">.</span><span class="token function">parseColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>\u628A\u989C\u8272\u5B57\u7B26\u4E32\u89E3\u6790\u4E3A\u989C\u8272\u6574\u6570\u3002</p><h2 id="colors-tostring-color" tabindex="-1"><a class="header-anchor" href="#colors-tostring-color" aria-hidden="true">#</a> colors.toString(color)</h2><ul><li><code><span class="token property">color</span></code> {number} \u6574\u6570RGB\u989C\u8272\u503C</li><li>\u8FD4\u56DE {string}</li></ul><p>\u8FD4\u56DE\u989C\u8272\u503C\u7684\u5B57\u7B26\u4E32\uFF0C\u683C\u5F0F\u4E3A &quot;#AARRGGBB&quot;\u3002</p><h2 id="colors-red-color" tabindex="-1"><a class="header-anchor" href="#colors-red-color" aria-hidden="true">#</a> colors.red(color)</h2><ul><li><code><span class="token property">color</span></code> {number | string} \u989C\u8272\u503C</li><li>\u8FD4\u56DE {number}</li></ul><p>\u8FD4\u56DE\u989C\u8272color\u7684R\u901A\u9053\u7684\u503C\uFF0C\u8303\u56F40 ~ 255.</p><h2 id="colors-green-color" tabindex="-1"><a class="header-anchor" href="#colors-green-color" aria-hidden="true">#</a> colors.green(color)</h2><ul><li><code><span class="token property">color</span></code> {number | string} \u989C\u8272\u503C</li><li>\u8FD4\u56DE {number}</li></ul><p>\u8FD4\u56DE\u989C\u8272color\u7684G\u901A\u9053\u7684\u503C\uFF0C\u8303\u56F40 ~ 255.</p><h2 id="colors-blue-color" tabindex="-1"><a class="header-anchor" href="#colors-blue-color" aria-hidden="true">#</a> colors.blue(color)</h2><ul><li><code><span class="token property">color</span></code> {number | string} \u989C\u8272\u503C</li><li>\u8FD4\u56DE {number}</li></ul><p>\u8FD4\u56DE\u989C\u8272color\u7684B\u901A\u9053\u7684\u503C\uFF0C\u8303\u56F40 ~ 255.</p><h2 id="colors-alpha-color" tabindex="-1"><a class="header-anchor" href="#colors-alpha-color" aria-hidden="true">#</a> colors.alpha(color)</h2><ul><li><code><span class="token property">color</span></code> {number | string} \u989C\u8272\u503C</li><li>\u8FD4\u56DE {number}</li></ul><p>\u8FD4\u56DE\u989C\u8272color\u7684Alpha\u901A\u9053\u7684\u503C\uFF0C\u8303\u56F40 ~ 255.</p><h2 id="colors-rgb-red-green-blue" tabindex="-1"><a class="header-anchor" href="#colors-rgb-red-green-blue" aria-hidden="true">#</a> colors.rgb(red, green, blue)</h2><ul><li><code><span class="token property">red</span></code> {number} \u989C\u8272\u7684R\u901A\u9053\u7684\u503C</li><li><code><span class="token property">blue</span></code> {number} \u989C\u8272\u7684G\u901A\u9053\u7684\u503C</li><li><code><span class="token property">green</span></code> {number} \u989C\u8272\u7684B\u901A\u9053\u7684\u503C</li><li>\u8FD4\u56DE {number}</li></ul><p>\u8FD4\u56DE\u8FD9\u4E9B\u989C\u8272\u901A\u9053\u6784\u6210\u7684\u6574\u6570\u989C\u8272\u503C\u3002Alpha\u901A\u9053\u5C06\u662F255\uFF08\u4E0D\u900F\u660E\uFF09\u3002</p><h2 id="colors-argb-alpha-red-green-blue" tabindex="-1"><a class="header-anchor" href="#colors-argb-alpha-red-green-blue" aria-hidden="true">#</a> colors.argb(alpha, red, green, blue)</h2><ul><li><code><span class="token property">alpha</span></code> {number} \u989C\u8272\u7684Alpha\u901A\u9053\u7684\u503C</li><li><code><span class="token property">red</span></code> {number} \u989C\u8272\u7684R\u901A\u9053\u7684\u503C</li><li><code><span class="token property">green</span></code> {number} \u989C\u8272\u7684G\u901A\u9053\u7684\u503C</li><li><code><span class="token property">blue</span></code> {number} \u989C\u8272\u7684B\u901A\u9053\u7684\u503C</li><li>\u8FD4\u56DE {number}</li></ul><p>\u8FD4\u56DE\u8FD9\u4E9B\u989C\u8272\u901A\u9053\u6784\u6210\u7684\u6574\u6570\u989C\u8272\u503C\u3002</p><h2 id="colors-parsecolor-colorstr" tabindex="-1"><a class="header-anchor" href="#colors-parsecolor-colorstr" aria-hidden="true">#</a> colors.parseColor(colorStr)</h2><ul><li><code><span class="token property">colorStr</span></code> {string} \u8868\u793A\u989C\u8272\u7684\u5B57\u7B26\u4E32\uFF0C\u4F8B\u5982&quot;#112233&quot;</li><li>\u8FD4\u56DE {number}</li></ul><p>\u8FD4\u56DE\u989C\u8272\u7684\u6574\u6570\u503C\u3002</p><h1 id="colors-black" tabindex="-1"><a class="header-anchor" href="#colors-black" aria-hidden="true">#</a> colors.BLACK</h1><p>\u9ED1\u8272\uFF0C\u989C\u8272\u503C #FF000000</p><h1 id="colors-dkgray" tabindex="-1"><a class="header-anchor" href="#colors-dkgray" aria-hidden="true">#</a> colors.DKGRAY</h1><p>\u6DF1\u7070\u8272\uFF0C\u989C\u8272\u503C #FF444444</p><h1 id="colors-gray" tabindex="-1"><a class="header-anchor" href="#colors-gray" aria-hidden="true">#</a> colors.GRAY</h1><p>\u7070\u8272\uFF0C\u989C\u8272\u503C #FF888888</p><h1 id="colors-ltgray" tabindex="-1"><a class="header-anchor" href="#colors-ltgray" aria-hidden="true">#</a> colors.LTGRAY</h1><p>\u4EAE\u7070\u8272\uFF0C\u989C\u8272\u503C #FFCCCCCC</p><h1 id="colors-white" tabindex="-1"><a class="header-anchor" href="#colors-white" aria-hidden="true">#</a> colors.WHITE</h1><p>\u767D\u8272\uFF0C\u989C\u8272\u503C #FFFFFFFF</p><h1 id="colors-red" tabindex="-1"><a class="header-anchor" href="#colors-red" aria-hidden="true">#</a> colors.RED</h1><p>\u7EA2\u8272\uFF0C\u989C\u8272\u503C #FFFF0000</p><h1 id="colors-green" tabindex="-1"><a class="header-anchor" href="#colors-green" aria-hidden="true">#</a> colors.GREEN</h1><p>\u7EFF\u8272\uFF0C\u989C\u8272\u503C #FF00FF00</p><h1 id="colors-blue" tabindex="-1"><a class="header-anchor" href="#colors-blue" aria-hidden="true">#</a> colors.BLUE</h1><p>\u84DD\u8272\uFF0C\u989C\u8272\u503C #FF0000FF</p><h1 id="colors-yellow" tabindex="-1"><a class="header-anchor" href="#colors-yellow" aria-hidden="true">#</a> colors.YELLOW</h1><p>\u9EC4\u8272\uFF0C\u989C\u8272\u503C #FFFFFF00</p><h1 id="colors-cyan" tabindex="-1"><a class="header-anchor" href="#colors-cyan" aria-hidden="true">#</a> colors.CYAN</h1><p>\u9752\u8272\uFF0C\u989C\u8272\u503C #FF00FFFF</p><h1 id="colors-magenta" tabindex="-1"><a class="header-anchor" href="#colors-magenta" aria-hidden="true">#</a> colors.MAGENTA</h1><p>\u54C1\u7EA2\u8272\uFF0C\u989C\u8272\u503C #FFFF00FF</p><h1 id="colors-transparent" tabindex="-1"><a class="header-anchor" href="#colors-transparent" aria-hidden="true">#</a> colors.TRANSPARENT</h1><p>\u900F\u660E\uFF0C\u989C\u8272\u503C #00000000</p>',54),c=[s];function n(t,d){return r(),e("div",null,c)}const h=o(l,[["render",n],["__file","colors.html.vue"]]);export{h as default};
