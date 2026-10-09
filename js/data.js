// Fastsatta.live - Market & Chart Data Engine with Fail-Safe Auto-Recovery Guarantee

const DEFAULT_MARKETS = [
  { id: 'm1', name: 'DISAWAR', slug: 'disawar', resultTime: '05:00 AM', openTime: '03:00 AM', closeTime: '04:30 AM', category: 'DESAWAR', timeMinutes: 300, order: 1 },
  { id: 'm2', name: 'HARYANA KING', slug: 'haryana-king', resultTime: '01:30 PM', openTime: '11:30 AM', closeTime: '01:00 PM', category: 'MAIN', timeMinutes: 810, order: 2 },
  { id: 'm3', name: 'RAM BAZAR', slug: 'ram-bazar', resultTime: '02:30 PM', openTime: '12:30 PM', closeTime: '02:00 PM', category: 'MAIN', timeMinutes: 870, order: 3 },
  { id: 'm4', name: 'DELHI BAZAR', slug: 'delhi-bazar', resultTime: '03:10 PM', openTime: '01:00 PM', closeTime: '02:45 PM', category: 'DELHI', timeMinutes: 910, order: 4 },
  { id: 'm5', name: 'SHREE GANESH', slug: 'shree-ganesh', resultTime: '04:40 PM', openTime: '02:30 PM', closeTime: '04:15 PM', category: 'DELHI', timeMinutes: 1000, order: 5 },
  { id: 'm6', name: 'FARIDABAD', slug: 'faridabad', resultTime: '06:10 PM', openTime: '04:00 PM', closeTime: '05:45 PM', category: 'MAIN', timeMinutes: 1090, order: 6 },
  { id: 'm7', name: 'AMBALA KING', slug: 'ambala-king', resultTime: '07:30 PM', openTime: '05:30 PM', closeTime: '07:00 PM', category: 'MAIN', timeMinutes: 1170, order: 7 },
  { id: 'm8', name: 'GAZIYABAD', slug: 'gaziyabad', resultTime: '10:00 PM', openTime: '08:00 PM', closeTime: '09:30 PM', category: 'MAIN', timeMinutes: 1320, order: 8 },
  { id: 'm9', name: 'HIMACHAL NIGHT', slug: 'himachal-night', resultTime: '10:40 PM', openTime: '08:30 PM', closeTime: '10:15 PM', category: 'MAIN', timeMinutes: 1360, order: 9 },
  { id: 'm10', name: 'GALI', slug: 'gali', resultTime: '12:00 AM', openTime: '10:00 PM', closeTime: '11:30 PM', category: 'DESAWAR', timeMinutes: 1440, order: 10 },
];

const DEFAULT_SETTINGS = {
  waLink: "https://api.whatsapp.com/send?phone=918628963178&text=%E0%A4%AE%E0%A5%81%E0%A4%9B%E0%A5%87%20Fastsatta.live%20%E0%A4%AA%E0%A4%B0%20%E0%A4%97%E0%A5%87%E0%A4%AE%20%2F%20%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%95%E0%A4%BF%E0%A4%9F%20%E0%A4%B6%E0%A5%8B%20%E0%A4%95%E0%A4%B0%E0%A4%B5%E0%A4%BE%E0%A4%A8%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%82",
  tgLink: "https://t.me/",
  waEnabled: true,
  tgEnabled: true
};

