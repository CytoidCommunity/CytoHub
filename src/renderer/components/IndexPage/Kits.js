import dmkSvg from './obsstudio.svg'
import gpuSvg from './API.svg'
import aboutSvg from './about.svg'

export default [
  {
    name: 'DmkChat',
    description: 'B站仿油管样式评论机',
    icon: dmkSvg,
    path: '/chat'
  },
  {
    name: 'getPlayUrl',
    description: 'Bilibili Live API Hacker',
    icon: gpuSvg,
    path: '/gpu'
  },
  {
    name: '关于',
    description: '关于 CytoHub',
    icon: aboutSvg,
    path: '/about'
  }
]
