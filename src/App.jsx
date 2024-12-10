import { useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

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
      <IsEven />
    </div>
  );
}
function IsEven() {
  const isEven = useRecoilValue(evenSelector);
  console.log(isEven);
  return <>{isEven ? "Even" : null}</>;
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
  const setCount = useSetRecoilState(countAtom);
  console.log("Button");
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <br />
      <br />
      <button onClick={() => setCount((count) => count + 1)}>decrement</button>
    </>
  );
}
export default App;
