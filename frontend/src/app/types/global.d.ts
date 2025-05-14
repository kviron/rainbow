declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }

    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare global {
    const __IS_DEV__: boolean;
    const __API__: string;
    const __PROJECT__: 'storybook' | 'frontend' | 'jest';

    export type Nullable<T> = T | null;
    export type NotRequired<T> = T | undefined;
    export type UUID = string;
    export type DeepPartial<T> = T extends object
      ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
      : T;

    export type OptionalRecord<K extends PropertyKey, T> = {
        [P in K]?: T;
    };

    /**
     * Преобразует все поля типа T в их исходный тип или null
     * @typeParam T - исходный тип
     */
    export type NullableFields<T> = {
        [K in keyof T]: T[K] | null;
    };
}

export {};