/* ===================== LYH 站点数据 =====================
   只改这里。sections 顺序 = 主页三张入口卡的顺序。
   items[].views 是「访问量」排序依据：目前为示例值，
   接真实统计时把 views 换成接口返回的数字即可，其余逻辑不用动。
   items[].u 有值时，卡片变成可点链接（新窗口打开）。
   ======================================================== */
const SITE = {
  name: "LYH",
  githubUser: "MRLYH621",
  email: "307169825@qq.com",
  topN: 3,
  sections: [
    {
      key: "invest", file: "invest.html", zh: "投资", en: "INVESTING",
      short: "持有、复利，与判断失误的记录。",
      intro: "把判断写下来，比记住结果更有用。这里收着关于持有、复利，以及什么时候该承认自己想错了的笔记。",
      items: [
        { t: "复利真正难的地方", d: "不是收益率，是时间和不中断。", tag: "复利", views: 1740 },
        { t: "长期主义不是不动", d: "关于持有、耐心，以及什么时候该承认自己想错了。", tag: "方法论", views: 1280 },
        { t: "记录一次判断失误", d: "把错误写下来，比记住赚钱的时刻更有用。", tag: "复盘", views: 960 },
        { t: "仓位与情绪", d: "先想清楚能承受多少，再谈想赚多少。", tag: "随笔", views: 410 }
      ]
    },
    {
      key: "projects", file: "projects.html", zh: "AI 项目", en: "AI PROJECTS",
      short: "从多人共处小游戏，到省时间的工具。",
      intro: "用 AI 做的小东西：能多人一起待着的空间、省时间的工具，还有一些没做完的想法。做完的先放上来。",
      items: [
        { t: "静室 · DJ 馆", d: "一次点击、四个动作、不许说话的多人共处空间；three.js + WebSocket，20 人同房。", tag: "游戏", views: 2340, u: "https://quiet-dj-room.app.workbuddy.host/?sharecode=XL4KMY6ASH" },
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
        { t: "信息传播那些事儿", d: "12 卷 211 篇写作计划，已成稿 36 篇；从十万年前讲到算法与 AI。", tag: "连载中", views: 3280, u: "book/" },
        { t: "卷一 · 信息的黎明", d: "史前—文字：靠嘴、靠火、靠腿传信息的年代，18 篇已完稿。", tag: "已完结", views: 1420, u: "book/index.html#vol1" },
        { t: "卷二 · 竹简与封泥", d: "文字—印刷术：信息第一次可复制可留存，18 篇已完稿。", tag: "已完结", views: 1180, u: "book/index.html#vol2" },
        { t: "卷三 — 卷十二", d: "印刷术、报纸、电波、广告、互联网、算法到 AI，写作中。", tag: "待写", views: 260 }
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

  document.title = `${s.zh} · ${SITE.name}`;
  $('#h1Text').textContent = s.zh;
  $('#brand').textContent = `${SITE.name} / ${s.en}`;
  $('#intro').textContent = s.intro;
  $('#intro').style.setProperty('--c', tone.c);

  const sorted = s.items.slice().sort((a, b) => (b.views || 0) - (a.views || 0));
  const top = Math.min(SITE.topN, sorted.length);
  $('#meta').textContent = `共 ${pad(sorted.length)} 条 · 按访问量排序 · 默认显示前 ${top}`;
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

/* ---------- 启动 ---------- */
initCommon();
const page = document.body.dataset.page;
if (page === 'home') renderHome();
else renderDetail(page);
