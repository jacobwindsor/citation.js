/**
 * Object containing several RegExp patterns, mostly used for parsing (*full of shame*) and recognizing data types
 *
 * @access protected
 * @constant varRegex
 * @default
 */
const regex = {
  url: /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3})|localhost)(:\d+)?(\/[-a-z\d%_.~+:]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i,
  bibtex: [
    /^(?:\s*@\s*[^@]+?\s*\{\s*[^@]+?\s*,\s*[^@]+\})+\s*$/,
    /^\s$/,
    /^[@{}"=,\\]$/
  ],
  bibtxt: /^\s*(\[.*?\]\s*(\n\s*[^[]((?!:)\S)+\s*:\s*.+?\s*)*\s*)+$/,
  wikidata: [
    /^\s*(Q\d+)\s*$/,
    /^\s*((?:Q\d+(?:\s+|,|))*Q\d+)\s*$/,
    /^(https?:\/\/(?:www\.)wikidata.org\/w\/api\.php(?:\?.*)?)$/,
    /\/(Q\d+)(?:[#?/]|\s*$)/
  ],
  json: [
    [
      /((?:\[|:|,)\s*)'((?:\\'|[^'])*?[^\\])?'(?=\s*(?:\]|}|,))/g,
      '$1"$2"'
    ],
    [
      /((?:(?:"|]|}|\/[gmi]|\.|(?:\d|\.|-)*\d)\s*,|{)\s*)(?:"([^":\n]+?)"|'([^":\n]+?)'|([^":\n]+?))(\s*):/g,
      '$1"$2$3$4"$5:'
    ]
  ],
  name: / (?=(?:[a-z]+ )*(?:[A-Z][a-z]*[-])*(?:[A-Z][a-z]*)$)/
}

export default regex
