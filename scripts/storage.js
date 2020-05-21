const storage = function () {
    const appKey = "kid_SkALUXJpH";
    const appSecret = "57a273c1b6214dc09c6c1dc56c1fefe8";

    const getData = function (key) {
        return localStorage.getItem(key + appKey);
    };

    const saveData = function (key, value) {
        localStorage.setItem(key + appKey, JSON.stringify(value));
    };

    const saveUser = function (data) {
        saveData("userInfo", data);
        saveData("authToken", data._kmd.authtoken);
    };


    const deleteUser = function () {
        localStorage.removeItem("userInfo" + appKey);
        localStorage.removeItem("authToken" + appKey);
    };


    return {
        appKey,
        appSecret,
        getData,
        saveData,
        saveUser,
        deleteUser
    }
}();