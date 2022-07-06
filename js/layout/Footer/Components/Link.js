import {getTypeContentLink} from '../../../utils/helpers.js'

/** 
 * @param {object} link 
 * @returns {string}
 */

const Link = (link) => {

  if (!Object.keys(link).length) return ''

  const {url, data: content} = link

  const contentType = getTypeContentLink(content)

  switch (contentType) {
    case 'image':
      return `
        <a href="${url}">
          <img src="${content}">
        </a>
      `
    case 'email':
      return `
        <a href="mailto:${url}">
          ${content}
        </a>
      `
    default:
      return `
        <a href="${url}">
          ${content}
        </a>
      `  
  }
}

export default Link