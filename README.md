# Meta scraper

A simple Javascript library to easily parse the metadata from a web page.

The library aims to find a persistent set of metadata for a given web page.
the parser will look for following formats [opengraph](http://ogp.me/),[twitter](https://dev.twitter.com/cards/markup) and [meta tags](https://developer.mozilla.org/en/docs/Web/HTML/Element/meta)

the output will be following object

    {
        description: 'Page description'
        image: 'http://www.example.com/sample.png'
        keywords: 'sample1, sample2'
        title: 'Page title'
    }

regardless of which meta tag was used.

# Usage

    import GetMetadata from 'GetMetadata';

    const metadata = GetMetadata(window.document);
