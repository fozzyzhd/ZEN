import Link from './Link.js'

/** 
 * @param {object} item 
 * @param {string} parentClassName 
 * @returns {string}
 */

const ListItem = (item, parentClassName) => {

  if (!Object.keys(item).length) return ''

  const className = parentClassName
    ? `${parentClassName}__item`
    : ''

  return `
    <li class="${className}">
      ${Link(item)}
    </li>
  `
}

export default ListItem