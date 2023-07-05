<script>
  export let items;
  export let showCart;
  export let addToCart;
</script>

<section>
  <h1>.</h1>
 
  {#if showCart === false}
  <h2>Menu ✯✯✯</h2>

  {#each items as item}
 
    <div class="product-item">  
      <h3> Dish-Name: {item.recipe.label}</h3>
      <p>Ingredients:- {item.recipe.ingredients.length} ingredients</p>
      <p>Calories:- {item.recipe.calories.toFixed(2)}</p>
      <div class="hover-image">
        <img src="{item.recipe.image}" alt="{item.recipe.label}" />
        </div>
        <p> Dish-Type: {item.recipe.dishType}</p>
      <button class="btn" on:click={() => addToCart(item)}>Add to Cart</button>
    </div>
  {/each}
  {/if}
</section>

<style>
  div{
    margin-left: 70px;
    margin-right: 70px
  }
   img{
      width: 60%;
      height: 60%;
    
    }
  button {
  background-color: rgb(226, 32, 32);
  float: center;
  color: white;
  border-radius: 5px;
  bottom: 5%;
  
}
.product-item{
  display: inline-block;
  padding: 20px;
  text-align: center;
  
}
.hover-image:hover {
  opacity: 0.8;
  transform: scale(1.1);
}
.btn:hover{
  background-color: rgb(7, 241, 77);
  opacity: 0.8;
  transform: scale(1.1);
}
</style>
