export function runFillIn() {
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
        inputBox.readOnly = true;
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
        this.readOnly = true;
        this.classList.add('correct');
        this.classList.add('dance');
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
