import Link, { LinkProps } from "next/link";
import React, { cloneElement, ReactElement } from "react";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";


interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
    onCheckIsActive: (teste: boolean) => void;
}

export function ActiveLink({
    children, 
    shouldMatchExactHref = false, 
    onCheckIsActive,
    ...rest
}: ActiveLinkProps) {
    
    let isActive = false;
    const { asPath } = useRouter();

    if(shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true;
    }

    if(!shouldMatchExactHref && 
    (asPath.startsWith(String(rest.href)) ||
    asPath.startsWith(String(rest.as))
    )) {
        isActive = true;
    }
    
    useEffect(() => {
        onCheckIsActive(isActive);
    },[isActive])
    
    return (
        <Link {...rest}>
            {cloneElement(children, { color: isActive ? 'red.400' : 'gray.500'})}
        </Link>
    );
}