/**
 * @param {object} column 
 * @param {string} parentClassName 
 * @returns 
 */

import Title from './Title.js'

const Column = (column, parentClassName) => {

  const className = parentClassName ? parentClassName + '__column' : 'column'

  return `
  <div class=${className}__column>
  ${Title(column.title, parentClassName)}

  <ul class=${className}__list>
    ${column.links.map((link) => {
      return `
      <li class = "${className}__item">
        <a href="${link.url}">
           ${link.data}
        </a>
      </li>
      `
    }).join('')}
  </ul>
  </div>
  `
}

export default Column