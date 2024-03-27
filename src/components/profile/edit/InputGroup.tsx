/** @format */

import Label from "@/components/Label";
import React from "react";
import Input from "@/shared/Input";

export interface InputGroupPropsType {
    label: string;
    name?: string;
    onchange?: (value: any) => void;
    children?: any;
    placeholder?: string;
}
const InputGroup: React.FC<InputGroupPropsType> = ({
    label,
    name,
    onchange,
    children,
    placeholder
}) => {
    return (
        <div className="form-group">
            <Label>{label}</Label>
            {children
                ? children
                : name && <Input onChange={onchange} placeholder={placeholder} name={name} />}
        </div>
    );
};

export default InputGroup;
