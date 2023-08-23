let select1=document.querySelector('.select1');
let select2=document.querySelector('.select2');
let text=document.querySelector('.text')
let btn=document.querySelector('.btn')
let input=document.querySelector('.input1')
fetch('https://v6.exchangerate-api.com/v6/b760c77c2b7ddeb78ad67954/latest/USD')
.then((res)=>res.json())
.then((data)=>{

 let arr=Object.keys(data.conversion_rates);
// console.log(arr);
 arr.forEach((e)=>{
   let div=`<option>${e}</option>
  
    `

     select1.innerHTML+=div
     select2.innerHTML+=div
    

    
 })
 btn.addEventListener('click',()=>{
  fetch(`https://v6.exchangerate-api.com/v6/b760c77c2b7ddeb78ad67954/latest/${select1.value}`)
  .then((res)=>res.json())
  .then((data)=>{
    if (input.value==='') {
      text.innerHTML=`
      <h2>you must input number</h2>
     
   
   `
    }
    else{
      let price=data.conversion_rates[select2.value]
      text.innerHTML=`
        <h2> ${input.value} ${select1.value } =${price*input.value}${select2.value}  </h2> 
      
      `
    }
    
  })
 })
})