import React from "react";

const Form=({formData,handleFormDataChange,handleSubmit,editIndex})=>{
    return(
        <>
        <h1 className="text-2xl font-semibold mb-4 bg-white rounded p-2">Forms and Tables</h1>
        <form className="border rounded-lg p-4 bg-teal-100" onSubmit={handleSubmit}>
            <input className="w-full p-2 border rounded mb-2" type="text" placeholder="Name" required
            value={formData.name}
            onChange={(e)=>{
                const {value}=e.target;
                handleFormDataChange("name",value);
            }}
            ></input>
            <input className="w-full p-2 border rounded mb-2" type="email" placeholder="Email" required
            value={formData.email}
            onChange={(e)=>{
                const {value}=e.target;
                handleFormDataChange("email",value);
            }}
            ></input>
            <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">{editIndex == null?"Add" : "Update"}</button>
        </form>
        </>
    )
}
export default Form;