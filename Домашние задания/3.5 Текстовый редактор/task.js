const editor = document.getElementById('editor');
const storageKey = 'textEditorContent';

// Загружаем сохранённый текст
function loadSavedText() {
  const storedValue = localStorage.getItem(storageKey);
  if (storedValue !== null) {
    editor.value = storedValue;
  }
}

// Сохраняем написанный текст в хранилище
function saveCurrentText() {
  localStorage.setItem(storageKey, editor.value);
}

// Загружаем текст из хранилища при загрузке страницы
loadSavedText();

//Сохраняем текст после каждого изменения в нём
editor.addEventListener('input', saveCurrentText);