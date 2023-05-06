import { AppDispatch } from '../index';
import { APIKEY } from "../../components/ApiKey/ApiKey";
import axios from "axios";
import { getActors, getActorsError, getActorsSuccess, getClickSlice,  getPage } from './CreateSlice';
import {TopRatedError,TopRatedActors, TopRatedSuccess} from "./CreateRated"
import { getDetailError, getDetailFilm, getDetailSuccess, getlanguage } from './DetailSlice';
import { fetchingActorsError, fetchingActorsSuccess } from './ActorsSlice';
import { getInformLoading, getInformSuccess } from './ActorsInformSlice';
import { fetchTrailerError, fetchTrailerSuccess } from './TrailerSlice';
import { fetchActormoviesError, fetchActormoviesSuccess } from './ActorMoviesSlice';
import { SearchError, SearchLoader, SearchSuccess } from './SearchSlice';


export const getPopular = (lang: string, click: number) => {
    return async (dispatch: AppDispatch) => {
        try{
            dispatch(getActors())
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${lang}&page=${click}`)
            dispatch(getActorsSuccess(response.data.results))
            dispatch(getPage(response.data.total_pages))

        }catch (e: any) {
            dispatch(getActorsError(e.message))
        }
    }
}

export const getTopRated = (lang: string, click: number, page: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(TopRatedActors())
            const response = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${lang}&page=${click}`)
            dispatch(TopRatedSuccess(response.data.results));
            dispatch(getPage(response.data.total_pages))
        }catch(e: any) {
            dispatch(TopRatedError(e.message))
        }
    }
}

export const getDetail = (id: any, lang: string) => {
    return async (dispatch: AppDispatch) => {
        try{
            dispatch(getDetailFilm(id))
               const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=${lang}&`)
               dispatch(getDetailSuccess(response.data))
        }catch(e: any){
            dispatch(getDetailError(e.message))
        }
    }
}


export const getActorUrl = (id: any, lang: string) => {
    return async (dispatch: AppDispatch) => {
         try {

            const response = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=${lang}&`)
            dispatch(fetchingActorsSuccess(response.data.cast))
         }catch(e: any) {
              dispatch(fetchingActorsError(e.message))
         }
    }
}

export const getInformUrl = (id: any, lang: string) => {
    return async (dispatch: AppDispatch) => {
          try{
            dispatch(getInformLoading)
            const response = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${APIKEY}&language=${lang}&`)
            dispatch(getInformSuccess(response.data))
               
          }catch(e: any) {

          }
    }

}

export const getTraileUrl = (id: any) => {
    return async (dispatch: AppDispatch) => {
        try {
         const response = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=en-US`)
            dispatch(fetchTrailerSuccess(response.data.results))
        }catch(e: any){
            dispatch(fetchTrailerError(e.message))
        }
    }
}

export const  getActorMovies = (id: any) => {
    return async (dispatch: AppDispatch) => {
        try{
            const response = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${APIKEY}&language=en-US`)
            dispatch(fetchActormoviesSuccess(response.data.cast))
        }catch(e: any) {
             dispatch(fetchActormoviesError(e.message))
        }
    }
}

export const getClick = (click: any) =>(dispatch: AppDispatch) => {
    dispatch(getClickSlice(click));

}


export const LanguageContext = (lan: string) => (dispatch: AppDispatch) => {
    dispatch(getlanguage(lan))
}

export const getSearchSlice  = (movieName: any, lang: any) =>  async (dispatch: AppDispatch) => {
    try {
      dispatch(SearchLoader())
      const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${movieName}&language=${lang}
      `)
      dispatch(SearchSuccess(res.data.results))
    }catch (e:any) {
           dispatch(SearchError(e.message))
    }
}