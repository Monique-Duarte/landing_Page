AOS.init();

const dataDoEvento = new Date("may 19, 2026 19:00:00");
const timeStampEvento = dataDoEvento.getTime();

const contaHoras = setInterval (function() {
  const agora = new Date ();
  const timeStampAtual = agora.getTime();

  const distanciaAteEvento = timeStampEvento - timeStampAtual;

  const diasAteOEvento = Math.floor(distanciaAteEvento / (1000 * 60 * 60 * 24));
  // milisegundos * minutos * hora * dia, Math.floor arredonda para baixo = dias
  const horasAteOEvento = Math.floor(distanciaAteEvento % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  // milisegundos * minutos * hora * dia, com o % pega apenas as frações que sobraram do dia = horas
  const minutosAteOEvento = Math.floor(distanciaAteEvento % (1000 * 60 * 60) / (1000 * 60));
  // milisegundos * minutos * hora, com o % pega apenas as frações que sobraram do horas = minutos
  const segundosAteOEvento = Math.floor(distanciaAteEvento % (1000 * 60) / (1000));
  // milisegundos * minutos, com o % pega apenas as frações que sobraram de minutos = segundos

  document.getElementById('contador').innerHTML = `Dia ${diasAteOEvento}d ${horasAteOEvento}h 
  ${minutosAteOEvento}m ${segundosAteOEvento}s`

  if (distanciaAteEvento < 0) {
    clearInterval(contaHoras);
    document.getElementById('contador').innerHTML = 'Até o proximo ano! Dia 19/05';
  }
}, 1000)