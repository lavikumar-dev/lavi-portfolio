import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import ThemeProvider from "./personalization/ThemeProvider";
import App from "./App";

import "./index.css";
import "./personalization/themes.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          duration: 3500,
          style: {
            background: "var(--surface-strong)",
            color: "var(--text-primary)",
            border: "1px solid var(--border)",
            borderRadius: "var(--surface-radius)",
            padding: "16px",
            fontSize: "15px",
            boxShadow: "var(--surface-shadow)",
          },
        }}
      />
    </ThemeProvider>
  </React.StrictMode>
);
