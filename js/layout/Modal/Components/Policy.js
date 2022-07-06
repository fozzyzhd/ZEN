/**
 * @param {object} policy 
 * @param {string} parentClassName 
 * @returns {string}
 */

 const Policy = (policy, parentClassName) => {

    if (!Object.keys(policy).length) return ''
  
    const {url, data} = policy
  
    const className = parentClassName
      ? parentClassName + '__policy'
      : 'policy'
     
    return `
      <label class="${className}">
        <input type="checkbox" checked>
        <a href="${url}">${data}</a>
      </label>
    `
  }
  
  export default Policy