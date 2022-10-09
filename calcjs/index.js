const buttons = document.getElementsByClassName("btn");
let count = 0;
let solution;
// console.log(buttons)
let string = " ";
Array.from(buttons).forEach((Element )=>{
    Element.addEventListener("click",(e)=>{
        console.log(e.target.innerHTML)
        if(e.target.innerHTML== "="){
           if(1)
           {  solution = eval(string);
              count=1;
        }

            
                document.querySelector("#text").value= solution;
                string= " ";
            
           if(solution===undefined){
            document.querySelector("#text").value="nothing input ";
            string = " ";
           }
        }
        else if(e.target.innerHTML==="AC"){
            document.getElementById("text").value="";
        }
        else
        {
            string= string +e.target.innerHTML;
            document.getElementById("text").value=string;
        }
// console.log(e);
    })
})