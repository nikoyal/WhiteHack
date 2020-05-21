const userController = function () {
    const getRegister = function (context) {
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial("../views/authentication/register.hbs")
        })
    };
    const postRegister = function (context) {
        responseHandler.showRegisterLoader();
        userModel.register(context.params)
            .then(responseHandler.handler)
            .then((data) => {
                storage.saveUser(data);
                homeController.getHome(context);
            })
    };
    const getLogin = function (context) {
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/authentication/login.hbs')
        })
    }
    const postLogin = function (context) {
        responseHandler.showLoginLoader();
        userModel.login(context.params)
        .then(responseHandler.handler)
        .then((data) => {
            storage.saveUser(data);
            homeController.getHome(context);
        })
    };
    const logout = function (context) {
        userModel.logout()
            .then(() => {
                storage.deleteUser();
                homeController.getHome(context);
            });
    };
    return {
        getRegister,
        postRegister,
        getLogin,
        postLogin,
        logout
    }
}() 