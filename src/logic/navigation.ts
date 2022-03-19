export const navigationMenu = [
  {
    label: 'Home',
    items: [{
      label: 'Dashboard', to: '/' , icon: 'pi pi-fw pi-home',
    }],
  },
  {
    label: 'UI Demo',
    items: [
      { label: 'DataTable', icon: 'pi pi-fw pi-table', to: '/ui/table' },
      { label: 'UnoCSS', icon: 'pi pi-fw pi-user-edit', to: '/ui/uno' },
      { label: 'Icons', icon: 'pi pi-fw pi-user-edit', to: '/ui/icons' },
    ],
  },
  {
    label: 'Pages',
    items: [
      {label: 'Error', icon: 'pi pi-fw pi-times-circle', to: '/error'},
      {label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', to: '/notfound'},
      {label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access'},
    ],
  },
  {
    label: 'Templates',
    items: [
      { label: 'Blueprint', icon: 'pi pi-fw pi-user-edit', to: '/templates/blueprint' },
    ],
  },
  {
    label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
    items: [
      {
        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
        items: [
          {
            label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
            items: [
              {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},
              {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},
              {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},
            ]
          },
          {
            label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
            items: [
              {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'},
              {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark'}
            ]
          },
        ]
      },
      {
        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
        items: [
          {
            label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
            items: [
              {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},
              {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},
              {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark'},
            ]
          },
          {
            label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
            items: [
              {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},
              {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark'}
            ]
          }
        ]
      }
    ]
  }

];
