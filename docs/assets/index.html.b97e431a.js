import{_ as n,r,o as d,c as s,a as e,d as a,b as h,e as t}from"./app.a4db79b1.js";const c={},l=t(`<h1 id="\u5982\u4F55\u907F\u514D\u5185\u5B58\u6CC4\u6F0F" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u907F\u514D\u5185\u5B58\u6CC4\u6F0F" aria-hidden="true">#</a> \u5982\u4F55\u907F\u514D\u5185\u5B58\u6CC4\u6F0F</h1><h1 id="\u4EC0\u4E48\u662Fgc" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fgc" aria-hidden="true">#</a> \u4EC0\u4E48\u662FGC</h1><p>GC\uFF08Garbage Collector\uFF09\u5C31\u662F\u5783\u573E\u6536\u96C6\u5668\uFF0C\u5F53\u7136\u8FD9\u91CC\u4EC5\u5C31\u5185\u5B58\u800C\u8A00\u3002\u4EE5\u5E94\u7528\u7A0B\u5E8F\u7684root\u4E3A\u57FA\u7840\uFF0C\u904D\u5386\u5E94\u7528\u7A0B\u5E8F\u5728Heap\u4E0A\u52A8\u6001\u5206\u914D\u7684\u6240\u6709\u5BF9\u8C61\uFF0C\u901A\u8FC7\u8BC6\u522B\u5B83\u4EEC\u662F\u5426\u88AB\u5F15\u7528\u6765\u786E\u5B9A\u54EA\u4E9B\u5BF9\u8C61\u662F\u5DF2\u7ECF\u6B7B\u4EA1\u7684\u3001\u54EA\u4E9B\u4ECD\u9700\u8981\u88AB\u4F7F\u7528\u3002\u5DF2\u7ECF\u4E0D\u518D\u88AB\u5E94\u7528\u7A0B\u5E8F\u7684root\u6216\u8005\u522B\u7684\u5BF9\u8C61\u6240\u5F15\u7528\u7684\u5BF9\u8C61\u5C31\u662F\u5DF2\u7ECF\u6B7B\u4EA1\u7684\u5BF9\u8C61\uFF0C\u5373\u6240\u8C13\u7684\u5783\u573E\uFF0C\u9700\u8981\u88AB\u56DE\u6536\u3002</p><h2 id="\u4EC0\u4E48\u662F\u5185\u5B58\u6CC4\u9732" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u5185\u5B58\u6CC4\u9732" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u5185\u5B58\u6CC4\u9732</h2><p>\u4EFB\u4F55\u6709\u7ECF\u9A8C\u7684 .NET \u5F00\u53D1\u4EBA\u5458\u90FD\u77E5\u9053\uFF0C\u5373\u200B\u200B\u4F7F .NET \u5E94\u7528\u7A0B\u5E8F\u5177\u6709\u5783\u573E\u6536\u96C6\u5668\uFF0C\u5185\u5B58\u6CC4\u6F0F\u4E5F\u4F1A\u4E00\u76F4\u53D1\u751F\u3002\u5E76\u4E0D\u662F\u5783\u573E\u6536\u96C6\u5668\u6709\u9519\u8BEF\uFF0C\u53EA\u662F\u6211\u4EEC\u53EF\u4EE5\u5F88\u5BB9\u6613\u5728\u6258\u7BA1\u8BED\u8A00\u4E2D\u5BFC\u81F4\u5185\u5B58\u6CC4\u6F0F\u3002\u968F\u7740\u5185\u5B58\u6CC4\u6F0F\uFF0C\u60A8\u7684\u5185\u5B58\u6D88\u8017\u4F1A\u589E\u52A0\uFF0C\u4ECE\u800C\u4EA7\u751F GC \u538B\u529B\u548C\u6027\u80FD\u95EE\u9898\u3002\u6700\u540E\uFF0C\u7A0B\u5E8F\u5C06\u56E0\u5185\u5B58\u4E0D\u8DB3\u5F02\u5E38\u800C\u5D29\u6E83\u3002</p><h2 id="\u53D1\u751F\u5185\u5B58\u6CC4\u9732\u7684\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u53D1\u751F\u5185\u5B58\u6CC4\u9732\u7684\u539F\u56E0" aria-hidden="true">#</a> \u53D1\u751F\u5185\u5B58\u6CC4\u9732\u7684\u539F\u56E0</h2><ul><li><p>\u5BF9\u8C61\u4ECD\u88AB\u5F15\u7528\u4F46\u5B9E\u9645\u4E0A\u672A\u4F7F\u7528 \u7531\u4E8E\u5B83\u4EEC\u88AB\u5F15\u7528\uFF0CGC \u4E0D\u4F1A\u6536\u96C6\u5B83\u4EEC\uFF0C\u5B83\u4EEC\u5C06\u6C38\u8FDC\u4FDD\u7559\uFF0C\u5360\u7528\u5185\u5B58\u3002\u4F8B\u5982\uFF0C\u5F53\u60A8\u6CE8\u518C\u4E8B\u4EF6\u4F46\u4ECE\u672A\u53D6\u6D88\u6CE8\u518C\u65F6\uFF0C\u53EF\u80FD\u4F1A\u53D1\u751F\u8FD9\u79CD\u60C5\u51B5\u3002\u6211\u4EEC\u79F0\u4E4B\u4E3A\u6258\u7BA1\u5185\u5B58\u6CC4\u6F0F\u3002</p></li><li><p>\u4EE5\u67D0\u79CD\u65B9\u5F0F\u5206\u914D\u975E\u6258\u7BA1\u5185\u5B58\uFF08\u6CA1\u6709\u5783\u573E\u6536\u96C6\uFF09\u5E76\u4E14\u4E0D\u91CA\u653E\u5B83\u65F6 .NET \u672C\u8EAB\u6709\u5F88\u591A\u5206\u914D\u975E\u6258\u7BA1\u5185\u5B58\u7684\u7C7B\u3002\u51E0\u4E4E\u6240\u6709\u6D89\u53CA\u6D41\u3001\u56FE\u5F62\u3001\u6587\u4EF6\u7CFB\u7EDF\u6216\u7F51\u7EDC\u8C03\u7528\u7684\u4E8B\u7269\u90FD\u5728\u5E55\u540E\u8FDB\u884C\u3002\u901A\u5E38\uFF0C\u8FD9\u4E9B\u7C7B\u5B9E\u73B0\u4E00\u4E2ADispose\u65B9\u6CD5\uFF0C\u91CA\u653E\u5185\u5B58\u3002\u60A8\u53EF\u4EE5\u81EA\u5DF1\u4F7F\u7528\u7279\u6B8A\u7684 .NET \u7C7B\uFF08\u5982Marshal\uFF09\u6216PInvoke\u8F7B\u677E\u5206\u914D\u975E\u6258\u7BA1\u5185\u5B58\u3002</p></li></ul><h2 id="\u5E38\u89C1\u7684\u5185\u5B58\u6CC4\u9732" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u7684\u5185\u5B58\u6CC4\u9732" aria-hidden="true">#</a> \u5E38\u89C1\u7684\u5185\u5B58\u6CC4\u9732</h2><h3 id="\u8BA2\u9605\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8BA2\u9605\u4E8B\u4EF6" aria-hidden="true">#</a> \u8BA2\u9605\u4E8B\u4EF6</h3><p>\u4E00\u65E6\u60A8\u8BA2\u9605\u4E86\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u8BE5\u5BF9\u8C61\u5C31\u4F1A\u6301\u6709\u5BF9\u60A8\u7684\u7C7B\u7684\u5F15\u7528\u3002\u9664\u975E\u60A8\u4F7F\u7528\u672A\u6355\u83B7\u7C7B\u6210\u5458\u7684\u533F\u540D\u65B9\u6CD5\u8BA2\u9605\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class MyClass
{
    public MyClass(WiFiManager wiFiManager)
    {
        wiFiManager.WiFiSignalChanged += OnWiFiChanged;
    }
 
    private void OnWiFiChanged(object sender, WifiEventArgs e)
    {
        // do something
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>\u63A8\u8350\u65B9\u6848</strong> \u53D6\u6D88\u8BA2\u9605\u4E8B\u4EF6\u3002 \u4F7F\u7528\u5F31\u5904\u7406\u7A0B\u5E8F\u6A21\u5F0F\u3002 \u5982\u679C\u53EF\u80FD\uFF0C\u8BF7\u4F7F\u7528\u533F\u540D\u51FD\u6570\u8BA2\u9605\u5E76\u4E14\u4E0D\u6355\u83B7\u4EFB\u4F55\u6210\u5458\u3002</p></blockquote><h3 id="\u4EE5\u533F\u540D\u65B9\u5F0F\u6355\u83B7\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u533F\u540D\u65B9\u5F0F\u6355\u83B7\u6210\u5458" aria-hidden="true">#</a> \u4EE5\u533F\u540D\u65B9\u5F0F\u6355\u83B7\u6210\u5458</h3><h3 id="\u9759\u6001\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u53D8\u91CF" aria-hidden="true">#</a> \u9759\u6001\u53D8\u91CF</h3><h3 id="\u7F13\u5B58\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u529F\u80FD" aria-hidden="true">#</a> \u7F13\u5B58\u529F\u80FD</h3><h3 id="\u4E0D\u6B63\u786E\u7684-wpf-\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u6B63\u786E\u7684-wpf-\u7ED1\u5B9A" aria-hidden="true">#</a> \u4E0D\u6B63\u786E\u7684 WPF \u7ED1\u5B9A</h3><h3 id="\u6C38\u4E0D\u7EC8\u6B62\u7684\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6C38\u4E0D\u7EC8\u6B62\u7684\u7EBF\u7A0B" aria-hidden="true">#</a> \u6C38\u4E0D\u7EC8\u6B62\u7684\u7EBF\u7A0B</h3><h3 id="\u4E0D\u91CA\u653E\u975E\u6258\u7BA1\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u91CA\u653E\u975E\u6258\u7BA1\u5185\u5B58" aria-hidden="true">#</a> \u4E0D\u91CA\u653E\u975E\u6258\u7BA1\u5185\u5B58</h3><h3 id="\u6DFB\u52A0-dispose-\u800C\u4E0D\u8C03\u7528\u5B83" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-dispose-\u800C\u4E0D\u8C03\u7528\u5B83" aria-hidden="true">#</a> \u6DFB\u52A0 Dispose \u800C\u4E0D\u8C03\u7528\u5B83</h3><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,20),o={href:"https://kb.cnblogs.com/page/106720/",target:"_blank",rel:"noopener noreferrer"};function u(b,p){const i=r("ExternalLinkIcon");return d(),s("div",null,[l,e("p",null,[e("a",o,[a("GC\u5783\u573E\u56DE\u6536\u539F\u7406"),h(i)]),a(" https://michaelscodingspot.com/ways-to-cause-memory-leaks-in-dotnet/ https://michaelscodingspot.com/find-fix-and-avoid-memory-leaks-in-c-net-8-best-practices/")])])}const m=n(c,[["render",u],["__file","index.html.vue"]]);export{m as default};