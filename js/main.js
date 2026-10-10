// Fastsatta.live Main UI Script with Dynamic IST Search Engine Optimization

// 🚀 Instant First-Paint Executor: Renders UI at millisecond 0 from memory!
function initInstantPageRender() {
  const path = window.location.pathname.toLowerCase();

  if (path.includes('today.html')) {
    renderTodayPage();
  } else if (path.includes('record-chart.html')) {
    renderRecordChartPage();
  } else if (path.includes('results.html')) {
    renderResultsPage();
  } else if (path.includes('history.html')) {
    renderHistoryPage();
  } else if (path.includes('result-detail.html')) {
    renderMarketDetailPage();
  } else {
    renderHomePage();
  }
}

// Fire INSTANTLY on script load (0ms delay!)
if (typeof window !== 'undefined') {
  initInstantPageRender();
}

document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  startLiveTimestampClock();
  updateDynamicSEOMetadata();
  initInstantPageRender(); // Double-check on DOM ready

  // Auto-refresh dynamic sorting every 10 seconds in background
  setInterval(() => {
    const curPath = window.location.pathname.toLowerCase();
    if (curPath.endsWith('index.html') || curPath === '/' || curPath.endsWith('') || curPath.endsWith('/')) {
      renderHomePage();
    } else if (curPath.includes('today.html')) {
      renderTodayPage();
    }
  }, 10000);
});

// ⚡ Multi-Tab Instant LocalStorage Sync
window.addEventListener('storage', (e) => {
  if (e.key === 'fastsatta_results' || e.key === 'fastsatta_markets' || e.key === 'fastsatta_settings') {
    initInstantPageRender();
  }
});

// Helper to format date string "YYYY-MM-DD" -> "DD-MM-YY" (e.g., "2026-10-09" -> "09-10-26")
function formatDisplayDate(dateStr) {
  if (!dateStr || dateStr.length < 10) return dateStr;
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const yearShort = parts[0].slice(2);
    const month = parts[1];
    const day = parts[2];
    return `${day}-${month}-${yearShort}`;
  }
  return dateStr;
}

function syncSocialSettings() {
  if (!window.dataEngine) return;
  const settings = window.dataEngine.getSettings();

  const waBtns = document.querySelectorAll('.btn-wa-action, a[href*="whatsapp.com"]');
  const tgBtns = document.querySelectorAll('.btn-tg-action, a[href*="t.me"]');

  waBtns.forEach(btn => {
    if (settings.waLink && settings.waLink.trim() !== '') btn.href = settings.waLink;
    if (settings.waEnabled === false) {
      btn.style.display = 'none';
    } else {
      btn.style.display = '';
    }
  });

  tgBtns.forEach(btn => {
    if (settings.tgLink && settings.tgLink.trim() !== '') btn.href = settings.tgLink;
    if (settings.tgEnabled === false) {
      btn.style.display = 'none';
    } else {
      btn.style.display = '';
    }
  });
}

function getFormattedISTDateFull() {
  const d = getISTDateObj();
  const day = d.getDate();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  let suffix = 'th';
  if (day === 1 || day === 21 || day === 31) suffix = 'st';
  else if (day === 2 || day === 22) suffix = 'nd';
  else if (day === 3 || day === 23) suffix = 'rd';

  return `${day}${suffix} ${month} ${year}`;
}

function getFormattedISTDateShort(dateObj) {
  const d = dateObj || getISTDateObj();
  const day = String(d.getDate()).padStart(2, '0');
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const month = months[d.getMonth()];
  return `${day} ${month}`;
}

