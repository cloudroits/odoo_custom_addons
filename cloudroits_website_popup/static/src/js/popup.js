odoo.define('cloudroits_website_popup.popup', [], function (require) {
    "use strict";

    $(document).ready(function () {
        var pageUrls = typeof popupPageUrls !== 'undefined' ? popupPageUrls : '';
        var currentUrl = window.location.pathname;
        var showPopup = false;

        if (!pageUrls || pageUrls.trim() === "") {
            showPopup = true;
        } else {
            pageUrls = pageUrls.split(',').map(function(url) {
                return url.trim();
            });

            if (Array.isArray(pageUrls)) {
                showPopup = pageUrls.some(function(url) {
                    return url === currentUrl;
                });
            }
        }

        if (showPopup) {
            var modal = document.getElementById("cloudroits-popup-modal");
            if (modal) {
                modal.style.display = "block";
                var span = document.getElementsByClassName("cloudroits-close")[0];
                span.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            } else {
                console.error("Popup modal element not found.");
            }
        } else {
            console.log("Current URL does not match any specified pages for the popup.");
        }
    });
});
