import "./App.css";
import Navbar from "./component/Sections/Navbar";
import { Provider } from "react-redux";
import store from "./Redux-Store/store";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
