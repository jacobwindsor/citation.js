/* global describe, require, it, expect, beforeEach */

const fs = require('fs')
const path = require('path')
const Cite = require('../lib/index.js')

const file1 = fs.readFileSync(path.join(__dirname, 'Q21972834.json'), 'utf8')
const file2 = fs.readFileSync(path.join(__dirname, 'Q27795847.json'), 'utf8')

const testOutput = {
  wd: {
    id: 'Q21972834',
    simple: [{'wikiId': 'Q21972834', 'id': 'Q21972834', 'type': 'article-journal', 'title': 'Assembling the 20 Gb white spruce (Picea glauca) genome from whole-genome shotgun sequencing data', 'volume': '29', 'issue': '12', 'issued': [{'date-parts': [2013, 6, 15]}], 'page': '1492-7', 'container-title': 'Bioinformatics', 'DOI': '10.1093/BIOINFORMATICS/BTT178', 'author': [{'given': 'Inanc', 'family': 'Birol'}, {'given': 'Anthony', 'family': 'Raymond'}, {'given': 'Shaun D', 'family': 'Jackman'}, {'given': 'Stephen', 'family': 'Pleasance'}, {'given': 'Robin', 'family': 'Coope'}, {'given': 'Greg A', 'family': 'Taylor'}, {'given': 'Macaire Man Saint', 'family': 'Yuen'}, {'given': 'Christopher I', 'family': 'Keeling'}, {'given': 'Dana', 'family': 'Brand'}, {'given': 'Benjamin P', 'family': 'Vandervalk'}, {'given': 'Heather', 'family': 'Kirk'}, {'given': 'Pawan', 'family': 'Pandoh'}, {'given': 'Richard A', 'family': 'Moore'}, {'given': 'Yongjun', 'family': 'Zhao'}, {'given': 'Andrew J', 'family': 'Mungall'}, {'given': 'Barry', 'family': 'Jaquish'}, {'given': 'Alvin', 'family': 'Yanchuk'}, {'given': 'Carol', 'family': 'Ritland'}, {'given': 'Brian', 'family': 'Boyle'}, {'given': 'Jean', 'family': 'Bousquet'}, {'given': 'Kermit', 'family': 'Ritland'}, {'given': 'John', 'family': 'Mackay'}, {'given': 'Jörg', 'family': 'Bohlmann'}, {'given': 'Steven J M', 'family': 'Jones'}]}],
    author: [{'wikiId': 'Q27795847', 'id': 'Q27795847', 'type': 'article-journal', 'issued': [{'date-parts': [2016, 11, 8]}], 'title': 'SPLASH, a hashed identifier for mass spectra', 'volume': '34', 'page': '1099–1101', 'container-title': 'Nature Biotechnology', 'URL': 'http://rdcu.be/msZj', 'DOI': '10.1038/NBT.3689', 'author': [{'given': 'Gert', 'family': 'Wohlgemuth'}, {'given': 'Sajjan S', 'family': 'Mehta'}, {'given': 'Ramon F', 'family': 'Mejia'}, {'given': 'Steffen', 'family': 'Neumann'}, {'given': 'Diego', 'family': 'Pedrosa'}, {'given': 'Tomáš', 'family': 'Pluskal'}, {'given': 'Emma', 'family': 'Schymanski'}, {'given': 'Egon', 'family': 'Willighagen'}, {'given': 'Michael', 'family': 'Wilson'}, {'given': 'David S', 'family': 'Wishart'}, {'given': 'Masanori', 'family': 'Arita'}, {'given': 'Pieter C', 'family': 'Dorrestein'}, {'given': 'Nuno', 'family': 'Bandeira'}, {'given': 'Mingxun', 'family': 'Wang'}, {'given': 'Tobias', 'family': 'Schulze'}, {'given': 'Reza M', 'family': 'Salek'}, {'given': 'Christoph', 'family': 'Steinbeck'}, {'given': 'Venkata Chandrasekhar', 'family': 'Nainala'}, {'given': 'Robert', 'family': 'Mistrik'}, {'given': 'Takaaki', 'family': 'Nishioka'}, {'given': 'Oliver', 'family': 'Fiehn'}]}],
    api: [
      'https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q21972834&format=json&languages=en',
      'https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q21972834%7CQ27795847&format=json&languages=en'
    ]
  },
  bibtex: {
    simple: [{'label': 'Steinbeck2003', 'type': 'article-journal', 'author': [{'given': 'Christoph', 'family': 'Steinbeck'}, {'given': 'Yongquan', 'family': 'Han'}, {'given': 'Stefan', 'family': 'Kuhn'}, {'given': 'Oliver', 'family': 'Horlacher'}, {'given': 'Edgar', 'family': 'Luttmann'}, {'given': 'Egon', 'family': 'Willighagen'}], 'year': '2003', 'title': 'The Chemistry Development Kit (CDK): an open-source Java library for Chemo- and Bioinformatics', 'container-title': 'Journal of chemical information and computer sciences', 'volume': '43', 'issue': '2', 'page': '493-500', 'DOI': '10.1021/ci025584y', 'ISBN': '2214707786', 'ISSN': '0095-2338', 'URL': 'http://www.ncbi.nlm.nih.gov/pubmed/12653513', 'id': 'Steinbeck2003'}],
    whitespace: [{'label': 'Ekstrand:2009:RYD', 'type': 'paper-conference', 'author': [{'given': 'Michael D.', 'family': 'Ekstrand'}, {'given': 'John T.', 'family': 'Riedl'}], 'title': 'rv you\'re dumb: Identifying Discarded Work in Wiki Article History', 'container-title': 'Proceedings of the 5th International Symposium on Wikis and Open Collaboration', 'collection-title': 'WikiSym \'09', 'year': '2009', 'ISBN': '978-1-60558-730-1', 'publisher-place': 'New York, NY, USA', 'page': '4:1-4:10', 'URL': 'https://dx.doi.org/10.1145/1641309.1641317', 'DOI': '10.1145/1641309.1641317', 'publisher': 'ACM', 'id': 'Ekstrand:2009:RYD'}],

    plain: '@article{Hall1957Correlation, author={H. K. Hall}, doi={10.1021/ja01577a030}, journal={Journal of the American Chemical Society}, issue=20, pages={5441--5444}, title={{Correlation of the Base Strengths of Amines 1}}, volume=79, year=1957, }',
    json: [{'label': 'Hall1957Correlation', 'type': 'article', 'properties': {'author': 'H. K. Hall', 'doi': '10.1021/ja01577a030', 'journal': 'Journal of the American Chemical Society', 'issue': '20', 'pages': '5441--5444', 'title': 'Correlation of the Base Strengths of Amines 1', 'volume': '79', 'year': '1957'}}],
    bibtxt: `[Hall1957Correlation]
\ttype: article
\tauthor: H. K. Hall
\tdoi: 10.1021/ja01577a030
\tjournal: Journal of the American Chemical Society
\tissue: 20
\tpages: 5441--5444
\ttitle: Correlation of the Base Strengths of Amines 1
\tvolume: 79
\tyear: 1957`
  },
  bibtxt: {
    author: [{given: 'J.W.', family: 'Goethe'}],
    title: 'Faust. Der Tragödie Erster Teil',
    publisher: 'Reclam',
    year: '1986',
    'publisher-place': 'Stuttgart',
    type: 'book',
    id: 'Fau86',
    label: 'Fau86'
  },
  bibjson: {
    simple: [{'publisher': 'BioMed Central', 'journal': 'Journal of Ethnobiology and Ethnomedicine', 'title': 'Gitksan medicinal plants-cultural choice and efficacy', 'authors': 'Leslie Main Johnson', 'date': '2006-06-21', 'doi': '10.1186/1746-4269-2-29', 'volume': '2', 'issue': '1', 'firstpage': '1', 'fulltext_html': 'http://ethnobiomed.biomedcentral.com/articles/10.1186/1746-4269-2-29', 'fulltext_pdf': 'http://ethnobiomed.biomedcentral.com/track/pdf/10.1186/1746-4269-2-29?site=http://ethnobiomed.biomedcentral.com', 'license': 'This article is published under license to BioMed Central Ltd. This is an Open Access article distributed under the terms of the Creative Commons Attribution License (http://creativecommons.org/licenses/by/2.0), which permits unrestricted use, distribution, and reproduction in any medium, provided the original work is properly cited.', 'copyright': '2006 Johnson; licensee BioMed Central Ltd.', 'type': 'article-journal', 'author': [{'given': 'Leslie Main', 'family': 'Johnson'}], 'page-first': '1', 'page': '1', 'issued': [{'date-parts': [2006, 6, 21]}], 'container-title': 'Journal of Ethnobiology and Ethnomedicine', 'id': '10.1186/1746-4269-2-29', 'DOI': '10.1186/1746-4269-2-29'}]
  },
  csl: {
    apa: 'Hall, H. K. Correlation of the Base Strengths of Amines 1. Journal of the American Chemical Society, 79(20), 5441–5444. https://doi.org/10.1021/ja01577a030',
    vancouver: '1. Hall HK. Correlation of the Base Strengths of Amines 1. Journal of the American Chemical Society. 79(20):5441–4.',
    title: 'Correlation of the Base Strengths of Amines 1',
    html: {
      apa: `<div class="csl-bib-body">
  <div data-csl-entry-id="Q23571040" class="csl-entry">Hall, H. K. Correlation of the Base Strengths of Amines 1. <i>Journal of the American Chemical Society</i>, <i>79</i>(20), 5441–5444. https://doi.org/10.1021/ja01577a030</div>
</div>`,
      vancouver: `<div class="csl-bib-body">
  <div data-csl-entry-id="Q23571040" class="csl-entry">
    <div class="csl-left-margin">1. </div><div class="csl-right-inline">Hall HK. Correlation of the Base Strengths of Amines 1. Journal of the American Chemical Society. 79(20):5441–4.</div>
   </div>
</div>`,
      title: `<div class="csl-bib-body">
  <div data-csl-entry-id="Q23571040" class="csl-entry">Correlation of the Base Strengths of Amines 1</div>
</div>`
    }
  }
}

