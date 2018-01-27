var k = "wx3f31992fe23995ee614ca37a59";

function metar() {
  for (t = document.getElementsByClassName("checkwx-container"), a = 0; a < t.length; a++) {
      var n = "metar";
      ! function(t, a, n) {
          var d = new XMLHttpRequest;
          d.onreadystatechange = function() {
              if (this.readyState === XMLHttpRequest.DONE && 200 === this.status) {
                  var t = JSON.parse(this.responseText);
                  i = JSON.parse(this.responseText);
              }
          },console.log(a), d.open("GET", "https://api.checkwx.com/" + a.toLowerCase() + "/" + t, !0), d.setRequestHeader("X-API-KEY", k), d.send()
      }('CYVR' || "", n, t[a])
  }
  console.log(t)
};

// window.onload = metar();