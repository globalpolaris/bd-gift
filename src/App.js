import logo from "./logo.svg";
import "./App.css";
import Header from './component/Header';
import Timer from './component/Countdown'
import SearchBar from './component/Search'
import Night from './component/NightMode'
import ReqDictionary from './component/Dictionary'

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
