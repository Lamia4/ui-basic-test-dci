import Counter from './Components/Counter';
import Message from './Components/Message';
import Room from './Components/Room';
import Water from './Components/Water';

function App() {
  return (
    <div>
    <Counter initCount={5}/>
      {/* <Water/>

      <br/>
      <br/>


      <br/>
      <br/>

      <Message isVisible={true} color="tomato">
          <h2>Hallo!!</h2>
          <i>Hallo, ich bin eine Nachricht</i>
      </Message>

      <br/>
      <br/> */}

      <Room/>
    </div>
  );
}

export default App;
