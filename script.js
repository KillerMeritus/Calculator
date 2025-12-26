let Input = document.querySelector('#input-box') 

let btns = document.querySelectorAll('.num');
let eql = document.querySelector('.eql')


// Number input
btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
    

        Input.value = Number(Input.value)*10 + Number(btn.innerHTML);
        
    });
})

//Math Operations

// addition
let Opprs = document.querySelectorAll('.oppr')
Opprs.forEach((Oppr)=>{
    Oppr.addEventListener('click',()=>{
        console.log("add clicked")
        let oldInput = Input.value
        console.log(Input.value)
        Input.value = ""
        let newInput = Input.value

        eql.addEventListener('click',()=>{
            Input.value = operation(Number(oldInput),Number(newInput),String(Oppr.id))
        })
        
        
    })
})

console.log(oper(5,3,))


function operation(a = Number, b = Number, operation){
    if(operation === "Add"){
        console.log(a+b)
        return (a + b);
    }else if(operation === "Sub"){
        return Number(a-b)
    }else if(operation === "Product"){
        return a*b
    }else if(operation === "Divide"){
        return a/b
    }else if(operation === "Modulus"){
        return a%b
    }


    
}

