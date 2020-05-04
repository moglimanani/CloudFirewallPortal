import createCRTypes from '../actions/createCRActionTypes';

const d = new Date();
const cmonth = d.getMonth();
const cyear = d.getFullYear();
const initialState = {
  totalRows: 0,
  MAXROWS: 50,
  circuitId: '',
  portDetails: [],
  applicationDetails: [],
  urlDetails: [],
  fileDetails: [],
  ips: null,
  sandbox: null,
  shapping: null,
  spam: null,
  circuitIds: [
    { value: 1, label: 'CX1234' },
    { value: 2, label: 'CX1235' },
    { value: 3, label: 'CX1236' },
    { value: 4, label: 'CX1237' }
  ],
  portOutgoingOptions: [],
  portStatusOptions: [],
  webAppOptions: [],
  //   hackOptions: [{ value: 0, label: 'Hacking' }],
  fileOptions: [],
  webCategory: [],
  applicationCategory: [],
  domainOptions: [
    { value: 0, label: 'http' },
    { value: 1, label: 'https' }
  ],
  protocolOptions: [],
  currentPortDetails: { type: null, port: null, status: null },
  currentApplicationDetails: { type: null, category: null, status: null },
  curretURLDetails: null,
  currentFileDetails: { type: null, status: null },
  filters: {
    userId: 1,
    sMonth: cmonth + 1,
    sYear: cyear,
    sstatus: 1
  },
  allCrs: [],
  ticketStatusOptions: [],
  totalTickets: 0,
  showPopUp: false,
  showCRDetail: false,
  selectedCRRowId: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case createCRTypes.UPDATE_CIRCUIT_ID:
      return { ...state, circuitId: action.payload.id };
    case createCRTypes.UPDATE_CR_FIELD:
      return { ...state, ...action.payload };
    case createCRTypes.UPDATE_CURRENT_PORT_DETAIL: {
      const updatedCurCircuitPortDetails = Object.assign({}, state.currentPortDetails, { ...action.payload });
      return { ...state, currentPortDetails: updatedCurCircuitPortDetails };
    }
    case createCRTypes.RESET_CURRENT_PORT_DETAIL:
      return { ...state, currentPortDetails: initialState.currentPortDetails };
    case createCRTypes.UPDATE_CURRENT_APP_DETAIL: {
      const updatedCuraAPPDetails = Object.assign({}, state.currentApplicationDetails, { ...action.payload });
      return { ...state, currentApplicationDetails: updatedCuraAPPDetails };
    }
    case createCRTypes.RESET_CURRENT_APP_DETAIL:
      return { ...state, currentApplicationDetails: initialState.currentApplicationDetails };

    case createCRTypes.INCREASE_ROW_COUNT:
      return { ...state, totalRows: state.totalRows + 1 };
    case createCRTypes.DECREASE_ROW_COUNT:
      return { ...state, totalRows: state.totalRows - 1 };
    case createCRTypes.ADD_PORT_DETAILS:
      return { ...state, portDetails: [...state.portDetails, action.payload] };

    case createCRTypes.DELETE_PORT_DETAILS: {
      const toDeletePortDetails = [...state.portDetails];

      toDeletePortDetails.splice(action.payload.id, 1);
      return { ...state, portDetails: toDeletePortDetails };
    }
    case createCRTypes.UPDATE_PORT_DETAILS: {
      const updatedPortDetails = state.portDetails.map((item, i) => {
        if (i === action.payload.id) return Object.assign({}, { ...item }, { ...action.payload.data });
        return item;
      });
      return { ...state, portDetails: updatedPortDetails };
    }
    case createCRTypes.ADD_APPLICATION_DETAILS:
      return { ...state, applicationDetails: [...state.applicationDetails, action.payload] };

    case createCRTypes.DELETE_APPLICATION_DETAILS: {
      const toDeleteAppDetails = [...state.applicationDetails];

      toDeleteAppDetails.splice(action.payload.id, 1);
      return { ...state, applicationDetails: toDeleteAppDetails };
    }
    case createCRTypes.UPDATE_APPLICATION_DETAILS: {
      const updatedAppDetails = state.applicationDetails.map((item, i) => {
        if (i === action.payload.id) return Object.assign({}, { ...item }, { ...action.payload.data });
        return item;
      });
      return { ...state, applicationDetails: updatedAppDetails };
    }
    case createCRTypes.UPDATE_CURRENT_URL_DETAIL:
      return { ...state, curretURLDetails: action.payload.url };
    case createCRTypes.RESET_CURRENT_URL_DETAIL:
      return { ...state, curretURLDetails: initialState.curretURLDetails };
    case createCRTypes.ADD_URL_DETAILS:
      return {
        ...state,
        urlDetails: [...state.urlDetails, action.payload]
      };
    case createCRTypes.UPDATE_URL_DETAILS: {
      const updatedURLDetails = state.urlDetails.map((item, i) => {
        if (i === action.payload.id) return action.payload.data;
        return item;
      });
      return {
        ...state,
        urlDetails: updatedURLDetails
      };
    }
    case createCRTypes.DELETE_URL_DETAILS: {
      const updatedURLDetails = state.urlDetails.filter((item, i) => {
        if (i === action.payload.id) return false;
        return true;
      });
      return {
        ...state,
        urlDetails: updatedURLDetails
      };
    }
    case createCRTypes.UPDATE_CURRENT_FILE_DETAIL: {
      const updatedCuraFileDetails = Object.assign({}, state.currentFileDetails, { ...action.payload });
      return { ...state, currentFileDetails: updatedCuraFileDetails };
    }
    case createCRTypes.ADD_FILE_DETAILS:
      return { ...state, fileDetails: [...state.fileDetails, action.payload] };

    case createCRTypes.DELETE_FILE_DETAILS: {
      const toDeleteFileDetails = [...state.fileDetails];

      toDeleteFileDetails.splice(action.payload.id, 1);
      return { ...state, fileDetails: toDeleteFileDetails };
    }
    case createCRTypes.RESET_CURRENT_FILE_DETAIL:
      return { ...state, currentFileDetails: initialState.currentFileDetails };
    case createCRTypes.RESET_CR_REQUEST:
      return {
        ...state,
        totalRows: initialState.totalRows,
        circuitId: initialState.circuitId,
        portDetails: initialState.portDetails,
        applicationDetails: initialState.applicationDetails,
        urlDetails: initialState.urlDetails,
        fileDetails: initialState.fileDetails,
        ips: initialState.ips,
        sandbox: initialState.sandbox,
        shapping: initialState.shapping,
        spam: initialState.spam,
        currentPortDetails: initialState.currentPortDetails,
        currentApplicationDetails: initialState.currentApplicationDetails,
        curretURLDetails: initialState.curretURLDetails,
        currentFileDetails: initialState.currentFileDetails
      };

    case createCRTypes.UPDATE_FILE_DETAILS: {
      const updatedFileDetails = state.fileDetails.map((item, i) => {
        if (i === action.payload.id) return Object.assign({}, { ...item }, { ...action.payload.data });
        return item;
      });
      return { ...state, fileDetails: updatedFileDetails };
    }
    default:
      return { ...state };
  }
}
