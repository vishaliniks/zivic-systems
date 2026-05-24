

/* =========================================================
   ZIVIC SYSTEMS PRODUCT DATABASE
========================================================= */

const productDatabase = [

    {
        sku: "SKM200GB128D",

        title: "Semikron IGBT Power Module 1200V",

        category: "Semiconductors",

        image:
            "SKM200GB128D.png",

        price: "₹14,850",

        datasheetURL:
            "SKM200GB128D.PDF",

        specifications: {

            voltage: "1200V",
            current: "200A",
            package: "SEMITRANS",
            application: "Industrial Inverter"

        }

    },

    {
        sku: "SKM75GAL123D",

        title: "Semitrans Industrial IGBT Module",

        category: "Semiconductors",

        image:
            "SKM75GAL123D.png",

        price: "₹9,650",

        datasheetURL:
            "SKM75GAL123D.pdf",

        specifications: {

            voltage: "1200V",
            current: "75A",
            package: "SEMITRANS",
            application: "Power Control"

        }

    },

    {
        sku: "STM32F446RE",

        title: "STM32 ARM Cortex Development Board",

        category: "Microcontrollers",

        image:
            "F446RE.PNG",

        price: "₹1,250",

        datasheetURL:
            "STM32.pdf",

        specifications: {

            core: "ARM Cortex-M4",
            speed: "180MHz",
            flash: "512KB",
            application: "Embedded Systems"

        }

    },
    {
    sku: "SKM300GB123D",

    title: "Semikron IGBT Module 1200V 300A",

    category: "Semiconductors",

    image: "SKM300GB123D.png",

    price: "₹18,500",

    stock: "60 pcs",

    datasheetURL: "SKM300GB123D.PDF",

    specifications: {

        voltage: "1200V",
        current: "300A",
        package: "SEMITRANS",
        application: "Industrial Drives"

    }

},

{
    sku: "SKD160",

    title: "Semikron Rectifier Module 1200V 160A",

    category: "Power Electronics",

    image: "SKD160.png",

    price: "₹7,800",

    stock: "20 pcs",

    datasheetURL: "SKD160.PDF",

    specifications: {

        voltage: "1200V",
        current: "160A",
        package: "Bridge Rectifier",
        application: "Power Supply"

    }

},

{
    sku: "SKM400GB124D",

    title: "Semikron IGBT Power Module 400A",

    category: "Semiconductors",

    image: "SKM400GB124D.png",

    price: "₹24,900",

    stock: "20 pcs",

    datasheetURL: "SKM400GB124D.PDF",

    specifications: {

        voltage: "1200V",
        current: "400A",
        package: "SEMITRANS",
        application: "Motor Control"

    }

},

{
    sku: "SKM195GAL124DN",

    title: "Semikron Industrial IGBT Module",

    category: "Semiconductors",

    image: "SKM195GAL124DN.png",

    price: "₹15,200",

    stock: "20 pcs",

    datasheetURL: "SKM195GAL124DN.PDF",

    specifications: {

        voltage: "1200V",
        current: "195A",
        package: "SEMITRANS",
        application: "Industrial Inverter"

    }

},

{
    sku: "SKM200GB12E4",

    title: "Alternative IGBT Module for SKM200GB128D",

    category: "Semiconductors",

    image: "SKM200GB12E4.png",

    price: "₹13,900",

    stock: "100 pcs",

    datasheetURL: "SKM200GB12E4.PDF",

    specifications: {

        voltage: "1200V",
        current: "200A",
        package: "E4 Series",
        application: "Power Electronics"

    }

},

{
    sku: "SKM100GAL12T4",

    title: "Alternative IGBT Module for SKM75GAL123D",

    category: "Semiconductors",

    image: "SKM100GAL12T4.png",

    price: "₹11,500",

    stock: "20 pcs",

    datasheetURL: "SKM100GAL12T4.PDF",

    specifications: {

        voltage: "1200V",
        current: "100A",
        package: "T4 Series",
        application: "Industrial Automation"

    }

},

{
    sku: "RES-10K-1/4W",

    title: "10KΩ Carbon Film Resistor",

    category: "Passive Components",

    image: "resistor.png",

    price: "₹2",

    stock: "5000 pcs",

    datasheetURL: "resistor.pdf",

    specifications: {

        resistance: "10KΩ",
        tolerance: "5%",
        wattage: "0.25W",
        application: "General Electronics"

    }

},

{
    sku: "CAP-100UF-50V",

    title: "100uF Electrolytic Capacitor",

    category: "Passive Components",

    image: "capacitor.png",

    price: "₹8",

    stock: "3000 pcs",

    datasheetURL: "",

    specifications: {

        capacitance: "100uF",
        voltage: "50V",
        type: "Electrolytic",
        application: "Filtering"

    }

},

{
    sku: "IND-10UH",

    title: "10uH Power Inductor",

    category: "Passive Components",

    image: "inductor.png",

    price: "₹15",

    stock: "1200 pcs",

    datasheetURL: "",

    specifications: {

        inductance: "10uH",
        current: "5A",
        type: "Shielded",
        application: "DC-DC Converter"

    }

},

{
    sku: "DIODE-1N4007",

    title: "1N4007 Rectifier Diode",

    category: "Semiconductors",

    image: "diode.png",

    price: "₹3",

    stock: "10000 pcs",

    datasheetURL: "1N4007.pdf",

    specifications: {

        voltage: "1000V",
        current: "1A",
        type: "Rectifier",
        application: "Power Supply"

    }

},

{
    sku: "RELAY-12V",

    title: "12V Electromagnetic Relay",

    category: "Electromechanical",

    image: "relay.png",

    price: "₹45",

    stock: "600 pcs",

    datasheetURL: "relay.pdf",

    specifications: {

        voltage: "12V",
        current: "10A",
        type: "SPDT",
        application: "Switching"

    }

},
{
    sku: "MCB-63A",

    title: "63A Miniature Circuit Breaker",

    category: "Protection Devices",

    image: "63A Miniature Circuit Breaker.png",

    price: "₹650",

    stock: "150 pcs",

    datasheetURL: "",

    specifications: {

        current: "63A",
        poles: "2 Pole",
        breakingCapacity: "10kA",
        application: "Industrial Protection"

    }

},

{
    sku: "CONTACTOR-40A",

    title: "40A Industrial Contactor",

    category: "Industrial Automation",

    image: "40A Industrial Contactor.png",

    price: "₹1,250",

    stock: "80 pcs",

    datasheetURL: "",

    specifications: {

        coilVoltage: "230V AC",
        current: "40A",
        poles: "3 Pole",
        application: "Motor Control"

    }

},

{
    sku: "SMPS-24V-10A",

    title: "24V 10A Industrial SMPS",

    category: "Power Supplies",

    image: "24V 10A Industrial SMPS.png",

    price: "₹2,400",

    stock: "55 pcs",

    datasheetURL: "",

    specifications: {

        inputVoltage: "230V AC",
        outputVoltage: "24V DC",
        outputCurrent: "10A",
        application: "Automation Systems"

    }

},

{
    sku: "TRANSFORMER-5KVA",

    title: "5KVA Industrial Transformer",

    category: "Power Electronics",

    image: "TRANSFORMER-5KVA.png",

    price: "₹8,500",

    stock: "18 pcs",

    datasheetURL: "",

    specifications: {

        power: "5KVA",
        primaryVoltage: "415V",
        secondaryVoltage: "230V",
        application: "Industrial Power"

    }

},

{
    sku: "FUSE-32A",

    title: "32A Ceramic Industrial Fuse",

    category: "Protection Devices",

    image: "32A Ceramic Industrial Fuse.png",

    price: "₹120",

    stock: "500 pcs",

    datasheetURL: "",

    specifications: {

        current: "32A",
        voltage: "500V",
        type: "Ceramic",
        application: "Circuit Protection"

    }

},

{
    sku: "TERMINAL-10WAY",

    title: "10-Way Terminal Block",

    category: "Connectors",

    image: "0-Way Terminal Block.png",

    price: "₹85",

    stock: "700 pcs",

    datasheetURL: "",

    specifications: {

        poles: "10",
        current: "20A",
        material: "Polyamide",
        application: "Electrical Wiring"

    }

},

{
    sku: "FAN-120MM",

    title: "120mm Cooling Fan",

    category: "Thermal Management",

    image: "fan.png",

    price: "₹320",

    stock: "120 pcs",

    datasheetURL: "",

    specifications: {

        voltage: "12V",
        size: "120mm",
        bearing: "Ball Bearing",
        application: "Panel Cooling"

    }

},

{
    sku: "ACS712-30A",

    title: "ACS712 Current Sensor Module",

    category: "Sensors",

    image: "ACS712 Current Sensor Module.png",

    price: "₹180",

    stock: "240 pcs",

    datasheetURL: "",

    specifications: {

        currentRange: "30A",
        outputType: "Analog",
        voltage: "5V",
        application: "Current Monitoring"

    }

},

{
    sku: "ESP32-WROOM",

    title: "ESP32 WiFi + Bluetooth Module",

    category: "Embedded Systems",

    image: "ESP32 WiFi + Bluetooth Module.png",

    price: "₹350",

    stock: "300 pcs",

    datasheetURL: "",

    specifications: {

        processor: "Dual Core",
        connectivity: "WiFi + Bluetooth",
        voltage: "3.3V",
        application: "IoT Development"

    }

},
{
    sku: "BC547",

    title: "NPN General Purpose Transistor",

    category: "Transistors",

    image: "",

    price: "₹12",

    datasheetURL: "",

    specifications: {

        type: "NPN",
        voltage: "45V",
        current: "100mA",
        application: "Switching"

    }

},

{
    sku: "IRFZ44N",

    title: "Power MOSFET Transistor",

    category: "MOSFET",

    image: "",

    price: "₹65",

    datasheetURL: "",

    specifications: {

        voltage: "55V",
        current: "49A",
        package: "TO-220",
        application: "Motor Driver"

    }

},

{
    sku: "2N2222",

    title: "High Speed NPN Transistor",

    category: "Transistors",

    image: "",

    price: "₹15",

    datasheetURL: "",

    specifications: {

        voltage: "40V",
        current: "800mA",
        package: "TO-92",
        application: "Amplifier"

    }

},

{
    sku: "ARDUINO-UNO",

    title: "Arduino UNO R3 Development Board",

    category: "Arduino",

    image: "",

    price: "₹550",

    datasheetURL: "",

    specifications: {

        microcontroller: "ATmega328P",
        voltage: "5V",
        usb: "USB Type-B",
        application: "IoT"

    }

},

{
    sku: "ARDUINO-NANO",

    title: "Arduino Nano Board",

    category: "Arduino",

    image: "",

    price: "₹350",

    datasheetURL: "",

    specifications: {

        microcontroller: "ATmega328",
        voltage: "5V",
        pins: "22",
        application: "Embedded"

    }

},

{
    sku: "ESP32-WROOM",

    title: "ESP32 WiFi Bluetooth Module",

    category: "Wireless",

    image: "",

    price: "₹320",

    datasheetURL: "",

    specifications: {

        wifi: "2.4GHz",
        bluetooth: "BLE 4.2",
        core: "Dual Core",
        application: "IoT"

    }

},

{
    sku: "NODEMCU-V3",

    title: "NodeMCU ESP8266 Development Board",

    category: "Wireless",

    image: "",

    price: "₹280",

    datasheetURL: "",

    specifications: {

        wifi: "802.11 b/g/n",
        usb: "Micro USB",
        voltage: "3.3V",
        application: "Smart Devices"

    }

},

{
    sku: "LM7805",

    title: "5V Voltage Regulator IC",

    category: "IC",

    image: "",

    price: "₹18",

    datasheetURL: "",

    specifications: {

        output: "5V",
        current: "1A",
        package: "TO-220",
        application: "Power Supply"

    }

},

{
    sku: "LM317",

    title: "Adjustable Voltage Regulator",

    category: "IC",

    image: "",

    price: "₹22",

    datasheetURL: "",

    specifications: {

        voltage: "1.25V-37V",
        current: "1.5A",
        package: "TO-220",
        application: "Variable Supply"

    }

},

{
    sku: "NE555",

    title: "555 Timer IC",

    category: "IC",

    image: "",

    price: "₹10",

    datasheetURL: "",

    specifications: {

        package: "DIP-8",
        voltage: "4.5V-16V",
        frequency: "500kHz",
        application: "Timer Circuits"

    }

},

{
    sku: "RELAY-12V",

    title: "12V SPDT Relay",

    category: "Relay",

    image: "",

    price: "₹45",

    datasheetURL: "",

    specifications: {

        coil: "12V",
        current: "10A",
        contacts: "SPDT",
        application: "Switching"

    }

},

{
    sku: "CAP-100UF",

    title: "100uF Electrolytic Capacitor",

    category: "Capacitors",

    image: "",

    price: "₹5",

    datasheetURL: "",

    specifications: {

        capacitance: "100uF",
        voltage: "25V",
        type: "Electrolytic",
        application: "Filtering"

    }

},

{
    sku: "CAP-470UF",

    title: "470uF Capacitor",

    category: "Capacitors",

    image: "",

    price: "₹8",

    datasheetURL: "",

    specifications: {

        capacitance: "470uF",
        voltage: "50V",
        type: "Electrolytic",
        application: "Power Supply"

    }

},

{
    sku: "RES-220OHM",

    title: "220 Ohm Resistor",

    category: "Resistors",

    image: "",

    price: "₹1",

    datasheetURL: "",

    specifications: {

        resistance: "220Ω",
        tolerance: "5%",
        wattage: "0.25W",
        application: "General Purpose"

    }

},

{
    sku: "RES-10K",

    title: "10K Ohm Resistor",

    category: "Resistors",

    image: "",

    price: "₹1",

    datasheetURL: "",

    specifications: {

        resistance: "10KΩ",
        tolerance: "5%",
        wattage: "0.25W",
        application: "Pull-up"

    }

},

{
    sku: "DHT11",

    title: "Temperature Humidity Sensor",

    category: "Sensors",

    image: "",

    price: "₹85",

    datasheetURL: "",

    specifications: {

        voltage: "3.3V-5V",
        humidity: "20-90%",
        temperature: "0-50°C",
        application: "Environment Monitoring"

    }

},

{
    sku: "HC-SR04",

    title: "Ultrasonic Distance Sensor",

    category: "Sensors",

    image: "",

    price: "₹95",

    datasheetURL: "",

    specifications: {

        range: "2cm-400cm",
        voltage: "5V",
        accuracy: "3mm",
        application: "Distance Measurement"

    }

},

{
    sku: "L298N",

    title: "Dual H-Bridge Motor Driver",

    category: "Motor Drivers",

    image: "",

    price: "₹140",

    datasheetURL: "",

    specifications: {

        voltage: "5V-35V",
        current: "2A",
        channels: "2",
        application: "DC Motors"

    }

},

{
    sku: "SG90",

    title: "Servo Motor SG90",

    category: "Motors",

    image: "",

    price: "₹120",

    datasheetURL: "",

    specifications: {

        rotation: "180°",
        voltage: "4.8V",
        torque: "1.8kg/cm",
        application: "Robotics"

    }

},

{
    sku: "LCD16X2",

    title: "16x2 LCD Display Module",

    category: "Displays",

    image: "",

    price: "₹150",

    datasheetURL: "",

    specifications: {

        display: "16x2",
        voltage: "5V",
        interface: "Parallel",
        application: "Embedded Display"

    }

},

{
    sku: "LCD-20X4",

    title: "20x4 Character LCD Display",

    category: "Display Modules",

    image: "",

    price: "₹220",

    stock: "90 pcs",

    datasheetURL: "20x4 Character LCD Display.png",

    specifications: {

        displayType: "LCD",
        characters: "20x4",
        interface: "I2C",
        application: "Embedded Display"

    }

}
];


