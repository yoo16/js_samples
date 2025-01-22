
// ベースURL
const BASE_URL = getBaseURL();
// APIエンドポイントURL
const API_BASE_URL = `${BASE_URL}/api/`;
// 外部サーバの場合、APIエンドポイントに置き換える
// const API_BASE_URI = "http://localhost/your_project/api/";

/**
 *  ベースURL
 * @returns 
 */
function getBaseURL() {
    const currentURL = location.href
    const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1);
    const baseURL = currentURL.replace(fileName, '');
    return baseURL;
}

/**
 * Fetch APIデータ
 * @param {*} uri 
 * @returns 
 */
async function fetchData(uri) {
    try {
        const response = await fetch(uri);
        const data = await response.json();
        return data;
    } catch (error) {
        displayErrorMessage(error);
    }
}

/**
 * ツイートデータ
 * api/tweet/get.php
 * @param {*} uri 
 * @returns 
 */
async function fetchTweets() {
    // const uri = API_BASE_URL + "tweet/get.php";
    // JSONに直接アクセスする場合
    const uri = BASE_URL + "data/tweets.json";
    const data = await fetchData(uri)
    displayTweets(data.tweets)
}

/**
 * トレンドデータ
 * api/trend/get.php
 * @param {*} uri 
 * @returns 
 */
async function fetchTrends() {
    // const uri = API_BASE_URL + "trend/get.php";
    // JSONに直接アクセスする場合
    const uri = BASE_URL + "data/trends.json";
    const data = await fetchData(uri);
    displayTrends(data.trends);
}

/**
 * ツイート一覧を表示
 * @param {*} tweets 
 * @returns 
 */
function displayTweets(tweets) {
    if (!tweets) return;

    const tweetList = document.getElementById("tweet-list");
    // コンテナを初期化
    tweetList.innerHTML = "";

    tweets.forEach(tweet => {
        const tweetElement = document.createElement("div");
        tweetElement.classList.add("tweet", "d-flex", "mb-3");

        tweetElement.innerHTML = `
        <div class="flex border-b px-3">
            <div class="min-w-[50px]">
                <img src="${tweet.user.profile_image_url}" alt="プロフィール画像" class="rounded-full w-12 h-12">
            </div>
            <div class="w-full mx-3">
                <div>
                    <span class="font-bold">${tweet.user.display_name}</span>
                    <span class="ms-2">@${tweet.user.name}</span>
                    <span class="ms-2 text-secondary">${formatDate(tweet.created_at)}</span>
                </div>
                <div class="tweet-text my-2">
                    ${formatContent(tweet.content)}
                </div>
                <div class="tweet-image my-2">
                    ${renderMedias(tweet.media)}
                </div>
                <nav class="my-4">
                    <ul class="flex justify-between text-xs text-gray-400 me-8">
                        <li class="flex">
                            <span><img src="svg/bubble.svg" alt="コメント" class="mt-1 w-4 h-4"></span>
                            <span class="text-sm px-3">${tweet.replies_count}</span>
                        </li>
                        <li class="flex">
                            <span><img src="svg/heart.svg" alt="いいね" class="mt-1 w-4 h-4"></span>
                            <span class="text-sm px-3">${tweet.likes_count}</span>
                        </li>
                        <li class="flex">
                            <span><img src="svg/loop.svg" alt="リツイート" class="mt-1 w-4 h-4"></span>
                            <span class="text-sm px-3">${tweet.retweets_count}</span>
                        </li>
                        <li class="flex">
                            <span><img src="svg/trash.svg" alt="削除" class="mt-1 w-4 h-4"></span>
                            <span></span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    `;
        tweetList.appendChild(tweetElement);
    });
}

/**
 * メディア表示
 * @param {*} media 
 * @returns 
 */
function renderMedias(media) {
    var html = "";
    if (media && media.length > 0) {
        html = media.map(mediaItem => {
            if (mediaItem.type === "image") {
                return `<img src="${mediaItem.url}" alt="" class="img-fluid rounded mt-2">`;
            }
            return "";
        }).join("");
    }
    return html;
}

/**
 * ランキング表示
 * @param {*} trends 
 * @returns 
 */
function displayTrends(trends) {
    // ランキングのリストを取得
    const trendList = document.querySelector('#list-group');

    // 現在のリストをクリア
    trendList.innerHTML = '';

    // JSONデータからランキング情報を生成
    trends.forEach(({ category, trend, description, rank }) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
            <small>${rank}. ${category} トレンド</small>
            <div>${trend}</div>
            <p class="text-xs text-muted">${description}</p>
            `;
        // リストに追加
        trendList.appendChild(listItem);
    });
}

/**
 * コンテンツのフォーマット処理
 * @param {*} content
 * @returns 
 */
function formatContent(content) {
    content = returnContent(content);
    content = hashTagContent(content);
    return content;
}

/**
 * 日付フォーマット
 * @param {*} dateString
 * @returns 
 */
function formatDate(dateString) {
    // YYYY/mm/dd形式にフォーマット
    const formattedDate = new Intl.DateTimeFormat("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        timeZone: "Asia/Tokyo",
    }).format(new Date(dateString));
    return formattedDate;
}

/**
 * 改行フォーマット
 * brタグ
 * @param {*} dateString
 * @returns 
 */
function returnContent(content) {
    const formatted = content.replace(/\n/g, '<br>'); // 改行を <br> に変換
    return formatted;
}

/**
 * ハッシュタグ変換
 * @param {*} dateString
 * @returns 
 */
function hashTagContent(content) {
    const formatted = content.replace(/(^|<br>|\s)#([^\s#<]+)/g, '$1<a href="?tag=$2" class="text-blue-500">#$2</a>'); // ハッシュタグをリンク化
    return formatted;
}

/**
 * エラーメッセージを表示
 * @param {*} message
 * @returns 
 */
function displayErrorMessage(message) {
    const tweetList = document.getElementById("tweet-list");
    tweetList.innerHTML = `
    <div class="alert alert-danger">
        ${message}
    </div>
    `;
}

/**
 * ページ読み込み時
 */
document.addEventListener("DOMContentLoaded", () => {
    fetchTweets();
    fetchTrends();
});
