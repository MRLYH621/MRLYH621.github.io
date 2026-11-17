/* ===================== LYH 站点数据 =====================
   只改这里。sections 顺序 = 主页三张入口卡的顺序。
   items[].views 是「访问量」排序依据：目前为示例值，
   接真实统计时把 views 换成接口返回的数字即可，其余逻辑不用动。
   items[].u 有值时，卡片变成可点链接（新窗口打开）。
   invest 段落额外支持：
     tiers = 数据三档标注（事实 / 推算 / 假设）
     dims  = 只做三件事（商业模式 / 好的价格 / 好的管理层），dims[].k 是判据
     items[].m      = 体量（章节数 / 图表数）
     items[].chips  = 分区跳转标签，有 u 就跳锚点，没 u 只是文字
   首页只做「说明 + 目录」；历史 / 现在 / 未来 的分区在各卷内部。
   ======================================================== */
const SITE = {
  name: "LYH",
  githubUser: "MRLYH621",
  email: "307169825@qq.com",
  topN: 3,
  sections: [
    {
      key: "invest", file: "invest.html", zh: "投资日记", en: "INVESTING NOTES",
      headline: "投资日记",
      short: "只看三件事：商业模式、好的价格、好的管理层。",
      intro: "这里不荐股，也不预测股价。每篇只回答三件事：这门生意凭什么长期赚高毛利、现在的价格离价值有多远、管理层把钱和说过的话都放在了哪里。写下来是为了日后对账——对错由时间核对，不由当天涨跌。",
      tiers: [
        "<b>事实</b> 原始披露，可回溯",
        "<b>推算</b> 可复算的算术",
        "<b>假设</b> 我的判断，请自行打折"
      ],
      dims: [
        { en: "BUSINESS", t: "商业模式",
          q: "凭什么长期赚高毛利：客户为什么不走，对手为什么抄不会。",
          k: "毛利率扛不扛得住十年、提价有没有掉量、上下游占款是收还是垫。" },
        { en: "PRICE", t: "好的价格",
          q: "价格不能离价值太远：这门生意值多少，市值已经写进了什么。",
          k: "核心业务 PE、自由现金流收益率、以及翻倍所需的假设能不能兑现。" },
        { en: "PEOPLE", t: "好的管理层",
          q: "钱和话去了哪：capex、分红、回购，以及说过的是否兑现。",
          k: "分红加回购占利润多少、资本开支回报率、三年承诺的完成度。" }
      ],
      items: [
        {
          t: "腾讯控股 · 体系化投资研究",
          d: "35 份研究熔成一册：四分部与 2,596 亿利润拆解、微信与游戏两台印钞机、投资资产的三层剥离、AI 投入的真实成本与三阶段路径。卷内按「历史 → 现在 → 未来」排。",
          m: "12 节 · 5 图",
          tag: "公司研究", views: 9800, u: "invest-tencent.html",
          chips: [
            { t: "历史 H1–H3", u: "invest-tencent.html#h" },
            { t: "现在 N1–N6 · 2025–2026", u: "invest-tencent.html#n" },
            { t: "未来 F1–F3", u: "invest-tencent.html#f" }
          ]
        },
        {
          t: "泡泡玛特 · 体系化投资研究",
          d: "30+ 份专题熔成一册：情绪设计工业化、IP 矩阵与艺术家归属、全球化换挡、集团化与护城河，以及调整年的估值与跟踪清单。",
          m: "9 章 · 30+ 份专题",
          tag: "公司研究", views: 9200, u: "invest-popmart.html",
          chips: [{ t: "商业模式" }, { t: "IP 矩阵" }, { t: "全球化" }, { t: "估值与跟踪" }]
        },
        {
          t: "五粮液 · 投资价值总览",
          d: "29 份散稿熔成一册：710 亿现金与 1,910 亿运营资产的错配、生产端 319–419 亿利润与报表 120 亿谷值的双轨区分、监管商品与收入确认机制、渠道话语权与 2026 跟踪。",
          m: "8 主题合并 · 2 保留原文",
          tag: "公司研究", views: 8600, u: "wly/五粮液_投资价值总览_门户导航.html",
          chips: [
            { t: "股东与回报", u: "wly/主题A_股东结构与资本回报_合并.html" },
            { t: "估值与现金", u: "wly/主题B_估值框架与自由现金_合并.html" },
            { t: "产能与窖池", u: "wly/主题D_产能窖池与各档位利润_合并.html" },
            { t: "2026 跟踪", u: "wly/主题G_2026经营跟踪_三季报与现金流_合并.html" },
            { t: "未来5年推演", u: "wly/五粮液_未来5年利润分红推演_20261013.html" }
          ]
        },
        {
          t: "投资理论与方法 · 一册通",
          d: "11 份研究熔成一册：格雷厄姆第一原理、三因子收益分解、分红与复投、4% 法则与现金贬值、低波红利 90 年实证、泡沫判据、收益率结构与利率久期。卷内方法论，供上面两家公司共用。",
          m: "9 章 · 7 图",
          tag: "方法论", views: 12000, u: "invest-theory.html",
          chips: [
            { t: "第一原理", u: "invest-theory.html#m1" },
            { t: "收益数学", u: "invest-theory.html#m2" },
            { t: "周期与泡沫", u: "invest-theory.html#m6" },
            { t: "宏观到估值", u: "invest-theory.html#m8" }
          ]
        }
      ]
    },
    {
      key: "projects", file: "projects.html", zh: "AI 项目", en: "AI PROJECTS",
      short: "从多人共处小游戏，到省时间的工具。",
      intro: "用 AI 做的小东西：能多人一起待着的空间、省时间的工具，还有一些没做完的想法。做完的先放上来。",
      items: [
        { t: "耶耶DAY", d: "湖边钓鱼与静室 DJ 两个场景：抛一竿、等一会儿、收回来，或和陌生人待在同一拍子里。three.js + WebSocket，20 人同房。", tag: "游戏", views: 2340, u: "https://quiet-dj-room.app.workbuddy.host/?sharecode=XL4KMY6ASH" },
        { t: "AI 写作助手", d: "把零散素材整理成可发布的长文。", tag: "工具", views: 1180 },
        { t: "数据小工具", d: "把重复的手工整理自动化，重点是省时间。", tag: "工具", views: 860 },
        { t: "还在实验的", d: "没做完也先放上来，记录想法有时比展示成果更有意思。", tag: "实验", views: 320 }
      ]
    },
    {
      key: "books", file: "books.html", zh: "书籍", en: "WRITING",
      short: "《信息传播那些事儿》· 12 卷 211 篇，已成稿 36 篇。",
      intro: "一本还没写完的书。用讲故事的口吻，把信息传播这行从十万年前的八卦讲到算法与 AI；计划 12 卷 211 篇，目前成稿 36 篇，可在线阅读。",
      items: [
        { t: "信息传播那些事儿", d: "12 卷 211 篇写作计划，已成稿 36 篇；从十万年前讲到算法与 AI。", tag: "连载中", views: 3280, u: "book/" }
      ]
    }
  ]
};

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const resolve = (u) => u === "github" ? `https://github.com/${encodeURIComponent(SITE.githubUser)}` : u;
const pad = (n) => String(n).padStart(2, "0");
const fmtViews = (n) => n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n || 0);
/* 泡泡玛特品牌双主色 + Labubu 马卡龙薄荷，只作点缀 */
const TONES = [
  { c: 'var(--red)',    on: '#ffffff' },
  { c: 'var(--yellow)', on: '#2b2320' },
  { c: 'var(--mint)',   on: '#12301f' }
];
/* 目录条目一律新窗口打开：读完能退回来继续看目录 */
const linkAttrs = () => ' target="_blank" rel="noopener"';

