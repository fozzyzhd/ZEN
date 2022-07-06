import Menu from './components/Menu.js'
import Logo from './components/Logo.js'
import MoonIcon from '../../ui/MoonIcon.js'
import SunIcon from '../../ui/SunIcon.js'
import BurgerIcon from '../../ui/BurgerIcon.js'

/**
 * @param {object} header
 * @returns {string}
 */

const Header = (header) => {
  
  if (!Object.keys(header).length) return ''

  const {name, navigations} = header
  const className = name

  return `
    <header data-name="${name}" class="${className}">    
      <div class="${className}__wrapper">
        <nav class="${className}__nav">
          ${Logo(className)}
          ${navigations ? Menu(navigations, className) : ''}
        </nav>
        <button class="${className}__theme" data-btn="theme">
          ${MoonIcon()}
        </button>
        <button class="${className}__burger" data-btn="burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>   
    </header>
  `
}

export default Header
