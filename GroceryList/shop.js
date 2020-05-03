function glists()
{
//creating obj
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function()
{
    if(this.readyState==4&&this.status==200)
    {
        var response=JSON.parse(this.responseText);
        console.log(response);
        var Jlist=response.grocery;
        console.log(Jlist);
        var output="";
        for(var i=0;i<Jlist.length;i++)
        {
            output+= "<tr>";
            output+="<td>"+Jlist[i].serialNo+"</td>";
            output+="<td>"+Jlist[i].name+"</td>";
            output+="<td>"+Jlist[i].quantity+"</td>";
            output+="<td>"+Jlist[i].unit+"</td>";
            output+="<td>"+Jlist[i].department+"</td>";
            output+="<td>"+Jlist[i].notes+"</td>";
            output+="</tr>";
        
        }
        document.getElementById("grocerytable").innerHTML=output;
    }
}
xhttp.open("GET","list.json",true);
xhttp.send();
}