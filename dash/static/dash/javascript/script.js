function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "sidebar") {
        x.className += " responsive";
      } else {
        x.className = "sidebar";
      }
    }

    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }

    // Verifique se o usuário está na página
    console.log(window.location.href)
    if (window.location.href.indexOf("dashboard") === -1) {
      var dropdownContent = document.getElementById("container-drop");
      dropdownContent.style.display = "none";
      // Se o usuário não estiver na página, redirecione-o para a página de dashboards
      var dropdown = document.querySelector(".dropdown-btn");
      if (dropdown){
        dropdown.addEventListener("click", function () {
        window.location.href = "/dashboard";
      });
      }
    } else {
      // Se o usuário estiver na página, expanda o menu automaticamente e defina a função toggleDropdown
      var dropdownContent = document.getElementById("container-drop");
      dropdownContent.style.display = "block";
      function changepage() {
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      }
    }

    function pbFunc(page) {
      var iframe = document.getElementById("myIframe");
      if (iframe === null) {
        location.href = "/dashboard#";
      }
      if (page === "page1") {
        iframe.setAttribute(
          "src",
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSectionf2b99d7eb3d2893dca17"
        );
      } else if (page === "page2") {
        iframe.setAttribute(
          "src",
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSection41c313ecdb083bac7800"
        );
      } else if (page === "page3") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSection1ac5b021f4602be041e4";
      } else if (page === "page4") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSection9c5a5aeb60a498607340";
      } else if (page === "page5") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSectionf29840bd830107865ed2";
      }
      document.getElementById("myIframe").contentWindow.location.reload();
    }