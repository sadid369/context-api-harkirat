import { useRecoilState, useRecoilValue } from "recoil";
import countAtom from "./store/atoms/count";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
function Counter() {
  console.log("Counter");
  return (
    <div>
      <Count />
      <Button />
    </div>
  );
}
function Count() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
      <br />
    </div>
  );
}
function Button() {
  const [count, setCount] = useRecoilState(countAtom);
  console.log("Button");
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
