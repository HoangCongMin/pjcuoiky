var sp =[
    {
        hinh:'dong-ho-orient-caballero-fag00004d0_1-ims.jpeg',
        gia:3308840,
        hang:'Orient',
        ten: 'Orient FAG00004D0'
    },
    {
        hinh:'Casio-MTP-VT01L-2B-7-1635995147065.jpeg',
        gia:1308840,
        hang:'casio',
        ten: 'casiomt1'
    },
    {
        hinh:'Orient-FAG00003W0-5-1633056427642.jpeg',
        gia:5308840,
        hang:'Orient',
        ten: 'Orient Caballero FAG00004D0'
    },
    {
        hinh:'B640WGG-9DF-1-1640761701889.jpeg',
        gia:6308840,
        hang:'casio',
        ten: 'casiob640'
    },
    {
        hinh:'LA680WA-7-1.jpeg',
        gia:7308840,
        hang:'Orient',
        ten: 'Orient la'
    },
    {
        hinh:'Seiko-Prospex-LX-SNR035J-1640510028156.jpeg',
        gia:8308840,
        hang:'casio',
        ten: 'casio seiko'
    },
    {
        hinh:'tissot-4.jpeg',
        gia:9308840,
        hang:'Orient',
        ten: 'Orient tiso'
    },
    {
        hinh:'0d891d05ea35c3768cff6de8605f088a-1637742984970.jpeg',
        gia:10308840,
        hang:'casio',
        ten: 'casio focus'
    },
    {
        hinh:'02H8xz0.jpeg',
        gia:4308840,
        hang:'casio',
        ten: 'Orient Cab'
    },
]

function item(hdac=[],ctgg=[]) {
    dsdh=document.getElementById('dsdongho'),
        dsdh.innerHTML='';
    for(var i=0;i<sp.length;i++){
        hinhdt=sp[i].hinh;
        giaban=sp[i].gia;
        hangdt=sp[i].hang;
        ten=sp[i].ten;

        if (hdac.length>0){
            if(hdac.includes(hangdt)==false) continue;
        }

        if (ctgg.length>0){
            if(giaban<5000000 && ctgg.includes('1')==false) continue;
            if(giaban>5000000 && ctgg.includes('2')==false) continue;
        }

        dsdh.innerHTML+=`<div class="dh">
                <img src="${hinhdt}" alt="">
                <h4>${ten}</h4>
                <span class="tbol"></span>
                <span>${giaban}₫</span>
                
           </div>`
    }

}

item();

function chondh() {
    var ch=document.getElementsByClassName('thuonghieu');
    var hdac=[];
    for (var i=0;i<ch.length;i++){
        if(ch[i].checked)
            hdac.push(ch[i].value);
    }

    var chg=document.getElementsByClassName('giaban');
    var ctgg=[];
    for (var j=0;j<chg.length;j++){
        if(chg[j].checked)
          ctgg.push(chg[j].value) ;
        console.log(ctgg)
    }
item(hdac,ctgg)


}