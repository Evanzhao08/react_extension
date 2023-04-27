import { nanoid } from 'nanoid'
// import React from 'react'
import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

/* class Demo extends React.Component {
  state = {
    count: 0,
  }
  componentDidMount = () => {
    this.intervaltimer = setInterval(() => {
      this.setState((state) => ({ count: state.count + 1 }))
    }, 1000)
  }
  componentWillUnmount = () => {
    clearInterval(this.intervaltimer)
  }

  add = () => {
    //  this.setState({ count: this.state.count + 1 })
    this.setState((state) => ({ count: state.count + 1 }))
  }
  unmount = () => {
    console.log('ss')
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  render() {
    return (
      <div>
        <h2>当前求和为{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.unmount}>卸载组件</button>
      </div>
    )
  }
} */

function Demo() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('jack')
  const myRef = React.useRef()
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
      console.log('卸载组件')
    }
  }, [])

  //   useEffect(() => {
  //   console.log('@@@@')
  // }, [name])

  const add = () => {
    setCount(count + 1)
  }
  function subtract() {
    setCount((count) => count - 1)
  }
  function chengeName() {
    setName(nanoid())
    // setName(() => 'Bruce')
  }
  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  function show() {
    console.log(myRef.current.value)
  }
  return (
    <div>
      <h2>当前求和为{count}</h2>
      <h4>当前名字是{name}</h4>
      <input type="text" ref={myRef} />
      <button onClick={add}>点我+1</button>
      <button onClick={subtract}>点我-1</button>
      <button onClick={chengeName}>改名</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点我提示数据</button>
    </div>
  )
}

export default Demo
