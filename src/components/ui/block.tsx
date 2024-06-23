import { CSSProperties } from "react";
import { BlockProps } from "./types";

const Block = (props: BlockProps) => {

    const getStyles = () => {
        const styles: CSSProperties = {};

        styles.margin = props.m && getSize(props.m);
        styles.marginLeft = props.ml && getSize(props.ml);
        styles.marginRight = props.mr && getSize(props.mr);
        styles.marginTop = props.mt && getSize(props.mt);
        styles.marginBottom = props.mb && getSize(props.mb);

        styles.padding = props.p && getSize(props.p);
        styles.paddingLeft = props.pl && getSize(props.pl);
        styles.paddingRight = props.pr && getSize(props.pr);
        styles.paddingTop = props.pt && getSize(props.pt);
        styles.paddingBottom = props.pb && getSize(props.pb);

        return styles;
    };

    const getSize = (val?: number) => {
        if (!val) {
            return "inherit";
        }
        return (val * 10) + "px";
    };


    return <div {...props} style={props.style ? {...props.style, ...getStyles()} : getStyles()}>{props.children}</div>
};

export default Block;