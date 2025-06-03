import "./globals.css";
import Topo from "../componentes/Topo";
import Rodape from "../componentes/Rodape";
import Script from "next/script";

export const metadata = {
  title: "Projeto Prevenus",
  description: "Prevenção de Doenças Ocupacionais em Informática",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        {/* Google Tag Manager Script */}
        <Script 
          id="google-tag-manager" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','G-C954W9XDEG');
            `,
          }}
        />
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-C954W9XDEG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* Fim Google Tag Manager (noscript) */}

        {/* Estrutura principal */}
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}