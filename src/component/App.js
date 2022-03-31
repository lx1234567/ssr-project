import React from 'react'

const App = () => {
  const onClickHandle = () => {
    alert("ssss")
  }
  return <div>
    <h1>this is my Apps client</h1>
    <button onClick={onClickHandle}>点击</button>
  </div>
}

export default App