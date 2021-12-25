import { useContext } from "react";
import "./AppHeader.css";
import MainNavigation from "./MainNavigation.js";
import { ProductsContext } from "../context/Products";

function AppHeader () {
    // Auch hier benötigen wir keine Props oder einen eigenen State. Wir greifen auf den gleichen Context zu wie ProductsPage
    const { products } = useContext(ProductsContext);

    return (
        <header className="AppHeader">
            <MainNavigation />
            <p className="ProductsInStore">{products.length} Produkte im Store</p>
        </header>
    );
}

export default AppHeader;
