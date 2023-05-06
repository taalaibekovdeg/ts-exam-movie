import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../Hooks/useAppSelector';
import { useAppDispatch } from '../../../Hooks/useApDispatch';
import { getInformUrl } from '../../../store/Reducers/CreateUrl';
import "./index.scss"
import ActorMovies from '../ActorMoviesDetail';

const ActorsInform = () => {
    const {personId} = useParams()

    const [viewMore,setViewMore] = useState(500)
     
    const dispatch = useAppDispatch()
    const {users} = useAppSelector((state) => state.getInform)
    const {lang} = useAppSelector(s => s.DetailSlice)
  
    useEffect(() => {
        dispatch(getInformUrl(personId, lang));
    }, [])

    const toggleViewMOre = (text: any) => {
        setViewMore(viewMore === 500 ? text.length : 500)
    }
   

    return (

        <>
        <div id='actorsInform'>
              <div className="container">
                <div className="actorsInform">
                    <div className='actorsInform--img'>
                    <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${users.profile_path}`} alt="" />
                    </div>
                    <div className='movieInform--title'>
                        
                        <h2>{users.name}</h2>
                        <h4>{users.birthday}</h4>
                        <p>{users.biography ? users.biography.slice(0, viewMore) : users.biography}</p>
                        {
                            users.biography ? <span onClick={() => toggleViewMOre(users.biography)} style={{
                                color: "blue",
                                cursor: "grab"
                            }}>{viewMore === 500 ? "Читать дальше..." : "Свернуть!"}</span> : ""
                        }
                    </div>
                    
                </div>
              </div>
        </div>
        <ActorMovies personId={personId}/>
        </>
    );
};

export default ActorsInform;