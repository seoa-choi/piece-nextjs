import { http, HttpResponse } from 'msw';
import productHome from './product-home.json';
import productProgress from './product-home.json';

let maxId = Math.max(...productHome.map((item) => item.id));

export const productHomeHandlers = [
  // http.get('http://localhost:9090/productHome', async () => {
  //   await sleep(200);

  //   return HttpResponse.json(productHome);
  // }),

  http.get('http://localhost:9090/:endpoint', async ({ params }) => {
    await sleep(200);

    if (params.endpoint === 'productHome') {
      return HttpResponse.json(productHome);
    } else if (params.endpoint === 'productProgress') {
      return HttpResponse.json(productProgress);
    } else {
      return HttpResponse.json({ message: 'Not Found' }, { status: 404 });
    }
  }),

  http.get('http://localhost:9090/productProgress/:id', async ({ request }) => {
    await sleep(200);

    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page'));

    function getDataByPage(
      data: {
        id: number;
        title: string;
        txt: string;
        tit: string;
        img: string;
        ps: string;
      }[],
      page: number,
      limit: number
    ) {
      const totalPages = Math.ceil(data.length / limit);

      if (page < 1 || page > totalPages) {
        return [];
      }

      const start = (page - 1) * limit;
      const end = start + limit;

      return {
        result: data.slice(start, end),
        total: data.length,
      };
    }
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
