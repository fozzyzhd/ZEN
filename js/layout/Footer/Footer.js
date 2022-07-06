import Column from './components/Column.js'
import Info from './components/Info.js'

/**
 * @param {object} footer 
 * @returns {string}
 */

const Footer = (footer) => {

  if (!Object.keys(footer).length) return ''

  const {name, columns, info} = footer
  
  const className = name

  return `
    <footer data-name="${name}" class="${className}">
      <div class="container">
        <div class="${className}__wrapper">
          <div class="${className}__columns">
            ${columns.map((column) => Column(column, className)).join('')}
          </div>
          ${Info(info, className)}
        </div>
      </div>
    </footer>
  `
}

export default Footer