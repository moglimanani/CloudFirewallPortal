import createCRTypes from '../actions/createCRActionTypes';

const initialState = {
  totalRows: 0,
  MAXROWS: 50,
  circuitId: '',
  portDetails: [],
  applicationDetails: [],
  urlDetails: [],
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
  portOutgoingOptions: [{ value: 0, label: 'Incoming' }, { value: 1, label: 'Outgoing' }],
  portStatusOptions: [{ value: 0, label: 'Blocked' }, { value: 1, label: 'Allowed' }],
  webAppOptions: [{ value: 0, label: 'Web' }, { value: 1, label: 'Application' }],
  //   hackOptions: [{ value: 0, label: 'Hacking' }],
  fileOptions: [
    { value: 1, label: '.afl' },
    { value: 2, label: '.avi' },
    { value: 3, label: '.bin' },
    { value: 4, label: '.c' },
    { value: 5, label: '.c++' },
    { value: 6, label: '.dvi' },
    { value: 7, label: '.exe' },
    { value: 8, label: '.m1v' },
    { value: 9, label: '.m2a' },
    { value: 10, label: '.m2v' },
    { value: 11, label: '.mov' },
    { value: 12, label: '.movie' },
    { value: 13, label: '.mp2' },
    { value: 14, label: '.mp3' },
    { value: 15, label: '.mpa' },
    { value: 16, label: '.mpe' },
    { value: 17, label: '.mpeg' },
    { value: 18, label: '.mpg' },
    { value: 19, label: '.mpga' },
    { value: 20, label: '.mv' },
    { value: 21, label: '.qif' },
    { value: 22, label: '.qt' },
    { value: 23, label: '.rm' },
    { value: 24, label: '.rmm' },
    { value: 25, label: '.rmp' },
    { value: 26, label: '.rnx' },
    { value: 27, label: '.rp' },
    { value: 28, label: '.rpm' }
  ],
  webCategory: [
    { value: 1, label: 'Anonymizers' },
    { value: 2, label: 'Criminal Activity' },
    { value: 3, label: 'Command & Control' },
    { value: 4, label: 'Intolerance & Hate' },
    { value: 5, label: 'Nudity' },
    { value: 6, label: 'Peer-to-peer & torrent' },
    { value: 7, label: 'Phishing & Fraud' },
    { value: 8, label: 'Sexually Explicit' },
    { value: 9, label: 'Spam URLs' },
    { value: 10, label: 'Spyware & Malware' },
    { value: 11, label: 'Weapons ' },
    { value: 12, label: 'Controlled substances' },
    { value: 13, label: 'Extreme' },
    { value: 14, label: 'HTTPUpload' },
    { value: 15, label: 'Hacking' },
    { value: 16, label: 'Live audio' },
    { value: 17, label: 'Live video' },
    { value: 18, label: 'Marijuana' },
    { value: 19, label: 'Militancy & Extremist' },
    { value: 20, label: 'Pro-Suicide & Self-Harm' }
  ],
  applicationCategory: [
    { value: 1, label: 'Proxy and Tunnel' },
    { value: 2, label: 'Download Applications' },
    { value: 3, label: 'File Transfer' },
    { value: 4, label: 'Gaming' },
    { value: 5, label: 'Instant Messenger' },
    { value: 6, label: 'Remote Access' },
    { value: 7, label: 'Streaming Media' }
  ],
  currentPortDetails: { type: null, port: null, status: null },
  currentApplicationDetails: { type: null, category: null, status: null }
};
export default function(state = initialState, action) {
  switch (action.type) {
    case createCRTypes.UPDATE_CIRCUIT_ID:
      return { ...state, circuitId: action.payload.id };
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

    default:
      return { ...state };
  }
}
