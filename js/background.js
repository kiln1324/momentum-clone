const flieCount = 17;
const images = [];

for (i = 0; i < flieCount; i++) {
  const imgName = String(i).padStart(2, "0");
  images[i] = `${imgName}.jpg`;
}

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("div");
bgImage.classList.add("black");
document.body.prepend(bgImage);

document.body.style.background = `url(img/${chosenImage}) no-repeat center/cover`;
