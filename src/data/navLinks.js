/**
统一分类opensource
网站：
github
baidu.com
谷歌
具体按照以下样式生成，使用“JavaScript风格格式+单引号”，不要添加"icon字段"和"[]""      
      {
      id: 'github',
      title: 'GitHub',
      description: '全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。'
      shortDesc: '代码托管平台。',
      url: 'https://github.com/',
      category: 'opensource',
      },
描述根据网站实际内容,专业,准确,介绍背景独特优势等等,不要太刻板,臃肿,重复
自动下载图标脚本执行:
npx tsx icon-system/0icon.ts
*/
/**
 * 网站分类列表
 * @type {Array<{id: string, name: string, icon: string}>}
 */
export const categories = [
  {
    id: 'mczy',
    name: 'minecraft资源', icon: '/icons/category/mc.webp',
  },
  {
    id: 'mcpf',
    name: 'minecraft皮肤', icon: '/icons/category/mc.webp',
  },
  {
    id: 'ys',
    name: '影视', icon: '/icons/category/ys.webp',
  },
  {
    id: 'zyxz',
    name: '资源下载', icon: '/icons/category/zyxz.webp',
  },
];
/**
 * 网站列表
 * @type {Array<{id: string, title: string, description: string, shortDesc: string, url: string, icon: string, category: string}>}
 */
