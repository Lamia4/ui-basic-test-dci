import './App.css';

function App() {
  return (
    <div>
        <MyList />
    </div>
  );
}

function MyList() {
  let items = [1, 2, 3, 4, 'last element'];
  return (<ul>
    {items.map((value, index) => {
      return <li key={index}>{value}</li>
    })}
  </ul>)
}

export default App;
