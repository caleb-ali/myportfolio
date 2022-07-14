import React from 'react';
import "./profileStyles.css";
import profileimg from '../assets/profileimg.jpg';


const Profile = () => {
    return (
        <div className='my-profile'>
            <img className='profile-img' src={profileimg} alt='profileimg' />
            <h1>About Me</h1>
            <p>
                I'm Caleb, a Frontend Developer, enthustiatic about <br />building frontend for websites that are responsive <br /> and easy to use with an intuitive and dynamic user <br /> experience.
                <br />
                <br />
                When i'm not working you'll find me playing video <br /> games or watching movies
            </p>

        </div>



    );
};

export default Profile;