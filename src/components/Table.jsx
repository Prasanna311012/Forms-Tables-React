import React from "react";

const Table=({tableData,handleEdit,handleDelete})=>{
    return(
        <table className="w-full mt-6 border">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">Task Name</th>
                    <th className="border p-2">Description</th>
                    <th className="border p-2">Date</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Action</th>
                </tr>
            </thead>
            <tbody>{tableData.map((data,index)=>{
                return(
                <tr key={index}>
                    <td className="border border-gray-300 bg-white px-4 py-2">{data.name}</td>
                    <td className="border border-gray-300 bg-white px-4 py-2">{data.description}</td>
                    <td className="border border-gray-300 bg-white px-4 py-2">{data.date}</td>
                    <td className="border border-gray-300 bg-white px-4 py-2">{data.status}</td>
                    <td className="border border-gray-300 bg-white px-4 py-2">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={()=>{
                            handleEdit(index)
                        }}>Edit</button>
                        <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
                        onClick={()=>{
                            handleDelete(index)
                        }}
                        >Delete</button>
                    </td>
                </tr>
                )
            })}</tbody>
        </table>
    )
}

export default Table;