export const sites = [
  //资源      
      {
      id: 'minebbs',
      title: 'MineBBS',
      description: '国内活跃的Minecraft中文资源论坛，提供模组、整合包、地图等下载及玩家交流社区，支持开发者与爱好者深度互动，主站域名为minebbs.com',
      shortDesc: '我的世界中文资源论坛',
      url: 'https://www.minebbs.com/',
      category: 'mczy',
      icon: '/icons/minebbs.webp',
      },
      {
      id: 'klpbbs',
      title: '苦力怕论坛',
      description: '专注Minecraft资源整合与分享的综合平台，覆盖游戏下载、服务器教程及社群运营，提供稳定可靠的资源支持',
      shortDesc: '我的世界资源整合平台',
      url: 'https://www.klpbbs.com/',
      category: 'mczy',
      icon: '/icons/klpbbs.webp',
      },
      {
      id: 'mcmod',
      title: 'MC百科',
      description: '全球最大Minecraft中文MOD百科数据库，收录超10万模组信息，提供详尽的功能解析与版本兼容性说明',
      shortDesc: 'Minecraft模组百科全书',
      url: 'https://www.mcmod.cn/',
      category: 'mczy',
      icon: '/icons/mcmod.webp',
      },
      {
      id: 'curseforge',
      title: 'CurseForge',
      description: '国际顶级Minecraft模组开发平台，支持自动化构建与版本管理，汇聚全球开发者优质开源项目，采用分布式架构保障高速下载',
      shortDesc: '专业级模组开发平台',
      url: 'https://www.curseforge.com/minecraft',
      category: 'mczy',
      icon: '/icons/curseforge.webp',
      },
      {
      id: 'modrinth',
      title: 'Modrinth',
      description: '现代化Minecraft开源项目管理平台，提供开发者友好的API接口与文档，支持高速下载和实时版本依赖分析',
      shortDesc: '开源项目托管平台',
      url: 'https://modrinth.com/',
      category: 'mczy',
      icon: '/icons/modrinth.webp',
      },
      {
      id: 'planetminecraft',
      title: 'PlanetMinecraft',
      description: '国际知名Minecraft资源分享社区，提供地图、材质、服务器列表等全方位资源，日均更新超200个原创作品',
      shortDesc: '国际资源分享社区',
      url: 'https://www.planetminecraft.com/',
      category: 'mczy',
      icon: '/icons/planetminecraft.webp',
      },
      {
      id: 'mcpedl',
      title: 'MCPE DL',
      description: '专攻Minecraft移动版（MCPE）资源下载站，收录超5000个优化适配的移动设备专用模组与附加包，提供详细设备兼容性说明',
      shortDesc: '移动版资源专营站',
      url: 'https://mcpedl.com/',
      category: 'mczy',
      icon: '/icons/mcpedl.webp',
      },
      {
      id: 'minecraftforum',
      title: 'Minecraft Forum',
      description: '全球玩家基数最大的Minecraft官方合作论坛，覆盖游戏开发动态、技术讨论及创意作品展示，拥有活跃的开发者社群',
      shortDesc: '国际玩家交流主阵地',
      url: 'https://www.minecraftforum.net/',
      category: 'mczy',
      icon: '/icons/minecraftforum.webp',
      },
      {
      id: 'minecraftwiki',
      title: '中文Minecraft Wiki',
      description: '社区维护的权威游戏百科，包含机制解析、历史版本考据及跨语言技术文档，日均更新超50次内容',
      shortDesc: '游戏知识百科全书',
      url: 'https://zh.minecraft.wiki/',
      category: 'mczy',
      icon: '/icons/minecraftwiki.webp',
      },
  //个人其他站点      
      {
      id: 'skinmc',
      title: 'SkinMC',
      description: '提供Minecraft皮肤、披风及玩家信息的一站式平台，支持自定义披风上传（需配合Mod使用），并提供皮肤预览与下载服务，主站域名为skinmc.net',
      shortDesc: 'Minecraft皮肤与披风平台',
      url: 'https://skinmc.net/',
      category: 'mcpf',
      icon: '/icons/skinmc.webp',
      },
      {
      id: 'novaskin',
      title: 'NovaSkin',
      description: '专注于Minecraft皮肤创作与分享的社区平台，提供高清皮肤库、动态皮肤效果预览及皮肤制作工具，支持用户自定义上传与实时渲染展示',
      shortDesc: '皮肤创作与动态预览平台',
      url: 'https://novaskin.me/',
      category: 'mcpf',
      icon: '/icons/novaskin.webp',
      },
      {
      id: 'namemc',
      title: 'NameMC',
      description: 'Minecraft账号管理工具，提供用户名可用性查询、历史记录追踪、皮肤绑定分析及账户安全检测功能，覆盖全球服务器数据',
      shortDesc: '账号与用户名管理工具',
      url: 'https://namemc.com/',
      category: 'mcpf',
      icon: '/icons/namemc.webp',
      },
      {
      id: 'mcskinsearch',
      title: 'MCSkinSearch',
      description: '多源整合的Minecraft皮肤搜索引擎，聚合全球第三方皮肤库资源，支持按风格、分辨率及流行度筛选，提供一键下载与兼容性适配建议',
      shortDesc: '跨平台皮肤搜索引擎',
      url: 'https://mcskinsearch.com/',
      category: 'mcpf',
      icon: '/icons/mcskinsearch.webp',
      },
      {
      id: 'littleskin',
      title: 'LittleSkin',
      description: '轻量级Minecraft皮肤托管服务，支持快速上传与链接分享，提供基础皮肤编辑器及隐私保护选项，适合个人创作者与小型社区使用',
      shortDesc: '简洁皮肤托管与分享平台',
      url: 'https://littleskin.cn/',
      category: 'mcpf',
      icon: '/icons/littleskin.webp',
      },
      // pages      
      {
      id: 'novipnoad',
      title: 'NOVIPNOAD',
      description: '提供全网最全电影、电视剧、综艺等免费在线观看服务，支持多设备观看且播放速度快，所有片源均为超清以上画质，主打无广告追剧体验[[1]][[4]][[8]]',
      shortDesc: '海外剧集无广告追剧站',
      url: 'https://www.novipnoad.net/ ',
      category: 'ys',
      icon: '/icons/novipnoad.webp',
      },
      {
      id: 'xlys',
      title: '修罗影视',
      description: '热门影视资源下载平台，提供最新电影/电视剧迅雷磁力下载及超清原画资源，因域名频繁更换需特别收藏最新入口xlys.me[[2]][[5]]',
      shortDesc: '影视资源下载聚合站',
      url: 'https://xlys.me/ ',
      category: 'ys',
      icon: '/icons/xlys.webp',
      },
      {
      id: 'ncat',
      title: '网飞猫',
      description: '免费手机在线影院，涵盖VIP电视剧、电影大片、短剧及综艺资源，播放速度快且资源丰富[[用户补充]]',
      shortDesc: '移动端免费影视平台',
      url: 'https://ncat.app/ ',
      category: 'ys',
      icon: '/icons/wfm.webp',
      },
      // 资源下载
      {      
      id: 'fenxm',
      title: '分享迷',
      description: '优质精品TV软件、互联网资源分享平台，提供各类影视盒子、直播软件、实用工具等免费资源，更新及时且资源丰富',
      shortDesc: '精品软件与资源分享平台',
      url: 'https://www.fenxm.com/',
      category: 'zyxz',
      icon: '/icons/category/zyxz.webp',
      },
      {      
      id: 'yxssp',
      title: '异星软件空间',
      description: '专注于分享各类实用软件、绿色软件、破解软件及互联网资源，提供详细的软件介绍与下载服务，是软件爱好者的聚集地',
      shortDesc: '实用软件与破解工具分享',
      url: 'https://www.yxssp.com/',
      category: 'zyxz',
      icon: '/icons/yxssp.webp',
      },
      {      
      id: 'oogccc',
      title: 'OOGC.CC',
      description: '提供各类影视资源、电子书、软件工具等下载服务，资源丰富且更新及时，界面简洁易用',
      shortDesc: '综合资源下载平台',
      url: 'https://oogc.cc/',
      category: 'zyxz',
      icon: '/icons/category/zyxz.webp',
      },
      {      
      id: 'haidaowan',
      title: '海盗湾',
      description: '全球知名的BT资源分享平台，提供电影、音乐、游戏、软件等各类资源的磁力链接下载，用户基数庞大且资源更新迅速',
      shortDesc: '全球知名BT资源分享平台',
      url: 'https://thepiratebay.org/',
      category: 'zyxz',
      icon: '/icons/haidaowan.webp',
      }
];
/**
 * 搜索网站功能
 * @param {string} query - 搜索关键词
 * @returns {Array} - 符合条件的网站列表
 */
