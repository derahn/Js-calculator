class Calculator {
    constructor(upperSummation, lowerSummation) {
        this.upperSummation = upperSummation
        this.lowerSummation = lowerSummation
    }
    clear(){

    }
    delete(){
        
    }
    appendNumber(){
        
    }
    chooseOperation(){
        
    }
    compute(){
        
    }
    updateDisplay(){
        
    }
}

const numberButtons = document.querySelectorAll("[data-number]")
const sumButtons = document.querySelectorAll("[data-sum]")
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const clearButton = document.querySelector("[data-clear]")
const upperSummation = document.querySelector(["data-upper"])
const lowerSummation = document.querySelector(["data-lower"])