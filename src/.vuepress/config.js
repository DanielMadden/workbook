const fs = require("fs");
const path = require("path");
const { config } = require("vuepress-theme-hope");


const GITHUB_USERNAME = 'DanielMadden'


module.exports = config({
  base: "/blog/",
  title: 'Daniel\'s Blog',
  description: "My thoughts notes and reflections while attending Codeworks Immersive FullStack Program",
  head: [
    ['meta', { name: 'theme-color', content: '#f26d6d' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'application-name', content: `${GITHUB_USERNAME} Learning Blog` }],
    ['meta', { name: 'ROBOTS', content: 'FOLLOW' }],
    ['meta', { name: 'og:image', content: '' }],
    ['meta', { name: 'og:type', content: 'article' }],
    ['meta', { name: 'og:url', content: `https://${GITHUB_USERNAME}.github.io/blog/reflections` }],
    ['meta', { name: 'og:title', content: 'Learn to Code. Develop Your Future' }],
    ['meta', { name: 'og:locale', content: 'en_US' }]
  ],
  themeConfig: {
    logo: 'https://avatars0.githubusercontent.com/u/70981440?s=460&u=bfbdfa6959630986106ba57ea70d4a596a1cbfe9&v=4',
    editLinks: true,
    // repo: `${GITHUB_USERNAME}/workbook`,
    // repoLabel: 'Contribute!',
    docsDir: 'src',
    docsBranch: 'main',
    darkmode: "switch",
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#00ffdc",
      orange: "#fb9b5f",
      purple: "#8e44ad"
    },
    nav: [
      {
        text: 'Journal',
        link: '/reflections/',
      },
      {
        text: 'Codeworks',
        link: 'https://boisecodeworks.com'
      }
    ],
    sidebar: {
      '/reflections/': [
        // ...getSideBar('reflections', 'Student Reflections'),
        ...getSideBar('reflections/wk1', 'Week One'),
        ...getSideBar('reflections/wk2', 'Week Two'),
        ...getSideBar('reflections/wk3', 'Week Three'),
        ...getSideBar('reflections/wk4', 'Week Four'),
        ...getSideBar('reflections/wk5', 'Week Five'),
        ...getSideBar('reflections/wk6', 'Week Six'),
        ...getSideBar('reflections/wk7', 'Week Seven'),
        ...getSideBar('reflections/wk8', 'Week Eight'),
        ...getSideBar('reflections/wk9', 'Week Nine'),
        ...getSideBar('reflections/wk10', 'Week Ten'),
        ...getSideBar('reflections/wk11', 'Week Eleven'),
        ...getSideBar('reflections/wk12', 'Week Twelve')
      ]
    },
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    ["@mr-hope/sitemap", { hostname: `https://${GITHUB_USERNAME}.github.io/blog` }],
  ]
})

function getSideBar(folder, title) {
  const extension = [".md"];
  const root = folder.lastIndexOf('/') === -1 ? '' : folder.slice(folder.lastIndexOf('/') + 1)
  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(file =>
      file.toLowerCase() != "readme.md" &&
      fs.statSync(path.join(`${__dirname}/../${folder}`, file)).isFile() &&
      extension.includes(path.extname(file))
    ).map(filename => {
      if (!root) {
        return filename
      }
      return root + '/' + filename
    });
  const children = [...files]
  if (!root) {
    children.unshift('')
  }
  return [{ title: title, children }];
}
