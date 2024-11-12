<div class="container">
    <div class="card-container">
       <h1>Desserts</h1>




        
        Waffle Waffle with Berries  6.50 Add to Cart
        Crème Brûlée Vanilla Bean Crème Brûlée  7.00 Add to Cart
        Macaron Macaron Mix of Five  8.00 Add to Cart
        Tiramisu  Classic Tiramisu 5.50 Add to Cart
        Baklava Pistachio  Baklava 4.00 Add to Cart
        Pie Lemon Meringue Pie 5.00 Add to Cart
         Red Velvet Cake Cake 4.50 Add to Cart
         Brownie Salted Caramel Brownie  4.50 Add to Cart
         Panna Cotta Vanilla Panna Cotta 6.50 Add to Cart Your Cart
          (<!-- Quantity -->) Your added items will appear here    
    </div>

</div>

<style lang="scss">
    @import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&family=Rubik:ital,wght@0,300..900;1,300..900&family=Sora:wght@100..800&display=swap");
    $font-Red-Hat: "Red Hat Text", sans-serif;
    $Red: hsl(14, 86%, 42%);
    $Green: hsl(159, 69%, 38%);
    $Rose50: hsl(20, 50%, 98%);
    $Rose100: hsl(13, 31%, 94%);
    $Rose300: hsl(14, 25%, 72%);
    $Rose400: hsl(7, 20%, 60%);
    $Rose500: hsl(12, 20%, 44%);
    $Rose900: hsl(14, 65%, 9%);

    @mixin card-styles {
        background: $Rose50;
        border-radius: 0.5rem;
        box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.1);
        padding: 1rem;
        width: 300px;
        height: 300px;
        max-width: 30rem;
        text-align: center;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        min-width: 100vw;
        font-family: $font-Red-Hat;
        background:linear-gradient(90deg, $Rose100, $Rose50);
        .cards{
            display: grid;
            grid-template-columns: repeat(3, 0.5fr);
        .card1, .card2, .card3, .card4, .card5 {
            @include card-styles;
            margin: 1rem;
        }
    }
    }
</style>
