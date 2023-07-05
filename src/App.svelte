<script>
	import { onMount } from 'svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Menu from './Menu.svelte';
	import Cart from './Cart.svelte';
    

	let items = [];
	let cartItems = [];
    let showCart = false;

    let YOUR_APP_ID = 'a17701bd'
	let YOUR_APP_KEY = 'a83585a4abe44f55ab6a0999e0e254ef'
	onMount(() => {
	  // Fetch menu items from API
	  fetch(`https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`)
		.then(response => response.json())
		.then(data => {
		  items = data.hits;
		})
		.catch(error => {
		  console.log('Error fetching menu:', error);
		});
	});

	
function addToCart(item) {
  cartItems = [...cartItems, item];
}

function toggleCart() {
    showCart = !showCart; // Toggle the value of showCart
  }

  function orderPlace() {
      cartItems = [];
      toggleCart();
      alert("Order Sussesfully Plased");
	
  }
  </script>
 <main>
	<Header {cartItems}  {toggleCart} {orderPlace}/>
	<div class="container">
	  {#if items.length > 0}
		<Menu {items} {addToCart} {showCart}/>
	  {:else}
		<p>Loading menu items...</p>
	  {/if}
	  <Cart {cartItems} {showCart}  {orderPlace}/>
	</div>
	<Footer />
  </main>
  
  <style>
	.container {
	  display: flex;
	  justify-content: space-between;
	}
  </style>