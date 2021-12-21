import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { Layout } from "./components/Layout"
import { Projects } from "./components/Projects"
import { Home } from "./components/Home"
import { NotFound } from "./components/NotFound"

export function App() {
  return <Router>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
}
