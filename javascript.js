function sign_up() {
    email = prompt(`Type in your email for a free 1 month subscription
(don't actually put in email, this is just a sample)`);
    if (email !== "" && email !== null) {
        alert(`We will be sending you your subscription details shortly to ${email}`);
    }
    else if (email === "") {
        alert("No email entered");
    };
};
