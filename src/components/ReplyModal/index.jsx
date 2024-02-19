'use client'

import { useRef } from "react";
import { Modal } from "../Modal";

import styles from './replymodal.module.css'
import { Textarea } from "../Textarea";
import { SubmitButton } from "../SubmitButton";
import { Comment } from "../Comment";
import { replyComment } from "@/actions";

export const ReplyModal = ({ comment }) => {
    const modalRef = useRef(null);

    const openModal = () => {
        modalRef.current.openModal();
    };


    return (<>
        <Modal ref={modalRef}>
            <form onSubmit={() => modalRef.current.closeModal()}>
                <div className={styles.body}>
                    <Comment comment={comment}/>
                </div>
                <div className={styles.divider}></div>
                <Textarea required rows={8} name="text" placeholder="Digite aqui..." />
                <div className={styles.footer}>
                    <SubmitButton>
                        Responder
                    </SubmitButton>
                </div>
            </form>
        </Modal>
        <button className={styles.btn} onClick={openModal}>
            Responder
        </button>
    </>)
}