(() => {
    "use strict";
    chrome.runtime.onInstalled.addListener((async () => {
        await chrome.storage.local.set({
            auto_open: !0,
            auto_solve: !0,
            click_delay_time: 50,
            solve_delay_time: 3e3
        })
    })), chrome.runtime.onMessage.addListener((function(e, t, a) {
        return (async () => {
            const t = `https://github.com/Wikidepia/hektCaptcha-extension/releases/download/modelhub/${e}.ort`;
            try {
                const e = await fetch(t),
                    s = await e.blob(),
                    o = await (async e => {
                        const t = new FileReader;
                        return new Promise((a => {
                            t.onloadend = () => a(t.result), t.readAsDataURL(e)
                        }))
                    })(s);
                a({
                    status: e.status,
                    model: o
                })
            } catch (e) {
                a({
                    status: "error",
                    message: e.message
                })
            }
        })(), !0
    }))
})();