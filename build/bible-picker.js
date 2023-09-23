'use strict';
(() => {
  var I = [
      { name: 'Genesis', chapters: 50, order: 1, testament: 'Old' },
      { name: 'Exodus', chapters: 40, order: 2, testament: 'Old' },
      { name: 'Leviticus', chapters: 27, order: 3, testament: 'Old' },
      { name: 'Numbers', chapters: 36, order: 4, testament: 'Old' },
      { name: 'Deuteronomy', chapters: 34, order: 5, testament: 'Old' },
      { name: 'Joshua', chapters: 24, order: 6, testament: 'Old' },
      { name: 'Judges', chapters: 21, order: 7, testament: 'Old' },
      { name: 'Ruth', chapters: 4, order: 8, testament: 'Old' },
      { name: '1 Samuel', chapters: 31, order: 9, testament: 'Old' },
      { name: '2 Samuel', chapters: 24, order: 10, testament: 'Old' },
      { name: '1 Kings', chapters: 22, order: 11, testament: 'Old' },
      { name: '2 Kings', chapters: 25, order: 12, testament: 'Old' },
      { name: '1 Chronicles', chapters: 29, order: 13, testament: 'Old' },
      { name: '2 Chronicles', chapters: 36, order: 14, testament: 'Old' },
      { name: 'Ezra', chapters: 10, order: 15, testament: 'Old' },
      { name: 'Nehemiah', chapters: 13, order: 16, testament: 'Old' },
      { name: 'Esther', chapters: 10, order: 17, testament: 'Old' },
      { name: 'Job', chapters: 42, order: 18, testament: 'Old' },
      { name: 'Psalms', chapters: 150, order: 19, testament: 'Old' },
      { name: 'Proverbs', chapters: 31, order: 20, testament: 'Old' },
      { name: 'Ecclesiastes', chapters: 12, order: 21, testament: 'Old' },
      { name: 'Song of Solomon', chapters: 8, order: 22, testament: 'Old' },
      { name: 'Isaiah', chapters: 66, order: 23, testament: 'Old' },
      { name: 'Jeremiah', chapters: 52, order: 24, testament: 'Old' },
      { name: 'Lamentations', chapters: 5, order: 25, testament: 'Old' },
      { name: 'Ezekiel', chapters: 48, order: 26, testament: 'Old' },
      { name: 'Daniel', chapters: 12, order: 27, testament: 'Old' },
      { name: 'Hosea', chapters: 14, order: 28, testament: 'Old' },
      { name: 'Joel', chapters: 3, order: 29, testament: 'Old' },
      { name: 'Amos', chapters: 9, order: 30, testament: 'Old' },
      { name: 'Obadiah', chapters: 1, order: 31, testament: 'Old' },
      { name: 'Jonah', chapters: 4, order: 32, testament: 'Old' },
      { name: 'Micah', chapters: 7, order: 33, testament: 'Old' },
      { name: 'Nahum', chapters: 3, order: 34, testament: 'Old' },
      { name: 'Habakkuk', chapters: 3, order: 35, testament: 'Old' },
      { name: 'Zephaniah', chapters: 3, order: 36, testament: 'Old' },
      { name: 'Haggai', chapters: 2, order: 37, testament: 'Old' },
      { name: 'Zechariah', chapters: 14, order: 38, testament: 'Old' },
      { name: 'Malachi', chapters: 4, order: 39, testament: 'Old' },
      { name: 'Matthew', chapters: 28, order: 40, testament: 'New' },
      { name: 'Mark', chapters: 16, order: 41, testament: 'New' },
      { name: 'Luke', chapters: 24, order: 42, testament: 'New' },
      { name: 'John', chapters: 21, order: 43, testament: 'New' },
      { name: 'Acts', chapters: 28, order: 44, testament: 'New' },
      { name: 'Romans', chapters: 16, order: 45, testament: 'New' },
      { name: '1 Corinthians', chapters: 16, order: 46, testament: 'New' },
      { name: '2 Corinthians', chapters: 13, order: 47, testament: 'New' },
      { name: 'Galatians', chapters: 6, order: 48, testament: 'New' },
      { name: 'Ephesians', chapters: 6, order: 49, testament: 'New' },
      { name: 'Philippians', chapters: 4, order: 50, testament: 'New' },
      { name: 'Colossians', chapters: 4, order: 51, testament: 'New' },
      { name: '1 Thessalonians', chapters: 5, order: 52, testament: 'New' },
      { name: '2 Thessalonians', chapters: 3, order: 53, testament: 'New' },
      { name: '1 Timothy', chapters: 6, order: 54, testament: 'New' },
      { name: '2 Timothy', chapters: 4, order: 55, testament: 'New' },
      { name: 'Titus', chapters: 3, order: 56, testament: 'New' },
      { name: 'Philemon', chapters: 1, order: 57, testament: 'New' },
      { name: 'Hebrews', chapters: 13, order: 58, testament: 'New' },
      { name: 'James', chapters: 5, order: 59, testament: 'New' },
      { name: '1 Peter', chapters: 5, order: 60, testament: 'New' },
      { name: '2 Peter', chapters: 3, order: 61, testament: 'New' },
      { name: '1 John', chapters: 5, order: 62, testament: 'New' },
      { name: '2 John', chapters: 1, order: 63, testament: 'New' },
      { name: '3 John', chapters: 1, order: 64, testament: 'New' },
      { name: 'Jude', chapters: 1, order: 65, testament: 'New' },
      { name: 'Revelation', chapters: 22, order: 66, testament: 'New' },
    ],
    b = I;
  var o = (r) => {
      let l = document.querySelector(r);
      if (!l || !(l instanceof HTMLElement))
        throw new Error(`Element ${r} is missing or not an HTMLElement`);
      return l;
    },
    y = (r) => r.cloneNode(!0),
    k = (r, l, i, c) => {
      r.addEventListener(l, function (p) {
        p.target.closest(i) && c(p);
      });
    };
  document.addEventListener('DOMContentLoaded', function () {
    let r = o('#bible-picker-modal'),
      l = o('[bible-picker="select-book"]'),
      i = o('[bible-picker="select-chapter"]'),
      c = o('[bible-picker="chapter-section"]'),
      p = o('[bible-picker="old-section"]'),
      w = o('[bible-picker="new-section"]'),
      O = o('[bible-picker="passage-template"]'),
      C = o('[bible-picker="chapter-template"]'),
      x = o('.icon-back'),
      L = o('.icon-exit'),
      v = o('.bible-picker-select-all'),
      u = o('[bible-picker="clear-button"]'),
      N = document.getElementsByClassName('bible-picker-input'),
      t = { selectedPassage: '', selectedChapter: '', triggerElementId: '' };
    (l.style.display = 'block'),
      (i.style.display = 'none'),
      (r.style.display = 'none'),
      b.forEach((e) => {
        let s = y(O);
        (s.innerText = e.name), (e.testament === 'Old' ? p : w).appendChild(s);
      }),
      k(l, 'click', '[bible-picker="passage-template"]', (e) => {
        let a = e.target.innerText;
        t.selectedPassage = a;
        let n = document.getElementById(t.triggerElementId);
        n && n.firstChild ? (n.firstChild.textContent = a) : n && (n.textContent = a),
          (l.style.display = 'none'),
          (i.style.display = 'block'),
          g();
        let d = b.find((h) => h.name === a);
        if (d) {
          let { chapters: h } = d;
          for (let E = 1; E <= h; E++) {
            let P = y(C);
            (P.innerText = E.toString()), c.appendChild(P);
          }
        }
      }),
      k(c, 'click', '[bible-picker="chapter-template"]', (e) => {
        let a = e.target.innerText;
        t.selectedChapter = a;
        let n = document.getElementById(t.triggerElementId);
        n && n.firstChild
          ? (n.firstChild.textContent = `${t.selectedPassage} ${a}`)
          : n && (n.textContent = `${t.selectedPassage} ${a}`),
          g(),
          m();
      }),
      k(c, 'click', '[bible-picker="chapter-template"]', (e) => {
        let a = e.target.innerText;
        (t.selectedChapter = a), m();
      }),
      O.remove(),
      C.remove();
    let T = () => {
        var n;
        let e = document.getElementById(t.triggerElementId),
          s = (e == null ? void 0 : e.getAttribute('data-placeholder')) || 'Choose a Passage';
        (((n = e == null ? void 0 : e.firstChild) == null ? void 0 : n.textContent) ||
          (e == null ? void 0 : e.textContent) ||
          '') !== s
          ? (u.style.display = 'block')
          : (u.style.display = 'none');
      },
      g = () => {
        let e = document.getElementById(t.triggerElementId),
          s = (e == null ? void 0 : e.getAttribute('data-placeholder')) || 'Choose a Passage',
          a =
            t.selectedPassage && t.selectedChapter
              ? `${t.selectedPassage} ${t.selectedChapter}`
              : t.selectedPassage || s;
        e && e.firstChild ? (e.firstChild.textContent = a) : e && (e.textContent = a);
        let n = e == null ? void 0 : e.querySelector('input');
        if (n) {
          let d = '';
          a === s
            ? (d = '')
            : t.selectedPassage && !t.selectedChapter
            ? (d = t.selectedPassage)
            : (d = `${a};`),
            (n.value = d);
          let h = new Event('input', { bubbles: !0, cancelable: !0 });
          n.dispatchEvent(h);
        }
        T();
      },
      M = (e) => {
        if (!e.id) throw new Error("The trigger element must have an 'id' attribute.");
        if (((t.triggerElementId = e.id), (r.style.display = 'flex'), t.selectedPassage)) {
          (l.style.display = 'none'), (i.style.display = 'block');
          let s = b.find((a) => a.name === t.selectedPassage);
          if (s) {
            let { chapters: a } = s;
            for (let n = 1; n <= a; n++) {
              let d = y(C);
              (d.innerText = n.toString()), c.appendChild(d);
            }
          }
        } else (l.style.display = 'block'), (i.style.display = 'none');
        T();
      },
      m = () => {
        let e = document.getElementById(t.triggerElementId);
        e &&
          (t.selectedPassage && t.selectedChapter
            ? e.firstChild
              ? (e.firstChild.textContent = `${t.selectedPassage} ${t.selectedChapter}`)
              : (e.textContent = `${t.selectedPassage} ${t.selectedChapter}`)
            : t.selectedPassage &&
              (e.firstChild
                ? (e.firstChild.textContent = `${t.selectedPassage}`)
                : (e.textContent = `${t.selectedPassage}`))),
          (r.style.display = 'none'),
          f();
      };
    for (let e = 0; e < N.length; e++) {
      let s = N[e];
      if (s.firstChild === null) s.setAttribute('data-placeholder', 'Choose a Passage');
      else {
        s.setAttribute('data-placeholder', s.firstChild.textContent);
        let a = new URLSearchParams(new URL(window.location.href).search).get('passage');
        a && a !== '' && (s.firstChild.innerText = a);
      }
      s.addEventListener('click', (a) => {
        a.stopPropagation(), M(a.currentTarget);
      });
    }
    let f = () => {
      for (; c.firstChild; ) c.removeChild(c.lastChild);
    };
    document.addEventListener('click', (e) => {
      r.style.display === 'flex' && !r.contains(e.target) && m();
    }),
      r.addEventListener('click', (e) => {
        e.stopPropagation();
      }),
      x.addEventListener('click', () => {
        (l.style.display = 'block'),
          (i.style.display = 'none'),
          (t.selectedPassage = ''),
          (t.selectedChapter = '');
        let e = document.getElementById(t.triggerElementId),
          s = (e == null ? void 0 : e.getAttribute('data-placeholder')) || 'Choose a Passage';
        e && e.firstChild ? (e.firstChild.textContent = s) : e && (e.textContent = s), g(), f();
      }),
      u.addEventListener('click', () => {
        (t.selectedPassage = ''), (t.selectedChapter = '');
        let e = document.getElementById(t.triggerElementId),
          s = (e == null ? void 0 : e.getAttribute('data-placeholder')) || 'Choose a Passage';
        e && e.firstChild ? (e.firstChild.textContent = s) : e && (e.textContent = s),
          (r.style.display = 'none'),
          f(),
          g();
      }),
      L.addEventListener('click', () => {
        m();
      }),
      v.addEventListener('click', () => {
        m();
      });
  });
})();
