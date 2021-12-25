import './App.css';
import CreditCard from "./Components/CreditCard"

function App() {

  const creditCardInformation = {
    cardHolder: "William MoneyBags",
    expirationDate: "08/22",
    security: "123",
    bankNumber: 1234567887654321,
    bankName:"Big Bank, Inc."
  }

  let logedInUser = "William MoneyBags";

  return (
    <div className="App">
        <CreditCard
          creditCardInformation={creditCardInformation}
          logedInUser={logedInUser}
        />
    </div>
  );
}

export default App;
