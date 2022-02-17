
import { LinkProps } from "next/link";

export const paths: PathProps = {

    index: {
        href: '/',
        as: '/'
    }
    
}

const pathKeys = {
    index: 'index',
    logIn: 'logIn',
    signIn: 'signIn'
} as const

type PathProps = {
    [pathKeys.index]: LinkProps,
}