import {
  getRouteCertificates,
  getRouteMain,
} from '@/shared/const/router';
import { useUserStore } from '@/entities/User';
import type { SidebarItemType } from './Sidebar.types';
import {
  MailOutlined
} from '@ant-design/icons';


export const useSidebarItems = () => {
  const { authData } = useUserStore()

  const sidebarItemsList: SidebarItemType[] = [
    {
      key: '1',
      label: 'Главная',
      icon: <MailOutlined />,
      path: getRouteMain(),
    },
  ];

  if (authData) {
    sidebarItemsList.push(
      {
        path: getRouteCertificates(),
        Icon: '',
        text: 'Сертификаты',
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
};
