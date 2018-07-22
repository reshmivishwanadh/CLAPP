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
var scr ="299";
  var checkStatus = function() {
    if (navigator.onLine) {

              name="maya";
              scr="200";
              $.ajax({
                         type: 'GET',
                         url: 'http://www.creatnlrn.com/api/test/user/'+name+'/'+scr+'/',
                         //data: {'name':'abc','score' : '80'},
                         //dataType: 'json',
                         cache: false,
                         success: function(response){
                          alert("done");
                          },
                          error: function (data) {
                            //alert("error"+response.responseText);
                                if(data.length > 0)
                                          {
                                              for(key in data)
                                              {
                                                  var tmp = data[key];
                                                  alert(tmp.title);
                                              }
                                          }
                                          else
                                          {
                                              alert("no result");
                                          }


                          }
                    });
 


      sessionStorage.clear();    
    } else {
      alert("Please connect your system to internet");
    }
  }
  checkStatus();

}

