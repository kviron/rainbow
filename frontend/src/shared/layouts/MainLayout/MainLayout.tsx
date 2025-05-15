import { memo, type ReactElement } from 'react';
import { Layout } from 'antd';
import { useMainLayout } from '@/app/providers/MainLayouProvider';
import Render from '@/shared/ui/ConditionalRender/ConditionalRender.tsx';
import clsx from 'clsx';
import styles from "./MainLayout.module.scss"

const { Header, Footer, Sider, Content } = Layout;

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
  sidebar: ReactElement;
  footer?: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { footer, content, header, sidebar } = props;

  const { showFooter, showHeader, showSidebar, contentCenter } = useMainLayout();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Render when={showHeader}>
        <Header style={{
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
        }}>
          {header}
        </Header>
      </Render>


      <Layout>
        <Render when={showSidebar}>
          <Sider width={250} style={{
            borderRight: '1px solid #f0f0f0',
          }}>
            {sidebar}
          </Sider>
        </Render>

        <Layout style={{ padding: '24px' }}>
          <Content className={clsx(styles.content, {[styles.contentCenter]: contentCenter})}>
            {content}
          </Content>
        </Layout>
      </Layout>

      <Render when={showFooter}>
        <Footer>
          {footer}
        </Footer>
      </Render>
    </Layout>
  );
});