const BACKUP_DATABASE = {
  "2026": {
    "10": {
      "01": { "AK": "63", "DB": "76", "DS": "70", "FB": "42", "GL": "93", "GZ": "67", "HK": "85", "HN": "00", "RB": "17", "SG": "51" },
      "02": { "AK": "10", "DB": "25", "DS": "52", "FB": "05", "GL": "01", "GZ": "81", "HK": "10", "HN": "09", "RB": "75", "SG": "31" },
      "03": { "AK": "88", "DB": "25", "DS": "18", "FB": "58", "GL": "68", "GZ": "95", "HK": "80", "HN": "55", "RB": "56", "SG": "54" },
      "04": { "AK": "77", "DB": "91", "DS": "15", "FB": "36", "GL": "80", "GZ": "98", "HK": "67", "HN": "35", "RB": "88", "SG": "46" },
      "05": { "AK": "44", "DB": "86", "DS": "70", "FB": "26", "GL": "24", "GZ": "78", "HK": "58", "HN": "36", "RB": "21", "SG": "18" },
      "06": { "AK": "98", "DB": "29", "DS": "59", "FB": "01", "GL": "53", "GZ": "38", "HK": "94", "HN": "44", "RB": "59", "SG": "27" },
      "07": { "AK": "96", "DB": "06", "DS": "23", "FB": "87", "GL": "29", "GZ": "84", "HK": "43", "HN": "21", "RB": "55", "SG": "89" },
      "08": { "AK": "12", "DB": "07", "DS": "90", "FB": "92", "GL": "62", "GZ": "74", "HK": "00", "HN": "27", "RB": "13", "SG": "02" },
      // Today October 09 Declared: Disawar (DS: 26), Haryana King (HK: 96), Ram Bazar (RB: 54), Delhi Bazar (DB: 87), Shree Ganesh (SG: 01)
      "09": { "DS": "26", "HK": "96", "RB": "54", "DB": "87", "SG": "01", "AK": "XX", "FB": "XX", "GL": "XX", "GZ": "XX", "HN": "XX" }
    },
    "09": {
      "01": { "AK": "15", "DB": "58", "DS": "43", "FB": "45", "GL": "81", "GZ": "86", "HK": "88", "HN": "76", "RB": "98", "SG": "89" },
      "02": { "AK": "94", "DB": "52", "DS": "69", "FB": "19", "GL": "96", "GZ": "85", "HK": "01", "HN": "11", "RB": "75", "SG": "54" },
      "03": { "AK": "88", "DB": "88", "DS": "57", "FB": "08", "GL": "77", "GZ": "32", "HK": "80", "HN": "55", "RB": "56", "SG": "20" },
      "04": { "AK": "77", "DB": "18", "DS": "95", "FB": "02", "GL": "26", "GZ": "95", "HK": "67", "HN": "35", "RB": "88", "SG": "01" },
      "05": { "AK": "44", "DB": "44", "DS": "59", "FB": "30", "GL": "37", "GZ": "68", "HK": "58", "HN": "36", "RB": "21", "SG": "02" },
      "06": { "AK": "98", "DB": "71", "DS": "78", "FB": "88", "GL": "94", "GZ": "69", "HK": "94", "HN": "44", "RB": "59", "SG": "25" },
      "07": { "AK": "96", "DB": "61", "DS": "67", "FB": "02", "GL": "10", "GZ": "02", "HK": "43", "HN": "21", "RB": "55", "SG": "17" },
      "08": { "AK": "12", "DB": "84", "DS": "92", "FB": "71", "GL": "64", "GZ": "93", "HK": "00", "HN": "27", "RB": "13", "SG": "83" },
      "09": { "AK": "12", "DB": "18", "DS": "54", "FB": "29", "GL": "69", "GZ": "93", "HK": "96", "HN": "27", "RB": "13", "SG": "15" },
      "10": { "AK": "12", "DB": "52", "DS": "93", "FB": "15", "GL": "40", "GZ": "72", "HK": "96", "HN": "27", "RB": "13", "SG": "12" },
      "11": { "AK": "12", "DB": "59", "DS": "40", "FB": "72", "GL": "34", "GZ": "98", "HK": "96", "HN": "27", "RB": "13", "SG": "32" },
      "12": { "AK": "12", "DB": "81", "DS": "46", "FB": "65", "GL": "35", "GZ": "16", "HK": "96", "HN": "27", "RB": "13", "SG": "42" },
      "13": { "AK": "12", "DB": "55", "DS": "02", "FB": "74", "GL": "72", "GZ": "47", "HK": "96", "HN": "27", "RB": "13", "SG": "48" },
      "14": { "AK": "12", "DB": "86", "DS": "35", "FB": "30", "GL": "87", "GZ": "50", "HK": "96", "HN": "27", "RB": "13", "SG": "34" },
      "15": { "AK": "12", "DB": "46", "DS": "89", "FB": "24", "GL": "83", "GZ": "19", "HK": "96", "HN": "27", "RB": "13", "SG": "28" },
      "16": { "AK": "12", "DB": "68", "DS": "31", "FB": "21", "GL": "91", "GZ": "42", "HK": "96", "HN": "27", "RB": "13", "SG": "94" },
      "17": { "AK": "12", "DB": "99", "DS": "90", "FB": "38", "GL": "73", "GZ": "34", "HK": "96", "HN": "27", "RB": "13", "SG": "50" },
      "18": { "AK": "12", "DB": "84", "DS": "49", "FB": "36", "GL": "50", "GZ": "03", "HK": "96", "HN": "27", "RB": "13", "SG": "38" },
      "19": { "AK": "12", "DB": "24", "DS": "35", "FB": "21", "GL": "07", "GZ": "86", "HK": "96", "HN": "27", "RB": "13", "SG": "20" },
      "20": { "AK": "12", "DB": "47", "DS": "32", "FB": "84", "GL": "66", "GZ": "24", "HK": "96", "HN": "27", "RB": "13", "SG": "80" },
      "21": { "AK": "94", "DB": "62", "DS": "01", "FB": "71", "GL": "32", "GZ": "70", "HK": "27", "HN": "08", "RB": "87", "SG": "08" },
      "22": { "AK": "94", "DB": "03", "DS": "73", "FB": "42", "GL": "00", "GZ": "50", "HK": "01", "HN": "11", "RB": "98", "SG": "98" },
      "23": { "AK": "69", "DB": "92", "DS": "35", "FB": "00", "GL": "02", "GZ": "42", "HK": "10", "HN": "15", "RB": "29", "SG": "10" },
      "24": { "AK": "16", "DB": "27", "DS": "26", "FB": "38", "GL": "90", "GZ": "32", "HK": "71", "HN": "77", "RB": "56", "SG": "48" },
      "25": { "AK": "63", "DB": "44", "DS": "86", "FB": "08", "GL": "37", "GZ": "63", "HK": "20", "HN": "91", "RB": "78", "SG": "68" },
      "26": { "AK": "43", "DB": "55", "DS": "48", "FB": "09", "GL": "66", "GZ": "18", "HK": "67", "HN": "19", "RB": "66", "SG": "43" },
      "27": { "AK": "82", "DB": "35", "DS": "81", "FB": "61", "GL": "64", "GZ": "66", "HK": "64", "HN": "27", "RB": "16", "SG": "07" },
      "28": { "AK": "77", "DB": "66", "DS": "49", "FB": "58", "GL": "03", "GZ": "03", "HK": "59", "HN": "40", "RB": "00", "SG": "90" },
      "29": { "AK": "15", "DB": "51", "DS": "43", "FB": "90", "GL": "66", "GZ": "20", "HK": "88", "HN": "76", "RB": "98", "SG": "61" },
      "30": { "AK": "XX", "DB": "XX", "DS": "25", "FB": "XX", "GL": "XX", "GZ": "XX", "HK": "XX", "HN": "XX", "RB": "XX", "SG": "XX" }
    }
  }
};

