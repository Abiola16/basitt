const galleryArray = [
    {image: "https://i.ibb.co/gWNDYj7/212.jpg"},
    {image: "https://i.ibb.co/m03vBhr/309.jpg"},
    {image: 'https://i.ibb.co/dQcQ0T8/image00001.jpg'},
    {image: "https://i.ibb.co/jWN4SVz/image00002.jpg"},
    {image: "https://i.ibb.co/pds115D/image00006.jpg"},
    {image: "https://i.ibb.co/P5pNTzH/image00008.jpg"},
    {image: "https://i.ibb.co/nRXLXHY/image00009.jpg"},
    {image: "https://i.ibb.co/LxsTgKK/jade-3.jpg"},
    {image: "https://i.ibb.co/grL5Y3B/products-1.jpg"},
    {image: "https://i.ibb.co/qmDwW12/products-2.jpg"},
    {image: "https://i.ibb.co/sRpHzpR/products-3.jpg" },
    {image: "https://i.ibb.co/h9Gc90z/products-4.jpg"},
    {image: "https://i.ibb.co/6X1zqNT/products-5.jpg"},
    {image: "https://i.ibb.co/yQP0x9b/products-6.jpg"},
    {image: "https://i.ibb.co/vvt00Vh/products-7.jpg"},
    {image: "https://i.ibb.co/PZrmMC7/PRs-3.jpg"},
    {image: "https://i.ibb.co/P902XCL/PRs-7.jpg" },
    {image: "https://i.ibb.co/XFMZ1P4/zay-2.jpg"},
    {image: "https://i.ibb.co/wC8tRT2/zay.jpg"},
    {image:"https://i.ibb.co/Yd42YsM/kunmii-the-grapher-3370861149332478095-40148215706.jpg"},
    {image:"https://i.ibb.co/J5MLNXg/kunmii-the-grapher-3370861149332478095-40148215706-1.jpg"},
    {image:"https://i.ibb.co/QkrK640/kunmii-the-grapher-3380229735826072342-40148215706.jpg"},
    {image:"https://i.ibb.co/PYc7104/kunmii-the-grapher-3380229735826072342-40148215706-1.jpg"},
    {image:"https://i.ibb.co/jymXGmn/kunmii-the-grapher-3383901885837683557-40148215706.jpg"},
    {image:"https://i.ibb.co/z897bSt/kunmii-the-grapher-3383901885837683557-40148215706-1.jpg"},
    {image:"https://i.ibb.co/ydmWYwq/kunmii-the-grapher-3383901885837683557-40148215706-2.jpg"},
    {image:"https://i.ibb.co/hWfqr6r/kunmii-the-grapher-3383901885837683557-40148215706-3.jpg"},
    {image:"https://i.ibb.co/p1bcMpF/kunmii-the-grapher-3427566242999988409-40148215706.jpg"},
    {image:"https://i.ibb.co/kDp2Gpk/kunmii-the-grapher-3427566242999988409-40148215706-1.jpg"},
    {image:"https://i.ibb.co/d65q3xV/kunmii-the-grapher-3427566242999988409-40148215706-2.jpg"},
    {image:"https://i.ibb.co/17Zjjx4/kunmii-the-grapher-3429522962630330921-40148215706.jpg"},
    {image:"https://i.ibb.co/vQPKQXW/kunmii-the-grapher-3429522962630330921-40148215706-1.jpg"},
];

let galleryHtml = '';
galleryArray.forEach((galleryArray) => {
    galleryHtml = galleryHtml + 
    `<div class="gallery-items">
        <img src="${galleryArray.image}" alt="">
    </div>`
});

document.querySelector('.gallery').innerHTML = galleryHtml;