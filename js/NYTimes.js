var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "01f69a0864b34618a7f0c07caf8afa9f",
  'q': "beauty and the beast 2017"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  displaySearchData(result);
}).fail(function(err) {
  throw err;
});


function displaySearchData(data){
  var docs = data.response.docs;
  var html2 = "";
  $.each(docs,function(i,data) {
    console.log(data.headline.main);

    html2 += '<a class="list-group-item" href="' + data.web_url + '">';
   html2 += '<h4 class="list-group-item-heading">' + data.headline.main + '</h4>';

   html2 += '<p class="list-group-item-text">'
   if (data.byline) {
    html2 += data.byline.original  + " | ";

    }

   html2 += 'Published: ' + data.pub_date + '</p>';
    html2 += '<p class="list-group-item-text">'
   html2 +=  data.snippet +'</p>';
   html2 += ' </a>'

    });


//after loop code
$("#nytimes-results").append(html2);


}
