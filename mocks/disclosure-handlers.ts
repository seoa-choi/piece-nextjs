import { http, HttpResponse } from 'msw';
import disclosure from './disclosure.json';

let maxId = Math.max(...disclosure.map((item) => item.id));

export const disclosureHandlers = [
  http.get('http://localhost:9090/disclosure', async ({ request }) => {
    await sleep(200);

    const url = new URL(request.url);
    const search = url.searchParams.get('search') || '';
    const page = Number(url.searchParams.get('page')) || 1;
    const tab = url.searchParams.get('tab') || '';

    const tabTitleMapping: Record<string, string> = {
      investmentDisclosure: '투자공시',
      companyDisclosure: '경영공시',
    };

    // 페이지네이션
    function getDataByPage(
      data: {
        id: number;
        title: string;
        date: string;
      }[],
      page: number,
      limit: number
    ) {
      // 총 페이지 계산
      const totalPages = Math.ceil(data.length / limit);

      // 페이지 유효성 체크
      if (page < 1 || page > totalPages) {
        return { result: [], total: data.length };
      }
      // 데이터 페이지 단위 분리
      const start = (page - 1) * limit;

      const end = start + limit;

      return {
        result: data.slice(start, end),
        total: data.length,
      };
    }

    let filteredData = disclosure;

    // 기본값 투자공시 데이터 출력
    if (!tab && !search) {
      filteredData = disclosure;
    }

    // 검색 필터 적용
    if (search) {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 페이지 네이션 적용
    const result = getDataByPage(filteredData, page, 10);

    return HttpResponse.json(result);
  }),

  http.get('http://localhost:9090/disclosure/:id', async ({ params }) => {
    await sleep(200);

    const { id } = params;
    const disclos = disclosure.find((item) => item.id === Number(id));

    return HttpResponse.json(disclos);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
