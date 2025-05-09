import { http, HttpResponse } from 'msw';
import magazine from './magazine.json';

let maxId = Math.max(...magazine.map((item) => item.id));

export const magazineHandlers = [
  http.get('http://localhost:9090/magazine', async () => {
    await sleep(200);

    return HttpResponse.json(magazine);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
