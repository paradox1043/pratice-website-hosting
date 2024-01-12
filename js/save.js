document.addEventListener("DOMContentLoaded", function() {
    // Get the textarea element
    var textarea = document.getElementById("myplantextarea");

    // Check if local storage has a saved value
    var savedValue = localStorage.getItem("myPlanContent");
    if (savedValue) {
        textarea.value = savedValue;
    }

    // Add an event listener to the textarea for input changes
    textarea.addEventListener("input", function() {
        // Save the content to local storage
        localStorage.setItem("myPlanContent", textarea.value);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var textarea = document.getElementById("mainplantextarea");
    var savedValue = localStorage.getItem("mainPlanContent");
    if (savedValue) {
        textarea.value = savedValue;
    }
    textarea.addEventListener("input", function() {
        localStorage.setItem("mainPlanContent", textarea.value);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var textarea = document.getElementById("handnote");
    var savedValue = localStorage.getItem("handnote");
    if (savedValue) {
        textarea.value = savedValue;
    }
    textarea.addEventListener("input", function() {
        localStorage.setItem("handnote", textarea.value);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var textarea = document.getElementById("targettextarea");
    var savedValue = localStorage.getItem("targettextarea");
    if (savedValue) {
        textarea.value = savedValue;
    }
    textarea.addEventListener("input", function() {
        localStorage.setItem("targettextarea", textarea.value);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var textarea = document.getElementById("excutedtextarea");
    var savedValue = localStorage.getItem("excutedtextarea");
    if (savedValue) {
        textarea.value = savedValue;
    }
    textarea.addEventListener("input", function() {
        localStorage.setItem("excutedtextarea", textarea.value);
    });
});