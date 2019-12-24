import React from 'react';
import { Col, Row } from 'antd';

export default function() {
  return (
    <Row>
      <Col
        span={12}
        style={{
          minHeight: 150,
          padding: 16,
          borderRight: '1px solid #DDD',
        }}
      >
        INSERT_BLOCK_PLACEHOLDER:Col 12
      </Col>
      <Col
        span={12}
        style={{
          minHeight: 150,
          padding: 16,
        }}
      >
        INSERT_BLOCK_PLACEHOLDER:Col 12
      </Col>
    </Row>
  );
}
