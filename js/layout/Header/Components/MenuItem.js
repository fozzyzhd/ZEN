/** 
 * @param {object} navigation 
 * @param {string} parentClassName 
 * @returns {string}
 */

 const MenuItem = (navigation, parentClassName) => {
  
    if (!Object.keys(navigation).length) return ''
  
    const {data, target} = navigation
  
    const className = parentClassName 
      ? parentClassName + '__item'
      : 'item'
  
    return`
      <li class="${className}">
        <button data-btn="menu" data-target="${target}">
          ${data}
        </button>
      </li>
    `
  }
  
  export default MenuItem