/* =========================================
   DIRECTOR MODAL
========================================= */

const directorCards =
    document.querySelectorAll(".director-card");

const leaderModal =
    document.getElementById("leaderModal");

const leaderName =
    document.getElementById("leaderName");

const leaderTitle =
    document.getElementById("leaderTitle");

const leaderBio =
    document.getElementById("leaderBio");

const closeLeaderModal =
    document.getElementById("closeLeaderModal");

directorCards.forEach(card => {

    card.addEventListener("click", () => {

        leaderName.innerText =
            card.dataset.name;

        leaderTitle.innerText =
            card.dataset.title;

        leaderBio.innerText =
            card.dataset.bio;

        leaderModal.style.display = "flex";

    });

});

closeLeaderModal.addEventListener("click", () => {

    leaderModal.style.display = "none";

});
/* =========================================================
   PRODUCT RENDERING
========================================================= */

const productsContainer = document.getElementById("products");

function renderProducts(products) {

    productsContainer.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.setAttribute("data-sku", product.sku);

        card.innerHTML = `

           <img
    src="${product.image || 'https://via.placeholder.com/300x200?text=No+Image'}"
    alt="${product.title}"
/>

            <div class="part-number">
                ${product.sku}
            </div>

            <div class="product-title">
                ${product.title}
            </div>

            <div class="product-meta">

                ${Object.entries(product.specifications)
                    .map(([key, value]) =>
                        `<span>${key}: ${value}</span>`
                    )
                    .join(" | ")}

            </div>

            <div class="price">
                ${product.price}
            </div>

            <div class="product-actions">

    <button
        class="datasheet-btn"
        data-datasheet="${product.datasheetURL}"
        ${!product.datasheetURL ? "disabled" : ""}
    >
        ${product.datasheetURL ? "View Datasheet" : "Datasheet N/A"}
    </button>

    <button
        class="add-cart-btn"
        data-sku="${product.sku}"
    >
        Add to Cart
    </button>

</div>

        `;

        productsContainer.appendChild(card);

    });

}

