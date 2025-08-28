<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Gestión - Dashboard</title>
    <link rel="stylesheet" href="css/style.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>

    <div id="particles-js"></div>

    <div class="app-container">
        <aside class="sidebar">
            <div class="logo">
                <h1>MODA & HOGAR</h1>
                <p>Gestión Pro.</p>
            </div>
            <nav class="main-nav">
                <ul>
                    <li><a href="dashboard.html" class="active"><i class="fas fa-grip-horizontal"></i> Dashboard</a></li>
                    <li><a href="productos.html"><i class="fas fa-boxes"></i> Productos</a></li>
                    <li><a href="inventario.html"><i class="fas fa-warehouse"></i> Inventario</a></li>
                    <li><a href="produccion.html"><i class="fas fa-industry"></i> Producción</a></li>
                    <li><a href="reportes.html"><i class="fas fa-chart-line"></i> Reportes & Costos</a></li>
                    <li><a href="ajustes.html"><i class="fas fa-cogs"></i> Ajustes</a></li>
                </ul>
            </nav>
            <div class="sidebar-footer">
                <p>&copy; 2025 Tu Empresa</p>
            </div>
        </aside>

        <main class="content-area">
            <section id="dashboard-content" class="content-section active">
                <header class="header-bar">
                    <h2>Dashboard</h2>
                    <div class="user-info">
                        <span>Hola, [Nombre Usuario]</span>
                        <i class="fas fa-user-circle"></i>
                    </div>
                </header>
                <div class="dashboard-widgets">
                    <div class="widget glow-border">
                        <i class="fas fa-hourglass-half widget-icon"></i>
                        <h3>Órdenes en Proceso</h3>
                        <p>12 Órdenes | Est. 3 días restantes</p>
                    </div>
                    <div class="widget glow-border">
                        <i class="fas fa-exclamation-triangle widget-icon"></i>
                        <h3>Materiales Críticos</h3>
                        <p>5 Artículos bajo stock mínimo</p>
                    </div>
                    <div class="widget glow-border">
                        <i class="fas fa-dollar-sign widget-icon"></i>
                        <h3>Costo Mensual</h3>
                        <p>Bs. 25,000 | -5% vs. mes anterior</p>
                    </div>
                    <div class="widget glow-border">
                        <i class="fas fa-cube widget-icon"></i>
                        <h3>Productos Terminados</h3>
                        <p>87 unidades listas para envío</p>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
    <script src="js/global.js"></script> </body>
</html>