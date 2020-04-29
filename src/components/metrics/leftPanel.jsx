import React, { useState } from 'react';
import { Input, Layout, Row, Col, Checkbox, Divider } from 'antd';
import './metrics.scss';
// import Logo from 'assets/images/logo.svg';
const CheckboxGroup = Checkbox.Group;

function LeftPanel() {
  const [checkAll, setCheckAll] = useState(false);
  const plainOptions = [
    'Circuit ID: CX2948',
    'Circuit ID: CX2949',
    'Circuit ID: CX2910',
    'Circuit ID: CX2941',
    'Circuit ID: CX2942'
  ];
  const [filterOptions, setFilterOptions] = useState([]);

  const onChange = checkedList => {
    setFilterOptions(checkedList);

    if (plainOptions.length === checkedList.length) setCheckAll(true);
    else setCheckAll(false);
  };
  const onCheckAllChange = e => {
    const value = e.target.checked;

    setCheckAll(value);
    if (!value) {
      setFilterOptions([]);
    } else {
      setFilterOptions(plainOptions);
    }
  };
  return (
    <Row className="page">
      <Col span={24}>
        <div className="site-checkbox-all-wrapper">
          <Checkbox onChange={e => onCheckAllChange(e)} checked={checkAll} className="checkboxAll">
            All
          </Checkbox>
          <Divider />
        </div>
      </Col>
      <Col span={24}>
        <CheckboxGroup
          options={plainOptions}
          value={filterOptions}
          onChange={checkedList => onChange(checkedList)}
          className="checkboxGroups"
        />
      </Col>
    </Row>
  );
}

export default LeftPanel;
