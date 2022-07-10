
let form=document.getElementById('form')
let input=document.getElementById('input')
let output=document.getElementById('container2')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    check();
    let value=input.value
    input.value='';
    func (value);
})

 // Async await and fetch
 page=1;
 pageSize=12;

let func=async(value)=>{
try{
    let url= await fetch(`https://www.anapioficeandfire.com/api/${value}?page=${page}&pageSize=${pageSize}`)
    let data= await url.json();
    for(let i=0;i<data.length;i++){
    
        console.log('name = ',data[i].name)
        console.log('isbn = ',data[i].isbn)
        console.log('numberOfPages = ',data[i].numberOfPages)
        console.log('authors = ',data[i].authors)
        console.log('publisher = ',data[i].publisher)
        console.log('released = ',data[i].released)
        console.log('characters = ',data[i].characters.splice(0,5))
        console.log('-'.repeat(100));


        let ol = document.createElement('ol')
        ol.setAttribute('class','h5')
        let li1 = document.createElement('li')
        let li2 = document.createElement('li')
        let li3= document.createElement('li')
        let li4= document.createElement('li')
        let li5= document.createElement('li')
        let li6= document.createElement('li')
        let li7= document.createElement('li')
        let li8= document.createElement('hr')
        let li9= document.createElement('br')
        
        li1.innerText = `name = ${data[i].name}`
        li2.innerText = `isbn = ${data[i].isbn}`
        li3.innerText = `numberOfPages = ${data[i].numberOfPages}`
        li4.innerText = `authors = ${data[i].authors}`
        li5.innerText = `publisher = ${data[i].publisher}`
        li6.innerText = `released = ${data[i].released}`
        li7.innerText = `characters = ${data[i].characters.splice(0,5)}`
        ol.append(li1,li2,li3,li4,li5,li6,li7,li8,li9)
        output.append(ol)
        
    }
}
catch(err){
    console.log(err);
    }
}

let check = ()=>{
    if(input.value === ''){
        alert('Your input Should not be empty')
    }
}