const testInput = {
  wd: {
    simple: JSON.parse(file1),
    author: JSON.parse(file2),
    url: 'https://www.wikidata.org/wiki/Q21972834',
    list: {
      space: 'Q21972834 Q27795847',
      newline: 'Q21972834\nQ27795847',
      comma: 'Q21972834,Q27795847'
    }
  },
  bibtex: {
    simple: '@article{Steinbeck2003, author = {Steinbeck, Christoph and Han, Yongquan and Kuhn, Stefan and Horlacher, Oliver and Luttmann, Edgar and Willighagen, Egon}, year = {2003}, title = {{The Chemistry Development Kit (CDK): an open-source Java library for Chemo- and Bioinformatics.}}, journal = {Journal of chemical information and computer sciences}, volume = {43}, number = {2}, pages = {493--500}, doi = {10.1021/ci025584y}, isbn = {2214707786}, issn = {0095-2338}, pmid = {12653513}, url = {http://www.ncbi.nlm.nih.gov/pubmed/12653513} }',
    whitespace: '@inproceedings{Ekstrand:2009:RYD,\n author = {Michael D. Ekstrand and John T. Riedl},\n title = {rv you\'re dumb: Identifying Discarded Work in Wiki Article History},\n booktitle = {Proceedings of the 5th International Symposium on Wikis and Open Collaboration},\n series = {WikiSym \'09},\n year = {2009},\n isbn = {978-1-60558-730-1},\n location = {Orlando, Florida},\n pages = {4:1--4:10},\n articleno = {4},\n numpages = {10},\n url = {https://dx.doi.org/10.1145/1641309.1641317},\n doi = {10.1145/1641309.1641317},\n acmid = {1641317},\n publisher = {ACM},\n address = {New York, NY, USA},\n keywords = {Wiki, Wikipedia, article history, visualization},\n}\n'
  },
  bibtxt: {
    simple: `[Fau86]
  author:    J.W. Goethe
  title:     Faust. Der Tragödie Erster Teil
  publisher: Reclam
  year:      1986
  address:   Stuttgart`,
    multiple: `[Fau86]
  author:    J.W. Goethe
  title:     Faust. Der Tragödie Erster Teil
  publisher: Reclam
  year:      1986
  address:   Stuttgart

[Steinbeck2003]
  type: article
  author: Christoph Steinbeck and Yongquan Han and Stefan Kuhn and Oliver Horlacher and Edgar Luttmann and Egon Willighagen
  doi: 10.1021/ci025584y
  isbn: 2214707786
  issn: 0095-2338
  journal: Journal of chemical information and computer sciences
  issue: 2
  pages: 493-500
  title: The Chemistry Development Kit (CDK): an open-source Java library for Chemo- and Bioinformatics
  volume: 43
  year: 2003
  url: http://www.ncbi.nlm.nih.gov/pubmed/12653513`,
    whitespace: `[Fau86]  
    
  author:    J.W. Goethe
  title:     Faust. Der Tragödie Erster Teil
  

  publisher: Reclam
  year:      1986
  address:   Stuttgart
`
  },
  bibjson: {
    simple: { 'publisher': { 'value': [ 'BioMed Central' ] }, 'journal': { 'value': [ 'Journal of Ethnobiology and Ethnomedicine' ] }, 'title': { 'value': [ 'Gitksan medicinal plants-cultural choice and efficacy' ] }, 'authors': { 'value': [ 'Leslie Main Johnson' ] }, 'date': { 'value': [ '2006-06-21' ] }, 'doi': { 'value': [ '10.1186/1746-4269-2-29' ] }, 'volume': { 'value': [ '2' ] }, 'issue': { 'value': [ '1' ] }, 'firstpage': { 'value': [ '1' ] }, 'fulltext_html': { 'value': [ 'http://ethnobiomed.biomedcentral.com/articles/10.1186/1746-4269-2-29' ] }, 'fulltext_pdf': { 'value': [ 'http://ethnobiomed.biomedcentral.com/track/pdf/10.1186/1746-4269-2-29?site=http://ethnobiomed.biomedcentral.com' ] }, 'license': { 'value': [ 'This article is published under license to BioMed Central Ltd. This is an Open Access article distributed under the terms of the Creative Commons Attribution License (http://creativecommons.org/licenses/by/2.0), which permits unrestricted use, distribution, and reproduction in any medium, provided the original work is properly cited.' ] }, 'copyright': { 'value': [ '2006 Johnson; licensee BioMed Central Ltd.' ] } }
  },
  csl: {
    empty: {},
    sort: [
      { author: [ { family: 'b' } ], id: 'b' },
      { author: [ { family: 'a' } ], id: 'a' }
    ],
    ids: [
      { id: 'b' },
      { id: 'a' }
    ],
    simple: [
      {
        'id': 'Q23571040',
        'type': 'article-journal',
        'title': 'Correlation of the Base Strengths of Amines 1',
        'DOI': '10.1021/ja01577a030',
        'author': [
          {'given': 'H. K.', 'family': 'Hall'}
        ],
        'issued': [
          {'date-parts': ['1957', '1', '1']}
        ],
        'container-title': 'Journal of the American Chemical Society',
        'volume': '79',
        'issue': '20',
        'page': '5441-5444'
      }
    ]
  }
}

