function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    return (
        <div>
            <p>Result: {fourTimesFive}</p>
        </div>
    );
}

export default ImpliedReturn;