
let pHealth = 100
let catName = "Stinky"
let hits = 0

function slap() {
    --pHealth
    ++hits
    console.log(pHealth)
    update()
    death()
}

function punch() {
    pHealth -= 5
    ++hits
    console.log(pHealth)
    update()
    death()
}

function kick() {
    pHealth -= 10
    ++hits
    console.log(pHealth)
    update()
    death()
}

function death() {
    if (pHealth == 0) {
        document.getElementById("cats").innerHTML = `<p><img src="cartoonCat.jpg" alt="cat" class="img-fluid"></p>`
    }
    else{
        update()
    }
}

function update(){
    document.getElementById("health").innerText = `${pHealth}`
    document.getElementById("name").innerText = `${catName}`
    document.getElementById("hitCount").innerText = `${hits}`
    
}
update()