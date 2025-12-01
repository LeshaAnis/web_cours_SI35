const imageUrls = [
    '83736179f14c89ff892361821ad57107.jpg',
    '2434.jpg',
    'PICT018.jpg'
];

let currentImageIndex = 0;

const imgElement = document.getElementById('mainImage');
const buttonElement = document.getElementById('changeImageButton');

buttonElement.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    imgElement.src = imageUrls[currentImageIndex];
});