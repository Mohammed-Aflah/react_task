import Counter from "./main/counter/Counter";
import Fetching from "./main/fetchdata/Fetching";
import Form from "./main/forms/Form";
import Header from "./main/header/Header";
import Profile from "./main/profile/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/fetch" element={<Fetching />} />
          <Route path="/form" element={<Form />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
