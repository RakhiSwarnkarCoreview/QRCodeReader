import React from "react";
import { TextField, Button } from "@material-ui/core";
import { useController, useForm } from "react-hook-form";

const  Input =({ control, name }) =>{
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return <TextField {...inputProps} inputRef={ref} />;
}

const ReactHooks =()=> {
  const { control , handleSubmit} = useForm();

  const onSubmit = (data) =>{
      console.log(data)
  }
  
  return <form onSubmit={handleSubmit(onSubmit)}>
      <div>First Name:<Input name="firstName" control={control} />;</div>
      <div>Last Name:<Input name="lastName" control={control} />;</div>
      <Button type="submit"  variant="contained" >Submit</Button>
  </form>
}

export default ReactHooks;