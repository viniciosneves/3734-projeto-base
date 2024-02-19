'use client';

import { useFormStatus } from 'react-dom'
import { Spinner } from "../Spinner";
import { ArrowFoward } from "../icons/ArrowFoward";
import { Button } from "../Button";

export const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <Button aria-disabled={pending} type="submit">
            Comentar {pending ? <Spinner /> : <ArrowFoward />}
        </Button>
    )
}