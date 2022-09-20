import './App.css';
import { Footer } from './components/Footer';

// import Header from './components/Header/Header';

import { Header } from './components/Header';

function App() {
  return (
    <div className="App">

      <Header />


      <div className="home">
        <p className="intro-text">
          &ensp;&ensp;&ensp;&ensp;
          Dificuldade de planejar e concluir seus projetos nunca foi
          tão divertido! A ferramenta (nome do site) é ideal para você,
          pois de forma simples, gamificada e intuitiva você conseguirá
          ser mais produtivo.
        </p>
        <p className="site-description">
          &ensp;&ensp;&ensp;&ensp;
          Bem vindo, (nome do site) é uma ferramenta que te ajuda no
          gerenciamento de projetos, com ele é possível difinir seus
          projetos, prazos de início, data de finalização e um checklist
          das tarefas necessárias para concluí-los. De acordo com que você,
          usuário for marcando as tarefas como concluídas,consigui-rá
          visualizar o andamento do projeto por meio de uma barra de
          progressão.
        </p>
      </div>

      <Footer />

    </div>
  );
}

export default App;
