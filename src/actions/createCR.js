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
