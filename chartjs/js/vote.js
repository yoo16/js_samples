async function drawHalfPieRulingVsOpposition() {
    const res = await fetch('api/vote.json');
    const json = await res.json();

    let rulingVotes = 0;
    let oppositionVotes = 0;

    Object.values(json.parties).forEach(party => {
        if (party.group === '与党') {
            rulingVotes += party.votes;
        } else if (party.group === '野党') {
            oppositionVotes += party.votes;
        }
    });

    const ctx = document.getElementById('halfPieChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['与党', '野党'],
            datasets: [{
                data: [rulingVotes, oppositionVotes],
                backgroundColor: ['rgb(54,162,235)', 'rgb(255,99,132)']
            }]
        },
        options: {
            rotation: -90,
            circumference: 180,
            plugins: {
                title: {
                    display: true,
                    text: `${json.title}：与党 vs 野党（得票率）`,
                    font: { size: 16 }
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

drawHalfPieRulingVsOpposition();
