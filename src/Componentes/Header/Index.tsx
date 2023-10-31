import style from '../Header/Header.module.scss'

export default function Header() {
    return <div className={style.HeaderApp}>
      <h1 className={style.HeaderAppTitulo}>To Do APP</h1>
      <h3>By Leandro Rocha</h3>
    </div>
}