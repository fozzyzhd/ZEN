/**
 * @param {object} option 
 * @returns {string}
 */

 const Option = (option) => {
    if (!Object.keys(option).length) return ''
  
    const {value, data} = option
  
    return `
      <option value="${value}">${data}</option>
    `
  }
  
  export default Option