const presentclass = document.getElementById('currClass');
const allclass = document.getElementById('totalClass');
const selectedAtten = document.getElementById('target');
const resultshow = document.getElementById('resultshow');
const calculateBTN = document.querySelector('#calculate');



calculateBTN.addEventListener('click',(e)=>{
    const currClass = presentclass.value;
    const totalClass = allclass.value;
    const targetAtten = selectedAtten.value;
    let result = Math.ceil(((targetAtten * totalClass) - currClass) / (1-targetAtten));
    let NoOfDays = Math.ceil(result / 8);

    resultshow.style.backgroundColor = '#f2f2f2'; //back color of after result div
    resultshow.style.color = "green"

    // Validate if fields are filled
    if (!currClass || !totalClass || currClass<=0 || totalClass<=0) {
        resultshow.innerHTML = "Invalid Value Entered";
        resultshow.style.color = "red"; //visual indication
        return;
    }
    //checking NaN values.........
    if (isNaN(currClass) || isNaN(totalClass)) {
        resultshow.innerHTML = "Please Enter Valid Number";
        resultshow.style.color = "red"; 
        return;
    }
    //checking denominator........
    if(targetAtten == 1){
        resultshow.innerHTML = "All Classes Needs to be attended ....BAD LUCK !!👻"
    }
    //final result.........
    else{
    resultshow.innerHTML = `${result} Classes Needs to be attended <br>Resulting in ${NoOfDays} Working Days 🙌</br>`
    }
    
    
})