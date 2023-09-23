import bibleBooks from '$data/bible-books';

// Utility functions
const getHTMLElement = (selector: string): HTMLElement => {
  const element = document.querySelector(selector);
  if (!element || !(element instanceof HTMLElement)) {
    throw new Error(`Element ${selector} is missing or not an HTMLElement`);
  }
  return element;
};

const cloneTemplate = (template: HTMLElement): HTMLElement => {
  return template.cloneNode(true) as HTMLElement;
};

// Event delegation function
const addEventDelegation = (
  parent: HTMLElement,
  eventType: string,
  selector: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  handler: Function
) => {
  parent.addEventListener(eventType, function (event) {
    const targetElement = event.target as HTMLElement;
    if (targetElement.closest(selector)) {
      handler(event);
    }
  });
};

document.addEventListener('DOMContentLoaded', function () {
  const biblePickerModal = getHTMLElement('#bible-picker-modal');
  const selectBookDiv = getHTMLElement('[bible-picker="select-book"]');
  const selectChapterDiv = getHTMLElement('[bible-picker="select-chapter"]');
  const chapterSection = getHTMLElement('[bible-picker="chapter-section"]');
  const oldSection = getHTMLElement('[bible-picker="old-section"]');
  const newSection = getHTMLElement('[bible-picker="new-section"]');
  const passageTemplate = getHTMLElement('[bible-picker="passage-template"]');
  const chapterTemplate = getHTMLElement('[bible-picker="chapter-template"]');
  const backButton = getHTMLElement('.icon-back');
  const exitButton = getHTMLElement('.icon-exit');
  const allButton = getHTMLElement('.bible-picker-select-all');
  const clearButton = getHTMLElement('[bible-picker="clear-button"]');
  const biblePickerElements = document.getElementsByClassName('bible-picker-input');

  // State management
  const state = {
    selectedPassage: '',
    selectedChapter: '',
    triggerElementId: '',
  };

  // Initialize UI
  selectBookDiv.style.display = 'block';
  selectChapterDiv.style.display = 'none';
  biblePickerModal.style.display = 'none';

  bibleBooks.forEach((book) => {
    const clonedTemplate = cloneTemplate(passageTemplate);
    clonedTemplate.innerText = book.name;

    // Append to correct section
    (book.testament === 'Old' ? oldSection : newSection).appendChild(clonedTemplate);
  });

  // Event delegation for book selection
  addEventDelegation(
    selectBookDiv,
    'click',
    '[bible-picker="passage-template"]',
    (event: Event) => {
      const target = event.target as HTMLElement;
      const bookName = target.innerText;

      // Update state
      state.selectedPassage = bookName;

      // Update trigger element
      const triggerElement = document.getElementById(state.triggerElementId);
      if (triggerElement && triggerElement.firstChild) {
        triggerElement.firstChild.textContent = bookName;
      } else if (triggerElement) {
        triggerElement.textContent = bookName;
      }

      // Switch to chapter selection view
      selectBookDiv.style.display = 'none';
      selectChapterDiv.style.display = 'block';

      // Update clear button visibility
      updateTriggerAndInput();

      // Populate chapters
      const book = bibleBooks.find((b) => b.name === bookName);
      if (book) {
        const { chapters } = book;
        for (let i = 1; i <= chapters; i++) {
          const clonedChapter = cloneTemplate(chapterTemplate);
          clonedChapter.innerText = i.toString();
          chapterSection.appendChild(clonedChapter);
        }
      }
    }
  );

  // Event delegation for chapter selection
  addEventDelegation(
    chapterSection,
    'click',
    '[bible-picker="chapter-template"]',
    (event: Event) => {
      const target = event.target as HTMLElement;
      const chapterNumber = target.innerText;

      // Update state
      state.selectedChapter = chapterNumber;

      // Update trigger element
      const triggerElement = document.getElementById(state.triggerElementId);
      if (triggerElement && triggerElement.firstChild) {
        triggerElement.firstChild.textContent = `${state.selectedPassage} ${chapterNumber}`;
      } else if (triggerElement) {
        triggerElement.textContent = `${state.selectedPassage} ${chapterNumber}`;
      }

      updateTriggerAndInput();

      // Close the modal
      hideModal();
    }
  );

  // Event delegation for chapter selection
  addEventDelegation(
    chapterSection,
    'click',
    '[bible-picker="chapter-template"]',
    (event: Event) => {
      const target = event.target as HTMLElement;
      const chapterNumber = target.innerText;

      // Update state
      state.selectedChapter = chapterNumber;

      // Close the modal
      hideModal();
    }
  );

  // Remove templates
  passageTemplate.remove();
  chapterTemplate.remove();

  const updateClearButtonVisibility = () => {
    const triggerElement = document.getElementById(state.triggerElementId);
    const placeholder = triggerElement?.getAttribute('data-placeholder') || 'Choose a Passage';
    const currentText =
      triggerElement?.firstChild?.textContent || triggerElement?.textContent || '';

    if (currentText !== placeholder) {
      clearButton.style.display = 'block'; // Show the button
    } else {
      clearButton.style.display = 'none'; // Hide the button
    }
  };

  const updateTriggerAndInput = () => {
    const triggerElement = document.getElementById(state.triggerElementId);
    const placeholder = triggerElement?.getAttribute('data-placeholder') || 'Choose a Passage';
    const newText =
      state.selectedPassage && state.selectedChapter
        ? `${state.selectedPassage} ${state.selectedChapter}`
        : state.selectedPassage || placeholder;

    // Update trigger element text
    if (triggerElement && triggerElement.firstChild) {
      triggerElement.firstChild.textContent = newText;
    } else if (triggerElement) {
      triggerElement.textContent = newText;
    }

    // Find the hidden input field inside the trigger element and update its value
    const hiddenInput = triggerElement?.querySelector('input');
    if (hiddenInput) {
      let newInputValue = '';
      if (newText === placeholder) {
        newInputValue = '';
      } else if (state.selectedPassage && !state.selectedChapter) {
        newInputValue = state.selectedPassage;
      } else {
        newInputValue = `${newText};`;
      }

      hiddenInput.value = newInputValue;

      // Dispatch an 'input' event to simulate user input
      const event = new Event('input', {
        bubbles: true,
        cancelable: true,
      });
      hiddenInput.dispatchEvent(event);
    }

    // Update clear button visibility
    updateClearButtonVisibility();
  };

  // Modal control functions
  // Function to show the modal and optionally open chapter selection
  const showModal = (triggerElement: HTMLElement) => {
    if (!triggerElement.id) {
      throw new Error("The trigger element must have an 'id' attribute.");
    }
    state.triggerElementId = triggerElement.id;
    biblePickerModal.style.display = 'flex';

    // Check if a book is already selected
    if (state.selectedPassage) {
      // Switch to chapter selection view
      selectBookDiv.style.display = 'none';
      selectChapterDiv.style.display = 'block';

      // Populate chapters
      const book = bibleBooks.find((b) => b.name === state.selectedPassage);
      if (book) {
        const { chapters } = book;
        for (let i = 1; i <= chapters; i++) {
          const clonedChapter = cloneTemplate(chapterTemplate);
          clonedChapter.innerText = i.toString();
          chapterSection.appendChild(clonedChapter);
        }
      }
    } else {
      // Open book selection view
      selectBookDiv.style.display = 'block';
      selectChapterDiv.style.display = 'none';
    }

    // Update clear button visibility
    updateClearButtonVisibility();
  };

  // Function to hide the modal
  const hideModal = () => {
    const triggerElement = document.getElementById(state.triggerElementId);

    if (triggerElement) {
      if (state.selectedPassage && state.selectedChapter) {
        if (triggerElement.firstChild) {
          triggerElement.firstChild.textContent = `${state.selectedPassage} ${state.selectedChapter}`;
        } else {
          triggerElement.textContent = `${state.selectedPassage} ${state.selectedChapter}`;
        }
      } else if (state.selectedPassage) {
        if (triggerElement.firstChild) {
          triggerElement.firstChild.textContent = `${state.selectedPassage}`;
        } else {
          triggerElement.textContent = `${state.selectedPassage}`;
        }
      }
    }

    // Hide the modal and clear chapters
    biblePickerModal.style.display = 'none';
    clearChapters();
  };

  // Event listeners
  for (let i = 0; i < biblePickerElements.length; i++) {
    const biblePickerElement = biblePickerElements[i] as HTMLElement;
    if (biblePickerElement.firstChild === null) {
      biblePickerElement.setAttribute('data-placeholder', 'Choose a Passage');
    } else {
      biblePickerElement.setAttribute(
        'data-placeholder',
        biblePickerElement.firstChild.textContent
      );
      const passageValue = new URLSearchParams(new URL(window.location.href).search).get('passage');

      if (passageValue && passageValue !== '') {
        biblePickerElement.firstChild.innerText = passageValue;
      }
    }
    biblePickerElement.addEventListener('click', (event) => {
      event.stopPropagation();
      showModal(event.currentTarget as HTMLElement);
    });
  }

  const clearChapters = () => {
    while (chapterSection.firstChild) {
      chapterSection.removeChild(chapterSection.lastChild as ChildNode);
    }
  };

  // Other event listeners
  document.addEventListener('click', (event) => {
    if (
      biblePickerModal.style.display === 'flex' &&
      !biblePickerModal.contains(event.target as Node)
    ) {
      hideModal();
    }
  });

  biblePickerModal.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  backButton.addEventListener('click', () => {
    // Show book selection and hide chapter selection
    selectBookDiv.style.display = 'block';
    selectChapterDiv.style.display = 'none';

    // Resetting attributes and state
    state.selectedPassage = '';
    state.selectedChapter = '';

    // Reset trigger element to placeholder
    const triggerElement = document.getElementById(state.triggerElementId);
    const placeholder = triggerElement?.getAttribute('data-placeholder') || 'Choose a Passage';
    if (triggerElement && triggerElement.firstChild) {
      triggerElement.firstChild.textContent = placeholder;
    } else if (triggerElement) {
      triggerElement.textContent = placeholder;
    }

    updateTriggerAndInput();

    // Clear dynamically generated chapters to start fresh next time
    clearChapters();
  });

  clearButton.addEventListener('click', () => {
    // Reset internal state
    state.selectedPassage = '';
    state.selectedChapter = '';

    // Reset trigger element to placeholder
    const triggerElement = document.getElementById(state.triggerElementId);
    const placeholder = triggerElement?.getAttribute('data-placeholder') || 'Choose a Passage';
    if (triggerElement && triggerElement.firstChild) {
      triggerElement.firstChild.textContent = placeholder;
    } else if (triggerElement) {
      triggerElement.textContent = placeholder;
    }

    // Optionally, close the modal and clear chapters
    biblePickerModal.style.display = 'none';
    clearChapters();

    // Update clear button visibility
    updateTriggerAndInput();
  });

  exitButton.addEventListener('click', () => {
    hideModal();
  });

  allButton.addEventListener('click', () => {
    hideModal();
  });
});
