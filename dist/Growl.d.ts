declare type GrowlProps = {
    active?: boolean;
    message: string;
    onDismissed: () => void;
};
export declare const Growl: ({ active, message, onDismissed }: GrowlProps) => JSX.Element;
export {};
