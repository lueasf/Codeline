import Tabs from "./components/Tabs"

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <div className="px-4 py-4 border-b flex items-center">
        <h1 className="w-full text-slate-50 text-4xl">IDEx</h1>
        <div className="w-full">
          <button>Montrer la preview</button>
        </div>
      </div>
      <Tabs/>
    </div>
  )
}

export default App
