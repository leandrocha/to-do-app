import style from "./Botao.module.scss";

interface Props {
children : string,
onClick? : (e: React.MouseEvent) => void
}

export default function Botao({children, onClick} : Props){
        return <button className={style.Botao} onClick={onClick}>{children}</button>    
}