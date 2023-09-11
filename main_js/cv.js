

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Set pin for personal data CV

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
    <button class="check_pin easter_click"> ########## </button> ',
  email:
    '<i class="bi bi-envelope-at-fill icon "></i> \
    <button class="check_pin easter_click"> ########## </button>',
  phone:
    ' <i class="bi bi-envelope-at-fill icon "></i> \
    <button class="check_pin easter_click"> ########## </button>',
  birth:
    '<i class="bi bi-telephone-forward-fill icon "></i> \
    <button class="check_pin easter_click"> ########## </button>',
  location:
    '<i class="bi bi-geo-alt-fill icon "></i> \
    <button class="check_pin easter_click"> ########## </button>',
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
      input.placeholder = "PASSWORD";
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
checkBox()

/////////////////////////////////////////////////////////////////////////////////
//Button change language pl -> en

const content_cv = {
  paraf_1: {
    pl: 'O mnie', 
    en: 'About me'
  },
  paraf_2: {
    pl: 
      'Cześć, nazywam się Michał, mam 23 lata, studiuję mechatronikę, a zawodowo jestem elektronikiem. \
      Od jakiegoś czasu rozwijam swoje umiejętności jako web developer i chciałbym w przyszłości zostać app developerem. \
      Na studiach i w pracy poznałem podstawy C oraz C++, a obecnie skupiam się na nauce HTML + CSS oraz JavaScript. \
      Motywuje mnie samorozwój oraz przyjemność z pisania "kodu".  ',
      
    en: 
      'Hello, my name is Michał, I am 23 years old, I am studying mechatronics and professionally I am an electronics engineer. \
      For some time now I have been developing my skills as a web developer and I would like to become an app developer in the future. \
      During my studies and at work, I learned the basics of C and C++, and currently I am focusing on learning HTML + CSS and JavaScript. \
      I am motivated by self-development and the pleasure of writing code.'
  },
  paraf_3: {
    pl: 'Umiejętności', 
    en: 'Skills'
  },
  paraf_4: {
    pl: 'Doświadczenie zawodoweg', 
    en: 'Experience'
  },
  paraf_5: {
    pl: '[ 11.2022 - obecnie ]:', 
    en: '[ 11.2022 - now ]:'
  },
  paraf_6: {
    pl: 'Elektronik', 
    en: 'Elektronics'
  },
  paraf_7: {
    pl: 'Programowanie w C/C++ - Arduino IDE', 
    en: 'Programing C/C++ - Arduino IDE'
  },
  paraf_8: {
    pl: 'Projektowanie druków 3D - Fusion360', 
    en: 'Design 3D print - Fusion360'
  },
  paraf_9: {
    pl: 'Projektowanie i lutowanie elektroniki', 
    en: 'Electronics design and soldering'
  },
  paraf_10: {
    pl: 'Uprawnienia', 
    en: 'Permissions'
  },
  paraf_11: {
    pl: 'Prawo jazdy kat. B', 
    en: 'Driving license cat. B'
  },
  paraf_12: {
    pl: 'Wykształcenie', 
    en: 'Education'
  },
  paraf_13: {
    pl: 'Kierunek: mat-jęz', 
    en: 'Direction: math-ling'
  },

  paraf_14: {
    pl: '[ 10.2020 - obecnie ]:', 
    en: '[ 10.2020 - now ]:'
  },
  paraf_15: {
    pl: 'Kierunek: mechatronika', 
    en: 'Directon: mechatronics'
  },
  paraf_16: {
    pl: 'Tryb: niestacjonarnie', 
    en: 'Mode: part-time'
  },
  paraf_17: {
    pl: 'Jęzki obce', 
    en: 'Languages'
  },
  paraf_18: {
    pl: 'Polski - ojczysty', 
    en: 'Polski - native'
  },
  paraf_19: {
    pl: 'Angielski - B1', 
    en: 'English - B1'
  },
  paraf_20: {
    pl: 'Zainteresowania', 
    en: 'Hobby'
  },
  paraf_21: {
    pl: '<i class="bi bi-android2"></i> Technologia', 
    en: '<i class="bi bi-android2"></i> Technology'
  },
  paraf_22: {
    pl: '<i class="bi bi-lungs-fill"></i> Sport', 
    en: '<i class="bi bi-lungs-fill"></i> Sport'
  },
  paraf_23: {
    pl: '<i class="bi bi-earbuds"></i>  Muzyka', 
    en: '<i class="bi bi-earbuds"></i>  Music'
  },
  paraf_24: {
    pl: '<i class="bi bi-car-front"></i> Motoryzacja', 
    en: '<i class="bi bi-car-front"></i> Automotiv'
  },
  paraf_25: {
    pl: 
    ' Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji \
    zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz \
    zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. \
    w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych \
    i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).', 
    en: 
    'I consent to the processing of my personal data for the purposes of carrying out the recruitment process \
    In accordance with the Act of May 10, 2018 on the protection of personal data (Journal of Laws of 2018, item 1000) and \
    In accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016. \
    on the protection of legal persons in connection with the need to use personal data \
    in free access to such data and use of the account 95/46/EC (GDPR).' 
  },


};

