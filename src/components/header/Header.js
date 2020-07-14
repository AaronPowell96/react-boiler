import React, { useEffect, useState } from 'react';
import './Header.scss'
import '../../styles/transitions/hamburger.scss'
import '../../styles/transitions/slide-in-top.scss'
import '../../styles/transitions/slide-out-top.scss'
import '../../styles/transitions/text-tracking-in.scss'
// Since this component is simple and static, there's no parent container for it.
import { FocusOn } from 'react-focus-on';
import Navigation from '../navigation/Navigation'
const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const navRef = React.createRef();

  useEffect(() => {
    if (menuState) {
      document.querySelector('.hamburger').classList.add('is-active')
    } else {
      document.querySelector('.hamburger').classList.remove('is-active')
    }
  }, [menuState])

  return (
    <header id='header__content' role='banner'>
      <button ref={navRef} className="hamburger hamburger--emphatic" type="button" aria-label="Open Close Menu" aria-haspopup="true" onClick={() => setMenuState(prevMenuState => !prevMenuState)}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <FocusOn enabled={menuState} shards={[navRef]} scrollLock={true} onEscapeKey={() => setMenuState(false)} returnFocus={true} forwardRef={true} className="test">
        <Navigation forwardRef={navRef} menuOpen={menuState} linkCallback={() => setMenuState(prevMenuState => !prevMenuState)} />
      </FocusOn>
      <h1>test</h1>
    </header>
  );
};

export default Header;
