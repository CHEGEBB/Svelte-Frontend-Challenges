<script lang="Typescript">
    import { writable } from "svelte/store";
    import Cartcon from "../images/icon-add-to-cart.svg";
    import Minuscon from "../images/icon-decrement-quantity.svg";
    import Pluscon from "../images/icon-increment-quantity.svg";
    import EmptyImage from "../images/illustration-empty-cart.svg";
    import Carboncon from "../images/icon-carbon-neutral.svg";
    import Removecon from "../images/icon-remove-item.svg";

    // Create a store for cart items
    // @ts-ignore
    const cartStore = writable([]);
    const isModalOpen = writable(false);
    const isOverlayOpen = writable(false);

    // Product data
    const products = [
        {
            id: 1,
            name: "Waffle",
            description: "Waffle with Berries",
            price: 6.5,
        },
        {
            id: 2,
            name: "Crème Brûlée",
            description: "Vanilla Bean Crème Brûlée",
            price: 7.0,
        },
        {
            id: 3,
            name: "Macaron",
            description: "Macaron Mix of Five",
            price: 8.0,
        },
        {
            id: 4,
            name: "Tiramisu",
            description: "Classic Tiramisu",
            price: 5.5,
        },
        {
            id: 5,
            name: "Baklava",
            description: "Pistachio Baklava",
            price: 4.0,
        },
        { id: 6, name: "Pie", description: "Lemon Meringue Pie", price: 5.0 },
        { id: 7, name: "Red Velvet Cake", description: "Cake", price: 4.5 },
        {
            id: 8,
            name: "Brownie",
            description: "Salted Caramel Brownie",
            price: 4.5,
        },
        {
            id: 9,
            name: "Panna Cotta",
            description: "Vanilla Panna Cotta",
            price: 6.5,
        },
    ];

    // Cart management functions
    // @ts-ignore
    // @ts-ignore
    function openModal() {
        isModalOpen.set(true);
    }

    function closeModal() {
        isModalOpen.set(false);
    }

    function handleConfirmOrder() {
        openOverlay();
        openModal();
    }

    function openOverlay() {
        isOverlayOpen.set(true);
    }

    function closeOverlay() {
        isOverlayOpen.set(false);
    }

    // @ts-ignore
    function addToCart(product) {
        // @ts-ignore
        cartStore.update((items) => {
            // @ts-ignore
            const existingItem = items.find((item) => item.id === product.id);
            if (!existingItem) {
                return [...items, { ...product, quantity: 1 }];
            }
            return items;
        });
    }
    // @ts-ignore
    // @ts-ignore
    function removeFromCart(product) {
        // Update the cart store
        // @ts-ignore
        cartStore.update((items) => {
            // Find the existing item
            // @ts-ignore
            const existingItem = items.find((item) => item.id === product.id);

            // If item doesn't exist, return unchanged cart
            if (!existingItem) {
                return items;
            }

            // If quantity is 1, remove the item completely
            // @ts-ignore
            if (existingItem.quantity === 1) {
                // @ts-ignore
                return items.filter((item) => item.id !== product.id);
            }

            // If quantity > 1, decrease quantity by 1
            return items.map((item) =>
                // @ts-ignore
                item.id === product.id
                    ? // @ts-ignore
                      { ...item, quantity: item.quantity - 1 }
                    : item,
            );
        });
    }

    // @ts-ignore
    function incrementQuantity(productId) {
        cartStore.update((items) =>
            // @ts-ignore
            items.map((item) =>
                // @ts-ignore
                item.id === productId
                    ? // @ts-ignore
                      { ...item, quantity: item.quantity + 1 }
                    : item,
            ),
        );
    }

    // @ts-ignore
    function decrementQuantity(productId) {
        // @ts-ignore
        cartStore.update((items) => {
            const updatedItems = items
                .map((item) => {
                    // @ts-ignore
                    if (item.id === productId) {
                        // @ts-ignore
                        const newQuantity = item.quantity - 1;
                        return newQuantity > 0
                            ? // @ts-ignore
                              { ...item, quantity: newQuantity }
                            : null;
                    }
                    return item;
                })
                .filter(Boolean);
            return updatedItems;
        });
    }

    // Calculate total quantity
    $: totalQuantity = $cartStore.reduce((sum, item) => sum + item.quantity, 0);
    $: totalAmount = $cartStore.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0,
    );
</script>

