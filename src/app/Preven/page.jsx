"use client";

import { useState, useEffect } from "react";
import styles from "./Contador.module.css";

export default function Contador() {
  const [tempoTrabalho, setTempoTrabalho] = useState(30 * 60);
  const [tempoPausa, setTempoPausa] = useState(10 * 60);
  const [emPausa, setEmPausa] = useState(false);
  const [inputTrabalho, setInputTrabalho] = useState(30);
  const [inputPausa, setInputPausa] = useState(10);

  useEffect(() => {
    let intervalId;

    if (typeof window !== "undefined") {
      intervalId = setInterval(() => {
        setTempoTrabalho((prev) => {
          if (!emPausa && prev > 0) {
            return prev - 1;
          } else if (!emPausa && prev === 0) {
            mostrarNotificacao("Hora da pausa!");
            setEmPausa(true);
            return inputPausa * 60;
          } else if (emPausa && tempoPausa > 0) {
            setTempoPausa((prev) => prev - 1);
          } else if (emPausa && tempoPausa === 0) {
            mostrarNotificacao("Hora de voltar ao trabalho!");
            setEmPausa(false);
            return inputTrabalho * 60;
          }
          return prev;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [emPausa, tempoPausa, inputTrabalho, inputPausa]);

  const mostrarNotificacao = (mensagem) => {
    if (typeof window !== "undefined" && Notification.permission === "granted") {
      new Notification(mensagem);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "inputTrabalho") setInputTrabalho(Number(value));
    if (name === "inputPausa") setInputPausa(Number(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTempoTrabalho(inputTrabalho * 60);
    setTempoPausa(inputPausa * 60);
  };

  const formatarTempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segRestantes = segundos % 60;
    return `${minutos}:${segRestantes < 10 ? "0" : ""}${segRestantes}`;
  };

  return (
    <div className={styles.contador}>
      <h1>{emPausa ? "Pausa" : "Tempo de Trabalho"}</h1>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          Tempo de Trabalho (minutos):
          <select name="inputTrabalho" value={inputTrabalho} onChange={handleInputChange}>
            <option value={30}>30 minutos</option>
            <option value={45}>45 minutos</option>
            <option value={60}>60 minutos</option>
          </select>
        </label>
        <label className={styles.label}>
          Tempo de Pausa (minutos):
          <select name="inputPausa" value={inputPausa} onChange={handleInputChange}>
            <option value={10}>10 minutos</option>
            <option value={15}>15 minutos</option>
          </select>
        </label>
        <button className={styles.botao} type="submit">Configurar</button>
      </form>
      <div className={styles.tempo}>
        <div>
          <h2>Atividade</h2>
          <p>{formatarTempo(tempoTrabalho)}</p>
        </div>
        <div>
          <h2>Pausa</h2>
          <p>{formatarTempo(tempoPausa)}</p>
        </div>
      </div>
    </div>
  );
}