const customTemplate = `<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="sort-only" page-range-format="minimal">
  <bibliography>
    <layout>
      <text variable="title"/>
    </layout>
  </bibliography>
</style>`

describe('Cite object', function () {
  describe('initialisation', function () {
    it('returns a Cite object', function () {
      const test = new Cite()
      expect(test instanceof Cite).toBe(true)
    })
  })

  describe('.async()', function () {
    beforeEach(start => start())

    describe('with callback', function () {
      it('works', function (done) {
        Cite.async(testInput.wd.url, test => {
          expect(test instanceof Cite).toBe(true)
          expect(test.data[0].wikiId).toBe(testOutput.wd.id)
          done()
        })
      })

      it('works with options', function (done) {
        Cite.async([], {}, test => {
          expect(test instanceof Cite).toBe(true)
          expect(test.data.length).toBe(0)
          done()
        })
      })
    })

    describe('with promise', function () {
      it('works', function (done) {
        Cite.async(testInput.wd.url).then(test => {
          expect(test instanceof Cite).toBe(true)
          expect(test.data[0].wikiId).toBe(testOutput.wd.id)
          done()
        })
      })

      it('works with options', function (done) {
        Cite.async([], {}).then(test => {
          expect(test instanceof Cite).toBe(true)
          expect(test.data.length).toBe(0)
          done()
        })
      })
    })
  })

  describe('function', function () {
    describe('add()', function () {
      const test = new Cite(testInput.csl.empty)
      test.add(testInput.csl.empty, true)

      it('works', function () {
        expect(test.data.length).toBe(2)
        expect(test.log.length).toBe(2)
      })
    })

    describe('set()', function () {
      const test = new Cite(testInput.csl.empty)
      test.set(testInput.csl.empty, true)

      it('works', function () {
        expect(test.data.length).toBe(1)
        expect(test.log.length).toBe(2)
      })
    })

    describe('reset()', function () {
      const test = new Cite(testInput.csl.empty)
      test.reset(true)

      it('works', function () {
        expect(test.data.length).toBe(0)
        expect(test.log.length).toBe(2)
      })
    })

    describe('options()', function () {
      const test = new Cite()
      test.options({format: 'string'}, true)

      it('works', function () {
        expect(test._options.format).toBe('string')
        expect(test.log.length).toBe(2)
      })
    })

    describe('currentVersion()', function () {
      const test = new Cite(testInput.csl.empty)

      it('works', function () {
        expect(test.currentVersion()).toBe(1)
        test.add(testInput.csl.empty, true)
        expect(test.currentVersion()).toBe(2)
      })
    })

    describe('retrieveVersion()', function () {
      const test = new Cite(testInput.csl.empty)

      it('works', function () {
        expect(test.log.length).toBe(1)
        expect(test.data.length).toBe(1)

        test.add(testInput.csl.empty, true)

        expect(test.log.length).toBe(2)
        expect(test.data.length).toBe(2)

        const test2 = test.retrieveVersion(1)

        expect(test2.log.length).toBe(1)
        expect(test2.data.length).toBe(1)
      })

      it('doesn\'t change parent data', function () {
        expect(test.log.length).toBe(2)
        expect(test.data.length).toBe(2)
      })
    })

    describe('undo()', function () {
      const test = new Cite(testInput.csl.empty)

      it('works', function () {
        expect(test.log.length).toBe(1)
        expect(test.data.length).toBe(1)

        test.add(testInput.csl.empty, true).save()

        expect(test.log.length).toBe(3)
        expect(test.data.length).toBe(2)

        const test2 = test.undo()

        expect(test2.log.length).toBe(2)
        expect(test2.data.length).toBe(1)
      })

      it('doesn\'t change parent data', function () {
        expect(test.log.length).toBe(3)
        expect(test.data.length).toBe(2)
      })
    })

    describe('retrieveLastVersion()', function () {
      const test = new Cite(testInput.csl.empty)

      it('works', function () {
        expect(test.log.length).toBe(1)
        expect(test.data.length).toBe(1)

        test.add(testInput.csl.empty, true)

        expect(test.log.length).toBe(2)
        expect(test.data.length).toBe(2)

        const test2 = test.retrieveLastVersion()

        expect(test2.log.length).toBe(2)
        expect(test2.data.length).toBe(1)
      })

      it('doesn\'t change parent data', function () {
        expect(test.log.length).toBe(2)
        expect(test.data.length).toBe(2)
      })
    })

    describe('save()', function () {
      const test = new Cite(testInput.csl.empty)

      it('works', function () {
        expect(test.log.length).toBe(1)
        expect(test.data.length).toBe(1)

        test.save().add(testInput.csl.empty).save()

        expect(test.log.length).toBe(3)
        expect(test.data.length).toBe(2)

        const test2 = test.undo()

        expect(test2.log.length).toBe(2)
        expect(test2.data.length).toBe(1)
      })

      it('doesn\'t change parent data', function () {
        expect(test.log.length).toBe(3)
        expect(test.data.length).toBe(2)
      })
    })

    describe('sort()', function () {
      const test = new Cite(testInput.csl.sort)

      it('works', function () {
        expect(test.data[0].author[0].family).toBe('b')
        expect(test.data[1].author[0].family).toBe('a')

        test.sort()

        expect(test.data[0].author[0].family).toBe('a')
        expect(test.data[1].author[0].family).toBe('b')
      })
    })

    describe('getIds()', function () {
      const test = new Cite(testInput.csl.ids)

      it('works', function () {
        expect(test.data[0].id).toBe('b')
        expect(test.data[1].id).toBe('a')

        const out = test.getIds()

        expect(out[0]).toBe('b')
        expect(out[1]).toBe('a')
      })

      it('doesn\'t change parent data', function () {
        expect(test.log.length).toBe(1)
        expect(test.data.length).toBe(2)
      })
    })
  })

  describe('input', function () {
    describe('Wikidata URL', function () {
      it('handles input type', function () {
        expect(Cite.parse.input.type(testInput.wd.url)).toBe('url/wikidata')
      })

      it('parses input correctly', function () {
        const test = Cite.parse.input.chainLink(testInput.wd.url)
        expect(test[0].replace(/[&?]origin=\*/, '')).toBe(testOutput.wd.api[0])
      })
    })

    describe('Wikidata ID list', function () {
      describe('separated by spaces', function () {
        it('handles input type', function () {
          expect(Cite.parse.input.type(testInput.wd.list.space)).toBe('list/wikidata')
        })

        it('parses input correctly', function () {
          const test = Cite.parse.input.chainLink(testInput.wd.list.space)
          expect(test[0].replace(/[&?]origin=\*/, '')).toBe(testOutput.wd.api[1])
        })
      })

      describe('separated by newlines', function () {
        it('handles input type', function () {
          expect(Cite.parse.input.type(testInput.wd.list.newline)).toBe('list/wikidata')
        })

        it('parses input correctly', function () {
          const test = Cite.parse.input.chainLink(testInput.wd.list.newline)
          expect(test[0].replace(/[&?]origin=\*/, '')).toBe(testOutput.wd.api[1])
        })
      })

      describe('separated by commas', function () {
        it('handles input type', function () {
          expect(Cite.parse.input.type(testInput.wd.list.comma)).toBe('list/wikidata')
        })

        it('parses input correctly', function () {
          const test = Cite.parse.input.chainLink(testInput.wd.list.comma)
          expect(test[0].replace(/[&?]origin=\*/, '')).toBe(testOutput.wd.api[1])
        })
      })
    })

    describe('Wikidata JSON', function () {
      const test1 = new Cite(testInput.wd.simple)
      const test2 = new Cite(testInput.wd.author)

      it('handles input type', function () {
        expect(Cite.parse.input.type(testInput.wd.simple)).toBe('object/wikidata')
        expect(Cite.parse.input.type(testInput.wd.author)).toBe('object/wikidata')
      })

      it('parses input correctly', function () {
        expect(test1.data).toEqual(testOutput.wd.simple)
      })

      describe('with linked authors', function () {
        it('parses input correctly', function () {
          expect(test2.data).toEqual(testOutput.wd.author)
        })
      })
    })

    describe('BibTeX string', function () {
      const test1 = new Cite(testInput.bibtex.simple)
      const test2 = new Cite(testInput.bibtex.whitespace)

      it('handles input type', function () {
        expect(Cite.parse.input.type(testInput.bibtex.simple)).toBe('string/bibtex')
        expect(Cite.parse.input.type(testInput.bibtex.whitespace)).toBe('string/bibtex')
      })

      it('parses input correctly', function () {
        expect(test1.data).toEqual(testOutput.bibtex.simple)
      })

      describe('with whitespace and unknown fields', function () {
        it('parses input correctly', function () {
          expect(test2.data).toEqual(testOutput.bibtex.whitespace)
        })
      })
    })

    describe('Bib.TXT string', function () {
      it('handles input type', function () {
        expect(Cite.parse.input.type(testInput.bibtxt.simple)).toBe('string/bibtxt')
      })

      it('parses input correctly', function () {
        const test = new Cite(testInput.bibtxt.simple)
        expect(test.data).toEqual([testOutput.bibtxt])
      })

      describe('with multiple entries', function () {
        it('handles input type', function () {
          expect(Cite.parse.input.type(testInput.bibtxt.multiple)).toBe('string/bibtxt')
        })

        it('parses input correctly', function () {
          const test = new Cite(testInput.bibtxt.multiple)
          expect(test.data).toEqual([testOutput.bibtxt, testOutput.bibtex.simple[0]])
        })
      })

      describe('with whitespace', function () {
        it('handles input type', function () {
          expect(Cite.parse.input.type(testInput.bibtxt.whitespace)).toBe('string/bibtxt')
        })

        it('parses input correctly', function () {
          const test = new Cite(testInput.bibtxt.whitespace)
          expect(test.data).toEqual([testOutput.bibtxt])
        })
      })
    })

    describe('CSL-JSON', function () {
      const test = new Cite(testInput.csl.simple[0])

      it('handles input type', function () {
        expect(Cite.parse.input.type(testInput.csl.simple[0])).toBe('object/csl')
      })
      it('parses input correctly', function () {
        expect(test.data).toEqual(testInput.csl.simple)
      })
    })

    describe('ContentMine JSON', function () {
      const test = new Cite(testInput.bibjson.simple)

      it('handles input type', function () {
        expect(Cite.parse.input.type(testInput.bibjson.simple)).toBe('object/contentmine')
      })
      it('parses input correctly', function () {
        expect(test.data).toEqual(testOutput.bibjson.simple)
      })
    })

    describe('Array', function () {
      const data = [{id: 'a'}, {id: 'b'}]
      const test = new Cite(data)

      it('handles input type', function () {
        expect(Cite.parse.input.type(data)).toBe('array/csl')
      })
      it('parses input correctly', function () {
        expect(test.data).toEqual(data)
      })
      it('duplicates objects', function () {
        expect(test.data).not.toBe(data)
      })

      describe('nested', function () {
        const obj1 = {id: 'a'}
        const obj2 = {id: 'b'}
        const test = new Cite([[obj1], obj2])

        it('handles input type', function () {
          expect(Cite.parse.input.type([[obj1], obj2])).toBe('array/else')
        })
        it('parses input correctly', function () {
          expect(test.data).toEqual([obj1, obj2])
        })
        it('duplicates objects', function () {
          expect(test.data[0]).not.toBe(obj1)
          expect(test.data[1]).not.toBe(obj2)
        })
      })
    })

    describe('Empty', function () {
      describe('string', function () {
        describe('empty', function () {
          const test = new Cite('')

          it('handles input type', function () {
            expect(Cite.parse.input.type('')).toBe('string/empty')
          })
          it('parses input correctly', function () {
            expect(test.data).toEqual([])
          })
        })
        describe('whitespace', function () {
          const test = new Cite('   \t\n \r  ')

          it('handles input type', function () {
            expect(Cite.parse.input.type('   \t\n \r  ')).toBe('string/whitespace')
          })
          it('parses input correctly', function () {
            expect(test.data).toEqual([])
          })
        })
      })

      describe('null', function () {
        const test = new Cite(null)

        it('handles input type', function () {
          expect(Cite.parse.input.type(null)).toBe('empty')
        })
        it('parses input correctly', function () {
          expect(test.data).toEqual([])
        })
      })

      describe('undefined', function () {
        const test = new Cite(undefined)

        it('handles input type', function () {
          expect(Cite.parse.input.type(undefined)).toBe('empty')
        })
        it('parses input correctly', function () {
          expect(test.data).toEqual([])
        })
      })
    })
  })

  describe('output', function () {
    const test = new Cite(testInput.csl.simple)

    describe('Formatted CSL', function () {
      describe('html', function () {
        describe('default built-in template (APA)', function () {
          const out = test.get({
            format: 'string',
            type: 'html',
            style: 'citation-apa'
          }).trim()

          it('outputs correctly', function () {
            expect(out).toBe(testOutput.csl.html.apa)
          })
        })

        describe('non-default built-in template (Vancouver)', function () {
          const out = test.get({
            format: 'string',
            type: 'html',
            style: 'citation-vancouver'
          }).trim()

          it('outputs correctly', function () {
            expect(out).toBe(testOutput.csl.html.vancouver)
          })
        })

        describe('custom template', function () {
          it('outputs correctly', function () {
            const out = test.get({
              format: 'string',
              type: 'html',
              style: 'citation-custom',
              template: customTemplate
            }).trim()

            expect(out).toBe(testOutput.csl.html.title)
          })

          it('registers for subsequent calls', function () {
            const out = test.get({
              format: 'string',
              type: 'html',
              style: 'citation-custom'
            }).trim()

            expect(out).toBe(testOutput.csl.html.title)
          })
        })
      })

      describe('plain text', function () {
        describe('default built-in template (APA)', function () {
          const out = test.get({
            format: 'string',
            type: 'string',
            style: 'citation-apa'
          }).trim()

          it('outputs correctly', function () {
            expect(out).toBe(testOutput.csl.apa)
          })
        })

        describe('non-default built-in template (Vancouver)', function () {
          const out = test.get({
            format: 'string',
            type: 'string',
            style: 'citation-vancouver'
          }).trim()

          it('outputs correctly', function () {
            expect(out).toBe(testOutput.csl.vancouver)
          })
        })

        describe('custom template', function () {
          it('outputs correctly', function () {
            const out = test.get({
              format: 'string',
              type: 'string',
              style: 'citation-custom',
              template: customTemplate
            }).trim()

            expect(out).toBe(testOutput.csl.title)
          })

          it('registers for subsequent calls', function () {
            const out = test.get({
              format: 'string',
              type: 'string',
              style: 'citation-custom'
            }).trim()

            expect(out).toBe(testOutput.csl.title)
          })
        })
      })
    })

    describe('CSL-JSON', function () {
      describe('plain text', function () {
        const out = test.get({format: 'string'})

        it('outputs correctly', function () {
          expect(JSON.parse(out)).toEqual(testInput.csl.simple)
        })
      })

      describe('object', function () {
        const out = test.get()

        it('outputs correctly', function () {
          expect(out).toEqual(testInput.csl.simple)
        })
      })
    })

    describe('BibTeX', function () {
      describe('plain text', function () {
        const out = test.get({
          format: 'string',
          type: 'string',
          style: 'bibtex'
        }).trim().replace(/\s+/g, ' ')

        it('outputs correctly', function () {
          expect(out).toBe(testOutput.bibtex.plain)
        })
      })

      describe('JSON', function () {
        const out = test.get({
          style: 'bibtex'
        })

        it('outputs correctly', function () {
          expect(out).toEqual(testOutput.bibtex.json)
        })
      })

      describe('Bib.TXT', function () {
        const out = test.get({
          format: 'string',
          type: 'string',
          style: 'bibtxt'
        }).trim()

        it('outputs correctly', function () {
          expect(out).toBe(testOutput.bibtex.bibtxt)
        })
      })
    })
  })
})
