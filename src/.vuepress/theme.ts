import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

// 主题设置
export default hopeTheme({
  // 当前网站部署到的域名
  hostname: "http://blog.itzhang520.top",
  // 文章显示的默认作者
  author: {
    name: "zhang-bcxb",
    url: "https://github.com/zhang-bcxb",
  },
  // 使用官方提供的图标库-也可以构建自己的图标库
  iconAssets: "fontawesome-with-brands",
  // 网站图标
  logo: "/logo.svg",

  // 导航栏上的个人仓库地址
  repo: "https://github.com/zhang-bcxb",
  // 文章所在目录
  docsDir: "src",

  // 导航栏
  navbar,
  // 侧边栏
  sidebar,

  footer: "编程细胞の学习笔记",
  displayFooter: true,

  // 页面显示信息
  pageInfo: ["Category", "Tag", "ReadingTime"],

  // 路径导航
  breadcrumb: true,
  // 路径导航的图标显示
  breadcrumbIcon: true,

  // 是否可以选中颜色
  themeColor: true,
  // 是否在桌面模式下显示打印按钮
  print: true,
  // 暗黑模式切换-在深色模式和浅色模式中切换
  darkmode: "toggle",
  // 全屏按钮
  fullscreen: true,
  // 返回顶部按钮-下滑300px后显示
  backToTop: true,
  // 纯净模式-禁用
  pure: false,

  // 页面配置信息
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 博客配置
  blog: {
    // 头像
    avatar: "/logo.png",
    // 名称
    name: "zhang-bcxb",
    // 是否是圆形头像
    roundAvatar: false,
    // 个人描述
    description: "每天进步一点点",
    // 社交媒体
    medias: {
      GitHub: "https://github.com/zhang-bcxb",
    },
    // 博客的侧边栏设置
    sidebarDisplay: "mobile",
    // 每页展示的文章数量
    articlePerPage: 7,
    timeline: "编程细胞の时光轴🍃",
  },
  plugins: {
    // 代码复制功能-vuepress-plugin-copy-code2
    copyCode: {
      // 在移动端也可以实现复制代码
      showInMobile: true,
      // 代码复制成功提示消息的时间-ms
      duration: 3000,
    },
    // MarkDown文件增强
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({tag}) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: {type: "tip"},
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      // vPre: true,
      vuePlayground: true,
    },
    // 开启git实现编辑此页面-最后更新时间-贡献者功能
    git: true,
    // 关闭sitemap插件
    sitemap: false,
    // 打开博客功能
    blog: true
  },
});
