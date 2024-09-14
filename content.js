
function waitForElement(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}


function enabelAutoComplete(editor) {
    console.log("Enabling autocomplete");
    editor.updateOptions({ quickSuggestions: true });
}
waitForElement(".monaco-editor").then((elem) => {
    console.log("Found Monaco Editor:", elem);
    let editor = monaco.editor.getEditors()[0];
    setTimeout(() => enabelAutoComplete(editor), 5000);
});
