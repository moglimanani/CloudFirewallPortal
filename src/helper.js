import axios from 'axios';
import { result } from 'lodash';
import useAxios from 'axios-hooks';
import { baseUrl } from './config';

export function isUrlValid(url) {
  const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(url)) {
    return true;
  }

  return false;
}

export const getOptions = (url, aaxios, [value, label], dispatch, attri, dispatchMethod) => {
  const Url = `${baseUrl}${url}`;
  const [{ data, loading, error }, refetch] = aaxios(Url);

  if (data) {
    const Options = data.data.map(item => ({ value: item[value], label: item[label] }));
    dispatch(dispatchMethod({ [attri]: Options }));
  }
};
export const getOptionsByAxios = (url, method, obj) =>
  axios({
    method,
    url,
    baseURL: baseUrl,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    data: obj
  });

export const getWebCatOptions = (url, aaxios, [value, label, type], dispatch, attri, dispatchMethod) => {
  const Url = `${baseUrl}${url}`;
  const [{ data, loading, error }, refetch] = aaxios(Url);

  if (data) {
    const webCategory = data.data.map(item => ({ value: item[value], label: item[label], type: item[type] }));

    dispatch(dispatchMethod({ webCategory }));
  }
};

export const getCRS = (url, aaxios, dispatch, obj, dispatchMethod) => {
  axios({
    method: 'post',
    url,
    baseURL: baseUrl,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    data: obj
  })
    .then(res => {
      dispatch(dispatchMethod({ allCrs: res.data.data }));
    })
    .catch(res => dispatch(dispatchMethod({ allCrs: [] })));
};

export const debounce = prop => {
  const func = prop[0];
  const wait = prop[1];
  const immediate = prop[2] || false;

  let timeout;
  return function() {
    const context = this;
    const args = prop;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
