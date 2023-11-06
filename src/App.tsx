import './App.css';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Rodape from './components/Rodape';
import Tabela from './components/Tabela';
import Titulo from './components/Titulo';
import useDadosConsultas from './useDadosConsulta';

function App() {

  const { dados, erro } = useDadosConsultas();

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Tabela consultas={dados} />
      </Container>
      <Rodape />
    </>
  );
}

export default App;
