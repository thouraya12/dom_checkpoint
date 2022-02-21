let totale=document.getElementById('total')
console.log(totale)

let btnplus=document.getElementsByClassName("buttonP")
console.log(btnplus)
let btnmoins=document.getElementsByClassName("buttonM")
console.log(btnmoins)
for(let i=0; i<btnplus.length; i++){
    btnplus[i].addEventListener('click',function(){
        let qte=document.getElementsByClassName('quantity')
        console.log(qte)
        let prix =document.getElementsByClassName('prix')
        qte[i].innerHTML++
        totale.innerHTML = parseInt(totale.innerHTML) + parseInt(prix[i].innerHTML)
    })
}

for(let i=0; i<btnmoins.length; i++){
    btnmoins[i].addEventListener('click',function(){
        let qte=document.getElementsByClassName('quantity')
        console.log(qte)
        let prix =document.getElementsByClassName('prix')
        if (qte[i].innerHTML>0){
            qte[i].innerHTML--
        totale.innerHTML = parseInt(totale.innerHTML) - parseInt(prix[i].innerHTML)
        }
        
    })

}
let hearts=document.getElementsByClassName('heart')
console.log(hearts)
for(let heart of hearts){
    heart.addEventListener('click',function(){
        if((heart.getAttribute('fill')) =='grey'){
            heart.setAttribute('fill', 'red')
        }
        else{
            heart.setAttribute('fill','grey')

        }
    })
}
