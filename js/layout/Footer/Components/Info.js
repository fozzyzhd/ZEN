import Logo from './Logo.js'
import Text from '../../../components/Text.js'
import Copyright from './Copyright.js'

/**
 * @param {object} info 
 * @param {string} parentClassName 
 * @returns {string}
 */

const Info = (info, parentClassName) => {
  
  if (!Object.keys(info).length) return ''

  const {texts, copyright} = info

  const className = parentClassName
    ? parentClassName + '__info'
    : 'info'

  const childClassName = parentClassName 
    ? parentClassName 
    : className

  return `
    <div class="${className}">      
      ${Logo(childClassName)}
      ${texts.map((text) => Text(text, childClassName)).join('')}
      ${Copyright(copyright, childClassName)}
    </div>
  `
}

export default Info