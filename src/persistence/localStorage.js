// ====LOCALSTORAGE====

//Traer productos al local storage
export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
        return products;
    } else {
        return [];
    }
}


//Guardar productos en el local storage
export const setInLocalStorage = (productIn) => {
    if (productIn) {
        //traer elementos
        let prodcutInLocal = handleGetProductLocalStorage();
        
        //verificar si el producto existe
        const existingIndex = prodcutInLocal.findIndex((prodcutInLocal) =>
            prodcutInLocal.id === productIn.id
        );
        //si existe se reemplaza
        if (existingIndex !== -1) {
            prodcutInLocal[existingIndex] = productIn;
        } else { //si no existe se crea
            prodcutInLocal.push(productIn);
        }

        localStorage.setItem("products", JSON.stringify(prodcutInLocal));
    }
}