async function fetchData() {
    const url = 'https://raw.githubusercontent.com/NallyNik/fm-expenses-chart-component/master/assets/data.json';
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function updateSpan (data) {
    const spans = document.querySelectorAll('.amount');
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = `$${data[i].amount}`;
    }
}

function updateItem (data) {
    const items = document.querySelectorAll('.item');
    for (let i = 0; i < items.length; i++) {
        items[i].style.height = `${data[i].amount*2}px`;
    }
}

function updateDays (data) {
    const days = document.querySelectorAll('.day');
    for (let i = 0; i < days.length; i++) {
        days[i].innerHTML = data[i].day;
    }
}

(async () => {
    const data = await fetchData();
    updateSpan(data);
    updateItem(data);
    updateDays(data);
})();


//painting the current day of the week
( () => {
    let today = new Date();
    let dayOfWeek = today.getDay();
    let weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    let dayOfWeekString = weekdays[dayOfWeek];
    const day = document.getElementById(dayOfWeekString);
    day.style.backgroundColor = 'hsl(186, 34%, 60%)';
})();


    