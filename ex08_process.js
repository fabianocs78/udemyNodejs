function temParam(param){
  return process.argv.indexOf(param) !== -1
}

if(temParam('--producao')){
  console.log('Atencao galera')
} else {
  console.log('tranquilito!!!')
}
