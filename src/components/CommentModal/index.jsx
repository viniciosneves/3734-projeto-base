'use client'

import { useRef } from "react";
import { IconButton } from "../IconButton"
import { Chat } from "../icons/Chat"
import { Modal } from "../Modal";

import styles from './commentmodal.module.css'
import { SubmitButton } from "./SubmitButton";

export const CommentModal = ({ onSubmit }) => {
    const modalRef = useRef(null);

    const openModal = () => {
        modalRef.current.openModal();
    };
    return (<>
        <Modal ref={modalRef}>
            <form action={onSubmit} onSubmit={() => modalRef.current.closeModal()}>
                <div className={styles.body}>
                    <h3>Deixe seu comentário sobre o post:</h3>
                    <textarea required rows={8} name="text" placeholder="Digite aqui..." />
                </div>
                <div className={styles.footer}>
                    <SubmitButton />
                </div>
            </form>
        </Modal>
        <IconButton
            icon={<Chat />}
            onClick={openModal}
        />
    </>)
}