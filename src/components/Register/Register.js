import { Input, Form } from 'antd';
import  Button  from '../Button/Button'
import styles from './register.module.css'

const { Item } = Form;
const { Password } = Input;

function Register() {

    const formSuccess = (datos) => {
        console.log('Submitted form:', datos)
    }
    const formFailed = (error) => {
        console.log('Error:', error)
    }

    return (
        <Form name="Form"
            onFinish={formSuccess}
            onFinishFailed={formFailed}>

            <Item
                name='Name'
                rules={[{
                    required: true,
                    message: 'Please enter your name'
                }]}>
                <Input className={styles.form} placeholder="Nombre" />
            </Item>

            <Item
                name='FirstLastName'
                rules={[{
                    required: true,
                    message: 'Please enter your first last name'
                }]}>
                <Input className={styles.form} placeholder="Primer Apellido" />
            </Item>

            <Item
                name='SecondLastName'
                rules={[{
                    required: true,
                    message: 'Please enter your second last name'
                }]}>
                <Input className={styles.form} placeholder="Segundo Apellido" />
            </Item>

            <Item
                name='PhoneNumber'
                rules={[{
                    required: true,
                    message: 'Please enter your phone number'
                }]}>
                <Input className={styles.form} placeholder="Número Telefónico" />
            </Item>

            <Item
                name='Password'
                rules={[{
                    required: true,
                    message: 'Please enter your password'
                }]}>
                <Password className={styles.form} placeholder="Contraseña" />
            </Item>

            <Item
                name='ConfirmPassword'
                dependencies={['Password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('Password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Passwords do not match!'));
                        },
                    }),
                ]}
            >
                <Password className={styles.form} placeholder="Confirmar contraseña" />
            </Item>
            <Item>
                <div className={styles.buton}>
                    <Button className={styles.form} htmlType='submit' title='Registrate Hoy' />
                </div>
            </Item>

        </Form>
    )
}

export default Register