import { clsx } from 'clsx';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={clsx(cls.PageLoader, [className])}>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </div>
);
