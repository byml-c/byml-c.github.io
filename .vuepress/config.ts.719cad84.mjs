var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// plugins/markdown-self.js
import { normalizeReference, isSpace } from "markdown-it/lib/common/utils.mjs";
import mdItObsidianCallouts from "markdown-it-obsidian-callouts";
import { convertToPinyin } from "@vuepress-reco/shared";
var require_markdown_self = __commonJS({
  "plugins/markdown-self.js"(exports, module) {
    function extendsMarkdown(md, app) {
      md.inline.ruler.before("link", "my_inline_link_rule", function(state, silent) {
        let code, pos, res, start, end, labelStart, labelEnd, linkStart, linkEnd;
        let href = "", title = "";
        const oldPos = state.pos;
        const max = state.posMax;
        if (state.src.charCodeAt(state.pos) !== 91) {
          return false;
        }
        if (state.src.charCodeAt(state.pos + 1) !== 91) {
          return false;
        }
        linkStart = state.pos + 2;
        linkEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
        if (linkEnd < 0) {
          return false;
        }
        pos = state.pos + 1;
        if (pos < max) {
          pos++;
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace(code) && code !== 10) {
              break;
            }
          }
          if (pos >= max) {
            return false;
          }
          end = pos;
          for (; end < max; end++) {
            code = state.src.charCodeAt(end);
            if (code === 10 || code === 124 || code === 93) {
              break;
            }
          }
          if (end >= max) {
            return false;
          }
          res = state.src.slice(pos, end);
          href = state.md.normalizeLink(res);
          if (state.md.validateLink(href)) {
            pos = end;
          } else {
            href = "";
          }
          start = pos;
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace(code) && code !== 10 && code != 124) {
              break;
            }
          }
          labelStart = pos;
          res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
          if (pos < max && start !== pos && res.ok) {
            title = res.str;
            pos = res.pos;
            for (; pos < max; pos++) {
              code = state.src.charCodeAt(pos);
              if (!isSpace(code) && code !== 10 && code !== 93) {
                break;
              }
            }
            labelEnd = pos;
          } else {
            title = "";
          }
          if (pos >= max || state.src.charCodeAt(pos) != 93 || state.src.charCodeAt(pos + 1) != 93) {
            state.pos = oldPos;
            return false;
          }
          pos += 2;
        }
        if (!silent) {
          let formatUrl = function(originalUrl) {
            const endsWithHtml = originalUrl.toLowerCase().endsWith(".html");
            if (!endsWithHtml) {
              const hashPos = originalUrl.indexOf("#");
              const hashPart = hashPos === -1 ? "" : originalUrl.substring(hashPos);
              const formattedUrl = originalUrl.slice(0, hashPos) + ".html" + hashPart;
              return formattedUrl;
            } else {
              return originalUrl;
            }
          };
          if (title) {
            state.pos = labelStart;
            state.posMax = labelEnd;
          } else {
            state.pos = linkStart;
            state.posMax = linkEnd;
            title = decodeURIComponent(href);
          }
          const token_o = state.push("link_open", "a", 1);
          const attrs = [["href", "./" + href], ["title", title]];
          token_o.attrs = attrs;
          state.linkLevel++;
          state.md.inline.tokenize(state);
          state.linkLevel--;
          state.push("link_close", "a", -1);
        }
        state.pos = pos;
        state.posMax = max;
        return true;
      });
      md.inline.ruler.before("image", "my_inline_image_rule", function(state, silent) {
        let code, pos, res, start, end;
        let href = "", title = "";
        const oldPos = state.pos;
        const max = state.posMax;
        if (state.src.charCodeAt(state.pos) !== 33) {
          return false;
        }
        if (state.src.charCodeAt(state.pos + 1) !== 91) {
          return false;
        }
        if (state.src.charCodeAt(state.pos + 2) !== 91) {
          return false;
        }
        const linkEnd = state.md.helpers.parseLinkLabel(state, state.pos + 2, false);
        if (linkEnd < 0) {
          return false;
        }
        pos = state.pos + 2;
        if (pos < max) {
          pos++;
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace(code) && code !== 10) {
              break;
            }
          }
          if (pos >= max) {
            return false;
          }
          end = pos;
          for (; end < max; end++) {
            code = state.src.charCodeAt(end);
            if (code === 10 || code === 124 || code === 93) {
              break;
            }
          }
          if (end >= max) {
            return false;
          }
          res = state.src.slice(pos, end);
          href = state.md.normalizeLink(`./attachments/${res}`);
          if (state.md.validateLink(href)) {
            pos = end;
          } else {
            href = "";
          }
          start = pos;
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace(code) && code !== 10 && code != 124) {
              break;
            }
          }
          res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
          if (pos < max && start !== pos && res.ok) {
            title = res.str;
            pos = res.pos;
            for (; pos < max; pos++) {
              code = state.src.charCodeAt(pos);
              if (!isSpace(code) && code !== 10 && code !== 93) {
                break;
              }
            }
          } else {
            title = "";
          }
          if (pos >= max || state.src.charCodeAt(pos) != 93 || state.src.charCodeAt(pos + 1) != 93) {
            state.pos = oldPos;
            return false;
          }
          pos += 2;
        }
        if (!silent) {
          const token = state.push("image", "img", 0);
          const attrs = [["src", href], ["alt", ""], ["title", title]];
          token.attrs = attrs;
          token.children = [];
          token.content = title;
        }
        state.pos = pos;
        state.posMax = max;
        return true;
      });
      md.use(mdItObsidianCallouts);
    }
    function extendsPage(page, app) {
      if (page.filePath !== null && (!page.title || !page.data.title)) {
        page.title = page.filePath.split("/").pop().replace(/\.md$/, "");
        page.title = decodeURIComponent(page.title);
        page.data.title = page.title;
      }
    }
    function onInitialized(app) {
      function getFolderPath(path) {
        let folder_path = path.split("/");
        folder_path.pop();
        return folder_path.join("/");
      }
      for (let page_index = 0; page_index < app.pages.length; page_index++) {
        const page = app.pages[page_index];
        if (page.path.slice(1, 6) === "blogs") {
          const page_folder_path = getFolderPath(page.path);
          if (page_index > 0) {
            const prev_page = app.pages[page_index - 1];
            if (getFolderPath(prev_page.path) === page_folder_path) {
              page.frontmatter.prev = {
                text: prev_page.title,
                link: prev_page.path
              };
              page.data.frontmatter.prev = page.frontmatter.prev;
            }
          }
          if (page_index < app.pages.length - 1) {
            const next_page = app.pages[page_index + 1];
            if (getFolderPath(next_page.path) === page_folder_path) {
              page.frontmatter.next = {
                text: next_page.title,
                link: next_page.path
              };
              page.data.frontmatter.next = page.frontmatter.next;
            }
          }
        }
      }
    }
    module.exports = (options, app) => {
      return {
        name: "vuepress-plugin-markdown-self",
        multiple: true,
        extendsPage,
        extendsMarkdown,
        onInitialized
      };
    };
  }
});

