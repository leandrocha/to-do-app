export default function formataData(data: string) {
    var [ano, mes, dia] = data.split('-');
    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
}