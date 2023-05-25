/* all thing related to input and display  */

const allbtnare = document.querySelectorAll("button");
const allbtn = Array.from(allbtnare);
allbtn.splice(allbtn.length-1,1); //remove = button
allbtn.splice(0,2); //remove ac and c button 

allbtn.forEach((thebtn)=>{
    thebtn.addEventListener("click",()=>{
        
        let text = thebtn.textContent;
        updaterecord(text);
        /* now this text has the info */
        
    });   
});


/* upon clicking = btn lower div transfers to upper and result 
gets displayed in lower div */
const eqstoo = document.querySelector(".equalstoo");
/* btn selection  */
const upperdiv = document.querySelector(".upper");
eqstoo.addEventListener("click",()=>{
    upperdiv.textContent = record ; 
  
    let resultdis = calculate(record);
    lowerdiv.textContent = resultdis;
    record = resultdis;
    
});

/* handle ac button  */
const acbtn = document.querySelector(".acc");
acbtn.addEventListener("click",()=>{
    record = '0'; 
    upperdiv.textContent = record ; 
    lowerdiv.textContent = record ; 
});

/* handle c button */
const cbtn = document.querySelector(".acc.c");
cbtn.addEventListener("click",()=>{
    record = record.slice(0,record.length-1);
    lowerdiv.textContent = record ; 
    
});

let record = '';
const lowerdiv = document.querySelector(".lower");
function updaterecord(text){
    if (record == '0') {record = '';}
        record += text ;
        lowerdiv.textContent=record ; 
        return record;
}

function calculate(string){
    console.log("at string"+string);
    let first = 0;
    let second = 0 ;
    let result = 0 ;
    let operators = ['%','/','*'];
    for (let x=0;x<string.length;++x){
        if(operators.includes(string[x])){
             first = Number(string.slice(0,x));
             second = Number(string.slice(x+1));
             if (string[x]=='%'){result = first%second;}
             if (string[x]=='/'){result = first/second;}
             if (string[x]=='*'){result = first*second;}
        }
    }
    let alsooperators = ['+','-'];
    for (let x=0;x<string.length;++x){
        if(alsooperators.includes(string[x])){
             first = Number(string.slice(0,x));
             second = Number(string.slice(x+1));
             if (string[x]=='+'){result = first+second;}
             if (string[x]=='-'){result = first-second;}
        }
    }
    return result ;

}

