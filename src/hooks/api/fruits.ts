import { useQuery } from '@tanstack/react-query';

import instance from '@/mocks/api/instance';
import FruitsType from '@/types/fruitsType';

const fruits = {
  all: ['fruits'],
  list: () => [...fruits.all, 'list'],
};

const getFruits = async () => {
  return await instance.get('/fruits').then(res => res.data);
};

const useGetFruits = () => {
  return useQuery<FruitsType[]>(fruits.list(), () => getFruits());
};

export default useGetFruits;
