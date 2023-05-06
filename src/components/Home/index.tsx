import React, { useState } from 'react';
import "./index.scss"
import { useNavigate } from 'react-router-dom';

const Home = () => {
   

    const navigate = useNavigate()

    const [value,setValue] = useState('')

    const navigateToResult = () => {
if (value.trim() !== ''){
     navigate(`/informResult/${value}`)
}
setValue('')
}
const handleChangeInput = (e: React.ChangeEvent<any>) => {
     setValue(e.target.value) 
}
    return (
        <div id='home'>
            <div className="container">
                <div className="home">
                      <h1>Добро пожаловать.</h1>
                      <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>

                      <form 
                      onSubmit={navigateToResult}
                      >
                        <label>
                            <input 
                            onChange={handleChangeInput} 
                            type="text"  placeholder='Найти фильм, сериал, персону......'/>
                        </label>
                      </form>
                      <button onClick={navigateToResult}>search</button>
                </div>
            </div>
            
        </div>
    );
};

export default Home;