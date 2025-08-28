// js/inventario.js
document.addEventListener('DOMContentLoaded', () => {
    const materialModal = document.getElementById('materialModal');
    const addNewMaterialBtn = document.getElementById('addNewMaterialBtn');
    const closeButtons = materialModal.querySelectorAll('.close-button'); // Usar querySelectorAll para todos los botones de cerrar
    const modalTitleMaterial = document.getElementById('modalTitleMaterial');
    const materialForm = document.getElementById('materialForm');

    // Abrir modal para nuevo material
    if (addNewMaterialBtn) {
        addNewMaterialBtn.addEventListener('click', () => {
            modalTitleMaterial.textContent = 'Nuevo Material';
            materialForm.reset(); // Limpia el formulario
            materialModal.style.display = 'flex'; // Muestra el modal
        });
    }

    // Cerrar modal (listener para todos los botones .close-button dentro del modal)
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            materialModal.style.display = 'none';
        });
    });

    // Cerrar modal si se hace clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === materialModal) {
            materialModal.style.display = 'none';
        }
    });

    // Manejo del envío del formulario (aquí se enviaría a tu backend)
    if (materialForm) {
        materialForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const materialData = {
                name: document.getElementById('materialName').value,
                id: document.getElementById('materialID').value,
                category: document.getElementById('materialCategory').value,
                unit: document.getElementById('materialUnit').value,
                currentQuantity: parseFloat(document.getElementById('currentQuantity').value),
                unitCost: parseFloat(document.getElementById('unitCost').value),
                minStock: parseFloat(document.getElementById('minStock').value) || 0, // Si no hay valor, por defecto 0
                location: document.getElementById('materialLocation').value,
                supplierInfo: document.getElementById('supplierInfo').value
            };

            console.log('Datos del Material a enviar:', materialData);
            alert('Material guardado (simulado). Revisa la consola para ver los datos.');
            materialModal.style.display = 'none'; // Cierra el modal después de "guardar"
            // Aquí es donde se haría una llamada a tu API Backend para guardar los datos
        });
    }

    // Lógica para el botón de editar (simulada)
    // Esto es un ejemplo. En un sistema real, harías una petición AJAX al backend para obtener los datos del material
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', () => {
            modalTitleMaterial.textContent = 'Editar Material';
            // Simular carga de datos de un material para edición
            document.getElementById('materialName').value = 'Tela Denim Azul';
            document.getElementById('materialID').value = 'MAT-TELA-001';
            document.getElementById('materialCategory').value = 'tela';
            document.getElementById('materialUnit').value = 'Metros';
            document.getElementById('currentQuantity').value = '150.75';
            document.getElementById('unitCost').value = '25.00';
            document.getElementById('minStock').value = '50';
            document.getElementById('materialLocation').value = 'Bodega A1';
            document.getElementById('supplierInfo').value = 'Proveedor Textiles S.A.';

            materialModal.style.display = 'flex';
        });
    });

    // Lógica para el botón de reposición (simulada)
    document.querySelectorAll('.replenish-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Solicitar reposición de material (funcionalidad a implementar, podría abrir otro modal de orden de compra)');
        });
    });
});