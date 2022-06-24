import React from 'react'

import { Growl, useGrowl } from '../../'
import 'react-growl/dist/index.css'

const App = () => {
  const [active, setActive] = useGrowl(5000)

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className='App-link'
          href='x'
          onClick={(event) => {
            event.preventDefault()
            setActive(true)
          }}
        >
          Clik here to activate the growl
        </a>
      </header>
      <Growl
        onDismissed={() => setActive(false)}
        active={active}
        message='Hello World!'
      />
    </div>
  )
}

export default App
