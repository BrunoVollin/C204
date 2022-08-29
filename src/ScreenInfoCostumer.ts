import ServiceInfoMock, { ServiceInfo } from "./ScreenInfo";

export default class ServiceInfoConsumer {
  service: ServiceInfo;

  constructor(ServiceInfo: ServiceInfo) {
    this.service = ServiceInfo;
  }

  setInfo() {
    const info: InfoType = this.service.getInfo();

    if (info.periodo < 1) {
      throw new Error("Periodo não pode ser menor que 1");
    }
    if (info.periodo > 10) {
      throw new Error("Periodo não pode ser maior que 10");
    }

    return `
    <div>
      <h1>${info.nomeDoProfessor}</h1>
      <h2>${info.horarioDeAtendimento}</h2>
      <h3>${info.periodo}</h3>
    </div>`.replace(/\s/g, "");
  }
}

