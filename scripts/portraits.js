const galleryArray = [
    {image: "https://i.ibb.co/b7G4Hqd/2000.jpg"},
    {image:"https://i.ibb.co/Hqf7R0h/2000ss.jpg" },
    {image: "https://i.ibb.co/VjDkKxh/aisha-12.jpg"},
    {image: "https://i.ibb.co/cx1fjd6/aisha-23.jpg"},
    {image: "https://i.ibb.co/MR7Wq4v/azeezah-5.jpg"},
    {image: "https://i.ibb.co/26y7P3P/blessing-4.jpg"},
    {image: "https://i.ibb.co/MspMrWp/blessing.jpg" },
    {image: "https://i.ibb.co/Jmx2Ykb/bobo.jpg"},
    {image: "https://i.ibb.co/Ry8VSd7/bobo-1.jpg"},
    {image: "https://i.ibb.co/XCmmLMB/busayo-1.jpg"},
    {image: "https://i.ibb.co/D5YT04r/busayo-5.jpg"},
    {image: "https://i.ibb.co/h2Bg9RH/danmallam-2.jpg"},
    {image: "https://i.ibb.co/T4x320c/davgiwa.jpg" },
    {image: "https://i.ibb.co/tZ9JGJF/david-2.jpg" },
    {image: "https://i.ibb.co/B6BsGhv/enitel-4.jpg" },
    {image: "https://i.ibb.co/bBRwf1h/esther-2.jpg"},
    {image: "https://i.ibb.co/7S9fPn2/Face-POP-DAVID.jpg"},
    {image: "https://i.ibb.co/rdxWyD0/nengi.jpg"}, 
    {image: "https://i.ibb.co/pJK4dDm/nengi-6.jpg"},
    {image: "https://i.ibb.co/2smZKGc/portaits-1.jpg"},
    {image: "https://i.ibb.co/xJhPYRg/portaits-2.jpg"},
    {image: "https://i.ibb.co/HBwdcjc/portaits-4.jpg"},
    {image: "https://i.ibb.co/tJX8PHV/portaits-5.jpg"},
    {image: "https://i.ibb.co/8K3Kzk0/portaits-6.jpg" },
    {image: "https://i.ibb.co/M7rCjPW/portaits-7.jpg" },
    {image: "https://i.ibb.co/tXVd2K3/portaits.jpg" },
    {image: "https://i.ibb.co/n3xrz0Q/potraits-3.jpg" },
    {image: "https://i.ibb.co/GCT973K/shobo-2.jpg"},
    {image: "https://i.ibb.co/SKdy1VZ/summyy.jpg"},
    {image: "https://i.ibb.co/GWgKY3p/wem-wem.jpg"},
    {image: "https://i.ibb.co/9cgL6Km/yusuff.jpg"},
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