import MenuItem from './MenuItem.js'

/**
 * @param {array} navigations
 * @param {string} parentClassName
 * @returns {string}
 */

const Menu = (navigations, parentClassName) => {
  
  if (!Object.keys(navigations).length) return ''
  
  const className = parentClassName 
    ? parentClassName + '__list'
    : 'menu'

  const parentClassNameForChild = parentClassName 
    ? parentClassName 
    : className

  return `
    <ul data-name="menu" class="${className}">
      ${navigations.map(navigation => {
        return MenuItem(navigation, parentClassNameForChild)
      }).join('')}
    </ul>
  ` 
}

export default Menu