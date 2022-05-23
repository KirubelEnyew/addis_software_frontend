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

interface AlertProps {
    alertType?: ColorType
}

export const Alert = styled.div`
    font-family: sans-serif;
    border-radius: 5px;
    height: 50px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    padding-left: 5px;
    padding-right: 5px;
    color: white;
    background-color: ${(props: AlertProps) => props.alertType ? colorPicker(props.alertType) : 'inherit'};
    `
// background-color: ${({ alertType }: AlertProps) => alertType && colorPicker(alertType)}

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
    color: 'rgba(61,61,61, 0.7)',
    fontFamily: 'sans-serif',
    fontWeight: '500',
    cursor: 'pointer'
}))

export const FormLabel = styled.h5(() => ({
    color: 'rgba(61,61,61, 0.7)',
    fontFamily: 'sans-serif',
    fontWeight: '500',
    margin: '10px',
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
    height: '40px',
    width: '450px',
    backgroundColor: 'white',
    fontSize: '16px',
    paddingLeft: '10px',
    '::placeholder': {
        color: 'grey'
    },
    border: 'none'
}))

interface CenteredContainerProps {
    padding?: string,
    margin?: string
}

export const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${(props: CenteredContainerProps)=> props.margin};
    padding: ${(props: CenteredContainerProps)=> props.padding}
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
    background-color: whitesmoke;
    min-height: 300px;
    padding: 15px;
    margin-top: 20px
`