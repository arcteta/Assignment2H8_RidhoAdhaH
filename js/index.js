let getForm = document.getElementById("input-form");

getForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // handle submit

    let inputNama = document.getElementById("input-nama").value;
    let inputRole = document.getElementById("input-role").value;
    let inputAvailability = document.getElementById("input-availability").value;
    let inputUsia = document.getElementById("input-usia").value;
    let inputLokasi = document.getElementById("input-lokasi").value;
    let inputYears = document.getElementById("input-years").value;
    let inputEmail = document.getElementById("input-email").value;


   document.getElementById("profile-name").innerHTML = inputNama
   document.getElementById("profile-role").innerHTML = inputRole
   document.getElementById("profile-available").innerHTML = inputAvailability
   document.getElementById("profile-usia").innerHTML = inputUsia
   document.getElementById("profile-lokasi").innerHTML = inputLokasi
   document.getElementById("profile-years").innerHTML = inputYears
   document.getElementById("profile-email").innerHTML = inputEmail

});

