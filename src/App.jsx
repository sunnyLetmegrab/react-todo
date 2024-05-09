import './App.css'

function App() {


  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 col-span-2">01</div>
        <div class="col-span-1">01</div>
        <div class="row-span-2 col-span-1">03</div>
      </div>
    </>
  )
}

export default App
