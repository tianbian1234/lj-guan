import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';
import Img from 'public/images/icon.jpg';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="nav-box">
        <a href="peixun/index.html"><img src={Img} alt='创客空间logo'/></a>
        <ul className="nav-ul">
          <li className="active"><a>首页</a></li>
          <li><a>文章</a></li>
          <li><a>消息</a></li>
          <li><a>关于</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
