import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [post, setPost] = useState([]);
  axios.defaults.headers.common['X-Master-Key'] = '$2b$10$MR8h4EUuK7ZBBfvmKRYutuV3jO618Lr.O3SAjk5oZl/3G/UEGj1jK';

  useEffect(() => {
    axios.get('https://api.jsonbin.io/v3/b/640646a9c0e7653a05837b5a').then((data) => {
      console.log('adadsads>>>>> ', data.data);
      console.log(data.data.record);
      console.log(data.data.record.hiragana);
      setPost(data?.data.record.hiragana);
    });
  }, []);

  return (
    <section>
      <div className='title'>
        <img src={logo} width='100px' alt='logo' />
        <h2>Hiragana</h2>
      </div>
      <div className='characters'>
        {post.map((item, i) => {
          return (
            <div className='character' key={i}>
              <span className='character__kana'>{item?.kana}</span>
              <span className='character__romanji'>{item?.romanji}</span>
              <span className='character__sound'>/{item?.sound}/</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default App;
