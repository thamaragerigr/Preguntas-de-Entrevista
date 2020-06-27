const ciudadesElegidas = ['Tokio', 'Río', 'Berlín', 'Moscú', 'Helsinki']
///// Newbie
function estaIncluidaEstaCiudad(ciudad) {
    if (ciudadesElegidas.includes(ciudad)) {
        return true
    } else {
        return false
    }
}
/////// Mid-level
function estaIncluidaEstaCiudad(ciudad) {
    if (ciudadesElegidas.includes(ciudad)) return true;
    return false
}
////// God
const estaIncluidaEstaCiudad = ciudad => (ciudadesElegidas.includes(ciudad)) ? true : false
