import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux';
import { getAsyncBeers } from '../redux/slices/beersSlice';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Image } from 'primereact/image';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

const Home = () => {
    const beers = useAppSelector(state => state.beers.beers)
    const favorites = useAppSelector(state => state.beers.favorites)
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(getAsyncBeers());
    }, [])

    const imageBody = (rowData: any) => {
        const image = rowData.image_url ? rowData.image_url : 'https://via.placeholder.com/150';
        return (<Image className="table-img" src={image} height="100" />)
    }

    console.log(beers)

    return (
        <div>
            <div className="card">
                <DataTable value={beers} paginator rows={10} stripedRows showGridlines responsiveLayout={"stack"}>
                    <Column field="id" header="Id" ></Column>
                    <Column field="image_url" header="Image" body={imageBody}></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="tagline" header="Tagline"></Column>
                    <Column field="first_brewed" header="First brewed"></Column>
                    <Column field="description" header="Description"></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default Home