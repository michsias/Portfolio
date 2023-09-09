document.getElementById("download_button").addEventListener("click", () => {
  const print = document.getElementById("print");
  const nav = document.querySelector(".navbar");
  const dowload_button = document.getElementById("download_button");
  const repo = document.getElementById("repository_Button");

  nav.classList.toggle("none");
  print.classList.toggle("motiv");
  dowload_button.classList.toggle("none");
  repo.classList.toggle("none");

  var opt = {
    orientation: 0,
    putOnlyUsedFonts: true,
    margin: 0,
    filename: "Michał_Kawczak-CV.pdf",
    pagebreak: { before: "#margin", after: "#margin" },
  };




  html2pdf().from(print).set(opt).save("Michał_Kawczak-CV.pdf");
  setTimeout(() => {
    nav.classList.toggle("none");
    print.classList.toggle("motiv");
    dowload_button.classList.toggle("none");
    repo.classList.toggle("none");
  }, 2000);

  
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const adress = {
  linkedin:
    '<i class="bi bi-linkedin icon"></i> \
    <a href="https://www.linkedin.com/in/michał-kawczak/" target="_blank" class="contact"> /in/michał-kawczak/ </a>',
  email:
    '<i class="bi bi-envelope-at-fill icon "></i> \
    <a href="mailto:mkawczak00@gmail.com" class="contact"> mkawczak00@gmail.com </a>',
  phone:
    ' <i class="bi bi-envelope-at-fill icon "></i> \
    <a href="tel:+48 506-340-845" class="contact"> +48 506-340-845 </a>',
  birth:
    '<i class="bi bi-telephone-forward-fill icon "></i> \
    14.05.2000',
  location:
    '<i class="bi bi-geo-alt-fill icon "></i> \
    Warszawa',
};

const censoredAdress = {
  linkedin:
    '<i class="bi bi-linkedin icon"> </i> \
    <button class="check_pin"> ########## </button> ',
  email:
    '<i class="bi bi-envelope-at-fill icon "></i> \
    <button class="check_pin"> ########## </button>',
  phone:
    ' <i class="bi bi-envelope-at-fill icon "></i> \
    <button class="check_pin"> ########## </button>',
  birth:
    '<i class="bi bi-telephone-forward-fill icon "></i> \
    <button class="check_pin"> ########## </button>',
  location:
    '<i class="bi bi-geo-alt-fill icon "></i> \
    <button class="check_pin"> ########## </button>',
};

const div_adress = document.getElementById("adress");
const list = div_adress.querySelectorAll("ol li");

function viewsPersonal(event) {
  for (let i = 0; i < list.length; i++) {
    const name = Object.keys(event)[i]; // Pobierz nazwę właściwości z obiektu
    const name_value = event[name]; // Pobierz wartość właściwości

    list[i].innerHTML = name_value;
  }
}

function checkBox() {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", () => {
      const list_item = list[i];
      const button_element = list_item.querySelector("button");

      const input = document.createElement("input");
      input.type = "password";
      input.placeholder = "PIN";
      input.classList.add("input_box");

      list_item.replaceChild(input, button_element);

      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const input_value = input.value;
          const PIN = "181214052703"; 

          if (input_value === PIN) {
            input.classList.add("good_pin");
            setTimeout(() => {
              input.classList.remove("good_pin");
            }, 2000);
            setTimeout(() => {
              viewsPersonal(adress);
            }, 1000);
          } else {
            input.classList.add("wrong_pin");
            setTimeout(() => {
              input.classList.remove("wrong_pin");
            }, 2000);
            setTimeout(() => {
              viewsPersonal(censoredAdress);
            }, 1000);
          }
        }
      });
    });
  }
}

viewsPersonal(censoredAdress);
checkBox();

// document.getElementById('print_button').addEventListener('click', () => {
//     const printWindow = window.open('', '', 'width=600,height=600');

//     printWindow.document.open();
//     printWindow.document.write('<html><head><title>Drukowanie</title></head><body>');
//     printWindow.document.write(cv_box.innerHTML);
//     printWindow.document.write('</body></html>');
//     printWindow.document.close();

//     printWindow.print();
//     printWindow.close();
// });

const content = {
    title: {
        en: 'Hello!',
        pl: 'Witaj!'
    },
    description: {
        en: 'This is sample content.',
        pl: 'To jest przykładowa zawartość.'
    }
};

const languageButton = document.getElementById('languageButton');
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');

let currentLanguage = 'pl'; // Domyślny język

languageButton.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
    updateContent();
});

function updateContent() {
    titleElement.textContent = content.title[currentLanguage];
    descriptionElement.textContent = content.description[currentLanguage];
}

// Inicjalizacja zawartości
updateContent();

const cv_box = document.querySelector('.cv_print');
const download_button = document.getElementById('download_button');

download_button.addEventListener('click', () => {

    cv_box.classList.toggle('cv_print_background_download');

    const cv_pdf = new jsPDF();
    cv_pdf.fromHTML(cv_box, 10, 10);
    cv_pdf.save('Michał_Kawczak-CV.pdf');
})
