import React, { Component } from 'react';
import Botao from './Componentes/botao'
import './Styles/style.css';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Siga os bons e aprenda com eles', 'O bom senso vale mais que qualquer coisa', 
                    'O riso é a menos distancia entre duas pessoas', 'Deixe de lado suas preocupações e seja feliz', 
                    'Realize o óbvio, pense no improvavel e conquiste o impossivel',
                    'Quando a vida te der limões, faça uma limonada', 'O caminho mais duro traz as melhores recompensas',
                    ];
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.text = '" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
          <img src={require('./assets/biscoito.png')} className="img"/>
          <Botao acaoBtn={this.quebraBiscoito}/>
          <h3 className="textoFrase">{this.state.text}</h3>
      </div>
    );
  }
}

export default App;
