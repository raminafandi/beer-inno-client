import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux';
import { getAsyncBeers } from '../redux/slices/beersSlice';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Home = () => {
    const beers = useAppSelector(state => state.beers.beers)
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(getAsyncBeers());
    }, [])

    console.log(beers)

    return (
        <div>
            <div>Home</div>

            <DataTable value={beers} paginator rows={10}  >
                <Column field="id" header="Id" />
                <Column field="name" header="Name" />
                <Column field="tagline" header="Tagline" />
                <Column field="first_brewed" header="First brewed" />
                <Column field="description" header="Description" />
                <Column field="image_url" header="Image url" />
                <Column field="abv" header="Abv" />
                <Column field="ibu" header="Ibu" />
                <Column field="target_fg" header="Target fg" />
                <Column field="target_og" header="Target og" />
                <Column field="ebc" header="Ebc" />
            </DataTable>

        </div>
    )
}

export default Home