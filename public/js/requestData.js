function requestData(method, url, data) {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.send();

    xhr.addEventListener("load", (e) => {
      const status = e.target.status;

      if (status >= 200 && status < 300) {
        res(e.target.responseText);
      } else {
        rej(e.target.statusText);
      }
    });
  });
}

export default requestData;
