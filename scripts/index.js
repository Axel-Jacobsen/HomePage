function choosePic () {
	
    var images = ['xenqt1xpjbuz.jpg', 'hLE28KQ.jpg', 'EeE9J.jpg', 'f4uy8su3kp201.jpg', 'aZScqx6.jpg', 'PsDD5FK.jpg', 'AhgFudA.jpg', 'Y7tO223.jpg', 'GeljQRN.jpg', 'oiZfq.jpg', 'LVaoA.jpg', 'hZ52wIX.jpg', 'paiv3jU.jpg', 'd0k128jwxi101.jpg', 'zlhxo4z.jpg', 'BQ6KjPa.jpg', 'hEQUZSu.jpg', 'kWr2TCv.jpg', 'rZhTV.jpg', 'xtRaaY5.jpg', 'rEOPhmL.jpg', 'NO8ccpA.jpg', 'ra6M5zu.jpg', '6mnK4D0.jpg', '8Bq53xj.jpg', '21nnfsH.jpg', '1Qcwduq.jpg', '6zowermr3uc01.jpg', 'Xik4G4c.jpg', 'Fq14Fsk.jpg', 'ti9jKcI.jpg', 'w7g4Tex.jpg', 'cgVCtwd.jpg', 'vnHhC5m.jpg', 'vBcVD4o.jpg', 'QqffsPx.jpg', 'q6Zfn7p.jpg', 'vwVqjMP.jpg', 'hbbpjec.jpg', 'AW16Y0i.jpg', 'aleks-dahlberg-146811.jpg', 'YWMo1IJ.jpg', 'q5u0Ngd.jpg', 'L6w1YUN.jpg', 'UZH8X4x.jpg', 'afBGhhB.jpg', 'X0sd0Ho.jpg', 'fyFTaR2.jpg', '7SqL0BC.jpg', 'axytlMh.jpg', '2dGXJp7.jpg', '3Dap2EL.jpg', 'sDsSu0m.jpg', 'hs6EUln.jpg', 'oSiYCN3.jpg', 'unbenannt3yywl.jpg', 'tqt2ewnd9m901.jpg', 'HQLEbEg.jpg', 'vWHkb4I.jpg', 'TNAG0Po.jpg', '2rQoBh8.jpg', 'GLi3zS6.jpg', 'bqrrjo2v1uc01.jpg', 'SanFrancisco.jpg', 'QC2RUkE.jpg', 'VebP6Ol.jpg', 'uENexRC.jpg', 'GGYgJ0G.jpg', 'mQUd1tO.jpg', 'h8R5xMB.jpg', 'IW7I8dT.jpg', 'AdF1fVN.jpg', 'vQA6IsA.jpg', 'Spaceshuttle-Trough-Clouds.jpg'];

    var randomNum = Math.floor(Math.random() * images.length);
    document.getElementById("centerImage").src = "WallPapers/" + images[randomNum];
    // document.getElementById("back").style.backgroundImage = "url(" + "WallPapers/" + images[randomNum] + ")";
}

function metar () {
    var k = "wx3f31992fe23995ee614ca37a59";
    var n = "metar";
    var a = "metar";
    var tempGex = /(M?\d{2})\/(?:M?)\d{2}/;
    var windGex = /(\d{3}(?:V\d{3})?)|(?:VRB)(\d+)(G\d+)?KT/;
    var precip_forms = {
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

    var non_precip_forms = {
        'CLR': 'wi-day-sunny',
        'SKC': 'wi-day-sunny',
        'FEW': 'wi-cloud',
        'SCT': 'wi-cloud',
        'BKN': 'wi-cloudy',
        'OVC': 'wi-cloudy',
        'FU': 'wi-smoke'
    }

    var non_precip_order = ['OVC', 'BKN', 'SCT', 'FEW', 'SKC', 'CLR'];

    var clouds = {
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
        var d = new XMLHttpRequest;
        d.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && 200 === this.status) {
                var t = JSON.parse(this.responseText);
                metar = t['data'][0]['text'];
		console.log(metar);
                var temp = metar.match(tempGex)[1].replace('M', '-');
                var wind = metar.match(windGex);
                var windSpeed = parseInt(wind[2] * 1.852).toString() + (wind[3] ? wind[3] : '');

                var windDir;
                if (wind[1].includes('VRB')) {
                    windDir = 'Variable'
                } else {
                    windDir = wind[1].indexOf('V') < 0 ? wind[1] : wind[1].split('V')[0] + ' V ' + wind[1].split('V')[1];
                }

                var sky_cond;
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

                var cloud_type;
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
    var today = new Date(),
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
