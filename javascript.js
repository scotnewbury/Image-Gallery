const numImagesAvailable = 1111;
const collectionID = 1360066; //the collection ID from the Unsplash url
const numItemsToGrab = 6;

document.body.classList.add('container')

function renderGalleryItem(randomImageIndex) {
    fetch(`https://source.unsplash.com/collection/${collectionID}/?sig=${randomImageIndex}`)
        .then((response) => {
            let galleryItem = document.createElement('div');
            galleryItem.innerHTML = `<a target="_blank" rel="noopener noreferrer" href="${response.url}"><img src="${response.url}" alt="gallery image"></a>`;
            document.body.appendChild(galleryItem);
        })
}

for (let i = 1; i <= numItemsToGrab; i++) {
  let randomImageIndex = (Math.floor(Math.random() * numImagesAvailable) + 1);
    renderGalleryItem(randomImageIndex);
}
