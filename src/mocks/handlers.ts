import { rest } from 'msw';

import fruitsData from './api/data/fruitsData';

import BASE_URL from '@/constants/api';

const handlers = [rest.get(`${BASE_URL}/fruits`, (_, res, ctx) => res(ctx.json(fruitsData)))];

export default handlers;
