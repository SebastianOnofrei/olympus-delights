import React from 'react'
import Logo from '../../atoms/logo/Logo'
import Navigation from '../../molecules/navigation/Navigation'
import './Header.scss';

const Header = () => {
  return (
    <header>
        <Logo brand='Olympus Delights'/>
        <Navigation/>
    </header>
  )
}
export default Header