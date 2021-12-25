import { useContext } from "react";
import ProductCard from "../ProductCard.js";
import { ProductsContext } from "../../context/Products.js";

function ProductsPage () {
    // Mit dem useContext Hook greifen wir auf unseren Context zu und extrahieren die "products"
    // Wir benötigen hierfür keinen eigenen State mehr, auch müssen keine Props durchgereicht werden
    const { products } = useContext(ProductsContext);

    return (
        <>
            <h1>Produkte</h1>
            {products.map(product => <ProductCard product={product} key={product.articleNo} />)}
        </>
    );
}

export default ProductsPage;
