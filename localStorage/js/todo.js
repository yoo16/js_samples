const KEY = "todos";
let filter = "all";
let todos = [];
// let todos = [
//     { id: "1", text: "買い物に行く", done: false, createdAt: 1700000000000 },
//     { id: "2", text: "洗濯をする", done: true, createdAt: 1700000001000 },
//     { id: "3", text: "掃除をする", done: false, createdAt: 1700000002000 },
// ];

// -------- DOM要素 --------
const $ = (id) => document.getElementById(id);
const $new = $("newTodo");
const $add = $("addBtn");
const $list = $("list");
const $count = $("count");
const $clearDone = $("clearDone");
const $clearAll = $("clearAll");
const $filterButtons = $("filterButtons");
const filterButtons = () => Array.from(document.querySelectorAll(".filter-btn"));

const store = {
    /**
     * 保存
     */
    set(key, value) {
        const json = JSON.stringify(value);
        localStorage.setItem(key, json);
    },
    /**
     * 取得
     */
    get(key) {
        const values = localStorage.getItem(key);
        return values ? JSON.parse(values) : [];
    },
    /**
     * 削除
     */
    remove(key) {
        localStorage.removeItem(key);
    },
    /**
     * すべて削除
     */
    clear() {
        localStorage.clear();
    }
};

/**
 * タスクを追加
 * @param {*} e 
 */
const add = (e) => {
    e.preventDefault();
    let text = $new.value;
    text = (text || "").trim();
    if (!text) return;

    // 新しいタスクを追加
    const id = crypto.randomUUID();
    const createdAt = Date.now();
    const done = false;
    todos.push({ id, text, done, createdAt });

    // 入力フィールドをクリア
    $new.value = "";

    // レンダリング
    render();

    // LocalStorageに保存
    save();

    console.log("add:", todos);
};

/**
 * タスクを削除
 * @param {*} id 
 */
function remove(id) {
    console.log("remove:", id);
    todos = todos.filter(todo => todo.id !== id);

    // LocalStorageに保存
    save();
    // レンダリング
    render();
}

/**
 * タスクの完了状態を切り替え
 * @param {*} id 
 * @param {*} done 
 * @returns 
 */
function toggleDone(id, done) {
    const todo = todos.find(x => x.id === id);
    if (!todo) return;
    // 完了状態を切り替え
    todo.done = !!done;
    // LocalStorageに保存
    save();
    // レンダリング
    render();
}

/**
 * 完了済みタスクをすべて削除
 * @returns 
 */
function clearDone() {
    todos = todos.filter(x => !x.done);
    // LocalStorageに保存
    save();
    // レンダリング
    render();
}

/**
 * すべてのタスクを削除
 * @returns 
 */
function clearAll() {
    if (!confirm("すべてのタスクを削除します。よろしいですか？")) return;
    todos = [];
    // LocalStorageに保存
    save();
    // レンダリング
    render();
}

/**
 * タスク保存
 * @returns {void}
 */
function save() {
    store.set(KEY, todos);
}

/**
 * フィルタリング処理
 * @param {*} list 
 * @returns 
 */
function filtered() {
    if (filter === "active") return todos.filter(todo => !todo.done);
    if (filter === "done") return todos.filter(todo => todo.done);
    return todos;
}

/**
 * フィルタを設定
 * @param {string} next - "all", "active", "done"
 * @returns {void}
 */
function setFilter(selected) {
    filter = selected;
    filterButtons().forEach(btn => {
        const active = btn.dataset.filter === filter;
        btn.classList.toggle("bg-sky-600", active);
        btn.classList.toggle("text-white", active);
        btn.classList.toggle("hover:bg-gray-50", !active);
    });
}

/**
 * フィルタボタンのクリックハンドラ
 * @param {*} e 
 */
const filterHandler = (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    if (filter) {
        setFilter(filter);
        render();
    }
};

/**
 * リストアイテムをレンダリング
 * @param {*} t 
 * @returns 
 */
function renderItem(todo) {
    const li = document.createElement("li");
    li.className = "flex items-center gap-3 px-4 py-3";

    // チェック
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = !!todo.done;
    checkBox.className = "h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500";
    checkBox.addEventListener("change", () => toggleDone(todo.id, checkBox.checked));

    // タスクテキスト
    const span = document.createElement("span");
    span.textContent = todo.text;
    span.className = "flex-1 text-[15px] " + (todo.done ? "line-through text-gray-400" : "");
    span.title = "ダブルクリックで編集";
    span.addEventListener("dblclick", () => edit(todo, span));

    // 個別削除
    const del = document.createElement("button");
    del.className = "ml-2 px-2 py-1 text-sm rounded-md text-white bg-red-600";
    del.textContent = "削除";
    del.addEventListener("click", () => remove(todo.id));

    // アイテムに要素を追加
    li.append(checkBox, span, del);
    return li;
}

/**
 * レンダリング処理
 * @returns {void}
 */
function render() {
    // リストをクリア
    $list.innerHTML = "";
    // タスクのフィルタリング
    const filterTodos = filtered();
    // リストアイテムのレンダリング
    filterTodos.forEach(todo => $list.appendChild(renderItem(todo)));
    // 件数
    $count.textContent = `${filterTodos.length} / ${todos.length} 件`;
}

/**
 * インライン編集開始
 * @param {*} todo 
 * @param {*} spanEl 
 * @returns 
 */
function edit(todo, spanEl) {
    // すでに編集入力があれば無視
    if (spanEl.tagName.toLowerCase() === "input") return;

    // 入力フィールドを作成
    const input = document.createElement("input");
    input.type = "text";
    input.value = todo.text;
    input.className = "flex-1 text-[15px] rounded-md border border-indigo-300 px-2 py-1";

    // span を input に置き換え
    spanEl.replaceWith(input);
    input.focus();

    // 末尾にカーソル
    const len = input.value.length;
    input.setSelectionRange(len, len);

    let committed = false;

    /**
     * 確定処理
     * @returns 
     */
    const commit = () => {
        if (committed) return;
        committed = true;
        const next = input.value.trim();
        if (!next) {
            // 空は削除
            remove(todo.id);
        } else {
            todo.text = next;
            // 保存
            save();
            // レンダリング
            render();
        }
    };
    /**
     * キャンセル処理
     * @returns 
     */
    const cancel = () => {
        if (committed) return;
        committed = true;
        render();
    };

    // イベント
    input.addEventListener("keydown", (e) => {
        // Enter キーで確定
        if (e.key === "Enter") commit();
        // Escape キーでキャンセル、
        if (e.key === "Escape") cancel();
    });
    // フォーカスが外れたら確定
    input.addEventListener("blur", commit);
}

/**
 * 初期化処理
 * @returns {void}
 */
const init = () => {
    todos = store.get(KEY);
    // 初期表示（すべて）
    setFilter("all");
    render();
}

// イベントリスナーの設定
$add.addEventListener("click", add);
$filterButtons.addEventListener("click", filterHandler);
$clearDone.addEventListener("click", clearDone);
$clearAll.addEventListener("click", clearAll);

// 初期化処理
init();