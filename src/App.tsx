import "./App.css";

function App() {
  return (
    <div className="Dashboard">
      <header className="Dashboard-header">
        <h1 className="text-2xl font-bold underline">
          Welcome to Demo React App!
        </h1>
      </header>
      <button
        className="Dashboard-button"
        onClick={() => alert("Button clicked!")}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
