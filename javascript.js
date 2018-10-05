const numItemsToGenerate = 6; //how many gallery items you want on the screen
const numImagesAvailable = 1111; //how many total images are in the collection you are pulling from
// const imageWidth = 480; //your desired image width in pixels
// const imageHeight = 480; //desired image height in pixels
const collectionID = 1360066; //the collection ID from the original url
document.body.classList.add('container')
function renderGalleryItem(randomNumber) {
    fetch(`https://source.unsplash.com/collection/${collectionID}/?sig=${randomNumber}`)
        .then((response) => {
            let galleryItem = document.createElement('div');
            // galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `<img src="${response.url}" alt="gallery image"/>`
            document.body.appendChild(galleryItem);
        })
}

for (let i = 1; i <= numItemsToGenerate; i++) {
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
    renderGalleryItem(randomImageIndex);
}
