let bt1 = document.querySelector('#bt1');
let ekran = document.querySelector('#ekran');

let bt2 = document.querySelector('#bt2');
let table = document.querySelector('.table');
let bt4 = document.querySelectorAll('#bt4');
let ekran3 = document.querySelector('#ekran3');
let bt3 = document.querySelector('#bt3');


bt1.addEventListener('click', getir);
bt2.addEventListener('click',islet);
bt3.addEventListener('click',start);
bt4.addEventListener('click',go);
function islet(){
    fetch('https://jsonplaceholder.typicode.com/posts').then(response =>{
        response.json().then(data=>{
            let postlar = "";
            data.forEach(element => {
                postlar += `${element.userId}, ${element.id}, ${element.body} <br>`
            });
            ekran2.innerHTML = postlar;
        }).catch(err=>{
            console.log(err);
        })
    })
}


function getir(){

fetch('https://jsonplaceholder.typicode.com/photos').then(response =>{
    response.json().then(data=>{
        let datalar = "";
        data.forEach(element => {
            datalar += `${element.albumId} , ${element.id} <img src="${element.url}" /></br>`
        });
        ekran.innerHTML = datalar;
    }).catch(err=>{
        console.log(err);
    })
})

}

function start(){

    fetch('https://jsonplaceholder.typicode.com/albums').then(response =>{
        response.json().then(data=>{
            let datalar3 = "";
            data.forEach(element => {
                datalar3 += `${element.userId}, ${element.id} <img src=" ${element.title}" /> <br>`
            });
            ekran3.innerHTML = datalar3;
        }).catch(err=>{
            console.log(err);
        })
    })
}

function go(){

    fetch('https://jsonplaceholder.typicode.com/posts').then(response =>{
        response.json().then(data =>{
            let datalar ="";
            data.forEach(element => {
                datalar += `<li>"${element.userId}, ${element.id} ${element.body}"</li> <br>`
            });
            table.innerHTML =datalar;
        }).catch(err=>{
            console.log(err);
        })
    })
}

