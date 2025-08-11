import React from "react";

const Table=({tableData,handleEdit,handleDelete})=>{
    return(
        <table className="w-full mt-6 border">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Action</th>
                </tr>
            </thead>
            <tbody>{tableData.map((data,index)=>{
                return(
                <tr key={index}>
                    <td className="border border-gray-300 bg-white px-4 py-2">{data.name}</td>
                    <td className="border border-gray-300 bg-white px-4 py-2">{data.email}</td>
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