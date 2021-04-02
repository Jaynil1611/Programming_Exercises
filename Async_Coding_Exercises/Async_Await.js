function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`);
      }
      resolve(`from server: ${msg}`);
    }, 3000);
  });
}


const printDataFromServer = async () => {
    const data = await fakeFetch("Jaynil");
    console.log(data);
}

// printDataFromServer();


const syncCallsToServer = async (msg1,msg2) => {
    const data = await fakeFetch(msg1);
    const res = await fakeFetch(data+msg2);
    console.log(res);
}

syncCallsToServer("Hi ","Jaynil");