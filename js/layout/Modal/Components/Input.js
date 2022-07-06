/**
 * @param {object} input 
 * @param {string} parentClassName 
 * @returns {string}
 */

 const Input = (input, parentClassName) => {
    if (!Object.keys(input).length) return ''
  
    const {type, placeholder} = input
  
    const className = parentClassName
      ? parentClassName + '__input'
      : 'input'
  
    return `
      <input 
        class="${className}" 
        type="${type}" 
        placeholder="${placeholder}"
      >
    `
  }
  
  export default Input