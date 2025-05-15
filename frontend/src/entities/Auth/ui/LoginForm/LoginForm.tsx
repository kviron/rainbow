import { LockOutlined, MailOutlined  } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import styles from "./LoginForm.module.scss"
import { Logo } from '@/shared/ui/Logo';
import type { AuthServiceDto } from '@/entities/Auth/model/Auth.types.tsx';

export interface LoginFormProps {
  className?: string;
  onSuccess?: (data: AuthServiceDto['login']) => void;
}

const LoginForm =  (props: LoginFormProps) => {
  const {onSuccess} = props;

  const onFinish = (values: AuthServiceDto['login']) => {
    onSuccess?.(values)
  };

  return (
    <div className={styles.wrapper}>
      <Logo/>
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 480 }}
        onFinish={onFinish}
        size={'large'}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Пожалуйста введите email!' }]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" type="email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
    
  );
};

export default LoginForm