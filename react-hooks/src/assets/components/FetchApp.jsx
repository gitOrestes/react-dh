import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"

export const FetchApp = () => {

    const url = "https://jsonplaceholder.typicode.com/users"

    const {data, isLoading, error, fetchData} = useFetch()

    useEffect(() => {
        fetchData(url, 'GET')
      }, [])
    

    return (
        <>
            <h2>Lista de usuario: </h2>
            {isLoading ? <h4>cargando</h4>
                : error
                    ? <h4>ha ocurrido un error: {error}</h4>
                    :
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(elem => {
                                    return(
                                    <tr key={elem.id}>
                                    <th scope="row">{elem.id}</th>
                                    <td>{elem.name}</td>
                                    <td>{elem.email}</td>
                                    <td>{elem.website}</td>
                                </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            }
        </>
    )
}
