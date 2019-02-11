import React, { Component } from 'react';


// JSXでの書き方。構文が少なくて済む（直感的にコーディングできる）
// class App extends Component {
//   render() {
//     // この部分
//     return (
//       <div>
//         Hello World!
//       </div>
//     );
//   }
// }

// JavaScriptでの書き方。return の後にReact.createElement内に引数として記述する
// class App extends Component {
//   render() {
//     // この部分
//     return React.createElement(
//       "div", // 第一引数
//       null, // 第二引数
//       "Hello World!!!" // 第三引数
//     );
//   }
// }


// 練習
class App extends Component {
  render() {
    // returnの後に()がなければ一文で記述する
    return <div><h1>Hello World!</h1></div>;
  }
}

export default App;
