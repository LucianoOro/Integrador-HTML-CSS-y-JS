/*POPUP*/

import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct, handleSaveOrModifyElements } from "../services/products";


const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener('click', () => {
    handleSaveOrModifyElements();
});

const buttonCancel = document.getElementById("cancelButton");
buttonCancel.addEventListener('click', () => {
    closeModal();
});


export const openModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "flex";
    const buttonDelete = document.getElementById("deleteButton");



    if (productoActivo) {
        const nombre = document.getElementById("nombre"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categories = document.getElementById("categoria");
        nombre.value = productoActivo.nombre;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        categories.value = productoActivo.categories;
        buttonDelete.style.display = "block";
    } else {
        buttonDelete.style.display = "none";
    }

}

export const closeModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "none";
    setProductoActivo(null);
    resetmodal();
}

const resetmodal = () => {
    const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");

    nombre.value = "";
    imagen.value = "";
    precio.value = 0;
    categories.value = "Seleccione una categoria";
}


const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener('click', () => {
    buttonDelete();
})


const buttonDelete = () => {
    handleDeleteProduct();
}