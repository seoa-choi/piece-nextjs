import { http, HttpResponse } from 'msw';
import magazine from './magazine.json';
import magazineAtoz from './magazine.json';

let maxId = Math.max(...magazine.map((item) => item.id));

export const magazineHandlers = [
  http.get('http://localhost:9090/magazine-atoz', async () => {
    await sleep(200);

    return HttpResponse.json(magazineAtoz);
  }),

  http.get('http://localhost:9090/magazine', async ({ request }) => {
    await sleep(200);

    const url = new URL(request.url);
    const search = url.searchParams.get('search') || '';
    const page = Number(url.searchParams.get('page'));

    // 탭 버튼 리스트
    const predefinedTabOrder = [
      '전체',
      '포트폴리오',
      '인사이트 칼럼',
      '어바웃 트렌드',
    ];

    const tabList = [
      '전체',
      ...predefinedTabOrder.filter((tab) =>
        magazine.some((item) => item.title === tab)
      ),
    ];

    // 페이지별 데이터 가져오기
    function getDataByPage(
      data: {
        id: number;
        title: string;
        img: string;
        postTitle: string;
        postSubTitle: string;
      }[],
      page: number,
      limit: number
    ) {
      const totalPages = Math.ceil(data.length / limit);

      if (page < 1 || page > totalPages) {
        return { result: [], total: 0 };
      }

      const start = (page - 1) * limit;

      const end = start + limit;

      return {
        result: data.slice(start, end),
        total: data.length,
      };
    }

    // 탭버튼 필터링
    const tab = url.searchParams.get('tab') || 'All';

    // query string -> 실제 데이터 키 값
    const tabTitleMapping: Record<string, string> = {
      Portfolio: '포트폴리오',
      Insight: '인사이트 칼럼',
      Trend: '어바웃 트렌드',
    };

    const mappedTab = tabTitleMapping[tab] || 'All';

    // 탭 필터링
    let filteredTab = magazine;
    if (mappedTab !== 'All') {
      filteredTab = magazine.filter((item) => item.title === mappedTab);
    }

    // 검색 필터링
    let filteredSearch = magazine;
    if (search) {
      filteredSearch = magazine.filter(
        (item) => item.postTitle.toLowerCase().includes(search.toLowerCase())
        // || item.title.toLowerCase().includes(search.toLowerCase()) ||
        // item.postSubTitle.toLowerCase().includes(search.toLowerCase())
      );
    }

    const tabResult = getDataByPage(filteredTab, page, 12);
    const searchResult = getDataByPage(filteredSearch, page, 12);

    return HttpResponse.json({
      tabResult: tabResult.result,
      searchResult: searchResult.result,
      total: tabResult.total,
      tabList,
    });
  }),

  http.get('http://localhost:9090/magazine/:id', async ({ params }) => {
    await sleep(200);

    const { id } = params;
    const magaz = magazine.find((item) => item.id === Number(id));

    return HttpResponse.json(magaz);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
