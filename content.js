function getEditor() {
    let editor = document.querySelector(".monaco-editor");
    console.log("Editor:", editor);
    return editor;
}

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

function replaceEditor(editor) {
    if (!editor) {
        return;
    }
    console.log("Replacing editor...");
    // if (typeof monaco == "undefined") {
    //     setTimeout(() => {
    //         replaceEditor(editor);
    //     }, 3000);
    // }

    // Create a new container for the Monaco editor
    const newEditorContainer = document.createElement("div");
    newEditorContainer.id = "new-monaco-editor";
    newEditorContainer.style.width = "100%";
    newEditorContainer.style.height = "600px"; // Adjust as needed

    // Replace the existing editor with the new container
    editor.replaceWith(newEditorContainer);

    // Get the content from the original editor (if needed)
    const originalContent =
        editor.textContent ||
        "// Hello World\n // Can you see me?\n class Solution:\n def function():";

    // Initialize the new Monaco editor
    const newEditor = monaco.editor.create(newEditorContainer, {
        value: originalContent,
        language: "python", // Set the appropriate language
        theme: "vs-dark", // You can change the theme as needed
        automaticLayout: true,
        minimap: { enabled: false },
    });
}
// Main execution

waitForElement(".monaco-editor").then((elem) => {
    console.log("Found Monaco Editor:", elem);
    replaceEditor(elem);
});
