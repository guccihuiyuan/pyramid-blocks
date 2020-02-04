import React from 'react';
import { Col, Row } from 'antd';

export default function() {
  return (
    <Row gutter={16}>
      <Col span={6}>
        <div style={{height: '60px', lineHeight: '60px', border: '1px dashed gray', textAlign: 'center'}}>
          INSERT_BLOCK_PLACEHOLDER:Col
        </div>
      </Col>
      <Col span={6}>
        <div style={{height: '60px', lineHeight: '60px', border: '1px dashed gray', textAlign: 'center'}}>
          INSERT_BLOCK_PLACEHOLDER:Col
        </div>
      </Col>
      <Col span={6}>
        <div style={{height: '60px', lineHeight: '60px', border: '1px dashed gray', textAlign: 'center'}}>
          INSERT_BLOCK_PLACEHOLDER:Col
        </div>
      </Col>
      <Col span={6}>
        <div style={{height: '60px', lineHeight: '60px', border: '1px dashed gray', textAlign: 'center'}}>
          INSERT_BLOCK_PLACEHOLDER:Col
        </div>
      </Col>
    </Row>
  );
}
