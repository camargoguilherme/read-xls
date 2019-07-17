const readXLS = require('./xls');
const path = require('path');
const fs = require('fs');

const main = () => {
  const sql = readXLS('./src/products.xlsx').map( ({ CODE_BARRAS, DESCRICAO, VENDA, SALDO }) =>{
    if (DESCRICAO != undefined && DESCRICAO != 'Descrição')
      return `INSERT INTO Products ( bar_code, name, price, quantity ) VALUES ('${CODE_BARRAS}', '${DESCRICAO.trim()}', ${VENDA.replace(',','.')}, ${parseInt(SALDO)});`
  })
  const products = readXLS('./src/products.xlsx').map( product =>{
    if (product.DESCRICAO != undefined && product.DESCRICAO != 'Descrição')
      return product
  })
  fs.writeFileSync('./src/products.js', JSON.stringify(products, null , 2));
}

main();