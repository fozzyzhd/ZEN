import ZenFooter from '../../../ui/ZenFooter.js'

const Logo = (parentClassName) => {

  const className = parentClassName
    ? parentClassName + '__logo'
    : 'logo'

  return `
    <button class="${className}">
      ${ZenFooter()}
    </button>
  `
}

export default Logo