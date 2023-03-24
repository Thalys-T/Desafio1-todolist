import { List } from './List'
import { Header } from './components/Header'

import './global.css';

export function App() {
  return (
    <div>
      <Header/>
      <List
        author="Jhon"
        content="lorem"
      
      />
      <List
        author="marcelus"
        content="doublelorem"
      
      />
    </div>
  )
}

