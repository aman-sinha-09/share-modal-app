const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  // active wali class me maine scale 1 kr diya hai aur modal wala element me scale 0 kiya hua hai
  modal.classList.add("active");
  // overlayactive class me maine uski opacity 1 kr di
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  // just opposite of what i have done before
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};