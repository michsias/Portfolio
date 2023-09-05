document.getElementById('download_button').addEventListener('click', () => {
    const print = document.getElementById('print');
    const nav = document.querySelector('.navbar');
    const dowload_button = document.getElementById('download_button');
    const repo = document.getElementById('repository_Button');

    nav.classList.toggle('none');
    print.classList.toggle('motiv');
    dowload_button.classList.toggle('none');
    repo.classList.toggle('none');

    var opt = {
        orientation: 1,
        putOnlyUsedFonts:true,
        margin: 0,
        filename:     'Michał_Kawczak-CV.pdf',
        pagebreak: {before: '#margin', after: '#margin'}
    };

    html2pdf().from(print).set(opt).save('Michał_Kawczak-CV.pdf');
    setTimeout(() => {
        nav.classList.toggle('none');
        print.classList.toggle('motiv');
        dowload_button.classList.toggle('none');
        repo.classList.toggle('none');
    }, 2000)
});

const div_adress = document.getElementById('adress');
const list = document.querySelectorAll('ol li');




















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

// const content = {
//     title: {
//         en: 'Hello!',
//         pl: 'Witaj!'
//     },
//     description: {
//         en: 'This is sample content.',
//         pl: 'To jest przykładowa zawartość.'
//     }
// };

// const languageButton = document.getElementById('languageButton');
// const titleElement = document.getElementById('title');
// const descriptionElement = document.getElementById('description');

// let currentLanguage = 'pl'; // Domyślny język

// languageButton.addEventListener('click', () => {
//     currentLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
//     updateContent();
// });

// function updateContent() {
//     titleElement.textContent = content.title[currentLanguage];
//     descriptionElement.textContent = content.description[currentLanguage];
// }

// // Inicjalizacja zawartości
// updateContent();

// const cv_box = document.querySelector('.cv_print');
// const download_button = document.getElementById('download_button');

// download_button.addEventListener('click', () => {
    
//     cv_box.classList.toggle('cv_print_background_download');
    
//     const cv_pdf = new jsPDF();
//     cv_pdf.fromHTML(cv_box, 10, 10);
//     cv_pdf.save('Michał_Kawczak-CV.pdf');
// }) 