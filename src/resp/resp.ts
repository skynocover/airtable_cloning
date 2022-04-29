export const Resp = {
  success: {
    errorCode: 0,
  },

  backendCheckSessionFail: {
    errorCode: 401,
    errorMessage: "登入逾期",
  },

  // Api Fail
  paramInputEmpty: {
    errorCode: 1000,
    errorMessage: "缺少參數",
  },

  paramInputFormatError: {
    errorCode: 1001,
    errorMessage: "參數輸入錯誤",
  },

  // DB Fail
  sqlExecFail: {
    errorCode: 2000,
    errorMessage: "資料庫執行失敗",
  },

  sqlQueryFail: {
    errorCode: 2001,
    errorMessage: "資料庫搜尋失敗",
  },

  sqlIDnotExist: {
    errorCode: 2002,
    errorMessage: "ID不存在",
  },

  firebaseError: {
    errorCode: 2004,
    errorMessage: "firebase登入失敗",
  },

  duplicateUserError: {
    errorCode: 2005,
    errorMessage: "使用者名稱已經有人使用",
  },

  recordNotExist: {
    errorCode: 2006,
    errorMessage: "紀錄不存在",
  },

  // User Fail
  firebaseLoginFail: {
    errorCode: 3000,
    errorMessage: "登入失敗",
  },

  backendUserNotExist: {
    errorCode: 3001,
    errorMessage: "後台登入失敗,無此帳號",
  },

  backendLoginFail: {
    errorCode: 3002,
    errorMessage: "後台登入失敗,帳號或密碼錯誤",
  },

  backendAccountNotExist: {
    errorCode: 3005,
    errorMessage: "後臺帳號不存在",
  },

  backendAccountPWDfail: {
    errorCode: 3006,
    errorMessage: "密碼驗證失敗",
  },
};
