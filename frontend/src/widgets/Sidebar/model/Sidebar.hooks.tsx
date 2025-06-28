import {
  AppRouteByPathPattern,
  AppRoutes,
  getRouteCertificates,
  getRouteMain, getRouteSettings,
} from '@/shared/const/router';
import type { MenuItemType } from './Sidebar.types';
import {
  HomeOutlined,
  SettingOutlined,
  SnippetsOutlined
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router';
import { useSidebarStore } from './Sidebar.store.tsx';
import { useAuthStore } from '@/entities/Auth';

export const useSidebar = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const { menuCollapsed, toggleMenuCollapsed, } = useSidebarStore()

  const activeItem = AppRouteByPathPattern[location.pathname]

  const menuItemsList: MenuItemType[] = [
    {
      key: AppRoutes.MAIN,
      label: 'Главная',
      icon: <HomeOutlined />,
      path: getRouteMain(),
      onClick: () => {
        navigate(getRouteMain())
      }
    },
  ];

  if (user) {
    menuItemsList.push(
      {
        key: AppRoutes.CERTIFICATES,
        path: getRouteCertificates(),
        icon: <SnippetsOutlined />,
        label: 'Сертификаты',
        authOnly: true,
        onClick: () => {
          navigate(getRouteCertificates())
        }
      },
      {
        key: AppRoutes.SETTINGS,
        path: getRouteSettings(),
        icon: <SettingOutlined />,
        label: 'Настройки',
        authOnly: true,
        onClick: () => {
          navigate(getRouteSettings())
        }
      },
    );
  }

  return { menuItemsList, activeItem, menuCollapsed, toggleMenuCollapsed };
};
