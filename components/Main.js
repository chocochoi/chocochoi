import React from 'react';
import '@styles/components/main.scss';

const Main = () => (
  <>
    <div id="main-contents">
      <div className="mail-area">
        <div className="paper-box">
          <div className="cont-line">
            <span>이름</span>
            <span> : 최치연</span>
          </div>
          <div className="cont-line">
            <span>낄낄낄</span>
            <span> : 93.10.19</span>
          </div>
          <div className="cont-line">
            <span>이메일</span>
            <span> : chocochoi76@gmail.com</span>
          </div>
          <div className="cont-line">
            <span>이메일</span>
            <span> : chocochoi76@gmail.com</span>
          </div>
          <div className="cont-line">
            <span>이메일</span>
            <span> : chocochoi76@gmail.com</span>
          </div>
        </div>
        <div className="mail-box">
          {/*  */}
        </div>
      </div>
      {/* <img src={require('@images/main/photo_01.jpg')} /> */}
    </div>
  </>
);

export default Main;
