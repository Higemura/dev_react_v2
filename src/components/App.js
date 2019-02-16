// クラスコンポーネントを使わなければ { Component } はいらない（使われてないのに指定しているとエラーが出る）
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';

// const App は関数コンポーネント
// const App = () => (<Counter></Counter>)

// propsでnameとageの値を渡す
// class Counter extends Component {
class App extends Component {
  render() {
    // stateの中身を確認（this.stateに何も設定してないとnullになる）
    console.log(this.state)
    // this.stateからcountを取得する

    const props = this.props;
    return (
      <React.Fragment>
        {/* <div>counter: { this.state.count }</div> */}
        <div>value: { props.value }</div>
        <button onClick={ props.increment }>+1</button>
        <button onClick={ props.decrement }>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value });

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App;
