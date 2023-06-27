import { } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
    /* Get all of the rows, which are their own accordion button and panels */
    /* For each panel, set the display to 'none' */
    [...block.children].forEach((row) => {
         row.children[1].style.display = 'none';
         const firstChild = row.firstElementChild;
         firstChild.classList.add('button');
         firstChild.addEventListener('click', () => {
            const panel = row.children[1];
                panel.classList.add('panel');
                const isPanelVisible = panel.style.display === 'block';
                if (panel.style.display === 'none') {
                    panel.style.display = 'block';
                } else {
                    panel.style.display = 'none';
                }
                if (!isPanelVisible) {
                    panel.scrollIntoView({ behavior: 'smooth'});
                }
         })
    })
};