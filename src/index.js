import MetadataRules from "./metadata-rules.js";

function extractMetaData(ruleSet, doc) {
  let maxPriority = 0,
    maxValue = "";

  ruleSet.rules.forEach((rule, i) => {
    const [query, handler] = rule;
    const element = doc.querySelector(query);

    if (!element) return;

    let priority = ruleSet.rules.length - i;

    if (priority > maxPriority) {
      maxPriority = priority;
      maxValue = handler(element);
    }
  });
  return maxValue;
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
