const galleryArray = [
    {image: "https://i.ibb.co/NCYK63F/fashion-1.jpg"},
    {image: "https://i.ibb.co/4jV2mdY/fashion-2.jpg"},
    {image: "https://i.ibb.co/v1nZHM0/fashion-3.jpg"},
    {image: "https://i.ibb.co/XyPrVCJ/fashion-4.jpg"},
    {image: "https://i.ibb.co/kxfqRS4/fashion-5.jpg"},
    {image: "https://i.ibb.co/PgjRbnp/fashion-6.jpg"},
    {image: "https://i.ibb.co/BsW758Z/fashion-7.jpg"},
    {image: "https://i.ibb.co/2vWJRDn/fashion-8.jpg"},
    {image: "https://i.ibb.co/LhHFxNh/fashion-9.jpg"},
    {image: "https://i.ibb.co/1zGYPFc/fashion-10.jpg"},
    {image: "https://i.ibb.co/sCVMKFb/fashion-11.jpg"},
    {image: "https://i.ibb.co/DkNSbNP/fashion-12.jpg"},
    {image: "https://i.ibb.co/MB4kdNR/fashion-13.jpg"},
    {image: "https://i.ibb.co/wJQLsmX/fashion-14.jpg"},
    {image: "https://i.ibb.co/NK1Wk1K/fashion-15.jpg"},
    {image: "https://i.ibb.co/gwg8kkV/fashion-16.jpg"},
    {image: "https://i.ibb.co/c61KmCD/fireboy-4.jpg"},
    {image: "https://i.ibb.co/9ph9V6v/fireboy-5.jpg"},
    {image: "https://i.ibb.co/MfBpW8Z/fireboy-6.jpg"},
    {image: "https://i.ibb.co/bdV1x0c/quam.jpg"},
    {image: "https://i.ibb.co/37TYyfj/quam-2.jpg"},
    {image: "https://i.ibb.co/Cnpspnp/rahman-5.jpg"},
    {image: "https://i.ibb.co/JxM7HFt/tella-3.jpg"},
    {image: "https://i.ibb.co/ftDFtyX/tella-4.jpg"},
    {image: "https://i.ibb.co/h2jrb38/timah-1.jpg"},
    {image: "https://i.ibb.co/LnHG6bP/timah-4.jpg"},
    {image: "https://i.ibb.co/x537fJG/timah-5.jpg"},
    {image: "https://i.ibb.co/4sws822/zayyyy.jpg"},
    {image: "https://i.ibb.co/ww75dHz/rahman.jpg"},  
];

let galleryHtml = '';
galleryArray.forEach((galleryArray) => {
    galleryHtml = galleryHtml + 
    `<div class="gallery-items">
        <img src="${galleryArray.image}" alt="">
    </div>`
});

document.querySelector('.gallery').innerHTML = galleryHtml;