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
            "img": "img/productos/TT-001.jpg"
        },
        {
            "id": "TT-002",
            "category": "pegamentos-agua",
            "tag": "Accesorios - DHS",
            "name": "Pegamento DHS VOC Free Glue No. 15 50ml",
            "price": 26100,
            "desc": "Categoría: Accesorios | Subcategoría: Pegamentos. Stock disponible: 89 uds.",
            "badge": "DHS",
            "img": "img/productos/TT-002.jpg"
        },
        {
            "id": "TT-003",
            "category": "gomas-joola",
            "tag": "Gomas - Joola",
            "name": "Goma Joola Rhyzm-P Negra MAX",
            "price": 46400,
            "desc": "Categoría: Gomas | Subcategoría: Lisas. Stock disponible: 49 uds.",
            "badge": "Joola",
            "img": "img/productos/TT-003.jpg"
        },
        {
            "id": "TT-004",
            "category": "gomas-yasaka",
            "tag": "Gomas - Yasaka",
            "name": "Goma Yasaka Rakza Z Roja MAX",
            "price": 66800,
            "desc": "Categoría: Gomas | Subcategoría: Picos Cortos. Stock disponible: 88 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-004.jpg"
        },
        {
            "id": "TT-005",
            "category": "maderos-stiga",
            "tag": "Maderas - Stiga",
            "name": "Madera Stiga Cybershape Carbon Ofensiva",
            "price": 240600,
            "desc": "Categoría: Maderas | Subcategoría: Ofensiva (OFF). Stock disponible: 26 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-005.jpg"
        },
        {
            "id": "TT-006",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Tibhar",
            "name": "Caja Pelotas Tibhar Entrenamiento Blanco x120",
            "price": 60000,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 11 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-006.jpg"
        },
        {
            "id": "TT-007",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Xiom",
            "name": "Zapatillas Xiom Footwork Talla 43",
            "price": 125400,
            "desc": "Categoría: Vestuario | Subcategoría: Zapatillas. Stock disponible: 51 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-007.jpg"
        },
        {
            "id": "TT-008",
            "category": "maderos-yasaka",
            "tag": "Maderas - Yasaka",
            "name": "Madera Yasaka Ma Lin Extra Offensive All-Round",
            "price": 198000,
            "desc": "Categoría: Maderas | Subcategoría: All-Round (ALL). Stock disponible: 95 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-008.jpg"
        },
        {
            "id": "TT-009",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Xiom",
            "name": "Caja Pelotas Xiom Entrenamiento Blanco x3",
            "price": 64500,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 26 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-009.jpg"
        },
        {
            "id": "TT-010",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Donic",
            "name": "Short Donic Azul Talla S",
            "price": 64500,
            "desc": "Categoría: Vestuario | Subcategoría: Shorts. Stock disponible: 33 uds.",
            "badge": "Donic",
            "img": "img/productos/TT-010.jpg"
        },
        {
            "id": "TT-011",
            "category": "accesorios-cintas",
            "tag": "Accesorios - Xiom",
            "name": "Red Xiom Profesional con Soporte",
            "price": 31800,
            "desc": "Categoría: Accesorios | Subcategoría: Redes. Stock disponible: 63 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-011.jpg"
        },
        {
            "id": "TT-012",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - DHS",
            "name": "Caja Pelotas DHS 3 Estrellas Blanco x120",
            "price": 57300,
            "desc": "Categoría: Pelotas | Subcategoría: 3 Estrellas. Stock disponible: 54 uds.",
            "badge": "DHS",
            "img": "img/productos/TT-012.jpg"
        },
        {
            "id": "TT-013",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Yasaka",
            "name": "Short Yasaka Azul Talla XL",
            "price": 47000,
            "desc": "Categoría: Vestuario | Subcategoría: Shorts. Stock disponible: 61 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-013.jpg"
        },
        {
            "id": "TT-014",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Butterfly",
            "name": "Caja Pelotas Butterfly 3 Estrellas Blanco x3",
            "price": 17700,
            "desc": "Categoría: Pelotas | Subcategoría: 3 Estrellas. Stock disponible: 22 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-014.jpg"
        },
        {
            "id": "TT-015",
            "category": "maderos-dhs",
            "tag": "Maderas - DHS",
            "name": "Madera DHS Fang Bo Carbon Ofensiva",
            "price": 177500,
            "desc": "Categoría: Maderas | Subcategoría: Ofensiva (OFF). Stock disponible: 59 uds.",
            "badge": "DHS",
            "img": "img/productos/TT-015.jpg"
        },
        {
            "id": "TT-016",
            "category": "accesorios-cintas",
            "tag": "Accesorios - Nittaku",
            "name": "Red Nittaku Profesional con Soporte",
            "price": 35200,
            "desc": "Categoría: Accesorios | Subcategoría: Redes. Stock disponible: 37 uds.",
            "badge": "Nittaku",
            "img": "img/productos/TT-016.jpg"
        },
        {
            "id": "TT-017",
            "category": "gomas-otros",
            "tag": "Gomas - Stiga",
            "name": "Goma Stiga Mantra M Roja MAX",
            "price": 79700,
            "desc": "Categoría: Gomas | Subcategoría: Lisas. Stock disponible: 95 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-017.jpg"
        },
        {
            "id": "TT-018",
            "category": "gomas-tibhar",
            "tag": "Gomas - Tibhar",
            "name": "Goma Tibhar Evolution MX-P Roja MAX",
            "price": 34800,
            "desc": "Categoría: Gomas | Subcategoría: Picos Cortos. Stock disponible: 43 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-018.jpg"
        },
        {
            "id": "TT-019",
            "category": "accesorios-fundas",
            "tag": "Accesorios - Butterfly",
            "name": "Funda Butterfly para 1 Paleta",
            "price": 16500,
            "desc": "Categoría: Accesorios | Subcategoría: Fundas. Stock disponible: 88 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-019.jpg"
        },
        {
            "id": "TT-020",
            "category": "mesas-competicion",
            "tag": "Mesas - Tibhar",
            "name": "Mesa de Tenis de Mesa Tibhar Smash 28 R Competición",
            "price": 1225400,
            "desc": "Categoría: Mesas | Subcategoría: Competición. Stock disponible: 1 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-020.jpg"
        },
        {
            "id": "TT-021",
            "category": "maderos-stiga",
            "tag": "Maderas - Stiga",
            "name": "Madera Stiga Clipper Wood Defensiva",
            "price": 190200,
            "desc": "Categoría: Maderas | Subcategoría: Defensiva (DEF). Stock disponible: 75 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-021.jpg"
        },
        {
            "id": "TT-022",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Stiga",
            "name": "Camiseta Stiga Negro Talla S",
            "price": 57300,
            "desc": "Categoría: Vestuario | Subcategoría: Camisetas. Stock disponible: 55 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-022.jpg"
        },
        {
            "id": "TT-023",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Yasaka",
            "name": "Caja Pelotas Yasaka Entrenamiento Blanco x3",
            "price": 20100,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 78 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-023.jpg"
        },
        {
            "id": "TT-024",
            "category": "maderos-donic",
            "tag": "Maderas - Donic",
            "name": "Madera Donic Appelgren Allplay All-Round",
            "price": 94000,
            "desc": "Categoría: Maderas | Subcategoría: All-Round (ALL). Stock disponible: 79 uds.",
            "badge": "Donic",
            "img": "img/productos/TT-024.jpg"
        },
        {
            "id": "TT-025",
            "category": "accesorios-cintas",
            "tag": "Vestuario - DHS",
            "name": "Zapatillas DHS Pro Shoes Talla 40",
            "price": 135400,
            "desc": "Categoría: Vestuario | Subcategoría: Zapatillas. Stock disponible: 83 uds.",
            "badge": "DHS",
            "img": "img/productos/TT-025.jpg"
        },
        {
            "id": "TT-026",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Butterfly",
            "name": "Caja Pelotas Butterfly Entrenamiento Naranja x120",
            "price": 40600,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 16 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-026.jpg"
        },
        {
            "id": "TT-027",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Butterfly",
            "name": "Caja Pelotas Butterfly Entrenamiento Blanco x120",
            "price": 18900,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 93 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-027.jpg"
        },
        {
            "id": "TT-028",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Donic",
            "name": "Short Donic Azul Talla M",
            "price": 35900,
            "desc": "Categoría: Vestuario | Subcategoría: Shorts. Stock disponible: 75 uds.",
            "badge": "Donic",
            "img": "img/productos/TT-028.jpg"
        },
        {
            "id": "TT-029",
            "category": "mesas-exterior",
            "tag": "Mesas - Stiga",
            "name": "Mesa de Tenis de Mesa Stiga Optimum 30 Exterior",
            "price": 1314900,
            "desc": "Categoría: Mesas | Subcategoría: Exterior. Stock disponible: 6 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-029.jpg"
        },
        {
            "id": "TT-030",
            "category": "accesorios-cintas",
            "tag": "Vestuario - DHS",
            "name": "Zapatillas DHS Pro Shoes Talla 42",
            "price": 91100,
            "desc": "Categoría: Vestuario | Subcategoría: Zapatillas. Stock disponible: 49 uds.",
            "badge": "DHS",
            "img": "img/productos/TT-030.jpg"
        },
        {
            "id": "TT-031",
            "category": "maderos-butterfly",
            "tag": "Maderas - Butterfly",
            "name": "Madera Butterfly Timo Boll ALC Defensiva",
            "price": 87300,
            "desc": "Categoría: Maderas | Subcategoría: Defensiva (DEF). Stock disponible: 21 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-031.jpg"
        },
        {
            "id": "TT-032",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Butterfly",
            "name": "Zapatillas Butterfly Lezoline Mach Talla 45",
            "price": 84500,
            "desc": "Categoría: Vestuario | Subcategoría: Zapatillas. Stock disponible: 90 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-032.jpg"
        },
        {
            "id": "TT-033",
            "category": "maderos-donic",
            "tag": "Maderas - Donic",
            "name": "Madera Donic Appelgren Allplay Defensiva",
            "price": 265900,
            "desc": "Categoría: Maderas | Subcategoría: Defensiva (DEF). Stock disponible: 18 uds.",
            "badge": "Donic",
            "img": "img/productos/TT-033.jpg"
        },
        {
            "id": "TT-034",
            "category": "accesorios-cintas",
            "tag": "Accesorios - Butterfly",
            "name": "Red Butterfly Profesional con Soporte",
            "price": 30600,
            "desc": "Categoría: Accesorios | Subcategoría: Redes. Stock disponible: 6 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-034.jpg"
        },
        {
            "id": "TT-035",
            "category": "mesas-competicion",
            "tag": "Mesas - Tibhar",
            "name": "Mesa de Tenis de Mesa Tibhar Normec Competición",
            "price": 1013200,
            "desc": "Categoría: Mesas | Subcategoría: Competición. Stock disponible: 8 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-035.jpg"
        },
        {
            "id": "TT-036",
            "category": "mesas-competicion",
            "tag": "Mesas - Tibhar",
            "name": "Mesa de Tenis de Mesa Tibhar Smash 28 R Competición",
            "price": 857800,
            "desc": "Categoría: Mesas | Subcategoría: Competición. Stock disponible: 4 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-036.jpg"
        },
        {
            "id": "TT-037",
            "category": "maderos-yasaka",
            "tag": "Maderas - Yasaka",
            "name": "Madera Yasaka Ma Lin Extra Offensive All-Round",
            "price": 116300,
            "desc": "Categoría: Maderas | Subcategoría: All-Round (ALL). Stock disponible: 24 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-037.jpg"
        },
        {
            "id": "TT-038",
            "category": "maderos-nittaku",
            "tag": "Maderas - Nittaku",
            "name": "Madera Nittaku Acoustic Defensiva",
            "price": 104600,
            "desc": "Categoría: Maderas | Subcategoría: Defensiva (DEF). Stock disponible: 81 uds.",
            "badge": "Nittaku",
            "img": "img/productos/TT-038.jpg"
        },
        {
            "id": "TT-039",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Xiom",
            "name": "Caja Pelotas Xiom Entrenamiento Blanco x3",
            "price": 46900,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 53 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-039.jpg"
        },
        {
            "id": "TT-040",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Tibhar",
            "name": "Caja Pelotas Tibhar 3 Estrellas Blanco x6",
            "price": 26800,
            "desc": "Categoría: Pelotas | Subcategoría: 3 Estrellas. Stock disponible: 42 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-040.jpg"
        },
        {
            "id": "TT-041",
            "category": "mesas-competicion",
            "tag": "Mesas - Yasaka",
            "name": "Mesa de Tenis de Mesa Yasaka Progress Competición",
            "price": 1078100,
            "desc": "Categoría: Mesas | Subcategoría: Competición. Stock disponible: 1 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-041.jpg"
        },
        {
            "id": "TT-042",
            "category": "maderos-yasaka",
            "tag": "Maderas - Yasaka",
            "name": "Madera Yasaka Alnade All-Round",
            "price": 82900,
            "desc": "Categoría: Maderas | Subcategoría: All-Round (ALL). Stock disponible: 83 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-042.jpg"
        },
        {
            "id": "TT-043",
            "category": "gomas-joola",
            "tag": "Gomas - Joola",
            "name": "Goma Joola Tango Negra MAX",
            "price": 81500,
            "desc": "Categoría: Gomas | Subcategoría: Picos Largos. Stock disponible: 64 uds.",
            "badge": "Joola",
            "img": "img/productos/TT-043.jpg"
        },
        {
            "id": "TT-044",
            "category": "mesas-exterior",
            "tag": "Mesas - Butterfly",
            "name": "Mesa de Tenis de Mesa Butterfly Space Saver 22 Exterior",
            "price": 654700,
            "desc": "Categoría: Mesas | Subcategoría: Exterior. Stock disponible: 5 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-044.jpg"
        },
        {
            "id": "TT-045",
            "category": "accesorios-fundas",
            "tag": "Accesorios - Nittaku",
            "name": "Funda Nittaku para 1 Paleta",
            "price": 30500,
            "desc": "Categoría: Accesorios | Subcategoría: Fundas. Stock disponible: 46 uds.",
            "badge": "Nittaku",
            "img": "img/productos/TT-045.jpg"
        },
        {
            "id": "TT-046",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Stiga",
            "name": "Camiseta Stiga Rojo Talla XL",
            "price": 61600,
            "desc": "Categoría: Vestuario | Subcategoría: Camisetas. Stock disponible: 57 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-046.jpg"
        },
        {
            "id": "TT-047",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Nittaku",
            "name": "Camiseta Nittaku Negro Talla M",
            "price": 31500,
            "desc": "Categoría: Vestuario | Subcategoría: Camisetas. Stock disponible: 15 uds.",
            "badge": "Nittaku",
            "img": "img/productos/TT-047.jpg"
        },
        {
            "id": "TT-048",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Donic",
            "name": "Caja Pelotas Donic 3 Estrellas Naranja x6",
            "price": 8800,
            "desc": "Categoría: Pelotas | Subcategoría: 3 Estrellas. Stock disponible: 65 uds.",
            "badge": "Donic",
            "img": "img/productos/TT-048.jpg"
        },
        {
            "id": "TT-049",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Joola",
            "name": "Short Joola Azul Talla L",
            "price": 58000,
            "desc": "Categoría: Vestuario | Subcategoría: Shorts. Stock disponible: 52 uds.",
            "badge": "Joola",
            "img": "img/productos/TT-049.jpg"
        },
        {
            "id": "TT-050",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Tibhar",
            "name": "Caja Pelotas Tibhar Entrenamiento Blanco x3",
            "price": 32700,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 73 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-050.jpg"
        },
        {
            "id": "TT-051",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Donic",
            "name": "Zapatillas Donic Pro Shoes Talla 45",
            "price": 110600,
            "desc": "Categoría: Vestuario | Subcategoría: Zapatillas. Stock disponible: 85 uds.",
            "badge": "Donic",
            "img": "img/productos/TT-051.jpg"
        },
        {
            "id": "TT-052",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Butterfly",
            "name": "Caja Pelotas Butterfly Entrenamiento Blanco x3",
            "price": 13700,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 83 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-052.jpg"
        },
        {
            "id": "TT-053",
            "category": "maderos-xiom",
            "tag": "Maderas - Xiom",
            "name": "Madera Xiom Ice Cream AZX Defensiva",
            "price": 113100,
            "desc": "Categoría: Maderas | Subcategoría: Defensiva (DEF). Stock disponible: 69 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-053.jpg"
        },
        {
            "id": "TT-054",
            "category": "mesas-competicion",
            "tag": "Mesas - Yasaka",
            "name": "Mesa de Tenis de Mesa Yasaka Progress Competición",
            "price": 1209300,
            "desc": "Categoría: Mesas | Subcategoría: Competición. Stock disponible: 8 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-054.jpg"
        },
        {
            "id": "TT-055",
            "category": "maderos-joola",
            "tag": "Maderas - Joola",
            "name": "Madera Joola Rossi Emotion All-Round",
            "price": 46600,
            "desc": "Categoría: Maderas | Subcategoría: All-Round (ALL). Stock disponible: 96 uds.",
            "badge": "Joola",
            "img": "img/productos/TT-055.jpg"
        },
        {
            "id": "TT-056",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Tibhar",
            "name": "Caja Pelotas Tibhar Entrenamiento Blanco x6",
            "price": 16600,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 87 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-056.jpg"
        },
        {
            "id": "TT-057",
            "category": "maderos-yasaka",
            "tag": "Maderas - Yasaka",
            "name": "Madera Yasaka Ma Lin Extra Offensive All-Round",
            "price": 90400,
            "desc": "Categoría: Maderas | Subcategoría: All-Round (ALL). Stock disponible: 98 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-057.jpg"
        },
        {
            "id": "TT-058",
            "category": "gomas-otros",
            "tag": "Gomas - Stiga",
            "name": "Goma Stiga Mantra M Negra 2.0mm",
            "price": 62900,
            "desc": "Categoría: Gomas | Subcategoría: Lisas. Stock disponible: 54 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-058.jpg"
        },
        {
            "id": "TT-059",
            "category": "limpiadores-spray",
            "tag": "Accesorios - Yasaka",
            "name": "Limpiador Yasaka de Gomas 100ml",
            "price": 11400,
            "desc": "Categoría: Accesorios | Subcategoría: Limpiadores. Stock disponible: 22 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-059.jpg"
        },
        {
            "id": "TT-060",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Xiom",
            "name": "Camiseta Xiom Azul Talla XL",
            "price": 43400,
            "desc": "Categoría: Vestuario | Subcategoría: Camisetas. Stock disponible: 7 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-060.jpg"
        },
        {
            "id": "TT-061",
            "category": "gomas-dhs",
            "tag": "Gomas - DHS",
            "name": "Goma DHS Skyline TG3 Roja MAX",
            "price": 65900,
            "desc": "Categoría: Gomas | Subcategoría: Picos Cortos. Stock disponible: 25 uds.",
            "badge": "DHS",
            "img": "img/productos/TT-061.jpg"
        },
        {
            "id": "TT-062",
            "category": "mesas-entrenamiento",
            "tag": "Mesas - Xiom",
            "name": "Mesa de Tenis de Mesa Xiom Pro 9 Interior",
            "price": 849200,
            "desc": "Categoría: Mesas | Subcategoría: Interior. Stock disponible: 7 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-062.jpg"
        },
        {
            "id": "TT-063",
            "category": "mesas-competicion",
            "tag": "Mesas - Butterfly",
            "name": "Mesa de Tenis de Mesa Butterfly Europa 25 Competición",
            "price": 1035700,
            "desc": "Categoría: Mesas | Subcategoría: Competición. Stock disponible: 7 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-063.jpg"
        },
        {
            "id": "TT-064",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Donic",
            "name": "Caja Pelotas Donic 3 Estrellas Naranja x120",
            "price": 59100,
            "desc": "Categoría: Pelotas | Subcategoría: 3 Estrellas. Stock disponible: 6 uds.",
            "badge": "Donic",
            "img": "img/productos/TT-064.jpg"
        },
        {
            "id": "TT-065",
            "category": "maderos-yasaka",
            "tag": "Maderas - Yasaka",
            "name": "Madera Yasaka Alnade All-Round",
            "price": 127400,
            "desc": "Categoría: Maderas | Subcategoría: All-Round (ALL). Stock disponible: 39 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-065.jpg"
        },
        {
            "id": "TT-066",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Butterfly",
            "name": "Camiseta Butterfly Negro Talla XL",
            "price": 61800,
            "desc": "Categoría: Vestuario | Subcategoría: Camisetas. Stock disponible: 8 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-066.jpg"
        },
        {
            "id": "TT-067",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Tibhar",
            "name": "Zapatillas Tibhar Pro Shoes Talla 41",
            "price": 114700,
            "desc": "Categoría: Vestuario | Subcategoría: Zapatillas. Stock disponible: 84 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-067.jpg"
        },
        {
            "id": "TT-068",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Joola",
            "name": "Zapatillas Joola Pro Shoes Talla 43",
            "price": 83000,
            "desc": "Categoría: Vestuario | Subcategoría: Zapatillas. Stock disponible: 90 uds.",
            "badge": "Joola",
            "img": "img/productos/TT-068.jpg"
        },
        {
            "id": "TT-069",
            "category": "accesorios-cintas",
            "tag": "Accesorios - Nittaku",
            "name": "Red Nittaku Profesional con Soporte",
            "price": 16000,
            "desc": "Categoría: Accesorios | Subcategoría: Redes. Stock disponible: 23 uds.",
            "badge": "Nittaku",
            "img": "img/productos/TT-069.jpg"
        },
        {
            "id": "TT-070",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Nittaku",
            "name": "Caja Pelotas Nittaku Premium 3-Star Blanco x6",
            "price": 39100,
            "desc": "Categoría: Pelotas | Subcategoría: 3 Estrellas. Stock disponible: 97 uds.",
            "badge": "Nittaku",
            "img": "img/productos/TT-070.jpg"
        },
        {
            "id": "TT-071",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Tibhar",
            "name": "Zapatillas Tibhar Pro Shoes Talla 42",
            "price": 156600,
            "desc": "Categoría: Vestuario | Subcategoría: Zapatillas. Stock disponible: 43 uds.",
            "badge": "Tibhar",
            "img": "img/productos/TT-071.jpg"
        },
        {
            "id": "TT-072",
            "category": "accesorios-fundas",
            "tag": "Accesorios - Donic",
            "name": "Funda Donic para 1 Paleta",
            "price": 7700,
            "desc": "Categoría: Accesorios | Subcategoría: Fundas. Stock disponible: 84 uds.",
            "badge": "Donic",
            "img": "img/productos/TT-072.jpg"
        },
        {
            "id": "TT-073",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - Xiom",
            "name": "Caja Pelotas Xiom Entrenamiento Naranja x120",
            "price": 45100,
            "desc": "Categoría: Pelotas | Subcategoría: Entrenamiento. Stock disponible: 8 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-073.jpg"
        },
        {
            "id": "TT-074",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Yasaka",
            "name": "Camiseta Yasaka Rojo Talla L",
            "price": 47100,
            "desc": "Categoría: Vestuario | Subcategoría: Camisetas. Stock disponible: 59 uds.",
            "badge": "Yasaka",
            "img": "img/productos/TT-074.jpg"
        },
        {
            "id": "TT-075",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Stiga",
            "name": "Camiseta Stiga Negro Talla S",
            "price": 29800,
            "desc": "Categoría: Vestuario | Subcategoría: Camisetas. Stock disponible: 30 uds.",
            "badge": "Stiga",
            "img": "img/productos/TT-075.jpg"
        },
        {
            "id": "TT-076",
            "category": "limpiadores-spray",
            "tag": "Accesorios - Butterfly",
            "name": "Limpiador Butterfly de Gomas 100ml",
            "price": 28600,
            "desc": "Categoría: Accesorios | Subcategoría: Limpiadores. Stock disponible: 80 uds.",
            "badge": "Butterfly",
            "img": "img/productos/TT-076.jpg"
        },
        {
            "id": "TT-077",
            "category": "accesorios-pelotas",
            "tag": "Pelotas - DHS",
            "name": "Caja Pelotas DHS 3 Estrellas Naranja x6",
            "price": 46000,
            "desc": "Categoría: Pelotas | Subcategoría: 3 Estrellas. Stock disponible: 79 uds.",
            "badge": "DHS",
            "img": "img/productos/TT-077.jpg"
        },
        {
            "id": "TT-078",
            "category": "accesorios-cintas",
            "tag": "Vestuario - Xiom",
            "name": "Short Xiom Azul Talla M",
            "price": 26500,
            "desc": "Categoría: Vestuario | Subcategoría: Shorts. Stock disponible: 63 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-078.jpg"
        },
        {
            "id": "TT-079",
            "category": "maderos-joola",
            "tag": "Maderas - Joola",
            "name": "Madera Joola Santoru Ofensiva",
            "price": 272800,
            "desc": "Categoría: Maderas | Subcategoría: Ofensiva (OFF). Stock disponible: 100 uds.",
            "badge": "Joola",
            "img": "img/productos/TT-079.jpg"
        },
        {
            "id": "TT-080",
            "category": "maderos-xiom",
            "tag": "Maderas - Xiom",
            "name": "Madera Xiom Stradivarius All-Round",
            "price": 219400,
            "desc": "Categoría: Maderas | Subcategoría: All-Round (ALL). Stock disponible: 18 uds.",
            "badge": "Xiom",
            "img": "img/productos/TT-080.jpg"
        }
    ];

    const productsGrid = document.getElementById('productsGrid');
    const catalogTitle = document.getElementById('catalogTitle');
    const catalogCount = document.getElementById('catalogCount');

    function renderProducts(items) {
        productsGrid.innerHTML = '';
        
        if (items.length === 0) {
            productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #64748b;">No hay productos disponibles en esta categoría actualmente.</p>';
            catalogCount.textContent = '0 productos encontrados.';
            return;
        }

        catalogCount.textContent = `Mostrando ${items.length} productos en catálogo.`;

        items.forEach(prod => {
            const article = document.createElement('article');
            article.className = 'card';
            article.dataset.category = prod.category;

            article.innerHTML = `
                <div class="card-badge">${prod.badge}</div>
                <div class="card-image">
                    <img src="${prod.img}" alt="${prod.name}">
                </div>
                <div class="card-body">
                    <span class="category-tag">${prod.tag}</span>
                    <h3>${prod.name}</h3>
                    <p>${prod.desc}</p>
                    <div class="card-footer">
                        <span class="price">$${prod.price.toLocaleString('es-CL')}</span>
                        <button class="btn btn-add-cart" data-id="${prod.id}" data-name="${prod.name}" data-price="${prod.price}">
                            <i class="fa-solid fa-cart-plus"></i> Añadir
                        </button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(article);
        });

        attachCartEvents();
    }

    renderProducts(totalProductos);

    const filterLinks = document.querySelectorAll('.filter-link, .sidebar-link');
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const filter = link.dataset.filter;
            if (!filter) return;

            filterLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            if (filter === 'all-intro') {
                renderProducts(totalProductos);
                catalogTitle.textContent = 'Catálogo Completo de Productos';
                return;
            }

            const filtered = totalProductos.filter(p => p.category === filter);
            renderProducts(filtered);
            catalogTitle.textContent = `Productos en "${link.textContent.trim()}"`;
        });
    });

    let cart = [];
    const cartBtn = document.getElementById('cartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartCount = document.getElementById('cartCount');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartTotal = document.getElementById('cartTotal');
    const toast = document.getElementById('toast');

    function toggleCart(open) {
        cartDrawer.classList.toggle('active', open);
        cartOverlay.classList.toggle('active', open);
    }

    cartBtn.addEventListener('click', () => toggleCart(true));
    closeCartBtn.addEventListener('click', () => toggleCart(false));
    cartOverlay.addEventListener('click', () => toggleCart(false));

    function showToast(msg) {
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    function updateCart() {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align:center; color:#64748b; padding:2rem 0;">Tu carrito está vacío</p>';
            cartTotal.textContent = '$0';
            return;
        }

        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            const div = document.createElement('div');
            div.style.marginBottom = '12px';
            div.style.borderBottom = '1px solid #cbd5e1';
            div.style.paddingBottom = '8px';
            div.innerHTML = `
                <div style="font-size:0.85rem; font-weight:bold; color:#0f172a;">${item.name}</div>
                <div style="font-size:0.8rem; color:#64748b;">${item.quantity} x $${item.price.toLocaleString('es-CL')}</div>
            `;
            cartItemsContainer.appendChild(div);
        });

        cartTotal.textContent = '$' + total.toLocaleString('es-CL');
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

    document.getElementById('clearCartBtn').addEventListener('click', () => {
        cart = [];
        updateCart();
    });

    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) return showToast('El carrito está vacío');
        showToast('¡Orden procesada con éxito! 🏓');
        cart = [];
        updateCart();
        toggleCart(false);
    });

    const registerModalOverlay = document.getElementById('registerModalOverlay');
    const registerBtn = document.getElementById('registerBtn');
    const sidebarRegisterLink = document.getElementById('sidebarRegisterLink');
    const closeRegisterBtn = document.getElementById('closeRegisterBtn');

    function toggleRegisterModal(show) {
        if (show) {
            registerModalOverlay.classList.add('active');
        } else {
            registerModalOverlay.classList.remove('active');
        }
    }

    registerBtn.addEventListener('click', () => toggleRegisterModal(true));
    sidebarRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        toggleRegisterModal(true);
    });
    closeRegisterBtn.addEventListener('click', () => toggleRegisterModal(false));
    
    registerModalOverlay.addEventListener('click', (e) => {
        if (e.target === registerModalOverlay) toggleRegisterModal(false);
    });

    const togglePasswordBtn = document.getElementById('togglePasswordBtn');
    const passwordInput = document.getElementById('password');
    togglePasswordBtn.addEventListener('click', () => {
        const isPass = passwordInput.type === 'password';
        passwordInput.type = isPass ? 'text' : 'password';
    });

    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const estilo = document.getElementById('estilo').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        let valid = true;

        if (!nombre) { document.getElementById('errorNombre').textContent = 'Nombre requerido'; valid = false; }
        if (!email) { document.getElementById('errorEmail').textContent = 'Correo requerido'; valid = false; }
        if (!estilo) { document.getElementById('errorEstilo').textContent = 'Selecciona tu estilo'; valid = false; }
        if (!password || password.length < 6) { document.getElementById('errorPassword').textContent = 'Mínimo 6 caracteres'; valid = false; }
        if (password !== confirmPassword) { document.getElementById('errorConfirmPassword').textContent = 'Las contraseñas no coinciden'; valid = false; }

        if (valid) {
            alert('¡Registro de Institución Exitoso!');
            registerForm.reset();
            toggleRegisterModal(false);
        }
    });

});