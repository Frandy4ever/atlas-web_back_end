import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient();

export const reserveStockById = (itemId, stock) => {
  client.set(`item.${itemId}`, stock);
};

export const getCurrentReservedStockById = async (itemId) => {
  const getAsync = promisify(client.get).bind(client);
  const stock = await getAsync(`item.${itemId}`);
  return stock;
};
