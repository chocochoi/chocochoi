import React from 'react';
import axios from 'axios';
import '@styles/components/mail.scss';


class MailComponents extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    isLoader: false,
  }

  mailFormHandler = (e) => {
    const obj = {};
    obj[e.target.id] = e.target.value;
    this.setState(obj);
  }

validation = () => {
  switch (true) {
  case !this.state.name:
    alert('이름을 입력하세오');
    break;
  case !this.state.message:
    alert('메세지를 입력하세오');
    break;
  case !this.state.email:
    alert('이멜을 입력하세오');
    break;
  default:
    return this.mailSubmit();
  }
}

async mailSubmit() {
  const form = new FormData();
  form.append('name', this.state.name);
  form.append('email', this.state.email);
  form.append('message', this.state.message);

  this.setState({
    isLoader: true,
  });

  try {
    await axios.post('https://script.google.com/macros/s/AKfycbzjXFXeSTbhD2b35pfatSn6zCkTVswRvTRckKEwtCPPPkQYTgym/eec', form);
    alert('전송 성공');
    this.setState({
      isLoader: false,
    });
  } catch (error) {
    alert('전송 실패');
    this.setState({
      isLoader: false,
    });
  }
}

render() {
  return (
    <>
      <div id="mail-contents">
        <div className="mail-area">
          {/* <form className="gform" id="mailForm" date-email="chocochoi76@gmail.com" action="https://script.google.com/macros/s/AKfycbzjXFXeSTbhD2b35pfatSn6zCkTVswRvTRckKEwtCPPPkQYTgym/exec" method="post"> */}
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={(e) => { this.mailFormHandler(e); }} placeholder="이름을 적어쥬세여" />
          </div>
          <div className="form-group">
            <label htmlFor="message">내용</label>
            <textarea id="message" className="form-control" name="message" value={this.state.message} onChange={(e) => { this.mailFormHandler(e); }} rows="10" placeholder="내용을 적어쥬세요" />
          </div>
          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={(e) => { this.mailFormHandler(e); }} placeholder="이메일을 적어쥬세여" />
          </div>
          {/* </form> */}
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="button" onClick={(e) => { this.validation(e); }}>보내기</button>
          </div>
          <div className={`loading ${this.state.isLoader ? 'show' : 'hide'}`}>로딩중입니다.</div>
          {/* <iframe name="test" className="skip" /> */}
        </div>
      </div>
    </>
  );
}
}

export default MailComponents;
