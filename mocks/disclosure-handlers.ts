import { http, HttpResponse } from 'msw';
import disclosure from './disclosure.json';

let maxId = Math.max(...disclosure.map((item) => item.id));

export const disclosureHandlers = [
  http.get('http://localhost:9090/disclosure', async ({ request }) => {
    await sleep(200);

    const url = new URL(request.url);
    const search = url.searchParams.get('search') || '';
    const page = Number(url.searchParams.get('page')) || 1;
    const tab = url.searchParams.get('tab') || 'investmentDisclosure';

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

    const tabTitleMapping: Record<string, string> = {
      investmentDisclosure: '투자공시',
      companyDisclosure: '경영공시',
    };

    const mappedTab = tabTitleMapping[tab] || 'investmentDisclosure';

    // 검색창, 탭메뉴 데이터를 각각 처리 보내야 데이터 출력 됨
    // 전체 데이터 초기화
    let filteredData = disclosure;

    function getTabType(title: string) {
      if (title.includes('포트폴리오')) {
        return 'investmentDisclosure';
      }
      return 'companyDisclosure';
    }

    filteredData = filteredData.filter(
      (item) => getTabType(item.title) === mappedTab
    );

    // console.log(filteredData, 'filteredData 데이터 터미널 확인');

    // 검색 필터 적용
    if (search) {
      const searchedData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );

      if (searchedData.length > 0) {
        filteredData = searchedData;
      } else {
        // console.log('검색 결과 없음, 기본 tab 데이터 반환');
      }
      const result = getDataByPage(filteredData, page, 10);
      // 검색 데이터
      return HttpResponse.json(result);
    }

    // 페이지 네이션 적용
    const result = getDataByPage(filteredData, page, 10);

    // 기본(탭) 데이터
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
