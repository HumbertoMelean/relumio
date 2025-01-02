// Selecting Elements
const closeBtn = document.querySelector(".close-btn_wrapper");

// Functions
const closeBanner = () => {
  const banner1 = document.querySelector(".banner1_component");
  banner1.remove();
};

// Event Listeners
closeBtn.addEventListener("click", closeBanner);
