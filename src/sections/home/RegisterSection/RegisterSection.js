import { Button } from "../../../components"
import { Input, Form } from 'antd';
import styles from './registersection.module.css'
import img2 from '../../../assets/images/img2.png'

const { Item } = Form;
const { Password } = Input;

function RegisterSection() {

    const formSuccess = (datos) => {
        console.log('Submitted form:', datos)
    }
    const formFailed = (error) => {
        console.log('Error:', error)
    }

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.title}>No lo olvides, registrate hoy y recibe un <span className={styles.desc}>30% de descuento</span> en tu primer viaje.
                </div>
            </div>

            <div className={styles.img}>
                <img src={img2}></img>

                <div className={styles.cont}>
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
                            name='First Last Name'
                            rules={[{
                                required: true,
                                message: 'Please enter your first last name'
                            }]}>
                            <Input className={styles.form} placeholder="Primer Apellido" />
                        </Item>

                        <Item
                            name='Second Last Name'
                            rules={[{
                                required: true,
                                message: 'Please enter your second last name'
                            }]}>
                            <Input className={styles.form} placeholder="Segundo Apellido" />
                        </Item>

                        <Item
                            name='Phone number'
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
                            name='Confirm Password'
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
                </div>
            </div>
            <div className={styles.textend}>
                © 2022 Trajinera Concept All rigths reserved
            </div>
        </div>

    )
}
export default RegisterSection