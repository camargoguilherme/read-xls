// Modulo para leitura do xlsx
const xlsx = require('node-xlsx')

/**
 * read a xlsx from file
 * @param path file path
 * @returns array json [ { CODIGO: 001, REFERENCIA: 001, CODE_BAR: 1234567891012, DESCRICAO: 'Example', CUSTO: 9.99, VENDA: 9.99, SALDO: 5, TIPO: 'DIVERSOS' }, ... ]
 */

const readXLS = (path) => {
  console.log(`Lendo Planilha`)
  //Lendo a planilha
  const plan = xlsx.parse(path)

  //Trabalhando as informações para enviar ao banco
  const products = plan[0].data
    .map(([CODIGO, REFERENCIA, CODE_BARRAS, DESCRICAO, CUSTO, VENDA, SALDO, TIPO]) => {
      return { 
        CODIGO, 
        REFERENCIA, 
        CODE_BARRAS, 
        DESCRICAO, 
        CUSTO, 
        VENDA, 
        SALDO, 
        TIPO}
    })
  console.log(`Retornado produtos`)
  return products;
}

module.exports = readXLS




