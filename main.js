function calculate() {
    let height = document.getElementById("height_input").value;
    let weight = document.getElementById("weight_input").value;
    let bmi = 0;
    bmi = (weight / (height * height));
    bmi = bmi.toFixed(2);
    document.getElementsByName('display')[0].value = bmi;gi