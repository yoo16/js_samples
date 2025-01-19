$(function () {

	var $input = $('#todo-input');
	var $list = $('#todo-list');
	var storage = window.localStorage;

	/*
	 * Todoを追加する関数
	 */
	function addTodo(text, isComplete) {
		// リストアイテムをつくる
		var $text = $('<span>').addClass('px-3 text').text(text);
		var $checkbox = $('<input type="checkbox">');
		var $remove = $('<span>').text('削除').addClass('p-2 text-xs bg-red-500 text-white');

		var $li = $('<li>');
		$li.append($checkbox).append($text).append($remove);

		// 完了済みの場合の処理
		if (isComplete) {
			$li.addClass('complete');
			$li.children('.text').addClass('line-through');
			$checkbox.attr('checked', true);
		}

		// チェックボックスをクリック
		$checkbox.on('click', function () {
			if ($(this).is(':checked')) {
				$li.addClass('complete');
				$li.children('.text').addClass('line-through');
			} else {
				$li.removeClass('complete');
				$li.children('.text').removeClass('line-through');
			}
			updateData();
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
		// リストに追加する
		$list.append($li);
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

	// フォームを送信したときの処理
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

	// LocalStroageからデータを復元
	function loadData() {
		var storageList = storage['todo.list'];
		if (storageList) {
			JSON.parse(storageList).forEach(function (item) {
				addTodo(item.text, item.complete);
			});
		}
	}

	loadData();
});
