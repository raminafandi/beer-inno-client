import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux';
import { getAsyncBeers, onChangeFavorite } from '../redux/slices/beersSlice';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Image } from 'primereact/image';


const Home = () => {
    const beers = useAppSelector(state => state.beers.beers)
    const favorites = useAppSelector(state => state.beers.favorites)
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        !beers.length && dispatch(getAsyncBeers());
    }, [])

    const imageBody = (rowData: any) => {
        const image = rowData.image_url ? rowData.image_url : 'https://via.placeholder.com/150';
        return (<Image className="table-img" src={image} height="100" />)
    }

    const favoriteBody = (rowData: any) => {
        const beerId = rowData.id;
        const isFavorite = favorites.includes(beerId);
        return (
            <i className={`pi ${isFavorite ? 'pi-star-fill' : 'pi-star'}`} color={"#fccc55"} style={{ fontSize: 32 }} onClick={(e) => {
                e.stopPropagation();
                dispatch(onChangeFavorite(beerId))
            }}>
            </i>
        )
    }
    const navigate = useNavigate();

    return (
        <div>
            <div className="card">
                <DataTable value={beers} paginator rows={10} stripedRows showGridlines responsiveLayout={"stack"} onRowClick={(e) => navigate(`/${e.data.id}`)}>
                    <Column field="id" header="Id"></Column>
                    <Column field="image_url" header="Image" body={imageBody}></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="tagline" header="Tagline"></Column>
                    <Column field="first_brewed" header="First brewed"></Column>
                    <Column field="description" header="Description"></Column>
                    <Column field="favorite" header="Favorite" body={favoriteBody} ></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default Home