(() => {
    const $ = (sel) => document.querySelector(sel);
    const out = (v) => { $("#out").textContent = JSON.stringify(v, null, 2); };

    // POST送信
    async function postJSON(url, body) {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(body),
        });
        let data = await res.json();
        if (!res.ok) throw { status: res.status, data };
        return data;
    }

    // GET送信
    async function getJSON(url) {
        const res = await fetch(url, { credentials: "include" });
        const data = await res.json();
        return data;
    }

    // クリックイベント
    window.addEventListener("DOMContentLoaded", () => {
        $("#login").addEventListener("click", async () => {
            const email = $("#email").value;
            const password = $("#password").value;
            const data = await postJSON("./login.php", { email, password });
            out(data);
        });

        $("#me").addEventListener("click", async () => {
            const data = await getJSON("./me.php");
            out(data);
        });

        $("#logout").addEventListener("click", async () => {
            const data = await postJSON("./logout.php", {});
            out(data);
        });
    });
})();