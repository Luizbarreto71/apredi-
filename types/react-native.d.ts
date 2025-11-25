/// <reference types="react" />

declare module "react-native" {
  import * as React from "react";
  
  export interface ViewProps extends React.ComponentPropsWithoutRef<typeof React.Component> {
    style?: any;
    children?: React.ReactNode;
    [key: string]: any;
  }
  
  export interface TextProps extends React.ComponentPropsWithoutRef<typeof React.Component> {
    style?: any;
    children?: React.ReactNode;
    [key: string]: any;
  }
  
  export const View: React.ComponentType<ViewProps>;
  export const Text: React.ComponentType<TextProps>;
  export const ScrollView: React.ComponentType<any>;
  export const TouchableOpacity: React.ComponentType<any>;
  export const TextInput: React.ComponentType<any>;
  export const StyleSheet: any;
  export const Alert: any;
}




