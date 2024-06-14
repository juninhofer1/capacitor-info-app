import { InfoDevice } from 'capacitor-info-device';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    InfoDevice.echo({ value: inputValue })
}
