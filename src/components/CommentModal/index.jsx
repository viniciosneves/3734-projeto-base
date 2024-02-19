'use client'

import { useRef } from "react";
import { IconButton } from "../IconButton"
import { Chat } from "../icons/Chat"
import { Modal } from "../Modal";

import styles from './commentmodal.module.css'
import { SubmitButton } from "../SubmitButton";
import { Textarea } from "../Textarea";

export const CommentModal = ({ onSubmit }) => {
    const modalRef = useRef(null);

    const openModal = () => {
        modalRef.current.openModal();
    };
    return (<>
        <Modal ref={modalRef}>
            <form action={onSubmit} onSubmit={() => modalRef.current.closeModal()}>
                <h3 className={styles.title}>Deixe seu comentário sobre o post:</h3>
                <Textarea required rows={8} name="text" placeholder="Digite aqui..." />
                <div className={styles.footer}>
                    <SubmitButton>
                        Comentar
                    </SubmitButton>
                </div>
            </form>
        </Modal>
        <IconButton
            icon={<Chat />}
            onClick={openModal}
        />
    </>)
}