

/* =========================================================
   ZIVIC SYSTEMS PRODUCT DATABASE
========================================================= */

const productDatabase = [

    {
        sku: "SKM200GB128D",

        title: "Semikron IGBT Power Module 1200V",

        category: "Semiconductors",

        image: "SKM200GB128D.png",

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
            "SKM75GAL123D.PDF",

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

            <img src="${product.image}" alt="${product.title}" />

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
                >
                    View Datasheet
                </button>

                <button class="quick-download"
                    data-datasheet="${product.datasheetURL}"
                >
                    ⬇
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
