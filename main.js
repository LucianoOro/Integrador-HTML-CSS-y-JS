import { renderCategories } from "./src/services/categories";
import './style.css';
import { handleGetProductsToStore } from './src/views/store';
import { openModal } from './src/views/modal';
import { handleSearchProductByName } from './src/services/search';


renderCategories();
handleGetProductsToStore();

//====APLICACION====
export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn
}

export let productoActivo = null;

export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
}

//HEADER
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener('click', () => {
    openModal();
});

const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener('click', () => {
    handleSearchProductByName();
});
