
function checkchuoi(bien) {
    let newbien = bien.replace(/,/g,'.');
    if (newbien.split('.').length - 1 >= 2) {
        return 'Error';
    }
    for (let i = 0; i < newbien.length; i++) {
        if(isNaN(parseInt(newbien[i]))) {
            if(newbien[i] != '.') {
                return 'Error';
            }
        }
    }
    return newbien;
}

function BED(){

    let PhanLieu = document.getElementById("PhanLieu");
    PhanLieu = parseFloat(checkchuoi(PhanLieu.value))


    let TongLieu = document.getElementById("TongLieu");
    TongLieu = parseFloat(checkchuoi(TongLieu.value))

    let ab = document.getElementById("ab");
    ab = parseFloat(checkchuoi(ab.value))

    
    if (PhanLieu<0 || TongLieu<0 || ab < 0|| dk(TongLieu) ){
        if (ab<=0){
            alert('Hãy kiểm tra lại dữ liệu đã nhập vào');
            EQD2 = 0;
            BED = 0;
        };
    }        
    let BED = Math.round((TongLieu * (1 + PhanLieu/ab))*100)/100;

    let EQD2 = Math.round(((TongLieu*(1+(PhanLieu/ab)))/(1+(2/ab)))*100)/100;

    if (isNaN(BED)||isNaN(EQD2)){
        alert('Hãy kiểm tra lại dữ liệu đã nhập vào');
            EQD2 = 0;
            BED = 0;
    };

    document.getElementById("kqBED").value = BED.toString();
    document.getElementById("kqeqd2").value = EQD2.toString();
};

function dk(value){
    console.log(Number.isInteger(value));
    if(Number.isInteger(value)) {
        return true;
    }
    else{
    return false;
    };
};

function ChuyenDoi(){
    let n1= document.getElementById("n1");
    n1 = parseFloat(checkchuoi(n1.value));

    let n2= document.getElementById("n2");
    n2 = parseFloat(checkchuoi(n2.value));

    let d1= document.getElementById("d1");
    d1 = parseFloat(checkchuoi(d1.value));

    let d2= document.getElementById("d2");
    d2 = parseFloat(checkchuoi(d2.value));

    let ab = document.getElementById("abcd");
    ab = parseFloat(checkchuoi(ab.value));

    if (Number.isNaN(n1) && dk(n2) && d2>=0 && d1>=0 && ab>0){
        let kqn1 = Math.round(((n2*d2*(ab+d2))/(d1*(ab+d1)))*100)/100;
        document.getElementById("n1").value = kqn1.toString();
    } 
    else if(Number.isNaN(n2) && dk(n1) && d2>=0 && d1>=0 && ab>0){
        let kqn2 = Math.round(((n1*d1*(ab+d1))/(d2*(ab+d2)))*100)/100;
        document.getElementById("n2").value = kqn2.toString();
    }
    else if(dk(n1) && dk(n2) && Number.isNaN(d1) && d2>=0 && ab>0){
        let kqd1 = Math.round((parseFloat(Math.sqrt(( ab * ((n2 * d2)/n1)*(1 + d2 / ab)+Math.pow((0.5*ab),2)))-0.5*ab))*100)/100;
        document.getElementById("d1").value = kqd1.toString();
        console.log(kqd1);
    }
    else if(dk(n1) && dk(n2) && Number.isNaN(d2) && d1>=0 && ab>0){
        let kqd2 = Math.round((parseFloat(Math.sqrt((ab*((n1*d1)/n2)*(1+d1/ab)+Math.pow((0.5*ab),2)))-0.5*ab))*100)/100;
        document.getElementById("d2").value = kqd2.toString();
        console.log(kqd2)
    }
    else{
        alert ("Hãy kiểm tra lại dữ liệu nhập vào");
        return
    };
};

function SuaSai(){
    let Dp = document.getElementById("Dp");
    Dp = parseFloat(checkchuoi(Dp.value));

    let dp = document.getElementById("dp");
    dp = parseFloat(checkchuoi(dp.value));

    let De = document.getElementById("De");
    De = parseFloat(checkchuoi(De.value));

    let de = document.getElementById("de");
    de = parseFloat(checkchuoi(de.value));

    let dc = Math.round((((Dp*dp - De*de)/(Dp - De))*100))/100;
    let Dc = Math.round((Dp - De)*100)/100;


    if(Dp>=0 && dp>=0 && De>=0 && de>=0 && Dp>De){
        document.getElementById("Dc").value = Dc.toString();
        document.getElementById("dc").value = dc.toString();
    } else{
        alert("Hãy kiểm tra dữ liệu đã nhập vào");
    };
}