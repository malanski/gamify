import './App.scss';
import { Footer } from './components/Footer';

import { Header } from './components/Header';
import { Home } from './pages/home/home';

function App() {
  return (
    <div className="App">

      <Header />


        <Home />

      <Footer />

    </div>
  );
}

export default App;
