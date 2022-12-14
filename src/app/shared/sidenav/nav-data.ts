import { INavbarData } from './helper';
export const navbarData:INavbarData[] =[
    {
        routeLink:'/inicio',
        icon:'fal fa-home',
        label:'Dashboard'
    },
    {
        routeLink:'joven',
        icon:'fa fa-user-plus',
        label:'Jovenes',
        items:[
            {
                routeLink:'joven/RegistrarJoven',
                icon:'fa fa-user-plus',
                label:'Registrar Joven',
            },
            {
                routeLink:'joven/CrearJovenes',
                icon:'fa fa-user-plus',
                label:'Listado de  Joven',
            }
        
        ]
    },  
    {

        routeLink:'/Actividades',
        icon:'fa  fa-universal-access',
        label:'Actividades',
        items:[
            {
                routeLink:'Actividades/Actividades',
                icon:'fa fa-user-plus',
                label:'Registrar Actividades',
            },
            {
                routeLink:'Actividades/Listado',
                icon:'fa fa-user-plus',
                label:'Listado de actividades',
            }
        
        ]
        
    },
    {
        routeLink:'/Apoyos',
        icon:'fa fa-coins',
     
        label:'Apoyos',
        items:[
            {
                routeLink:'Apoyos/Apoyos',
                icon:'fa fa-user-plus',
                label:'Registrar Apoyos',
            },
            {
                routeLink:'Apoyos/Listado',
                icon:'fa fa-user-plus',
                label:'Listado de Apoyos',
            }
        
        ]
      
    },
        // {
        //     routeLink:'/Cap',
        //     icon:'fa fa-book',
        //     label:'Capacitaciones',
        //     items:[
        //         {
        //             routeLink:'Cap/Capacitaciones',
        //             icon:'fa fa-user-plus',
        //             label:'Registrar Cap',
        //         },
        //         {
        //             routeLink:'Cap/ListadoCapacitacion',
        //             icon:'fa fa-user-plus',
        //             label:'Listado de Cap',
        //         }
            
        //     ]
        
        // },
    {
        routeLink:'salir',
        icon:'far fa-power-off',
        label:'Salir',
       
    }
   

]

