import PropTypes from "prop-types"
import React from "react"

function ItemContainer({ items, setItems, stage, stages }) {
  const handleMoveRight = e => {
    const valueToMove = e.target.textContent

    if (stage === stages[stages.length - 1]) {
      setItems(() => items.filter(item => item.value !== valueToMove))
    } else {
      // this will cause the item to be rendered with a subsequent stage
      const moddedItem = items.find(item => item.value === e.target.textContent)
      const currentStageIndex = stages.findIndex(s => s === stage)
      moddedItem.stage = stages[currentStageIndex + 1]

      //remove modded item to then prepend it
      const moddedItemIndex = items.findIndex(
        item => item.value === moddedItem.value
      )
      items.splice(moddedItemIndex, 1)
      setItems([moddedItem, ...items])
    }
  }

  const handleMoveLeft = e => {
    e.preventDefault()
    const valueToMove = e.target.textContent

    if (stage === stages[0]) {
      setItems(() => items.filter(item => item.value !== valueToMove))
    } else {
      const moddedItem = items.find(item => item.value === e.target.textContent)
      const currentStageIndex = stages.findIndex(s => s === stage)
      moddedItem.stage = stages[currentStageIndex - 1]

      const moddedItemIndex = items.findIndex(
        item => item.value === moddedItem.value
      )
      // remove modded item and then append it
      items.splice(moddedItemIndex, 1)
      setItems([...items, moddedItem])
    }
  }

  return (
    <section className="assembly-item-container">
      {items
        .filter(item => item.stage === stage)
        .map((item, i) => {
          return (
            <button
              className="assembly-item"
              key={i}
              onClick={handleMoveRight}
              onContextMenu={handleMoveLeft}>
              {item.value}
            </button>
          )
        })}
    </section>
  )
}

PropTypes.ItemContainer = {
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
  stages: PropTypes.array.isRequired,
  stage: PropTypes.string.isRequired
}

export default ItemContainer
