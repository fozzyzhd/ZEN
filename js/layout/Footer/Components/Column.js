import Title from '../../../components/Title.js'
import ListItem from './ListItem.js'

/**
 * @param {object} data 
 * @param {string} parentClassName 
 * @returns {string}
 */

const Column = (data, parentClassName) => {
  
  if (!Object.keys(data).length) return ''

  const {title, links} = data

  const currentClassName = parentClassName 
    ? parentClassName + '__column'
    : 'column'

  const childClassName = parentClassName 
    ? parentClassName 
    : currentClassName

  return `
    <div class="${currentClassName}">
      ${Title(title, childClassName)}
      <ul class="${childClassName}__list">
        ${links.length 
          ? links.map((link) => ListItem(link, childClassName)).join('') 
          : ''
        }
      </ul>
    </div>
  `
}

export default Column
