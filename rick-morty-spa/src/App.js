import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="App">
      <h1 className="text-start raleway my-3 mx-3">Rick and Morty SPA</h1>

      <div className="container">
        <div className="row">
          <div className="col-10">
            <div className="row">
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
