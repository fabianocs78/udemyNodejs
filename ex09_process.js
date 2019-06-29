process.stdout.write('esta gostando?')
process.stdin.on('data', function(data){
  process.stdout.write(`Voce disse ${data.toString()}.Obrigado!\n`)
  process.exit()
})
