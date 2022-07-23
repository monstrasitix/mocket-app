export type Props = {
    name: IconType;
};


export const Icon = ({ name }: Props) => (
    <i className={`fa fa-${name}`} />
);
