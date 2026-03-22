-- globals provided by Redis
-- KEYS, ARGV, redis

local current = redis.call("INCR", KEYS[1])

if current == 1 then
  redis.call("EXPIRE", KEYS[1], tonumber(ARGV[1]))
end

return current