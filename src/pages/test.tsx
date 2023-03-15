/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { trpc } from '~/utils/trpc';

// 랜덤단어 생성
const randomWord = () => {
  const word = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < 10; i++) {
    result += word[Math.floor(Math.random() * word.length)];
  }
  return result;
};

const TestPage = () => {
  const [selected, setSelected] = useState<any>(null);

  const query = trpc.products.byId.useQuery(
    {
      id: selected?.id,
    },
    {
      enabled: !!selected,
    },
  );

  const infinite = trpc.products.list.useInfiniteQuery(
    {},
    {
      getNextPageParam(lastPage) {
        return lastPage.nextCursor;
      },
      refetchOnMount: false,
      staleTime: Infinity,
    },
  );

  const mutation_pcre = trpc.products.create.useMutation({
    onSuccess: (data) => {
      infinite.refetch();
      alert('상품 등록 성공');
    },
  });

  const mutattion_pup = trpc.products.update.useMutation({
    onSuccess: (data) => {
      infinite.refetch();
      alert('상품 수정 성공');
    },
  });

  const mutation_delete = trpc.products.delete.useMutation({
    onSuccess: (data) => {
      infinite.refetch();
      alert('상품 삭제 성공');
    },
  });

  const onCreated = () => {
    const body = {
      name: randomWord(),
      description: '테스트1',
      price: 1000,
      salePrice: 0,
      totalSales: 10,
      images: ['테스트'],
      categories: Array.from({ length: 3 }).map(() => randomWord()),
    };

    mutation_pcre.mutate(body);
  };

  const onUpdated = (item: any) => {
    const body = {
      id: item.id,
      name: randomWord(),
      description: item.description,
      price: item.price,
      salePrice: item.salePrice,
      totalSales: item.totalSales,
      images: item.images.map((image: any) => image.url),
      categories: item.categories.map((category: any) => category.name),
    };

    mutattion_pup.mutate(body);
  };

  const onDelete = (item: any) => {
    mutation_delete.mutate({
      id: item.id,
    });
  };

  return (
    <div>
      <button type="button" onClick={onCreated}>
        상품 등록 테스트
      </button>
      <ul>
        {infinite.data?.pages.map((page) => {
          return page.items.map((product) => {
            return (
              <li
                key={product.id}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  border: '1px solid black',
                  ...(product.id === selected?.id
                    ? {
                        color: 'red',
                      }
                    : {}),
                }}
                onClick={(e) => {
                  setSelected(product);
                }}
              >
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>{product.salePrice}</p>
                <p>{product.totalSales}</p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onUpdated(product);
                  }}
                >
                  수정
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onDelete(product);
                  }}
                >
                  삭제
                </button>
              </li>
            );
          });
        })}
      </ul>
      {query.data?.product && <>{JSON.stringify(query.data.product)}</>}
    </div>
  );
};

export default TestPage;
