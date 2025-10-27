function cleanQuotes(text) {
  return text
    .replace(/[\u2018\u2019]/g, "'") // ‘ ’
    .replace(/[\u201C\u201D]/g, '"'); // “ ”
}

document.addEventListener('paste', (event) => {
  const active = document.activeElement;

  if (!active.isContentEditable) return;

  event.preventDefault();

  // Get plain text from clipboard
  const clipboardData = event.clipboardData || window.clipboardData;
  let pastedText = clipboardData.getData('text');

  // Clean quotes
  const cleaned = cleanQuotes(pastedText);

  // Insert cleaned text at caret
  document.execCommand('insertText', false, cleaned);
});
