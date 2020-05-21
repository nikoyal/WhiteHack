const homeController = function () {
    const getHome = function (context) {
      
        context = loginCheck(context);

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function(){
            this.partial('../views/home.hbs')
        })
    };
    return {
        getHome
    }
}();