"use client";

import React from 'react';
import styles from './Contador.module.css';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempoTrabalho: 0.25 * 60, // 30 minutos em segundos
      tempoPausa: 10 * 60, // 10 minutos em segundos
      emPausa: false,
      inputTrabalho: 30, // 30 minutos
      inputPausa: 10, // 10 minutos
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.iniciarContador();
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  iniciarContador = () => {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (!prevState.emPausa && prevState.tempoTrabalho > 0) {
          return { tempoTrabalho: prevState.tempoTrabalho - 1 };
        } else if (!prevState.emPausa && prevState.tempoTrabalho === 0) {
          this.mostrarNotificacao('Hora da pausa!');
          return { emPausa: true, tempoPausa: prevState.inputPausa * 60, tempoTrabalho: 0 };
        } else if (prevState.emPausa && prevState.tempoPausa > 0) {
          return { tempoPausa: prevState.tempoPausa - 1 };
        } else if (prevState.emPausa && prevState.tempoPausa === 0) {
          this.mostrarNotificacao('Hora de voltar ao trabalho!');
          return { emPausa: false, tempoTrabalho: prevState.inputTrabalho * 60, tempoPausa: 0 };
        }
      });
    }, 1000);
  };

  mostrarNotificacao = (mensagem) => {
    if (Notification.permission === "granted") {
      new Notification(mensagem);
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      tempoTrabalho: this.state.inputTrabalho * 60,
      tempoPausa: this.state.inputPausa * 60,
    });
  };

  formatarTempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segRestantes = segundos % 60;
    return `${minutos}:${segRestantes < 10 ? '0' : ''}${segRestantes}`;
  };

  render() {
    return (
      
      <div className={styles.contador}>
        <h1>{this.state.emPausa ? 'Pausa' : 'Tempo de Trabalho'}</h1>
        <form onSubmit={this.handleSubmit}>
          <label className= {styles.label}>
            Tempo de Trabalho (minutos):
            <select
              name="inputTrabalho"
              value={this.state.inputTrabalho}
              onChange={this.handleInputChange}
            >
              <option value={30}>30 minutos</option>
              <option value={45}>45 minutos</option>
              <option value={60}>60 minutos</option>
            </select>
          </label>
          <label className= {styles.label}>
            Tempo de Pausa (minutos):
            <select
              name="inputPausa"
              value={this.state.inputPausa}
              onChange={this.handleInputChange}
            >
              <option value={10}>10 minutos</option>
              <option value={15}>15 minutos</option>
            </select>
          </label>
          <button className={styles.botao} type="submit">Configurar</button>
        </form>
        <div className={styles.tempo}>
          <div>
            <h2>Atividade</h2>
            <p>{this.formatarTempo(this.state.tempoTrabalho)}</p>
          </div>
          <div>
            <h2>Pausa</h2>
            <p>{this.formatarTempo(this.state.tempoPausa)}</p>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Contador;
