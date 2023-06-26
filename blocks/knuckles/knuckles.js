import { } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
    /* Just freaking show some text */
    const knuckleImage = document.createElement('img');
    knuckleImage.src = "https://i.gifer.com/7gi.gif"
    block.textContent = '';
    block.append(knuckleImage);
    console.log("Knuckle Block 2");
};