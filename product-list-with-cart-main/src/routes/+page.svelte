<script lang="javascript">
    import Cartcon from "../images/icon-add-to-cart.svg";

    let count = 0;
    const buttonColor = "red";

    const handleClick = ()=>{
        const buttonColor = "green";
        count = count === 0 ? 1 : count; 
    }

    const increment =()=>{
        count++;

    }
    const decrement =()=>{
        count--;

    }


</script>

<div class="container">
    <h1>Desserts</h1>
    <div class="main-content">
    <div class="cards-container">
        <div class="cards-row-1">
            <div class="card-1">
                <div class="card-image"></div>
                    
                    <!-- Button for adding to cart -->
                    <button on:click={handleClick} style="background-color: {buttonColor}">
                        <img class="icon" src={Cartcon} alt="Cart Icon" />
                        Add to Cart
                    </button>
                    
                    <!-- Increment and Decrement buttons with centered count -->
                    {#if count > 0}
                        <div class="counter">
                            <button class="decrement" on:click={decrement}>-</button>
                            <span class="count">{count}</span>
                            <button class="increment" on:click={increment}>+</button>
                        </div>
                    {/if}
                <div class="card-content">
                    <h2>Waffle</h2>
                    <p>Waffle with Berries</p>
                    <p>6.50</p>
                </div>
            </div>
            <div class="card-2">
                <div class="card-image"></div>
                <button>
                    <img class="icon" src={Cartcon} alt="Cart Icon" />
                    Add to Cart
                </button>
                <div class="card-content">
                    <h2>Crème Brûlée</h2>
                    <p>Vanilla Bean Crème Brûlée</p>
                    <p>7.00</p>
                </div>
            </div>
            <div class="card-3">
                <div class="card-image"></div>
                <button>
                    <img class="icon" src={Cartcon} alt="Cart Icon" />
                    Add to Cart
                </button>
                <div class="card-content">
                    <h2>Macaron</h2>
                    <p>Macaron Mix of Five</p>
                    <p>8.00</p>
                </div>
            </div>
        </div>
        <div class="cards-row-2">
            <div class="card-4">
                <div class="card-image"></div>
                <button>
                    <img class="icon" src={Cartcon} alt="Cart Icon" />
                    Add to Cart
                </button>
                <div class="card-content">
                    <h2>Tiramisu</h2>
                    <p>Classic Tiramisu</p>
                    <p>5.50</p>
                </div>
            </div>
            <div class="card-5">
                <div class="card-image"></div>
                <button>
                    <img class="icon" src={Cartcon} alt="Cart Icon" />
                    Add to Cart
                </button>
                <div class="card-content">
                    <h2>Baklava</h2>
                    <p>Pistachio Baklava</p>
                    <p>4.00</p>
                </div>
            </div>
            <div class="card-6">
                <div class="card-image"></div>
                <button>
                    <img class="icon" src={Cartcon} alt="Cart Icon" />
                    Add to Cart
                </button>
                <div class="card-content">
                    <h2>Pie</h2>
                    <p>Lemon Meringue Pie</p>
                    <p>5.00</p>
                </div>
            </div>
        </div>
        <div class="cards-row-3">
            <div class="card-image"></div>
            <div class="card-7">
                <div class="card-image"></div>
                <button>
                    <img class="icon" src={Cartcon} alt="Cart Icon" />
                    Add to Cart
                </button>
                <div class="card-content">
                    <h2>Red Velvet Cake</h2>
                    <p>Cake</p>
                    <p>4.50</p>
                </div>
            </div>
            <div class="card-8">
                <div class="card-image"></div>
                <button>
                    <img class="icon" src={Cartcon} alt="Cart Icon" />
                    Add to Cart
                </button>
                <div class="card-content">
                    <h2>Brownie</h2>
                    <p>Salted Caramel Brownie</p>
                    <p>4.50</p>
                </div>
            </div>
            <div class="card-9">
                <div class="card-image"></div>
                <button>
                    <img class="icon" src={Cartcon} alt="Cart Icon" />
                    Add to Cart
                </button>
                <div class="card-content">
                    <h2>Panna Cotta</h2>
                    <p>Vanilla Panna Cotta</p>
                    <p>6.50</p>
                </div>
            </div>
        </div>
    </div>
    <div class="cart-container">
        
        Your Cart (<!-- Quantity -->) Your added items will appear here
    </div>
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
        border-radius: 0.5rem;
        padding: 1rem;
        width: 250px;
        height: 250px;
        max-width: 30rem;
        text-align: center;
    }
    @mixin cards-row {
        display: flex;
        flex-direction: row;
        width: 80%;
        padding-left: 60px;
    }
    @mixin respond-to($breakpoint) {
        @if $breakpoint == "desktop" {
            @media (min-width: 1280px) and (max-width: 1399px) {
                @content;
            }
        }
        @if $breakpoint == "tablet" {
            @media (min-width: 768px) and (max-width: 1279px) {
                @content;
            }
        }
        @if $breakpoint == "mobile" {
            @media (max-width: 767px) {
                @content;
            }
        }
        @if $breakpoint == "large-desktop" {
            @media (min-width: 1400px) and (max-width: 1920px) {
                @content;
            }
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        max-width: 100vw;
        font-family: $font-Red-Hat;
        background: linear-gradient(90deg, $Rose100, $Rose50);
        overflow-x: hidden;
        h1 {
            font-size: 2rem;
            color: $Rose900;
            font-weight: 700;
            text-align: left;
            margin-left: 90px;
            margin-top: 60px;
        }
        .main-content {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            margin-top: 2rem;
            .cart-container{
                width: 27%;
                height: 300px;
                background-color: $Rose50;
                padding: 20px;
                border-radius: 1rem;
                margin-right: 20px;
                text-align: center;
                font-size: 1.5rem;
                color: $Rose900;
                font-weight: 700;
                background-color: aqua;
                position: absolute;
                top:13%;
                left: 70%;
            }
        }
        .cards-container {
            padding: 20px;
            width: 70%;
            height: 100%;
            display: flex;
            flex-direction: column;
            position: absolute;
                top:20%;
                right: 30%;
            gap: 2rem;
            button {
                        display: flex;
                        align-items: center;
                        background-color: $Rose50;
                        color: $Rose900;
                        border: 1.5px solid $Rose900;
                        padding: 0.5rem 1rem;
                        border-radius: 2rem;
                        justify-content: center;
                        position: relative;
                        width: 160px;
                        top: -7%;
                        left: 20%;

                        .icon {
                            width: 20px;
                            height: 20px;
                            margin-right: 0.5rem;
                        }
                    }

            .cards-row-1 {
                @include cards-row;
                .card-1 {
                    margin: 1rem;
                    .card-image {
                        @include card-styles;
                        @include respond-to("tablet") {
                            width: 200px;
                            height: 200px;
                            background: url("../images/image-waffle-tablet.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("desktop") {
                            width: 250px;
                            height: 250px;
                            background: url("../images/image-waffle-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("large-desktop") {
                            width: 300px;
                            height: 300px;
                            background: url("../images/image-waffle-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("mobile") {
                            width: 150px;
                            height: 150px;
                            background: url("../images/image-waffle-mobile.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                    }
                   
                }
                .card-2 {
                    .card-image {
                        @include card-styles;
                        @include respond-to("tablet") {
                            width: 200px;
                            height: 200px;
                            background: url("../images/image-creme-brulee-tablet.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("desktop") {
                            width: 250px;
                            height: 250px;
                            background: url("../images/image-creme-brulee-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("large-desktop") {
                            width: 300px;
                            height: 300px;
                            background: url("../images/image-creme-brulee-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("mobile") {
                            width: 150px;
                            height: 150px;
                            background: url("../images/image-creme-brulee-mobile.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                    }
                    margin: 1rem;
                }
                .card-3 {
                    .card-image {
                        @include card-styles;
                        @include respond-to("tablet") {
                            width: 200px;
                            height: 200px;
                            background: url("../images/image-macaron-tablet.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("desktop") {
                            width: 250px;
                            height: 250px;
                            background: url("../images/image-macaron-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("large-desktop") {
                            width: 300px;
                            height: 300px;
                            background: url("../images/image-macaron-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("mobile") {
                            width: 150px;
                            height: 150px;
                            background: url("../images/image-macaron-mobile.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                    }
                    margin: 1rem;
                }
            }
            .cards-row-2 {
                @include cards-row;
                .card-4 {
                    margin: 1rem;
                    .card-image {
                        @include card-styles;
                        @include respond-to("tablet") {
                            width: 200px;
                            height: 200px;
                            background: url("../images/image-tiramisu-tablet.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("desktop") {
                            width: 250px;
                            height: 250px;
                            background: url("../images/image-tiramisu-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("large-desktop") {
                            width: 300px;
                            height: 300px;
                            background: url("../images/image-tiramisu-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("mobile") {
                            width: 150px;
                            height: 150px;
                            background: url("../images/image-tiramisu-mobile.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                    }
                }
                .card-5 {
                    .card-image {
                        @include card-styles;
                        @include respond-to("tablet") {
                            width: 200px;
                            height: 200px;
                            background: url("../images/image-baklava-tablet.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("desktop") {
                            width: 250px;
                            height: 250px;
                            background: url("../images/image-baklava-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("large-desktop") {
                            width: 300px;
                            height: 300px;
                            background: url("../images/image-baklava-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("mobile") {
                            width: 150px;
                            height: 150px;
                            background: url("../images/image-baklava-mobile.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                    }
                    margin: 1rem;
                }
                .card-6 {
                    .card-image {
                        @include card-styles;
                        @include respond-to("tablet") {
                            width: 200px;
                            height: 200px;
                            background: url("../images/image-meringue-tablet.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("desktop") {
                            width: 250px;
                            height: 250px;
                            background: url("../images/image-meringue-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("large-desktop") {
                            width: 300px;
                            height: 300px;
                            background: url("../images/image-meringue-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("mobile") {
                            width: 150px;
                            height: 150px;
                            background: url("../images/image-meringue-mobile.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                    }
                    margin: 1rem;
                }
            }
            .cards-row-3 {
                @include cards-row;

                .card-7 {
                    .card-image {
                        @include card-styles;
                        @include respond-to("tablet") {
                            width: 200px;
                            height: 200px;
                            background: url("../images/image-cake-tablet.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("desktop") {
                            width: 250px;
                            height: 250px;
                            background: url("../images/image-cake-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("large-desktop") {
                            width: 300px;
                            height: 300px;
                            background: url("../images/image-cake-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("mobile") {
                            width: 150px;
                            height: 150px;
                            background: url("../images/image-cake-mobile.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                    }
                    margin: 1rem;
                }
                .card-8 {
                    .card-image {
                        @include card-styles;
                        @include respond-to("tablet") {
                            width: 200px;
                            height: 200px;
                            background: url("../images/image-brownie-tablet.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("desktop") {
                            width: 250px;
                            height: 250px;
                            background: url("../images/image-brownie-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("large-desktop") {
                            width: 300px;
                            height: 300px;
                            background: url("../images/image-brownie-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("mobile") {
                            width: 150px;
                            height: 150px;
                            background: url("../images/image-brownie-mobile.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                    }
                    margin: 1rem;
                }
                .card-9 {
                    .card-image {
                        @include card-styles;
                        @include respond-to("tablet") {
                            width: 200px;
                            height: 200px;
                            background: url("../images/image-panna-cotta-tablet.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("desktop") {
                            width: 250px;
                            height: 250px;
                            background: url("../images/image-panna-cotta-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("large-desktop") {
                            width: 300px;
                            height: 300px;
                            background: url("../images/image-panna-cotta-desktop.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        @include respond-to("mobile") {
                            width: 150px;
                            height: 150px;
                            background: url("../images/image-panna-cotta-mobile.jpg");
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                    }
                    margin: 1rem;
                }
            }
        }
    }
</style>
