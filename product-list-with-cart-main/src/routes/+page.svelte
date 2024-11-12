<div class="container">
    <div class="cards-container">
       <h1>Desserts</h1>
       <div class="cards">
        <div class="card-1">
            <div class="card-content">
                <h2>Waffle</h2>
            <p>Waffle with Berries</p>
            <p>6.50</p>
            </div>
            <button>Add to Cart</button>
        </div>
        <div class="card-2">
            <div class="card-content">
                <h2>Crème Brûlée</h2>
            <p>Vanilla Bean Crème Brûlée</p>
            <p>7.00</p>
            </div>
            <button>Add to Cart</button>
            </div>
        <div class="card-3">
            <div class="card-content">
                <h2>Macaron</h2>
            <p>Macaron Mix of Five</p>
            <p>8.00</p>
            </div>
            <button>Add to Cart</button>
            </div>
        <div class="card-4">
            <div class="card-content">
                <h2>Tiramisu</h2>
            <p>Classic Tiramisu</p>
            <p>5.50</p>
            </div>
            <button>Add to Cart</button>
            </div>
        <div class="card-5">
            <div class="card-content">
                <h2>Baklava</h2>
            <p>Pistachio Baklava</p>
            <p>4.00</p>
            </div>
            <button>Add to Cart</button>
            </div>
        <div class="card-6">
            <div class="card-content">
                <h2>Pie</h2>
            <p>Lemon Meringue Pie</p>
            <p>5.00</p>
            </div>
            <button>Add to Cart</button>
            </div>
        <div class="card-7">
            <div class="card-content">
                <h2>Red Velvet Cake</h2>
            <p>Cake</p>
            <p>4.50</p>
            </div>
            <button>Add to Cart</button>
            </div>
        <div class="card-8">
            <div class="card-content">
                <h2>Brownie</h2>
            <p>Salted Caramel Brownie</p>
            <p>4.50</p>
            </div>
            <button>Add to Cart</button>
            </div>
        <div class="card-9">
            <div class="card-content">
                <h2>Panna Cotta</h2>
            <p>Vanilla Panna Cotta</p>
            <p>6.50</p>
            </div>
            <button>Add to Cart</button>
            </div>
       </div>

 Your Cart
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
        width: 250px;
        height: 250px;
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
        min-height: 100vh;
        min-width: 100vw;
        font-family: $font-Red-Hat;
        background:linear-gradient(90deg, $Rose100, $Rose50);
        overflow-x: hidden ;
        .cards-container{
            padding: 20px;
            background-color: red;

        .cards{
            display: grid;
            grid-template-columns: repeat(3, 0.5fr);
           

        .card-1 {
            @include card-styles;
            margin-top: 1rem;
        }
        .card-2 {
            @include card-styles;
            margin: 1rem;
        }
        .card-3 {
            @include card-styles;
            margin: 1rem;
        }
        .card-4 {
            @include card-styles;
            margin: 1rem;
        }
        .card-5 {
            @include card-styles;
            margin: 1rem;
        }
        .card-6 {
            @include card-styles;
            margin: 1rem;
        }
        .card-7 {
            @include card-styles;
            margin: 1rem;
        }
        .card-8 {
            @include card-styles;
            margin: 1rem;
        }
        .card-9 {
            @include card-styles;
            margin: 1rem;
        }
    }
}
    }
</style>
