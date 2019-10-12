const fs = require('fs')
const parse = require('csv-parse/lib/sync')
const path = require('path')

const CSV_PATH = path.join(__dirname, '..', 'data', 'questions.csv')

function main() {
  const content = parse(fs.readFileSync(CSV_PATH, { encoding: 'utf-8' }), {
    columns: true
  })

  console.log(JSON.stringify(convert(content)))
}

function convert(content) {
  return content
    .map(datum => {
      return {
        id: parseInt(datum.id, 10),
        text: datum.text,
        answerCandidates: [1, 2, 3].reduce((acc, idx) => {
          const candidate = datum[`candidate${idx}`]
          return candidate ? acc.concat({ text: candidate }) : acc
        }, []),
        answerIndex: parseInt(datum.answerIdx, 10)
      }
    })
}

main()
