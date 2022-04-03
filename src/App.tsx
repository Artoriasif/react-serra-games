import Navbar from './components/Navbar';
import {AppRouter} from "./routes";
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </div>
  );
}

export default App;
