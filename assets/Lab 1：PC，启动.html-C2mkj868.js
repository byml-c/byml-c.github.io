import{_ as p,o as a,c as t,b as n,d as e,a as s}from"./app-BGj8nCRA.js";const o="/assets/Pasted%20image%2020250228173434-Ddd_VvC8.png",l={},c=s('<h2 id="lab1-pc-启动" tabindex="-1"><a class="header-anchor" href="#lab1-pc-启动"><span>Lab1：PC，启动</span></a></h2><h3 id="万物起源" tabindex="-1"><a class="header-anchor" href="#万物起源"><span>万物起源</span></a></h3><h4 id="开机自检" tabindex="-1"><a class="header-anchor" href="#开机自检"><span>开机自检</span></a></h4><p>󱜸 按下开机键之后，究竟发生了什么？</p><p>CPU 在电源稳定后，完成内部寄存器的初始化。然后，便要开始执行第一条指令。</p><p>󱜸 第一条指令在哪里？是干什么的？</p><p>工欲善其事，必先利其器。计算机在开始正式工作前，也得先进行一番“自检”和初始化。负责这些的程序，称作 BIOS (Basic Input/Output System)。其存储在特定的 ROM 芯片中，确保断电也不会消失。</p><blockquote><p>BIOS is a type of firmware used to provide runtime services for operating systems and programs and to perform hardware initialization during the booting process (power-on startup). BIOS 是在通电启动阶段执行硬件初始化，以及为操作系统提供运行时服务的固件。</p></blockquote><h4 id="加载系统" tabindex="-1"><a class="header-anchor" href="#加载系统"><span>加载系统</span></a></h4><p>󱜸 BIOS 识别了那么多固件，究竟怎么知道从哪里加载操作系统的代码呢？</p><p>答案很朴素——挨个试。BIOS 会遍历每一个磁盘，逐个尝试将该磁盘的主引导扇区加载到内存中的 <code>0x7c00</code> 处，然后查看末尾的两个字节是否为 <code>0x55 0xaa</code>。如果找到了，那就跳转到 <code>0x7c00</code> 这个位置，然后执行刚刚加载进来的启动代码。计算机的控制权从此交给了主引导扇区。</p><blockquote><p>主引导扇区（Master Boot Record, MBR）磁盘的 0 号柱面，0 号磁头，0 号扇区对应的扇区，有 512 字节的大小，末尾两个字节约定为 <code>0x55 0xaa</code></p></blockquote><p>要是 BIOS 遍历完了所有设备，发现都是不可启动的，那便会报错“找不到启动设备”。</p><p>󱜸 主引导扇区中的代码是干啥的？</p><p>主引导扇区中的代码称作“加载程序”(Bootloader)，它负责启动操作系统：</p><ul><li>将操作系统的代码和数据从磁盘加载到内存中</li><li>跳转到操作系统的起始地址</li></ul><blockquote><p>至此，一切造物的工已经完毕，无疑之日已至</p></blockquote><h3 id="法度已立" tabindex="-1"><a class="header-anchor" href="#法度已立"><span>法度已立</span></a></h3><h4 id="实模式" tabindex="-1"><a class="header-anchor" href="#实模式"><span>实模式</span></a></h4><p>从通电到运行 Bootloader，所有的指令都是直接交由 CPU 运行，也都是直接存储在了物理内存中。这就带来了两个问题：</p><ul><li>CPU 必须完整运行完一个程序，才会切换到下一个程序。</li><li>一个程序具有完全的访问物理内存的能力，甚至可以修改别的程序的代码。 不难发现，这时的计算机和早期计算机并无二致，没有虚拟化和并发的能力，所有的程序具有相同的执行权限。这种运行模式，被称为“实模式”。</li></ul>',21),i={class:"callout","data-callout":"note"},u=s('<div class="callout-title"><div class="callout-title-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg></div><div class="callout-title-inner">8086 (16 位 CPU)</div></div>',1),d={class:"callout-content"},r=n("p",null,"8086 完全运行在实模式下，有 16 位的寄存器，16 位的数据总线，20 位的地址总线。",-1),k=n("ul",null,[n("li",null,"段寄存器：CS(Code Segment), DS(Data Segment), SS(Stack Segment), ES"),n("li",null,"状态和控制寄存器：FLAGS, IP")],-1),m={class:"MathJax",jax:"SVG",style:{position:"relative"}},h={style:{"vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.198ex",height:"2.072ex",role:"img",focusable:"false",viewBox:"0 -833.9 3623.7 915.9","aria-hidden":"true"},v=s('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mn"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z" transform="translate(500,0)"></path></g></g></g><g data-mml-node="mo" transform="translate(1567.9,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mn" transform="translate(2623.7,0)"><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"></path><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" transform="translate(500,0)"></path></g></g></g>',1),Q=[v],b=n("mjx-assistive-mml",{unselectable:"on",display:"inline"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("msup",null,[n("mn",null,"2"),n("mrow",{"data-mjx-texclass":"ORD"},[n("mn",null,"16")])]),n("mo",null,"="),n("mn",null,"64")])],-1),T=s('<h4 id="保护模式" tabindex="-1"><a class="header-anchor" href="#保护模式"><span>保护模式</span></a></h4><p>为了解决实模式的问题，保护模式应运而生。但为了兼容性，实模式得以保留。x86 处理器采用了这样的机制：计算机启动时，CPU 工作在实模式，由 Bootloader 完成由实模式向保护模式的切换。</p><div class="callout" data-callout="note"><div class="callout-title"><div class="callout-title-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg></div><div class="callout-title-inner">进入保护模式的方法</div></div><div class="callout-content"><p></p><ul><li>关闭中断</li><li>打开 A20 数据总线</li><li>加载 <code>GDTR</code></li><li>设置 <code>CR0</code> 的 PE 位（第 0 位）为 <code>0x1</code></li><li>通过长跳转设置 <code>CS</code> 进入保护模式</li><li>初始化 <code>DS, ES, GS, SS</code></li></ul></div></div><p>为了实现更大规模、更灵活的寻址，保护模式下维护了一张“全局描述符表”，用来存放内存段的段首物理地址、段地址大小、段权限等信息，并通过段选择子来选择对应的段。</p><figure><img src="'+o+`" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>󱜸 全局描述符表是谁负责创建？</p><p>Bootloader 负责将全局描述符表从磁盘上加载到内存中，并将 GDT 表的物理地址和表长界限赋值给 <code>GDTR</code> 寄存器。</p><h4 id="设备交互" tabindex="-1"><a class="header-anchor" href="#设备交互"><span>设备交互</span></a></h4><p>󱜸 保护模式下，该如何与外设交互？</p><p>之前为外设保留的内存正是用来干这件事的。只需要在内存的特定区域写入数据，外设（例如显示设备）就会将写入的数据进行对应的处理。至于写入的格式是什么？那就是驱动程序的工作了。</p><p>󱜸 如何读写磁盘？</p><p>虽然固态硬盘逐渐普及，很多来自机械硬盘的概念还是得到了保留，磁盘的从大到小被划分为：</p><ul><li>硬盘：由多张平行堆叠的磁盘组成，每个磁盘配有一个磁头（或两个，有些硬盘的磁盘上下两面均可存储信息），所有磁头同步运动。</li><li>磁盘：类似光盘，由若干圈同心圆构成，一个同心圆就是一个磁道。</li><li>柱面：垂直方向上同样大小的同心圆构成的圆柱，可以被同步运动的磁头同时读取到。柱面是磁盘分区的最小单位。</li><li>磁道：单张磁盘上的一个同心圆。</li><li>扇区：构成磁道的若干条弧线，每个扇区中存储的数据大小一般为 512 字节。扇区是磁盘读写数据的最小单位。 因此，硬盘容量 = 柱面数（磁道数）* 磁头数* 扇区数 * 扇区数据大小（512 字节） 磁盘读写通过设置端口并获取端口返回实现：</li></ul><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c" data-title="c"><pre class="language-c"><code><span class="line"><span class="token keyword">void</span> <span class="token function">waitDisk</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 在 0x1F7 端口等待磁盘响应</span></span>
<span class="line">    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">inByte</span><span class="token punctuation">(</span><span class="token number">0x1F7</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xC0</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0x40</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">readSect</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>dst<span class="token punctuation">,</span> <span class="token keyword">int</span> offset<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 读取磁盘对应扇区</span></span>
<span class="line">    <span class="token keyword">int</span> i<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">waitDisk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 将需要读取的扇区地址分段存入指定端口</span></span>
<span class="line">    <span class="token function">outByte</span><span class="token punctuation">(</span><span class="token number">0x1F2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">outByte</span><span class="token punctuation">(</span><span class="token number">0x1F3</span><span class="token punctuation">,</span> offset<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">outByte</span><span class="token punctuation">(</span><span class="token number">0x1F4</span><span class="token punctuation">,</span> offset <span class="token operator">&gt;&gt;</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">outByte</span><span class="token punctuation">(</span><span class="token number">0x1F5</span><span class="token punctuation">,</span> offset <span class="token operator">&gt;&gt;</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">outByte</span><span class="token punctuation">(</span><span class="token number">0x1F6</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>offset <span class="token operator">&gt;&gt;</span> <span class="token number">24</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0xE0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">outByte</span><span class="token punctuation">(</span><span class="token number">0x1F7</span><span class="token punctuation">,</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token function">waitDisk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 等待读取完毕即可从 0x1F0 端口流式获取数据</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> SECTSIZE <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span>dst<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">inLong</span><span class="token punctuation">(</span><span class="token number">0x1F0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实验程序" tabindex="-1"><a class="header-anchor" href="#实验程序"><span>实验程序</span></a></h3><p><code>os.img</code> 包含两个扇区：</p><ul><li>主引导扇区中有一个引导程序，由 <code>start.s</code> 和 <code>boot.c</code> 编译链接得到。 <ul><li><code>start.s</code> 在物理内存 <code>0x7c00</code> 处接过 BIOS 的接力棒，承担从实模式到保护模式的转换，随即跳转至 <code>boot.c</code> 中的 <code>bootMain(void)</code> 函数处。</li><li><code>boot.c</code> 负责将 <code>app.s</code> 编译得到的、位于第一扇区的程序加载到内存的 <code>0x8c00</code> 处，并跳转运行。</li></ul></li><li>第一扇区中有 <code>app.s</code> 编译得到的程序，会在屏幕中显示 <code>hello, world</code>，用以模拟操作系统。</li></ul>`,17);function g(x,f){return a(),t("div",null,[c,n("div",i,[u,n("div",d,[r,k,n("p",null,[e("访存为直接访问物理内存，物理地址 = 段寄存器 << 4 + 偏移地址(IP)。因为 IP 是 16 位的，每个段最多可以存储 "),n("mjx-container",m,[(a(),t("svg",h,Q)),b]),e(" KB 的数据。")])])]),T])}const w=p(l,[["render",g],["__file","Lab 1：PC，启动.html.vue"]]),B=JSON.parse('{"path":"/blogs/OS/Lab%201%EF%BC%9APC%EF%BC%8C%E5%90%AF%E5%8A%A8.html","title":"Lab 1：PC，启动","lang":"zh-CN","frontmatter":{"date":"2025-02-28","categories":["OS"],"prev":{"text":"GDB 调试 & VSCode 调试","link":"/blogs/OS/GDB%20%E8%B0%83%E8%AF%95%20_%20VSCode%20%E8%B0%83%E8%AF%95.html"},"next":{"text":"Lab 2：从内核到用户","link":"/blogs/OS/Lab%202%EF%BC%9A%E4%BB%8E%E5%86%85%E6%A0%B8%E5%88%B0%E7%94%A8%E6%88%B7.html"}},"headers":[{"level":2,"title":"Lab1：PC，启动","slug":"lab1-pc-启动","link":"#lab1-pc-启动","children":[{"level":3,"title":"万物起源","slug":"万物起源","link":"#万物起源","children":[]},{"level":3,"title":"法度已立","slug":"法度已立","link":"#法度已立","children":[]},{"level":3,"title":"实验程序","slug":"实验程序","link":"#实验程序","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/OS/Lab 1：PC，启动.md"}');export{w as comp,B as data};
