import { Header, Footer, Page } from './components';

import './App.css';

function App()
{
  const pageTitle = "Unsere Webseite";

  return (
    <>
      <Header title={ pageTitle }/>

      <Page/>

      <Footer/>
    </>
  );
}

export default App;
