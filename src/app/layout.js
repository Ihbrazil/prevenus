import "./globals.css";
import Topo from "../componentes/Topo";
import Rodape from "../componentes/Rodape";
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title: "Projeto Prevenus",
  description: "Prevenção de Doenças Ocupacionais em Informática",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        {/* Google Tag Manager Script */}
        <GoogleTagManager gtmId="G-C954W9XDEG" />
        {/* Fim Google Tag Manager */}
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
        {/* Estrutura principal */}
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}