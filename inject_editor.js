function injectScripts(scriptName) {
    script = document.createElement("script");
    script.src = chrome.runtime.getURL(scriptName);
    (document.body || document.documentElement).append(script);

    // document.body.appendChild(script);
}

injectScripts("content.js");
