<script>
    export let cartItems;
    export let showCart;
    export let orderPlace;
  </script>

  <section>
    <h1>.</h1>


    {#if showCart === true}
    <h2>Cart ✴</h2>
    {#if cartItems.length === 0}
    <h5>Your cart is empty.</h5>
    {/if}
    {#each cartItems as item}
        <div class="cart-item">
          <h5>Name: {item.recipe.label}</h5>
          <p>Yield: {item.recipe.yield}</p>
          <!-- <p>calories: {item.recipe.calories}</p> -->
          <img src="{item.recipe.image}" alt="{item.recipe.label}" />
          <p>Price: $ {item.recipe.totalTime}</p>
          <p>Meal-Type:  {item.recipe.mealType}</p>

        </div>

      {/each}
      <button class="out" on:click={orderPlace}>Checkout</button>
    {/if}
    
  </section>
  
  <style>
    div{
      display: inline-block;
      position: relative;
      right: 10px;
      
    }
    img{
      width: 30%;
      height: 30%;

    }
    .cart-item {
    
      margin-bottom: 16px;
      padding: 8px;
      background-color: #f9f9f9;

    }
    .out{
      background-color: rgb(6, 231, 74);
      cursor: pointer;
      border-radius: 5px;
      margin-left: 20px;
    }
  </style>
  