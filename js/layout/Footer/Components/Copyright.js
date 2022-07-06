/**
 * @param {object} copyright 
 * @param {string} parentClassName 
 * @returns {string}
 */

 const Copyright = (copyright, parentClassName) => {
  
    if (!Object.keys(copyright).length) return ''
  
    const {url, source, alternate} = copyright
  
    const className = parentClassName
      ? parentClassName + ('__copyright')
      : 'copyright'
  
    return `
      <a class="${className}" href="${url}">
        <img 
          src="${source}"
          alt="${alternate}"
        >
      </a>
    `
  }
  
  export default Copyright