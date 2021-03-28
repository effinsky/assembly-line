import React from "react"
import AssemblyLine from "./AssemblyLine"
import stages from "./data.json"

/* Changes made to this file will not affect your tests.
 * This file is used to control the behavior of the web preview.
 */

function App() {
  return (
    <div id="app">
      <AssemblyLine stages={stages} />
    </div>
  )
}

export default App
