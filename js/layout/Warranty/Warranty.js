import Title from '../../components/Title.js'
import Text from '../../components/Text.js'
import Image from '../../components/Image.js'

/**
 * 
 * @param {object} warranty 
 * @returns {string}
 */

const Warranty = (warranty) => {

  if (!Object.keys(warranty).length) return ''
  
  const {name, title, texts, image} = warranty
  const className = name 

  return `
    <section data-name="${name}" class="${className}">
      <div class="container">
        <div class="${className}__wrapper">
          <div class="${className}__body">
            ${title ? Title(title, className) : ''}
            ${texts ? texts.map((text) => Text(text, className)).join('') : ''}
          </div>
          <div class="${className}__image">
            ${image ? Image(image) : ''}
          </div>
        </div>
      </div>
    </section>
  `
}

export default Warranty