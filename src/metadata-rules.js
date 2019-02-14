const MetadataRules = {
  description: {
    rules: [
      [
        'meta[property="og:description"]',
        element => element.getAttribute("content")
      ],
      [
        'meta[name="twitter:description" i]',
        element => element.getAttribute("content")
      ],
      ['meta[name="description" i]', element => element.getAttribute("content")]
    ]
  },
  image: {
    rules: [
      [
        'meta[property="og:image:secure_url"]',
        element => element.getAttribute("content")
      ],
      [
        'meta[property="og:image:url"]',
        element => element.getAttribute("content")
      ],
      ['meta[property="og:image"]', element => element.getAttribute("content")],
      [
        'meta[name="twitter:image"]',
        element => element.getAttribute("content")
      ],
      [
        'meta[property="twitter:image"]',
        element => element.getAttribute("content")
      ],
      ['meta[name="thumbnail"]', element => element.getAttribute("content")]
    ]
  },
  keywords: {
    rules: [
      ['meta[name="keywords" i]', element => element.getAttribute("content")]
    ]
  },
  title: {
    rules: [
      ['meta[property="og:title"]', element => element.getAttribute("content")],
      [
        'meta[name="twitter:title"]',
        element => element.getAttribute("content")
      ],
      [
        'meta[property="twitter:title"]',
        element => element.getAttribute("content")
      ],
      ['meta[name="hdl"]', element => element.getAttribute("content")],
      ["title", element => element.text]
    ]
  }
};

export default MetadataRules;
