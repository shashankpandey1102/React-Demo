import './App.css';
import ClickClass from './components/ClickClass';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';
import UserGreet from './components/UserGreet';
import Welcome from './components/Welcome';
import Forms from './newComponents/Forms';

function App() {
  return (
    <div className="App">
      <Forms />
      {/* <UserGreet /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClickClass/> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name = "Bruce" heroName = "Batman">
        <p>i am hero</p>
      </Greet> */}
      {/* <Greet name = "Clark" heroName = "Superman">
        <button>Action</button>
      </Greet>
      <Greet name =  "Diana" heroName = "Wonder Women" />

      <Welcome name = "Bruce" heroName = "Batman">
        <p>I am Hero</p>
      </Welcome>
      <Welcome name = "Clark" heroName = "Superman"/>
      <Welcome name = "Diana" heroName = "Wonder Women"/> */}
    </div>
  );
}

export default App;
