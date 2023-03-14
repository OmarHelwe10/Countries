fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(json => {
    
    for (let i = 0; i < json.length; i++) {
    
var currentcountry=`<div id="card" class="card" style="width: 18rem;">
<img src="${json[i].flags.png}" alt="...">
<div class="card-body" id="cc">
<h5 class="card-title">${json[i].name.common}</h5>
<p class="card-text">Capital : ${json[i].capital}</p>
<p class="card-text">Status: ${json[i].status}</p>
<p class="card-text">Independency: ${json[i].independent}</p>
<p class="card-text">Borders : ${json[i].borders}</p>
<a href="${json[i].maps.googleMaps}" class="btn btn-primary">google maps</a>
</div>`
var inside = document.createElement('div');
                inside.className='col-lg-3 col-sm-3';
                inside.innerHTML = currentcountry;
                document.getElementById('countries').appendChild(inside);

}
});
   