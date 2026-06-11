import { Element } from '../../../declarations';
export default function useConditionProperties(): {
    getConditionExpressionValue: (element: Element) => string;
    setConditionExpressionValue: (element: Element, value: string | number | null | undefined) => void;
    getFormatValue: (element: Element) => string;
    setFormatValue: (element: Element, value: string | number | null | undefined) => void;
    getResourceValue: (element: Element) => string;
    setResourceValue: (element: Element, value: string | number | null | undefined) => void;
    getScriptValue: (element: Element) => string;
    setScriptValue: (element: Element, value: string | number | null | undefined) => void;
    resetConditionExpression: (element: Element) => void;
};
