// const backButton = document.getElementById("back_button")

// backButton.addEventListener("click", ()=> {
//     document.location.href =  './app.html'
// })

function addListener(button) {
    button.addEventListener("click", ()=> {
        document.location.href =  './app.html'
    })
}



window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }

    const backButton = document.getElementById("back_button")
    addListener(backButton)
    document.getElementById("loader").classList.add("loader")
    setTimeout( () => {
        document.getElementById("loader").classList.remove("loader")
        document.getElementById('estimate_amount').innerHTML = data.name + " Lakh Rupees";
    },500);


    
}