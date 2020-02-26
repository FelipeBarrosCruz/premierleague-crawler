import { promisify } from 'util'
import { writeFile } from 'fs'
import moment from 'moment'
const writefilePromisified = promisify(writeFile)

export default async (data, type, ext) => {
  const currentDate = moment().format('YYYY-MM-DD hh:mm:ss')
  const filename = `report-${type}-${currentDate}.${ext}`
  const filepath = [
    process.cwd(),
    'assets',
    filename
  ].join('/')
  await writefilePromisified(filepath, data)
  return filepath
}
