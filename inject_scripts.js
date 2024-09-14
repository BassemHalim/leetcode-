function loadEditor() {
    console.log("appending link...");
    link = document.createElement("link");
    link.rel = "stylesheet";
    link.setAttribute("data-name", "vs/editor/editor.main");
    link.href = chrome.runtime.getURL(
        "monaco-editor/min/vs/editor/editor.main.css"
    );
    (document.head || document.documentElement).append(link);

    injectScripts("monaco-editor/min/vs/loader.js");
    injectScripts("monaco-editor/min/vs/editor/editor.main.js");
}

function injectScripts(scriptName) {
    script = document.createElement("script");
    script.src = chrome.runtime.getURL(scriptName);
    (document.body || document.documentElement).append(script);

    // document.body.appendChild(script);
}

loadEditor();
