import createDomNode from "../createDomNode";

export class TextArea {
  generateTextArea() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('textarea-wrapper');
    const textArea = createDomNode(textArea, 'textarea', 'textarea');
    textArea.setAttribute('id', 'textarea');
    textArea.setAttribute('autofocus', true);
    wrapper.append(textArea);
    return wrapper;
  }
}
