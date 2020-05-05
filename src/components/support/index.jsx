import React, { useEffect, useState } from 'react';
import { Input, Button, Row, Col, Card } from 'antd';
import { PlusCircleOutlined, ClearOutlined } from '@ant-design/icons';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import useAxios from 'axios-hooks';
import ReactTableComponent from '../reactTable';
import CustomBreadcrumb from '../breadcrumb';
import CustomDropDown from '../customDropdown';
import CRForm from './form';
import './support.scss';
import { updateCRField } from '../../actions/createCR';
import ShowCRForm from './showForm';
import { getCRS } from '../../helper';

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
// const d= new Date();
// const y= d.getFullYear();
// const yearOptions = [];
// while()
const yearOptions = [
  { value: 2020, label: '2020' },
  { value: 2019, label: '2019' },
  { value: 2018, label: '2018' },
  { value: 2017, label: '2017' }
];
const monthOptions = [
  { value: 1, label: 'Jan' },
  { value: 2, label: 'Feb' },
  { value: 3, label: 'Mar' },
  { value: 4, label: 'Apr' },
  { value: 5, label: 'May' },
  { value: 6, label: 'Jun' },
  { value: 7, label: 'Jul' },
  { value: 8, label: 'Aug' },
  { value: 9, label: 'Sep' },
  { value: 10, label: 'Oct' },
  { value: 11, label: 'Nov' },
  { value: 12, label: 'Dec' }
];
// const statusOptions = [
//   { value: '0', label: 'Closed' },
//   { value: '1', label: 'Pending' }
// ];
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
const onShowHandler = (id, dispatch) => {
  console.log(id);
  dispatch(updateCRField({ showPopUp: true, showCRDetail: true, selectedCRRowId: id }));
};
const constructCrs = (data, ticketOptions, dispatch, setData, cid, onShowEvent) => {
  const statusColors = {
    '1': 'newSButton',
    '2': 'pendingSButton',
    '3': 'closedSButton',
    '4': 'cancelSButton',
    '5': 'rejectedSButton'
  };
  const cData = data.map(item => {
    const crIdf = cid.filter(c => c.value === parseInt(item.circuit_id));
    const crId = crIdf.length > 0 ? crIdf[0].label : '';
    return {
      id: item.cr_submission_id,
      rDate: moment(item.raised_date).format('MMMM Do YYYY'),
      crid: crId,
      mess: (
        <Button
          type="primary"
          className="showButton"
          key={`show${item.cr_submission_id}`}
          onClick={() => onShowEvent(item.cr_submission_id, dispatch)}
        >
          Show
        </Button>
      ),
      status: (
        <Button type="primary" className={`${statusColors[item.status_id]}`} key={item.cr_submission_id}>
          {ticketOptions.length > 0 ? ticketOptions.filter(tickets => tickets.value === item.status_id)[0].label : 0}
        </Button>
      )
    };
  });
  setData(cData);
  dispatch(updateCRField({ totalTickets: cData.length }));
};
function Support() {
  const dispatch = useDispatch();

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
  const [data, setData] = useState([]);
  const CR = useSelector(state => state.createCR);
  console.log(333, CR.filters);

  useEffect(() => {
    constructCrs(CR.allCrs, CR.ticketStatusOptions, dispatch, setData, CR.circuitIds, onShowHandler);
  }, [CR.allCrs, CR.circuitIds, CR.ticketStatusOptions, dispatch]);

  // useDispatch(updateCRField({ allCrs }));
  function openModal() {
    dispatch(updateCRField({ showPopUp: true }));
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    dispatch(updateCRField({ showPopUp: false, showCRDetail: false }));
  }
  const updateFilters = obj => {
    const uFilters = Object.assign({}, CR.filters, { ...obj });
    dispatch(updateCRField({ filters: uFilters }));
    console.log(222, uFilters);
    const paramsF = {
      user_id: uFilters.userId,
      month: uFilters.sMonth,
      year: uFilters.sYear,
      status: uFilters.sstatus
    };
    getCRS('/cr/getcr/', useAxios, dispatch, paramsF, updateCRField);
  };

  return (
    <>
      <Row className="page supportPage">
        <Col span={24}>
          <CustomBreadcrumb breadLinks={['Support & CR', 'CR']} />
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
                            <div className="points">{CR.totalTickets}/10</div>
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
                        <CustomDropDown
                          customClassName="customDropdown"
                          selectedValue={CR.filters.sYear}
                          name="filterYear"
                          options={yearOptions}
                          customOnChangeEvent={({ value }) => {
                            updateFilters({ sYear: value });
                          }}
                        />
                      </Col>
                      <Col span={6}>
                        <label htmlFor="month">Month</label>
                        <CustomDropDown
                          customClassName="customDropdown"
                          selectedValue={CR.filters.sMonth}
                          name="filterMonth"
                          options={monthOptions}
                          customOnChangeEvent={({ value }) => {
                            dispatch(updateCRField(value));
                            updateFilters({ sMonth: value });
                          }}
                        />
                      </Col>
                      <Col span={6}>
                        <label htmlFor="status">Status</label>
                        <CustomDropDown
                          customClassName="customDropdown"
                          selectedValue={CR.filters.sstatus}
                          name="filterStatus"
                          options={CR.ticketStatusOptions}
                          customOnChangeEvent={({ value }) => {
                            updateFilters({ sstatus: value });
                          }}
                        />
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
                <ReactTableComponent columns={columns} data={data} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        isOpen={CR.showPopUp}
        onAfterOpen={afterOpenModal}
        onRequestClose={() => closeModal()}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {!CR.showCRDetail && <CRForm setIsOpen={() => closeModal()} />}
        {CR.showCRDetail && <ShowCRForm closeModel={() => closeModal()} crs={CR} />}
      </Modal>
    </>
  );
}

export default Support;