<div class="container">
    <h1>Desserts</h1>
    <div class="main-content">
        <div class="cards-container">
            <div class="cards-row-1">
                {#each products.slice(0, 3) as product (product.id)}
                    <div class="card-{product.id}">
                        <div class="card-image"></div>
                        {#if !$cartStore.find((item) => item.id === product.id)}
                            <button
                                class="add-to-cart-button"
                                on:click={() => addToCart(product)}
                            >
                                <img
                                    class="icon"
                                    src={Cartcon}
                                    alt="Cart Icon"
                                />
                                Add to Cart
                            </button>
                        {:else}
                            <button class="interactive-button">
                                <span
                                    class="decrement"
                                    on:click={() =>
                                        decrementQuantity(product.id)}
                                >
                                    <img
                                        class="icon"
                                        src={Minuscon}
                                        alt="Minus Icon"
                                    />
                                </span>
                                <span class="count">
                                    {$cartStore.find(
                                        (item) => item.id === product.id,
                                    )?.quantity || 0}
                                </span>
                                <span
                                    class="increment"
                                    on:click={() =>
                                        incrementQuantity(product.id)}
                                >
                                    <img
                                        class="icon"
                                        src={Pluscon}
                                        alt="Plus Icon"
                                    />
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
                        {#if !$cartStore.find((item) => item.id === product.id)}
                            <button
                                class="add-to-cart-button"
                                on:click={() => addToCart(product)}
                            >
                                <img
                                    class="icon"
                                    src={Cartcon}
                                    alt="Cart Icon"
                                />
                                Add to Cart
                            </button>
                        {:else}
                            <button class="interactive-button">
                                <span
                                    class="decrement"
                                    on:click={() =>
                                        decrementQuantity(product.id)}
                                >
                                    <img
                                        class="icon"
                                        src={Minuscon}
                                        alt="Minus Icon"
                                    />
                                </span>
                                <span class="count">
                                    {$cartStore.find(
                                        (item) => item.id === product.id,
                                    )?.quantity || 0}
                                </span>
                                <span
                                    class="increment"
                                    on:click={() =>
                                        incrementQuantity(product.id)}
                                >
                                    <img
                                        class="icon"
                                        src={Pluscon}
                                        alt="Plus Icon"
                                    />
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
                        {#if !$cartStore.find((item) => item.id === product.id)}
                            <button
                                class="add-to-cart-button"
                                on:click={() => addToCart(product)}
                            >
                                <img
                                    class="icon"
                                    src={Cartcon}
                                    alt="Cart Icon"
                                />
                                Add to Cart
                            </button>
                        {:else}
                            <button class="interactive-button">
                                <span
                                    class="decrement"
                                    on:click={() =>
                                        decrementQuantity(product.id)}
                                >
                                    <img
                                        class="icon"
                                        src={Minuscon}
                                        alt="Minus Icon"
                                    />
                                </span>
                                <span class="count">
                                    {$cartStore.find(
                                        (item) => item.id === product.id,
                                    )?.quantity || 0}
                                </span>
                                <span
                                    class="increment"
                                    on:click={() =>
                                        incrementQuantity(product.id)}
                                >
                                    <img
                                        class="icon"
                                        src={Pluscon}
                                        alt="Plus Icon"
                                    />
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
            <h2>Your Cart ({totalQuantity})</h2>
            {#if $cartStore.length > 0}
                <div class="cart-items">
                    {#each $cartStore as item}
                        <div class="item">
                            <div class="cart-item">
                                <span class="description"
                                    >{item.description}
                                </span>
                                <div class="cash">
                                    <span class="times"> {item.quantity}x</span>
                                    <span class="amount"
                                        >@ ${(
                                            item.price * item.quantity
                                        ).toFixed(2)}</span
                                    >
                                    <span class="amount2"
                                        >${(item.price * item.quantity).toFixed(
                                            2,
                                        )}</span
                                    >
                                </div>
                            </div>
                            <div
                                class="remove"
                                on:click={() => removeFromCart(item)}
                            >
                                <img src={Removecon} alt="remove" />
                            </div>
                        </div>
                        <hr />
                    {/each}
                    <div class="cart-total">
                        <span class="total-order">Order Total</span>
                        <span class="total-amount"
                            >${totalAmount.toFixed(2)}</span
                        >
                    </div>
                    <div class="carbon">
                        <div class="con">
                            <img src={Carboncon} alt="carboncon" />
                        </div>
                        <h4>
                            This is a <strong>carbon-neutral</strong> delivery
                        </h4>
                    </div>
                    <div class="confirm-button">
                        <button on:click={handleConfirmOrder}>
                            <p>Confirm Order</p>
                        </button>
                    </div>
                </div>
            {:else}
                <div class="image-cont">
                    <img src={EmptyImage} alt="empty" />
                </div>
                <p>Your added items will appear here</p>
            {/if}
        </div>

        {#if $isOverlayOpen}
            <div class="overlay" on:click={handleConfirmOrder}>
                <div class="overlay-content">
                    <h2>Order Confirmation</h2>
                    <div class="order-details">
                        <div class="summary">
                            <p class="total">
                                Total Amount: ${totalAmount.toFixed(2)}
                            </p>
                            <p class="items">
                                Number of Items: {totalQuantity}
                            </p>
                        </div>
                        <div class="items-list">
                            {#each $cartStore as item}
                                <div class="order-item">
                                    {#if item.imageComponent}
                                        <div class="item-image">
                                            <svelte:component
                                                this={item.imageComponent}
                                            />
                                        </div>
                                    {:else if item.imageUrl}
                                        <div class="item-image">
                                            <img
                                                src={item.imageUrl}
                                                alt={item.description}
                                            />
                                        </div>
                                    {/if}
                                    <div class="item-details">
                                        <span class="item-name"
                                            >{item.description}</span
                                        >
                                        <div class="item-info">
                                            <span class="quantity"
                                                >{item.quantity}x</span
                                            >
                                            <span class="price"
                                                >@ ${item.price.toFixed(
                                                    2,
                                                )}</span
                                            >
                                            <span class="total-price"
                                                >${(
                                                    item.quantity * item.price
                                                ).toFixed(2)}</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        </div>
                        <div class="carbon-notice">
                            <img src={Carboncon} alt="carbon neutral" />
                            <p>Carbon Neutral Delivery</p>
                        </div>
                    </div>
                    <div class="overlay-actions">
                        <button class="cancel" on:click={closeOverlay()}
                            >Cancel</button
                        >
                        <button class="confirm" on:click={closeModal()}
                            >Confirm Purchase</button
                        >
                    </div>
                </div>
            </div>
        {/if}
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
        @if $breakpoint == "thumbnail" {
            @media (max-width: 300px) {
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
        flex-direction: row;
        min-height: 260vh !important;
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
            @include respond-to('mobile'){
            display: flex;
            flex-direction: column !important;
            padding: 4rem;
        }
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
                h2 {
                    text-align: left;
                    color: $Red;
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
                @include respond-to("mobile") {
                    width: 250px;
                    height: 50px;
                    margin: 0 auto;
                    margin-top: -20px;
                }
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
                @include respond-to("mobile") {
                    width: 250px;
                    height: 50px;
                    margin: 0 auto;
                    margin-top: -20px;
                }
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
                        background: $Rose50;
                    }

                    img {
                        width: 15px;
                        height: 15px;
                        filter: brightness(0) invert(1);
                        margin: 0 auto;
                        &:hover {
                            filter: brightness(0) invert(0.5);
                        }
                    }
                }
            }
            .card-content {
                h2 {
                    font-size: 17px;
                    color: $Rose500;
                    font-weight: 600;
                    text-align: left;
                }
                h3 {
                    font-size: 1.2rem;
                    color: $Rose900;
                    font-weight: 700;
                    margin-top: 1rem;
                }
                p {
                    font-size: 1rem;
                    color: $Red;
                    margin-top: 1rem;
                    font-weight: 700;
                }
            }
            .cards-row-1 {
                @include cards-row;
                @include respond-to("mobile") {
                    display: flex;
                    flex-direction: column;
                }
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
                            width: 300px;
                            height: 300px;
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
                            width: 300px;
                            height: 300px;
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
                            width: 300px;
                            height: 300px;
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
                @include respond-to("mobile") {
                    display: flex;
                    flex-direction: column;
                }
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
                            width: 300px;
                            height: 300px;
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
                            width: 300px;
                            height: 300px;
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
                            width: 300px;
                            height: 300px;
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
                            width: 300px;
                            height: 300px;
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
                            width: 300px;
                            height: 300px;
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
                            width: 300px;
                            height: 300px;
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
        .item {
            display: flex;
            flex-direction: row;
            gap: 2rem;
            .remove {
                width: 20px;
                height: 20px;
                border: 1px solid $Rose300;
                border-radius: 50%;
                padding: 5px;
                justify-content: flex-end;
                margin-top: 10px;
                position: absolute;
                left: 84%;
                &:hover {
                    border: 2px solid $Rose500;
                    cursor: pointer;
                    background-color: $Rose100;
                }
                img {
                    margin: 0 auto;
                    &:hover {
                        transform: scale(1.1);
                        cursor: pointer;
                    }
                }
            }

            .cart-item {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin: 0.5rem 0;
                font-size: 1rem;
                @include respond-to("large-desktop"){
                    margin-left: 30px;
                }
                .description {
                    color: $Rose900;
                    font-size: 1rem;
                    font-weight: 700;
                }
                .cash {
                    display: flex;
                    flex-direction: row;
                    gap: 10px;
                    .times {
                        color: $Red;
                    }
                    .amount {
                        font-size: 1rem;
                        font-weight: 600;
                        color: $Rose400;
                    }
                    .amount2 {
                        font-size: 1rem;
                        font-weight: 700;
                        color: $Rose500;
                    }
                }
            }
        }

        .cart-total {
            margin-top: 1rem;
            padding-top: 1rem;
            font-weight: bold;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .total-order {
                font-size: 16px;
                color: $Rose400;
                font-weight: 600;
            }
        }
        .carbon {
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
            h4 {
                font-size: 12px;
                font-weight: 500;
            }
        }
        .confirm-button {
            @include respond-to("mobile") {
                    width: 200px;
                    height: 50px;
                    margin-left: -14px;
                }
            margin: 0 auto;
            justify-content: center;
            align-items: center;
            margin-left: 20px;
            margin-top: 10px;
            button {
                background-color: $Red;
                width: 290px;
                padding: 10px;
                border-radius: 18px;
                p {
                    color: $Rose50;
                }
            }
        }
    }
        .image-cont {
            
            margin: 0 auto;
            justify-content: center;
            align-items: center;
            img {
                margin: 0 auto;
            }
        }
        p {
            font-size: 12px;
            color: $Rose500;
        }
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;

            .overlay-content {
                
                background-color: white;
                padding: 2rem;
                border-radius: 1rem;
                width: 90%;
                max-width: 500px;
                max-height: 80vh;
                overflow-y: auto;

                h2 {
                    color: $Rose900;
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                    text-align: center;
                }

                .order-details {
                    .summary {
                        margin-bottom: 1.5rem;
                        padding-bottom: 1rem;
                        border-bottom: 1px solid $Rose100;

                        p {
                            color: $Rose900;
                            font-size: 1.1rem;
                            margin-bottom: 0.5rem;

                            &.total {
                                font-weight: 700;
                                color: $Red;
                            }
                        }
                    }

                    .items-list {
                        .order-item {
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 1rem;
                            padding: 0.5rem;
                            background-color: $Rose50;
                            border-radius: 0.5rem;

                            .item-name {
                                color: $Rose900;
                                font-weight: 600;
                            }

                            .item-details {
                                display: flex;
                                gap: 0.5rem;

                                .quantity {
                                    color: $Red;
                                }

                                .price {
                                    color: $Rose400;
                                }

                                .total-price {
                                    font-weight: 700;
                                    color: $Rose900;
                                }
                            }
                        }
                    }

                    .carbon-notice {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        background-color: $Rose100;
                        padding: 0.75rem;
                        border-radius: 0.5rem;
                        margin: 1.5rem 0;

                        img {
                            width: 20px;
                            height: 20px;
                        }

                        p {
                            color: $Rose900;
                            font-size: 0.9rem;
                            margin: 0;
                        }
                    }
                }

                .overlay-actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: flex-end;
                    margin-top: 1.5rem;

                    button {
                       
                        padding: 0.75rem 1.5rem;
                        border-radius: 2rem;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;

                        &.cancel {
                            background-color: $Rose100;
                            color: $Rose900;
                            border: none;

                            &:hover {
                                background-color: $Rose300;
                            }
                        }

                        &.confirm {
                            background-color: $Red;
                            color: white;
                            border: none;
                            

                            &:hover {
                                background-color: darken($Red, 10%);
                            }
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 768px) {
  .container {
    flex-direction: column;
    min-height: auto !important;

    .main-content {
        display: flex;
      flex-direction: column;
      padding: 3rem;
      min-height: 700vh;


      .cart-container {
        display: flex;
        flex-direction: column;
        width: 300px;
        position: relative;
        top: 1990px !important;
        margin-left: -350px;
      }

      .cards-container {
        order: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        height: auto;
        gap: 1rem;

        .cards-row-1,
        .cards-row-2,
        .cards-row-3 {
          width: 100%;
          flex-direction: column;
          margin-left: 40px;
        }

        .card-1,
        .card-2,
        .card-3,
        .card-4,
        .card-5,
        .card-6,
        .card-7,
        .card-8,
        .card-9 {
          

          .card-image {
            width: 100%;
            height: 200px;
          }

          .add-to-cart-button,
          .interactive-button {
            top: -5%;
            left: 10%;
          }
        }
      }
    }

    .cart-items {
      .item {
        .remove {
          left: 90%;
        }
      }
    }

    .confirm-button {
    }
  }
}
</style>
