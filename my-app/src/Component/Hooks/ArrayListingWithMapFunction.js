import React from 'react'

function ArrayListingWithMapFunction() {
    const students = [
        { name: "anil", email: "ram@gmail.com", phone: "84651" },
        { name: "hima", email: "ram@gmail.com", phone: "84651" },
        { name: "sagar", email: "ram@gmail.com", phone: "84651" },
        { name: "rahu", email: "ram@gmail.com", phone: "84651" },
    ]
    return (
        <>
            <table className='table table-bordered' >
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                {
                    students.map((data, i) =>
                        <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>

                        </tr>

                    )
                }
            </table>
        </>
    )
}

export default ArrayListingWithMapFunction