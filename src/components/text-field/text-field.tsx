
import { TextFieldProps } from "./text-field.props"
import {FieldHookConfig, useField,ErrorMessage} from 'formik'

const TextField = ({...props}:TextFieldProps & FieldHookConfig<string>) => {
  const [field, meta,] = useField(props)

  return (
      <div className="inline-block w-full">
      <label className={`inline-block w-full ${meta.touched && meta.error && "border-red-700 border-2"}`}>
              <input {...props} {...field} className="input" />
          </label>
          <p className=" text-red-600 ">
            <ErrorMessage name={field.name}/>
          </p>
</div>
  )
}

export default  TextField 
