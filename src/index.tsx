import { normalize, setupPage } from 'csstips'
import { App } from './App'
import ReactDOM from 'react-dom'

setupPage('#root')
normalize()

const app = document.getElementById('root')
ReactDOM.render(<App />, app)
