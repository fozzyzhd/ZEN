import Input from './Input.js'
import Select from './Select.js'
import Policy from './Policy.js'

/**
 * @param {object} form 
 * @param {string} parentClassName 
 * @returns {string}
 */

const Form = (form, parentClassName) => {

  if (!Object.keys(form).length) return ''

  const {inputs, select, policy, buttonText} = form

  const currentClassName = parentClassName 
    ? parentClassName + '__form'
    : 'form'

  const childClassName = parentClassName
    ? parentClassName
    : currentClassName

  return `
    <form class="${currentClassName}">
      ${inputs.length ? inputs.map((input) => Input(input, childClassName)).join('') : ''}
      ${Select(select, childClassName)}
      ${Policy(policy, childClassName)}
      <button
        class="${childClassName}__btn" 
        type="submit" 
        disabled
      >
        ${buttonText}
      </button>
    </form>
  `
} 

export default Form