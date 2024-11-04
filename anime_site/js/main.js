// キャラクターカードを生成して表示
const characterContainer = document.getElementById("characterContainer");

characters.forEach((character, index) => {
    const card = document.createElement("div");
    card.className = "text-center bg-white rounded-lg shadow-lg overflow-hidden";

    const img = document.createElement("img");
    img.className = "w-full h-80 object-cover";
    img.src = character.image;
    img.alt = character.name;
    card.appendChild(img);

    // カード
    const detailsContainer = document.createElement("div");
    detailsContainer.className = "p-3";

    // 名前
    const name = document.createElement("h2");
    name.className = "p-3 text-3xl font-semibold text-gray-800 mb-2";
    name.textContent = character.name;
    card.appendChild(name);


    // ボタン
    const button = document.createElement("button");
    button.className = "bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 focus:outline-none";
    button.textContent = "Check!";
    button.onclick = () => showModal(character);
    detailsContainer.appendChild(button);

    card.appendChild(detailsContainer);
    characterContainer.appendChild(card);
});

// モーダルウィンドウの表示
function showModal(character) {
    const modal = document.getElementById("modal");
    document.getElementById("modalImage").src = character.image;
    document.getElementById("modalName").textContent = character.name;
    document.getElementById("modalFurigana").textContent = character.furigana;

    const details = document.getElementById("modalDetails");
    details.innerHTML = `
        <li><strong>年齢:</strong> ${character.age}</li>
        <li><strong>性別:</strong> ${character.gender}</li>
        <li><strong>能力:</strong> ${character.ability}</li>
        <li><strong>好きなもの:</strong> ${character.likes}</li>
    `;

    // 説明
    document.getElementById("description").innerHTML = character.description;

    modal.classList.remove("hidden");
}

// モーダルウィンドウの非表示
function closeModal(event) {
    const modal = document.getElementById("modal");
    modal.classList.add("hidden");
}