renderProducts(productDatabase);

/* =========================================================
   GRID / LIST VIEW
========================================================= */

const gridBtn = document.getElementById("gridBtn");

const listBtn = document.getElementById("listBtn");

gridBtn.addEventListener("click", () => {

    productsContainer.classList.remove("list-view");

    productsContainer.classList.add("grid-view");

});

listBtn.addEventListener("click", () => {

    productsContainer.classList.remove("grid-view");

    productsContainer.classList.add("list-view");

});

/* =========================================================
   DATASHEET MODAL VIEWER
========================================================= */

const modal = document.getElementById("datasheetModal");

const modalFrame = document.getElementById("pdfViewer");

const closeModal = document.getElementById("closeModal");

document.addEventListener("click", function(e) {

    if (e.target.classList.contains("datasheet-btn")) {

        const pdf = e.target.dataset.datasheet;

        modal.style.display = "flex";

        modalFrame.src = pdf;

    }

    if (e.target.classList.contains("quick-download")) {

        const pdf = e.target.dataset.datasheet;

        window.open(pdf, "_blank");

    }

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

    modalFrame.src = "";

});

/* =========================================================
   SEARCH SYSTEM
========================================================= */

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function() {

    const query = this.value.toLowerCase();

    const filteredProducts = productDatabase.filter(product => {

        return (

            product.sku.toLowerCase().includes(query) ||

            product.title.toLowerCase().includes(query) ||

            product.category.toLowerCase().includes(query)

        );

    });

    renderProducts(filteredProducts);

});

