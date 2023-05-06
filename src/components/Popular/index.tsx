import React, { useEffect } from 'react';
import "./index.scss"
import { getClick, getPopular } from '../../store/Reducers/CreateUrl';
import { useAppSelector } from '../../Hooks/useAppSelector';
import { useAppDispatch } from '../../Hooks/useApDispatch';
import PopularDetail from '../Page/PopularDetail';


const Popular = () => {

    const dispatch = useAppDispatch()
    const {dark} = useAppSelector(s => s.DetailSlice)

     const {users,loading, error} = useAppSelector((state) => state.PopularSlice)
     const {user} = useAppSelector((state) => state.DetailSlice) 
    //  console.log(users)
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
        dispatch(getPopular(lang, click));
    }, [lang, click]);
    

    
    

    return (
        <div id='popular' style={{
            background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${user.backdrop_path}")`,
            filter: "grayscale(0%)",
               
                
        }}>
           
           <div className="container">
            <div className="popular">
            {
                users.map(el => (
                    <PopularDetail key={el.id} el={el}/>
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
                    <button>{3 + click}</button>
                    <button>:</button>
                    <button>{page}</button>
                    <button onClick={() => (dispatch(handleCLick))}>next</button>
                </div>
           </div>
        </div>
    );
};

export default Popular;