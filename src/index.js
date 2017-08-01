import { Keyboard, VCA, VCF, VCO, Speaker } from 'synse';

const vco = new VCO();
const vcf = new VCF();
const vca = new VCA();
const speaker = new Speaker();
vco.outputConnect(vcf);
vcf.outputConnect(vca);
vca.outputConnect(speaker);

new Keyboard(vco, vca);
