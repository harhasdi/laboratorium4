module.exports = {
    getInfoLog: (method, url) => {
      console.log(`[INFO] ${method} ${url}`);
    },
    getErrorLog: (error) => {
      console.error(`[ERROR] ${error}`);
    },
    getProcessLog: (message) => {
      console.log(`[PROCESS] ${message}`);
    }
  };
  