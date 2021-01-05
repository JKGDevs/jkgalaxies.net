window.onload = function()
{
    var app_id = "6020"; //Jedi Academy's app id
    GetLatestPriceInfo(app_id);
}

function GetLatestPriceInfo(id)
{
    if(id == "" || id == null)
        return;

    id = "https://store.steampowered.com/api/appdetails?appids="+id;

    $.getJSON( "https://store.steampowered.com/api/appdetails?appids=6020", function(data) {})
        .fail(function( jqxhr, status, error ) {
        var er = status + ", " + error;
        alert( "Request Failed: " + er );
    });

    /*$.getJSON(id).done(function(json) 
    {

        var result = json.data;

        var test = result.data.name;
        //var init_price = json.data.price_overview.initial;  //might need to account for region?
        var fin_price = json.data.price_overview.final;

        if(fin_price < 401 )
        {
            $('#steamsale').text("Jedi Academy is on sale on Steam for " + json.data.price_overview.final_formatted);
        }
    });*/
}