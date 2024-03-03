import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <header className={`theme-${theme}`}>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/todo'>ToDo</NavLink>
                <NavLink to='/shopForMen'>Shop</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </nav>
            <div onClick={() => { toggleTheme() }}>
                {theme === "light" ? <ModeNightIcon></ModeNightIcon> :
                    <LightModeIcon></LightModeIcon>}
            </div>
        </header>
    );
}

export default Header;
