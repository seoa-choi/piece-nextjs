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

  http.get('http://localhost:9090/productProgress', async ({ request }) => {
    await sleep(200);

    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 1; // 기본값 1
    // const limit = 10; // 한 페이지당 10개씩 표시
    // const paginatedData = getDataByPage(productProgress, page, limit);

    // return HttpResponse.json(paginatedData);

    // // 페이지별 데이터 가져오기, tit, ps ? undefined 허용
    // function getDataByPage(
    //   progressData: {
    //     id: number;
    //     title: string;
    //     txt: string;
    //     tit?: string;
    //     img: string;
    //     ps?: string;
    //   }[],
    //   page: number,
    //   limit: number
    // ) {
    //   // 총페이지
    //   const totalPages = Math.ceil(progressData.length / limit);

    //   if (page < 1 || page > totalPages) {
    //     return []; // 잘못된 페이지 요청시 빈배열 반환
    //   }

    //   // 잘라낼 배열 시작 위치
    //   const start = (page - 1) * limit;
    //   // 끝 위치
    //   const end = start + limit;

    //   return {
    //     result: progressData.slice(start, end),
    //     total: progressData.length,
    //   };
    // }
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
