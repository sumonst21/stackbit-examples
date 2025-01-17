import { PageModel } from '@stackbit/types';

export const page: PageModel = {
    name: 'page',
    type: 'page',
    hideContent: true,
    urlPath: '/{slug}',
    fields: [
        { name: 'title', type: 'string', required: true },
        { name: 'sections', type: 'list', items: { type: 'model', models: ['hero', 'stats'] } }
    ]
};
