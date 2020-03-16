export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e6faae156201ba925c4691d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8pcd4n2z',
                  apiId: 'e53c09cf-42c0-4eb4-83d7-47c33f3472e9'
                },
                {
                  buildHookId: '5e6faae1e5e8e0ea0b5982fa',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vq8pzprt',
                  apiId: '010b5318-0276-4303-95c4-a891b27706fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danhowarth/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vq8pzprt.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
