var screen = document.querySelector(".post-its")
var list = [{
    name: "O Investidor Inteligente!",
    description: "lorem ipsun",
    url: "./oInvestidorInteligente.html"
}]
window.addEventListener('load',()=>{
    console.log(`Quantidade de posts: ${list.length}`);
    
    for(let i = 0; i < list.length; i++){
        screen.innerHTML += 
        `<a href="${list[i].url}">
        <div class="post">
                <div class="titulo">
                    <h4>${list[i].name}</h4>
                </div>
                <div class="imagem">
                    <img src="./images/imgBlog${i}.jpg" alt="${list[i].description}">
                </div>
            </div>
        </a>
        `;
    }
    
})