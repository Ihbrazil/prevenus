// src/componentes/ClientShell.jsx
"use client";

import Topo from "./Topo";
import Rodape from "./Rodape";

export default function ClientShell({ children }) {
  return (
    <>
      <Topo />
      {children}
      <Rodape />
    </>
  );
}