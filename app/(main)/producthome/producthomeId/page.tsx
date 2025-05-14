import { useQuery } from '@tanstack/react-query';

type ProductHome = {
  id: number;
  title: string;
  txt: string;
  tit: string;
  img: string;
  ps: string;
};

// 써치파람스
export default function Product() {
  const { isPending, data, isError, error } = useQuery<ProductHome[]>({
    queryKey: ['productHome'],
    queryFn: () => {
      return fetch(`http://localhost:9090/productHome?page=`).then((res) =>
        res.json()
      );
    },
  });
  return <div>Product</div>;
}

// 0퍼센트 말고 1이상만 컬러 적용 되게 하기
// data.map((item) => {
//   const regex = /(\d+%)/; // 숫자+퍼센트 부분 찾기
//   const parts = item.tit.split(regex); // 기준으로 문자열 분리

//   return (
//     <div key={item.id} className="product">
//       <h2>{item.title}</h2>
//       <p>{item.txt}</p>
//       <p>
//         {parts.map((part, index) =>
//           regex.test(part) ? (
//             <b key={index} className="text-[#f65f5f]">
//               {part}
//             </b>
//           ) : (
//             part
//           )
//         )}
//       </p>
//       <img src={item.img} alt={item.title} />
//       <span>{item.ps}</span>
//     </div>
//   );
// });

// 결과
{
  /* <div class="product">
  <h2>비증권 22호</h2>
  <p>Art Collection 11</p>
  <p>0% 수익을 달성했어요</p>
  <img src="/images/product/portfolio_22_thumbnail.jpeg" alt="비증권 22호">
  <span>종료</span>
</div>

<div class="product">
  <h2>비증권 23호</h2>
  <p>Art Collection 12</p>
  <p><b class="text-[#f65f5f]">5%</b> 수익을 달성했어요</p>
  <img src="/images/product/portfolio_23_thumbnail.jpeg" alt="비증권 23호">
  <span>진행중</span>
</div> */
}
