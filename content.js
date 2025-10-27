function cleanQuotes(text) {
  const original = text;
  const cleaned = text
    .replace(/[\u2018\u2019]/g, "'") // ‘ ’
    .replace(/[\u201C\u201D]/g, '"'); // “ ”
  const wasChanged = cleaned !== original;
  return { cleaned, wasChanged };
}

function showFlashMessage(message) {
  // Avoid creating multiple flash messages
  const existing = document.getElementById('quote-cleaner-flash');
  if (existing) {
    existing.remove();
  }

  const flash = document.createElement('div');
  flash.id = 'quote-cleaner-flash';
  flash.textContent = message;
  flash.style.position = 'fixed';
  flash.style.bottom = '20px';
  flash.style.right = '20px';
  flash.style.padding = '8px 12px';
  flash.style.background = 'rgba(0, 0, 0, 0.75)';
  flash.style.color = 'white';
  flash.style.fontSize = '13px';
  flash.style.borderRadius = '5px';
  flash.style.zIndex = '9999';
  flash.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.2)';
  flash.style.opacity = '1';
  flash.style.transition = 'opacity 0.5s ease';

  document.body.appendChild(flash);

  setTimeout(() => {
    flash.style.opacity = '0';
    setTimeout(() => flash.remove(), 500);
  }, 2000);
}

document.addEventListener('paste', (event) => {
  const active = document.activeElement;

  if (!active.isContentEditable) return;

  event.preventDefault();

  const clipboardData = event.clipboardData || window.clipboardData;
  const pastedText = clipboardData.getData('text');

  const { cleaned, wasChanged } = cleanQuotes(pastedText);

  document.execCommand('insertText', false, cleaned);

  if (wasChanged) {
    showFlashMessage('Smart quotes replaced');
  }
});
