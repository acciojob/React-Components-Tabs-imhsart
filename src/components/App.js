
import React from 'react'
import Tabs from './Tabs'

const tabArr = [
  {id: 1, name: 'Home'},
  {id: 2, name: 'About'},
  {id: 3, name: 'Features'},
]
const App = () => {
  return (
    <div>
      <div className='viewport'>Pages Go Here</div>
      {
        tabArr.map(item => {
          return <Tabs tab = {item.name} key={item.id} />
        })
      }
    </div>
  )
}

export default App