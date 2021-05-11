import { IDateProvider } from "../IDateProvider";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
class DayjsDateProvider implements IDateProvider{
  compareInHours(start_date: Date, end_date: Date): number{
    return dayjs(start_date).diff(end_date, "hours")
  }
}

export {DayjsDateProvider}