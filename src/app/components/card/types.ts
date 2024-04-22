export interface StatisticData {
    base_stat?: number
    effort: number
    stat_name?: string
    stat_url?: string
}

export interface Category {
    slot: number
    type: {
        name: string
        url: string
    } 
}

export interface Status {
    name: string
    url: string
}

export interface PokeInfo {
    id: number
    name: string 
    image: string
    categories: Category
    stats: StatisticData
}

export interface TermSearch {
    query: string;
}