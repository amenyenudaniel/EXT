import React from 'react'

type Props = {
    btStyles?: string,
    bg?: string,
    icon?: React.ReactNode,
    text?: string,
    placeholder?: string,
    value?: string,
    type?: string,
    name?: string,
    readOnly?: boolean,
    onClick?: React.MouseEventHandler<HTMLElement>
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}


export const Input = ({
    btStyles,
    bg,
    icon,
    text,
    placeholder,
    value,
    type,
    name,
    readOnly,
    onClick,
    onChange
}: Props) => {





    return (
        <div className={`${bg} flex items-center py-2 px-4 rounded-lg`}>
            <input
                type={type}
                name={name}
                value={value}
                className="w-full bg-transparent h-full outline-none text-sm font-normal font-Work-Sans border-0"
                placeholder={placeholder}
                onChange={onChange}
                readOnly={readOnly}
            />

            <button
                className={`flex min-w-fit gap-2 justify-center items-center text-black px-4 py-2 ${btStyles}`}
                onClick={onClick}
            >   
                {icon}
                {text}
            </button>
        </div>
    );
};