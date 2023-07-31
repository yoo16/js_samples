
var item_groups = document.getElementsByClassName('item-groups');
for (var items of item_groups) {
	for (var item of items.children) {
		console.log(item.innerText);
	}
}

// for (var items in item_groups) {
// 	for (var item in items.children) {
// 		console.log(item.innerText);
// 	}
// }

// for (var items of item_groups.children) {
// 	for (var item of items.children) {
// 		console.log(item.innerText);
// 	}
// }