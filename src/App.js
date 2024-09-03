import Button from "./componets/Button";
import Widjet1 from "./componets/Widget1";
import Widjet2 from "./componets/Widjet2";
import Line from "./componets/Line";

function App() {
  return (
    <div className="flex flex-col items-center gap-[5px] overflow-x-hidden pr-16">
      <Widjet1 />
      {/* separating two cards */}
      <Line />
      <Widjet2 />
      <Line />
    </div>
  );
}

export default App;
