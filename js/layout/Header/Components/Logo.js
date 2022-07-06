import ZenIcon from '../../../ui/ZenIcon.js'

const Logo = (parentClassName) => {

  const className = parentClassName
    ? parentClassName + '__logo'
    : 'logo'

  return`
    <button class="${className}" data-btn='root'>
      ${ZenIcon()}
    </button>
  `
}

export default Logo