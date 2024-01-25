import React, { useState } from 'react';
import './css/reset.css';
import './css/App.css';

function App() {

  return (
  <div className='body'>
    <div>
      <span>My Todo List</span><span>React_4기</span>
      </div>
      <form>
        <label>제목 : </label><input type='text'></input>
        <label>내용 : </label><input type='text'></input>
        <button>추가하기</button>
        </form>
        <div>
          <h1>Working🔥</h1>
          <div>
            <div>
              <h2>todo title</h2>
              <p>todo text</p>
              <div>
                <button>
                  삭제하기
                </button>
                <button>
                  완료
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>Done✔️</h1>
          <div>
            <div>
              <h2>todo title</h2>
              <p>todo text</p>
              <div>
                <button>
                  삭제하기
                </button>
                <button>
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
        
    </div>);
}

export default App;
