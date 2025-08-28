// js/ajustes.js
document.addEventListener('DOMContentLoaded', () => {
    const settingsLinks = document.querySelectorAll('.settings-nav .settings-link');
    const settingsPanels = document.querySelectorAll('.settings-panels .settings-panel');

    // Función para mostrar el panel de ajustes seleccionado y ocultar los demás
    function showSelectedSettingsPanel(targetId) {
        settingsPanels.forEach(panel => {
            if (panel.id === targetId) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });

        // Actualizar el estado activo en la navegación lateral
        settingsLinks.forEach(link => {
            if (link.dataset.target === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Añadir event listeners a los enlaces de la navegación de ajustes
    settingsLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            const targetId = link.dataset.target; // Obtener el ID del panel objetivo
            showSelectedSettingsPanel(targetId);
        });
    });

    // Lógica de formularios y botones (simulada)
    document.getElementById('general-settings').querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const companyName = document.getElementById('companyName').value;
        const currencySymbol = document.getElementById('currencySymbol').value;
        const dateFormat = document.getElementById('dateFormat').value;
        console.log('Ajustes Generales Guardados:', { companyName, currencySymbol, dateFormat });
        alert('Ajustes generales guardados (simulado).');
    });

    document.getElementById('notifications-settings').querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const emailNotifications = document.getElementById('emailNotifications').checked;
        const lowStockAlerts = document.getElementById('lowStockAlerts').checked;
        const productionCompleteAlerts = document.getElementById('productionCompleteAlerts').checked;
        console.log('Ajustes de Notificaciones Guardados:', { emailNotifications, lowStockAlerts, productionCompleteAlerts });
        alert('Ajustes de notificaciones guardados (simulado).');
    });

    // Botones de acción para gestión de usuarios (simulados)
    document.querySelectorAll('.edit-user-btn').forEach(btn => {
        btn.addEventListener('click', () => alert('Editar usuario (funcionalidad a implementar)...'));
    });
    document.querySelectorAll('.delete-user-btn').forEach(btn => {
        btn.addEventListener('click', () => confirm('¿Estás seguro de que quieres eliminar este usuario?') && alert('Usuario eliminado (simulado).'));
    });
    document.querySelector('#user-management .btn-secondary').addEventListener('click', () => alert('Añadir nuevo usuario (funcionalidad a implementar)...'));

    // Botones de acción para gestión de datos (simulados)
    document.querySelectorAll('#data-management .btn-secondary').forEach(btn => {
        btn.addEventListener('click', (e) => alert(`Gestionar ${e.target.textContent.trim()} (funcionalidad a implementar)...`));
    });

    // Botones de acción para información del sistema (simulados)
    document.querySelector('#system-info .btn-secondary:nth-of-type(1)').addEventListener('click', () => alert('Caché limpiada (simulado).'));
    document.querySelector('#system-info .btn-danger').addEventListener('click', () => confirm('¿Estás seguro de que quieres restaurar la configuración predeterminada? Esto no se puede deshacer.') && alert('Configuración restaurada (simulado).'));

    // Mostrar el panel de ajustes generales por defecto al cargar
    showSelectedSettingsPanel('general-settings');
});