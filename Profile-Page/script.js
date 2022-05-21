var nameH1 = document.getElementById("nameJD");
var CRnum = document.getElementById('CRnum');
var todd = document.getElementById('allTodd');
var phil = document.getElementById('allPhil');
var YCnum = document.getElementById('YCnum');
console.log(nameH1);
console.log(CRnum);
console.log(todd);
console.log(phil);

var Ynum = YCnum.innerText;
var Cnum = CRnum.innerText;

function changeName() {
    console.log('yes!!')
    if(nameH1.innerText == 'Jane Doe') {
        nameH1.innerText = 'Bane Moe';
    } else {
        nameH1.innerText = 'Jane Doe'
    }

}

function addNumT() {
    removeT();
    Ynum++;
    YCnum.innerText = Ynum;
}

function removeT() {
    Cnum--;
    console.log('removing T!');
    todd.remove();
    whenChanged = document.getElementsByClassName('profileWhenremoved')
    CRnum.innerText = Cnum;
}
    
function addNumP() {
    removeP()
    Ynum++;
    YCnum.innerText = Ynum;
}

function removeP() {
    Cnum--;
    console.log('removing P!');
    phil.remove();
    CRnum.innerText = Cnum;
}