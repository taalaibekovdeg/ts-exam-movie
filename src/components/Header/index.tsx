import React, { useState } from 'react';
import "./index.scss"
import { NavLink,useNavigate } from 'react-router-dom';
import {FaSearch} from "react-icons/fa"
import logo from "../../Image/logo.svg"
import { useAppSelector } from '../../Hooks/useAppSelector';
import { useAppDispatch } from '../../Hooks/useApDispatch';
import { LanguageContext } from '../../store/Reducers/CreateUrl';
import { getDark } from '../../store/Reducers/DetailSlice';
import {BsFillSunFill} from "react-icons/bs"
import {BsMoonStarsFill} from "react-icons/bs"
const Header = () => {
    const [click, setClick] = useState(false)


        const handleChane = (e: React.ChangeEvent<any>) => {
        dispatch(LanguageContext(e.target.value))
    }
    const dispatch = useAppDispatch()

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

    const { dark} = useAppSelector(s  => s.DetailSlice)

   const addDark = () => {
    dispatch(getDark())
   }


    return (
        <header id="header">
        <div className="container">
             <div className="header">
                <div className="header--logo">
                    <img src={logo} alt="" />
                </div>
               
                <div className="header--nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/popular">Popular</NavLink>
                    <NavLink to="/topRated">Top-Rated</NavLink>
                </div>
                <div className='header--inputs'>
                <div className="header--input">
                    <div className="header--input__search" style={{}}>
                        <FaSearch className="icon" onClick={() => setClick(!click)} style={{
                            position: "absolute",
                            margin: "0 5px",
                            cursor: "pointer",
                            color: click? "": "white"
                        }
                        }/>
                        <form onSubmit={navigateToResult}>
                            <label>
                            <input
                        onChange={handleChangeInput}
                        type="search" placeholder="search" style={{
                            width: click ? "200px" : "",
                            height: click ? "30px" : "",
                            border: "",
                            fontSize: "17px",
                            borderRadius: "12px",
                            boxShadow: "2px 3px 6px gray",
                            background: "#f5f2f2",
                            paddingLeft: click ? "30px" : ""
                        }
                        }/>
                            </label>
                        </form>
                        
                    </div>
                </div>

                <select style={{
                    padding: "4px 6px",
                    backgroundColor: "transparent",
                    color: "white",
                                    }} onChange={e => handleChane(e)}>
                                    <option style={{color: "black"}} value="en-US">english</option>
                                    <option style={{color: "black"}} value="ru-RU">russian</option>
                                    <option style={{color: "black"}} value="tr-TR">turkce</option>
                                    <option style={{color: "black"}} value="fr-FR">french</option>
                </select>

                <div className='header--btn' onClick={() => dispatch(addDark)}>
                <button onClick={() => dispatch(addDark)} style={{
                    marginLeft: dark? "25px" : "",
                    transition: ".7s",
                    backgroundColor: dark? "rgb(120, 218, 243)" : "gray"
                }}>{dark ? <BsFillSunFill style={{color: dark ? "rgb(227, 247, 10)" : ""}}/> : <BsMoonStarsFill style={{color: dark ? "" : "rgb(235, 144, 18)"}}/>}</button>
                </div>
                </div>
                

             </div>
        </div> 
    </header>
    );
};

export default Header;