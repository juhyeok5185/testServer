
function Find(target){
    return document.querySelector(target);
}

function FindAll(target){
    return document.querySelectorAll(target);
}

function LogList(targets){
    targets.forEach(function(target) {
        console.log(target.value);
    });
}

function LogMap(targets){
    for (const key in targets) {
        if (targets.hasOwnProperty(key)) {
            console.log(`${key} : ${targets[key]}`);
        }
    }
}

function LogFormData(formData){
    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
}

function ApiRequestBody(url, method, requestBody) {
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => response.text())
        .then(data => {
            console.log(data); // 서버 응답 데이터 출력
        })
        .catch(error => {
            console.error(error);
        });
}