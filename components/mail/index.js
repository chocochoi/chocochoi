import React from 'react';
import '@styles/components/mail.scss';

const MailComponents = () => (
  <>
    <div id="mail-contents">
      <div className="mail-area">
        <form action="" method="post">
          <div className="box">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" name="name" placeholder="이름을 적어쥬세여" />
          </div>
          <div className="box">
            <label htmlFor="contents">내용</label>
            <textarea id="contents" name="contents" rows="10" placeholder="내용을 적어쥬세요" />
          </div>
          <div className="box">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" name="email" placeholder="이메일을 적어쥬세여" />
          </div>
        </form>
      </div>
    </div>
  </>
);

export default MailComponents;
