
//Configuraciones
let yaLlegamos=false;

//ejecucion
for (let countador=0;countador<10;countador++) {
    
    if(countador==9){
        yaLlegamos=true;
    }

    console.log(`${countador+1}:Ya llegamos?`);
    if(yaLlegamos){
        console.log("Si");
    } 
    else{
            if((countador%7)==0 && countador!=0){
                console.log("Ah, como chingas!");
            }
            else{
                console.log("No");
            }
        }
    }
