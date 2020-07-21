import refs from "../js/refs"
import * as basicLightbox from 'basiclightbox'

refs.modalImg.addEventListener('click', e => {
    if (e.target.nodeName === 'IMG') {

        const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">
    `);
    console.log(e.target.dataset.source);
    
    instance.show();
    }
});