export function searchSites(query) {
  if (!query) return sites;
  const lowerQuery = query.toLowerCase();
  return sites.filter(site => {
    return (
      site.title.toLowerCase().includes(lowerQuery) ||
      site.url.toLowerCase().includes(lowerQuery) ||
      site.category.toLowerCase().includes(lowerQuery)
    );
  });
}
/**
 * 将网站数据转换为HTML标记
 * 允许直接在页面中嵌入HTML内容
 * @param {Array} sitesList - 要呈现的网站列表
 * @returns {string} - HTML标记字符串
 */
export function sitesToHtml(sitesList) {
  if (!sitesList || !sitesList.length) return '<p>没有找到符合条件的网站</p>';
  const html = sitesList.map(site => {
    // 转义HTML特殊字符以防止XSS攻击
    const safeTitle = escapeHtml(site.title);
    const safeDesc = escapeHtml(site.shortDesc || site.description);
    const safeUrl = escapeHtml(site.url);
    const safeIcon = escapeHtml(site.icon || '/images/default.svg');
    return `
      <div class="site-card" data-category="${site.category}">
        <a href="${safeUrl}" target="_blank" rel="noopener noreferrer">
          <div class="site-icon">
            <img src="${safeIcon}" alt="${safeTitle}" loading="lazy" onerror="this.src='/images/default.svg'">
          </div>
          <div class="site-info">
            <h3>${safeTitle}</h3>
            <p>${safeDesc}</p>
          </div>
        </a>
      </div>
    `;
  }).join('');
  return `<div class="sites-grid">${html}</div>`;
}
/**
 * 安全转义HTML特殊字符
 * 防止XSS攻击
 * @param {string} str - 需要转义的字符串
 * @returns {string} - 安全的HTML字符串
 */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
