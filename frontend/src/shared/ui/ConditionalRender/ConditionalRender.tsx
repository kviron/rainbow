import { type ReactNode, type FC } from 'react';

interface ConditionalRenderProps {
  when: boolean;
  children: ReactNode;
  fallback?: ReactNode;
  mode?: 'display' | 'visibility' | 'mount' | 'flex';
}

/**
 * Универсальный компонент для условного рендеринга
 * @param when - boolean условие для отображения
 * @param children - содержимое для отображения
 * @param fallback - что показывать когда when=false (опционально)
 * @param mode - стратегия скрытия:
 *    - 'display' (по умолчанию) - использует CSS display: none
 *    - 'visibility' - использует CSS visibility: hidden
 *    - 'mount' - полностью убирает из DOM
 */
const Render: FC<ConditionalRenderProps> =
  ({
     when,
     children,
     fallback = null,
     mode = 'display',
   }) => {
    // Реализация разных стратегий скрытия
    switch (mode) {
      case 'mount':
        return when ? <>{children}</> : <>{fallback}</>;

      case 'visibility':
        return (
          <div style={{ visibility: when ? 'visible' : 'hidden' }}>
            {when ? children : fallback}
          </div>
        );
      case 'flex':
        return (
          <div style={{ display: when ? 'flex' : 'none' }}>
            {when ? children : fallback}
          </div>
        );

      case 'display':
      default:
        return (
          <div style={{ display: when ? undefined : 'none' }}>
            {when ? children : fallback}
          </div>
        );
    }
  };

export default Render;