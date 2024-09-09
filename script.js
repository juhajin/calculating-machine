let total = 0;
let log = [ ];

function addToTotal(price, itemName) {
    total += price;
    log.push(`${itemName}: ₩${price.toLocaleString()}`);
    document.getElementById('total').innerText = `₩${total.toLocaleString()}`;
}

function resetTotal() {
    total = 0;
    document.getElementById('total').innerText = `₩${total.toLocaleString()}`;
}

function showLog() {
    const logList = document.getElementById('log-list');
    logList.innerHTML = '';

    if (log.length === 0) {
        logList.innerHTML = '<li>선택한 메뉴가 없습니다.</li>';
    } else {
        log.forEach(entry => {
            const li = document.createElement('li');
            li.innerText = entry;
            logList.appendChild(li);
        });
    }

    document.getElementById('log-modal').style.display = 'block';
}

function closeLog() {
    document.getElementById('log-modal').style.display = 'none';
}