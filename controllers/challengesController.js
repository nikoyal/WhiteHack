const challengesController = function () {
    const getChallenges = function (context) {
        
        context = loginCheck(context);

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function(){
            this.partial('../views/challenges.hbs')
        })
    };

    const postPoints = function(context){
        challengesModel.postChallenge(context.params)
    }
    return {
        getChallenges,
        postPoints
    }
}();