// 🎯 Dynamic Asia/Kolkata IST SEO Title & Meta Description Auto-Updater
function updateDynamicSEOMetadata() {
  const istFullDate = getFormattedISTDateFull(); // e.g. "10th October 2026"
  const path = window.location.pathname.toLowerCase();

  // Exact Google Search Preview Target:
  // Title: Satta King Live Result Today – [Current Date] | FastSatta
  // Description: Check Satta King Live Results for [Current Date]. Get today's latest market results, daily updates and historical charts for Disawar, Haryana King, Delhi Bazar, Ram Bazar and more on FastSatta.live.
  let pageTitle = `Satta King Live Result Today – ${istFullDate} | FastSatta`;
  let metaDescription = `Check Satta King Live Results for ${istFullDate}. Get today's latest market results, daily updates and historical charts for Disawar, Haryana King, Delhi Bazar, Ram Bazar and more on FastSatta.live.`;

  if (path.includes('today.html')) {
    pageTitle = `Today Satta King Live Result – ${istFullDate} | FastSatta`;
    metaDescription = `Check Satta King Live Results for ${istFullDate}. Get today's latest market results, daily updates and historical charts for Disawar, Haryana King, Delhi Bazar, Ram Bazar and more on FastSatta.live.`;
  } else if (path.includes('results.html') || path.includes('history.html')) {
    pageTitle = `All Satta King Results Archive – ${getISTDateObj().getFullYear()} | FastSatta`;
    metaDescription = `Search complete archive of Satta King live results. Check historical record charts for Disawar, Faridabad, Gaziyabad, Gali, Shree Ganesh on FastSatta.live.`;
  } else if (path.includes('record-chart.html')) {
    pageTitle = `Satta King Record Chart ${getISTDateObj().getFullYear()} — Monthly & Yearly | FastSatta`;
    metaDescription = `View complete monthly and yearly Satta King record chart matrix for Disawar, Faridabad, Gaziyabad, Gali, Shree Ganesh, Delhi Bazar on FastSatta.live.`;
  }

  // Synchronize <title>
  document.title = pageTitle;

  // Synchronize <meta name="description">
  const metaDescTag = document.querySelector('meta[name="description"]');
  if (metaDescTag) metaDescTag.setAttribute('content', metaDescription);

  // Synchronize OpenGraph title & description
  const ogTitleTag = document.querySelector('meta[property="og:title"]');
  if (ogTitleTag) ogTitleTag.setAttribute('content', pageTitle);

  const ogDescTag = document.querySelector('meta[property="og:description"]');
  if (ogDescTag) ogDescTag.setAttribute('content', metaDescription);
}

function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }
}

