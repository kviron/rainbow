import type { GetProp, MenuProps } from 'antd';
import { AppRoutes } from '@/shared/const';

type MenuItem = GetProp<MenuProps, 'items'>[number];

export type MenuItemType = MenuItem & {
  key: AppRoutes
  authOnly?: boolean;
  path: string;
}