function getISTDateObj() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istOffset = 5.5 * 60 * 60000;
  return new Date(utc + istOffset);
}

function getISTDateString() {
  const d = getISTDateObj();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function generateFullDemoResults() {
  const results = [];

  const marketCodeMap = {
    'DS': 'disawar',
    'HK': 'haryana-king',
    'RB': 'ram-bazar',
    'DB': 'delhi-bazar',
    'SG': 'shree-ganesh',
    'FB': 'faridabad',
    'AK': 'ambala-king',
    'GZ': 'gaziyabad',
    'HN': 'himachal-night',
    'GL': 'gali'
  };

  const year2026 = BACKUP_DATABASE["2026"];
  for (const monthKey in year2026) {
    const monthNum = parseInt(monthKey);
    const monthData = year2026[monthKey];

    for (const dayKey in monthData) {
      const dayNum = parseInt(dayKey);
      const dayStr = String(dayNum).padStart(2, '0');
      const dateStr = `2026-${monthKey}-${dayStr}`;
      const dayMap = monthData[dayKey];

      DEFAULT_MARKETS.forEach(m => {
        let code = Object.keys(marketCodeMap).find(k => marketCodeMap[k] === m.slug);
        let val = (code && dayMap[code]) ? dayMap[code] : '';
        if (!val || val === '') val = 'XX';

        let updatedTimeStr = '2026-10-08T00:00:00.000+05:30';
        if (dateStr === '2026-10-09') {
          if (m.slug === 'disawar') {
            updatedTimeStr = '2026-10-09T05:05:00.000+05:30';
          } else if (m.slug === 'haryana-king') {
            updatedTimeStr = '2026-10-09T13:35:00.000+05:30';
          } else if (m.slug === 'ram-bazar') {
            updatedTimeStr = '2026-10-09T14:35:00.000+05:30';
          } else if (m.slug === 'delhi-bazar') {
            updatedTimeStr = '2026-10-09T15:15:00.000+05:30';
          } else if (m.slug === 'shree-ganesh') {
            updatedTimeStr = new Date().toISOString();
          }
        }

        results.push({
          id: `res-${m.id}-${dateStr}`,
          marketId: m.id,
          marketName: m.name,
          slug: m.slug,
          resultValue: val,
          yesterdayValue: 'XX',
          patti: `${120 + dayNum}-${val}-${340 + dayNum}`,
          resultDate: dateStr,
          resultTime: m.resultTime,
          status: val === 'XX' ? 'PENDING' : 'UPDATED',
          isSecret: false,
          showInstantly: val !== 'XX',
          year: 2026,
          month: monthNum,
          day: dayNum,
          updatedAt: updatedTimeStr
        });
      });
    }
  }

  return results;
}

class DataEngine {
  constructor() {
    this.init();
    this.initFirebaseSync();
  }

  init() {
    const CURRENT_DATA_VERSION = 'v2026_failsafe_recovery_v700';
    localStorage.setItem('fastsatta_markets', JSON.stringify(DEFAULT_MARKETS));

    const existingResults = this.getResults();
    if (localStorage.getItem('fastsatta_data_version') !== CURRENT_DATA_VERSION || existingResults.length < 50) {
      localStorage.removeItem('fastsatta_results');
      const freshData = generateFullDemoResults();
      localStorage.setItem('fastsatta_results', JSON.stringify(freshData));
      localStorage.setItem('fastsatta_data_version', CURRENT_DATA_VERSION);
    }

    if (!localStorage.getItem('fastsatta_settings')) {
      localStorage.setItem('fastsatta_settings', JSON.stringify(DEFAULT_SETTINGS));
    }
  }

  initFirebaseSync() {
    if (typeof firebase !== 'undefined' && firebase.database) {
      try {
        this.db = firebase.database();
      } catch(e) {
        console.warn("Firebase db init:", e);
      }

      if (this.db) {
        const CURRENT_DATA_VERSION = 'v2026_failsafe_recovery_v700';
        if (localStorage.getItem('fastsatta_cloud_synced_version') !== CURRENT_DATA_VERSION) {
          try {
            const freshData = generateFullDemoResults();
            const cloudObj = {};
            freshData.forEach(item => { cloudObj[item.id] = item; });
            this.db.ref('fastsatta/results').set(cloudObj);
            localStorage.setItem('fastsatta_cloud_synced_version', CURRENT_DATA_VERSION);
          } catch(e) {}
        }

        this.db.ref('fastsatta/results').on('value', (snapshot) => {
          const fbData = snapshot.val();
          if (fbData) {
            const resultsList = Object.values(fbData);
            const currentLocal = localStorage.getItem('fastsatta_results');
            const newString = JSON.stringify(resultsList);

            if (currentLocal !== newString) {
              localStorage.setItem('fastsatta_results', newString);
              this.refreshAllPageViews();
            }
          }
        }, (error) => {
          console.warn("⚠️ Firebase Results Sync Error:", error.message);
        });

        this.db.ref('fastsatta/markets').on('value', (snapshot) => {
          const fbMarkets = snapshot.val();
          if (fbMarkets) {
            const currentLocal = localStorage.getItem('fastsatta_markets');
            const newString = JSON.stringify(fbMarkets);
            if (currentLocal !== newString) {
              localStorage.setItem('fastsatta_markets', newString);
              this.refreshAllPageViews();
            }
          }
        });

        this.db.ref('fastsatta/settings').on('value', (snapshot) => {
          const fbSettings = snapshot.val();
          if (fbSettings) {
            const currentLocal = localStorage.getItem('fastsatta_settings');
            const newString = JSON.stringify(fbSettings);
            if (currentLocal !== newString) {
              localStorage.setItem('fastsatta_settings', newString);
              if (typeof syncSocialSettings === 'function') syncSocialSettings();
            }
          }
        });
      }
    }
  }

  refreshAllPageViews() {
    if (typeof renderHomePage === 'function') renderHomePage();
    if (typeof renderTodayPage === 'function') renderTodayPage();
    if (typeof renderRecordChartPage === 'function') renderRecordChartPage();
    if (typeof renderResultsPage === 'function') renderResultsPage();
    if (typeof renderMarketDetailPage === 'function') renderMarketDetailPage();
  }

  // 🛡️ Fail-Safe Guarantee: Never Returns Empty Array!
  getMarkets() {
    let data = [];
    try {
      data = JSON.parse(localStorage.getItem('fastsatta_markets') || '[]');
    } catch(e) {}

    if (!data || !Array.isArray(data) || data.length === 0) {
      data = DEFAULT_MARKETS;
      localStorage.setItem('fastsatta_markets', JSON.stringify(data));
    }
    return data;
  }

  saveMarkets(markets) {
    localStorage.setItem('fastsatta_markets', JSON.stringify(markets));
    if (this.db) {
      this.db.ref('fastsatta/markets').set(markets, (error) => {
        if (error) {
          console.error("❌ Firebase Markets Write Error:", error.message);
        }
      });
    }
    this.refreshAllPageViews();
  }

  getSettings() {
    return JSON.parse(localStorage.getItem('fastsatta_settings') || JSON.stringify(DEFAULT_SETTINGS));
  }

  saveSettings(settings) {
    localStorage.setItem('fastsatta_settings', JSON.stringify(settings));
    if (this.db) {
      this.db.ref('fastsatta/settings').set(settings, (error) => {
        if (error) {
          console.error("❌ Firebase Settings Write Error:", error.message);
        }
      });
    }
  }

  // 🛡️ Fail-Safe Guarantee: Never Returns Empty Array! Automatically Recovers Full Backup Dataset!
  getResults() {
    let data = [];
    try {
      data = JSON.parse(localStorage.getItem('fastsatta_results') || '[]');
    } catch(e) {}

    if (!data || !Array.isArray(data) || data.length === 0) {
      data = generateFullDemoResults();
      localStorage.setItem('fastsatta_results', JSON.stringify(data));
    }
    return data;
  }

  saveResults(results) {
    localStorage.setItem('fastsatta_results', JSON.stringify(results));
    this.refreshAllPageViews();
  }

  deleteResult(marketId, resultDate) {
    let results = this.getResults();
    results = results.filter(r => !(r.marketId === marketId && r.resultDate === resultDate));
    this.saveResults(results);

    if (this.db) {
      this.db.ref('fastsatta/results').orderByChild('marketId').equalTo(marketId).once('value', (snapshot) => {
        snapshot.forEach((child) => {
          if (child.val().resultDate === resultDate) {
            child.ref.remove();
          }
        });
      });
    }

    return true;
  }

  resetResultToWaiting(marketId, resultDate) {
    const results = this.getResults();
    const idx = results.findIndex(r => r.marketId === marketId && r.resultDate === resultDate);
    if (idx >= 0) {
      results[idx].resultValue = 'XX';
      results[idx].status = 'PENDING';
      results[idx].isSecret = true;
      results[idx].showInstantly = false;
      this.saveResults(results);

      if (this.db) {
        this.db.ref(`fastsatta/results/${results[idx].id}`).set(results[idx]);
      }
      return true;
    }
    return false;
  }

  // 🎯 Bulletproof 24-Hour Circular Draw-Time Sorting Algorithm
  getTodaySummaryDynamic(todayDate = null, yesterdayDate = null) {
    const istDateStr = getISTDateString();
    if (!todayDate) todayDate = istDateStr;

    if (!yesterdayDate) {
      const d = getISTDateObj();
      d.setDate(d.getDate() - 1);
      yesterdayDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    const markets = this.getMarkets();
    const allResults = this.getResults();

    const istNow = getISTDateObj();
    const nowMinutes = istNow.getHours() * 60 + istNow.getMinutes();

    const summaryList = markets.map(m => {
      // 100% Bulletproof Lookup: Match by marketId OR slug OR marketName!
      let t = allResults.find(r =>
        r.resultDate === todayDate && (
          r.marketId === m.id ||
          (r.slug && r.slug.toLowerCase() === m.slug.toLowerCase()) ||
          (r.marketName && r.marketName.toLowerCase() === m.name.toLowerCase())
        )
      );

      // Smart Fallback
      if (!t) {
        const mResults = allResults.filter(r =>
          r.marketId === m.id ||
          (r.slug && r.slug.toLowerCase() === m.slug.toLowerCase()) ||
          (r.marketName && r.marketName.toLowerCase() === m.name.toLowerCase())
        ).sort((a, b) => b.resultDate.localeCompare(a.resultDate));

        if (mResults.length > 0) {
          t = mResults[0];
        }
      }

      let y = allResults.find(r =>
        r.resultDate === yesterdayDate && (
          r.marketId === m.id ||
          (r.slug && r.slug.toLowerCase() === m.slug.toLowerCase()) ||
          (r.marketName && r.marketName.toLowerCase() === m.name.toLowerCase())
        )
      );

      if (!y && t) {
        const priorResults = allResults.filter(r =>
          (r.marketId === m.id || (r.slug && r.slug.toLowerCase() === m.slug.toLowerCase())) &&
          r.resultDate < t.resultDate
        );
        if (priorResults.length > 0) {
          y = priorResults[0];
        }
      }

      // STRICT CHECK: Is result declared TODAY?
      const isTodayDeclared = (t && t.resultValue && t.resultValue !== 'XX' && t.resultDate === todayDate);

      // Calculate time age in minutes since publication
      const updatedAtMs = (t && t.updatedAt) ? new Date(t.updatedAt).getTime() : 0;
      const ageMinutes = (updatedAtMs > 0) ? (istNow.getTime() - updatedAtMs) / (1000 * 60) : 999;

      let timeDiff = m.timeMinutes - nowMinutes;

      let badge = 'NONE';
      let priorityScore = 100;
      let isNextUpcoming = false;
      let isFreshNew = false;

      // 🥇 TIER 1: Draw time in next 30 minutes AND result pending -> "NEXT ⏳" (FLOATS TO TOP #1 RANK!)
      if (!isTodayDeclared && timeDiff >= -5 && timeDiff <= 30) {
        badge = 'NEXT ⏳';
        priorityScore = 10;
        isNextUpcoming = true;
      }
      // 🥈 TIER 2: Freshly Published Admin Upload (within last 60 minutes) -> "NEW ⚡" (FLOATS TO RANK #2!)
      else if (isTodayDeclared && ageMinutes <= 60) {
        badge = 'NEW ⚡';
        priorityScore = 20;
        isFreshNew = true;
      }
      // 🥉 TIER 3: General State for All 10 Markets -> Circular 24-Hour Draw Time Sorting!
      else {
        badge = 'NONE';
        priorityScore = 100;
      }

      // Calculate circular 24-hour remaining time offset (for passed draws today)
      let circularSortOffset = timeDiff;
      if (circularSortOffset < -30) {
        circularSortOffset += 1440; // Push draws that passed hours ago to tomorrow's queue!
      }

      return {
        marketId: m.id,
        marketName: m.name,
        slug: m.slug,
        resultTime: m.resultTime,
        timeMinutes: m.timeMinutes || 0,
        openTime: m.openTime,
        closeTime: m.closeTime,
        category: m.category,
        priorityScore: priorityScore,
        badge: badge,
        isNextUpcoming: isNextUpcoming,
        isFreshNew: isFreshNew,
        updatedAtMs: updatedAtMs,
        circularSortOffset: circularSortOffset,
        todayValue: isTodayDeclared ? t.resultValue : 'XX',
        yesterdayValue: (y && y.resultValue && y.resultValue !== '') ? y.resultValue : (t && t.yesterdayValue ? t.yesterdayValue : 'XX'),
        isSecret: false,
        showInstantly: t ? !!t.showInstantly : true,
        patti: t ? t.patti : null,
        todayDate: todayDate,
        yesterdayDate: yesterdayDate,
        status: isTodayDeclared ? 'UPDATED' : 'PENDING',
      };
    });

    // 🚀 Multi-Tier Circular Sorting Algorithm:
    // 1. Priority Tier Score (Next Upcoming = 10, Fresh New = 20, General = 100)
    // 2. For Fresh Results (priorityScore == 20): NEWEST ADMIN PUBLISH FLOATS TO VERY TOP!
    // 3. For General Markets: Order strictly by 24-hour circular upcoming draw time (circularSortOffset)!
    return summaryList.sort((a, b) => {
      if (a.priorityScore !== b.priorityScore) {
        return a.priorityScore - b.priorityScore;
      }

      // If both are FRESH NEW results (priorityScore == 20): Most recently updated/published floats to the TOP!
      if (a.priorityScore === 20 && b.priorityScore === 20) {
        return b.updatedAtMs - a.updatedAtMs;
      }

      return a.circularSortOffset - b.circularSortOffset;
    });
  }

  getMonthlyMatrix(year = 2026, month = 10, marketSlugs = ['disawar', 'faridabad', 'gaziyabad', 'gali']) {
    const allResults = this.getResults();
    const istDate = getISTDateObj();
    const curYear = istDate.getFullYear();
    const curMonth = istDate.getMonth() + 1;
    const curDay = istDate.getDate();

    const daysInMonth = new Date(year, month, 0).getDate();

    let maxDayToShow = daysInMonth;
    if (year === curYear && month === curMonth) {
      maxDayToShow = curDay;
    }

    const rows = [];
    for (let day = 1; day <= maxDayToShow; day++) {
      const isLastDayOfMonth = (day === daysInMonth);
      const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayData = { day, dateStr, values: {} };

      marketSlugs.forEach(slug => {
        if (isLastDayOfMonth && slug !== 'disawar') {
          dayData.values[slug] = '---';
          return;
        }

        const match = allResults.find(r => r.slug === slug && r.resultDate === dateStr);
        if (match && match.resultValue && match.resultValue !== '') {
          dayData.values[slug] = match.resultValue;
        } else {
          dayData.values[slug] = 'XX';
        }
      });

      rows.push(dayData);
    }

    return { year, month, daysInMonth, maxDayToShow, marketSlugs, rows };
  }

  addOrUpdateResult(data) {
    const results = this.getResults();
    const dateParts = data.resultDate.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

    const idx = results.findIndex(r => r.marketId === data.marketId && r.resultDate === data.resultDate);

    const record = {
      id: idx >= 0 ? results[idx].id : `res-${data.marketId}-${data.resultDate}`,
      marketId: data.marketId,
      marketName: data.marketName,
      slug: data.slug,
      resultValue: data.resultValue,
      yesterdayValue: data.yesterdayValue || 'XX',
      patti: data.patti || null,
      resultDate: data.resultDate,
      resultTime: data.resultTime,
      status: data.status || 'UPDATED',
      isSecret: !!data.isSecret,
      showInstantly: !!data.showInstantly,
      year,
      month,
      day,
      updatedAt: new Date().toISOString()
    };

    if (idx >= 0) {
      results[idx] = record;
    } else {
      results.unshift(record);
    }

    this.saveResults(results);

    // Sync to Firebase Database Cloud
    if (this.db) {
      this.db.ref(`fastsatta/results/${record.id}`).set(record, (error) => {
        if (error) {
          console.error("❌ Firebase Write Error:", error.message);
        } else {
          console.log("✅ Firebase Cloud Sync Successful!");
        }
      });
    }

    return record;
  }
}

window.dataEngine = new DataEngine();
