let Input = document.querySelector('#input-box') 

let btns = document.querySelectorAll('.num');
let eql = document.querySelector('.eql')
let oldInput = 0

// Number input
btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
    

        Input.value = Number(Input.value)*10 + Number(btn.innerHTML);
        
    });
})

//Math Operations

let Opprs = document.querySelectorAll('.oppr')
Opprs.forEach((Oppr)=>{
    Oppr.addEventListener('click',()=>{
        console.log("add clicked")
        oldInput = Input.value
        console.log(Input.value)
        Input.value = 0

        
        eql.addEventListener('click',()=>{
            Input.value = operation(Number(oldInput),Number(Input.value),String(Oppr.id))
        })
        
    })
})

// AC button feature
let AC = document.querySelector('.ac')
AC.addEventListener('click',()=>{
    location.reload();
})


// backspace feature
let Bs = document.querySelector('.bs')
Bs.addEventListener('click',()=>{
    Input.value = Input.value.slice(0,-1)
})

// Decimal feature 
let Decimal = document.querySelector('.decimal')
Decimal.addEventListener('click',()=>{
    console.log("dot")
    Input.value = (Input.value + ".")
})

// Sign change
let Sign = document.querySelector('.sign')
Sign.addEventListener('click',()=>{
    Input.value = Number(Input.value) * -1
})

function operation(a, b, operation){
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

