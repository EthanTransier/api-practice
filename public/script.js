const result = document.getElementById('result');
var prices = [];
var newPrices = [];
var newPrices2 = [];
var categories = [];
var cats = ['breakfast', 'lunch', 'shakes']
var newCat = [];
var newCat2 = [];
var total = ''
async function getAllItems(){
    const response = await axios.get('/api/menu');
    
    const fullMenu = response.data.data;
    for(let i=0; i<fullMenu.length; i++){
        let item = `<div class="mainItemContainer">
            <div class="infoContainer">
                <h3>${fullMenu[i].title}</h3>
                <h5>Price: ${fullMenu[i].price}</h5>
                <p class="cat">Category: ${fullMenu[i].category}</p>
                <p>${fullMenu[i].desc}</p>
            </div>
            <img src="${fullMenu[i].img}" alt="${fullMenu[i].desc}">
        </div>`
        prices.push([item, fullMenu[i].price]);
        categories.push([item, fullMenu[i].category])
    }
    prices.sort(function(a, b){
        return a[1] - b[1]
    })
    for(let i = 0; i < prices.length; i++){
        newPrices.push(prices[i][0])
        newPrices2.push(prices[i][0])
    }
    newPrices2.reverse()
    console.log(newPrices2)
    let temp = 0;
    // let currentCat = 'breakfast';
    for(let i = 0; i< cats.length; i){
        for(let j = 0; j< categories.length; j++){
            if(categories[j][1] == cats[i]){
                newCat.push(categories[j][0])
                newCat2.push(categories[j][0])
            }else{
                temp++
            }
        }
        if((temp + newCat.length) >= categories.length){
            i++
        }
    }
    newCat2.reverse();
    result.innerHTML = newCat.join('<br>')
    total = newCat.join('<br>');
}

getAllItems()

function sort(){

    const sortType = document.getElementById('sort').value
    const direction = document.getElementById('direction').value
    if(direction == 'up'){

        if(sortType == 'price'){
            result.innerHTML = newPrices.join('<br>')
        }else{
            result.innerHTML = newCat.join('<br>')
        }
    }else if(direction == 'down'){
        if(sortType == 'price'){
            result.innerHTML = newPrices2.join('<br>')
        }else{
            result.innerHTML = newCat2.join('<br>')
        }
    }
    total = result.innerHTML
    filter()
}
var final = []
function filter(){
    // const currentResult = document.getElementById('result').innerHTML.split('<br>');
    const currentResult = total.split('<br>')
    const breakfast = document.getElementById('breakfast');
    const lunch = document.getElementById('lunch');
    const shakes = document.getElementById('shakes');
    if(breakfast.checked == false && lunch.checked == false && shakes.checked == false){
        console.log('nothing checked')
    }else {
        console.log(currentResult)
        if(breakfast.checked){
            for(let i = 0; i < currentResult.length; i++){
                if(currentResult[i].includes('breakfast')){
                    console.log('breakfast')
                    final.push(currentResult[i])
                }
            }
        }
        if(lunch.checked){
            for(let i = 0; i < currentResult.length; i++){
                if(currentResult[i].includes('lunch')){
                    final.push(currentResult[i])
                }
            }
        }
        if(shakes.checked){
            for(let i = 0; i < currentResult.length; i++){
                if(currentResult[i].includes('shakes')){
                    final.push(currentResult[i])
                }
            }
        }
        result.innerHTML = ""
        console.log(final)
        result.innerHTML = final.join('<br>')
        final = []
    }
    
}

async function search(){
    const searchResult = document.getElementById('search')
    console.log(searchResult.value)
    if(searchResult.value  == ''){
        console.log('nothing searched')
        sort()
    }else{
        const response = await axios.get(`/api/menu/${Number(searchResult.value)}`);
        console.log(response.data.data)
        result.innerHTML = `<div class="mainItemContainer">
            <div class="infoContainer">
                <h3>${response.data.data.title}</h3>
                <h5>Price: ${response.data.data.price}</h5>
                <p class="cat">Category: ${response.data.data.category}</p>
                <p>${response.data.data.desc}</p>
            </div>
            <img src="${response.data.data.img}" alt="${response.data.data.desc}">
        </div>`
    }
}