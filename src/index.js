import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import  "./service-worker"; 

// Verifique se o navegador suporta service workers
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js") // Caminho para o seu arquivo service-worker.js
      .then((registration) => {
        console.log("Service Worker registrado com sucesso:", registration);
      })
      .catch((error) => {
        console.error("Erro ao registrar o Service Worker:", error);
      });
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
