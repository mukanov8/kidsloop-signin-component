import React from 'react'
import Signin from './components/Signin'

const App = () => {
  return (
    <div
      className="md:bg-kidsloop dark:bg-gray-800 md:dark:bg-gray-600 bg-center w-screen h-screen flex justify-center items-center flex-col"
      data-testid="app"
    >
      <Signin />
    </div>
  )
}

export default App
