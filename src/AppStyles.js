import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    chessListTitle: {
        textAlign: 'center'
    },

    chessList: {
        width: '50%',
    },

    formContainer: {
        width: '50%',
        margin: 'auto'
    },

    blue: {
        backgroundColor: 'blue'
    },

    hover: {
        ':hover': {
            backgroundColor: 'red'
        }
    },

    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        }
    }
});