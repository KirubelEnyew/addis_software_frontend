import styled from "styled-components";
import { commonColors } from "../Shared/colors";

interface ButtonProps {
    color: string,
    variant: 'outlined' | 'filled',
    textColor: string,
    height: string,
    width: string,
}

export const Button = styled.button(({ color, variant, textColor, height, width }: Partial<ButtonProps>) => ({
    backgroundColor: variant === 'outlined' ? 'inherit' : color ? color : commonColors.primary,
    minHeight: height ? height : '50px',
    width: width ? width : '200px',
    borderRadius: '5px',
    border: 'none',
    color: textColor ? textColor : 'white',
    fontSize: '16px',
    fontWeight: 'bolder',
    ':disabled': {
        backgroundColor: 'whitesmoke',
        color: 'grey'
    },
    ':hover': {
        cursor: 'pointer',
        color: 'whitesmoke',
        backgroundColor: '#1976d2'
    }
}));

interface CardProps {
    color: string,
    height: string,
    width: string,
    padding: string,
    margin: string,
    display: string,
    alignItems: string,
    justifyContent: string
}

export const Card = styled.div(({ color, height, width, margin, padding }: Partial<CardProps>) => ({
    backgroundColor: color,
    minHeight: height,
    minWidth: width,
    borderRadius: '10px',
    boxShadow: '1px 1px 3px grey',
    margin: margin ? margin : '10px',
    width: '450px',
    padding: padding ? padding : '10px',
}))

export const Appbar = styled.nav(() => ({
    backgroundColor: '#f07705',
    paddingInline: '10px',
    display: 'flex',
    justifyContent: 'space-between'
}))

export const AppBarText = styled.h3(() => ({
    color: 'whitesmoke',
    fontFamily: 'sans-serif',
    cursor: 'pointer'
}))
interface TypographyProps {
    fontSize: string,
    color: string,
    fontFamily: string
}

export const Typography = styled.text(({ color, fontFamily, fontSize }: Partial<TypographyProps>) => ({
    fontSize,
    fontFamily,
    color
}))

export const TextField = styled.input(() => ({
    borderRadius: '5px',
    height: '50px',
    width: '450px',
    fontSize: '16px',
    paddingLeft: '10px',
    '::placeholder': {
        color: 'grey'
    },
    borderColor: 'grey'
}))

export const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SpacedContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const CardButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-top: 10px;
    margin-right: 20px
`
export const Paper = styled.div`
    box-shadow: 1px 1px 3px grey;
    border-radius: 10px;
    min-height: 300px;
    padding: 15px;
    margin-top: 20px
`