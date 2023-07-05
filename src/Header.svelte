 <script>
    export let cartItems;
    export let toggleCart;
    export let orderPlace
  </script>
  
  <header>
    <h1>Food Ordering App</h1>
    <button on:click={toggleCart} {orderPlace}>
    <samp>Cart <sup>{cartItems.length} </sup></samp>
  </button>
    <div class="cart-icon">
      <span class="cart-count"></span>
    </div>
  </header>
  
  <style>
     header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: #8a2b06;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 10;
    }
  
  </style>
  