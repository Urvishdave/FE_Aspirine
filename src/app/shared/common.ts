export function isNotEmptyString<T>(value: T):boolean {
    return isDefined(value) && typeof (value) === "string" && value !== '';
}

export function isDefined<T>(value: T):boolean {
    return value !== undefined && value !== null;
}