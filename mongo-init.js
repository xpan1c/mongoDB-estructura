db = db.getSiblingDB('optica');

db.createCollection('proveedores');

db.proveedores.insertMany([
    {
        "_id": ObjectId("60d5ec9af682fbd12a8920e0"),
        "nombre": "Proveedor 1",
        "direccion": {
            "calle": "Calle Falsa",
            "numero": 101,
            "piso": 1,
            "puerta": "A",
            "ciudad": "Barcelona",
            "codigo_postal": "08001",
            "pais": "España"
        },
        "telefono": "934567800",
        "fax": "934567801",
        "NIF": "A12345670",
        "marcas": [
            {
                "_id": ObjectId("60d5ec9af682fbd12a8920e1"),
                "nombre": "Marca A"
            },
            {
                "_id": ObjectId("60d5ec9af682fbd12a8920e2"),
                "nombre": "Marca B"
            }
        ]
    },
    {
        "_id": ObjectId("60d5ec9af682fbd12a8920e3"),
        "nombre": "Proveedor 2",
        "direccion": {
            "calle": "Calle Verdadera",
            "numero": 102,
            "piso": 2,
            "puerta": "B",
            "ciudad": "Madrid",
            "codigo_postal": "28001",
            "pais": "España"
        },
        "telefono": "914567800",
        "fax": "914567801",
        "NIF": "A12345671",
        "marcas": [
            {
                "_id": ObjectId("60d5ec9af682fbd12a8920e4"),
                "nombre": "Marca C"
            },
            {
                "_id": ObjectId("60d5ec9af682fbd12a8920e5"),
                "nombre": "Marca D"
            }
        ]
    },
    {
        "_id": ObjectId("60d5ec9af682fbd12a8920e6"),
        "nombre": "Proveedor 3",
        "direccion": {
            "calle": "Calle Imaginaria",
            "numero": 103,
            "piso": 3,
            "puerta": "C",
            "ciudad": "Valencia",
            "codigo_postal": "46001",
            "pais": "España"
        },
        "telefono": "964567800",
        "fax": "964567801",
        "NIF": "A12345672",
        "marcas": [
            {
                "_id": ObjectId("60d5ec9af682fbd12a8920e7"),
                "nombre": "Marca E"
            },
            {
                "_id": ObjectId("60d5ec9af682fbd12a8920e8"),
                "nombre": "Marca F"
            }
        ]
    },
    {
        "_id": ObjectId("60d5ec9af682fbd12a8920e9"),
        "nombre": "Proveedor 4",
        "direccion": {
            "calle": "Calle Inexistente",
            "numero": 104,
            "piso": 4,
            "puerta": "D",
            "ciudad": "Bilbao",
            "codigo_postal": "48001",
            "pais": "España"
        },
        "telefono": "944567800",
        "fax": "944567801",
        "NIF": "A12345673",
        "marcas": [
            {
                "_id": ObjectId("60d5ec9af682fbd12a8920ea"),
                "nombre": "Marca G"
            },
            {
                "_id": ObjectId("60d5ec9af682fbd12a8920eb"),
                "nombre": "Marca H"
            }
        ]
    },
    {
        "_id": ObjectId("60d5ec9af682fbd12a8920ec"),
        "nombre": "Proveedor 5",
        "direccion": {
            "calle": "Calle Inverosímil",
            "numero": 105,
            "piso": 5,
            "puerta": "E",
            "ciudad": "Sevilla",
            "codigo_postal": "41001",
            "pais": "España"
        },
        "telefono": "954567800",
        "fax": "954567801",
        "NIF": "A12345674",
        "marcas": [
            {
                "_id": ObjectId("60d5ec9af682fbd12a8920ed"),
                "nombre": "Marca I"
            },
            {
                "_id": ObjectId("60d5ec9af682fbd12a8920ee"),
                "nombre": "Marca J"
            }
        ]
    }
]);
db.createCollection('clientes');

