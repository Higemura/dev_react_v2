// JSXを使用する場合はimport Reactが必須（使わなければ必要ない）
// {Component} はクラスコンポーネントを使用すると胃に必須。class App extends Component
// import React, { Component } from 'react';

// クラスコンポーネントを使わなければ { Component } はいらない（使われてないのに指定しているとエラーが出る）
import React from 'react';

// const App は関数コンポーネント
const App = () => {
  const profiles = [
    {
      name: "Taro",
      age: 10
    },
    {
      name: "Hanakp",
      age: 5
    },
    {
      name: "NoName"
      // ageが設定されてないのでPropsのデフォルト値からageを取得させる
    }
  ];
  return (
    <React.Fragment>
      {
        // mapでprofilesの配列をループさせる（第一引数にprofileを指定してprofile.nameのように設置する）
        // keyにユニークキーを設定することによってVDOMの変更箇所を教えてあげる（設定してないとWarning Errorが出る）
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
      {/* <User name={"Taro"} age={10} />
      <User name={"Hanako"} age={5} /> */}
    </React.Fragment>
  )
}

// propsでnameとageの値を渡す
const User = (props) => {
  return <div>Hi, I am {props.name}!, and {props.age} yers old!</div>
}

// Propsのデフォルト値を設定（Propsに値がなかった時などはここから取得させる）
User.defaultProps = {
  age: 1
}

export default App;
