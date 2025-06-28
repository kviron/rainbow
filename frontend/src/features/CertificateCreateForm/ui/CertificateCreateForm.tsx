import { Button, DatePicker, Form, Input, InputNumber } from 'antd';

export const CertificateCreateForm = () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      initialValues={{ layout: 'vertical' }}
    >
      <Form.Item label="Дата выдачи">
        <DatePicker/>
      </Form.Item>
      <Form.Item label="Услуга">
        <Input placeholder="Опишите услугу" />
      </Form.Item>
      <Form.Item label="Кол-во участников">
        <InputNumber defaultValue={1} />
      </Form.Item>
      <Form.Item label="Email">
        <Input placeholder="Укажите почту куда отправить" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};