import React, { ReactNode } from "react";
import {
    ModalBackground,
    ModalContainer
} from "./styles";

export interface AbModalProps {
    children: ReactNode
}

export function AbModal({ children }: AbModalProps) {
    return (
        <ModalBackground>
            <ModalContainer>
                {children}
            </ModalContainer>
        </ModalBackground>
    )
}