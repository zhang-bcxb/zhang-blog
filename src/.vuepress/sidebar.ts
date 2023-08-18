import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/code-template/": [
    {
      text: "HTML 代码模板",
      icon: "laptop-code",
      prefix: "/code-template/html/",
      children: [""],
    },
    {
      text: "CSS 代码模板",
      icon: "laptop-code",
      prefix: "/code-template/css/",
      children: [""],
    },
    {
      text: "JS 代码模板",
      icon: "laptop-code",
      prefix: "/code-template/js/",
      children: [""],
    }
  ],
  "/blog-article/": [
    {
      text: "HTML 文章",
      icon: "laptop-code",
      prefix: "/code-template/html/",
      children: [""],
    },
    {
      text: "CSS 文章",
      icon: "laptop-code",
      prefix: "/code-template/css/",
      children: [""],
    },
    {
      text: "JS 文章",
      icon: "laptop-code",
      prefix: "/code-template/js/",
      children: [""],
    },
    {
      text: "Vue 文章",
      icon: "laptop-code",
      prefix: "/code-template/vue/",
      children: [""],
    }
  ]
});
