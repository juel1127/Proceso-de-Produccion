// js/productos.js
document.addEventListener('DOMContentLoaded', () => {
    const productModal = document.getElementById('productModal');
    const addNewProductBtn = document.getElementById('addNewProductBtn');
    const closeButtons = document.querySelectorAll('.close-button');
    const modalTitle = document.getElementById('modalTitle');
    const productForm = document.getElementById('productForm');

    const addBomItemBtn = document.getElementById('addBomItemBtn');
    const bomList = document.getElementById('bom-list');
    const addRouteItemBtn = document.getElementById('addRouteItemBtn');
    const routeList = document.getElementById('route-list');

    // Abrir modal para nuevo producto
    if (addNewProductBtn) { // Asegurarse de que el botón exista en esta página
        addNewProductBtn.addEventListener('click', () => {
            modalTitle.textContent = 'Nuevo Producto';
            productForm.reset();
            bomList.innerHTML = '';
            addBomItem();
            routeList.innerHTML = '';
            addRouteItem();
            productModal.style.display = 'flex';
        });
    }

    // Cerrar modal
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            productModal.style.display = 'none';
        });
    });

    // Cerrar modal si se hace clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === productModal) {
            productModal.style.display = 'none';
        }
    });

    // Lógica para añadir filas de Material (BOM)
    function addBomItem() {
        const div = document.createElement('div');
        div.classList.add('bom-item');
        div.innerHTML = `
            <input type="text" placeholder="Material ID/Nombre" class="bom-material-input" list="materialOptions">
            <datalist id="materialOptions">
                <option value="Tela Denim Azul (ID:1)"></option>
                <option value="Botón Plástico Negro (ID:2)"></option>
                <option value="Madera Pino (ID:3)"></option>
                <option value="Tornillo M8x20 (ID:4)"></option>
                <option value="Barniz Transparente (ID:5)"></option>
                <option value="Hilo Poliéster Negro (ID:6)"></option>
            </datalist>
            <input type="number" placeholder="Cantidad" class="bom-quantity-input" min="0.01" step="0.01">
            <button type="button" class="btn-remove-item"><i class="fas fa-times-circle"></i></button>
        `;
        bomList.appendChild(div);
        div.querySelector('.btn-remove-item').addEventListener('click', () => div.remove());
    }
    if (addBomItemBtn) { addBomItemBtn.addEventListener('click', addBomItem); }


    // Lógica para añadir filas de Ruta de Producción
    function addRouteItem() {
        const div = document.createElement('div');
        div.classList.add('route-item');
        div.innerHTML = `
            <input type="text" placeholder="Proceso ID/Nombre" class="route-process-input" list="processOptions">
            <datalist id="processOptions">
                <option value="Corte de Tela (ID:10)"></option>
                <option value="Ensamblaje (ID:11)"></option>
                <option value="Confección Mangas (ID:12)"></option>
                <option value="Barnizado (ID:13)"></option>
                <option value="Control de Calidad (ID:14)"></option>
                <option value="Empaque Final (ID:15)"></option>
            </datalist>
            <input type="number" placeholder="Tiempo (min)" class="route-time-input" min="1">
            <button type="button" class="btn-remove-item"><i class="fas fa-times-circle"></i></button>
        `;
        routeList.appendChild(div);
        div.querySelector('.btn-remove-item').addEventListener('click', () => div.remove());
    }
    if (addRouteItemBtn) { addRouteItemBtn.addEventListener('click', addRouteItem); }


    // Manejo del envío del formulario (aquí se enviaría a tu backend)
    if (productForm) {
        productForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const productData = {
                name: document.getElementById('productName').value,
                sku: document.getElementById('productSKU').value,
                category: document.getElementById('productCategory').value,
                price: parseFloat(document.getElementById('productPrice').value),
                description: document.getElementById('productDescription').value,
                status: document.getElementById('productStatus').value,
                bom: [],
                route: []
            };

            document.querySelectorAll('#bom-list .bom-item').forEach(item => {
                const materialInput = item.querySelector('.bom-material-input').value;
                const quantityInput = parseFloat(item.querySelector('.bom-quantity-input').value);
                if (materialInput && !isNaN(quantityInput) && quantityInput > 0) {
                    productData.bom.push({ material: materialInput, quantity: quantityInput });
                }
            });

            document.querySelectorAll('#route-list .route-item').forEach(item => {
                const processInput = item.querySelector('.route-process-input').value;
                const timeInput = parseInt(item.querySelector('.route-time-input').value);
                if (processInput && !isNaN(timeInput) && timeInput > 0) {
                     productData.route.push({ process: processInput, time: timeInput });
                }
            });

            console.log('Datos del Producto a enviar:', productData);
            alert('Producto guardado (simulado). Revisa la consola para ver los datos.');
            productModal.style.display = 'none';
        });
    }

    // Lógica para el botón de editar (simulada)
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', () => {
            modalTitle.textContent = 'Editar Producto';
            document.getElementById('productName').value = 'Camisa Clásica Masculina Azul';
            document.getElementById('productSKU').value = 'CAM-CLAS-M-AZUL';
            document.getElementById('productCategory').value = 'ropa';
            document.getElementById('productPrice').value = '150.00';
            document.getElementById('productDescription').value = 'Camisa elegante de algodón azul para caballero.';
            document.getElementById('productStatus').value = 'activo';

            bomList.innerHTML = '';
            addBomItem();

            routeList.innerHTML = '';
            addRouteItem();

            productModal.style.display = 'flex';
        });
    });

    // Lógica para el botón de ver detalles (simulada)
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Ver detalles del producto (funcionalidad a implementar, podría abrir el mismo modal en modo solo lectura)');
        });
    });
});