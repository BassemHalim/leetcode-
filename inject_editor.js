function injectScripts(scriptName) {
    script = document.createElement("script");
    script.src = chrome.runtime.getURL(scriptName);
    (document.body || document.documentElement).append(script);
}

injectScripts("content.js");
