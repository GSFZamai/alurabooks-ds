import React from "react";
import { TagContainer, TagLabel } from "./styles";

export interface TagProps {
    texto: string
}

export function Tag({ texto }: TagProps) {
    return (
        <TagContainer>
            <TagLabel>
                {texto}
            </TagLabel>
        </TagContainer>
    )
}