/* =========================================================
   DYNAMIC PRODUCT COUNTER
========================================================= */

const productCount = document.getElementById("productCount");

function updateProductCount(count) {

    productCount.innerText =
        `Showing ${count} Components`;

}

updateProductCount(productDatabase.length);

searchInput.addEventListener("keyup", function() {

    const query = this.value.toLowerCase();

    const filteredProducts = productDatabase.filter(product => {

        return (

            product.sku.toLowerCase().includes(query) ||

            product.title.toLowerCase().includes(query)

        );

    });

    renderProducts(filteredProducts);

    updateProductCount(filteredProducts.length);

});
/* =========================================
   SHOPPING CART SYSTEM
========================================= */

let cart = [];

/* =========================================
   ELEMENTS
========================================= */

const openCart =
    document.getElementById("openCart");

const closeCart =
    document.getElementById("closeCart");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartCounter =
    document.getElementById("cartCounter");

/* =========================================
   OPEN CART
========================================= */

openCart.addEventListener("click", () => {

    cartDrawer.classList.add("active");

    cartOverlay.classList.add("active");

});

/* =========================================
   CLOSE CART
========================================= */

function closeCartDrawer(){

    cartDrawer.classList.remove("active");

    cartOverlay.classList.remove("active");

}

closeCart.addEventListener(
    "click",
    closeCartDrawer
);

