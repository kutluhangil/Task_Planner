import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const RegisterSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(7, 'Password too short!').required('Required'),
});

export const RegisterPage = () => {
    const dispatch = useDispatch();

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="glass p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">Create Account</h2>
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={RegisterSchema}
                    onSubmit={(values, { resetForm }) => {
                        dispatch(register(values))
                            .unwrap()
                            .then(() => toast.success("Welcome!"))
                            .catch(e => toast.error("Registration failed: " + e));
                        resetForm();
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col gap-4">
                            <div>
                                <Field type="text" name="name" placeholder="Username" className="input-field" />
                                <ErrorMessage name="name" component="div" className="text-red-400 text-sm mt-1" />
                            </div>

                            <div>
                                <Field type="email" name="email" placeholder="Email" className="input-field" />
                                <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
                            </div>

                            <div>
                                <Field type="password" name="password" placeholder="Password" className="input-field" />
                                <ErrorMessage name="password" component="div" className="text-red-400 text-sm mt-1" />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-bold transition-all shadow-lg shadow-blue-500/30 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Registering...' : 'Sign Up'}
                            </button>
                        </Form>
                    )}
                </Formik>
                <p className="mt-6 text-center text-gray-400">
                    Already have an account? <Link to="/login" className="text-blue-400 hover:text-blue-300">Log In</Link>
                </p>
            </div>
        </div>
    );
};
