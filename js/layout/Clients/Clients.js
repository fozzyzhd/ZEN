import ClientsItem from './components/ClientsItem.js'

/**
 * @param {object} section
 * @returns {string}
 */

const Clients = (section) => {

  if (!Object.keys(section).length) return ''

console.log(section)

  const {name, lightThemeClients:clients} = section
  
  
  const className = name

  return `
    <section data-name="${name}" class="${className}">
      <div class="container">
        <div class="${className}__wrapper">
          ${clients?.map((client) => ClientsItem(client, className)).join('') ?? ''}
        </div>
      </div>
    </section>
  `
}

export default Clients