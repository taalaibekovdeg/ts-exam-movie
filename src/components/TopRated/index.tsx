import React, { useEffect } from 'react';
import "./index.scss"
import { useAppSelector } from '../../Hooks/useAppSelector';
import { useAppDispatch } from '../../Hooks/useApDispatch';
import {getClick, getTopRated} from "../..//store/Reducers/CreateUrl"
import TopRatedDetail from '../Page/TopRatedDetail';





const TopRated = () => {

    const dispatch = useAppDispatch()


    const {users, loading, error} = useAppSelector((state) => state.TopRatedSlice)
    const {user} = useAppSelector(s => s.DetailSlice)

    const {lang} = useAppSelector(s => s.DetailSlice)
    const {click, page} = useAppSelector(state => state.PopularSlice)
    
     console.log(click)

     const handleCLick = () => {
        dispatch(getClick(click + 1))
        
     }
     const handleMinus = () => {
        dispatch(getClick(click - 1))
     }

useEffect(() => {
    dispatch(getTopRated(lang, click, page))
}, [lang, click, page])

    return (
        <div id='topRated'  style={{
            background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${user.backdrop_path}")`,
                filter: "grayscale(0%)",
               
                
        }}>
            <div className="container">
                <div className="topRated">
                     {
                        users.map((el) => (
                            <TopRatedDetail key={el.id} el={el}/>
                        ))
                     }
                </div>
            </div>
            <div className='container'>
                <div className='navigate'>
                    <button style={{
                        position: "relative",
                        zIndex: click === 1 ? "-999": "",
                        border: click === 1 ? "1px solid red" : "",
                        borderRadius: click === 1 ? "3px":""
                    }} onClick={() => dispatch(handleMinus)}>prev</button>
                    <button >{0 + click}</button>
                    <button>{1 + click}</button>
                    <button >{2 + click}</button>
                    <button>:</button>
                    <button>{3 + click}</button>
                    <button>:</button>
                    <button>{page}</button>
                    <button onClick={() => (dispatch(handleCLick))}>next</button>
                </div>
           </div>
        </div>
    );
};

export default TopRated;