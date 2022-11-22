// У typescript какие-то непонятки с сассом, так что пока так

declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}
