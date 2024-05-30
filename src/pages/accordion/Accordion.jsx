import React, { useState } from 'react'
import data from './data';
import "./accordion.css"

function Accordion() {
  const [multipleSelected, setMultiple] = useState([]);
  const [selected, setSelected] = useState(null)
  const [enableMultSelection, SetMultiSelection] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multipleSelected];
    const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId)
    if (findIndexofCurrentId === -1) cpyMultiple.push(getCurrentId)
    else cpyMultiple.splice(findIndexofCurrentId, 1)
    setMultiple(cpyMultiple)
  }

  return (
    <div className='wrapper'>
      <button onClick={() => SetMultiSelection(!enableMultSelection)}>Enable MultSelection</button>
      <div className="accordion">
        {data && data.length > 0 ? data.map(datItem =>
          <div className='item' key={datItem.id}>
            <div onClick={enableMultSelection ? () => handleMultiSelection(datItem.id) : () => handleSingleSelection(datItem.id)} className='title'>
              <h3 className='text-lg md:text-xl lg:text-2xl'> {datItem.question} </h3>
              <span className='text-xl md:text-2xl lg:text-3xl'>+</span>
            </div>
            {enableMultSelection ? multipleSelected.indexOf(datItem.id) !== -1 && (
              <div className='content py-2 md:py-4'>{datItem.answer}</div>
            ) : selected === datItem.id && (
              <div className='content py-2 md:py-4'>{datItem.answer}</div>
            )}
          </div>
        ) : <div> No data found !</div>}
      </div>
    </div>
  )
}

export default Accordion;