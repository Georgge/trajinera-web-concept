import Button from '../Button/Button'
import { Input, Form } from 'antd';
import styles from './loginregister.module.css'
import { Register } from '..';
import logo3 from '../../assets/icons/logo3.png'
import img3 from '../../assets/images/img3.png'

const { Item } = Form;
const { Password } = Input;

function LoginRegister() {

    const formSuccess = (datos) => {
        console.log('Submitted form:', datos)
    }
    const formFailed = (error) => {
        console.log('Error:', error)
    }

    return (
        <div>
            <div className={styles.logo}>
                <img src={logo3} ></img>
            </div>
            <div className={styles.container}>

                <div className={styles.login}>
                    <div className={styles.img}>
                        <img src={img3}></img>
                    </div>
                    <Form name="Form"
                        onFinish={formSuccess}
                        onFinishFailed={formFailed}>

                        <Item
                            name='UserOrEmail'
                            rules={[{
                                required: true,
                                message: 'Please enter your User or email'
                            }]}>
                            <Input className={styles.form} placeholder="Usuario o correo electrónico" />
                        </Item>

                        <Item
                            name='Password'
                            rules={[{
                                required: true,
                                message: 'Please enter your password'
                            }]}>
                            <Password className={styles.form} placeholder="Contraseña" />
                        </Item>

                        <Item>
                            <div className={styles.buton}>
                                <Button className={styles.form} htmlType='submit' title='Iniciar sesión' />
                            </div>
                        </Item>
                    </Form>

                </div>
                <div className={styles.count}>
                    <div className={styles.text}>
                        Crear una cuenta
                    </div>
                    <p className={styles.texti}>Ingresa tus datos para crear una cuenta</p>
                    <Register />

                </div>
            </div>
        </div>
    )
}

export default LoginRegister