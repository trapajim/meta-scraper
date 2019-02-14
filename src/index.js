import MetadataRules from "./metadata-rules.js";

function extractMetaData(ruleSet, doc) {
  let result = "";

  ruleSet.rules.some(rule => {
    const [query, handler] = rule;
    const element = doc.querySelector(query);

    if (!element) return false;
    result = handler(element);
    return true;
  });
  return result;
}

function GetMetadata(doc) {
  const metadata = {};

  Object.keys(MetadataRules).map(key => {
    metadata[key] = extractMetaData(MetadataRules[key], doc);
  });

  return metadata;
}

export default GetMetadata;
