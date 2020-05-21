const responseHandler = function () {

    const handler = function (response) {

        if (response.status == 409) {
            document.getElementById("loader").remove();
            var registerForm = document.getElementById("registerForm");
            if (!document.getElementById("error") || !document.getElementById("loader")) {
                var error = document.createElement("p1");
                error.id = "error";
                error.textContent = "Username already exists!"
                error.style.color = "red";
                error.style.textAlign = "center";
                error.style.position = "relative";
                error.style.bottom = "180px";
                error.style.right = "65px";
                registerForm.appendChild(error);
            }
        }

        if (response.status == 401) {
            document.getElementById("loader").remove();
            var registerForm = document.getElementById("registerForm");
            if (!document.getElementById("error") || !document.getElementById("loader")) {
                var error = document.createElement("p1");
                error.id = "error";
                error.textContent = "Wrong username/password!";
                error.style.color = "red";
                error.style.textAlign = "center";
                error.style.position = "relative";
                error.style.bottom = "120px";
                error.style.right = "65px";
                registerForm.appendChild(error);
            }
        }

        if (response.status >= 400) {
            throw new Error(`Something went wrong. Error: ${response.statusText}`);
        }

        if (response.status !== 204) {
            response = response.json();
        }
        return response;
    };

    const passwordValidationError = function () {
        document.getElementById("loader").remove();
        var registerForm = document.getElementById("registerForm");
        if (!document.getElementById("error")) {
            var error = document.createElement("p1");
            error.id = "error";
            error.textContent = "Password doesn't match!"
            error.style.color = "red";
            error.style.textAlign = "center";
            error.style.position = "relative";
            error.style.bottom = "180px";
            error.style.right = "65px";
            registerForm.appendChild(error);
        }
    };

    const showRegisterLoader = function () {
        var registerForm = document.getElementById("registerForm");
        if (!document.getElementById("loader")) {
            var loader = document.createElement("div");
            loader.id = "loader";
            loader.style.border = "10px solid white"; /* Light grey */
            loader.style.borderRadius = "100%";
            loader.style.borderTop = "10px solid black";
            loader.style.borderBottom = "10px solid black";
            loader.style.width = "30px";
            loader.style.height = "30px";
            loader.style.animation = "spin 2s linear infinite";
            loader.style.position = "relative";
            loader.style.bottom = "240px";
            loader.style.left = "200px";
            registerForm.appendChild(loader);
        }
    }

    const showLoginLoader = function () {
        var registerForm = document.getElementById("registerForm");
        if (!document.getElementById("loader")) {
            var loader = document.createElement("div");
            loader.id = "loader";
            loader.style.border = "10px solid white"; /* Light grey */
            loader.style.borderRadius = "100%";
            loader.style.borderTop = "10px solid black";
            loader.style.borderBottom = "10px solid black";
            loader.style.width = "30px";
            loader.style.height = "30px";
            loader.style.animation = "spin 2s linear infinite";
            loader.style.position = "relative";
            loader.style.bottom = "180px";
            loader.style.left = "200px";
            registerForm.appendChild(loader);
        }
    }

    return {
        handler,
        passwordValidationError,
        showRegisterLoader,
        showLoginLoader,
    }
}();