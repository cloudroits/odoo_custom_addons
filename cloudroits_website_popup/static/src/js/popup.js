// File: cloudroits_website_popup/static/src/js/popup.js
odoo.define('cloudroits_website_popup.popup', function (require) {
    "use strict";

    $(document).ready(function () {
        // Retrieve the page URLs from the data attribute on the <body> tag
        var pageUrls = typeof popupPageUrls !== 'undefined' ? popupPageUrls : '';
        //console.log("Page_urls" + pageUrls );
        // If no page URLs are specified, set it to show on all pages
        var currentUrl = window.location.pathname;

        var showPopup = false;

        // If no page URLs are specified, show the popup on all pages
        if (!pageUrls || pageUrls.trim() === "") {
            showPopup = true;
        } else {
            // Split the page URLs into an array and trim any whitespace
            pageUrls = pageUrls.split(',').map(function(url) {
                return url.trim();
            });

            // Ensure pageUrls is an array before using .some()
            if (Array.isArray(pageUrls)) {
                // Check if the current URL matches any of the specified URLs
                showPopup = pageUrls.some(function(url) {
                    return url === currentUrl;
                });
            }
        }
        if (showPopup) {
            var modal = document.getElementById("cloudroits-popup-modal");
            if (modal) {
                // Show the modal when the page loads
                modal.style.display = "block";

                // Get the close button
                var span = document.getElementsByClassName("cloudroits-close")[0];

                // When the user clicks on the close button, close the modal
                span.onclick = function () {
                    modal.style.display = "none";
                }

                // When the user clicks anywhere outside of the modal, close it
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
