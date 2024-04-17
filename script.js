document.addEventListener('DOMContentLoaded', function() {
  const totalElement = document.querySelector('.total');
  const items = document.querySelectorAll('.card-body');

  let total = 0;

  // Function to update total price
  function updateTotal() {
    totalElement.textContent = total.toFixed(1) + ' $';
  }

  // Event listeners for quantity adjustments and deletion
  items.forEach(function(item) {
    const quantityElement = item.querySelector('.quantity');
    const unitPriceElement = item.querySelector('.unit-price');
    const plusBtn = item.querySelector('.fa-plus-circle');
    const minusBtn = item.querySelector('.fa-minus-circle');
    const deleteBtn = item.querySelector('.fa-trash-alt');

    let unitPrice = parseFloat(unitPriceElement.textContent);
    let quantity = parseInt(quantityElement.textContent);

    // Event listener for increasing quantity
    plusBtn.addEventListener('click', function() {
      quantity++;
      quantityElement.textContent = quantity;
      total += unitPrice ;
      updateTotal();
    });

    // Event listener for decreasing quantity
    minusBtn.addEventListener('click', function() {
      if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
        total -= unitPrice;
        updateTotal();
      }
    });

    // Event listener for deleting item
    deleteBtn.addEventListener('click', function() {
      total -= unitPrice * quantity;
      updateTotal();
      item.remove();
    });
  });

  // Event listener for like button
  document.querySelectorAll('.fa-heart').forEach(function(likeBtn) {
    likeBtn.addEventListener('click', function() {
      likeBtn.classList.toggle('text-danger');
    });
    });
  });