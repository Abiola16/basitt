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
]

let galleryHtml = '';
galleryArray.forEach((galleryArray) => {
    galleryHtml = galleryHtml + 
    `<div class="gallery-items">
        <img src="${galleryArray.image}" alt="">
    </div>`
});

document.querySelector('.gallery').innerHTML = galleryHtml;