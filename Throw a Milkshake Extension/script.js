const SOLO_KEY = 'S' // shift s
const GROUP_KEY = 'G' // shift g
const REPORT_PATHNAME = '/i/safety/report_story'
const STORAGE_KEY = 'easyReporterType'

// is undefined or null
function isNil(o) {
  return o === undefined || o === null
}

function clickQuery(q) {
  const e = document.querySelector(q)
  if (isNil(e)) return
  e.dispatchEvent(new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window,
  }))
}

function exe(x) {
  for (let i = 0; i < x.length; i++) {
    clickQuery(x[i])
  }
}

function saveState(s) {
  try {
    sessionStorage.setItem(STORAGE_KEY, s)
  } catch (e) {}
}

function getState() {
  try {
    sessionStorage.getItem(STORAGE_KEY)
    sessionStorage.removeItem(STORAGE_KEY)
  } catch (e) {}
}

document.addEventListener('DOMContentLoaded', function(event) {
  if (location.pathname === REPORT_PATHNAME) {
    exe([
      '#abuse-btn',
      '#hateful-btn',
      getState() === GROUP_KEY
       ? '#group-victim-btn'
       : '#someone-else-btn',
      '#attach_tweets',
    ])
  }

  document.onkeypress = function easyReporter(e) {
    const isSolo = e.key === SOLO_KEY
    const isGroup = e.key === GROUP_KEY
    if (!isSolo && !isGroup) return
    const tweetBox = document.querySelector('article[data-focusvisible-polyfill=true]')
    if (typeof tweetBox !== 'object') return
    saveState(e.key)
    exe([
      'article[data-focusvisible-polyfill=true] [aria-label="More"]',
      'a[href*=report]',
    ])
  }
})
