export type BeerType = {
    id: number,
    name: string,
    tagline: string,
    first_brewed: string,
    description: string,
    image_url: string,
    abv: number,
    ibu: number,
    target_fg: number,
    target_og: number,
    ebc: number,
    srm: number,
    ph: number,
    attenuation_level: number,
    volume: {
        value: number,
        unit: string
    },
    boil_volume: {
        value: number,
        unit: string
    },
    food_pairing: string[],
    brewers_tips: string,
}

export type RowProps = {
    title: string,
    value: string | number | boolean | undefined,
}