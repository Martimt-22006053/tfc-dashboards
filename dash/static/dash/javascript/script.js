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

    // Verifique se o utilizador está na página
    if (window.location.pathname != '/dashboard') {
      // Se o utilizador não estiver na página, redirecione-o para a página de dashboards
      var dropdown = document.querySelector(".dropdown-btn");
      if (dropdown){
        dropdown.addEventListener("click", function () {
        window.location.href = "/dashboard";
      });
      }
    } else {
      // Se o utilizador estiver na página, expanda o menu automaticamente
      var dropdownContent = document.getElementById("container-drop");
      dropdownContent.style.display = "block";
    }

    function pbFunc(page) {
      var iframe = document.getElementById("myIframe");
      if (iframe === null) {
        location.href = "/dashboard#";
      }
      if (page === "page1") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSectionf2b99d7eb3d2893dca17";
      } else if (page === "page2") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSection41c313ecdb083bac7800";
      } else if (page === "page3") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSection1ac5b021f4602be041e4";
      } else if (page === "page4") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSection9c5a5aeb60a498607340";
      } else if (page === "page5") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSectionf29840bd830107865ed2";
      } else if (page === "page6") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSection91ea9ffa611d5c89e865";
      } else if (page === "page7") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSection36d3252290000a008c70";
      } else if (page === "page8") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSection931618310c99c0d3d12e";
      } else if (page === "page9") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSection690abbe5b07dd2fcb85d";
      } else if (page === "page10") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSectionc48c3f3edf29496ecc99";
      } else if (page === "page11") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSectioncfa6deb12f89d30f5345";
      } else if (page === "page12") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSection0f057140b5d52645259b";
      } else if (page === "page13") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSectionf51ce5206e9b22a7f992";
      } else if (page === "page14") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSection4091b5f0ff7c4a7517e4";
      } else if (page === "page15") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSection150a9f8bcb6f120c3b11";
      } else if (page === "page16") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSectionbd09a469c2e5cacb0b57";
      } else if (page === "page17") {
        iframe.src =
          "https://app.powerbi.com/view?r=eyJrIjoiNDRiZDg2NTktOTBhMC00ZTEyLWFjNjItZjgyZmNlZGQwZjZmIiwidCI6IjEzOGNjYzA2LTUxNmItNGU4MS04ODEzLTA2ZmQyNTMxYmRkYyIsImMiOjh9&pageName=ReportSectioncc306d9f46a3ab039ea7";
      }
      document.getElementById("myIframe").contentWindow.location.reload();
    }