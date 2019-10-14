#!/usr/bin/env node

const fs = require('fs')
const parse = require('csv-parse/lib/sync')
const path = require('path')

const CSV_PATH = path.join(__dirname, '..', 'data', 'options.csv')

function main() {
  const content = parse(fs.readFileSync(CSV_PATH, { encoding: 'utf-8' }), {
    columns: true
  })

  console.log(JSON.stringify(convert(content)))
}

function convert(content) {
  return content
    .map(option => {
      return {
        id: parseInt(option.id, 10),
        text: option.text
      }
    })
}

main()
