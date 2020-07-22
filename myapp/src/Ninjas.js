import React, { Component } from 'react';

//functional component (no state)
const Ninjas = ({ninjas, deleteNinja}) => {
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 3 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button onClick={ () => {deleteNinja(ninja.id)} }>Delete ninja</button>
      </div>
    ) : null;
  }) 
  return (
    <div className="ninja-list">
      { ninjaList }
    </div>
  )
}

export default Ninjas;