import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface ITextAreaProps {
	placeholder: string;
	error?: FieldError | undefined
}

type TypeTextAreaPropsFields = TextareaHTMLAttributes<HTMLTextAreaElement> &
	ITextAreaProps;

export interface ITextArea extends TypeTextAreaPropsFields {}
