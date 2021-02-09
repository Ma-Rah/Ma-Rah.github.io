const image_array = [
	"ellie_1.jpg",
	"ellie_2.jpg",
	"ellie_3.jpg",
	"ellie_4.jpg",
	"ellie_5.jpg",
	"ellie_6.jpg",
	"ellie_7.jpg",
	"ellie_8.jpg",
	"ellie_9.jpg",
	"ellie_10.jpg",
	"ellie_11.jpg",
	"ellie_12.jpg",
	"ellie_13.jpg",
	"ellie_14.jpg",
	"ellie_15.jpg",
	"ellie_16.jpg",
	"ellie_17.jpg",
	"ellie_18.jpg",
	"ellie_19.jpg",
	"ellie_20.jpg",
	"ellie_21.jpg",
	"ellie_22.jpg",
	"ellie_23.jpg",
	"ellie_24.jpg",
	"ellie_25.jpg",
	"ellie_26.jpg",
	"ellie_27.jpg",
	"ellie_28.jpg",
	"ellie_29.jpg",
	"ellie_30.jpg",
];

const button = document.getElementById("button_container");
// const container = document.getElementById("container");

// container.innerHTML += `
// <div id="inner_container">
// <img src="" alt="" id="image_shower" />
// </div>
// <div id="button_container">
// <button><i class="fas fa-random"></i></button>
// </div>
// `;

const getRandomImage = () => {
	//Get random index
	randomIndex = Math.floor(Math.random() * image_array.length);
	// Get random image from index
	selectedImage = image_array[randomIndex];
	document.getElementById("image_shower").src = `../images/${selectedImage}`;
};

button.addEventListener("click", getRandomImage);
getRandomImage();
