'use client'

import { faDroplet, faEnvelope, faGlobe, faPhone, faPlay, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import parse from "html-react-parser"

export function ComponentButton(props: any) {

    let icon = null;
    let text = props.text;

    if (props.text.includes('®')) {
        text = props.text.replace('®', '<span className="relative -top-2 lg:-top-2">&reg;</span>');
    }

    switch (props.icon) {
        case 'question':
            icon = faQuestion
            break;
        case 'email':
            icon = faEnvelope
            break;
        case 'web':
            icon = faGlobe
            break;
        case 'demo':
            icon = faPlay
            break;
        case 'drop':
            icon = faDroplet
            break;
        default:
            icon = faPhone
    }
    return (
        <motion.a className={`${props.type === 'white' ? 'buttonWhiteSmaller' : 'buttonSmaller'} button block`}
            // whileHover={{
            //     scale: 0.95,
            // }}

            href={props.href}

            target={props.targetBlank ? '_blank' : '_self'}
        >
            {parse(text)}
            <FontAwesomeIcon icon={icon} className="w-5 ml-3" />
        </motion.a>
    )
}