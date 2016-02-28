
var parts=function()
{
    var sel2=document.getElementById("sel2");
    sel2.options.length=1;
    var j;
    var sldprovince=document.getElementById('sel1');
    for (j=1;j<=cities.length;j++)
    {
        if (cities[j].province==sldprovince.value && cities[j].part!=cities[j-1].part)
        {
            var option=document.createElement("option");
            option.text=cities[j].part;
            sel2.appendChild(option);
        }
    }
}
var names=function()
{
    var sel2=document.getElementById('sel2');
    var sel1=document.getElementById('sel1');
    var ul=document.getElementById('name');
    ul.innerHTML='';
    var j;
    for (j=1;j<=cities.length;j++)
    {
        if (sel2.value==cities[j].part && sel1.value==cities[j].province)
        {
            var fname= cities[j].prefix+" "+cities[j].fname +" "+ cities[j].lname+"-"+cities[j].code;
            var list=document.createElement('LI');
            var text=document.createTextNode(fname);
            list.appendChild(text);
            ul.appendChild(list);
        }
    }
}
