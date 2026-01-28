import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

export const LoginPage = () => {
    const dispatch = useDispatch();

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="glass p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">Welcome Back</h2>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={(values, { resetForm }) => {
                        dispatch(login(values))
                            .unwrap()
                            .then(() => toast.success("Logged in successfully!"))
                            .catch(() => toast.error("Invalid email or password"));
                        resetForm();
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col gap-4">
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
                                {isSubmitting ? 'Logging in...' : 'Log In'}
                            </button>
                        </Form>
                    )}
                </Formik>
                <p className="mt-6 text-center text-gray-400">
                    Don't have an account? <Link to="/register" className="text-blue-400 hover:text-blue-300">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};
