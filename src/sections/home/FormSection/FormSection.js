import { Button } from "../../../components"
import { Input, Form } from 'antd';
import styles from './formsection.module.css'
import img2 from '../../../assets/images/img2.png'

const { Item } = Form;
const { Password } = Input;

function FormSection() {

    const formSuccess = (datos) => {
        console.log('Formulario enviado:', datos)
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
                    <Form name="formulario"
                        onFinish={formSuccess}
                        onFinishFailed={formFailed}>

                        <Item
                            name='Nombre'
                            rules={[{
                                required: true,
                                message: 'Por favor ingresa tu nombre'
                            }]}>
                            <Input className={styles.form} placeholder="Nombre" />
                        </Item>

                        <Item
                            name='Primer Apellido'
                            rules={[{
                                required: true,
                                message: 'Por favor ingresa tu primer apellido'
                            }]}>
                            <Input className={styles.form} placeholder="Primer Apellido" />
                        </Item>

                        <Item
                            name='Segundo Apellido'
                            rules={[{
                                required: true,
                                message: 'Por favor ingresa tu segundo apellido'
                            }]}>
                            <Input className={styles.form} placeholder="Segundo Apellido" />
                        </Item>

                        <Item
                            name='Número Telefónico'
                            rules={[{
                                required: true,
                                message: 'Por favor ingresa tu número telefónico'
                            }]}>
                            <Input className={styles.form} placeholder="Número Telefónico" />
                        </Item>

                        <Item
                            name='contraseña'
                            rules={[{
                                required: true,
                                message: 'Por favor ingresa tu constraseña'
                            }]}>
                            <Password className={styles.form} placeholder="Contraseña" />
                        </Item>

                        <Item
                            name='Confirmar Contraseña'
                            dependencies={['contraseña']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor confirma tu contraseña!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('contraseña') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Las constraseñas no coinciden!'));
                                    },
                                }),
                            ]}
                        >
                            <Password className={styles.form} placeholder="Confirmar Contraseña" />
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
export default FormSection