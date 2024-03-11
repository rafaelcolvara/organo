import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data-Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#FDF8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#ED6869',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX & Design',
      corPrimaria: '#D8E6BF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBAD5',
      corSecundaria: '#FFF3D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FFBA29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores,setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador)=>{
    setColaboradores([...colaboradores, colaborador]);
    //lista de colaboradores, adiciona um novo no final
  }

  return (
    <div className="App">
      <Banner />
      <Formulario time={times.map(time =>time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}></Formulario>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome}
      corPrimaria={time.corPrimaria}
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
