import { Button, DatePicker, Form, Input, InputNumber, type FormProps } from 'antd';
import type { CreateCertificateRequest } from '@/shared/generated';
import { useCreateCertificateMutation } from '@/entities/Certificate';

type FieldType = CreateCertificateRequest;

const CertificateCreateForm = () => {
  const [form] = Form.useForm();

  const mutation = useCreateCertificateMutation()

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    mutation.mutate({
      body: values
    })
  }

  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
    >
      <Form.Item
        <FieldType>
        required
        label="Дата выдачи"
        name="releaseDate"
        rules={[{ required: true, message: 'Пожалуйста заполните дату выдачи' }]}
      >
        <DatePicker placeholder={'Выберите дату'}/>
      </Form.Item>
      <Form.Item<FieldType> required label="Услуга" name="service" rules={[{ required: true, message: 'Заполните вид услуги' }]}>
        <Input placeholder="Опишите услугу" />
      </Form.Item>
      <Form.Item<FieldType> required label="Кол-во участников" name="countPersons" rules={[{ required: true, message: 'Заполните кол-во человек' }]}>
        <InputNumber defaultValue={1} />
      </Form.Item>
      <Form.Item<FieldType> required label="Email" name="email" rules={[{ required: true, message: 'Укажите почту для отправки' }]}>
        <Input placeholder="Укажите почту куда отправить" />
      </Form.Item>
      <Form.Item<FieldType> label={null}>
        <Button type="primary" htmlType={"submit"} disabled={mutation.isPending}>Создать</Button>
      </Form.Item>
    </Form>
  );
};

export default CertificateCreateForm;