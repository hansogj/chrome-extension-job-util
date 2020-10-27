export const copyStringToClipboard = (str: string) => {
    const el = document.createElement('textarea')
    el.value = str
    // @ts-ignore
    el.style = { position: 'absolute', left: '-9999px' }
    el.setAttribute('readonly', '')
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
}

export const serialize = (base: string, args: string[] = []) =>
    `${base}${args.length ? '?' : ''}${args.join('&')}`

export const navigate = (base: string, args: string[] = []) => () =>
    (window.location.href = serialize(base, args))

export const localHost = (port: string) => ['http://localhost', port].join(':')

export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
