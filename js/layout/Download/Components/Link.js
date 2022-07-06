import AppleIcon from '../../../ui/AppleIcon.js'
import GoogleIcon from '../../../ui/GoogleIcon.js'

/**
 * @param {object} link 
 * @param {string} parentClassName 
 * @returns {string}
 */

const Link = (button, parentClassName) => {

  if (!Object.keys(button).length) return ''

  const className = parentClassName
    ? parentClassName + '__link'
    : 'link'

  const {url, type} = button

  return `
    <a 
      class="${className}" 
      href="${url}">
        ${type === 'apple' 
          ? AppleIcon() 
          : GoogleIcon()
        }
    </a>
  `
}

export default Link
