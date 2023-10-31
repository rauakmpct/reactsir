import React, { useEffect, useState } from 'react'

function GetApi() {
    const [users, SetUser] = useState([])

    const fatchUserData = () => {
        // fetch('http://localhost:4000/api/getalluser')
        fetch('https://apiecommercee.onrender.com/api/getalluser')

            .then((response) => {
                return response.json()
            })
            .then((data) => {
                SetUser(data.users)
            })
    }
    useEffect(() => {
        fatchUserData()
    }, [])
    // console.log(users)
    return (
        <>

            <table className='table table-bordered' >
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Image</th>
                </tr>
                {
                    users.map((data, i) =>
                        <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>
                                <img src={data.image.url} width={200} alt="" />
                            </td>
                        </tr>

                    )
                }
            </table>

            {/* {users.length > 0 && (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name} </li>
                    ))}
                </ul>
            )} */}


        </>
    )
}

export default GetApi