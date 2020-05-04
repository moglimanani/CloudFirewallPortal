import createCRTypes from './createCRActionTypes';

export const updateCircuitId = id => ({
  type: createCRTypes.UPDATE_CIRCUIT_ID,
  payload: { id }
});

export const updateCurrentPortDetails = obj => ({
  type: createCRTypes.UPDATE_CURRENT_PORT_DETAIL,
  payload: { ...obj }
});
export const resetCurrentPortDetails = () => ({
  type: createCRTypes.RESET_CURRENT_PORT_DETAIL
});
export const updateCurrentAppDetails = obj => ({
  type: createCRTypes.UPDATE_CURRENT_APP_DETAIL,
  payload: { ...obj }
});
export const resetCurrentAppDetails = () => ({
  type: createCRTypes.RESET_CURRENT_APP_DETAIL
});
export const addPortDetails = obj => ({
  type: createCRTypes.ADD_PORT_DETAILS,
  payload: obj
});
export const deletePortDetails = id => ({
  type: createCRTypes.DELETE_PORT_DETAILS,
  payload: { id }
});
export const updatePortDetails = (id, data) => ({
  type: createCRTypes.UPDATE_PORT_DETAILS,
  payload: { id, data }
});
export const increaseTotalRows = () => ({
  type: createCRTypes.INCREASE_ROW_COUNT
});
export const decreaseTotalRows = () => ({
  type: createCRTypes.DECREASE_ROW_COUNT
});
export const addAppDetails = obj => ({
  type: createCRTypes.ADD_APPLICATION_DETAILS,
  payload: obj
});
export const deleteAppDetails = id => ({
  type: createCRTypes.DELETE_APPLICATION_DETAILS,
  payload: { id }
});
export const updateAppDetails = (id, data) => ({
  type: createCRTypes.UPDATE_APPLICATION_DETAILS,
  payload: { id, data }
});
export const updateCurrentURLDetails = value => ({
  type: createCRTypes.UPDATE_CURRENT_URL_DETAIL,
  payload: value
});
export const resetURLDetails = () => ({
  type: createCRTypes.RESET_CURRENT_URL_DETAIL
});
export const addCurrentURLDetails = value => ({
  type: createCRTypes.ADD_URL_DETAILS,
  payload: value
});
export const updateURLDetails = obj => ({
  type: createCRTypes.UPDATE_URL_DETAILS,
  payload: obj
});
export const deleteUrlDetails = obj => ({
  type: createCRTypes.DELETE_URL_DETAILS,
  payload: obj
});

export const updateCurrentFileDetails = obj => ({
  type: createCRTypes.UPDATE_CURRENT_FILE_DETAIL,
  payload: obj
});
export const resetCurrentFileDetails = () => ({
  type: createCRTypes.RESET_CURRENT_FILE_DETAIL
});
export const addCurrentFileDetails = obj => ({
  type: createCRTypes.ADD_FILE_DETAILS,
  payload: obj
});
export const deleteFileDetails = obj => ({
  type: createCRTypes.DELETE_FILE_DETAILS,
  payload: obj
});
export const updateFileDetails = obj => ({
  type: createCRTypes.UPDATE_FILE_DETAILS,
  payload: obj
});
export const updateCRField = obj => ({
  type: createCRTypes.UPDATE_CR_FIELD,
  payload: obj
});
export const resetCR = () => ({
  type: createCRTypes.RESET_CR_REQUEST
});
export const getCRsByAxios = () => {
  // getCRSM('/cr/getcr/', useAxios, dispatch, paramsF, updateCRField);
};
