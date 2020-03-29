function fetchGitHubInformation(event) {

    var username = $("#gh-username").val();
    //if username field is empty
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return; //Just want to finish here if field is empty
    }

    //Animated loader
    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);
}