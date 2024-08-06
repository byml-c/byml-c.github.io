import{_ as s,r as t,o as i,c as o,b as e,d as n,e as a,a as r}from"./app-CUvceQeY.js";const h={},c=e("h2",{id:"总览",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总览"},[e("span",null,"总览")])],-1),u=e("p",null,"我一直想搭一个自己的博客网站，趁暑假有空，就开始了我的尝试。 刚好家里有一台旧的电脑（5 年前的华硕轻薄本），本着成本最低的原则，我决定使用笔记本作为服务器，通过公网 ipv6 的方式，搭建出属于自己的网站。（最终总成本 $1，即￥7.18） 我使用到的技术栈如下：",-1),p=e("li",null,[e("p",null,"Ubuntu 的安装与 Linux 的使用")],-1),d=e("li",null,[e("p",null,"ipv6 和域名")],-1),b=e("li",null,[e("p",null,"Nginx 服务器的使用")],-1),_=e("li",null,[e("p",null,"Node.js 的使用")],-1),g={href:"https://blog.201407.xyz/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://byml-c.github.io/",target:"_blank",rel:"noopener noreferrer"},v=r('<h2 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈"><span>技术栈</span></a></h2><figure><img src="https://cdn.nlark.com/yuque/0/2024/jpeg/39161190/1722931022987-26d1d917-f2b3-4fda-a87f-e6c737e12fe8.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>整个环节只有购买域名有开销（纯数字域名 $1/年）。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><h3 id="ubuntu-安装" tabindex="-1"><a class="header-anchor" href="#ubuntu-安装"><span>Ubuntu 安装</span></a></h3>',5),m={href:"https://www.bilibili.com/video/BV1NM4m1f7Q6/?share_source=copy_web&vd_source=1b61848de1c178a9fc2c24e89bbeb12a",target:"_blank",rel:"noopener noreferrer"},x=e("h3",{id:"服务器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#服务器"},[e("span",null,"服务器")])],-1),k={href:"https://www.bilibili.com/video/BV15T421X7aa/?share_source=copy_web&vd_source=1b61848de1c178a9fc2c24e89bbeb12a",target:"_blank",rel:"noopener noreferrer"},w=e("h3",{id:"域名",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#域名"},[e("span",null,"域名")])],-1),V={href:"https://www.bilibili.com/video/BV1Mz421e76M/?share_source=copy_web&vd_source=1b61848de1c178a9fc2c24e89bbeb12a",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.bilibili.com/video/BV1nJ4m1j78d/?share_source=copy_web&vd_source=1b61848de1c178a9fc2c24e89bbeb12a",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.bilibili.com/video/BV1Lb4y1o7SF/?share_source=copy_web&vd_source=1b61848de1c178a9fc2c24e89bbeb12a",target:"_blank",rel:"noopener noreferrer"},z=e("h3",{id:"nginx",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nginx"},[e("span",null,"Nginx")])],-1),I={href:"https://github.com/dunwu/nginx-tutorial",target:"_blank",rel:"noopener noreferrer"},B=e("h3",{id:"vuepress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress"},[e("span",null,"Vuepress")])],-1),j={href:"https://vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},L=e("h3",{id:"vuepress-reco",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress-reco"},[e("span",null,"Vuepress-reco")])],-1),P={href:"https://theme-reco.vuejs.press/",target:"_blank",rel:"noopener noreferrer"},U=r('<h2 id="踩坑记" tabindex="-1"><a class="header-anchor" href="#踩坑记"><span>踩坑记</span></a></h2><h3 id="ubuntu-安装-1" tabindex="-1"><a class="header-anchor" href="#ubuntu-安装-1"><span>Ubuntu 安装</span></a></h3><p>老笔记本上的 Intel Corporation Wireless 8265/8275 网卡有点问题，有概率连不上网，导致无论是 Ubuntu 的安装还是后续的连接，都卡了很久。最后的解决方案是多重启几次，直到网卡恢复正常🤣 好在视频十分详细，跟着视频做没遇到什么其他的问题。</p><h3 id="服务器-1" tabindex="-1"><a class="header-anchor" href="#服务器-1"><span>服务器</span></a></h3><p>因为家里没有 IPv4，又感觉内网穿透十分的麻烦，于是就选择了 IPv6 的方案。 使用 IPv6 方案要千万记得调光猫，要不然很容易出现内网可访问而外网访问不了的情况。我家的联通宽带直接关掉光猫的IPv6防火墙就可以实现公网访问（好不安全就是了😰 <img src="https://cdn.nlark.com/yuque/0/2024/png/39161190/1722933441031-bda0bcbe-5f45-4754-aeb4-f76835cbbd18.png#averageHue=%23ca6526&amp;clientId=ue6b2c659-a139-4&amp;from=paste&amp;height=524&amp;id=u3e81f96b&amp;originHeight=864&amp;originWidth=1570&amp;originalType=binary&amp;ratio=1.6500000953674316&amp;rotation=0&amp;showTitle=false&amp;size=165784&amp;status=done&amp;style=none&amp;taskId=u8d024131-8145-4079-96c5-903f348e5fa&amp;title=&amp;width=951.5150965190601" alt="image.png" loading="lazy"></p><h3 id="域名-1" tabindex="-1"><a class="header-anchor" href="#域名-1"><span>域名</span></a></h3><p>域名算是踩坑最少的了。一是视频十分详细，一是给了💵（金钱的力量太强大啦🥺）</p><h3 id="vuepress-1" tabindex="-1"><a class="header-anchor" href="#vuepress-1"><span>Vuepress</span></a></h3><p>由于我不是很会 Node.js 的项目架构和开发模式，刚开始只敢改一点配置。结果发现怎样都无法实现我想要的功能（我想实现 Obsidian 的文件夹直接复制到博客里就能正常解析），结果，我就开始读文档。 发现文档仍然有局限性之后，就开始读源码😇（おれは人间をやめるぞ！），一番操作下来，通过自定义插件、模板、改源码等手段，总算是实现了正常的访问。 这部分不难，但就是很繁琐，因为用的是别人的框架，想实现自己的功能没那么容易。</p>',9);function T(C,S){const l=t("ExternalLinkIcon");return i(),o("div",null,[c,u,e("ol",null,[p,d,b,_,e("li",null,[e("p",null,[n("博客框架 Vuepress 的配置 经历了近十几天的折腾，终于得到了个自己的网站： "),e("a",g,[n("首页 | byml’s blog"),a(l)]),n(" 还有使用 Github Pages 的另一版本： "),e("a",f,[n("首页 | byml’s blog"),a(l)]),n(" （两个版本位于不同的服务器，上面那个是跑在家里服务器上的，下面那个是使用 Github 服务器的）")])])]),v,e("p",null,[e("a",m,[n("Ubuntu24.04发布，详细安装教程，拯救旧电脑_哔哩哔哩_bilibili"),a(l)])]),x,e("p",null,[e("a",k,[n("外网访问家庭内网的两大最优方案，零基础教程 远程控制家庭电脑 ，公网访问家庭局域网_哔哩哔哩_bilibili"),a(l)])]),w,e("p",null,[e("a",V,[n("如何低成本获得一个域名，托管Cloudflare免费DNS_哔哩哔哩_bilibili"),a(l)]),e("a",y,[n("如何利用 IPv6 免费把家里电脑变成服务器_哔哩哔哩_bilibili"),a(l)]),e("a",N,[n("【mc开服】教你白嫖运营商公网ipv6跟好兄弟联机_单机游戏热门视频"),a(l)])]),z,e("p",null,[e("a",I,[n("GitHub - dunwu/nginx-tutorial: 这是一个 Nginx 极简教程，目的在于帮助新手快速入门 Nginx。"),a(l)])]),B,e("p",null,[e("a",j,[n("首页"),a(l)])]),L,e("p",null,[e("a",P,[n("vuepress-reco"),a(l)])]),U])}const G=s(h,[["render",T],["__file","wangzhanzhetengshilu.html.vue"]]),H=JSON.parse('{"path":"/blogs/Linux/wangzhanzhetengshilu.html","title":"","lang":"zh-CN","frontmatter":{"prev":{"text":"Vim","link":"/blogs/Linux/Vim.html"}},"headers":[{"level":2,"title":"总览","slug":"总览","link":"#总览","children":[]},{"level":2,"title":"技术栈","slug":"技术栈","link":"#技术栈","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[{"level":3,"title":"Ubuntu 安装","slug":"ubuntu-安装","link":"#ubuntu-安装","children":[]},{"level":3,"title":"服务器","slug":"服务器","link":"#服务器","children":[]},{"level":3,"title":"域名","slug":"域名","link":"#域名","children":[]},{"level":3,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]},{"level":3,"title":"Vuepress","slug":"vuepress","link":"#vuepress","children":[]},{"level":3,"title":"Vuepress-reco","slug":"vuepress-reco","link":"#vuepress-reco","children":[]}]},{"level":2,"title":"踩坑记","slug":"踩坑记","link":"#踩坑记","children":[{"level":3,"title":"Ubuntu 安装","slug":"ubuntu-安装-1","link":"#ubuntu-安装-1","children":[]},{"level":3,"title":"服务器","slug":"服务器-1","link":"#服务器-1","children":[]},{"level":3,"title":"域名","slug":"域名-1","link":"#域名-1","children":[]},{"level":3,"title":"Vuepress","slug":"vuepress-1","link":"#vuepress-1","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/Linux/网站折腾实录.md"}');export{G as comp,H as data};
