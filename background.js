chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == "complete"){
        if (tab.url.includes("minesweeperonline")){
            console.log("Extension Enabled");
            chrome.action.setIcon({
                path: {
                    "16": "/images/icon-enabled-16.png",
                    "48": "/images/icon-enabled-16.png",
                    "128": "/images/icon-enabled-16.png"
                }
            });
            chrome.action.enable(tabId)
        } else {
            console.log("Extension Disabled");
            chrome.action.setIcon({
                path: {
                    "16": "/images/icon-disabled-16.png",
                    "48": "/images/icon-disabled-16.png",
                    "128": "/images/icon-disabled-16.png"
                }
            });
            chrome.action.disable(tabId)
        }
    }
});
