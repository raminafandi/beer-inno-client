import React, { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Chip } from 'primereact/chip';
import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import { useAppDispatch, useAppSelector } from '../redux';
import { BeerType } from '../types';
import { Image } from 'primereact/image';
import { onChangeFavorite } from '../redux/slices/beersSlice';
import Row from '../components/Row';

const Detailed = () => {
    const params = useParams();
    const beerId = parseInt(params.id || '');
    const beers = useAppSelector(state => state.beers.beers)
    const favorites = useAppSelector(state => state.beers.favorites)
    const [data, setData] = React.useState<BeerType>();
    const dispatch = useAppDispatch()
    const [isFavorite, setIsFavorite] = React.useState(favorites.includes(beerId));
    useEffect(() => {
        if (beerId && beers.length) {
            const beer = beers.find(b => b.id === beerId);
            setData(beer);
        }
    }, [beerId, beers])

    const onClickButton = useCallback(() => {
        dispatch(onChangeFavorite(beerId))
        setIsFavorite(!isFavorite)
    }, [isFavorite, beerId, dispatch]);

    return (
        <div className="container p-6">
            <div className='p-2'>
                <Image className="img" src={data?.image_url} height="300" />
            </div>
            <div className='p-2'>
                <Button label={isFavorite ? "Favorite" : "Add to favorites"} className={isFavorite ? 'p-button-warning' : 'p-button-outlined p-button-warning'} icon="pi pi-star" iconPos="right" onClick={() => onClickButton()} />
            </div>
            <div className="surface-0">
                <div className="font-medium text-3xl text-900 mb-3">{data?.name}</div>
                <ul className="list-none p-0 m-0">
                    <Row title="Name" value={data?.name} />
                    <Row title="Tagline" value={data?.tagline} />
                    <Row title="Description" value={data?.description} />
                    <Row title="First brewed" value={data?.first_brewed} />
                    <Row title="IBU" value={data?.ibu} />
                    <Row title="ABV" value={data?.abv} />
                    <Row title="PH" value={data?.ph} />
                    <Row title="Attenuation level" value={data?.attenuation_level} />
                    <Row title="Target FG" value={data?.target_fg} />
                    <Row title="Target OG" value={data?.target_og} />
                    <Row title="Volume" value={`${data?.volume.value} ${data?.volume.unit}`} />
                    <Row title="Boil Volume" value={`${data?.boil_volume.value} ${data?.boil_volume.unit}`} />
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Food Pairings</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                            {data?.food_pairing.map((food, index) => {
                                return <Chip key={index} className="m-1" label={food} />
                            })}
                        </div>
                    </li>
                    <Row title="Brewers tips" value={data?.brewers_tips} />
                </ul>
            </div>
        </div>
    )
}

export default Detailed