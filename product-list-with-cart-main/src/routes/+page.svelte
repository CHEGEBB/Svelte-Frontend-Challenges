<script lang="Typescript">
    import { writable } from 'svelte/store';
    import Cartcon from "../images/icon-add-to-cart.svg";
    import Minuscon from "../images/icon-decrement-quantity.svg";
    import Pluscon from "../images/icon-increment-quantity.svg";
    import EmptyImage from "../images/illustration-empty-cart.svg";
    import Carboncon from "../images/icon-carbon-neutral.svg";
    import Removecon from "../images/icon-remove-item.svg";
    
    // Create a store for cart items
    // @ts-ignore
    const cartStore = writable([]);
    
    // Product data
    const products = [
        { id: 1, name: 'Waffle', description: 'Waffle with Berries', price: 6.50 },
        { id: 2, name: 'Crème Brûlée', description: 'Vanilla Bean Crème Brûlée', price: 7.00 },
        { id: 3, name: 'Macaron', description: 'Macaron Mix of Five', price: 8.00 },
        { id: 4, name: 'Tiramisu', description: 'Classic Tiramisu', price: 5.50 },
        { id: 5, name: 'Baklava', description: 'Pistachio Baklava', price: 4.00 },
        { id: 6, name: 'Pie', description: 'Lemon Meringue Pie', price: 5.00 },
        { id: 7, name: 'Red Velvet Cake', description: 'Cake', price: 4.50 },
        { id: 8, name: 'Brownie', description: 'Salted Caramel Brownie', price: 4.50 },
        { id: 9, name: 'Panna Cotta', description: 'Vanilla Panna Cotta', price: 6.50 }
    ];
    
    // Cart management functions
    // @ts-ignore
    function addToCart(product) {
        // @ts-ignore
        cartStore.update(items => {
            // @ts-ignore
            const existingItem = items.find(item => item.id === product.id);
            if (!existingItem) {
                return [...items, { ...product, quantity: 1 }];
            }
            return items;
        });
    }
    
    // @ts-ignore
    function incrementQuantity(productId) {
        cartStore.update(items => 
            // @ts-ignore
            items.map(item => 
                // @ts-ignore
                item.id === productId 
                    // @ts-ignore
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    }
    
    // @ts-ignore
    function decrementQuantity(productId) {
        // @ts-ignore
        cartStore.update(items => {
            const updatedItems = items.map(item => {
                // @ts-ignore
                if (item.id === productId) {
                    // @ts-ignore
                    const newQuantity = item.quantity - 1;
                    return newQuantity > 0 
                        // @ts-ignore
                        ? { ...item, quantity: newQuantity }
                        : null;
                }
                return item;
            }).filter(Boolean);
            return updatedItems;
        });
    }
    
    // Calculate total quantity
    $: totalQuantity = $cartStore.reduce((sum, item) => sum + item.quantity, 0);
    $: totalAmount = $cartStore.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    </script>
    
    <div class="container">
        <h1>Desserts</h1>
        <div class="main-content">
            <div class="cards-container">
                <div class="cards-row-1">
                    {#each products.slice(0, 3) as product (product.id)}
                        <div class="card-{product.id}">
                            <div class="card-image"></div>
                            {#if !$cartStore.find(item => item.id === product.id)}
                                <button
                                    class="add-to-cart-button"
                                    on:click={() => addToCart(product)}
                                >
                                    <img class="icon" src={Cartcon} alt="Cart Icon" />
                                    Add to Cart
                                </button>
                            {:else}
                                <button class="interactive-button">
                                    <span class="decrement" on:click={() => decrementQuantity(product.id)}>
                                        <img class="icon" src={Minuscon} alt="Minus Icon" />
                                    </span>
                                    <span class="count">
                                        {$cartStore.find(item => item.id === product.id)?.quantity || 0}
                                    </span>
                                    <span class="increment" on:click={() => incrementQuantity(product.id)}>
                                        <img class="icon" src={Pluscon} alt="Plus Icon" />
                                    </span>
                                </button>
                            {/if}
                            <div class="card-content">
                                <h2>{product.name}</h2>
                                <h3>{product.description}</h3>
                                <p>${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    {/each}
                </div>
                
                <div class="cards-row-2">
                    {#each products.slice(3, 6) as product (product.id)}
                        <div class="card-{product.id}">
                            <div class="card-image"></div>
                            {#if !$cartStore.find(item => item.id === product.id)}
                                <button
                                    class="add-to-cart-button"
                                    on:click={() => addToCart(product)}
                                >
                                    <img class="icon" src={Cartcon} alt="Cart Icon" />
                                    Add to Cart
                                </button>
                            {:else}
                                <button class="interactive-button">
                                    <span class="decrement" on:click={() => decrementQuantity(product.id)}>
                                        <img class="icon" src={Minuscon} alt="Minus Icon" />
                                    </span>
                                    <span class="count">
                                        {$cartStore.find(item => item.id === product.id)?.quantity || 0}
                                    </span>
                                    <span class="increment" on:click={() => incrementQuantity(product.id)}>
                                        <img class="icon" src={Pluscon} alt="Plus Icon" />
                                    </span>
                                </button>
                            {/if}
                            <div class="card-content">
                                <h2>{product.name}</h2>
                                <h3>{product.description}</h3>
                                <p>${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    {/each}
                </div>
    
                <div class="cards-row-3">
                    {#each products.slice(6) as product (product.id)}
                        <div class="card-{product.id}">
                            <div class="card-image"></div>
                            {#if !$cartStore.find(item => item.id === product.id)}
                                <button
                                    class="add-to-cart-button"
                                    on:click={() => addToCart(product)}
                                >
                                    <img class="icon" src={Cartcon} alt="Cart Icon" />
                                    Add to Cart
                                </button>
                            {:else}
                                <button class="interactive-button">
                                    <span class="decrement" on:click={() => decrementQuantity(product.id)}>
                                        <img class="icon" src={Minuscon} alt="Minus Icon" />
                                    </span>
                                    <span class="count">
                                        {$cartStore.find(item => item.id === product.id)?.quantity || 0}
                                    </span>
                                    <span class="increment" on:click={() => incrementQuantity(product.id)}>
                                        <img class="icon" src={Pluscon} alt="Plus Icon" />
                                    </span>
                                </button>
                            {/if}
                            <div class="card-content">
                                <h2>{product.name}</h2>
                                <h3>{product.description}</h3>
                                <p>${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
    
            <div class="cart-container">
               <h2> Your Cart ({totalQuantity})</h2>
                {#if $cartStore.length > 0}
                    <div class="cart-items">
                        {#each $cartStore as item}
                        <div class="item">
                            <div class="cart-item">
                                <span class="description">{item.description} </span>
                                <div class="cash">
                                    <span class="times"> {item.quantity}x</span>
                                    <span class="amount">@ ${(item.price * item.quantity).toFixed(2)}</span>
                                    <span class="amount2">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                                
                            </div>
                            <div class="remove">
                                <img src={Removecon} alt="remove"/>
                            </div>
                        </div>
                        {/each}
                        <div class="cart-total">
                            Total: ${totalAmount.toFixed(2)}
                        </div>
                        <div class="carbon">
                            <div class="con">
                                <img src={Carboncon} alt="carboncon"/>
                            </div>
                            <h4>This is a <strong>carbon-neutral</strong> delivery</h4>
                        </div>
                        <div class="confirm-button">
                            <button>
                               <p>Confirm Order</p> 
                            </button>
                        </div>
                    </div>
                {:else}
                <div class="image-cont ">
                    <img src={EmptyImage} alt="empty"/>
                </div>
                    <p>Your added items will appear here</p>
                {/if}
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
        min-height: 260vh !important;
        max-width: 100vw;
        font-family: $font-Red-Hat;
        background: linear-gradient(90deg, $Rose300, $Rose50);
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
            .cart-container {
                width: 27%;
                height: auto;
                background-color: $Rose50;
                padding: 20px;
                border-radius: 1rem;
                margin-right: 20px;
                text-align: center;
                font-size: 1.5rem;
                color: $Rose900;
                font-weight: 700;
                background-color: #ffffff;
                position: absolute;
                top: 13%;
                left: 70%;
                h2{
                    text-align: left;
                    color: $Red;
                }
            }
        }
        .cards-container {
            padding: 20px;
            width: 70%;
            height: 100%;
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 20%;
            right: 30%;
            gap: 0.2rem;
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
            .add-to-cart-button {
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
        transition: all 0.3s ease;

        &:hover {
            background-color: $Red;
            border: none;
            color: white;
            .icon {
                filter: brightness(0) invert(1);
            }
        }
    }

    .interactive-button {
        display: flex;
        align-items: center;
        background-color: $Red;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        justify-content: space-between;
        position: relative;
        width: 160px;
        top: -7%;
        left: 20%;

        .icon {
            filter: brightness(0) invert(1);
        }

        .count {
            font-size: 18px;
            font-weight: bold;
            color: white;
            margin: 0 0.5rem;
        }

        .decrement,
        .increment {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid $Rose50;
            border-radius: 50%;
            cursor: pointer;
            padding: 5px;

            &:hover {
                background:$Rose50;

            }

            img {
                width: 15px;
                height: 15px;
                filter: brightness(0) invert(1);
                margin :0 auto;
                &:hover{
                    filter: brightness(0) invert(0.5);
                }
            }
        }
    }
    .card-content{
        h2{
            font-size: 17px;
            color: $Rose500;
            font-weight: 600;
            text-align: left;
        }
        h3{
            font-size: 1.2rem;
            color: $Rose900;
            font-weight: 700;
            margin-top: 1rem;
        }
        p{
            font-size: 1rem;
            color: $Red;
            margin-top: 1rem;
            font-weight: 700;
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
        .cart-items {
    margin-top: 1rem;
    text-align: left;
}
.item{
    display: flex;
    flex-direction: row;
    gap: 2rem;
    .remove{
        width: 20px;
        height: 20px;
        border: 1px solid $Rose300;
        border-radius: 50%;
        padding: 5px;
        justify-content: flex-end;
        margin-top: 10px;
        position: relative;
        left: 27%;
        img{
            margin: 0 auto;
        }
    }


.cart-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0.5rem 0;
    font-size: 1rem;
    .description{
        color:$Rose900;
        font-size: 1rem;
        font-weight: 700;
    }
    .cash{
        display: flex;
        flex-direction: row;
        gap: 10px;
        .times{
            color: $Red;
        }
        .amount{
            font-size: 1rem;
        font-weight: 600;
        color: $Rose400;
        }
    }
   
}
}

.cart-total {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid $Rose300;
    font-weight: bold;
}
.carbon{
    background-color: $Rose100;
    width: 95%;
    height: 40px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 5px;
    border-radius: 8px;
    h4{
        font-size: 12px;
        font-weight: 500;
     
    }
    
}
.confirm-button{
    margin: 0 auto;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        margin-top: 10px;
    button{
        background-color: $Red;
        width: 290px;
        padding: 10px;
        border-radius: 18px;
        p{
            color: $Rose50;
        }

    }
}

.image-cont{
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    img{
        margin: 0 auto;

    }
}
p{
        font-size: 12px;
        color:$Rose500;
    }
    }
</style>
