function loginCheck(context){
    const loggedIn = storage.getData('userInfo') !== null;
    if(loggedIn){
        const username = JSON.parse(storage.getData('userInfo')).username;
        context.loggedIn = loggedIn;
        context.username = username;
    }
    return context;
}
