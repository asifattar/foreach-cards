var cl = console.log;


var imgcontainer = document.getElementById(`imgcardd`)


var imgarray=[
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random","https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random","https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random","https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",];
var result= " ";
imgarray.forEach(function(img){
    result += `
    <div class="col-sm-4">
                        <div class="card mb-4">
                            <div class="card-header text-center bg-info">img name</div>
                            <div class="card-ibody">
                                <img src= ${img}  class="img-fluid">
                            </div>
                        </div>
                    </div>
    `
})

imgcontainer.innerHTML=result