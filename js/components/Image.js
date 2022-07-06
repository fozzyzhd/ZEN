/**
 * @param {object} image 
 * @param {string} parentClassName 
 * @returns {string}
 */

 const Image = (image, parentClassName) => {
  
  if (!Object.keys(image).length) return ''

  const className = parentClassName
    ? parentClassName + '__image'
    : ''

  const {source, alternate} = image

    return `
      <img 
        class="${className}"
        src="${source}"
        alt="${alternate}"
      >
    `
}

export default Image