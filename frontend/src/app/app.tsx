import { Button, Space } from 'antd';
import React from 'react';
import { ThemeProvider } from './providers/ThemeProvider';
import { ApiProvider } from './providers/ApiProvider';

const App: React.FC = () => (
  <ThemeProvider>
    <ApiProvider>
      <Space>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
      </Space>
    </ApiProvider>
  </ThemeProvider>
);

export default App;