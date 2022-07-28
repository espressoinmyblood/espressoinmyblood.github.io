import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { 
  Nav, 
  NavBarContainer, 
  NavLogo, 
  NavIcon, 
  HamburgerMenu,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavItemBtn
} from './NavBar.elements';



const NavBar = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeHamburgerMenu = () => setClick(false);

  const showButton = () => {
    (window.innerWidth <= 960) 
    ? setButton(false)
    : setButton(true)
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav>
        <NavBarContainer>
            <NavLogo to="/" onClick={closeHamburgerMenu}>
                <NavIcon />
                ELENA
            </NavLogo>
            <HamburgerMenu onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </HamburgerMenu>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/'>Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/about'>About Me</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/skills'>Skills</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/projects'>Projects</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/contact-me'>
                    <Button buttonColor>CONTACT ME</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/contact-me'>
                    <Button onClick={closeHamburgerMenu} fontBig buttonColor>
                      CONTACT ME
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default NavBar