 var enemy = {
     cat: {
        name: 'Stinky', 
        health: 100,
        hits: 0,
     },
     catMaster: {
         name: 'CatMaster',
         health: 150,
         hits: 0,
     }
 }



let catName = "Stinky"
let hits = 0

function slap(key) {
    --enemy[key].health
    ++hits
    console.log(enemy[key].name)
    update(enemy[key])
    death(enemy[key])
}

function punch(key) {
    enemy[key].health -= 5
    ++hits
    console.log(enemy[key].health)
    update(enemy[key])
    death()
}

function kick(key) {
    enemy[key].health -= 10
    ++hits
    console.log(enemy[key].health)
    update(enemy[key])
    death()
}

function death(target) {
    if (target.health == 0) {
        document.getElementById("cats").innerHTML = `<p><img src="cartoonCat.jpg" alt="cat" class="img-fluid"></p>`
    }
    else{
        update()
    }
}

function update(target){
    document.getElementById("health").innerText = `${target.health}`
    document.getElementById("name").innerText = `${target.name}`
    document.getElementById("hitCount").innerText = `${target.hits}`
    
}
update()