import styled from "styled-components";
import { colorPicker, ColorType } from "../Shared/colors";
interface ButtonProps {
    variant?: 'outlined' | 'filled',
    colorType?: ColorType,
    height?: string,
    width?: string,
}

export const Button = styled.button`
    background-color: ${(props: ButtonProps) => props.variant === 'filled' ? props.colorType ? colorPicker(props.colorType) : 'inherit' : 'inherit'};
    height: ${(props: ButtonProps) => props.height ? props.height : '50px'};
    width: ${(props: ButtonProps) => props.width ? props.width : '75px'};
    border-radius: 5px;
    border: unset;
    font-size: 16px;
    font-weight: 700;
    color: ${(props: ButtonProps) => props.variant === 'outlined' && props.colorType ? colorPicker(props.colorType) : 'white'};
    &:hover {
        background-color: ${(props: ButtonProps) => props.variant === 'outlined' ? props.colorType ? colorPicker(props.colorType) : 'inherit' : props.colorType};
        color: white;
        cursor: pointer
    }
`


export const EmployeeCard = styled.div(() => ({
    minWidth: '50%',
    borderRadius: '10px',
    boxShadow: '1px 1px 3px grey',
    margin: '10px',
    width: '500px',
    padding: '10px',
}))

export const Appbar = styled.nav(() => ({
    backgroundColor: 'whitesmoke',
    // backgroundColor: '#f07705',
    paddingInline: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}))

export const AppBarText = styled.h3(() => ({
    color: 'black',
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
export const EmployeeActionButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
`
export const Paper = styled.div`
    box-shadow: 1px 1px 3px grey;
    border-radius: 10px;
    min-height: 300px;
    padding: 15px;
    margin-top: 20px
`