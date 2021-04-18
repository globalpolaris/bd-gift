import "./App.css";
import Header from "./component/Header";
import Timer from "./component/Countdown";
import Night from "./component/NightMode";
import ReqDictionary from "./component/Dictionary";

function App() {
  return (
    <div className="App">
      <Header />
      <Night />
      <Timer />
      {/* <SearchBar /> */}
      <ReqDictionary />
    </div>
  );
}

export default App;
