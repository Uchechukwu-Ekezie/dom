document.addEventListener("DOMContentLoaded", function () {
    // Function to increment quantity
    function incrementQuantity(quantityElement) {
      let currentQuantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = currentQuantity + 1;
      updateTotalPrice();
    }
  
    // Function to decrement quantity
    function decrementQuantity(quantityElement) {
      let currentQuantity = parseInt(quantityElement.textContent);
      if (currentQuantity > 0) {
        quantityElement.textContent = currentQuantity - 1;
        updateTotalPrice();
      }
    }
  
    // Function to delete item
    function deleteItem(cardBody) {
      cardBody.parentNode.removeChild(cardBody);
      updateTotalPrice();
    }
  
    // Function to toggle like
    function toggleLike(heartIcon) {
      heartIcon.classList.toggle("liked");
    }
  
    // Function to update total price
    function updateTotalPrice() {
      let total = 0;
      document.querySelectorAll(".card-body").forEach(function (cardBody) {
        const quantity = parseInt(cardBody.querySelector(".quantity").textContent);
        const unitPrice = parseInt(cardBody.querySelector(".unit-price").textContent.replace("$", ""));
        total += quantity * unitPrice;
      });
      document.querySelector(".total").textContent = total + " $";
    }
  
    // Event listeners for quantity buttons
    document.querySelectorAll(".fa-plus-circle").forEach(function (plusButton) {
      plusButton.addEventListener("click", function () {
        incrementQuantity(plusButton.nextElementSibling);
      });
    });
  
    document.querySelectorAll(".fa-minus-circle").forEach(function (minusButton) {
      minusButton.addEventListener("click", function () {
        decrementQuantity(minusButton.previousElementSibling);
      });
    });
  
    // Event listener for delete buttons
    document.querySelectorAll(".fa-trash-alt").forEach(function (trashIcon) {
      trashIcon.addEventListener("click", function () {
        deleteItem(trashIcon.closest(".card-body"));
      });
    });
  
    // Event listener for like buttons
    document.querySelectorAll(".fa-heart").forEach(function (heartIcon) {
      heartIcon.addEventListener("click", function () {
        toggleLike(heartIcon);
      });
    });
  });
  