cartOverlay.addEventListener(
    "click",
    closeCartDrawer
);

/* =========================================
   UPDATE COUNTER
========================================= */

function updateCartCounter(){

    let totalQty = 0;

    cart.forEach(item => {

        totalQty += item.quantity;

    });

    cartCounter.innerText =
        totalQty;

}

/* =========================================
   UPDATE CART UI
========================================= */

function updateCartUI(){

    cartItems.innerHTML = "";

    let subtotal = 0;

    cart.forEach((item, index) => {

        const numericPrice =
            parseInt(
                item.price.replace(/[₹,]/g, "")
            );

        subtotal +=
            numericPrice * item.quantity;

        const div =
            document.createElement("div");

        div.classList.add("cart-item");

        div.innerHTML = `

            <img
                src="${
                    item.image ||
                    'https://via.placeholder.com/100'
                }"
            >

            <div class="cart-details">

                <h4>${item.title}</h4>

                <div class="cart-price">

                    ${item.price}

                </div>

                <div class="quantity-controls">

                    <button
                        class="decrease"
                        data-index="${index}"
                    >
                        -
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        class="increase"
                        data-index="${index}"
                    >
                        +
                    </button>

                </div>

                <button
                    class="remove-item"
                    data-index="${index}"
                >
                    Remove
                </button>

            </div>

        `;

        cartItems.appendChild(div);

    });

    const shipping = 250;

    const tax =
        subtotal * 0.18;

    const total =
        subtotal + shipping + tax;

    document.getElementById("subtotal")
        .innerText =
        `₹${subtotal.toLocaleString()}`;

    document.getElementById("tax")
        .innerText =
        `₹${tax.toFixed(0)}`;

    document.getElementById("total")
        .innerText =
        `₹${total.toFixed(0)}`;

}

