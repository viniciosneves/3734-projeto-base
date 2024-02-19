'use client'

import React, { useRef, useImperativeHandle, forwardRef } from 'react';

import styles from './modal.module.css'

export const Modal = forwardRef(({ children }, ref) => {
    const dialogRef = useRef(null);
    const closeModal = () => {
        dialogRef.current.close();
    }
    useImperativeHandle(ref, () => ({
        openModal: () => {
            dialogRef.current.showModal();
        },
        closeModal,
    }));

    return (
        <>
            <dialog className={styles.dialog} ref={dialogRef}>
                <div className={styles.header}>
                    <button type="button" className={styles.header} onClick={closeModal} autoFocus>X</button>
                </div>
                {children}
            </dialog>
        </>
    );
});
