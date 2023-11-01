import { ITarefas } from "../../Types/ITarefas"
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import formataData from "../../Utils/Formatacao/formataData";
import style from '../Modal/Modal.module.scss'

interface Props{
    tarefa: ITarefas
    isModalOpen: boolean,
    openModal: () => void
}

export default function Modals({isModalOpen, openModal, tarefa} : Props){

    return <>
        <Modal
            open={isModalOpen}
            onClose={openModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <div className={style.modal} >
                <p className={style.modalTitle}>Detalhes da Nota</p>

                <div className={style.modalDetails}>
                    <p className={style.modalDetailsTitle}>Data Final:</p>
                    <p id="modal-modal-title">
                        {formataData(tarefa.data)}
                    </p>
                    <p className={style.modalDetailsTitle}>Descrição:</p>
                    <p id="modal-modal-description" className={style.modalDetailsDescription}>
                        {tarefa.descricao}
                    </p>
                </div>
            </div>
        </Modal>
    </>
}