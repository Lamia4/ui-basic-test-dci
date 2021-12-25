import './App.css';
import Evelope from "./Evelope";
import bildDatei from "./Bilder/stamp.jpg"; // Erstellung von bildDatei Link
import CustomerList from "./CustomerList"

function App() {

  const fromPerson = {
    fullName: 'Julian Perge',
    address: '123 Blank Street',
    cityStateZip: 'Columbus, OH 43203',
  };
  
  const toPerson = {
    fullName: 'Perge Julian',
    address: '321 Blank Street',
    cityStateZip: 'San Francisco, CA 43204',
  };
 const customers = [
  {
    fullName: "Julian Perge",
    isAdmin: false
  },
  {
    fullName: "Florian Hahn",
    isAdmin: true
  },
  {
    fullName: "Max Mustermann",
    isAdmin: false
  }
 ]
  let logedInUser = {
    fullName: "Julian Perge",
    isAdmin: true
  };
  return (
    <div>
      <div className="evelope">
      <Evelope 
        fromPerson={fromPerson}
        toPerson={toPerson}
        imageUrl={bildDatei}  // Weitergabe des Links an die Evelope Component
        logedInUser={logedInUser}
      />
      </div>
      <div className="customers">
        {customers.map((customer,index)=>(
          <CustomerList 
            customer={customer}
            key={index}
            id={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
