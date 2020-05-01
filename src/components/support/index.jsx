import React from 'react';
import { Input, Button, Row, Col, Card } from 'antd';
import { PlusCircleOutlined, ClearOutlined } from '@ant-design/icons';
import Modal from 'react-modal';
import Select from 'react-select';
import ReactTableComponent from '../reactTable';
import CustomBreadcrumb from '../breadcrumb';
import CRForm from './form';
import './support.scss';

Modal.setAppElement('body');
const customStyles = {
  content: {
    top: '10%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -10%)',
    width: 1000,
    height: '100%'
  }
};

const { Search } = Input;
const yearOptions = [
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
  { value: '2018', label: '2018' },
  { value: '2017', label: '2017' }
];
const monthOptions = [
  { value: '0', label: 'Jan' },
  { value: '1', label: 'Feb' },
  { value: '2', label: 'Mar' },
  { value: '3', label: 'Apr' },
  { value: '4', label: 'May' },
  { value: '5', label: 'Jun' },
  { value: '6', label: 'Jul' },
  { value: '7', label: 'Aug' },
  { value: '8', label: 'Sep' },
  { value: '9', label: 'Oct' },
  { value: '10', label: 'Nov' },
  { value: '11', label: 'Dec' }
];
const statusOptions = [{ value: '0', label: 'Closed' }, { value: '1', label: 'Pending' }];
const customDropdownStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: '100%',
    border: '1px solid green'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

function Support() {
  const data = [
    {
      id: 1,
      rDate: '02/02/2020',
      crid: 'CR1212',
      mess: 'Requesting ..',
      status: (
        <Button type="primary" className="pending">
          Pending
        </Button>
      )
    },
    {
      id: 2,
      rDate: '01/02/2020',
      crid: 'CR1213',
      mess: 'Requesting ..',
      status: (
        <Button type="primary" className="closed">
          Closed
        </Button>
      )
    },
    {
      id: 3,
      rDate: '03/02/2020',
      crid: 'CR1214',
      mess: 'Requesting ..',
      status: (
        <Button type="primary" className="closed">
          Closed
        </Button>
      )
    },
    {
      id: 4,
      rDate: '04/02/2020',
      crid: 'CR1232',
      mess: 'Requesting ..',
      status: (
        <Button type="primary" className="closed">
          Closed
        </Button>
      )
    },
    {
      id: 5,
      rDate: '05/02/2020',
      crid: 'CR1217',
      mess: 'Requesting ..',
      status: (
        <Button type="primary" className="pending">
          Pending
        </Button>
      )
    },
    {
      id: 6,
      rDate: '05/02/2020',
      crid: 'CR1218',
      mess: 'Requesting ..',
      status: (
        <Button type="primary" className="pending">
          Pending
        </Button>
      )
    },
    {
      id: 7,
      rDate: '05/02/2020',
      crid: 'CR1219',
      mess: 'Requesting ..',
      status: (
        <Button type="primary" className="pending">
          Pending
        </Button>
      )
    },
    {
      id: 8,
      rDate: '05/02/2020',
      crid: 'CR1219',
      mess: 'Requesting ..',
      status: (
        <Button type="primary" className="pending">
          Pending
        </Button>
      )
    },
    {
      id: 9,
      rDate: '05/02/2020',
      crid: 'CR1220',
      mess: 'Requesting ..',
      status: (
        <Button type="primary" className="pending">
          Pending
        </Button>
      )
    },
    {
      id: 10,
      rDate: '05/02/2020',
      crid: 'CR1220',
      mess: 'Requesting ..',
      status: (
        <Button type="primary" className="pending">
          Pending
        </Button>
      )
    },
    {
      id: 11,
      rDate: '05/02/2020',
      crid: 'CR1222',
      mess: 'Requesting ..',
      status: (
        <Button type="primary" className="pending">
          Pending
        </Button>
      )
    }
  ];
  const columns = [
    {
      Header: 'CR ID',
      accessor: 'id'
    },
    {
      Header: 'Circuid ID',
      accessor: 'crid'
    },
    {
      Header: 'Raised Date',
      accessor: 'rDate'
    },
    {
      Header: 'Firewall rules',
      accessor: 'mess'
    },
    {
      Header: 'Status',
      accessor: 'status'
    }
  ];
  const [modalIsOpen, setIsOpen] = React.useState(true);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Row className="page supportPage">
        <Col span={24}>
          <CustomBreadcrumb breadLinks={['Support & CR', 'CR']} />
          {/* <Row className="CRcard">
            <Col span={24}>
              <Card>
                <div className="title">Apply for CR</div>
                <div className="rating">
                  <div className="points">7/10</div>
                  <div className="remains">Remaining CR </div>
                </div>
                <div className="buttonbar">
                  <Button type="primary" icon={<PlusCircleOutlined />} onClick={openModal}>
                    Apply for CR{' '}
                  </Button>
                </div>
                <div className="linkbar" />
              </Card>
            </Col>
          </Row> */}
          <Row>
            <Col span={24}>
              <div className="tableBlock">
                <h3>CR Log</h3>
                <Row className="tableHeader">
                  <Col span={6}>
                    <Row className="flexColumn">
                      <Col>
                        <Card className="customCard">
                          <div className="rating">
                            <div className="points">7/10</div>
                            <div className="remains">Remaining CR </div>
                          </div>

                          <div className="linkbar" />
                        </Card>
                      </Col>
                      <Col>
                        <div className="buttonbar">
                          {' '}
                          <Button
                            type="primary"
                            icon={<PlusCircleOutlined />}
                            className="filterButton"
                            onClick={openModal}
                          >
                            Apply for CR{' '}
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={6} />
                  <Col span={12} className="filterButtonBlocks">
                    <Row>
                      <Col span={6}>
                        <label htmlFor="year">Year</label>{' '}
                        <Select
                          className="customDropdown"
                          defaultValue={yearOptions[0]}
                          // styles={customDropdownStyles}
                          isClearable={false}
                          isSearchable={false}
                          name="filterYear"
                          options={yearOptions}
                        />{' '}
                      </Col>
                      <Col span={6}>
                        <label htmlFor="month">Month</label>
                        <Select
                          className="customDropdown"
                          defaultValue={monthOptions[0]}
                          isClearable={false}
                          isSearchable={false}
                          name="filterMonth"
                          options={monthOptions}
                        />{' '}
                      </Col>
                      <Col span={6}>
                        <label htmlFor="status">Status</label>
                        <Select
                          className="customDropdown"
                          defaultValue={statusOptions[0]}
                          isClearable={false}
                          isSearchable={false}
                          name="filterStatus"
                          options={statusOptions}
                        />{' '}
                      </Col>
                      <Col span={6} className="buttonbar">
                        {/* <label htmlFor="buttons">&nbsp;</label> */}
                        <Button type="primary" className="filterButton" icon={<ClearOutlined />}>
                          Clear Filter{' '}
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div className="tableSearch">
                  {/* <Search placeholder="" onSearch={value => console.log(value)} style={{ width: 200 }} /> */}
                </div>
                <ReactTableComponent columns={columns} data={data} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CRForm />
      </Modal>
    </>
  );
}

export default Support;
