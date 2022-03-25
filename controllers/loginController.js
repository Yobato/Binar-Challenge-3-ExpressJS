exports.index = (req, res) => {
    res.render("login", {
        title: "Login",
        layout: false
    });
};