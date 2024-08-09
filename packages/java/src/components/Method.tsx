import { Child, Children, code } from "@alloy-js/core";
import { AccessModifier } from "../access-modifier.js";
import { collectModifiers, ObjectModifiers } from "../object-modifiers.js";
import { Parameters } from "./Parameters.js";
import { useJavaNamePolicy } from "../name-policy.js";

export interface MethodProps extends ObjectModifiers {
  accessModifier?: AccessModifier;
  name: string;
  return?: Child;
  parameters?: Record<string, Child>;
  children?: Children;
}

export function Method(props: MethodProps) {
  const params = <Parameters parameters={props.parameters}></Parameters>;
  const name = useJavaNamePolicy().getName(props.name, "method");
  const modifiers = collectModifiers(props);
  return code`
        ${props.accessModifier}${modifiers} ${props.return ?? "void"} ${name}(${params}) {
          ${props.children}
        }
    `;
}