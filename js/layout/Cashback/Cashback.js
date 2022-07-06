import Title from '../../components/Title.js'
import Text from '../../components/Text.js'

/**
 * @param {object} section
 * @returns {string}
 */

const Cashback = (section) => {

  if  (!Object.keys(section).length) return ''

  const {name, title, texts, buttonText} = section
  
  const className = name

  return `
    <section data-name="${name}" class="${className}">
      <div class="container">
        <div class="${className}__wrapper">
          ${title ? Title(title, className) : ''}
          ${texts?.map((text) => Text(text, className)).join('') ?? ''}
          <button class="${className}__order" data-btn="order">
            ${buttonText ? buttonText : 'Order'}
          </button>
        </div>
      </div>
    </section>
  `
}

export default Cashback