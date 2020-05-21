const aboutController = function () {
    const getAbout = function (context) {
        
        context = loginCheck(context);

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function(){
            this.partial('../views/about.hbs')
        })
    };
    return {
        getAbout
    }
}();