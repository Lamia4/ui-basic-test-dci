import './App.css';
import FrontPage from "./components/pages/FrontPage.js";
import ProductsPage from "./components/pages/ProductsPage.js";
import { Switch, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader.js";
import { ProductsProvider } from "./context/Products.js";

function App() {
  return (
    <div className="App">
      {/* Der Provider umfasst alle Komponenten, die Zugriff auf den Context bekommen sollen. Der Context ist außerhalb des Providers nicht verfügbar. */}
      <ProductsProvider>
        <AppHeader />
        <main>
          <Switch>
            <Route path="/" component={FrontPage} exact />
            <Route path="/products" component={ProductsPage} exact />
            <Route component={() => <h1>Seite nicht gefunden.</h1>} />
          </Switch>
        </main>
      </ProductsProvider>
    </div>
  );
}

export default App;
