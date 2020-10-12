const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')
const parse = require('node-html-parser').parse

function download(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      // do something
    }
    const root = parse(data)
    const links = root.querySelectorAll('a')
    links.forEach((link) => {
      const url = link.rawAttrs.match(/href="(.*)"/)[1]
      if (url.match(/https?/)) grabScreen(url, './static/link-previews')
    })
  })
}

async function grabScreen(url, savePath) {
  let browser = await puppeteer.launch({ headless: true })
  let page = await browser.newPage()
  const slug = url
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/https?/g, '')
    .replace(/[^a-zA-Z0-9-]/g, '')
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
  await page.setViewport({ width: 1080, height: 720 })
  await page.screenshot({
    path: path.join(`${savePath}/${slug}.png`),
    fullPage: false,
  })
  await page.close()
  await browser.close()
}

for (let i = 2; i < process.argv.length; i++) {
  download(process.argv[i])
}
