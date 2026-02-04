import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.svg"
export const Header = () => {

  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || 'medium');

  useEffect(()=>{
    localStorage.setItem("theme",JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  },[theme]);

  return (
    <header>
        <div className='logo'>
            <img src={logo} alt="Taskmate"></img>
            <span>Taskmate</span>
        </div>
        <div className='themeSelector'>
            <span onClick={() => setTheme('light')} className={theme ==='light' ? 'light activeTheme' : 'light'}></span>
            <span onClick={() => setTheme('medium')} className={theme ==='medium' ? 'medium activeTheme' : 'medium'}></span>
            <span onClick={() => setTheme('dark')} className={theme ==='dark' ? 'dark activeTheme' : 'dark'}></span>
            <span onClick={() => setTheme('gone')} className={theme ==='gone' ? 'gone activeTheme' : 'gone'}></span>
            <span onClick={() => setTheme('gtwo')} className={theme ==='gtwo' ? 'gtwo activeTheme' : 'gtwo'}></span>
            <span onClick={() => setTheme('gthree')} className={theme ==='gthree' ? 'gthree activeTheme' : 'gthree'}></span>
        </div>
    </header>
  )
}
