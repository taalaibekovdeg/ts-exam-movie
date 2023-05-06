export interface IPopularState {
    id: number;
    title: string;
    name: string;
    poster_path: string;
    total_pages: number;

}

export interface ITopRared {
    id: number;
    title: string;
    name: string;
    poster_path: string;
}

export interface IDetailPage {
    id: number;
    title: string;
    release_date: number;
    runtime: any;
    vote_average  : any;
    overview: string;
    // profile_path: string;
    backdrop_path: string;
    poster_path : string;
}

export interface IGetActors {
    profile_path: string;
    id: number;
    title:string;
    name:string; 
}
export interface IActorsInform {
    biography: string,
    id: number;
    name:string;
    original_name:string
    profile_path: string,
    birthday: string,
    place_of_birth: string,
    
}

export interface ITrailer {
    name: string;
    key: string;
}

export interface IActorMovies {
    id: number;
    title: string;
    poster_path: string
}
export interface ISearch {
    title: string;
    id: number,
    poster_path: string
}
