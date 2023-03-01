import React, { useState } from "react";
import styled from "styled-components";

interface ISectionContainer {
    selected?: boolean
}

const SectionContainer = styled.section<ISectionContainer>`
    width: 194px;
    padding: 8px 0px;
    height: 88px;
    border-radius: 8px;
    border: 1px solid;
    border-color: ${({ selected }) => selected ? "#002F52" : "#EB9B00"};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 400;
    margin: 10px;
    cursor: ${({ selected }) => selected ? "default" : "pointer"};
    background: ${({ selected }) => selected ? "linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)" : "#FFFFFF"};

    header {
        color: ${({ selected }) => selected ? "#FFFFFF" : "#EB9B00"};
    }

    strong {
        color: ${({ selected }) => selected ? "#FFFFFF" : "#EB9B00"};
        font-weight: 700;
        font-size: 16px;
    }

    footer {
        color: ${({ selected }) => selected ? "#FFFFFF" : "rgba(0, 0, 0, 0.54)"};
    }
`;



export interface AbGrupoOpcao {
    id: number,
    titulo: string,
    valor: string,
    rodape: string
}

export interface AbGrupoOpcoesProps {
    opcoes: AbGrupoOpcao[],
    valorInicial?: AbGrupoOpcao | null,
    onChange?: (opcao: AbGrupoOpcao) => void
}

export function AbGrupoOpcoes({ opcoes, valorInicial, onChange }: AbGrupoOpcoesProps) {
    const [selecionado, setSelecionado] = useState<AbGrupoOpcao | null>(valorInicial ?? null);

    function aoSelecionar(opcao: AbGrupoOpcao): void {
        setSelecionado(opcao);

        if(onChange) {
            onChange(opcao);
        }
    }

    return (
        <>
            {opcoes.map(opcao => {
                return (
                    <SectionContainer
                        key={opcao.id}
                        selected={selecionado?.id === opcao.id}
                        onClick={() => aoSelecionar(opcao)}
                    >
                        <header>{opcao.titulo}</header>
                        <strong>{opcao.valor}</strong>
                        <footer>{opcao.rodape}</footer>
                    </SectionContainer>
                )
            })}
        </>
    )
}