const btn_language = document.getElementById('pl_en');
const pl_click = document.getElementById('pl_click');
const en_click = document.getElementById('en_click');
const elements_cv = document.getElementsByClassName('pl_content');

let default_language = 'pl'; 

btn_language.addEventListener('click', () => {
  
  if (default_language === 'pl') {
    default_language = 'en';
    pl_click.classList.toggle("active_click");
    en_click.classList.toggle("active_click");
    updateContent();
 
  } else {
    default_language = 'pl';
    pl_click.classList.toggle("active_click");
    en_click.classList.toggle("active_click");
    updateContent();
  }


});

function updateContent() {
  for (let i = 0; i < elements_cv.length-1; i++) {
    const element = elements_cv[i];
    const contentKey = `paraf_${i + 1}`;
    element.innerHTML = content_cv[contentKey][default_language];
  }
}


updateContent();

/////////////////////////////////////////////////////////////////////////////////////
//Convert to pdf and download CV
const print_pl = document.getElementById('pl');

document.getElementById("save").addEventListener("click", () => {

  const nav = document.querySelector(".navbar");
  const buttons_cv = document.getElementsByClassName("buttons_save");
  const repo = document.getElementById("repository_Button");

  const interest_list = document.getElementById("interest_list");
  const interest_boxes = document.getElementsByClassName('hobby');
  const education_link = document.getElementsByClassName('education_link');


  print_pl.classList.toggle("motiv");
  nav.classList.toggle("none");
  repo.classList.toggle("none");
  interest_list.classList.toggle("interest_ol");

  for(let i = 0; i < buttons_cv.length; i++) {
    buttons_cv[i].classList.toggle("none");
    console.log(buttons_cv);
  }
  for(let i = 0; i < interest_boxes.length; i++) {
    interest_boxes[i].classList.toggle("interest_li");
    console.log(interest_boxes);
  }
  for(let i = 0; i < education_link.length; i++) {
    education_link[i].classList.toggle("color_link");
    console.log(education_link);
  }

  settingsPDF();

  setTimeout(() => {

    print_pl.classList.toggle("motiv");
    nav.classList.toggle("none");
    repo.classList.toggle("none");
    interest_list.classList.toggle("interest_div");

    interest_list.classList.toggle("interest_ol");

    for(let i = 0; i < buttons_cv.length; i++) {
      buttons_cv[i].classList.toggle("none");
      console.log(buttons_cv);
    }
    for(let i = 0; i < interest_boxes.length; i++) {
      interest_boxes[i].classList.toggle("interest_li");
      break;
    }
    for(let i = 0; i < education_link.length; i++) {
      education_link[i].classList.toggle("color_link");
      console.log(education_link);
    }

  }, 500);
  
});

function settingsPDF() {

  var opt = {
    orientation: 0,
    putOnlyUsedFonts: true,
    margin: 0,
    filename: "Michał_Kawczak-CV.pdf",
    pagebreak: { before: "#margin", after: "#margin" },
  };

  html2pdf().from(print_pl).set(opt).save("Michał_Kawczak-CV.pdf");
}

// function change_language() {

//   const btn_lang = document.getElementById('pl_en');
//   const print_pl = document.getElementById('pl');
//   const print_en = document.getElementById('en');

//   btn_lang.addEventListener('click', () => {

//     console.log("Klikam");

//     if (print_pl.style.display === 'block') {
//       print_en.style.display = 'block';
//       print_pl.style.display = 'none';
//     } else {
//       print_pl.style.display = 'none';
//       print_en.style.display = 'block';
//     }
//   });
// }
//change_language();


// const cv_box = document.querySelector('.cv_print');
// const download_button = document.getElementById('download_button');

// download_button.addEventListener('click', () => {

//     cv_box.classList.toggle('cv_print_background_download');

//     const cv_pdf = new jsPDF();
//     cv_pdf.fromHTML(cv_box, 10, 10);
//     cv_pdf.save('Michał_Kawczak-CV.pdf');
// })
