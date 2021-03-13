import { jest } from '@jest/globals'
import { cyan, gray, green } from 'colorette'
import rollup from 'rollup'
import filesize from '../src'

test('Output entry file size', async () => {
  console.log = jest.fn()

  const bundle = await rollup.rollup({
    input: 'tests/fixtures/app.js',
    plugins: [
      filesize()
    ]
  })

  await bundle.generate({})
  await bundle.close()

  expect(console.log).toHaveBeenCalledWith(`${cyan('app.js')}: ${green('20 B')} → ${green('40 B')} ${gray('(gzip)')}`)
})
