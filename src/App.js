import "./App.css";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-red-500 text-center">Hello Dojo!</h1>
        <h3 className="text-blue-600 text-center">Things I need to do:</h3>
        <p>* Learn React</p>
        <p>* Climb Mt Everest</p>
        <p>* Run a marathon</p>
        <p>* Feed the dogs</p>
        <a
          className="btn border-2 shadow-md bg-blue-400 rounded border-solid border-blue-600 hover:bg-blue-900 hover:border-blue-900 hover:text-white m-1 p-2 hover:shadow-lg "
          href="/"
        >
          Go Here
        </a>
      </header>
    </div>
  );
}

export default App;
