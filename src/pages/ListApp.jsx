import React, { useState } from 'react'
import AddTask from '../components/AddTask'

const TableRowContent = ({n, title, state}) => {
  return(
    <>
      <tr>
        <td>{n}</td>
        <td>{title}</td>
        <td>{state ? '✅' : '❌'}</td>
      </tr>
    </>
  )
}

const Table01 = () => {
  return(
    <>
      <table border={2} borderColor="red" >
        <thead>
          <tr>
            <th>N°</th>
            <th>Title</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          <TableRowContent n='1' title="Instalaciones necesarias" state={true}/>
          <TableRowContent n='2' title="Uso de Vite" state={true}/>
          <TableRowContent n='3' title="Componentes" state={false}/>
          <TableRowContent n='4' title="Variables en JSX" state={true}/>
          <TableRowContent n='5' title="Props" state={true}/>
          <TableRowContent n='6' title="Eventos" state={false}/>
          <TableRowContent n='7' title="useState" state={false}/>
          <TableRowContent n='8' title="Redux" state={true}/>
          <TableRowContent n='9' title="customHooks" state={true}/>  
        </tbody>
      </table>
    </>
  )
}

const Table02 = () => {
  const data = [
    { title:"Instalaciones necesarias", state:true},
    { title:"Uso de Vite", state:true},
    { title:"Componentes", state:false},
    { title:"Variables en JSX", state:true},
    { title:"Props", state:true},
    { title:"Eventos", state:false},
    { title:"useState", state:false},
    { title:"Redux", state:true},
    { title:"customHooks", state:true}
  ]

  const [array, setArray] = useState(data);

  const handleClick = (e) =>{
    setArray([...array, {title: "New Element", state: false}])
  }
  return(
    <>
      <table border={2} bordercolor="red" >
        <thead>
          <tr>
            <th>N°</th>
            <th>Title</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item,index) => <TableRowContent key={index} n={index+1} title={item.title} state={item.state}/>  )}
        </tbody>
      </table>
      <AddTask setArray={setArray}></AddTask>
      <button onClick={(e)=>handleClick(e)}>Add Element</button>
    </>
  )
}


const ListApp = () => {
  return (
    <>
      <Table02></Table02>
    </>
  )
}

export default ListApp