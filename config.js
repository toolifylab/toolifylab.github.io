// ═══════════════════════════════════════════════════════════════
//  DATOS DE COBRO DE TOOLIFYLAB
//  Edita SOLO lo que está entre comillas '...'. No borres comillas,
//  comas ni llaves. Después de editar, guarda con "Commit changes".
// ═══════════════════════════════════════════════════════════════
window.TOOLIFY_CONFIG = {

  // 1) Clave de Web3Forms (el aviso de "Ya pagué" te llega solo a tu correo)
  web3formsKey: '56f231fc-85e9-4e68-9580-db16eb35600b',

  // 2) Correo de Toolifylab (contacto y respaldo de avisos)
  correo: 'toolifylab26@gmail.com',

  // 3) Enlaces de los 3 productos de Payhip
  payhip: {
    basico: 'https://payhip.com/b/TPK21',     // Fluu Básico, 1 mes, $12
    popular: 'https://payhip.com/b/b23Tx',    // Fluu Popular, 3 meses, $30
    mejor: 'https://payhip.com/b/px6QL'       // Fluu Mejor precio, 12 meses, $99
  },

  // 4) Datos de TRANSFERENCIA BANCARIA que verá el cliente
  transferencia: {
    banco: 'Mercantil',
    titular: 'PENDIENTE',          // nombre del titular de la cuenta
    tipoCuenta: 'PENDIENTE',       // corriente o ahorro
    cuenta: 'PENDIENTE',           // número de cuenta (20 dígitos)
    cedula: '22282428'        // cédula o RIF del titular
  },

  // 5) Tu ID de Binance Pay
  binance: {
    payId: '234154587'
  },

  // 6) TASA DEL DÍA: cuántos bolívares vale 1 dólar. Cámbiala cada día.
  //    Usa punto para los decimales, sin comillas. Ejemplo: 38.45
  tasaBs: 897.53,
  tasaFecha: '09/11/2026',    // fecha de esa tasa, por ejemplo: '10/11/2026'

  // 7) Dirección de Fluu, para el botón "Probar 3 días gratis"
  fluuUrl: 'https://jetgui.github.io/fluu-app/'

};
