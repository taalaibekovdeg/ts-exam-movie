import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../Hooks/useApDispatch';
import { useAppSelector } from '../../../Hooks/useAppSelector';
import { getDetail } from '../../../store/Reducers/CreateUrl';
import {AiTwotoneStar} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import {BsFillBookmarkStarFill} from "react-icons/bs"
import "./index.scss"
import ActorsDetail from '../ActorsDetail';
import TrailerDetail from '../TrailerDetail';



const DetailPage = () => {
    const {movieId} = useParams()
    const dispatch = useAppDispatch()
    const {user,lang} = useAppSelector((state) => state.DetailSlice)


    useEffect(() => {
        dispatch(getDetail(movieId, lang))
        
    }, [movieId, lang])

    return (
        <>
        <div id='detailPage' style={{
            background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${user.backdrop_path}")`,
                filter: "grayscale(0%)",
               
                
        }}> 
        <div className='container'>
             <div className='detailPage'>
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${user.poster_path}`} alt="" />
                 <div className='detailPage--text'>
                      <h3>{user.title}</h3>
                      <div style={{
                                display: "flex",
                                alignItems: "center"
                            } }>
                                <h4 style={{width: "140px"}}>{user.release_date}</h4>
                                <p style={{margin: "0 10px"}}>{Math.floor(user.runtime / 60)}hour {user.runtime % 60}minute</p>

                      </div>
                            <div className="detailPage--text__title">
                                <div className="detailPage--text__title--block" style={{
                                    background: `conic-gradient(yellow,${Math.round(user.vote_average * 10) * 3.59}deg,gray 0deg)`

                                }}>
                                    <h3 style={{color: "white"}}>{Math.round(user.vote_average * 10)}%</h3>

                                </div>
                                <h4>
                                    Рейтинг
                                </h4>
                                <button style={{
                                    boxShadow: "0 0 20px green"
                                }}><AiTwotoneStar className="icon"/></button>
                                <button><BsFillBookmarkStarFill className="icon"/></button>
                                <button><AiFillHeart className="icon"/></button>
                            </div>
                            <p>{user.overview}</p>
                            <ActorsDetail/>
                           
                 </div>
             </div>
        </div>
         
        </div>
        <TrailerDetail movieId={movieId}/>
        </>
    );
};

export default DetailPage;