import{_ as e,r as i,o as t,c as n,e as r,b as a,a as s}from"./app-CpWlVr0e.js";const p="/assets/Pasted%20image%2020240430172445-DC3OkpsU.png",d="/assets/Pasted%20image%2020240430172815-DJ2izm1w.png",c="/assets/Pasted%20image%2020240430174514-Cf3nFseJ.png",h="/assets/Pasted%20image%2020240430174847-DLbbGNni.png",o={},A=a("h2",{id:"第一讲-可编程逻辑器件概述",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#第一讲-可编程逻辑器件概述"},[a("span",null,"第一讲 可编程逻辑器件概述")])],-1),g=a("ul",null,[a("li",null,"MOS 器件"),a("li",null,"固定逻辑器件/芯片"),a("li",null,"可编程逻辑器件（PLD），现场可编程门阵列（FPGA）")],-1),E=a("h3",{id:"可编程逻辑器件-pld-的分类",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#可编程逻辑器件-pld-的分类"},[a("span",null,"可编程逻辑器件（PLD）的分类")])],-1),m=s('<h3 id="可编程只读存储器-prom" tabindex="-1"><a class="header-anchor" href="#可编程只读存储器-prom"><span>可编程只读存储器（PROM）</span></a></h3><p>Programmable Read Only Memory：是一种与阵列固定、或阵列可编程的简单 PLD。任何逻辑函数转换成标准与-或表达式后，可用 PROM 来实现。与阵列的水平线输出对应标准与-或表达式中的标准乘积项（即最小项）</p><h3 id="可编程逻辑阵列-pla" tabindex="-1"><a class="header-anchor" href="#可编程逻辑阵列-pla"><span>可编程逻辑阵列（PLA）</span></a></h3><p>Programmable Logic Array：是一种与阵列、或阵列均可编程的逻辑阵列。无需向 PROM 那样将逻辑函数转化为标准与-或表达式，而只需要化简成最简与-或表达式即可，可以节省编程资源。</p><h3 id="可编程阵列逻辑-pal" tabindex="-1"><a class="header-anchor" href="#可编程阵列逻辑-pal"><span>可编程阵列逻辑（PAL）</span></a></h3><p>Programmable Array Logic：是一种与阵列可编程、或阵列固定的逻辑阵列</p><table><thead><tr><th>关系图</th><th>或阵列固定</th><th>或阵列不固定</th></tr></thead><tbody><tr><td>与阵列固定</td><td>不可编程</td><td>PROM</td></tr><tr><td>与阵列不固定</td><td>PAL</td><td>PLA</td></tr></tbody></table><h3 id="通用逻辑阵列-gal" tabindex="-1"><a class="header-anchor" href="#通用逻辑阵列-gal"><span>通用逻辑阵列（GAL）</span></a></h3><p>Generic Array Logic：与 PAL 最大的差别是输出逻辑宏单元（OLMC）可以编程定义。通过将 OLMC 设置成不同的工作状态，可适用不同的功能需求。</p><h3 id="复杂可编程逻辑器件-cpld" tabindex="-1"><a class="header-anchor" href="#复杂可编程逻辑器件-cpld"><span>复杂可编程逻辑器件（CPLD）</span></a></h3><p>Complex PLD 主要包括：</p><ul><li>逻辑阵列块（Logic Array Block，LAB）</li><li>I/O控制块：用于和芯片的I/O引脚互连</li><li>可编程互联阵列（PIA）</li></ul><h3 id="现场可编程门阵列-fpga" tabindex="-1"><a class="header-anchor" href="#现场可编程门阵列-fpga"><span>现场可编程门阵列（FPGA）</span></a></h3><p>Field Programmable Gate Array：是一种高集成度的复杂可编程逻辑器件，可通过 EDA 软件对其进行配置和编程，可反复擦写。</p><h2 id="第二讲-存储器阵列" tabindex="-1"><a class="header-anchor" href="#第二讲-存储器阵列"><span>第二讲 存储器阵列</span></a></h2><ul><li>存储器可用来存储数字电路中的数据。 <ul><li>寄存器用来存储少量数据，速度更快</li><li>存储器阵列用来存储大量数据，速度较寄存器慢</li></ul></li><li>在 CPLD 和 FPGA 芯片中通常会提供片内存储器阵列</li><li>存储器阵列中每位数据对应一个记忆单元（cell），称为存储元</li></ul><h3 id="分类" tabindex="-1"><a class="header-anchor" href="#分类"><span>分类</span></a></h3><p>按功能可分为：只读存储器（Read-only Memory, ROM）和随机存取存储器（Random-access Memory, RAM） ROM 属于非易失性存储器，即使电源断电，ROM中存储的数据也不会消失。根据工艺的不同，分为：</p><ul><li>掩膜只读存储器 MROM</li><li>一次可编程只读存储器 PROM</li><li>光擦除可编程只读存储器 EPROM</li><li>电擦除可编程只读存储器 EEPROM（E2PROM） RAM属于易失性存储器, 一旦电源断电，RAM中存储的数据就消失。</li><li>静态RAM（Static RAM，SRAM）</li><li>动态RAM（Dynamic RAM，DRAM）</li></ul><h3 id="rom" tabindex="-1"><a class="header-anchor" href="#rom"><span>ROM</span></a></h3><p>ROM 存储阵列根据 MOS 晶体管的有无来区分存储 0 和 1，不同类型的 ROM，主要区别在于 MOS 晶体管的特性不同。</p><figure><img src="'+p+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="ram" tabindex="-1"><a class="header-anchor" href="#ram"><span>RAM</span></a></h3><h4 id="静态存储器-sram" tabindex="-1"><a class="header-anchor" href="#静态存储器-sram"><span>静态存储器 SRAM</span></a></h4><p>只要保持电源，存储单元中存放数据就保持不变。 优点：读写速度快 缺点：价格高、功耗大、集成度低，无需刷新。 存储单元使用 6 个 MOS 晶体管来实现。</p><figure><img src="'+d+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>M1 和 M3、M2 和 M4 构成反相器，构成双稳态元件。M5 和 M6 为门控管</p><h4 id="动态存储器-dram" tabindex="-1"><a class="header-anchor" href="#动态存储器-dram"><span>动态存储器 DRAM</span></a></h4><p>单 MOS 管，电容上存有大量电荷为 1，否则 0。 优点：电路元件少，功耗小，集成度高，用于构建主存储器 缺点：速度慢，是破坏性读出（需读后再生），需定时刷新</p><figure><img src="'+c+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>刷新：DRAM 的一个重要特点是，数据以电荷的形式保存在电容中，电容的放电使得电荷通常只能维持几十个毫秒左右，相当于 1M 个时钟周期左右，因此要定期进行刷新（读出后重新写回），按行进行（所有芯片中的同一行一起进行），刷新操作所需时间通常只占 1%~2% 左右。</p><h2 id="第三讲-fpga-和-asic" tabindex="-1"><a class="header-anchor" href="#第三讲-fpga-和-asic"><span>第三讲 FPGA 和 ASIC</span></a></h2><h3 id="现场可编程逻辑阵列-fpga" tabindex="-1"><a class="header-anchor" href="#现场可编程逻辑阵列-fpga"><span>现场可编程逻辑阵列 FPGA</span></a></h3><p>FPGA 内部包含大量可配置逻辑块 CLB，它由若干查找表（Look-Up Table，LUT）及多路选择器、进位链、触发器 FF 等附加逻辑组成。</p><ul><li>可对 CLB 进行不同配置。如下图：可对 MUX 编程配置为输出是 LUT 实现的组合逻辑电路结果 Y；也可配置为输出是时序逻辑电路结果 Q。</li><li>LUT 本质上是一个 RAM，多采用 SRAM 实现。</li></ul><figure><img src="'+h+'" alt="" title="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>函数发生器通过查找表 LUT 实现，其中的内容可编程配置 LUT 存储单元中存放函数输出值，用于实现一个小规模逻辑函数</p><h3 id="专用集成电路-asic" tabindex="-1"><a class="header-anchor" href="#专用集成电路-asic"><span>专用集成电路 ASIC</span></a></h3><p>Application-Specific Integrated Circuit：是一种应特定用户要求和特定电子系统的需要而设计、制造的集成电路。</p><ul><li>全定制：设计者完成所有设计，速度更快</li><li>半定制：使用标准库里的标准逻辑单元（标准单元） FPGA和ASIC目前都是电子设计领域的主流产品。</li><li>ASIC面向特定用户的需求，具有体积小、功耗低、可靠性高、性能高、保密性高、成本低等优点，一般用于批量大的专用产品中。</li><li>FPGA可编程特性使其应用非常灵活，但芯片内部逻辑门的使用率大幅降低，导致功耗高、速度慢、资源冗余且价格昂贵，一般用于小批量产品设计中。</li></ul>',40);function f(B,M){const l=i("Mermaid");return t(),n("div",null,[A,g,E,r(l,{id:"mermaid-23",code:"eJxLy8kvT85ILCpRCHHhcox+2r/++Z5pz1d0v2zY/WLfxKczVzzZve39no4AH5f3ezpjuZyin69reNo7FciPtVZwjn66pPfZ3CYQj8s1OiDI3xco6hYd4OMIpN2jAxx9gLRHtDuY9ox2hmjzinYLcHeM5eJyVNDVtVNwgtLOXE5g2hVKu0FpdyjtweUMpj2htBcXAG3GP6s="}),m])}const P=e(o,[["render",f],["__file","第 5 章 可编程逻辑器件.html.vue"]]),_=JSON.parse('{"path":"/blogs/%E6%95%B0%E5%AD%97%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1%E5%9F%BA%E7%A1%80/%E7%AC%AC%205%20%E7%AB%A0%20%E5%8F%AF%E7%BC%96%E7%A8%8B%E9%80%BB%E8%BE%91%E5%99%A8%E4%BB%B6.html","title":"第 5 章 可编程逻辑器件","lang":"zh-CN","frontmatter":{"categories":["数字系统设计基础"],"prev":{"text":"第 4 章 时序逻辑电路","link":"/blogs/%E6%95%B0%E5%AD%97%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1%E5%9F%BA%E7%A1%80/%E7%AC%AC%204%20%E7%AB%A0%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91%E7%94%B5%E8%B7%AF.html"},"next":{"text":"第 6 章 运算方法和运算部件","link":"/blogs/%E6%95%B0%E5%AD%97%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1%E5%9F%BA%E7%A1%80/%E7%AC%AC%206%20%E7%AB%A0%20%E8%BF%90%E7%AE%97%E6%96%B9%E6%B3%95%E5%92%8C%E8%BF%90%E7%AE%97%E9%83%A8%E4%BB%B6.html"}},"headers":[{"level":2,"title":"第一讲 可编程逻辑器件概述","slug":"第一讲-可编程逻辑器件概述","link":"#第一讲-可编程逻辑器件概述","children":[{"level":3,"title":"可编程逻辑器件（PLD）的分类","slug":"可编程逻辑器件-pld-的分类","link":"#可编程逻辑器件-pld-的分类","children":[]},{"level":3,"title":"可编程只读存储器（PROM）","slug":"可编程只读存储器-prom","link":"#可编程只读存储器-prom","children":[]},{"level":3,"title":"可编程逻辑阵列（PLA）","slug":"可编程逻辑阵列-pla","link":"#可编程逻辑阵列-pla","children":[]},{"level":3,"title":"可编程阵列逻辑（PAL）","slug":"可编程阵列逻辑-pal","link":"#可编程阵列逻辑-pal","children":[]},{"level":3,"title":"通用逻辑阵列（GAL）","slug":"通用逻辑阵列-gal","link":"#通用逻辑阵列-gal","children":[]},{"level":3,"title":"复杂可编程逻辑器件（CPLD）","slug":"复杂可编程逻辑器件-cpld","link":"#复杂可编程逻辑器件-cpld","children":[]},{"level":3,"title":"现场可编程门阵列（FPGA）","slug":"现场可编程门阵列-fpga","link":"#现场可编程门阵列-fpga","children":[]}]},{"level":2,"title":"第二讲 存储器阵列","slug":"第二讲-存储器阵列","link":"#第二讲-存储器阵列","children":[{"level":3,"title":"分类","slug":"分类","link":"#分类","children":[]},{"level":3,"title":"ROM","slug":"rom","link":"#rom","children":[]},{"level":3,"title":"RAM","slug":"ram","link":"#ram","children":[]}]},{"level":2,"title":"第三讲 FPGA 和 ASIC","slug":"第三讲-fpga-和-asic","link":"#第三讲-fpga-和-asic","children":[{"level":3,"title":"现场可编程逻辑阵列 FPGA","slug":"现场可编程逻辑阵列-fpga","link":"#现场可编程逻辑阵列-fpga","children":[]},{"level":3,"title":"专用集成电路 ASIC","slug":"专用集成电路-asic","link":"#专用集成电路-asic","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/数字系统设计基础/第 5 章 可编程逻辑器件.md"}');export{P as comp,_ as data};
