export function getParam(param) {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get(param);
  }