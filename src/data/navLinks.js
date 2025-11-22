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
    name: '资源', icon: '/icons/category/zyxz.webp',
  },
  {
    id: 'gj',
    name: '在线工具', icon: '/icons/category/gj.webp',
  },
  {
    id: 'cloud',
    name: '云服务器', icon: '/icons/category/cloud.webp',
  },
  {
    id: 'game',
    name: '在线游戏', icon: '/icons/category/game.webp',
  },
  {
    id: 'community',
    name: '社区', icon: '/icons/category/community.webp',
  },
  {
    id: 'selfhosted',
    name: '自己搭建的', icon: '/icons/category/selfhosted.webp',
  },
];
/**
 * 网站列表
 * @type {Array<{id: string, title: string, description: string, shortDesc: string, url: string, icon: string, category: string}>}
 */
export const sites = [
  //资源      
      {
      id: 'github',
      title: 'GitHub',
      description: '全球最大的开源与协作平台，基于 Git 提供可靠的代码托管与分支工作流。平台整合了 Pull Requests、Issues 与项目管理，并通过 Actions 提供内置 CI/CD，适合个人、开源社区与企业级团队的协作与持续交付。',
      shortDesc: '开源与代码托管平台',
      url: 'https://github.com/',
      category: 'community',
      icon: '/icons/github.webp',
      },
      {
      id: 'chunkbase',
      title: 'Chunk Base',
      description: '为 Minecraft 玩家与地图制作者提供实用工具的网站，包含种子地图浏览、结构定位与箱子生成器，便于快速查找世界内要素与资源。',
      shortDesc: 'Minecraft 地图与工具',
      url: 'https://www.chunkbase.com/',
      category: 'mczy',
      icon: '/icons/chunkbase.webp',
      },
      {
      id: 'lzltool',
      title: 'LZL 在线工具',
      description: '集合多功能在线实用工具的中文站点，覆盖编码转换、图片处理、文本工具与开发辅助，适合日常快速处理小任务。',
      shortDesc: '多功能在线工具',
      url: 'https://lzltool.cn/',
      category: 'gj',
      icon: '/icons/lzltool.webp',
      },
      {
      id: '2fa-run',
      title: '2FA.run',
      description: '提供一次性验证码与双因素身份验证相关工具的站点，便于测试与管理基于时间的一次性密码（TOTP）及相关安全工作流。',
      shortDesc: '二步验证辅助工具',
      url: 'https://2fa.run/',
      category: 'gj',
      icon: '/icons/2fa-run.webp',
      },
      {
      id: 'iloveimg',
      title: 'iLoveIMG',
      description: '功能齐全的在线图片处理平台，支持压缩、裁剪、格式转换与批量操作，界面友好，适合快速处理图片资源。',
      shortDesc: '在线图片编辑与压缩',
      url: 'https://www.iloveimg.com/zh-cn',
      category: 'gj',
      icon: '/icons/iloveimg.webp',
      },
      {
      id: 'tool-cccyun',
      title: '彩虹工具网',
      description: '集合站长工具与实用开发/运维脚本的在线站点，提供源码查看、编码转换与常用调试工具，适合开发者与站长使用。',
      shortDesc: '站长与开发工具集合',
      url: 'https://tool.cccyun.cc/',
      category: 'gj',
      icon: '/icons/tool-cccyun.webp',
      },
      {
      id: 'uutool',
      title: 'UU 在线工具',
      description: '便捷实用的在线工具集合，覆盖文本、图片、编码与网络诊断等常用功能，适合日常快速处理。',
      shortDesc: '便捷工具集合',
      url: 'https://uutool.cn/',
      category: 'gj',
      icon: '/icons/uutool.webp',
      },
      {
      id: 'baimiao',
      title: '白描网页版',
      description: '在线 OCR 与图片转文字工具，支持表格识别与导出为 Excel/Word，适合扫描笔记、发票与文档的快速数字化。',
      shortDesc: '图片转文字与表格识别',
      url: 'https://web.baimiaoapp.com/',
      category: 'gj',
      icon: '/icons/baimiao.webp',
      },
      {
      id: 'tool-lu',
      title: 'Tool.Lu',
      description: '历史悠久的在线工具平台，提供多种实用工具如图片处理、文本转换与编码辅助，面向普通用户与开发者。',
      shortDesc: '老牌在线工具站',
      url: 'https://tool.lu/',
      category: 'gj',
      icon: '/icons/tool-lu.webp',
      },
      {
      id: 'moyu-games',
      title: '摸鱼导航',
      description: '以休闲游戏与娱乐资源为主的导航站，汇集在线小游戏与趣味工具，适合轻松消遣时使用。',
      shortDesc: '休闲游戏导航',
      url: 'https://moyu.games/',
      category: 'game',
      icon: '/icons/moyu-games.webp',
      },
      {
      id: 'yikm',
      title: '小霸王 NES 在线游戏',
      description: '提供红白机（NES）与街机在线模拟器的游戏集合，便于回味经典像素游戏与单机作品。',
      shortDesc: '经典在线街机与 NES 游戏',
      url: 'https://www.yikm.net/',
      category: 'game',
      icon: '/icons/yikm.webp',
      },
      {
      id: 'poki',
      title: 'Poki',
      description: '国际化的 HTML5 游戏平台，聚合大量浏览器小游戏，支持分类筛选与多设备访问体验。',
      shortDesc: 'HTML5 在线游戏集合',
      url: 'https://poki.com/zh/html5',
      category: 'game',
      icon: '/icons/poki.webp',
      },
      {
      id: 'mc-js-cool',
      title: 'MC.JS',
      description: '面向浏览器的 Minecraft 中文化项目，提供在线体验与社区改良版本，便于快速试玩与分享创意地图。',
      shortDesc: '网页端 Minecraft 体验',
      url: 'https://www.mc.js.cool/',
      category: 'game',
      icon: '/icons/mc-js-cool.webp',
      },
      {
      id: 'mcp-skins-site',
      title: 'Minecraft Skins (The Skindex)',
      description: '知名的 Minecraft 皮肤库与编辑平台，提供海量用户上传的皮肤资源与在线编辑器，方便玩家定制外观。',
      shortDesc: '皮肤库与在线编辑器',
      url: 'https://www.minecraftskins.com/',
      category: 'mcpf',
      icon: '/icons/mcp-skins-site.webp',
      },
      {
      id: 'minecraft-schematics',
      title: 'Minecraft Schematics',
      description: '专注于 Minecraft 地图与结构模板的资源站，收录世界、建筑与结构方案，便于创作者重用与参考。',
      shortDesc: '地图与结构模板库',
      url: 'https://www.minecraft-schematics.com/',
      category: 'mczy',
      icon: '/icons/minecraft-schematics.webp',
      },
      {
      id: 'minecraftpfp',
      title: 'Minecraft PFP',
      description: '提供 Minecraft 头像与个人资料图片生成、下载服务的网站，便于玩家快速获取个人头像素材。',
      shortDesc: '头像与资料图片服务',
      url: 'https://www.minecraftpfp.com/',
      category: 'mcpf',
      icon: '/icons/minecraftpfp.webp',
      },
      {
      id: 'himcbbs',
      title: 'HiMCBBS',
      description: '中文 Minecraft 论坛，聚集玩家与制作者分享模组、教程与服务器资源，适合社区交流与问题求助。',
      shortDesc: 'Minecraft 中文社区论坛',
      url: 'https://www.himcbbs.com/',
      category: 'mczy',
      icon: '/icons/himcbbs.webp',
      },
      {
      id: 'nitwikit',
      title: 'NitWikIT',
      description: '非官方的 Minecraft 资料站/维基，提供玩法讲解与社区整理的资料，适合查阅玩法细节与创作灵感。',
      shortDesc: '社区维护的 Minecraft 资料',
      url: 'https://nitwikit.8aka.org/',
      category: 'mczy',
      icon: '/icons/nitwikit.webp',
      },
      {
      id: 'education-minecraft',
      title: 'Minecraft Education',
      description: '针对教育场景的 Minecraft 官方平台，提供教学资源、课程模板与课堂管理工具，支持 K-12 教学创新。',
      shortDesc: '教育版 Minecraft 平台',
      url: 'https://education.minecraft.net/zh-hans',
      category: 'mczy',
      icon: '/icons/education-minecraft.webp',
      },
      {
      id: 'minecraft-official',
      title: 'Minecraft 官方网站',
      description: 'Minecraft 的官方网站，提供游戏新闻、客户端下载、更新说明与官方商店信息，是获取官方资源的首选渠道。',
      shortDesc: 'Minecraft 官方站点',
      url: 'https://www.minecraft.net/zh-hans',
      category: 'mczy',
      icon: '/icons/minecraft-official.webp',
      },
      {
      id: 'linux-do',
      title: 'LINUX DO',
      description: '技术社区与文章聚合平台，专注于 Linux 与开源技术的教程、工具与讨论，适合开发者与运维工程师参考学习。',
      shortDesc: 'Linux 与开源技术社区',
      url: 'https://linux.do/',
      category: 'community',
      icon: '/icons/linux-do.webp',
      },
      {
      id: 'nodeloc',
      title: 'NodeLoc',
      description: '技术与交流社区，包含开发者讨论、教程与资源分享，突出自由友好的交流氛围。',
      shortDesc: '开发者交流社区',
      url: 'https://nodeloc.com',
      category: 'community',
      icon: '/icons/nodeloc.webp',
      },
      {
      id: 'aliyun',
      title: '阿里云',
      description: '阿里云提供全面的云计算与基础设施服务，覆盖云服务器、数据库、网络与安全等企业级能力，适合部署生产环境与弹性扩展。',
      shortDesc: '云服务提供商',
      url: 'https://aliyun.com/',
      category: 'cloud',
      icon: '/icons/aliyun.webp',
      },
      {
      id: 'cloud-tencent',
      title: '腾讯云',
      description: '腾讯云提供云服务器、数据库与云原生服务，并结合生态化产品与开发者文档，适合国内业务与混合云场景。',
      shortDesc: '云服务与开发者社区',
      url: 'https://cloud.tencent.com/',
      category: 'cloud',
      icon: '/icons/cloud-tencent.webp',
      },
      {
      id: 'sadidc',
      title: '伤心的云',
      description: '面向开发者与站长的云服务信息与资源站点，提供产品介绍与购买入口。',
      shortDesc: '云服务信息站',
      url: 'https://sadidc.com/',
      category: 'cloud',
      icon: '/icons/sadidc.webp',
      },
      {
      id: 'rainyun',
      title: '雨云',
      description: '新一代云服务提供商，提供云主机与相关运维服务，面向中小型企业与个人开发者。',
      shortDesc: '云主机与运维服务',
      url: 'https://www.rainyun.com/',
      category: 'cloud',
      icon: '/icons/rainyun.webp',
      },
      {
      id: 'pan-zghome',
      title: 'Zqq Cloud',
      description: '个人搭建的私有网盘服务与资源分享站点，适合个人备份与小范围分享。',
      shortDesc: '个人网盘与资源站',
      url: 'https://pan.zghome.top',
      category: 'selfhosted',
      icon: '/icons/pan-zghome.webp',
      },
      {
      id: 'zghome',
      title: 'Zqq\'s 主页',
      description: '个人主页与项目展示站点，包含个人联系方式与项目链接，便于展示与归档个人工作。',
      shortDesc: '个人主页与项目展示',
      url: 'http://zghome.top',
      category: 'zyxz',
      icon: '/icons/zghome.webp',
      },
      {
      id: 'fenxm',
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
      icon: '/icons/fenxm.webp',
      },
      {      
      id: 'oogccc',
      title: 'OOGC.CC',
      description: '提供各类影视资源、电子书、软件工具等下载服务，资源丰富且更新及时，界面简洁易用',
      shortDesc: '综合资源下载平台',
      url: 'https://oogc.cc/',
      category: 'zyxz',
      icon: '/icons/oogc.webp',
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
