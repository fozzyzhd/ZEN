/**
 * @param {object} title 
 * @param {string} parentClassName
 * @returns {string}
 */

const Title = (title, parentClassName) => {

  const className = parentClassName 
    ? `${parentClassName}__title` 
    : 'title'

  switch (title.priority) {
    case 6: 
      return `<h6 class="${className}">${title.data}</h6>`
    case 5:
      return `<h5 class="${className}">${title.data}</h5>`
    case 4: 
      return `<h4 class="${className}">${title.data}</h4>`
    case 3:
      return `<h3 class="${className}">${title.data}</h3>`
    case 2: 
      return `<h2 class="${className}">${title.data}</h2>`
    default:
      return `<h1 class="${className}">${title.data}</h1>`
  }
}

export default Title