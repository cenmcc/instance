/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = '';
let routerMode = 'hash';
let imgBaseUrl = '';


if (process.env.NODE_ENV == 'development') {
  imgBaseUrl = '';
  baseUrl = 'https://www.fastmock.site/mock/f6c02f51b99c17b995f3b056e4e405b7/openh5'
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = '';
  imgBaseUrl = '';
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl,
}