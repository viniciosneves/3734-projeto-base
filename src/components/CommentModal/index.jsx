'use client'

import { useRef } from "react";
import { IconButton } from "../IconButton"
import { Chat } from "../icons/Chat"
import { Modal } from "../Modal";

export const CommentModal = () => {
    const modalRef = useRef(null);

    const openModal = () => {
        modalRef.current.openModal();
    };
    return (<>
        <Modal ref={modalRef}>
            <h1>olá mundo</h1>
        </Modal>
        <IconButton
            icon={<Chat />}
            onClick={openModal}
        />
    </>)
}