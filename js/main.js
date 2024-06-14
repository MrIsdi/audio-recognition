const onAudio = document.getElementById('onAudio');
const offAudio = document.getElementById('offAudio');

let mic
async function main(mic){
    try {
        const audioData = await mic.capture();
        const MODEL_URL =
          "../model/model.json";
        const model = await tf.loadGraphModel(MODEL_URL);

        const timeStart = Date.now();
        const data = audioData.waveform;
        const input = tf.tensor1d(data.dataSync());
        console.log(input);
        const outputs = model.execute({
          audio: input,
        });
        const className = ["close", "open", "noise"];

        const close = document.getElementById("close");
        const open = document.getElementById("open");
        const noise = document.getElementById("noise");
        console.log(outputs.dataSync());
        close.innerHTML = outputs.dataSync()[0].toFixed(2);
        open.innerHTML = outputs.dataSync()[1].toFixed(2);
        noise.innerHTML = outputs.dataSync()[2].toFixed(2);

        const timeStop = Date.now();
        const delay = timeStop - timeStart;

        setTimeout(() => {
          main(mic);
        }, delay);
      } catch (e) {
        console.log(e);
      }
}

onAudio.onclick = async () => {
    mic = await tf.data.microphone({
      fftSize: 1024,
      columnTruncateLength: 232,
      numFramesPerSpectrogram: 43,
      sampleRateHz: 48000,
      includeSpectrogram: true,
      includeWaveform: true,
    });
    main(mic);
  };

  offAudio.onclick = async () => {
    mic.stop();
  };