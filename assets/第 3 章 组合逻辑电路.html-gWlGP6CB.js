import{_ as Q,r as o,o as e,c as i,e as n,b as a,d as l,a as t}from"./app-BGj8nCRA.js";const T="/assets/9270209d0dc336483713a69457b4c93-DYSCZp8a.jpg",d="/assets/Pasted%20image%2020240407165728-CQB2YI1T.png",r="/assets/066cfd42c608df98635bd16ea01b0b7-DowGJ_7x.jpg",h="/assets/a6b438f829b8cc5aa7aa35bc2d17836-ClBfa3jy.jpg",c="/assets/e797b8b0ca580e656460b7f6928473a-Ba_EdcDq.jpg",m="/assets/c6395ca214faa9363a560b8d49bf82d-DztmYggR.jpg",g="/assets/Pasted%20image%2020240409161327-dBterzIu.png",u="/assets/Pasted%20image%2020240409162754-YkR6Gy3N.png",p="/assets/Pasted%20image%2020240409163333-B7DC4x8-.png",_="/assets/Pasted%20image%2020240409163738-Cnqpo70g.png",x="/assets/Pasted%20image%2020240409164542-Df2H6bq2.png",f="/assets/Pasted%20image%2020240409164629-DNnyejra.png",w="/assets/Pasted%20image%2020240409171919-CvH7KmxA.png",H="/assets/9b0c7f6bb651899f2ddd9fd550bccb8-INI0_FtH.jpg",b={},v=t('<h2 id="第一讲-组合逻辑电路概述" tabindex="-1"><a class="header-anchor" href="#第一讲-组合逻辑电路概述"><span>第一讲 组合逻辑电路概述</span></a></h2><h3 id="数字逻辑电路概述" tabindex="-1"><a class="header-anchor" href="#数字逻辑电路概述"><span>数字逻辑电路概述</span></a></h3><ul><li>数字逻辑电路可以被看成是带有若干输入端和若干输出端的黑盒子，每个输入端和输出端只有高电平、低电平两种状态，对应1和0 <ul><li>黑盒内部可以看成由若干个元件和若干连线相互连接而成 <ul><li>元件本身又可以是一个数字逻辑电路</li><li>连线可以是输入连线、内部连线和输出连线</li></ul></li></ul></li><li>数字逻辑电路分为组合（combinational）逻辑电路和时序（sequential）逻辑电路 <ul><li>组合逻辑电路的输出值仅依赖于当前输入</li><li>时序逻辑电路的输出不仅依赖于输入值，还与当前状态（<strong>现态</strong>）有关，电路中存在<strong>存储部件</strong>或<strong>反馈结构</strong></li></ul></li></ul><h3 id="组合逻辑电路" tabindex="-1"><a class="header-anchor" href="#组合逻辑电路"><span>组合逻辑电路</span></a></h3><h4 id="构成规则" tabindex="-1"><a class="header-anchor" href="#构成规则"><span>构成规则</span></a></h4><ul><li>最基本的组合逻辑电路是逻辑门电路，实现基本逻辑运算</li><li>组合逻辑电路构成规则 <ul><li>每个元件本身是组合逻辑电路</li><li>输出连线不能互连（可能会短路，导致电路被烧坏）</li><li>输出连线不能反馈到元件输入端</li></ul></li></ul><h4 id="逻辑电路图" tabindex="-1"><a class="header-anchor" href="#逻辑电路图"><span>逻辑电路图</span></a></h4><ul><li>逻辑电路图描述数字电路内部元件的结构及其相互连接关系 <ul><li>每个逻辑电路图的输出信号可以用输入信号的逻辑表达式表示它们之间的逻辑关系</li></ul></li><li>逻辑电路图给出了逻辑关系（逻辑表达式）的一种实现方式 <ul><li>一个真值表可能对应多个不同的逻辑表达式，从而对应多个不同的逻辑电路图，因而可以有多个不同的实现方式</li></ul></li><li>任何逻辑表达式都可以写成与、或、非三种基本运算的逻辑组合 <ul><li>任何逻辑表达式都可以用基本逻辑门画出对应的逻辑电路图</li></ul></li><li>一个逻辑门的输出可以作为另一个逻辑门的输入 <ul><li>扇入系数：一个逻辑门所允许的输入端的最大数目 <ul><li>受限于元件的电气特性。可以通过级联的方式，实现更多的输入端</li></ul></li><li>扇出系数：一个逻辑门输出端信号所能驱动的下一级输入端的最大数目 <ul><li>受限于元件的电器特性。可以通过连接缓冲器，实现更多的输出端</li></ul></li></ul></li></ul>',8),L=a("li",null,"优先级高的运算对应的逻辑门的输出，是优先级低的运算对应逻辑门的输入",-1),M=a("li",null,"优先级顺序：非 > 与和与非 > 异或和同或 > 或和或非",-1),B={class:"MathJax",jax:"SVG",style:{position:"relative"}},E={style:{"vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453","aria-hidden":"true"},y=a("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[a("g",{"data-mml-node":"math"},[a("g",{"data-mml-node":"mi"},[a("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"})])])],-1),C=[y],V=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"n")])],-1),A=t('<h4 id="两级与多级组合逻辑电路" tabindex="-1"><a class="header-anchor" href="#两级与多级组合逻辑电路"><span>两级与多级组合逻辑电路</span></a></h4><ul><li>任何逻辑表达式都可以转化成与-或表达式和或-与表达式</li><li>任何组合逻辑电路都可以是一个两级电路</li><li>两级组合逻辑电路的优劣： <ul><li>好处：比多级组和逻辑电路的传输时间更短，速度更快</li><li>坏处：使用两级组合电路所需的硬件数量可能会增长</li></ul></li><li>采用两级还是多级，需要在速度和成本之间进行权衡</li></ul><h4 id="组合逻辑电路设计" tabindex="-1"><a class="header-anchor" href="#组合逻辑电路设计"><span>组合逻辑电路设计</span></a></h4>',3),k=t('<ul><li>无关项：输入组合对应任意输出（输入组合不应该真值表里）。 <ul><li>无关项的取值不会对结果造成印象，因此在化简时可以被视作0或1</li><li>卡诺图化简时上记作 d</li></ul></li><li>非法值：信号值不能被有效识别为高电平或低电平，处于不确定状态。 <ul><li>比如短路后的输出</li></ul></li><li>三态门（three-state gate）：是一种重要的总线接口电路，也称三态缓冲器，其输出既可以是通常的逻辑值1或0，又可以是高阻态 <ul><li>高阻态（Hi-Z）：输出处于非正常逻辑态的第三种电气态，类似电路断开</li><li>三态门有一个额外的输出使能控制端 EN</li><li>用途：可用于连接总线，多个三态输出连在一起！</li></ul></li></ul><figure><img src="'+T+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="第二讲-典型组合逻辑部件" tabindex="-1"><a class="header-anchor" href="#第二讲-典型组合逻辑部件"><span>第二讲 典型组合逻辑部件</span></a></h2><ul><li>复杂数字系统通常采用层次化、模块化方式构建，由基本组合逻辑部件和时序逻辑部件相互连接构建。</li><li>基本的组合逻辑部件的功能有：译码与编码、选择与分配、比较、运算、缓存并传送等。</li><li>组合电路功能的实现方式： <ul><li>采用分立SSI（small-scale integration）门电路来实现（逻辑函数），但集成度较低。</li><li>使用只读存储器ROM来实现（真值表），集成化容易，但只能按照最小项列表的形式表示，效率较低。</li><li>用提供单一功能的逻辑部件来实现，如译码器、编码器、加法器、比较器等。</li></ul></li></ul><h3 id="译码器和编码器" tabindex="-1"><a class="header-anchor" href="#译码器和编码器"><span>译码器和编码器</span></a></h3>',5),D={class:"MathJax",jax:"SVG",style:{position:"relative"}},j={style:{"vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453","aria-hidden":"true"},Z=a("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[a("g",{"data-mml-node":"math"},[a("g",{"data-mml-node":"mi"},[a("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"})])])],-1),S=[Z],J=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"n")])],-1),F={class:"MathJax",jax:"SVG",style:{position:"relative"}},G={style:{"vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.17ex",height:"1.553ex",role:"img",focusable:"false",viewBox:"0 -675.5 2285 686.5","aria-hidden":"true"},z=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="2194" d="M263 479Q267 501 271 506T288 511Q308 511 308 500Q308 493 303 475Q293 438 278 406T246 352T215 315T185 287T165 270H835Q729 349 696 475Q691 493 691 500Q691 511 711 511Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H165Q167 228 182 216T211 189T244 152T277 96T303 25Q308 7 308 0Q308 -11 288 -11Q281 -11 278 -11T272 -7T267 2T263 21Q245 94 195 151T73 236Q58 242 55 247Q55 254 59 257T73 264Q144 292 194 349T263 479Z"></path></g><g data-mml-node="msup" transform="translate(1277.8,0)"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="mi" transform="translate(533,363) scale(0.707)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path></g></g></g></g>',1),N=[z],R=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mo",{stretchy:"false"},"↔"),a("msup",null,[a("mn",null,"2"),a("mi",null,"n")])])],-1),W=a("h4",{id:"译码器-decoder",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#译码器-decoder"},[a("span",null,"译码器（decoder）")])],-1),U=a("ul",null,[a("li",null,"一种多输入、多输出的组合电路")],-1),X=a("li",null,"“编码→信号”的转换，输入端比输出端少",-1),I={class:"MathJax",jax:"SVG",style:{position:"relative"}},P={style:{"vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"2.279ex",height:"1.528ex",role:"img",focusable:"false",viewBox:"0 -675.5 1007.3 675.5","aria-hidden":"true"},K=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="mi" transform="translate(533,363) scale(0.707)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path></g></g></g></g>',1),q=[K],O=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("msup",null,[a("mn",null,"2"),a("mi",null,"n")])])],-1),Y=a("li",null,"可以通过使能端EN来控制电路实现映射功能",-1),$=t('<h5 id="_2-4-译码器" tabindex="-1"><a class="header-anchor" href="#_2-4-译码器"><span>2-4 译码器</span></a></h5><ul><li>输入编码为 2 位，对应选择 4 位输出</li><li>输出端高电平有效，表示选中输出，对应输入信号的最小项</li><li>通过使能控制端EN(Enable Control)禁止或实现相应功能 <ul><li>EN=0时，输出全为0：消除干扰、功能扩展</li></ul></li></ul><h5 id="_3-8-译码器-74x138" tabindex="-1"><a class="header-anchor" href="#_3-8-译码器-74x138"><span>3-8 译码器（74X138）</span></a></h5><ul><li>输入编码为 3 位，对应选择 8 位输出</li><li>输出端低电平有效，对应输入信号的最大项</li><li>有 3 个使能控制端，只有在 G1=1，G2A_L=0，G2B_L=0 时才有效</li></ul><figure><img src="'+d+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>使用 5 个 74X138 实现 5-32 译码器</li></ul><figure><img src="'+r+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="七段显示译码器" tabindex="-1"><a class="header-anchor" href="#七段显示译码器"><span>七段显示译码器</span></a></h5><ul><li>二极管的连接方式 <ul><li>公共阳极（共阳极）：输入为低电平，二极管导通</li><li>公共阴极（共阴极）：输入为高电平，二极管导通</li></ul></li></ul><h4 id="编码器-encoder" tabindex="-1"><a class="header-anchor" href="#编码器-encoder"><span>编码器（encoder）</span></a></h4>',10),a1={class:"MathJax",jax:"SVG",style:{position:"relative"}},l1={style:{"vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.402ex",height:"1.714ex",role:"img",focusable:"false",viewBox:"0 -675.5 2829.7 757.5","aria-hidden":"true"},t1=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="mi" transform="translate(533,363) scale(0.707)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path></g></g><g data-mml-node="mo" transform="translate(1229.5,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path></g><g data-mml-node="mi" transform="translate(2229.7,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path></g></g></g>',1),e1=[t1],i1=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("msup",null,[a("mn",null,"2"),a("mi",null,"n")]),a("mo",null,"−"),a("mi",null,"n")])],-1),s1={class:"MathJax",jax:"SVG",style:{position:"relative"}},n1={style:{"vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"2.279ex",height:"1.528ex",role:"img",focusable:"false",viewBox:"0 -675.5 1007.3 675.5","aria-hidden":"true"},Q1=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="mi" transform="translate(533,363) scale(0.707)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path></g></g></g></g>',1),o1=[Q1],T1=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("msup",null,[a("mn",null,"2"),a("mi",null,"n")])])],-1),d1={class:"MathJax",jax:"SVG",style:{position:"relative"}},r1={style:{"vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453","aria-hidden":"true"},h1=a("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[a("g",{"data-mml-node":"math"},[a("g",{"data-mml-node":"mi"},[a("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"})])])],-1),c1=[h1],m1=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"n")])],-1),g1=a("li",null,[l("分类 "),a("ul",null,[a("li",null,"互斥（唯一输入）编码器"),a("li",null,"非互斥编码器：优先级编码器")])],-1),u1=a("h5",{id:"_8-3-编码器",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_8-3-编码器"},[a("span",null,"8-3 编码器")])],-1),p1={class:"MathJax",jax:"SVG",style:{position:"relative"}},_1={style:{"vertical-align":"-0.375ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.983ex",height:"1.92ex",role:"img",focusable:"false",viewBox:"0 -683 3086.7 848.6","aria-hidden":"true"},x1=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D43C" d="M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z"></path></g><g data-mml-node="mn" transform="translate(473,-150) scale(0.707)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path></g></g><g data-mml-node="mo" transform="translate(1154.3,0)"><path data-c="223C" d="M55 166Q55 241 101 304T222 367Q260 367 296 349T362 304T421 252T484 208T554 189Q616 189 655 236T694 338Q694 350 698 358T708 367Q722 367 722 334Q722 260 677 197T562 134H554Q517 134 481 152T414 196T355 248T292 293T223 311Q179 311 145 286Q109 257 96 218T80 156T69 133Q55 133 55 166Z"></path></g><g data-mml-node="msub" transform="translate(2210.1,0)"><g data-mml-node="mi"><path data-c="1D43C" d="M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z"></path></g><g data-mml-node="mn" transform="translate(473,-150) scale(0.707)"><path data-c="37" d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z"></path></g></g></g></g>',1),f1=[x1],w1=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("msub",null,[a("mi",null,"I"),a("mn",null,"1")]),a("mo",null,"∼"),a("msub",null,[a("mi",null,"I"),a("mn",null,"7")])])],-1),H1={class:"MathJax",jax:"SVG",style:{position:"relative"}},b1={style:{"vertical-align":"-0.357ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.735ex",height:"1.902ex",role:"img",focusable:"false",viewBox:"0 -683 767 840.8","aria-hidden":"true"},v1=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D43C" d="M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z"></path></g><g data-mml-node="mi" transform="translate(473,-150) scale(0.707)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path></g></g></g></g>',1),L1=[v1],M1=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("msub",null,[a("mi",null,"I"),a("mi",null,"i")])])],-1),B1=a("li",null,"电路实现即为或门",-1),E1=t('<figure><img src="'+h+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="优先权编码器" tabindex="-1"><a class="header-anchor" href="#优先权编码器"><span>优先权编码器</span></a></h5><ul><li>多个输入可同时为 1，但只对优先级高的输入进行编码输出</li></ul><figure><img src="'+c+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="多路选择器和多路分配器" tabindex="-1"><a class="header-anchor" href="#多路选择器和多路分配器"><span>多路选择器和多路分配器</span></a></h3><h4 id="多路选择器-mux-多输入单输出" tabindex="-1"><a class="header-anchor" href="#多路选择器-mux-多输入单输出"><span>多路选择器（MUX）：多输入单输出</span></a></h4>',6),y1=t('<h5 id="_2-路选择器" tabindex="-1"><a class="header-anchor" href="#_2-路选择器"><span>2-路选择器</span></a></h5><figure><img src="'+m+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="_4-路选择器" tabindex="-1"><a class="header-anchor" href="#_4-路选择器"><span>4-路选择器</span></a></h5><figure><img src="'+g+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="多路选择器的使用" tabindex="-1"><a class="header-anchor" href="#多路选择器的使用"><span>多路选择器的使用</span></a></h5><p>基于多路选择器，可以实现组合逻辑电路的功能：使用有 n 个选择器的多路选择器，实现逻辑函数（真值表）。方法简单，但并不经济，输入端并没有得到充分的利用，而且电路实现更加复杂。</p><h4 id="多路分配器-dmux-单输入多输出" tabindex="-1"><a class="header-anchor" href="#多路分配器-dmux-单输入多输出"><span>多路分配器（DMUX）：单输入多输出</span></a></h4><h3 id="分时传送" tabindex="-1"><a class="header-anchor" href="#分时传送"><span>分时传送</span></a></h3><p>将多路选择器和多路分配器连用，以实现多通道数据的分时传送。</p><figure><img src="'+u+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="半加器和全加器" tabindex="-1"><a class="header-anchor" href="#半加器和全加器"><span>半加器和全加器</span></a></h3><h4 id="半加器-half-adder-ha" tabindex="-1"><a class="header-anchor" href="#半加器-half-adder-ha"><span>半加器（Half Adder, HA）</span></a></h4><p>仅考虑加数和被加数，不考虑低位来的进位。</p>',13),C1=a("p",null,"容易发现，S 为异或门输出，CO 为与门输出",-1),V1=a("figure",null,[a("img",{src:p,alt:"",title:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),A1=a("h4",{id:"全加器-full-adder-fa",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#全加器-full-adder-fa"},[a("span",null,"全加器（Full Adder, FA）")])],-1),k1=a("p",null,"输入为加数、被加数和低位进位 Cin",-1),D1=t('<p>全加器也可以作为奇数判断器（输入为奇数个 1 时，F 才会输出 1）</p><figure><img src="'+_+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="串行进位加法器-行波进位加法器" tabindex="-1"><a class="header-anchor" href="#串行进位加法器-行波进位加法器"><span>串行进位加法器/行波进位加法器</span></a></h4><ul><li>规格：两个二进制字（x 和 y），每个 n 位，相加</li><li>方法：n 个全加器的级联，属于迭代电路</li><li>特点：简单、速度慢</li></ul><figure><img src="'+x+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="超前进位加法器" tabindex="-1"><a class="header-anchor" href="#超前进位加法器"><span>超前进位加法器</span></a></h4><ul><li>特点：使用超前进位部件提前计算进位，但增加了逻辑部件</li></ul><figure><img src="'+f+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="组合逻辑部件扩展" tabindex="-1"><a class="header-anchor" href="#组合逻辑部件扩展"><span>组合逻辑部件扩展</span></a></h3><h4 id="级联二进制译码器" tabindex="-1"><a class="header-anchor" href="#级联二进制译码器"><span>级联二进制译码器</span></a></h4><p>通过在使能端加入逻辑部件，用工作和禁止状态实现级联二进制译码器</p><h2 id="第三讲-组合逻辑部件时序分析" tabindex="-1"><a class="header-anchor" href="#第三讲-组合逻辑部件时序分析"><span>第三讲 组合逻辑部件时序分析</span></a></h2><h3 id="传输延迟和最小延迟" tabindex="-1"><a class="header-anchor" href="#传输延迟和最小延迟"><span>传输延迟和最小延迟</span></a></h3><p>信号通过连线和电路元件时会有一定的延迟（Delay） 电路延迟取决于电路内部的设计以及外部特性，影响因素包括但不限于：</p>',14),j1=a("li",null,"连线的长短、元件的数量",-1),Z1=a("li",null,"电路制造工艺、工作电压",-1),S1=a("li",null,"环境干扰、温度等外在条件",-1),J1=a("li",null,[l("高低电平的转换过渡时间 任何逻辑电路，从输入信号的改变，到引起的输出信号改变，都有一定的延迟 常用"),a("strong",null,"时序图"),l("来反应电路的延迟")],-1),F1={class:"MathJax",jax:"SVG",style:{position:"relative"}},G1={style:{"vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.319ex",height:"2.066ex",role:"img",focusable:"false",viewBox:"0 -626 1909.1 913.2","aria-hidden":"true"},z1=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"></path></g><g data-mml-node="TeXAtom" transform="translate(394,-150) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path></g><g data-mml-node="mi" transform="translate(503,0)"><path data-c="1D43B" d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 219 683Q260 681 355 681Q389 681 418 681T463 682T483 682Q499 682 499 672Q499 670 497 658Q492 641 487 638H485Q483 638 480 638T473 638T464 637T455 637Q416 636 405 634T387 623Q384 619 355 500Q348 474 340 442T328 395L324 380Q324 378 469 378H614L615 381Q615 384 646 504Q674 619 674 627T617 637Q594 637 587 639T580 648Q580 650 582 660Q586 677 588 679T604 682Q609 682 646 681T740 680Q802 680 835 681T871 682Q888 682 888 672Q888 645 876 638H874Q872 638 869 638T862 638T853 637T844 637Q805 636 794 634T776 623Q773 618 704 340T634 58Q634 51 638 51Q646 48 692 46H723Q729 38 729 37T726 19Q722 6 716 0H701Q664 2 567 2Q533 2 504 2T458 2T437 1Q420 1 420 10Q420 15 423 24Q428 43 433 45Q437 46 448 46H454Q481 46 514 49Q520 50 522 50T528 55T534 64T540 82T547 110T558 153Q565 181 569 198Q602 330 602 331T457 332H312L279 197Q245 63 245 58Q245 51 253 49T303 46H334Q340 38 340 37T337 19Q333 6 327 0H312Q275 2 178 2Q144 2 115 2T69 2T48 1Q31 1 31 10Q31 12 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z"></path></g><g data-mml-node="mi" transform="translate(1391,0)"><path data-c="1D43F" d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z"></path></g></g></g></g></g>',1),N1=[z1],R1=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("msub",null,[a("mi",null,"t"),a("mrow",{"data-mjx-texclass":"ORD"},[a("mi",null,"p"),a("mi",null,"H"),a("mi",null,"L")])])])],-1),W1={class:"MathJax",jax:"SVG",style:{position:"relative"}},U1={style:{"vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.319ex",height:"2.066ex",role:"img",focusable:"false",viewBox:"0 -626 1909.1 913.2","aria-hidden":"true"},X1=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"></path></g><g data-mml-node="TeXAtom" transform="translate(394,-150) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path></g><g data-mml-node="mi" transform="translate(503,0)"><path data-c="1D43F" d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z"></path></g><g data-mml-node="mi" transform="translate(1184,0)"><path data-c="1D43B" d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 219 683Q260 681 355 681Q389 681 418 681T463 682T483 682Q499 682 499 672Q499 670 497 658Q492 641 487 638H485Q483 638 480 638T473 638T464 637T455 637Q416 636 405 634T387 623Q384 619 355 500Q348 474 340 442T328 395L324 380Q324 378 469 378H614L615 381Q615 384 646 504Q674 619 674 627T617 637Q594 637 587 639T580 648Q580 650 582 660Q586 677 588 679T604 682Q609 682 646 681T740 680Q802 680 835 681T871 682Q888 682 888 672Q888 645 876 638H874Q872 638 869 638T862 638T853 637T844 637Q805 636 794 634T776 623Q773 618 704 340T634 58Q634 51 638 51Q646 48 692 46H723Q729 38 729 37T726 19Q722 6 716 0H701Q664 2 567 2Q533 2 504 2T458 2T437 1Q420 1 420 10Q420 15 423 24Q428 43 433 45Q437 46 448 46H454Q481 46 514 49Q520 50 522 50T528 55T534 64T540 82T547 110T558 153Q565 181 569 198Q602 330 602 331T457 332H312L279 197Q245 63 245 58Q245 51 253 49T303 46H334Q340 38 340 37T337 19Q333 6 327 0H312Q275 2 178 2Q144 2 115 2T69 2T48 1Q31 1 31 10Q31 12 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z"></path></g></g></g></g></g>',1),I1=[X1],P1=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("msub",null,[a("mi",null,"t"),a("mrow",{"data-mjx-texclass":"ORD"},[a("mi",null,"p"),a("mi",null,"L"),a("mi",null,"H")])])])],-1),K1=t('<h4 id="传输延迟" tabindex="-1"><a class="header-anchor" href="#传输延迟"><span>传输延迟</span></a></h4><ul><li>关键路径：一个组合逻辑电路在输入和输出之间经过的最长路径</li><li>传输延迟：关键路径上所有元件的传输延迟之和</li><li>最小延迟：最短路径上所有元件的最小延迟之和</li></ul><figure><img src="'+w+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>实际环境下，不同门电路延迟一般不同，忽略信号在导线传输的延迟</p><h3 id="竞争冒险" tabindex="-1"><a class="header-anchor" href="#竞争冒险"><span>竞争冒险</span></a></h3><ul><li>竞争（race）：如果存在某个输入信号经过两条或两条以上的路径作用到输出端，由于各路径延迟不同，因而该输入信号对输出端会发生先后不同的影响，该现象称为竞争。</li><li>毛刺（glitch）：由于竞争的存在，在输入信号变化的瞬间，输出端可能会输出不正确的尖峰信号，这种信号称为毛刺。</li></ul><figure><img src="'+H+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>解决办法：</p><ul><li>增加低通滤波器、电容；</li><li>在设计电路时就进行规避。</li></ul><h4 id="静态冒险的检测" tabindex="-1"><a class="header-anchor" href="#静态冒险的检测"><span>静态冒险的检测</span></a></h4><ul><li>卡诺图检测：在卡诺图中存在两个质蕴涵项相切（四联通），当从一个质蕴涵项向另一个转换时，一旦有传递延迟，则产生险态。</li><li>通过添加一致项（cnosensus）解决静态冒险现象。（在同一卡诺圈内切换不会产生竞争冒险现象）</li></ul>',11);function q1(O1,Y1){const s=o("Mermaid");return e(),i("div",null,[v,n(s,{id:"mermaid-156",code:"eJxLy8kvT85ILCpR8Ani4nKMftmw+8W+iU/b9z6buiFWQVfXTsEp+vmc+U8b9rxYuCKWyzn62eZFT/cuejp7H1SWyyVaT08PxuFyAjNco58umfV8ee+THb1PJ/Q8n9XyfMrWF9vXA3W939MBEXy6bt7zvg3Ppu18uqf//Z7OWC4AkUdGuw=="}),a("ul",null,[a("li",null,[l("画逻辑电路图时，需要依据逻辑运算的优先级确定逻辑门间的链接关系 "),a("ul",null,[L,M,a("li",null,[a("mjx-container",B,[(e(),i("svg",E,C)),V]),l(" 位逻辑运算在输入端和输出端标记位数")])])])]),A,n(s,{id:"mermaid-221",code:"eJxlkctKw0AUhvd9ir5A8Q2EXnwDd8GFCOJCEERwG+0lvRLFmNJabKOoEdsmpda0ufVhzJmZrPIKnswUL7g7c+b8/3cuh8cn5wdH+6dn2d1SJi9BvUbur4iuwKRLVJWt7cSvx7LHwmvSDNjMSPw+Ga1IZwrNISsH8UAms0uhYuENVJ8+5QsRxN132q8ILVTndO4lfmMvk8/mctvZgkS9HiguHQxB9plhbqUixcWIhSH46jcW2jqdyoiF+ivVTFiWwdYi75Hc2qSuQ8dglgt3IZ00RCUoAX798kFmgTOLEhnIWPGftNEEY9J5QBJtjelbS+DjrokTRctJOo5XibwPfIJqUV+nZgt6JmY4o8gZJYlqHroLMdUWzLGwu59puAD3QkYKKDU6fgbVSfz2n90pbrQ2RF7UYzGzahxT4pgdiVnYiyMA6L4h8Tuku+LHQTvqu3HPSQNtQWyNNlZEfsFdca8vFO1SGA=="}),k,a("ul",null,[a("li",null,[l("编码/译码功能：信号与信号编码之间的转换，如："),a("mjx-container",D,[(e(),i("svg",j,S)),J]),l(" 位信号编码 "),a("mjx-container",F,[(e(),i("svg",G,N)),R]),l(" 位信号")])]),n(s,{id:"mermaid-325",code:"eJxLy8kvT85ILCpRCHHhcox+sn/h0/7t7/d0FGem5yXmvN/TGaugq2un4BT9fM+05wsagTKpecn5KalwGedoEBfCdol+sX4iRFVKKooqV2wmcwEAWhM7Mg=="}),W,U,n(s,{id:"mermaid-336",code:"eJxLy8kvT85ILCpR8Ani4nKMfrFv8tPWpc9Xr49V0NW1U3CKjn42Y8HTDS1PWzc/37w7FiLqDFbWvguoTMEwlssl+sne/S+a9z7rW/60YxtCL5cTmHZFUm0UCxV0i9bT04vlAgACJzkG"}),a("ul",null,[X,a("li",null,[l("通常采用 "),a("mjx-container",I,[(e(),i("svg",P,q)),O]),l(" 中取 1 码（单热点 one-hot）编码表征信号")]),Y]),$,a("ul",null,[a("li",null,[l("输入为单热点（one-hot）码，输出是输入信号的二进制编码，最常见的是 "),a("mjx-container",a1,[(e(),i("svg",l1,e1)),i1]),l(" 编码器，也称为二进制编码器。 "),a("ul",null,[a("li",null,[a("mjx-container",s1,[(e(),i("svg",n1,o1)),T1]),l(" 个输入端")]),a("li",null,[a("mjx-container",d1,[(e(),i("svg",r1,c1)),m1]),l(" 个输出端")])])]),g1]),u1,a("ul",null,[a("li",null,[l("输入端 "),a("mjx-container",p1,[(e(),i("svg",_1,f1)),w1]),l(" 是一组互斥变量，每次只有一个输入端 "),a("mjx-container",H1,[(e(),i("svg",b1,L1)),M1]),l(" 为 1")]),B1]),E1,n(s,{id:"mermaid-512",code:"eJxLy8kvT85ILCpR8Anicox+sW/y09alz6ZueNa7LpbLKfrJ3v0vmvc+61v+tGPb89XrY7mco182dD7rXokk5ALW1b4Lpss1+umSWS+2r4cofDpzRSwXl6OCrq6dgiuXE5R2htKuYNqFCwBiBkDQ"}),y1,n(s,{id:"mermaid-552",code:"eJxLy8kvT85ILCpR8Anicox+sW/y09alCo6xXE4wtlMsl3P0096up10Lns5coeABlHOJfjqh49nUDQrBsVyu0S/2z36yt1fB2T+Wi8tRQVfXTsGZywlKczmDGS5Q2pULAIgCKUo="}),C1,V1,A1,k1,n(s,{id:"mermaid-565",code:"eJxLy8kvT85ILCpR8Anicox+sW/y09alCo6xXE4wtlMsl3P0k719T/b2vtg/G0gqOGfmxXK5RD9tXfG0a8HTmSsU3IDqXaOfTupRcIvlcouGKcsvLYnl4nJU0NW1U3DhcoLSzlDaBUy7Qmk3LgCUxDSp"}),D1,a("ul",null,[j1,Z1,S1,J1,a("li",null,[l("下降沿延迟 "),a("mjx-container",F1,[(e(),i("svg",G1,N1)),R1]),l("：输入变化引起相应输出从高到低变化的时间")]),a("li",null,[l("上升沿延迟 "),a("mjx-container",W1,[(e(),i("svg",U1,I1)),P1]),l("：输入变化引起相应输出从低到高变化的时间 通常取信号转换时间中间点来测量延迟时间")])]),K1])}const a2=Q(b,[["render",q1],["__file","第 3 章 组合逻辑电路.html.vue"]]),l2=JSON.parse('{"path":"/blogs/%E6%95%B0%E5%AD%97%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1%E5%9F%BA%E7%A1%80/%E7%AC%AC%203%20%E7%AB%A0%20%E7%BB%84%E5%90%88%E9%80%BB%E8%BE%91%E7%94%B5%E8%B7%AF.html","title":"第 3 章 组合逻辑电路","lang":"zh-CN","frontmatter":{"date":"2024-05-07","categories":["数字系统设计基础"],"prev":{"text":"第 2 章 数字逻辑基础","link":"/blogs/%E6%95%B0%E5%AD%97%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1%E5%9F%BA%E7%A1%80/%E7%AC%AC%202%20%E7%AB%A0%20%E6%95%B0%E5%AD%97%E9%80%BB%E8%BE%91%E5%9F%BA%E7%A1%80.html"},"next":{"text":"第 4 章 时序逻辑电路","link":"/blogs/%E6%95%B0%E5%AD%97%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1%E5%9F%BA%E7%A1%80/%E7%AC%AC%204%20%E7%AB%A0%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91%E7%94%B5%E8%B7%AF.html"}},"headers":[{"level":2,"title":"第一讲 组合逻辑电路概述","slug":"第一讲-组合逻辑电路概述","link":"#第一讲-组合逻辑电路概述","children":[{"level":3,"title":"数字逻辑电路概述","slug":"数字逻辑电路概述","link":"#数字逻辑电路概述","children":[]},{"level":3,"title":"组合逻辑电路","slug":"组合逻辑电路","link":"#组合逻辑电路","children":[]}]},{"level":2,"title":"第二讲 典型组合逻辑部件","slug":"第二讲-典型组合逻辑部件","link":"#第二讲-典型组合逻辑部件","children":[{"level":3,"title":"译码器和编码器","slug":"译码器和编码器","link":"#译码器和编码器","children":[]},{"level":3,"title":"多路选择器和多路分配器","slug":"多路选择器和多路分配器","link":"#多路选择器和多路分配器","children":[]},{"level":3,"title":"分时传送","slug":"分时传送","link":"#分时传送","children":[]},{"level":3,"title":"半加器和全加器","slug":"半加器和全加器","link":"#半加器和全加器","children":[]},{"level":3,"title":"组合逻辑部件扩展","slug":"组合逻辑部件扩展","link":"#组合逻辑部件扩展","children":[]}]},{"level":2,"title":"第三讲 组合逻辑部件时序分析","slug":"第三讲-组合逻辑部件时序分析","link":"#第三讲-组合逻辑部件时序分析","children":[{"level":3,"title":"传输延迟和最小延迟","slug":"传输延迟和最小延迟","link":"#传输延迟和最小延迟","children":[]},{"level":3,"title":"竞争冒险","slug":"竞争冒险","link":"#竞争冒险","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/数字系统设计基础/第 3 章 组合逻辑电路.md"}');export{a2 as comp,l2 as data};
