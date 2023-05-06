import React, {useEffect} from 'react';
import { useAppDispatch } from '../../../Hooks/useApDispatch';
import "./index.scss"
import { useAppSelector } from '../../../Hooks/useAppSelector';
import { getActorMovies } from '../../../store/Reducers/CreateUrl';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';

interface IMovies {
    personId: string | undefined;
}

const ActorMovies = ({personId}: IMovies) => {
    const dispatch = useAppDispatch()

    const {movie} = useAppSelector((state) => state.ActorMoviesSlice)
    console.log(movie)

    useEffect(() => {
        dispatch(getActorMovies(personId))
    }, [personId])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };

    return (
        <div id='actorMovies'>
             <div className="container">
                <div className="actorMovies">
                    {
                        movie.length > 4 ?
                        <Slider {...settings}>

                  {
                        movie.map((el) => (
                            <div className='actorMovies--block'>
                                <NavLink to={`/detailPage/${el.id}`}>
                                <img style={{width: "230px"}} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>
                                </NavLink>
                                 
                                 <h4>{el.title}</h4>
                            </div>
                        ))
                    }
                  </Slider>
                  :
                   movie.map(el =>(
                    <div className='actorMovies--block'>
                                <NavLink to={`/detailPage/${el.id}`}>
                                <img style={{width: "230px"}} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>
                                </NavLink>
                                 
                                 <h4>{el.poster_path !== "" ? el.title : ""}</h4>
                            </div>
                   ))
                    }
                </div>
             </div>
        </div>
    );
};

export default ActorMovies;