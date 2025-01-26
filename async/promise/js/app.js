document.addEventListener("DOMContentLoaded", function () {
    const fetchQuoteButton = document.getElementById("fetch-quote-button");
    const loadingDiv = document.getElementById("loading");
    const errorDiv = document.getElementById("error");
    const quoteDiv = document.getElementById("quote");
    const authorDiv = document.getElementById("author");
    const quotes = [
        { text: "最大の栄光は一度も失敗しないことではなく、失敗するたびに立ち上がることにある。", author: "ネルソン・マンデラ" },
        { text: "始めるための秘訣は、話すのをやめて行動することだ。", author: "ウォルト・ディズニー" },
        { text: "人生とは、他の計画を立てている間に起こる出来事のことだ。", author: "ジョン・レノン" },
        { text: "時計を見てはいけない。時計と同じように進み続けよ。", author: "サム・レヴィンソン" },
        { text: "未来は、自分の夢の美しさを信じる人に属している。", author: "エレノア・ルーズベルト" },
    ];

    // ランダムな名言を取得するPromise
    function fetchRandomQuote() {
        return new Promise((resolve, reject) => {
            loadingDiv.classList.remove("hidden");
            errorDiv.classList.add("hidden");
            quoteDiv.classList.add("hidden");
            authorDiv.classList.add("hidden");

            // 待機時間
            setTimeout(() => {
                 // 80%の確率で成功
                const success = Math.random() > 0.2;
                if (success) {
                    var index = Math.floor(Math.random() * quotes.length);
                    const randomQuote = quotes[index];
                    resolve(randomQuote);
                } else {
                    reject("名言の取得に失敗しました。");
                }
            }, 2000);
        });
    }

    // 名言を表示する
    function displayQuote(quote) {
        quoteDiv.textContent = `"${quote.text}"`;
        authorDiv.textContent = `- ${quote.author}`;
        quoteDiv.classList.remove("hidden");
        authorDiv.classList.remove("hidden");
    }

    // エラーメッセージを表示
    function displayError(message) {
        errorDiv.textContent = message;
        errorDiv.classList.remove("hidden");
    }

    // Promise処理
    function handlerRandomQuote() {
        fetchRandomQuote()
            .then(quote => {
                displayQuote(quote);
            })
            .catch(error => {
                displayError(error);
            })
            .finally(() => {
                loadingDiv.classList.add("hidden");
            });
    }

    // async/await の場合
    // async function handlerRandomQuote() {
    //     try {
    //         const quote = await fetchRandomQuote();
    //         displayQuote(quote);
    //     } catch (error) {
    //         displayError(error);
    //     } finally {
    //         loadingDiv.classList.add("hidden");
    //     }
    // }

    // ボタンクリックイベント
    fetchQuoteButton.addEventListener("click", handlerRandomQuote);
});