// js/produccion.js
document.addEventListener('DOMContentLoaded', () => {
    const productionOrderModal = document.getElementById('productionOrderModal');
    const addNewProductionOrderBtn = document.getElementById('addNewProductionOrderBtn');
    const closeButtons = productionOrderModal.querySelectorAll('.close-button');
    const modalTitleProduction = document.getElementById('modalTitleProduction');
    const productionOrderForm = document.getElementById('productionOrderForm');

    // Abrir modal para nueva orden de producción
    if (addNewProductionOrderBtn) {
        addNewProductionOrderBtn.addEventListener('click', () => {
            modalTitleProduction.textContent = 'Nueva Orden de Producción';
            productionOrderForm.reset(); // Limpia el formulario
            productionOrderModal.style.display = 'flex'; // Muestra el modal
        });
    }

    // Cerrar modal (listener para todos los botones .close-button dentro del modal)
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            productionOrderModal.style.display = 'none';
        });
    });

    // Cerrar modal si se hace clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === productionOrderModal) {
            productionOrderModal.style.display = 'none';
        }
    });

    // Manejo del envío del formulario (aquí se enviaría a tu backend)
    if (productionOrderForm) {
        productionOrderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const orderData = {
                orderID: document.getElementById('orderID').value,
                productName: document.getElementById('productName').value,
                quantity: parseInt(document.getElementById('quantity').value),
                startDate: document.getElementById('startDate').value,
                endDate: document.getElementById('endDate').value,
                status: document.getElementById('status').value,
                priority: document.getElementById('priority').value,
                responsible: document.getElementById('responsible').value,
                notes: document.getElementById('notes').value
            };

            console.log('Datos de la Orden de Producción a enviar:', orderData);
            alert('Orden de Producción guardada (simulado). Revisa la consola para ver los datos.');
            productionOrderModal.style.display = 'none'; // Cierra el modal después de "guardar"
            // Aquí es donde se haría una llamada a tu API Backend para guardar los datos
        });
    }

    // Lógica para los botones de acción (editar, completar, pausar, iniciar, ver) - Simulada
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', () => {
            modalTitleProduction.textContent = 'Editar Orden de Producción';
            // Simular carga de datos de una orden para edición
            document.getElementById('orderID').value = 'OP-2025-001';
            document.getElementById('productName').value = 'Camisa Casual Hombre';
            document.getElementById('quantity').value = '100';
            document.getElementById('startDate').value = '2025-07-15';
            document.getElementById('endDate').value = '2025-07-25';
            document.getElementById('status').value = 'en-progreso';
            document.getElementById('priority').value = 'alta';
            document.getElementById('responsible').value = 'Equipo A';
            document.getElementById('notes').value = 'Revisar stock de tela denim.';

            productionOrderModal.style.display = 'flex';
        });
    });

    document.querySelectorAll('.complete-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Orden marcada como Completada (funcionalidad a implementar)');
            // En un sistema real, actualizarías el estado en la tabla y en el backend
        });
    });

    document.querySelectorAll('.pause-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Orden Pausada (funcionalidad a implementar)');
        });
    });

    document.querySelectorAll('.play-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Orden Iniciada (funcionalidad a implementar)');
        });
    });

    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Ver detalles de la orden (podría abrir un modal de solo lectura o redirigir a una página de detalles)');
        });
    });
});