import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <p className='text-black'>asdssasd</p>
        <button className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
          onClick = {() => console.log("Tailwind je ready!!")}
        >
          Button
      </button>
      </header>
    </div>
  );
}

export default App;
