const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

//create map
const map = L.map('mapid', options).setView([-22.2306542,-45.935184], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})



//create and add marker
L.marker([-22.2306542,-45.935184], {icon})
.addTo(map)

/* img gallery */

function selectImage(event){
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de images
    imageContainer.src = image.src

    //adicionar classe .active
    button.classList.add('active')
}
