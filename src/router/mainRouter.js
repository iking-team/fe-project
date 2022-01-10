export default
{
    path: '/',
    name: 'MainPage',
    component: () => import('../components/Introduce.vue'),
    children:[
      {
        path: "main",
        name: "main",
        component: () => import('../views/main/index.vue'),
      },
      
    ]
  }
