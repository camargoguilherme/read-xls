const readXLS = require('./xls');
const path = require('path');
const fs = require('fs');

const main = () => {
  const sql = readXLS('./src/products.xlsx').map( ({ CODE_BARRAS, DESCRICAO, VENDA, SALDO }) =>{
    if (DESCRICAO != undefined && DESCRICAO != 'Descrição')
      return `INSERT INTO Products ( bar_code, name, price, quantity ) VALUES ('${CODE_BARRAS}', '${DESCRICAO.trim()}', ${VENDA.replace(',','.')}, ${parseInt(SALDO)});`
  })
  fs.writeFileSync('./src/insert-products.sql', sql.join('\n'));
}

main();