/* ---------- 公共：标题 / 页脚 / 主题 ---------- */
function initCommon() {
  const page = document.body.dataset.page;
  $('#year').textContent = new Date().getFullYear();
  $('#foot').innerHTML =
    `<a href="${esc(resolve('github'))}" target="_blank" rel="noopener">GITHUB ↗</a>` +
    `<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>`;
  if (page === 'home') {
    document.title = `${SITE.name} · ${SITE.sections.map(s => s.zh).join(" / ")}`;
  }

  const btn = $('#themeBtn');
  const KEY = 'lyh-v4-theme';
  function applyTheme(dark) {
    document.body.dataset.theme = dark ? 'dark' : '';
    btn.textContent = dark ? 'LIGHT' : 'DARK';
    btn.setAttribute('aria-label', dark ? '切换到浅色主题' : '切换到深色主题');
    $('meta[name="theme-color"]').content = dark ? '#1b1618' : '#fffaf3';
  }
  let dark = localStorage.getItem(KEY) === 'dark';
  applyTheme(dark);
  btn.addEventListener('click', () => {
    dark = !dark;
    localStorage.setItem(KEY, dark ? 'dark' : 'light');
    applyTheme(dark);
  });
}

/* ---------- 主页：三张入口卡，点击进详情页 ---------- */
function renderHome() {
  $('#homeList').innerHTML = SITE.sections.map((s, i) => {
    const tone = TONES[i % TONES.length];
    return `<a class="entry" href="${esc(s.file)}"
        style="--c:${tone.c};--on:${tone.on}"
        aria-label="打开${esc(s.zh)}详情页">
      <span class="badge">${pad(i + 1)}</span>
      <span class="label">
        <span class="line1"><span class="zh">${esc(s.zh)}</span><span class="en">${esc(s.en)}</span></span>
        <span class="desc">${esc(s.short)}</span>
      </span>
      <span class="count">${pad(s.items.length)}</span>
      <span class="arrow" aria-hidden="true">→</span>
    </a>`;
  }).join('');
}

