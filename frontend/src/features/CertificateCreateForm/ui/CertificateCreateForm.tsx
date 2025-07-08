import { Button, DatePicker, Form, Input, InputNumber } from 'antd';

const CertificateCreateForm = () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item required label="Дата выдачи" rules={[{ required: true, message: 'Пожалуйста заполните дату выдачи' }]}>
        <DatePicker placeholder={'Выберите дату'}/>
      </Form.Item>
      <Form.Item required label="Услуга" rules={[{ required: true, message: 'Заполните вид услуги' }]}>
        <Input placeholder="Опишите услугу" />
      </Form.Item>
      <Form.Item required label="Кол-во участников" rules={[{ required: true, message: 'Заполните вид услуги' }]}>
        <InputNumber defaultValue={1} />
      </Form.Item>
      <Form.Item required label="Email" rules={[{ required: true, message: 'Укажите почту для отправки' }]}>
        <Input placeholder="Укажите почту куда отправить" />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType={"submit"}>Создать</Button>
      </Form.Item>
    </Form>
  );
};

export default CertificateCreateForm;