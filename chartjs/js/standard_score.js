const backgroundColor = 'rgba(255, 255, 255, 0)';
const borderColors = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
];

const title = '偏差値';
const exam_names = [
    '第1回', '第2回', '第3回', '第4回', '第5回', '第6回',
];
const subjects = [
    { key: 'nation_language', name: '国語', },
    { key: 'mathmatic', name: '算数', },
    { key: 'science', name: '理科', },
    { key: 'society', name: '社会', },
];

const srandard_scores = {
    nation_language: [ 50.0, 51.0, 52.0, 53.0, 54.0, 49.0 ],
    mathmatic: [ 52.0, 54.0, 55.0, 51.0, 57.0, 48.0 ],
    science: [ 48.0, 47.0, 45.0, 44.0, 43.0, 49.0 ],
    society: [ 50.0, 57.0, 55.0, 54.0, 53.0, 59.0 ],
}

var data = [];
function init() {
    subjects.forEach(function (subject, index) {
        data.push(
            {
                label: subject.name,
                data: srandard_scores[subject.key],
                borderColor: borderColors[index],
                backgroundColor: backgroundColor,
            }
        )
    })
}

init();
console.log(data);
var ctx = document.getElementById('chart');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: exam_names,
        datasets: data,
    },
    options: {
        title: {
            display: true,
            text: title
        }
    }
});