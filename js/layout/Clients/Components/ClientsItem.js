/**
 * @param {object} client 
 * @param {string} parentClassName 
 * @returns {string}
 */

 const ClientsItem = (client, parentClassName) => {
  
    if(!Object.keys(client).length) return ''
  
    const className = parentClassName 
      ? parentClassName + '__client'
      : 'client'
  
    const {source, alternate} = client
  
    return `
      <img 
        data-type="client"
        class="${className}"
        src="${source}"
        alt="${alternate}"
        style="width: 100%"
      >
    `
  }
  
  export default ClientsItem