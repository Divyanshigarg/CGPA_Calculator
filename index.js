function calculate(){
//10th
    let sub1 = Number(document.getElementById('sub1').value);
    let sub2 = Number(document.getElementById('sub2').value);
    let sub3 = Number(document.getElementById('sub3').value);
    let sub4 = Number(document.getElementById('sub4').value);
    let sub5 = Number(document.getElementById('sub5').value);

    let totalmarks = ((sub1+sub2+sub3+sub4+sub5)/500)*100;

    let result10=totalmarks/9.5;
    
    document.getElementById('result10').innerHTML= result10.toFixed(2);
//12th
    let sub6 = Number(document.getElementById('sub6').value);
    let sub7 = Number(document.getElementById('sub7').value);
    let sub8 = Number(document.getElementById('sub8').value);
    let sub9 = Number(document.getElementById('sub9').value);
    let sub10 = Number(document.getElementById('sub10').value);

    let totalmarkss = ((sub6+sub7+sub8+sub9+sub10)/500)*100;

    let result12=totalmarkss/9.5;
    
    document.getElementById('result12').innerHTML= result12.toFixed(2);
}