import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as s,a as e,d as a,w as r,b as t,e as i,r as d}from"./app.6aa2b576.js";const h={},c=e("h1",{id:"interface-memoryinfo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interface-memoryinfo","aria-hidden":"true"},"#"),t(" Interface: MemoryInfo")],-1),m=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),u=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),f=i('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="availmem" tabindex="-1"><a class="header-anchor" href="#availmem" aria-hidden="true">#</a> availMem</h3><p>\u2022 <strong>availMem</strong>: <code><span class="token property">number</span></code></p><p>The available memory on the system. This number should not be considered absolute: due to the nature of the kernel, a significant portion of this memory is actually in use and needed for the overall system to run well.</p><hr><h3 id="lowmemory" tabindex="-1"><a class="header-anchor" href="#lowmemory" aria-hidden="true">#</a> lowMemory</h3><p>\u2022 <strong>lowMemory</strong>: <code><span class="token property">boolean</span></code></p><p>\u5982\u679C\u4E3Atrue\uFF0C\u5219\u8868\u793A\u7CFB\u7EDF\u5185\u5B58\u4E0D\u8DB3\u3002</p><p>Set to true if the system considers itself to currently be in a low memory situation.</p><hr><h3 id="threshold" tabindex="-1"><a class="header-anchor" href="#threshold" aria-hidden="true">#</a> threshold</h3><p>\u2022 <strong>threshold</strong>: <code><span class="token property">number</span></code></p>',12),p=e("hr",null,null,-1),_=e("h3",{id:"totalmem",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#totalmem","aria-hidden":"true"},"#"),t(" totalMem")],-1),v=e("p",null,[t("\u2022 "),e("strong",null,"totalMem"),t(": "),e("code",null,[e("span",{class:"token property"},"number")])],-1),y=e("p",null,"The total memory accessible by the kernel. This is basically the RAM size of the device, not including below-kernel fixed allocations like DMA buffers, RAM for the baseband CPU, etc.",-1);function b(M,g){const o=d("RouterLink");return l(),s("div",null,[e("p",null,[a(o,{to:"/en/v9/generated/"},{default:r(()=>[t("Auto.js Pro 9 Docs")]),_:1}),t(" / "),a(o,{to:"/en/v9/generated/modules/device.html"},{default:r(()=>[t("device")]),_:1}),t(" / MemoryInfo")]),c,e("p",null,[a(o,{to:"/en/v9/generated/modules/device.html"},{default:r(()=>[t("device")]),_:1}),t(".MemoryInfo")]),e("p",null,[t("Information you can retrieve about the available memory through "),a(o,{to:"/en/v9/generated/classes/device.Device.html#memoryinfo"},{default:r(()=>[t("memoryInfo")]),_:1}),t(".")]),m,u,e("ul",null,[e("li",null,[a(o,{to:"/en/v9/generated/interfaces/device.MemoryInfo.html#availmem"},{default:r(()=>[t("availMem")]),_:1})]),e("li",null,[a(o,{to:"/en/v9/generated/interfaces/device.MemoryInfo.html#lowmemory"},{default:r(()=>[t("lowMemory")]),_:1})]),e("li",null,[a(o,{to:"/en/v9/generated/interfaces/device.MemoryInfo.html#threshold"},{default:r(()=>[t("threshold")]),_:1})]),e("li",null,[a(o,{to:"/en/v9/generated/interfaces/device.MemoryInfo.html#totalmem"},{default:r(()=>[t("totalMem")]),_:1})])]),f,e("p",null,[t("The threshold of "),a(o,{to:"/en/v9/generated/interfaces/device.MemoryInfo.html#availmem"},{default:r(()=>[t("availMem")]),_:1}),t(" at which we consider memory to be low and start killing background services and other non-extraneous processes.")]),p,_,v,y])}const w=n(h,[["render",b],["__file","device.MemoryInfo.html.vue"]]);export{w as default};
