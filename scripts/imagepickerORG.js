// List of files

function choosePic () {

    var images = ['jvJVefx.jpg', 'EeE9J.jpg', 'aZScqx6.jpg', 'n0x244u8ajez.png', 'PsDD5FK.jpg', 'AhgFudA.jpg', 'Y7tO223.jpg', 'hZ52wIX.jpg', 'paiv3jU.jpg', 'BQ6KjPa.jpg', 'kWr2TCv.jpg', 'xtRaaY5.jpg', 'rEOPhmL.jpg', 'NO8ccpA.jpg', 'ra6M5zu.jpg', '6mnK4D0.jpg', '8Bq53xj.jpg', '1Qcwduq.jpg', 'f0ghN9G.jpg', 'Xik4G4c.jpg', 'Fq14Fsk.jpg', 'w7g4Tex.jpg', 'cgVCtwd.jpg', 'vnHhC5m.jpg', 'QqffsPx.jpg', 'q6Zfn7p.jpg', 'uasqmx0nfuhz.jpg', 'vwVqjMP.jpg', 'hbbpjec.jpg', 'AW16Y0i.jpg', 'XNjq5dC.jpg', 'Z7FLI6v.jpg', 'YWMo1IJ.jpg', 'q5u0Ngd.jpg', 'L6w1YUN.jpg', 'UZH8X4x.jpg', 'afBGhhB.jpg', 'X0sd0Ho.jpg', '7SqL0BC.jpg', '2dGXJp7.jpg', '3Dap2EL.jpg', 'sDsSu0m.jpg', 'hs6EUln.jpg', 'oSiYCN3.jpg', 'unbenannt3yywl.jpg', 'TNAG0Po.jpg', '2rQoBh8.jpg', 'GLi3zS6.jpg', 'SanFrancisco.jpg', 'VebP6Ol.jpg', '5bKd1fd.jpg', '1k3VaGh.jpg', 'uENexRC.jpg', 'eexbpm62e1601.jpg', 'QiUF7XB.jpg', 'GGYgJ0G.jpg', 'mQUd1tO.jpg', 'h8R5xMB.jpg', 'ti9jKcI.jpg', 'vBcVD4o.jpg', 'IW7I8dT.jpg', 'AdF1fVN.jpg', 'vQA6IsA.jpg', 'd0k128jwxi101.jpg', 'Spaceshuttle-Trough-Clouds.jpg']


    var randomNum = Math.floor(Math.random() * images.length);
    document.getElementById("centerImage").src = "WallPapers/" + images[randomNum];
}

window.onload = choosePic;
