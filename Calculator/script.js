const numbers = document.querySelectorAll("[data-number]")
const operations = document.querySelectorAll("[data-operation]")
const equals = document.querySelector("[data-equals]")
const deletebtn = document.querySelector("[data-delete]")
const allClear = document.querySelector("[data-all-clear]")
const previous = document.querySelector("[data-previous]")
const current = document.querySelector("[data-current]")


class Calculator{
    constructor(previous, current){
        this.previous = previous
        this.current = current
        this.clear()
    }
    clear(){
        this.currentOpr = ""
        this.previousOp = ""
        this.operation = undefined
    }
    delete(){
        this.currentOpr = this.currentOpr.toString().slice(0, -1)
    }
    appendNum(number){
        if(number === '.' && this.currentOpr.includes(".")) return
        this.currentOpr = this.currentOpr.toString() + number
    }
    chooseOp(operation){
        if(this.currentOpr === "") return
        if(this.previousOp !== ""){
            this.compute()
        }
        this.operation = operation
        this.previousOp = this.currentOpr
        this.currentOpr = ""
    }
    compute(){
        let computation
        const prev = parseFloat(this.previousOp)
        const curr = parseFloat(this.currentOpr)
        if(isNaN(prev) || isNaN(curr)) return
        switch (this.operation) {
            case "+":
                computation = prev + curr
                break
            case "-":
                computation = prev - curr
                break
            case "*":
                computation = prev * curr
                break
            case "÷":
                computation = prev / curr
                break
            default:
                return
        }
        this.currentOpr = computation
        this.operation = undefined
        this.previousOp = ""
    }

    getDisplayNum(number){
        const stringNum = number.toString()
        const integerNum = parseFloat(stringNum.split('.')[0])
        const decimalNum = stringNum.split('.')[1]
        let integerDisplay
        if(isNaN(integerNum)){
             integerDisplay = ""
        }else{
            integerDisplay = integerNum.toLocaleString('en', {
            maximumFractionDigits: 0})
        }
        if(decimalNum != null){
            return `${integerNum}.${decimalNum}`
        }else{
            return integerDisplay
        }
    }

    update(){
        this.current.innerText =
        this.getDisplayNum(this.currentOpr)
        if(this.operation != null){
            this.previous.innerText = 
            `${this.getDisplayNum(this.previousOp)} ${this.operation}`
            
        }else{
            this.previous.innerText = ""

        }
    }

}

const calculator = new Calculator(previous, current)

numbers.forEach( button => {
    button.addEventListener("click", () => {
        calculator.appendNum(button.innerText)
        calculator.update()
    })
})

operations.forEach( button => {
    button.addEventListener("click", () => {
        calculator.chooseOp(button.innerText)
        calculator.update()
    })
})

equals.addEventListener("click", button => {
    calculator.compute()
    calculator.update()
})

allClear.addEventListener("click", button => {
    calculator.clear()
    calculator.update()
})


deletebtn.addEventListener("click", button => {
    calculator.delete()
    calculator.update()
})

