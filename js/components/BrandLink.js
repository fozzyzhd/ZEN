/**
 * @param {object} brandLink 
 * @returns {string}
 */

 import Apple from '../ui/Apple.js'
 import Google from '../ui/Google.js'
 
 const BrandLink = (brandLink) => {
 
   if(brandLink.name === 'apple') {
   return `
     <a href=${brandLink.url} target="_blank">
       ${Apple()}
     <span>${brandLink.texts[0]}</span>
     <span>${brandLink.texts[1]}</span>
     </a>
   `
   }else{
     return `
       <a href=${brandLink.url} target="_blank">
         ${Google()}
       <span>${brandLink.texts[0]}</span> 
       <span>${brandLink.texts[1]}</span> 
       </a>
     `
   }
 }
 
 export default BrandLink