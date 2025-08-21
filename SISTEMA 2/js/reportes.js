// js/reportes.js
document.addEventListener('DOMContentLoaded', () => {
    const reportTypeSelect = document.getElementById('reportTypeSelect');
    const generateReportBtn = document.getElementById('generateReportBtn');
    const allReportPanels = document.querySelectorAll('.report-panel');
    const exportReportBtn = document.getElementById('exportReportBtn');

    let costBreakdownChart = null; // Variable para almacenar la instancia del gráfico

    // Función para inicializar o actualizar el gráfico de desglose de costos
    function initCostBreakdownChart() {
        const ctx = document.getElementById('costBreakdownChart');
        if (ctx) {
            if (costBreakdownChart) {
                costBreakdownChart.destroy(); // Destruye la instancia anterior si existe
            }
            costBreakdownChart = new Chart(ctx, {
                type: 'pie', // Tipo de gráfico: pastel
                data: {
                    labels: ['Materiales', 'Mano de Obra', 'Overhead'],
                    datasets: [{
                        data: [15200, 8500, 5000], // Datos simulados
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.8)', // Materiales (verde azulado)
                            'rgba(153, 102, 255, 0.8)', // Mano de Obra (morado)
                            'rgba(255, 159, 64, 0.8)' // Overhead (naranja)
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false, // Permitir que el gráfico no mantenga el aspect ratio del canvas
                    plugins: {
                        legend: {
                            labels: {
                                color: '#ccc' // Color de las etiquetas de la leyenda
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed !== null) {
                                        label += 'Bs. ' + context.parsed.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                }
            });
        }
    }

    // Función para mostrar el reporte seleccionado y ocultar los demás
    function showSelectedReport() {
        const selectedReportId = reportTypeSelect.value + '-report';

        allReportPanels.forEach(panel => {
            if (panel.id === selectedReportId) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });

        // Si el reporte de costos está activo, inicializa su gráfico
        if (selectedReportId === 'resumen-costos-report') {
            initCostBreakdownChart();
        } else {
            // Destruir el gráfico si no estamos en el panel de resumen de costos
            if (costBreakdownChart) {
                costBreakdownChart.destroy();
                costBreakdownChart = null;
            }
        }
        // Aquí podrías tener lógica similar para otros gráficos si los agregas
    }

    // Event listeners
    reportTypeSelect.addEventListener('change', showSelectedReport);
    generateReportBtn.addEventListener('click', () => {
        // En una aplicación real, aquí harías una llamada a la API
        // para generar datos basados en las fechas seleccionadas
        alert('Generando reporte para el periodo ' + document.getElementById('startDateReport').value + ' a ' + document.getElementById('endDateReport').value + '...');
        showSelectedReport(); // Vuelve a mostrar el reporte activo (simulando que se actualizaron los datos)
    });

    exportReportBtn.addEventListener('click', () => {
        alert('Exportando el reporte actual (funcionalidad a implementar)...');
        // Aquí podrías implementar la lógica para exportar a PDF/CSV
    });

    // Inicializar al cargar la página
    showSelectedReport(); // Muestra el reporte por defecto al cargar
});