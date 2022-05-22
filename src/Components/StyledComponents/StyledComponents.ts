import styled from "styled-components";

interface ButtonProps {
    color: string,
    variant: 'outlined' | 'filled',
    textColor: string,
    height: string,
    width: string,
}

export const Button = styled.button(({ color, variant, textColor, height, width }: Partial<ButtonProps>) => ({
    backgroundColor: variant === 'outlined' ? 'inherit' : color,
    minHeight: height ? height : '50px',
    minWidth: width ? width : '75px',
    borderRadius: '5px',
    color: textColor
}));

interface CardProps {
    color: string,
    height: string,
    width: string,
    padding: string,
    margin: string,
}

export const Card = styled.div(({ color, height, width, margin, padding }: Partial<CardProps>) => ({
    backgroundColor: color,
    minHeight: height,
    minWidth: width,
    borderRadius: '10%',
    boxShadow: '1px 1px 3px grey',
    padding,
    margin,
}))

export const Appbar = styled.nav(() => ({
    backgroundColor: '#f07705',
    display: 'flex',
    justifyContent: 'space-between'
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