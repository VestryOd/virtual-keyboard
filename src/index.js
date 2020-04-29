import { VirtualKeyboard } from './js/Components/VirtualKeyboard';
import data from './js/data';

window.onload = () => {
  const keyboard = new VirtualKeyboard(data);
  keyboard.createKeyboardInstance();
};
