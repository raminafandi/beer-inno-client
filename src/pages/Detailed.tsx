import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detailed = () => {
    const params = useParams();
    useEffect(() => {

    }, [params.id])
    return (
        <div>Detailed</div>
    )
}

export default Detailed