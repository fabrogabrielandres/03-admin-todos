'use client';

import { createTodo, deleteTodoTrues } from "@/app/helpers/Todos/handlers";
import { createTodoWithServerAction } from "@/app/helpers/Todos/handles-server-action";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { IoTrashOutline } from "react-icons/io5";
import * as yup from 'yup';




export const NewTodoWithServerAction = () => {

    // const router = useRouter()

    const handleDelete = async () => {
        // console.log("llame a borrar");
        // await deleteTodoTrues()
        // router.refresh()
    }



    const SignupSchema = yup.object().shape({
        description: yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
    })


    return (
        <Formik
            initialValues={{
                description: ""
            }}
            onSubmit={async (filds, { resetForm }) => {

                try {
                    await createTodoWithServerAction(filds.description)
                    resetForm();
                    console.log("hice submit with server action");
                } catch (error) {

                }
            }}
            validationSchema={SignupSchema}


        >
            {(props) => (
                <div className="flex flex-col">
                    <Form onSubmit={props.handleSubmit} className='flex w-full'>
                        {/* <input type="text"
                        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
                        placeholder="¿Qué necesita ser hecho?"
                        /> */}


                        <Field type="text" name='description' placeholder="what do you need to do" className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all" />

                        <button type='submit' className="rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
                            disabled={!props.isValid}
                        >
                            Create
                        </button>

                        <span className='flex flex-1'></span>

                        <button
                            type="button"
                            onClick={handleDelete}
                            className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
                        >
                            <IoTrashOutline />
                            Delete
                        </button>
                    </Form>
                    <ErrorMessage name="description" />

                </div>
            )}
        </Formik >
    )
}