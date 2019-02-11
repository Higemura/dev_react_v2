// クラスコンポーネントを使わなければ { Component } はいらない（使われてないのに指定しているとエラーが出る）
import React from 'react';
import PropTypes from 'prop-types';

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
// User.defaultProps = {
//   age: 1
// }

// propsの型を指定する
User.propTypes = {
  // stringで文字列にできる（nameに数字などが入るとエラーを出す）
  name: PropTypes.string,
  // numberで数字にできる（ageに文字列などが入るとエラーを出す）
  age: PropTypes.number.isRequired // isRequiredでageを必須に設定できる（ageが存在しないとWarning Errorが出る）
}

export default App;
