import "./styles.css";

export default function App() {
  const handlerTheme = () => {
    document.body.classList.toggle("dark-theme");
  };

  return (
    <div data-testid="app-test" className="App dark-theme || light-theme">
      <h1>Hello CodeSandbox!</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        data-testid="theme-button"
        className="btn-toggle"
        onClick={handlerTheme}
      >
        Change theme
      </button>
    </div>
  );
}
