export type WithClassName<T> = T & {
  className?: string;
};

export type IconProps = WithClassName<React.SVGProps<SVGSVGElement>>;
