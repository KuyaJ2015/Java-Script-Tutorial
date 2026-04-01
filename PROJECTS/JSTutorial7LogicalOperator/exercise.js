let age = 18;
let isRegister = false;



if (isRegister && age >= 18) {
    alert(`Valid Voter`)
} else if (!isRegister && age >= 18) {
    alert(`Register First`)
} else if(isRegister && age < 18){
    alert(`Invalid Voter`)
}else alert(`Non Voter`)

