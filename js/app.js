

let menuToggle = document.getElementById('btnMenu');

const menuCollapse = document.getElementById('collapseMenu');

menuToggle.addEventListener('click', function () {

    console.log("click");
    // menuCollapse.classList.toggle('inactive')
    let h = menuCollapse.scrollHeight;
    let h2 = menuCollapse.clientHeight;
    console.log("scroll:", h);
    console.log("client:", h2);
    let heigth = 0;
    if (menuCollapse.clientHeight == "0") {
        heigth = menuCollapse.scrollHeight;
    }
    menuCollapse.style.height = `${heigth}px`;
})


window.onload = function(){
    document.getElementById("load").style.display="none"

};


sueldos=[50000,60000,70000,80000]
for(i=0; i<=0; i++){
    sueldos[i]=sueldos[i]+5000
}
console.log(sueldos);

