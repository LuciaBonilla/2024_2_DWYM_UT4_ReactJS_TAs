import { useParams } from "react-router-dom";

function ProductList() {
    const searchedProductID = parseInt(useParams().id);

    const products = [
        {
            id: 1,
            name: "Rosquillas",
            precio: 200
        },
        {
            id: 2,
            name: "Alfajores",
            precio: 350
        },
        {
            id: 3,
            name: "Galletas",
            precio: 150
        }
    ];

    function getProductToDisplay() {
        const searchedProduct = products.find((product) => product.id === searchedProductID);

        if (searchedProduct !== undefined && searchedProduct !== null) {
            return { hasSearchedProduct: true, productToDisplay: searchedProduct };
        } else {
            return { hasSearchedProduct: false };
        }
    }

    function generateContentToDisplay() {
        const content = getProductToDisplay();

        if (content.hasSearchedProduct === true) {
            const searchedProduct = content.productToDisplay;
            return (
                <ul>
                    <li key={"searched-product__" + searchedProductID.id}>
                        <p>ID de producto: {searchedProduct.id}</p>
                        <p>Nombre del producto: {searchedProduct.name}</p>
                        <p>Precio del producto: {searchedProduct.precio}</p>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul>
                    {products.map((product) =>
                        <li key={"product-list__" + product.id}>
                            <p>ID de producto: {product.id}</p>
                            <p>Nombre del producto: {product.name}</p>
                            <p>Precio del producto: {product.precio}</p>
                        </li>
                    )}
                </ul>
            );
        }
    }

    return (
        <>
            {generateContentToDisplay()}
        </>
    );
}

export default ProductList;