// .vuepress/config.ts
import { viteBundler } from "@vuepress/bundler-vite";
import { recoTheme } from "vuepress-theme-reco";
import { defineUserConfig } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
var config_default = defineUserConfig({
  bundler: viteBundler({}),
  // bundler: webpackBundler({
  //   configureWebpack(config, isServer, isBuild) {
  //     return { mode: 'development' };
  //   }
  // }),
  lang: "zh-CN",
  title: "byml's blog",
  description: "byml's blog",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  // alias: {
  //   '@types': path.resolve(__dirname, '../types'),
  //   '@client': path.resolve(__dirname, '../client'),
  //   '@utils': path.resolve(__dirname, '../client/utils'),
  //   '@components': path.resolve(__dirname, '../client/components'),
  //   '@composables': path.resolve(__dirname, '../client/composables'),
  // },
  theme: recoTheme({
    author: "byml",
    authorAvatar: "/logo.png",
    logo: "/logo.png",
    docsRepo: "",
    autoSetBlogCategories: true,
    catalogTitle: "\u76EE\u5F55",
    navbar: [
      {
        text: "\u8BFE\u7A0B\u7B14\u8BB0",
        icon: "Notebook",
        children: [
          {
            text: "\u6570\u5B57\u7CFB\u7EDF\u8BBE\u8BA1\u57FA\u7840",
            link: "/categories/\u6570\u5B57\u7CFB\u7EDF\u8BBE\u8BA1\u57FA\u7840/1.html"
          },
          {
            text: "CV",
            link: "/categories/CV/1.html"
          },
          {
            text: "OS",
            link: "/categories/OS/1.html"
          }
        ]
      },
      {
        text: "\u6280\u672F\u535A\u5BA2",
        icon: "Blog",
        children: [
          {
            text: "Linux \u5B66\u4E60",
            link: "/categories/Linux/1.html"
          }
        ]
      },
      { text: "\u53CB\u60C5\u94FE\u63A5", icon: "Link", link: "/friendship.html" },
      { text: "\u4E2A\u4EBA\u7B80\u4ECB", icon: "UserAvatar", link: "/about.html" }
    ],
    about: {
      photo: "/logo.png",
      school: "\u5357\u4EAC\u5927\u5B66",
      major: "\u667A\u80FD\u79D1\u5B66\u4E0E\u6280\u672F",
      email: "231880291@smail.nju.edu.cn",
      introduction: "byml \u7684\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u8BB0\u5F55\u5B66\u4E60\u8FC7\u7A0B\u4E2D\u7684\u70B9\u6EF4",
      socal: [{
        icon: "LogoGithub",
        content: "GitHub",
        link: "https://github.com/byml-c"
      }],
      education: [{
        time: "2023-\u81F3\u4ECA",
        school: "\u5357\u4EAC\u5927\u5B66",
        major: "\u667A\u80FD\u79D1\u5B66\u4E0E\u6280\u672F",
        degree: "\u672C\u79D1"
      }],
      works: []
    },
    fullAbout: {
      photo: "/logo.png",
      school: "\u5357\u4EAC\u5927\u5B66",
      major: "\u667A\u80FD\u79D1\u5B66\u4E0E\u6280\u672F",
      score: "4.60",
      rank: "13/151",
      email: "231880291@smail.nju.edu.cn",
      introduction: "\u6211\u662F\u4E00\u540D\u5357\u4EAC\u5927\u5B66\u667A\u80FD\u79D1\u5B66\u4E0E\u6280\u672F\u5B66\u9662\u5927\u4E8C\u672C\u79D1\u751F\u3002\u5BF9\u5927\u8BED\u8A00\u6A21\u578B\u5E94\u7528\u3001\u8BA1\u7B97\u673A\u56FE\u5F62\u5B66\u3001\u673A\u5668\u4EBA\u4EFF\u771F\u6709\u6240\u7814\u7A76\u3002\u6709\u8F83\u4E30\u5BCC\u7684 Linux \u670D\u52A1\u5668\u3001HPC \u4F7F\u7528\u7ECF\u9A8C\u3002\u76EE\u524D\u7814\u7A76\u5174\u8DA3\u4E3A\u5177\u8EAB\u667A\u80FD\u3002",
      socal: [{
        icon: "LogoGithub",
        content: "GitHub",
        link: "https://github.com/byml-c"
      }],
      works: [{
        time: "2025-\u4ECA",
        img: "#",
        title: "RoboTwin 2.0",
        description: "\u8D1F\u8D23 API \u8BBE\u8BA1\u3001\u8D44\u4EA7\u6807\u5B9A\u3001\u4EFB\u52A1\u8BBE\u7F6E",
        link: "#"
      }, {
        time: "2025",
        img: "https://robotwin-benchmark.github.io/cvpr-2025-challenge/files/small_poster.png",
        title: "RoboTwin Dual-Arm Collaboration Challenge 2nd MEIS Workshop@CVPR2025",
        description: "\u8D1F\u8D23\u89C6\u89E6\u89C9\u4EFF\u771F\u73AF\u5883\u7684\u642D\u5EFA",
        link: "https://robotwin-benchmark.github.io/cvpr-2025-challenge/"
      }],
      experiments: [{
        time: "2024-2025",
        title: "\u9AD8\u4FDD\u771F\u53EF\u9A71\u52A8\u4E09\u7EF4\u6570\u5B57\u4EBA\u5EFA\u6A21",
        description: "\u5357\u4EAC\u5927\u5B66\u521B\u65B0\u8BAD\u7EC3\u9879\u76EE\uFF0C\u4E09\u7EF4\u89C6\u89C9\u3001\u6570\u5B57\u4EBA\u65B9\u5411",
        img: "#",
        link: "#"
      }, {
        time: "2024-2025",
        title: "\u9762\u5411\u9762\u6599\u8868\u9762\u7F3A\u9677\u68C0\u6D4B\u7684\u673A\u5668\u5B66\u4E60\u65B9\u6CD5\u7814\u7A76",
        description: "\u5357\u4EAC\u5927\u5B66\u521B\u65B0\u8BAD\u7EC3\u9879\u76EE\uFF0C\u8BA1\u7B97\u673A\u89C6\u89C9\u7269\u4F53\u8BC6\u522B\u65B9\u5411",
        img: "#",
        link: "#"
      }, {
        time: "2025 \u6625",
        title: "Shell Agent",
        description: "\u57FA\u4E8E\u63D0\u793A\u5DE5\u7A0B\u548C\u5927\u6A21\u578B\u51FD\u6570\u8C03\u7528\u80FD\u529B\u7684\u547D\u4EE4\u884C AI Agent\u3002",
        img: "#",
        link: "https://github.com/byml-c/ag"
      }, {
        time: "2024 \u6625",
        title: "\u5357\u4EAC\u5927\u5B66\xB7\u767E\u5EA6\u201C\u661F\u6CB3\u676F\u201DAI\u5927\u6A21\u578B\u521B\u610F\u8D5B",
        description: "\u4F5C\u54C1\u201C\u6307\u2018\u5357\u2019\u201D\u5357\u4EAC\u5927\u5B66\u65B0\u751F\u667A\u80FD\u52A9\u624B\uFF0C\u91C7\u7528 RAG \u548C\u63D0\u793A\u5DE5\u7A0B\u6280\u672F\uFF0C\u83B7\u5F97\u4E8C\u7B49\u5956\u3002",
        img: "#",
        link: "https://mp.weixin.qq.com/s/3y4-KF09dh9DaNP9ZBw5Rw"
      }, {
        time: "2024 \u6625",
        title: "\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u5927\u9879\u76EE\uFF1AShapeZ-StarRail",
        description: "\u4F7F\u7528 C++ Qt \u6846\u67B6\uFF0C\u7ED3\u5408\u4E86 ShapeZ \u7684\u653E\u7F6E\u73A9\u6CD5\uFF0C\u5E76\u5728\u5176\u4E2D\u6DFB\u52A0\u4E86 Star Rail\uFF08\u5D29\u574F\xB7\u661F\u7A79\u94C1\u9053\uFF09\u7684\u5143\u7D20\uFF0C\u589E\u52A0\u4E86\u6E38\u620F\u7684\u8DA3\u5473\u6027\u548C\u53EF\u73A9\u6027\u3002",
        img: "ShapeZ-StarRail.png",
        link: ["https://github.com/byml-c/ShapeZ-StarRail", "https://www.bilibili.com/video/BV1Xt3neeEhF/"]
      }, {
        time: "2024 \u5BD2\u5047",
        title: "\u5357\u4EAC\u5927\u5B66\u65B0\u751F\u667A\u80FD\u95EE\u7B54\u6280\u672F\u63A2\u7D22",
        description: "\u8FDB\u884C RAG\u3001\u5FAE\u8C03\u7B49\u524D\u6CBF\u6280\u672F\u63A2\u7D22\uFF0C\u5E76\u5B9E\u73B0\u5728 NJU HPC \u8D85\u7B97\u5E73\u53F0\u4E0A\u5FAE\u8C03 Qwen-14B-Chat \u6A21\u578B\u3002",
        img: "#",
        link: "https://github.com/byml-c/ag"
      }],
      prize: [{
        time: "2024",
        title: "\u62DB\u5546\u94F6\u884C\u91D1\u8475\u82B1\u5956\u5B66\u91D1\uFF08\u4E8C\u7B49\u5956\uFF09",
        description: "\u9AD8\u989D\u5956\u5B66\u91D1"
      }, {
        time: "2020",
        title: "NOIP 2020 \u4E00\u7B49\u5956",
        description: "\u5168\u56FD\u9752\u5C11\u5E74\u4FE1\u606F\u5B66\u5965\u6797\u5339\u514B\u7ADE\u8D5B\uFF08NOIP\uFF092020 \u4E00\u7B49\u5956"
      }]
    },
    friendshipLinks: [
      {
        title: "wyaaaattwho",
        logo: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbcc83a06-70e2-4332-93f9-b89147e2a6bd%2F8c491ea8-1469-4082-83e9-10dce4136cff%2F_.jpeg?table=collection&id=e49a506f-d4f7-4765-922b-75581ed41eff&t=e49a506f-d4f7-4765-922b-75581ed41eff&width=800&cache=v2",
        link: "https://blog.wyaaaattwho.xyz/",
        description: "\u6765\u81EA\u91CD\u5E86\u7684 ML \u5927\u4F6C",
        icon: "Blog"
      },
      {
        title: "TenofHearts",
        logo: "https://tenofhearts.github.io/assets/img/Profile.png",
        link: "https://tenofhearts.github.io/",
        description: "\u6211\u7684\u5927\u5B59\u5B50",
        icon: "Blog"
      },
      {
        title: "JynP",
        logo: "https://avatars.githubusercontent.com/u/49114660?v=4",
        link: "https://pengjin2005.github.io/",
        description: "",
        icon: "Identification"
      },
      {
        title: "Yonom1",
        logo: "https://yonom1.github.io/img/logo.jpg",
        link: "https://yonom1.github.io/",
        description: "\u672A\u6765\u7684 AI \u7B97\u6CD5\u5DE5\u7A0B\u5E08",
        icon: "Identification"
      },
      {
        title: "HRH",
        logo: "https://avatars.githubusercontent.com/u/144311309?v=4",
        link: "https://github.com/HRH0410",
        description: "",
        icon: "LogoGithub"
      },
      {
        title: "C-LBY",
        logo: "https://c-lby.top/favicon.png",
        link: "https://c-lby.top/",
        description: "\u4F4D\u4E8E\u5E7F\u4E1C\u7684\u7F51\u5B89\u5927\u4F6C",
        icon: "Blog"
      }
    ],
    pages: [
      {
        path: "/friendship.html",
        layout: "FriendshipLayout"
      },
      {
        path: "/about.html",
        layout: "AboutLayout"
      },
      {
        path: "/full-about.html",
        layout: "FullAboutLayout"
      }
    ],
    fullAboutPassword: "c61f685903c121b381c0481085e1c7bf",
    editLink: false,
    markdown: {
      title: false
    }
    // commentConfig: {
    //   type: 'valine',
    //   options: {
    //     appId: 'g9YHL1SXyHUh9fLDRXqH0JTf-MdYXbMMI',
    //     appKey: 'oj0jh5p6lDGwsIetWrPog4V5',
    //     hideComments: false, // 全局隐藏评论，默认 false
    //   },
    // },
    // commentConfig: {
    //   type: 'waline',
    //   options: {
    //     serverURL: 'https://website-comment-kbpsgr4w1-byml-cs-projects.vercel.app/',
    //     // hideComments: true
    //   }
    // }
  }),
  plugins: [
    require_markdown_self(),
    mdEnhancePlugin({
      // 使用 mathjax 渲染公式
      mathjax: true,
      // 启用下角标功能
      sub: true,
      // 启用上角标
      sup: true,
      // 启用任务列表
      tasklist: true,
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      imgMark: true,
      // 启用图片大小
      imgSize: true,
      // 启用脚注
      footnote: true,
      // 添加选项卡支持
      tabs: true,
      // 启用 GFM 警告
      // alert: true,
      // 启用提示容器
      hint: true,
      // 开启剧透
      spoiler: true,
      // 开启属性支持
      attrs: true,
      // 开启标记 == == 语法
      mark: true,
      // 启用 mermaid
      mermaid: true
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGx1Z2lucy9tYXJrZG93bi1zZWxmLmpzIiwgIi52dWVwcmVzcy9jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9Qcm9qZWN0cy93ZWJzaXRlL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXHdlYnNpdGVcXFxccGx1Z2luc1xcXFxtYXJrZG93bi1zZWxmLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0cy93ZWJzaXRlL3BsdWdpbnMvbWFya2Rvd24tc2VsZi5qc1wiO2ltcG9ydCB7IG5vcm1hbGl6ZVJlZmVyZW5jZSwgaXNTcGFjZSB9IGZyb20gJ21hcmtkb3duLWl0L2xpYi9jb21tb24vdXRpbHMubWpzJ1xyXG5pbXBvcnQgbWRJdE9ic2lkaWFuQ2FsbG91dHMgZnJvbSAnbWFya2Rvd24taXQtb2JzaWRpYW4tY2FsbG91dHMnXHJcbmltcG9ydCB7IGNvbnZlcnRUb1BpbnlpbiB9IGZyb20gJ0B2dWVwcmVzcy1yZWNvL3NoYXJlZCdcclxuXHJcbmZ1bmN0aW9uIGV4dGVuZHNNYXJrZG93bihtZCwgYXBwKSB7XHJcbiAgICBtZC5pbmxpbmUucnVsZXIuYmVmb3JlKCdsaW5rJywgJ215X2lubGluZV9saW5rX3J1bGUnLCBmdW5jdGlvbiAoc3RhdGUsIHNpbGVudCkge1xyXG4gICAgICAgIGxldCBjb2RlLCBwb3MsIHJlcywgc3RhcnQsIGVuZCwgbGFiZWxTdGFydCwgbGFiZWxFbmQsIGxpbmtTdGFydCwgbGlua0VuZFxyXG4gICAgICAgIGxldCBocmVmID0gJycsIHRpdGxlID0gJydcclxuICAgICAgICBjb25zdCBvbGRQb3MgPSBzdGF0ZS5wb3NcclxuICAgICAgICBjb25zdCBtYXggPSBzdGF0ZS5wb3NNYXhcclxuXHJcbiAgICAgICAgLy8gXHU1MzM5XHU5MTREIFtbICBocmVmIHwgdGl0bGUgXV0gXHU3Njg0XHU5NEZFXHU2M0E1XHU4QkVEXHU2Q0Q1XHJcbiAgICAgICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcykgIT09IDB4NUIvKiBbICovKSB7IHJldHVybiBmYWxzZSB9XHJcbiAgICAgICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcyArIDEpICE9PSAweDVCLyogWyAqLykgeyByZXR1cm4gZmFsc2UgfVxyXG5cclxuICAgICAgICBsaW5rU3RhcnQgPSBzdGF0ZS5wb3MgKyAyXHJcbiAgICAgICAgbGlua0VuZCA9IHN0YXRlLm1kLmhlbHBlcnMucGFyc2VMaW5rTGFiZWwoc3RhdGUsIHN0YXRlLnBvcyArIDEsIGZhbHNlKVxyXG5cclxuICAgICAgICAvLyBwYXJzZXIgZmFpbGVkIHRvIGZpbmQgJ10nLCBzbyBpdCdzIG5vdCBhIHZhbGlkIGxpbmtcclxuICAgICAgICBpZiAobGlua0VuZCA8IDApIHsgcmV0dXJuIGZhbHNlIH1cclxuXHJcbiAgICAgICAgcG9zID0gc3RhdGUucG9zICsgMVxyXG4gICAgICAgIGlmIChwb3MgPCBtYXgpIHtcclxuICAgICAgICAgICAgcG9zKytcclxuICAgICAgICAgICAgLy8gW1sgIGhyZWYgfCB0aXRsZSBdXVxyXG4gICAgICAgICAgICAvLyAgIF5eIHNraXBwaW5nIHRoZXNlIHNwYWNlc1xyXG4gICAgICAgICAgICBmb3IgKDsgcG9zIDwgbWF4OyBwb3MrKykge1xyXG4gICAgICAgICAgICAgICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcylcclxuICAgICAgICAgICAgICAgIGlmICghaXNTcGFjZShjb2RlKSAmJiBjb2RlICE9PSAweDBBKSB7IGJyZWFrIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocG9zID49IG1heCkgeyByZXR1cm4gZmFsc2UgfVxyXG5cclxuICAgICAgICAgICAgLy8gW1sgIGhyZWYgfCB0aXRsZSBdXVxyXG4gICAgICAgICAgICAvLyAgICAgXl5eXiBwYXJzaW5nIGxpbmsgZGVzdGluYXRpb25cclxuICAgICAgICAgICAgZW5kID0gcG9zXHJcbiAgICAgICAgICAgIGZvciAoOyBlbmQgPCBtYXg7IGVuZCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoZW5kKVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IDB4MEEgfHwgY29kZSA9PT0gMHg3QyAvKiB8ICovIHx8IGNvZGUgPT09IDB4NUQgLyogXSAqLykgeyBicmVhayB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVuZCA+PSBtYXgpIHsgcmV0dXJuIGZhbHNlIH1cclxuXHJcbiAgICAgICAgICAgIHJlcyA9IHN0YXRlLnNyYy5zbGljZShwb3MsIGVuZClcclxuICAgICAgICAgICAgaHJlZiA9IHN0YXRlLm1kLm5vcm1hbGl6ZUxpbmsocmVzKVxyXG4gICAgICAgICAgICBpZiAoc3RhdGUubWQudmFsaWRhdGVMaW5rKGhyZWYpKSB7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBlbmRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGhyZWYgPSAnJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBbWyAgaHJlZiB8IHRpdGxlIF1dXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgXl5eIHNraXBwaW5nIHRoZXNlIHNwYWNlc1xyXG4gICAgICAgICAgICBzdGFydCA9IHBvc1xyXG4gICAgICAgICAgICBmb3IgKDsgcG9zIDwgbWF4OyBwb3MrKykge1xyXG4gICAgICAgICAgICAgICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcylcclxuICAgICAgICAgICAgICAgIGlmICghaXNTcGFjZShjb2RlKSAmJiBjb2RlICE9PSAweDBBICYmIGNvZGUgIT0gMHg3QyAvKiB8ICovKSB7IGJyZWFrIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gW1sgIGhyZWYgfCB0aXRsZSBdXVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIF5eXl5eIHNraXBwaW5nIHRoZXNlIHNwYWNlc1xyXG4gICAgICAgICAgICBsYWJlbFN0YXJ0ID0gcG9zXHJcbiAgICAgICAgICAgIHJlcyA9IHN0YXRlLm1kLmhlbHBlcnMucGFyc2VMaW5rVGl0bGUoc3RhdGUuc3JjLCBwb3MsIHN0YXRlLnBvc01heClcclxuICAgICAgICAgICAgaWYgKHBvcyA8IG1heCAmJiBzdGFydCAhPT0gcG9zICYmIHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgdGl0bGUgPSByZXMuc3RyXHJcbiAgICAgICAgICAgICAgICBwb3MgPSByZXMucG9zXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gIVtbICBocmVmIHwgdGl0bGUgXV1cclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgXiBza2lwcGluZyB0aGVzZSBzcGFjZXNcclxuICAgICAgICAgICAgICAgIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcylcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzU3BhY2UoY29kZSkgJiYgY29kZSAhPT0gMHgwQSAmJiBjb2RlICE9PSAweDVELyogXSAqLykgeyBicmVhayB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbEVuZCA9IHBvc1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGl0bGUgPSAnJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocG9zID49IG1heCB8fCBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9IDB4NUQvKl0qL1xyXG4gICAgICAgICAgICAgICAgfHwgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zICsgMSkgIT0gMHg1RC8qXSovKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wb3MgPSBvbGRQb3NcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvcyArPSAyXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFdlIGZvdW5kIHRoZSBlbmQgb2YgdGhlIGxpbmssIGFuZCBrbm93IGZvciBhIGZhY3QgaXQncyBhIHZhbGlkIGxpbms7XHJcbiAgICAgICAgLy8gc28gYWxsIHRoYXQncyBsZWZ0IHRvIGRvIGlzIHRvIGNhbGwgdG9rZW5pemVyLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wb3MgPSBsYWJlbFN0YXJ0XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wb3NNYXggPSBsYWJlbEVuZFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucG9zID0gbGlua1N0YXJ0XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wb3NNYXggPSBsaW5rRW5kXHJcbiAgICAgICAgICAgICAgICB0aXRsZSA9IGRlY29kZVVSSUNvbXBvbmVudChocmVmKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBmb3JtYXRVcmwob3JpZ2luYWxVcmwpIHtcclxuICAgICAgICAgICAgICAgIC8vIFx1NjhDMFx1NjdFNVx1NjYyRlx1NTQyNlx1OTcwMFx1ODk4MVx1NkRGQlx1NTJBMCAuaHRtbFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kc1dpdGhIdG1sID0gb3JpZ2luYWxVcmwudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLmh0bWwnKTtcclxuICAgICAgICAgICAgICAgIGlmICghZW5kc1dpdGhIdG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gXHU2MjdFXHU1MjMwICMgXHU3Njg0XHU0RjREXHU3RjZFXHVGRjBDXHU1OTgyXHU2NzlDXHU2Q0ExXHU2NzA5XHU1MjE5XHU4QkJFXHU0RTNBXHU1QjU3XHU3QjI2XHU0RTMyXHU5NTdGXHU1RUE2XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzaFBvcyA9IG9yaWdpbmFsVXJsLmluZGV4T2YoJyMnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNoUGFydCA9IChoYXNoUG9zID09PSAtMSkgPyAnJyA6IG9yaWdpbmFsVXJsLnN1YnN0cmluZyhoYXNoUG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gXHU2REZCXHU1MkEwIC5odG1sIFx1NUU3Nlx1NEZERFx1NzU1OVx1NTM5Rlx1NjcwOVx1NzY4NFx1NTRDOFx1NUUwQ1x1OTBFOFx1NTIwNlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFVybCA9IG9yaWdpbmFsVXJsLnNsaWNlKDAsIGhhc2hQb3MpICsgJy5odG1sJyArIGhhc2hQYXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXR0ZWRVcmw7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NURGMlx1N0VDRlx1NjYyRiAuaHRtbCBcdTdFRDNcdTVDM0VcdUZGMENcdTc2RjRcdTYzQTVcdThGRDRcdTU2REVcdTUzOUYgVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsVXJsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGhyZWYgPSBmb3JtYXRVcmwoZGVjb2RlVVJJQ29tcG9uZW50KGhyZWYpKTtcclxuICAgICAgICAgICAgLy8gaHJlZiA9IGNvbnZlcnRUb1BpbnlpbihocmVmKTtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW5fbyA9IHN0YXRlLnB1c2goJ2xpbmtfb3BlbicsICdhJywgMSlcclxuICAgICAgICAgICAgY29uc3QgYXR0cnMgPSBbWydocmVmJywgJy4vJytocmVmXSwgWyd0aXRsZScsIHRpdGxlXV1cclxuICAgICAgICAgICAgdG9rZW5fby5hdHRycyA9IGF0dHJzXHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5saW5rTGV2ZWwrK1xyXG4gICAgICAgICAgICBzdGF0ZS5tZC5pbmxpbmUudG9rZW5pemUoc3RhdGUpXHJcbiAgICAgICAgICAgIHN0YXRlLmxpbmtMZXZlbC0tXHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5wdXNoKCdsaW5rX2Nsb3NlJywgJ2EnLCAtMSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRlLnBvcyA9IHBvc1xyXG4gICAgICAgIHN0YXRlLnBvc01heCA9IG1heFxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KVxyXG4gICAgbWQuaW5saW5lLnJ1bGVyLmJlZm9yZSgnaW1hZ2UnLCAnbXlfaW5saW5lX2ltYWdlX3J1bGUnLCBmdW5jdGlvbiAoc3RhdGUsIHNpbGVudCkge1xyXG4gICAgICAgIGxldCBjb2RlLCBwb3MsIHJlcywgc3RhcnQsIGVuZFxyXG4gICAgICAgIGxldCBocmVmID0gJycsIHRpdGxlID0gJydcclxuICAgICAgICBjb25zdCBvbGRQb3MgPSBzdGF0ZS5wb3NcclxuICAgICAgICBjb25zdCBtYXggPSBzdGF0ZS5wb3NNYXhcclxuXHJcbiAgICAgICAgLy8gXHU1MzM5XHU5MTREICFbWyAgaHJlZiB8IHRpdGxlIF1dIFx1NzY4NFx1NTZGRVx1NzI0N1x1OEJFRFx1NkNENVxyXG4gICAgICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MpICE9PSAweDIxLyogISAqLykgeyByZXR1cm4gZmFsc2UgfVxyXG4gICAgICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MgKyAxKSAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIGZhbHNlIH1cclxuICAgICAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zICsgMikgIT09IDB4NUIvKiBbICovKSB7IHJldHVybiBmYWxzZSB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmtFbmQgPSBzdGF0ZS5tZC5oZWxwZXJzLnBhcnNlTGlua0xhYmVsKHN0YXRlLCBzdGF0ZS5wb3MgKyAyLCBmYWxzZSlcclxuXHJcbiAgICAgICAgLy8gcGFyc2VyIGZhaWxlZCB0byBmaW5kICddJywgc28gaXQncyBub3QgYSB2YWxpZCBsaW5rXHJcbiAgICAgICAgaWYgKGxpbmtFbmQgPCAwKSB7IHJldHVybiBmYWxzZSB9XHJcblxyXG4gICAgICAgIHBvcyA9IHN0YXRlLnBvcyArIDJcclxuICAgICAgICBpZiAocG9zIDwgbWF4KSB7XHJcbiAgICAgICAgICAgIHBvcysrXHJcbiAgICAgICAgICAgIC8vICFbWyAgaHJlZiB8IHRpdGxlIF1dXHJcbiAgICAgICAgICAgIC8vICAgIF5eIHNraXBwaW5nIHRoZXNlIHNwYWNlc1xyXG4gICAgICAgICAgICBmb3IgKDsgcG9zIDwgbWF4OyBwb3MrKykge1xyXG4gICAgICAgICAgICAgICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcylcclxuICAgICAgICAgICAgICAgIGlmICghaXNTcGFjZShjb2RlKSAmJiBjb2RlICE9PSAweDBBKSB7IGJyZWFrIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocG9zID49IG1heCkgeyByZXR1cm4gZmFsc2UgfVxyXG5cclxuICAgICAgICAgICAgLy8gIVtbICBocmVmIHwgdGl0bGUgXV1cclxuICAgICAgICAgICAgLy8gICAgICBeXl5eIHBhcnNpbmcgbGluayBkZXN0aW5hdGlvblxyXG4gICAgICAgICAgICBlbmQgPSBwb3NcclxuICAgICAgICAgICAgZm9yICg7IGVuZCA8IG1heDsgZW5kKyspIHtcclxuICAgICAgICAgICAgICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChlbmQpXHJcbiAgICAgICAgICAgICAgICBpZiAoY29kZSA9PT0gMHgwQSB8fCBjb2RlID09PSAweDdDIC8qIHwgKi8gfHwgY29kZSA9PT0gMHg1RCAvKiBdICovKSB7IGJyZWFrIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW5kID49IG1heCkgeyByZXR1cm4gZmFsc2UgfVxyXG5cclxuICAgICAgICAgICAgcmVzID0gc3RhdGUuc3JjLnNsaWNlKHBvcywgZW5kKVxyXG4gICAgICAgICAgICBocmVmID0gc3RhdGUubWQubm9ybWFsaXplTGluayhgLi9hdHRhY2htZW50cy8ke3Jlc31gKVxyXG4gICAgICAgICAgICBpZiAoc3RhdGUubWQudmFsaWRhdGVMaW5rKGhyZWYpKSB7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBlbmRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGhyZWYgPSAnJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAhW1sgIGhyZWYgfCB0aXRsZSBdXVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICBeXl4gc2tpcHBpbmcgdGhlc2Ugc3BhY2VzXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gcG9zXHJcbiAgICAgICAgICAgIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XHJcbiAgICAgICAgICAgICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc1NwYWNlKGNvZGUpICYmIGNvZGUgIT09IDB4MEEgJiYgY29kZSAhPSAweDdDIC8qIHwgKi8pIHsgYnJlYWsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAhW1sgIGhyZWYgfCB0aXRsZSBdXVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBeXl5eXiBza2lwcGluZyB0aGVzZSBzcGFjZXNcclxuICAgICAgICAgICAgcmVzID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtUaXRsZShzdGF0ZS5zcmMsIHBvcywgc3RhdGUucG9zTWF4KVxyXG4gICAgICAgICAgICBpZiAocG9zIDwgbWF4ICYmIHN0YXJ0ICE9PSBwb3MgJiYgcmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZSA9IHJlcy5zdHJcclxuICAgICAgICAgICAgICAgIHBvcyA9IHJlcy5wb3NcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAhW1sgIGhyZWYgfCB0aXRsZSBdXVxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICBeIHNraXBwaW5nIHRoZXNlIHNwYWNlc1xyXG4gICAgICAgICAgICAgICAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNTcGFjZShjb2RlKSAmJiBjb2RlICE9PSAweDBBICYmIGNvZGUgIT09IDB4NUQvKiBdICovKSB7IGJyZWFrIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlID0gJydcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHBvcyA+PSBtYXggfHwgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPSAweDVELypdKi9cclxuICAgICAgICAgICAgICAgIHx8IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyArIDEpICE9IDB4NUQvKl0qLykge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucG9zID0gb2xkUG9zXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3MgKz0gMlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBXZSBmb3VuZCB0aGUgZW5kIG9mIHRoZSBsaW5rLCBhbmQga25vdyBmb3IgYSBmYWN0IGl0J3MgYSB2YWxpZCBsaW5rO1xyXG4gICAgICAgIC8vIHNvIGFsbCB0aGF0J3MgbGVmdCB0byBkbyBpcyB0byBjYWxsIHRva2VuaXplci5cclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gc3RhdGUucHVzaCgnaW1hZ2UnLCAnaW1nJywgMClcclxuICAgICAgICAgICAgY29uc3QgYXR0cnMgPSBbWydzcmMnLCBocmVmXSwgWydhbHQnLCAnJ10sIFsndGl0bGUnLCB0aXRsZV1dXHJcbiAgICAgICAgICAgIHRva2VuLmF0dHJzID0gYXR0cnNcclxuICAgICAgICAgICAgdG9rZW4uY2hpbGRyZW4gPSBbXVxyXG4gICAgICAgICAgICB0b2tlbi5jb250ZW50ID0gdGl0bGVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRlLnBvcyA9IHBvc1xyXG4gICAgICAgIHN0YXRlLnBvc01heCA9IG1heFxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKE9iamVjdC52YWx1ZXMobWQuaW5saW5lLnJ1bGVyLl9fcnVsZXNfXykpO1xyXG5cclxuICAgIG1kLnVzZShtZEl0T2JzaWRpYW5DYWxsb3V0cylcclxufVxyXG5cclxuZnVuY3Rpb24gZXh0ZW5kc1BhZ2UocGFnZSwgYXBwKSB7XHJcbiAgICAvLyBcdTY2RjRcdTY1MzlcdTk4NzVcdTk3NjJcdTY4MDdcdTk4OThcdTRFM0FcdTY1ODdcdTRFRjZcdTU0MERcclxuICAgIGlmIChwYWdlLmZpbGVQYXRoICE9PSBudWxsICYmICghcGFnZS50aXRsZSB8fCAhcGFnZS5kYXRhLnRpdGxlKSkge1xyXG4gICAgICAgIHBhZ2UudGl0bGUgPSBwYWdlLmZpbGVQYXRoLnNwbGl0KCcvJykucG9wKCkucmVwbGFjZSgvXFwubWQkLywgJycpO1xyXG4gICAgICAgIHBhZ2UudGl0bGUgPSBkZWNvZGVVUklDb21wb25lbnQocGFnZS50aXRsZSk7XHJcbiAgICAgICAgcGFnZS5kYXRhLnRpdGxlID0gcGFnZS50aXRsZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBvbkluaXRpYWxpemVkKGFwcCkge1xyXG4gICAgLy8gXHU0RTNBIGJsb2dzIFx1OTg3NVx1OTc2Mlx1NkRGQlx1NTJBMFx1OTRGRVx1NjNBNVxyXG4gICAgZnVuY3Rpb24gZ2V0Rm9sZGVyUGF0aChwYXRoKSB7XHJcbiAgICAgICAgbGV0IGZvbGRlcl9wYXRoID0gcGF0aC5zcGxpdCgnLycpO1xyXG4gICAgICAgIGZvbGRlcl9wYXRoLnBvcCgpO1xyXG4gICAgICAgIHJldHVybiBmb2xkZXJfcGF0aC5qb2luKCcvJyk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBwYWdlX2luZGV4ID0gMDsgcGFnZV9pbmRleCA8IGFwcC5wYWdlcy5sZW5ndGg7IHBhZ2VfaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBhcHAucGFnZXNbcGFnZV9pbmRleF07XHJcbiAgICAgICAgaWYgKHBhZ2UucGF0aC5zbGljZSgxLCA2KSA9PT0gJ2Jsb2dzJykge1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlX2ZvbGRlcl9wYXRoID0gZ2V0Rm9sZGVyUGF0aChwYWdlLnBhdGgpO1xyXG4gICAgICAgICAgICBpZiAocGFnZV9pbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZfcGFnZSA9IGFwcC5wYWdlc1twYWdlX2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Rm9sZGVyUGF0aChwcmV2X3BhZ2UucGF0aCkgPT09IHBhZ2VfZm9sZGVyX3BhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlLmZyb250bWF0dGVyLnByZXYgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHByZXZfcGFnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluazogcHJldl9wYWdlLnBhdGhcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UuZGF0YS5mcm9udG1hdHRlci5wcmV2ID0gcGFnZS5mcm9udG1hdHRlci5wcmV2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYWdlX2luZGV4IDwgYXBwLnBhZ2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRfcGFnZSA9IGFwcC5wYWdlc1twYWdlX2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Rm9sZGVyUGF0aChuZXh0X3BhZ2UucGF0aCkgPT09IHBhZ2VfZm9sZGVyX3BhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlLmZyb250bWF0dGVyLm5leHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG5leHRfcGFnZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluazogbmV4dF9wYWdlLnBhdGhcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UuZGF0YS5mcm9udG1hdHRlci5uZXh0ID0gcGFnZS5mcm9udG1hdHRlci5uZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IChvcHRpb25zLCBhcHApID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogJ3Z1ZXByZXNzLXBsdWdpbi1tYXJrZG93bi1zZWxmJyxcclxuICAgICAgICBtdWx0aXBsZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgZXh0ZW5kc1BhZ2U6IGV4dGVuZHNQYWdlLFxyXG4gICAgICAgIGV4dGVuZHNNYXJrZG93bjogZXh0ZW5kc01hcmtkb3duLFxyXG4gICAgICAgIG9uSW5pdGlhbGl6ZWQ6IG9uSW5pdGlhbGl6ZWRcclxuICAgIH1cclxufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovUHJvamVjdHMvd2Vic2l0ZS8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXHdlYnNpdGVcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvamVjdHMvd2Vic2l0ZS8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgdml0ZUJ1bmRsZXIgfSBmcm9tICdAdnVlcHJlc3MvYnVuZGxlci12aXRlJ1xyXG5pbXBvcnQgeyB3ZWJwYWNrQnVuZGxlciB9IGZyb20gJ0B2dWVwcmVzcy9idW5kbGVyLXdlYnBhY2snXHJcbmltcG9ydCB7IHJlY29UaGVtZSB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXJlY28nXHJcbmltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tICd2dWVwcmVzcydcclxuaW1wb3J0IHsgbWRFbmhhbmNlUGx1Z2luIH0gZnJvbSBcInZ1ZXByZXNzLXBsdWdpbi1tZC1lbmhhbmNlXCJcclxuaW1wb3J0IHsgZGVzdHJ1Y3RMaW5rIH0gZnJvbSAnbWVybWFpZC9kaXN0L2RpYWdyYW1zL2Zsb3djaGFydC9mbG93RGIuanMnXHJcbmltcG9ydCB7IGxvZyB9IGZyb20gJ21lcm1haWQvZGlzdC9sb2dnZXIuanMnXHJcbmltcG9ydCB7IGxheW91dCB9IGZyb20gJ21lcm1haWQvZGlzdC9kaWFncmFtcy9ibG9jay9sYXlvdXQuanMnXHJcbi8vIGltcG9ydCBWYWxpbmUgZnJvbSAndmFsaW5lJ1xyXG4vLyBpbXBvcnQgeyBnZXREaXJuYW1lLCBwYXRoIH0gZnJvbSAndnVlcHJlc3MvdXRpbHMnXHJcbi8vIGltcG9ydCB7IGRlZmF1bHRUaGVtZSB9IGZyb20gJ0B2dWVwcmVzcy90aGVtZS1kZWZhdWx0J1xyXG5cclxuLy8gY29uc3QgX19kaXJuYW1lID0gZ2V0RGlybmFtZShpbXBvcnQubWV0YS51cmwpXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xyXG4gIGJ1bmRsZXI6IHZpdGVCdW5kbGVyKHtcclxuXHJcbiAgfSksXHJcbiAgLy8gYnVuZGxlcjogd2VicGFja0J1bmRsZXIoe1xyXG4gIC8vICAgY29uZmlndXJlV2VicGFjayhjb25maWcsIGlzU2VydmVyLCBpc0J1aWxkKSB7XHJcbiAgLy8gICAgIHJldHVybiB7IG1vZGU6ICdkZXZlbG9wbWVudCcgfTtcclxuICAvLyAgIH1cclxuICAvLyB9KSxcclxuXHJcbiAgbGFuZzogJ3poLUNOJyxcclxuICB0aXRsZTogJ2J5bWxcXCdzIGJsb2cnLFxyXG4gIGRlc2NyaXB0aW9uOiAnYnltbFxcJ3MgYmxvZycsXHJcbiAgaGVhZDogW1snbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvbG9nby5wbmcnIH1dXSxcclxuXHJcbiAgLy8gYWxpYXM6IHtcclxuICAvLyAgICdAdHlwZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vdHlwZXMnKSxcclxuICAvLyAgICdAY2xpZW50JzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2NsaWVudCcpLFxyXG4gIC8vICAgJ0B1dGlscyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9jbGllbnQvdXRpbHMnKSxcclxuICAvLyAgICdAY29tcG9uZW50cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9jbGllbnQvY29tcG9uZW50cycpLFxyXG4gIC8vICAgJ0Bjb21wb3NhYmxlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9jbGllbnQvY29tcG9zYWJsZXMnKSxcclxuICAvLyB9LFxyXG5cclxuICB0aGVtZTogcmVjb1RoZW1lKHtcclxuICAgIGF1dGhvcjogJ2J5bWwnLFxyXG4gICAgYXV0aG9yQXZhdGFyOiAnL2xvZ28ucG5nJyxcclxuICAgIGxvZ286ICcvbG9nby5wbmcnLFxyXG4gICAgZG9jc1JlcG86IFwiXCIsXHJcblxyXG4gICAgYXV0b1NldEJsb2dDYXRlZ29yaWVzOiB0cnVlLFxyXG4gICAgY2F0YWxvZ1RpdGxlOiBcIlx1NzZFRVx1NUY1NVwiLFxyXG5cclxuICAgIG5hdmJhcjogW1xyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICB0ZXh0OiBcIlx1OEJGRVx1N0EwQlx1N0IxNFx1OEJCMFwiLFxyXG4gICAgICAgICAgaWNvbjogXCJOb3RlYm9va1wiLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiXHU2NTcwXHU1QjU3XHU3Q0ZCXHU3RURGXHU4QkJFXHU4QkExXHU1N0ZBXHU3ODQwXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCIvY2F0ZWdvcmllcy9cdTY1NzBcdTVCNTdcdTdDRkJcdTdFREZcdThCQkVcdThCQTFcdTU3RkFcdTc4NDAvMS5odG1sXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiQ1ZcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcIi9jYXRlZ29yaWVzL0NWLzEuaHRtbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIk9TXCIsXHJcbiAgICAgICAgICAgICAgbGluazogXCIvY2F0ZWdvcmllcy9PUy8xLmh0bWxcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1NjI4MFx1NjcyRlx1NTM1QVx1NUJBMlwiLFxyXG4gICAgICAgICAgaWNvbjogXCJCbG9nXCIsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJMaW51eCBcdTVCNjZcdTRFNjBcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcIi9jYXRlZ29yaWVzL0xpbnV4LzEuaHRtbFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgdGV4dDogXCJcdTUzQ0JcdTYwQzVcdTk0RkVcdTYzQTVcIiwgaWNvbjogXCJMaW5rXCIsIGxpbms6IFwiL2ZyaWVuZHNoaXAuaHRtbFwiIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcIlx1NEUyQVx1NEVCQVx1N0I4MFx1NEVDQlwiLCBpY29uOiBcIlVzZXJBdmF0YXJcIiwgbGluazogXCIvYWJvdXQuaHRtbFwiIH1cclxuICAgIF0sXHJcblxyXG4gICAgYWJvdXQ6IHtcclxuICAgICAgcGhvdG86IFwiL2xvZ28ucG5nXCIsXHJcbiAgICAgIHNjaG9vbDogXCJcdTUzNTdcdTRFQUNcdTU5MjdcdTVCNjZcIixcclxuICAgICAgbWFqb3I6IFwiXHU2NjdBXHU4MEZEXHU3OUQxXHU1QjY2XHU0RTBFXHU2MjgwXHU2NzJGXCIsXHJcbiAgICAgIGVtYWlsOiBcIjIzMTg4MDI5MUBzbWFpbC5uanUuZWR1LmNuXCIsXHJcbiAgICAgIGludHJvZHVjdGlvbjogXCJieW1sIFx1NzY4NFx1NEUyQVx1NEVCQVx1NTM1QVx1NUJBMlx1RkYwQ1x1OEJCMFx1NUY1NVx1NUI2Nlx1NEU2MFx1OEZDN1x1N0EwQlx1NEUyRFx1NzY4NFx1NzBCOVx1NkVGNFwiLFxyXG4gICAgICBzb2NhbDogW3tcclxuICAgICAgICBpY29uOiBcIkxvZ29HaXRodWJcIixcclxuICAgICAgICBjb250ZW50OiBcIkdpdEh1YlwiLFxyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2J5bWwtY1wiXHJcbiAgICAgIH1dLFxyXG4gICAgICBlZHVjYXRpb246IFt7XHJcbiAgICAgICAgdGltZTogXCIyMDIzLVx1ODFGM1x1NEVDQVwiLFxyXG4gICAgICAgIHNjaG9vbDogXCJcdTUzNTdcdTRFQUNcdTU5MjdcdTVCNjZcIixcclxuICAgICAgICBtYWpvcjogXCJcdTY2N0FcdTgwRkRcdTc5RDFcdTVCNjZcdTRFMEVcdTYyODBcdTY3MkZcIixcclxuICAgICAgICBkZWdyZWU6IFwiXHU2NzJDXHU3OUQxXCIsXHJcbiAgICAgIH1dLFxyXG4gICAgICB3b3JrczogW11cclxuICAgIH0sXHJcblxyXG4gICAgZnVsbEFib3V0OiB7XHJcbiAgICAgIHBob3RvOiBcIi9sb2dvLnBuZ1wiLFxyXG4gICAgICBzY2hvb2w6IFwiXHU1MzU3XHU0RUFDXHU1OTI3XHU1QjY2XCIsXHJcbiAgICAgIG1ham9yOiBcIlx1NjY3QVx1ODBGRFx1NzlEMVx1NUI2Nlx1NEUwRVx1NjI4MFx1NjcyRlwiLFxyXG4gICAgICBzY29yZTogXCI0LjYwXCIsXHJcbiAgICAgIHJhbms6IFwiMTMvMTUxXCIsXHJcbiAgICAgIGVtYWlsOiBcIjIzMTg4MDI5MUBzbWFpbC5uanUuZWR1LmNuXCIsXHJcbiAgICAgIGludHJvZHVjdGlvbjogXCJcdTYyMTFcdTY2MkZcdTRFMDBcdTU0MERcdTUzNTdcdTRFQUNcdTU5MjdcdTVCNjZcdTY2N0FcdTgwRkRcdTc5RDFcdTVCNjZcdTRFMEVcdTYyODBcdTY3MkZcdTVCNjZcdTk2NjJcdTU5MjdcdTRFOENcdTY3MkNcdTc5RDFcdTc1MUZcdTMwMDJcdTVCRjlcdTU5MjdcdThCRURcdThBMDBcdTZBMjFcdTU3OEJcdTVFOTRcdTc1MjhcdTMwMDFcdThCQTFcdTdCOTdcdTY3M0FcdTU2RkVcdTVGNjJcdTVCNjZcdTMwMDFcdTY3M0FcdTU2NjhcdTRFQkFcdTRFRkZcdTc3MUZcdTY3MDlcdTYyNDBcdTc4MTRcdTdBNzZcdTMwMDJcdTY3MDlcdThGODNcdTRFMzBcdTVCQ0NcdTc2ODQgTGludXggXHU2NzBEXHU1MkExXHU1NjY4XHUzMDAxSFBDIFx1NEY3Rlx1NzUyOFx1N0VDRlx1OUE4Q1x1MzAwMlx1NzZFRVx1NTI0RFx1NzgxNFx1N0E3Nlx1NTE3NFx1OERBM1x1NEUzQVx1NTE3N1x1OEVBQlx1NjY3QVx1ODBGRFx1MzAwMlwiLFxyXG4gICAgICBzb2NhbDogW3tcclxuICAgICAgICBpY29uOiBcIkxvZ29HaXRodWJcIixcclxuICAgICAgICBjb250ZW50OiBcIkdpdEh1YlwiLFxyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2J5bWwtY1wiXHJcbiAgICAgIH1dLFxyXG4gICAgICB3b3JrczogW3tcclxuICAgICAgICB0aW1lOiBcIjIwMjUtXHU0RUNBXCIsXHJcbiAgICAgICAgaW1nOiAnIycsXHJcbiAgICAgICAgdGl0bGU6ICdSb2JvVHdpbiAyLjAnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnXHU4RDFGXHU4RDIzIEFQSSBcdThCQkVcdThCQTFcdTMwMDFcdThENDRcdTRFQTdcdTY4MDdcdTVCOUFcdTMwMDFcdTRFRkJcdTUyQTFcdThCQkVcdTdGNkUnLFxyXG4gICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIHRpbWU6IFwiMjAyNVwiLFxyXG4gICAgICAgIGltZzogJ2h0dHBzOi8vcm9ib3R3aW4tYmVuY2htYXJrLmdpdGh1Yi5pby9jdnByLTIwMjUtY2hhbGxlbmdlL2ZpbGVzL3NtYWxsX3Bvc3Rlci5wbmcnLFxyXG4gICAgICAgIHRpdGxlOiAnUm9ib1R3aW4gRHVhbC1Bcm0gQ29sbGFib3JhdGlvbiBDaGFsbGVuZ2UgMm5kIE1FSVMgV29ya3Nob3BAQ1ZQUjIwMjUnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnXHU4RDFGXHU4RDIzXHU4OUM2XHU4OUU2XHU4OUM5XHU0RUZGXHU3NzFGXHU3M0FGXHU1ODgzXHU3Njg0XHU2NDJEXHU1RUZBJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9yb2JvdHdpbi1iZW5jaG1hcmsuZ2l0aHViLmlvL2N2cHItMjAyNS1jaGFsbGVuZ2UvJyxcclxuICAgICAgfV0sXHJcbiAgICAgIGV4cGVyaW1lbnRzOiBbe1xyXG4gICAgICAgIHRpbWU6IFwiMjAyNC0yMDI1XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiXHU5QUQ4XHU0RkREXHU3NzFGXHU1M0VGXHU5QTcxXHU1MkE4XHU0RTA5XHU3RUY0XHU2NTcwXHU1QjU3XHU0RUJBXHU1RUZBXHU2QTIxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXHU1MzU3XHU0RUFDXHU1OTI3XHU1QjY2XHU1MjFCXHU2NUIwXHU4QkFEXHU3RUMzXHU5ODc5XHU3NkVFXHVGRjBDXHU0RTA5XHU3RUY0XHU4OUM2XHU4OUM5XHUzMDAxXHU2NTcwXHU1QjU3XHU0RUJBXHU2NUI5XHU1NDExXCIsXHJcbiAgICAgICAgaW1nOiBcIiNcIixcclxuICAgICAgICBsaW5rOiBcIiNcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdGltZTogXCIyMDI0LTIwMjVcIixcclxuICAgICAgICB0aXRsZTogXCJcdTk3NjJcdTU0MTFcdTk3NjJcdTY1OTlcdTg4NjhcdTk3NjJcdTdGM0FcdTk2NzdcdTY4QzBcdTZENEJcdTc2ODRcdTY3M0FcdTU2NjhcdTVCNjZcdTRFNjBcdTY1QjlcdTZDRDVcdTc4MTRcdTdBNzZcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTUzNTdcdTRFQUNcdTU5MjdcdTVCNjZcdTUyMUJcdTY1QjBcdThCQURcdTdFQzNcdTk4NzlcdTc2RUVcdUZGMENcdThCQTFcdTdCOTdcdTY3M0FcdTg5QzZcdTg5QzlcdTcyNjlcdTRGNTNcdThCQzZcdTUyMkJcdTY1QjlcdTU0MTFcIixcclxuICAgICAgICBpbWc6IFwiI1wiLFxyXG4gICAgICAgIGxpbms6IFwiI1wiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0aW1lOiBcIjIwMjUgXHU2NjI1XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiU2hlbGwgQWdlbnRcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTU3RkFcdTRFOEVcdTYzRDBcdTc5M0FcdTVERTVcdTdBMEJcdTU0OENcdTU5MjdcdTZBMjFcdTU3OEJcdTUxRkRcdTY1NzBcdThDMDNcdTc1MjhcdTgwRkRcdTUyOUJcdTc2ODRcdTU0N0RcdTRFRTRcdTg4NEMgQUkgQWdlbnRcdTMwMDJcIixcclxuICAgICAgICBpbWc6IFwiI1wiLFxyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2J5bWwtYy9hZ1wiXHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0aW1lOiBcIjIwMjQgXHU2NjI1XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiXHU1MzU3XHU0RUFDXHU1OTI3XHU1QjY2XHUwMEI3XHU3NjdFXHU1RUE2XHUyMDFDXHU2NjFGXHU2Q0IzXHU2NzZGXHUyMDFEQUlcdTU5MjdcdTZBMjFcdTU3OEJcdTUyMUJcdTYxMEZcdThENUJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTRGNUNcdTU0QzFcdTIwMUNcdTYzMDdcdTIwMThcdTUzNTdcdTIwMTlcdTIwMURcdTUzNTdcdTRFQUNcdTU5MjdcdTVCNjZcdTY1QjBcdTc1MUZcdTY2N0FcdTgwRkRcdTUyQTlcdTYyNEJcdUZGMENcdTkxQzdcdTc1MjggUkFHIFx1NTQ4Q1x1NjNEMFx1NzkzQVx1NURFNVx1N0EwQlx1NjI4MFx1NjcyRlx1RkYwQ1x1ODNCN1x1NUY5N1x1NEU4Q1x1N0I0OVx1NTk1Nlx1MzAwMlwiLFxyXG4gICAgICAgIGltZzogXCIjXCIsXHJcbiAgICAgICAgbGluazogXCJodHRwczovL21wLndlaXhpbi5xcS5jb20vcy8zeTQtS0YwOWRoOURhTlA5WkJ3NVJ3XCJcclxuICAgICAgfSwge1xyXG4gICAgICAgIHRpbWU6IFwiMjAyNCBcdTY2MjVcIixcclxuICAgICAgICB0aXRsZTogXCJcdTlBRDhcdTdFQTdcdTdBMEJcdTVFOEZcdThCQkVcdThCQTFcdTU5MjdcdTk4NzlcdTc2RUVcdUZGMUFTaGFwZVotU3RhclJhaWxcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTRGN0ZcdTc1MjggQysrIFF0IFx1Njg0Nlx1NjdCNlx1RkYwQ1x1N0VEM1x1NTQwOFx1NEU4NiBTaGFwZVogXHU3Njg0XHU2NTNFXHU3RjZFXHU3M0E5XHU2Q0Q1XHVGRjBDXHU1RTc2XHU1NzI4XHU1MTc2XHU0RTJEXHU2REZCXHU1MkEwXHU0RTg2IFN0YXIgUmFpbFx1RkYwOFx1NUQyOVx1NTc0Rlx1MDBCN1x1NjYxRlx1N0E3OVx1OTRDMVx1OTA1M1x1RkYwOVx1NzY4NFx1NTE0M1x1N0QyMFx1RkYwQ1x1NTg5RVx1NTJBMFx1NEU4Nlx1NkUzOFx1NjIwRlx1NzY4NFx1OERBM1x1NTQ3M1x1NjAyN1x1NTQ4Q1x1NTNFRlx1NzNBOVx1NjAyN1x1MzAwMlwiLFxyXG4gICAgICAgIGltZzogXCJTaGFwZVotU3RhclJhaWwucG5nXCIsXHJcbiAgICAgICAgbGluazogW1wiaHR0cHM6Ly9naXRodWIuY29tL2J5bWwtYy9TaGFwZVotU3RhclJhaWxcIiwgXCJodHRwczovL3d3dy5iaWxpYmlsaS5jb20vdmlkZW8vQlYxWHQzbmVlRWhGL1wiXVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdGltZTogXCIyMDI0IFx1NUJEMlx1NTA0N1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIlx1NTM1N1x1NEVBQ1x1NTkyN1x1NUI2Nlx1NjVCMFx1NzUxRlx1NjY3QVx1ODBGRFx1OTVFRVx1N0I1NFx1NjI4MFx1NjcyRlx1NjNBMlx1N0QyMlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlx1OEZEQlx1ODg0QyBSQUdcdTMwMDFcdTVGQUVcdThDMDNcdTdCNDlcdTUyNERcdTZDQkZcdTYyODBcdTY3MkZcdTYzQTJcdTdEMjJcdUZGMENcdTVFNzZcdTVCOUVcdTczQjBcdTU3MjggTkpVIEhQQyBcdThEODVcdTdCOTdcdTVFNzNcdTUzRjBcdTRFMEFcdTVGQUVcdThDMDMgUXdlbi0xNEItQ2hhdCBcdTZBMjFcdTU3OEJcdTMwMDJcIixcclxuICAgICAgICBpbWc6IFwiI1wiLFxyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2J5bWwtYy9hZ1wiXHJcbiAgICAgIH1dLFxyXG4gICAgICBwcml6ZTogW3tcclxuICAgICAgICB0aW1lOiBcIjIwMjRcIixcclxuICAgICAgICB0aXRsZTogXCJcdTYyREJcdTU1NDZcdTk0RjZcdTg4NENcdTkxRDFcdTg0NzVcdTgyQjFcdTU5NTZcdTVCNjZcdTkxRDFcdUZGMDhcdTRFOENcdTdCNDlcdTU5NTZcdUZGMDlcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTlBRDhcdTk4OURcdTU5NTZcdTVCNjZcdTkxRDFcIlxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdGltZTogXCIyMDIwXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTk9JUCAyMDIwIFx1NEUwMFx1N0I0OVx1NTk1NlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlx1NTE2OFx1NTZGRFx1OTc1Mlx1NUMxMVx1NUU3NFx1NEZFMVx1NjA2Rlx1NUI2Nlx1NTk2NVx1Njc5N1x1NTMzOVx1NTE0Qlx1N0FERVx1OEQ1Qlx1RkYwOE5PSVBcdUZGMDkyMDIwIFx1NEUwMFx1N0I0OVx1NTk1NlwiXHJcbiAgICAgIH1dXHJcbiAgICB9LFxyXG5cclxuICAgIGZyaWVuZHNoaXBMaW5rczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICd3eWFhYWF0dHdobycsXHJcbiAgICAgICAgbG9nbzogJ2h0dHBzOi8vd3d3Lm5vdGlvbi5zby9pbWFnZS9odHRwcyUzQSUyRiUyRnByb2QtZmlsZXMtc2VjdXJlLnMzLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tJTJGYmNjODNhMDYtNzBlMi00MzMyLTkzZjktYjg5MTQ3ZTJhNmJkJTJGOGM0OTFlYTgtMTQ2OS00MDgyLTgzZTktMTBkY2U0MTM2Y2ZmJTJGXy5qcGVnP3RhYmxlPWNvbGxlY3Rpb24maWQ9ZTQ5YTUwNmYtZDRmNy00NzY1LTkyMmItNzU1ODFlZDQxZWZmJnQ9ZTQ5YTUwNmYtZDRmNy00NzY1LTkyMmItNzU1ODFlZDQxZWZmJndpZHRoPTgwMCZjYWNoZT12MicsXHJcbiAgICAgICAgbGluazogJ2h0dHBzOi8vYmxvZy53eWFhYWF0dHdoby54eXovJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1x1Njc2NVx1ODFFQVx1OTFDRFx1NUU4Nlx1NzY4NCBNTCBcdTU5MjdcdTRGNkMnLFxyXG4gICAgICAgIGljb246ICdCbG9nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdUZW5vZkhlYXJ0cycsXHJcbiAgICAgICAgbG9nbzogJ2h0dHBzOi8vdGVub2ZoZWFydHMuZ2l0aHViLmlvL2Fzc2V0cy9pbWcvUHJvZmlsZS5wbmcnLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL3Rlbm9maGVhcnRzLmdpdGh1Yi5pby8nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnXHU2MjExXHU3Njg0XHU1OTI3XHU1QjU5XHU1QjUwJyxcclxuICAgICAgICBpY29uOiAnQmxvZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnSnluUCcsXHJcbiAgICAgICAgbG9nbzogJ2h0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS80OTExNDY2MD92PTQnLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL3BlbmdqaW4yMDA1LmdpdGh1Yi5pby8nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICBpY29uOiAnSWRlbnRpZmljYXRpb24nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ1lvbm9tMScsXHJcbiAgICAgICAgbG9nbzogJ2h0dHBzOi8veW9ub20xLmdpdGh1Yi5pby9pbWcvbG9nby5qcGcnLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL3lvbm9tMS5naXRodWIuaW8vJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1x1NjcyQVx1Njc2NVx1NzY4NCBBSSBcdTdCOTdcdTZDRDVcdTVERTVcdTdBMEJcdTVFMDgnLFxyXG4gICAgICAgIGljb246ICdJZGVudGlmaWNhdGlvbidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnSFJIJyxcclxuICAgICAgICBsb2dvOiAnaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzE0NDMxMTMwOT92PTQnLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vSFJIMDQxMCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIGljb246ICdMb2dvR2l0aHViJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdDLUxCWScsXHJcbiAgICAgICAgbG9nbzogJ2h0dHBzOi8vYy1sYnkudG9wL2Zhdmljb24ucG5nJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9jLWxieS50b3AvJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1x1NEY0RFx1NEU4RVx1NUU3Rlx1NEUxQ1x1NzY4NFx1N0Y1MVx1NUI4OVx1NTkyN1x1NEY2QycsXHJcbiAgICAgICAgaWNvbjogJ0Jsb2cnXHJcbiAgICAgIH1cclxuICAgIF0sXHJcblxyXG4gICAgcGFnZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvZnJpZW5kc2hpcC5odG1sJyxcclxuICAgICAgICBsYXlvdXQ6ICdGcmllbmRzaGlwTGF5b3V0JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvYWJvdXQuaHRtbCcsXHJcbiAgICAgICAgbGF5b3V0OiAnQWJvdXRMYXlvdXQnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9mdWxsLWFib3V0Lmh0bWwnLFxyXG4gICAgICAgIGxheW91dDogJ0Z1bGxBYm91dExheW91dCdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIGZ1bGxBYm91dFBhc3N3b3JkOiAnYzYxZjY4NTkwM2MxMjFiMzgxYzA0ODEwODVlMWM3YmYnLFxyXG5cclxuICAgIGVkaXRMaW5rOiBmYWxzZSxcclxuXHJcbiAgICBtYXJrZG93bjoge1xyXG4gICAgICB0aXRsZTogZmFsc2UsXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29tbWVudENvbmZpZzoge1xyXG4gICAgLy8gICB0eXBlOiAndmFsaW5lJyxcclxuICAgIC8vICAgb3B0aW9uczoge1xyXG4gICAgLy8gICAgIGFwcElkOiAnZzlZSEwxU1h5SFVoOWZMRFJYcUgwSlRmLU1kWVhiTU1JJyxcclxuICAgIC8vICAgICBhcHBLZXk6ICdvajBqaDVwNmxER3dzSWV0V3JQb2c0VjUnLFxyXG4gICAgLy8gICAgIGhpZGVDb21tZW50czogZmFsc2UsIC8vIFx1NTE2OFx1NUM0MFx1OTY5MFx1ODVDRlx1OEJDNFx1OEJCQVx1RkYwQ1x1OUVEOFx1OEJBNCBmYWxzZVxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gfSxcclxuICAgIC8vIGNvbW1lbnRDb25maWc6IHtcclxuICAgIC8vICAgdHlwZTogJ3dhbGluZScsXHJcbiAgICAvLyAgIG9wdGlvbnM6IHtcclxuICAgIC8vICAgICBzZXJ2ZXJVUkw6ICdodHRwczovL3dlYnNpdGUtY29tbWVudC1rYnBzZ3I0dzEtYnltbC1jcy1wcm9qZWN0cy52ZXJjZWwuYXBwLycsXHJcbiAgICAvLyAgICAgLy8gaGlkZUNvbW1lbnRzOiB0cnVlXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICB9KSxcclxuXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVxdWlyZSgnLi4vcGx1Z2lucy9tYXJrZG93bi1zZWxmJyksXHJcbiAgICBtZEVuaGFuY2VQbHVnaW4oe1xyXG4gICAgICAgIC8vIFx1NEY3Rlx1NzUyOCBtYXRoamF4IFx1NkUzMlx1NjdEM1x1NTE2Q1x1NUYwRlxyXG4gICAgICAgIG1hdGhqYXg6IHRydWUsXHJcbiAgICAgICAgLy8gXHU1NDJGXHU3NTI4XHU0RTBCXHU4OUQyXHU2ODA3XHU1MjlGXHU4MEZEXHJcbiAgICAgICAgc3ViOiB0cnVlLFxyXG4gICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NEUwQVx1ODlEMlx1NjgwN1xyXG4gICAgICAgIHN1cDogdHJ1ZSxcclxuICAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTRFRkJcdTUyQTFcdTUyMTdcdTg4NjhcclxuICAgICAgICB0YXNrbGlzdDogdHJ1ZSxcclxuICAgICAgICAvLyBcdTU0MkZcdTc1MjggZmlndXJlXHJcbiAgICAgICAgZmlndXJlOiB0cnVlLFxyXG4gICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NTZGRVx1NzI0N1x1NjFEMlx1NTJBMFx1OEY3RFxyXG4gICAgICAgIGltZ0xhenlsb2FkOiB0cnVlLFxyXG4gICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NTZGRVx1NzI0N1x1NjgwN1x1OEJCMFxyXG4gICAgICAgIGltZ01hcms6IHRydWUsXHJcbiAgICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1NkZFXHU3MjQ3XHU1OTI3XHU1QzBGXHJcbiAgICAgICAgaW1nU2l6ZTogdHJ1ZSxcclxuICAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTgxMUFcdTZDRThcclxuICAgICAgICBmb290bm90ZTogdHJ1ZSxcclxuICAgICAgICAvLyBcdTZERkJcdTUyQTBcdTkwMDlcdTk4NzlcdTUzNjFcdTY1MkZcdTYzMDFcclxuICAgICAgICB0YWJzOiB0cnVlLFxyXG4gICAgICAgIC8vIFx1NTQyRlx1NzUyOCBHRk0gXHU4QjY2XHU1NDRBXHJcbiAgICAgICAgLy8gYWxlcnQ6IHRydWUsXHJcbiAgICAgICAgLy8gXHU1NDJGXHU3NTI4XHU2M0QwXHU3OTNBXHU1QkI5XHU1NjY4XHJcbiAgICAgICAgaGludDogdHJ1ZSxcclxuICAgICAgICAvLyBcdTVGMDBcdTU0MkZcdTUyNjdcdTkwMEZcclxuICAgICAgICBzcG9pbGVyOiB0cnVlLFxyXG4gICAgICAgIC8vIFx1NUYwMFx1NTQyRlx1NUM1RVx1NjAyN1x1NjUyRlx1NjMwMVxyXG4gICAgICAgIGF0dHJzOiB0cnVlLFxyXG4gICAgICAgIC8vIFx1NUYwMFx1NTQyRlx1NjgwN1x1OEJCMCA9PSA9PSBcdThCRURcdTZDRDVcclxuICAgICAgICBtYXJrOiB0cnVlLFxyXG4gICAgICAgIC8vIFx1NTQyRlx1NzUyOCBtZXJtYWlkXHJcbiAgICAgICAgbWVybWFpZDogdHJ1ZSxcclxuICAgIH0pXHJcbiAgXSxcclxufSkiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7QUFBNFEsU0FBUyxvQkFBb0IsZUFBZTtBQUN4VCxPQUFPLDBCQUEwQjtBQUNqQyxTQUFTLHVCQUF1QjtBQUZoQztBQUFBO0FBSUEsYUFBUyxnQkFBZ0IsSUFBSSxLQUFLO0FBQzlCLFNBQUcsT0FBTyxNQUFNLE9BQU8sUUFBUSx1QkFBdUIsU0FBVSxPQUFPLFFBQVE7QUFDM0UsWUFBSSxNQUFNLEtBQUssS0FBSyxPQUFPLEtBQUssWUFBWSxVQUFVLFdBQVc7QUFDakUsWUFBSSxPQUFPLElBQUksUUFBUTtBQUN2QixjQUFNLFNBQVMsTUFBTTtBQUNyQixjQUFNLE1BQU0sTUFBTTtBQUdsQixZQUFJLE1BQU0sSUFBSSxXQUFXLE1BQU0sR0FBRyxNQUFNLElBQWE7QUFBRSxpQkFBTztBQUFBLFFBQU07QUFDcEUsWUFBSSxNQUFNLElBQUksV0FBVyxNQUFNLE1BQU0sQ0FBQyxNQUFNLElBQWE7QUFBRSxpQkFBTztBQUFBLFFBQU07QUFFeEUsb0JBQVksTUFBTSxNQUFNO0FBQ3hCLGtCQUFVLE1BQU0sR0FBRyxRQUFRLGVBQWUsT0FBTyxNQUFNLE1BQU0sR0FBRyxLQUFLO0FBR3JFLFlBQUksVUFBVSxHQUFHO0FBQUUsaUJBQU87QUFBQSxRQUFNO0FBRWhDLGNBQU0sTUFBTSxNQUFNO0FBQ2xCLFlBQUksTUFBTSxLQUFLO0FBQ1g7QUFHQSxpQkFBTyxNQUFNLEtBQUssT0FBTztBQUNyQixtQkFBTyxNQUFNLElBQUksV0FBVyxHQUFHO0FBQy9CLGdCQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssU0FBUyxJQUFNO0FBQUU7QUFBQSxZQUFNO0FBQUEsVUFDakQ7QUFDQSxjQUFJLE9BQU8sS0FBSztBQUFFLG1CQUFPO0FBQUEsVUFBTTtBQUkvQixnQkFBTTtBQUNOLGlCQUFPLE1BQU0sS0FBSyxPQUFPO0FBQ3JCLG1CQUFPLE1BQU0s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
