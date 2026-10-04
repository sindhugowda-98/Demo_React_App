import React, { FormEvent, useState } from "react";
import Brand from "../Components/Brand";
import Button from "../Components/Button";
import Input from "../Components/Input";

interface UserLoginProps {
  onBack: () => void;
  onLogin: (username: string) => void;
}

const UserLogin: React.FC<UserLoginProps> = ({ onBack, onLogin }) => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username.trim().toLowerCase() === "admin" && password === "admin123") {
      onLogin(username.trim());
      return;
    }
    setError("That username or password doesn’t match. Try the demo credentials below.");
  };

  return (
    <main className="login-page">
      <button className="back-link" type="button" onClick={onBack}>
        <span aria-hidden="true">←</span> Back to home
      </button>
      <div className="login-layout">
        <section className="login-story">
          <Brand light />
          <div className="login-story-copy">
            <span className="eyebrow">WELCOME TO STABILBLEND</span>
            <h1>Better blends.<br /><em>Brighter futures.</em></h1>
            <p>Thoughtful biotechnology for a healthier, more sustainable world.</p>
          </div>
          <div className="login-orbit orbit-one" />
          <div className="login-orbit orbit-two" />
        </section>
        <section className="login-panel">
          <div className="login-form-wrap">
            <span className="eyebrow">YOUR WORKSPACE</span>
            <h2>Welcome back</h2>
            <p className="muted">Sign in to continue to your dashboard.</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <Input
                id="username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Enter your username"
                required
              />
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                required
              />
              {error && <p className="form-error" role="alert">{error}</p>}
              <Button label="Login" type="submit" className="button button-primary button-wide" />
            </form>
            <div className="demo-note">
              <span className="demo-lock">✦</span>
              <span><b>Demo access</b><br />Username: admin &nbsp;·&nbsp; Password: admin123</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UserLogin;
