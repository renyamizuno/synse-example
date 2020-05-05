import { Keyboard, VCA, VCF, VCO, Speaker } from 'synse';

const startButton = document.querySelector('.js-start-button');

startButton.addEventListener('click', () => {
  // create synthesizer!
  const vco = new VCO();
  const vcf = new VCF();
  const vca = new VCA();
  const speaker = new Speaker();
  vco.outputConnect(vcf);
  vcf.outputConnect(vca);
  vca.outputConnect(speaker);

  new Keyboard(vco, vca);

  // init controllers.
  const waveTypeSelect = document.querySelector('.js-oscillator-wave-type');
  const magnification = document.querySelector('.js-oscillator-magnification');
  const lowpass = document.querySelector('.js-low-pass');
  const highpass = document.querySelector('.js-high-pass');
  const attackTime = document.querySelector('.js-attack-time');
  const decayTime = document.querySelector('.js-decay-time');
  const sustainLevel = document.querySelector('.js-sustain-level');
  const releaseTime = document.querySelector('.js-release-time');
  const volume = document.querySelector('.js-volume');

  Object.values(VCO.waveTypes).forEach(w => {
    const o = document.createElement('option');
    o.value = w;
    o.text = w;
    if (w === vco.waveType) {
      o.selected = true;
    }
    waveTypeSelect.appendChild(o);
  });

  magnification.value = vco.magnification;
  lowpass.value = vcf.lowpassFrequency;
  highpass.value = vcf.highpassFrequency;
  attackTime.value = vca.attackTime;
  decayTime.value = vca.decayTime;
  sustainLevel.value = vca.sustainLevel;
  releaseTime.value = vca.releaseTime;
  volume.value = speaker.volume;

  waveTypeSelect.addEventListener('change', e => {
    vco.waveType = e.target.value;
  });

  magnification.addEventListener('change', e => {
    vco.magnification = Number.parseInt(e.target.value, 10);
  });

  lowpass.addEventListener('change', e => {
    vcf.lowpassFrequency = e.target.value;
  });

  highpass.addEventListener('change', e => {
    vcf.highpassFrequency = e.target.value;
  });

  attackTime.addEventListener('change', e => {
    vca.attackTime = e.target.value;
  });

  decayTime.addEventListener('change', e => {
    vca.decayTime = e.target.value;
  });

  sustainLevel.addEventListener('change', e => {
    vca.sustainLevel = e.target.value;
  });

  releaseTime.addEventListener('change', e => {
    vca.releaseTime = e.target.value;
  });

  volume.addEventListener('change', e => {
    speaker.volume = e.target.value;
  });
});
