import {removeBurgerAndMenuActive,
  validateForm} from './helpers.js'
import SunIcon from '../ui/SunIcon.js' 
import MoonIcon from '../ui/MoonIcon.js'

export const handleThemeButtonClick = (clientsNodes, lightThemeClients, darkThemeClients) => {

  if (clientsNodes && lightThemeClients && darkThemeClients) {
    console.log({clientsNodes})
    console.log({lightThemeClients})
    console.log({darkThemeClients})

    const $body = document.body
    const $header = $body.querySelector('[data-name="header"]')
    const $themeButton = $header.querySelector('[data-btn="theme"]')
    const $menu = $body.querySelector('[data-name="menu"]')
    const $burger = $body.querySelector('[data-btn="burger"]')
    const $orderButton = $body.querySelector('[data-btn="order"]')

    if ($body.classList.contains('dark')) {
      localStorage.removeItem('darkTheme')
      //localStorage.clear()
      localStorage.setItem('darkTheme', false)
      $body.classList.remove('dark')
      $header.classList.remove('dark')
      $menu.classList.remove('dark')
      $orderButton.classList.remove('dark')
      $themeButton.innerHTML = MoonIcon()
      clientsNodes.forEach((clientsNode, index) => {
        clientsNode.src = lightThemeClients[index].source
      })
    } else if (!$body.classList.contains('dark')) {
      localStorage.removeItem('darkTheme')
      //localStorage.clear()
      localStorage.setItem('darkTheme', true)
      $body.classList.add('dark')
      $header.classList.add('dark')
      $menu.classList.add('dark')
      $orderButton.classList.add('dark')
      $themeButton.innerHTML = SunIcon()
      clientsNodes.forEach((clientsNode, index) => {
        clientsNode.src = darkThemeClients[index].source
      })
    }
  } else {
    return
  }
}

export const handleOrderButtonClick = () => {
  const $modal = document.querySelector('[data-name="modal"]')
  
  document.body.style.overflow = 'hidden'
  $modal.classList.add('active')
}

export const handleCloseModalClick = () => {
  const $modal = document.querySelector('[data-name="modal"]') 

  document.body.style.overflow = ''
  $modal.classList.remove('active')
}

export const handleBurgerButtonClick = () => {
  const $burger = document.querySelector('[data-btn="burger"]')
  const $menu = document.querySelector('[data-name="menu"]')

  $burger.classList.toggle('active')
  $menu.classList.toggle('active')

  document.body.classList.toggle('hidden')
}

export const handleItemButtonClick = () => {
  const $burger = document.querySelector('[data-btn="burger"]')

  $burger.classList.remove('active')
}

export const handleLogoButtonClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  removeBurgerAndMenuActive()
} 

export const handleMenuItemClick = (event) => {
  const targetValue = event.currentTarget.dataset.target
  const $section = document.querySelector(`[data-name="${targetValue}"]`)
  const $header = document.querySelector('[data-name="header"]')
  
  const clientPosition = window.pageYOffset
  const sectionPosition = $section.getBoundingClientRect().top
  const headerHeight = $header.getBoundingClientRect().height
  const targetPosition = clientPosition + sectionPosition - headerHeight

  removeBurgerAndMenuActive()
  window.scrollTo(0, targetPosition)
}

export const handleInputsValueKeyup = (event) => {
  validateForm(event.currentTarget)
}

export const handleSelectChange = () => {
  const $select = document.querySelector('#select')
  const $label = $select.closest('[data-name="select"]')
  const valueSelect = $select.value

  if (valueSelect?.length) {
    $label.classList.remove('error')
    $label.classList.add('success')
  } else {
    $label.classList.remove('success')
    $label.classList.add('error')
  }
}

export const handleFormClick = (event) => {
  const $form = event.currentTarget
  const $nameInput = $form.querySelector('[data-type="text"]')
  const $telInput = $form.querySelector('[data-type="tel"]')
  const $emailInput = $form.querySelector('[data-type="email"]')
  const $select = $form.querySelector('#select')
  const $checkbox = $form.querySelector('#checkbox')
  const $submit = $form.querySelector('[data-btn="submit"]')

  if ($nameInput.dataset.success === 'true' 
    && $telInput.dataset.success === 'true' 
    && $emailInput.dataset.success === 'true'
    && $select.value.length 
    && $checkbox.checked) {
      $submit.disabled = false
    } else {
      $submit.disabled = true
    }
}

export const handleFormSubmit = (event) => {
  event.preventDefault()
  
  const $form = event.currentTarget
  const $modal = $form.closest('[data-name="modal"]') 
  const $title = $modal.querySelector('[data-title]')
  const prevTitleContent = $title.textContent
  const $nameInput = $form.querySelector('[data-type="text"]')
  const $telInput = $form.querySelector('[data-type="tel"]')
  const $emailInput = $form.querySelector('[data-type="email"]')
  const $select = $form.querySelector('#select')
  const $lableSelect = $form.querySelector('[data-name="select"]')
  const $checkbox = $form.querySelector('#checkbox')
  const $submit = $form.querySelector('[data-btn="submit"]')

  const order = {
    type: 'order',
    date: new Date().toLocaleString(),
    name: $nameInput.value,
    tel: $telInput.value,
    email: $emailInput.value,
    connection: $select.value,
    policy: $checkbox.checked,
  }

  // console.log(order)

  $title.textContent = 'Success!'
  $form.reset()
  $submit.disabled = true
  $nameInput.classList.remove('success')
  $telInput.classList.remove('success')
  $emailInput.classList.remove('success')
  $lableSelect.classList.remove('success')

  setTimeout(() => {
    $title.textContent = prevTitleContent
    $modal.classList.remove('active')
    document.body.style.overflow = ''
  }, 1000)
}

export const handleThemeClick = (event) => {
  const $themeButton = event.currentTarget
  const $body = document.body
  
  if ($body.className === 'dark') {
    $themeButton.innerHTML = SunIcon()
  } else if ($body.className !== 'dark'){
    $themeButton.innerHTML = MoonIcon()
  }
}

export const handleWindowScroll = () => {
  // объект данных 
  const clientRect = document.body.getBoundingClientRect()

  // высота всего прокрученного
  const clientPassed = Math.abs(clientRect.top)

  // высота всего документа
  const clientHeight = document.body.clientHeight

  // высота экрана
  const screenHeight = window.screen.height

  // выстота сколько не прокручено 
  const clientNotPassed = clientHeight - screenHeight

  // процент прокрученной области 
  const percentPassed = Math.floor(clientPassed / clientNotPassed * 100)

  // прогресс
  const $progressBar = document.querySelector('[data-name="progress-bar"]')

  //$progressBar.style.width = `${percentPassed}%`

}

export const handleWindowLoad = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true'
    console.log({isDarkTheme})
  if (isDarkTheme) {
    console.log('Катя, включи тёмную тему')
  } else {
    console.log('Катя, включи светлую тему')
  }
}

