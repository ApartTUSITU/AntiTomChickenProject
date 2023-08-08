import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import logo from './AntiTomChickenProject_Icon.png';

const config: DocsThemeConfig = {
  banner: {
    dismissible: false,
    text: (
      <a href="https://github.com/AntiTomChickenProject" target="_blank">
        🔔 该网站仍在建设中。您可以在GitHub上给我们提供帮助，任何帮助都会使我们变得更好！（点击前往）
      </a>
    )
  },
  search: {
    placeholder: "搜索……",
    error: "无法加载搜索系统"
  },
  head: (
    <link rel="icon" href={logo.src} type="image/x-icon" />
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – 反张淏轩计划'
    }
  },
  project: {
    link: 'https://github.com/AntiTomChickenProject',
  },
  feedback: {
    content: null
  },
  editLink: {
    component: null
  },
  toc: {
    title: <span>目录</span>,
    extraContent: <span>反张淏轩计划<br />希望能够帮到你 ❤</span>
  },
  gitTimestamp: null,
  logo: <><img src={logo.src} alt="logo" style={{ width: '50px', height: '50px' }} /><span>⁣⁣⁣⁣⁣⁣⁣⁣ ⁣⁣⁣⁣ ⁣⁣⁣⁣ ⁣反张淏轩计划</span></>,
  docsRepositoryBase: 'https://github.com/AntiTomChickenProject/blob/main',
  footer: {
    text: (
      <span>
        版权所有 © {new Date().getFullYear()} { }
        <a href="https://wsmcs.top" target="_blank">
          反张淏轩计划 (Anti Tom_Chicken Project)
        </a>
      </span>
    )
  }
}

export default config
