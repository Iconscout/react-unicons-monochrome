const path = require('path')
const fs = require('fs-plus')
const cheerio = require('cheerio')
const upperCamelCase = require('uppercamelcase')
const svgr = require('@svgr/core').default

const iconsComponentPath = path.join(process.cwd(), 'src/icons')
const iconsIndexPath = path.join(process.cwd(), 'src/index.ts')
const uniconsConfig = require('@iconscout/unicons/json/monochrome.json')

const COLOR_CLASS = {
  'class="uim-primary"': 'opacity="1"',
  'class="uim-secondary"': 'opacity="0.7"',
  'class="uim-tertiary"': 'opacity="0.5"',
  'class="uim-quaternary"': 'opacity="0.25"',
  'class="uim-quinary"': 'opacity="0"'
}

// Clear Directories
fs.removeSync(iconsComponentPath)
fs.mkdirSync(iconsComponentPath)

const indexJs = []

const icon = uniconsConfig[0]

const babelTransform = (component) => {
  return new Promise ((resolve, reject) => {
    require("@babel/core").transform(component, {
      plugins: [
        ["@babel/plugin-transform-react-jsx", {
          useBuiltIns: true
        }]
      ],
    }, function(err, result) {
      if (err) {
        reject(err)
      } else {
        resolve(result.code)
      }
    });
  })
}

uniconsConfig.forEach(icon => {
  const baseName = `uim-${icon.name}`
  const location = path.join(iconsComponentPath, `${baseName}.tsx`)
  const name = upperCamelCase(baseName)
  let svgFile = fs.readFileSync(path.resolve('node_modules/@iconscout/unicons', icon.svg), 'utf-8')
  
  Object.keys(COLOR_CLASS).forEach(key => {
    svgFile = svgFile.replace(new RegExp(key, 'g'), COLOR_CLASS[key])
  })

  svgr(svgFile, { typescript: true, svgo: false, svgProps: { width: "{props.size || '1em'}", height: "{props.size || '1em'}", fill: 'currentColor' } }, { componentName: name }).then(template => {
    const updatedTemplate = template
    .replace(`import * as React from "react";`, `import * as React from "react";\nimport { UimIconProps } from "../index.types"\nimport "../utils/style.css";`)
    .replace(`props: React.SVGProps<SVGSVGElement>`, 'props: UimIconProps');

    fs.writeFileSync(location, updatedTemplate, 'utf-8')
  })

  // Add it to index.ts
  indexJs.push(`export { default as ${name} } from './icons/${baseName}'`)
})

fs.writeFileSync(iconsIndexPath, indexJs.join('\n'), 'utf-8')

console.log(`Generated ${uniconsConfig.length} icon components.`)