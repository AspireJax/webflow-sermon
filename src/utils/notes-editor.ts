import Quill from 'quill';

export function runNotesEditor() {
  const editorContainer = document.querySelector('[sermon-function="notes-editor"]');
  const toolbarContainer = document.querySelector('[sermon-editor="toolbar"]');
  const slug = editorContainer.getAttribute('sermon-data');

  const quill = new Quill(editorContainer, {
    modules: {
      toolbar: {
        container: toolbarContainer,
      },
      history: {
        delay: 2000,
        maxStack: 500,
        userOnly: true,
      },
    },
    placeholder: 'Sermon Notes...',
  });

  const NotesKey = `${slug}__Notes`;
  const editor = editorContainer.querySelector('.ql-editor');
  const savedNotes = localStorage.getItem(NotesKey);

  if (savedNotes) {
    editor.innerHTML = savedNotes;
  }

  const observer = new MutationObserver(function () {
    localStorage.setItem(NotesKey, editor.innerHTML);
  });

  observer.observe(editor, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  });

  window.addEventListener('storage', function (event) {
    if (event.key === NotesKey && editor !== null) {
      editor.innerHTML = event.newValue;
    }
  });

  const blockDropdown = document.querySelector('[rt-input="block-dropdown"]');
  const blockDropdownbutton = document.querySelector('.ql-dropdown-text');

  if (blockDropdownbutton && blockDropdown) {
    blockDropdownbutton.addEventListener('click', () => {
      if (blockDropdown.style.display === 'none' || blockDropdown.style.display === '') {
        blockDropdown.style.display = 'block'; // Show the dropdown
      } else {
        blockDropdown.style.display = 'none'; // Hide the dropdown
      }
    });

    const dropdownChildren = blockDropdown.querySelectorAll('.ql-toolbar-dropdown');

    dropdownChildren.forEach((child) => {
      child.addEventListener('click', () => {
        blockDropdown.style.display = 'none'; // Hide the blockDropdown
      });
    });
  }
  else {
    console.error('Missing [rt-input="block-dropdown"] and or .ql-dropdown-text');
  }
}
