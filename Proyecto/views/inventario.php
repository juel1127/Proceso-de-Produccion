<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Gestión - Inventario</title>
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
                    <li><a href="dashboard.html"><i class="fas fa-grip-horizontal"></i> Dashboard</a></li>
                    <li><a href="productos.html"><i class="fas fa-boxes"></i> Productos</a></li>
                    <li><a href="inventario.html" class="active"><i class="fas fa-warehouse"></i> Inventario</a></li> <li><a href="produccion.html"><i class="fas fa-industry"></i> Producción</a></li>
                    <li><a href="reportes.html"><i class="fas fa-chart-line"></i> Reportes & Costos</a></li>
                    <li><a href="ajustes.html"><i class="fas fa-cogs"></i> Ajustes</a></li>
                </ul>
            </nav>
            <div class="sidebar-footer">
                <p>&copy; 2025 Tu Empresa</p>
            </div>
        </aside>

        <main class="content-area">
            <section id="inventory-content" class="content-section active">
                <header class="header-bar">
                    <h2>Gestión de Inventario</h2>
                    <button class="btn btn-primary" id="addNewMaterialBtn">
                        <i class="fas fa-plus-circle"></i> Nuevo Material
                    </button>
                </header>

                <div class="filter-bar">
                    <input type="text" placeholder="Buscar material por ID o nombre..." class="search-input">
                    <select class="filter-select">
                        <option value="">Todas las categorías</option>
                        <option value="tela">Telas</option>
                        <option value="hilo">Hilos</option>
                        <option value="madera">Maderas</option>
                        <option value="herrajes">Herrajes</option>
                        <option value="pintura">Pinturas/Barnices</option>
                        </select>
                    <select class="filter-select">
                        <option value="">Todos los estados</option>
                        <option value="stock">En Stock</option>
                        <option value="agotado">Agotado</option>
                        <option value="pedido">En Pedido</option>
                    </select>
                </div>

                <div class="table-container glow-border">
                    <table>
                        <thead>
                            <tr>
                                <th>ID Material</th>
                                <th>Nombre Material</th>
                                <th>Categoría</th>
                                <th>Unidad Medida</th>
                                <th>Cantidad Actual</th>
                                <th>Costo Unitario</th>
                                <th>Ubicación</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>MAT-TELA-001</td>
                                <td>Tela Denim Azul</td>
                                <td>Telas</td>
                                <td>Metros</td>
                                <td>150.75</td>
                                <td>Bs. 25.00</td>
                                <td>Bodega A1</td>
                                <td><span class="status active-status">En Stock</span></td>
                                <td>
                                    <button class="action-btn edit-btn" title="Editar Material"><i class="fas fa-edit"></i></button>
                                    <button class="action-btn replenish-btn" title="Solicitar Reposición"><i class="fas fa-truck-loading"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>MAT-HIL-002</td>
                                <td>Hilo Poliéster Negro</td>
                                <td>Hilos</td>
                                <td>Rollos</td>
                                <td>12</td>
                                <td>Bs. 10.00</td>
                                <td>Almacén B2</td>
                                <td><span class="status warning-status">Bajo Stock</span></td>
                                <td>
                                    <button class="action-btn edit-btn" title="Editar Material"><i class="fas fa-edit"></i></button>
                                    <button class="action-btn replenish-btn" title="Solicitar Reposición"><i class="fas fa-truck-loading"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>MAT-MAD-003</td>
                                <td>Madera Pino Cepillada</td>
                                <td>Maderas</td>
                                <td>Pies Tabla</td>
                                <td>500</td>
                                <td>Bs. 8.50</td>
                                <td>Patio Exterior</td>
                                <td><span class="status active-status">En Stock</span></td>
                                <td>
                                    <button class="action-btn edit-btn" title="Editar Material"><i class="fas fa-edit"></i></button>
                                    <button class="action-btn replenish-btn" title="Solicitar Reposición"><i class="fas fa-truck-loading"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>MAT-BOT-004</td>
                                <td>Botón Plástico Negro (2cm)</td>
                                <td>Herrajes</td>
                                <td>Unidades</td>
                                <td>0</td>
                                <td>Bs. 0.50</td>
                                <td>Caja 3B</td>
                                <td><span class="status inactive-status">Agotado</span></td>
                                <td>
                                    <button class="action-btn edit-btn" title="Editar Material"><i class="fas fa-edit"></i></button>
                                    <button class="action-btn replenish-btn" title="Solicitar Reposición"><i class="fas fa-truck-loading"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    </div>

    <div id="materialModal" class="modal">
        <div class="modal-content glow-border">
            <span class="close-button">&times;</span>
            <h2><span id="modalTitleMaterial">Nuevo Material</span></h2>
            <form id="materialForm">
                <div class="form-group">
                    <label for="materialName">Nombre del Material:</label>
                    <input type="text" id="materialName" required>
                </div>
                <div class="form-group">
                    <label for="materialID">ID Material:</label>
                    <input type="text" id="materialID" required>
                </div>
                <div class="form-group">
                    <label for="materialCategory">Categoría:</label>
                    <select id="materialCategory" required>
                        <option value="">Selecciona una categoría</option>
                        <option value="tela">Telas</option>
                        <option value="hilo">Hilos</option>
                        <option value="madera">Maderas</option>
                        <option value="herrajes">Herrajes</option>
                        <option value="pintura">Pinturas/Barnices</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="materialUnit">Unidad de Medida:</label>
                    <input type="text" id="materialUnit" placeholder="Ej: Metros, Rollos, Piezas" required>
                </div>
                <div class="form-group">
                    <label for="currentQuantity">Cantidad Actual:</label>
                    <input type="number" id="currentQuantity" step="0.01" min="0" required>
                </div>
                <div class="form-group">
                    <label for="unitCost">Costo Unitario (Bs.):</label>
                    <input type="number" id="unitCost" step="0.01" min="0" required>
                </div>
                <div class="form-group">
                    <label for="minStock">Stock Mínimo:</label>
                    <input type="number" id="minStock" min="0">
                </div>
                <div class="form-group">
                    <label for="materialLocation">Ubicación de Almacén:</label>
                    <input type="text" id="materialLocation" placeholder="Ej: Bodega A1, Estante 5">
                </div>
                <div class="form-group">
                    <label for="supplierInfo">Proveedor:</label>
                    <textarea id="supplierInfo" rows="2" placeholder="Nombre, Contacto, Notas"></textarea>
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Guardar Material</button>
                    <button type="button" class="btn btn-cancel close-button"><i class="fas fa-ban"></i> Cancelar</button>
                </div>
            </form>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
    <script src="js/global.js"></script> <script src="js/inventario.js"></script> </body>
</html>