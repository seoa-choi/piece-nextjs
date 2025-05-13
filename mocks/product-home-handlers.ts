import { http, HttpResponse } from 'msw';
import productHome from './product-home.json';

let maxId = Math.max(...productHome.map((item) => item.id));

export const productHomeHandlers = [
  http.get('http://localhost:9090/productHome', async () => {
    await sleep(200);

    return HttpResponse.json(productHome);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
