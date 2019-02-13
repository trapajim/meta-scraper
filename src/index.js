import MetadataRules from "./metadata-rules.js";

function extractMetaData(ruleSet, doc) {
  let result = "";

  ruleSet.rules.some((rule, i) => {
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
  const ruleSets = MetadataRules;

  Object.keys(ruleSets).map(key => {
    const ruleSet = ruleSets[key];

    metadata[key] = extractMetaData(ruleSet, doc);
  });

  return metadata;
}

export default GetMetadata;
