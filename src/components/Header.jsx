import React, { useState } from 'react';
import classes from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai";
import menu from "../data";
// import Form from '../pages/Form';

console.log("datos", menu);



export default function Header() {
const [item, setItem] = useState("")
const [menuOpen, setMenuOpen] = useState(false);

const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
};

const onSubmit = evento => {
  console.log("EVENTO=====",evento);
}

   
  return (
      <>
            <header className={classes.header} >
        <div className={classes.header__content}>
            <h2 className={classes.header__content__logo} >ItTask</h2>
       
        <nav className={`${classes.header__content__nav} ${
                        menuOpen  ? classes.isMenu : ""
                    }`} >
            <ul>
                {
                    menu.map((e) => {
                        return (
                            <li id={e.name} onClick={ev => {setItem(ev.target.id)}} key={e.id} >{e.name}</li>
                        )
                    } )
                }
            </ul>
        </nav>
        <div className={classes.header__content__toggle} >
        {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
        </div>
        </div>
        

        {/* <Form /> */}
    </header>

    <div className={classes.bienvenida__wrapper} >
        {/* aquí va el componente de bienvenida */}

        <h2>Hola, bienvenido, sabemos que quieres viajar en <br /> <span className={classes.bienvenida__empresa} >{item}</span>, <br /> por favor diligencia el siguiente formulario:</h2>

        </div>

      </>
    

  )
}
