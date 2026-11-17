/* ===================== LYH 站点数据 =====================
   只改这里。sections 顺序 = 主页三张入口卡的顺序。
   items[].views 是「访问量」排序依据：目前为示例值，
   接真实统计时把 views 换成接口返回的数字即可，其余逻辑不用动。
   items[].u 有值时，卡片变成可点链接（新窗口打开）。
   invest 段落额外支持 dims / vols / zones：
     dims = 研究维度（答什么问题）
     vols = 整卷入口
     zones = 按时间归档（历史 / 现在 / 未来），now 区年限自动取「去年–今年」
   ======================================================== */
const SITE = {
  name: "LYH",
  githubUser: "MRLYH621",
  email: "307169825@qq.com",
  topN: 3,
  sections: [
    {
      key: "invest", file: "invest.html", zh: "投资", en: "VALUE INVESTING",
      headline: "投资研究",
      short: "把公司拆成生意、账本、价格三件事，按历史、现在、未来归档。",
      intro: "这里不荐股，也不预测股价。只做一件事：把一家公司拆到能回答三个问题——它靠什么赚钱、赚到的钱是不是真的、现在这个价格已经隐含了什么假设。答案按时间归档：历史只做核对，现在只做定价，未来只写能被推翻的条件。",
      tiers: [
        "<b>事实</b> 原始披露，可回溯",
        "<b>推算</b> 可复算的算术",
        "<b>假设</b> 我的判断，请自行打折"
      ],
      dims: [
        { en: "BUSINESS", t: "生意", q: "收入从哪来、谁在付钱、为什么明年还愿意付" },
        { en: "NUMBERS",  t: "账本", q: "利润能不能变成现金，多少是一次性收益" },
        { en: "PRICE",    t: "价格", q: "核心业务值多少，估值里已经写进了什么" },
        { en: "CAPITAL",  t: "用钱", q: "赚来的钱去了 capex、分红，还是回购" },
        { en: "CYCLE",    t: "周期", q: "现在站在哪一段，什么信号说明看错了" },
        { en: "TIME",     t: "时间", q: "三年、十年，每种情景各自需要什么前提" }
      ],
      vols: [
        { t: "投资理论与方法 · 一册通", m: "9 章 · 7 图 · 11 份研究", u: "invest-theory.html" },
        { t: "腾讯控股 · 体系化投资研究", m: "12 节 · 5 图 · 35 份研究", u: "invest-tencent.html" },
        { t: "泡泡玛特 · 体系化投资研究", m: "9 章 · 30+ 份专题", u: "invest-popmart.html" }
      ],
      zones: [
        {
          key: "history", t: "历史", en: "HISTORY", range: "2014–2024",
          note: "只做核对：当年到底发生了什么，钱是怎么长出来的",
          items: [
            { t: "十二年财务轨迹：一条不断加速的曲线", d: "收入 789 亿 → 6,600 亿，净利 238 亿 → 2,596 亿，11 年 10.5 倍、年化约 24%。先确认这条曲线的形状，再谈它能不能延续。", src: "腾讯 H1", u: "invest-tencent.html#h1" },
            { t: "七个关键节点：一条年份时间线", d: "3Q 大战、微信、投资帝国、反垄断、视频号、AI——每一次转折都发生在利润表之前。", src: "腾讯 H2", u: "invest-tencent.html#h2" },
            { t: "历史的三条规律（和一条教训）", d: "把十二年的增速、毛利、费用放到同一张表上，看哪些东西从来没变过。", src: "腾讯 H3", u: "invest-tencent.html#h3" },
            { t: "第一原理：格雷厄姆 1934 年的 7 部 52 章", d: "内在价值、安全边际、投资与投机的分野、市场先生——后面所有估值方法的源头。", src: "方法论 01", u: "invest-theory.html#m1" },
            { t: "周期与泡沫：创业板 2015 vs 科创板 2024", d: "两轮科技牛逐项对照，得出泡沫的三个判据：估值、ROE、亏损面。涨幅会骗人，ROE 不会。", src: "方法论 06", u: "invest-theory.html#m6" },
            { t: "低波红利 90 年实证", d: "MSCI 低波红利 8.68% vs 基准 7.44%，夏普 0.78 vs 0.50；代价是四次牛市明确踏空。", src: "方法论 05", u: "invest-theory.html#m5" }
          ]
        },
        {
          key: "now", t: "现在", en: "NOW", autoRange: true,
          note: "去年 + 今年：最新财报与当期定价，只回答「现在贵不贵」",
          items: [
            { t: "四分部与 2,596 亿利润拆解", d: "利润表拆到四个分部，看哪一块在赚钱、哪一块在花钱，以及拐点具体出现在哪一季。", src: "腾讯 N1", u: "invest-tencent.html#n1" },
            { t: "游戏：850 亿从哪来", d: "本土与海外、老产品与新产品的收入结构，以及流水到收入的确认节奏。", src: "腾讯 N2", u: "invest-tencent.html#n2" },
            { t: "微信生态：1,080 亿的三口印钞", d: "广告、支付与商业、小程序，三条变现通道各自的增速与天花板。", src: "腾讯 N3", u: "invest-tencent.html#n3" },
            { t: "其他业务与 AI 的真实成本", d: "把 AI 从故事里拉出来：算力、折旧、人力各自吃掉多少利润。", src: "腾讯 N4", u: "invest-tencent.html#n4" },
            { t: "当前定价：13 倍整体 PE，7.8 倍核心 PE", d: "三层剥离：剔投资资产、再剔联营收益，看核心平台业务到底卖几倍。", src: "腾讯 N5", u: "invest-tencent.html#n5" },
            { t: "2026 这一年：已发生的与全年点估计", d: "中报实数 + 剩余季度外推，给出全年利润的点估计与区间，不留模糊。", src: "腾讯 N6", u: "invest-tencent.html#n6" },
            { t: "调整年：Q3 收益 −45%~50% 与 16.5 倍定价", d: "高基数 + 海外线上退潮，2026 收入与利润双降；此时 16.5 倍 2026E 是贵还是便宜。", src: "泡泡玛特", u: "invest-popmart.html" },
            { t: "收益的数学：三个因子相乘", d: "利润增长 × 估值变化 × 分红复投，10 年 8.45 倍的每一块分别来自哪里。", src: "方法论 02", u: "invest-theory.html#m2" }
          ]
        },
        {
          key: "future", t: "未来", en: "FUTURE", range: "2027 →",
          note: "不写数字预测，只写能被推翻的条件",
          items: [
            { t: "三阶段时间线：投入 → 验证 → 兑现", d: "把巨额 AI 投入拆成三个阶段，标出每阶段的观察指标与时间窗。", src: "腾讯 F1", u: "invest-tencent.html#f1" },
            { t: "三条路径：乐观 / 中性 / 悲观", d: "同一套假设下的三种结局，以及各自需要的增速与利润率前提。", src: "腾讯 F2", u: "invest-tencent.html#f2" },
            { t: "验证清单与反证条件", d: "什么信号出现说明看对了、什么信号出现必须认错——先写下来，再持有。", src: "腾讯 F3", u: "invest-tencent.html#f3" },
            { t: "调整年的跟踪清单与 10 年三级情景", d: "主动控速还是被动回落；成熟期利润的悲观 / 中性 / 乐观三档与对应估值。", src: "泡泡玛特 07", u: "invest-popmart.html" },
            { t: "宏观到估值：利率是那个旋钮", d: "PE ≈ 1/(r_f + ERP − g)；利率每上行 100bp，长久期资产被压多少。", src: "方法论 08", u: "invest-theory.html#m8" }
          ]
        }
      ],
      items: [
        { t: "投资理论与方法 · 一册通", d: "11 份研究熔成一册：格雷厄姆第一原理、三因子收益分解、分红与复投、4% 法则与现金贬值、低波红利 90 年实证、泡沫判据、收益率结构与利率久期。9 章 7 图，可离线阅读。", tag: "方法论", views: 12000, u: "invest-theory.html", chapters: ["第一原理","收益数学","因子","周期","宏观"] },
        { t: "腾讯控股 · 体系化投资研究", d: "35 份研究去粗取精熔成一册：4 大分部、微信与游戏两台印钞机、2596 亿利润拆解、AI 投入真相与 SOTP 估值。12 节 5 图，可离线阅读。", tag: "公司研究", views: 9800, u: "invest-tencent.html", chapters: ["财务全景","游戏板块","微信生态","估值总表"] },
        { t: "泡泡玛特 · 体系化投资研究", d: "30+ 份专题熔成一册：情绪设计工业化、IP 矩阵、全球化与集团化、艺术家护城河与 IP 归属、估值与调整年跟踪清单。9 章 2 图，持续更新。", tag: "公司研究", views: 9200, u: "invest-popmart.html", chapters: ["商业模式","IP矩阵","全球化","护城河","估值"] }
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

  /* 有 zones 的段落渲染成「研究说明 + 时间目录」 */
  if (s.zones && $('#zones')) { renderMap(s, tone); return; }

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

/* ---------- 投资页：研究维度 + 整卷 + 历史/现在/未来 目录 ---------- */
/* 目录条目一律新窗口打开：读完能退回来继续看目录 */
const linkAttrs = () => ' target="_blank" rel="noopener"';

function renderMap(s, tone) {
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
      </div>`).join('');
  }

  if ($('#vols')) {
    $('#vols').innerHTML = (s.vols || []).map(v => `
      <a class="vol" href="${esc(resolve(v.u))}"${linkAttrs(v.u)}>
        <span class="v-t">${esc(v.t)}</span>
        <span class="v-m">${esc(v.m)}</span>
        <span class="v-a" aria-hidden="true">↗</span>
      </a>`).join('');
  }

  if ($('#zones')) {
    const Y = new Date().getFullYear();
    let n = 0;
    $('#zones').innerHTML = (s.zones || []).map(z => {
      const range = z.autoRange ? `${Y - 1}–${Y}` : (z.range || "");
      const rows = (z.items || []).map(it => {
        n++;
        return `<a class="row" href="${esc(resolve(it.u))}"${linkAttrs(it.u)}>
          <span class="no">${pad(n)}</span>
          <span class="body">
            <span class="tt">${esc(it.t)}</span>
            <span class="dd">${esc(it.d)}</span>
          </span>
          <span class="src">${esc(it.src)}</span>
          <span class="ar" aria-hidden="true">↗</span>
        </a>`;
      }).join('');
      return `<section class="zone" id="z-${esc(z.key)}">
        <div class="zhd">
          <span class="z-t">${esc(z.t)}</span>
          <span class="z-en">${esc(z.en)}</span>
          <span class="z-r">${esc(range)}</span>
          <span class="z-d">${esc(z.note)}</span>
        </div>
        <div class="toc">${rows}</div>
      </section>`;
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
