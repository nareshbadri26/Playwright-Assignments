export class WebComponent{

    selector: string;

    constructor(selector: string) {

        this.selector = selector
    }

    click(){

        console.log("Simulating a click");
        
    }

    focus(){

        console.log("Simulating focusing on the component")
    }
}