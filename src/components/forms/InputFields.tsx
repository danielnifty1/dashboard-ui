import React, { HtmlHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
type InputFieldProps={
    label:string,
    type?:string,
    register?:any,
    name:string,
    defaultValue?:string,
    error?:FieldError,
    inputProps?:React.InputHTMLAttributes<HTMLInputElement>
    
}

const InputFields = ({
    label,
    type="text",
    register,
    name,
    defaultValue,
    error,
    inputProps
}:InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4 ">
    <label className="text-xs text-gray-400">{label}</label>
    <input
      type={type}
      {...register(name)}
      className="ring-gray-300 ring-[1.5px] p-2 rounded-md text-sm w-full"
      {...inputProps}
      defaultValue={defaultValue}
    />
    {error?.message && (
      <p className="text-xs text-red-400">{error.message}</p>
    )}
   
  </div>
  )
}

export default InputFields
