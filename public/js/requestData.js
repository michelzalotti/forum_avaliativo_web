function requestData(method, url, data) {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if (data) {
      xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    }

    xhr.send(data);

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
