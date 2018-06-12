function choosePic () {
	
    let images = ['xenqt1xpjbuz.jpg', 'streamline.jpeg', 'hLE28KQ.jpg', 'EeE9J.jpg', 'f4uy8su3kp201.jpg', 'aZScqx6.jpg', 's7yoklHciONffazTYc70ba0zRV81F2FALn7wweilPbs.jpg', 'PsDD5FK.jpg', 'AhgFudA.jpg', 'Y7tO223.jpg', '4k-wallpaper-cloudy-dark-clouds-1146804.jpg', 'GeljQRN.jpg', 'oiZfq.jpg', 'LVaoA.jpg', 'adventure-alps-black-and-white-1146642.jpg', 'hZ52wIX.jpg', 'paiv3jU.jpg', 'd0k128jwxi101.jpg', 'zlhxo4z.jpg', 'download.jpg', 'OUe6WiC.jpg', 'BQ6KjPa.jpg', 'hEQUZSu.jpg', 'kWr2TCv.jpg', 'rZhTV.jpg', 'xtRaaY5.jpg', '4fdxgR2.jpg', 'rEOPhmL.jpg', 'NO8ccpA.jpg', 'ra6M5zu.jpg', 'alena-aenami-castle2k.jpg', '6mnK4D0.jpg', 'alena-aenami-close-to-the-sun-1920.jpg', '8Bq53xj.jpg', 'pQS06lt.jpg', '21nnfsH.jpg', '1Qcwduq.jpg', '6zowermr3uc01.jpg', 'alena-aenami-stay-1k.jpg', 'Xik4G4c.jpg', 'Fq14Fsk.jpg', '01.jpg', '03.jpg', 'ti9jKcI.jpg', 'w7g4Tex.jpg', 'alena-aenami-quiet-1px.jpg', 'cgVCtwd.jpg', '02.jpg', 'alena-aenami-003.jpg', 'vnHhC5m.jpg', 'vBcVD4o.jpg', 'alena-aenami-003-1.jpg', 'QqffsPx.jpg', 'q6Zfn7p.jpg', 'vwVqjMP.jpg', 'hbbpjec.jpg', '05.jpg', 'alena-aenami-solar-1k.jpg', 'alena-aenami-lights1k1.jpg', 'AW16Y0i.jpg', 'YWMo1IJ.jpg', 'q5u0Ngd.jpg', '04.jpg', 'alena-aenami-mountains.jpg', 'alena-aenami-imhere1k.jpg', 'L6w1YUN.jpg', 'UZH8X4x.jpg', '4k-wallpaper-cloudy-daylight-1146802.jpg', '08.jpg', 'afBGhhB.jpg', 'X0sd0Ho.jpg', 'alena-aenami-7p-m-1k.jpg', 'alena-aenami-lunar-cover.jpg', 'fyFTaR2.jpg', '7SqL0BC.jpg', 'axytlMh.jpg', 'alena-aenami-lighthouse1k.jpg', '2dGXJp7.jpg', '3Dap2EL.jpg', 'sDsSu0m.jpg', 'hs6EUln.jpg', 'oSiYCN3.jpg', 'alena-aenami-way.jpg', 'unbenannt3yywl.jpg', 'hilow.jpg', 'tqt2ewnd9m901.jpg', 'HQLEbEg.jpg', 'vWHkb4I.jpg', 'TNAG0Po.jpg', 'zk4vozzbq3e01.jpg', 'alena-aenami-newwacom1-1-b-1k.jpg', '2rQoBh8.jpg', 'alena-aenami-s1k.jpg', 'alena-aenami-aenami-lunar.jpg', 'GLi3zS6.jpg', 'bqrrjo2v1uc01.jpg', 'SanFrancisco.jpg', 'QC2RUkE.jpg', 'alena-aenami-004-1k1.jpg', 'VebP6Ol.jpg', 'SpaceEx.png.jpg', 'DSC_1319.jpg', 'uENexRC.jpg', 'kLES8HF.jpg', '4367acgy0aw01.jpg', '1chyo7B65P9hlUEV69dxsXnAtC1-uMyfghfcSky2Rcs.jpg', '1xpe3oojlsr01.jpg', 'GGYgJ0G.jpg', 'mQUd1tO.jpg', 'h8R5xMB.jpg', '5gah229mbqd01.jpg', '9ui2qmc9fqd01.jpg', 'IW7I8dT.jpg', 'g4eou5yk0sf01.jpg', 'AdF1fVN.jpg', 'alena-aenami-million-little-pieces-1k.jpg', 'vQA6IsA.jpg', 'Spaceshuttle-Trough-Clouds.jpg', 'Attachment-1.jpeg'];

    let tries = 0;
    let complete = false;
    let randomNum = () => Math.floor(Math.random() * images.length);
    do {
        try {
            let img = images[randomNum()];
            document.body.style.backgroundImage = "url(WallPapers/" + img + ")";
            complete = true;
        } catch {
            ++tries;
            console.log(tries);
        }
    } while (!complete && tries < 3)
}

