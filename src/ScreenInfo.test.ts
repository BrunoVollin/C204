import ServiceInfoMock from './ScreenInfo';
import ScreenInfoCostumer from './ScreenInfoCostumer';


describe("Testando a classe ScreenInfo", () => {
  it("Deve retornar seguindo o padrão HTML", () => {
    const mock = new ServiceInfoMock();
    const costumer = new ScreenInfoCostumer(mock);

    const info = costumer.setInfo();
    expect(info).toBe(`
    <div>
        <h1>João</h1>
        <h2>10:00</h2>
        <h3>1</h3>
    </div>
    `.replace(/\s/g, ""));
  })

  it("Deve ser englobado por uma tag div", () => {
    const mock = new ServiceInfoMock();
    const costumer = new ScreenInfoCostumer(mock);

    const info = costumer.setInfo();
    expect(info).toMatch(/<div>.*<\/div>/);
  })
  it("Deve Conter o padrão de horas", () => {
    const mock = new ServiceInfoMock();
    const costumer = new ScreenInfoCostumer(mock);

    const info = costumer.setInfo();
    expect(info).toMatch(/<h2>\d*:\d*<\/h2>/);
  })

  it("Não deve haver quebra de linhas", () => {
    const mock = new ServiceInfoMock();
    const costumer = new ScreenInfoCostumer(mock);

    const info = costumer.setInfo();
    expect(info).not.toMatch(/\n/);
  })

  it("Não deve conter numeros dentro da tag h1", () => {
    const mock = new ServiceInfoMock();
    const costumer = new ScreenInfoCostumer(mock);

    const info = costumer.setInfo();
    console.log(info);
    expect(info).not.toMatch(/<h1>\d*<\/h1>/);
  })

  it("Não deve conter texto dentro da tag h2 e h3", () => {
    const mock = new ServiceInfoMock();
    const costumer = new ScreenInfoCostumer(mock);

    const info = costumer.setInfo();
    console.log(info);
    expect(info).not.toMatch(/<h2>\D*<\/h2>/);
  })
});
