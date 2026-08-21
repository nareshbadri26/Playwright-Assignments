var genderType = "female"

function printGender(){

    let color = "brown" // Function scope

    if(genderType === "female"){

        var age = 30;
        let color = "pink"; // Block scope

        console.log("Color inside the if block is " + color);

    }

    console.log("Color outside the if block is " + color);

    console.log("Age outside the if block is " + age);
}
    printGender();

    console.log("Gender Type printed globally is "+ genderType);

    
    