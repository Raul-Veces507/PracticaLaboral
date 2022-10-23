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
        
    },
    {
        routeLink:'/Apoyos',
        icon:'fa fa-coins',
     
        label:'Apoyos',
      
    },
    {
        routeLink:'/CrearUsuarios',
        icon:'fa fa-users',
        label:'Crear Usuarios',
       
    }
   

]

