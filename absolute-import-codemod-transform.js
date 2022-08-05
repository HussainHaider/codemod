export default (fileInfo, api) => {
  const j = api.jscodeshift;
	const root = j(fileInfo.source);
  
  return root.find(j.ImportDeclaration)
    .replaceWith(nodePath  => {
    const { node } = nodePath;
    node.source.value = node.source.value.replaceAll('../', '')
    return node;
  }).toSource();
};
