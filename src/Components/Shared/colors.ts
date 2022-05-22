export const commonColors = {
    primary: '#1976d2a1',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    dark: '#343a40',
    light: '#f8f9fa'
}

export type ColorType = 'primary' | 'secondary' | 'error' | 'success' | 'warning'

export function colorPicker(type: ColorType) {
    switch (type) {
        case 'primary':
            return commonColors.primary
        case 'secondary':
            return commonColors.secondary
        case 'error':
            return commonColors.error
        case 'success':
            return commonColors.success
        case 'warning':
            return commonColors.warning
        default:
            return commonColors.info
    }
}