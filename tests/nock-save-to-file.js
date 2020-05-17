const fs = require('fs');

const slugify = text =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');

const logRequest = content => {
  const { method, scope, path } = content;

  const _scope = slugify(scope);
  const _path = slugify(path);

  const filename = `requests/${method}__${_scope}${_path}.json`;
  const json = JSON.stringify(content.response, null, 2);

  fs.writeFile(filename, json, () => {});
};

module.exports = logRequest;
