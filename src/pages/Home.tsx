import React from 'react'
import { Link } from 'react-router-dom'
import api from '../api'

const Home = () => {
    const [data, setData] = React.useState<"loading" | any[] | "nodata">("loading")
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        (async () => {
            const comingData = await api.beer.getBeers();
            if (comingData.length > 0) {
                setData(comingData)
            }
            else {
                setData("nodata")
            }
        }
        )()
        console.log(data)
    }, [])

    let content;
    switch (data) {
        case "loading":
            content = <div>Loading...</div>
            break;
        case "nodata":
            content = <div>No data</div>
            break;
        default:
            content = data.map((item: any) => {
                return <li key={item.id}>
                    <Link to={`/${item.id}`}>{item.name}</Link>
                </li>
            })
    }

    return (
        <div>
            <div>Home</div>
            <ul>
                {content}
            </ul>
        </div>
    )
}

export default Home