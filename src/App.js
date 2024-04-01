import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/Counter";
import Message from "./component/Message";
import Value from "./component/Value";

function App() {
  return (
    <div className="container">
      <Value />
      <hr />
      <Message txt="Hello" />
      <Message txt="Bye" />
      <Counter />
    </div>
  );
}

export default App;
