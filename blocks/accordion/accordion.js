import { } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
    /* Get all of the rows, which are their own accordion button and panels */
    [...block.children].forEach((row) => {
         /* For each panel, set the display to 'none' */
         row.children[1].style.display = 'none';

         /* For the first child (the button name column) add the button and class */
         const firstChild = row.firstElementChild;
         firstChild.classList.add('button');

         /* Add the button listener */
         firstChild.addEventListener('click', () => {

            /* The row's second child is the panel. Add the panel class and display as block */
            const panel = row.children[1];
            panel.classList.add('panel');
            const isPanelVisible = panel.style.display === 'block';

            /* If the panel is not displayed on click */
            if (panel.style.display === 'none') {

                /* Display it */
                panel.style.display = 'block';
            } else {
                /* Hide it */
                panel.style.display = 'none';
            }

            /* Add smooth scrolling */
            if (!isPanelVisible) {
                panel.scrollIntoView({ behavior: 'smooth'});
            }
         })
    })
};