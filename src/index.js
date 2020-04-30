import { VirtualKeyboard } from './js/Components/VirtualKeyboard';
import data from './js/data';
import exceptions from "./js/exceptions";

window.onload = () => {
  const keyboard = new VirtualKeyboard(data, exceptions);
  keyboard.createKeyboardInstance();
};
