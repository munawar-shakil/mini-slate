import React from 'react';
import { cx, css } from 'emotion';

export const FileBlock = React.forwardRef(({ className, ...props }, ref) => {
    const { node, attributes, isFocused } = props;
    const pdfSrc = 'https://image.flaticon.com/icons/svg/29/29587.svg';
    const txtSrc = 'https://cdn0.iconfinder.com/data/icons/file-extension-line-icon/100/txtb-512.png';
    
    const downloadTrigger = React.createRef();
    let triggerDownload = () => {
        const link = document.createElement('a');
        link.download = node.data.get('alt');
        link.href = node.data.get('src');
        link.target='_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <a
            ref={downloadTrigger}
            href={node.data.get('src')}
            download
            className={
                cx(
                    className,
                    css`
                        display: block;
                        max-width: 100%;
                        max-height: 20em;
                        box-shadow: ${isFocused ? '0 0 0 2px blue;' : 'none'};
                    `
                )
            }
        >
            <img
                {...attributes}
                ref={ref}
                src={node.data.get('fileType') === 'pdf' ? pdfSrc : txtSrc}
                alt={node.data.get('alt')}
                onClick={triggerDownload}
                className={
                    cx(
                        className,
                        css`
                            cursor: pointer;
                            display: block;
                            max-width: 100%;
                            max-height: 20em;
                            box-shadow: ${isFocused ? '0 0 0 2px blue;' : 'none'};
                        `
                    )
                }
            />
        </a>
    );
})