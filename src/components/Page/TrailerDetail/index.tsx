import React, {useEffect} from 'react';
import { useAppSelector } from '../../../Hooks/useAppSelector';
import { useAppDispatch } from '../../../Hooks/useApDispatch';
import { getTraileUrl } from '../../../store/Reducers/CreateUrl';
import "./index.scss"
import Slider from 'react-slick';


interface ITrailer {
    movieId: string | undefined; 

}
const TrailerDetail = ({movieId}: ITrailer) => {
    console.log(movieId);

    const dispatch = useAppDispatch()

    const {users} = useAppSelector((state) => state.getTrailer)
    console.log(users)

    useEffect(() => {
        dispatch(getTraileUrl(movieId))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div id='trailerDetail'>
            <div className="container">
                <div className="trailerDetail">
                   
                        <Slider {...settings}>
                    {
                        users.map((el) => (
                            <div className='trailerDetail--block'>
                                <iframe width="250" height="170" src={`https://www.youtube.com/embed/${el.key}`}
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen>
                                    </iframe>
                                <h5>{el.name}</h5>
                            </div>
                        ))
                    }
                    </Slider>
                 
                </div>
            </div>
        </div>
    );
};

export default TrailerDetail;