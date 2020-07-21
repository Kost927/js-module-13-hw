import { debounce } from "debounce";
import './styles.css';
import refs from "./js/refs"
// import searchForm from './templates/pictures.hbs';
import picturesServices from './js/pictures-services'
import updatePicturesMarkup from './js/pictures-markup' 
import modal from './js/modal'
import spinner from './js/spinner'


refs.searchForm.addEventListener('input', debounce(function (event) {
event.preventDefault()

const form = event.target;
picturesServices.query = form.value


refs.picturesContainer.innerHTML = '';

picturesServices.resetPage();

refs.loadMoreBtn.classList.add('is-hidden')

picturesServices.fetchPictures().then(hits => {
    updatePicturesMarkup(hits);
    refs.loadMoreBtn.classList.remove('is-hidden')
    // window.scrollTo({
    //     top: document.documentElement.offsetHeight,
    //     behavior: 'smooth',
    //   });
    
    
});


}, 500)
)


refs.loadMoreBtn.addEventListener('click', () => {

    picturesServices.fetchPictures().then(hits => {
        updatePicturesMarkup(hits);

        window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: 'smooth',
          });
          
    });

})










