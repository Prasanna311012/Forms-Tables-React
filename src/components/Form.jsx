import React from "react";

const Form=({formData,handleFormDataChange,handleSubmit,editIndex})=>{
    return(
        <>
        <h1 className="text-2xl font-semibold mb-4 bg-white rounded p-2">Task Management</h1>
        <form className="border rounded-lg p-4 bg-teal-100" onSubmit={handleSubmit}>
            <input className="w-full p-2 border rounded mb-2" type="text" placeholder="Task Name" required
            value={formData.name}
            onChange={(e)=>{
                const {value}=e.target;
                handleFormDataChange("name",value);
            }}
            ></input>
            <textarea className="w-full p-2 border rounded mb-2" placeholder="Description" type="text" value={formData.description}
             onChange={(e)=>{
                const {value}=e.target;
                handleFormDataChange("description",value);}}
            ></textarea>
             <input className="w-full p-2 border rounded mb-2" type="date" required
            value={formData.date}
            onChange={(e)=>{
                const {value}=e.target;
                handleFormDataChange("date",value);
            }}
            ></input>
            <select className="w-full p-2 border rounded mb-2" value={formData.status}
             onChange={(e)=>{
                const {value}=e.target;
                handleFormDataChange("status",value);}}>
                <option>Status</option>
                <option>Pending</option>
                <option>In Progrees</option>
                <option>Completed</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">{editIndex == null?"Add Task" : "Update Task"}</button>
        </form>
        </>
    )
}
export default Form;