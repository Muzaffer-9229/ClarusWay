import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import { getUsers } from "./src/getUsers"
import "./style.css"

document.querySelector("#app").innerHTML = `
  <h1>Hello FS16 and Vite</h1>
    
`

window.addEventListener("load", () => {
  getUsers()
})
