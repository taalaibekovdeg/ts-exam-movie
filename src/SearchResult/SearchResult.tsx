import React, {useEffect} from 'react';
import { useAppDispatch } from '../Hooks/useApDispatch';
import { useAppSelector } from '../Hooks/useAppSelector';
import { useParams } from 'react-router-dom';
import { getSearchSlice } from '../store/Reducers/CreateUrl';
import PopularDetail from '../components/Page/PopularDetail';
import "./index.scss"

const SearchResult = () => {

const {search} = useAppSelector((state) => state.SearchSlice)
const dispatch = useAppDispatch()
const {movieName} = useParams()
const {lang} = useAppSelector(s => s.DetailSlice) 
console.log(search)

useEffect(() => {
     dispatch(getSearchSlice(movieName, lang))
}, [movieName, lang])

console.log(search)

    return (
        <div id='search'>
             <div className="container">
                {
                    search.length ? 
                    <div className="search">
                    {
                        search.map(el => (
                            <PopularDetail el={el}/>
                        ))
                    }
                </div>
                :
                <div className='error'>
                    <h1>Фильм который вы искали не найдено</h1>
                </div>
                }
             </div>
        </div>
    );
};

export default SearchResult;


