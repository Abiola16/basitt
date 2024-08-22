const galleryArray = [
    {image: "https://i.ibb.co/ZKB4qjP/wedding-4.jpg"},
    {image: "https://i.ibb.co/KxSZqvN/wedding-5.jpg"},
    {image: "https://i.ibb.co/ngMxLHy/wedding-6.jpg"},
    {image: "https://i.ibb.co/ZNYypxx/wedding-7.jpg"},
    {image: "https://i.ibb.co/8BshP3C/wedding-1.jpg"},
    {image: "https://i.ibb.co/CQ1pYNx/wedding-2.jpg"},  
    {image:"https://i.ibb.co/Wfvrsk3/wedding-3.jpg"},
    {image:"https://i.ibb.co/5c2fth3/kunmii-the-grapher-3240352047570228961-40148215706.jpg"},
    {image:"https://i.ibb.co/qnLK2MB/kunmii-the-grapher-3240352047570228961-40148215706-1.jpg"},
    {image:"https://i.ibb.co/4pvTnHv/kunmii-the-grapher-3240352047570228961-40148215706-2.jpg"},
    {image:"https://i.ibb.co/3ywqtDP/kunmii-the-grapher-3242522552578419426-40148215706.jpg"},
    {image:"https://i.ibb.co/20zCR5q/kunmii-the-grapher-3242522552578419426-40148215706-1.jpg"},
    {image:"https://i.ibb.co/kXjf9qK/kunmii-the-grapher-3242522552578419426-40148215706-2.jpg"},
    {image:"https://i.ibb.co/mhdP2G1/kunmii-the-grapher-3243261799153440134-40148215706.jpg"},
    {image:"https://i.ibb.co/sJQpP4T/kunmii-the-grapher-3243261799153440134-40148215706-1.jpg"},
    {image:"https://i.ibb.co/5MbWr9r/kunmii-the-grapher-3243261799153440134-40148215706-2.jpg"},
    {image:"https://i.ibb.co/bQgyfBx/kunmii-the-grapher-3400520999477903761-40148215706-1.jpg"},
    {image:"https://i.ibb.co/6nVvSWq/kunmii-the-grapher-3403519201743449371-40148215706.jpg"},
    {image:"https://i.ibb.co/XFcKQgw/kunmii-the-grapher-3403519201743449371-40148215706-1.jpg"},
    {image:"https://i.ibb.co/C1yzt78/kunmii-the-grapher-3400520999477903761-40148215706.jpg"},
    {image:"https://i.ibb.co/qmf6KNh/kunmii-the-grapher-3433029657356798743-40148215706.jpg"},
    {image:"https://i.ibb.co/0CSmcyN/kunmii-the-grapher-3433029657356798743-40148215706-1.jpg"},
    {image:"https://i.ibb.co/kDcJ4ym/kunmii-the-grapher-3434560944227929232-40148215706.jpg"},
    {image:"https://i.ibb.co/CszKXDK/kunmii-the-grapher-3434560944227929232-40148215706-1.jpg"},
    {image:"https://i.ibb.co/dM0xMvp/kunmii-the-grapher-3435822062950832344-40148215706.jpg"},
    {image:"https://i.ibb.co/brx48j1/kunmii-the-grapher-3435822062950832344-40148215706-1.jpg"},
];

let galleryHtml = '';
galleryArray.forEach((galleryArray) => {
    galleryHtml = galleryHtml + 
    `<div class="gallery-items">
        <img src="${galleryArray.image}" alt="">
    </div>`
});

document.querySelector('.gallery').innerHTML = galleryHtml;