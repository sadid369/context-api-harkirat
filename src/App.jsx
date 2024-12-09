import { useContext, useState } from "react";
import { CountContext } from "./context";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
}
function Counter() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <Count count={count} />
      <Button count={count} setCount={setCount} />
    </div>
  );
}
function Count({ count }) {
  return (
    <div>
      {count}
      <br />
    </div>
  );
}
function Button({ count, setCount }) {
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <br />
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </>
  );
}
export default App;
