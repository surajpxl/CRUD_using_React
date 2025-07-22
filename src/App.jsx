import { useState, useEffect } from 'react'
import { employeeData } from './EmployeeData'

function App() {
  const [data, SetData] = useState([]);

  useEffect(() => {
    SetData(employeeData)
  })

  return (
   <>
   <div className='App'>
    <table className='table-auto w-full text-center border border-gray-300'>
      <thead>
        <tr className='hover:bg-gray-300'>
          <td>Sr.No</td>
          <td>Id</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>age</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, index) => {
            return (
              <tr key={index} className='hover:bg-gray-200'>
                <td>{index+ 1}</td>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                  <button className='bg-blue-500 rounded-sm m-2 px-2'>Edit</button>
                  <button className='bg-red-700 rounded-sm m-2 px-2
                  '>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
   </div>
   </>
  )
}

export default App
