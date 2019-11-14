import React from 'react';
import axios from 'axios';
import '@styles/components/mail.scss';

class MailComponents extends React.Component {
  state = {
    name: '',
    contents: '',
    email: ''
  }

  mailFormHandler = (e) => {
    const obj = {};
    obj[e.target.id] = e.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <>
        <div id="mail-contents">
          <div className="mail-area">
            <form action="" method="post">
              <div className="box">
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" value={this.state.name} onChange={(e)=>{this.mailFormHandler(e)}} placeholder="이름을 적어쥬세여" />
              </div>
              <div className="box">
                <label htmlFor="contents">내용</label>
                <textarea id="contents" name="contents" value={this.state.contents} onChange={(e)=>{this.mailFormHandler(e)}} rows="10" placeholder="내용을 적어쥬세요" />
              </div>
              <div className="box">
                <label htmlFor="email">이메일</label>
                <input type="email" id="email" name="email" value={this.state.email} onChange={(e)=>{this.mailFormHandler(e)}} placeholder="이메일을 적어쥬세여" />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default MailComponents;
