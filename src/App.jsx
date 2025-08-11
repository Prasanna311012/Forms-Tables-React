import { useState } from "react"
import Form from "./components/Form"
import Table from "./components/Table"
function App() {
  const initialFormData = {
    name: "",
    email: ""
  }
  const [formData, setFormData] = useState(initialFormData)
  const [tableData, setTableData] = useState([])
  const [editIndex, setEditIndex]=useState(null)

  const handleFormDataChange = (key, value) => {

    setFormData({
      ...formData,
      [key]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(editIndex==null){
      setTableData([
      ...tableData, formData])
    setFormData(initialFormData)
    }
    else{
      tableData[editIndex]=formData
      setFormData(initialFormData)
      setTableData(tableData)
      setEditIndex(null)
    }
  }

  const handleEdit = (index) => {
    console.log("edit clicked row", index)

    const clickedItems=tableData[index]
    setFormData(clickedItems)
    setEditIndex(index)
  }

  const handleDelete=(index)=>{
    tableData.splice(index,1)

    setTableData([...tableData])
  }

  return (
    <div className="p-6 mx-auto max-w-2xl bg-blue-300 mt-5 rounded shadow-xl">
      <Form formData={formData}
        handleFormDataChange={handleFormDataChange}
        handleSubmit={handleSubmit}
        editIndex={editIndex}
      />
      <Table tableData={tableData}
       handleEdit={handleEdit}
       handleDelete={handleDelete} />
    </div>
  )
}

export default App
