import App from './App.js'
import Prealoder from './components/Preloader.js'
import SunIcon from './ui/SunIcon.js' 
import MoonIcon from './ui/MoonIcon.js'
import { API_BASE_URL } from './constants/api.js'
import { 
  handleWindowLoad,
  handleWindowScroll,
  handleLogoButtonClick, 
  handleThemeButtonClick,
  handleBurgerButtonClick,
  handleMenuItemClick,
  handleOrderButtonClick,
  handleCloseModalClick,
  handleInputsValueKeyup
  //handleFormSubmit
} from './utils/handlers.js'

const isDarkTheme = localStorage.getItem('darkTheme') === 'true'

const $root = document.querySelector('#root')
$root.innerHTML = Prealoder(isDarkTheme)

fetch(API_BASE_URL)
  .then((response) => response.json())
  .then((data) => {
    if (!data) {
       throw new Error
    }  
    const dataArray = Object.values(data)
    const orders = dataArray.filter((order) => order.type === 'order')

    setTimeout(() => {
      $root.innerHTML = App(data)
  
      const $menuItems = document.querySelectorAll('[data-target]')
  
      $menuItems.forEach((menuItem) => menuItem.addEventListener('click', handleMenuItemClick))
  
      const $body = document.body
      const $header = $body.querySelector('[data-name="header"]')
      const $menu = $body.querySelector('[data-name="menu"]')
      const $logoButton = document.querySelector('[data-btn="root"]')
      const $themeButton = document.querySelector('[data-btn="theme"]')
      const $burgerButton = document.querySelector('[data-btn="burger"]')
      const $orderButton = document.querySelector('[data-btn="order"]')
      const $closeModalButton = document.querySelector('[data-btn="close"]')
      const $inputs = document.querySelectorAll('input[data-type]')
      const $clientsNodes = document.querySelectorAll('[data-type="client"]')

      const lightThemeClients = data.clients.lightThemeClients
      const darkThemeClients = data.clients.darkThemeClients

      if (isDarkTheme) {
        localStorage.removeItem('darkTheme')
        localStorage.setItem('darkTheme', true)
        $body.classList.add('dark')
        $header.classList.add('dark')
        $menu.classList.add('dark')
        $orderButton.classList.add('dark')
        $themeButton.innerHTML = SunIcon()
        $clientsNodes.forEach((clientsNode, index) => {
          clientsNode.src = darkThemeClients[index].source
        })
      } else {
        localStorage.removeItem('darkTheme')
        localStorage.setItem('darkTheme', false)
        $body.classList.remove('dark')
        $header.classList.remove('dark')
        $menu.classList.remove('dark')
        $orderButton.classList.remove('dark')
        $themeButton.innerHTML = MoonIcon()
        $clientsNodes.forEach((clientsNode, index) => {
          clientsNode.src = lightThemeClients[index].source
        })
      }
  
      window.addEventListener('scroll', handleWindowScroll)
      $logoButton.addEventListener('click', handleLogoButtonClick)
      $themeButton.addEventListener('click', () => handleThemeButtonClick($clientsNodes, lightThemeClients, darkThemeClients))
      $burgerButton.addEventListener('click', handleBurgerButtonClick)
      $orderButton.addEventListener('click', handleOrderButtonClick)
      $closeModalButton.addEventListener('click', handleCloseModalClick)
      $inputs.forEach((input) => input.addEventListener('keyup', handleInputsValueKeyup))
    }, 5000)
  })
  .catch((error) => console.error(error))