function metar () {
    const k = "19911ab01e75557a5d5515be55";
    const n = "metar";
    const a = "metar";
    const tempGex = /(M?\d{2})\/(?:M?)\d{2}/;
    const windGex = /(\d{3}(?:V\d{3})?)(\d+)(G\d+)?KT/;
    const precip_forms = {
        'DZ': 'wi-rain',
        'SN': 'wi-snow',
        'PL': 'wi-hail',
        'GS': 'wi-hail',
        'RA': 'wi-rain',
        'SG': 'wi-snow',
        'IC': 'wi-snow',
        'SHRA': 'wi-showers',
        'SHSN': 'wi-snow-wind',
        'BLSN': 'wi-snow-wind',
        'TS': 'wi-thunderstorm',
        'RA': 'wi-rain',
        '-RA': 'wi-sprinke',
        '+RA': 'wi-rain-wind'
    }

    const non_precip_forms = {
        'CLR': 'wi-day-sunny',
        'SKC': 'wi-day-sunny',
        'FEW': 'wi-cloud',
        'SCT': 'wi-cloud',
        'BKN': 'wi-cloudy',
        'OVC': 'wi-cloudy',
        'FU': 'wi-smoke'
    }

    const non_precip_order = ['OVC', 'BKN', 'SCT', 'FEW', 'SKC', 'CLR'];

    const clouds = {
        'CI': 'Cirrus',
        'CS': 'Cirrostratus',
        'CC': 'Cirrocumulus',
        'AS': 'Altostratus',
        'AC': 'Altocumulus',
        'ACC': 'Altocumulus castellanus',
        'NS': 'Nimbostratus',
        'ST': 'Stratus',
        'SF': 'Stratus fractus',
        'SC': 'Stratocumulus',
        'CU': 'Cumulus',
        'CF': 'Cumulus fractus',
        'TCU': 'Heavy cumulus',
        'CB': 'Cumulonimbus',
        'SKC': 'Sky clear',
        'CLR': 'Sky clear'
    }

    ! function(t, a, n) {
        let d = new XMLHttpRequest;
        d.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && 200 === this.status) {
                let t = JSON.parse(this.responseText);
                metar = t['data'][0];
		console.log(t)
                let temp = metar.match(tempGex)[1].replace('M', '-');
                let wind = metar.match(windGex);
                let windSpeed = parseInt(wind[2] * 1.852).toString() + (wind[3] ? wind[3] : '');
                console.log(wind);
                let windDir = wind[1].indexOf('V') < 0 ? wind[1] : wind[1].split('V')[0] + ' V ' + wind[1];

                if (temp.startsWith("0") || temp.startsWith("-0")) {
                    temp = temp.replace("0", "")
                }

                let sky_cond;
                for (precip in precip_forms) {
                    if (metar.includes(precip)) {
                    sky_cond = precip_forms[precip];
                    break;
                    }
                };
                if (!sky_cond){
                    for (non_precip in non_precip_forms) {
                        if (metar.includes(non_precip)) {
                            sky_cond = non_precip_forms[non_precip];
                            break;
                        }
                    }
                }
                if (!sky_cond) {
                    sky_cond = 'wi-cloud-refresh';
                }

                let cloud_type;
                for (cloud in clouds) {
                    if (metar.includes(cloud)) {
                    cloud_type = clouds[cloud];
                    }
                }
                if (!cloud_type) {
                    cloud_type = 'Horrible mystery clouds'
                }

                document.getElementById("weathericon").className = 'wi ' + sky_cond;
                document.getElementById("temperature").innerHTML = temp + " &deg;C";
                document.getElementById("wind").innerHTML        = windSpeed + ' km/h ' + windDir + '&deg;';
                document.getElementById("clouds").innerHTML      = cloud_type;

                }
        }, d.open("GET", "https://api.checkwx.com/" + a.toLowerCase() + "/" + t, !0), d.setRequestHeader("X-API-KEY", k), d.send()
    }('CYVR' || "", n, t[a])
}

function checkTime(i) {
    return (i < 10) ? "0" + i : i;
}

function startTime() {
    let today = new Date(),
        h = checkTime(today.getHours()),
        m = checkTime(today.getMinutes()),
        s = checkTime(today.getSeconds());
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime()
    }, 500);
}

function mainFunc () {
    startTime();
    choosePic();
    metar();
}

window.onload = mainFunc;
