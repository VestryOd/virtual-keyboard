export default function handleKeyDown(key) {
  const button = key;
  if (button.classList.contains('keyboard__key')) {
    if (button.classList.contains('special')) {
      handleSpecialDown(button);
    } else {
      handleSymbolDown(button);
    }
  };

  function handleSymbolDown(target) {
    const value = target.innerHTML;
    changeValue(value);
  }

  function handleSpecialDown(target) {
    const special = target.dataset.code;
    switch (special) {
      case 'Space':
        changeValue(' ');
        break;
      case 'ContextMenu':
        this.switchLanguage();
        break;
      case 'Enter':
        changeValue('\n');
        break;
      case 'Tab':
        changeValue('\t');
        break;
      case 'Backspace':
        removeValue();
        break;
      case 'Delete':
        changeValue('Delete');
        break;
      case 'ArrowLeft':
        changeValue('◄');
        break;
      case 'ArrowDown':
        changeValue('▼');
        break;
      case 'ArrowRight':
        changeValue('►');
        break;
      case 'ArrowUp':
        changeValue('▲');
        break;
      case 'CapsLock':
        this.toggleCase();
        break;
      case 'ShiftLeft':
        this.toggleCase();
        break;
      default:
        break;
    }
  };
}
