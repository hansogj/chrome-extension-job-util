export default (base: string, args: string[] = []) => () => (window.location.href = [ base ].concat(args).join('&'));
