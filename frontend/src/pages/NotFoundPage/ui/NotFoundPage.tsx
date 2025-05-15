import cls from './NotFoundPage.module.scss';
import { clsx } from 'clsx';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    return (
        <div
            data-testid="NotFoundPage"
            className={clsx(cls.NotFoundPage, className)}
        >
            Страница не найдена
        </div>
    );
};
