import './App.css';
import Avaliacao from './components/Avaliacao';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Grafico from './components/Grafico';
import Rodape from './components/Rodape';
import Tabela from './components/Tabela';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Subtitulo from './components/Subtitulo';
import useDadosConsultas from './useDadosConsulta';
import useDadosProfissional from './useDadosProfissional';

function App() {

  const { dados: consultas, erro: consultasErro } = useDadosConsultas();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

  if (consultasErro || profissionaisErro) {
    console.log('Ocorreu um erro na requisição');
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Botao>Cadastrar especialista</Botao>
        <Titulo imagem="consulta">Consultas do Dia</Titulo>
        <Tabela consultas={consultas} />
        <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Avaliacao profissionais={profissionais} />
      </Container>
      <Rodape />
    </>
  );
}

export default App;
