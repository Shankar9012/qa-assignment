const setResult = (text) => {
    document.getElementById('result').innerText = `Result: ${text}`;
}

const getFormValues = () => {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    return {a, b};
}

const sendRequest = (route, values) => {
    return fetch(route, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    });
}

document.getElementById('addBtn').addEventListener('click', async () => {
    const {a, b} = getFormValues();
    const response = await sendRequest('/add', {a, b});
    const data = await response.json();
    setResult(data.result);
});

document.getElementById('devideBtn').addEventListener('click', async () => {
    const {a, b} = getFormValues();
    const response = await sendRequest('/devide', {a, b});
    const data = await response.json();
    setResult(data.result);
});
