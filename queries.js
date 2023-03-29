print("Encontrar todos los proveedores y sus marcas asociadas:");
printjson(db.proveedores.find({}, { nombre: 1, marcas: 1 }));
print("Encontrar todos los clientes y sus ventas:");
printjson(db.clientes.find({}, { nombre: 1, ventas: 1 }));
print("Encontrar todas las ventas realizadas por un empleado específico:");
printjson(db.clientes.find({ "ventas.empleado.nombre": "Empleado 1" }, { nombre: 1, "ventas.$": 1 })); 