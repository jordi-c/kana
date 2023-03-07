import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Character from './components/Character';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [hiraganaTable, setHiraganaTable] = useState([]);

  const getData = async () => {
    axios.defaults.headers.common['X-Master-Key'] = '$2b$10$MR8h4EUuK7ZBBfvmKRYutuV3jO618Lr.O3SAjk5oZl/3G/UEGj1jK';
    const { data } = await axios.get('https://api.jsonbin.io/v3/b/640646a9c0e7653a05837b5a');
    doHiraganaTable(data.record.hiragana);
    setData(data.record.hiragana);
  };

  const doHiraganaTable = (characters) => {
    let
      table = [],
      row = -1,
      col = 0
      ;
    characters.forEach((character) => {
      switch (character.structure[1]) {
        case 'a':
          col = 0;
          row++;
          table.push([{},{},{},{},{}]);
          break;
        case 'i':
          col = 1;
          break;
        case 'u':
          col = 2;
          break;
        case 'e':
          col = 3;
          break;
        case 'o':
          col = 4;
          break;
        default:
          col = 0;
      }
      table[row][col] = character;
    });

    console.log('hiraganaTable: ', table);
    setHiraganaTable(table);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <section>
      <div className='title'>
        <img src={logo} width='100px' alt='logo' />
        <h2>Hiragana</h2>
      </div>
      <div className='characters'>
        {hiraganaTable.map((item, index) => {
          return (
            <div
              key={item[0].romanji}
              className='characters__row'>
              <Character
                structure={item[0].structure}
                kana={item[0].kana}
                romanji={item[0].romanji}
                sound={item[0].sound}
              />
              <Character
                structure={item[1].structure}
                kana={item[1].kana}
                romanji={item[1].romanji}
                sound={item[1].sound}
              />
              <Character
                structure={item[2].structure}
                kana={item[2].kana}
                romanji={item[2].romanji}
                sound={item[2].sound}
              />
              <Character
                structure={item[3].structure}
                kana={item[3].kana}
                romanji={item[3].romanji}
                sound={item[3].sound}
              />
              <Character
                structure={item[4].structure}
                kana={item[4].kana}
                romanji={item[4].romanji}
                sound={item[4].sound}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default App;
