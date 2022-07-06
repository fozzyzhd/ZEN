import Option from './Option.js'

/**
 * @param {object} select 
 * @param {string} parentClassName
 * @returns {string}
 */

const Select = (select, parentClassName) => {

  if (!Object.keys(select).length) return ''

  const {label, options} = select

  const currentClassName = parentClassName
    ? parentClassName + '__select'
    : 'select'

  const childClassName = parentClassName
    ? parentClassName
    : currentClassName

  return `
    <label class="${currentClassName}">
      <span id="connection">${label}</span>
      <select>
        <option></option>
        ${options.length ? options.map((option) => Option(option)).join('') : ''}
      </select>
    </label>
  `
}

export default Select