import redis from 'redis'
import {RateLimiterRedis} from 'rate-limiter-flexible'
import { number } from 'yargs'

const redisClient = redis.createClient({
    host:process.env.REDIS_HOST,
    port:Number(process.env.REDIS_PORT),
    enable_offline_queue:false
})