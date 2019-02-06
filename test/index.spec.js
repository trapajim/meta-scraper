import { assert } from "chai";
import GetMetadata from "../src/index";
import domino from "domino";

describe("Get Metadata", function() {
  const sampleDescription = "Page description";
  const sampleImage = "http://www.example.com/sample.png";
  const sampleTitle = "Page Title";
  const sampleKeywords = "sample1, sample2";
  const sampleHtml = `
  <html lang="en-CA">
  <head>
    <meta property="og:description" content="${sampleDescription}" />
    <meta property="og:image" content="${sampleImage}" />
    <meta property="og:title" content="${sampleTitle}" />
    <meta name="keywords" content="${sampleKeywords}">
    <meta
  </head>
  </html>
`;
  it("parses metadata", () => {
    const doc = domino.createWindow(sampleHtml).document;
    const metadata = GetMetadata(doc);

    assert.equal(
      metadata.description,
      sampleDescription,
      `Unable to find ${sampleDescription} in ${sampleHtml}`
    );
    assert.equal(
      metadata.image,
      sampleImage,
      `Unable to find ${sampleImage} in ${sampleHtml}`
    );
    assert.equal(
      metadata.keywords,
      sampleKeywords,
      `Unable to find ${sampleKeywords} in ${sampleHtml}`
    );
    assert.equal(
      metadata.title,
      sampleTitle,
      `Unable to find ${sampleTitle} in ${sampleHtml}`
    );
  });
});
