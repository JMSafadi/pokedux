import { Button, Col, Row } from 'antd';
import React from 'react';

const Classes = () => {

  const style = {margin: '10px'}

  return (
    <div className='classes__container'>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={3}>
          <Button style={style}>Grass</Button>
        </Col>
        <Col className="gutter-row" span={3}>
          <Button style={style}>Poison</Button>
        </Col>
        <Col className="gutter-row" span={3}>
          <Button style={style}>Fire</Button>
        </Col>
        <Col className="gutter-row" span={3}>
          <Button style={style}>Watter</Button>
        </Col>
        <Col className="gutter-row" span={3}>
          <Button style={style}>Flying</Button>
        </Col>
        <Col className="gutter-row" span={3}>
          <Button style={style}>Bug</Button>
        </Col>
        <Col className="gutter-row" span={3}>
          <Button style={style}>Ground</Button> 
        </Col>
        <Col className="gutter-row" span={3}>
          <Button style={style}>Normal</Button> 
        </Col>
        <Col className="gutter-row" span={3}>
          <Button style={style}>Electric</Button> 
        </Col>
        <Col className="gutter-row" span={3}>
          <Button style={style}>Fairy</Button>
        </Col>
        <Col className="gutter-row" span={3}>
          <Button style={style}>Fighting</Button> 
        </Col>
        <Col className="gutter-row" span={3}>
          <Button style={style}>Psychic</Button>
        </Col>
        <Col className="gutter-row" span={3}>
          <Button style={style}>Rock</Button> 
        </Col>
        <Col className="gutter-row" span={3}>
          <Button style={style}>Steel</Button>
        </Col>
        <Col className="gutter-row" span={3}>
          <Button style={style}>Ice</Button>
        </Col>
        <Col className="gutter-row" span={3}>
          <Button style={style}>Ghost </Button> 
        </Col>
        <Col className="gutter-row" span={3}>
        </Col>
      </Row>
    </div>
  )
}

export default Classes;
