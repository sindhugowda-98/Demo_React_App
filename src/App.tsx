import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import LandingPage from "./Home/LandingPage";
import ProductsPage from "./Home/ProductsPage";
import UserLogin from "./Login/UserLogin";

type Page = "home" | "login" | "dashboard" | "products";

function App() {
  const [page, setPage] = useState<Page>("home");
  const [username, setUsername] = useState("admin");
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>();

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

  if (page === "products") {
    return (
      <ProductsPage
        onHome={() => navigate("home")}
        onLogin={() => navigate("login")}
        initialProductId={selectedProductId}
      />
    );
  }

  return (
    <LandingPage
      onLogin={() => navigate("login")}
      onProducts={(productId) => {
        setSelectedProductId(productId);
        navigate("products");
      }}
    />
  );
}

export default App;
