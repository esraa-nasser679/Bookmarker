var siteName = document.getElementById("sitName");
var siteUrl = document.getElementById("siteUrl");
var show = document.getElementById("show");
var test = document.getElementById("test");
var tableTest = document.getElementById("testTable")
var closeee = document.getElementById("closeBtn")
var closePage = document.getElementById("closePage")


var siteList;
if(localStorage.getItem("sitList") == null)
{
    siteList=[]
}else
{
    siteList = JSON.parse(localStorage.getItem("sitList"))
    Display();
}

function add(){
    if (siteName.classList.contains("is-valid") && siteUrl.classList.contains("is-valid"))
    {
        var sit = {
            name: siteName.value,
            url : siteUrl.value,
        };
        siteList.push(sit);
        Display();
        localStorage.setItem("sitList", JSON.stringify(siteList))
        console.log(localStorage);
        console.log(siteList);
    }else
    {
        showClosePage()
    }

    test.innerHTML= divss
    }
    



function Display(){
    var cartona = "";
    for( var i=0; i<siteList.length; i++)
    {
        tableTest.classList.replace("d-none" ,"d-inle-block")
        cartona += `
        
            <tr class="w-100">
                <td><span>${i+1}</span></td>
                <td><span>${siteList[i].name}</span></td>
                <td><button class="coloor1 btn px-3"><i class="fa-sharp fa-solid fa-eye"></i> <a href="" target="_blank">Visit</a></button></td>
                <td><button onclick="deleteItem(${i})" class="coloor2 btn px-3"><i class="fa-solid fa-trash-can "></i> Delete</button></td>
            </tr>`
    }
    
    show.innerHTML = cartona;

}




function validateInputs(element){
    var regex =
    { 
        sitName : /^[a-zA-Z0-9_]{3,}$/,
        siteUrl : /^(w|W){1,}\.[a-zA-Z0-9]{2,}$/,
    }

    if (regex[element.id].test(element.value) == true)
    {
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
    }else
    {
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
    }
}

function deleteItem(deletedIndex)
{
    siteList.splice(deletedIndex,1)
    Display()
    localStorage.setItem("sitList", JSON.stringify(siteList))
    console.log(siteList);
}


function showClosePage(){
    closePage.classList.add("d-block");
    closePage.classList.remove("d-none")
    
}



function ClosePage(){
    closePage.classList.add("d-none");
    closePage.classList.remove("d-block")
    
}

