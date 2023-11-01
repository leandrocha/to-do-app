import { ITarefas } from "../../Types/ITarefas"
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import formataData from "../../Utils/Formatacao/formataData";
import styles from '../Modal/Modal.module.scss'

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
            <div className={styles.modal} >
                <p id="modal-modal-title" className={styles.modalTitle}>
                    {formataData(tarefa.data)}
                </p>
                <p id="modal-modal-description" className={styles.modalDescription}>
                    {tarefa.descricao}
                </p>
            </div>
        </Modal>
    </>
}