var input_BED = document.getElementById("kqBED");

function BED(){

    var PhanLieuEle = document.getElementById("PhanLieu");
    var PhanLieu = parseFloat(PhanLieuEle.value).toFixed(2);


    var TongLieuEle = document.getElementById("TongLieu");
    var TongLieu = parseFloat(TongLieuEle.value).toFixed(2);

    var abEle = document.getElementById("ab");
    var ab = parseFloat(abEle.value).toFixed(2);

    
    if (PhanLieu<0 || TongLieu<0 || ab < 0 ||isNaN(PhanLieu)||isNaN(TongLieu)||isNaN(ab)){
        alert('Hãy kiểm tra lại dữ liệu đã nhập vào');
        EQD2 = 0;
        BED = 0;}

    var BED = Math.round((TongLieu * (1 + PhanLieu/ab))*100)/100;

    var EQD2 = Math.round(((TongLieu*(1+(PhanLieu/ab)))/(1+(2/ab)))*100)/100;


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
    let n1Ele= document.getElementById("n1");
    let n1 = parseFloat(n1Ele.value);

    let n2Ele= document.getElementById("n2");
    let n2 = parseFloat(n2Ele.value);

    let d1Ele= document.getElementById("d1");
    let d1 = parseFloat(parseFloat(d1Ele.value));

    let d2Ele= document.getElementById("d2");
    let d2 = parseFloat(parseFloat(d2Ele.value));

    let abEle = document.getElementById("abcd");
    let ab = parseFloat(parseFloat(abEle.value).toFixed(2));


    if (Number.isNaN(n1) && dk(n2) && d2>=0 && d1>=0){
        let kqn1 = Math.round(((n2*d2*(ab+d2))/(d1*(ab+d1)))*100)/100;
        document.getElementById("n1").value = kqn1.toString();
    } 
    else if(Number.isNaN(n2) && dk(n1) && d2>=0 && d1>=0){
        let kqn2 = Math.round(((n1*d1*(ab+d1))/(d2*(ab+d2)))*100)/100;
        document.getElementById("n2").value = kqn2.toString();
    }
    else if(dk(n1) && dk(n2) && Number.isNaN(d1) && d2>=0){
        var kqd1 = Math.round((parseFloat(Math.sqrt(( ab * ((n2 * d2)/n1)*(1 + d2 / ab)+Math.pow((0.5*ab),2)))-0.5*ab))*100)/100;
        document.getElementById("d1").value = kqd1.toString();
        console.log(kqd1);
    }
    else if(dk(n1) && dk(n2) && Number.isNaN(d2) && d1>=0){
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
    let DpEle = document.getElementById("Dp");
    let Dp = parseFloat(DpEle.value);

    let dpEle = document.getElementById("dp");
    let dp = parseFloat(dpEle.value);

    let DeEle = document.getElementById("De");
    let De = parseFloat(DeEle.value);

    let deEle = document.getElementById("de");
    let de = parseFloat(deEle.value);

    let dc = Math.round((((Dp*dp - De*de)/(Dp - De))*100))/100;
    let Dc = Math.round((Dp - De)*100)/100;


    if(Dp>=0 && dp>=0 && De>=0 && de>=0 && Dp>De){
        document.getElementById("Dc").value = Dc.toString();
        document.getElementById("dc").value = dc.toString();
    } else{
        alert("Hãy kiểm tra dữ liệu đã nhập vào");
    };
}