import React, {useState} from 'react';

export default function NewComponent(){
    const [components, addComponent] = useState(['1', '2']);
    function handleAddComponent(){
      // components.push(`3 ${Date.now}`)
      addComponent([...components, `3 ${Date.now()}`])
      console.log(components)
    }
  return (
    <>
    <h1>Novo componente</h1>
      {components.map(component => <div key={component}>{component}</div>)}
      <input type="button"  onClick={handleAddComponent} value="Add Component"/>
    </>
  )
}