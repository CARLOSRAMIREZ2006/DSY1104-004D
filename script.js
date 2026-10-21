document.addEventListener('DOMContentLoaded', () => {

    const totalProductos = [
        {
            "id": "TT-001",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Stiga",
            "name": "Caja Pelotas Stiga Entrenamiento Blanco x120",
            "price": 43700,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 60 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-001.jpg",
            "rating": 4.2
        },
        {
            "id": "TT-002",
            "category": "pegamentos-agua",
            "tag": "Accesorios - DHS",
            "name": "Pegamento DHS VOC Free Glue No. 15 50ml",
            "price": 26100,
            "desc": "Categoría: Accesorios | Subcategoría: Pegamentos. Stock disponible: 89 uds.",
            "badge": "DHS",
            "img": "img/productos/TT-002.jpg",
            "rating": 4.8
        },
        {
            "id": "TT-003",
            "category": "gomas-joola",
            "tag": "Gomas - Joola",
            "name": "Goma Joola Rhyzm-P Negra MAX",
            "price": 46400,
            "desc": "Categoría: Gomas | Subcategoría: Lisas. Stock disponible: 49 uds.",
            "badge": "Joola",
            "img": "img/productos/TT-003.jpg",
            "rating": 4.8
        },
        {
            "id": "TT-004",
            "category": "gomas-yasaka",
            "tag": "Gomas - Yasaka",
            "name": "Goma Yasaka Rakza Z Roja MAX",
            "price": 66800,
            "desc": "Categoría: Gomas | Subcategoría: Picos Cortos. Stock disponible: 88 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-004.jpg",
            "rating": 5.0
        },
        {
            "id": "TT-005",
            "category": "maderos-stiga",
            "tag": "Maderas - Stiga",
            "name": "Madera Stiga Cybershape Carbon Ofensiva",
            "price": 240600,
            "desc": "Categoría: Maderas | Subcategoría: Ofensiva (OFF). Stock disponible: 26 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-005.jpg",
            "rating": 5.0
        },
        {
            "id": "TT-006",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Tibhar",
            "name": "Caja Pelotas Tibhar Entrenamiento Blanco x120",
            "price": 60000,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 11 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-006.jpg",
            "rating": 4.6
        },
        {
            "id": "TT-007",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Xiom",
            "name": "Zapatillas Xiom Footwork Talla 43",
            "price": 125400,
            "desc": "Categoría: Vestuario | Subcategoría: Zapatillas. Stock disponible: 51 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-007.jpg",
            "rating": 4.8
        },
        {
            "id": "TT-008",
            "category": "maderos-yasaka",
            "tag": "Maderas - Yasaka",
            "name": "Madera Yasaka Ma Lin Extra Offensive All-Round",
            "price": 198000,
            "desc": "Categoría: Maderas | Subcategoría: All-Round (ALL). Stock disponible: 95 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-008.jpg",
            "rating": 4.4
        },
        {
            "id": "TT-009",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Xiom",
            "name": "Caja Pelotas Xiom Entrenamiento Blanco x3",
            "price": 64500,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 26 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-009.jpg",
            "rating": 4.7
        },
        {
            "id": "TT-010",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Donic",
            "name": "Short Donic Azul Talla S",
            "price": 64500,
            "desc": "Categoría: Vestuario | Subcategoría: Shorts. Stock disponible: 33 uds.",
            "badge": "Donic",
            "img": "img/productos/TT-010.jpg",
            "rating": 4.2
        },
        {
            "id": "TT-011",
            "category": "accesorios-cintas",
            "tag": "Accesorios - Xiom",
            "name": "Red Xiom Profesional con Soporte",
            "price": 31800,
            "desc": "Categoría: Accesorios | Subcategoría: Redes. Stock disponible: 63 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-011.jpg",
            "rating": 4.1
        },
        {
            "id": "TT-012",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - DHS",
            "name": "Caja Pelotas DHS 3 Estrellas Blanco x120",
            "price": 57300,
            "desc": "Categoría: Pelotas | Subcategoría: 3 Estrellas. Stock disponible: 54 uds.",
            "badge": "DHS",
            "img": "img/productos/TT-012.jpg",
            "rating": 4.9
        },
        {
            "id": "TT-013",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Yasaka",
            "name": "Short Yasaka Azul Talla XL",
            "price": 47000,
            "desc": "Categoría: Vestuario | Subcategoría: Shorts. Stock disponible: 61 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-013.jpg",
            "rating": 4.8
        },
        {
            "id": "TT-014",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Butterfly",
            "name": "Caja Pelotas Butterfly 3 Estrellas Blanco x3",
            "price": 17700,
            "desc": "Categoría: Pelotas | Subcategoría: 3 Estrellas. Stock disponible: 22 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-014.jpg",
            "rating": 4.3
        },
        {
            "id": "TT-015",
            "category": "maderos-dhs",
            "tag": "Maderas - DHS",
            "name": "Madera DHS Fang Bo Carbon Ofensiva",
            "price": 177500,
            "desc": "Categoría: Maderas | Subcategoría: Ofensiva (OFF). Stock disponible: 59 uds.",
            "badge": "DHS",
            "img": "img/productos/TT-015.jpg",
            "rating": 4.8
        },
        {
            "id": "TT-016",
            "category": "accesorios-cintas",
            "tag": "Accesorios - Nittaku",
            "name": "Red Nittaku Profesional con Soporte",
            "price": 35200,
            "desc": "Categoría: Accesorios | Subcategoría: Redes. Stock disponible: 37 uds.",
            "badge": "Nittaku",
            "img": "img/productos/TT-016.jpg",
            "rating": 4.4
        },
        {
            "id": "TT-017",
            "category": "gomas-otros",
            "tag": "Gomas - Stiga",
            "name": "Goma Stiga Mantra M Roja MAX",
            "price": 79700,
            "desc": "Categoría: Gomas | Subcategoría: Lisas. Stock disponible: 95 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-017.jpg",
            "rating": 4.0
        },
        {
            "id": "TT-018",
            "category": "gomas-tibhar",
            "tag": "Gomas - Tibhar",
            "name": "Goma Tibhar Evolution MX-P Roja MAX",
            "price": 34800,
            "desc": "Categoría: Gomas | Subcategoría: Picos Cortos. Stock disponible: 43 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-018.jpg",
            "rating": 4.2
        },
        {
            "id": "TT-019",
            "category": "accesorios-fundas",
            "tag": "Accesorios - Butterfly",
            "name": "Funda Butterfly para 1 Paleta",
            "price": 16500,
            "desc": "Categoría: Accesorios | Subcategoría: Fundas. Stock disponible: 88 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-019.jpg",
            "rating": 5.0
        },
        {
            "id": "TT-020",
            "category": "mesas-competicion",
            "tag": "Mesas - Tibhar",
            "name": "Mesa de Tenis de Mesa Tibhar Smash 28 R Competición",
            "price": 1225400,
            "desc": "Categoría: Mesas | Subcategoría: Competición. Stock disponible: 1 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-020.jpg",
            "rating": 5.0
        },
        {
            "id": "TT-021",
            "category": "maderos-stiga",
            "tag": "Maderas - Stiga",
            "name": "Madera Stiga Clipper Wood Defensiva",
            "price": 190200,
            "desc": "Categoría: Maderas | Subcategoría: Defensiva (DEF). Stock disponible: 75 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-021.jpg",
            "rating": 5.0
        },
        {
            "id": "TT-022",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Stiga",
            "name": "Camiseta Stiga Negro Talla S",
            "price": 57300,
            "desc": "Categoría: Vestuario | Subcategoría: Camisetas. Stock disponible: 55 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-022.jpg",
            "rating": 5.0
        },
        {
            "id": "TT-023",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Yasaka",
            "name": "Caja Pelotas Yasaka Entrenamiento Blanco x3",
            "price": 20100,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 78 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-023.jpg",
            "rating": 4.0
        },
        {
            "id": "TT-024",
            "category": "maderos-donic",
            "tag": "Maderas - Donic",
            "name": "Madera Donic Appelgren Allplay All-Round",
            "price": 94000,
            "desc": "Categoría: Maderas | Subcategoría: All-Round (ALL). Stock disponible: 79 uds.",
            "badge": "Donic",
            "img": "img/productos/TT-024.jpg",
            "rating": 5.0
        },
        {
            "id": "TT-025",
            "category": "accesorios-cintas",
            "tag": "Vestuario - DHS",
            "name": "Zapatillas DHS Pro Shoes Talla 40",
            "price": 135400,
            "desc": "Categoría: Vestuario | Subcategoría: Zapatillas. Stock disponible: 83 uds.",
            "badge": "DHS",
            "img": "img/productos/TT-025.jpg",
            "rating": 4.0
        },
        {
            "id": "TT-026",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Butterfly",
            "name": "Caja Pelotas Butterfly Entrenamiento Naranja x120",
            "price": 40600,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 16 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-026.jpg",
            "rating": 4.9
        },
        {
            "id": "TT-027",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Butterfly",
            "name": "Caja Pelotas Butterfly Entrenamiento Blanco x120",
            "price": 18900,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 93 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-027.jpg",
            "rating": 4.7
        },
        {
            "id": "TT-028",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Donic",
            "name": "Short Donic Azul Talla M",
            "price": 35900,
            "desc": "Categoría: Vestuario | Subcategoría: Shorts. Stock disponible: 75 uds.",
            "badge": "Donic",
            "img": "img/productos/TT-028.jpg",
            "rating": 4.5
        },
        {
            "id": "TT-029",
            "category": "mesas-exterior",
            "tag": "Mesas - Stiga",
            "name": "Mesa de Tenis de Mesa Stiga Optimum 30 Exterior",
            "price": 1314900,
            "desc": "Categoría: Mesas | Subcategoría: Exterior. Stock disponible: 6 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-029.jpg",
            "rating": 4.9
        },
        {
            "id": "TT-030",
            "category": "accesorios-cintas",
            "tag": "Vestuario - DHS",
            "name": "Zapatillas DHS Pro Shoes Talla 42",
            "price": 91100,
            "desc": "Categoría: Vestuario | Subcategoría: Zapatillas. Stock disponible: 49 uds.",
            "badge": "DHS",
            "img": "img/productos/TT-030.jpg",
            "rating": 4.6
        },
        {
            "id": "TT-031",
            "category": "maderos-butterfly",
            "tag": "Maderas - Butterfly",
            "name": "Madera Butterfly Timo Boll ALC Defensiva",
            "price": 87300,
            "desc": "Categoría: Maderas | Subcategoría: Defensiva (DEF). Stock disponible: 21 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-031.jpg",
            "rating": 5.0
        },
        {
            "id": "TT-032",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Butterfly",
            "name": "Zapatillas Butterfly Lezoline Mach Talla 45",
            "price": 84500,
            "desc": "Categoría: Vestuario | Subcategoría: Zapatillas. Stock disponible: 90 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-032.jpg",
            "rating": 5.0
        },
        {
            "id": "TT-033",
            "category": "maderos-donic",
            "tag": "Maderas - Donic",
            "name": "Madera Donic Appelgren Allplay Defensiva",
            "price": 265900,
            "desc": "Categoría: Maderas | Subcategoría: Defensiva (DEF). Stock disponible: 18 uds.",
            "badge": "Donic",
            "img": "img/productos/TT-033.jpg",
            "rating": 5.0
        },
        {
            "id": "TT-034",
            "category": "accesorios-cintas",
            "tag": "Accesorios - Butterfly",
            "name": "Red Butterfly Profesional con Soporte",
            "price": 30600,
            "desc": "Categoría: Accesorios | Subcategoría: Redes. Stock disponible: 6 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-034.jpg",
            "rating": 4.5
        },
        {
            "id": "TT-035",
            "category": "mesas-competicion",
            "tag": "Mesas - Tibhar",
            "name": "Mesa de Tenis de Mesa Tibhar Normec Competición",
            "price": 1013200,
            "desc": "Categoría: Mesas | Subcategoría: Competición. Stock disponible: 8 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-035.jpg",
            "rating": 4.9
        },
        {
            "id": "TT-036",
            "category": "mesas-competicion",
            "tag": "Mesas - Tibhar",
            "name": "Mesa de Tenis de Mesa Tibhar Smash 28 R Competición",
            "price": 857800,
            "desc": "Categoría: Mesas | Subcategoría: Competición. Stock disponible: 4 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-036.jpg",
            "rating": 4.6
        },
        {
            "id": "TT-037",
            "category": "maderos-yasaka",
            "tag": "Maderas - Yasaka",
            "name": "Madera Yasaka Ma Lin Extra Offensive All-Round",
            "price": 116300,
            "desc": "Categoría: Maderas | Subcategoría: All-Round (ALL). Stock disponible: 24 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-037.jpg",
            "rating": 4.7
        },
        {
            "id": "TT-038",
            "category": "maderos-nittaku",
            "tag": "Maderas - Nittaku",
            "name": "Madera Nittaku Acoustic Defensiva",
            "price": 104600,
            "desc": "Categoría: Maderas | Subcategoría: Defensiva (DEF). Stock disponible: 81 uds.",
            "badge": "Nittaku",
            "img": "img/productos/TT-038.jpg",
            "rating": 4.1
        },
        {
            "id": "TT-039",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Xiom",
            "name": "Caja Pelotas Xiom Entrenamiento Blanco x3",
            "price": 46900,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 53 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-039.jpg",
            "rating": 4.6
        },
        {
            "id": "TT-040",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Tibhar",
            "name": "Caja Pelotas Tibhar 3 Estrellas Blanco x6",
            "price": 26800,
            "desc": "Categoría: Pelotas | Subcategoría: 3 Estrellas. Stock disponible: 42 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-040.jpg",
            "rating": 5.0
        },
        {
            "id": "TT-041",
            "category": "mesas-competicion",
            "tag": "Mesas - Yasaka",
            "name": "Mesa de Tenis de Mesa Yasaka Progress Competición",
            "price": 1078100,
            "desc": "Categoría: Mesas | Subcategoría: Competición. Stock disponible: 1 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-041.jpg",
            "rating": 4.6
        },
        {
            "id": "TT-042",
            "category": "maderos-yasaka",
            "tag": "Maderas - Yasaka",
            "name": "Madera Yasaka Alnade All-Round",
            "price": 82900,
            "desc": "Categoría: Maderas | Subcategoría: All-Round (ALL). Stock disponible: 83 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-042.jpg",
            "rating": 4.5
        },
        {
            "id": "TT-043",
            "category": "gomas-joola",
            "tag": "Gomas - Joola",
            "name": "Goma Joola Tango Negra MAX",
            "price": 81500,
            "desc": "Categoría: Gomas | Subcategoría: Picos Largos. Stock disponible: 64 uds.",
            "badge": "Joola",
            "img": "img/productos/TT-043.jpg",
            "rating": 4.0
        },
        {
            "id": "TT-044",
            "category": "mesas-exterior",
            "tag": "Mesas - Butterfly",
            "name": "Mesa de Tenis de Mesa Butterfly Space Saver 22 Exterior",
            "price": 654700,
            "desc": "Categoría: Mesas | Subcategoría: Exterior. Stock disponible: 5 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-044.jpg",
            "rating": 4.8
        },
        {
            "id": "TT-045",
            "category": "accesorios-fundas",
            "tag": "Accesorios - Nittaku",
            "name": "Funda Nittaku para 1 Paleta",
            "price": 30500,
            "desc": "Categoría: Accesorios | Subcategoría: Fundas. Stock disponible: 46 uds.",
            "badge": "Nittaku",
            "img": "img/productos/TT-045.jpg",
            "rating": 4.9
        },
        {
            "id": "TT-046",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Stiga",
            "name": "Camiseta Stiga Rojo Talla XL",
            "price": 61600,
            "desc": "Categoría: Vestuario | Subcategoría: Camisetas. Stock disponible: 57 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-046.jpg",
            "rating": 4.3
        },
        {
            "id": "TT-047",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Nittaku",
            "name": "Camiseta Nittaku Negro Talla M",
            "price": 31500,
            "desc": "Categoría: Vestuario | Subcategoría: Camisetas. Stock disponible: 15 uds.",
            "badge": "Nittaku",
            "img": "img/productos/TT-047.jpg",
            "rating": 5.0
        },
        {
            "id": "TT-048",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Donic",
            "name": "Caja Pelotas Donic 3 Estrellas Naranja x6",
            "price": 8800,
            "desc": "Categoría: Pelotas | Subcategoría: 3 Estrellas. Stock disponible: 65 uds.",
            "badge": "Donic",
            "img": "img/productos/TT-048.jpg",
            "rating": 4.0
        },
        {
            "id": "TT-049",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Joola",
            "name": "Short Joola Azul Talla L",
            "price": 58000,
            "desc": "Categoría: Vestuario | Subcategoría: Shorts. Stock disponible: 52 uds.",
            "badge": "Joola",
            "img": "img/productos/TT-049.jpg",
            "rating": 4.7
        },
        {
            "id": "TT-050",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Tibhar",
            "name": "Caja Pelotas Tibhar Entrenamiento Blanco x3",
            "price": 32700,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 73 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-050.jpg",
            "rating": 4.3
        },
        {
            "id": "TT-051",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Donic",
            "name": "Zapatillas Donic Pro Shoes Talla 45",
            "price": 110600,
            "desc": "Categoría: Vestuario | Subcategoría: Zapatillas. Stock disponible: 85 uds.",
            "badge": "Donic",
            "img": "img/productos/TT-051.jpg",
            "rating": 4.8
        },
        {
            "id": "TT-052",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Butterfly",
            "name": "Caja Pelotas Butterfly Entrenamiento Blanco x3",
            "price": 13700,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 83 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-052.jpg",
            "rating": 4.8
        },
        {
            "id": "TT-053",
            "category": "maderos-xiom",
            "tag": "Maderas - Xiom",
            "name": "Madera Xiom Ice Cream AZX Defensiva",
            "price": 113100,
            "desc": "Categoría: Maderas | Subcategoría: Defensiva (DEF). Stock disponible: 69 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-053.jpg",
            "rating": 4.5
        },
        {
            "id": "TT-054",
            "category": "mesas-competicion",
            "tag": "Mesas - Yasaka",
            "name": "Mesa de Tenis de Mesa Yasaka Progress Competición",
            "price": 1209300,
            "desc": "Categoría: Mesas | Subcategoría: Competición. Stock disponible: 8 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-054.jpg",
            "rating": 4.2
        },
        {
            "id": "TT-055",
            "category": "maderos-joola",
            "tag": "Maderas - Joola",
            "name": "Madera Joola Rossi Emotion All-Round",
            "price": 46600,
            "desc": "Categoría: Maderas | Subcategoría: All-Round (ALL). Stock disponible: 96 uds.",
            "badge": "Joola",
            "img": "img/productos/TT-055.jpg",
            "rating": 4.2
        },
        {
            "id": "TT-056",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Tibhar",
            "name": "Caja Pelotas Tibhar Entrenamiento Blanco x6",
            "price": 16600,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 87 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-056.jpg",
            "rating": 4.4
        },
        {
            "id": "TT-057",
            "category": "maderos-yasaka",
            "tag": "Maderas - Yasaka",
            "name": "Madera Yasaka Ma Lin Extra Offensive All-Round",
            "price": 90400,
            "desc": "Categoría: Maderas | Subcategoría: All-Round (ALL). Stock disponible: 98 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-057.jpg",
            "rating": 4.8
        },
        {
            "id": "TT-058",
            "category": "gomas-otros",
            "tag": "Gomas - Stiga",
            "name": "Goma Stiga Mantra M Negra 2.0mm",
            "price": 62900,
            "desc": "Categoría: Gomas | Subcategoría: Lisas. Stock disponible: 54 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-058.jpg",
            "rating": 4.8
        },
        {
            "id": "TT-059",
            "category": "limpiadores-spray",
            "tag": "Accesorios - Yasaka",
            "name": "Limpiador Yasaka de Gomas 100ml",
            "price": 11400,
            "desc": "Categoría: Accesorios | Subcategoría: Limpiadores. Stock disponible: 22 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-059.jpg",
            "rating": 4.2
        },
        {
            "id": "TT-060",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Xiom",
            "name": "Camiseta Xiom Azul Talla XL",
            "price": 43400,
            "desc": "Categoría: Vestuario | Subcategoría: Camisetas. Stock disponible: 7 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-060.jpg",
            "rating": 4.1
        },
        {
            "id": "TT-061",
            "category": "gomas-dhs",
            "tag": "Gomas - DHS",
            "name": "Goma DHS Skyline TG3 Roja MAX",
            "price": 65900,
            "desc": "Categoría: Gomas | Subcategoría: Picos Cortos. Stock disponible: 25 uds.",
            "badge": "DHS",
            "img": "img/productos/TT-061.jpg",
            "rating": 4.6
        },
        {
            "id": "TT-062",
            "category": "mesas-entrenamiento",
            "tag": "Mesas - Xiom",
            "name": "Mesa de Tenis de Mesa Xiom Pro 9 Interior",
            "price": 849200,
            "desc": "Categoría: Mesas | Subcategoría: Interior. Stock disponible: 7 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-062.jpg",
            "rating": 4.7
        },
        {
            "id": "TT-063",
            "category": "mesas-competicion",
            "tag": "Mesas - Butterfly",
            "name": "Mesa de Tenis de Mesa Butterfly Europa 25 Competición",
            "price": 1035700,
            "desc": "Categoría: Mesas | Subcategoría: Competición. Stock disponible: 7 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-063.jpg",
            "rating": 4.7
        },
        {
            "id": "TT-064",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Donic",
            "name": "Caja Pelotas Donic 3 Estrellas Naranja x120",
            "price": 59100,
            "desc": "Categoría: Pelotas | Subcategoría: 3 Estrellas. Stock disponible: 6 uds.",
            "badge": "Donic",
            "img": "img/productos/TT-064.jpg",
            "rating": 4.1
        },
        {
            "id": "TT-065",
            "category": "maderos-yasaka",
            "tag": "Maderas - Yasaka",
            "name": "Madera Yasaka Alnade All-Round",
            "price": 127400,
            "desc": "Categoría: Maderas | Subcategoría: All-Round (ALL). Stock disponible: 39 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-065.jpg",
            "rating": 4.4
        },
        {
            "id": "TT-066",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Butterfly",
            "name": "Camiseta Butterfly Negro Talla XL",
            "price": 61800,
            "desc": "Categoría: Vestuario | Subcategoría: Camisetas. Stock disponible: 8 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-066.jpg",
            "rating": 4.2
        },
        {
            "id": "TT-067",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Tibhar",
            "name": "Zapatillas Tibhar Pro Shoes Talla 41",
            "price": 114700,
            "desc": "Categoría: Vestuario | Subcategoría: Zapatillas. Stock disponible: 84 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-067.jpg",
            "rating": 4.1
        },
        {
            "id": "TT-068",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Joola",
            "name": "Zapatillas Joola Pro Shoes Talla 43",
            "price": 83000,
            "desc": "Categoría: Vestuario | Subcategoría: Zapatillas. Stock disponible: 90 uds.",
            "badge": "Joola",
            "img": "img/productos/TT-068.jpg",
            "rating": 4.2
        },
        {
            "id": "TT-069",
            "category": "accesorios-cintas",
            "tag": "Accesorios - Nittaku",
            "name": "Red Nittaku Profesional con Soporte",
            "price": 16000,
            "desc": "Categoría: Accesorios | Subcategoría: Redes. Stock disponible: 23 uds.",
            "badge": "Nittaku",
            "img": "img/productos/TT-069.jpg",
            "rating": 4.4
        },
        {
            "id": "TT-070",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Nittaku",
            "name": "Caja Pelotas Nittaku Premium 3-Star Blanco x6",
            "price": 39100,
            "desc": "Categoría: Pelotas | Subcategoría: 3 Estrellas. Stock disponible: 97 uds.",
            "badge": "Nittaku",
            "img": "img/productos/TT-070.jpg",
            "rating": 5.0
        },
        {
            "id": "TT-071",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Tibhar",
            "name": "Zapatillas Tibhar Pro Shoes Talla 42",
            "price": 156600,
            "desc": "Categoría: Vestuario | Subcategoría: Zapatillas. Stock disponible: 43 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-071.jpg",
            "rating": 4.5
        },
        {
            "id": "TT-072",
            "category": "accesorios-fundas",
            "tag": "Accesorios - Donic",
            "name": "Funda Donic para 1 Paleta",
            "price": 7700,
            "desc": "Categoría: Accesorios | Subcategoría: Fundas. Stock disponible: 84 uds.",
            "badge": "Donic",
            "img": "img/productos/TT-072.jpg",
            "rating": 5.0
        },
        {
            "id": "TT-073",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Xiom",
            "name": "Caja Pelotas Xiom Entrenamiento Naranja x120",
            "price": 45100,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 8 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-073.jpg",
            "rating": 4.1
        },
        {
            "id": "TT-074",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Yasaka",
            "name": "Camiseta Yasaka Rojo Talla L",
            "price": 47100,
            "desc": "Categoría: Vestuario | Subcategoría: Camisetas. Stock disponible: 59 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-074.jpg",
            "rating": 4.7
        },
        {
            "id": "TT-075",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Stiga",
            "name": "Camiseta Stiga Negro Talla S",
            "price": 29800,
            "desc": "Categoría: Vestuario | Subcategoría: Camisetas. Stock disponible: 30 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-075.jpg",
            "rating": 4.5
        },
        {
            "id": "TT-076",
            "category": "limpiadores-spray",
            "tag": "Accesorios - Butterfly",
            "name": "Limpiador Butterfly de Gomas 100ml",
            "price": 28600,
            "desc": "Categoría: Accesorios | Subcategoría: Limpiadores. Stock disponible: 80 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-076.jpg",
            "rating": 4.9
        },
        {
            "id": "TT-077",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - DHS",
            "name": "Caja Pelotas DHS 3 Estrellas Naranja x6",
            "price": 46000,
            "desc": "Categoría: Pelotas | Subcategoría: 3 Estrellas. Stock disponible: 79 uds.",
            "badge": "DHS",
            "img": "img/productos/TT-077.jpg",
            "rating": 4.9
        },
        {
            "id": "TT-078",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Xiom",
            "name": "Short Xiom Azul Talla M",
            "price": 26500,
            "desc": "Categoría: Vestuario | Subcategoría: Shorts. Stock disponible: 63 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-078.jpg",
            "rating": 5.0
        },
        {
            "id": "TT-079",
            "category": "maderos-joola",
            "tag": "Maderas - Joola",
            "name": "Madera Joola Santoru Ofensiva",
            "price": 272800,
            "desc": "Categoría: Maderas | Subcategoría: Ofensiva (OFF). Stock disponible: 100 uds.",
            "badge": "Joola",
            "img": "img/productos/TT-079.jpg",
            "rating": 4.0
        },
        {
            "id": "TT-080",
            "category": "maderos-xiom",
            "tag": "Maderas - Xiom",
            "name": "Madera Xiom Stradivarius All-Round",
            "price": 219400,
            "desc": "Categoría: Maderas | Subcategoría: All-Round (ALL). Stock disponible: 18 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-080.jpg",
            "rating": 4.1
        }
    ];

    const productsGrid = document.getElementById('productsGrid');
    const catalogTitle = document.getElementById('catalogTitle');
    const catalogCount = document.getElementById('catalogCount');

    // =========================================
    // FAVORITOS (se guardan en este navegador; sirven aunque no tengas cuenta)
    // =========================================
    const CLAVE_FAVORITOS = 'favoritosProSpin';
    function cargarFavoritos() {
        try {
            const lista = JSON.parse(localStorage.getItem(CLAVE_FAVORITOS));
            return Array.isArray(lista) ? lista.filter(id => typeof id === 'string') : [];
        } catch (e) { return []; }
    }
    let favoritos = cargarFavoritos();
    let soloFavoritos = false;

    function favoritosValidos() { return favoritos.filter(id => totalProductos.some(p => p.id === id)); }

    function pintarCorazon(btn, activo) {
        btn.classList.toggle('is-fav', activo);
        btn.setAttribute('aria-pressed', activo ? 'true' : 'false');
        btn.setAttribute('aria-label', activo ? 'Quitar de favoritos' : 'Agregar a favoritos');
        btn.innerHTML = activo ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';
    }
    function sincronizarCorazones() {
        document.querySelectorAll('.btn-fav').forEach(btn => pintarCorazon(btn, favoritos.includes(btn.dataset.id)));
    }
    // Devuelve true si el producto quedó como favorito
    function alternarFavorito(id) {
        const i = favoritos.indexOf(id);
        if (i === -1) favoritos.push(id); else favoritos.splice(i, 1);
        try { localStorage.setItem(CLAVE_FAVORITOS, JSON.stringify(favoritos)); } catch (e) {}
        return i === -1;
    }
    function actualizarContadoresFavoritos() {
        const n = favoritosValidos().length;
        const contadorFiltro = document.getElementById('favCount');
        if (contadorFiltro) { contadorFiltro.textContent = n; contadorFiltro.hidden = n === 0; }
        const contadorPestana = document.getElementById('favTabCount');
        if (contadorPestana) { contadorPestana.textContent = n; contadorPestana.hidden = n === 0; }
        renderFavoritosPerfil();
    }

    if (productsGrid) {
        productsGrid.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-fav');
            if (!btn) return;
            const ahoraEsFavorito = alternarFavorito(btn.dataset.id);
            if (soloFavoritos && !ahoraEsFavorito) applyAllFilters();
            else pintarCorazon(btn, ahoraEsFavorito);
            actualizarContadoresFavoritos();
            showToast(ahoraEsFavorito ? 'Guardado en favoritos' : 'Quitado de favoritos');
        });
    }

    // Paginación: se muestran 12 productos y el resto con "Ver más"
    const PRODUCTOS_POR_PAGINA = 12;
    const STOCK_BAJO = 5; // con este stock o menos, la tarjeta avisa "Quedan N"
    let productosActuales = [];
    let productosVisibles = PRODUCTOS_POR_PAGINA;
    const loadMoreWrap = document.getElementById('loadMoreWrap');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    // El stock viene dentro del texto de la descripción ("... Stock disponible: 88 uds.")
    function stockDe(prod) {
        const m = /Stock disponible:\s*(\d+)/.exec(prod.desc || '');
        return m ? parseInt(m[1], 10) : null;
    }

    function renderProducts(items, mantenerVisibles) {
        if (!productsGrid) return;
        productosActuales = items;
        if (!mantenerVisibles) productosVisibles = PRODUCTOS_POR_PAGINA;
        productsGrid.innerHTML = '';

        if (items.length === 0) {
            const vacio = document.createElement('p');
            vacio.style.cssText = 'grid-column: 1/-1; text-align: center; padding: 2rem; color: #64748b;';
            const terminoActual = terminoBusqueda();
            vacio.textContent = terminoActual
                ? `No encontramos productos para "${terminoActual}". Prueba con otra palabra o revisa los filtros activos.`
                : (soloFavoritos
                    ? 'Aún no tienes favoritos aquí. Toca el corazón de un producto para guardarlo.'
                    : 'No hay productos disponibles en esta categoría actualmente.');
            productsGrid.appendChild(vacio);
            if (catalogCount) catalogCount.textContent = '0 productos encontrados.';
            if (loadMoreWrap) loadMoreWrap.hidden = true;
            return;
        }

        const visibles = items.slice(0, productosVisibles);
        const restantes = items.length - visibles.length;

        if (catalogCount) {
            catalogCount.textContent = restantes > 0
                ? `Mostrando ${visibles.length} de ${items.length} productos.`
                : `Mostrando ${items.length} productos en catálogo.`;
        }

        visibles.forEach(prod => {
            const article = document.createElement('article');
            article.className = 'card';
            article.dataset.category = prod.category;

            const stock = stockDe(prod);
            const esFav = favoritos.includes(prod.id);
            const avisoStock = (stock !== null && stock <= STOCK_BAJO)
                ? `<span class="card-stock">${stock === 1 ? 'Última unidad' : 'Quedan ' + stock}</span>`
                : '';

            article.innerHTML = `
                <div class="card-badge">${prod.badge}</div>
                ${avisoStock}
                <div class="card-image">
                    <img src="${prod.img}" alt="${prod.name}" loading="lazy">
                    <button type="button" class="btn-fav${esFav ? ' is-fav' : ''}" data-id="${prod.id}" aria-pressed="${esFav}" aria-label="${esFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}"><i class="${esFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i></button>
                </div>
                <div class="card-body">
                    <h3>${prod.name}</h3>
                    <div class="card-footer">
                        <span class="price">$${prod.price.toLocaleString('es-CL')}</span>
                        <div style="display: flex; gap: 5px;">
                            <button class="btn btn-outline-sm btn-view-detail" data-id="${prod.id}" aria-label="Ver detalle" style="padding: 8px; color: var(--primary); border-color: var(--primary);"><i class="fa-solid fa-eye"></i></button>
                            <button class="btn btn-primary btn-add-cart" data-id="${prod.id}" data-name="${prod.name}" data-price="${prod.price}"><i class="fa-solid fa-cart-shopping"></i> Añadir</button>
                        </div>
                    </div>
                </div>
            `;
            productsGrid.appendChild(article);
        });

        if (loadMoreWrap) {
            loadMoreWrap.hidden = restantes <= 0;
            if (loadMoreBtn) loadMoreBtn.textContent = `Ver más productos (${restantes} restantes)`;
        }

        attachCartEvents();
        attachModalEvents(); 
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            productosVisibles += PRODUCTOS_POR_PAGINA;
            renderProducts(productosActuales, true);
        });
    }

    // LÓGICA DE FILTROS
    let currentCategory = 'all-intro';
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const sortOrderSelect = document.getElementById('sortOrder');
    const applyPriceBtn = document.getElementById('applyPriceBtn');
    const clearPriceBtn = document.getElementById('clearPriceBtn');
    const searchInput = document.getElementById('searchInput');
    const searchClearBtn = document.getElementById('searchClearBtn');

    // Búsqueda sin distinguir mayúsculas ni tildes ("goma" encuentra "Goma", "pelotas" encuentra "Pélotas")
    const normalizar = (t) => (t || '').toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    function terminoBusqueda() { return searchInput ? searchInput.value.trim() : ''; }

    // El título refleja la categoría elegida y/o la búsqueda
    function actualizarTitulo() {
        if (!catalogTitle) return;
        const termino = terminoBusqueda();
        if (soloFavoritos) {
            catalogTitle.textContent = termino ? `Mis favoritos · Resultados para "${termino}"` : 'Mis favoritos';
            return;
        }
        const activo = document.querySelector('.filter-link.active, .sidebar-link.active');
        const enCategoria = activo && activo.dataset.filter && activo.dataset.filter !== 'all-intro';
        if (termino && enCategoria) catalogTitle.textContent = `Resultados para "${termino}" en "${activo.textContent.trim()}"`;
        else if (termino) catalogTitle.textContent = `Resultados para "${termino}"`;
        else if (enCategoria) catalogTitle.textContent = `Productos en "${activo.textContent.trim()}"`;
        else catalogTitle.textContent = 'Catálogo Completo de Productos';
    }

    function applyAllFilters() {
        let filteredProducts = totalProductos;

        if (currentCategory !== 'all-intro') {
            filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
        }

        const minPrice = minPriceInput ? (parseInt(minPriceInput.value) || 0) : 0;
        const maxPrice = maxPriceInput ? (parseInt(maxPriceInput.value) || Infinity) : Infinity;
        
        filteredProducts = filteredProducts.filter(p => p.price >= minPrice && p.price <= maxPrice);

        if (soloFavoritos) filteredProducts = filteredProducts.filter(p => favoritos.includes(p.id));

        // Buscador: todas las palabras escritas deben aparecer en nombre, marca o categoría
        const palabras = normalizar(terminoBusqueda()).split(/\s+/).filter(Boolean);
        if (palabras.length) {
            filteredProducts = filteredProducts.filter(p => {
                const texto = normalizar([p.name, p.badge, p.tag, (p.desc || '').replace(/Stock disponible:.*$/, '')].join(' '));
                return palabras.every(w => texto.includes(w));
            });
        }

        if (sortOrderSelect) {
            const sortVal = sortOrderSelect.value;
            if (sortVal === 'price-asc') {
                filteredProducts.sort((a, b) => a.price - b.price);
            } else if (sortVal === 'price-desc') {
                filteredProducts.sort((a, b) => b.price - a.price);
            } else if (sortVal === 'name-asc') {
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sortVal === 'name-desc') {
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            } else if (sortVal === 'default') {
                filteredProducts.sort((a, b) => a.id.localeCompare(b.id)); 
            }
        }

        renderProducts(filteredProducts);
    }

    const filterLinks = document.querySelectorAll('.filter-link, .sidebar-link');
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const filter = link.dataset.filter;
            if (!filter) return;

            filterLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            actualizarTitulo();

            currentCategory = filter; 
            applyAllFilters();        
        });
    });

    function alBuscar() {
        if (searchClearBtn) searchClearBtn.hidden = terminoBusqueda() === '';
        actualizarTitulo();
        applyAllFilters();
    }
    if (searchInput) {
        searchInput.addEventListener('input', alBuscar);
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchInput.value) { searchInput.value = ''; alBuscar(); }
        });
    }
    if (searchClearBtn) {
        searchClearBtn.addEventListener('click', () => { searchInput.value = ''; alBuscar(); searchInput.focus(); });
    }

    const favFilterBtn = document.getElementById('favFilterBtn');
    if (favFilterBtn) {
        favFilterBtn.addEventListener('click', () => {
            soloFavoritos = !soloFavoritos;
            favFilterBtn.classList.toggle('is-active', soloFavoritos);
            favFilterBtn.setAttribute('aria-pressed', soloFavoritos ? 'true' : 'false');
            const icono = favFilterBtn.querySelector('i');
            if (icono) icono.className = soloFavoritos ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
            actualizarTitulo();
            applyAllFilters();
        });
    }

    if (applyPriceBtn) applyPriceBtn.addEventListener('click', applyAllFilters);
    if (sortOrderSelect) sortOrderSelect.addEventListener('change', applyAllFilters);
    if (clearPriceBtn) {
        clearPriceBtn.addEventListener('click', () => {
            if (minPriceInput) minPriceInput.value = '';
            if (maxPriceInput) maxPriceInput.value = '';
            applyAllFilters();
        });
    }

    // LÓGICA DE CARRITO
    let cart = JSON.parse(localStorage.getItem('cartProSpin')) || [];
    const cartBtn = document.getElementById('cartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartCount = document.getElementById('cartCount');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartTotal = document.getElementById('cartTotal');
    const toast = document.getElementById('toast');

    function toggleCart(open) {
        if (cartDrawer) cartDrawer.classList.toggle('active', open);
        if (cartOverlay) cartOverlay.classList.toggle('active', open);
    }

    if (cartBtn) cartBtn.addEventListener('click', () => toggleCart(true));
    if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCart(false));
    if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCart(false));

    function showToast(msg) {
        if (!toast) return;
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    function updateCart() {
        localStorage.setItem('cartProSpin', JSON.stringify(cart));

        if (cartCount) cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (!cartItemsContainer) return;
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align:center; color:#64748b; padding:2rem 0;"><i class="fa-solid fa-basket-shopping" style="font-size: 2rem; margin-bottom: 10px; color: #cbd5e1; display:block;"></i> Tu carrito está vacío</p>';
            if (cartTotal) cartTotal.textContent = '$0';
            return;
        }

        let total = 0;
        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div class="cart-item-header">
                    <div class="cart-item-title">${item.name}</div>
                    <button class="btn-remove-item" data-index="${index}" title="Eliminar Producto">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="btn-qty btn-minus" data-index="${index}">-</button>
                        <span class="item-qty">${item.quantity}</span>
                        <button class="btn-qty btn-plus" data-index="${index}">+</button>
                    </div>
                    <div class="item-subtotal">$${(item.price * item.quantity).toLocaleString('es-CL')}</div>
                </div>
            `;
            cartItemsContainer.appendChild(div);
        });

        if (cartTotal) cartTotal.textContent = '$' + total.toLocaleString('es-CL');
        attachCartItemEvents();
    }

    function attachCartItemEvents() {
        document.querySelectorAll('.btn-remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.currentTarget.dataset.index;
                cart.splice(index, 1);
                updateCart();
            });
        });

        document.querySelectorAll('.btn-minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.currentTarget.dataset.index;
                if (cart[index].quantity > 1) {
                    cart[index].quantity -= 1;
                } else {
                    cart.splice(index, 1);
                }
                updateCart();
            });
        });

        document.querySelectorAll('.btn-plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.currentTarget.dataset.index;
                cart[index].quantity += 1;
                updateCart();
            });
        });
    }

    function attachCartEvents() {
        document.querySelectorAll('.btn-add-cart').forEach(btn => {
            btn.onclick = () => {
                const id = btn.dataset.id;
                const name = btn.dataset.name;
                const price = parseInt(btn.dataset.price);

                const exist = cart.find(i => i.id === id);
                if (exist) {
                    exist.quantity += 1;
                } else {
                    cart.push({ id, name, price, quantity: 1 });
                }

                updateCart();
                showToast(`¡Añadido: ${name}!`);
            };
        });
    }

    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            cart = [];
            updateCart();
            showToast('Carrito vaciado');
        });
    }

    // =========================================
    // PROCESO DE COMPRA (CHECKOUT)
    // =========================================
    const miBotonCheckout = document.getElementById('checkoutBtn');
    const modalCheckout = document.getElementById('checkoutModal');
    const closeCheckoutBtn = document.querySelector('.close-checkout');
    const formCheckout = document.getElementById('checkoutForm');

    // 1. Abrir Modal de Checkout
    if (miBotonCheckout) {
        miBotonCheckout.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast('El carrito está vacío');
                return;
            }
            toggleCart(false); // Cierra el drawer del carrito
            prepararCheckout(); // Rellena con los datos del perfil
            if (modalCheckout) {
                modalCheckout.classList.add('active'); // Muestra el modal agregando la clase activa
            } else {
                console.error("No se encontró #checkoutModal en el HTML");
            }
        });
    }

    // 2. Cerrar Modal de Checkout (con la X o haciendo clic fuera)
    if (closeCheckoutBtn && modalCheckout) {
        closeCheckoutBtn.addEventListener('click', () => {
            modalCheckout.classList.remove('active');
        });
    }

    if (modalCheckout) {
        modalCheckout.addEventListener('click', (e) => {
            if (e.target === modalCheckout) {
                modalCheckout.classList.remove('active');
            }
        });
    }

    // 3. Envío del formulario: crea la transacción en el servidor y redirige a Webpay Plus
    const CLAVE_PEDIDO_PENDIENTE = 'pedidoPendienteProSpin';

    if (formCheckout) {
        formCheckout.addEventListener('submit', async function(e) {
            e.preventDefault();

            const btnSubmit = document.getElementById('btnConfirmarPedido');
            const textoBoton = 'Pagar con Webpay';
            if (btnSubmit) {
                btnSubmit.textContent = "Conectando con Webpay...";
                btnSubmit.disabled = true;
            }

            const numeroPedido = generarNumeroPedido();
            const datos = {
                nombre: valorCampo('chkName'),
                email: valorCampo('chkEmail'),
                telefono: valorCampo('chkPhone'),
                direccion: valorCampo('chkAddress'),
                comuna: valorCampo('chkComuna'),
                guardarPerfil: !!(document.getElementById('chkSaveProfile') && document.getElementById('chkSaveProfile').checked)
            };

            try {
                const resp = await fetch('/api/webpay/crear', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        numeroPedido: numeroPedido,
                        items: cart.map(p => ({ id: p.id, quantity: p.quantity }))
                    })
                });
                const pago = await resp.json();
                if (!resp.ok || !pago.url || !pago.token) throw new Error(pago.error || 'Respuesta inválida');

                // Se guarda el pedido para completarlo cuando Webpay devuelva al cliente a la tienda
                localStorage.setItem(CLAVE_PEDIDO_PENDIENTE, JSON.stringify({
                    numeroPedido: numeroPedido,
                    fecha: new Date().toISOString(),
                    cart: cart,
                    datos: datos
                }));

                // Webpay exige enviar el token por POST (campo token_ws)
                const f = document.createElement('form');
                f.method = 'POST';
                f.action = pago.url;
                const campo = document.createElement('input');
                campo.type = 'hidden'; campo.name = 'token_ws'; campo.value = pago.token;
                f.appendChild(campo);
                document.body.appendChild(f);
                f.submit();
            } catch (error) {
                console.error('Error Webpay:', error);
                alert('No se pudo iniciar el pago con Webpay. Verifica que el servidor esté corriendo (npm start) e inténtalo de nuevo.');
                if (btnSubmit) {
                    btnSubmit.textContent = textoBoton;
                    btnSubmit.disabled = false;
                }
            }
        });
    }

    // 4. Al volver desde Webpay: la URL trae ?pago=ok|rechazado|cancelado|error
    const TIPOS_PAGO = { VD: 'Débito', VN: 'Crédito', VC: 'Crédito en cuotas', SI: 'Crédito en cuotas', S2: 'Crédito en cuotas', NC: 'Crédito en cuotas', VP: 'Prepago' };

    function mostrarResultadoPago(cfg) {
        const modal = document.getElementById('payResultModal');
        if (!modal) { alert(cfg.titulo + '\n' + cfg.mensaje); return; }
        const caja = modal.querySelector('.pay-result');
        caja.classList.remove('is-ok', 'is-error', 'is-warning');
        caja.classList.add('is-' + cfg.tipo);
        document.querySelector('#payResultIcon i').className =
            cfg.tipo === 'ok' ? 'fa-solid fa-check' : (cfg.tipo === 'error' ? 'fa-solid fa-xmark' : 'fa-solid fa-triangle-exclamation');
        document.getElementById('payResultTitle').textContent = cfg.titulo;
        document.getElementById('payResultMsg').textContent = cfg.mensaje;

        const recibo = document.getElementById('payResultReceipt');
        recibo.textContent = '';
        (cfg.filas || []).forEach(function (f) {
            const fila = document.createElement('div');
            fila.className = 'pay-result-row' + (f.total ? ' total' : '');
            const k = document.createElement('span'); k.textContent = f.k;
            const v = document.createElement('strong'); v.textContent = f.v;
            fila.appendChild(k); fila.appendChild(v);
            recibo.appendChild(fila);
        });
        recibo.hidden = !(cfg.filas && cfg.filas.length);

        const lista = document.getElementById('payResultItems');
        lista.textContent = '';
        (cfg.items || []).forEach(function (p) {
            const li = document.createElement('li');
            const nombre = document.createElement('span'); nombre.textContent = p.quantity + ' × ' + p.name;
            const precio = document.createElement('b'); precio.textContent = dinero(p.price * p.quantity);
            li.appendChild(nombre); li.appendChild(precio);
            lista.appendChild(li);
        });
        lista.hidden = !(cfg.items && cfg.items.length);

        const correo = document.getElementById('payResultMail');
        correo.hidden = !cfg.correo;
        if (cfg.correo) correo.querySelector('span').textContent = 'Enviamos el comprobante a ' + cfg.correo;

        document.getElementById('payResultBtn').textContent = cfg.boton || 'Seguir comprando';
        modal.classList.add('active');
    }

    (function () {
        const modal = document.getElementById('payResultModal');
        if (!modal) return;
        const cerrar = () => modal.classList.remove('active');
        const x = document.getElementById('payResultClose');
        const btn = document.getElementById('payResultBtn');
        if (x) x.addEventListener('click', cerrar);
        if (btn) btn.addEventListener('click', cerrar);
        modal.addEventListener('click', e => { if (e.target === modal) cerrar(); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrar(); });
    })();

    function manejarRetornoWebpay() {
        const params = new URLSearchParams(location.search);
        const estado = params.get('pago');
        if (!estado) return;
        history.replaceState(null, '', location.pathname); // limpia la URL

        let pendiente = null;
        try { pendiente = JSON.parse(localStorage.getItem(CLAVE_PEDIDO_PENDIENTE)); } catch (e) {}

        if (estado === 'ok' && pendiente) {
            const tarjeta = params.get('tarjeta');
            const tarjetaTxt = tarjeta ? '**** ' + tarjeta.slice(-4) : '';
            const items = (pendiente.cart || []).slice();
            const montoServidor = parseInt(params.get('monto'), 10);
            const monto = montoServidor > 0 ? montoServidor : items.reduce((a, p) => a + p.price * p.quantity, 0);

            finalizarPedidoPagado(pendiente, {
                codigoAutorizacion: params.get('auth') || '',
                tarjeta: tarjetaTxt
            });
            localStorage.removeItem(CLAVE_PEDIDO_PENDIENTE);

            const filas = [
                { k: 'N° de pedido', v: pendiente.numeroPedido },
                { k: 'Fecha', v: formatearFechaPedido(new Date(pendiente.fecha || Date.now())) }
            ];
            if (TIPOS_PAGO[params.get('tipo')]) filas.push({ k: 'Tipo de pago', v: TIPOS_PAGO[params.get('tipo')] });
            if (tarjetaTxt) filas.push({ k: 'Tarjeta', v: tarjetaTxt });
            if (params.get('auth')) filas.push({ k: 'Código de autorización', v: params.get('auth') });
            filas.push({ k: 'Total pagado', v: dinero(monto), total: true });

            mostrarResultadoPago({
                tipo: 'ok',
                titulo: '¡Pago aprobado!',
                mensaje: 'Gracias por tu compra' + (pendiente.datos && pendiente.datos.nombre ? ', ' + pendiente.datos.nombre.split(' ')[0] : '') + '. Estamos preparando tu pedido.',
                filas: filas,
                items: items,
                correo: pendiente.datos && pendiente.datos.email
            });
        } else if (estado === 'rechazado') {
            localStorage.removeItem(CLAVE_PEDIDO_PENDIENTE);
            mostrarResultadoPago({
                tipo: 'error',
                titulo: 'Pago rechazado',
                mensaje: 'El banco no autorizó el pago. No se hizo ningún cobro y tu carrito sigue guardado: puedes intentarlo de nuevo con otra tarjeta.',
                boton: 'Volver a la tienda'
            });
        } else if (estado === 'cancelado') {
            localStorage.removeItem(CLAVE_PEDIDO_PENDIENTE);
            mostrarResultadoPago({
                tipo: 'warning',
                titulo: 'Pago cancelado',
                mensaje: 'Anulaste la compra en Webpay. No se hizo ningún cobro y tu carrito sigue guardado.',
                boton: 'Volver a la tienda'
            });
        } else {
            mostrarResultadoPago({
                tipo: 'error',
                titulo: 'No pudimos confirmar el pago',
                mensaje: 'Ocurrió un problema al confirmar con Webpay. Tu carrito sigue guardado; inténtalo nuevamente.',
                boton: 'Volver a la tienda'
            });
        }
    }

    // Envía el correo, guarda el pedido en el historial y vacía el carrito (solo si el pago fue aprobado)
    function finalizarPedidoPagado(pend, pago) {
        const items = pend.cart || [];
        const d = pend.datos || {};
        const totalPagar = items.reduce((acc, p) => acc + (p.price * p.quantity), 0);
        const unidades = items.reduce((acc, p) => acc + p.quantity, 0);

        const templateParams = {
            nombre_cliente: d.nombre || '',
            email_cliente: d.email || '',
            telefono_cliente: d.telefono || '',
            direccion_cliente: [d.direccion, d.comuna].filter(Boolean).join(', '),
            resumen_pedido: items.map(p => `- ${p.name} (Cantidad: ${p.quantity}) - $${(p.price * p.quantity).toLocaleString('es-CL')}`).join('\n'),
            total_pagar: `$${totalPagar.toLocaleString('es-CL')}`,
            numero_pedido: pend.numeroPedido,
            fecha_pedido: formatearFechaPedido(new Date(pend.fecha || Date.now())),
            primer_nombre: (d.nombre || '').split(' ')[0],
            cantidad_productos: `${unidades} producto${unidades === 1 ? '' : 's'}`,
            resumen_html: construirResumenHtml(items),
            codigo_autorizacion: pago.codigoAutorizacion,
            tarjeta: pago.tarjeta
        };

        registrarPedidoCompletado(pend.numeroPedido, items, d);

        cart = [];
        localStorage.removeItem('cartProSpin');
        updateCart();
        if (modalCheckout) modalCheckout.classList.remove('active');
        if (formCheckout) formCheckout.reset();

        if (typeof emailjs !== 'undefined') {
            emailjs.send("service_0qz74yq", "template_g8rxayt", templateParams)
                .then(function() {}, function(error) { console.error("Error EmailJS:", error); });
        }
    }

    // REGISTRO Y PERFIL DE USUARIO
    const registerModalOverlay = document.getElementById('registerModalOverlay');
    const sidebarRegisterLink = document.getElementById('sidebarRegisterLink');
    const closeRegisterBtn = document.getElementById('closeRegisterBtn');

    // Vistas del modal de registro: elegir tipo / institucional / personal
    const vistasRegistro = {
        elegir: 'registerChoiceView',
        institucional: 'registerInstitutionalView',
        personal: 'registerPersonalView'
    };
    function mostrarVistaRegistro(nombreVista) {
        Object.keys(vistasRegistro).forEach(function (clave) {
            const el = document.getElementById(vistasRegistro[clave]);
            if (el) el.classList.toggle('active', clave === nombreVista);
        });
    }

    function toggleRegisterModal(show) {
        if (!registerModalOverlay) return;
        if (show) {
            mostrarVistaRegistro('elegir');
            registerModalOverlay.classList.add('active');
        } else {
            registerModalOverlay.classList.remove('active');
        }
    }

    if (sidebarRegisterLink) {
        sidebarRegisterLink.addEventListener('click', (e) => {
            e.preventDefault();
            toggleRegisterModal(true);
        });
    }
    if (closeRegisterBtn) closeRegisterBtn.addEventListener('click', () => toggleRegisterModal(false));
    
    if (registerModalOverlay) {
        registerModalOverlay.addEventListener('click', (e) => {
            if (e.target === registerModalOverlay) toggleRegisterModal(false);
        });
    }

    const togglePasswordBtn = document.getElementById('togglePasswordBtn');
    const passwordInput = document.getElementById('password');
    if (togglePasswordBtn && passwordInput) {
        togglePasswordBtn.addEventListener('click', () => {
            const isPass = passwordInput.type === 'password';
            passwordInput.type = isPass ? 'text' : 'password';
        });
    }

    const registerForm = document.getElementById('registerForm');
    const loginBtn = document.getElementById('loginBtn');
    let currentUser = null;
    const etiquetasTipoCliente = {
        club: 'Club Deportivo',
        colegio: 'Colegio / Institución Educativa',
        entrenador: 'Entrenador Independiente',
        institucion: 'Otra institución',
        particular: 'Jugador Particular',
        aficionado: 'Aficionado'
    };

    // Datos del perfil (todos opcionales salvo nombre, correo y tipo)
    const NIVELES_JUEGO = { principiante: 'Principiante', intermedio: 'Intermedio', avanzado: 'Avanzado' };
    const ESTILOS_JUEGO = { ofensivo: 'Ofensivo', defensivo: 'Defensivo', todoterreno: 'Todoterreno' };
    const TIPOS_INSTITUCION = ['club', 'colegio', 'entrenador', 'institucion'];
    const CAMPOS_TEXTO_PERFIL = ['telefono', 'comuna', 'direccion', 'razonSocial', 'rut'];
    function esInstitucion(estilo) { return TIPOS_INSTITUCION.includes(estilo); }

    // La sesión se recuerda en este navegador (nombre, correo, tipo y datos del perfil; NUNCA la contraseña)
    const CLAVE_SESION = 'sessionProSpin';
    function cargarSesionGuardada() {
        try {
            const datos = JSON.parse(localStorage.getItem(CLAVE_SESION));
            if (datos && typeof datos.nombre === 'string' && datos.nombre.trim() &&
                typeof datos.email === 'string' && datos.email.includes('@') &&
                Object.prototype.hasOwnProperty.call(etiquetasTipoCliente, datos.estilo)) {
                const usuario = { nombre: datos.nombre, email: datos.email, estilo: datos.estilo };
                CAMPOS_TEXTO_PERFIL.forEach(campo => {
                    if (typeof datos[campo] === 'string' && datos[campo].trim()) usuario[campo] = datos[campo].slice(0, 120);
                });
                if (Object.prototype.hasOwnProperty.call(NIVELES_JUEGO, datos.nivel)) usuario.nivel = datos.nivel;
                if (Object.prototype.hasOwnProperty.call(ESTILOS_JUEGO, datos.estiloJuego)) usuario.estiloJuego = datos.estiloJuego;
                return usuario;
            }
        } catch (e) {}
        return null;
    }
    currentUser = cargarSesionGuardada();

    const emailInput = document.getElementById('email');
    const errorEmail = document.getElementById('errorEmail');

    if (emailInput && errorEmail) {
        emailInput.addEventListener('blur', () => {
            const emailValue = emailInput.value.trim();
            if (emailValue.length > 0 && !emailValue.includes('@')) {
                errorEmail.textContent = 'El correo electrónico debe incluir un "@"';
                emailInput.style.borderColor = 'var(--accent)';
            } else if (emailValue.length > 0) {
                errorEmail.textContent = '';
                emailInput.style.borderColor = 'var(--border-color)';
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
            
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const estilo = document.getElementById('estilo').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            let valid = true;

            if (!nombre || nombre.length < 3) { 
                document.getElementById('errorNombre').textContent = 'El nombre debe tener al menos 3 caracteres'; 
                valid = false; 
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) { 
                document.getElementById('errorEmail').textContent = 'Ingresa un correo electrónico válido'; 
                valid = false; 
            }
            
            if (!estilo) { 
                document.getElementById('errorEstilo').textContent = 'Selecciona un tipo de cliente'; 
                valid = false; 
            }
            
            if (!password || password.length < 6) { 
                document.getElementById('errorPassword').textContent = 'Mínimo 6 caracteres requeridos'; 
                valid = false; 
            }
            
            if (password !== confirmPassword) { 
                document.getElementById('errorConfirmPassword').textContent = 'Las contraseñas no coinciden'; 
                valid = false; 
            }

            if (valid) {
                currentUser = { nombre, email, estilo };
                showToast('¡Registro exitoso! Sesión iniciada.');
                registerForm.reset();
                toggleRegisterModal(false);
                actualizarEstadoSesion();
            }
        });
    }

    // Elegir tipo de registro y volver
    const chooseInstitutionalBtn = document.getElementById('chooseInstitutionalBtn');
    const choosePersonalBtn = document.getElementById('choosePersonalBtn');
    if (chooseInstitutionalBtn) chooseInstitutionalBtn.addEventListener('click', () => {
        mostrarVistaRegistro('institucional');
        const campo = document.getElementById('nombre'); if (campo) campo.focus();
    });
    if (choosePersonalBtn) choosePersonalBtn.addEventListener('click', () => {
        mostrarVistaRegistro('personal');
        const campo = document.getElementById('personalNombre'); if (campo) campo.focus();
    });
    document.querySelectorAll('[data-register-back]').forEach(btn => {
        btn.addEventListener('click', () => mostrarVistaRegistro('elegir'));
    });

    // Registro personal (jugadores particulares y aficionados)
    const togglePersonalPasswordBtn = document.getElementById('togglePersonalPasswordBtn');
    const personalPasswordInput = document.getElementById('personalPassword');
    if (togglePersonalPasswordBtn && personalPasswordInput) {
        togglePersonalPasswordBtn.addEventListener('click', () => {
            personalPasswordInput.type = personalPasswordInput.type === 'password' ? 'text' : 'password';
        });
    }

    const personalEmailInput = document.getElementById('personalEmail');
    const errorPersonalEmail = document.getElementById('errorPersonalEmail');
    if (personalEmailInput && errorPersonalEmail) {
        personalEmailInput.addEventListener('blur', () => {
            const valor = personalEmailInput.value.trim();
            if (valor.length > 0 && !valor.includes('@')) {
                errorPersonalEmail.textContent = 'El correo electrónico debe incluir un "@"';
                personalEmailInput.style.borderColor = 'var(--accent)';
            } else if (valor.length > 0) {
                errorPersonalEmail.textContent = '';
                personalEmailInput.style.borderColor = 'var(--border-color)';
            }
        });
    }

    const registerPersonalForm = document.getElementById('registerPersonalForm');
    if (registerPersonalForm) {
        registerPersonalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

            const nombre = document.getElementById('personalNombre').value.trim();
            const email = document.getElementById('personalEmail').value.trim();
            const estilo = document.getElementById('personalTipo').value;
            const password = document.getElementById('personalPassword').value;
            const confirmPassword = document.getElementById('personalConfirmPassword').value;

            let valid = true;

            if (!nombre || nombre.length < 3) {
                document.getElementById('errorPersonalNombre').textContent = 'El nombre debe tener al menos 3 caracteres';
                valid = false;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                document.getElementById('errorPersonalEmail').textContent = 'Ingresa un correo electrónico válido';
                valid = false;
            }
            if (!estilo) {
                document.getElementById('errorPersonalTipo').textContent = 'Cuéntanos cómo juegas';
                valid = false;
            }
            if (!password || password.length < 6) {
                document.getElementById('errorPersonalPassword').textContent = 'Mínimo 6 caracteres requeridos';
                valid = false;
            }
            if (password !== confirmPassword) {
                document.getElementById('errorPersonalConfirmPassword').textContent = 'Las contraseñas no coinciden';
                valid = false;
            }

            if (valid) {
                currentUser = { nombre, email, estilo };
                showToast('¡Registro exitoso! Sesión iniciada.');
                registerPersonalForm.reset();
                toggleRegisterModal(false);
                actualizarEstadoSesion();
            }
        });
    }

    const profileOverlay = document.getElementById('profileOverlay');
    const profileDrawer = document.getElementById('profileDrawer');
    const closeProfileBtn = document.getElementById('closeProfileBtn');
    
    const profileView = document.getElementById('profileView');
    const editProfileView = document.getElementById('editProfileView');
    const logoutConfirmView = document.getElementById('logoutConfirmView');
    const profileFooter = document.getElementById('profileFooter');
    
    const btnCerrarSesionDrawer = document.getElementById('btnCerrarSesionDrawer');
    const btnModificarDatos = document.getElementById('btnModificarDatos');
    
    const confirmLogoutBtn = document.getElementById('confirmLogoutBtn');
    const cancelLogoutBtn = document.getElementById('cancelLogoutBtn');
    const saveEditBtn = document.getElementById('saveEditBtn');
    const cancelEditBtn = document.getElementById('cancelEditBtn');

    // Pestañas, progreso y paneles nuevos del perfil
    const profileTabs = document.getElementById('profileTabs');
    const profileProgress = document.getElementById('profileProgress');
    const ordersView = document.getElementById('ordersView');
    const favoritesView = document.getElementById('favoritesView');
    let tabPerfilActual = 'datos';

    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.addEventListener('click', () => mostrarTabPerfil(tab.dataset.tab));
    });
    const profileCompleteBtn = document.getElementById('profileCompleteBtn');
    if (profileCompleteBtn) profileCompleteBtn.addEventListener('click', () => { if (btnModificarDatos) btnModificarDatos.click(); });
    const editEstiloSelect = document.getElementById('editEstilo');
    if (editEstiloSelect) editEstiloSelect.addEventListener('change', actualizarCamposEdicion);

    if (ordersView) {
        ordersView.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-repeat]');
            if (btn) repetirPedido(btn.dataset.repeat);
        });
    }
    if (favoritesView) {
        favoritesView.addEventListener('click', (e) => {
            const agregar = e.target.closest('[data-fav-add]');
            const quitar = e.target.closest('[data-fav-remove]');
            if (agregar) agregarAlCarritoPorId(agregar.dataset.favAdd, 1);
            if (quitar) {
                alternarFavorito(quitar.dataset.favRemove);
                sincronizarCorazones();
                if (soloFavoritos) applyAllFilters();
                actualizarContadoresFavoritos();
            }
        });
    }

    const CLAVE_PEDIDOS = 'pedidosProSpin';
    const MAX_PEDIDOS_GUARDADOS = 30;

    function mostrarVistaPrincipal() {
        if (editProfileView) editProfileView.style.display = 'none';
        if (logoutConfirmView) logoutConfirmView.style.display = 'none';
        if (profileTabs) profileTabs.style.display = 'flex';
        mostrarTabPerfil(tabPerfilActual);
    }

    function toggleProfileDrawer(show) {
        if (profileDrawer) profileDrawer.classList.toggle('active', show);
        if (profileOverlay) profileOverlay.classList.toggle('active', show);
        if (show) { tabPerfilActual = 'datos'; mostrarVistaPrincipal(); }
    }

    if (closeProfileBtn) closeProfileBtn.addEventListener('click', () => toggleProfileDrawer(false));
    if (profileOverlay) profileOverlay.addEventListener('click', () => toggleProfileDrawer(false));

    function actualizarEstadoSesion() {
        try {
            if (currentUser) localStorage.setItem(CLAVE_SESION, JSON.stringify(currentUser));
            else localStorage.removeItem(CLAVE_SESION);
        } catch (e) {}
        if (!loginBtn) return;
        // Un solo botón: "Crear cuenta" sin sesión, "Hola, Nombre" (abre el perfil) con sesión
        if (currentUser) {
            const primerNombre = currentUser.nombre.split(' ')[0];
            loginBtn.className = 'btn btn-outline-sm';
            loginBtn.innerHTML = '<i class="fa-solid fa-user-check"></i> ';
            loginBtn.append('Hola, ' + primerNombre);

            if (document.getElementById('profileName')) document.getElementById('profileName').textContent = currentUser.nombre;
            if (document.getElementById('profileEmail')) document.getElementById('profileEmail').textContent = currentUser.email;
            if (document.getElementById('profileType')) document.getElementById('profileType').textContent = etiquetasTipoCliente[currentUser.estilo] || (currentUser.estilo.charAt(0).toUpperCase() + currentUser.estilo.slice(1));
            renderPerfilDatos();
            actualizarProgresoPerfil();
            actualizarContadoresPerfil();

            loginBtn.onclick = () => toggleProfileDrawer(true);
        } else {
            loginBtn.className = 'btn btn-primary';
            loginBtn.innerHTML = '<i class="fa-solid fa-user-plus"></i> Crear cuenta';
            loginBtn.onclick = () => toggleRegisterModal(true);
        }
    }
    actualizarEstadoSesion();

    if (btnCerrarSesionDrawer) {
        btnCerrarSesionDrawer.addEventListener('click', () => {
            ocultarPanelesPerfil();
            if (logoutConfirmView) logoutConfirmView.style.display = 'block';
        });
    }

    if (cancelLogoutBtn) cancelLogoutBtn.addEventListener('click', mostrarVistaPrincipal);

    if (confirmLogoutBtn) {
        confirmLogoutBtn.addEventListener('click', () => {
            currentUser = null; 
            actualizarEstadoSesion(); 
            toggleProfileDrawer(false); 
            showToast('Sesión cerrada correctamente');
        });
    }

    if (btnModificarDatos) {
        btnModificarDatos.addEventListener('click', () => {
            ocultarPanelesPerfil();
            if (editProfileView) editProfileView.style.display = 'block';
            
            if (currentUser) {
                document.getElementById('editNombre').value = currentUser.nombre;
                document.getElementById('editEmail').value = currentUser.email;
                document.getElementById('editEstilo').value = currentUser.estilo;
                document.getElementById('editTelefono').value = currentUser.telefono || '';
                document.getElementById('editComuna').value = currentUser.comuna || '';
                document.getElementById('editDireccion').value = currentUser.direccion || '';
                document.getElementById('editNivel').value = currentUser.nivel || '';
                document.getElementById('editEstiloJuego').value = currentUser.estiloJuego || '';
                document.getElementById('editRazonSocial').value = currentUser.razonSocial || '';
                document.getElementById('editRut').value = currentUser.rut || '';
                document.getElementById('errorEditTelefono').textContent = '';
                document.getElementById('errorEditRut').textContent = '';
                actualizarCamposEdicion();
            }
        });
    }

    if (cancelEditBtn) cancelEditBtn.addEventListener('click', mostrarVistaPrincipal);

    if (saveEditBtn) {
        saveEditBtn.addEventListener('click', () => {
            if (!currentUser) return;
            const nuevoNombre = valorCampo('editNombre');
            const nuevoEmail = valorCampo('editEmail');
            const estilo = document.getElementById('editEstilo').value;
            const telefono = valorCampo('editTelefono');
            const rutIngresado = valorCampo('editRut');
            const institucion = esInstitucion(estilo);
            const errorTelefono = document.getElementById('errorEditTelefono');
            const errorRut = document.getElementById('errorEditRut');
            errorTelefono.textContent = '';
            errorRut.textContent = '';

            if (nuevoNombre.length < 3 || !nuevoEmail.includes('@')) {
                showToast('Revisa tu nombre y tu correo antes de guardar');
                return;
            }
            let todoBien = true;
            if (telefono && !telefonoValido(telefono)) {
                errorTelefono.textContent = 'Ingresa un teléfono válido, por ejemplo +56 9 1234 5678';
                todoBien = false;
            }
            if (institucion && rutIngresado && !rutValido(rutIngresado)) {
                errorRut.textContent = 'El RUT no es válido. Revisa el número y el dígito verificador.';
                todoBien = false;
            }
            if (!todoBien) return;

            // Solo se guardan los campos que corresponden al tipo de cliente
            const nuevo = { nombre: nuevoNombre, email: nuevoEmail, estilo: estilo };
            if (telefono) nuevo.telefono = telefono;
            if (valorCampo('editComuna')) nuevo.comuna = valorCampo('editComuna');
            if (valorCampo('editDireccion')) nuevo.direccion = valorCampo('editDireccion');
            if (institucion) {
                if (valorCampo('editRazonSocial')) nuevo.razonSocial = valorCampo('editRazonSocial');
                if (rutIngresado) nuevo.rut = formatearRut(rutIngresado);
            } else {
                if (valorCampo('editNivel')) nuevo.nivel = valorCampo('editNivel');
                if (valorCampo('editEstiloJuego')) nuevo.estiloJuego = valorCampo('editEstiloJuego');
            }
            currentUser = nuevo;
            actualizarEstadoSesion();
            mostrarVistaPrincipal();
            showToast('Tus datos han sido actualizados');
        });
    }

    // =========================================
    // PERFIL: validaciones, progreso, pedidos y favoritos
    // =========================================
    function crear(etiqueta, clase, texto) {
        const el = document.createElement(etiqueta);
        if (clase) el.className = clase;
        if (texto !== undefined) el.textContent = texto;
        return el;
    }
    function valorCampo(id) {
        const el = document.getElementById(id);
        return el ? el.value.trim() : '';
    }
    function dinero(n) { return '$' + (Number(n) || 0).toLocaleString('es-CL'); }

    function telefonoValido(texto) {
        const digitos = texto.replace(/\D/g, '');
        return /^[+0-9\s()\-]+$/.test(texto) && digitos.length >= 8 && digitos.length <= 12;
    }
    // RUT chileno: módulo 11
    function rutValido(texto) {
        const limpio = texto.replace(/[^0-9kK]/g, '').toUpperCase();
        if (limpio.length < 8 || limpio.length > 9) return false;
        const cuerpo = limpio.slice(0, -1);
        const dv = limpio.slice(-1);
        let suma = 0, mult = 2;
        for (let i = cuerpo.length - 1; i >= 0; i--) {
            suma += parseInt(cuerpo[i], 10) * mult;
            mult = mult === 7 ? 2 : mult + 1;
        }
        const resto = 11 - (suma % 11);
        const esperado = resto === 11 ? '0' : (resto === 10 ? 'K' : String(resto));
        return dv === esperado;
    }
    function formatearRut(texto) {
        const limpio = texto.replace(/[^0-9kK]/g, '').toUpperCase();
        if (limpio.length < 2) return limpio;
        return limpio.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '-' + limpio.slice(-1);
    }

    // ---------- Datos para el correo de confirmación ----------
    function generarNumeroPedido() {
        return 'PS-' + Date.now().toString(36).toUpperCase().slice(-6);
    }
    function formatearFechaPedido(fecha) {
        const dia = fecha.toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' });
        const hora = fecha.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit', hour12: false });
        return dia + ' · ' + hora;
    }
    function escaparHtml(texto) {
        return String(texto).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }
    // Filas de productos del correo (HTML con estilos en línea, como exigen los correos)
    function construirResumenHtml(items) {
        const fuente = "font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;";
        return items.map(p => {
            const subtotal = '$' + (p.price * p.quantity).toLocaleString('es-CL');
            const unitario = '$' + p.price.toLocaleString('es-CL');
            return '<tr>' +
                '<td width="52" valign="top" style="padding:14px 0;border-bottom:1px solid #e2e8f0;">' +
                    '<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>' +
                    '<td width="40" height="40" align="center" valign="middle" bgcolor="#fee2e2" style="width:40px;height:40px;background-color:#fee2e2;border-radius:10px;' + fuente + 'font-size:15px;font-weight:800;color:#dc2626;">' + p.quantity + '×</td>' +
                    '</tr></table></td>' +
                '<td valign="top" style="padding:14px 8px 14px 4px;border-bottom:1px solid #e2e8f0;' + fuente + '">' +
                    '<div style="font-size:15px;font-weight:600;color:#0f172a;line-height:20px;">' + escaparHtml(p.name) + '</div>' +
                    '<div style="font-size:13px;color:#64748b;padding-top:3px;">' + unitario + ' c/u</div></td>' +
                '<td align="right" valign="top" style="padding:14px 0;border-bottom:1px solid #e2e8f0;' + fuente + 'font-size:15px;font-weight:700;color:#0f172a;white-space:nowrap;">' + subtotal + '</td>' +
                '</tr>';
        }).join('');
    }

    // ---------- Pedidos guardados en este navegador ----------
    function cargarPedidos() {
        try {
            const lista = JSON.parse(localStorage.getItem(CLAVE_PEDIDOS));
            return Array.isArray(lista) ? lista : [];
        } catch (e) { return []; }
    }
    function guardarPedido(pedido) {
        const lista = cargarPedidos();
        lista.unshift(pedido);
        try { localStorage.setItem(CLAVE_PEDIDOS, JSON.stringify(lista.slice(0, MAX_PEDIDOS_GUARDADOS))); } catch (e) {}
    }
    function pedidosDelUsuario() {
        if (!currentUser) return [];
        const correo = currentUser.email.trim().toLowerCase();
        return cargarPedidos().filter(p => p && Array.isArray(p.items) &&
            [p.email, p.cuenta].some(c => typeof c === 'string' && c.trim().toLowerCase() === correo));
    }
    function actualizarContadoresPerfil() {
        const contador = document.getElementById('ordersTabCount');
        const n = pedidosDelUsuario().length;
        if (contador) { contador.textContent = n; contador.hidden = n === 0; }
    }

    // ---------- Formulario de pedido: se rellena con los datos del perfil ----------
    function prepararCheckout() {
        const rellenar = (id, valor) => {
            const el = document.getElementById(id);
            if (el && !el.value && valor) el.value = valor;
        };
        if (currentUser) {
            rellenar('chkName', currentUser.nombre);
            rellenar('chkEmail', currentUser.email);
            rellenar('chkPhone', currentUser.telefono);
            rellenar('chkAddress', currentUser.direccion);
            rellenar('chkComuna', currentUser.comuna);
        }
        const envoltorio = document.getElementById('chkSaveWrap');
        if (envoltorio) envoltorio.hidden = !currentUser;
    }

    // Se llama cuando el pedido ya se envió bien, antes de vaciar el carrito
    function registrarPedidoCompletado(idPedido, itemsPedido, datosPedido) {
        const items = (itemsPedido || cart).map(p => ({ id: p.id, name: p.name, price: p.price, quantity: p.quantity }));
        if (items.length === 0) return;
        const dp = datosPedido || {};
        const despacho = {
            nombre: dp.nombre || valorCampo('chkName'),
            telefono: dp.telefono || valorCampo('chkPhone'),
            direccion: dp.direccion || valorCampo('chkAddress'),
            comuna: dp.comuna || valorCampo('chkComuna')
        };
        guardarPedido({
            id: idPedido || generarNumeroPedido(),
            fecha: new Date().toISOString(),
            email: dp.email || valorCampo('chkEmail'),
            cuenta: currentUser ? currentUser.email : '',
            items: items,
            total: items.reduce((suma, p) => suma + p.price * p.quantity, 0),
            despacho: despacho
        });

        // Si marcó "Guardar estos datos en mi perfil", completa lo que falte
        const guardar = document.getElementById('chkSaveProfile');
        const quiereGuardar = datosPedido ? datosPedido.guardarPerfil : (guardar && guardar.checked);
        if (currentUser && quiereGuardar) {
            if (telefonoValido(despacho.telefono)) currentUser.telefono = despacho.telefono;
            if (despacho.direccion) currentUser.direccion = despacho.direccion;
            if (despacho.comuna) currentUser.comuna = despacho.comuna;
            actualizarEstadoSesion();
        }
        actualizarContadoresPerfil();
    }

    function agregarAlCarritoPorId(id, cantidad, silencioso) {
        const prod = totalProductos.find(p => p.id === id);
        if (!prod) return false;
        const existe = cart.find(i => i.id === prod.id);
        if (existe) existe.quantity += cantidad;
        else cart.push({ id: prod.id, name: prod.name, price: prod.price, quantity: cantidad });
        updateCart();
        if (!silencioso) showToast('Añadido: ' + prod.name);
        return true;
    }

    function repetirPedido(idPedido) {
        const pedido = pedidosDelUsuario().find(p => p.id === idPedido);
        if (!pedido) return;
        let agregados = 0, omitidos = 0;
        pedido.items.forEach(item => {
            const cantidad = Math.max(1, parseInt(item.quantity, 10) || 1);
            if (agregarAlCarritoPorId(item.id, cantidad, true)) agregados++; else omitidos++;
        });
        toggleProfileDrawer(false);
        if (agregados > 0) toggleCart(true);
        showToast(agregados > 0
            ? 'Pedido agregado al carrito' + (omitidos ? ` (${omitidos} producto${omitidos > 1 ? 's' : ''} ya no está${omitidos > 1 ? 'n' : ''} disponible${omitidos > 1 ? 's' : ''})` : '')
            : 'Esos productos ya no están disponibles');
    }

    // ---------- Pestaña Pedidos ----------
    function renderPedidos() {
        if (!ordersView) return;
        ordersView.textContent = '';
        const lista = pedidosDelUsuario();
        if (lista.length === 0) {
            ordersView.appendChild(crear('p', 'profile-empty', 'Aún no tienes pedidos. Cuando confirmes uno, aparecerá aquí para que puedas repetirlo con un clic.'));
            return;
        }
        lista.forEach(pedido => {
            const tarjeta = crear('article', 'order-card');
            const fecha = new Date(pedido.fecha);
            const cabecera = crear('div', 'order-head');
            cabecera.appendChild(crear('strong', '', 'Pedido ' + String(pedido.id || '').slice(0, 12)));
            cabecera.appendChild(crear('span', 'order-date', isNaN(fecha) ? '' : fecha.toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' })));
            tarjeta.appendChild(cabecera);

            const detalle = crear('details', 'order-items');
            const cantidadTotal = pedido.items.reduce((s, i) => s + (parseInt(i.quantity, 10) || 0), 0);
            detalle.appendChild(crear('summary', '', `${cantidadTotal} producto${cantidadTotal === 1 ? '' : 's'} · ${dinero(pedido.total)}`));
            const ul = crear('ul');
            pedido.items.forEach(item => {
                ul.appendChild(crear('li', '', `${parseInt(item.quantity, 10) || 1} × ${String(item.name || '')}`));
            });
            detalle.appendChild(ul);
            tarjeta.appendChild(detalle);

            const btn = crear('button', 'btn btn-primary order-repeat', 'Repetir pedido');
            btn.type = 'button';
            btn.dataset.repeat = pedido.id;
            tarjeta.appendChild(btn);
            ordersView.appendChild(tarjeta);
        });
    }

    // ---------- Pestaña Favoritos ----------
    function renderFavoritosPerfil() {
        if (!favoritesView) return;
        favoritesView.textContent = '';
        const lista = favoritosValidos().map(id => totalProductos.find(p => p.id === id));
        if (lista.length === 0) {
            favoritesView.appendChild(crear('p', 'profile-empty', 'Aún no tienes favoritos. Toca el corazón de un producto para guardarlo aquí.'));
            return;
        }
        lista.forEach(prod => {
            const fila = crear('div', 'fav-row');
            const img = document.createElement('img');
            img.src = prod.img; img.alt = prod.name; img.loading = 'lazy';
            fila.appendChild(img);
            const info = crear('div', 'fav-info');
            info.appendChild(crear('span', 'fav-name', prod.name));
            info.appendChild(crear('span', 'fav-price', dinero(prod.price)));
            fila.appendChild(info);
            const acciones = crear('div', 'fav-actions');
            const agregar = crear('button', 'fav-btn fav-btn-add');
            agregar.type = 'button'; agregar.dataset.favAdd = prod.id; agregar.setAttribute('aria-label', 'Añadir al carrito: ' + prod.name);
            agregar.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
            const quitar = crear('button', 'fav-btn fav-btn-remove');
            quitar.type = 'button'; quitar.dataset.favRemove = prod.id; quitar.setAttribute('aria-label', 'Quitar de favoritos: ' + prod.name);
            quitar.innerHTML = '<i class="fa-solid fa-heart"></i>';
            acciones.appendChild(agregar); acciones.appendChild(quitar);
            fila.appendChild(acciones);
            favoritesView.appendChild(fila);
        });
    }

    // ---------- Pestañas del panel ----------
    function ocultarPanelesPerfil() {
        [profileTabs, profileProgress, profileView, ordersView, favoritesView, profileFooter].forEach(el => { if (el) el.style.display = 'none'; });
    }
    function mostrarTabPerfil(nombre) {
        tabPerfilActual = nombre;
        const esDatos = nombre === 'datos';
        if (profileProgress) profileProgress.style.display = esDatos ? 'block' : 'none';
        if (profileView) profileView.style.display = esDatos ? 'block' : 'none';
        if (profileFooter) profileFooter.style.display = esDatos ? 'block' : 'none';
        if (ordersView) ordersView.style.display = nombre === 'pedidos' ? 'block' : 'none';
        if (favoritesView) favoritesView.style.display = nombre === 'favoritos' ? 'block' : 'none';
        document.querySelectorAll('.profile-tab').forEach(tab => {
            const activa = tab.dataset.tab === nombre;
            tab.classList.toggle('active', activa);
            tab.setAttribute('aria-selected', activa ? 'true' : 'false');
        });
        if (nombre === 'pedidos') renderPedidos();
        if (nombre === 'favoritos') renderFavoritosPerfil();
    }

    // ---------- Datos y barra de perfil completo ----------
    function camposPerfil(u) {
        const comunes = [['Nombre', u.nombre], ['Correo', u.email], ['Teléfono', u.telefono], ['Comuna', u.comuna], ['Dirección', u.direccion]];
        const segunTipo = esInstitucion(u.estilo)
            ? [['Razón social', u.razonSocial], ['RUT', u.rut]]
            : [['Nivel de juego', u.nivel], ['Estilo de juego', u.estiloJuego]];
        return comunes.concat(segunTipo);
    }
    function actualizarProgresoPerfil() {
        if (!currentUser) return;
        const campos = camposPerfil(currentUser);
        const faltan = campos.filter(c => !c[1]).map(c => c[0]);
        const porcentaje = Math.round(((campos.length - faltan.length) / campos.length) * 100);
        const titulo = document.getElementById('profileProgressTitle');
        const barra = document.getElementById('profileProgressBar');
        const relleno = document.getElementById('profileProgressFill');
        const pista = document.getElementById('profileProgressHint');
        const boton = document.getElementById('profileCompleteBtn');
        if (titulo) titulo.textContent = porcentaje === 100 ? 'Perfil completo' : `Tu perfil está al ${porcentaje}%`;
        if (barra) barra.setAttribute('aria-valuenow', String(porcentaje));
        if (relleno) { relleno.style.width = porcentaje + '%'; relleno.classList.toggle('is-complete', porcentaje === 100); }
        if (pista) pista.textContent = porcentaje === 100
            ? 'Tus próximos pedidos se llenarán solos con estos datos.'
            : 'Te falta: ' + (faltan.length > 3 ? faltan.slice(0, 3).join(', ') + ` y ${faltan.length - 3} más` : faltan.join(' y ').replace(/ y ([^y]*) y /, ', $1 y ')) + '. Con tus datos completos, el pedido se llena solo.';
        if (boton) boton.hidden = porcentaje === 100;
    }
    function renderPerfilDatos() {
        const cont = document.getElementById('profileExtra');
        if (!cont || !currentUser) return;
        cont.textContent = '';
        const u = currentUser;
        const grupo = (titulo, filas) => {
            cont.appendChild(crear('h4', 'profile-group-title', titulo));
            filas.forEach(([etiqueta, valor]) => {
                const p = document.createElement('p');
                p.appendChild(crear('strong', '', etiqueta + ':'));
                p.appendChild(document.createTextNode(' '));
                p.appendChild(valor ? crear('span', '', valor) : crear('span', 'is-empty', 'Sin completar'));
                cont.appendChild(p);
            });
        };
        grupo('Contacto y despacho', [['Teléfono', u.telefono], ['Comuna', u.comuna], ['Dirección', u.direccion]]);
        if (esInstitucion(u.estilo)) grupo('Institución', [['Razón social', u.razonSocial], ['RUT', u.rut]]);
        else grupo('Mi juego', [['Nivel', NIVELES_JUEGO[u.nivel]], ['Estilo de juego', ESTILOS_JUEGO[u.estiloJuego]]]);
    }

    // En el formulario de edición se muestran los campos que corresponden al tipo de cliente
    function actualizarCamposEdicion() {
        const select = document.getElementById('editEstilo');
        if (!select) return;
        const institucion = esInstitucion(select.value);
        const jugador = document.getElementById('editJugadorFields');
        const inst = document.getElementById('editInstitucionFields');
        if (jugador) jugador.style.display = institucion ? 'none' : 'block';
        if (inst) inst.style.display = institucion ? 'block' : 'none';
    }

    // MODAL DE DETALLE DE PRODUCTO
    const productModalEl = document.getElementById('productModal');
    const closeModalBtnEl = document.getElementById('closeModalBtn');
    const modalBody = document.getElementById('modalBody');

    if (closeModalBtnEl && productModalEl) {
        closeModalBtnEl.addEventListener('click', () => {
            productModalEl.classList.remove('active');
        });
    }

    if (productModalEl) {
        productModalEl.addEventListener('click', (e) => {
            if (e.target === productModalEl) {
                productModalEl.classList.remove('active');
            }
        });
    }

    function attachModalEvents() {
        if (!productModalEl || !modalBody) return;

        document.querySelectorAll('.btn-view-detail').forEach(btn => {
            btn.replaceWith(btn.cloneNode(true));
        });

        document.querySelectorAll('.btn-view-detail').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = e.currentTarget.dataset.id;
                const producto = totalProductos.find(p => p.id === productId);
                
                if (producto) {
                    const puntaje = producto.rating || 5;
                    const estrellas = '★'.repeat(puntaje) + '☆'.repeat(5 - puntaje);

                    modalBody.innerHTML = `
                        <div class="modal-grid">
                            <div class="modal-image-container">
                                <img src="${producto.img}" alt="${producto.name}">
                            </div>
                            <div class="modal-info">
                                <span class="card-badge" style="position:relative; top:0; left:0; display:inline-block; margin-bottom:10px; background:var(--secondary);">${producto.badge}</span>
                                
                                <h3>${producto.name}</h3>
                                
                                <div style="color: #f59e0b; font-size: 1.2rem; margin-bottom: 10px;">
                                    ${estrellas} <span style="font-size: 0.85rem; color: #64748b;">(${puntaje})</span>
                                </div>

                                <div class="modal-price">$${producto.price.toLocaleString('es-CL')}</div>
                                <p class="modal-desc">${producto.desc}</p>
                                
                                <div class="modal-specs">
                                    <p><strong>Clasificación:</strong> ${producto.tag}</p>
                                    <p><strong>Marca:</strong> ${producto.badge}</p>
                                    <p><strong>Código ID:</strong> ${producto.id}</p>
                                </div>

                                <button class="btn btn-primary btn-add-cart-modal" style="width: 100%; padding: 12px; font-size: 1.1rem; margin-top: 15px;">
                                    <i class="fa-solid fa-cart-plus"></i> Añadir al Carrito
                                </button>
                            </div>
                        </div>
                    `;
                    
                    productModalEl.classList.add('active');

                    const btnAddModal = modalBody.querySelector('.btn-add-cart-modal');
                    if (btnAddModal) {
                        btnAddModal.addEventListener('click', () => {
                            const exist = cart.find(i => i.id === producto.id);
                            if (exist) {
                                exist.quantity += 1;
                            } else {
                                cart.push({ id: producto.id, name: producto.name, price: producto.price, quantity: 1 });
                            }
                            updateCart();
                            showToast(`¡${producto.name} añadido!`);
                            productModalEl.classList.remove('active'); 
                        });
                    }
                }
            });
        });
    }

    // INICIALIZACIÓN
    renderProducts(totalProductos);
    manejarRetornoWebpay(); // si el cliente vuelve desde Webpay, completa o informa el pedido
    updateCart();

}); 

// PREGUNTAS FRECUENTES Y MODO OSCURO (GLOBAL)
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));
        if (!isOpen) item.classList.add('active');
    });
});

const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        if (isDark) {
            if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

// INICIALIZAR EMAILJS
if (typeof emailjs !== 'undefined') {
    emailjs.init("xSwE-6BEuFKCCL-QY");
}


// PANTALLA DE BIENVENIDA (solo existe en index.html)
(function () {
    const welcome = document.getElementById('welcomeScreen');
    if (!welcome) return;

    const root = document.documentElement;
    const enterBtn = document.getElementById('welcomeEnterBtn');
    const welcomeThemeBtn = document.getElementById('welcomeThemeBtn');
    const welcomeThemeIcon = document.getElementById('welcomeThemeIcon');
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Deja el ícono luna/sol igual en la bienvenida y en la barra de la tienda
    function syncThemeIcons(dark) {
        [welcomeThemeIcon, document.getElementById('themeIcon')].forEach(function (icon) {
            if (!icon) return;
            icon.classList.remove(dark ? 'fa-moon' : 'fa-sun');
            icon.classList.add(dark ? 'fa-sun' : 'fa-moon');
        });
    }
    syncThemeIcons(document.body.classList.contains('dark-mode'));

    if (welcomeThemeBtn) {
        welcomeThemeBtn.addEventListener('click', function () {
            const dark = document.body.classList.toggle('dark-mode');
            syncThemeIcons(dark);
            localStorage.setItem('theme', dark ? 'dark' : 'light');
        });
    }

    function closeWelcome() {
        try { sessionStorage.setItem('prospinBienvenida', '1'); } catch (e) {}
        if (reduceMotion) {
            root.classList.remove('welcome-open');
            root.classList.add('welcome-seen');
            window.scrollTo(0, 0);
            return;
        }
        welcome.classList.add('is-leaving');
        setTimeout(function () {
            root.classList.remove('welcome-open');
            root.classList.add('welcome-seen');
            window.scrollTo(0, 0);
        }, 350);
    }
    if (enterBtn) enterBtn.addEventListener('click', closeWelcome);

    // Con "reducir movimiento" la pelota queda directo en su destino
    const table = document.getElementById('welcomeTable');
    if (table && reduceMotion) {
        try { table.pauseAnimations(); table.setCurrentTime(10); } catch (e) {}
    }
})();



// MENÚ LATERAL PLEGABLE (categorías tipo acordeón + panel desplegable en celular)
(function () {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    const categorias = sidebar.querySelectorAll('.menu-category');
    const toggleBtn = document.getElementById('sidebarToggleBtn');
    const esCelular = () => window.matchMedia('(max-width: 768px)').matches;

    function abrirCategoria(cat, abrir) {
        cat.classList.toggle('open', abrir);
        const header = cat.querySelector('.category-header');
        if (header) header.setAttribute('aria-expanded', abrir ? 'true' : 'false');
    }

    // Una categoría abierta a la vez
    categorias.forEach(cat => {
        const header = cat.querySelector('.category-header');
        if (!header) return;
        header.addEventListener('click', () => {
            const abrir = !cat.classList.contains('open');
            categorias.forEach(c => abrirCategoria(c, false));
            abrirCategoria(cat, abrir);
        });
    });

    function panelCelular(abrir) {
        if (!toggleBtn) return;
        sidebar.classList.toggle('open', abrir);
        toggleBtn.setAttribute('aria-expanded', abrir ? 'true' : 'false');
    }
    if (toggleBtn) toggleBtn.addEventListener('click', () => panelCelular(!sidebar.classList.contains('open')));

    // Al elegir un filtro: marca su categoría y, en celular, cierra el panel para ver los productos
    sidebar.addEventListener('click', (e) => {
        const link = e.target.closest('.filter-link, .sidebar-link');
        if (!link || !link.dataset.filter) return;
        categorias.forEach(c => c.classList.remove('has-active'));
        const cat = link.closest('.menu-category');
        if (cat) cat.classList.add('has-active');
        if (esCelular()) panelCelular(false);
    });
})();



// FILTRO DE PRECIO COMPACTO (botón "Precio" que abre un cuadro con Mín / Máx)
(function () {
    const toggleBtn = document.getElementById('priceToggleBtn');
    const popover = document.getElementById('pricePopover');
    if (!toggleBtn || !popover) return;

    const label = document.getElementById('priceToggleLabel');
    const minInput = document.getElementById('minPrice');
    const maxInput = document.getElementById('maxPrice');
    const applyBtn = document.getElementById('applyPriceBtn');
    const clearBtn = document.getElementById('clearPriceBtn');

    function abrir(open) {
        popover.hidden = !open;
        toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (open && minInput) minInput.focus();
    }

    // El botón muestra el rango aplicado, p. ej. "Precio: $50.000 - $100.000"
    function actualizarEtiqueta() {
        const min = parseInt(minInput.value, 10) || 0;
        const max = parseInt(maxInput.value, 10) || 0;
        const fmt = (n) => '$' + n.toLocaleString('es-CL');
        let texto = 'Precio';
        if (min && max) texto = 'Precio: ' + fmt(min) + ' - ' + fmt(max);
        else if (min) texto = 'Precio: desde ' + fmt(min);
        else if (max) texto = 'Precio: hasta ' + fmt(max);
        label.textContent = texto;
        toggleBtn.classList.toggle('is-active', texto !== 'Precio');
    }

    toggleBtn.addEventListener('click', () => abrir(popover.hidden));

    // setTimeout: deja que primero el filtro principal lea o limpie los campos
    if (applyBtn) applyBtn.addEventListener('click', () => { setTimeout(actualizarEtiqueta, 0); abrir(false); });
    if (clearBtn) clearBtn.addEventListener('click', () => { setTimeout(actualizarEtiqueta, 0); abrir(false); toggleBtn.focus(); });

    // Enter dentro de los campos aplica el filtro
    [minInput, maxInput].forEach(inp => {
        if (!inp) return;
        inp.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && applyBtn) { e.preventDefault(); applyBtn.click(); }
        });
    });

    // Cerrar al hacer clic fuera o con Escape
    document.addEventListener('click', (e) => {
        if (!popover.hidden && !popover.contains(e.target) && !toggleBtn.contains(e.target)) abrir(false);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !popover.hidden) { abrir(false); toggleBtn.focus(); }
    });
})();



// BOTÓN FLOTANTE DEL CARRITO (solo se muestra en celular, ver style.css)
(function () {
    const flotante = document.getElementById('floatingCartBtn');
    const principal = document.getElementById('cartBtn');
    const contador = document.getElementById('cartCount');
    const insignia = document.getElementById('floatingCartCount');
    if (!flotante || !principal) return;

    function sincronizar() {
        const n = contador ? contador.textContent.trim() : '0';
        if (insignia) {
            insignia.textContent = n;
            insignia.hidden = (n === '' || n === '0');
        }
    }
    sincronizar();
    if (contador) new MutationObserver(sincronizar).observe(contador, { childList: true, characterData: true, subtree: true });

    flotante.addEventListener('click', () => principal.click());
})();


// SELECTOR DE COMUNAS: lista propia con scroll (reemplaza el datalist nativo,
// que en algunos navegadores se salía de la pantalla y no se podía deslizar)
(function () {
    const COMUNAS = ['Alhué','Buin','Calera de Tango','Cerrillos','Cerro Navia','Colina','Conchalí','Curacaví','El Bosque','El Monte','Estación Central','Huechuraba','Independencia','Isla de Maipo','La Cisterna','La Florida','La Granja','La Pintana','La Reina','Lampa','Las Condes','Lo Barnechea','Lo Espejo','Lo Prado','Macul','Maipú','María Pinto','Melipilla','Ñuñoa','Padre Hurtado','Paine','Pedro Aguirre Cerda','Peñaflor','Peñalolén','Pirque','Providencia','Pudahuel','Puente Alto','Quilicura','Quinta Normal','Recoleta','Renca','San Bernardo','San Joaquín','San José de Maipo','San Miguel','San Pedro','San Ramón','Santiago','Talagante','Tiltil','Vitacura'];
    const quitarTildes = (t) => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    document.querySelectorAll('input[data-comuna-combo]').forEach((input) => {
        const wrap = document.createElement('div');
        wrap.className = 'combo-wrap';
        input.parentNode.insertBefore(wrap, input);
        wrap.appendChild(input);

        const btn = document.createElement('button');
        btn.type = 'button'; btn.className = 'combo-toggle';
        btn.setAttribute('aria-label', 'Ver lista de comunas'); btn.tabIndex = -1;
        btn.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
        const lista = document.createElement('ul');
        lista.className = 'combo-list'; lista.hidden = true; lista.setAttribute('role', 'listbox');
        wrap.append(btn, lista);

        let activo = -1;

        function dibujar(filtro) {
            const f = quitarTildes(filtro || '');
            const res = COMUNAS.filter(c => quitarTildes(c).includes(f));
            lista.innerHTML = '';
            if (!res.length) {
                const li = document.createElement('li');
                li.className = 'vacio'; li.textContent = 'Sin coincidencias: se usará lo que escribiste';
                lista.appendChild(li);
            }
            res.forEach((c) => {
                const li = document.createElement('li');
                li.textContent = c; li.setAttribute('role', 'option');
                // mousedown evita que el input pierda el foco antes de elegir
                li.addEventListener('mousedown', (e) => { e.preventDefault(); elegir(c); });
                li.addEventListener('touchend', (e) => { if (!li.dataset.moved) { e.preventDefault(); elegir(c); } li.dataset.moved = ''; });
                li.addEventListener('touchmove', () => { li.dataset.moved = '1'; }, { passive: true });
                lista.appendChild(li);
            });
            activo = -1;
        }

        function contenedorScroll() {
            let el = wrap.parentElement;
            while (el && el !== document.body) {
                const oy = getComputedStyle(el).overflowY;
                if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight - 1) return el;
                el = el.parentElement;
            }
            return null;
        }

        function posicionar() {
            // Espacio real disponible: dentro del formulario que se desliza y dentro de la pantalla
            const r = input.getBoundingClientRect();
            const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
            let limiteAbajo = vh, limiteArriba = 0;
            const cont = contenedorScroll();
            if (cont) {
                const c = cont.getBoundingClientRect();
                limiteAbajo = Math.min(limiteAbajo, c.bottom);
                limiteArriba = Math.max(limiteArriba, c.top);
            }
            const abajo = limiteAbajo - r.bottom - 12, arriba = r.top - limiteArriba - 12;
            const necesita = Math.min(260, lista.scrollHeight + 10);
            const subir = abajo < necesita && arriba > abajo;
            wrap.classList.toggle('up', subir);
            const espacio = Math.max(90, Math.min(260, subir ? arriba : abajo));
            lista.style.setProperty('--combo-max', espacio + 'px');
        }

        function abrir(filtrar) {
            dibujar(filtrar ? input.value : '');
            lista.hidden = false; wrap.classList.add('open'); input.setAttribute('aria-expanded', 'true');
            posicionar();
        }
        function cerrar() {
            lista.hidden = true; wrap.classList.remove('open'); input.setAttribute('aria-expanded', 'false');
        }
        function elegir(c) {
            input.value = c;
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
            cerrar();
        }
        function marcar(i) {
            const items = [...lista.querySelectorAll('li:not(.vacio)')];
            if (!items.length) return;
            activo = (i + items.length) % items.length;
            items.forEach((li, k) => li.classList.toggle('activa', k === activo));
            items[activo].scrollIntoView({ block: 'nearest' });
        }

        input.addEventListener('focus', () => abrir(false));
        input.addEventListener('click', () => { if (lista.hidden) abrir(false); });
        input.addEventListener('input', () => { abrir(true); });
        input.addEventListener('blur', () => setTimeout(cerrar, 120));
        btn.addEventListener('mousedown', (e) => {
            e.preventDefault();
            if (lista.hidden) { input.focus(); abrir(false); } else { cerrar(); }
        });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') { e.preventDefault(); if (lista.hidden) abrir(true); else marcar(activo + 1); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); marcar(activo - 1); }
            else if (e.key === 'Enter' && !lista.hidden && activo >= 0) {
                e.preventDefault();
                const items = [...lista.querySelectorAll('li:not(.vacio)')];
                if (items[activo]) elegir(items[activo].textContent);
            }
            else if (e.key === 'Escape' && !lista.hidden) { e.stopPropagation(); cerrar(); }
        });
        window.addEventListener('resize', () => { if (!lista.hidden) posicionar(); });
    });
})();