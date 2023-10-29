const galleryArray = [
    {image: "https://i.ibb.co/ZKB4qjP/wedding-4.jpg"},
    {image: "https://i.ibb.co/KxSZqvN/wedding-5.jpg"},
    {image: "https://i.ibb.co/ngMxLHy/wedding-6.jpg"},
    {image: "https://i.ibb.co/ZNYypxx/wedding-7.jpg"},
    {image: "https://i.ibb.co/8BshP3C/wedding-1.jpg"},
    {image: "https://i.ibb.co/CQ1pYNx/wedding-2.jpg"},  
    {image:"https://i.ibb.co/Wfvrsk3/wedding-3.jpg"},

    // {image: 'images/weddings/wedding 4.webp'},
    // {image: 'images/weddings/wedding 5.jpg'},
    // {image: 'images/weddings/wedding 6.jpg'},
    // {image: 'images/weddings/wedding 7.jpg'},
    // {image: 'images/weddings/wedding 1.webp'},
    // {image: 'images/weddings/wedding 2.webp'},
    // {image: 'images/weddings/wedding 3.webp'},
];

let galleryHtml = '';
galleryArray.forEach((galleryArray) => {
    galleryHtml = galleryHtml + 
    `<div class="gallery-items">
        <img src="${galleryArray.image}" alt="">
    </div>`
});

document.querySelector('.gallery').innerHTML = galleryHtml;
