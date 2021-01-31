// Подключаем реакт и реакт-DOM из библиотек
import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBlock from "./components/HeaderBlock";

import './index.css';

// Не удобный способ
// Создаем реакт эл-т
// const el = React.createElement(
//  Какой эл-т отобразим 
// 'h1',
// Св-ва эл-та
// null,
// Знач. эл-та
// 'Hello World, React.js!'
// );

// С помощью JSX
// Создание компонент
const AppList = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  const firstItems = <li>Item 0</li>
  const isAuth = false;
  return (
      <ul>
        {
          isAuth ? firstItems : null
        }
        {
          items
        }
        {
          items.map(item => <li>{item}</li>)
        }
        <li>{ items[0] }</li>
        <li>{ items[1] }</li>
      </ul>
  );
}
// Inline style
// const AppHeader = () => {
//   const margin = 40;
//   const headerStyle = {color: 'red',
//   marginLeft: `${margin}px`,
//   marginBottom: `${margin}px`,
//   };
//   return (
//     <h1 
//       style={headerStyle}
//       className="App-header"
//     >
//       This is my Header!
//       </h1>
//       );
// }

const AppHeader = () => {
  return (
<h1 
      
      className="header"
    >
      This is my Header!
      </h1>
  );
};

const AppInput = () => {
  const placeholder = 'Type text...';
  const autocomplete = 'off';
  const tabindex = '0';
  return (
    <label htmFor="search">
      <input 
      id="search"
      placeholder={placeholder}
      autoComplete={autocomplete}
      tabIndex={tabindex}
      />
    </label>
  )
}


// Показ на стр.
// Передаем в index.html эл-ту с id="root"
ReactDOM.render(<App/>, document.getElementById('root'));