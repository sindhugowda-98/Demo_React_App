import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import LandingPage from "./Home/LandingPage";
import UserLogin from "./Login/UserLogin";

type Page = "home" | "login" | "dashboard";

function App() {
  const [page, setPage] = useState<Page>("home");
  const [username, setUsername] = useState("admin");

  const navigate = (nextPage: Page) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (page === "login") {
    return (
      <UserLogin
        onBack={() => navigate("home")}
        onLogin={(signedInUsername) => {
          setUsername(signedInUsername);
          navigate("dashboard");
        }}
      />
    );
  }

  if (page === "dashboard") {
    return <Dashboard username={username} onLogout={() => navigate("home")} />;
  }

  return <LandingPage onLogin={() => navigate("login")} />;
}

export default App;