/* ---------- 详情页：简介 + 访问量 Top N 卡片 ---------- */
function cardHTML(it, i, isRest) {
  const tone = TONES[i % TONES.length];
  const chapters = (it.chapters || []).length
    ? `<span class="chapters">${it.chapters.map(c => `<span>${esc(c)}</span>`).join("")}</span>` : "";
  const inner = `<span class="card-top">
      <span class="card-idx">${pad(i + 1)}</span>
      ${it.tag ? `<span class="card-tag">${esc(it.tag)}</span>` : ""}
    </span>
    <span class="card-title">${esc(it.t)}</span>
    <span class="card-desc">${esc(it.d)}</span>
    ${chapters}
    <span class="card-foot">
      <span class="views">${fmtViews(it.views)} 访问</span>
      <span class="go" aria-hidden="true">${it.u ? "↗" : "·"}</span>
    </span>`;
  const cls = `card${isRest ? " is-rest" : ""}${it.u ? " has-link" : " card-static"}`;
  const style = `style="--c:${tone.c};--on:${tone.on}"`;
  return it.u
    ? `<a class="${cls}" ${style} href="${esc(resolve(it.u))}" target="_blank" rel="noopener">${inner}</a>`
    : `<article class="${cls}" ${style}>${inner}</article>`;
}

