import React from 'react';
import "./index.scss"
import { Link, NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../Hooks/useAppSelector';

interface IPopular {
    el: {
        id: number
       title: string
       poster_path: string
    }
}

const PopularDetail = ({el}:IPopular) => {
    const {search} =  useAppSelector(s => s.SearchSlice)
    console.log(search)
   
    return (
        <>
           {
            el.poster_path !== null ? 
            <div className='popularDetail'>
            <NavLink to={`/detailPage/${el.id}`}>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="" style={{cursor: 'pointer'}}/>
            </NavLink>
            
            <h3>{el.title}</h3>
            </div>
        :
        ""
        }
      
        </>
    );
};

//Фильм который вы искали не найдено

export default PopularDetail;