import React from 'react';
import List from '@/menu01/List.js';

const Menu01Container = () => {
  const [title, setTitle] = React.useState('');
  const [list, setList] = React.useState([0]);
  const clickHandler = () => {
    setList([...list, title]);
    setTitle('');
  };
  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <input onChange={(e) => { changeHandler(e); }} type="text" />
      <button onClick={(e) => { clickHandler() ;}}>클릭</button>
      <ul>
        {
          list.map((obj, index) => (
            <List key={`${index}key`} item={obj} />
          ))
        }
      </ul>
    </div>
  );
};

export default Menu01Container;
