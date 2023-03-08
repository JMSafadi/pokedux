import { Col } from 'antd';
import React from 'react';
import logo from '../statics/logo.svg'

const Logo = () => {
  return (
    <Col span={5} offset={10} >
      <img src={logo} alt='logo'/>
    </Col>
  );
}

export default Logo;
