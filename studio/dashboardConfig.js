export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '60f483b1b66d4bf1b203c7a5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-s44as5wz',
                  apiId: '97f8dc9d-2029-4ea4-a766-43fd27fbd65e'
                },
                {
                  buildHookId: '60f483b13d0afbe2341a5999',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4fhqzcqm',
                  apiId: 'a3e17eba-8388-4f97-8ed9-89147aa11955'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theapplegates/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4fhqzcqm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
