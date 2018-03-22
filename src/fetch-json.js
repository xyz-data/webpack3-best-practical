




fetch(`http://localhost:7777/datas`)
.then(res => res.json())
.then(json => {
    console.log(`json = ${json}`);
    console.log(`json.length = ${json.length}`);
    json.map(
        (data) => console.log(`data`, data)
    );
    return repos = json;
});



/* 


fetch(`http://localhost:7777/datas`)
.then((response) => response.json())
.then((json) => {
    console.log(`json = ${json}`);
    console.log(`json.length = ${json.length}`);
    json.map(
        (data) => console.log(`data`, data)
    );
    return repos = json;
});



*/