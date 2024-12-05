import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="p-8">
      <div className="flex flex-col border border-black p-8">
        <p className="m-8">flex</p>
        <p className="m-8">col</p>
      </div>
      <div className="flex border border-black p-8">
        <p className="m-8">flex</p>
        <p className="m-8">row</p>
      </div>
    </div>
  );
}

export default App;
