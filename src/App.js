import { Fragment } from 'react';
import './App.css';
import Header from "./Components/Header";
import MainImg from "./Components/MainImg";
import SectionFood from './Components/SectionFood';


function App() {
  return (
    <Fragment>
      <Header />
      <MainImg />
      <SectionFood />
    </Fragment>
  );
}

export default App;
