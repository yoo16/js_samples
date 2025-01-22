$(function () {
	var $input = $('#todo-input');
	var $list = $('#todo-list');
	// ローカルストレージ
	var storage = window.localStorage;

	/*
	 * Todoを追加する関数
	 */
	function addTodo(text, isComplete) {
		// リストアイテムのHTMLを作成
		var listItemHtml = `
		<li class="flex items-center justify-between ${isComplete ? 'complete' : ''}">
			<div class="flex items-center">
				<input type="checkbox" class="mr-2" ${isComplete ? 'checked' : ''}>
				<span class="text ${isComplete ? 'line-through' : ''}">${text}</span>
			</div>
			<div>
				<span class="remove px-2 py-1 text-sm bg-red-500 rounded text-white cursor-pointer">削除</span>
			</div>
		</li>
		`;

		// リストに追加する
		$list.append(listItemHtml);

		// 追加されたリストアイテムを取得（最後の li）
		var $li = $list.children('li').last();
		var $checkbox = $li.find('input[type="checkbox"]');
		var $text = $li.find('.text');
		var $remove = $li.find('.remove');

		// チェックボックスをクリック
		$checkbox.on('click', function () {
			// チェックボックスがチェックされているか？
			if ($(this).is(':checked')) {
				// liタグに class=complete を追加
				$li.addClass('complete');
				// テキスト(spanタグ)に class=line-through を追加
				$text.addClass('line-through');
			} else {
				// liタグから class=complete を削除
				$li.removeClass('complete');
				// テキスト(spanタグ)から class=line-through を削除
				$text.removeClass('line-through');
			}
			updateData();
		});

		$text.on('click', function () {
			// テキストを取得
			var currentText = $(this).text();
		
			// 入力フィールドを作成
			var $inputField = $('<input>')
				.addClass('edit-input p-2')
				.val(currentText)
				.on('blur', function () {
					// 入力フィールドからフォーカスが外れたときの処理
					var newText = $(this).val();
		
					// テキストを更新
					$text.text(newText);
		
					// フォーカスが外れたらテキスト表示に戻す
					$text.show();
					$inputField.remove();
		
					// ローカルストレージを更新
					updateData();
				})
				.on('keypress', function (event) {
					// Enterキーを押した場合も入力完了とする
					if (event.which === 13) {
						$(this).blur();
					}
				});
		
			// テキストを非表示にして入力フィールドを追加
			$(this).hide().after($inputField);
		
			// 入力フィールドにフォーカスを当てる
			$inputField.focus();
		});

		// 削除ボタンをクリックしたときの処理
		$remove.on('click', function () {
			if (window.confirm('削除してよろしいですか？')) {
				$li.fadeOut(function () {
					$li.remove();
					updateData();
				});
			}
		});
	}

	/*
	 * LocalStorageに更新
	 */
	function updateData() {
		var list = [];
		// 現在のリスト情報を全て取得する
		$list.find('li').each(function () {
			var $item = $(this);
			// テキストと完了かどうかを保存する
			list.push({
				text: $item.find('.text').text(),
				complete: $item.hasClass('complete')
			});
		});
		// 文字列にしてストレージに保存
		storage['todo.list'] = JSON.stringify(list);
	}

	/**
	 * フォームを送信
	 */
	$('.todoForm').bind('submit', function (event) {
		// フォームのデフォルトの動作を止める
		event.preventDefault();
		// テキストボックスに入っている文字列を取得
		var text = $input.val();
		// todoを追加
		addTodo(text);
		// テキストボックスを空にする
		$input.val('');
		// ストレージの更新
		updateData();
	});

	/**
	 * LocalStorageからデータ読み込み
	 */
	function loadData() {
		if (storage['todo.list']) {
			// データがあれば、JSONデータをJSオブジェクトに変換
			const todoList = JSON.parse(storage['todo.list']);
			todoList.forEach(function (item) {
				addTodo(item.text, item.complete);
			});
		}
	}

	loadData();
});