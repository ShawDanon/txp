import milady from 'milady';

export default function (api, opts = {}) {
  api.registerCommand('codegen', {}, () => {
    milady(opts);
  });
}
