import React from 'react'

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
          <TableRowContent n='1' title="Instalaciones necesarias" state={true}/>
          <TableRowContent n='2' title="Uso de Vite" state={true}/>
          <TableRowContent n='3' title="Componentes" state={false}/>
          <TableRowContent n='4' title="Variables en JSX" state={true}/>
          <TableRowContent n='5' title="Props" state={true}/>
          <TableRowContent n='6' title="Eventos" state={false}/>
          <TableRowContent n='7' title="useState" state={false}/>
          <TableRowContent n='8' title="Redux" state={true}/>
          <TableRowContent n='9' title="customHooks" state={true}/>  
        <tbody></tbody>
      </table>
    </>
  )
}

const ListApp = () => {
  return (
    <>
      <Table01></Table01>
    </>
  )
}

export default ListApp