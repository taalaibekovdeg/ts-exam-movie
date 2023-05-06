import React, {useEffect, } from 'react';
import {  NavLink, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../Hooks/useApDispatch';
import { useAppSelector } from '../../../Hooks/useAppSelector';
import { getActorUrl } from '../../../store/Reducers/CreateUrl';
import person from "../../../Image/person.png";
import "./index.scss";
import Slider from 'react-slick';







const ActorsDetail = () => {
    const {movieId} = useParams()
    const dispatch = useAppDispatch()
    const {actors} = useAppSelector((state) => state.getActors)
    const {lang} = useAppSelector(s => s.DetailSlice) 

useEffect(() => {
dispatch(getActorUrl(movieId,lang));
    
}, [movieId])

const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true
};

    return (
        <div id='actorDetail'>
                <div className="actorDetail">
                <Slider {...settings}>
                    {
                        actors.map((el) => (
                                <div className="actorDetail--title">
                                        {
                                            el.profile_path ?
                                                <NavLink to={`/actorsInform/${el.id}`}>
                                                    <img width="100px" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.profile_path}`} alt=""/> 
                                                </NavLink>:
                                                <img style={{width: "100px" , height: "152px"}} src={person} alt=""/>


                                        }

                                    <h5>{el.name}</h5>
                                </div>
                            ))
                    }
                </Slider>        
                </div>
        </div>
    );
};

export default ActorsDetail;


//{
                        