function renderDetail(key) {
  const idx = SITE.sections.findIndex(s => s.key === key);
  if (idx < 0) { location.href = 'index.html'; return; }
  const s = SITE.sections[idx];
  const tone = TONES[idx % TONES.length];

  /* 投资页：说明 + 维度 + 目录（分区在各卷内部） */
  if (s.dims && $('#catalog')) { renderOverview(s, tone); return; }

  document.title = `${s.headline || s.zh} · ${SITE.name}`;
  $('#h1Text').textContent = s.headline || s.zh;
  $('#brand').textContent = `${SITE.name} / ${s.en}`;
  $('#intro').textContent = s.intro;
  $('#intro').style.setProperty('--c', tone.c);

  const sorted = s.items.slice().sort((a, b) => (b.views || 0) - (a.views || 0));
  const top = Math.min(SITE.topN, sorted.length);
  $('#meta').textContent = sorted.length === 1
    ? `共 ${pad(sorted.length)} 本 · 点击卡片进入阅读`
    : `共 ${pad(sorted.length)} 条 · 按访问量排序 · 默认显示前 ${top}`;
  $('#cards').innerHTML = sorted.map((it, i) => cardHTML(it, i, i >= top)).join('');

  const rest = sorted.length - top;
  if (rest > 0) {
    $('#moreRow').innerHTML =
      `<button class="more" id="moreBtn" type="button" aria-expanded="false">查看全部 ${pad(sorted.length)} 条 ＋</button>`;
    const btn = $('#moreBtn');
    const collapse = () => {
      $('#cards').classList.remove('show-all');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = `查看全部 ${pad(sorted.length)} 条 ＋`;
    };
    btn.addEventListener('click', () => {
      const show = !$('#cards').classList.contains('show-all');
      $('#cards').classList.toggle('show-all', show);
      btn.setAttribute('aria-expanded', String(show));
      btn.textContent = show ? '收起 ▲' : `查看全部 ${pad(sorted.length)} 条 ＋`;
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && $('#cards').classList.contains('show-all')) {
        collapse(); btn.focus();
      }
    });
  } else {
    $('#moreRow').innerHTML = '';
  }
}

/* ---------- 投资页：这份研究干什么 + 六个维度 + 目录 ---------- */
function renderOverview(s, tone) {
  document.title = `${s.headline || s.zh} · ${SITE.name}`;
  $('#h1Text').textContent = s.headline || s.zh;
  $('#brand').textContent = `${SITE.name} / ${s.en}`;
  $('#intro').textContent = s.intro;
  $('#intro').style.setProperty('--c', tone.c);

  if ($('#tiers')) {
    $('#tiers').innerHTML = (s.tiers || []).map(x => `<span>${x}</span>`).join('');
  }

  if ($('#dims')) {
    $('#dims').innerHTML = (s.dims || []).map((d, i) => `
      <div class="dim">
        <i>${pad(i + 1)} · ${esc(d.en)}</i>
        <b>${esc(d.t)}</b>
        <span>${esc(d.q)}</span>
        ${d.k ? `<span class="dim-k"><em>判据</em>${esc(d.k)}</span>` : ""}
      </div>`).join('');
  }

  if ($('#catalog')) {
    $('#catalog').innerHTML = (s.items || []).map((it, i) => {
      const chips = (it.chips || []).map(c => c.u
        ? `<a class="chip" href="${esc(resolve(c.u))}"${linkAttrs()}>${esc(c.t)}</a>`
        : `<span class="chip">${esc(c.t)}</span>`).join('');
      return `<article class="vol">
        <div class="vol-head">
          <span class="vol-no">${pad(i + 1)}</span>
          <a class="vol-t" href="${esc(resolve(it.u))}"${linkAttrs()}>${esc(it.t)}<span class="ar" aria-hidden="true">↗</span></a>
          ${it.tag ? `<span class="vol-tag">${esc(it.tag)}</span>` : ""}
        </div>
        <p class="vol-d">${esc(it.d)}</p>
        <div class="vol-foot">
          <span class="vol-m">${esc(it.m || "")}</span>
          <div class="chips">${chips}</div>
        </div>
      </article>`;
    }).join('');
  }
}

/* ---------- 百度统计：全站 PV + 外链点击 ---------- */
(function initAnalytics() {
  window._hmt = window._hmt || [];
  const hm = document.createElement('script');
  hm.src = 'https://hm.baidu.com/hm.js?3ee657b76b1ff03579621986c92753d5';
  document.head.appendChild(hm);
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[target="_blank"]');
    if (!a) return;
    window._hmt.push(['_trackEvent', 'outbound', 'click', a.getAttribute('href')]);
  });
})();

/* ---------- 启动 ---------- */
initCommon();
const page = document.body.dataset.page;
if (page === 'home') renderHome();
else renderDetail(page);