/* =========================================
   ADD TO CART
========================================= */

document.addEventListener("click", function(e){

    if(
        e.target.classList.contains(
            "add-cart-btn"
        )
    ){

        const sku =
            e.target.dataset.sku;

        const existing =
            cart.find(
                item => item.sku === sku
            );

        if(existing){

            existing.quantity++;

        }else{

            const product =
                productDatabase.find(
                    item => item.sku === sku
                );

            cart.push({

                ...product,

                quantity:1

            });

        }

        updateCartCounter();

        updateCartUI();

    }

});

/* =========================================
   QUANTITY CONTROLS
========================================= */

document.addEventListener("click", function(e){

    if(e.target.classList.contains("increase")){

        const index =
            e.target.dataset.index;

        cart[index].quantity++;

        updateCartUI();

        updateCartCounter();

    }

    if(e.target.classList.contains("decrease")){

        const index =
            e.target.dataset.index;

        if(cart[index].quantity > 1){

            cart[index].quantity--;

        }

        updateCartUI();

        updateCartCounter();

    }

    if(e.target.classList.contains("remove-item")){

        const index =
            e.target.dataset.index;

        cart.splice(index,1);

        updateCartUI();

        updateCartCounter();

    }

});

/* =========================================
   CHECKOUT FLOW
========================================= */

const checkoutBtn =
    document.getElementById("checkoutBtn");

const checkoutScreen =
    document.getElementById("checkoutScreen");

checkoutBtn.addEventListener("click", () => {

    if(cart.length === 0){

        alert("Your cart is empty!");

        return;

    }

    checkoutBtn.innerText =
        "Loading Checkout...";

    /* MOCK API CALL */

    setTimeout(() => {

        /* CLOSE CART DRAWER */

        cartDrawer.classList.remove("active");

        cartOverlay.classList.remove("active");

        /* OPEN SHIPPING PAGE */

        checkoutScreen.style.display =
            "flex";

        checkoutBtn.innerText =
            "Proceed to Checkout";

    }, 1500);

});
/* =========================================
   BACK TO CART
========================================= */

const backToCart =
    document.getElementById("backToCart");

backToCart.addEventListener("click", () => {

    checkoutScreen.style.display =
        "none";

    cartDrawer.classList.add("active");

    cartOverlay.classList.add("active");

});

/* =========================================
   MOCK API ORDER SUBMIT
========================================= */

document.getElementById("checkoutForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Order Successfully Placed!"
    );

    cart = [];

    updateCartUI();

    updateCartCounter();

    checkoutScreen.style.display =
        "none";

});
