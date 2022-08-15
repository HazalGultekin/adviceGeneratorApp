
const api_link = "https://api.adviceslip.com/advice" ;
const adviceNumber = document.querySelector('#advice_number');
const adviceQuote = document.querySelector('#advice_quote');
const fetchButton = document.querySelector('#advice_button');

//APİ'ler bize bir promise verir.
const fetchAdvice = async () => {
    const response = await fetch(api_link); //javascript bu satırı okur okumaz console'da bir promise oluşturur ve cevaba göre bir response döner yani linki aldık
    const advice = await response.json(); //link içindeki tavsiyeleri json ile ayrıştırdık.
    return advice
};

const renderAdvice = (adviceObj) => { //renderAdvice bir adviceObjesi alacak
    const {id,advice} = adviceObj;
    adviceNumber.textContent = `ADVICE #${id}`;
    adviceQuote.textContent = advice;
};

const generateAdvice = async () => {
    const data = await fetchAdvice()
    const advice = data.slip;
    console.log(advice);
    renderAdvice(advice); //Render
};

window.addEventListener('DOMContentLoaded' , () =>  { //herşey HTML'imize etkin bir şekilde yüklendiğinde 
    fetchButton.addEventListener('click', generateAdvice) //butona tıkladığımızdaa yeni advicelar gelmesini istiyoruz 
})  