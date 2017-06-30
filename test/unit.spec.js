import Lab from 'lab';
import code from 'code';

const lab = exports.lab = Lab.script();

const { it, describe } = lab;

describe('Teste do teste', (done) => {
  code.expect(true).to.be.equal(true);
});
