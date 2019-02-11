// JSXを使用する場合はimport Reactが必須（使わなければ必要ない）
// {Component} はクラスコンポーネントを使用すると胃に必須。class App extends Component
// import React, { Component } from 'react';

// クラスコンポーネントを使わなければ { Component } はいらない（使われてないのに指定しているとエラーが出る）
import React from 'react';


// class App のことをクラスコンポーネントと言う
// class App extends Component {
//   render() {
//     // render内に変数を記述できる
//     const text = "Hi, Tom";
//     // JSXのclassはclassNameにしなければならない
//     const dom = <h1 className="foo">{text}</h1>;
//     return (
//       // returnの中は一つのタグの中に囲まれていないといけない。<div>などで囲むでも良いが<React.Fragment>で囲むと不要な親タグが出力されないで描画できる
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am Clicked.")}} />
//         {/* dom変数を出力させる（return内が複数行の場合は{}で変数を囲まないといけない）*/}
//         {dom}
//       </React.Fragment>
//     );
//   }
// }

// const App は関数コンポーネント
const App = () => {
  return (
    <React.Fragment>
      {/* const Catを呼び出す */}
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  )
}

const Cat = () => {
  return <div>にゃおにゃお！</div>
}

export default App;
