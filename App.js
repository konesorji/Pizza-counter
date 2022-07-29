import "./App.css";
import Pizza from "./Pizza";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pizza Order</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Pizza counter" />
      </Helmet>
      <header className="App-header">
        <Pizza />
      </header>
    </div>
  );
}

export default App;
