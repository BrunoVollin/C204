export abstract class ServiceInfo {
    abstract getInfo(): InfoType;
}

export default class ServiceInfoMock extends ServiceInfo {
    getInfo(): InfoType {
        return {
            nomeDoProfessor: "João",
            horarioDeAtendimento: "10:00",
            periodo: 1
        }
    }
}