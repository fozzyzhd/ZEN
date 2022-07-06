/**
 * @param {array} buttons 
 * @returns {string}
 */

const Menu = (buttons, parentClassName) => {
  const className = parentClassName ? parentClassName + '__menu' : 'menu'
  return `
  <ul class="${className}">
    ${buttons.map((buttons) => {
      return `
      <li class = "${className}__item">
      <button data-btn="${buttons.target}">
      ${buttons.data}
      </button>
      </li>
    `
    }).join('')}
  </ul>
  `
}

export default Menu
