/**
 * @param {array} texts 
 * @param {string} parentClassName 
 * @returns {string}
 */

 const Text = (texts, parentClassName) => {
  
  if (!Object.keys(texts).length) return ''
  
  const className = parentClassName
    ? parentClassName + '__copy' 
    : 'copy'

    return `
      <p class="${className}">${texts}</p>
    `
}

export default Text