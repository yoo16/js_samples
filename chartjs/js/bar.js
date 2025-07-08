const barChart = document.getElementById('barChart');
const ctx = barChart.getContext('2d');

const label = 'Votes';
const labels = ['Red', 'Blue', 'Yellow'];
const data = [12, 19, 3];

const backgroundColors = [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)'
];
const borderColors = [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)'
];
const borderWidth = 1;

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: label,
            data: data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: borderWidth,
        }]
    }
});