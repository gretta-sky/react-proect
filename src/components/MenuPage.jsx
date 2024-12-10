import React from 'react';
import Navbar from '../components/Navbar';
import nImage10 from '../pages/photos/v.png';
const MenuPage = () => {
  return (
    <>
      
      <h1 className='menutext'>Добро пожаловать в альбом!</h1>
      <img className='menuimg' src={nImage10} alt="photo" />
    </>
  );
};

export default MenuPage;
