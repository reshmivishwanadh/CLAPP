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
    var score ="299";

    var dataString = "name=" + name + "&score=" + score;

        $.ajax({
            type: "POST",
            url: "http://www.creatnlrn.com/api/my/statusupdate.php",
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function() {
                //$("#loginconect").html('Connecting...');
            },
            success: function(data) {
                if (data == "success") {
                    //localStorage.login = "true";
                    //localStorage.phone = phone;
                    //$.mobile.changePage('index.html#profile',{ transition: "slide"});
                    //$('#password').val('');
                    alert("done");
                    //console.log();
                } else if (data = "failed") 
                        {
                           alert("Query error");
                            //$("#loginconect").html('Login');
                            //$('#password').val('');
                            //$.mobile.changePage('#login',{ transition: "slide"});
                   
                        }
            },
            error: function (data) {

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

    return false;

}





