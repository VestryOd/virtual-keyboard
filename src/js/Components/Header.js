import createDomNode from "../createDomNode";
export class Header {
  generateCheckbox() {
    const checboxWrapper = createDomNode(checboxWrapper, 'div', 'checbox__wrapper');
    checboxWrapper.innerHTML = `<label for="animation-toggler">Animate </label>
                                <input type = "checkbox" id = "animation-toggler" />`;
    return checboxWrapper;
  }

  generateTitle() {
    const header = createDomNode(header, 'h1', 'header');
    header.innerHTML = 'RS-School task Virtual Keyboard';
    return header;
  }

  generateDescription() {
    const description__wrapper = createDomNode(description__wrapper, 'div', 'description__wrapper');
    const description = createDomNode(description, 'div', 'info');
    description.innerHTML = 'Created on Win OS / lang switch: left Ctrl + Alt or globe icon';
    const options = this.generateOptions();
    description__wrapper.append(description, options);
    return description__wrapper;
  }

  generateOptions() {
    const optionsWrapper = createDomNode(optionsWrapper, 'div', 'options__wrapper');
    const checkBox = this.generateCheckbox();
    const clearTextareaButton = this.generateClearTextareaButton();
    optionsWrapper.append(checkBox, clearTextareaButton)
    return optionsWrapper;
  }

  generateClearTextareaButton() {
    const clearTextareaButton = createDomNode(clearTextareaButton, 'button', 'options__clear');
    clearTextareaButton.innerHTML = 'Clear';
    return clearTextareaButton;
  }

  generateHeader() {
    const header__wrapper = createDomNode(header__wrapper, 'div', 'header__wrapper');
    const header = this.generateTitle();
    const description = this.generateDescription();
    header__wrapper.append(header, description);
    return header__wrapper;
  }
}
