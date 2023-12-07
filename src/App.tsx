import { useState } from "react";
import Message from "./Components/Message";
import MyForm from "./Components/Form";
import ListGroup from "./Components/ListGroup";
import SecondForm from "./Components/SecondForm";
import Welcome from "./Components/Welcome";

const App = () => {
  const [count, setCount] = useState(0);
  const sayHello = () => {
    console.log("Hi!");
    setCount(count + 1);
    if (count == 5) {
      console.log(count);
    }
  };
  return (
    <div>
      <Message sayHi={sayHello} />
      <MyForm />
      <ListGroup />
      <SecondForm />
      <Welcome />
    </div>
  );
};

export default App;
