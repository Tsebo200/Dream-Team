import React from "react";
import '../Sass/header.sass';
// import '../Assets/Images/Morant.png'

const Header = () => {
return(

    <div className="header">
    <div className="logo"></div>
    <div className="spacingOne"></div>
    <h1>Dream Team</h1>
    <div className="userIcon"></div>
    <img src="../Assets/Images/Morant.png"></img>
    </div>

);
}
export default Header