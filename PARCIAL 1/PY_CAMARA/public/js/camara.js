let strem = null;
navigator.mediaDevices.getUserMedia({ video: true }).then(
    s => {
        strem = s

        document.getElementById("my_camara").srcObject = strem;
    }


).catch(error =>{
    console.log(error);
});



function tomarFoto() {
    let video_res = document.getElementById("my_camara");
    let foto_res = document.getElementById("foto");


    let ctx=foto_res.getContext("2d");
    ctx.drawImage(video_res, 0, 0, foto_res.width, foto_res.height);




}