import pictureList from '../templates/pictureList.hbs'
import refs from "./refs"

function updatePicturesMarkup (hits) {
    const markap = pictureList(hits)
    refs.picturesContainer.insertAdjacentHTML('beforeend', markap);
}

export default updatePicturesMarkup;