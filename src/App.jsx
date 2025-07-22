import { useState, useEffect } from "react";
import { employeeData } from "./EmployeeData";

function App() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  // Initializing state with employee data
  useEffect(() => {
    setData(employeeData)
  },[]);

  const handleEdit = (id) => {
    const dt = data.filter(item => item.id === id)
    if(dt !== undefined)
      {
        setIsUpdate(true)
    setId(dt[0].id)
    setFirstName(dt[0].firstName)
    setLastName(dt[0].lastName)
    setAge(dt[0].age)
  }
}

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure you want to delete this record?")){
      const dt = data.filter(item => item.id !== id);
      setData(dt);
    }
  }
  };


  const handleSave = () => {
     
  }

  const handleUpdate = () => {
     
  }

  const handleClear = () => {
    setIsUpdate(false)
    setId(0)
    setFirstName('')
    setLastName('')
    setAge('')
  }

  return (
    <>
      <div className="App">
        <div className="flex justify-center my-3 ">
          <div>
            <label htmlFor="">First Name: 
              <input className="border rounded-sm pl-1" type="text" placeholder="Enter First name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            </label>
          </div>
          <div>
            <label htmlFor="">Last Name: 
              <input className="border rounded-sm pl-1" type="text" placeholder="Enter Last name" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
            </label>
          </div>
          <div>
            <label htmlFor="">Age: 
              <input className="border rounded-sm pl-1" type="text" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} value={age}/>
            </label>
          </div>
          <div>
            {
              isUpdate ? 
              <button className="bg-blue-500 rounded-sm m-2 px-2" onClick={() => handleUpdate()}> Update</button>
              :
              <button className="bg-blue-500 rounded-sm m-2 px-2" onClick={() => handleSave()}> Save</button>
            }
            <button className="bg-red-700 rounded-sm m-2 px-2"onClick={() => handleClear()} > Clear</button>
          </div>
        </div>


        <table className="table-auto w-full text-center border border-gray-300">
          <thead>
            <tr className="hover:bg-gray-300">
              <td>Sr.No</td>
              <td>Id</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>age</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index} className="hover:bg-gray-200"> 
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>
                    <button
                      className="bg-blue-500 rounded-sm m-2 px-2"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-700 rounded-sm m-2 px-2"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
