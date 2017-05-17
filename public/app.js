var app = function() {
  var url = "https://api.spotify.com/v1/search?q=christmas&type=album";
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var albums = JSON.parse(jsonString);
  populateList(albums);
}

var populateList = function(albums) {
  console.log(albums);
  var div = document.getElementById("albums");
  var ul = document.getElementById("albums-list");
  div.appendChild(ul);

  albums.forEach(function(album) {
    var li = document.createElement("li");
    li.innerText = album.name;
    ul.appendChild(li);
  });
}

window.addEventListener('load', app);