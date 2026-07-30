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
            background: "#0f172a",
            color: "#fff",
            border: "1px solid rgba(34,211,238,.2)",
            borderRadius: "16px",
            padding: "16px",
            fontSize: "15px",
          },
          success: {
            iconTheme: {
              primary: "#22d3ee",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
    </ThemeProvider>
  </React.StrictMode>,
);