db.clientes.insertMany(
    [
        {
            "_id": ObjectId("70d5ec9af682fbd12a8920f0"),
            "nombre": "Cliente 1",
            "direccion": {
                "calle": "Calle Uno",
                "numero": 111,
                "piso": 1,
                "puerta": "A",
                "ciudad": "Barcelona",
                "codigo_postal": "08001",
                "pais": "España"
            },
            "telefono": "934567810",
            "email": "cliente1@example.com",
            "fecha_registro": ISODate("2023-01-01"),
            "ventas": [
                {
                    "_id": ObjectId("70d5ec9af682fbd12a8920f1"),
                    "fecha_venta": ISODate("2023-01-10"),
                    "gafa": {
                        "_id": ObjectId("70d5ec9af682fbd12a8920f2"),
                        "marca_id": ObjectId("60d5ec9af682fbd12a8920e2"),
                        "graduacion": {
                            "izquierdo": 1.5,
                            "derecho": 1.25
                        },
                        "tipo_montura": "metálica",
                        "color_montura": "negro",
                        "color_vidrio": {
                            "izquierdo": "gris",
                            "derecho": "gris"
                        },
                        "precio": 100
                    },
                    "empleado": {
                        "_id": ObjectId("70d5ec9af682fbd12a8920f3"),
                        "nombre": "Empleado 1"
                    }
                }
            ]
        },
        {
            "_id": ObjectId("70d5ec9af682fbd12a8920f4"),
            "nombre": "Cliente 2",
            "direccion": {
                "calle": "Calle Dos",
                "numero": 112,
                "piso": 2,
                "puerta": "B",
                "ciudad": "Madrid",
                "codigo_postal": "28002",
                "pais": "España"
            },
            "telefono": "914567810",
            "email": "cliente2@example.com",
            "fecha_registro": ISODate("2023-01-15"),
            "ventas": [
                {
                    "_id": ObjectId("70d5ec9af682fbd12a8920f5"),
                    "fecha_venta": ISODate("2023-01-20"),
                    "gafa": {
                        "_id": ObjectId("70d5ec9af682fbd12a8920f6"),
                        "marca_id": ObjectId("60d5ec9af682fbd12a8920e4"),
                        "graduacion": {
                            "izquierdo": 1.0,
                            "derecho": 1.0
                        },
                        "tipo_montura": "pasta",
                        "color_montura": "azul",
                        "color_vidrio": {
                            "izquierdo": "verde",
                            "derecho": "verde"
                        },
                        "precio": 120
                    },
                    "empleado": {
                        "_id": ObjectId("70d5ec9af682fbd12a8920f7"),
                        "nombre": "Empleado 2"
                    }
                }
            ]
        },
        {
            "_id": ObjectId("70d5ec9af682fbd12a8920f8"),
            "nombre": "Cliente 3",
            "direccion": {
                "calle": "Calle Tres",
                "numero": 113,
                "piso": 3,
                "puerta": "C",
                "ciudad": "Valencia",
                "codigo_postal": "46002",
                "pais": "España"
            },
            "telefono": "964567810",
            "email": "cliente3@example.com",
            "fecha_registro": ISODate("2023-02-01"),
            "ventas": [
                {
                    "_id": ObjectId("70d5ec9af682fbd12a8920f9"),
                    "fecha_venta": ISODate("2023-02-10"),
                    "gafa": {
                        "_id": ObjectId("70d5ec9af682fbd12a8920fa"),
                        "marca_id": ObjectId("60d5ec9af682fbd12a8920e8"), 
                        "graduacion": {
                            "izquierdo": 0.5,
                            "derecho": 0.75
                        },
                        "tipo_montura": "flotante",
                        "color_montura": "plateado",
                        "color_vidrio": {
                            "izquierdo": "marrón",
                            "derecho": "marrón"
                        },
                        "precio": 150
                    },
                    "empleado": {
                        "_id": ObjectId("70d5ec9af682fbd12a8920fb"),
                        "nombre": "Empleado 3"
                    }
                }
            ]
        }
])