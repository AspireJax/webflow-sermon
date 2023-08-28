import party from 'party-js';

export function runFillIn() {
  const svgPaths = [
    'M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z',
    'M325.8 152.3c1.3 4.6 5.5 7.7 10.2 7.7s8.9-3.1 10.2-7.7L360 104l48.3-13.8c4.6-1.3 7.7-5.5 7.7-10.2s-3.1-8.9-7.7-10.2L360 56 346.2 7.7C344.9 3.1 340.7 0 336 0s-8.9 3.1-10.2 7.7L312 56 263.7 69.8c-4.6 1.3-7.7 5.5-7.7 10.2s3.1 8.9 7.7 10.2L312 104l13.8 48.3zm-112.4 5.1c-8.8-17.9-34.3-17.9-43.1 0l-46.3 94L20.5 266.5C.9 269.3-7 293.5 7.2 307.4l74.9 73.2L64.5 483.9c-3.4 19.6 17.2 34.6 34.8 25.3l92.6-48.8 92.6 48.8c17.6 9.3 38.2-5.7 34.8-25.3L301.6 380.6l74.9-73.2c14.2-13.9 6.4-38.1-13.3-40.9L259.7 251.4l-46.3-94zm215.4 85.8l11 38.6c1 3.6 4.4 6.2 8.2 6.2s7.1-2.5 8.2-6.2l11-38.6 38.6-11c3.6-1 6.2-4.4 6.2-8.2s-2.5-7.1-6.2-8.2l-38.6-11-11-38.6c-1-3.6-4.4-6.2-8.2-6.2s-7.1 2.5-8.2 6.2l-11 38.6-38.6 11c-3.6 1-6.2 4.4-6.2 8.2s2.5 7.1 6.2 8.2l38.6 11z',
    'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z',
    'M320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L320 0z',
  ];

  const svgShapes = svgPaths.map((path) => {
    const customPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    customPath.setAttribute('d', path);

    const customShape = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    customShape.setAttribute('viewBox', '0 0 512 512');
    customShape.setAttribute('height', '20');
    customShape.setAttribute('width', '20');
    customShape.appendChild(customPath);

    return customShape;
  });

  let uniqueIdCounter = 0;

  function processNode(node: Node): Node[] {
    const fragments: Node[] = [];
    if (node.nodeType === 3) {
      const text = node.nodeValue || '';
      const regex = /##(.*?)##/g;
      let match;
      let lastIndex = 0;

      while ((match = regex.exec(text)) !== null) {
        fragments.push(document.createTextNode(text.substring(lastIndex, match.index)));
        const targetWord = match[1];
        const inputBox = createInputBox(targetWord, uniqueIdCounter++);
        fragments.push(inputBox);
        lastIndex = regex.lastIndex;
      }

      if (lastIndex < text.length) {
        fragments.push(document.createTextNode(text.substring(lastIndex)));
      }
    } else if (node.nodeType === 1) {
      const clone = node.cloneNode(false) as HTMLElement;
      Array.from(node.childNodes).forEach((child) => {
        processNode(child).forEach((newNode) => clone.appendChild(newNode));
      });
      fragments.push(clone);
    }
    return fragments;
  }

  function createInputBox(targetWord: string, index: number): HTMLInputElement {
    const inputBox = document.createElement('input');
    inputBox.className = 'Sermon-Text-Input';
    inputBox.id = 'input-' + index;
    inputBox.setAttribute('type', 'text');
    inputBox.setAttribute('maxlength', targetWord.length.toString());
    inputBox.style.setProperty('--size', targetWord.length.toString());

    const sermonDataAttr = document
      .querySelector('[sermon-function="Fill-In"]')
      ?.getAttribute('sermon-data');
    const key = sermonDataAttr ? sermonDataAttr + '__InputValues' : '';
    const savedValues = JSON.parse(localStorage.getItem(key) || '[]');
    const savedValue = savedValues[index];
    if (savedValue) {
      inputBox.value = savedValue;
      if (savedValue === targetWord) {
        inputBox.disabled = true;
        inputBox.classList.add('correct');
      }
    }

    inputBox.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') return;
      const nextChar = targetWord.charAt(this.value.length);
      if (e.key.toLowerCase() !== nextChar.toLowerCase()) {
        e.preventDefault();
        this.classList.add('shake');
        setTimeout(() => {
          this.classList.remove('shake');
        }, 500);
      } else {
        e.preventDefault();
        this.value += nextChar;
      }
    });

    inputBox.addEventListener('keyup', function () {
      if (this.value === targetWord) {
        this.disabled = true;
        this.classList.add('correct');
        this.classList.add('dance');

        party.confetti(this, {
          count: party.variation.range(20, 30),
          size: party.variation.range(0.5, 0.9),
          shapes: svgShapes,
        });
//hell
        setTimeout(() => {
          this.classList.remove('dance');
        }, 1000);

        const currentIndex = inputBoxes.indexOf(this);
        if (inputBoxes[currentIndex + 1]) {
          inputBoxes[currentIndex + 1].focus();
        }
      }

      const savedValues = JSON.parse(localStorage.getItem(key) || '[]');
      savedValues[index] = this.value;
      localStorage.setItem(key, JSON.stringify(savedValues));
    });

    return inputBox;
  }

  const content = document.querySelector('[sermon-function="Fill-In"]');
  const inputBoxes: HTMLInputElement[] = [];
  if (content) {
    const nodes = Array.from(content.querySelectorAll('.text-rich-text')[0].childNodes);

    nodes.forEach((node) => {
      const newNodes = processNode(node);
      newNodes.forEach((newNode) => {
        if (newNode instanceof HTMLInputElement) {
          inputBoxes.push(newNode);
        }
        content.querySelectorAll('.text-rich-text')[0].insertBefore(newNode, node);
      });
      content.querySelectorAll('.text-rich-text')[0].removeChild(node);
    });
  }
}
