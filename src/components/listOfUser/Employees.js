import React from 'react'

export default function Employees(props) {
    const list = props.employeesList;
    const listElements = list.map(emp)

  return (
    <div>Employees</div>
  )
}
