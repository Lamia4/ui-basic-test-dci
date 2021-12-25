import { createContext, useState, useEffect } from "react";
import { getProducts } from "../API";

// Mit createContext() schaffen wir uns die Grundfunktionalitäten der React Context API
// Der ProductsContext wird exportiert, damit wir in anderen Komponenten Zugriff auf den Context bekommen
export const ProductsContext = createContext();

// Der Provider stellt den Wrapper dar, der um die Komponenten gelegt wird, in denen der Context zur Verfügung stehen soll.
// Da der Provider eine eigenständige Komponente ist, können wir hier wie gewohnt die bekannten Hooks verwenden.
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => getProducts().then(setProducts), []);

    // Alle Daten und Funktionen, die wir im Context verfügbar machen wollen, geben wir dem Provider als prop "value" mit.
    // Als value bietet sich ein Objekt an, in dem diese aufgeführt sind. Dadurch können wir das Destructuring wie in ProductsPage (siehe useContext) verwenden.
    // Die hier verwendete Komponente "Provider" stammt aus unserem ProductsContext (siehe createContext).
    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};
