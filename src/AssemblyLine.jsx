import React, { useState } from "react"
import PropTypes from "prop-types"
import ItemContainer from "./ItemContainer"

function AssemblyLine({ stages }) {
  const [inputValue, setInputValue] = useState("")
  const [items, setItems] = useState([])

  const handleInputValueChange = e => {
    setInputValue(e.target.value)
  }

  const handleAddItem = e => {
    e.preventDefault()
    // implemented no duplicates
    if (items.find(({ value }) => value === inputValue)) {
      alert("Item already in list")
      return
    }
    // newly added item is prepended to the list. stage name is tracked on the item
    setItems([{ stage: stages[0], value: inputValue }, ...items])
    setInputValue("")
  }
  // in case the stage array is empty
  if (stages.length === 0) {
    return <h1>No stages to display</h1>
  }
  // if we got some stages to work with
  return (
    <>
      <h1 className="title">Assembly Line</h1>
      {/* add item form */}
      <form onSubmit={handleAddItem}>
        <label htmlFor="addItem" className="item-label">
          Add an item:{" "}
        </label>
        <input
          className="assembly-add-item"
          value={inputValue}
          type="text"
          id="addItem"
          onChange={handleInputValueChange}
        />
      </form>
      <hr className="div-line" />
      {/* stages and items */}
      <section className="stage-container">
        {stages.map((stage, i) => {
          return (
            <div className="assembly-stage" key={i}>
              {stage}
              <ItemContainer
                items={items}
                setItems={setItems}
                stage={stage}
                stages={stages}
              />
            </div>
          )
        })}
      </section>
    </>
  )
}

PropTypes.AssemblyLine = {
  stages: PropTypes.array.isRequired
}

export default AssemblyLine
