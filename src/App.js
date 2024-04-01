import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/Counter";
import Message from "./component/Message";
import Value from "./component/Value";
import ApiFoods from "./component/ApiFoods";
import Parent from "./component/Parent";
import Children from "./component/Children";

function App() {
  return (
    <div className="container">
      <Parent>
        <Children />
      </Parent>
      <hr />
      <ApiFoods />
      <hr />
      <Value />
      <hr />
      <Message txt="Hello" />
      <Message txt="Bye" />
      <Counter />
    </div>
  );
}

export default App;