// ⏰ Real-Time IST Ticking Clock
function startLiveTimestampClock() {
  const timeElements = document.querySelectorAll('.live-updated-timestamp, #live-updated-timestamp');
  if (timeElements.length === 0) return;

  function updateClock() {
    const d = getISTDateObj();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const month = months[d.getMonth()];
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();

    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');

    const formattedTime = `Updated: ${month} ${day}, ${year}, ${hours}:${minutes}:${seconds} IST`;

    timeElements.forEach(el => {
      el.innerText = formattedTime;
    });
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// Helper to format Mix Chart cell values
function formatMixChartCell(val, colorClass) {
  if (val === '---') {
    return `<span class="text-xs text-red-600 font-bold">---</span>`;
  }
  if (!val || val === 'XX') {
    return `<span class="text-slate-300 font-mono font-medium text-xs sm:text-sm">XX</span>`;
  }
  return `<span class="font-mono font-black ${colorClass} text-base sm:text-lg">${val}</span>`;
}

// Page 1: Homepage Renderer (0ms Instant Render)
function renderHomePage() {
  const cardsContainer = document.getElementById('today-cards-container');
  const summaryTableBody = document.getElementById('summary-table-body');
  const monthlyMatrixContainer = document.getElementById('monthly-matrix-body');
  const monthlyMatrixContainer2 = document.getElementById('monthly-matrix-body-2');

  if (!window.dataEngine) return;

  const todayDateObj = getISTDateObj();
  const todayDateStr = getISTDateString();
  const curYear = todayDateObj.getFullYear();
  const curMonth = todayDateObj.getMonth() + 1;

  const yDateObj = getISTDateObj();
  yDateObj.setDate(yDateObj.getDate() - 1);
  const yesterdayDateStr = `${yDateObj.getFullYear()}-${String(yDateObj.getMonth() + 1).padStart(2, '0')}-${String(yDateObj.getDate()).padStart(2, '0')}`;

  const todaySummary = window.dataEngine.getTodaySummaryDynamic(todayDateStr, yesterdayDateStr);

  const todayFormatted = getFormattedISTDateShort(todayDateObj);
  const yesterdayFormatted = getFormattedISTDateShort(yDateObj);

  // 0. Update Chart Banner Headings Dynamically
  const monthNamesUpper = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  const currentMonthYearStr = `${monthNamesUpper[todayDateObj.getMonth()]} ${todayDateObj.getFullYear()}`;

  const mixBanners = document.querySelectorAll('.mix-chart-header-banner');
  if (mixBanners.length >= 2) {
    mixBanners[0].innerText = `${currentMonthYearStr} SATTA KING MIX RECORD CHART (DISAWAR • HARYANA KING • RAM BAZAR • DELHI BAZAR • SHREE GANESH)`;
    mixBanners[1].innerText = `${currentMonthYearStr} SATTA KING MIX RECORD CHART (FARIDABAD • AMBALA KING • GAZIYABAD • HIMACHAL NIGHT • GALI)`;
  }

  // 1. Render Result Cards Dashboard
  if (cardsContainer) {
    cardsContainer.innerHTML = todaySummary.map(item => {
      const isPending = item.todayValue === 'XX' || item.status === 'PENDING';

      let badgeHTML = '';
      if (item.badge === 'NEXT ⏳' || item.isNextUpcoming) {
        badgeHTML = `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-orange-500 text-white animate-pulse whitespace-nowrap shrink-0 shadow-sm">NEXT ⏳</span>`;
      } else if (item.badge === 'NEW ⚡' || item.isFreshNew) {
        badgeHTML = `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-500 text-white animate-pulse whitespace-nowrap shrink-0 shadow-sm">NEW ⚡</span>`;
      }

      return `
        <div class="satta-card transition-all duration-300">
          <div class="satta-card-header flex justify-between items-center px-3 sm:px-4 py-2 gap-2">
            <div class="flex items-center space-x-1.5 sm:space-x-2 min-w-0 shrink">
              <span class="uppercase tracking-wide font-black text-xs sm:text-base whitespace-nowrap">${item.marketName}</span>
              ${badgeHTML}
            </div>
            <span class="text-[10px] sm:text-xs text-yellow-300 font-bold whitespace-nowrap shrink-0">( ${item.resultTime} )</span>
          </div>

          <div class="satta-card-body p-3.5 flex items-center justify-around w-full">
            <div class="text-center">
              <span class="text-[10px] sm:text-[11px] font-black uppercase text-slate-700 block">YESTERDAY <span class="text-slate-500 font-bold">(${yesterdayFormatted})</span></span>
              <span class="result-val-yesterday block mt-0.5">${item.yesterdayValue}</span>
            </div>

            <div class="text-center border-l-2 border-slate-300 pl-4 sm:pl-6">
              <span class="text-[10px] sm:text-[11px] font-black uppercase text-emerald-800 block">TODAY <span class="text-emerald-700 font-extrabold">(${todayFormatted})</span></span>
              <span class="${isPending ? 'text-slate-400 font-mono text-3xl font-black block mt-0.5' : 'result-val-today block mt-0.5'}">${item.todayValue}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 2. Render Summary Table
  if (summaryTableBody) {
    summaryTableBody.innerHTML = todaySummary.map(item => {
      const isPending = item.todayValue === 'XX' || item.status === 'PENDING';

      return `
        <tr class="transition-all duration-300">
          <td class="text-left font-black text-red-800 text-[10px] sm:text-base uppercase whitespace-nowrap overflow-hidden px-1 sm:px-4 py-2.5 sm:py-3">
            <a href="result-detail.html?slug=${item.slug}" class="hover:underline truncate block">${item.marketName}</a>
          </td>
          <td class="text-center font-mono font-bold text-xs sm:text-xl text-slate-900 px-0.5 sm:px-3 py-2.5 sm:py-3 whitespace-nowrap">
            ${item.yesterdayValue}
          </td>
          <td class="text-center font-mono font-black text-xs sm:text-2xl px-0.5 sm:px-3 py-2.5 sm:py-3 whitespace-nowrap">
            <div class="${isPending ? 'text-slate-400 font-bold' : 'text-emerald-700 font-black'}">${item.todayValue}</div>
          </td>
          <td class="text-center text-slate-800 text-xs font-black hidden sm:table-cell px-2 sm:px-4 py-3 whitespace-nowrap">${item.resultTime}</td>
          <td class="text-right hidden sm:table-cell px-2 sm:px-4 py-3 whitespace-nowrap">
            <a href="record-chart.html?slug=${item.slug}" class="chart-button-yellow text-xs inline-block px-3 py-1">
              CHART
            </a>
          </td>
        </tr>
      `;
    }).join('');
  }

  // 3. Render Monthly Matrix Chart 1
  if (monthlyMatrixContainer) {
    const matrix1 = window.dataEngine.getMonthlyMatrix(curYear, curMonth, ['disawar', 'haryana-king', 'ram-bazar', 'delhi-bazar', 'shree-ganesh']);
    monthlyMatrixContainer.innerHTML = matrix1.rows.map(r => `
      <tr>
        <td class="font-black text-xs text-red-800 bg-amber-100 text-center">${r.day < 10 ? '0' + r.day : r.day}</td>
        <td class="text-center">${formatMixChartCell(r.values['disawar'], 'text-slate-900')}</td>
        <td class="text-center">${formatMixChartCell(r.values['haryana-king'], 'text-orange-700')}</td>
        <td class="text-center">${formatMixChartCell(r.values['ram-bazar'], 'text-emerald-800')}</td>
        <td class="text-center">${formatMixChartCell(r.values['delhi-bazar'], 'text-red-700')}</td>
        <td class="text-center">${formatMixChartCell(r.values['shree-ganesh'], 'text-purple-800')}</td>
      </tr>
    `).join('');
  }

  // 4. Render Monthly Matrix Chart 2
  if (monthlyMatrixContainer2) {
    const matrix2 = window.dataEngine.getMonthlyMatrix(curYear, curMonth, ['faridabad', 'ambala-king', 'gaziyabad', 'himachal-night', 'gali']);
    monthlyMatrixContainer2.innerHTML = matrix2.rows.map(r => `
      <tr>
        <td class="font-black text-xs text-red-800 bg-amber-100 text-center">${r.day < 10 ? '0' + r.day : r.day}</td>
        <td class="text-center">${formatMixChartCell(r.values['faridabad'], 'text-purple-800')}</td>
        <td class="text-center">${formatMixChartCell(r.values['ambala-king'], 'text-amber-800')}</td>
        <td class="text-center">${formatMixChartCell(r.values['gaziyabad'], 'text-blue-800')}</td>
        <td class="text-center">${formatMixChartCell(r.values['himachal-night'], 'text-red-800')}</td>
        <td class="text-center">${formatMixChartCell(r.values['gali'], 'text-emerald-700')}</td>
      </tr>
    `).join('');
  }

  syncSocialSettings();
}

// Page 2: Today Results Page
function renderTodayPage() {
  renderHomePage();
}

// Page 3: Record Chart Page (0ms Instant First-Paint Render)
function renderRecordChartPage() {
  const params = new URLSearchParams(window.location.search);
  let slug = params.get('slug') || 'disawar';
  const month = parseInt(params.get('month') || String(getISTDateObj().getMonth() + 1));
  const year = parseInt(params.get('year') || String(getISTDateObj().getFullYear()));

  const select = document.getElementById('chart-market-select');
  const tableBody = document.getElementById('chart-table-body');
  const title = document.getElementById('chart-title');

  function updateChartView(selectedSlug) {
    slug = selectedSlug;

    if (title) {
      let activeName = slug.replace('-', ' ').toUpperCase();
      if (window.dataEngine) {
        const active = window.dataEngine.getMarkets().find(m => m.slug.toLowerCase() === slug.toLowerCase());
        if (active) activeName = active.name;
      }
      title.innerText = `${activeName} RECORD CHART ${year}`;
    }

    if (tableBody && window.dataEngine) {
      const results = window.dataEngine.getResults()
        .filter(r => (r.slug && r.slug.toLowerCase() === slug.toLowerCase()) || (r.marketName && r.marketName.toLowerCase().includes(slug.replace('-', ' ').toLowerCase())))
        .sort((a, b) => b.resultDate.localeCompare(a.resultDate));

      if (results.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4" class="text-center font-bold text-slate-500 py-6">No record chart data available for this market.</td></tr>`;
      } else {
        tableBody.innerHTML = results.map(r => `
          <tr>
            <td class="font-bold text-[11px] sm:text-xs text-red-800 text-left px-2 py-2 whitespace-nowrap">${formatDisplayDate(r.resultDate)}</td>
            <td class="text-[11px] sm:text-xs text-slate-800 text-center px-1 py-2 whitespace-nowrap">${r.day < 10 ? '0' + r.day : r.day}</td>
            <td class="text-center font-mono font-black text-xl sm:text-2xl ${r.resultValue === 'XX' ? 'text-slate-300 font-medium' : 'text-emerald-700'} px-1 py-2 whitespace-nowrap">${r.resultValue}</td>
            <td class="text-right text-[10px] sm:text-xs px-2 py-2 whitespace-nowrap"><span class="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 font-bold">${r.status || 'UPDATED'}</span></td>
          </tr>
        `).join('');
      }
    }
  }

  if (select && window.dataEngine) {
    const markets = window.dataEngine.getMarkets();
    select.innerHTML = markets.map(m => `
      <option value="${m.slug}" ${m.slug.toLowerCase() === slug.toLowerCase() ? 'selected' : ''}>${m.name} (${m.resultTime})</option>
    `).join('');

    select.onchange = (e) => {
      updateChartView(e.target.value);
      try {
        history.pushState(null, '', `record-chart.html?slug=${e.target.value}&month=${month}&year=${year}`);
      } catch(e) {}
    };
  }

  updateChartView(slug);
  syncSocialSettings();
}

// Page 4: All Results Search Page (0ms Instant First-Paint Render)
function renderResultsPage() {
  const container = document.getElementById('results-list-table-body');
  const input = document.getElementById('results-search-input');

  const render = (query = '') => {
    let results = window.dataEngine.getResults()
      .filter(r => r.resultValue && r.resultValue !== 'XX')
      .sort((a, b) => b.resultDate.localeCompare(a.resultDate));

    if (query) {
      const qLower = query.toLowerCase().trim();
      results = results.filter(r => {
        const mName = (r.marketName || '').toLowerCase();
        const slug = (r.slug || '').toLowerCase();
        const val = (r.resultValue || '').toLowerCase();
        const dateIso = (r.resultDate || '').toLowerCase();
        const dateFmt = formatDisplayDate(r.resultDate || '').toLowerCase();

        return mName.includes(qLower) ||
               slug.includes(qLower) ||
               val.includes(qLower) ||
               dateIso.includes(qLower) ||
               dateFmt.includes(qLower);
      });
    }

    if (container) {
      if (results.length === 0) {
        container.innerHTML = `<tr><td colspan="6" class="text-center font-bold text-slate-500 py-6">No matching result records found.</td></tr>`;
      } else {
        container.innerHTML = results.slice(0, 100).map(r => `
          <tr>
            <td class="text-left font-black text-red-800 uppercase text-xs sm:text-base px-2 py-2.5">
              <a href="result-detail.html?slug=${r.slug}">${r.marketName}</a>
            </td>
            <td class="text-center font-mono font-black text-lg sm:text-2xl text-emerald-700 px-1 py-2.5">${r.resultValue}</td>
            <td class="text-center text-slate-800 text-[11px] sm:text-xs font-bold px-1 py-2.5">${formatDisplayDate(r.resultDate)}</td>
            <td class="text-center text-slate-800 text-xs font-bold hidden sm:table-cell px-2 py-2.5">${r.resultTime}</td>
            <td class="text-center hidden sm:table-cell px-1 py-2.5"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-800">${r.status || 'UPDATED'}</span></td>
            <td class="text-right px-2 py-2.5"><a href="record-chart.html?slug=${r.slug}" class="chart-button-yellow text-[10px] sm:text-xs inline-block px-2 py-1">Chart &rarr;</a></td>
          </tr>
        `).join('');
      }
    }
  };

  if (input) {
    input.oninput = (e) => render(e.target.value);
    input.onkeyup = (e) => render(e.target.value);
  }
  render();
  syncSocialSettings();
}

// Page 5: History Page
function renderHistoryPage() {
  renderResultsPage();
}

// Page 6: Market Specific Detail Page (0ms Instant First-Paint Render)
function renderMarketDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug') || 'disawar';

  const title = document.getElementById('detail-market-title');
  const time = document.getElementById('detail-market-time');
  const val = document.getElementById('detail-market-value');

  let market = null;
  if (window.dataEngine) {
    market = window.dataEngine.getMarkets().find(m => m.slug.toLowerCase() === slug.toLowerCase());
  }

  const marketName = market ? market.name : slug.replace('-', ' ').toUpperCase();
  const marketTime = market ? market.resultTime : '12:00 PM';

  if (title) title.innerText = marketName;
  if (time) time.innerText = `Daily Result Time: ${marketTime}`;

  if (window.dataEngine) {
    const todayRes = window.dataEngine.getResults().find(r => r.slug.toLowerCase() === slug.toLowerCase() && r.resultDate === getISTDateString());
    if (val) val.innerText = todayRes ? todayRes.resultValue : 'XX';

    const historyTable = document.getElementById('detail-history-table');
    if (historyTable) {
      const history = window.dataEngine.getResults()
        .filter(r => r.slug.toLowerCase() === slug.toLowerCase() && r.resultValue && r.resultValue !== 'XX')
        .sort((a, b) => b.resultDate.localeCompare(a.resultDate));

      if (history.length === 0) {
        historyTable.innerHTML = `<tr><td colspan="6" class="text-center font-bold text-slate-500 py-6">No historical records found for this market.</td></tr>`;
      } else {
        historyTable.innerHTML = history.map(r => `
          <tr>
            <td class="text-left font-black text-red-800 uppercase text-xs sm:text-base px-2 py-2.5">${r.marketName}</td>
            <td class="text-center font-mono font-black text-lg sm:text-2xl text-emerald-700 px-1 py-2.5">${r.resultValue}</td>
            <td class="text-center text-slate-800 text-[11px] sm:text-xs font-bold px-1 py-2.5">${formatDisplayDate(r.resultDate)}</td>
            <td class="text-center text-slate-800 text-xs font-bold hidden sm:table-cell px-2 py-2.5">${r.resultTime}</td>
            <td class="text-center hidden sm:table-cell px-1 py-2.5"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-800">${r.status || 'UPDATED'}</span></td>
            <td class="text-right px-2 py-2.5"><a href="record-chart.html?slug=${r.slug}" class="chart-button-yellow text-[10px] sm:text-xs inline-block px-2 py-1">Chart &rarr;</a></td>
          </tr>
        `).join('');
      }
    }
  }

  syncSocialSettings();
}

function renderAdminPage() {
  // Managed in admin.html
}
