import ReactDOM from 'react-dom'
import { App } from './App'
import { setupPage, normalize } from "csstips"

setupPage('#root')
normalize()

const app = document.getElementById('root')
ReactDOM.render(<App />, app)
