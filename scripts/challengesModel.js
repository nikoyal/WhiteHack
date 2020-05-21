const challengesModel = function(){
    const postChallenge = function(params){
        let username = JSON.parse(storage.getData('userInfo')).username;
        let data = {
            user: username,
            password: params.password
        }
        console.log(data)
        let url = `/appdata/${storage.appKey}/Ranklist`

        let auth = btoa(`${params.username}:${params.password}`);
        let authString = `Basic ${auth}`;

        let headers = {
            body: JSON.stringify(data),      
            headers: {
                Authorization: authString
            },
        };
        getChallenges(params);
        return requester.post(url, headers);
    }

    const getChallenges = function(params){
        let url = `/appdata/${storage.appKey}/Ranklist`

        let auth = btoa(`${params.username}:${params.password}`);
        let authString = `Basic ${auth}`;
        let headers = {  
            headers: {
                Authorization: authString
            },
        };
        let data = requester.get(url, headers);
        console.log(data)
        return data
    }

    return{
        postChallenge,
        getChallenges
    }
}()
