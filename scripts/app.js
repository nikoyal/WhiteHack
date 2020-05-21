const app = Sammy("#main", function () {
    this.use('Handlebars', 'hbs');
    this.get('#/home', homeController.getHome);

    this.get('#/about', aboutController.getAbout);

    this.get("#/register", userController.getRegister)
    this.post("#/register", userController.postRegister)

    this.get("#/login",userController.getLogin)
    this.post("#/login",userController.postLogin)

    this.get("#/logout", userController.logout)

    this.get("#/challenges", challengesController.getChallenges);
    this.post("#/challenges", challengesController.postPoints)
});
(() => {
    app.run('#/home')
})();

