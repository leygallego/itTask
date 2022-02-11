import React from "react";
import { useForm } from "react-hook-form";
import FormCss from "./Form.module.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  

  const onSubmit = (evento) => {
    console.log("EVENTO en FORM=====", evento);
    toast('Tu información fue enviada con éxito, estaremos en contacto contigo', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        reset();
  };

  return (
    <>
 <div className={FormCss.contenedor}>
  <div className={FormCss.container} id="container">
      <div className={FormCss.loginCentrado}>
      <form onSubmit={handleSubmit(onSubmit)}>
          {/* Input Nombre */}
        <div className={`${FormCss.inputBonito} ${errors.nombre && FormCss.error}`}>
          <label className={FormCss.labelName} className={FormCss.textoInput}>
            <span className={FormCss.contentName}>Nombre</span>
          </label>
          <input
            type="text"
            autoComplete="off"
            name="nombre"
            placeholder="Nombre completo"
            {...register("nombre", {
              required: {
                value: true,
                message: "Necesitas este campo",
              },
              minLength: {
                value: 6,
                message: "El debe tener al menos 6 caracteres",
              },
            })}
          />
          {errors.nombre && <span className={errors.email && FormCss.mensajeError}>{errors.nombre.message}</span>}
        </div>
            {/* Input Email */}
        <div className={`${FormCss.inputBonito} ${errors.email && FormCss.error}`}>
          <label className={FormCss.labelName} className={FormCss.textoInput}>
            <span className={FormCss.contentName}>Correo</span>
          </label>
          <input
            type="text"
            autoComplete="off"
            name="email"
            placeholder="ejemplo@gmail.com"
            {...register("email", {
              required: {
                value: true,
                message: "Necesitas este campo",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "El formato no es correcto",
              },
            })}
          />
          {errors.email && <span className={errors.email && FormCss.mensajeError}>{errors.email.message}</span>}
        </div>
        {/* Input Celular */}
        <div className={`${FormCss.inputBonito} ${errors.celular && FormCss.error}`}>
          <label className={FormCss.labelName} className={FormCss.textoInput}>
            <span className={FormCss.contentName}>Celular</span>
          </label>
          <input
            type="number"
            name="celular"
            placeholder="celular"
            {...register("celular", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
              minLength: {
                value: 10,
                message: "El número celular debe tener 10 caracteres",
              },
              maxLength: {
                value: 10,
                message: "El número ingresado supera los 10 caracteres",
              },
            })}
          />
          {errors.celular && (
            <span className={errors.celular && FormCss.mensajeError}>{errors.celular.message} </span>
          )}
        </div>
            {/* Input Rango edad */}
        <div className={`${FormCss.inputBonito} ${errors.rango && FormCss.error}`}>
          <label className="" className="">
            <span className="">Rango Edad</span>
          </label>
          <input
            type="number"
            name="rango"
            placeholder="ingresa tu edad"
            min="18"
            max="100"
            {...register("rango", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
            })}
          />
          {errors.rango && <span className={errors.email && FormCss.mensajeError}>{errors.rango.message} </span>}
        </div>

        <button type="submit" value="submit" className={`${FormCss.btn}`}>
          Enviar
        </button>
        <ToastContainer />
       
      </form>
      </div>
      </div>
      </div>
    </>
  );
}
