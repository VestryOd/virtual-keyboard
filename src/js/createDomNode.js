export default function createDomNode(node, element, ...classes) {
  let newNode = node;
  newNode = document.createElement(element);
  newNode.classList.add(...classes);
  return newNode;
}
