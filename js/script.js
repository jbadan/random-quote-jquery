var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'img/one.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'img/two.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'img/three.png';

imgArray[3] = new Image();
imgArray[3].src = 'img/four.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'img/five.jpg';

imgArray[5] = new Image();
imgArray[5].src = 'img/six.png';

imgArray[6] = new Image();
imgArray[6].src = 'img/seven.png';

imgArray[7] = new Image();
imgArray[7].src = 'img/eight.png';

imgArray[8] = new Image();
imgArray[8].src = 'img/nine.gif';

imgArray[9] = new Image();
imgArray[9].src = 'img/ten.gif';

imgArray[10] = new Image();
imgArray[10].src = 'img/eleven.gif';





function search(event) {
  var rand = imgArray[Math.floor(Math.random() * imgArray.length)];
  $("#randomImage").empty();
  addRandomImage(rand);
  event.preventDefault();
    $("#results").empty();

    $.get('http://loremricksum.com/api/', {
      paragraphs: 1,
      quotes: 1
    }).done(function(response) {
      console.log(response.data);
        addSearchResult(response.data);
    });
  };

function addSearchResult(result) {
  $("#results").append(result);
}

function addRandomImage(image){
$("#randomImage").append(image);
}
