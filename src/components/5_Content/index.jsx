import React, { Component } from 'react'
import './index.css'

const MyContext = React.createContext()
const { Provider, Consumer } = MyContext
export default class A extends Component {
  state = { username: 'tom' }
  render() {
    return (
      <div className="parent">
        <h3>我是A组件</h3>
        <h4>我的用户名是：{this.state.username}</h4>
        <Provider value={{ username: this.state.username, age: 18 }}>
          <B />
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="child">
        <h3>我是B组件</h3>
        <h4>从A接收到的用户名：{this.props.username}</h4>
        <C />
      </div>
    )
  }
}

class C extends Component {
  static contextType = MyContext
  render() {
    console.log(this.context)
    return (
      <div className="grand">
        <h3>我是C组件</h3>
        <h4>从A接收到的用户名:</h4>
        <Consumer>{(value) => {}}</Consumer>
        <D />
      </div>
    )
  }
}

function D() {
  return (
    <div className="grands">
      <h3>我是D组件</h3>
      <h4>从A接收到的用户名</h4>
      <Consumer>
        {(value) => {
          return `${value.username},年龄是${value.age}`
        }}
      </Consumer>
    </div>
  )
}
