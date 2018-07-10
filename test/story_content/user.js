function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ygHtf82YYM":
        Script1();
        break;
  }
}

function Script1()
{
var player = GetPlayer();
var test = player.GetVar("storylineVar");
//var name= localStorage.name;
var name= "hii";
  var checkStatus = function() {
    if (navigator.onLine) {
          $.ajax({
       type: 'POST',
       url: 'http://www.creatnlrn.com/api/result.php',
       data: {'name':name,'score' : test},
       cache: false,
       success: function(response){
        window.location.href = "../index.html";
      },
       error: function () {
        alert("error");
       }
      });
      sessionStorage.clear();    
    } else {
      alert("Please connect your system to internet");
    }
  }
  checkStatus()

}

