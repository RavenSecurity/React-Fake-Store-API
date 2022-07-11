import Product from "./Product"
import Filter from "./Filter";

function App() {

  return (
    <div className="App ">
      <header className="App-header bg-blue-200">
        <p className="text-3xl font-bold text-center p-3">
          Fake Store
        </p>
      </header>

      <div className="flex">
        <Filter className=''/>
      <Product className=""/>
      </div>
      
    </div>
  );
}

export default App;