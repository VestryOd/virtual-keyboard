import createDomNode from "../createDomNode";
export class Header {
  generateHeader() {
    const header__wrapper = createDomNode(header__wrapper, 'div', 'header__wrapper');
    const header = createDomNode(header, 'h1', 'header');
    header.innerHTML = 'RS-School task Virtual Keyboard';
    const description__wrapper = createDomNode(description__wrapper, 'div', 'description__wrapper');
    const description = createDomNode(description, 'div', 'info');
    description.innerHTML = 'Created on Win OS / lang switch: left Ctrl + Alt or globe icon';
    const langSwitch = createDomNode(langSwitch, 'button', 'info__lang-switch');
    langSwitch.innerHTML = 'Clear textarea';
    description__wrapper.append(description, langSwitch);
    header__wrapper.append(header, description__wrapper);
    return header__wrapper;
  }
}
