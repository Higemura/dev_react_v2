// クラスコンポーネントを使わなければ { Component } はいらない（使われてないのに指定しているとエラーが出る）
import React, { Component } from 'react';

// const App は関数コンポーネント
const App = () => (<Counter></Counter>)

// propsでnameとageの値を渡す
class Counter extends Component {
  // コンストラクターはpropsを受け取ることができる
  constructor(props) {
    // super内にpropsを指定して初期化する
    super(props)
    // stateの中身を確認（undefined）
    console.log(this.state)
    // stateにcountを追加する
    this.state = {count: 0}
  }

  // プラスボタン
  handlePlusButton = () => {
    console.log('プラスボタン クリック');
    console.log(this.state.count);

    // setStateでstateに状態（値）をセットできる
    this.setState({ count: this.state.count + 1})

    // setStateを使わずthis.stateを直接更新することはできない。stateの値を変えるには必ずsetStateを使う。
    // this.state = {count: this.state.count + 1}
  }

  // マイナスボタン
  handleMinusButton = () => {
    console.log('マイナスボタン クリック');
    console.log(this.state.count);

    // setStateでstateに状態（値）をセットできる
    this.setState({ count: this.state.count - 1})

    // setStateを使わずthis.stateを直接更新することはできない。stateの値を変えるには必ずsetStateを使う。
    // this.state = {count: this.state.count - 1}
  }

  render() {
    // stateの中身を確認（this.stateに何も設定してないとnullになる）
    console.log(this.state)
    // this.stateからcountを取得する
    return (
      <React.Fragment>
        <div>counter: { this.state.count }</div>
        <button onClick={ this.handlePlusButton }>+1</button>
        <button onClick={ this.handleMinusButton }>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
