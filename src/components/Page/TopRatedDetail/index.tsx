import React from 'react';
import "./index.scss"
import { NavLink } from 'react-router-dom';

interface ITop {
    el: {
        id: number,
        title: string,
        poster_path: string
    }
}

const  TopRatedDetail = ({el}: ITop) => {
    return (
        <div className="topRatedDetail">
            <NavLink to={`/detailPage/${el.id}`}>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="" style={{cursor: 'pointer'}}/>
            </NavLink>
            
            <h3>{el.title}</h3>
        </div>
    );
};

export default TopRatedDetail;