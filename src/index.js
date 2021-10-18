import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createList(inputText);
};

//指定の要素を削除
const deleteFromList = (targetElement, target) => {
  // 押されたボタンの親タグ（div要素）を削除
  document.getElementById(targetElement).removeChild(target);
};

// リストを生成する関数
const createList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押されたボタンの親タグ（div要素）を削除
    deleteFromList("incomplete-list", deleteButton.parentNode);

    // 完了した要素を取得
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      deleteFromList("complete-list", backButton.parentNode);
      const text = backButton.parentNode.firstElementChild.innerText;
      createList(text);
    });

    // // 完了ゾーンに追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromList("incomplete-list", deleteButton.parentNode);
  });

  // divタグの子要素
  div.appendChild(li);
  div.append(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
