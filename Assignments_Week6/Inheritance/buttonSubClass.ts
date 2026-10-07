import { WebComponent } from "./webComponentSuperClass";


class Button extends WebComponent{

    click(){

        super.click();

        console.log("Overriding the click action from Parent Class");
        
    }
}

class TextInput extends WebComponent{

    value: string = ""

    enterText(text: string){

        this.value = text

        console.log("Simulating text entry");
        
    }
}

function testComponents() {

    let buttonObj = new Button("Selctor Tag");

    buttonObj.click();

    buttonObj.focus();

    let textInputObj = new TextInput("Selector Tag 2")

    textInputObj.click();

    textInputObj.enterText("Naresh");

    textInputObj.focus();

}

testComponents();