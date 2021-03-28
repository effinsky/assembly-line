import React from "react"
import AssemblyLine from "./AssemblyLine"
import stages from "./data.json"

function App() {
  return (
    <div id="app">
      <AssemblyLine stages={stages} />
    </div>
  )
}

export default App
