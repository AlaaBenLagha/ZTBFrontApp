import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },


  {
    name: 'Consultation',
    url: '/consultation',
    iconComponent: { name: 'cilSpreadsheet' },
    // badge: {
    //   color: '#080c05cc',
    //   text: 'NEW'
    // }
  },


  {
    name: 'Imagedisplay',
    url: '/imagedisplay',
    iconComponent: { name: 'cilSpreadsheet' },

  },

  // {
  //   name: 'Datatable',
  //   url: '/datatable',
  //   iconComponent: { name: 'cilSpreadsheet' },
    
  // },

  // {
  //   name: 'Datatable1',
  //   url: '/datatable1',
  //   iconComponent: { name: 'cilSpreadsheet' },
   
  // },
  
 



];
