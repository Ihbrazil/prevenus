{/*
  O que foi corrigido:
    Topo e Rodape devem ser componentes client-side. Para isso:

    Adicione "use client" no topo de cada um desses arquivos

    Não os importe diretamente no layout.js

    Em vez disso, crie um componente client separado, como ClientShell.js, com "use client" no topo, e mova Topo e Rodape para lá
*/}

import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import ClientShell from "../componentes/ClientShell";

export const metadata = {
  title: "Projeto Prevenus",
  description: "Prevenção de Doenças Ocupacionais em Informática",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        {/* Meta Tags */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Projeto Prevenus - Saúde e Ergonomia" />
        <meta name="keywords" content="Prevenus, saúde, ergonomia, alongamentos" />
        <meta name="author" content="ihbrazil Full Stack developers" />
        <meta property="og:title" content="Projeto Prevenus" />
        <meta property="og:description" content="Prevenção de Doenças Ocupacionais em Informática" />
        <meta property="og:image" content="/imagem-preview.jpg" />
        <meta property="og:url" content="https://prevenus.com.br" />
      </head>
      
      <body>
        {/* Estrutura principal antiga antes GTM */}
        {/*
        <Topo />
        {children}
        <Rodape />
        */}
        <GoogleTagManager gtmId="G-C954W9XDEG" />  
        {/* Estrutura principal nova depois GTM */}
        <ClientShell>
        {children}
        </ClientShell>
      </body>
    </html>
  );
}