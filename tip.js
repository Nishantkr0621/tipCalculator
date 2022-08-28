function total() {

    let amount = document.querySelector("#billamt").value;
    
    let select = document.querySelector("#serviceQual").value ;
    
    let peopleCount = document.querySelector("#peopleamt").value ;
    
    console.log(amount, select, peopleCount);
    
    if(amount ==="")
    
    {
    
    alert("Please Enter Bill Amount");
    
    }
    
    if(peopleCount.length == 0){
    
    //console.log('if', peopleCount);
    
    let total = (parseFloat(amount) + select * parseFloat(amount));
    
    document.querySelector("#amount").innerHTML = "TIP AMOUNT" ;
    document.querySelector("#value").innerHTML ="₹:" + Math.round(total)  ;
    
    }
    
    else if(peopleCount == 1){
    
    let total = (parseFloat(amount) + select * parseFloat(amount)) / (parseFloat(peopleCount)) ;
    document.querySelector("#amount").innerHTML = "TIP AMOUNT" ;
    document.querySelector("#value").innerHTML ="₹:" + Math.round(total)  ;
    
    }
    
    else{
    
    //console.log('else', peopleCount);
     
    let total = (parseFloat(amount) + select * parseFloat(amount)) / (parseFloat(peopleCount)) ;
    document.querySelector("#amount").innerHTML = "TIP AMOUNT" ;
    document.querySelector("#value").innerHTML = "₹:" + Math.round(total) ;
    document.querySelector("#each").innerHTML = "each" ;
    }
    
    }