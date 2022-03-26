import React, { useEffect } from 'react'
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

const Detailed = () => {
    const params = useParams();
    const beerId = parseInt(params.id || '');
    const beers = useAppSelector(state => state.beers.beers)
    const favorites = useAppSelector(state => state.beers.favorites)
    const [data, setData] = React.useState<BeerType>();
    const dispatch = useAppDispatch()
    const [isFavorite, setIsFavorite] = React.useState(favorites.includes(beerId));
    useEffect(() => {
        if (params.id && beers.length) {
            const beer = beers.find(b => b.id === beerId);
            setData(beer);
        }
    }, [params.id, beers])

    const onClickButton = () => {
        dispatch(onChangeFavorite(beerId))
        setIsFavorite(!isFavorite)
    }

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
                    <li className="flex align-items-center py-2 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Title</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data?.name}</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Tagline</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data?.tagline}</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">First Brewed</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data?.first_brewed}</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Description</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data?.description}</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">ABV</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data?.abv}</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">IBU</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data?.ibu}</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Target FG</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data?.target_fg}</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Target OG</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data?.target_og}</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">PH</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data?.ph}</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Attenuation Level</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{data?.attenuation_level}</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Food Pairings</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                            {data?.food_pairing.map((food, index) => {
                                return <Chip key={index} className="m-1" label={food} />
                            })}
                        </div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Volume</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{`${data?.volume.value} ${data?.volume.unit}`}</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Boil Volume</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{`${data?.boil_volume.value} ${data?.boil_volume.unit}`}</div>
                    </li>
                    <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 border-300 flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Brewers Tips</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                            {data?.brewers_tips}
                        </div>
                    </li>
                </ul>
            </div>
            {/* <div>
                <p>{}</p>
                <p>{}</p>
                <p>{data?.description}</p>
                <p>{data?.first_brewed}</p>
                <p>ABV: {data?.abv}</p>
                <p>IBU: {data?.ibu}</p>
                <p>{data?.first_brewed}</p>
            </div> */}
        </div>
    )
}

export default Detailed