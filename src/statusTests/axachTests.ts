async function TestAXACH(): Promise<boolean> {
    try {
        const response = await fetch("https://www.axa.ch");
        console.log(response)
        return response.ok;
    } catch (error) {
        return false;
    }
}
export {TestAXACH}
