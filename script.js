// الحصول على نموذج طلب المساعدة

let form = document.querySelector("form");


if(form){

form.addEventListener("submit", function(event){


    let state = document.querySelector("select").value;

    let inputs = document.querySelectorAll("input");

    let camp = inputs[0].value;
    let name = inputs[1].value;
    let phone = inputs[2].value;


    // التحقق من البيانات

    if(state == "اختر الولاية"){

        alert("الرجاء اختيار الولاية");
        event.preventDefault();

    }


    else if(camp == ""){

        alert("الرجاء إدخال اسم مركز الإيواء");
        event.preventDefault();

    }


    else if(name == ""){

        alert("الرجاء إدخال اسم المسؤول");
        event.preventDefault();

    }


    else if(phone == ""){

        alert("الرجاء إدخال رقم الهاتف");
        event.preventDefault();

    }


    else{

        alert("تم إرسال طلب المساعدة بنجاح");

    }



});


}
// البحث داخل جدول الطلبات

let searchInput = document.querySelector('input[type="search"]');

let tableRows = document.querySelectorAll("tbody tr");


if(searchInput){


searchInput.addEventListener("keyup", function(){


    let searchValue = searchInput.value.toLowerCase();



    tableRows.forEach(function(row){


        let rowText = row.textContent.toLowerCase();



        if(rowText.includes(searchValue)){


            row.style.display = "";


        }else{


            row.style.display = "none";


        }


    });



});


}
// فلترة الطلبات حسب الحالة

let statusFilter = document.getElementById("statusFilter");


if(statusFilter){


statusFilter.addEventListener("change", function(){


    let selectedStatus = statusFilter.value;


    let rows = document.querySelectorAll("tbody tr");



    rows.forEach(function(row){


        let status = row.cells[6].textContent;



        if(selectedStatus == "all" || status == selectedStatus){


            row.style.display = "";


        }else{


            row.style.display = "none";


        }


    });



});


}
// تحريك أرقام الإحصائيات

let counters = document.querySelectorAll(".counter h3");


counters.forEach(function(counter){


    let target = Number(counter.getAttribute("data-target"));

    let count = 0;


    let speed = target / 100;



    function updateCounter(){


        if(count < target){


            count += speed;

            counter.textContent = Math.floor(count);

            setTimeout(updateCounter,20);


        }else{


            counter.textContent = target;


        }


    }


    updateCounter();



});