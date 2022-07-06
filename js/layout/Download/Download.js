import Title from '../../components/Title.js'
import Text from '../../components/Text.js'
import Link from '../Download/components/Link.js'
import Image from '../../components/Image.js'

/**
 * @param {object} download 
 * @returns {string}
 */

const Download = (download) => {

  if (!Object.keys(download).length) return ''

  const {name, title, texts, image, buttons} = download
  
  const className = name
  
  return `
    <section data-name="${name}" class="${className}">
      <div class="container">
        <div class="${className}__wrapper">      
          <div class="${className}__body">
            ${title ? Title(title, className) : ''}
            ${texts ? texts.map((text) => Text(text, className)).join('') : ''}
            <div class="${className}__links">
              ${buttons.map((button) => Link(button, className)).join('')}
            </div>
          </div>
          <div class="${className}__image">
            ${image ? Image(image) : ''}
          </div>
        </div>
      </div>
    </section>
  `
}

export default Download