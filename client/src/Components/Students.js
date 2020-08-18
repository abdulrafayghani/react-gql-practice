import React from 'react'
import { useQuery, gql, useMutation } from "@apollo/client";

const GET_STUDENTS = gql `
    query GetAllStudents {
        students {
            id,
            name,
            email,
            age
        }
    }
`

const ADD_STUDENTS = gql `
    mutation AddStudents($id: Int!, $name: String!, $email: String!, $age: Int!) {
        addStudent(
            input: {id: $id, name: $name, email: $email, age: $age}
        ){
            id 
            name
        }
    }
`
export const Students = () => {
    const { loading, error, data  } = useQuery(GET_STUDENTS)
    const  [ addStudent ]  = useMutation(ADD_STUDENTS)

    if (loading)
        return <h1>Loading ...</h1>

    if (error)
        return <h1>Error</h1>    
        let { students } = data

    return (
        <div>
            <h1>Student List</h1>
            <table border="2" width="500">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(std => {
                            return (<tr key={std.id}>
                                <td>{std.name}</td>
                                <td>{std.age}</td>
                                <td>{std.email}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            <button onClick={()=>
                addStudent({
                    variables: {
                        id: 15, email: "temp2@gmail", age: 23, name: "Student 1"
                    },
                    // refetchQueries: [{ query: GET_STUDENTS }]
                    })}>
                        Add Student
            </button>
        </div>
    );
    
}
